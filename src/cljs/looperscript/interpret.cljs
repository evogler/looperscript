(ns cljs.looperscript.interpret
  (:require [cljs.reader :refer [read-string]]
            [instaparse.core :as insta]))

(defn log [& args]
  (.log js/console (apply str args)))

(defn remove-comments [s]
  (->> s
       clojure.string/split-lines
       (map #(first (first (re-seq #"^([^;]+)" %))))
       (clojure.string/join \newline)))

(defn string->number [s]
  (read-string
   (if-let [n (re-find #"-0*(\.[0-9]+)" s)]
     (str "-0" (second n))
     (if-let [n (re-find #"(^\.[0-9]+)" s)]
       (str "0" (second n))
       (if-let [n (re-find #"^0+([0-9][0-9.]+)" s)]
         (last n)
         (if-let [n (re-find #"^-0+([0-9.]+)" s)]
           (str "-" (last n))
           s))))))

(defn ratio->note [r]
  (-> (/ (Math/log r) (Math/log 2))
      (* 12)))

(defn splice [v]
  (-> (loop [accum [] rem v]
        (if (empty? rem) accum
            (let [n (first rem)]
              (if (vector? n)
                (if (-> n meta :splice)
                  (recur (into accum (splice n)) (rest rem))
                  (recur (conj accum (splice n)) (rest rem)))
                (recur (conj accum n) (rest rem))))))
    (with-meta (meta v))))

(defn mark-for-splice [col]
  (with-meta (vec col) {:splice true}))


(defn splice-fn [f]
  (fn [v]
    (mark-for-splice (apply f v))))

;;;;;;;;;;;;;;;;;;;;;;
;; looper functions ;;
;;;;;;;;;;;;;;;;;;;;;;

(defn shuffle* [v]
  (-> v first
      shuffle))

(defn range* [v]
  (-> v
      ((partial apply range))))

(defn rand-range [v]
  (let [[floor ceil] v]
    (-> (rand)
        (* (- ceil floor))
        (+ floor))))

(defn rand-nth* [v]
  (rand-nth (first v)))

(defn take* [v]
  (let [n (first v)
        v (second v)]
    #_(log :take* :n n :v v :res (take n v))
    (take n v)))

(defn rand-exp-range [v]
  (let [[floor ceil exp] v]
    (-> (rand)
        (Math/pow exp)
        (* (- ceil floor))
        (+ floor))))

(defn handle-v-keyword [& v]
  (-> (let [[n d] v]
        (repeat n (/ d n)))
      #_mark-for-splice))

;; XXX: Minor lameness: rand-weighted-zip zips so rand-weighted can unzip.
(defn rand-weighted [v]
  (let [[vs ws] (apply map vector (partition 2 v))
        cum-ws (reductions + 0 ws)
        sum (last cum-ws)
        r (* (rand) sum)]
    (some #(if (< (nth cum-ws %) r) (nth vs %))
          (range (dec (count vs)) -1 -1))))

(defn rand-weighted-zip [v]
  (let [[vs ws] (take 2 v)]
    (rand-weighted (interleave vs ws))))

(defn rand-hold [v]
  (let [[odds-of-change options] (take 2 v)
        current-choice (atom (if (fn? options)
                               (options)
                               (rand-nth options)))]
    (fn []
      (if (< odds-of-change (rand))
        @current-choice
        (reset! current-choice
                (if (fn? options)
                  (options)
                  (rand-nth (remove #(= @current-choice %) options))))))))

(defn rand-walk [v]
  (let [rand-int-range (fn [a b] (+ a (rand-int (inc (- b a)))))
        max-step (first v)
        v (second v)
        max-v (dec (count v))
        pos (atom (rand-int (count v)))]
    (fn []
      (nth v (reset! pos
                (rand-int-range (max 0 (- @pos max-step))
                                (min max-v (+ @pos max-step))))))))

(defn in [v]
  (let [t (first v)
        v (second v)
        factor (/ t (reduce + v))]
    (map #(* factor %) v)))

(defn repeat* [v]
  (let [n (first v)
        v (second v)]
    (repeat n v)))

(defn cycle* [v]
  (let [v (first v)
        pos (atom -1)
        v-len (count v)]
    (fn [] (nth v (swap! pos #(mod (inc %) v-len))))))

(defn nth* [[idx v]]
  (nth v idx))

(defn scale-nth [scale degree]
  (+ (* 12 (Math/floor (/ degree (count scale))))
     (nth scale (mod degree (count scale)))))

(defn scale-pattern [v]
  (let [[scale pattern degrees] v
        res (for [d degrees
                  p pattern]
              (scale-nth scale (+ d p)))]
    res))

(defn scale-range [[floor ceil scale]]
    (let [a (dec (int (/ floor 12)))
          b (inc (inc (/ ceil 12)))]
      (->> (for [o (range a b)
                 s scale]
             (+ (* 12 o) s))
           (filter #(<= floor % ceil)))))

(defn scale-range-sweep [[floor ceil scale]]
  (let [sr (vec (scale-range [floor ceil scale]))]
    (into sr (-> sr reverse rest drop-last))))

(defn mild-shuffle [v]
  (let [[degree col] v]
    (->> col
         (map-indexed (fn [idx n] [(+ idx (rand-int (dec degree))) n]))
         sort
         (map second))))

(defn log* [v]
  (log v)
  v)

(defn memo [[id fn]]
  (let [memo-f (memoize (fn [cnt] (fn)))
        counts (atom {})]
    (fn [])
    )
  )

(defn bass-fret [[string fret]]
  (+ -17 fret (* -5 (dec string))))

(def user-vars (atom {}))

(defn set-user-var [k v]
  (swap! user-vars assoc k v))

(defn user [[k default]]
  (fn []
    (get @user-vars k default)))

(def vec-fns
  {:shuffle (partial apply shuffle)
   :mild-shuffle mild-shuffle
   :rand rand-nth*
   :take take*
   :rand-range rand-range
   :rand-exp-range rand-exp-range
   :rand-hold rand-hold
   :weight rand-weighted
   :weight2 rand-weighted-zip
   :walk rand-walk
   :in in
   :x repeat*
   :repeatedly (partial apply repeatedly)
   :range range*
   :cycle cycle*
   :pattern scale-pattern
   :scale-range scale-range
   :scale-range-sweep scale-range-sweep
   :splice mark-for-splice
   :flatten flatten
   :log log*
   :user user
   :bass-fret bass-fret
   :nth nth*})

(declare process-vec)

(defn maybe-process-vec [x]
  (cond (vector? x)
        (process-vec x)
        (fn? x)
        (x)
        :else
        x))

(defn process-vec [& v]
  (log v)
  (cond
   ;; [rand ...
   (get vec-fns (first v))
   ((get vec-fns (first v)) (rest v))
   ;; #[rand ...
   (and (= (first v) "#") (get vec-fns (second v)))
   #((get vec-fns (second v)) (map maybe-process-vec (rest (rest v))))
   ;; @[rand]
   (and (= (first v) "@") (get vec-fns (second v)))
   (mark-for-splice ((get vec-fns (second v)) (rest (rest v))))
   ;; @[1 2 3
   (= (first v) "@")
   (mark-for-splice (rest v))
   ;; [1 2 3 ...
   :else
   v))


;; note: the lesson with shuffle and range was that I probably need to just write my own
;; tree walker.

(def grammar
 "s = <sp*> params <sp*> part*
      params = param*
      <param> = (bpm | version) <sp*>
      bpm = <'bpm'> <sp?> (number | fraction | vec)
      version = <'version'> <sp?> #'[a-zA-Z0-9.]+'
      vec = ('#' | '@' | '!')? <('[' | '(')> vec-code? (data-element | vec | sp)+ <(']' | ')')>
      vec-code = ('rand' | 'shuffle' | 'range' | 'rand-range' | 'rand-exp-range' | 'take' |
                  'in' | 'repeatedly' | 'x' | 'weight' | 'walk' | 'cycle' | 'log' | 'pattern' |
                  'weight2' | 'rand-hold' | 'mild-shuffle' | 'flatten' | 'log' |
                  'scale-range' | 'scale-range-sweep' | 'user' | 'bass-fret' | 'nth')
      part = part-title <sp> aspect*
      <part-title> = <'part'> sp (!aspect-keyword #'[a-zA-Z0-9_.-]+')
      aspect = aspect-header data
      aspect-header = aspect-keyword (sp* <'&'> sp* aspect-keyword)*
      aspect-keyword = ('time' | 'sound' | 'volume' | 'filter' | 'pan' | 'rate' | 'offset' |                              'synth' | 'overtones' | 'time+' | 'mute' | 'skip')
      data = data-element+
      <data-element> = (ratio | hz | modifier | number | sp | vec | drum-code |
                        data-shorthand | synth-code)
      <synth-code> = ('sawtooth' | 'sine' | 'square' | 'triangle')
      <data-shorthand> = v
      v = number <'v'> number
      drum-code = #'[bcdhkrs]'
      modifier = (plus | fraction | mod-code)
      mod-code = 'just'
      plus = <'+'> sp* (number | ratio | vec)
      fraction = number <'/'> number
      hz = (number | vec) sp* 'hz'
      ratio = number <':'> number
      number = #'-?([0-9]*\\.[0-9]*|[0-9]+)'
      <sp> = <#'[\\s,]+'>")

(def looper-parse (insta/parser grammar))

(defn looper-transform [parse-tree]
  (insta/transform
   {:number string->number
    :data #(-> %& splice)
    :ratio (fn [n d] (ratio->note (/ n d)))
    :fraction (fn [n d] [:fraction (/ n d)])
    :aspect-keyword keyword
    :bpm (fn [x] [:bpm (/ 60 (if (vector? x) (last x) x))])
    :params (fn [& p] (reduce (fn [m [k v]]
                               (assoc m k v))
                           {} p))
    :v handle-v-keyword
    :vec process-vec
    :vec-code keyword
    :aspect-header vector
    :part (fn [part-name & aspects]
           (reduce
            (fn [m [_ k v]]
              (assoc m k v))
            {:name part-name} aspects))
    :mod-code (comp vector keyword)
    :s vector}
   parse-tree))

<<<<<<< HEAD
;; master!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
=======
;; multi-aspects !!!
>>>>>>> multi-aspects
