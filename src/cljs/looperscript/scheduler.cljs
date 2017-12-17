(ns cljs.looperscript.scheduler
  (:require
    [cljs.looperscript.audio :as audio]
    [cljs.looperscript.start-time :refer [get-current-start-time reset-clock! now]])
)

(defonce sounding-notes (atom {}))
(defonce playing-interval (atom nil))
(defonce last-queue-time (atom nil))
;; The next two values are up for grabs. If update* doesn't take too long,
;; queue-time-extra can be maybe as low as 0.1, or at least 0.25.
;; Something in the range of <~0.25 will be way better for interactive use.
;; If improving update* isn't enough, I'll have to also toggle this based on
;; window focus
(def queue-time-interval 0.05) ; seconds
(def queue-time-extra 2)

(defn note->freq [n]
  (* 261.625565 (Math/pow 2 (/ n 12))))

(defn ratio->freq [r] (* 261.625565 r))

;; "sounding-notes" is an atom vector of sounds that haven't finished playing yet.
(def add-note-to-sounding-notes
  (let [sounding-counter (atom 0)]
    (fn [node-dic]
      (let [id (swap! sounding-counter inc)]
        (swap! sounding-notes assoc id node-dic)
        (aset (:node node-dic) "onended" (fn [] (swap! sounding-notes dissoc id)))))))

(defn kill-sounds []
  (doseq [n (vals @sounding-notes)]
    (.stop (:node n)))
  (reset! sounding-notes {}))

(defn kill-unstarted-sounds []
  (doseq [[id n] @sounding-notes]
    (when (< (now) (:start-time n))
      (.stop (:node n))
      (swap! sounding-notes dissoc id))))

(defn set-playing-interval [f]
  (reset! playing-interval
          (js/setInterval f (* queue-time-interval 1000))))

(defn kill-playing-interval []
  (when @playing-interval
    (js/clearInterval @playing-interval)
    (reset! playing-interval nil)))

(defn schedule-note [n]
  (if (and (sequential? (:sound n))
           (= (first (:sound n)) :chord))
    (doseq [note (flatten (rest (:sound n)))]
      (schedule-note (assoc n :sound note)))
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
;;                     (if filter
                       (audio/play-filtered-tone sound start-time dur vol pan filter synth overtones)
;;                       (audio/play-tone          sound start-time dur vol pan synth overtones)
;;                        )
                     (audio/play-sound sound start-time vol rate))]
          (doseq [i (if (coll? node) node [node])]
            (add-note-to-sounding-notes {:node i :start-time start-time})))))))

(def queue-notes
  (let [current-nnfns (atom [])]
    (fn -qn
      ([nnfns]
        (reset! current-nnfns nnfns)
        (-qn))
      ([]
        (reset! last-queue-time (now))
          (let [end-time (+ (now) queue-time-extra queue-time-interval)]
            (doseq [n-n-fn @current-nnfns]
              (if (< (n-n-fn :time-pos) end-time)
                (loop []
                  (let [next-note (n-n-fn)]
                    (if (and (< 0 (:mute next-note))
                             (not (contains? next-note :rest)))
                      (schedule-note next-note))
                    (if (< (:start-time next-note) end-time)
                      (recur)))))))))))
