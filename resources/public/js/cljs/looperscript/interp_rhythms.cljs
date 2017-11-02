(ns cljs.looperscript.interp-rhythms)

(def cumulative
  (memoize
   (fn [v]
     (reductions + 0 v))))

(defn blend [a b percent]
  (+ (* percent b)
     (* (- 1 percent) a)))

(defn whole? [n]
  (zero? (mod n 1)))

(def ints-nth
  (memoize
   (fn ([rhythm n]
         (let [cums (cumulative rhythm)
               rhythm-len (last cums)
               cnt (count rhythm)
               chorus (int (/ n cnt))
               chorus-start (* rhythm-len chorus)
               pos-in-chorus (mod n cnt)]
           (+ (nth cums pos-in-chorus)
              chorus-start))))))

(defn rhythms-interp [rs n]
  (let [r (last rs)
        [r offset] (if-not (map? r) [r 0]
                           [(get r :r) (get r :offset)])
        n (+ n offset)
        rem-rs (drop-last rs)
        whole (whole? n)
        res (if (= (count rs) 1)
              (if whole
                (ints-nth r n)
                (blend (ints-nth r (int n))
                       (ints-nth r (inc (int n)))
                       (mod n 1)))
              (if whole
                (rhythms-interp rem-rs (ints-nth r n))
                (blend
                 (rhythms-interp rem-rs (ints-nth r (int n)))
                 (rhythms-interp rem-rs (ints-nth r (inc (int n))))
                 (mod n 1))))]
    res
    #_(+ res offset)))


;; Going from time to idx
;; (in order to be able to get next time)

(defn upper-bound [f n]
  (loop [i 1]
    (if (> (f i) n)
      i (recur (* i 2)))))

(defn binary-search [f n]
  (loop [l-bound 0 u-bound (upper-bound f n)]
    (if (>= 1 (- u-bound l-bound))
      [l-bound u-bound]
      (do
        (let [new-i (blend l-bound u-bound 0.5)
              new-n (f new-i)
              [l-bound u-bound]
              (if (> new-n n)
                [l-bound new-i]
                [new-i u-bound])]
          (recur l-bound u-bound))))))

(defn pos-in-layered-rhythm [rs t]
  (binary-search (partial rhythms-interp rs) t))

(defn next-hit-of-layered-rhythm [rs t]
  (->> t
    (pos-in-layered-rhythm rs)
    second
    (rhythms-interp rs)))
