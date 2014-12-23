(ns cljs.looperscript.looperscript

  ;; (:require-macros [hiccups.core :as h])
  ;; (:require-macros [cljs.core.async.macros :as a])
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
            [cljs.looperscript.iterator :as iter]
            [cljs.looperscript.logging :refer [log log->]]))

(declare stop)

(js* "var L = cljs.looperscript.looperscript")

;;;;;;;;;;

(def ctx audio/ctx)
(def playing (atom false))
(def playing-interval (atom nil))
(def current-start-time (atom nil))
(def current-next-note-fns (atom []))
(def queue-time-interval 0.1) ; seconds
(def queue-time-extra 0.1)
(def last-queue-time (atom nil))
(def params (atom {}))
(def sounding-notes (atom {}))
(def aspects [:time :sound :volume :filter :pan :rate :synth :overtones :time+ :mute :skip])
(def aspect-defaults
  {:sound [[:drum-code "r"]]
   :synth ["sawtooth"]
   :time [1]
   :volume [1]
   :filter [2500]
   :pan [0]
   :offset [0]
   :overtones [[1]]
   :rate [1]
   :time+ [0]
   :mute [1]
   :skip [1]})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn now [] (aget audio/ctx "currentTime"))

(defn log-time [f & args]
  (let [start-time (now)
        res (f)
        run-time (- (now) start-time)]
    (log run-time args)
    res))

(defn note->freq [n]
  (* 261.625565 (Math/pow 2 (/ n 12))))

(defn ratio->freq [r] (* 261.625565 r))

(defn dethunk [x]
  (if (fn? x) (x) x))

(defn get-looper-text []
  (-> (.getValue js/editor)

      parse/remove-comments))

(defn get-parts []
  (let [text (get-looper-text)
        start-time (now)
        parse-tree (parse/looper-parse text)]
    (if (insta/failure? parse-tree)
      parse-tree
      (let [ _ (log :tree parse-tree \newline)
            parse-time (- (now) start-time)
            transformed-tree (parse/looper-transform parse-tree)
             _ (log :transformed transformed-tree \newline)
            transform-time (- (now) start-time)
            new-params (:params transformed-tree)
            parts (:parts transformed-tree)]
        (log "Parse time: (" parse-time ") " transform-time)
        (reset! params new-params)
        parts))))

(def add-note-to-sounding-notes
  (let [sounding-counter (atom 0)]
    (fn [n node]
      (let [id (swap! sounding-counter inc)]
        (swap! sounding-notes assoc id node)
        (aset node "onended" (fn [] (swap! sounding-notes dissoc id)))))))

(defn make-iterators [part]
  (let [part-keys (->> (keys part) (remove #(= % :name)))
        specified-aspects (reduce into #{} part-keys)
        non-specified-aspects (remove #(contains? specified-aspects %) aspects)]
    (-> (zipmap part-keys (map #(iter/iterator (get part %)) part-keys))
        (into (zipmap (map vector non-specified-aspects)
                      (map #(iter/iterator (get aspect-defaults %)) non-specified-aspects))))))

(defn next-note-fn [part start-time]
  (let [iterators (make-iterators part)
        time-pos (atom (+ start-time
                          (* (if-let [bpm (:bpm @params)] bpm 1)
                             (first (get part [:offset] [0])))))]
    (fn
      ([command] (if (= command :time-pos) @time-pos))
      ([] (loop []
            (let [res-v (for [[k iter] iterators
                              aspect k]
                          [aspect (iter)])
                  res (into {} res-v)
                  res (-> res
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
        rate (:rate n)
        start-time (+ (:start-time n) (:time+ n))
        start-time (if-let [l (get audio/sample-lags sound)]
                     (- start-time (/ l rate))
                     start-time)]
    (if (>= start-time (now))
      (let [sound (cond (number? sound)
                        (note->freq sound)
                        (and (vector? sound) (= (first sound) :ratio))
                        (-> sound second ratio->freq)
                        (and (vector? sound) (= (first sound) :hz))
                        (-> sound second)
                        (and (vector? sound) (= (first sound) :drum-code))
                        (-> sound second audio/drum-codes)
                        :else sound)
            dur (- (:time n) (:time+ n))
            vol (:volume n)
            filter (:filter n)
            pan (:pan n)
            synth (:synth n)
            overtones (:overtones n)

            node (if (number? sound)
                   (if filter
                     (audio/play-filtered-tone sound start-time dur vol pan filter synth overtones)
                     (audio/play-tone          sound start-time dur vol pan synth overtones))
                   (audio/play-sound sound start-time vol rate))]
        (doseq [i (if (coll? node) node [node])]
          (add-note-to-sounding-notes [n (rand)] i))))))

(defn queue-notes []
  (reset! last-queue-time (now))
  (let [end-time (+ (now) queue-time-extra queue-time-interval)]
    (doseq [n-n-fn @current-next-note-fns]
      (if (< (n-n-fn :time-pos) end-time)
        (loop []
          (let [next-note (n-n-fn)]
            (if (< 0 (:mute next-note))
              (schedule-note next-note))
            (if (< (:start-time next-note) end-time)
              (recur))))))))



(defn reset-clock!
  ([] (reset-clock! nil))
  ([time] (reset! current-start-time time)))

;; TODO: kill notes
;; XXX: probably should rename if not refactor pretty seriously
(defn update
  ([] (update (get-parts)))
  ([parts]
     (if (insta/failure? parts)
       (log (str (vec parts)))
       (let [new-nnfns (vec (for [p (vals parts)] (next-note-fn p @current-start-time)))]
         ;; make each next-note-fn catch up to current time
         (doseq [nnfn new-nnfns]
           (loop []
             (if (and @last-queue-time
                      @playing
                      (< queue-time-interval) (- (now) @last-queue-time))
               (queue-notes))
             (when (> (now) (nnfn :time-pos))
               (nnfn)
               (recur))))
         (reset! current-next-note-fns new-nnfns)))))

(defn play []
  (reset! playing true)
  (let [parts (get-parts)]
    (if (nil? @current-start-time) (reset-clock! (+ (now) 0.25)))
    (update parts)
    (queue-notes)
    (reset! playing-interval
            (js/setInterval queue-notes (* queue-time-interval 1000)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn kill-playing-interval []
  (when @playing-interval
    (js/clearInterval @playing-interval)
    (reset! playing-interval nil)))

(defn kill-sounds []
  (doseq [n (vals @sounding-notes)]
    (.stop n))
  (reset! sounding-notes {}))

;; XXX: stop doesn't stop?
(defn stop []
  (reset! playing false)
  (kill-playing-interval)
  (kill-sounds))

(ev/listen! (dom/by-id "play") :click (fn [e] (play)))
(ev/listen! (dom/by-id "stop") :click (fn [e] (stop)))
(ev/listen! (dom/by-id "update") :click (fn [e] (update)))
(ev/listen! (dom/by-id "link") :click (fn [e] (get/text->link)))
(ev/listen! (dom/by-id "resetclock") :click (fn [e] (reset-clock!)))

;; editor.commands.addCommand({
;;     name: 'myCommand',
;;     bindKey: {win: 'Ctrl-M',  mac: 'Command-M'},
;;     exec: function(editor) {
;;         //...
;;     },
;;     readOnly: true // false if this command should not apply in readOnly mode
;; })

(defn bind-key [name windows-key mac-key f]
  (.addCommand (aget js/editor "commands")
               (js-obj
                "name" name
                "bindKey" (js-obj "win" windows-key
                                  "mac" mac-key)
                "exec" f)))

(bind-key "update" "Ctrl-u" "Command-U" (fn [& args] (update)))
(bind-key "stop" "Ctrl-Shift-S" "Command-Shift-S" stop)

(audio/load-some-drums)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
