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
cljs.looperscript.ui.do_one.call(null);
cljs.looperscript.bindings.relisten_BANG_.call(null,"play",cljs.looperscript.player.play);
cljs.looperscript.bindings.relisten_BANG_.call(null,"pause",cljs.looperscript.player.stop);
cljs.looperscript.bindings.relisten_BANG_.call(null,"update",(function() { 
var G__37941__delegate = function (args){
return cljs.looperscript.player.update_STAR_.call(null,cljs.looperscript.get_parts.get_parts.call(null));
};
var G__37941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37942__i = 0, G__37942__a = new Array(arguments.length -  0);
while (G__37942__i < G__37942__a.length) {G__37942__a[G__37942__i] = arguments[G__37942__i + 0]; ++G__37942__i;}
  args = new cljs.core.IndexedSeq(G__37942__a,0,null);
} 
return G__37941__delegate.call(this,args);};
G__37941.cljs$lang$maxFixedArity = 0;
G__37941.cljs$lang$applyTo = (function (arglist__37943){
var args = cljs.core.seq(arglist__37943);
return G__37941__delegate(args);
});
G__37941.cljs$core$IFn$_invoke$arity$variadic = G__37941__delegate;
return G__37941;
})()
);
cljs.looperscript.bindings.relisten_BANG_.call(null,"link",cljs.looperscript.address_bar.text__GT_link);
cljs.looperscript.bindings.relisten_BANG_.call(null,"load",cljs.core.partial.call(null,cljs.looperscript.address_bar.load_link__GT_text,""));
cljs.looperscript.bindings.relisten_BANG_.call(null,"stop",cljs.looperscript.player.reset_button);
cljs.looperscript.bindings.relisten_BANG_.call(null,"UI",(function() { 
var G__37944__delegate = function (args){
domina.set_styles_BANG_.call(null,domina.by_id.call(null,"script_area"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null));

return domina.set_styles_BANG_.call(null,domina.by_id.call(null,"UI_area"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null));
};
var G__37944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37945__i = 0, G__37945__a = new Array(arguments.length -  0);
while (G__37945__i < G__37945__a.length) {G__37945__a[G__37945__i] = arguments[G__37945__i + 0]; ++G__37945__i;}
  args = new cljs.core.IndexedSeq(G__37945__a,0,null);
} 
return G__37944__delegate.call(this,args);};
G__37944.cljs$lang$maxFixedArity = 0;
G__37944.cljs$lang$applyTo = (function (arglist__37946){
var args = cljs.core.seq(arglist__37946);
return G__37944__delegate(args);
});
G__37944.cljs$core$IFn$_invoke$arity$variadic = G__37944__delegate;
return G__37944;
})()
);
cljs.looperscript.bindings.relisten_BANG_.call(null,"script",(function() { 
var G__37947__delegate = function (args){
domina.set_styles_BANG_.call(null,domina.by_id.call(null,"script_area"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null));

return domina.set_styles_BANG_.call(null,domina.by_id.call(null,"UI_area"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null));
};
var G__37947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37948__i = 0, G__37948__a = new Array(arguments.length -  0);
while (G__37948__i < G__37948__a.length) {G__37948__a[G__37948__i] = arguments[G__37948__i + 0]; ++G__37948__i;}
  args = new cljs.core.IndexedSeq(G__37948__a,0,null);
} 
return G__37947__delegate.call(this,args);};
G__37947.cljs$lang$maxFixedArity = 0;
G__37947.cljs$lang$applyTo = (function (arglist__37949){
var args = cljs.core.seq(arglist__37949);
return G__37947__delegate(args);
});
G__37947.cljs$core$IFn$_invoke$arity$variadic = G__37947__delegate;
return G__37947;
})()
);
cljs.looperscript.bindings.bind_key.call(null,"update","Ctrl-Shift-u","Command-Enter",(function() { 
var G__37950__delegate = function (args){
return cljs.looperscript.player.update_STAR_.call(null,cljs.looperscript.get_parts.get_parts.call(null));
};
var G__37950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37951__i = 0, G__37951__a = new Array(arguments.length -  0);
while (G__37951__i < G__37951__a.length) {G__37951__a[G__37951__i] = arguments[G__37951__i + 0]; ++G__37951__i;}
  args = new cljs.core.IndexedSeq(G__37951__a,0,null);
} 
return G__37950__delegate.call(this,args);};
G__37950.cljs$lang$maxFixedArity = 0;
G__37950.cljs$lang$applyTo = (function (arglist__37952){
var args = cljs.core.seq(arglist__37952);
return G__37950__delegate(args);
});
G__37950.cljs$core$IFn$_invoke$arity$variadic = G__37950__delegate;
return G__37950;
})()
);
cljs.looperscript.bindings.bind_key.call(null,"link","Ctrl-Shift-l","Command-Shift-L",(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.bindings.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.player.reset_button);
cljs.looperscript.bindings.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.player.play);

//# sourceMappingURL=looperscript.js.map?rel=1514752957525
