// Compiled by ClojureScript 1.7.170 {}
goog.provide('teach_by_friends.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('schema.core');
goog.require('teach_by_friends.db');
goog.require('teach_by_friends.parser');
goog.require('teach_by_friends.shared.ui');
goog.require('teach_by_friends.remote_db_service');
cljs.core.enable_console_print_BANG_.call(null);
teach_by_friends.handlers.ReactNative = require("react-native");
teach_by_friends.handlers.NativeModules = teach_by_friends.handlers.ReactNative.NativeModules;
teach_by_friends.handlers.SecretConfigManager = teach_by_friends.handlers.NativeModules.SecretConfigManager;
teach_by_friends.handlers.SecretConfigManager.getConfig("SecretConfig",(function (a){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),cljs.core.js__GT_clj.call(null,a,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null));
}));
teach_by_friends.handlers.YANDEX_TRANSLATE_API_KEY = "trnsl.1.1.20160530T190821Z.59ce9ff185d1c573.e05024eb700b7792b46b29fd152cecc6e2aa0ca4";
teach_by_friends.handlers.SERIALS_URL = "/serials.json";
teach_by_friends.handlers.get_query_string_for_translate = (function teach_by_friends$handlers$get_query_string_for_translate(term,lang){
return [cljs.core.str("https://translate.yandex.net/api/v1.5/tr.json/translate?"),cljs.core.str("text="),cljs.core.str(term),cljs.core.str("&lang=en-"),cljs.core.str(lang),cljs.core.str("&key="),cljs.core.str(teach_by_friends.handlers.YANDEX_TRANSLATE_API_KEY)].join('');
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__23596){
var vec__23597 = p__23596;
var ___$1 = cljs.core.nth.call(null,vec__23597,(0),null);
var app_config = cljs.core.nth.call(null,vec__23597,(1),null);
var remote_db = (new teach_by_friends.remote_db_service.__GT_DropboxDB(new cljs.core.Keyword(null,"DropboxOAuthToken","DropboxOAuthToken",-1008051842).cljs$core$IFn$_invoke$arity$1(app_config)));
return cljs.core.assoc.call(null,teach_by_friends.db.app_db,new cljs.core.Keyword(null,"remote-db","remote-db",-1151515528),remote_db);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"serials-load-success","serials-load-success",1802279900),(function (db,p__23598){
var vec__23599 = p__23598;
var _ = cljs.core.nth.call(null,vec__23599,(0),null);
var serials = cljs.core.nth.call(null,vec__23599,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"serials-list","serials-list",741269226),serials);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"serials-load-error","serials-load-error",52431066),(function (db,p__23600){
var vec__23601 = p__23600;
var _ = cljs.core.nth.call(null,vec__23601,(0),null);
var error = cljs.core.nth.call(null,vec__23601,(1),null);
cljs.core.print.call(null,error);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"seasons-load","seasons-load",950204241),(function (db,p__23604){
var vec__23605 = p__23604;
var _ = cljs.core.nth.call(null,vec__23605,(0),null);
var map__23606 = cljs.core.nth.call(null,vec__23605,(1),null);
var map__23606__$1 = ((((!((map__23606 == null)))?((((map__23606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23606):map__23606);
var seasons = cljs.core.get.call(null,map__23606__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var title = cljs.core.get.call(null,map__23606__$1,new cljs.core.Keyword(null,"title","title",636505583));
setTimeout(((function (vec__23605,_,map__23606,map__23606__$1,seasons,title){
return (function (){
return teach_by_friends.remote_db_service.download_json.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"remote-db","remote-db",-1151515528)),seasons).then(((function (vec__23605,_,map__23606,map__23606__$1,seasons,title){
return (function (p1__23602_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seasons-load-success","seasons-load-success",-347476544),p1__23602_SHARP_], null));
});})(vec__23605,_,map__23606,map__23606__$1,seasons,title))
).catch(((function (vec__23605,_,map__23606,map__23606__$1,seasons,title){
return (function (p1__23603_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seasons-load-error","seasons-load-error",1711712249),p1__23603_SHARP_], null));
});})(vec__23605,_,map__23606,map__23606__$1,seasons,title))
);
});})(vec__23605,_,map__23606,map__23606__$1,seasons,title))
,(300));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"seasons-list","seasons-list",1682515118),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"route","route",329891309)], null),new cljs.core.Keyword(null,"seasons","seasons",1033111474)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"props","props",453281727)], null),title),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"push","push",799791267));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"seasons-load-success","seasons-load-success",-347476544),(function (db,p__23608){
var vec__23609 = p__23608;
var _ = cljs.core.nth.call(null,vec__23609,(0),null);
var seasons = cljs.core.nth.call(null,vec__23609,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"seasons-list","seasons-list",1682515118),seasons);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"seasons-load-error","seasons-load-error",1711712249),(function (db,p__23610){
var vec__23611 = p__23610;
var _ = cljs.core.nth.call(null,vec__23611,(0),null);
var error = cljs.core.nth.call(null,vec__23611,(1),null);
cljs.core.print.call(null,error);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"resort-chapter","resort-chapter",-606074972),(function (db,p__23612){
var vec__23613 = p__23612;
var _ = cljs.core.nth.call(null,vec__23613,(0),null);
var sort_type = cljs.core.nth.call(null,vec__23613,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sort-chapter","sort-chapter",-1653976856),sort_type);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword("nav","pop","nav/pop",-1734698693),(function (db,p__23614){
var vec__23615 = p__23614;
var _ = cljs.core.nth.call(null,vec__23615,(0),null);
var route = cljs.core.nth.call(null,vec__23615,(1),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"route","route",329891309)], null),route),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"pop","pop",-1734778776));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"translate-term","translate-term",767769496),(function (db,p__23618){
var vec__23619 = p__23618;
var _ = cljs.core.nth.call(null,vec__23619,(0),null);
var term = cljs.core.nth.call(null,vec__23619,(1),null);
teach_by_friends.remote_db_service.response_from_json.call(null,teach_by_friends.remote_db_service.parse_response.call(null,fetch(teach_by_friends.handlers.get_query_string_for_translate.call(null,term,new cljs.core.Keyword(null,"target-lang","target-lang",1237032111).cljs$core$IFn$_invoke$arity$1(db))))).then(((function (vec__23619,_,term){
return (function (p1__23616_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"term-translate-success","term-translate-success",-999551347),term,p1__23616_SHARP_], null));
});})(vec__23619,_,term))
).catch(((function (vec__23619,_,term){
return (function (p1__23617_SHARP_){
return cljs.core.print.call(null,p1__23617_SHARP_);
});})(vec__23619,_,term))
);

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"term-to-translate","term-to-translate",-797183124),term),new cljs.core.Keyword(null,"term-translate","term-translate",-1448030054),null);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"term-translate-success","term-translate-success",-999551347),(function (db,p__23620){
var vec__23621 = p__23620;
var _ = cljs.core.nth.call(null,vec__23621,(0),null);
var term = cljs.core.nth.call(null,vec__23621,(1),null);
var translate = cljs.core.nth.call(null,vec__23621,(2),null);
var in_chapter = cljs.core.first.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chapter","chapter",-238644368),term], null)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"term-translate","term-translate",-1448030054),cljs.core.assoc.call(null,in_chapter,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(translate)));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword("nav","pop-term","nav/pop-term",-2035197625),(function (db,_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","pop","nav/pop",-1734698693),new cljs.core.Keyword(null,"chapter","chapter",-238644368)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"term-translate","term-translate",-1448030054),null);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"chapters-load","chapters-load",-629452251),(function (db,p__23624){
var vec__23625 = p__23624;
var _ = cljs.core.nth.call(null,vec__23625,(0),null);
var map__23626 = cljs.core.nth.call(null,vec__23625,(1),null);
var map__23626__$1 = ((((!((map__23626 == null)))?((((map__23626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23626):map__23626);
var chapters = cljs.core.get.call(null,map__23626__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var title = cljs.core.get.call(null,map__23626__$1,new cljs.core.Keyword(null,"title","title",636505583));
setTimeout(((function (vec__23625,_,map__23626,map__23626__$1,chapters,title){
return (function (){
return teach_by_friends.remote_db_service.download_json.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"remote-db","remote-db",-1151515528)),chapters).then(((function (vec__23625,_,map__23626,map__23626__$1,chapters,title){
return (function (chapters__$1){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chapter-load","chapter-load",-1996615859),(0),cljs.core.first.call(null,chapters__$1)], null));

return chapters__$1;
});})(vec__23625,_,map__23626,map__23626__$1,chapters,title))
).then(((function (vec__23625,_,map__23626,map__23626__$1,chapters,title){
return (function (p1__23622_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chapters-load-success","chapters-load-success",1099664111),p1__23622_SHARP_], null));
});})(vec__23625,_,map__23626,map__23626__$1,chapters,title))
).catch(((function (vec__23625,_,map__23626,map__23626__$1,chapters,title){
return (function (p1__23623_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chapters-load-error","chapters-load-error",462135402),p1__23623_SHARP_], null));
});})(vec__23625,_,map__23626,map__23626__$1,chapters,title))
);
});})(vec__23625,_,map__23626,map__23626__$1,chapters,title))
,(300));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chapter","chapter",-238644368),null),new cljs.core.Keyword(null,"chapters-list","chapters-list",-1697596234),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"route","route",329891309)], null),new cljs.core.Keyword(null,"chapter","chapter",-238644368)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"props","props",453281727)], null),title),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"push","push",799791267));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"chapters-load-success","chapters-load-success",1099664111),(function (db,p__23630){
var vec__23631 = p__23630;
var _ = cljs.core.nth.call(null,vec__23631,(0),null);
var chapters = cljs.core.nth.call(null,vec__23631,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chapters-list","chapters-list",-1697596234),cljs.core.map_indexed.call(null,((function (vec__23631,_,chapters){
return (function (p1__23629_SHARP_,p2__23628_SHARP_){
return cljs.core.assoc.call(null,p2__23628_SHARP_,new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.call(null,p1__23629_SHARP_,(0)));
});})(vec__23631,_,chapters))
,chapters));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"chapters-load-error","chapters-load-error",462135402),(function (db,p__23632){
var vec__23633 = p__23632;
var _ = cljs.core.nth.call(null,vec__23633,(0),null);
var error = cljs.core.nth.call(null,vec__23633,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chapters-list","chapters-list",-1697596234),null);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"chapter-load","chapter-load",-1996615859),(function (db,p__23637){
var vec__23638 = p__23637;
var _ = cljs.core.nth.call(null,vec__23638,(0),null);
var number = cljs.core.nth.call(null,vec__23638,(1),null);
var map__23639 = cljs.core.nth.call(null,vec__23638,(2),null);
var map__23639__$1 = ((((!((map__23639 == null)))?((((map__23639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23639):map__23639);
var srt = cljs.core.get.call(null,map__23639__$1,new cljs.core.Keyword(null,"path","path",-188191168));
teach_by_friends.remote_db_service.download.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"remote-db","remote-db",-1151515528)),srt).then(((function (vec__23638,_,number,map__23639,map__23639__$1,srt){
return (function (p1__23634_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srt-load-success","srt-load-success",2015081144),teach_by_friends.parser.parse_srt.call(null,p1__23634_SHARP_)], null));
});})(vec__23638,_,number,map__23639,map__23639__$1,srt))
).catch(((function (vec__23638,_,number,map__23639,map__23639__$1,srt){
return (function (p1__23635_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srt-load-error","srt-load-error",-1882753327),p1__23635_SHARP_], null));
});})(vec__23638,_,number,map__23639,map__23639__$1,srt))
);

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"chapters-list","chapters-list",-1697596234),((function (vec__23638,_,number,map__23639,map__23639__$1,srt){
return (function (p1__23636_SHARP_){
return cljs.core.map_indexed.call(null,((function (vec__23638,_,number,map__23639,map__23639__$1,srt){
return (function (index,chapter){
return cljs.core.assoc.call(null,chapter,new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.call(null,index,number));
});})(vec__23638,_,number,map__23639,map__23639__$1,srt))
,p1__23636_SHARP_);
});})(vec__23638,_,number,map__23639,map__23639__$1,srt))
),new cljs.core.Keyword(null,"chapter","chapter",-238644368),null),new cljs.core.Keyword(null,"sort-chapter","sort-chapter",-1653976856),new cljs.core.Keyword(null,"by-rank","by-rank",-1696056256));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"srt-load-success","srt-load-success",2015081144),(function (db,p__23641){
var vec__23642 = p__23641;
var _ = cljs.core.nth.call(null,vec__23642,(0),null);
var chapter = cljs.core.nth.call(null,vec__23642,(1),null);
cljs.core.print.call(null,chapter);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chapter","chapter",-238644368),chapter);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"srt-load-error","srt-load-error",-1882753327),(function (db,p__23643){
var vec__23644 = p__23643;
var _ = cljs.core.nth.call(null,vec__23644,(0),null);
var error = cljs.core.nth.call(null,vec__23644,(1),null);
cljs.core.print.call(null,error);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chapter","chapter",-238644368),null);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"toggle-search","toggle-search",-171716059),(function (db,_){
return cljs.core.update.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-predicate","search-predicate",-1704442311),""),new cljs.core.Keyword(null,"show-search?","show-search?",684663920),cljs.core.not);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"change-search-predicate","change-search-predicate",345055281),(function (db,p__23645){
var vec__23646 = p__23645;
var _ = cljs.core.nth.call(null,vec__23646,(0),null);
var predicate = cljs.core.nth.call(null,vec__23646,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-predicate","search-predicate",-1704442311),predicate);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-to-well-known","add-to-well-known",1817994438),(function (db,p__23647){
var vec__23648 = p__23647;
var _ = cljs.core.nth.call(null,vec__23648,(0),null);
var term = cljs.core.nth.call(null,vec__23648,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"well-known-terms","well-known-terms",953034400),cljs.core.conj,term);
}));

//# sourceMappingURL=handlers.js.map