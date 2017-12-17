(ns cljs.looperscript.bindings
  (:require [domina :as dom]
            [domina.events :as ev]
            ))

(defn relisten! [id f]
  (ev/unlisten! (dom/by-id id) :click)
  (ev/listen! (dom/by-id id) :click (fn [e] (f))))

(defn bind-key [name windows-key mac-key f]
  (.addCommand (aget js/editor "commands")
               (js-obj "name" name
                "bindKey" (js-obj "win" windows-key
                                  "mac" mac-key)
                "exec" f)))
