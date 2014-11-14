(ns cljs.looperscript.looperscript
"UPCOMING STEPS:
  -fix pending-notes / stop issue
  -pitched samples?
  -try real-time bpm slider
TECH STEPS:
  -check out more of web audio, especially LFO
  -iOS compatibility
  -mp3 caching
  -explore limits of mobile webapp background consistency
FURTHER STEPS:
  -integrate nested rhythmic layers
  -develop proper language for randoms, cycles, repeats, etc
  -daytime / nighttime mode
  -real-time loop updates
  -diff updates to text to require minimum recalculation
  -synth controls (pan?)
  -templating for beginners
  -visual interfaces (esp. on/off grid)"
  (:require-macros [hiccups.core :as h])
  (:require [cljs.looperscript.address-bar :as get]
            [domina :as dom]
            [domina.xpath :as xp]
            [hiccups.runtime :as hiccupsrt]
            [domina.events :as ev]
            [shoreleave.remotes.http-rpc :refer [remote-callback]]
            [cljs.reader :refer [read-string]]
            [cljs.looperscript.audio :as audio]
            [cljs.looperscript.interpret :as parse]))

(js* "var L = cljs.looperscript.looperscript")

(defn log [& args]
  (let [s (apply str (conj (vec args) \newline))]
    (dom/append! (dom/by-id "console") s)
    (.log js/console s)))

;;;;;;;;;;

(def ctx audio/ctx)
(def note-queue (atom []))
(def playing-interval (atom nil))
(def queue-time-interval 1) ; seconds
(def queue-time-extra 0.5)
(def parts (atom {}))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn now []
  (aget audio/ctx "currentTime"))

(defn note->freq [n]
  (* 261.625565
     (Math/pow 2 (/ n 12))))

(defn ratio->freq [r]
  (* 261.625565 r))

;; XXX: use these!
(def part-defaults
  {:sound [[:drum-code "r"]]
   :time [1]
   :volume [1]
   :filter [nil]
   :pan [0]
   })

(defn update-parts! []
  (let [parts-text (-> "looper-text" dom/by-id dom/value)
        start-time (now)
        new-parts (-> parts-text
                      parse/looper-parse
                      parse/looper-transform)
        parse-time (- (now) start-time)]
    (log "Parse time: " parse-time)
    (reset! parts new-parts)))

(defn maybe-random2 [x]
  (if (and (vector? x)
           (= (first x) :random2))
    (rand-nth (rest x))
    x))

(defn next-note-fn [part start-time]
  (let [elements [:time :sound :volume :filter :pan]
        _ (doseq [e elements])
        element-vecs (zipmap elements
                             (map #(or (get part %)
                                       (get part-defaults %))
                                  elements))
        lengths (zipmap elements
                        (map #(count (element-vecs %)) elements))
        pos (atom 0)
        time-pos (atom start-time)]
    (fn
      ([command]
         (if (= command :time-pos)
           @time-pos))
      ([]
         (let [res (zipmap elements (map
                                     #(-> (nth (get element-vecs %)
                                               (mod @pos (get lengths %)))
                                          maybe-random2)
                                     elements))
               res (-> res
                       (assoc :start-time @time-pos))]
            (swap! pos inc)
            (swap! time-pos + (res :time))
            res)))))

(defn kill-playing-interval []
  (when @playing-interval
    (js/clearInterval @playing-interval)
    (reset! playing-interval nil)))

(defn stop []
  (kill-playing-interval)
  (audio/kill-sounds))

(defn schedule-note [n]
  (let [sound (:sound n)
        sound (cond (number? sound)
                    (note->freq sound)
                    (and (vector? sound) (= (first sound) :ratio))
                    (-> sound second ratio->freq)
                    (and (vector? sound) (= (first sound) :drum-code))
                    (-> sound second audio/drum-codes)
                    :else sound)
        dur (:time n)
        vol (:volume n)
        filter (:filter n)
        start-time (:start-time n)
        pan (:pan n)
        _ (log pan)
        start-time (if-let [l (get audio/sample-lags sound)]
                     (- start-time l)
                     start-time)
        ]
    (if (number? sound)
      (if filter
        (audio/play-filtered-tone sound start-time dur vol pan filter)
        (audio/play-tone sound start-time dur pan vol))
      (audio/play-sound sound start-time vol))))

(defn play []
  (stop)
  (update-parts!)
  (let [time-pos (+ 0.05 (now))  ; leave time for samples to start early
        next-note-fns (for [p @parts]
                        (next-note-fn p time-pos))
        queue-notes (fn []
                      (let [end-time (+ (now) queue-time-extra queue-time-interval)]
                        (doseq [n-n-fn next-note-fns]
                          (if (< (n-n-fn :time-pos) end-time)
                           (loop []
                             (let [next-note (n-n-fn)]
                               (schedule-note next-note)
                               (if (< (:start-time next-note) end-time)
                                 (recur))))))))]
    (queue-notes)
    (reset! playing-interval
            (js/setInterval queue-notes (* queue-time-interval 1000)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(ev/listen! (dom/by-id "play") :click (fn [e] (play)))
(ev/listen! (dom/by-id "stop") :click (fn [e] (stop)))
(ev/listen! (dom/by-id "link") :click (fn [e] (get/text->link)))

(audio/load-some-drums)
