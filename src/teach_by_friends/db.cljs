(ns teach-by-friends.db
  (:require [schema.core :as s :include-macros true]))

(enable-console-print!)

;; initial state of app-db
(def app-db {:chapter nil
						 :sort-chapter :by-rank
						 :term-translate nil
						 :target-lang "ru"
						 :seasons-list nil
						 :chapters-list nil
						 :nav {:route nil
									 :props nil}})