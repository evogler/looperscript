(ns cljs.looperscript.interpret
  (:require [domina :as dom]
            [domina.xpath :as xp]
            [hiccups.runtime :as hiccupsrt]
            [domina.events :as ev]
            [shoreleave.remotes.http-rpc :refer [remote-callback]]
            [cljs.reader :refer [read-string]]
            [cljs.looperscript.audio :as audio]
            [cljs.looperscript.ui :as ui]
            [instaparse.core :as insta]
            ))



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

(defn parse-data [v]
  (loop [accum [] rem v ops []]
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

                (and (vector? x) (= (first x) :ratio))
                (recur (conj accum (apply-ops (second x) ops))
                       (rest rem)
                       ops)

                (number? x)
                (recur (conj accum (apply-ops x ops))
                       (rest rem)
                       ops)

                :else
                (recur (conj accum x)
                       (rest rem)
                       ops))))))

(def looper-parse
    (insta/parser
     "s = <version?> <sp?> part*
      vec = <'['> (data-element | vec | sp) + <']'>
      version = <'version'> sp #'[0-9.]+'
      part = part-title <sp> aspect*
      <part-title> = <'part'> sp (!aspect-keyword #'[a-zA-Z0-9_.-]+')
      aspect = aspect-keyword data
      aspect-keyword = ('rhythm' | 'sounds' | 'volumes')
      data = data-element+
      <data-element> = (ratio | fraction | plus | number | sp | vec | drum-code)
      drum-code = #'[bcdhkrs]'
      plus = <'+'> sp? number
      fraction = number <'/'> number
      ratio = number <':'> number
      number = #'-?([0-9]*\\.[0-9]*|[0-9]+)'
      <sp> = <#'[\\s,]+'>"))

(defn looper-transform [parse-tree]
 (insta/transform
  {:number string->number
   :data #(parse-data %&)
   :ratio (fn [n d] [:ratio (/ n d)])
   :fraction (fn [n d] [:fraction (/ n d)])
   :aspect-keyword keyword
   :part (fn [part-name & aspects]
           (reduce
            (fn [m [_ k v]]
              (assoc m k v))
            {:name part-name} aspects))
   :s vector}
  parse-tree))


(-> "part 1 sounds 0 2 4 rhythm 2 3"
    looper-parse looper-transform
    (#(js/alert %)))
