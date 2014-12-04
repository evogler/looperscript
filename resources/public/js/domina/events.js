// Compiled by ClojureScript 0.0-2371
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj8465 = {};return obj8465;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t8469 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t8469 = (function (evt,f,create_listener_function,meta8470){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta8470 = meta8470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t8469.cljs$lang$type = true;
domina.events.t8469.cljs$lang$ctorStr = "domina.events/t8469";
domina.events.t8469.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"domina.events/t8469");
});
domina.events.t8469.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t8469.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3640__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return not_found;
}
});
domina.events.t8469.prototype.domina$events$Event$ = true;
domina.events.t8469.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t8469.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t8469.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t8469.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t8469.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t8469.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t8469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8471){var self__ = this;
var _8471__$1 = this;return self__.meta8470;
});
domina.events.t8469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8471,meta8470__$1){var self__ = this;
var _8471__$1 = this;return (new domina.events.t8469(self__.evt,self__.f,self__.create_listener_function,meta8470__$1));
});
domina.events.__GT_t8469 = (function __GT_t8469(evt__$1,f__$1,create_listener_function__$1,meta8470){return (new domina.events.t8469(evt__$1,f__$1,create_listener_function__$1,meta8470));
});
}
return (new domina.events.t8469(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4379__auto__ = ((function (f,t){
return (function iter__8476(s__8477){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__8477__$1 = s__8477;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8477__$1);if(temp__4126__auto__)
{var s__8477__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8477__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__8477__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__8479 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__8478 = (0);while(true){
if((i__8478 < size__4378__auto__))
{var node = cljs.core._nth.call(null,c__4377__auto__,i__8478);cljs.core.chunk_append.call(null,b__8479,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__8480 = (i__8478 + (1));
i__8478 = G__8480;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8479),iter__8476.call(null,cljs.core.chunk_rest.call(null,s__8477__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8479),null);
}
} else
{var node = cljs.core.first.call(null,s__8477__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__8476.call(null,cljs.core.rest.call(null,s__8477__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__8489 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8490 = null;var count__8491 = (0);var i__8492 = (0);while(true){
if((i__8492 < count__8491))
{var node = cljs.core._nth.call(null,chunk__8490,i__8492);goog.events.removeAll(node);
{
var G__8497 = seq__8489;
var G__8498 = chunk__8490;
var G__8499 = count__8491;
var G__8500 = (i__8492 + (1));
seq__8489 = G__8497;
chunk__8490 = G__8498;
count__8491 = G__8499;
i__8492 = G__8500;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8489);if(temp__4126__auto__)
{var seq__8489__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8489__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__8489__$1);{
var G__8501 = cljs.core.chunk_rest.call(null,seq__8489__$1);
var G__8502 = c__4410__auto__;
var G__8503 = cljs.core.count.call(null,c__4410__auto__);
var G__8504 = (0);
seq__8489 = G__8501;
chunk__8490 = G__8502;
count__8491 = G__8503;
i__8492 = G__8504;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__8489__$1);goog.events.removeAll(node);
{
var G__8505 = cljs.core.next.call(null,seq__8489__$1);
var G__8506 = null;
var G__8507 = (0);
var G__8508 = (0);
seq__8489 = G__8505;
chunk__8490 = G__8506;
count__8491 = G__8507;
i__8492 = G__8508;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__8493 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__8494 = null;var count__8495 = (0);var i__8496 = (0);while(true){
if((i__8496 < count__8495))
{var node = cljs.core._nth.call(null,chunk__8494,i__8496);goog.events.removeAll(node,type__$1);
{
var G__8509 = seq__8493;
var G__8510 = chunk__8494;
var G__8511 = count__8495;
var G__8512 = (i__8496 + (1));
seq__8493 = G__8509;
chunk__8494 = G__8510;
count__8495 = G__8511;
i__8496 = G__8512;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8493);if(temp__4126__auto__)
{var seq__8493__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8493__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__8493__$1);{
var G__8513 = cljs.core.chunk_rest.call(null,seq__8493__$1);
var G__8514 = c__4410__auto__;
var G__8515 = cljs.core.count.call(null,c__4410__auto__);
var G__8516 = (0);
seq__8493 = G__8513;
chunk__8494 = G__8514;
count__8495 = G__8515;
i__8496 = G__8516;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__8493__$1);goog.events.removeAll(node,type__$1);
{
var G__8517 = cljs.core.next.call(null,seq__8493__$1);
var G__8518 = null;
var G__8519 = (0);
var G__8520 = (0);
seq__8493 = G__8517;
chunk__8494 = G__8518;
count__8495 = G__8519;
i__8496 = G__8520;
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
var G__8521 = parent;
var G__8522 = cljs.core.cons.call(null,parent,so_far);
n = G__8521;
so_far = G__8522;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__8531_8539 = cljs.core.seq.call(null,ancestors);var chunk__8532_8540 = null;var count__8533_8541 = (0);var i__8534_8542 = (0);while(true){
if((i__8534_8542 < count__8533_8541))
{var n_8543 = cljs.core._nth.call(null,chunk__8532_8540,i__8534_8542);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8543;
goog.events.fireListeners(n_8543,evt.type,true,evt);
}
{
var G__8544 = seq__8531_8539;
var G__8545 = chunk__8532_8540;
var G__8546 = count__8533_8541;
var G__8547 = (i__8534_8542 + (1));
seq__8531_8539 = G__8544;
chunk__8532_8540 = G__8545;
count__8533_8541 = G__8546;
i__8534_8542 = G__8547;
continue;
}
} else
{var temp__4126__auto___8548 = cljs.core.seq.call(null,seq__8531_8539);if(temp__4126__auto___8548)
{var seq__8531_8549__$1 = temp__4126__auto___8548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8531_8549__$1))
{var c__4410__auto___8550 = cljs.core.chunk_first.call(null,seq__8531_8549__$1);{
var G__8551 = cljs.core.chunk_rest.call(null,seq__8531_8549__$1);
var G__8552 = c__4410__auto___8550;
var G__8553 = cljs.core.count.call(null,c__4410__auto___8550);
var G__8554 = (0);
seq__8531_8539 = G__8551;
chunk__8532_8540 = G__8552;
count__8533_8541 = G__8553;
i__8534_8542 = G__8554;
continue;
}
} else
{var n_8555 = cljs.core.first.call(null,seq__8531_8549__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8555;
goog.events.fireListeners(n_8555,evt.type,true,evt);
}
{
var G__8556 = cljs.core.next.call(null,seq__8531_8549__$1);
var G__8557 = null;
var G__8558 = (0);
var G__8559 = (0);
seq__8531_8539 = G__8556;
chunk__8532_8540 = G__8557;
count__8533_8541 = G__8558;
i__8534_8542 = G__8559;
continue;
}
}
} else
{}
}
break;
}
var seq__8535_8560 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__8536_8561 = null;var count__8537_8562 = (0);var i__8538_8563 = (0);while(true){
if((i__8538_8563 < count__8537_8562))
{var n_8564 = cljs.core._nth.call(null,chunk__8536_8561,i__8538_8563);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8564;
goog.events.fireListeners(n_8564,evt.type,false,evt);
}
{
var G__8565 = seq__8535_8560;
var G__8566 = chunk__8536_8561;
var G__8567 = count__8537_8562;
var G__8568 = (i__8538_8563 + (1));
seq__8535_8560 = G__8565;
chunk__8536_8561 = G__8566;
count__8537_8562 = G__8567;
i__8538_8563 = G__8568;
continue;
}
} else
{var temp__4126__auto___8569 = cljs.core.seq.call(null,seq__8535_8560);if(temp__4126__auto___8569)
{var seq__8535_8570__$1 = temp__4126__auto___8569;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8535_8570__$1))
{var c__4410__auto___8571 = cljs.core.chunk_first.call(null,seq__8535_8570__$1);{
var G__8572 = cljs.core.chunk_rest.call(null,seq__8535_8570__$1);
var G__8573 = c__4410__auto___8571;
var G__8574 = cljs.core.count.call(null,c__4410__auto___8571);
var G__8575 = (0);
seq__8535_8560 = G__8572;
chunk__8536_8561 = G__8573;
count__8537_8562 = G__8574;
i__8538_8563 = G__8575;
continue;
}
} else
{var n_8576 = cljs.core.first.call(null,seq__8535_8570__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_8576;
goog.events.fireListeners(n_8576,evt.type,false,evt);
}
{
var G__8577 = cljs.core.next.call(null,seq__8535_8570__$1);
var G__8578 = null;
var G__8579 = (0);
var G__8580 = (0);
seq__8535_8560 = G__8577;
chunk__8536_8561 = G__8578;
count__8537_8562 = G__8579;
i__8538_8563 = G__8580;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__8587_8593 = cljs.core.seq.call(null,evt_map);var chunk__8588_8594 = null;var count__8589_8595 = (0);var i__8590_8596 = (0);while(true){
if((i__8590_8596 < count__8589_8595))
{var vec__8591_8597 = cljs.core._nth.call(null,chunk__8588_8594,i__8590_8596);var k_8598 = cljs.core.nth.call(null,vec__8591_8597,(0),null);var v_8599 = cljs.core.nth.call(null,vec__8591_8597,(1),null);(evt[k_8598] = v_8599);
{
var G__8600 = seq__8587_8593;
var G__8601 = chunk__8588_8594;
var G__8602 = count__8589_8595;
var G__8603 = (i__8590_8596 + (1));
seq__8587_8593 = G__8600;
chunk__8588_8594 = G__8601;
count__8589_8595 = G__8602;
i__8590_8596 = G__8603;
continue;
}
} else
{var temp__4126__auto___8604 = cljs.core.seq.call(null,seq__8587_8593);if(temp__4126__auto___8604)
{var seq__8587_8605__$1 = temp__4126__auto___8604;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8587_8605__$1))
{var c__4410__auto___8606 = cljs.core.chunk_first.call(null,seq__8587_8605__$1);{
var G__8607 = cljs.core.chunk_rest.call(null,seq__8587_8605__$1);
var G__8608 = c__4410__auto___8606;
var G__8609 = cljs.core.count.call(null,c__4410__auto___8606);
var G__8610 = (0);
seq__8587_8593 = G__8607;
chunk__8588_8594 = G__8608;
count__8589_8595 = G__8609;
i__8590_8596 = G__8610;
continue;
}
} else
{var vec__8592_8611 = cljs.core.first.call(null,seq__8587_8605__$1);var k_8612 = cljs.core.nth.call(null,vec__8592_8611,(0),null);var v_8613 = cljs.core.nth.call(null,vec__8592_8611,(1),null);(evt[k_8612] = v_8613);
{
var G__8614 = cljs.core.next.call(null,seq__8587_8605__$1);
var G__8615 = null;
var G__8616 = (0);
var G__8617 = (0);
seq__8587_8593 = G__8614;
chunk__8588_8594 = G__8615;
count__8589_8595 = G__8616;
i__8590_8596 = G__8617;
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
return (function (p1__8618_SHARP_){return goog.events.getListeners(p1__8618_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
