(ns cljs.looperscript.looperscript
"UPCOMING STEPS:
  -fix pending-notes / stop issue
  -multiple parts
  -basic pitches
  -compensate for sample attack delays
TECH STEPS:
  -check out more of web audio, especially LFO
  -iOS compatibility
  -mp3 caching
  -explore limits of mobile webapp background consistency
FURTHER STEPS:
  -real-time loop updates
  -instaparse! >
  -build language
  -synth controls
  -visual interfaces (esp. on/off grid)
  "
  (:require-macros [hiccups.core :as h])
  (:require [domina :as dom]
            [domina.xpath :as xp]
            [hiccups.runtime :as hiccupsrt]
            [domina.events :as ev]
            [shoreleave.remotes.http-rpc :refer [remote-callback]]
            [cljs.reader :refer [read-string]]
            [cljs.looperscript.sounds :as audio]
            ))

(js* "var L = cljs.looperscript.looperscript;")

(defn log [x] (.log js/console x))

;;  <label for="sound-text">sounds: [dbhkrs]</label>
;;  <textarea class="text-area" id="sound-text" autocomplete="on">k 0</textarea><br />

(defn make-html-for-textarea [id label text]
  (h/html
   [:label {:for id} label]
   [:br]
   [:textarea {:id id :class "text-area"} text]
   [:br]))

(def part-prototype
  [[:sound "sounds:" "0 3.86" string->sounds]
   [:rhythm "rhythm:" "1" process-rhythm-ratios]
   [:volume "volumes:" "1" string->numbers]])

(defn make-html-for-part [part-name]
  (h/html
   [:div {:id (str "part-" part-name) :class "part"}
    (for [[id l t]
          part-prototype]
      (make-html-for-textarea (str id "-" part-name) l t))]))

(defn make-html-for-parts [ids]
  (h/html (for [i ids]
     (make-html-for-part i))))

(dom/append! (dom/by-id "parts")
             (make-html-for-parts [1]))
(dom/append! (dom/by-id "parts")
             (make-html-for-parts [2]))


(defn get-current-vals [id]
  (str
   (vec
    (for [p (map first part-prototype)]
      [p
       (-> (str p "-" id)
           dom/by-id
           dom/value)]))))

(log (get-current-vals 1))

(log (audio/test-me 20))

;;;;;;;;;;

(comment

(def ctx (js/AudioContext.))
(def drums ["kick" "snare" "hat" "sidestick" "ride-bell" "ride"])
(def drum-codes
  {"k" "kick" "s" "snare" "h" "hat"
   "d" "sidestick" "b" "ride-bell" "r" "ride"})
(def buffers (atom {}))
(def pending-sounds (atom #{}))
(def sample-folder "/media/webaudio/sample/mp3s/")
(def rhythm (atom nill))
(def sounds (atom nill))
(def volumes (atom nill))
(def note-queue (atom []))
(def playing-interval (atom nill))

(def queue-time-interval-seconds 1)
(def queue-time-extra 0.5)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;



(defn on-decode [buffer fname]
  (swap! buffers assoc fname buffer)
  (.log js/console "loaded" fname (rand-int 99)))

(defn on-mp3-load [req fname]
  (.decodeAudioData ctx (.-response req)
                    #(on-decode % fname)))

(defn load-file [fname]
  (let [req (js/XMLHttpRequest.)
        full-name (str sample-folder fname ".mp3")]
    (.open req "GET" full-name)
    (aset req "responseType" "arraybuffer")
    (aset req "onload" #(on-mp3-load req fname))
    (.send req)))

(defn load-some-drums []
  (doseq [d drums]
    (load-file d)))

(defn play-sound [fname start-time vol]
  (let [buf-s (.createBufferSource ctx)
        gain (.createGain ctx)]
    (aset buf-s "buffer" (get @buffers fname))
    (aset (aget gain "gain") "value" vol)
    (.connect buf-s gain)
    (.connect gain (aget ctx "destination"))
    (.start buf-s start-time)
    #_(swap! pending-sounds conj buf-s)))

(defn kill-sounds []
  (doseq [s @pending-sounds]
    (.stop s))
  (reset! pending-sounds #{}))


(defn note->freq [n]
  (* 261.625565
     (Math/pow 2 (/ n 12))))

(defn ratio->freq [[ _ n d]]
    (* 261.625565 (/ n d)))

(defn play-tone [freq start-time dur vol]
  (let [osc (.createOscillator ctx)
        gain (.createGain ctx)]
    (aset osc "type" "sawtooth")
    (aset (aget osc "frequency") "value" freq)
    (aset (aget gain "gain") "value" (* 0.1 vol))
    (.connect osc gain)
    (.connect gain (aget ctx "destination"))
    (.start osc start-time)
    (.stop osc (+ start-time dur))))

(defn num-or-ratio [s]
  (if-let [[_ n d] (re-find #"([^/]+)/([^/]+)" s)]
    [:ratio (read-string n) (read-string d)]
    (read-string s)))

(defn string->numbers [s]
  (->> s
       (re-seq #"(-?[0-9./]+)")
       (map first)
       (map num-or-ratio)))

(defn process-rhythm-ratios [v]
  (loop [accum []
         rem (string->numbers v)
         num 1 den 1]
    (if (empty? rem) accum
      (let [n (first rem)]
        (if (vector? n)
          (let [[_ nu de] n]
            (recur accum (rest rem) (* nu num) (* de den)))
          (recur (conj accum (* (/ num den) n)) (rest rem) num den))))))

(defn update-rhythm! []
  (let [rhythm-text (dom/value (dom/by-id "rhythm-text"))
        new-rhythm (process-rhythm-ratios rhythm-text)]
    (if (< 0 (count new-rhythm))
      (reset! rhythm new-rhythm))))



(defn token->ratio [s]
  (if-let [r (re-seq #"([0-9.-]+)/([0-9.-]+)" s)]
    (let [[_ n d] (first r)]
      [:ratio (read-string n) (read-string d)])))

(defn token->number [s]
  (if-let [n (re-seq #"[0-9.-]+" s)]
    (read-string (first n))))

(defn process-sound-token [s]
  (some #(% s)
        [drum-codes
         token->ratio
         token->number]))

(defn string->sounds [s]
  (->> s
       (re-seq #"[kshdbr]|[0-9./-]+")
       (map process-sound-token)))

(defn update-sounds! []
  (let [sound-text (-> "sound-text" dom/by-id dom/value)
        new-sounds (string->sounds sound-text)]
    (if (< 0 (count new-sounds))
      (reset! sounds new-sounds))))



(defn update-volumes! []
  (let [volume-text (-> "volume-text" dom/by-id dom/value)
        new-volumes (string->numbers volume-text)]
    (if (< 0 (count new-volumes))
      (reset! volumes new-volumes))))

(defn update-parts! []
  (update-rhythm!)
  (update-sounds!)
  (update-volumes!))

(defn next-note-fn []
  (let [cycle-len (if @rhythm (count @rhythm)
                      (+ 3 (rand-int 8)))
        sound-cycle (if @sounds @sounds
                       (for [i (range cycle-len)]
                         (rand-nth (keys @buffers))))
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
  (kill-sounds))

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
            (log [:time now :time-pos @time-pos :end-time end-time])
            (while (< @time-pos end-time)
              (let [n (next-note)
                    dur (:dur n)
                    sound (:sound n)
                    sound (cond (number? sound)
                                (note->freq sound)
                                (vector? sound)
                                (ratio->freq sound)
                                :else sound)
                    vol (:vol n)]
                (if (number? sound)
                  (play-tone sound @time-pos dur vol)
                  (play-sound sound @time-pos vol))
                (swap! time-pos + dur)))))]
    (queue-notes)
    (reset! playing-interval
            (js/setInterval queue-notes (* queue-time-interval-seconds 1000)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(ev/listen! (dom/by-id "play") :click (fn [e] (play)))
(ev/listen! (dom/by-id "stop") :click (fn [e] (stop)))
(ev/listen! (dom/by-id "rhythm-text") :update (fn [e] (update-rhythm!)))

(load-some-drums)

) ; end comment
