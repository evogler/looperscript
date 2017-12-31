(ns cljs.looperscript.player
  (:require
    [instaparse.core :as insta]
    [cljs.looperscript.audio :refer [load-some-drums]]
    [cljs.looperscript.logging :refer [log log->]]
    [cljs.looperscript.next-note-fn :as nnfn]
    [cljs.looperscript.get-parts :as get-parts]
    [cljs.looperscript.start-time :refer [get-current-start-time reset-clock! now]]
    [cljs.looperscript.scheduler :as sched]))

(load-some-drums)

(defonce playing (atom false))

(def play-delay-time 2.5)

(defn stop []
  (reset! playing false)
  (sched/kill-playing-interval)
  (sched/kill-sounds))

(defn reset-button []
  (stop)
  (reset-clock!))

(defn update* [parts]
  (let [params (:params parts)
        init (:init parts)
        parts (-> parts (dissoc :params) (dissoc :init))]
     (if (insta/failure? parts)
       (log (str (vec parts)))
       (let [new-nnfns
              (vec (for [part (vals parts)]
                (nnfn/next-note-fn part (get-current-start-time) params)))]
         ;;  each next-note-fn catch up to current time
         (println :INIT init)
         (doseq [nnfn new-nnfns]
           (loop []
             (if (and (deref sched/last-queue-time)
                      @playing
                      (< sched/queue-time-interval (- (now) (deref sched/last-queue-time))))
               ;(queue-notes)
               nil)
             (when (> (now) (nnfn :time-pos))
               (nnfn)
               (recur))))
         (sched/kill-unstarted-sounds)
         (sched/queue-notes new-nnfns)))))

(defn play []
  (let []
    (if (nil? (get-current-start-time)) (reset-clock! (+ (now) play-delay-time)))
    (update* (get-parts/get-parts)) ; parts)
    (sched/kill-playing-interval)
    (sched/set-playing-interval sched/queue-notes)
    (reset! playing true)))
