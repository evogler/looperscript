// Compiled by ClojureScript 0.0-2371
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj21299 = {};return obj21299;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3628__auto__ = evt;if(and__3628__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3628__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4277__auto__ = (((evt == null))?null:evt);return (function (){var or__3640__auto__ = (domina.events.prevent_default[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (domina.events.prevent_default["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3628__auto__ = evt;if(and__3628__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3628__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4277__auto__ = (((evt == null))?null:evt);return (function (){var or__3640__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3628__auto__ = evt;if(and__3628__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3628__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4277__auto__ = (((evt == null))?null:evt);return (function (){var or__3640__auto__ = (domina.events.target[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (domina.events.target["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3628__auto__ = evt;if(and__3628__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3628__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4277__auto__ = (((evt == null))?null:evt);return (function (){var or__3640__auto__ = (domina.events.current_target[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (domina.events.current_target["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3628__auto__ = evt;if(and__3628__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3628__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4277__auto__ = (((evt == null))?null:evt);return (function (){var or__3640__auto__ = (domina.events.event_type[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (domina.events.event_type["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3628__auto__ = evt;if(and__3628__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3628__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4277__auto__ = (((evt == null))?null:evt);return (function (){var or__3640__auto__ = (domina.events.raw_event[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (domina.events.raw_event["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t21303 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t21303 = (function (evt,f,create_listener_function,meta21304){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta21304 = meta21304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t21303.cljs$lang$type = true;
domina.events.t21303.cljs$lang$ctorStr = "domina.events/t21303";
domina.events.t21303.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"domina.events/t21303");
});
domina.events.t21303.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t21303.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3640__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return not_found;
}
});
domina.events.t21303.prototype.domina$events$Event$ = true;
domina.events.t21303.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t21303.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t21303.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t21303.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t21303.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t21303.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t21303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21305){var self__ = this;
var _21305__$1 = this;return self__.meta21304;
});
domina.events.t21303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21305,meta21304__$1){var self__ = this;
var _21305__$1 = this;return (new domina.events.t21303(self__.evt,self__.f,self__.create_listener_function,meta21304__$1));
});
domina.events.__GT_t21303 = (function __GT_t21303(evt__$1,f__$1,create_listener_function__$1,meta21304){return (new domina.events.t21303(evt__$1,f__$1,create_listener_function__$1,meta21304));
});
}
return (new domina.events.t21303(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4379__auto__ = ((function (f,t){
return (function iter__21310(s__21311){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__21311__$1 = s__21311;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21311__$1);if(temp__4126__auto__)
{var s__21311__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21311__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__21311__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__21313 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__21312 = (0);while(true){
if((i__21312 < size__4378__auto__))
{var node = cljs.core._nth.call(null,c__4377__auto__,i__21312);cljs.core.chunk_append.call(null,b__21313,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__21314 = (i__21312 + (1));
i__21312 = G__21314;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21313),iter__21310.call(null,cljs.core.chunk_rest.call(null,s__21311__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21313),null);
}
} else
{var node = cljs.core.first.call(null,s__21311__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__21310.call(null,cljs.core.rest.call(null,s__21311__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4379__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__21323 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21324 = null;var count__21325 = (0);var i__21326 = (0);while(true){
if((i__21326 < count__21325))
{var node = cljs.core._nth.call(null,chunk__21324,i__21326);goog.events.removeAll(node);
{
var G__21331 = seq__21323;
var G__21332 = chunk__21324;
var G__21333 = count__21325;
var G__21334 = (i__21326 + (1));
seq__21323 = G__21331;
chunk__21324 = G__21332;
count__21325 = G__21333;
i__21326 = G__21334;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21323);if(temp__4126__auto__)
{var seq__21323__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21323__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__21323__$1);{
var G__21335 = cljs.core.chunk_rest.call(null,seq__21323__$1);
var G__21336 = c__4410__auto__;
var G__21337 = cljs.core.count.call(null,c__4410__auto__);
var G__21338 = (0);
seq__21323 = G__21335;
chunk__21324 = G__21336;
count__21325 = G__21337;
i__21326 = G__21338;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21323__$1);goog.events.removeAll(node);
{
var G__21339 = cljs.core.next.call(null,seq__21323__$1);
var G__21340 = null;
var G__21341 = (0);
var G__21342 = (0);
seq__21323 = G__21339;
chunk__21324 = G__21340;
count__21325 = G__21341;
i__21326 = G__21342;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__21327 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21328 = null;var count__21329 = (0);var i__21330 = (0);while(true){
if((i__21330 < count__21329))
{var node = cljs.core._nth.call(null,chunk__21328,i__21330);goog.events.removeAll(node,type__$1);
{
var G__21343 = seq__21327;
var G__21344 = chunk__21328;
var G__21345 = count__21329;
var G__21346 = (i__21330 + (1));
seq__21327 = G__21343;
chunk__21328 = G__21344;
count__21329 = G__21345;
i__21330 = G__21346;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21327);if(temp__4126__auto__)
{var seq__21327__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21327__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__21327__$1);{
var G__21347 = cljs.core.chunk_rest.call(null,seq__21327__$1);
var G__21348 = c__4410__auto__;
var G__21349 = cljs.core.count.call(null,c__4410__auto__);
var G__21350 = (0);
seq__21327 = G__21347;
chunk__21328 = G__21348;
count__21329 = G__21349;
i__21330 = G__21350;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21327__$1);goog.events.removeAll(node,type__$1);
{
var G__21351 = cljs.core.next.call(null,seq__21327__$1);
var G__21352 = null;
var G__21353 = (0);
var G__21354 = (0);
seq__21327 = G__21351;
chunk__21328 = G__21352;
count__21329 = G__21353;
i__21330 = G__21354;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__21355 = parent;
var G__21356 = cljs.core.cons.call(null,parent,so_far);
n = G__21355;
so_far = G__21356;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){evt.target = domina.single_node.call(null,source);
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__21365_21373 = cljs.core.seq.call(null,ancestors);var chunk__21366_21374 = null;var count__21367_21375 = (0);var i__21368_21376 = (0);while(true){
if((i__21368_21376 < count__21367_21375))
{var n_21377 = cljs.core._nth.call(null,chunk__21366_21374,i__21368_21376);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21377;
goog.events.fireListeners(n_21377,evt.type,true,evt);
}
{
var G__21378 = seq__21365_21373;
var G__21379 = chunk__21366_21374;
var G__21380 = count__21367_21375;
var G__21381 = (i__21368_21376 + (1));
seq__21365_21373 = G__21378;
chunk__21366_21374 = G__21379;
count__21367_21375 = G__21380;
i__21368_21376 = G__21381;
continue;
}
} else
{var temp__4126__auto___21382 = cljs.core.seq.call(null,seq__21365_21373);if(temp__4126__auto___21382)
{var seq__21365_21383__$1 = temp__4126__auto___21382;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21365_21383__$1))
{var c__4410__auto___21384 = cljs.core.chunk_first.call(null,seq__21365_21383__$1);{
var G__21385 = cljs.core.chunk_rest.call(null,seq__21365_21383__$1);
var G__21386 = c__4410__auto___21384;
var G__21387 = cljs.core.count.call(null,c__4410__auto___21384);
var G__21388 = (0);
seq__21365_21373 = G__21385;
chunk__21366_21374 = G__21386;
count__21367_21375 = G__21387;
i__21368_21376 = G__21388;
continue;
}
} else
{var n_21389 = cljs.core.first.call(null,seq__21365_21383__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21389;
goog.events.fireListeners(n_21389,evt.type,true,evt);
}
{
var G__21390 = cljs.core.next.call(null,seq__21365_21383__$1);
var G__21391 = null;
var G__21392 = (0);
var G__21393 = (0);
seq__21365_21373 = G__21390;
chunk__21366_21374 = G__21391;
count__21367_21375 = G__21392;
i__21368_21376 = G__21393;
continue;
}
}
} else
{}
}
break;
}
var seq__21369_21394 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__21370_21395 = null;var count__21371_21396 = (0);var i__21372_21397 = (0);while(true){
if((i__21372_21397 < count__21371_21396))
{var n_21398 = cljs.core._nth.call(null,chunk__21370_21395,i__21372_21397);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21398;
goog.events.fireListeners(n_21398,evt.type,false,evt);
}
{
var G__21399 = seq__21369_21394;
var G__21400 = chunk__21370_21395;
var G__21401 = count__21371_21396;
var G__21402 = (i__21372_21397 + (1));
seq__21369_21394 = G__21399;
chunk__21370_21395 = G__21400;
count__21371_21396 = G__21401;
i__21372_21397 = G__21402;
continue;
}
} else
{var temp__4126__auto___21403 = cljs.core.seq.call(null,seq__21369_21394);if(temp__4126__auto___21403)
{var seq__21369_21404__$1 = temp__4126__auto___21403;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21369_21404__$1))
{var c__4410__auto___21405 = cljs.core.chunk_first.call(null,seq__21369_21404__$1);{
var G__21406 = cljs.core.chunk_rest.call(null,seq__21369_21404__$1);
var G__21407 = c__4410__auto___21405;
var G__21408 = cljs.core.count.call(null,c__4410__auto___21405);
var G__21409 = (0);
seq__21369_21394 = G__21406;
chunk__21370_21395 = G__21407;
count__21371_21396 = G__21408;
i__21372_21397 = G__21409;
continue;
}
} else
{var n_21410 = cljs.core.first.call(null,seq__21369_21404__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21410;
goog.events.fireListeners(n_21410,evt.type,false,evt);
}
{
var G__21411 = cljs.core.next.call(null,seq__21369_21404__$1);
var G__21412 = null;
var G__21413 = (0);
var G__21414 = (0);
seq__21369_21394 = G__21411;
chunk__21370_21395 = G__21412;
count__21371_21396 = G__21413;
i__21372_21397 = G__21414;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3628__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3628__auto__))
{return o.dispatchEvent;
} else
{return and__3628__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__21421_21427 = cljs.core.seq.call(null,evt_map);var chunk__21422_21428 = null;var count__21423_21429 = (0);var i__21424_21430 = (0);while(true){
if((i__21424_21430 < count__21423_21429))
{var vec__21425_21431 = cljs.core._nth.call(null,chunk__21422_21428,i__21424_21430);var k_21432 = cljs.core.nth.call(null,vec__21425_21431,(0),null);var v_21433 = cljs.core.nth.call(null,vec__21425_21431,(1),null);(evt[k_21432] = v_21433);
{
var G__21434 = seq__21421_21427;
var G__21435 = chunk__21422_21428;
var G__21436 = count__21423_21429;
var G__21437 = (i__21424_21430 + (1));
seq__21421_21427 = G__21434;
chunk__21422_21428 = G__21435;
count__21423_21429 = G__21436;
i__21424_21430 = G__21437;
continue;
}
} else
{var temp__4126__auto___21438 = cljs.core.seq.call(null,seq__21421_21427);if(temp__4126__auto___21438)
{var seq__21421_21439__$1 = temp__4126__auto___21438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21421_21439__$1))
{var c__4410__auto___21440 = cljs.core.chunk_first.call(null,seq__21421_21439__$1);{
var G__21441 = cljs.core.chunk_rest.call(null,seq__21421_21439__$1);
var G__21442 = c__4410__auto___21440;
var G__21443 = cljs.core.count.call(null,c__4410__auto___21440);
var G__21444 = (0);
seq__21421_21427 = G__21441;
chunk__21422_21428 = G__21442;
count__21423_21429 = G__21443;
i__21424_21430 = G__21444;
continue;
}
} else
{var vec__21426_21445 = cljs.core.first.call(null,seq__21421_21439__$1);var k_21446 = cljs.core.nth.call(null,vec__21426_21445,(0),null);var v_21447 = cljs.core.nth.call(null,vec__21426_21445,(1),null);(evt[k_21446] = v_21447);
{
var G__21448 = cljs.core.next.call(null,seq__21421_21439__$1);
var G__21449 = null;
var G__21450 = (0);
var G__21451 = (0);
seq__21421_21427 = G__21448;
chunk__21422_21428 = G__21449;
count__21423_21429 = G__21450;
i__21424_21430 = G__21451;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__21452_SHARP_){return goog.events.getListeners(p1__21452_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
