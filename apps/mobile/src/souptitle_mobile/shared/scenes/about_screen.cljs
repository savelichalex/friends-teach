(ns souptitle-mobile.shared.scenes.about-screen
  (:require [reagent.core :as r]
            [souptitle-mobile.shared.ui :as ui]
            [souptitle-mobile.shared.navigation :as nav]
            [souptitle-mobile.shared.icons :refer [get-icon]]))

(def about-text "
Made with love
to great TV shows
by Alexey Savelev and Eugene Bondarev")

(defn about-comp []
  [ui/view {:style {:flex 1
                    :flex-direction "column"
                    :align-items "center"
                    :justify-content "center"
                    :padding-left 30
                    :padding-right 30}}
   [ui/text {:style {:color "rgb(155,155,155)"
                     :font-size 14
                     :text-align "center"}}
    about-text]])

;; (defscreen
;;   about-screen
;;   ([props]
;;    [about-comp props])
;;   ([_]
;;    {:title          "About"
;;     :navigatorStyle {:navBarTextColor          "#fff"
;;                      :navBarTransparent        true
;;                      :navBarButtonColor        "#fff"
;;                      :statusBarTextColorScheme "light"
;;                      :screenColor "black"}}))

;; (defn get-about-screen []
;;   (fn []
;;     [screen {:navigation-bar {:title "About"}}
;;      [about-comp]]))

(defn about-tab-icon [props]
  (r/as-element
   (if (true? (.-focused props))
     [ui/image {:source (get-icon :information-active)}]
     [ui/image {:source (get-icon :information)}])))

(defn get-about-screen []
  (nav/create-screen
   {:navigation-bar {:title "About"}
    :tab-bar {:label "About"
              :icon about-tab-icon}}
   about-comp))
