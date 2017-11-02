// Compiled by ClojureScript 1.9.908 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.object');
goog.require('goog.events');

/**
 * @interface
 */
domina.events.Event = function(){};

/**
 * Prevents the default action, for example a link redirecting to a URL
 */
domina.events.prevent_default = (function domina$events$prevent_default(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$prevent_default$arity$1 == null)))){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__28672__auto__ = (((evt == null))?null:evt);
var m__28673__auto__ = (domina.events.prevent_default[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,evt);
} else {
var m__28673__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
}
});

/**
 * Stops event propagation
 */
domina.events.stop_propagation = (function domina$events$stop_propagation(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$stop_propagation$arity$1 == null)))){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__28672__auto__ = (((evt == null))?null:evt);
var m__28673__auto__ = (domina.events.stop_propagation[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,evt);
} else {
var m__28673__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
}
});

/**
 * Returns the target of the event
 */
domina.events.target = (function domina$events$target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$target$arity$1 == null)))){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__28672__auto__ = (((evt == null))?null:evt);
var m__28673__auto__ = (domina.events.target[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,evt);
} else {
var m__28673__auto____$1 = (domina.events.target["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
}
});

/**
 * Returns the object that had the listener attached
 */
domina.events.current_target = (function domina$events$current_target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$current_target$arity$1 == null)))){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__28672__auto__ = (((evt == null))?null:evt);
var m__28673__auto__ = (domina.events.current_target[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,evt);
} else {
var m__28673__auto____$1 = (domina.events.current_target["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
}
});

/**
 * Returns the type of the the event
 */
domina.events.event_type = (function domina$events$event_type(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$event_type$arity$1 == null)))){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__28672__auto__ = (((evt == null))?null:evt);
var m__28673__auto__ = (domina.events.event_type[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,evt);
} else {
var m__28673__auto____$1 = (domina.events.event_type["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
}
});

/**
 * Returns the original GClosure event
 */
domina.events.raw_event = (function domina$events$raw_event(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$raw_event$arity$1 == null)))){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__28672__auto__ = (((evt == null))?null:evt);
var m__28673__auto__ = (domina.events.raw_event[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,evt);
} else {
var m__28673__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function domina$events$create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if(typeof domina.events.t_domina$events31428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events31428 = (function (f,evt,meta31429){
this.f = f;
this.evt = evt;
this.meta31429 = meta31429;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
domina.events.t_domina$events31428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31430,meta31429__$1){
var self__ = this;
var _31430__$1 = this;
return (new domina.events.t_domina$events31428(self__.f,self__.evt,meta31429__$1));
});

domina.events.t_domina$events31428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31430){
var self__ = this;
var _31430__$1 = this;
return self__.meta31429;
});

domina.events.t_domina$events31428.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL;

domina.events.t_domina$events31428.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events31428.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events31428.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events31428.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events31428.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events31428.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events31428.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__4655__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4655__auto__)){
var val = temp__4655__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
});

domina.events.t_domina$events31428.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__27989__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events31428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta31429","meta31429",-1697874909,null)], null);
});

domina.events.t_domina$events31428.cljs$lang$type = true;

domina.events.t_domina$events31428.cljs$lang$ctorStr = "domina.events/t_domina$events31428";

domina.events.t_domina$events31428.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"domina.events/t_domina$events31428");
});

domina.events.__GT_t_domina$events31428 = (function domina$events$create_listener_function_$___GT_t_domina$events31428(f__$1,evt__$1,meta31429){
return (new domina.events.t_domina$events31428(f__$1,evt__$1,meta31429));
});

}

return (new domina.events.t_domina$events31428(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__28797__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__31431(s__31432){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__31432__$1 = s__31432;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31432__$1);
if(temp__4657__auto__){
var s__31432__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31432__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__31432__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__31434 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__31433 = (0);
while(true){
if((i__31433 < size__28796__auto__)){
var node = cljs.core._nth.call(null,c__28795__auto__,i__31433);
cljs.core.chunk_append.call(null,b__31434,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__31435 = (i__31433 + (1));
i__31433 = G__31435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31434),domina$events$listen_internal_BANG__$_iter__31431.call(null,cljs.core.chunk_rest.call(null,s__31432__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31434),null);
}
} else {
var node = cljs.core.first.call(null,s__31432__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__31431.call(null,cljs.core.rest.call(null,s__31432__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__28797__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var G__31437 = arguments.length;
switch (G__31437) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});

domina.events.listen_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_BANG_ = (function domina$events$capture_BANG_(var_args){
var G__31440 = arguments.length;
switch (G__31440) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});

domina.events.capture_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_once_BANG_ = (function domina$events$listen_once_BANG_(var_args){
var G__31443 = arguments.length;
switch (G__31443) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});

domina.events.listen_once_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_once_BANG_ = (function domina$events$capture_once_BANG_(var_args){
var G__31446 = arguments.length;
switch (G__31446) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});

domina.events.capture_once_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
 */
domina.events.unlisten_BANG_ = (function domina$events$unlisten_BANG_(var_args){
var G__31449 = arguments.length;
switch (G__31449) {
case 0:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__31450 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__31451 = null;
var count__31452 = (0);
var i__31453 = (0);
while(true){
if((i__31453 < count__31452)){
var node = cljs.core._nth.call(null,chunk__31451,i__31453);
goog.events.removeAll(node);

var G__31459 = seq__31450;
var G__31460 = chunk__31451;
var G__31461 = count__31452;
var G__31462 = (i__31453 + (1));
seq__31450 = G__31459;
chunk__31451 = G__31460;
count__31452 = G__31461;
i__31453 = G__31462;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31450);
if(temp__4657__auto__){
var seq__31450__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31450__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__31450__$1);
var G__31463 = cljs.core.chunk_rest.call(null,seq__31450__$1);
var G__31464 = c__28828__auto__;
var G__31465 = cljs.core.count.call(null,c__28828__auto__);
var G__31466 = (0);
seq__31450 = G__31463;
chunk__31451 = G__31464;
count__31452 = G__31465;
i__31453 = G__31466;
continue;
} else {
var node = cljs.core.first.call(null,seq__31450__$1);
goog.events.removeAll(node);

var G__31467 = cljs.core.next.call(null,seq__31450__$1);
var G__31468 = null;
var G__31469 = (0);
var G__31470 = (0);
seq__31450 = G__31467;
chunk__31451 = G__31468;
count__31452 = G__31469;
i__31453 = G__31470;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__31454 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__31455 = null;
var count__31456 = (0);
var i__31457 = (0);
while(true){
if((i__31457 < count__31456)){
var node = cljs.core._nth.call(null,chunk__31455,i__31457);
goog.events.removeAll(node,type__$1);

var G__31471 = seq__31454;
var G__31472 = chunk__31455;
var G__31473 = count__31456;
var G__31474 = (i__31457 + (1));
seq__31454 = G__31471;
chunk__31455 = G__31472;
count__31456 = G__31473;
i__31457 = G__31474;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31454);
if(temp__4657__auto__){
var seq__31454__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31454__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__31454__$1);
var G__31475 = cljs.core.chunk_rest.call(null,seq__31454__$1);
var G__31476 = c__28828__auto__;
var G__31477 = cljs.core.count.call(null,c__28828__auto__);
var G__31478 = (0);
seq__31454 = G__31475;
chunk__31455 = G__31476;
count__31456 = G__31477;
i__31457 = G__31478;
continue;
} else {
var node = cljs.core.first.call(null,seq__31454__$1);
goog.events.removeAll(node,type__$1);

var G__31479 = cljs.core.next.call(null,seq__31454__$1);
var G__31480 = null;
var G__31481 = (0);
var G__31482 = (0);
seq__31454 = G__31479;
chunk__31455 = G__31480;
count__31456 = G__31481;
i__31457 = G__31482;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Returns a seq of a node and its ancestors, starting with the document root.
 */
domina.events.ancestor_nodes = (function domina$events$ancestor_nodes(var_args){
var G__31484 = arguments.length;
switch (G__31484) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return domina.events.ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = (function (n,so_far){
while(true){
var temp__4655__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4655__auto__)){
var parent = temp__4655__auto__;
var G__31486 = parent;
var G__31487 = cljs.core.cons.call(null,parent,so_far);
n = G__31486;
so_far = G__31487;
continue;
} else {
return so_far;
}
break;
}
});

domina.events.ancestor_nodes.cljs$lang$maxFixedArity = 2;

/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_browser_BANG_ = (function domina$events$dispatch_browser_BANG_(source,evt){
evt.target = domina.single_node.call(null,source);

var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__31488_31496 = cljs.core.seq.call(null,ancestors);
var chunk__31489_31497 = null;
var count__31490_31498 = (0);
var i__31491_31499 = (0);
while(true){
if((i__31491_31499 < count__31490_31498)){
var n_31500 = cljs.core._nth.call(null,chunk__31489_31497,i__31491_31499);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_31500;

goog.events.fireListeners(n_31500,evt.type,true,evt);
}

var G__31501 = seq__31488_31496;
var G__31502 = chunk__31489_31497;
var G__31503 = count__31490_31498;
var G__31504 = (i__31491_31499 + (1));
seq__31488_31496 = G__31501;
chunk__31489_31497 = G__31502;
count__31490_31498 = G__31503;
i__31491_31499 = G__31504;
continue;
} else {
var temp__4657__auto___31505 = cljs.core.seq.call(null,seq__31488_31496);
if(temp__4657__auto___31505){
var seq__31488_31506__$1 = temp__4657__auto___31505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31488_31506__$1)){
var c__28828__auto___31507 = cljs.core.chunk_first.call(null,seq__31488_31506__$1);
var G__31508 = cljs.core.chunk_rest.call(null,seq__31488_31506__$1);
var G__31509 = c__28828__auto___31507;
var G__31510 = cljs.core.count.call(null,c__28828__auto___31507);
var G__31511 = (0);
seq__31488_31496 = G__31508;
chunk__31489_31497 = G__31509;
count__31490_31498 = G__31510;
i__31491_31499 = G__31511;
continue;
} else {
var n_31512 = cljs.core.first.call(null,seq__31488_31506__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_31512;

goog.events.fireListeners(n_31512,evt.type,true,evt);
}

var G__31513 = cljs.core.next.call(null,seq__31488_31506__$1);
var G__31514 = null;
var G__31515 = (0);
var G__31516 = (0);
seq__31488_31496 = G__31513;
chunk__31489_31497 = G__31514;
count__31490_31498 = G__31515;
i__31491_31499 = G__31516;
continue;
}
} else {
}
}
break;
}

var seq__31492_31517 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__31493_31518 = null;
var count__31494_31519 = (0);
var i__31495_31520 = (0);
while(true){
if((i__31495_31520 < count__31494_31519)){
var n_31521 = cljs.core._nth.call(null,chunk__31493_31518,i__31495_31520);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_31521;

goog.events.fireListeners(n_31521,evt.type,false,evt);
}

var G__31522 = seq__31492_31517;
var G__31523 = chunk__31493_31518;
var G__31524 = count__31494_31519;
var G__31525 = (i__31495_31520 + (1));
seq__31492_31517 = G__31522;
chunk__31493_31518 = G__31523;
count__31494_31519 = G__31524;
i__31495_31520 = G__31525;
continue;
} else {
var temp__4657__auto___31526 = cljs.core.seq.call(null,seq__31492_31517);
if(temp__4657__auto___31526){
var seq__31492_31527__$1 = temp__4657__auto___31526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31492_31527__$1)){
var c__28828__auto___31528 = cljs.core.chunk_first.call(null,seq__31492_31527__$1);
var G__31529 = cljs.core.chunk_rest.call(null,seq__31492_31527__$1);
var G__31530 = c__28828__auto___31528;
var G__31531 = cljs.core.count.call(null,c__28828__auto___31528);
var G__31532 = (0);
seq__31492_31517 = G__31529;
chunk__31493_31518 = G__31530;
count__31494_31519 = G__31531;
i__31495_31520 = G__31532;
continue;
} else {
var n_31533 = cljs.core.first.call(null,seq__31492_31527__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_31533;

goog.events.fireListeners(n_31533,evt.type,false,evt);
}

var G__31534 = cljs.core.next.call(null,seq__31492_31527__$1);
var G__31535 = null;
var G__31536 = (0);
var G__31537 = (0);
seq__31492_31517 = G__31534;
chunk__31493_31518 = G__31535;
count__31494_31519 = G__31536;
i__31495_31520 = G__31537;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
 */
domina.events.dispatch_event_target_BANG_ = (function domina$events$dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
 * Tests whether the object is a goog.event.EventTarget
 */
domina.events.is_event_target_QMARK_ = (function domina$events$is_event_target_QMARK_(o){
var and__27977__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__27977__auto__)){
return o.dispatchEvent;
} else {
return and__27977__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var G__31539 = arguments.length;
switch (G__31539) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__31540_31551 = cljs.core.seq.call(null,evt_map);
var chunk__31541_31552 = null;
var count__31542_31553 = (0);
var i__31543_31554 = (0);
while(true){
if((i__31543_31554 < count__31542_31553)){
var vec__31544_31555 = cljs.core._nth.call(null,chunk__31541_31552,i__31543_31554);
var k_31556 = cljs.core.nth.call(null,vec__31544_31555,(0),null);
var v_31557 = cljs.core.nth.call(null,vec__31544_31555,(1),null);
(evt[k_31556] = v_31557);

var G__31558 = seq__31540_31551;
var G__31559 = chunk__31541_31552;
var G__31560 = count__31542_31553;
var G__31561 = (i__31543_31554 + (1));
seq__31540_31551 = G__31558;
chunk__31541_31552 = G__31559;
count__31542_31553 = G__31560;
i__31543_31554 = G__31561;
continue;
} else {
var temp__4657__auto___31562 = cljs.core.seq.call(null,seq__31540_31551);
if(temp__4657__auto___31562){
var seq__31540_31563__$1 = temp__4657__auto___31562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31540_31563__$1)){
var c__28828__auto___31564 = cljs.core.chunk_first.call(null,seq__31540_31563__$1);
var G__31565 = cljs.core.chunk_rest.call(null,seq__31540_31563__$1);
var G__31566 = c__28828__auto___31564;
var G__31567 = cljs.core.count.call(null,c__28828__auto___31564);
var G__31568 = (0);
seq__31540_31551 = G__31565;
chunk__31541_31552 = G__31566;
count__31542_31553 = G__31567;
i__31543_31554 = G__31568;
continue;
} else {
var vec__31547_31569 = cljs.core.first.call(null,seq__31540_31563__$1);
var k_31570 = cljs.core.nth.call(null,vec__31547_31569,(0),null);
var v_31571 = cljs.core.nth.call(null,vec__31547_31569,(1),null);
(evt[k_31570] = v_31571);

var G__31572 = cljs.core.next.call(null,seq__31540_31563__$1);
var G__31573 = null;
var G__31574 = (0);
var G__31575 = (0);
seq__31540_31551 = G__31572;
chunk__31541_31552 = G__31573;
count__31542_31553 = G__31574;
i__31543_31554 = G__31575;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});

domina.events.dispatch_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Given a listener key, removes the listener.
 */
domina.events.unlisten_by_key_BANG_ = (function domina$events$unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
 * Returns a sequence of event listeners for all the nodes in the
 * content of a given type.
 */
domina.events.get_listeners = (function domina$events$get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__31576_SHARP_){
return goog.events.getListeners(p1__31576_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
