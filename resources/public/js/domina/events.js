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
if(typeof domina.events.t_domina$events32273 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events32273 = (function (f,evt,meta32274){
this.f = f;
this.evt = evt;
this.meta32274 = meta32274;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
domina.events.t_domina$events32273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32275,meta32274__$1){
var self__ = this;
var _32275__$1 = this;
return (new domina.events.t_domina$events32273(self__.f,self__.evt,meta32274__$1));
});

domina.events.t_domina$events32273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32275){
var self__ = this;
var _32275__$1 = this;
return self__.meta32274;
});

domina.events.t_domina$events32273.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL;

domina.events.t_domina$events32273.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events32273.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events32273.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events32273.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events32273.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events32273.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events32273.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t_domina$events32273.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__27936__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events32273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta32274","meta32274",43471515,null)], null);
});

domina.events.t_domina$events32273.cljs$lang$type = true;

domina.events.t_domina$events32273.cljs$lang$ctorStr = "domina.events/t_domina$events32273";

domina.events.t_domina$events32273.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"domina.events/t_domina$events32273");
});

domina.events.__GT_t_domina$events32273 = (function domina$events$create_listener_function_$___GT_t_domina$events32273(f__$1,evt__$1,meta32274){
return (new domina.events.t_domina$events32273(f__$1,evt__$1,meta32274));
});

}

return (new domina.events.t_domina$events32273(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__28744__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__32276(s__32277){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__32277__$1 = s__32277;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32277__$1);
if(temp__4657__auto__){
var s__32277__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32277__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__32277__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__32279 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__32278 = (0);
while(true){
if((i__32278 < size__28743__auto__)){
var node = cljs.core._nth.call(null,c__28742__auto__,i__32278);
cljs.core.chunk_append.call(null,b__32279,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__32280 = (i__32278 + (1));
i__32278 = G__32280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32279),domina$events$listen_internal_BANG__$_iter__32276.call(null,cljs.core.chunk_rest.call(null,s__32277__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32279),null);
}
} else {
var node = cljs.core.first.call(null,s__32277__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__32276.call(null,cljs.core.rest.call(null,s__32277__$2)));
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
var G__32282 = arguments.length;
switch (G__32282) {
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
var G__32285 = arguments.length;
switch (G__32285) {
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
var G__32288 = arguments.length;
switch (G__32288) {
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
var G__32291 = arguments.length;
switch (G__32291) {
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
var G__32294 = arguments.length;
switch (G__32294) {
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
var seq__32295 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__32296 = null;
var count__32297 = (0);
var i__32298 = (0);
while(true){
if((i__32298 < count__32297)){
var node = cljs.core._nth.call(null,chunk__32296,i__32298);
goog.events.removeAll(node);

var G__32304 = seq__32295;
var G__32305 = chunk__32296;
var G__32306 = count__32297;
var G__32307 = (i__32298 + (1));
seq__32295 = G__32304;
chunk__32296 = G__32305;
count__32297 = G__32306;
i__32298 = G__32307;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32295);
if(temp__4657__auto__){
var seq__32295__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32295__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__32295__$1);
var G__32308 = cljs.core.chunk_rest.call(null,seq__32295__$1);
var G__32309 = c__28775__auto__;
var G__32310 = cljs.core.count.call(null,c__28775__auto__);
var G__32311 = (0);
seq__32295 = G__32308;
chunk__32296 = G__32309;
count__32297 = G__32310;
i__32298 = G__32311;
continue;
} else {
var node = cljs.core.first.call(null,seq__32295__$1);
goog.events.removeAll(node);

var G__32312 = cljs.core.next.call(null,seq__32295__$1);
var G__32313 = null;
var G__32314 = (0);
var G__32315 = (0);
seq__32295 = G__32312;
chunk__32296 = G__32313;
count__32297 = G__32314;
i__32298 = G__32315;
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
var seq__32299 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__32300 = null;
var count__32301 = (0);
var i__32302 = (0);
while(true){
if((i__32302 < count__32301)){
var node = cljs.core._nth.call(null,chunk__32300,i__32302);
goog.events.removeAll(node,type__$1);

var G__32316 = seq__32299;
var G__32317 = chunk__32300;
var G__32318 = count__32301;
var G__32319 = (i__32302 + (1));
seq__32299 = G__32316;
chunk__32300 = G__32317;
count__32301 = G__32318;
i__32302 = G__32319;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32299);
if(temp__4657__auto__){
var seq__32299__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32299__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__32299__$1);
var G__32320 = cljs.core.chunk_rest.call(null,seq__32299__$1);
var G__32321 = c__28775__auto__;
var G__32322 = cljs.core.count.call(null,c__28775__auto__);
var G__32323 = (0);
seq__32299 = G__32320;
chunk__32300 = G__32321;
count__32301 = G__32322;
i__32302 = G__32323;
continue;
} else {
var node = cljs.core.first.call(null,seq__32299__$1);
goog.events.removeAll(node,type__$1);

var G__32324 = cljs.core.next.call(null,seq__32299__$1);
var G__32325 = null;
var G__32326 = (0);
var G__32327 = (0);
seq__32299 = G__32324;
chunk__32300 = G__32325;
count__32301 = G__32326;
i__32302 = G__32327;
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
var G__32329 = arguments.length;
switch (G__32329) {
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
var G__32331 = parent;
var G__32332 = cljs.core.cons.call(null,parent,so_far);
n = G__32331;
so_far = G__32332;
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
var seq__32333_32341 = cljs.core.seq.call(null,ancestors);
var chunk__32334_32342 = null;
var count__32335_32343 = (0);
var i__32336_32344 = (0);
while(true){
if((i__32336_32344 < count__32335_32343)){
var n_32345 = cljs.core._nth.call(null,chunk__32334_32342,i__32336_32344);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_32345;

goog.events.fireListeners(n_32345,evt.type,true,evt);
}

var G__32346 = seq__32333_32341;
var G__32347 = chunk__32334_32342;
var G__32348 = count__32335_32343;
var G__32349 = (i__32336_32344 + (1));
seq__32333_32341 = G__32346;
chunk__32334_32342 = G__32347;
count__32335_32343 = G__32348;
i__32336_32344 = G__32349;
continue;
} else {
var temp__4657__auto___32350 = cljs.core.seq.call(null,seq__32333_32341);
if(temp__4657__auto___32350){
var seq__32333_32351__$1 = temp__4657__auto___32350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32333_32351__$1)){
var c__28775__auto___32352 = cljs.core.chunk_first.call(null,seq__32333_32351__$1);
var G__32353 = cljs.core.chunk_rest.call(null,seq__32333_32351__$1);
var G__32354 = c__28775__auto___32352;
var G__32355 = cljs.core.count.call(null,c__28775__auto___32352);
var G__32356 = (0);
seq__32333_32341 = G__32353;
chunk__32334_32342 = G__32354;
count__32335_32343 = G__32355;
i__32336_32344 = G__32356;
continue;
} else {
var n_32357 = cljs.core.first.call(null,seq__32333_32351__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_32357;

goog.events.fireListeners(n_32357,evt.type,true,evt);
}

var G__32358 = cljs.core.next.call(null,seq__32333_32351__$1);
var G__32359 = null;
var G__32360 = (0);
var G__32361 = (0);
seq__32333_32341 = G__32358;
chunk__32334_32342 = G__32359;
count__32335_32343 = G__32360;
i__32336_32344 = G__32361;
continue;
}
} else {
}
}
break;
}

var seq__32337_32362 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__32338_32363 = null;
var count__32339_32364 = (0);
var i__32340_32365 = (0);
while(true){
if((i__32340_32365 < count__32339_32364)){
var n_32366 = cljs.core._nth.call(null,chunk__32338_32363,i__32340_32365);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_32366;

goog.events.fireListeners(n_32366,evt.type,false,evt);
}

var G__32367 = seq__32337_32362;
var G__32368 = chunk__32338_32363;
var G__32369 = count__32339_32364;
var G__32370 = (i__32340_32365 + (1));
seq__32337_32362 = G__32367;
chunk__32338_32363 = G__32368;
count__32339_32364 = G__32369;
i__32340_32365 = G__32370;
continue;
} else {
var temp__4657__auto___32371 = cljs.core.seq.call(null,seq__32337_32362);
if(temp__4657__auto___32371){
var seq__32337_32372__$1 = temp__4657__auto___32371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32337_32372__$1)){
var c__28775__auto___32373 = cljs.core.chunk_first.call(null,seq__32337_32372__$1);
var G__32374 = cljs.core.chunk_rest.call(null,seq__32337_32372__$1);
var G__32375 = c__28775__auto___32373;
var G__32376 = cljs.core.count.call(null,c__28775__auto___32373);
var G__32377 = (0);
seq__32337_32362 = G__32374;
chunk__32338_32363 = G__32375;
count__32339_32364 = G__32376;
i__32340_32365 = G__32377;
continue;
} else {
var n_32378 = cljs.core.first.call(null,seq__32337_32372__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_32378;

goog.events.fireListeners(n_32378,evt.type,false,evt);
}

var G__32379 = cljs.core.next.call(null,seq__32337_32372__$1);
var G__32380 = null;
var G__32381 = (0);
var G__32382 = (0);
seq__32337_32362 = G__32379;
chunk__32338_32363 = G__32380;
count__32339_32364 = G__32381;
i__32340_32365 = G__32382;
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
var G__32384 = arguments.length;
switch (G__32384) {
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
var seq__32385_32396 = cljs.core.seq.call(null,evt_map);
var chunk__32386_32397 = null;
var count__32387_32398 = (0);
var i__32388_32399 = (0);
while(true){
if((i__32388_32399 < count__32387_32398)){
var vec__32389_32400 = cljs.core._nth.call(null,chunk__32386_32397,i__32388_32399);
var k_32401 = cljs.core.nth.call(null,vec__32389_32400,(0),null);
var v_32402 = cljs.core.nth.call(null,vec__32389_32400,(1),null);
(evt[k_32401] = v_32402);

var G__32403 = seq__32385_32396;
var G__32404 = chunk__32386_32397;
var G__32405 = count__32387_32398;
var G__32406 = (i__32388_32399 + (1));
seq__32385_32396 = G__32403;
chunk__32386_32397 = G__32404;
count__32387_32398 = G__32405;
i__32388_32399 = G__32406;
continue;
} else {
var temp__4657__auto___32407 = cljs.core.seq.call(null,seq__32385_32396);
if(temp__4657__auto___32407){
var seq__32385_32408__$1 = temp__4657__auto___32407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32385_32408__$1)){
var c__28775__auto___32409 = cljs.core.chunk_first.call(null,seq__32385_32408__$1);
var G__32410 = cljs.core.chunk_rest.call(null,seq__32385_32408__$1);
var G__32411 = c__28775__auto___32409;
var G__32412 = cljs.core.count.call(null,c__28775__auto___32409);
var G__32413 = (0);
seq__32385_32396 = G__32410;
chunk__32386_32397 = G__32411;
count__32387_32398 = G__32412;
i__32388_32399 = G__32413;
continue;
} else {
var vec__32392_32414 = cljs.core.first.call(null,seq__32385_32408__$1);
var k_32415 = cljs.core.nth.call(null,vec__32392_32414,(0),null);
var v_32416 = cljs.core.nth.call(null,vec__32392_32414,(1),null);
(evt[k_32415] = v_32416);

var G__32417 = cljs.core.next.call(null,seq__32385_32408__$1);
var G__32418 = null;
var G__32419 = (0);
var G__32420 = (0);
seq__32385_32396 = G__32417;
chunk__32386_32397 = G__32418;
count__32387_32398 = G__32419;
i__32388_32399 = G__32420;
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
return (function (p1__32421_SHARP_){
return goog.events.getListeners(p1__32421_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map?rel=1509845006068
