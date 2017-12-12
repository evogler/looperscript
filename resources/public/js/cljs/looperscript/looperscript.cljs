(ns cljs.looperscript.looperscript

  ;; (:require-macros [hiccups.core :as h])
  ;; (:require-macros [cljs.core.async.macros :as a])
  (:require [domina :as dom]
            ;; [domina.xpath :as xp]
            ;; [hiccups.runtime :as hiccupsrt]
            [domina.events :as ev]
;            [taoensso.tufte :as tufte :refer [defnp p profiled profile]]
            ;; [cljs.core.async :as a]
            ;; [shoreleave.remotes.http-rpc :refer [remote-callback]]
            [cljs.looperscript.address-bar :as get]
            [cljs.looperscript.audio :as audio]
            [cljs.looperscript.logging :refer [log log->]]
            [cljs.looperscript.player :as player]
            [cljs.looperscript.get-parts :as get-parts]
            ))

(js* "var L = cljs.looperscript.looperscript")

;;;;;;;;;;


(defn relisten! [id f]
  (ev/unlisten! (dom/by-id id) :click)
  (ev/listen! (dom/by-id id) :click (fn [e] (f))))

(relisten! "play" player/play)
(relisten! "pause" player/stop)
(relisten! "update" (fn [& args] (player/update* (get-parts/get-parts))))
(relisten! "link" get/text->link)
(relisten! "load" (partial get/load-link->text ""))
(relisten! "stop" player/reset-button)

(defn bind-key [name windows-key mac-key f]
  (.addCommand (aget js/editor "commands")
               (js-obj
                "name" name
                "bindKey" (js-obj "win" windows-key
                                  "mac" mac-key)
                "exec" f)))

(bind-key "update" "Ctrl-Shift-u" "Command-Enter" (fn [& args] (player/update* (get-parts/get-parts))))
(bind-key "link" "Ctrl-Shift-l" "Command-Shift-L" (fn [e] (get/text->link)) )
(bind-key "stop" "Ctrl-Shift-S" "Command-Shift-S" player/reset-button)
(bind-key "play" "Ctrol-Shift-P" "Command-Shift-P" player/play)

(audio/load-some-drums)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
