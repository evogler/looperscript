// Compiled by ClojureScript 0.0-2371
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj14394 = {};return obj14394;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t14398 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14398 = (function (evt,f,create_listener_function,meta14399){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14399 = meta14399;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14398.cljs$lang$type = true;
domina.events.t14398.cljs$lang$ctorStr = "domina.events/t14398";
domina.events.t14398.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"domina.events/t14398");
});
domina.events.t14398.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t14398.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3640__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return not_found;
}
});
domina.events.t14398.prototype.domina$events$Event$ = true;
domina.events.t14398.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14398.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14398.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14398.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14398.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14398.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14400){var self__ = this;
var _14400__$1 = this;return self__.meta14399;
});
domina.events.t14398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14400,meta14399__$1){var self__ = this;
var _14400__$1 = this;return (new domina.events.t14398(self__.evt,self__.f,self__.create_listener_function,meta14399__$1));
});
domina.events.__GT_t14398 = (function __GT_t14398(evt__$1,f__$1,create_listener_function__$1,meta14399){return (new domina.events.t14398(evt__$1,f__$1,create_listener_function__$1,meta14399));
});
}
return (new domina.events.t14398(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4379__auto__ = ((function (f,t){
return (function iter__14405(s__14406){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__14406__$1 = s__14406;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14406__$1);if(temp__4126__auto__)
{var s__14406__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14406__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__14406__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__14408 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__14407 = (0);while(true){
if((i__14407 < size__4378__auto__))
{var node = cljs.core._nth.call(null,c__4377__auto__,i__14407);cljs.core.chunk_append.call(null,b__14408,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__14409 = (i__14407 + (1));
i__14407 = G__14409;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14408),iter__14405.call(null,cljs.core.chunk_rest.call(null,s__14406__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14408),null);
}
} else
{var node = cljs.core.first.call(null,s__14406__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__14405.call(null,cljs.core.rest.call(null,s__14406__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__14418 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14419 = null;var count__14420 = (0);var i__14421 = (0);while(true){
if((i__14421 < count__14420))
{var node = cljs.core._nth.call(null,chunk__14419,i__14421);goog.events.removeAll(node);
{
var G__14426 = seq__14418;
var G__14427 = chunk__14419;
var G__14428 = count__14420;
var G__14429 = (i__14421 + (1));
seq__14418 = G__14426;
chunk__14419 = G__14427;
count__14420 = G__14428;
i__14421 = G__14429;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14418);if(temp__4126__auto__)
{var seq__14418__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14418__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__14418__$1);{
var G__14430 = cljs.core.chunk_rest.call(null,seq__14418__$1);
var G__14431 = c__4410__auto__;
var G__14432 = cljs.core.count.call(null,c__4410__auto__);
var G__14433 = (0);
seq__14418 = G__14430;
chunk__14419 = G__14431;
count__14420 = G__14432;
i__14421 = G__14433;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14418__$1);goog.events.removeAll(node);
{
var G__14434 = cljs.core.next.call(null,seq__14418__$1);
var G__14435 = null;
var G__14436 = (0);
var G__14437 = (0);
seq__14418 = G__14434;
chunk__14419 = G__14435;
count__14420 = G__14436;
i__14421 = G__14437;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__14422 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14423 = null;var count__14424 = (0);var i__14425 = (0);while(true){
if((i__14425 < count__14424))
{var node = cljs.core._nth.call(null,chunk__14423,i__14425);goog.events.removeAll(node,type__$1);
{
var G__14438 = seq__14422;
var G__14439 = chunk__14423;
var G__14440 = count__14424;
var G__14441 = (i__14425 + (1));
seq__14422 = G__14438;
chunk__14423 = G__14439;
count__14424 = G__14440;
i__14425 = G__14441;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14422);if(temp__4126__auto__)
{var seq__14422__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14422__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__14422__$1);{
var G__14442 = cljs.core.chunk_rest.call(null,seq__14422__$1);
var G__14443 = c__4410__auto__;
var G__14444 = cljs.core.count.call(null,c__4410__auto__);
var G__14445 = (0);
seq__14422 = G__14442;
chunk__14423 = G__14443;
count__14424 = G__14444;
i__14425 = G__14445;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14422__$1);goog.events.removeAll(node,type__$1);
{
var G__14446 = cljs.core.next.call(null,seq__14422__$1);
var G__14447 = null;
var G__14448 = (0);
var G__14449 = (0);
seq__14422 = G__14446;
chunk__14423 = G__14447;
count__14424 = G__14448;
i__14425 = G__14449;
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
var G__14450 = parent;
var G__14451 = cljs.core.cons.call(null,parent,so_far);
n = G__14450;
so_far = G__14451;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__14460_14468 = cljs.core.seq.call(null,ancestors);var chunk__14461_14469 = null;var count__14462_14470 = (0);var i__14463_14471 = (0);while(true){
if((i__14463_14471 < count__14462_14470))
{var n_14472 = cljs.core._nth.call(null,chunk__14461_14469,i__14463_14471);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14472;
goog.events.fireListeners(n_14472,evt.type,true,evt);
}
{
var G__14473 = seq__14460_14468;
var G__14474 = chunk__14461_14469;
var G__14475 = count__14462_14470;
var G__14476 = (i__14463_14471 + (1));
seq__14460_14468 = G__14473;
chunk__14461_14469 = G__14474;
count__14462_14470 = G__14475;
i__14463_14471 = G__14476;
continue;
}
} else
{var temp__4126__auto___14477 = cljs.core.seq.call(null,seq__14460_14468);if(temp__4126__auto___14477)
{var seq__14460_14478__$1 = temp__4126__auto___14477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14460_14478__$1))
{var c__4410__auto___14479 = cljs.core.chunk_first.call(null,seq__14460_14478__$1);{
var G__14480 = cljs.core.chunk_rest.call(null,seq__14460_14478__$1);
var G__14481 = c__4410__auto___14479;
var G__14482 = cljs.core.count.call(null,c__4410__auto___14479);
var G__14483 = (0);
seq__14460_14468 = G__14480;
chunk__14461_14469 = G__14481;
count__14462_14470 = G__14482;
i__14463_14471 = G__14483;
continue;
}
} else
{var n_14484 = cljs.core.first.call(null,seq__14460_14478__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14484;
goog.events.fireListeners(n_14484,evt.type,true,evt);
}
{
var G__14485 = cljs.core.next.call(null,seq__14460_14478__$1);
var G__14486 = null;
var G__14487 = (0);
var G__14488 = (0);
seq__14460_14468 = G__14485;
chunk__14461_14469 = G__14486;
count__14462_14470 = G__14487;
i__14463_14471 = G__14488;
continue;
}
}
} else
{}
}
break;
}
var seq__14464_14489 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__14465_14490 = null;var count__14466_14491 = (0);var i__14467_14492 = (0);while(true){
if((i__14467_14492 < count__14466_14491))
{var n_14493 = cljs.core._nth.call(null,chunk__14465_14490,i__14467_14492);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14493;
goog.events.fireListeners(n_14493,evt.type,false,evt);
}
{
var G__14494 = seq__14464_14489;
var G__14495 = chunk__14465_14490;
var G__14496 = count__14466_14491;
var G__14497 = (i__14467_14492 + (1));
seq__14464_14489 = G__14494;
chunk__14465_14490 = G__14495;
count__14466_14491 = G__14496;
i__14467_14492 = G__14497;
continue;
}
} else
{var temp__4126__auto___14498 = cljs.core.seq.call(null,seq__14464_14489);if(temp__4126__auto___14498)
{var seq__14464_14499__$1 = temp__4126__auto___14498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14464_14499__$1))
{var c__4410__auto___14500 = cljs.core.chunk_first.call(null,seq__14464_14499__$1);{
var G__14501 = cljs.core.chunk_rest.call(null,seq__14464_14499__$1);
var G__14502 = c__4410__auto___14500;
var G__14503 = cljs.core.count.call(null,c__4410__auto___14500);
var G__14504 = (0);
seq__14464_14489 = G__14501;
chunk__14465_14490 = G__14502;
count__14466_14491 = G__14503;
i__14467_14492 = G__14504;
continue;
}
} else
{var n_14505 = cljs.core.first.call(null,seq__14464_14499__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14505;
goog.events.fireListeners(n_14505,evt.type,false,evt);
}
{
var G__14506 = cljs.core.next.call(null,seq__14464_14499__$1);
var G__14507 = null;
var G__14508 = (0);
var G__14509 = (0);
seq__14464_14489 = G__14506;
chunk__14465_14490 = G__14507;
count__14466_14491 = G__14508;
i__14467_14492 = G__14509;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__14516_14522 = cljs.core.seq.call(null,evt_map);var chunk__14517_14523 = null;var count__14518_14524 = (0);var i__14519_14525 = (0);while(true){
if((i__14519_14525 < count__14518_14524))
{var vec__14520_14526 = cljs.core._nth.call(null,chunk__14517_14523,i__14519_14525);var k_14527 = cljs.core.nth.call(null,vec__14520_14526,(0),null);var v_14528 = cljs.core.nth.call(null,vec__14520_14526,(1),null);(evt[k_14527] = v_14528);
{
var G__14529 = seq__14516_14522;
var G__14530 = chunk__14517_14523;
var G__14531 = count__14518_14524;
var G__14532 = (i__14519_14525 + (1));
seq__14516_14522 = G__14529;
chunk__14517_14523 = G__14530;
count__14518_14524 = G__14531;
i__14519_14525 = G__14532;
continue;
}
} else
{var temp__4126__auto___14533 = cljs.core.seq.call(null,seq__14516_14522);if(temp__4126__auto___14533)
{var seq__14516_14534__$1 = temp__4126__auto___14533;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14516_14534__$1))
{var c__4410__auto___14535 = cljs.core.chunk_first.call(null,seq__14516_14534__$1);{
var G__14536 = cljs.core.chunk_rest.call(null,seq__14516_14534__$1);
var G__14537 = c__4410__auto___14535;
var G__14538 = cljs.core.count.call(null,c__4410__auto___14535);
var G__14539 = (0);
seq__14516_14522 = G__14536;
chunk__14517_14523 = G__14537;
count__14518_14524 = G__14538;
i__14519_14525 = G__14539;
continue;
}
} else
{var vec__14521_14540 = cljs.core.first.call(null,seq__14516_14534__$1);var k_14541 = cljs.core.nth.call(null,vec__14521_14540,(0),null);var v_14542 = cljs.core.nth.call(null,vec__14521_14540,(1),null);(evt[k_14541] = v_14542);
{
var G__14543 = cljs.core.next.call(null,seq__14516_14534__$1);
var G__14544 = null;
var G__14545 = (0);
var G__14546 = (0);
seq__14516_14522 = G__14543;
chunk__14517_14523 = G__14544;
count__14518_14524 = G__14545;
i__14519_14525 = G__14546;
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
return (function (p1__14547_SHARP_){return goog.events.getListeners(p1__14547_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});