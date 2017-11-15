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
var x__28619__auto__ = (((evt == null))?null:evt);
var m__28620__auto__ = (domina.events.prevent_default[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,evt);
} else {
var m__28620__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,evt);
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
var x__28619__auto__ = (((evt == null))?null:evt);
var m__28620__auto__ = (domina.events.stop_propagation[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,evt);
} else {
var m__28620__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,evt);
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
var x__28619__auto__ = (((evt == null))?null:evt);
var m__28620__auto__ = (domina.events.target[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,evt);
} else {
var m__28620__auto____$1 = (domina.events.target["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,evt);
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
var x__28619__auto__ = (((evt == null))?null:evt);
var m__28620__auto__ = (domina.events.current_target[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,evt);
} else {
var m__28620__auto____$1 = (domina.events.current_target["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,evt);
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
var x__28619__auto__ = (((evt == null))?null:evt);
var m__28620__auto__ = (domina.events.event_type[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,evt);
} else {
var m__28620__auto____$1 = (domina.events.event_type["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,evt);
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
var x__28619__auto__ = (((evt == null))?null:evt);
var m__28620__auto__ = (domina.events.raw_event[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,evt);
} else {
var m__28620__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,evt);
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
if(typeof domina.events.t_domina$events32272 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events32272 = (function (f,evt,meta32273){
this.f = f;
this.evt = evt;
this.meta32273 = meta32273;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
domina.events.t_domina$events32272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32274,meta32273__$1){
var self__ = this;
var _32274__$1 = this;
return (new domina.events.t_domina$events32272(self__.f,self__.evt,meta32273__$1));
});

domina.events.t_domina$events32272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32274){
var self__ = this;
var _32274__$1 = this;
return self__.meta32273;
});

domina.events.t_domina$events32272.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL;

domina.events.t_domina$events32272.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events32272.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events32272.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events32272.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events32272.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events32272.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events32272.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t_domina$events32272.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__27936__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events32272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta32273","meta32273",1189889860,null)], null);
});

domina.events.t_domina$events32272.cljs$lang$type = true;

domina.events.t_domina$events32272.cljs$lang$ctorStr = "domina.events/t_domina$events32272";

domina.events.t_domina$events32272.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"domina.events/t_domina$events32272");
});

domina.events.__GT_t_domina$events32272 = (function domina$events$create_listener_function_$___GT_t_domina$events32272(f__$1,evt__$1,meta32273){
return (new domina.events.t_domina$events32272(f__$1,evt__$1,meta32273));
});

}

return (new domina.events.t_domina$events32272(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__28744__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__32275(s__32276){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__32276__$1 = s__32276;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32276__$1);
if(temp__4657__auto__){
var s__32276__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32276__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__32276__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__32278 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__32277 = (0);
while(true){
if((i__32277 < size__28743__auto__)){
var node = cljs.core._nth.call(null,c__28742__auto__,i__32277);
cljs.core.chunk_append.call(null,b__32278,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__32279 = (i__32277 + (1));
i__32277 = G__32279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32278),domina$events$listen_internal_BANG__$_iter__32275.call(null,cljs.core.chunk_rest.call(null,s__32276__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32278),null);
}
} else {
var node = cljs.core.first.call(null,s__32276__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__32275.call(null,cljs.core.rest.call(null,s__32276__$2)));
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
return iter__28744__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var G__32281 = arguments.length;
switch (G__32281) {
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
var G__32284 = arguments.length;
switch (G__32284) {
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
var G__32287 = arguments.length;
switch (G__32287) {
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
var G__32290 = arguments.length;
switch (G__32290) {
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
var G__32293 = arguments.length;
switch (G__32293) {
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
var seq__32294 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__32295 = null;
var count__32296 = (0);
var i__32297 = (0);
while(true){
if((i__32297 < count__32296)){
var node = cljs.core._nth.call(null,chunk__32295,i__32297);
goog.events.removeAll(node);

var G__32303 = seq__32294;
var G__32304 = chunk__32295;
var G__32305 = count__32296;
var G__32306 = (i__32297 + (1));
seq__32294 = G__32303;
chunk__32295 = G__32304;
count__32296 = G__32305;
i__32297 = G__32306;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32294);
if(temp__4657__auto__){
var seq__32294__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32294__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__32294__$1);
var G__32307 = cljs.core.chunk_rest.call(null,seq__32294__$1);
var G__32308 = c__28775__auto__;
var G__32309 = cljs.core.count.call(null,c__28775__auto__);
var G__32310 = (0);
seq__32294 = G__32307;
chunk__32295 = G__32308;
count__32296 = G__32309;
i__32297 = G__32310;
continue;
} else {
var node = cljs.core.first.call(null,seq__32294__$1);
goog.events.removeAll(node);

var G__32311 = cljs.core.next.call(null,seq__32294__$1);
var G__32312 = null;
var G__32313 = (0);
var G__32314 = (0);
seq__32294 = G__32311;
chunk__32295 = G__32312;
count__32296 = G__32313;
i__32297 = G__32314;
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
var seq__32298 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__32299 = null;
var count__32300 = (0);
var i__32301 = (0);
while(true){
if((i__32301 < count__32300)){
var node = cljs.core._nth.call(null,chunk__32299,i__32301);
goog.events.removeAll(node,type__$1);

var G__32315 = seq__32298;
var G__32316 = chunk__32299;
var G__32317 = count__32300;
var G__32318 = (i__32301 + (1));
seq__32298 = G__32315;
chunk__32299 = G__32316;
count__32300 = G__32317;
i__32301 = G__32318;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32298);
if(temp__4657__auto__){
var seq__32298__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32298__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__32298__$1);
var G__32319 = cljs.core.chunk_rest.call(null,seq__32298__$1);
var G__32320 = c__28775__auto__;
var G__32321 = cljs.core.count.call(null,c__28775__auto__);
var G__32322 = (0);
seq__32298 = G__32319;
chunk__32299 = G__32320;
count__32300 = G__32321;
i__32301 = G__32322;
continue;
} else {
var node = cljs.core.first.call(null,seq__32298__$1);
goog.events.removeAll(node,type__$1);

var G__32323 = cljs.core.next.call(null,seq__32298__$1);
var G__32324 = null;
var G__32325 = (0);
var G__32326 = (0);
seq__32298 = G__32323;
chunk__32299 = G__32324;
count__32300 = G__32325;
i__32301 = G__32326;
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
var G__32328 = arguments.length;
switch (G__32328) {
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
var G__32330 = parent;
var G__32331 = cljs.core.cons.call(null,parent,so_far);
n = G__32330;
so_far = G__32331;
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
var seq__32332_32340 = cljs.core.seq.call(null,ancestors);
var chunk__32333_32341 = null;
var count__32334_32342 = (0);
var i__32335_32343 = (0);
while(true){
if((i__32335_32343 < count__32334_32342)){
var n_32344 = cljs.core._nth.call(null,chunk__32333_32341,i__32335_32343);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_32344;

goog.events.fireListeners(n_32344,evt.type,true,evt);
}

var G__32345 = seq__32332_32340;
var G__32346 = chunk__32333_32341;
var G__32347 = count__32334_32342;
var G__32348 = (i__32335_32343 + (1));
seq__32332_32340 = G__32345;
chunk__32333_32341 = G__32346;
count__32334_32342 = G__32347;
i__32335_32343 = G__32348;
continue;
} else {
var temp__4657__auto___32349 = cljs.core.seq.call(null,seq__32332_32340);
if(temp__4657__auto___32349){
var seq__32332_32350__$1 = temp__4657__auto___32349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32332_32350__$1)){
var c__28775__auto___32351 = cljs.core.chunk_first.call(null,seq__32332_32350__$1);
var G__32352 = cljs.core.chunk_rest.call(null,seq__32332_32350__$1);
var G__32353 = c__28775__auto___32351;
var G__32354 = cljs.core.count.call(null,c__28775__auto___32351);
var G__32355 = (0);
seq__32332_32340 = G__32352;
chunk__32333_32341 = G__32353;
count__32334_32342 = G__32354;
i__32335_32343 = G__32355;
continue;
} else {
var n_32356 = cljs.core.first.call(null,seq__32332_32350__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_32356;

goog.events.fireListeners(n_32356,evt.type,true,evt);
}

var G__32357 = cljs.core.next.call(null,seq__32332_32350__$1);
var G__32358 = null;
var G__32359 = (0);
var G__32360 = (0);
seq__32332_32340 = G__32357;
chunk__32333_32341 = G__32358;
count__32334_32342 = G__32359;
i__32335_32343 = G__32360;
continue;
}
} else {
}
}
break;
}

var seq__32336_32361 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__32337_32362 = null;
var count__32338_32363 = (0);
var i__32339_32364 = (0);
while(true){
if((i__32339_32364 < count__32338_32363)){
var n_32365 = cljs.core._nth.call(null,chunk__32337_32362,i__32339_32364);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_32365;

goog.events.fireListeners(n_32365,evt.type,false,evt);
}

var G__32366 = seq__32336_32361;
var G__32367 = chunk__32337_32362;
var G__32368 = count__32338_32363;
var G__32369 = (i__32339_32364 + (1));
seq__32336_32361 = G__32366;
chunk__32337_32362 = G__32367;
count__32338_32363 = G__32368;
i__32339_32364 = G__32369;
continue;
} else {
var temp__4657__auto___32370 = cljs.core.seq.call(null,seq__32336_32361);
if(temp__4657__auto___32370){
var seq__32336_32371__$1 = temp__4657__auto___32370;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32336_32371__$1)){
var c__28775__auto___32372 = cljs.core.chunk_first.call(null,seq__32336_32371__$1);
var G__32373 = cljs.core.chunk_rest.call(null,seq__32336_32371__$1);
var G__32374 = c__28775__auto___32372;
var G__32375 = cljs.core.count.call(null,c__28775__auto___32372);
var G__32376 = (0);
seq__32336_32361 = G__32373;
chunk__32337_32362 = G__32374;
count__32338_32363 = G__32375;
i__32339_32364 = G__32376;
continue;
} else {
var n_32377 = cljs.core.first.call(null,seq__32336_32371__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_32377;

goog.events.fireListeners(n_32377,evt.type,false,evt);
}

var G__32378 = cljs.core.next.call(null,seq__32336_32371__$1);
var G__32379 = null;
var G__32380 = (0);
var G__32381 = (0);
seq__32336_32361 = G__32378;
chunk__32337_32362 = G__32379;
count__32338_32363 = G__32380;
i__32339_32364 = G__32381;
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
var and__27924__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__27924__auto__)){
return o.dispatchEvent;
} else {
return and__27924__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var G__32383 = arguments.length;
switch (G__32383) {
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
var seq__32384_32395 = cljs.core.seq.call(null,evt_map);
var chunk__32385_32396 = null;
var count__32386_32397 = (0);
var i__32387_32398 = (0);
while(true){
if((i__32387_32398 < count__32386_32397)){
var vec__32388_32399 = cljs.core._nth.call(null,chunk__32385_32396,i__32387_32398);
var k_32400 = cljs.core.nth.call(null,vec__32388_32399,(0),null);
var v_32401 = cljs.core.nth.call(null,vec__32388_32399,(1),null);
(evt[k_32400] = v_32401);

var G__32402 = seq__32384_32395;
var G__32403 = chunk__32385_32396;
var G__32404 = count__32386_32397;
var G__32405 = (i__32387_32398 + (1));
seq__32384_32395 = G__32402;
chunk__32385_32396 = G__32403;
count__32386_32397 = G__32404;
i__32387_32398 = G__32405;
continue;
} else {
var temp__4657__auto___32406 = cljs.core.seq.call(null,seq__32384_32395);
if(temp__4657__auto___32406){
var seq__32384_32407__$1 = temp__4657__auto___32406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32384_32407__$1)){
var c__28775__auto___32408 = cljs.core.chunk_first.call(null,seq__32384_32407__$1);
var G__32409 = cljs.core.chunk_rest.call(null,seq__32384_32407__$1);
var G__32410 = c__28775__auto___32408;
var G__32411 = cljs.core.count.call(null,c__28775__auto___32408);
var G__32412 = (0);
seq__32384_32395 = G__32409;
chunk__32385_32396 = G__32410;
count__32386_32397 = G__32411;
i__32387_32398 = G__32412;
continue;
} else {
var vec__32391_32413 = cljs.core.first.call(null,seq__32384_32407__$1);
var k_32414 = cljs.core.nth.call(null,vec__32391_32413,(0),null);
var v_32415 = cljs.core.nth.call(null,vec__32391_32413,(1),null);
(evt[k_32414] = v_32415);

var G__32416 = cljs.core.next.call(null,seq__32384_32407__$1);
var G__32417 = null;
var G__32418 = (0);
var G__32419 = (0);
seq__32384_32395 = G__32416;
chunk__32385_32396 = G__32417;
count__32386_32397 = G__32418;
i__32387_32398 = G__32419;
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
return (function (p1__32420_SHARP_){
return goog.events.getListeners(p1__32420_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map?rel=1510190750488
