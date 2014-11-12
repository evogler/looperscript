(ns cljs.looperscript.looperscript
"UPCOMING STEPS:
  -fix pending-notes / stop issue
  -multiple parts!
  -pitched samples?
  -compensate for sample attack delays
  -try real-time bpm slider
  -random #1 / random #2 !!!
TECH STEPS:
  -check out more of web audio, especially LFO
  -iOS compatibility
  -mp3 caching
  -explore limits of mobile webapp background consistency
FURTHER STEPS:
  -daytime / nighttime mode
  -real-time loop updates
  -synth controls (pan?)
  -templating for beginners
  -visual interfaces (esp. on/off grid)"
  (:require-macros [hiccups.core :as h])
  (:require [domina :as dom]
            [domina.xpath :as xp]
            [hiccups.runtime :as hiccupsrt]
            [domina.events :as ev]
            [shoreleave.remotes.http-rpc :refer [remote-callback]]
            [cljs.reader :refer [read-string]]
            [cljs.looperscript.audio :as audio]
            ;; [cljs.looperscript.ui :as ui]
            [cljs.looperscript.interpret :as parse]))

(js* "var L = cljs.looperscript.looperscript")

#_(defn log [x]
  (.log js/console x))

(defn log [& args]
  (->> (apply str (conj (vec args) \newline))
      (dom/append! (dom/by-id "console"))))



;;;;;;;;;;

(def ctx audio/ctx)
(def rhythm (atom nill))
(def sounds (atom nill))
(def volumes (atom nill))
(def note-queue (atom []))
(def playing-interval (atom nill))
(def queue-time-interval-seconds 1)
(def queue-time-extra 0.5)

(def default-loop-text
  "part 1
rhythm 30/240 2 3 1 2 1
sounds k 0 s 3.14
volumes 1 0.3 0.3")

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn now []
  (aget audio/ctx "currentTime"))

(defn put-text-in-get [s]
  (let [preface (-> js/document .-location .-pathname)]
   (.pushState js/history (js/Object.) "" (str preface s))))

(defn text->link []
  (let [text (-> "looper-text"
                 dom/by-id dom/value
                 js/escape)]
    (put-text-in-get (str "?loop=" text))))

(defn get-text-from-get []
  (->> js/document .-location .-search
       js/unescape))

(defn set-loop-text [s]
  (-> "looper-text" dom/by-id
      (dom/set-value! s)))

(defn load-link->text []
  ;; \s\S includes newlines, unlike "."
  (let [get-text (re-find #"^\?loop=([\s\S]*)" (get-text-from-get))
        loop-text (if get-text
                    (last get-text)
                    default-loop-text)]
    (set-loop-text loop-text)))

(load-link->text)

(defn note->freq [n]
  (* 261.625565
     (Math/pow 2 (/ n 12))))

(defn ratio->freq [r]
  (* 261.625565 r))

(def part-defaults
  {:sounds [[:drum-code "h"]]
   :rhythm [1]
   :volumes [1]
   })


(defn update-parts! []
  (let [parts-text (-> "looper-text" dom/by-id dom/value)
        start-time (now)
        part (-> parts-text
                 parse/looper-parse
                 (#(do (.log js/console (str %)) %))
                 parse/looper-transform
                 (#(do (.log js/console (str %)) %))
                 first)
        parse-time (- (now) start-time)]
    (log part)
    (log (str "Parse time: " parse-time))
    (doseq [[a k] [[sounds :sounds]
                   [rhythm :rhythm]
                   [volumes :volumes]]]
      (reset! a (get part k (get part-defaults k))))))

(defn next-note-fn []
  (let [cycle-len (if @rhythm (count @rhythm)
                      (+ 3 (rand-int 8)))
        sound-cycle (if @sounds @sounds
                        (for [i (range cycle-len)]
                          (rand-nth (keys @audio/buffers))))
        dur-cycle (if @rhythm @rhythm
                      (for [i (range cycle-len)]
                        (rand-nth [1 2 3])))
        vol-cycle (if @volumes @volumes [1])
        dur-len (count dur-cycle)
        vol-len (count vol-cycle)
        sound-len (count sound-cycle)
        pos (atom 0)]
    (fn []
      (let [res {:dur (nth dur-cycle (mod @pos dur-len))
                 :sound (nth sound-cycle (mod @pos sound-len))
                 :vol (nth vol-cycle (mod @pos vol-len))}]
        (swap! pos inc)
        res))))

(defn kill-playing-interval []
  (when @playing-interval
    (js/clearInterval @playing-interval)
    (reset! playing-interval nill)))

(defn stop []
  (kill-playing-interval)
  (audio/kill-sounds))

(defn maybe-random2 [x]
  (if (and (vector? x)
           (= (first x) :random2))
    (rand-nth (rest x))
    x))

(defn play []
  (stop)
  (update-parts!)
  (let [next-note (next-note-fn)
        time-pos (atom (+ 0.0 (aget ctx "currentTime")))
        queue-notes
        (fn []
          (let [now (aget ctx "currentTime")
                end-time (+ now queue-time-extra
                            queue-time-interval-seconds)]
            #_(log [:time now :time-pos @time-pos :end-time end-time])
            (while (< @time-pos end-time)
              (let [n (next-note)
                    dur (:dur n)
                    sound (:sound n)
                    vol (:vol n)
                    [dur sound vol] (map maybe-random2 [dur sound vol])
                    sound (cond (number? sound)
                                (note->freq sound)

                                (and (vector? sound) (= (first sound) :ratio))
                                (-> sound second ratio->freq)

                                (and (vector? sound) (= (first sound) :drum-code))
                                (-> sound second audio/drum-codes)

                                :else sound)

                    ]
                (if (number? sound)
                  (audio/play-tone sound @time-pos dur vol)
                  (audio/play-sound sound @time-pos vol))
                (swap! time-pos + dur)))))]
    (queue-notes)
    (reset! playing-interval
            (js/setInterval queue-notes (* queue-time-interval-seconds 1000)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(ev/listen! (dom/by-id "play") :click (fn [e] (play)))
(ev/listen! (dom/by-id "stop") :click (fn [e] (stop)))
(ev/listen! (dom/by-id "link") :click (fn [e] (text->link)))



(audio/load-some-drums)

#_(->>
 [:s [:part "1" [:aspect [:aspect-keyword "volumes"] [:data [:number "1"] [:number "0.3"] [:number "0.3"]]]]]
 parse/looper-transform
 str
 (.log js/console)
 )

(.log js/console
      (str
       (parse/parse-data [1 2 3]))
      )
