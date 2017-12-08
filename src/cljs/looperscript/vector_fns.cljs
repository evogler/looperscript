(ns cljs.looperscript.vector-fns
  (:require ; [cemerick.pprng :as rng]
            [cljs.looperscript.interp-rhythms :refer [rhythms-interp]]
            [cljs.looperscript.start-time :refer [now get-current-start-time]]
            [cljs.looperscript.globals :refer [current-time-hack]]
            [cljs.looperscript.logging :refer [log log->]]
            [cljs.tools.reader :refer [read-string]]
            [cljs.js :refer [empty-state eval js-eval #_eval-str]]
            [cljs.env :refer [*compiler*]]))

(defn eval-str [s]
  (eval (empty-state)
     (read-string (clojure.string/join " " ["(do " s ")"]))
     {:eval       js-eval
      :source-map true
      :context    :expr}
         (fn [result] (:value result))))

;(defn log [& args]
;  (.log js/console (apply str args)))

(defn shuffle* [v] shuffle)

(defn range*
  ([a] (range (inc a)))
  ([a b] (range a (inc b)))
  ([a b c] (range a (+ b c) c)))

;; TODO: more elaborate sweep. -increments. complex phase.
(defn sweep-range [a b]
  (into (vec (range a b)) (range b a -1)))

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

(defn combine [& args]
  (fn []
    (reduce +
      (for [a args]
        (if (fn? a) (a) a)))))

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

(defn once
  ([x y]
    (let [called? (atom false)]
      (fn []
        (if (not @called?)
          (do (reset! called? true)
              x)
          y))))
  ([x]
    (let [called? (atom false)]
      (fn []
        (when (not @called?)
          (reset! called? true)
          x)))))

(defn flatten* [& args]
  (flatten args))

(defn dethunk [x]
  (if (fn? x)
    (dethunk (x))
    x))

(defn rest* [x]
  (with-meta
    [:rest x]
    {:intact-for-sub-time :true}))

(defn chord [& v]
  (with-meta
    (flatten [:chord v])
    {:intact-for-sub-time :true}))

(defn chords [& v]
  (for [ch v]
    (chord ch)))

(defn chord? [x]
  (and (sequential? x) (= (first x) :chord)))

(defn odc [n]
  "Octave displace each note in chord by up to one octave"
  ;XXX: should be n octaves
  [:modifier-fn
   (fn [c]
     (into [:chord]
       (map #(+ (rand-nth [-12 0 12]) %)
        (rest c))))])

(defn odc1 [_]
  [:modifier-fn
   (fn f [n]
     (if (chord? n)
       (chord (map f (rest n)))
       (+ (rand-nth [-12 0 12]) (mod n 12))))])

(def chord-types {
  :maj [0 4 7]
  :min [0 3 7]
  :7 [0 4 7 10]
  })

(defn pos-in-vec [p v]
  (let [max-pos (dec (count v))]
     (loop [pos 0]
       (if (= pos max-pos)
         pos
         (if (and
                (>= p (nth v pos))
                (< p (nth v (inc pos))))
           pos
           (recur (inc pos)))))))

(defn transpose1 [deg v]
  (map #(+ deg %) v))

(defn chord-progression1 [chords-v times]
  (let [chords (->> chords-v rest (take-nth 2) (map chord-types))
        roots (take-nth 2 chords-v)
        times (take (count chords) (cycle times))
        chord-times (reductions + 0 times)
        form-len (last chord-times)
        chord-times (drop-last chord-times)
        ]
    #(let [pos (pos-in-vec (mod @current-time-hack form-len) chord-times)]
      (chord (transpose1 (nth roots pos) (nth chords pos))))))

(defn chord-progression2 [chords-v times]
  (let [chords (->> chords-v rest (take-nth 2) (map chord-types))
        roots (take-nth 2 chords-v)
        roots (reductions #(mod (+ % %2) 12) roots)
        times (take (count chords) (cycle times))
        chord-times (reductions + 0 times)
        form-len (last chord-times)
        chord-times (drop-last chord-times)
        ]
    #(let [pos (pos-in-vec (mod @current-time-hack form-len) chord-times)]
      (chord (transpose1 (nth roots pos) (nth chords pos))))))


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


(defn inversion [scale inv degree]
  (chord
    (for [i inv]
      (scale-nth scale (+ i degree)))))

(defn chord-scale [scale inv floor degrees]
    (for [d degrees]
      (inversion scale inv (+ floor d))
      ))

;(println (chord-scale [0 2 4 7 9] [0 2 4 6] 5 (range 5)))


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

(defn nothing [& args] nil)

(defn current-beat [x]
  @current-time-hack)

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
  x)

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
   :sweep-range sweep-range
   :cycle cycle*
   :combine combine
   :apply apply
   :fill fill-time
   :once once
   :pattern scale-pattern
   :scale-range scale-range
   :scale-range-sweep scale-range-sweep
   :transpose-scale transpose-scale
   :chord-scale chord-scale
   :flatten flatten*
   :rest rest*
   :chord chord
   :& chord
   :chords chords
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
   :odc odc
   :odc1 odc1
   :current-beat current-beat
   :prog1 chord-progression1
   :prog2 chord-progression2
   :nothing nothing

;;   :round round
;;   :round-up round-up
;;   :round-down round-down
   })
