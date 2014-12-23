// Compiled by ClojureScript 0.0-2371
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj48873 = {};return obj48873;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t48877 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t48877 = (function (evt,f,create_listener_function,meta48878){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta48878 = meta48878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t48877.cljs$lang$type = true;
domina.events.t48877.cljs$lang$ctorStr = "domina.events/t48877";
domina.events.t48877.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"domina.events/t48877");
});
domina.events.t48877.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t48877.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3640__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return not_found;
}
});
domina.events.t48877.prototype.domina$events$Event$ = true;
domina.events.t48877.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t48877.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t48877.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t48877.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t48877.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t48877.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t48877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48879){var self__ = this;
var _48879__$1 = this;return self__.meta48878;
});
domina.events.t48877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48879,meta48878__$1){var self__ = this;
var _48879__$1 = this;return (new domina.events.t48877(self__.evt,self__.f,self__.create_listener_function,meta48878__$1));
});
domina.events.__GT_t48877 = (function __GT_t48877(evt__$1,f__$1,create_listener_function__$1,meta48878){return (new domina.events.t48877(evt__$1,f__$1,create_listener_function__$1,meta48878));
});
}
return (new domina.events.t48877(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4379__auto__ = ((function (f,t){
return (function iter__48884(s__48885){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__48885__$1 = s__48885;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__48885__$1);if(temp__4126__auto__)
{var s__48885__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__48885__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__48885__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__48887 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__48886 = (0);while(true){
if((i__48886 < size__4378__auto__))
{var node = cljs.core._nth.call(null,c__4377__auto__,i__48886);cljs.core.chunk_append.call(null,b__48887,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__48888 = (i__48886 + (1));
i__48886 = G__48888;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48887),iter__48884.call(null,cljs.core.chunk_rest.call(null,s__48885__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48887),null);
}
} else
{var node = cljs.core.first.call(null,s__48885__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__48884.call(null,cljs.core.rest.call(null,s__48885__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__48897 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__48898 = null;var count__48899 = (0);var i__48900 = (0);while(true){
if((i__48900 < count__48899))
{var node = cljs.core._nth.call(null,chunk__48898,i__48900);goog.events.removeAll(node);
{
var G__48905 = seq__48897;
var G__48906 = chunk__48898;
var G__48907 = count__48899;
var G__48908 = (i__48900 + (1));
seq__48897 = G__48905;
chunk__48898 = G__48906;
count__48899 = G__48907;
i__48900 = G__48908;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__48897);if(temp__4126__auto__)
{var seq__48897__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48897__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__48897__$1);{
var G__48909 = cljs.core.chunk_rest.call(null,seq__48897__$1);
var G__48910 = c__4410__auto__;
var G__48911 = cljs.core.count.call(null,c__4410__auto__);
var G__48912 = (0);
seq__48897 = G__48909;
chunk__48898 = G__48910;
count__48899 = G__48911;
i__48900 = G__48912;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__48897__$1);goog.events.removeAll(node);
{
var G__48913 = cljs.core.next.call(null,seq__48897__$1);
var G__48914 = null;
var G__48915 = (0);
var G__48916 = (0);
seq__48897 = G__48913;
chunk__48898 = G__48914;
count__48899 = G__48915;
i__48900 = G__48916;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__48901 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__48902 = null;var count__48903 = (0);var i__48904 = (0);while(true){
if((i__48904 < count__48903))
{var node = cljs.core._nth.call(null,chunk__48902,i__48904);goog.events.removeAll(node,type__$1);
{
var G__48917 = seq__48901;
var G__48918 = chunk__48902;
var G__48919 = count__48903;
var G__48920 = (i__48904 + (1));
seq__48901 = G__48917;
chunk__48902 = G__48918;
count__48903 = G__48919;
i__48904 = G__48920;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__48901);if(temp__4126__auto__)
{var seq__48901__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48901__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__48901__$1);{
var G__48921 = cljs.core.chunk_rest.call(null,seq__48901__$1);
var G__48922 = c__4410__auto__;
var G__48923 = cljs.core.count.call(null,c__4410__auto__);
var G__48924 = (0);
seq__48901 = G__48921;
chunk__48902 = G__48922;
count__48903 = G__48923;
i__48904 = G__48924;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__48901__$1);goog.events.removeAll(node,type__$1);
{
var G__48925 = cljs.core.next.call(null,seq__48901__$1);
var G__48926 = null;
var G__48927 = (0);
var G__48928 = (0);
seq__48901 = G__48925;
chunk__48902 = G__48926;
count__48903 = G__48927;
i__48904 = G__48928;
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
var G__48929 = parent;
var G__48930 = cljs.core.cons.call(null,parent,so_far);
n = G__48929;
so_far = G__48930;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__48939_48947 = cljs.core.seq.call(null,ancestors);var chunk__48940_48948 = null;var count__48941_48949 = (0);var i__48942_48950 = (0);while(true){
if((i__48942_48950 < count__48941_48949))
{var n_48951 = cljs.core._nth.call(null,chunk__48940_48948,i__48942_48950);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_48951;
goog.events.fireListeners(n_48951,evt.type,true,evt);
}
{
var G__48952 = seq__48939_48947;
var G__48953 = chunk__48940_48948;
var G__48954 = count__48941_48949;
var G__48955 = (i__48942_48950 + (1));
seq__48939_48947 = G__48952;
chunk__48940_48948 = G__48953;
count__48941_48949 = G__48954;
i__48942_48950 = G__48955;
continue;
}
} else
{var temp__4126__auto___48956 = cljs.core.seq.call(null,seq__48939_48947);if(temp__4126__auto___48956)
{var seq__48939_48957__$1 = temp__4126__auto___48956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48939_48957__$1))
{var c__4410__auto___48958 = cljs.core.chunk_first.call(null,seq__48939_48957__$1);{
var G__48959 = cljs.core.chunk_rest.call(null,seq__48939_48957__$1);
var G__48960 = c__4410__auto___48958;
var G__48961 = cljs.core.count.call(null,c__4410__auto___48958);
var G__48962 = (0);
seq__48939_48947 = G__48959;
chunk__48940_48948 = G__48960;
count__48941_48949 = G__48961;
i__48942_48950 = G__48962;
continue;
}
} else
{var n_48963 = cljs.core.first.call(null,seq__48939_48957__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_48963;
goog.events.fireListeners(n_48963,evt.type,true,evt);
}
{
var G__48964 = cljs.core.next.call(null,seq__48939_48957__$1);
var G__48965 = null;
var G__48966 = (0);
var G__48967 = (0);
seq__48939_48947 = G__48964;
chunk__48940_48948 = G__48965;
count__48941_48949 = G__48966;
i__48942_48950 = G__48967;
continue;
}
}
} else
{}
}
break;
}
var seq__48943_48968 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__48944_48969 = null;var count__48945_48970 = (0);var i__48946_48971 = (0);while(true){
if((i__48946_48971 < count__48945_48970))
{var n_48972 = cljs.core._nth.call(null,chunk__48944_48969,i__48946_48971);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_48972;
goog.events.fireListeners(n_48972,evt.type,false,evt);
}
{
var G__48973 = seq__48943_48968;
var G__48974 = chunk__48944_48969;
var G__48975 = count__48945_48970;
var G__48976 = (i__48946_48971 + (1));
seq__48943_48968 = G__48973;
chunk__48944_48969 = G__48974;
count__48945_48970 = G__48975;
i__48946_48971 = G__48976;
continue;
}
} else
{var temp__4126__auto___48977 = cljs.core.seq.call(null,seq__48943_48968);if(temp__4126__auto___48977)
{var seq__48943_48978__$1 = temp__4126__auto___48977;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48943_48978__$1))
{var c__4410__auto___48979 = cljs.core.chunk_first.call(null,seq__48943_48978__$1);{
var G__48980 = cljs.core.chunk_rest.call(null,seq__48943_48978__$1);
var G__48981 = c__4410__auto___48979;
var G__48982 = cljs.core.count.call(null,c__4410__auto___48979);
var G__48983 = (0);
seq__48943_48968 = G__48980;
chunk__48944_48969 = G__48981;
count__48945_48970 = G__48982;
i__48946_48971 = G__48983;
continue;
}
} else
{var n_48984 = cljs.core.first.call(null,seq__48943_48978__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_48984;
goog.events.fireListeners(n_48984,evt.type,false,evt);
}
{
var G__48985 = cljs.core.next.call(null,seq__48943_48978__$1);
var G__48986 = null;
var G__48987 = (0);
var G__48988 = (0);
seq__48943_48968 = G__48985;
chunk__48944_48969 = G__48986;
count__48945_48970 = G__48987;
i__48946_48971 = G__48988;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__48995_49001 = cljs.core.seq.call(null,evt_map);var chunk__48996_49002 = null;var count__48997_49003 = (0);var i__48998_49004 = (0);while(true){
if((i__48998_49004 < count__48997_49003))
{var vec__48999_49005 = cljs.core._nth.call(null,chunk__48996_49002,i__48998_49004);var k_49006 = cljs.core.nth.call(null,vec__48999_49005,(0),null);var v_49007 = cljs.core.nth.call(null,vec__48999_49005,(1),null);(evt[k_49006] = v_49007);
{
var G__49008 = seq__48995_49001;
var G__49009 = chunk__48996_49002;
var G__49010 = count__48997_49003;
var G__49011 = (i__48998_49004 + (1));
seq__48995_49001 = G__49008;
chunk__48996_49002 = G__49009;
count__48997_49003 = G__49010;
i__48998_49004 = G__49011;
continue;
}
} else
{var temp__4126__auto___49012 = cljs.core.seq.call(null,seq__48995_49001);if(temp__4126__auto___49012)
{var seq__48995_49013__$1 = temp__4126__auto___49012;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48995_49013__$1))
{var c__4410__auto___49014 = cljs.core.chunk_first.call(null,seq__48995_49013__$1);{
var G__49015 = cljs.core.chunk_rest.call(null,seq__48995_49013__$1);
var G__49016 = c__4410__auto___49014;
var G__49017 = cljs.core.count.call(null,c__4410__auto___49014);
var G__49018 = (0);
seq__48995_49001 = G__49015;
chunk__48996_49002 = G__49016;
count__48997_49003 = G__49017;
i__48998_49004 = G__49018;
continue;
}
} else
{var vec__49000_49019 = cljs.core.first.call(null,seq__48995_49013__$1);var k_49020 = cljs.core.nth.call(null,vec__49000_49019,(0),null);var v_49021 = cljs.core.nth.call(null,vec__49000_49019,(1),null);(evt[k_49020] = v_49021);
{
var G__49022 = cljs.core.next.call(null,seq__48995_49013__$1);
var G__49023 = null;
var G__49024 = (0);
var G__49025 = (0);
seq__48995_49001 = G__49022;
chunk__48996_49002 = G__49023;
count__48997_49003 = G__49024;
i__48998_49004 = G__49025;
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
return (function (p1__49026_SHARP_){return goog.events.getListeners(p1__49026_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
