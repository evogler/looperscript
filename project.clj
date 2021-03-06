(defproject looperscript "0.1.0-SNAPSHOT"
  :description "Like Looper but interpreted in the browser and with Web Audio."
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.2.1"]
                 [org.clojure/clojurescript "1.9.908"]
                 [domina "1.0.3-SNAPSHOT"]
                 [com.cemerick/pprng "0.0.3"]
                 [org.clojars.magomimmo/shoreleave-remote-ring "0.3.1-SNAPSHOT"]
                 [org.clojars.magomimmo/shoreleave-remote "0.3.1-SNAPSHOT"]
                 [org.clojure/tools.reader "0.10.0"]
                 [com.taoensso/tufte "1.1.2"] 
                 [instaparse "1.4.8"
                       :exclusions [org.clojure/clojure]]]
  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-ring "0.8.13"]
            [lein-externs "0.1.3"]
            [lein-figwheel "0.5.13"]
;;            [lein-git-deps "0.0.1-SNAPSHOT"]
            ]
;;  :git-dependencies [["https://github.com/lbradstreet/instaparse-cljs.git"]]

  :ring {:handler looperscript.remotes/app}
  :cljsbuild {:builds
              {:fat {:source-paths ["src/cljs"]
                     :figwheel true
                     :compiler {:output-to "resources/public/js/looperscript.js"
                                :output-dir "resources/public/js"
                                :asset-path "js"
                                :main "cljs.looperscript.looperscript"
                                :externs ["externs/externs.js"]}}
               :thin {:source-paths ["src/cljs"]
                     :figwheel false
                     :compiler {:output-to "resources/public/js/looperscript.js"
                                :optimizations :advanced
;;                                :pretty-print false
                                :pretty-print true
                                :externs ["externs/externs.js"]}}}}
  :figwheel {
    :css-dirs ["resources/public/css"]
    :http-server-root "public"
;;    :websocket-url "ws://localhost:3449/figwheel-ws"
    })
