// Compiled by ClojureScript 0.0-2371
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj14676 = {};return obj14676;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t14680 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14680 = (function (evt,f,create_listener_function,meta14681){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14681 = meta14681;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14680.cljs$lang$type = true;
domina.events.t14680.cljs$lang$ctorStr = "domina.events/t14680";
domina.events.t14680.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"domina.events/t14680");
});
domina.events.t14680.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t14680.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3640__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return not_found;
}
});
domina.events.t14680.prototype.domina$events$Event$ = true;
domina.events.t14680.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14680.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14680.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14680.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14680.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14680.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14682){var self__ = this;
var _14682__$1 = this;return self__.meta14681;
});
domina.events.t14680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14682,meta14681__$1){var self__ = this;
var _14682__$1 = this;return (new domina.events.t14680(self__.evt,self__.f,self__.create_listener_function,meta14681__$1));
});
domina.events.__GT_t14680 = (function __GT_t14680(evt__$1,f__$1,create_listener_function__$1,meta14681){return (new domina.events.t14680(evt__$1,f__$1,create_listener_function__$1,meta14681));
});
}
return (new domina.events.t14680(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4379__auto__ = ((function (f,t){
return (function iter__14687(s__14688){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__14688__$1 = s__14688;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14688__$1);if(temp__4126__auto__)
{var s__14688__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14688__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__14688__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__14690 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__14689 = (0);while(true){
if((i__14689 < size__4378__auto__))
{var node = cljs.core._nth.call(null,c__4377__auto__,i__14689);cljs.core.chunk_append.call(null,b__14690,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__14691 = (i__14689 + (1));
i__14689 = G__14691;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14690),iter__14687.call(null,cljs.core.chunk_rest.call(null,s__14688__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14690),null);
}
} else
{var node = cljs.core.first.call(null,s__14688__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__14687.call(null,cljs.core.rest.call(null,s__14688__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__14700 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14701 = null;var count__14702 = (0);var i__14703 = (0);while(true){
if((i__14703 < count__14702))
{var node = cljs.core._nth.call(null,chunk__14701,i__14703);goog.events.removeAll(node);
{
var G__14708 = seq__14700;
var G__14709 = chunk__14701;
var G__14710 = count__14702;
var G__14711 = (i__14703 + (1));
seq__14700 = G__14708;
chunk__14701 = G__14709;
count__14702 = G__14710;
i__14703 = G__14711;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14700);if(temp__4126__auto__)
{var seq__14700__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14700__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__14700__$1);{
var G__14712 = cljs.core.chunk_rest.call(null,seq__14700__$1);
var G__14713 = c__4410__auto__;
var G__14714 = cljs.core.count.call(null,c__4410__auto__);
var G__14715 = (0);
seq__14700 = G__14712;
chunk__14701 = G__14713;
count__14702 = G__14714;
i__14703 = G__14715;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14700__$1);goog.events.removeAll(node);
{
var G__14716 = cljs.core.next.call(null,seq__14700__$1);
var G__14717 = null;
var G__14718 = (0);
var G__14719 = (0);
seq__14700 = G__14716;
chunk__14701 = G__14717;
count__14702 = G__14718;
i__14703 = G__14719;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__14704 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14705 = null;var count__14706 = (0);var i__14707 = (0);while(true){
if((i__14707 < count__14706))
{var node = cljs.core._nth.call(null,chunk__14705,i__14707);goog.events.removeAll(node,type__$1);
{
var G__14720 = seq__14704;
var G__14721 = chunk__14705;
var G__14722 = count__14706;
var G__14723 = (i__14707 + (1));
seq__14704 = G__14720;
chunk__14705 = G__14721;
count__14706 = G__14722;
i__14707 = G__14723;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14704);if(temp__4126__auto__)
{var seq__14704__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14704__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__14704__$1);{
var G__14724 = cljs.core.chunk_rest.call(null,seq__14704__$1);
var G__14725 = c__4410__auto__;
var G__14726 = cljs.core.count.call(null,c__4410__auto__);
var G__14727 = (0);
seq__14704 = G__14724;
chunk__14705 = G__14725;
count__14706 = G__14726;
i__14707 = G__14727;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14704__$1);goog.events.removeAll(node,type__$1);
{
var G__14728 = cljs.core.next.call(null,seq__14704__$1);
var G__14729 = null;
var G__14730 = (0);
var G__14731 = (0);
seq__14704 = G__14728;
chunk__14705 = G__14729;
count__14706 = G__14730;
i__14707 = G__14731;
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
var G__14732 = parent;
var G__14733 = cljs.core.cons.call(null,parent,so_far);
n = G__14732;
so_far = G__14733;
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
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__14742_14750 = cljs.core.seq.call(null,ancestors);var chunk__14743_14751 = null;var count__14744_14752 = (0);var i__14745_14753 = (0);while(true){
if((i__14745_14753 < count__14744_14752))
{var n_14754 = cljs.core._nth.call(null,chunk__14743_14751,i__14745_14753);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14754;
goog.events.fireListeners(n_14754,evt.type,true,evt);
}
{
var G__14755 = seq__14742_14750;
var G__14756 = chunk__14743_14751;
var G__14757 = count__14744_14752;
var G__14758 = (i__14745_14753 + (1));
seq__14742_14750 = G__14755;
chunk__14743_14751 = G__14756;
count__14744_14752 = G__14757;
i__14745_14753 = G__14758;
continue;
}
} else
{var temp__4126__auto___14759 = cljs.core.seq.call(null,seq__14742_14750);if(temp__4126__auto___14759)
{var seq__14742_14760__$1 = temp__4126__auto___14759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14742_14760__$1))
{var c__4410__auto___14761 = cljs.core.chunk_first.call(null,seq__14742_14760__$1);{
var G__14762 = cljs.core.chunk_rest.call(null,seq__14742_14760__$1);
var G__14763 = c__4410__auto___14761;
var G__14764 = cljs.core.count.call(null,c__4410__auto___14761);
var G__14765 = (0);
seq__14742_14750 = G__14762;
chunk__14743_14751 = G__14763;
count__14744_14752 = G__14764;
i__14745_14753 = G__14765;
continue;
}
} else
{var n_14766 = cljs.core.first.call(null,seq__14742_14760__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14766;
goog.events.fireListeners(n_14766,evt.type,true,evt);
}
{
var G__14767 = cljs.core.next.call(null,seq__14742_14760__$1);
var G__14768 = null;
var G__14769 = (0);
var G__14770 = (0);
seq__14742_14750 = G__14767;
chunk__14743_14751 = G__14768;
count__14744_14752 = G__14769;
i__14745_14753 = G__14770;
continue;
}
}
} else
{}
}
break;
}
var seq__14746_14771 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__14747_14772 = null;var count__14748_14773 = (0);var i__14749_14774 = (0);while(true){
if((i__14749_14774 < count__14748_14773))
{var n_14775 = cljs.core._nth.call(null,chunk__14747_14772,i__14749_14774);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14775;
goog.events.fireListeners(n_14775,evt.type,false,evt);
}
{
var G__14776 = seq__14746_14771;
var G__14777 = chunk__14747_14772;
var G__14778 = count__14748_14773;
var G__14779 = (i__14749_14774 + (1));
seq__14746_14771 = G__14776;
chunk__14747_14772 = G__14777;
count__14748_14773 = G__14778;
i__14749_14774 = G__14779;
continue;
}
} else
{var temp__4126__auto___14780 = cljs.core.seq.call(null,seq__14746_14771);if(temp__4126__auto___14780)
{var seq__14746_14781__$1 = temp__4126__auto___14780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14746_14781__$1))
{var c__4410__auto___14782 = cljs.core.chunk_first.call(null,seq__14746_14781__$1);{
var G__14783 = cljs.core.chunk_rest.call(null,seq__14746_14781__$1);
var G__14784 = c__4410__auto___14782;
var G__14785 = cljs.core.count.call(null,c__4410__auto___14782);
var G__14786 = (0);
seq__14746_14771 = G__14783;
chunk__14747_14772 = G__14784;
count__14748_14773 = G__14785;
i__14749_14774 = G__14786;
continue;
}
} else
{var n_14787 = cljs.core.first.call(null,seq__14746_14781__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14787;
goog.events.fireListeners(n_14787,evt.type,false,evt);
}
{
var G__14788 = cljs.core.next.call(null,seq__14746_14781__$1);
var G__14789 = null;
var G__14790 = (0);
var G__14791 = (0);
seq__14746_14771 = G__14788;
chunk__14747_14772 = G__14789;
count__14748_14773 = G__14790;
i__14749_14774 = G__14791;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__14798_14804 = cljs.core.seq.call(null,evt_map);var chunk__14799_14805 = null;var count__14800_14806 = (0);var i__14801_14807 = (0);while(true){
if((i__14801_14807 < count__14800_14806))
{var vec__14802_14808 = cljs.core._nth.call(null,chunk__14799_14805,i__14801_14807);var k_14809 = cljs.core.nth.call(null,vec__14802_14808,(0),null);var v_14810 = cljs.core.nth.call(null,vec__14802_14808,(1),null);(evt[k_14809] = v_14810);
{
var G__14811 = seq__14798_14804;
var G__14812 = chunk__14799_14805;
var G__14813 = count__14800_14806;
var G__14814 = (i__14801_14807 + (1));
seq__14798_14804 = G__14811;
chunk__14799_14805 = G__14812;
count__14800_14806 = G__14813;
i__14801_14807 = G__14814;
continue;
}
} else
{var temp__4126__auto___14815 = cljs.core.seq.call(null,seq__14798_14804);if(temp__4126__auto___14815)
{var seq__14798_14816__$1 = temp__4126__auto___14815;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14798_14816__$1))
{var c__4410__auto___14817 = cljs.core.chunk_first.call(null,seq__14798_14816__$1);{
var G__14818 = cljs.core.chunk_rest.call(null,seq__14798_14816__$1);
var G__14819 = c__4410__auto___14817;
var G__14820 = cljs.core.count.call(null,c__4410__auto___14817);
var G__14821 = (0);
seq__14798_14804 = G__14818;
chunk__14799_14805 = G__14819;
count__14800_14806 = G__14820;
i__14801_14807 = G__14821;
continue;
}
} else
{var vec__14803_14822 = cljs.core.first.call(null,seq__14798_14816__$1);var k_14823 = cljs.core.nth.call(null,vec__14803_14822,(0),null);var v_14824 = cljs.core.nth.call(null,vec__14803_14822,(1),null);(evt[k_14823] = v_14824);
{
var G__14825 = cljs.core.next.call(null,seq__14798_14816__$1);
var G__14826 = null;
var G__14827 = (0);
var G__14828 = (0);
seq__14798_14804 = G__14825;
chunk__14799_14805 = G__14826;
count__14800_14806 = G__14827;
i__14801_14807 = G__14828;
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
return (function (p1__14829_SHARP_){return goog.events.getListeners(p1__14829_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
