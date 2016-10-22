(ns teach-by-friends.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]
            [teach-by-friends.consts :as const]
            [clojure.string :as string]))

(defmulti chapter-word-list (fn [type _] type))
(defmethod chapter-word-list :by-rank
  [_ chapter]
  (->> chapter
       (map (fn [[key [first-val]]] {:term key :rank (:overall-number first-val) :sentence (:sentence first-val)}))
       (sort-by :rank)))

(defmethod chapter-word-list :by-alphabet
  [_ chapter]
  (->> chapter
       (map (fn [[key [first-val]]] {:term key :sentence (:sentence first-val)}))
       (sort-by :term)))

(defmethod chapter-word-list :default
  [_ chapter]
  (chapter-word-list :by-rank chapter))

(defn ms-to-mm:ss [ms]
  (let [minutes (js/Math.floor (/ ms 60000))
        seconds (-> ms (mod 60000) (/ 1000) (js/Math.floor))]
    (str
      (if (< minutes 10) "0" "")
      minutes
      ":"
      (if (< seconds 10) "0" "")
      seconds)))

(defmulti timeline-list (fn [type _] type))
(defmethod timeline-list :by-rank
  [_ chapter]
  (->> chapter
       (map (fn [[_ [first-val]]] {:time (ms-to-mm:ss (:from first-val)) :rank (:overall-number first-val)}))
       (sort-by :rank)
       (map :time)))

(defmethod timeline-list :by-alphabet
  [_ chapter]
  (->> chapter
       (map (fn [[key _]] (-> key (first) (string/upper-case))))
       (sort-by identity)))

(defmethod timeline-list :default
  [_ chapter]
  (->> chapter
       (keys)))

(defn term-to-disable [term]
  {:status const/DISABLE_TERM
   :term   term})

(defn term-to-active [term translate]
  {:status    const/ACTIVE_TERM
   :term      term
   :translate translate})

(defn add-status-keys [term-to-translate term-tranlsate terms]
  (let [term-processing-fn (if (nil? term-to-translate)
                             term-to-disable
                             #(if (= % term-to-translate)
                               (term-to-active % term-tranlsate)
                               (term-to-disable %)))]
    (->> terms
         (map term-processing-fn))))

(defn filter-terms-by-search-predicate [terms predicate]
  (if (empty? predicate)
    terms
    (let [pattern (js/RegExp. (str "^" predicate ".+"))]
      (->> terms
           (filter #(.test pattern %))))))

(defn filter-well-known-words [terms well-known-terms]
  (if (empty? well-known-terms)
    terms
    (->> terms
         (filter #(not (contains? well-known-terms %))))))

(register-sub
  :get-chapter
  (fn [db _]
    (let [sort-type (reaction (:sort-chapter @db))
          terms (reaction (chapter-word-list @sort-type (get @db :chapter)))
          well-known-terms (reaction (get @db :well-known-terms))
          filter-by-well-known-terms (reaction (filter-well-known-words @terms @well-known-terms))
          search-predicate (reaction (get @db :search-predicate))]
      (reaction (filter-terms-by-search-predicate @filter-by-well-known-terms @search-predicate)))))

(register-sub ;; TODO: see at use case when need to use search
  :get-timeline-list
  (fn [db _]
    (let [sort-type (reaction (:sort-chapter @db))]
      (reaction (timeline-list @sort-type (get @db :chapter))))))

(register-sub
  :get-sort-type
  (fn [db _]
    (reaction (get @db :sort-chapter))))

(register-sub
  :term-translate
  (fn [db _]
    (reaction (get @db :term-translate))))

(register-sub
  :serials
  (fn [db _]
    (reaction (get @db :serials-list))))

(register-sub
  :seasons
  (fn [db _]
    (reaction (get @db :seasons-list))))

(register-sub
  :chapters
  (fn [db _]
    (reaction (get @db :chapters-list))))

(register-sub
  :show-search?
  (fn [db _]
    (reaction (get @db :show-search?))))

;; Serial bars
(register-sub
  :show-serial-bars?
  (fn [db _]
    (reaction (get @db :show-serial-bars?))))

;; Cover image
(register-sub
  :get-cover-image
  (fn [db _]
    (reaction (get @db :serial-cover-image))))

;; Well known words
(register-sub
  :get-well-known-words
  (fn [db _]
    (reaction (get @db :well-known-terms))))