// Compiled by ClojureScript 0.0-2371
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj21885 = {};return obj21885;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t21889 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t21889 = (function (evt,f,create_listener_function,meta21890){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta21890 = meta21890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t21889.cljs$lang$type = true;
domina.events.t21889.cljs$lang$ctorStr = "domina.events/t21889";
domina.events.t21889.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"domina.events/t21889");
});
domina.events.t21889.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t21889.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3640__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return not_found;
}
});
domina.events.t21889.prototype.domina$events$Event$ = true;
domina.events.t21889.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t21889.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t21889.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t21889.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t21889.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t21889.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t21889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21891){var self__ = this;
var _21891__$1 = this;return self__.meta21890;
});
domina.events.t21889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21891,meta21890__$1){var self__ = this;
var _21891__$1 = this;return (new domina.events.t21889(self__.evt,self__.f,self__.create_listener_function,meta21890__$1));
});
domina.events.__GT_t21889 = (function __GT_t21889(evt__$1,f__$1,create_listener_function__$1,meta21890){return (new domina.events.t21889(evt__$1,f__$1,create_listener_function__$1,meta21890));
});
}
return (new domina.events.t21889(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4379__auto__ = ((function (f,t){
return (function iter__21896(s__21897){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__21897__$1 = s__21897;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21897__$1);if(temp__4126__auto__)
{var s__21897__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21897__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__21897__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__21899 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__21898 = (0);while(true){
if((i__21898 < size__4378__auto__))
{var node = cljs.core._nth.call(null,c__4377__auto__,i__21898);cljs.core.chunk_append.call(null,b__21899,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__21900 = (i__21898 + (1));
i__21898 = G__21900;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21899),iter__21896.call(null,cljs.core.chunk_rest.call(null,s__21897__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21899),null);
}
} else
{var node = cljs.core.first.call(null,s__21897__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__21896.call(null,cljs.core.rest.call(null,s__21897__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__21909 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21910 = null;var count__21911 = (0);var i__21912 = (0);while(true){
if((i__21912 < count__21911))
{var node = cljs.core._nth.call(null,chunk__21910,i__21912);goog.events.removeAll(node);
{
var G__21917 = seq__21909;
var G__21918 = chunk__21910;
var G__21919 = count__21911;
var G__21920 = (i__21912 + (1));
seq__21909 = G__21917;
chunk__21910 = G__21918;
count__21911 = G__21919;
i__21912 = G__21920;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21909);if(temp__4126__auto__)
{var seq__21909__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21909__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__21909__$1);{
var G__21921 = cljs.core.chunk_rest.call(null,seq__21909__$1);
var G__21922 = c__4410__auto__;
var G__21923 = cljs.core.count.call(null,c__4410__auto__);
var G__21924 = (0);
seq__21909 = G__21921;
chunk__21910 = G__21922;
count__21911 = G__21923;
i__21912 = G__21924;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21909__$1);goog.events.removeAll(node);
{
var G__21925 = cljs.core.next.call(null,seq__21909__$1);
var G__21926 = null;
var G__21927 = (0);
var G__21928 = (0);
seq__21909 = G__21925;
chunk__21910 = G__21926;
count__21911 = G__21927;
i__21912 = G__21928;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__21913 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21914 = null;var count__21915 = (0);var i__21916 = (0);while(true){
if((i__21916 < count__21915))
{var node = cljs.core._nth.call(null,chunk__21914,i__21916);goog.events.removeAll(node,type__$1);
{
var G__21929 = seq__21913;
var G__21930 = chunk__21914;
var G__21931 = count__21915;
var G__21932 = (i__21916 + (1));
seq__21913 = G__21929;
chunk__21914 = G__21930;
count__21915 = G__21931;
i__21916 = G__21932;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21913);if(temp__4126__auto__)
{var seq__21913__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21913__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__21913__$1);{
var G__21933 = cljs.core.chunk_rest.call(null,seq__21913__$1);
var G__21934 = c__4410__auto__;
var G__21935 = cljs.core.count.call(null,c__4410__auto__);
var G__21936 = (0);
seq__21913 = G__21933;
chunk__21914 = G__21934;
count__21915 = G__21935;
i__21916 = G__21936;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21913__$1);goog.events.removeAll(node,type__$1);
{
var G__21937 = cljs.core.next.call(null,seq__21913__$1);
var G__21938 = null;
var G__21939 = (0);
var G__21940 = (0);
seq__21913 = G__21937;
chunk__21914 = G__21938;
count__21915 = G__21939;
i__21916 = G__21940;
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
var G__21941 = parent;
var G__21942 = cljs.core.cons.call(null,parent,so_far);
n = G__21941;
so_far = G__21942;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__21951_21959 = cljs.core.seq.call(null,ancestors);var chunk__21952_21960 = null;var count__21953_21961 = (0);var i__21954_21962 = (0);while(true){
if((i__21954_21962 < count__21953_21961))
{var n_21963 = cljs.core._nth.call(null,chunk__21952_21960,i__21954_21962);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21963;
goog.events.fireListeners(n_21963,evt.type,true,evt);
}
{
var G__21964 = seq__21951_21959;
var G__21965 = chunk__21952_21960;
var G__21966 = count__21953_21961;
var G__21967 = (i__21954_21962 + (1));
seq__21951_21959 = G__21964;
chunk__21952_21960 = G__21965;
count__21953_21961 = G__21966;
i__21954_21962 = G__21967;
continue;
}
} else
{var temp__4126__auto___21968 = cljs.core.seq.call(null,seq__21951_21959);if(temp__4126__auto___21968)
{var seq__21951_21969__$1 = temp__4126__auto___21968;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21951_21969__$1))
{var c__4410__auto___21970 = cljs.core.chunk_first.call(null,seq__21951_21969__$1);{
var G__21971 = cljs.core.chunk_rest.call(null,seq__21951_21969__$1);
var G__21972 = c__4410__auto___21970;
var G__21973 = cljs.core.count.call(null,c__4410__auto___21970);
var G__21974 = (0);
seq__21951_21959 = G__21971;
chunk__21952_21960 = G__21972;
count__21953_21961 = G__21973;
i__21954_21962 = G__21974;
continue;
}
} else
{var n_21975 = cljs.core.first.call(null,seq__21951_21969__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21975;
goog.events.fireListeners(n_21975,evt.type,true,evt);
}
{
var G__21976 = cljs.core.next.call(null,seq__21951_21969__$1);
var G__21977 = null;
var G__21978 = (0);
var G__21979 = (0);
seq__21951_21959 = G__21976;
chunk__21952_21960 = G__21977;
count__21953_21961 = G__21978;
i__21954_21962 = G__21979;
continue;
}
}
} else
{}
}
break;
}
var seq__21955_21980 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__21956_21981 = null;var count__21957_21982 = (0);var i__21958_21983 = (0);while(true){
if((i__21958_21983 < count__21957_21982))
{var n_21984 = cljs.core._nth.call(null,chunk__21956_21981,i__21958_21983);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21984;
goog.events.fireListeners(n_21984,evt.type,false,evt);
}
{
var G__21985 = seq__21955_21980;
var G__21986 = chunk__21956_21981;
var G__21987 = count__21957_21982;
var G__21988 = (i__21958_21983 + (1));
seq__21955_21980 = G__21985;
chunk__21956_21981 = G__21986;
count__21957_21982 = G__21987;
i__21958_21983 = G__21988;
continue;
}
} else
{var temp__4126__auto___21989 = cljs.core.seq.call(null,seq__21955_21980);if(temp__4126__auto___21989)
{var seq__21955_21990__$1 = temp__4126__auto___21989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21955_21990__$1))
{var c__4410__auto___21991 = cljs.core.chunk_first.call(null,seq__21955_21990__$1);{
var G__21992 = cljs.core.chunk_rest.call(null,seq__21955_21990__$1);
var G__21993 = c__4410__auto___21991;
var G__21994 = cljs.core.count.call(null,c__4410__auto___21991);
var G__21995 = (0);
seq__21955_21980 = G__21992;
chunk__21956_21981 = G__21993;
count__21957_21982 = G__21994;
i__21958_21983 = G__21995;
continue;
}
} else
{var n_21996 = cljs.core.first.call(null,seq__21955_21990__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_21996;
goog.events.fireListeners(n_21996,evt.type,false,evt);
}
{
var G__21997 = cljs.core.next.call(null,seq__21955_21990__$1);
var G__21998 = null;
var G__21999 = (0);
var G__22000 = (0);
seq__21955_21980 = G__21997;
chunk__21956_21981 = G__21998;
count__21957_21982 = G__21999;
i__21958_21983 = G__22000;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__22007_22013 = cljs.core.seq.call(null,evt_map);var chunk__22008_22014 = null;var count__22009_22015 = (0);var i__22010_22016 = (0);while(true){
if((i__22010_22016 < count__22009_22015))
{var vec__22011_22017 = cljs.core._nth.call(null,chunk__22008_22014,i__22010_22016);var k_22018 = cljs.core.nth.call(null,vec__22011_22017,(0),null);var v_22019 = cljs.core.nth.call(null,vec__22011_22017,(1),null);(evt[k_22018] = v_22019);
{
var G__22020 = seq__22007_22013;
var G__22021 = chunk__22008_22014;
var G__22022 = count__22009_22015;
var G__22023 = (i__22010_22016 + (1));
seq__22007_22013 = G__22020;
chunk__22008_22014 = G__22021;
count__22009_22015 = G__22022;
i__22010_22016 = G__22023;
continue;
}
} else
{var temp__4126__auto___22024 = cljs.core.seq.call(null,seq__22007_22013);if(temp__4126__auto___22024)
{var seq__22007_22025__$1 = temp__4126__auto___22024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22007_22025__$1))
{var c__4410__auto___22026 = cljs.core.chunk_first.call(null,seq__22007_22025__$1);{
var G__22027 = cljs.core.chunk_rest.call(null,seq__22007_22025__$1);
var G__22028 = c__4410__auto___22026;
var G__22029 = cljs.core.count.call(null,c__4410__auto___22026);
var G__22030 = (0);
seq__22007_22013 = G__22027;
chunk__22008_22014 = G__22028;
count__22009_22015 = G__22029;
i__22010_22016 = G__22030;
continue;
}
} else
{var vec__22012_22031 = cljs.core.first.call(null,seq__22007_22025__$1);var k_22032 = cljs.core.nth.call(null,vec__22012_22031,(0),null);var v_22033 = cljs.core.nth.call(null,vec__22012_22031,(1),null);(evt[k_22032] = v_22033);
{
var G__22034 = cljs.core.next.call(null,seq__22007_22025__$1);
var G__22035 = null;
var G__22036 = (0);
var G__22037 = (0);
seq__22007_22013 = G__22034;
chunk__22008_22014 = G__22035;
count__22009_22015 = G__22036;
i__22010_22016 = G__22037;
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
return (function (p1__22038_SHARP_){return goog.events.getListeners(p1__22038_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
