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

(defn get-next-stack-val [stack]
  (let [x (dethunk (-pop! stack))]
    (if (and (or (seq? x) (vector? x))
             (not (keyword? (first x))))
      (do (doseq [i (reverse x)]
            (push! stack i))
          (get-next-stack-val stack))
      x)))

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
         :plus (+ n (second m))
         :just (justify n))))
    x mods)
  )

(defn iterator [v]
  (let [stack (atom [])
        modifiers (atom [])]
    (fn []
      (loop []
        (if (empty? @stack)
          (do (reset! modifiers [])
              (vec-push! stack v)))
        (let [x (get-next-stack-val stack)]
          (cond
           (or (nil? x) (and (sequential? x) (empty? x)))
           (recur)

           (modifier-fn? x)
           (do (swap! modifiers conj (second x))
               (recur))

           (modifier? x)
            ; map dethunk could be [(first (second x)) (dethunk (second (second  x)))]:
           (do (swap! modifiers conj (map dethunk (second x)))
                (recur))

           :else
           (apply-modifiers @modifiers x)))))))
