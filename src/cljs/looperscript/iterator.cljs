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

(defn apply-modifiers [mods x]
  (reduce
   (fn [n m]
     (condp = (first m)
       :fraction (* n (second m))
       :plus (+ n (second m))))
   x mods))

(defn iterator [v]
  (let [stack (atom [])
        modifiers (atom [])]
    (fn []
      (loop []
        (if (empty? @stack)
          (do (reset! modifiers [])
              (vec-push! stack v)))
        (let [x (get-next-stack-val stack)]
          (if (modifier? x)
            ; map dethunk could be [(first (second x)) (dethunk (second (second  x)))]:
            (do (swap! modifiers conj (map dethunk (second x)))
                (recur))
            (apply-modifiers @modifiers x)))))))
