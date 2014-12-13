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

(defn shuffle* [v] shuffle)

(def range* range)

(defn rand-range [floor ceil]
  (-> (rand)
      (* (- ceil floor))
      (+ floor)))

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

(defn in [t v]
  (let [factor (/ t (reduce + v))]
    (map #(* factor %) v)))

(def repeat* repeat)

(defn cycle* [v]
  (let [pos (atom -1)
        v-len (count v)]
    (fn [] (nth v (swap! pos #(mod (inc %) v-len))))))

(def nth* nth)

(defn scale-nth [scale degree]
  (+ (* 12 (Math/floor (/ degree (count scale))))
     (nth scale (mod degree (count scale)))))

(defn scale-pattern [scale pattern degrees]
  (let [res (for [d degrees
                  p pattern]
              (scale-nth scale (+ d p)))]
    res))

(defn scale-range [floor ceil scale]
  (let [a (dec (int (/ floor 12)))
        b (inc (inc (/ ceil 12)))]
    (->> (for [o (range a b)
               s scale]
           (+ (* 12 o) s))
         (filter #(<= floor % ceil)))))

(defn scale-range-sweep [floor ceil scale]
  (let [sr (vec (scale-range [floor ceil scale]))]
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
   :repeatedly repeatedly
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

;; (declare process-vec)

;; (defn maybe-process-vec [x]
;;   (cond (vector? x)
;;         (process-vec x)
;;         (fn? x)
;;         (x)
;;         :else
;;         x))

;; (defn process-vec [& v]
;;   (log v)
;;   (cond
;;    ;; [rand ...
;;    (get vec-fns (first v))
;;    ((get vec-fns (first v)) (rest v))
;;    ;; #[rand ...
;;    (and (= (first v) "#") (get vec-fns (second v)))
;;    #((get vec-fns (second v)) (map maybe-process-vec (rest (rest v))))
;;    ;; @[rand]
;;    (and (= (first v) "@") (get vec-fns (second v)))
;;    (mark-for-splice ((get vec-fns (second v)) (rest (rest v))))
;;    ;; @[1 2 3
;;    (= (first v) "@")
;;    (mark-for-splice (rest v))
;;    ;; [1 2 3 ...
;;    :else
;;    v))

(declare -process-vec)

(defn maybe-process-vec [x]
  (cond (vector? x)
        (-process-vec x)
        :else
        x))

(defn -process-vec [v]
  (let [_ (log :-process-vec v)
        [a b] v
        r (vec (rest v))
        r2 (vec (drop 2 v))
        _ (log :v v :R2 r2)
        [afn bfn] (map #(get vec-fns %) [a b])
        delve #(splice (map maybe-process-vec %))]
    ;; (println v)
    (cond
     ;; [rand ...
     afn
     (apply afn (delve r))

     ;; #[rand ...
     (and (= a "#") bfn)
     (fn []
       (log :YOURFUNCTIONWASCALLED bfn r2)
       (apply bfn (delve r2)))

     ;; @[rand]
     (and (= a "@") bfn)
     (mark-for-splice (apply bfn (delve r2)))

     ;; @[1 2 3
     (= a "@")
     (mark-for-splice (delve r))

     ;; [1 2 3 ...
     (sequential? v)
     (delve v)
     :else
     (do (log :simple v) v))))

(defn pre-process-to-eval-!s [v]
  (let [[a b] v
        r (vec (rest v))
        r2 (vec (drop 2 v))
        delve #(splice (map maybe-process-vec %))]
    (cond
     ;; ![rand ...
     (= a "!")
     (-process-vec r)

     (sequential? v)
     (mapv #(if (sequential? %) (pre-process-to-eval-!s %) %) v)

     :else
     v))
  )

(defn process-vec [args]
  (if-not (sequential? args) args
          (-> args
              ((fn [x] (do (log :processing x) x)))
              pre-process-to-eval-!s
              ((fn [x] (do (log :processing x) x)))
              -process-vec)))

(defn map-fn-on-hashmap-vals [f m]
  (log :mapfnonf m)
  (->> m
       vec
       (map (fn [[k v]] [k (f v)]))
       (into {})))

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
  (->> parse-tree
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
         :vec vector
         :vec-code keyword
         :aspect-header vector
         :part (fn [part-name & aspects]
                 (reduce
                  (fn [m [_ k v]]
                    (assoc m k v))
                  {:name part-name} aspects))
         :mod-code (comp vector keyword)
         :s vector})
       (map #(map-fn-on-hashmap-vals process-vec %))))

;; multi-aspects !!!
