// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.looperscript');
goog.require('cljs.core');
goog.require('domina');
goog.require('domina.events');
goog.require('cljs.looperscript.address_bar');
goog.require('cljs.looperscript.bindings');
goog.require('cljs.looperscript.player');
goog.require('cljs.looperscript.ui');
goog.require('cljs.looperscript.get_parts');
cljs.looperscript.ui.set_ui_location.call(null,domina.by_id.call(null,"UI_area"));
cljs.looperscript.bindings.relisten_BANG_.call(null,"play",cljs.looperscript.player.play);
cljs.looperscript.bindings.relisten_BANG_.call(null,"pause",cljs.looperscript.player.stop);
cljs.looperscript.bindings.relisten_BANG_.call(null,"update",(function() { 
var G__33431__delegate = function (args){
return cljs.looperscript.player.update_STAR_.call(null,cljs.looperscript.get_parts.get_parts.call(null));
};
var G__33431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33432__i = 0, G__33432__a = new Array(arguments.length -  0);
while (G__33432__i < G__33432__a.length) {G__33432__a[G__33432__i] = arguments[G__33432__i + 0]; ++G__33432__i;}
  args = new cljs.core.IndexedSeq(G__33432__a,0,null);
} 
return G__33431__delegate.call(this,args);};
G__33431.cljs$lang$maxFixedArity = 0;
G__33431.cljs$lang$applyTo = (function (arglist__33433){
var args = cljs.core.seq(arglist__33433);
return G__33431__delegate(args);
});
G__33431.cljs$core$IFn$_invoke$arity$variadic = G__33431__delegate;
return G__33431;
})()
);
cljs.looperscript.bindings.relisten_BANG_.call(null,"link",cljs.looperscript.address_bar.text__GT_link);
cljs.looperscript.bindings.relisten_BANG_.call(null,"load",cljs.core.partial.call(null,cljs.looperscript.address_bar.load_link__GT_text,""));
cljs.looperscript.bindings.relisten_BANG_.call(null,"stop",cljs.looperscript.player.reset_button);
cljs.looperscript.bindings.relisten_BANG_.call(null,"UI",(function() { 
var G__33434__delegate = function (args){
domina.set_styles_BANG_.call(null,domina.by_id.call(null,"script_area"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null));

return domina.set_styles_BANG_.call(null,domina.by_id.call(null,"UI_area"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null));
};
var G__33434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33435__i = 0, G__33435__a = new Array(arguments.length -  0);
while (G__33435__i < G__33435__a.length) {G__33435__a[G__33435__i] = arguments[G__33435__i + 0]; ++G__33435__i;}
  args = new cljs.core.IndexedSeq(G__33435__a,0,null);
} 
return G__33434__delegate.call(this,args);};
G__33434.cljs$lang$maxFixedArity = 0;
G__33434.cljs$lang$applyTo = (function (arglist__33436){
var args = cljs.core.seq(arglist__33436);
return G__33434__delegate(args);
});
G__33434.cljs$core$IFn$_invoke$arity$variadic = G__33434__delegate;
return G__33434;
})()
);
cljs.looperscript.bindings.relisten_BANG_.call(null,"script",(function() { 
var G__33437__delegate = function (args){
domina.set_styles_BANG_.call(null,domina.by_id.call(null,"script_area"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null));

return domina.set_styles_BANG_.call(null,domina.by_id.call(null,"UI_area"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null));
};
var G__33437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33438__i = 0, G__33438__a = new Array(arguments.length -  0);
while (G__33438__i < G__33438__a.length) {G__33438__a[G__33438__i] = arguments[G__33438__i + 0]; ++G__33438__i;}
  args = new cljs.core.IndexedSeq(G__33438__a,0,null);
} 
return G__33437__delegate.call(this,args);};
G__33437.cljs$lang$maxFixedArity = 0;
G__33437.cljs$lang$applyTo = (function (arglist__33439){
var args = cljs.core.seq(arglist__33439);
return G__33437__delegate(args);
});
G__33437.cljs$core$IFn$_invoke$arity$variadic = G__33437__delegate;
return G__33437;
})()
);
cljs.looperscript.bindings.bind_key.call(null,"update","Ctrl-Shift-u","Command-Enter",(function() { 
var G__33440__delegate = function (args){
return cljs.looperscript.player.update_STAR_.call(null,cljs.looperscript.get_parts.get_parts.call(null));
};
var G__33440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33441__i = 0, G__33441__a = new Array(arguments.length -  0);
while (G__33441__i < G__33441__a.length) {G__33441__a[G__33441__i] = arguments[G__33441__i + 0]; ++G__33441__i;}
  args = new cljs.core.IndexedSeq(G__33441__a,0,null);
} 
return G__33440__delegate.call(this,args);};
G__33440.cljs$lang$maxFixedArity = 0;
G__33440.cljs$lang$applyTo = (function (arglist__33442){
var args = cljs.core.seq(arglist__33442);
return G__33440__delegate(args);
});
G__33440.cljs$core$IFn$_invoke$arity$variadic = G__33440__delegate;
return G__33440;
})()
);
cljs.looperscript.bindings.bind_key.call(null,"link","Ctrl-Shift-l","Command-Shift-L",(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.bindings.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.player.reset_button);
cljs.looperscript.bindings.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.player.play);

//# sourceMappingURL=looperscript.js.map?rel=1513452437708
