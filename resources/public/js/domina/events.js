// Compiled by ClojureScript 1.9.908 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.object');
goog.require('goog.events');

/**
 * @interface
 */
domina.events.Event = function(){};

/**
 * Prevents the default action, for example a link redirecting to a URL
 */
domina.events.prevent_default = (function domina$events$prevent_default(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$prevent_default$arity$1 == null)))){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__8101__auto__ = (((evt == null))?null:evt);
var m__8102__auto__ = (domina.events.prevent_default[goog.typeOf(x__8101__auto__)]);
if(!((m__8102__auto__ == null))){
return m__8102__auto__.call(null,evt);
} else {
var m__8102__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__8102__auto____$1 == null))){
return m__8102__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
}
});

/**
 * Stops event propagation
 */
domina.events.stop_propagation = (function domina$events$stop_propagation(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$stop_propagation$arity$1 == null)))){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__8101__auto__ = (((evt == null))?null:evt);
var m__8102__auto__ = (domina.events.stop_propagation[goog.typeOf(x__8101__auto__)]);
if(!((m__8102__auto__ == null))){
return m__8102__auto__.call(null,evt);
} else {
var m__8102__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__8102__auto____$1 == null))){
return m__8102__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
}
});

/**
 * Returns the target of the event
 */
domina.events.target = (function domina$events$target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$target$arity$1 == null)))){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__8101__auto__ = (((evt == null))?null:evt);
var m__8102__auto__ = (domina.events.target[goog.typeOf(x__8101__auto__)]);
if(!((m__8102__auto__ == null))){
return m__8102__auto__.call(null,evt);
} else {
var m__8102__auto____$1 = (domina.events.target["_"]);
if(!((m__8102__auto____$1 == null))){
return m__8102__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
}
});

/**
 * Returns the object that had the listener attached
 */
domina.events.current_target = (function domina$events$current_target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$current_target$arity$1 == null)))){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__8101__auto__ = (((evt == null))?null:evt);
var m__8102__auto__ = (domina.events.current_target[goog.typeOf(x__8101__auto__)]);
if(!((m__8102__auto__ == null))){
return m__8102__auto__.call(null,evt);
} else {
var m__8102__auto____$1 = (domina.events.current_target["_"]);
if(!((m__8102__auto____$1 == null))){
return m__8102__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
}
});

/**
 * Returns the type of the the event
 */
domina.events.event_type = (function domina$events$event_type(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$event_type$arity$1 == null)))){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__8101__auto__ = (((evt == null))?null:evt);
var m__8102__auto__ = (domina.events.event_type[goog.typeOf(x__8101__auto__)]);
if(!((m__8102__auto__ == null))){
return m__8102__auto__.call(null,evt);
} else {
var m__8102__auto____$1 = (domina.events.event_type["_"]);
if(!((m__8102__auto____$1 == null))){
return m__8102__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
}
});

/**
 * Returns the original GClosure event
 */
domina.events.raw_event = (function domina$events$raw_event(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$raw_event$arity$1 == null)))){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__8101__auto__ = (((evt == null))?null:evt);
var m__8102__auto__ = (domina.events.raw_event[goog.typeOf(x__8101__auto__)]);
if(!((m__8102__auto__ == null))){
return m__8102__auto__.call(null,evt);
} else {
var m__8102__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__8102__auto____$1 == null))){
return m__8102__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function domina$events$create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if(typeof domina.events.t_domina$events15666 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events15666 = (function (f,evt,meta15667){
this.f = f;
this.evt = evt;
this.meta15667 = meta15667;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
domina.events.t_domina$events15666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15668,meta15667__$1){
var self__ = this;
var _15668__$1 = this;
return (new domina.events.t_domina$events15666(self__.f,self__.evt,meta15667__$1));
});

domina.events.t_domina$events15666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15668){
var self__ = this;
var _15668__$1 = this;
return self__.meta15667;
});

domina.events.t_domina$events15666.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL;

domina.events.t_domina$events15666.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events15666.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events15666.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events15666.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events15666.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events15666.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events15666.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__4655__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4655__auto__)){
var val = temp__4655__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
});

domina.events.t_domina$events15666.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__7418__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events15666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta15667","meta15667",-673384113,null)], null);
});

domina.events.t_domina$events15666.cljs$lang$type = true;

domina.events.t_domina$events15666.cljs$lang$ctorStr = "domina.events/t_domina$events15666";

domina.events.t_domina$events15666.cljs$lang$ctorPrWriter = (function (this__8043__auto__,writer__8044__auto__,opt__8045__auto__){
return cljs.core._write.call(null,writer__8044__auto__,"domina.events/t_domina$events15666");
});

domina.events.__GT_t_domina$events15666 = (function domina$events$create_listener_function_$___GT_t_domina$events15666(f__$1,evt__$1,meta15667){
return (new domina.events.t_domina$events15666(f__$1,evt__$1,meta15667));
});

}

return (new domina.events.t_domina$events15666(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__8226__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__15669(s__15670){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__15670__$1 = s__15670;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15670__$1);
if(temp__4657__auto__){
var s__15670__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15670__$2)){
var c__8224__auto__ = cljs.core.chunk_first.call(null,s__15670__$2);
var size__8225__auto__ = cljs.core.count.call(null,c__8224__auto__);
var b__15672 = cljs.core.chunk_buffer.call(null,size__8225__auto__);
if((function (){var i__15671 = (0);
while(true){
if((i__15671 < size__8225__auto__)){
var node = cljs.core._nth.call(null,c__8224__auto__,i__15671);
cljs.core.chunk_append.call(null,b__15672,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__15673 = (i__15671 + (1));
i__15671 = G__15673;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15672),domina$events$listen_internal_BANG__$_iter__15669.call(null,cljs.core.chunk_rest.call(null,s__15670__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15672),null);
}
} else {
var node = cljs.core.first.call(null,s__15670__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__15669.call(null,cljs.core.rest.call(null,s__15670__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__8226__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var G__15675 = arguments.length;
switch (G__15675) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});

domina.events.listen_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_BANG_ = (function domina$events$capture_BANG_(var_args){
var G__15678 = arguments.length;
switch (G__15678) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});

domina.events.capture_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_once_BANG_ = (function domina$events$listen_once_BANG_(var_args){
var G__15681 = arguments.length;
switch (G__15681) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});

domina.events.listen_once_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_once_BANG_ = (function domina$events$capture_once_BANG_(var_args){
var G__15684 = arguments.length;
switch (G__15684) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});

domina.events.capture_once_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
 */
domina.events.unlisten_BANG_ = (function domina$events$unlisten_BANG_(var_args){
var G__15687 = arguments.length;
switch (G__15687) {
case 0:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__15688 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__15689 = null;
var count__15690 = (0);
var i__15691 = (0);
while(true){
if((i__15691 < count__15690)){
var node = cljs.core._nth.call(null,chunk__15689,i__15691);
goog.events.removeAll(node);

var G__15697 = seq__15688;
var G__15698 = chunk__15689;
var G__15699 = count__15690;
var G__15700 = (i__15691 + (1));
seq__15688 = G__15697;
chunk__15689 = G__15698;
count__15690 = G__15699;
i__15691 = G__15700;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15688);
if(temp__4657__auto__){
var seq__15688__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15688__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__15688__$1);
var G__15701 = cljs.core.chunk_rest.call(null,seq__15688__$1);
var G__15702 = c__8257__auto__;
var G__15703 = cljs.core.count.call(null,c__8257__auto__);
var G__15704 = (0);
seq__15688 = G__15701;
chunk__15689 = G__15702;
count__15690 = G__15703;
i__15691 = G__15704;
continue;
} else {
var node = cljs.core.first.call(null,seq__15688__$1);
goog.events.removeAll(node);

var G__15705 = cljs.core.next.call(null,seq__15688__$1);
var G__15706 = null;
var G__15707 = (0);
var G__15708 = (0);
seq__15688 = G__15705;
chunk__15689 = G__15706;
count__15690 = G__15707;
i__15691 = G__15708;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__15692 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__15693 = null;
var count__15694 = (0);
var i__15695 = (0);
while(true){
if((i__15695 < count__15694)){
var node = cljs.core._nth.call(null,chunk__15693,i__15695);
goog.events.removeAll(node,type__$1);

var G__15709 = seq__15692;
var G__15710 = chunk__15693;
var G__15711 = count__15694;
var G__15712 = (i__15695 + (1));
seq__15692 = G__15709;
chunk__15693 = G__15710;
count__15694 = G__15711;
i__15695 = G__15712;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15692);
if(temp__4657__auto__){
var seq__15692__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15692__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__15692__$1);
var G__15713 = cljs.core.chunk_rest.call(null,seq__15692__$1);
var G__15714 = c__8257__auto__;
var G__15715 = cljs.core.count.call(null,c__8257__auto__);
var G__15716 = (0);
seq__15692 = G__15713;
chunk__15693 = G__15714;
count__15694 = G__15715;
i__15695 = G__15716;
continue;
} else {
var node = cljs.core.first.call(null,seq__15692__$1);
goog.events.removeAll(node,type__$1);

var G__15717 = cljs.core.next.call(null,seq__15692__$1);
var G__15718 = null;
var G__15719 = (0);
var G__15720 = (0);
seq__15692 = G__15717;
chunk__15693 = G__15718;
count__15694 = G__15719;
i__15695 = G__15720;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Returns a seq of a node and its ancestors, starting with the document root.
 */
domina.events.ancestor_nodes = (function domina$events$ancestor_nodes(var_args){
var G__15722 = arguments.length;
switch (G__15722) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return domina.events.ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = (function (n,so_far){
while(true){
var temp__4655__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4655__auto__)){
var parent = temp__4655__auto__;
var G__15724 = parent;
var G__15725 = cljs.core.cons.call(null,parent,so_far);
n = G__15724;
so_far = G__15725;
continue;
} else {
return so_far;
}
break;
}
});

domina.events.ancestor_nodes.cljs$lang$maxFixedArity = 2;

/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_browser_BANG_ = (function domina$events$dispatch_browser_BANG_(source,evt){
evt.target = domina.single_node.call(null,source);

var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__15726_15734 = cljs.core.seq.call(null,ancestors);
var chunk__15727_15735 = null;
var count__15728_15736 = (0);
var i__15729_15737 = (0);
while(true){
if((i__15729_15737 < count__15728_15736)){
var n_15738 = cljs.core._nth.call(null,chunk__15727_15735,i__15729_15737);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_15738;

goog.events.fireListeners(n_15738,evt.type,true,evt);
}

var G__15739 = seq__15726_15734;
var G__15740 = chunk__15727_15735;
var G__15741 = count__15728_15736;
var G__15742 = (i__15729_15737 + (1));
seq__15726_15734 = G__15739;
chunk__15727_15735 = G__15740;
count__15728_15736 = G__15741;
i__15729_15737 = G__15742;
continue;
} else {
var temp__4657__auto___15743 = cljs.core.seq.call(null,seq__15726_15734);
if(temp__4657__auto___15743){
var seq__15726_15744__$1 = temp__4657__auto___15743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15726_15744__$1)){
var c__8257__auto___15745 = cljs.core.chunk_first.call(null,seq__15726_15744__$1);
var G__15746 = cljs.core.chunk_rest.call(null,seq__15726_15744__$1);
var G__15747 = c__8257__auto___15745;
var G__15748 = cljs.core.count.call(null,c__8257__auto___15745);
var G__15749 = (0);
seq__15726_15734 = G__15746;
chunk__15727_15735 = G__15747;
count__15728_15736 = G__15748;
i__15729_15737 = G__15749;
continue;
} else {
var n_15750 = cljs.core.first.call(null,seq__15726_15744__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_15750;

goog.events.fireListeners(n_15750,evt.type,true,evt);
}

var G__15751 = cljs.core.next.call(null,seq__15726_15744__$1);
var G__15752 = null;
var G__15753 = (0);
var G__15754 = (0);
seq__15726_15734 = G__15751;
chunk__15727_15735 = G__15752;
count__15728_15736 = G__15753;
i__15729_15737 = G__15754;
continue;
}
} else {
}
}
break;
}

var seq__15730_15755 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__15731_15756 = null;
var count__15732_15757 = (0);
var i__15733_15758 = (0);
while(true){
if((i__15733_15758 < count__15732_15757)){
var n_15759 = cljs.core._nth.call(null,chunk__15731_15756,i__15733_15758);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_15759;

goog.events.fireListeners(n_15759,evt.type,false,evt);
}

var G__15760 = seq__15730_15755;
var G__15761 = chunk__15731_15756;
var G__15762 = count__15732_15757;
var G__15763 = (i__15733_15758 + (1));
seq__15730_15755 = G__15760;
chunk__15731_15756 = G__15761;
count__15732_15757 = G__15762;
i__15733_15758 = G__15763;
continue;
} else {
var temp__4657__auto___15764 = cljs.core.seq.call(null,seq__15730_15755);
if(temp__4657__auto___15764){
var seq__15730_15765__$1 = temp__4657__auto___15764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15730_15765__$1)){
var c__8257__auto___15766 = cljs.core.chunk_first.call(null,seq__15730_15765__$1);
var G__15767 = cljs.core.chunk_rest.call(null,seq__15730_15765__$1);
var G__15768 = c__8257__auto___15766;
var G__15769 = cljs.core.count.call(null,c__8257__auto___15766);
var G__15770 = (0);
seq__15730_15755 = G__15767;
chunk__15731_15756 = G__15768;
count__15732_15757 = G__15769;
i__15733_15758 = G__15770;
continue;
} else {
var n_15771 = cljs.core.first.call(null,seq__15730_15765__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_15771;

goog.events.fireListeners(n_15771,evt.type,false,evt);
}

var G__15772 = cljs.core.next.call(null,seq__15730_15765__$1);
var G__15773 = null;
var G__15774 = (0);
var G__15775 = (0);
seq__15730_15755 = G__15772;
chunk__15731_15756 = G__15773;
count__15732_15757 = G__15774;
i__15733_15758 = G__15775;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
 */
domina.events.dispatch_event_target_BANG_ = (function domina$events$dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
 * Tests whether the object is a goog.event.EventTarget
 */
domina.events.is_event_target_QMARK_ = (function domina$events$is_event_target_QMARK_(o){
var and__7406__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__7406__auto__)){
return o.dispatchEvent;
} else {
return and__7406__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var G__15777 = arguments.length;
switch (G__15777) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__15778_15789 = cljs.core.seq.call(null,evt_map);
var chunk__15779_15790 = null;
var count__15780_15791 = (0);
var i__15781_15792 = (0);
while(true){
if((i__15781_15792 < count__15780_15791)){
var vec__15782_15793 = cljs.core._nth.call(null,chunk__15779_15790,i__15781_15792);
var k_15794 = cljs.core.nth.call(null,vec__15782_15793,(0),null);
var v_15795 = cljs.core.nth.call(null,vec__15782_15793,(1),null);
(evt[k_15794] = v_15795);

var G__15796 = seq__15778_15789;
var G__15797 = chunk__15779_15790;
var G__15798 = count__15780_15791;
var G__15799 = (i__15781_15792 + (1));
seq__15778_15789 = G__15796;
chunk__15779_15790 = G__15797;
count__15780_15791 = G__15798;
i__15781_15792 = G__15799;
continue;
} else {
var temp__4657__auto___15800 = cljs.core.seq.call(null,seq__15778_15789);
if(temp__4657__auto___15800){
var seq__15778_15801__$1 = temp__4657__auto___15800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15778_15801__$1)){
var c__8257__auto___15802 = cljs.core.chunk_first.call(null,seq__15778_15801__$1);
var G__15803 = cljs.core.chunk_rest.call(null,seq__15778_15801__$1);
var G__15804 = c__8257__auto___15802;
var G__15805 = cljs.core.count.call(null,c__8257__auto___15802);
var G__15806 = (0);
seq__15778_15789 = G__15803;
chunk__15779_15790 = G__15804;
count__15780_15791 = G__15805;
i__15781_15792 = G__15806;
continue;
} else {
var vec__15785_15807 = cljs.core.first.call(null,seq__15778_15801__$1);
var k_15808 = cljs.core.nth.call(null,vec__15785_15807,(0),null);
var v_15809 = cljs.core.nth.call(null,vec__15785_15807,(1),null);
(evt[k_15808] = v_15809);

var G__15810 = cljs.core.next.call(null,seq__15778_15801__$1);
var G__15811 = null;
var G__15812 = (0);
var G__15813 = (0);
seq__15778_15789 = G__15810;
chunk__15779_15790 = G__15811;
count__15780_15791 = G__15812;
i__15781_15792 = G__15813;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});

domina.events.dispatch_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Given a listener key, removes the listener.
 */
domina.events.unlisten_by_key_BANG_ = (function domina$events$unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
 * Returns a sequence of event listeners for all the nodes in the
 * content of a given type.
 */
domina.events.get_listeners = (function domina$events$get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__15814_SHARP_){
return goog.events.getListeners(p1__15814_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
