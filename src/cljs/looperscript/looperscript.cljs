(ns cljs.looperscript.looperscript

  ;; (:require-macros [hiccups.core :as h])
  (:require-macros [cljs.core.async.macros :as a])
  (:require [cljs.looperscript.address-bar :as get]
            [domina :as dom]
            ;; [domina.xpath :as xp]
            ;; [hiccups.runtime :as hiccupsrt]
            [domina.events :as ev]
            [instaparse.core :as insta]
            ;; [shoreleave.remotes.http-rpc :refer [remote-callback]]
            [cljs.reader :refer [read-string]]
            ;; [cljs.core.async :as a]
            [cljs.looperscript.audio :as audio]
            [cljs.looperscript.interpret :as parse]
            [cljs.looperscript.iterator :as iter]))


(js* "var L = cljs.looperscript.looperscript")

(defn log [& args]
  (let [s (apply str (conj (vec args) \newline))]
    (dom/append! (dom/by-id "console") (str s "<p />"))
    (.log js/console s)))

(defn log-> [& args]
  (do (apply log args)
      (first args)))

;;;;;;;;;;


(def ctx audio/ctx)
(def playing-interval (atom nil))
(def queue-time-interval 1) ; seconds
(def queue-time-extra 1.5)
(def params (atom {}))
(def sounding-notes (atom {}))
(def part-defaults
  {:sound [[:drum-code "r"]]
   :synth ["sine"]
   :time [1]
   :volume [1]
   :filter [nil]
   :pan [0]
   :offset [0]
   :overtones [[1]]
   :rate [1]
   :time+ [0]
   :mute [1]
   :skip [1]})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn now [] (aget audio/ctx "currentTime"))

(defn note->freq [n] (* 261.625565 (Math/pow 2 (/ n 12))))

(defn ratio->freq [r] (* 261.625565 r))

(defn dethunk [x]
  (if (fn? x) (x) x))

(defn get-looper-text []
  (-> "looper-text"
      dom/by-id
      dom/value
      ;; (aget "textContent")
      parse/remove-comments))

(defn get-parts []
  (let [parts-text (get-looper-text)
        start-time (now)
        parts (parse/-looper-parse parts-text)]
    (if (insta/failure? parts)
      parts
      (let [ _ (log :tree parts \newline)
            parse-time (- (now) start-time)
            parts (parse/looper-transform parts)
             _ (log :transformed parts \newline)
            transform-time (- (now) start-time)
            [new-params parts] ((juxt first rest) parts)]
        (log "Parse time: (" parse-time ") " transform-time)
        (reset! params new-params)
        parts))))

(defn kill-playing-interval []
  (when @playing-interval
    (js/clearInterval @playing-interval)
    (reset! playing-interval nil)))

(defn kill-sounds []
  (doseq [n (vals @sounding-notes)]
    (.stop n))
  (reset! sounding-notes {}))

(defn stop []
  (kill-playing-interval)
  (kill-sounds))

(def add-note-to-sounding-notes
  (let [sounding-counter (atom 0)]
    (fn [n node]
      (let [id (swap! sounding-counter inc)]
        (swap! sounding-notes assoc id node)
        (aset node "onended" (fn [] (swap! sounding-notes dissoc id)))))))

(defn next-note-fn [part start-time]
  (let [elements [:time :sound :volume :filter :pan :rate :synth :overtones
                  :time+ :mute :skip]
        iterators (zipmap elements
                          (map #(iter/iterator
                                 (or (get part %) (get part-defaults %)))
                               elements))
        time-pos (atom (+ start-time
                          (* (if-let [bpm (:bpm @params)] bpm 1)
                             (first (get part :offset [0])))))]
    (fn
      ([command]
         (if (= command :time-pos)
           @time-pos))
      ([]
        (loop []
          (let [res (-> (zipmap elements (map #((get iterators %)) elements))
                        (assoc :start-time @time-pos)
                        (assoc :overtones [1])
                        (update-in [:time] * (if-let [bpm (:bpm @params)] bpm 1))
                        (update-in [:time+] * (if-let [bpm (:bpm @params)] bpm 1)))]
            (if (>= 0 (res :skip))
              (recur)
              (do (swap! time-pos + (res :time))
                  #_(log :end-of-nnfn res)
                  res))))))))

(defn schedule-note [n]
  (let [sound (:sound n)
        sound (cond (number? sound)
                    (note->freq sound)
                    (and (vector? sound) (= (first sound) :ratio))
                    (-> sound second ratio->freq)
                    (and (vector? sound) (= (first sound) :drum-code))
                    (-> sound second audio/drum-codes)
                    :else sound)
        dur (- (:time n) (:time+ n))
        vol (:volume n)
        filter (:filter n)
        start-time (+ (:start-time n) (:time+ n))
        pan (:pan n)
        rate (:rate n)
        synth (:synth n)
        overtones (:overtones n)
        start-time (if-let [l (get audio/sample-lags sound)]
                     (- start-time (/ l rate))
                     start-time)
        node (if (number? sound)
               (if filter
                 (audio/play-filtered-tone sound start-time dur vol pan filter synth overtones)
                 (audio/play-tone          sound start-time dur vol pan synth overtones))
               (audio/play-sound sound start-time vol rate))]
    (doseq [i (if (coll? node) node [node])]
      (add-note-to-sounding-notes [n (rand)] i))))

(defn log-time [f & args]
  (let [start-time (now)
        res (f)
        run-time (- (now) start-time)]
    (log run-time args)
    res))

(defn play []
  (stop)
  (let [parts (get-parts)]
    (if (insta/failure? parts)
      (log (str (vec parts)))
      (let [time-pos (+ 0.05 (now))  ; leave time for samples to start early
            next-note-fns (for [p parts]
                            (next-note-fn p time-pos))
            queue-notes (fn []
                          (let [end-time (+ (now) queue-time-extra queue-time-interval)]
                            (doseq [n-n-fn next-note-fns]
                              (if (< (n-n-fn :time-pos) end-time)
                                (loop []
                                  (let [next-note (n-n-fn)]
                                    (if (< 0 (:mute next-note))
                                      (schedule-note next-note))
                                    (if (< (:start-time next-note) end-time)
                                      (recur))))))))]
        (queue-notes)
        (reset! playing-interval
                (js/setInterval queue-notes (* queue-time-interval 1000)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(ev/listen! (dom/by-id "play") :click (fn [e] (play)))
(ev/listen! (dom/by-id "stop") :click (fn [e] (stop)))
(ev/listen! (dom/by-id "link") :click (fn [e] (get/text->link)))

(audio/load-some-drums)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
