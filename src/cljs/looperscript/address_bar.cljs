(ns cljs.looperscript.address-bar
  (:require [domina :as dom]))

(def default-loop-text
"bpm 237/.5
part click sound h time 2 volume .5 1
part form sound b rate .3 .6 .6 .6 time 8/1 8
part beat sound d
time 2 3 2 3 2 2 3" )

(defn put-text-in-get [s]
  (let [preface (-> (aget js/document "location")
                    (aget "pathname"))
        ;; (-> js/document .-location .-pathname)
        ]
   (.pushState js/history (js/Object.) "" (str preface s))))

(defn text->link []
  (let [text (-> "looper-text"
                 dom/by-id
                 dom/value
                 ;; (aget "textContent")
                 js/btoa
                 js/escape
                 )]
    (put-text-in-get (str "?loop=" text))))

(defn get-text-from-get []
  (let [t (->> ;; js/document .-location .-search
           (-> (aget js/document "location")
               (aget "search"))
               (re-find #"^\?loop=([\s\S]*)")  ; \s\S includes newlines, unlike "."
               last)]
    (if t (-> t js/unescape
              js/atob))))

(defn set-loop-text [s]
  (-> "looper-text" dom/by-id
      ;; (aset "textContent" s)
      (dom/set-value! s)))

(defn load-link->text [default]
  (let [get-text (get-text-from-get)
        loop-text (or get-text default)]
    (set-loop-text loop-text)))

(load-link->text default-loop-text)
