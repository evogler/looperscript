(ns cljs.looperscript.looperscript
"UPCOMING STEPS:
  -fix pending-notes / stop issue
  -pitched samples?
  -compensate for sample attack delays
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
  (->> (apply str (conj (vec args) \newline))
      (dom/append! (dom/by-id "console"))))

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
  {:sounds [[:drum-code "h"]]
   :rhythm [1]
   :volumes [1]})

(defn update-parts! []
  (let [parts-text (-> "looper-text" dom/by-id dom/value)
        start-time (now)
        new-parts (-> parts-text
                      parse/looper-parse
                      parse/looper-transform)
        parse-time (- (now) start-time)]
    (log (str "Parse time: " parse-time))
    (reset! parts new-parts)))

(defn next-note-fn [part start-time]
  (let [[rhythm sounds volumes] (map #(get part %) [:rhythm :sounds :volumes])
        cycle-len (if rhythm (count rhythm)
                      (+ 3 (rand-int 8)))
        sound-cycle (if sounds sounds
                        (for [i (range cycle-len)]
                          (rand-nth (keys @audio/buffers))))
        dur-cycle (if rhythm rhythm
                      (for [i (range cycle-len)]
                        (rand-nth [1 2 3])))
        vol-cycle (if volumes volumes [1])
        dur-len (count dur-cycle)
        vol-len (count vol-cycle)
        sound-len (count sound-cycle)
        pos (atom 0)
        time-pos (atom start-time)]
    (fn
      ([command]
         (if (= command :time-pos)
           @time-pos))
      ([]
          (let [dur (nth dur-cycle (mod @pos dur-len))
                sound (nth sound-cycle (mod @pos sound-len))
                vol (nth vol-cycle (mod @pos vol-len))
                [dur sound vol] (map maybe-random2 [dur sound vol])
                res {:dur dur
                     :sound sound
                     :vol vol
                     :start-time @time-pos}]
            (swap! pos inc)
            (swap! time-pos + dur)
            res)))))

(defn kill-playing-interval []
  (when @playing-interval
    (js/clearInterval @playing-interval)
    (reset! playing-interval nil)))

(defn stop []
  (kill-playing-interval)
  (audio/kill-sounds))

(defn maybe-random2 [x]
  (if (and (vector? x)
           (= (first x) :random2))
    (rand-nth (rest x))
    x))

(defn schedule-note [n]
  (let [sound (:sound n)
        sound (cond (number? sound)
                    (note->freq sound)
                    (and (vector? sound) (= (first sound) :ratio))
                    (-> sound second ratio->freq)
                    (and (vector? sound) (= (first sound) :drum-code))
                    (-> sound second audio/drum-codes)
                    :else sound)
        dur (:dur n)
        vol (:vol n)
        start-time (:start-time n)
        start-time (if-let [l (get audio/sample-lags sound)]
                     (- start-time l)
                     start-time)
        ]
    (if (number? sound)
      (audio/play-tone sound start-time dur vol)
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

(log (get audio/sample-lags 2

          ))
