(ns cljs.looperscript.address-bar
  (:require [domina :as dom]))

(def default-loop-text
  "Part 1
rhythm 30/240 2 3 1 2 1
sounds k 0 s 3.14
volumes 1 0.3 0.3")

(defn put-text-in-get [s]
  (let [preface (-> js/document .-location .-pathname)]
   (.pushState js/history (js/Object.) "" (str preface s))))

(defn text->link []
  (let [text (-> "looper-text"
                 dom/by-id dom/value
                 js/btoa
                 js/escape
                 )]
    (put-text-in-get (str "?loop=" text))))

(defn get-text-from-get []
  (let [t (->> js/document .-location .-search
               (re-find #"^\?loop=([\s\S]*)")  ; \s\S includes newlines, unlike "."
               last)]
    (if t (-> t js/unescape
              js/atob))))

(defn set-loop-text [s]
  (-> "looper-text" dom/by-id
      (dom/set-value! s)))

(defn load-link->text [default]
  (let [get-text (get-text-from-get)
        loop-text (or get-text default)]
    (set-loop-text loop-text)))

(load-link->text default-loop-text)