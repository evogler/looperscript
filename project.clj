(defproject looperscript "0.1.0-SNAPSHOT"
  :description "Like Looper but interpreted in the browser and with Web Audio."
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.2.1"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [domina "1.0.3-SNAPSHOT"]
                 [hiccups "0.3.0"]
                 [org.clojars.magomimmo/shoreleave-remote-ring "0.3.1-SNAPSHOT"]
                 [org.clojars.magomimmo/shoreleave-remote "0.3.1-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.13"]
            [lein-externs "0.1.3"]]
  :ring {:handler looperscript.remotes/app}
  :cljsbuild {:builds
              [{:source-paths ["src/cljs"]
                :compiler {:output-to "resources/public/js/looperscript.js"
                           :optimizations :whitespace
                           :pretty-print true
                           :externs ["externs/externs.js"]}}]})
