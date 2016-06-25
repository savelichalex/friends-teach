(ns teach-by-friends.shared.scenes.home-scene
	(:require [teach-by-friends.shared.ui :as ui :refer [DataSource]]
						[reagent.core :as r]
						[re-frame.core :refer [subscribe dispatch dispatch-sync]]
						[teach-by-friends.shared.components.season-row :refer [season-row]]
						[teach-by-friends.shared.components.chapter-row :refer [chapter-row]]
						[clojure.string :as string]))

(def ReactNative (js/require "react-native"))

(def seasons-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))
(def chapters-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))

(defn nav-bar []
	[ui/view {:style {:flex             3
										:flex-direction   "row"
										:align-items      "center"
										:background-color "rgb(72, 86, 155)"}}
	 [ui/view {:style {:flex        5
										 :align-items "center"}}
		[ui/text {:style {:color     "white"
											:font-size 30}}
		 (string/upper-case
			 (str "seasons"))]]])

(defn get-home-scene [activity-indicator]
	(fn home-scene []
		(let [seasons (subscribe [:seasons])]
			(fn []
				[ui/view {:style {:flex 1 :flex-direction "column" :align-items "stretch"}}
				 [nav-bar]
				 (if (not (nil? @seasons))
					 [ui/list-view {:dataSource (.cloneWithRows seasons-ds (clj->js @seasons))
													:render-row #(r/as-element (season-row %))
													:style      {:flex 14}}]
					 [ui/view {:style {:flex 14 :justify-content "center" :align-items "center"}}
						[activity-indicator]])]))))