// Compiled by ClojureScript 0.0-2371
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj10989 = {};return obj10989;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t10993 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t10993 = (function (evt,f,create_listener_function,meta10994){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta10994 = meta10994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t10993.cljs$lang$type = true;
domina.events.t10993.cljs$lang$ctorStr = "domina.events/t10993";
domina.events.t10993.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"domina.events/t10993");
});
domina.events.t10993.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t10993.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3640__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return not_found;
}
});
domina.events.t10993.prototype.domina$events$Event$ = true;
domina.events.t10993.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t10993.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t10993.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t10993.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t10993.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t10993.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t10993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10995){var self__ = this;
var _10995__$1 = this;return self__.meta10994;
});
domina.events.t10993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10995,meta10994__$1){var self__ = this;
var _10995__$1 = this;return (new domina.events.t10993(self__.evt,self__.f,self__.create_listener_function,meta10994__$1));
});
domina.events.__GT_t10993 = (function __GT_t10993(evt__$1,f__$1,create_listener_function__$1,meta10994){return (new domina.events.t10993(evt__$1,f__$1,create_listener_function__$1,meta10994));
});
}
return (new domina.events.t10993(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4379__auto__ = ((function (f,t){
return (function iter__11000(s__11001){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__11001__$1 = s__11001;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11001__$1);if(temp__4126__auto__)
{var s__11001__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11001__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__11001__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__11003 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__11002 = (0);while(true){
if((i__11002 < size__4378__auto__))
{var node = cljs.core._nth.call(null,c__4377__auto__,i__11002);cljs.core.chunk_append.call(null,b__11003,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__11004 = (i__11002 + (1));
i__11002 = G__11004;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11003),iter__11000.call(null,cljs.core.chunk_rest.call(null,s__11001__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11003),null);
}
} else
{var node = cljs.core.first.call(null,s__11001__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__11000.call(null,cljs.core.rest.call(null,s__11001__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__11013 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__11014 = null;var count__11015 = (0);var i__11016 = (0);while(true){
if((i__11016 < count__11015))
{var node = cljs.core._nth.call(null,chunk__11014,i__11016);goog.events.removeAll(node);
{
var G__11021 = seq__11013;
var G__11022 = chunk__11014;
var G__11023 = count__11015;
var G__11024 = (i__11016 + (1));
seq__11013 = G__11021;
chunk__11014 = G__11022;
count__11015 = G__11023;
i__11016 = G__11024;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11013);if(temp__4126__auto__)
{var seq__11013__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11013__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__11013__$1);{
var G__11025 = cljs.core.chunk_rest.call(null,seq__11013__$1);
var G__11026 = c__4410__auto__;
var G__11027 = cljs.core.count.call(null,c__4410__auto__);
var G__11028 = (0);
seq__11013 = G__11025;
chunk__11014 = G__11026;
count__11015 = G__11027;
i__11016 = G__11028;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__11013__$1);goog.events.removeAll(node);
{
var G__11029 = cljs.core.next.call(null,seq__11013__$1);
var G__11030 = null;
var G__11031 = (0);
var G__11032 = (0);
seq__11013 = G__11029;
chunk__11014 = G__11030;
count__11015 = G__11031;
i__11016 = G__11032;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__11017 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__11018 = null;var count__11019 = (0);var i__11020 = (0);while(true){
if((i__11020 < count__11019))
{var node = cljs.core._nth.call(null,chunk__11018,i__11020);goog.events.removeAll(node,type__$1);
{
var G__11033 = seq__11017;
var G__11034 = chunk__11018;
var G__11035 = count__11019;
var G__11036 = (i__11020 + (1));
seq__11017 = G__11033;
chunk__11018 = G__11034;
count__11019 = G__11035;
i__11020 = G__11036;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11017);if(temp__4126__auto__)
{var seq__11017__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11017__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__11017__$1);{
var G__11037 = cljs.core.chunk_rest.call(null,seq__11017__$1);
var G__11038 = c__4410__auto__;
var G__11039 = cljs.core.count.call(null,c__4410__auto__);
var G__11040 = (0);
seq__11017 = G__11037;
chunk__11018 = G__11038;
count__11019 = G__11039;
i__11020 = G__11040;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__11017__$1);goog.events.removeAll(node,type__$1);
{
var G__11041 = cljs.core.next.call(null,seq__11017__$1);
var G__11042 = null;
var G__11043 = (0);
var G__11044 = (0);
seq__11017 = G__11041;
chunk__11018 = G__11042;
count__11019 = G__11043;
i__11020 = G__11044;
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
var G__11045 = parent;
var G__11046 = cljs.core.cons.call(null,parent,so_far);
n = G__11045;
so_far = G__11046;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__11055_11063 = cljs.core.seq.call(null,ancestors);var chunk__11056_11064 = null;var count__11057_11065 = (0);var i__11058_11066 = (0);while(true){
if((i__11058_11066 < count__11057_11065))
{var n_11067 = cljs.core._nth.call(null,chunk__11056_11064,i__11058_11066);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_11067;
goog.events.fireListeners(n_11067,evt.type,true,evt);
}
{
var G__11068 = seq__11055_11063;
var G__11069 = chunk__11056_11064;
var G__11070 = count__11057_11065;
var G__11071 = (i__11058_11066 + (1));
seq__11055_11063 = G__11068;
chunk__11056_11064 = G__11069;
count__11057_11065 = G__11070;
i__11058_11066 = G__11071;
continue;
}
} else
{var temp__4126__auto___11072 = cljs.core.seq.call(null,seq__11055_11063);if(temp__4126__auto___11072)
{var seq__11055_11073__$1 = temp__4126__auto___11072;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11055_11073__$1))
{var c__4410__auto___11074 = cljs.core.chunk_first.call(null,seq__11055_11073__$1);{
var G__11075 = cljs.core.chunk_rest.call(null,seq__11055_11073__$1);
var G__11076 = c__4410__auto___11074;
var G__11077 = cljs.core.count.call(null,c__4410__auto___11074);
var G__11078 = (0);
seq__11055_11063 = G__11075;
chunk__11056_11064 = G__11076;
count__11057_11065 = G__11077;
i__11058_11066 = G__11078;
continue;
}
} else
{var n_11079 = cljs.core.first.call(null,seq__11055_11073__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_11079;
goog.events.fireListeners(n_11079,evt.type,true,evt);
}
{
var G__11080 = cljs.core.next.call(null,seq__11055_11073__$1);
var G__11081 = null;
var G__11082 = (0);
var G__11083 = (0);
seq__11055_11063 = G__11080;
chunk__11056_11064 = G__11081;
count__11057_11065 = G__11082;
i__11058_11066 = G__11083;
continue;
}
}
} else
{}
}
break;
}
var seq__11059_11084 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__11060_11085 = null;var count__11061_11086 = (0);var i__11062_11087 = (0);while(true){
if((i__11062_11087 < count__11061_11086))
{var n_11088 = cljs.core._nth.call(null,chunk__11060_11085,i__11062_11087);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_11088;
goog.events.fireListeners(n_11088,evt.type,false,evt);
}
{
var G__11089 = seq__11059_11084;
var G__11090 = chunk__11060_11085;
var G__11091 = count__11061_11086;
var G__11092 = (i__11062_11087 + (1));
seq__11059_11084 = G__11089;
chunk__11060_11085 = G__11090;
count__11061_11086 = G__11091;
i__11062_11087 = G__11092;
continue;
}
} else
{var temp__4126__auto___11093 = cljs.core.seq.call(null,seq__11059_11084);if(temp__4126__auto___11093)
{var seq__11059_11094__$1 = temp__4126__auto___11093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11059_11094__$1))
{var c__4410__auto___11095 = cljs.core.chunk_first.call(null,seq__11059_11094__$1);{
var G__11096 = cljs.core.chunk_rest.call(null,seq__11059_11094__$1);
var G__11097 = c__4410__auto___11095;
var G__11098 = cljs.core.count.call(null,c__4410__auto___11095);
var G__11099 = (0);
seq__11059_11084 = G__11096;
chunk__11060_11085 = G__11097;
count__11061_11086 = G__11098;
i__11062_11087 = G__11099;
continue;
}
} else
{var n_11100 = cljs.core.first.call(null,seq__11059_11094__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_11100;
goog.events.fireListeners(n_11100,evt.type,false,evt);
}
{
var G__11101 = cljs.core.next.call(null,seq__11059_11094__$1);
var G__11102 = null;
var G__11103 = (0);
var G__11104 = (0);
seq__11059_11084 = G__11101;
chunk__11060_11085 = G__11102;
count__11061_11086 = G__11103;
i__11062_11087 = G__11104;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__11111_11117 = cljs.core.seq.call(null,evt_map);var chunk__11112_11118 = null;var count__11113_11119 = (0);var i__11114_11120 = (0);while(true){
if((i__11114_11120 < count__11113_11119))
{var vec__11115_11121 = cljs.core._nth.call(null,chunk__11112_11118,i__11114_11120);var k_11122 = cljs.core.nth.call(null,vec__11115_11121,(0),null);var v_11123 = cljs.core.nth.call(null,vec__11115_11121,(1),null);(evt[k_11122] = v_11123);
{
var G__11124 = seq__11111_11117;
var G__11125 = chunk__11112_11118;
var G__11126 = count__11113_11119;
var G__11127 = (i__11114_11120 + (1));
seq__11111_11117 = G__11124;
chunk__11112_11118 = G__11125;
count__11113_11119 = G__11126;
i__11114_11120 = G__11127;
continue;
}
} else
{var temp__4126__auto___11128 = cljs.core.seq.call(null,seq__11111_11117);if(temp__4126__auto___11128)
{var seq__11111_11129__$1 = temp__4126__auto___11128;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11111_11129__$1))
{var c__4410__auto___11130 = cljs.core.chunk_first.call(null,seq__11111_11129__$1);{
var G__11131 = cljs.core.chunk_rest.call(null,seq__11111_11129__$1);
var G__11132 = c__4410__auto___11130;
var G__11133 = cljs.core.count.call(null,c__4410__auto___11130);
var G__11134 = (0);
seq__11111_11117 = G__11131;
chunk__11112_11118 = G__11132;
count__11113_11119 = G__11133;
i__11114_11120 = G__11134;
continue;
}
} else
{var vec__11116_11135 = cljs.core.first.call(null,seq__11111_11129__$1);var k_11136 = cljs.core.nth.call(null,vec__11116_11135,(0),null);var v_11137 = cljs.core.nth.call(null,vec__11116_11135,(1),null);(evt[k_11136] = v_11137);
{
var G__11138 = cljs.core.next.call(null,seq__11111_11129__$1);
var G__11139 = null;
var G__11140 = (0);
var G__11141 = (0);
seq__11111_11117 = G__11138;
chunk__11112_11118 = G__11139;
count__11113_11119 = G__11140;
i__11114_11120 = G__11141;
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
return (function (p1__11142_SHARP_){return goog.events.getListeners(p1__11142_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
