(ns looperscript.remotes
  (:require [looperscript.core :refer [handler]]
            [compojure.handler :refer [site]]
            [shoreleave.middleware.rpc :refer [defremote wrap-rpc]]))

(def app (-> (var handler)
             (wrap-rpc)
             (site)))
