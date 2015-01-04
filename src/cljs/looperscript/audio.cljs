(ns cljs.looperscript.audio)

(defn log [& args]
  (.log js/console (apply str args)))


;; ; (if (js* "typeof AudioContext === function"))
;; (def ctx (js/webkitAudioContext.))
;; (if (nil? ctx) (def ctx (js/AudioContext.)))

(def ctx (js/AudioContext.))

#_(def pending-sounds (atom #{}))
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

(defn play-sound [fname start-time vol rate]
  (let [buf-s (.createBufferSource ctx)
        gain (.createGain ctx)]
    (aset buf-s "buffer" (get @buffers fname))
    (aset (aget buf-s "playbackRate") "value" rate)
    (aset (aget gain "gain") "value" vol)
    (.connect buf-s gain)
    (.connect gain (aget ctx "destination"))
    (.start buf-s start-time)
    buf-s))

(defn play-tone [freq start-time dur vol pan synth overtones]
  (let [osc (.createOscillator ctx)
        gain (.createGain ctx)]
    (aset osc "type" synth)
    (aset (aget osc "frequency") "value" freq)
    (aset (aget gain "gain") "value" (* 0.1 vol))
    (.connect osc gain)
    (.connect gain (aget ctx "destination"))
    (.start osc start-time)
    (.stop osc (+ start-time dur))
    osc))


(defn play-filtered-tone [freq start-time dur vol pan filt-freq synth overtones]
  (let [oscs (for [i (range (count overtones))] (.createOscillator ctx))
        gain (.createGain ctx)
        q 0.25
        filter (.createBiquadFilter ctx)
         panner (.createPanner ctx)]

    (aset (aget gain "gain") "value" (* 0.1 vol))

    (aset (aget filter "frequency") "value" filt-freq)
    (aset (aget filter "Q") "value" q)

    (aset panner "panningModel" "equalpower")
    (.setPosition panner pan 0 0)

    (.connect gain filter)
    (.connect filter panner)
    (.connect panner (aget ctx "destination"))

    (doseq [[osc o] (map vector oscs overtones)]
      (aset osc "type" synth)
      (aset (aget osc "frequency") "value" (* o freq))
      (.connect osc gain)
      (.start osc start-time)
      (.stop osc (+ start-time dur)))
    oscs))
