// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.ui');
goog.require('cljs.core');
goog.require('domina');
goog.require('domina.events');
goog.require('cljs.looperscript.vector_fns');
goog.require('cljs.looperscript.bindings');
cljs.looperscript.ui.ui_location = cljs.core.atom.call(null,null);
cljs.looperscript.ui.widgets = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.ui.widget_vals = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.ui.set_ui_location = (function cljs$looperscript$ui$set_ui_location(div){
return cljs.core.reset_BANG_.call(null,cljs.looperscript.ui.ui_location,div);
});
cljs.looperscript.ui.ui_append = (function cljs$looperscript$ui$ui_append(x){
return domina.append_BANG_.call(null,cljs.core.deref.call(null,cljs.looperscript.ui.ui_location),x);
});
cljs.looperscript.ui.add_widget = (function cljs$looperscript$ui$add_widget(params){
var G__33186 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(params);
var G__33186__$1 = (((G__33186 instanceof cljs.core.Keyword))?G__33186.fqn:null);
switch (G__33186__$1) {
case "slider":
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params);
var _min = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(params);
var _max = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(params);
var default$ = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(params);
var s = ["<input type=\"range\" ","id=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"\" ","min=\"0\" max=\"10000\" value=\"2000\" ","class=\"slider\">"].join('');
cljs.looperscript.ui.ui_append.call(null,s);

var dom_location = domina.by_id.call(null,id);
var _ = cljs.core.println.call(null,new cljs.core.Keyword(null,"DOMLOC","DOMLOC",52638071),dom_location);
return domina.events.listen_BANG_.call(null,dom_location,new cljs.core.Keyword(null,"change","change",-1163046502),((function (dom_location,_,id,_min,_max,default$,s,G__33186,G__33186__$1){
return (function (e){
cljs.core.println.call(null,new cljs.core.Keyword(null,"EVENT_CALLED","EVENT_CALLED",-1284261393));

var value = domina.value.call(null,dom_location);
return alert(value);
});})(dom_location,_,id,_min,_max,default$,s,G__33186,G__33186__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33186__$1)].join('')));

}
});
cljs.looperscript.ui.add_widget.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"slider","slider",-472668865),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(10),new cljs.core.Keyword(null,"default","default",-1987822328),(2),new cljs.core.Keyword(null,"id","id",-1388402092),"awesome"], null));

//# sourceMappingURL=ui.js.map?rel=1513399443153
