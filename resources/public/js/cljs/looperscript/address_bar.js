// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.address_bar');
goog.require('cljs.core');
goog.require('domina');
cljs.looperscript.address_bar.default_loop_text = "bpm 237/.5\npart click sound h time 2 volume .5 1\npart form sound b rate .3 .6 .6 .6 time 8/1 8\npart beat sound d\ntime 2 3 2 3 2 2 3";
cljs.looperscript.address_bar.put_text_in_get = (function cljs$looperscript$address_bar$put_text_in_get(s){
var preface = ((document["location"])["pathname"]);
return history.pushState((new Object()),"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(preface),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
});
cljs.looperscript.address_bar.text__GT_link = (function cljs$looperscript$address_bar$text__GT_link(){
var text = escape(btoa(editor.getValue()));
return cljs.looperscript.address_bar.put_text_in_get.call(null,["?loop=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''));
});
cljs.looperscript.address_bar.get_text_from_get = (function cljs$looperscript$address_bar$get_text_from_get(){
var t = cljs.core.last.call(null,cljs.core.re_find.call(null,/^\?loop=([\s\S]*)/,((document["location"])["search"])));
if(cljs.core.truth_(t)){
return atob(unescape(t));
} else {
return null;
}
});
cljs.looperscript.address_bar.set_loop_text = (function cljs$looperscript$address_bar$set_loop_text(s){
editor.setValue(s);

editor.moveCursorTo((0),(0));

return editor.clearSelection();
});
cljs.looperscript.address_bar.load_link__GT_text = (function cljs$looperscript$address_bar$load_link__GT_text(default$){
var get_text = cljs.looperscript.address_bar.get_text_from_get.call(null);
var loop_text = (function (){var or__27709__auto__ = get_text;
if(cljs.core.truth_(or__27709__auto__)){
return or__27709__auto__;
} else {
return default$;
}
})();
return cljs.looperscript.address_bar.set_loop_text.call(null,loop_text);
});

//# sourceMappingURL=address_bar.js.map?rel=1511212143124
