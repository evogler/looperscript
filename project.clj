(defproject looperscript "0.1.0-SNAPSHOT"
  :description "Like Looper but interpreted in the browser and with Web Audio."
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.6.0"]
;;               [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [compojure "1.2.1"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [domina "1.0.3-SNAPSHOT"]
;;                 [hiccups "0.3.0"]
                 [com.cemerick/pprng "0.0.3"]
                 [org.clojars.magomimmo/shoreleave-remote-ring "0.3.1-SNAPSHOT"]
                 [org.clojars.magomimmo/shoreleave-remote "0.3.1-SNAPSHOT"]
                 [com.lucasbradstreet/instaparse-cljs "1.4.1.0"
                       :exclusions [org.clojure/clojure]]]
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-ring "0.8.13"]
            [lein-externs "0.1.3"]
;;            [lein-git-deps "0.0.1-SNAPSHOT"]
            ]
;;  :git-dependencies [["https://github.com/lbradstreet/instaparse-cljs.git"]]

  :ring {:handler looperscript.remotes/app}
  :cljsbuild {:builds
              {:fat {:source-paths ["src/cljs"]
                     :compiler {:output-to "resources/public/js/looperscript.js"
                                :output-dir "resources/public/js"
;                                :optimizations :whitespace
                                :pretty-print true
                                :source-map "resources/public/js/looperscript.js.map"
                                :externs ["externs/externs.js"]}}
               :thin {:source-paths ["src/cljs"]
                     :compiler {:output-to "resources/public/js/looperscript.js"
                                :optimizations :advanced
                                :pretty-print false
                                :externs ["externs/externs.js"]}}}})
