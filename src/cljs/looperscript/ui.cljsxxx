(ns cljs.looperscript.ui
  (:require-macros [hiccups.core :as h])
  (:require [domina :as dom]
            [domina.xpath :as xp]
            [hiccups.runtime :as hiccupsrt]
            [domina.events :as ev]
            [shoreleave.remotes.http-rpc :refer [remote-callback]]
            [cljs.reader :refer [read-string]]))

(defn make-html-for-textarea [id label text]
  (h/html
   [:label {:for id} label]
   [:br]
   [:textarea {:id id :class "text-area"} text]
   [:br]))

(def part-prototype
  [[:sound "sounds:" "0 3.86" string->sounds]
   [:rhythm "rhythm:" "1" process-rhythm-ratios]
   [:volume "volumes:" "1" string->numbers]])

(defn make-html-for-part [part-name]
  (h/html
   [:div {:id (str "part-" part-name) :class "part"}
    (for [[id l t]
          part-prototype]
      (make-html-for-textarea (str id "-" part-name) l t))]))

(defn make-html-for-parts [ids]
  (h/html (for [i ids]
            (make-html-for-part i))))

(defn get-current-vals [id]
  (str
   (vec
    (for [p (map first part-prototype)]
      [p
       (-> (str p "-" id)
           dom/by-id
           dom/value)]))))

(comment
(dom/append! (dom/by-id "parts")
             (make-html-for-parts [1]))
(dom/append! (dom/by-id "parts")
             (make-html-for-parts [2])))
