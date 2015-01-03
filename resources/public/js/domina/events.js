// Compiled by ClojureScript 0.0-2371
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj14029 = {};return obj14029;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t14033 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14033 = (function (evt,f,create_listener_function,meta14034){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14034 = meta14034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14033.cljs$lang$type = true;
domina.events.t14033.cljs$lang$ctorStr = "domina.events/t14033";
domina.events.t14033.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"domina.events/t14033");
});
domina.events.t14033.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t14033.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3640__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return not_found;
}
});
domina.events.t14033.prototype.domina$events$Event$ = true;
domina.events.t14033.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14033.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14033.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14033.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14033.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14033.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14035){var self__ = this;
var _14035__$1 = this;return self__.meta14034;
});
domina.events.t14033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14035,meta14034__$1){var self__ = this;
var _14035__$1 = this;return (new domina.events.t14033(self__.evt,self__.f,self__.create_listener_function,meta14034__$1));
});
domina.events.__GT_t14033 = (function __GT_t14033(evt__$1,f__$1,create_listener_function__$1,meta14034){return (new domina.events.t14033(evt__$1,f__$1,create_listener_function__$1,meta14034));
});
}
return (new domina.events.t14033(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4379__auto__ = ((function (f,t){
return (function iter__14040(s__14041){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__14041__$1 = s__14041;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14041__$1);if(temp__4126__auto__)
{var s__14041__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14041__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__14041__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__14043 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__14042 = (0);while(true){
if((i__14042 < size__4378__auto__))
{var node = cljs.core._nth.call(null,c__4377__auto__,i__14042);cljs.core.chunk_append.call(null,b__14043,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__14044 = (i__14042 + (1));
i__14042 = G__14044;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14043),iter__14040.call(null,cljs.core.chunk_rest.call(null,s__14041__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14043),null);
}
} else
{var node = cljs.core.first.call(null,s__14041__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__14040.call(null,cljs.core.rest.call(null,s__14041__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__14053 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14054 = null;var count__14055 = (0);var i__14056 = (0);while(true){
if((i__14056 < count__14055))
{var node = cljs.core._nth.call(null,chunk__14054,i__14056);goog.events.removeAll(node);
{
var G__14061 = seq__14053;
var G__14062 = chunk__14054;
var G__14063 = count__14055;
var G__14064 = (i__14056 + (1));
seq__14053 = G__14061;
chunk__14054 = G__14062;
count__14055 = G__14063;
i__14056 = G__14064;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14053);if(temp__4126__auto__)
{var seq__14053__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14053__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__14053__$1);{
var G__14065 = cljs.core.chunk_rest.call(null,seq__14053__$1);
var G__14066 = c__4410__auto__;
var G__14067 = cljs.core.count.call(null,c__4410__auto__);
var G__14068 = (0);
seq__14053 = G__14065;
chunk__14054 = G__14066;
count__14055 = G__14067;
i__14056 = G__14068;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14053__$1);goog.events.removeAll(node);
{
var G__14069 = cljs.core.next.call(null,seq__14053__$1);
var G__14070 = null;
var G__14071 = (0);
var G__14072 = (0);
seq__14053 = G__14069;
chunk__14054 = G__14070;
count__14055 = G__14071;
i__14056 = G__14072;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__14057 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14058 = null;var count__14059 = (0);var i__14060 = (0);while(true){
if((i__14060 < count__14059))
{var node = cljs.core._nth.call(null,chunk__14058,i__14060);goog.events.removeAll(node,type__$1);
{
var G__14073 = seq__14057;
var G__14074 = chunk__14058;
var G__14075 = count__14059;
var G__14076 = (i__14060 + (1));
seq__14057 = G__14073;
chunk__14058 = G__14074;
count__14059 = G__14075;
i__14060 = G__14076;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14057);if(temp__4126__auto__)
{var seq__14057__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14057__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__14057__$1);{
var G__14077 = cljs.core.chunk_rest.call(null,seq__14057__$1);
var G__14078 = c__4410__auto__;
var G__14079 = cljs.core.count.call(null,c__4410__auto__);
var G__14080 = (0);
seq__14057 = G__14077;
chunk__14058 = G__14078;
count__14059 = G__14079;
i__14060 = G__14080;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14057__$1);goog.events.removeAll(node,type__$1);
{
var G__14081 = cljs.core.next.call(null,seq__14057__$1);
var G__14082 = null;
var G__14083 = (0);
var G__14084 = (0);
seq__14057 = G__14081;
chunk__14058 = G__14082;
count__14059 = G__14083;
i__14060 = G__14084;
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
var G__14085 = parent;
var G__14086 = cljs.core.cons.call(null,parent,so_far);
n = G__14085;
so_far = G__14086;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__14095_14103 = cljs.core.seq.call(null,ancestors);var chunk__14096_14104 = null;var count__14097_14105 = (0);var i__14098_14106 = (0);while(true){
if((i__14098_14106 < count__14097_14105))
{var n_14107 = cljs.core._nth.call(null,chunk__14096_14104,i__14098_14106);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14107;
goog.events.fireListeners(n_14107,evt.type,true,evt);
}
{
var G__14108 = seq__14095_14103;
var G__14109 = chunk__14096_14104;
var G__14110 = count__14097_14105;
var G__14111 = (i__14098_14106 + (1));
seq__14095_14103 = G__14108;
chunk__14096_14104 = G__14109;
count__14097_14105 = G__14110;
i__14098_14106 = G__14111;
continue;
}
} else
{var temp__4126__auto___14112 = cljs.core.seq.call(null,seq__14095_14103);if(temp__4126__auto___14112)
{var seq__14095_14113__$1 = temp__4126__auto___14112;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14095_14113__$1))
{var c__4410__auto___14114 = cljs.core.chunk_first.call(null,seq__14095_14113__$1);{
var G__14115 = cljs.core.chunk_rest.call(null,seq__14095_14113__$1);
var G__14116 = c__4410__auto___14114;
var G__14117 = cljs.core.count.call(null,c__4410__auto___14114);
var G__14118 = (0);
seq__14095_14103 = G__14115;
chunk__14096_14104 = G__14116;
count__14097_14105 = G__14117;
i__14098_14106 = G__14118;
continue;
}
} else
{var n_14119 = cljs.core.first.call(null,seq__14095_14113__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14119;
goog.events.fireListeners(n_14119,evt.type,true,evt);
}
{
var G__14120 = cljs.core.next.call(null,seq__14095_14113__$1);
var G__14121 = null;
var G__14122 = (0);
var G__14123 = (0);
seq__14095_14103 = G__14120;
chunk__14096_14104 = G__14121;
count__14097_14105 = G__14122;
i__14098_14106 = G__14123;
continue;
}
}
} else
{}
}
break;
}
var seq__14099_14124 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__14100_14125 = null;var count__14101_14126 = (0);var i__14102_14127 = (0);while(true){
if((i__14102_14127 < count__14101_14126))
{var n_14128 = cljs.core._nth.call(null,chunk__14100_14125,i__14102_14127);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14128;
goog.events.fireListeners(n_14128,evt.type,false,evt);
}
{
var G__14129 = seq__14099_14124;
var G__14130 = chunk__14100_14125;
var G__14131 = count__14101_14126;
var G__14132 = (i__14102_14127 + (1));
seq__14099_14124 = G__14129;
chunk__14100_14125 = G__14130;
count__14101_14126 = G__14131;
i__14102_14127 = G__14132;
continue;
}
} else
{var temp__4126__auto___14133 = cljs.core.seq.call(null,seq__14099_14124);if(temp__4126__auto___14133)
{var seq__14099_14134__$1 = temp__4126__auto___14133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14099_14134__$1))
{var c__4410__auto___14135 = cljs.core.chunk_first.call(null,seq__14099_14134__$1);{
var G__14136 = cljs.core.chunk_rest.call(null,seq__14099_14134__$1);
var G__14137 = c__4410__auto___14135;
var G__14138 = cljs.core.count.call(null,c__4410__auto___14135);
var G__14139 = (0);
seq__14099_14124 = G__14136;
chunk__14100_14125 = G__14137;
count__14101_14126 = G__14138;
i__14102_14127 = G__14139;
continue;
}
} else
{var n_14140 = cljs.core.first.call(null,seq__14099_14134__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14140;
goog.events.fireListeners(n_14140,evt.type,false,evt);
}
{
var G__14141 = cljs.core.next.call(null,seq__14099_14134__$1);
var G__14142 = null;
var G__14143 = (0);
var G__14144 = (0);
seq__14099_14124 = G__14141;
chunk__14100_14125 = G__14142;
count__14101_14126 = G__14143;
i__14102_14127 = G__14144;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__14151_14157 = cljs.core.seq.call(null,evt_map);var chunk__14152_14158 = null;var count__14153_14159 = (0);var i__14154_14160 = (0);while(true){
if((i__14154_14160 < count__14153_14159))
{var vec__14155_14161 = cljs.core._nth.call(null,chunk__14152_14158,i__14154_14160);var k_14162 = cljs.core.nth.call(null,vec__14155_14161,(0),null);var v_14163 = cljs.core.nth.call(null,vec__14155_14161,(1),null);(evt[k_14162] = v_14163);
{
var G__14164 = seq__14151_14157;
var G__14165 = chunk__14152_14158;
var G__14166 = count__14153_14159;
var G__14167 = (i__14154_14160 + (1));
seq__14151_14157 = G__14164;
chunk__14152_14158 = G__14165;
count__14153_14159 = G__14166;
i__14154_14160 = G__14167;
continue;
}
} else
{var temp__4126__auto___14168 = cljs.core.seq.call(null,seq__14151_14157);if(temp__4126__auto___14168)
{var seq__14151_14169__$1 = temp__4126__auto___14168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14151_14169__$1))
{var c__4410__auto___14170 = cljs.core.chunk_first.call(null,seq__14151_14169__$1);{
var G__14171 = cljs.core.chunk_rest.call(null,seq__14151_14169__$1);
var G__14172 = c__4410__auto___14170;
var G__14173 = cljs.core.count.call(null,c__4410__auto___14170);
var G__14174 = (0);
seq__14151_14157 = G__14171;
chunk__14152_14158 = G__14172;
count__14153_14159 = G__14173;
i__14154_14160 = G__14174;
continue;
}
} else
{var vec__14156_14175 = cljs.core.first.call(null,seq__14151_14169__$1);var k_14176 = cljs.core.nth.call(null,vec__14156_14175,(0),null);var v_14177 = cljs.core.nth.call(null,vec__14156_14175,(1),null);(evt[k_14176] = v_14177);
{
var G__14178 = cljs.core.next.call(null,seq__14151_14169__$1);
var G__14179 = null;
var G__14180 = (0);
var G__14181 = (0);
seq__14151_14157 = G__14178;
chunk__14152_14158 = G__14179;
count__14153_14159 = G__14180;
i__14154_14160 = G__14181;
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
return (function (p1__14182_SHARP_){return goog.events.getListeners(p1__14182_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
