(ns cljs.looperscript.logging
  (:require [domina :as dom]))

(defn log [& args]
  (let [s (apply str (conj (vec args) \newline))]
    (dom/append! (dom/by-id "console") (str s "<p />"))
    (.log js/console s)))

(defn log-> [& args]
  (do (apply log args)
      (first args)))
