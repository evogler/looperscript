// Compiled by ClojureScript 0.0-2371
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj34976 = {};return obj34976;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t34980 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t34980 = (function (evt,f,create_listener_function,meta34981){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta34981 = meta34981;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t34980.cljs$lang$type = true;
domina.events.t34980.cljs$lang$ctorStr = "domina.events/t34980";
domina.events.t34980.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"domina.events/t34980");
});
domina.events.t34980.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t34980.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3640__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return not_found;
}
});
domina.events.t34980.prototype.domina$events$Event$ = true;
domina.events.t34980.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t34980.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t34980.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t34980.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t34980.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t34980.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t34980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34982){var self__ = this;
var _34982__$1 = this;return self__.meta34981;
});
domina.events.t34980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34982,meta34981__$1){var self__ = this;
var _34982__$1 = this;return (new domina.events.t34980(self__.evt,self__.f,self__.create_listener_function,meta34981__$1));
});
domina.events.__GT_t34980 = (function __GT_t34980(evt__$1,f__$1,create_listener_function__$1,meta34981){return (new domina.events.t34980(evt__$1,f__$1,create_listener_function__$1,meta34981));
});
}
return (new domina.events.t34980(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4379__auto__ = ((function (f,t){
return (function iter__34987(s__34988){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__34988__$1 = s__34988;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34988__$1);if(temp__4126__auto__)
{var s__34988__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34988__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__34988__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__34990 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__34989 = (0);while(true){
if((i__34989 < size__4378__auto__))
{var node = cljs.core._nth.call(null,c__4377__auto__,i__34989);cljs.core.chunk_append.call(null,b__34990,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__34991 = (i__34989 + (1));
i__34989 = G__34991;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34990),iter__34987.call(null,cljs.core.chunk_rest.call(null,s__34988__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34990),null);
}
} else
{var node = cljs.core.first.call(null,s__34988__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__34987.call(null,cljs.core.rest.call(null,s__34988__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__35000 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35001 = null;var count__35002 = (0);var i__35003 = (0);while(true){
if((i__35003 < count__35002))
{var node = cljs.core._nth.call(null,chunk__35001,i__35003);goog.events.removeAll(node);
{
var G__35008 = seq__35000;
var G__35009 = chunk__35001;
var G__35010 = count__35002;
var G__35011 = (i__35003 + (1));
seq__35000 = G__35008;
chunk__35001 = G__35009;
count__35002 = G__35010;
i__35003 = G__35011;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__35000);if(temp__4126__auto__)
{var seq__35000__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35000__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__35000__$1);{
var G__35012 = cljs.core.chunk_rest.call(null,seq__35000__$1);
var G__35013 = c__4410__auto__;
var G__35014 = cljs.core.count.call(null,c__4410__auto__);
var G__35015 = (0);
seq__35000 = G__35012;
chunk__35001 = G__35013;
count__35002 = G__35014;
i__35003 = G__35015;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__35000__$1);goog.events.removeAll(node);
{
var G__35016 = cljs.core.next.call(null,seq__35000__$1);
var G__35017 = null;
var G__35018 = (0);
var G__35019 = (0);
seq__35000 = G__35016;
chunk__35001 = G__35017;
count__35002 = G__35018;
i__35003 = G__35019;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__35004 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35005 = null;var count__35006 = (0);var i__35007 = (0);while(true){
if((i__35007 < count__35006))
{var node = cljs.core._nth.call(null,chunk__35005,i__35007);goog.events.removeAll(node,type__$1);
{
var G__35020 = seq__35004;
var G__35021 = chunk__35005;
var G__35022 = count__35006;
var G__35023 = (i__35007 + (1));
seq__35004 = G__35020;
chunk__35005 = G__35021;
count__35006 = G__35022;
i__35007 = G__35023;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__35004);if(temp__4126__auto__)
{var seq__35004__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35004__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__35004__$1);{
var G__35024 = cljs.core.chunk_rest.call(null,seq__35004__$1);
var G__35025 = c__4410__auto__;
var G__35026 = cljs.core.count.call(null,c__4410__auto__);
var G__35027 = (0);
seq__35004 = G__35024;
chunk__35005 = G__35025;
count__35006 = G__35026;
i__35007 = G__35027;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__35004__$1);goog.events.removeAll(node,type__$1);
{
var G__35028 = cljs.core.next.call(null,seq__35004__$1);
var G__35029 = null;
var G__35030 = (0);
var G__35031 = (0);
seq__35004 = G__35028;
chunk__35005 = G__35029;
count__35006 = G__35030;
i__35007 = G__35031;
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
var G__35032 = parent;
var G__35033 = cljs.core.cons.call(null,parent,so_far);
n = G__35032;
so_far = G__35033;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__35042_35050 = cljs.core.seq.call(null,ancestors);var chunk__35043_35051 = null;var count__35044_35052 = (0);var i__35045_35053 = (0);while(true){
if((i__35045_35053 < count__35044_35052))
{var n_35054 = cljs.core._nth.call(null,chunk__35043_35051,i__35045_35053);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35054;
goog.events.fireListeners(n_35054,evt.type,true,evt);
}
{
var G__35055 = seq__35042_35050;
var G__35056 = chunk__35043_35051;
var G__35057 = count__35044_35052;
var G__35058 = (i__35045_35053 + (1));
seq__35042_35050 = G__35055;
chunk__35043_35051 = G__35056;
count__35044_35052 = G__35057;
i__35045_35053 = G__35058;
continue;
}
} else
{var temp__4126__auto___35059 = cljs.core.seq.call(null,seq__35042_35050);if(temp__4126__auto___35059)
{var seq__35042_35060__$1 = temp__4126__auto___35059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35042_35060__$1))
{var c__4410__auto___35061 = cljs.core.chunk_first.call(null,seq__35042_35060__$1);{
var G__35062 = cljs.core.chunk_rest.call(null,seq__35042_35060__$1);
var G__35063 = c__4410__auto___35061;
var G__35064 = cljs.core.count.call(null,c__4410__auto___35061);
var G__35065 = (0);
seq__35042_35050 = G__35062;
chunk__35043_35051 = G__35063;
count__35044_35052 = G__35064;
i__35045_35053 = G__35065;
continue;
}
} else
{var n_35066 = cljs.core.first.call(null,seq__35042_35060__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35066;
goog.events.fireListeners(n_35066,evt.type,true,evt);
}
{
var G__35067 = cljs.core.next.call(null,seq__35042_35060__$1);
var G__35068 = null;
var G__35069 = (0);
var G__35070 = (0);
seq__35042_35050 = G__35067;
chunk__35043_35051 = G__35068;
count__35044_35052 = G__35069;
i__35045_35053 = G__35070;
continue;
}
}
} else
{}
}
break;
}
var seq__35046_35071 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__35047_35072 = null;var count__35048_35073 = (0);var i__35049_35074 = (0);while(true){
if((i__35049_35074 < count__35048_35073))
{var n_35075 = cljs.core._nth.call(null,chunk__35047_35072,i__35049_35074);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35075;
goog.events.fireListeners(n_35075,evt.type,false,evt);
}
{
var G__35076 = seq__35046_35071;
var G__35077 = chunk__35047_35072;
var G__35078 = count__35048_35073;
var G__35079 = (i__35049_35074 + (1));
seq__35046_35071 = G__35076;
chunk__35047_35072 = G__35077;
count__35048_35073 = G__35078;
i__35049_35074 = G__35079;
continue;
}
} else
{var temp__4126__auto___35080 = cljs.core.seq.call(null,seq__35046_35071);if(temp__4126__auto___35080)
{var seq__35046_35081__$1 = temp__4126__auto___35080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35046_35081__$1))
{var c__4410__auto___35082 = cljs.core.chunk_first.call(null,seq__35046_35081__$1);{
var G__35083 = cljs.core.chunk_rest.call(null,seq__35046_35081__$1);
var G__35084 = c__4410__auto___35082;
var G__35085 = cljs.core.count.call(null,c__4410__auto___35082);
var G__35086 = (0);
seq__35046_35071 = G__35083;
chunk__35047_35072 = G__35084;
count__35048_35073 = G__35085;
i__35049_35074 = G__35086;
continue;
}
} else
{var n_35087 = cljs.core.first.call(null,seq__35046_35081__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35087;
goog.events.fireListeners(n_35087,evt.type,false,evt);
}
{
var G__35088 = cljs.core.next.call(null,seq__35046_35081__$1);
var G__35089 = null;
var G__35090 = (0);
var G__35091 = (0);
seq__35046_35071 = G__35088;
chunk__35047_35072 = G__35089;
count__35048_35073 = G__35090;
i__35049_35074 = G__35091;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__35098_35104 = cljs.core.seq.call(null,evt_map);var chunk__35099_35105 = null;var count__35100_35106 = (0);var i__35101_35107 = (0);while(true){
if((i__35101_35107 < count__35100_35106))
{var vec__35102_35108 = cljs.core._nth.call(null,chunk__35099_35105,i__35101_35107);var k_35109 = cljs.core.nth.call(null,vec__35102_35108,(0),null);var v_35110 = cljs.core.nth.call(null,vec__35102_35108,(1),null);(evt[k_35109] = v_35110);
{
var G__35111 = seq__35098_35104;
var G__35112 = chunk__35099_35105;
var G__35113 = count__35100_35106;
var G__35114 = (i__35101_35107 + (1));
seq__35098_35104 = G__35111;
chunk__35099_35105 = G__35112;
count__35100_35106 = G__35113;
i__35101_35107 = G__35114;
continue;
}
} else
{var temp__4126__auto___35115 = cljs.core.seq.call(null,seq__35098_35104);if(temp__4126__auto___35115)
{var seq__35098_35116__$1 = temp__4126__auto___35115;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35098_35116__$1))
{var c__4410__auto___35117 = cljs.core.chunk_first.call(null,seq__35098_35116__$1);{
var G__35118 = cljs.core.chunk_rest.call(null,seq__35098_35116__$1);
var G__35119 = c__4410__auto___35117;
var G__35120 = cljs.core.count.call(null,c__4410__auto___35117);
var G__35121 = (0);
seq__35098_35104 = G__35118;
chunk__35099_35105 = G__35119;
count__35100_35106 = G__35120;
i__35101_35107 = G__35121;
continue;
}
} else
{var vec__35103_35122 = cljs.core.first.call(null,seq__35098_35116__$1);var k_35123 = cljs.core.nth.call(null,vec__35103_35122,(0),null);var v_35124 = cljs.core.nth.call(null,vec__35103_35122,(1),null);(evt[k_35123] = v_35124);
{
var G__35125 = cljs.core.next.call(null,seq__35098_35116__$1);
var G__35126 = null;
var G__35127 = (0);
var G__35128 = (0);
seq__35098_35104 = G__35125;
chunk__35099_35105 = G__35126;
count__35100_35106 = G__35127;
i__35101_35107 = G__35128;
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
return (function (p1__35129_SHARP_){return goog.events.getListeners(p1__35129_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
