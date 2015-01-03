(ns cljs.looperscript.vector-fns
  (:require [cljs.looperscript.interp-rhythms :refer [rhythms-interp]]))

(defn log [& args]
  (.log js/console (apply str args)))

(defn shuffle* [v] shuffle)

(def range* range)

(defn rand-range [floor ceil]
  (-> (rand)
      (* (- ceil floor))
      (+ floor)))

(defn rand-int*
  ([b] (rand-int (inc b)))
  ([a b] (+ a (rand-int (inc (- b a))))))

(def rand-nth* rand-nth)

(def take* take)

(defn rand-exp-range [floor ceil exp]
  (-> (rand)
      (Math/pow exp)
      (* (- ceil floor))
      (+ floor)))

(defn handle-v-keyword [n d]
  (-> (repeat n (/ d n))))

;; XXX: Minor lameness: rand-weighted-zip zips so rand-weighted can unzip.
(defn rand-weighted [& v]
  (let [[vs ws] (apply map vector (partition 2 v))
        cum-ws (reductions + 0 ws)
        sum (last cum-ws)
        r (* (rand) sum)]
    (some #(if (< (nth cum-ws %) r) (nth vs %))
          (range (dec (count vs)) -1 -1))))

(defn rand-weighted-either-or [odds a b]
  (if (< (rand) odds) a b))

(defn rand-weighted-zip [vs ws]
  (rand-weighted (interleave vs ws)))

(defn rand-hold [odds-of-change options]
  (let [current-choice (atom (if (fn? options)
                               (options)
                               (rand-nth options)))]
    (fn []
      (if (< odds-of-change (rand))
        @current-choice
        (reset! current-choice
                (if (fn? options)
                  (options)
                  (rand-nth (remove #(= @current-choice %) options))))))))

(defn rand-walk [max-step v]
  (let [rand-int-range (fn [a b] (+ a (rand-int (inc (- b a)))))
        max-v (dec (count v))
        pos (atom (rand-int (count v)))]
    (fn []
      (nth v (reset! pos
                     (rand-int-range (max 0 (- @pos max-step))
                                     (min max-v (+ @pos max-step))))))))

(defn rand-walk1 [max-step v]
  (let [rand-int-range (fn [a b] (+ a (rand-int (inc (- b a)))))
        max-v (dec (count v))
        pos (atom (rand-int (count v)))]
    (fn []
      (nth v (reset! pos
                     (loop []
                       (let [new-pos (rand-int-range (max 0 (- @pos max-step))
                                                     (min max-v (+ @pos max-step)))]
                         (if (= new-pos @pos) (recur) new-pos))))))))

(defn in [t v]
  (let [factor (/ t (reduce + v))]
    (map #(* factor %) v)))

(defn cycle* [v]
  (let [pos (atom -1)
        v-len (count v)]
    (fn [] (nth v (swap! pos #(mod (inc %) v-len))))))

(defn flatten* [& args]
  (flatten args))

(def nth* nth)

(defn scale-nth [scale degree]
  (+ (* 12 (Math/floor (/ degree (count scale))))
     (nth scale (mod degree (count scale)))))

(defn scale-pattern [scale pattern degrees]
  (for [d degrees
        p pattern]
    (scale-nth scale (+ d p))))

(defn transpose-scale [degree scale]
  (->> scale
      (map #(mod (+ % degree) 12))
      sort))

(defn scale-range [floor ceil scale]
  (let [a (dec (int (/ floor 12)))
        b (inc (inc (/ ceil 12)))]
    (->> (for [o (range a b)
               s scale]
           (+ (* 12 o) s))
         (filter #(<= floor % ceil)))))

(defn scale-range-sweep [floor ceil scale]
  (let [sr (vec (scale-range floor ceil scale))]
    (into sr (-> sr reverse rest drop-last))))

(defn mild-shuffle [degree col]
  (->> col
       (map-indexed (fn [idx n] [(+ idx (rand-int (dec degree))) n]))
       sort
       (map second)))

(defn log* [v]
  (log v)
  v)

(defn memo* [id f]
  (let [memo-fn (fn [cnt] (f))
        counts (atom {})]))

(defn bass-fret [string fret]
  (+ -17 fret (* -5 (dec string))))

(def user-vars (atom {}))

(defn set-user-var [k v]
  (swap! user-vars assoc k v))

(defn user [k default]
  (fn []
    (get @user-vars k default)))

(defn test-mod [n]
  [:modifier-fn (fn [x] (* x n))])

(defn over-mod [& layers]
  (log :over-mod layers)
  (let [last-res (atom 0)
        cum-time-in (atom 0)]
    [:modifier-fn
     (fn [time-in]
       (let [new-res (rhythms-interp layers (swap! cum-time-in + time-in))
             res-diff (- new-res @last-res)]
         (reset! last-res new-res)
         res-diff))]))

(defn insert-randomly [v x]  ; helper for grow
  (let [pos (rand-int (inc (count v)))]
    (-> (take pos v)
        vec
        (into [x])
        (into (drop pos v)))))

(defn grow [odds new-note-fn]
  (let [accum (atom [])]
    (fn []
      (if (or (empty? @accum) (< (rand) odds))
        (swap! accum insert-randomly (new-note-fn))
        @accum))))

(defn add-dethunk-test [& args]
  (let [dethunk (fn dethunk [x]
                  (if (fn? x)
                    (dethunk (x)) x))]
    (apply + (map dethunk args))))

;; XXX: figure out how this should be done. Where should variable-map live? This
;; seems like a dependency injection-type of problem.
(def variable-map (atom {}))

(defn reset-variables! [] (reset! variable-map {}))

(defn define-variable [s x]
  (swap! variable-map assoc s x)
  nil)

(defn get-variable [s]
  (get @variable-map s))

(def vec-fns
  {:shuffle shuffle
   :mild-shuffle mild-shuffle
   :rand rand-nth*
   :take take*
   :rand-int rand-int*
   :rand-range rand-range
   :rand-exp-range rand-exp-range
   :rand-hold rand-hold
   :weight rand-weighted
   :weight1 rand-weighted-either-or
   :weight2 rand-weighted-zip
   :walk rand-walk
   :walk1 rand-walk1
   :in in
   :x repeat
   :repeatedly repeatedly
   :range range*
   :cycle cycle*
   :pattern scale-pattern
   :scale-range scale-range
   :scale-range-sweep scale-range-sweep
   :transpose-scale transpose-scale
   :flatten flatten*
   :log log*
   :user user
   :bass-fret bass-fret
   :nth nth*
   :vector vector
   :interleave interleave
   :sort sort
   :over over-mod
   :grow grow
   :add add-dethunk-test
   :def define-variable
   :get get-variable})
