// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32570 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32570 = (function (val,meta32571){
this.val = val;
this.meta32571 = meta32571;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32572,meta32571__$1){
var self__ = this;
var _32572__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32570(self__.val,meta32571__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32572){
var self__ = this;
var _32572__$1 = this;
return self__.meta32571;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32570.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta32571","meta32571",-1980405709,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32570.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32570.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels32570";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32570.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels32570");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels32570 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels32570(val__$1,meta32571){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32570(val__$1,meta32571));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32570(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__28619__auto__ = (((this$ == null))?null:this$);
var m__28620__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,this$);
} else {
var m__28620__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_32584 = self__.puts.pop();
if((putter_32584 == null)){
} else {
var put_handler_32585 = putter_32584.handler;
var val_32586 = putter_32584.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_32585)){
var put_cb_32587 = cljs.core.async.impl.protocols.commit.call(null,put_handler_32585);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_32587,put_handler_32585,val_32586,putter_32584,this$__$1){
return (function (){
return put_cb_32587.call(null,true);
});})(put_cb_32587,put_handler_32585,val_32586,putter_32584,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil in on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__27924__auto__ = self__.buf;
if(cljs.core.truth_(and__27924__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__27924__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__32588 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__32588;
continue;
} else {
var G__32589 = takers;
takers = G__32589;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__32573_32590 = cljs.core.seq.call(null,take_cbs);
var chunk__32574_32591 = null;
var count__32575_32592 = (0);
var i__32576_32593 = (0);
while(true){
if((i__32576_32593 < count__32575_32592)){
var f_32594 = cljs.core._nth.call(null,chunk__32574_32591,i__32576_32593);
cljs.core.async.impl.dispatch.run.call(null,f_32594);

var G__32595 = seq__32573_32590;
var G__32596 = chunk__32574_32591;
var G__32597 = count__32575_32592;
var G__32598 = (i__32576_32593 + (1));
seq__32573_32590 = G__32595;
chunk__32574_32591 = G__32596;
count__32575_32592 = G__32597;
i__32576_32593 = G__32598;
continue;
} else {
var temp__4657__auto___32599 = cljs.core.seq.call(null,seq__32573_32590);
if(temp__4657__auto___32599){
var seq__32573_32600__$1 = temp__4657__auto___32599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32573_32600__$1)){
var c__28775__auto___32601 = cljs.core.chunk_first.call(null,seq__32573_32600__$1);
var G__32602 = cljs.core.chunk_rest.call(null,seq__32573_32600__$1);
var G__32603 = c__28775__auto___32601;
var G__32604 = cljs.core.count.call(null,c__28775__auto___32601);
var G__32605 = (0);
seq__32573_32590 = G__32602;
chunk__32574_32591 = G__32603;
count__32575_32592 = G__32604;
i__32576_32593 = G__32605;
continue;
} else {
var f_32606 = cljs.core.first.call(null,seq__32573_32600__$1);
cljs.core.async.impl.dispatch.run.call(null,f_32606);

var G__32607 = cljs.core.next.call(null,seq__32573_32600__$1);
var G__32608 = null;
var G__32609 = (0);
var G__32610 = (0);
seq__32573_32590 = G__32607;
chunk__32574_32591 = G__32608;
count__32575_32592 = G__32609;
i__32576_32593 = G__32610;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__4655__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__4655__auto__)){
var take_cb = temp__4655__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__32577 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__27924__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__27924__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__27924__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__32611 = cbs__$1;
cbs = G__32611;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__32577,(0),null);
var cbs = cljs.core.nth.call(null,vec__32577,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__32580_32612 = cljs.core.seq.call(null,cbs);
var chunk__32581_32613 = null;
var count__32582_32614 = (0);
var i__32583_32615 = (0);
while(true){
if((i__32583_32615 < count__32582_32614)){
var cb_32616 = cljs.core._nth.call(null,chunk__32581_32613,i__32583_32615);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__32580_32612,chunk__32581_32613,count__32582_32614,i__32583_32615,cb_32616,val,vec__32577,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return cb_32616.call(null,true);
});})(seq__32580_32612,chunk__32581_32613,count__32582_32614,i__32583_32615,cb_32616,val,vec__32577,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__32617 = seq__32580_32612;
var G__32618 = chunk__32581_32613;
var G__32619 = count__32582_32614;
var G__32620 = (i__32583_32615 + (1));
seq__32580_32612 = G__32617;
chunk__32581_32613 = G__32618;
count__32582_32614 = G__32619;
i__32583_32615 = G__32620;
continue;
} else {
var temp__4657__auto___32621 = cljs.core.seq.call(null,seq__32580_32612);
if(temp__4657__auto___32621){
var seq__32580_32622__$1 = temp__4657__auto___32621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32580_32622__$1)){
var c__28775__auto___32623 = cljs.core.chunk_first.call(null,seq__32580_32622__$1);
var G__32624 = cljs.core.chunk_rest.call(null,seq__32580_32622__$1);
var G__32625 = c__28775__auto___32623;
var G__32626 = cljs.core.count.call(null,c__28775__auto___32623);
var G__32627 = (0);
seq__32580_32612 = G__32624;
chunk__32581_32613 = G__32625;
count__32582_32614 = G__32626;
i__32583_32615 = G__32627;
continue;
} else {
var cb_32628 = cljs.core.first.call(null,seq__32580_32622__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__32580_32612,chunk__32581_32613,count__32582_32614,i__32583_32615,cb_32628,seq__32580_32622__$1,temp__4657__auto___32621,val,vec__32577,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return cb_32628.call(null,true);
});})(seq__32580_32612,chunk__32581_32613,count__32582_32614,i__32583_32615,cb_32628,seq__32580_32622__$1,temp__4657__auto___32621,val,vec__32577,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__32629 = cljs.core.next.call(null,seq__32580_32622__$1);
var G__32630 = null;
var G__32631 = (0);
var G__32632 = (0);
seq__32580_32612 = G__32629;
chunk__32581_32613 = G__32630;
count__32582_32614 = G__32631;
i__32583_32615 = G__32632;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__27924__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__27924__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__27924__auto__;
}
})())){
var has_val = (function (){var and__27924__auto__ = self__.buf;
if(cljs.core.truth_(and__27924__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__27924__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__27924__auto__ = self__.buf;
if(cljs.core.truth_(and__27924__auto__)){
return (self__.puts.length === (0));
} else {
return and__27924__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_32633 = self__.takes.pop();
if((taker_32633 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_32633)){
var take_cb_32634 = cljs.core.async.impl.protocols.commit.call(null,taker_32633);
var val_32635 = (cljs.core.truth_((function (){var and__27924__auto__ = self__.buf;
if(cljs.core.truth_(and__27924__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__27924__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_32634,val_32635,taker_32633,this$__$1){
return (function (){
return take_cb_32634.call(null,val_32635);
});})(take_cb_32634,val_32635,taker_32633,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__27936__auto__ = exh;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__32637 = arguments.length;
switch (G__32637) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__32641 = null;
var G__32641__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e32638){var t = e32638;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__32641__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e32639){var t = e32639;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__32641 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__32641__1.call(this,buf__$1);
case 2:
return G__32641__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32641.cljs$core$IFn$_invoke$arity$1 = G__32641__1;
G__32641.cljs$core$IFn$_invoke$arity$2 = G__32641__2;
return G__32641;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1509845007102
