(ns cljs.looperscript.audio)

(def ctx (js/AudioContext.))
(def pending-sounds (atom #{}))
(def drums ["kick" "snare" "hat" "sidestick" "ride-bell" "ride"])
(def sample-lags
  {"kick" 0.026 ; could be later
   "snare" 0.0293
   "hat"  0.0267
   "sidestick" 0.0245
   "ride-bell" 0.0395
   "ride" 0.0443})

(def drum-codes
  {"k" "kick" "s" "snare" "h" "hat"
   "d" "sidestick" "b" "ride-bell" "r" "ride"})
(def buffers (atom {}))
(def sample-folder "/media/webaudio/sample/mp3s/")

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
