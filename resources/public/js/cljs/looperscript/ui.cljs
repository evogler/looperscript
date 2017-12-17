(ns cljs.looperscript.ui
  (:require
    [domina :as dom]
    [domina.events :as ev]
    [cljs.looperscript.vector-fns :as vec-fns]
    [cljs.looperscript.bindings :as bindings]
    ))

(def ui-location (atom nil))

(def widgets (atom {}))

(def widget-vals (atom {}))

(defn set-ui-location [div]
  (reset! ui-location div))

(defn ui-append [x] (dom/append! @ui-location x))

(defn add-widget [params]
  (case (:type params)
    :slider
    (let [id (:id params)
          -min (:min params)
          -max (:max params)
          default (:default params)
          s (str
              "<input type=\"range\" "
              "id=\"" id "\" "
;              "min=\"" -min "\" "
;              "max=\"" -max "\" "
;              "value=\"" default "\" "
              "min=\"0\" max=\"10000\" value=\"2000\" "
              "class=\"slider\">")]
      (ui-append s)
      (let [dom-location (dom/by-id id)
            _ (println :DOMLOC dom-location)]
        (ev/listen! dom-location :change
          (fn [e]
            (println :EVENT_CALLED)
              (let [value (dom/value dom-location)]
                (js/alert value))))))))

(add-widget {:type :slider :min 0 :max 10 :default 2 :id "awesome"})
