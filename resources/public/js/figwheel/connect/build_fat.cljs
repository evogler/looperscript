(ns figwheel.connect.build-fat (:require [cljs.looperscript.looperscript] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "fat", :websocket-url "ws://localhost:3449/figwheel-ws"})

