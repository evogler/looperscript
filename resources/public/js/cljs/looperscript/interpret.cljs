(ns cljs.looperscript.interpret
  (:require [cljs.reader :refer [read-string]]
            [instaparse.core :as insta]
            [cljs.looperscript.vector-fns :refer [vec-fns] :as vec-fns]))


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

;;;;;;;;;;;;;;;;;;;;;;
;; looper functions ;;
;;;;;;;;;;;;;;;;;;;;;;

(declare -process-vec)
(declare process-vec)


(defn maybe-process-vec [x invade-carots?]
  (cond (vector? x)
        (-process-vec x invade-carots?)
        :else
        x))

(defn -process-vec [v invade-carots?]
  ;(log "-process-vec in: " v)
  (let [caroted? (= (first v) "^")
        v (if caroted? (rest v) v)
        [a b] v
        r (vec (rest v))
        r2 (vec (drop 2 v))
        [afn bfn] (map #(get vec-fns %) [a b])
        delve #(splice (map (fn [x] (maybe-process-vec x invade-carots?)) %))]
    ;;^ and invade : process (rest v)
    ;;^ and don't invade : process (rest v) & add meta
    ;;normal : process

    (->
      (cond
       ;; [rand ...
       afn
       (apply afn (delve r))

       ;; #[rand ...
       (and (= a "#") bfn)
       #(apply bfn (delve r2))

       ;; [1 2 3 ...
       (sequential? v)
       (delve v)
       :else
       v)
      (#(if caroted? (with-meta % {:intact-for-sub-time :true})
           %)))))

(defn pre-process-to-eval-!s [v invade-carots?]
  (let [[a b] v
        r (vec (rest v))
        r2 (vec (drop 2 v))
        delve #(splice (map maybe-process-vec %))]
    (cond
     ;; ![rand ...
     (= a "!")
     (process-vec r invade-carots?)

     (sequential? v)
     (mapv #(if (sequential? %) (pre-process-to-eval-!s % invade-carots?) %) v)

     :else
     v)))

(defn process-vec
  ([args]
     (process-vec args false))
  ([args invade-carots?]
     ;;(log "proess vec in: " args)
     (if-not (sequential? args) args
             (-> args
                 (pre-process-to-eval-!s invade-carots?)
                 (-process-vec invade-carots?)))))

(defn walk-map-applying-fn-to-vals [f m]
  (reduce (fn [m [k v]]
            (let [res (if (map? v)
                        (walk-map-applying-fn-to-vals f v)
                        (f v))]
              (assoc m k res)))
          {} m))

(def grammar
  (str
  "s = <sp*> params init? <sp*> parts
  params = param*
  parts = part*
  <param> = (bpm | version) <sp*>
  bpm = <'bpm'> <sp?> (number | fraction | vec)
  version = <'version'> <sp?> #'[a-zA-Z0-9.]+'
  vec = '^'? ('#' | '!')? <('[' | '(')> vec-code? (data-element | vec | sp |
                                                    string | vec-code)* <(']' | ')')>
  part = part-title <sp>* aspect*
  init = <'init'> (<sp*> vec)*
  <part-title> = <'part'> sp (!aspect-keyword #'[a-zA-Z0-9_.-]+')
  aspect = aspect-header data
  aspect-header = full-aspect-name (sp* <'&'> sp* full-aspect-name)*
  full-aspect-name = aspect-keyword (':' sub-aspect-keyword)*
  aspect-keyword = ('time' | 'sound' | 'volume' | 'filter' | 'pan' | 'rate' | 'offset' |                              'synth' | 'overtones' | 'time+' | 'mute' | 'skip')
  sub-aspect-keyword = ('time')
  data = data-element+
  <data-element> = (ratio | hz | modifier | number | sp | vec | drum-code |
  data-shorthand | synth-code)
  <synth-code> = ('sawtooth' | 'sine' | 'square' | 'triangle')
  <data-shorthand> = v
  v = number <'v'> number
  drum-code = !vec-code #'[bcdhkrs]'
  modifier = (plus-mod | fraction | mod-code)
  mod-code = 'just'
  plus-mod = <'+'> sp* (number | ratio | vec)
  fraction = number <'/'> number
  hz = (number | vec) sp* 'hz'
  ratio = number <':'> number

  vec-code = ("
  (clojure.string/join " | " (mapv (comp #(apply str "'" % "'")
                                         (partial apply str) rest str) (keys vec-fns)))
  ") <sp>


  string = <'\"'> #'([^\"]*)' <'\"'>
  number = #'-?([0-9]*\\.[0-9]*|[0-9]+)'
      <sp> = <#'[\\s,]+'>"))

(def looper-parse (insta/parser grammar))

(defn looper-transform [parse-tree]
  (->> parse-tree
       (insta/transform
        {:number string->number
         :data #(-> %& splice)
         :ratio (fn [n d] (ratio->note (/ n d)))
         :fraction (fn [n d] [:fraction (/ n d)])
         :bpm (fn [x] [:bpm (/ 60 (cond
                                  (and (vector? x) (= (first x) :fraction)) (second x)
                                  (vector? x) (process-vec x)
                                  :else x))])
         :params (fn [& p] {:params (reduce (fn [m [k v]]
                                             (assoc m k v))
                                           {} p)})
         :v vec-fns/handle-v-keyword
         :vec vector
         :vec-code keyword
         :aspect-keyword keyword
         :sub-aspect-keyword keyword
         :full-aspect-name (fn [& args]
                             (if (= (count args) 1)
                               (first args)
                               [(first args) (nth args 2)]))
         :aspect-header vector
         :string str
         :part (fn [part-name & aspects]
                 (reduce
                  (fn [m [_ k v]]
                    (assoc m k v))
                  {:name part-name} aspects))
         :parts (fn [& args] {:parts
                             (reduce (fn [m p]
                                       (assoc m (:name p) p))
                                     {} args)})
         :init (fn [& args] {:init (vec args)})
         :mod-code (comp vector keyword)
         :s (fn [& args]
              (reduce
               (fn [m x] (into m x))
               {} args))})
       (walk-map-applying-fn-to-vals process-vec)))

(def quick-test 12345)
