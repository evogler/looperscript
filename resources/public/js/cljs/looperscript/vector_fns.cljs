(ns cljs.looperscript.vector-fns
  (:require ; [cemerick.pprng :as rng]
            [cljs.looperscript.interp-rhythms :refer [rhythms-interp]]
            [cljs.looperscript.start-time :refer [now get-current-start-time]]

            [cljs.tools.reader :refer [read-string]]
            [cljs.js :refer [empty-state eval js-eval #_eval-str]]
            [cljs.env :refer [*compiler*]]))

(defn eval-str [s]
  (eval (empty-state)
     (read-string s)
     {:eval       js-eval
      :source-map true
      :context    :expr}
         (fn [result] (:value result))))


(defn log [& args]
  (.log js/console (apply str args)))

(defn shuffle* [v] shuffle)

(defn range*
  ([a] (range (inc a)))
  ([a b] (range a (inc b)))
  ([a b c] (range a (+ b c) c)))

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

(defn rand-walk2 [intervals v]
  (let [max-v (dec (count v))
        pos (atom (rand-int (count v)))]
    (fn []
      (nth v (reset! pos
                     (loop []
                       (let [new-pos (->> intervals
                                          (map #(+ % @pos))
                                          (filter #(<= 0 % max-v))
                                          rand-nth)]
                         (if (= new-pos @pos) (recur) new-pos))))))))

(defn in [t v]
  (let [v (flatten [v])
        factor (/ t (reduce + v))]
    (map #(* factor %) v)))

(defn abs-times [& v]
  (map - (rest v) v))

(defn cycle* [v]
  (let [pos (atom -1)
        v-len (count v)]
    (fn [] (nth v (swap! pos #(mod (inc %) v-len))))))

;; fill-time would be an interesting code-golf candidate
(defn fill-time [t v]
  (let [previous-total (atom nil)
        total (atom 0)]
    (-> (take-while
         #(do
            (reset! previous-total @total)
            (< (swap! total + %) t))
         (if (fn? v) (repeatedly v)
             (cycle (flatten v))))
        vec
        (conj (- t @previous-total)))))

(defn once [x]
  (let [called? (atom false)]
    (fn []
      (when (not @called?)
        (reset! called? true)
        x))))

(defn flatten* [& args]
  (flatten args))

(defn dethunk [x]
  (if (fn? x)
    (dethunk (x))
    x))

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

(defn log* [& args]
  (apply log args)
  (last args))

(defn say [x]
  ;; var msg = new SpeechSynthesisUtterance('Hello World');
  ;;   window.speechSynthesis.speak(msg);
  (->> x
       js/SpeechSynthesisUtterance.
       (.speak (aget js/window "speechSynthesis")))
  x)

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
;;  (log :over-mod layers)
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

(defn step [start-val increment]
  (let [val (atom start-val)]
    (fn []
      (let [res @val]
        (swap! val + increment)
        res))))

(defn time* []
  (- (now) (get-current-start-time)))

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
  (log "defined " s " as " x)
  (swap! variable-map assoc s x)
  nil)

(defn get-variable [s]
  (get @variable-map s))

(defn cache [f]
  (let [output (atom [])
        output-pos (atom 0)
        key-positions (atom {})]
    (fn [key]
      (if-not (contains? @key-positions key)
              (swap! key-positions assoc key 0))
      (let [key-pos (get @key-positions key)]
        (when (= key-pos @output-pos)
          (swap! output conj (f))
          (swap! output-pos inc))
        (let [res (nth @output key-pos)]
          (swap! key-positions update-in [key] inc)
          res)))))

(defn set-rand-seed [& args]
  (if (empty? args)
    (.seedrandom js/Math)
    (.seedrandom js/Math args))
  nil)

(defn plus [& args]
  (apply + args))

(defn sum [& args]
  (apply + (flatten args)))

(defn times [& args]
  (apply * args))

(defn pow* [a b]
  (Math/pow a b))

(defn sin [n]
  (Math/sin n))

(defn cos [n]
  (Math/cos n))

(defn floor [n]
  (Math/floor n))

(def vec-fns
  {:shuffle shuffle
   :mild-shuffle mild-shuffle
   :rand rand-nth*
   :asdf rand-nth*
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
   :walk2 rand-walk2
   :in in
   :abs-times abs-times
   :x repeat
   :repeatedly repeatedly
   :xx repeatedly
   :range range*
   :cycle cycle*
   :fill fill-time
   :once once
   :pattern scale-pattern
   :scale-range scale-range
   :scale-range-sweep scale-range-sweep
   :transpose-scale transpose-scale
   :flatten flatten*
   :log log*
   :say say
   :user user
   :bass-fret bass-fret
   :nth nth*
   :count count
   :vector vector
   :interleave interleave
   :dethunk dethunk
   :call dethunk
   :sort sort
   :over over-mod
   :grow grow
   :step step
   :add add-dethunk-test
   :def define-variable
   :get get-variable
   :cache cache
   :seed set-rand-seed
   :plus plus
   :sum sum
   :times times
   :mod mod
   :pow pow*
   :sin sin
   :cos cos
   :floor floor
   :time time*
   :eval eval-str
;;   :round round
;;   :round-up round-up
;;   :round-down round-down
   })
