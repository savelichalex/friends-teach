(ns souptitle-desktop.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :get-message
 (fn [db _]
   (:message db)))

(defn change-content-ids
  ([content]
   (change-content-ids content []))
  ([content parent-id]
   (->> content
        (map (fn [el]
               (-> (if (nil? (:content el))
                     el
                     (assoc
                      el
                      :content
                      (change-content-ids
                       (:content el)
                       (into parent-id [(:id el)]))))
                   (assoc :id
                          (into parent-id [(:id el)]))))))))

(defn mark-active-content [content active-content]
  (->> content
       (map (fn [el]
              (-> (if (nil? (:content el))
                    el
                    (assoc
                     el
                     :content
                     (mark-active-content
                      (:content el)
                      active-content)))
                  (assoc :active? (= (:id el) active-content)))))))

(reg-sub
 :get-raw-content
 (fn [db _]
   (change-content-ids (:content db))))

(reg-sub
 :get-active-content-idx
 (fn [db _]
   (:active-content db)))

(reg-sub
 :get-content
 :<- [:get-raw-content]
 :<- [:get-active-content-idx]
 (fn [[content active-content] _]
   (-> content
       (mark-active-content active-content))))
