(ns cljs.looperscript.iterator)

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

(defn get-next-stack-val [stack]
  (let [x (loop [y (-pop! stack)]
            (if (fn? y)
              (recur (y))
              y))]
    (if (and (or (list? x) (vector? x))
             (not (keyword? (first x))))
      (do (doseq [i (reverse x)]
            (push! stack i))
          (get-next-stack-val stack))
      x)))

(defn iterator [v]
  (let [stack (atom [])]
    (fn []
      (if (empty? @stack)
        (vec-push! stack v))
      (get-next-stack-val stack))))
