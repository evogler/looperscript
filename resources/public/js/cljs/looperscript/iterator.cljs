(ns cljs.looperscript.iterator
  (:require [cljs.looperscript.logging :refer [log log->]]))

(defn -pop! [stack]
  (let [res (last @stack)]
    (swap! stack (comp vec drop-last))
    res))

(defn push! [stack x]
  (if-not (nil? x)
    (swap! stack conj x)))

(defn vec-push! [stack v]
  (doseq [i (reverse v)]
    (push! stack i)))

(defn dethunk [x]
  (loop [r x]
    (if (fn? r)
      (recur (r))
      r)))

(defn get-next-stack-val
  ([stack] (get-next-stack-val stack true))
  ([stack preserve-carots?]
     (let [x (-pop! stack)
           preserve? (and (get (meta x) :intact-for-sub-time) preserve-carots?)
           x (if-not preserve? (dethunk x) x)]
       (if (and (or (seq? x) (vector? x))
                (not preserve?)
                (not (keyword? (first x))))
         (do (doseq [i (reverse x)]
               (push! stack i))
             (get-next-stack-val stack))
         x))))

(defn modifier? [x]
  (and (vector? x) (= (first x) :modifier)))

(defn modifier-fn? [x]
  (and (vector? x) (= (first x) :modifier-fn)))

;; namespace for modifiers?
;; modifiers should have binary switch options, e.g. typing justify twice shouldn't justify
;; the result of the first justify

(defn justify [n]
  (let [p (mod n 12)
        oct (- n p)
        [num den] (get {0 [1 1]
                        1 [16 15]
                        2 [9 8]
                        3 [6 5]
                        4 [5 4]
                        5 [4 3]
                        6 [45 32]
                        7 [3 2]
                        8 [8 5]
                        9 [5 3]
                        10 [16 9]
                        11 [15 8]}
                       p)]
    (if-not num n
            (+ oct (* 12 (/ (Math/log (/ num den))
                            (Math/log 2)))))))

(defn apply-modifiers [mods x]
  (reduce
   (fn [n m]
     (if (fn? m)
       (m n)
       (condp = (keyword (first m)) ; XXX: make parser do this
         :fraction (* n (second m))
         :plus-mod (+ n (second m))
         :just (justify n))))
    x mods))

(defn iterator
  ([v] (iterator v true))
  ([v preserve-carots?]
     (let [stack (atom [])
           modifiers (atom [])]
       (fn [& args]
         (loop []
           (if (empty? @stack)
             (do (reset! modifiers [])
                 (vec-push! stack v)))
           (let [x (get-next-stack-val stack preserve-carots?)]
             (cond
              ;; I forget what conditions returned here [], but it was causing problems...
              (or (nil? x) (and (sequential? x) (empty? x)))
              (recur)


              (modifier-fn? x)
              (do (swap! modifiers conj (second x))
                  (recur))

              (modifier? x)
              ;; map dethunk could be [(first (second x)) (dethunk (second (second  x)))]:
              (do (swap! modifiers conj (map dethunk (second x)))
                  (recur))

              :else
              (apply-modifiers @modifiers x))))))))

(defn timed-iterator [v time-v]
  (let [v-iterator (iterator v true)
        time-iterator (iterator time-v)
        get-next-v #(let [next-v (v-iterator)]
                      (cond
                       (and (vector? next-v) (not (keyword? (first next-v))))
                       (iterator next-v false)

                       (fn? next-v)
                       (iterator (next-v) false)

                       :else
                       next-v))
        current-val (atom (get-next-v))
        current-val-expiration-time (atom (time-iterator))]
    (fn [note-time]
      (loop []
        (when (>= note-time @current-val-expiration-time)
          (swap! current-val-expiration-time + (time-iterator))
          (reset! current-val (get-next-v))
          (recur)))
      (dethunk @current-val))))
