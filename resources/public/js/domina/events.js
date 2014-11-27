// Compiled by ClojureScript 0.0-2371
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj8408 = {};return obj8408;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t8412 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t8412 = (function (evt,f,create_listener_function,meta8413){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta8413 = meta8413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t8412.cljs$lang$type = true;
domina.events.t8412.cljs$lang$ctorStr = "domina.events/t8412";
domina.events.t8412.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"domina.events/t8412");
});
domina.events.t8412.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t8412.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3640__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return not_found;
}
});
domina.events.t8412.prototype.domina$events$Event$ = true;
domina.events.t8412.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t8412.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t8412.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t8412.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t8412.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t8412.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t8412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8414){var self__ = this;
var _8414__$1 = this;return self__.meta8413;
});
domina.events.t8412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8414,meta8413__$1){var self__ = this;
var _8414__$1 = this;return (new domina.events.t8412(self__.evt,self__.f,self__.create_listener_function,meta8413__$1));
});
domina.events.__GT_t8412 = (function __GT_t8412(evt__$1,f__$1,create_listener_function__$1,meta8413){return (new domina.events.t8412(evt__$1,f__$1,create_listener_function__$1,meta8413));
});
}
return (new domina.events.t8412(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4379__auto__ = ((function (f,t){
return (function iter__8419(s__8420){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__8420__$1 = s__8420;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8420__$1);if(temp__4126__auto__)
{var s__8420__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8420__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__8420__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__8422 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__8421 = (0);while(true){
if((i__8421 < size__4378__auto__))
{var node = cljs.core._nth.call(null,c__4377__auto__,i__8421);cljs.core.chunk_append.call(null,b__8422,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__8423 = (i__8421 + (1));
i__8421 = G__8423;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8422),iter__8419.call(null,cljs.core.chunk_rest.call(null,s__8420__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8422),null);
}
} else
{var node = cljs.core.first.call(null,s__8420__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__8419.call(null,cljs.core.rest.call(null,s__8420__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__8432 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8433 = null;var count__8434 = (0);var i__8435 = (0);while(true){
if((i__8435 < count__8434))
{var node = cljs.core._nth.call(null,chunk__8433,i__8435);goog.events.removeAll(node);
{
var G__8440 = seq__8432;
var G__8441 = chunk__8433;
var G__8442 = count__8434;
var G__8443 = (i__8435 + (1));
seq__8432 = G__8440;
chunk__8433 = G__8441;
count__8434 = G__8442;
i__8435 = G__8443;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8432);if(temp__4126__auto__)
{var seq__8432__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8432__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__8432__$1);{
var G__8444 = cljs.core.chunk_rest.call(null,seq__8432__$1);
var G__8445 = c__4410__auto__;
var G__8446 = cljs.core.count.call(null,c__4410__auto__);
var G__8447 = (0);
seq__8432 = G__8444;
chunk__8433 = G__8445;
count__8434 = G__8446;
i__8435 = G__8447;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__8432__$1);goog.events.removeAll(node);
{
var G__8448 = cljs.core.next.call(null,seq__8432__$1);
var G__8449 = null;
var G__8450 = (0);
var G__8451 = (0);
seq__8432 = G__8448;
chunk__8433 = G__8449;
count__8434 = G__8450;
i__8435 = G__8451;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__8436 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8437 = null;var count__8438 = (0);var i__8439 = (0);while(true){
if((i__8439 < count__8438))
{var node = cljs.core._nth.call(null,chunk__8437,i__8439);goog.events.removeAll(node,type__$1);
{
var G__8452 = seq__8436;
var G__8453 = chunk__8437;
var G__8454 = count__8438;
var G__8455 = (i__8439 + (1));
seq__8436 = G__8452;
chunk__8437 = G__8453;
count__8438 = G__8454;
i__8439 = G__8455;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8436);if(temp__4126__auto__)
{var seq__8436__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8436__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__8436__$1);{
var G__8456 = cljs.core.chunk_rest.call(null,seq__8436__$1);
var G__8457 = c__4410__auto__;
var G__8458 = cljs.core.count.call(null,c__4410__auto__);
var G__8459 = (0);
seq__8436 = G__8456;
chunk__8437 = G__8457;
count__8438 = G__8458;
i__8439 = G__8459;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__8436__$1);goog.events.removeAll(node,type__$1);
{
var G__8460 = cljs.core.next.call(null,seq__8436__$1);
var G__8461 = null;
var G__8462 = (0);
var G__8463 = (0);
seq__8436 = G__8460;
chunk__8437 = G__8461;
count__8438 = G__8462;
i__8439 = G__8463;
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
var G__8464 = parent;
var G__8465 = cljs.core.cons.call(null,parent,so_far);
n = G__8464;
so_far = G__8465;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__8474_8482 = cljs.core.seq.call(null,ancestors);var chunk__8475_8483 = null;var count__8476_8484 = (0);var i__8477_8485 = (0);while(true){
if((i__8477_8485 < count__8476_8484))
{var n_8486 = cljs.core._nth.call(null,chunk__8475_8483,i__8477_8485);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8486;
goog.events.fireListeners(n_8486,evt.type,true,evt);
}
{
var G__8487 = seq__8474_8482;
var G__8488 = chunk__8475_8483;
var G__8489 = count__8476_8484;
var G__8490 = (i__8477_8485 + (1));
seq__8474_8482 = G__8487;
chunk__8475_8483 = G__8488;
count__8476_8484 = G__8489;
i__8477_8485 = G__8490;
continue;
}
} else
{var temp__4126__auto___8491 = cljs.core.seq.call(null,seq__8474_8482);if(temp__4126__auto___8491)
{var seq__8474_8492__$1 = temp__4126__auto___8491;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8474_8492__$1))
{var c__4410__auto___8493 = cljs.core.chunk_first.call(null,seq__8474_8492__$1);{
var G__8494 = cljs.core.chunk_rest.call(null,seq__8474_8492__$1);
var G__8495 = c__4410__auto___8493;
var G__8496 = cljs.core.count.call(null,c__4410__auto___8493);
var G__8497 = (0);
seq__8474_8482 = G__8494;
chunk__8475_8483 = G__8495;
count__8476_8484 = G__8496;
i__8477_8485 = G__8497;
continue;
}
} else
{var n_8498 = cljs.core.first.call(null,seq__8474_8492__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8498;
goog.events.fireListeners(n_8498,evt.type,true,evt);
}
{
var G__8499 = cljs.core.next.call(null,seq__8474_8492__$1);
var G__8500 = null;
var G__8501 = (0);
var G__8502 = (0);
seq__8474_8482 = G__8499;
chunk__8475_8483 = G__8500;
count__8476_8484 = G__8501;
i__8477_8485 = G__8502;
continue;
}
}
} else
{}
}
break;
}
var seq__8478_8503 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__8479_8504 = null;var count__8480_8505 = (0);var i__8481_8506 = (0);while(true){
if((i__8481_8506 < count__8480_8505))
{var n_8507 = cljs.core._nth.call(null,chunk__8479_8504,i__8481_8506);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8507;
goog.events.fireListeners(n_8507,evt.type,false,evt);
}
{
var G__8508 = seq__8478_8503;
var G__8509 = chunk__8479_8504;
var G__8510 = count__8480_8505;
var G__8511 = (i__8481_8506 + (1));
seq__8478_8503 = G__8508;
chunk__8479_8504 = G__8509;
count__8480_8505 = G__8510;
i__8481_8506 = G__8511;
continue;
}
} else
{var temp__4126__auto___8512 = cljs.core.seq.call(null,seq__8478_8503);if(temp__4126__auto___8512)
{var seq__8478_8513__$1 = temp__4126__auto___8512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8478_8513__$1))
{var c__4410__auto___8514 = cljs.core.chunk_first.call(null,seq__8478_8513__$1);{
var G__8515 = cljs.core.chunk_rest.call(null,seq__8478_8513__$1);
var G__8516 = c__4410__auto___8514;
var G__8517 = cljs.core.count.call(null,c__4410__auto___8514);
var G__8518 = (0);
seq__8478_8503 = G__8515;
chunk__8479_8504 = G__8516;
count__8480_8505 = G__8517;
i__8481_8506 = G__8518;
continue;
}
} else
{var n_8519 = cljs.core.first.call(null,seq__8478_8513__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8519;
goog.events.fireListeners(n_8519,evt.type,false,evt);
}
{
var G__8520 = cljs.core.next.call(null,seq__8478_8513__$1);
var G__8521 = null;
var G__8522 = (0);
var G__8523 = (0);
seq__8478_8503 = G__8520;
chunk__8479_8504 = G__8521;
count__8480_8505 = G__8522;
i__8481_8506 = G__8523;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__8530_8536 = cljs.core.seq.call(null,evt_map);var chunk__8531_8537 = null;var count__8532_8538 = (0);var i__8533_8539 = (0);while(true){
if((i__8533_8539 < count__8532_8538))
{var vec__8534_8540 = cljs.core._nth.call(null,chunk__8531_8537,i__8533_8539);var k_8541 = cljs.core.nth.call(null,vec__8534_8540,(0),null);var v_8542 = cljs.core.nth.call(null,vec__8534_8540,(1),null);(evt[k_8541] = v_8542);
{
var G__8543 = seq__8530_8536;
var G__8544 = chunk__8531_8537;
var G__8545 = count__8532_8538;
var G__8546 = (i__8533_8539 + (1));
seq__8530_8536 = G__8543;
chunk__8531_8537 = G__8544;
count__8532_8538 = G__8545;
i__8533_8539 = G__8546;
continue;
}
} else
{var temp__4126__auto___8547 = cljs.core.seq.call(null,seq__8530_8536);if(temp__4126__auto___8547)
{var seq__8530_8548__$1 = temp__4126__auto___8547;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8530_8548__$1))
{var c__4410__auto___8549 = cljs.core.chunk_first.call(null,seq__8530_8548__$1);{
var G__8550 = cljs.core.chunk_rest.call(null,seq__8530_8548__$1);
var G__8551 = c__4410__auto___8549;
var G__8552 = cljs.core.count.call(null,c__4410__auto___8549);
var G__8553 = (0);
seq__8530_8536 = G__8550;
chunk__8531_8537 = G__8551;
count__8532_8538 = G__8552;
i__8533_8539 = G__8553;
continue;
}
} else
{var vec__8535_8554 = cljs.core.first.call(null,seq__8530_8548__$1);var k_8555 = cljs.core.nth.call(null,vec__8535_8554,(0),null);var v_8556 = cljs.core.nth.call(null,vec__8535_8554,(1),null);(evt[k_8555] = v_8556);
{
var G__8557 = cljs.core.next.call(null,seq__8530_8548__$1);
var G__8558 = null;
var G__8559 = (0);
var G__8560 = (0);
seq__8530_8536 = G__8557;
chunk__8531_8537 = G__8558;
count__8532_8538 = G__8559;
i__8533_8539 = G__8560;
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
return (function (p1__8561_SHARP_){return goog.events.getListeners(p1__8561_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
