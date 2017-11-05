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
            [cljs.looperscript.logging :refer [log log->]]
            [cljs.looperscript.start-time :refer [get-current-start-time reset-clock! now]]))

(declare stop)

(js* "var L = cljs.looperscript.looperscript")
;(js* "var C = cljs.core")
;(js* "var V = cljs.looperscript.vector_fns")

;;;;;;;;;;


(defonce ctx audio/ctx)
(defonce playing (atom false))
(defonce playing-interval (atom nil))
(defonce current-next-note-fns (atom []))
(defonce queue-time-interval 1) ; seconds
(defonce queue-time-extra 2)
(defonce last-queue-time (atom nil))
(defonce params (atom {}))
(defonce sounding-notes (atom {}))
(defonce last-transformed-tree (atom nil))
(defonce aspects [:time :sound :volume :filter :pan :rate :synth :overtones :time+ :mute :skip])
(defonce aspect-defaults
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

(defn log-time [f & args]
  (let [start-time (now)
        res (f)
        run-time (- (now) start-time)]
    (log run-time args)
    res))

(defn note->freq [n]
  (* 261.625565 (Math/pow 2 (/ n 12))))

(defn ratio->freq [r] (* 261.625565 r))

(defn get-bpm []
  (if-let [bpm (:bpm @params)] bpm 1))

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
      (let [;;_ (log :tree parse-tree \newline)
            parse-time (- (now) start-time)
            transformed-tree (parse/looper-transform parse-tree)
;;             _ (log :transformed transformed-tree \newline)
            _ (reset! last-transformed-tree transformed-tree)
            transform-time (- (now) start-time)
            new-params (:params transformed-tree)
            parts (:parts transformed-tree)]
        (log "Parse time: (" parse-time ") " transform-time)
        (reset! params new-params)
        parts))))

;; "sounding-notes" is an atom vector of sounds that haven't finished playing yet.
(def add-note-to-sounding-notes
  (let [sounding-counter (atom 0)]
    (fn [n node]
      (let [id (swap! sounding-counter inc)]
        (swap! sounding-notes assoc id node)
        (aset node "onended" (fn [] (swap! sounding-notes dissoc id)))))))

;; partitions multi-aspects into separate iterators, so that timed-iterators can be
;; applied where necessary
(defn separate-multi-aspects [part]
  (assoc
   (reduce
    (fn [m [k v]]
      (if (= 1 (count k))
        (assoc m (first k) v)
        (reduce into m
                (for [i (range (count k))]
                  {(nth k i) (vec (apply concat (partition 1 (count k) (drop i v))))}))))
    {}
    (vec (dissoc part :name)))
   :name (get part :name)))

;; make-iterators takes a part map and returns a map of iterators.
;; It is where default aspect values are added where needed.

(defn make-iterators [part]
  (let [part (separate-multi-aspects part)
        part-keys (->> (keys part)
                       (remove #(= % :name))
                       (filter keyword?))
        specified-aspects (set part-keys)
        sub-aspects (->> (keys part) (filter vector?) set)
        non-specified-aspects (remove #(contains? specified-aspects %) aspects)]
    (-> (zipmap part-keys (map
                           #(cond
                             (contains? sub-aspects [% :time])
                             (iter/timed-iterator (get part %) (get part [% :time]))
                             :else
                             (iter/iterator (get part %)))
                           part-keys))
        (into (zipmap non-specified-aspects
                      (map #(iter/iterator (get aspect-defaults %)) non-specified-aspects))))))

;; next-note-fn called for each part, each time schedule-note wants another note from
;; that part. next-note-fn:
;; -creates iterators
;; -tracks the time-pos of each part
;; -splits apart multi-aspects
;; -handles accumulation of time and non-accumulation of time+
;; -loops if a note has a positive :skip value
;; -adjusts for BPM!!!
(defn next-note-fn [part start-time]
  (let [iterators (make-iterators part)
        time-pos (atom (+ start-time
                          (* (get-bpm)
                             (first (get part [:offset] [0])))))]
    (fn
      ([command] (if (= command :time-pos) @time-pos))
      ([] (loop []
            (let [;; adjusted-timepos seems kind of hacky to me.
                  ;; maybe I should differentiate part-time and real-time?
                  ;; also, this floating point error correction is lame
                  adjusted-time-pos (+ 1e-7 (/ (- @time-pos start-time) (get-bpm)))
                  res-v (for [[aspect iter] iterators]
                          [aspect (iter adjusted-time-pos)])
                  res (into {} res-v)
                  res (-> res
                          (assoc :start-time @time-pos)
                          (assoc :overtones [1]) ;; XXX
                          (update-in [:time] * (get-bpm))
                          (update-in [:time+] * (get-bpm)))]
              (if (>= 0 (res :skip))
                (recur)
                (do (swap! time-pos + (res :time))
                    #_(log :end-of-nnfn res)
                    res))))))))

(defn schedule-note [n]
  (let [sound (:sound n)
        rate (:rate n)
        start-time (+ (:start-time n) (:time+ n))
        start-time (if (and (vector? sound) (= (first sound) :drum-code))
                     (if-let [l (->> sound second
                                     (get audio/drum-codes)
                                     (get audio/sample-lags))]
                       (- start-time (/ l rate))
                       start-time)
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

(defn reset-button []
  (stop)
  (reset-clock!))

;; TODO: kill notes
;; XXX: probably should rename if not refactor pretty seriously
(defn update*
  ([] (update* (get-parts)))
  ([parts]
     (if (insta/failure? parts)
       (log (str (vec parts)))
       (let [new-nnfns (vec (for [p (vals parts)] (next-note-fn p (get-current-start-time))))]
         ;;  each next-note-fn catch up to current time
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

(defn kill-playing-interval []
  (when @playing-interval
    (js/clearInterval @playing-interval)
    (reset! playing-interval nil)))

(defn play []
  (let [parts (get-parts)]
    (if (nil? (get-current-start-time)) (reset-clock! (+ (now) 0.5)))
    (update* parts)
    (queue-notes)
    (kill-playing-interval)
    (reset! playing-interval
            (js/setInterval queue-notes (* queue-time-interval 1000)))
    (reset! playing true)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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
(ev/listen! (dom/by-id "pause") :click (fn [e] (stop)))
(ev/listen! (dom/by-id "update") :click (fn [e] (update*)))
(ev/listen! (dom/by-id "link") :click (fn [e] (get/text->link)))
(ev/listen! (dom/by-id "stop") :click (fn [e] (reset-button)))

(defn bind-key [name windows-key mac-key f]
  (.addCommand (aget js/editor "commands")
               (js-obj
                "name" name
                "bindKey" (js-obj "win" windows-key
                                  "mac" mac-key)
                "exec" f)))

(bind-key "update" "Ctrl-Shift-u" "Command-Shift-U" (fn [& args] (update*)))
(bind-key "link" "Ctrl-Shift-l" "Command-Shift-L" (fn [e] (get/text->link)) )
(bind-key "stop" "Ctrl-Shift-S" "Command-Shift-S" reset-button)
(bind-key "play" "Ctrol-Shift-P" "Command-Shift-P" play)

(audio/load-some-drums)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
