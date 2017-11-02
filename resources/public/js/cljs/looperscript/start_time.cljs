(ns cljs.looperscript.start-time
  (:require [cljs.looperscript.audio :as audio]))

(def current-start-time (atom nil))

(defn get-current-start-time []
  @current-start-time)

(defn reset-clock!
  ([] (reset-clock! nil))
  ([time] (reset! current-start-time time)))

(defn now [] (aget audio/ctx "currentTime"))
