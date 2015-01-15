// Compiled by ClojureScript 0.0-2371
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj32538 = {};return obj32538;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t32542 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t32542 = (function (evt,f,create_listener_function,meta32543){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta32543 = meta32543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t32542.cljs$lang$type = true;
domina.events.t32542.cljs$lang$ctorStr = "domina.events/t32542";
domina.events.t32542.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"domina.events/t32542");
});
domina.events.t32542.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t32542.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3640__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return not_found;
}
});
domina.events.t32542.prototype.domina$events$Event$ = true;
domina.events.t32542.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t32542.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t32542.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t32542.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t32542.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t32542.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t32542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32544){var self__ = this;
var _32544__$1 = this;return self__.meta32543;
});
domina.events.t32542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32544,meta32543__$1){var self__ = this;
var _32544__$1 = this;return (new domina.events.t32542(self__.evt,self__.f,self__.create_listener_function,meta32543__$1));
});
domina.events.__GT_t32542 = (function __GT_t32542(evt__$1,f__$1,create_listener_function__$1,meta32543){return (new domina.events.t32542(evt__$1,f__$1,create_listener_function__$1,meta32543));
});
}
return (new domina.events.t32542(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4379__auto__ = ((function (f,t){
return (function iter__32549(s__32550){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__32550__$1 = s__32550;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32550__$1);if(temp__4126__auto__)
{var s__32550__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32550__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__32550__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__32552 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__32551 = (0);while(true){
if((i__32551 < size__4378__auto__))
{var node = cljs.core._nth.call(null,c__4377__auto__,i__32551);cljs.core.chunk_append.call(null,b__32552,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__32553 = (i__32551 + (1));
i__32551 = G__32553;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32552),iter__32549.call(null,cljs.core.chunk_rest.call(null,s__32550__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32552),null);
}
} else
{var node = cljs.core.first.call(null,s__32550__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__32549.call(null,cljs.core.rest.call(null,s__32550__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__32562 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32563 = null;var count__32564 = (0);var i__32565 = (0);while(true){
if((i__32565 < count__32564))
{var node = cljs.core._nth.call(null,chunk__32563,i__32565);goog.events.removeAll(node);
{
var G__32570 = seq__32562;
var G__32571 = chunk__32563;
var G__32572 = count__32564;
var G__32573 = (i__32565 + (1));
seq__32562 = G__32570;
chunk__32563 = G__32571;
count__32564 = G__32572;
i__32565 = G__32573;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32562);if(temp__4126__auto__)
{var seq__32562__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32562__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__32562__$1);{
var G__32574 = cljs.core.chunk_rest.call(null,seq__32562__$1);
var G__32575 = c__4410__auto__;
var G__32576 = cljs.core.count.call(null,c__4410__auto__);
var G__32577 = (0);
seq__32562 = G__32574;
chunk__32563 = G__32575;
count__32564 = G__32576;
i__32565 = G__32577;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32562__$1);goog.events.removeAll(node);
{
var G__32578 = cljs.core.next.call(null,seq__32562__$1);
var G__32579 = null;
var G__32580 = (0);
var G__32581 = (0);
seq__32562 = G__32578;
chunk__32563 = G__32579;
count__32564 = G__32580;
i__32565 = G__32581;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__32566 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32567 = null;var count__32568 = (0);var i__32569 = (0);while(true){
if((i__32569 < count__32568))
{var node = cljs.core._nth.call(null,chunk__32567,i__32569);goog.events.removeAll(node,type__$1);
{
var G__32582 = seq__32566;
var G__32583 = chunk__32567;
var G__32584 = count__32568;
var G__32585 = (i__32569 + (1));
seq__32566 = G__32582;
chunk__32567 = G__32583;
count__32568 = G__32584;
i__32569 = G__32585;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32566);if(temp__4126__auto__)
{var seq__32566__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32566__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__32566__$1);{
var G__32586 = cljs.core.chunk_rest.call(null,seq__32566__$1);
var G__32587 = c__4410__auto__;
var G__32588 = cljs.core.count.call(null,c__4410__auto__);
var G__32589 = (0);
seq__32566 = G__32586;
chunk__32567 = G__32587;
count__32568 = G__32588;
i__32569 = G__32589;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32566__$1);goog.events.removeAll(node,type__$1);
{
var G__32590 = cljs.core.next.call(null,seq__32566__$1);
var G__32591 = null;
var G__32592 = (0);
var G__32593 = (0);
seq__32566 = G__32590;
chunk__32567 = G__32591;
count__32568 = G__32592;
i__32569 = G__32593;
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
var G__32594 = parent;
var G__32595 = cljs.core.cons.call(null,parent,so_far);
n = G__32594;
so_far = G__32595;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__32604_32612 = cljs.core.seq.call(null,ancestors);var chunk__32605_32613 = null;var count__32606_32614 = (0);var i__32607_32615 = (0);while(true){
if((i__32607_32615 < count__32606_32614))
{var n_32616 = cljs.core._nth.call(null,chunk__32605_32613,i__32607_32615);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32616;
goog.events.fireListeners(n_32616,evt.type,true,evt);
}
{
var G__32617 = seq__32604_32612;
var G__32618 = chunk__32605_32613;
var G__32619 = count__32606_32614;
var G__32620 = (i__32607_32615 + (1));
seq__32604_32612 = G__32617;
chunk__32605_32613 = G__32618;
count__32606_32614 = G__32619;
i__32607_32615 = G__32620;
continue;
}
} else
{var temp__4126__auto___32621 = cljs.core.seq.call(null,seq__32604_32612);if(temp__4126__auto___32621)
{var seq__32604_32622__$1 = temp__4126__auto___32621;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32604_32622__$1))
{var c__4410__auto___32623 = cljs.core.chunk_first.call(null,seq__32604_32622__$1);{
var G__32624 = cljs.core.chunk_rest.call(null,seq__32604_32622__$1);
var G__32625 = c__4410__auto___32623;
var G__32626 = cljs.core.count.call(null,c__4410__auto___32623);
var G__32627 = (0);
seq__32604_32612 = G__32624;
chunk__32605_32613 = G__32625;
count__32606_32614 = G__32626;
i__32607_32615 = G__32627;
continue;
}
} else
{var n_32628 = cljs.core.first.call(null,seq__32604_32622__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32628;
goog.events.fireListeners(n_32628,evt.type,true,evt);
}
{
var G__32629 = cljs.core.next.call(null,seq__32604_32622__$1);
var G__32630 = null;
var G__32631 = (0);
var G__32632 = (0);
seq__32604_32612 = G__32629;
chunk__32605_32613 = G__32630;
count__32606_32614 = G__32631;
i__32607_32615 = G__32632;
continue;
}
}
} else
{}
}
break;
}
var seq__32608_32633 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__32609_32634 = null;var count__32610_32635 = (0);var i__32611_32636 = (0);while(true){
if((i__32611_32636 < count__32610_32635))
{var n_32637 = cljs.core._nth.call(null,chunk__32609_32634,i__32611_32636);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32637;
goog.events.fireListeners(n_32637,evt.type,false,evt);
}
{
var G__32638 = seq__32608_32633;
var G__32639 = chunk__32609_32634;
var G__32640 = count__32610_32635;
var G__32641 = (i__32611_32636 + (1));
seq__32608_32633 = G__32638;
chunk__32609_32634 = G__32639;
count__32610_32635 = G__32640;
i__32611_32636 = G__32641;
continue;
}
} else
{var temp__4126__auto___32642 = cljs.core.seq.call(null,seq__32608_32633);if(temp__4126__auto___32642)
{var seq__32608_32643__$1 = temp__4126__auto___32642;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32608_32643__$1))
{var c__4410__auto___32644 = cljs.core.chunk_first.call(null,seq__32608_32643__$1);{
var G__32645 = cljs.core.chunk_rest.call(null,seq__32608_32643__$1);
var G__32646 = c__4410__auto___32644;
var G__32647 = cljs.core.count.call(null,c__4410__auto___32644);
var G__32648 = (0);
seq__32608_32633 = G__32645;
chunk__32609_32634 = G__32646;
count__32610_32635 = G__32647;
i__32611_32636 = G__32648;
continue;
}
} else
{var n_32649 = cljs.core.first.call(null,seq__32608_32643__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32649;
goog.events.fireListeners(n_32649,evt.type,false,evt);
}
{
var G__32650 = cljs.core.next.call(null,seq__32608_32643__$1);
var G__32651 = null;
var G__32652 = (0);
var G__32653 = (0);
seq__32608_32633 = G__32650;
chunk__32609_32634 = G__32651;
count__32610_32635 = G__32652;
i__32611_32636 = G__32653;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__32660_32666 = cljs.core.seq.call(null,evt_map);var chunk__32661_32667 = null;var count__32662_32668 = (0);var i__32663_32669 = (0);while(true){
if((i__32663_32669 < count__32662_32668))
{var vec__32664_32670 = cljs.core._nth.call(null,chunk__32661_32667,i__32663_32669);var k_32671 = cljs.core.nth.call(null,vec__32664_32670,(0),null);var v_32672 = cljs.core.nth.call(null,vec__32664_32670,(1),null);(evt[k_32671] = v_32672);
{
var G__32673 = seq__32660_32666;
var G__32674 = chunk__32661_32667;
var G__32675 = count__32662_32668;
var G__32676 = (i__32663_32669 + (1));
seq__32660_32666 = G__32673;
chunk__32661_32667 = G__32674;
count__32662_32668 = G__32675;
i__32663_32669 = G__32676;
continue;
}
} else
{var temp__4126__auto___32677 = cljs.core.seq.call(null,seq__32660_32666);if(temp__4126__auto___32677)
{var seq__32660_32678__$1 = temp__4126__auto___32677;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32660_32678__$1))
{var c__4410__auto___32679 = cljs.core.chunk_first.call(null,seq__32660_32678__$1);{
var G__32680 = cljs.core.chunk_rest.call(null,seq__32660_32678__$1);
var G__32681 = c__4410__auto___32679;
var G__32682 = cljs.core.count.call(null,c__4410__auto___32679);
var G__32683 = (0);
seq__32660_32666 = G__32680;
chunk__32661_32667 = G__32681;
count__32662_32668 = G__32682;
i__32663_32669 = G__32683;
continue;
}
} else
{var vec__32665_32684 = cljs.core.first.call(null,seq__32660_32678__$1);var k_32685 = cljs.core.nth.call(null,vec__32665_32684,(0),null);var v_32686 = cljs.core.nth.call(null,vec__32665_32684,(1),null);(evt[k_32685] = v_32686);
{
var G__32687 = cljs.core.next.call(null,seq__32660_32678__$1);
var G__32688 = null;
var G__32689 = (0);
var G__32690 = (0);
seq__32660_32666 = G__32687;
chunk__32661_32667 = G__32688;
count__32662_32668 = G__32689;
i__32663_32669 = G__32690;
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
return (function (p1__32691_SHARP_){return goog.events.getListeners(p1__32691_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
