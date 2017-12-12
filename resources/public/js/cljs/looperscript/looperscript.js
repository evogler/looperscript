// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.looperscript');
goog.require('cljs.core');
goog.require('domina');
goog.require('domina.events');
goog.require('cljs.looperscript.address_bar');
goog.require('cljs.looperscript.audio');
goog.require('cljs.looperscript.logging');
goog.require('cljs.looperscript.player');
goog.require('cljs.looperscript.get_parts');
var L = cljs.looperscript.looperscript;
cljs.looperscript.looperscript.relisten_BANG_ = (function cljs$looperscript$looperscript$relisten_BANG_(id,f){
domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,id),new cljs.core.Keyword(null,"click","click",1912301393));

return domina.events.listen_BANG_.call(null,domina.by_id.call(null,id),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
return f.call(null);
}));
});
cljs.looperscript.looperscript.relisten_BANG_.call(null,"play",cljs.looperscript.player.play);
cljs.looperscript.looperscript.relisten_BANG_.call(null,"pause",cljs.looperscript.player.stop);
cljs.looperscript.looperscript.relisten_BANG_.call(null,"update",(function() { 
var G__79755__delegate = function (args){
return cljs.looperscript.player.update_STAR_.call(null,cljs.looperscript.get_parts.get_parts.call(null));
};
var G__79755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79756__i = 0, G__79756__a = new Array(arguments.length -  0);
while (G__79756__i < G__79756__a.length) {G__79756__a[G__79756__i] = arguments[G__79756__i + 0]; ++G__79756__i;}
  args = new cljs.core.IndexedSeq(G__79756__a,0,null);
} 
return G__79755__delegate.call(this,args);};
G__79755.cljs$lang$maxFixedArity = 0;
G__79755.cljs$lang$applyTo = (function (arglist__79757){
var args = cljs.core.seq(arglist__79757);
return G__79755__delegate(args);
});
G__79755.cljs$core$IFn$_invoke$arity$variadic = G__79755__delegate;
return G__79755;
})()
);
cljs.looperscript.looperscript.relisten_BANG_.call(null,"link",cljs.looperscript.address_bar.text__GT_link);
cljs.looperscript.looperscript.relisten_BANG_.call(null,"load",cljs.core.partial.call(null,cljs.looperscript.address_bar.load_link__GT_text,""));
cljs.looperscript.looperscript.relisten_BANG_.call(null,"stop",cljs.looperscript.player.reset_button);
cljs.looperscript.looperscript.bind_key = (function cljs$looperscript$looperscript$bind_key(name,windows_key,mac_key,f){
return (editor["commands"]).addCommand((function (){var obj79759 = {"name":name,"bindKey":(function (){var obj79761 = {"win":windows_key,"mac":mac_key};
return obj79761;
})(),"exec":f};
return obj79759;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-Shift-u","Command-Enter",(function() { 
var G__79762__delegate = function (args){
return cljs.looperscript.player.update_STAR_.call(null,cljs.looperscript.get_parts.get_parts.call(null));
};
var G__79762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79763__i = 0, G__79763__a = new Array(arguments.length -  0);
while (G__79763__i < G__79763__a.length) {G__79763__a[G__79763__i] = arguments[G__79763__i + 0]; ++G__79763__i;}
  args = new cljs.core.IndexedSeq(G__79763__a,0,null);
} 
return G__79762__delegate.call(this,args);};
G__79762.cljs$lang$maxFixedArity = 0;
G__79762.cljs$lang$applyTo = (function (arglist__79764){
var args = cljs.core.seq(arglist__79764);
return G__79762__delegate(args);
});
G__79762.cljs$core$IFn$_invoke$arity$variadic = G__79762__delegate;
return G__79762;
})()
);
cljs.looperscript.looperscript.bind_key.call(null,"link","Ctrl-Shift-l","Command-Shift-L",(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.player.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.player.play);
cljs.looperscript.audio.load_some_drums.call(null);

//# sourceMappingURL=looperscript.js.map?rel=1513049392494
