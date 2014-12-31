// Compiled by ClojureScript 0.0-2371
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj29377 = {};return obj29377;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t29381 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t29381 = (function (evt,f,create_listener_function,meta29382){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta29382 = meta29382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t29381.cljs$lang$type = true;
domina.events.t29381.cljs$lang$ctorStr = "domina.events/t29381";
domina.events.t29381.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"domina.events/t29381");
});
domina.events.t29381.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t29381.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3640__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return not_found;
}
});
domina.events.t29381.prototype.domina$events$Event$ = true;
domina.events.t29381.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t29381.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t29381.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t29381.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t29381.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t29381.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t29381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29383){var self__ = this;
var _29383__$1 = this;return self__.meta29382;
});
domina.events.t29381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29383,meta29382__$1){var self__ = this;
var _29383__$1 = this;return (new domina.events.t29381(self__.evt,self__.f,self__.create_listener_function,meta29382__$1));
});
domina.events.__GT_t29381 = (function __GT_t29381(evt__$1,f__$1,create_listener_function__$1,meta29382){return (new domina.events.t29381(evt__$1,f__$1,create_listener_function__$1,meta29382));
});
}
return (new domina.events.t29381(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4379__auto__ = ((function (f,t){
return (function iter__29388(s__29389){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__29389__$1 = s__29389;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29389__$1);if(temp__4126__auto__)
{var s__29389__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29389__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__29389__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__29391 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__29390 = (0);while(true){
if((i__29390 < size__4378__auto__))
{var node = cljs.core._nth.call(null,c__4377__auto__,i__29390);cljs.core.chunk_append.call(null,b__29391,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__29392 = (i__29390 + (1));
i__29390 = G__29392;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29391),iter__29388.call(null,cljs.core.chunk_rest.call(null,s__29389__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29391),null);
}
} else
{var node = cljs.core.first.call(null,s__29389__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__29388.call(null,cljs.core.rest.call(null,s__29389__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__29401 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29402 = null;var count__29403 = (0);var i__29404 = (0);while(true){
if((i__29404 < count__29403))
{var node = cljs.core._nth.call(null,chunk__29402,i__29404);goog.events.removeAll(node);
{
var G__29409 = seq__29401;
var G__29410 = chunk__29402;
var G__29411 = count__29403;
var G__29412 = (i__29404 + (1));
seq__29401 = G__29409;
chunk__29402 = G__29410;
count__29403 = G__29411;
i__29404 = G__29412;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29401);if(temp__4126__auto__)
{var seq__29401__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29401__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__29401__$1);{
var G__29413 = cljs.core.chunk_rest.call(null,seq__29401__$1);
var G__29414 = c__4410__auto__;
var G__29415 = cljs.core.count.call(null,c__4410__auto__);
var G__29416 = (0);
seq__29401 = G__29413;
chunk__29402 = G__29414;
count__29403 = G__29415;
i__29404 = G__29416;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__29401__$1);goog.events.removeAll(node);
{
var G__29417 = cljs.core.next.call(null,seq__29401__$1);
var G__29418 = null;
var G__29419 = (0);
var G__29420 = (0);
seq__29401 = G__29417;
chunk__29402 = G__29418;
count__29403 = G__29419;
i__29404 = G__29420;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__29405 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29406 = null;var count__29407 = (0);var i__29408 = (0);while(true){
if((i__29408 < count__29407))
{var node = cljs.core._nth.call(null,chunk__29406,i__29408);goog.events.removeAll(node,type__$1);
{
var G__29421 = seq__29405;
var G__29422 = chunk__29406;
var G__29423 = count__29407;
var G__29424 = (i__29408 + (1));
seq__29405 = G__29421;
chunk__29406 = G__29422;
count__29407 = G__29423;
i__29408 = G__29424;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29405);if(temp__4126__auto__)
{var seq__29405__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29405__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__29405__$1);{
var G__29425 = cljs.core.chunk_rest.call(null,seq__29405__$1);
var G__29426 = c__4410__auto__;
var G__29427 = cljs.core.count.call(null,c__4410__auto__);
var G__29428 = (0);
seq__29405 = G__29425;
chunk__29406 = G__29426;
count__29407 = G__29427;
i__29408 = G__29428;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__29405__$1);goog.events.removeAll(node,type__$1);
{
var G__29429 = cljs.core.next.call(null,seq__29405__$1);
var G__29430 = null;
var G__29431 = (0);
var G__29432 = (0);
seq__29405 = G__29429;
chunk__29406 = G__29430;
count__29407 = G__29431;
i__29408 = G__29432;
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
var G__29433 = parent;
var G__29434 = cljs.core.cons.call(null,parent,so_far);
n = G__29433;
so_far = G__29434;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__29443_29451 = cljs.core.seq.call(null,ancestors);var chunk__29444_29452 = null;var count__29445_29453 = (0);var i__29446_29454 = (0);while(true){
if((i__29446_29454 < count__29445_29453))
{var n_29455 = cljs.core._nth.call(null,chunk__29444_29452,i__29446_29454);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_29455;
goog.events.fireListeners(n_29455,evt.type,true,evt);
}
{
var G__29456 = seq__29443_29451;
var G__29457 = chunk__29444_29452;
var G__29458 = count__29445_29453;
var G__29459 = (i__29446_29454 + (1));
seq__29443_29451 = G__29456;
chunk__29444_29452 = G__29457;
count__29445_29453 = G__29458;
i__29446_29454 = G__29459;
continue;
}
} else
{var temp__4126__auto___29460 = cljs.core.seq.call(null,seq__29443_29451);if(temp__4126__auto___29460)
{var seq__29443_29461__$1 = temp__4126__auto___29460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29443_29461__$1))
{var c__4410__auto___29462 = cljs.core.chunk_first.call(null,seq__29443_29461__$1);{
var G__29463 = cljs.core.chunk_rest.call(null,seq__29443_29461__$1);
var G__29464 = c__4410__auto___29462;
var G__29465 = cljs.core.count.call(null,c__4410__auto___29462);
var G__29466 = (0);
seq__29443_29451 = G__29463;
chunk__29444_29452 = G__29464;
count__29445_29453 = G__29465;
i__29446_29454 = G__29466;
continue;
}
} else
{var n_29467 = cljs.core.first.call(null,seq__29443_29461__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_29467;
goog.events.fireListeners(n_29467,evt.type,true,evt);
}
{
var G__29468 = cljs.core.next.call(null,seq__29443_29461__$1);
var G__29469 = null;
var G__29470 = (0);
var G__29471 = (0);
seq__29443_29451 = G__29468;
chunk__29444_29452 = G__29469;
count__29445_29453 = G__29470;
i__29446_29454 = G__29471;
continue;
}
}
} else
{}
}
break;
}
var seq__29447_29472 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__29448_29473 = null;var count__29449_29474 = (0);var i__29450_29475 = (0);while(true){
if((i__29450_29475 < count__29449_29474))
{var n_29476 = cljs.core._nth.call(null,chunk__29448_29473,i__29450_29475);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_29476;
goog.events.fireListeners(n_29476,evt.type,false,evt);
}
{
var G__29477 = seq__29447_29472;
var G__29478 = chunk__29448_29473;
var G__29479 = count__29449_29474;
var G__29480 = (i__29450_29475 + (1));
seq__29447_29472 = G__29477;
chunk__29448_29473 = G__29478;
count__29449_29474 = G__29479;
i__29450_29475 = G__29480;
continue;
}
} else
{var temp__4126__auto___29481 = cljs.core.seq.call(null,seq__29447_29472);if(temp__4126__auto___29481)
{var seq__29447_29482__$1 = temp__4126__auto___29481;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29447_29482__$1))
{var c__4410__auto___29483 = cljs.core.chunk_first.call(null,seq__29447_29482__$1);{
var G__29484 = cljs.core.chunk_rest.call(null,seq__29447_29482__$1);
var G__29485 = c__4410__auto___29483;
var G__29486 = cljs.core.count.call(null,c__4410__auto___29483);
var G__29487 = (0);
seq__29447_29472 = G__29484;
chunk__29448_29473 = G__29485;
count__29449_29474 = G__29486;
i__29450_29475 = G__29487;
continue;
}
} else
{var n_29488 = cljs.core.first.call(null,seq__29447_29482__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_29488;
goog.events.fireListeners(n_29488,evt.type,false,evt);
}
{
var G__29489 = cljs.core.next.call(null,seq__29447_29482__$1);
var G__29490 = null;
var G__29491 = (0);
var G__29492 = (0);
seq__29447_29472 = G__29489;
chunk__29448_29473 = G__29490;
count__29449_29474 = G__29491;
i__29450_29475 = G__29492;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__29499_29505 = cljs.core.seq.call(null,evt_map);var chunk__29500_29506 = null;var count__29501_29507 = (0);var i__29502_29508 = (0);while(true){
if((i__29502_29508 < count__29501_29507))
{var vec__29503_29509 = cljs.core._nth.call(null,chunk__29500_29506,i__29502_29508);var k_29510 = cljs.core.nth.call(null,vec__29503_29509,(0),null);var v_29511 = cljs.core.nth.call(null,vec__29503_29509,(1),null);(evt[k_29510] = v_29511);
{
var G__29512 = seq__29499_29505;
var G__29513 = chunk__29500_29506;
var G__29514 = count__29501_29507;
var G__29515 = (i__29502_29508 + (1));
seq__29499_29505 = G__29512;
chunk__29500_29506 = G__29513;
count__29501_29507 = G__29514;
i__29502_29508 = G__29515;
continue;
}
} else
{var temp__4126__auto___29516 = cljs.core.seq.call(null,seq__29499_29505);if(temp__4126__auto___29516)
{var seq__29499_29517__$1 = temp__4126__auto___29516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29499_29517__$1))
{var c__4410__auto___29518 = cljs.core.chunk_first.call(null,seq__29499_29517__$1);{
var G__29519 = cljs.core.chunk_rest.call(null,seq__29499_29517__$1);
var G__29520 = c__4410__auto___29518;
var G__29521 = cljs.core.count.call(null,c__4410__auto___29518);
var G__29522 = (0);
seq__29499_29505 = G__29519;
chunk__29500_29506 = G__29520;
count__29501_29507 = G__29521;
i__29502_29508 = G__29522;
continue;
}
} else
{var vec__29504_29523 = cljs.core.first.call(null,seq__29499_29517__$1);var k_29524 = cljs.core.nth.call(null,vec__29504_29523,(0),null);var v_29525 = cljs.core.nth.call(null,vec__29504_29523,(1),null);(evt[k_29524] = v_29525);
{
var G__29526 = cljs.core.next.call(null,seq__29499_29517__$1);
var G__29527 = null;
var G__29528 = (0);
var G__29529 = (0);
seq__29499_29505 = G__29526;
chunk__29500_29506 = G__29527;
count__29501_29507 = G__29528;
i__29502_29508 = G__29529;
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
return (function (p1__29530_SHARP_){return goog.events.getListeners(p1__29530_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
