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
   (if-let [n (re-find #"-(^\.[0-9]+)" s)]
     (str "-0" (second n))
     (if-let [n (re-find #"(^\.[0-9]+)" s)]
       (str "0" (second n))
       (if-let [n (re-find #"^0+([0-9][0-9.]+)" s)]
         (last n)
         (if-let [n (re-find #"^-0+([0-9.]+)" s)]
           (str "-" (last n))
           s))))))

(defn apply-ops [n ops]
  (reduce (fn [x [op v]]
            (cond (= op :*) (* x v)
                  (= op :+) (+ x v)
                  :else x))
          n ops))

(defn choose-random1s [v]
  (map (fn [x]
         (if (and (vector? x) (= (first x) :random1))
           (rand-nth (rest x))
           x)) v))

(defn ratio->note [r]
  (-> (/ (Math/log r) (Math/log 2))
      (* 12)))

(defn parse-data
  ([v] (parse-data v []))

  ([v pre-ops]
     (loop [accum [] rem v ops pre-ops]
       (if (empty? rem) accum
           (let [x (first rem)]
             (cond (and (vector? x) (= (first x) :fraction))
                   (recur accum
                          (rest rem)
                          (conj ops [:* (second x)]))

                   (and (vector? x) (= (first x) :plus))
                   (recur accum
                          (rest rem)
                          (conj ops [:+ (second x)]))

                   (number? x)
                   (recur (conj accum (apply-ops x ops))
                          (rest rem)
                          ops)

                   (and (vector? x) (= (first x) :random2))
                   (recur
                    (conj accum (into [:random2] (map #(apply-ops % ops) (rest x)) ))
                    (rest rem)
                    ops)

                   :else
                   (recur (conj accum x)
                          (rest rem)
                          ops)))))))

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

(defn shuffle* [v]
  (-> v
      shuffle
      mark-for-splice))

(defn splice-fn [f]
  (fn [v]
    (mark-for-splice (apply f v))
    #_(-> v
        ((partial apply f))
        mark-for-splice)))

(defn range* [v]
  (-> v
      ((partial apply range))
      mark-for-splice))

(defn rand-range [v]
  (let [[floor ceil] v]
    (-> (rand)
        (* (- ceil floor))
        (+ floor))))

(defn rand-exp-range [v]
  (let [[floor ceil exp] v]
    (-> (rand)
        (Math/pow exp)
        (* (- ceil floor))
        (+ floor))))

(defn handle-v-keyword [& v]
  (-> (let [[n d] v]
        (repeat n (/ d n)))
      mark-for-splice))

(def vec-fns
  {:shuffle (splice-fn shuffle)
;   :random1 rand-nth*
   :rand-range rand-range
   :rand-exp-range rand-exp-range
   :range range*})

(defn process-vec [& v]
  (log :process-vec v)
  (->> v
       splice
       (#(if-let [f (get vec-fns (first %))]
           (f (rest %)) %))
       #_splice))

;; note: the lesson with shuffle and range was that I probably need to just write my own
;; tree walker.

(def -looper-parse
    (insta/parser
     "s = <sp*> params <sp*> part*
      params = param*
      <param> = (bpm | version) <sp*>
      bpm = <'bpm'> <sp?> (number | fraction)
      version = <'version'> <sp?> #'[a-zA-Z0-9.]+'
      vec = <'['> vec-code? (data-element | vec | sp)+ <']'>
      vec-code = ('random1' | 'random2' | 'shuffle' | 'range' | 'rand-range' | 'rand-exp-range')
      part = part-title <sp> aspect*
      <part-title> = <'part'> sp (!aspect-keyword #'[a-zA-Z0-9_.-]+')
      aspect = aspect-keyword data
      aspect-keyword = ('time' | 'sound' | 'volume' | 'filter' | 'pan' | 'rate')
      data = data-element+
      <data-element> = (ratio | fraction | plus | number | sp | vec | drum-code | data-shorthand)
      <data-shorthand> = v
      v = number <'v'> number
      drum-code = #'[bcdhkrs]'
      plus = <'+'> sp* (number | ratio)
      fraction = number <'/'> number
      ratio = number <':'> number
      number = #'-?([0-9]*\\.[0-9]*|[0-9]+)'
      <sp> = <#'[\\s,]+'>"))

(defn looper-parse [s]
  (-looper-parse s)
  ;; (throw (js/Error. "Blah blah blah"))
  ;; (let [res (-looper-parse s)]
  ;;   (.log js/console res)
  ;;   (if (insta/failure? res)
  ;;     (throw (js/Error. "poo"))

  ;;     res
  ;;     )
  ;;   )
  )



(defn looper-transform [parse-tree]
  (insta/transform
   {:number string->number
    :data
    #(-> %&
;         choose-random1s
         splice
         parse-data)
    :ratio (fn [n d] (ratio->note (/ n d)))
    :fraction (fn [n d] [:fraction (/ n d)])
    :aspect-keyword keyword
    :bpm (fn [x] [:bpm (/ 60 (if (vector? x) (last x) x))])
    :params
;;    (fn [& args] args)
;;    ([:version "0.2.1"] [:bpm 460])
    (fn [& p] (reduce (fn [m [k v]]
                               (assoc m k v))
                           {}
                           p))
    :v handle-v-keyword
    :vec process-vec
    :vec-code keyword
    :part (fn [part-name & aspects]
           (reduce
            (fn [m [_ k v]]
              (assoc m k v))
            {:name part-name} aspects))
   :s vector}
  parse-tree))
