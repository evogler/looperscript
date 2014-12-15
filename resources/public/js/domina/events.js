// Compiled by ClojureScript 0.0-2371
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj45499 = {};return obj45499;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t45503 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t45503 = (function (evt,f,create_listener_function,meta45504){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta45504 = meta45504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t45503.cljs$lang$type = true;
domina.events.t45503.cljs$lang$ctorStr = "domina.events/t45503";
domina.events.t45503.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"domina.events/t45503");
});
domina.events.t45503.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t45503.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3640__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return not_found;
}
});
domina.events.t45503.prototype.domina$events$Event$ = true;
domina.events.t45503.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t45503.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t45503.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t45503.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t45503.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t45503.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t45503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45505){var self__ = this;
var _45505__$1 = this;return self__.meta45504;
});
domina.events.t45503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45505,meta45504__$1){var self__ = this;
var _45505__$1 = this;return (new domina.events.t45503(self__.evt,self__.f,self__.create_listener_function,meta45504__$1));
});
domina.events.__GT_t45503 = (function __GT_t45503(evt__$1,f__$1,create_listener_function__$1,meta45504){return (new domina.events.t45503(evt__$1,f__$1,create_listener_function__$1,meta45504));
});
}
return (new domina.events.t45503(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4379__auto__ = ((function (f,t){
return (function iter__45510(s__45511){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__45511__$1 = s__45511;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__45511__$1);if(temp__4126__auto__)
{var s__45511__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45511__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__45511__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__45513 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__45512 = (0);while(true){
if((i__45512 < size__4378__auto__))
{var node = cljs.core._nth.call(null,c__4377__auto__,i__45512);cljs.core.chunk_append.call(null,b__45513,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__45514 = (i__45512 + (1));
i__45512 = G__45514;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45513),iter__45510.call(null,cljs.core.chunk_rest.call(null,s__45511__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45513),null);
}
} else
{var node = cljs.core.first.call(null,s__45511__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__45510.call(null,cljs.core.rest.call(null,s__45511__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__45523 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__45524 = null;var count__45525 = (0);var i__45526 = (0);while(true){
if((i__45526 < count__45525))
{var node = cljs.core._nth.call(null,chunk__45524,i__45526);goog.events.removeAll(node);
{
var G__45531 = seq__45523;
var G__45532 = chunk__45524;
var G__45533 = count__45525;
var G__45534 = (i__45526 + (1));
seq__45523 = G__45531;
chunk__45524 = G__45532;
count__45525 = G__45533;
i__45526 = G__45534;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__45523);if(temp__4126__auto__)
{var seq__45523__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45523__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__45523__$1);{
var G__45535 = cljs.core.chunk_rest.call(null,seq__45523__$1);
var G__45536 = c__4410__auto__;
var G__45537 = cljs.core.count.call(null,c__4410__auto__);
var G__45538 = (0);
seq__45523 = G__45535;
chunk__45524 = G__45536;
count__45525 = G__45537;
i__45526 = G__45538;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__45523__$1);goog.events.removeAll(node);
{
var G__45539 = cljs.core.next.call(null,seq__45523__$1);
var G__45540 = null;
var G__45541 = (0);
var G__45542 = (0);
seq__45523 = G__45539;
chunk__45524 = G__45540;
count__45525 = G__45541;
i__45526 = G__45542;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__45527 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__45528 = null;var count__45529 = (0);var i__45530 = (0);while(true){
if((i__45530 < count__45529))
{var node = cljs.core._nth.call(null,chunk__45528,i__45530);goog.events.removeAll(node,type__$1);
{
var G__45543 = seq__45527;
var G__45544 = chunk__45528;
var G__45545 = count__45529;
var G__45546 = (i__45530 + (1));
seq__45527 = G__45543;
chunk__45528 = G__45544;
count__45529 = G__45545;
i__45530 = G__45546;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__45527);if(temp__4126__auto__)
{var seq__45527__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45527__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__45527__$1);{
var G__45547 = cljs.core.chunk_rest.call(null,seq__45527__$1);
var G__45548 = c__4410__auto__;
var G__45549 = cljs.core.count.call(null,c__4410__auto__);
var G__45550 = (0);
seq__45527 = G__45547;
chunk__45528 = G__45548;
count__45529 = G__45549;
i__45530 = G__45550;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__45527__$1);goog.events.removeAll(node,type__$1);
{
var G__45551 = cljs.core.next.call(null,seq__45527__$1);
var G__45552 = null;
var G__45553 = (0);
var G__45554 = (0);
seq__45527 = G__45551;
chunk__45528 = G__45552;
count__45529 = G__45553;
i__45530 = G__45554;
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
var G__45555 = parent;
var G__45556 = cljs.core.cons.call(null,parent,so_far);
n = G__45555;
so_far = G__45556;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__45565_45573 = cljs.core.seq.call(null,ancestors);var chunk__45566_45574 = null;var count__45567_45575 = (0);var i__45568_45576 = (0);while(true){
if((i__45568_45576 < count__45567_45575))
{var n_45577 = cljs.core._nth.call(null,chunk__45566_45574,i__45568_45576);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_45577;
goog.events.fireListeners(n_45577,evt.type,true,evt);
}
{
var G__45578 = seq__45565_45573;
var G__45579 = chunk__45566_45574;
var G__45580 = count__45567_45575;
var G__45581 = (i__45568_45576 + (1));
seq__45565_45573 = G__45578;
chunk__45566_45574 = G__45579;
count__45567_45575 = G__45580;
i__45568_45576 = G__45581;
continue;
}
} else
{var temp__4126__auto___45582 = cljs.core.seq.call(null,seq__45565_45573);if(temp__4126__auto___45582)
{var seq__45565_45583__$1 = temp__4126__auto___45582;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45565_45583__$1))
{var c__4410__auto___45584 = cljs.core.chunk_first.call(null,seq__45565_45583__$1);{
var G__45585 = cljs.core.chunk_rest.call(null,seq__45565_45583__$1);
var G__45586 = c__4410__auto___45584;
var G__45587 = cljs.core.count.call(null,c__4410__auto___45584);
var G__45588 = (0);
seq__45565_45573 = G__45585;
chunk__45566_45574 = G__45586;
count__45567_45575 = G__45587;
i__45568_45576 = G__45588;
continue;
}
} else
{var n_45589 = cljs.core.first.call(null,seq__45565_45583__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_45589;
goog.events.fireListeners(n_45589,evt.type,true,evt);
}
{
var G__45590 = cljs.core.next.call(null,seq__45565_45583__$1);
var G__45591 = null;
var G__45592 = (0);
var G__45593 = (0);
seq__45565_45573 = G__45590;
chunk__45566_45574 = G__45591;
count__45567_45575 = G__45592;
i__45568_45576 = G__45593;
continue;
}
}
} else
{}
}
break;
}
var seq__45569_45594 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__45570_45595 = null;var count__45571_45596 = (0);var i__45572_45597 = (0);while(true){
if((i__45572_45597 < count__45571_45596))
{var n_45598 = cljs.core._nth.call(null,chunk__45570_45595,i__45572_45597);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_45598;
goog.events.fireListeners(n_45598,evt.type,false,evt);
}
{
var G__45599 = seq__45569_45594;
var G__45600 = chunk__45570_45595;
var G__45601 = count__45571_45596;
var G__45602 = (i__45572_45597 + (1));
seq__45569_45594 = G__45599;
chunk__45570_45595 = G__45600;
count__45571_45596 = G__45601;
i__45572_45597 = G__45602;
continue;
}
} else
{var temp__4126__auto___45603 = cljs.core.seq.call(null,seq__45569_45594);if(temp__4126__auto___45603)
{var seq__45569_45604__$1 = temp__4126__auto___45603;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45569_45604__$1))
{var c__4410__auto___45605 = cljs.core.chunk_first.call(null,seq__45569_45604__$1);{
var G__45606 = cljs.core.chunk_rest.call(null,seq__45569_45604__$1);
var G__45607 = c__4410__auto___45605;
var G__45608 = cljs.core.count.call(null,c__4410__auto___45605);
var G__45609 = (0);
seq__45569_45594 = G__45606;
chunk__45570_45595 = G__45607;
count__45571_45596 = G__45608;
i__45572_45597 = G__45609;
continue;
}
} else
{var n_45610 = cljs.core.first.call(null,seq__45569_45604__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_45610;
goog.events.fireListeners(n_45610,evt.type,false,evt);
}
{
var G__45611 = cljs.core.next.call(null,seq__45569_45604__$1);
var G__45612 = null;
var G__45613 = (0);
var G__45614 = (0);
seq__45569_45594 = G__45611;
chunk__45570_45595 = G__45612;
count__45571_45596 = G__45613;
i__45572_45597 = G__45614;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__45621_45627 = cljs.core.seq.call(null,evt_map);var chunk__45622_45628 = null;var count__45623_45629 = (0);var i__45624_45630 = (0);while(true){
if((i__45624_45630 < count__45623_45629))
{var vec__45625_45631 = cljs.core._nth.call(null,chunk__45622_45628,i__45624_45630);var k_45632 = cljs.core.nth.call(null,vec__45625_45631,(0),null);var v_45633 = cljs.core.nth.call(null,vec__45625_45631,(1),null);(evt[k_45632] = v_45633);
{
var G__45634 = seq__45621_45627;
var G__45635 = chunk__45622_45628;
var G__45636 = count__45623_45629;
var G__45637 = (i__45624_45630 + (1));
seq__45621_45627 = G__45634;
chunk__45622_45628 = G__45635;
count__45623_45629 = G__45636;
i__45624_45630 = G__45637;
continue;
}
} else
{var temp__4126__auto___45638 = cljs.core.seq.call(null,seq__45621_45627);if(temp__4126__auto___45638)
{var seq__45621_45639__$1 = temp__4126__auto___45638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45621_45639__$1))
{var c__4410__auto___45640 = cljs.core.chunk_first.call(null,seq__45621_45639__$1);{
var G__45641 = cljs.core.chunk_rest.call(null,seq__45621_45639__$1);
var G__45642 = c__4410__auto___45640;
var G__45643 = cljs.core.count.call(null,c__4410__auto___45640);
var G__45644 = (0);
seq__45621_45627 = G__45641;
chunk__45622_45628 = G__45642;
count__45623_45629 = G__45643;
i__45624_45630 = G__45644;
continue;
}
} else
{var vec__45626_45645 = cljs.core.first.call(null,seq__45621_45639__$1);var k_45646 = cljs.core.nth.call(null,vec__45626_45645,(0),null);var v_45647 = cljs.core.nth.call(null,vec__45626_45645,(1),null);(evt[k_45646] = v_45647);
{
var G__45648 = cljs.core.next.call(null,seq__45621_45639__$1);
var G__45649 = null;
var G__45650 = (0);
var G__45651 = (0);
seq__45621_45627 = G__45648;
chunk__45622_45628 = G__45649;
count__45623_45629 = G__45650;
i__45624_45630 = G__45651;
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
return (function (p1__45652_SHARP_){return goog.events.getListeners(p1__45652_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
