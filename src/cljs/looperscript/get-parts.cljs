(ns cljs.looperscript.get-parts
  (:require
    [cljs.looperscript.interpret :as parse]
    [cljs.looperscript.logging :refer [log log->]]
    [instaparse.core :as insta]))

(defn get-looper-text []
  (-> (.getValue js/editor)
      parse/remove-comments))

(defn get-parts []
  (let [text (get-looper-text)
        parse-tree (parse/looper-parse text)]
    (if (insta/failure? parse-tree)
      (throw (js/Error. (str (subvec (vec parse-tree) 2 5))))
      (let [transformed-tree (parse/looper-transform parse-tree)
            new-params (:params transformed-tree)
            parts (:parts transformed-tree)
            parts (assoc parts :params new-params)
            parts (assoc parts :init (:init transformed-tree))]
        parts))))
