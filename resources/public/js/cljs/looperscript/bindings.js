// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.bindings');
goog.require('cljs.core');
goog.require('domina');
goog.require('domina.events');
cljs.looperscript.bindings.relisten_BANG_ = (function cljs$looperscript$bindings$relisten_BANG_(id,f){
domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,id),new cljs.core.Keyword(null,"click","click",1912301393));

return domina.events.listen_BANG_.call(null,domina.by_id.call(null,id),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
return f.call(null);
}));
});
cljs.looperscript.bindings.bind_key = (function cljs$looperscript$bindings$bind_key(name,windows_key,mac_key,f){
return (editor["commands"]).addCommand((function (){var obj37774 = {"name":name,"bindKey":(function (){var obj37776 = {"win":windows_key,"mac":mac_key};
return obj37776;
})(),"exec":f};
return obj37774;
})());
});

//# sourceMappingURL=bindings.js.map?rel=1513303809495
