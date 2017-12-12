(ns cljs.looperscript.next-note-fn
  (:require [cljs.looperscript.logging :refer [log log-> break break-val]]
            [cljs.looperscript.globals :refer [current-time-hack]]
            [cljs.looperscript.iterator :as iter]
))

(defonce aspects [:time :sound :volume :filter :pan :rate :synth :overtones :time+ :mute :skip])
(defonce aspect-defaults
  {:sound [[:drum-code "d"]]
   :synth ["sawtooth"]
   :time [1]
   :volume [1]
   :filter [2500]
   :pan [0]
   :offset [0]
   :overtones (with-meta [1]  {:intact-for-sub-time :true})
   :rate [1]
   :time+ [0]
   :mute [1]
   :skip [1]})
(defonce params (atom {}))

;(defn get-bpm []
;  (if-let [bpm (:bpm @params)] bpm 1))

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
;; TODO: rests!
;; NOTE:adjusted-timepos seems kind of hacky to me.
;; maybe I should differentiate part-time and real-time?
;; also, this floating point error correction is lame
;; TODO: check time first, if [:rest ] then don't call other iterators.

(defn next-note-fn [part start-time params]
  (let [iterators (make-iterators part)
        bpm (:bpm params)
        _ (println "YOOO" bpm)
        time-pos (atom (+ start-time
                          (* bpm ;(get-bpm)
                             (first (get part [:offset] [0])))))]
    (fn
      ([command] (if (= command :time-pos) @time-pos))
      ([] (loop []
            (let [adjusted-time-pos (+ 1e-7 (/ (- @time-pos start-time) bpm
                ;;#_(get-bpm)
                ))
                  res-time ((:time iterators) adjusted-time-pos)
                  res {:time res-time}]
              (if (and (sequential? res-time) (= (first res-time) :rest))
                ; If :rest,
                (let [res (-> res
                              (assoc :rest true)
                              (assoc :start-time @time-pos)
                              (update-in [:time] second)
                              (update-in [:time] * bpm #_(get-bpm)))]
                  (do (swap! time-pos + (res :time))
                      res))
                (let [res-v (for [[aspect iter] (dissoc iterators :time)]
                              [aspect (iter adjusted-time-pos)])
                      res (into res res-v)
                      res (-> res
                              (assoc :start-time @time-pos)
                              (update-in [:time] * bpm #_(get-bpm))
                              (update-in [:time+] * bpm #_(get-bpm)))]
                  (if (>= 0 (res :skip))
                    (recur)
                    (do (swap! time-pos + (res :time))
                        res))))))))))
