(ns cljs.looperscript.oldparser)

(defn num-or-ratio [s]
  (if-let [[_ n d] (re-find #"([^/]+)/([^/]+)" s)]
    [:ratio (read-string n) (read-string d)]
    (read-string s)))

(defn string->numbers [s]
  (->> s
       (re-seq #"(-?[0-9./]+)")
       (map first)
       (map num-or-ratio)))

(defn process-rhythm-ratios [v]
  (loop [accum []
         rem (string->numbers v)
         num 1 den 1]
    (if (empty? rem) accum
        (let [n (first rem)]
          (if (vector? n)
            (let [[_ nu de] n]
              (recur accum (rest rem) (* nu num) (* de den)))
            (recur (conj accum (* (/ num den) n)) (rest rem) num den))))))

(defn update-rhythm! []
  (let [rhythm-text (dom/value (dom/by-id "rhythm-text"))
        new-rhythm (process-rhythm-ratios rhythm-text)]
    (if (< 0 (count new-rhythm))
      (reset! rhythm new-rhythm))))

(defn token->ratio [s]
  (if-let [r (re-seq #"([0-9.-]+)/([0-9.-]+)" s)]
    (let [[_ n d] (first r)]
      [:ratio (read-string n) (read-string d)])))

(defn token->number [s]
  (if-let [n (re-seq #"[0-9.-]+" s)]
    (read-string (first n))))

(defn process-sound-token [s]
  (some #(% s)
        [audio/drum-codes
         token->ratio
         token->number]))


(defn string->sounds [s]
  (->> s
       (re-seq #"[kshdbr]|[0-9./-]+")
       (map process-sound-token)))

(defn update-sounds! []
  (let [sound-text (-> "sound-text" dom/by-id dom/value)
        new-sounds (string->sounds sound-text)]
    (if (< 0 (count new-sounds))
      (reset! sounds new-sounds))))

(defn update-volumes! []
  (let [volume-text (-> "volume-text" dom/by-id dom/value)
        new-volumes (string->numbers volume-text)]
    (if (< 0 (count new-volumes))
      (reset! volumes new-volumes))))

(defn update-parts! []
  (update-rhythm!)
  (update-sounds!)
  (update-volumes!))
