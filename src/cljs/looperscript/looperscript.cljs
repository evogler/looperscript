(ns cljs.looperscript.looperscript
  (:require [domina :as dom]
            [domina.events :as ev]
            ;; [cljs.core.async :as a]
            [cljs.looperscript.address-bar :as bar]
            [cljs.looperscript.bindings :refer [relisten! bind-key]]
;            [cljs.looperscript.logging :refer [log log->]]
            [cljs.looperscript.player :as player]
            [cljs.looperscript.ui :as ui]
            [cljs.looperscript.get-parts :as get-parts]))

(ui/set-ui-location (dom/by-id "UI_area"))

(relisten! "play" player/play)
(relisten! "pause" player/stop)
(relisten! "update" (fn [& args] (player/update* (get-parts/get-parts))))
(relisten! "link" bar/text->link)
(relisten! "load" (partial bar/load-link->text ""))
(relisten! "stop" player/reset-button)

(relisten! "UI" (fn [& args]
  (dom/set-styles! (dom/by-id "script_area") {:display "none"})
  (dom/set-styles! (dom/by-id "UI_area") {:display "block"})))
(relisten! "script" (fn [& args]
  (dom/set-styles! (dom/by-id "script_area") {:display "block"})
  (dom/set-styles! (dom/by-id "UI_area") {:display "none"})))



(bind-key "update" "Ctrl-Shift-u" "Command-Enter" (fn [& args] (player/update* (get-parts/get-parts))))
(bind-key "link" "Ctrl-Shift-l" "Command-Shift-L" (fn [e] (bar/text->link)) )
(bind-key "stop" "Ctrl-Shift-S" "Command-Shift-S" player/reset-button)
(bind-key "play" "Ctrol-Shift-P" "Command-Shift-P" player/play)
