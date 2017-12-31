(ns cljs.looperscript.ui
  (:require
    [domina :as dom]
    [domina.events :as ev]
    [cljs.looperscript.vector-fns :as vec-fns]
    [cljs.looperscript.bindings :as bindings]
    ))

(def ui-location (atom nil))
(defn set-ui-location [div]
  (reset! ui-location div))

(def widgets (atom {}))
(def widget-vals (atom {}))

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

      (let [dom-location (dom/by-id id)]
        (ev/listen! dom-location :change
          (fn [e]
            (let [value (dom/value dom-location)]
              (js/alert value))))))))

(defn do-one []
  (add-widget {:type :slider
               :min 0
               :max 10
               :default 2
               :id "awesome"}))

(def test-val 12345678)               
