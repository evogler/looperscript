// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30634 = arguments.length;
switch (G__30634) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30635 = (function (f,blockable,meta30636){
this.f = f;
this.blockable = blockable;
this.meta30636 = meta30636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30637,meta30636__$1){
var self__ = this;
var _30637__$1 = this;
return (new cljs.core.async.t_cljs$core$async30635(self__.f,self__.blockable,meta30636__$1));
});

cljs.core.async.t_cljs$core$async30635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30637){
var self__ = this;
var _30637__$1 = this;
return self__.meta30636;
});

cljs.core.async.t_cljs$core$async30635.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30635.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30635.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30635.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30635.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30636","meta30636",-306322962,null)], null);
});

cljs.core.async.t_cljs$core$async30635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30635";

cljs.core.async.t_cljs$core$async30635.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async30635");
});

cljs.core.async.__GT_t_cljs$core$async30635 = (function cljs$core$async$__GT_t_cljs$core$async30635(f__$1,blockable__$1,meta30636){
return (new cljs.core.async.t_cljs$core$async30635(f__$1,blockable__$1,meta30636));
});

}

return (new cljs.core.async.t_cljs$core$async30635(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30641 = arguments.length;
switch (G__30641) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30644 = arguments.length;
switch (G__30644) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30647 = arguments.length;
switch (G__30647) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30649 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30649);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30649,ret){
return (function (){
return fn1.call(null,val_30649);
});})(val_30649,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30651 = arguments.length;
switch (G__30651) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28934__auto___30653 = n;
var x_30654 = (0);
while(true){
if((x_30654 < n__28934__auto___30653)){
(a[x_30654] = (0));

var G__30655 = (x_30654 + (1));
x_30654 = G__30655;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30656 = (i + (1));
i = G__30656;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30657 = (function (flag,meta30658){
this.flag = flag;
this.meta30658 = meta30658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30659,meta30658__$1){
var self__ = this;
var _30659__$1 = this;
return (new cljs.core.async.t_cljs$core$async30657(self__.flag,meta30658__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30659){
var self__ = this;
var _30659__$1 = this;
return self__.meta30658;
});})(flag))
;

cljs.core.async.t_cljs$core$async30657.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30657.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30657.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30658","meta30658",-450805671,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30657";

cljs.core.async.t_cljs$core$async30657.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async30657");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30657 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30657(flag__$1,meta30658){
return (new cljs.core.async.t_cljs$core$async30657(flag__$1,meta30658));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30657(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30660 = (function (flag,cb,meta30661){
this.flag = flag;
this.cb = cb;
this.meta30661 = meta30661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30662,meta30661__$1){
var self__ = this;
var _30662__$1 = this;
return (new cljs.core.async.t_cljs$core$async30660(self__.flag,self__.cb,meta30661__$1));
});

cljs.core.async.t_cljs$core$async30660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30662){
var self__ = this;
var _30662__$1 = this;
return self__.meta30661;
});

cljs.core.async.t_cljs$core$async30660.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30660.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30661","meta30661",-525426580,null)], null);
});

cljs.core.async.t_cljs$core$async30660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30660";

cljs.core.async.t_cljs$core$async30660.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async30660");
});

cljs.core.async.__GT_t_cljs$core$async30660 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30660(flag__$1,cb__$1,meta30661){
return (new cljs.core.async.t_cljs$core$async30660(flag__$1,cb__$1,meta30661));
});

}

return (new cljs.core.async.t_cljs$core$async30660(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30663_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30663_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30664_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30664_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27989__auto__ = wport;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30665 = (i + (1));
i = G__30665;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27989__auto__ = ret;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27977__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27977__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27977__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___30671 = arguments.length;
var i__29159__auto___30672 = (0);
while(true){
if((i__29159__auto___30672 < len__29158__auto___30671)){
args__29165__auto__.push((arguments[i__29159__auto___30672]));

var G__30673 = (i__29159__auto___30672 + (1));
i__29159__auto___30672 = G__30673;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((1) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29166__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30668){
var map__30669 = p__30668;
var map__30669__$1 = ((((!((map__30669 == null)))?((((map__30669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30669):map__30669);
var opts = map__30669__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30666){
var G__30667 = cljs.core.first.call(null,seq30666);
var seq30666__$1 = cljs.core.next.call(null,seq30666);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30667,seq30666__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30675 = arguments.length;
switch (G__30675) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30588__auto___30721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___30721){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___30721){
return (function (state_30699){
var state_val_30700 = (state_30699[(1)]);
if((state_val_30700 === (7))){
var inst_30695 = (state_30699[(2)]);
var state_30699__$1 = state_30699;
var statearr_30701_30722 = state_30699__$1;
(statearr_30701_30722[(2)] = inst_30695);

(statearr_30701_30722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (1))){
var state_30699__$1 = state_30699;
var statearr_30702_30723 = state_30699__$1;
(statearr_30702_30723[(2)] = null);

(statearr_30702_30723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (4))){
var inst_30678 = (state_30699[(7)]);
var inst_30678__$1 = (state_30699[(2)]);
var inst_30679 = (inst_30678__$1 == null);
var state_30699__$1 = (function (){var statearr_30703 = state_30699;
(statearr_30703[(7)] = inst_30678__$1);

return statearr_30703;
})();
if(cljs.core.truth_(inst_30679)){
var statearr_30704_30724 = state_30699__$1;
(statearr_30704_30724[(1)] = (5));

} else {
var statearr_30705_30725 = state_30699__$1;
(statearr_30705_30725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (13))){
var state_30699__$1 = state_30699;
var statearr_30706_30726 = state_30699__$1;
(statearr_30706_30726[(2)] = null);

(statearr_30706_30726[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (6))){
var inst_30678 = (state_30699[(7)]);
var state_30699__$1 = state_30699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30699__$1,(11),to,inst_30678);
} else {
if((state_val_30700 === (3))){
var inst_30697 = (state_30699[(2)]);
var state_30699__$1 = state_30699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30699__$1,inst_30697);
} else {
if((state_val_30700 === (12))){
var state_30699__$1 = state_30699;
var statearr_30707_30727 = state_30699__$1;
(statearr_30707_30727[(2)] = null);

(statearr_30707_30727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (2))){
var state_30699__$1 = state_30699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30699__$1,(4),from);
} else {
if((state_val_30700 === (11))){
var inst_30688 = (state_30699[(2)]);
var state_30699__$1 = state_30699;
if(cljs.core.truth_(inst_30688)){
var statearr_30708_30728 = state_30699__$1;
(statearr_30708_30728[(1)] = (12));

} else {
var statearr_30709_30729 = state_30699__$1;
(statearr_30709_30729[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (9))){
var state_30699__$1 = state_30699;
var statearr_30710_30730 = state_30699__$1;
(statearr_30710_30730[(2)] = null);

(statearr_30710_30730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (5))){
var state_30699__$1 = state_30699;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30711_30731 = state_30699__$1;
(statearr_30711_30731[(1)] = (8));

} else {
var statearr_30712_30732 = state_30699__$1;
(statearr_30712_30732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (14))){
var inst_30693 = (state_30699[(2)]);
var state_30699__$1 = state_30699;
var statearr_30713_30733 = state_30699__$1;
(statearr_30713_30733[(2)] = inst_30693);

(statearr_30713_30733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (10))){
var inst_30685 = (state_30699[(2)]);
var state_30699__$1 = state_30699;
var statearr_30714_30734 = state_30699__$1;
(statearr_30714_30734[(2)] = inst_30685);

(statearr_30714_30734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30700 === (8))){
var inst_30682 = cljs.core.async.close_BANG_.call(null,to);
var state_30699__$1 = state_30699;
var statearr_30715_30735 = state_30699__$1;
(statearr_30715_30735[(2)] = inst_30682);

(statearr_30715_30735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto___30721))
;
return ((function (switch__30500__auto__,c__30588__auto___30721){
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_30716 = [null,null,null,null,null,null,null,null];
(statearr_30716[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_30716[(1)] = (1));

return statearr_30716;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_30699){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_30699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e30717){if((e30717 instanceof Object)){
var ex__30504__auto__ = e30717;
var statearr_30718_30736 = state_30699;
(statearr_30718_30736[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30737 = state_30699;
state_30699 = G__30737;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_30699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_30699);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___30721))
})();
var state__30590__auto__ = (function (){var statearr_30719 = f__30589__auto__.call(null);
(statearr_30719[(6)] = c__30588__auto___30721);

return statearr_30719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___30721))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30738){
var vec__30739 = p__30738;
var v = cljs.core.nth.call(null,vec__30739,(0),null);
var p = cljs.core.nth.call(null,vec__30739,(1),null);
var job = vec__30739;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30588__auto___30910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___30910,res,vec__30739,v,p,job,jobs,results){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___30910,res,vec__30739,v,p,job,jobs,results){
return (function (state_30746){
var state_val_30747 = (state_30746[(1)]);
if((state_val_30747 === (1))){
var state_30746__$1 = state_30746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30746__$1,(2),res,v);
} else {
if((state_val_30747 === (2))){
var inst_30743 = (state_30746[(2)]);
var inst_30744 = cljs.core.async.close_BANG_.call(null,res);
var state_30746__$1 = (function (){var statearr_30748 = state_30746;
(statearr_30748[(7)] = inst_30743);

return statearr_30748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30746__$1,inst_30744);
} else {
return null;
}
}
});})(c__30588__auto___30910,res,vec__30739,v,p,job,jobs,results))
;
return ((function (switch__30500__auto__,c__30588__auto___30910,res,vec__30739,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0 = (function (){
var statearr_30749 = [null,null,null,null,null,null,null,null];
(statearr_30749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__);

(statearr_30749[(1)] = (1));

return statearr_30749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1 = (function (state_30746){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_30746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e30750){if((e30750 instanceof Object)){
var ex__30504__auto__ = e30750;
var statearr_30751_30911 = state_30746;
(statearr_30751_30911[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30912 = state_30746;
state_30746 = G__30912;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = function(state_30746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1.call(this,state_30746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___30910,res,vec__30739,v,p,job,jobs,results))
})();
var state__30590__auto__ = (function (){var statearr_30752 = f__30589__auto__.call(null);
(statearr_30752[(6)] = c__30588__auto___30910);

return statearr_30752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___30910,res,vec__30739,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30753){
var vec__30754 = p__30753;
var v = cljs.core.nth.call(null,vec__30754,(0),null);
var p = cljs.core.nth.call(null,vec__30754,(1),null);
var job = vec__30754;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28934__auto___30913 = n;
var __30914 = (0);
while(true){
if((__30914 < n__28934__auto___30913)){
var G__30757_30915 = type;
var G__30757_30916__$1 = (((G__30757_30915 instanceof cljs.core.Keyword))?G__30757_30915.fqn:null);
switch (G__30757_30916__$1) {
case "compute":
var c__30588__auto___30918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30914,c__30588__auto___30918,G__30757_30915,G__30757_30916__$1,n__28934__auto___30913,jobs,results,process,async){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (__30914,c__30588__auto___30918,G__30757_30915,G__30757_30916__$1,n__28934__auto___30913,jobs,results,process,async){
return (function (state_30770){
var state_val_30771 = (state_30770[(1)]);
if((state_val_30771 === (1))){
var state_30770__$1 = state_30770;
var statearr_30772_30919 = state_30770__$1;
(statearr_30772_30919[(2)] = null);

(statearr_30772_30919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (2))){
var state_30770__$1 = state_30770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30770__$1,(4),jobs);
} else {
if((state_val_30771 === (3))){
var inst_30768 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30770__$1,inst_30768);
} else {
if((state_val_30771 === (4))){
var inst_30760 = (state_30770[(2)]);
var inst_30761 = process.call(null,inst_30760);
var state_30770__$1 = state_30770;
if(cljs.core.truth_(inst_30761)){
var statearr_30773_30920 = state_30770__$1;
(statearr_30773_30920[(1)] = (5));

} else {
var statearr_30774_30921 = state_30770__$1;
(statearr_30774_30921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (5))){
var state_30770__$1 = state_30770;
var statearr_30775_30922 = state_30770__$1;
(statearr_30775_30922[(2)] = null);

(statearr_30775_30922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (6))){
var state_30770__$1 = state_30770;
var statearr_30776_30923 = state_30770__$1;
(statearr_30776_30923[(2)] = null);

(statearr_30776_30923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (7))){
var inst_30766 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
var statearr_30777_30924 = state_30770__$1;
(statearr_30777_30924[(2)] = inst_30766);

(statearr_30777_30924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30914,c__30588__auto___30918,G__30757_30915,G__30757_30916__$1,n__28934__auto___30913,jobs,results,process,async))
;
return ((function (__30914,switch__30500__auto__,c__30588__auto___30918,G__30757_30915,G__30757_30916__$1,n__28934__auto___30913,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0 = (function (){
var statearr_30778 = [null,null,null,null,null,null,null];
(statearr_30778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__);

(statearr_30778[(1)] = (1));

return statearr_30778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1 = (function (state_30770){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_30770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e30779){if((e30779 instanceof Object)){
var ex__30504__auto__ = e30779;
var statearr_30780_30925 = state_30770;
(statearr_30780_30925[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30926 = state_30770;
state_30770 = G__30926;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = function(state_30770){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1.call(this,state_30770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__;
})()
;})(__30914,switch__30500__auto__,c__30588__auto___30918,G__30757_30915,G__30757_30916__$1,n__28934__auto___30913,jobs,results,process,async))
})();
var state__30590__auto__ = (function (){var statearr_30781 = f__30589__auto__.call(null);
(statearr_30781[(6)] = c__30588__auto___30918);

return statearr_30781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(__30914,c__30588__auto___30918,G__30757_30915,G__30757_30916__$1,n__28934__auto___30913,jobs,results,process,async))
);


break;
case "async":
var c__30588__auto___30927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30914,c__30588__auto___30927,G__30757_30915,G__30757_30916__$1,n__28934__auto___30913,jobs,results,process,async){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (__30914,c__30588__auto___30927,G__30757_30915,G__30757_30916__$1,n__28934__auto___30913,jobs,results,process,async){
return (function (state_30794){
var state_val_30795 = (state_30794[(1)]);
if((state_val_30795 === (1))){
var state_30794__$1 = state_30794;
var statearr_30796_30928 = state_30794__$1;
(statearr_30796_30928[(2)] = null);

(statearr_30796_30928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (2))){
var state_30794__$1 = state_30794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30794__$1,(4),jobs);
} else {
if((state_val_30795 === (3))){
var inst_30792 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30794__$1,inst_30792);
} else {
if((state_val_30795 === (4))){
var inst_30784 = (state_30794[(2)]);
var inst_30785 = async.call(null,inst_30784);
var state_30794__$1 = state_30794;
if(cljs.core.truth_(inst_30785)){
var statearr_30797_30929 = state_30794__$1;
(statearr_30797_30929[(1)] = (5));

} else {
var statearr_30798_30930 = state_30794__$1;
(statearr_30798_30930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (5))){
var state_30794__$1 = state_30794;
var statearr_30799_30931 = state_30794__$1;
(statearr_30799_30931[(2)] = null);

(statearr_30799_30931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (6))){
var state_30794__$1 = state_30794;
var statearr_30800_30932 = state_30794__$1;
(statearr_30800_30932[(2)] = null);

(statearr_30800_30932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30795 === (7))){
var inst_30790 = (state_30794[(2)]);
var state_30794__$1 = state_30794;
var statearr_30801_30933 = state_30794__$1;
(statearr_30801_30933[(2)] = inst_30790);

(statearr_30801_30933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30914,c__30588__auto___30927,G__30757_30915,G__30757_30916__$1,n__28934__auto___30913,jobs,results,process,async))
;
return ((function (__30914,switch__30500__auto__,c__30588__auto___30927,G__30757_30915,G__30757_30916__$1,n__28934__auto___30913,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0 = (function (){
var statearr_30802 = [null,null,null,null,null,null,null];
(statearr_30802[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__);

(statearr_30802[(1)] = (1));

return statearr_30802;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1 = (function (state_30794){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_30794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e30803){if((e30803 instanceof Object)){
var ex__30504__auto__ = e30803;
var statearr_30804_30934 = state_30794;
(statearr_30804_30934[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30935 = state_30794;
state_30794 = G__30935;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = function(state_30794){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1.call(this,state_30794);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__;
})()
;})(__30914,switch__30500__auto__,c__30588__auto___30927,G__30757_30915,G__30757_30916__$1,n__28934__auto___30913,jobs,results,process,async))
})();
var state__30590__auto__ = (function (){var statearr_30805 = f__30589__auto__.call(null);
(statearr_30805[(6)] = c__30588__auto___30927);

return statearr_30805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(__30914,c__30588__auto___30927,G__30757_30915,G__30757_30916__$1,n__28934__auto___30913,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30757_30916__$1)].join('')));

}

var G__30936 = (__30914 + (1));
__30914 = G__30936;
continue;
} else {
}
break;
}

var c__30588__auto___30937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___30937,jobs,results,process,async){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___30937,jobs,results,process,async){
return (function (state_30827){
var state_val_30828 = (state_30827[(1)]);
if((state_val_30828 === (1))){
var state_30827__$1 = state_30827;
var statearr_30829_30938 = state_30827__$1;
(statearr_30829_30938[(2)] = null);

(statearr_30829_30938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (2))){
var state_30827__$1 = state_30827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30827__$1,(4),from);
} else {
if((state_val_30828 === (3))){
var inst_30825 = (state_30827[(2)]);
var state_30827__$1 = state_30827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30827__$1,inst_30825);
} else {
if((state_val_30828 === (4))){
var inst_30808 = (state_30827[(7)]);
var inst_30808__$1 = (state_30827[(2)]);
var inst_30809 = (inst_30808__$1 == null);
var state_30827__$1 = (function (){var statearr_30830 = state_30827;
(statearr_30830[(7)] = inst_30808__$1);

return statearr_30830;
})();
if(cljs.core.truth_(inst_30809)){
var statearr_30831_30939 = state_30827__$1;
(statearr_30831_30939[(1)] = (5));

} else {
var statearr_30832_30940 = state_30827__$1;
(statearr_30832_30940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (5))){
var inst_30811 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30827__$1 = state_30827;
var statearr_30833_30941 = state_30827__$1;
(statearr_30833_30941[(2)] = inst_30811);

(statearr_30833_30941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (6))){
var inst_30808 = (state_30827[(7)]);
var inst_30813 = (state_30827[(8)]);
var inst_30813__$1 = cljs.core.async.chan.call(null,(1));
var inst_30814 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30815 = [inst_30808,inst_30813__$1];
var inst_30816 = (new cljs.core.PersistentVector(null,2,(5),inst_30814,inst_30815,null));
var state_30827__$1 = (function (){var statearr_30834 = state_30827;
(statearr_30834[(8)] = inst_30813__$1);

return statearr_30834;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30827__$1,(8),jobs,inst_30816);
} else {
if((state_val_30828 === (7))){
var inst_30823 = (state_30827[(2)]);
var state_30827__$1 = state_30827;
var statearr_30835_30942 = state_30827__$1;
(statearr_30835_30942[(2)] = inst_30823);

(statearr_30835_30942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (8))){
var inst_30813 = (state_30827[(8)]);
var inst_30818 = (state_30827[(2)]);
var state_30827__$1 = (function (){var statearr_30836 = state_30827;
(statearr_30836[(9)] = inst_30818);

return statearr_30836;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30827__$1,(9),results,inst_30813);
} else {
if((state_val_30828 === (9))){
var inst_30820 = (state_30827[(2)]);
var state_30827__$1 = (function (){var statearr_30837 = state_30827;
(statearr_30837[(10)] = inst_30820);

return statearr_30837;
})();
var statearr_30838_30943 = state_30827__$1;
(statearr_30838_30943[(2)] = null);

(statearr_30838_30943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30588__auto___30937,jobs,results,process,async))
;
return ((function (switch__30500__auto__,c__30588__auto___30937,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0 = (function (){
var statearr_30839 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__);

(statearr_30839[(1)] = (1));

return statearr_30839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1 = (function (state_30827){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_30827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e30840){if((e30840 instanceof Object)){
var ex__30504__auto__ = e30840;
var statearr_30841_30944 = state_30827;
(statearr_30841_30944[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30945 = state_30827;
state_30827 = G__30945;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = function(state_30827){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1.call(this,state_30827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___30937,jobs,results,process,async))
})();
var state__30590__auto__ = (function (){var statearr_30842 = f__30589__auto__.call(null);
(statearr_30842[(6)] = c__30588__auto___30937);

return statearr_30842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___30937,jobs,results,process,async))
);


var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__,jobs,results,process,async){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__,jobs,results,process,async){
return (function (state_30880){
var state_val_30881 = (state_30880[(1)]);
if((state_val_30881 === (7))){
var inst_30876 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30882_30946 = state_30880__$1;
(statearr_30882_30946[(2)] = inst_30876);

(statearr_30882_30946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (20))){
var state_30880__$1 = state_30880;
var statearr_30883_30947 = state_30880__$1;
(statearr_30883_30947[(2)] = null);

(statearr_30883_30947[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (1))){
var state_30880__$1 = state_30880;
var statearr_30884_30948 = state_30880__$1;
(statearr_30884_30948[(2)] = null);

(statearr_30884_30948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (4))){
var inst_30845 = (state_30880[(7)]);
var inst_30845__$1 = (state_30880[(2)]);
var inst_30846 = (inst_30845__$1 == null);
var state_30880__$1 = (function (){var statearr_30885 = state_30880;
(statearr_30885[(7)] = inst_30845__$1);

return statearr_30885;
})();
if(cljs.core.truth_(inst_30846)){
var statearr_30886_30949 = state_30880__$1;
(statearr_30886_30949[(1)] = (5));

} else {
var statearr_30887_30950 = state_30880__$1;
(statearr_30887_30950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (15))){
var inst_30858 = (state_30880[(8)]);
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30880__$1,(18),to,inst_30858);
} else {
if((state_val_30881 === (21))){
var inst_30871 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30888_30951 = state_30880__$1;
(statearr_30888_30951[(2)] = inst_30871);

(statearr_30888_30951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (13))){
var inst_30873 = (state_30880[(2)]);
var state_30880__$1 = (function (){var statearr_30889 = state_30880;
(statearr_30889[(9)] = inst_30873);

return statearr_30889;
})();
var statearr_30890_30952 = state_30880__$1;
(statearr_30890_30952[(2)] = null);

(statearr_30890_30952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (6))){
var inst_30845 = (state_30880[(7)]);
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30880__$1,(11),inst_30845);
} else {
if((state_val_30881 === (17))){
var inst_30866 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
if(cljs.core.truth_(inst_30866)){
var statearr_30891_30953 = state_30880__$1;
(statearr_30891_30953[(1)] = (19));

} else {
var statearr_30892_30954 = state_30880__$1;
(statearr_30892_30954[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (3))){
var inst_30878 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30880__$1,inst_30878);
} else {
if((state_val_30881 === (12))){
var inst_30855 = (state_30880[(10)]);
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30880__$1,(14),inst_30855);
} else {
if((state_val_30881 === (2))){
var state_30880__$1 = state_30880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30880__$1,(4),results);
} else {
if((state_val_30881 === (19))){
var state_30880__$1 = state_30880;
var statearr_30893_30955 = state_30880__$1;
(statearr_30893_30955[(2)] = null);

(statearr_30893_30955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (11))){
var inst_30855 = (state_30880[(2)]);
var state_30880__$1 = (function (){var statearr_30894 = state_30880;
(statearr_30894[(10)] = inst_30855);

return statearr_30894;
})();
var statearr_30895_30956 = state_30880__$1;
(statearr_30895_30956[(2)] = null);

(statearr_30895_30956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (9))){
var state_30880__$1 = state_30880;
var statearr_30896_30957 = state_30880__$1;
(statearr_30896_30957[(2)] = null);

(statearr_30896_30957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (5))){
var state_30880__$1 = state_30880;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30897_30958 = state_30880__$1;
(statearr_30897_30958[(1)] = (8));

} else {
var statearr_30898_30959 = state_30880__$1;
(statearr_30898_30959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (14))){
var inst_30858 = (state_30880[(8)]);
var inst_30860 = (state_30880[(11)]);
var inst_30858__$1 = (state_30880[(2)]);
var inst_30859 = (inst_30858__$1 == null);
var inst_30860__$1 = cljs.core.not.call(null,inst_30859);
var state_30880__$1 = (function (){var statearr_30899 = state_30880;
(statearr_30899[(8)] = inst_30858__$1);

(statearr_30899[(11)] = inst_30860__$1);

return statearr_30899;
})();
if(inst_30860__$1){
var statearr_30900_30960 = state_30880__$1;
(statearr_30900_30960[(1)] = (15));

} else {
var statearr_30901_30961 = state_30880__$1;
(statearr_30901_30961[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (16))){
var inst_30860 = (state_30880[(11)]);
var state_30880__$1 = state_30880;
var statearr_30902_30962 = state_30880__$1;
(statearr_30902_30962[(2)] = inst_30860);

(statearr_30902_30962[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (10))){
var inst_30852 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30903_30963 = state_30880__$1;
(statearr_30903_30963[(2)] = inst_30852);

(statearr_30903_30963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (18))){
var inst_30863 = (state_30880[(2)]);
var state_30880__$1 = state_30880;
var statearr_30904_30964 = state_30880__$1;
(statearr_30904_30964[(2)] = inst_30863);

(statearr_30904_30964[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30881 === (8))){
var inst_30849 = cljs.core.async.close_BANG_.call(null,to);
var state_30880__$1 = state_30880;
var statearr_30905_30965 = state_30880__$1;
(statearr_30905_30965[(2)] = inst_30849);

(statearr_30905_30965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto__,jobs,results,process,async))
;
return ((function (switch__30500__auto__,c__30588__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0 = (function (){
var statearr_30906 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__);

(statearr_30906[(1)] = (1));

return statearr_30906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1 = (function (state_30880){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_30880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e30907){if((e30907 instanceof Object)){
var ex__30504__auto__ = e30907;
var statearr_30908_30966 = state_30880;
(statearr_30908_30966[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30967 = state_30880;
state_30880 = G__30967;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__ = function(state_30880){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1.call(this,state_30880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__,jobs,results,process,async))
})();
var state__30590__auto__ = (function (){var statearr_30909 = f__30589__auto__.call(null);
(statearr_30909[(6)] = c__30588__auto__);

return statearr_30909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__,jobs,results,process,async))
);

return c__30588__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30969 = arguments.length;
switch (G__30969) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30972 = arguments.length;
switch (G__30972) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30975 = arguments.length;
switch (G__30975) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30588__auto___31024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___31024,tc,fc){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___31024,tc,fc){
return (function (state_31001){
var state_val_31002 = (state_31001[(1)]);
if((state_val_31002 === (7))){
var inst_30997 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
var statearr_31003_31025 = state_31001__$1;
(statearr_31003_31025[(2)] = inst_30997);

(statearr_31003_31025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (1))){
var state_31001__$1 = state_31001;
var statearr_31004_31026 = state_31001__$1;
(statearr_31004_31026[(2)] = null);

(statearr_31004_31026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (4))){
var inst_30978 = (state_31001[(7)]);
var inst_30978__$1 = (state_31001[(2)]);
var inst_30979 = (inst_30978__$1 == null);
var state_31001__$1 = (function (){var statearr_31005 = state_31001;
(statearr_31005[(7)] = inst_30978__$1);

return statearr_31005;
})();
if(cljs.core.truth_(inst_30979)){
var statearr_31006_31027 = state_31001__$1;
(statearr_31006_31027[(1)] = (5));

} else {
var statearr_31007_31028 = state_31001__$1;
(statearr_31007_31028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (13))){
var state_31001__$1 = state_31001;
var statearr_31008_31029 = state_31001__$1;
(statearr_31008_31029[(2)] = null);

(statearr_31008_31029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (6))){
var inst_30978 = (state_31001[(7)]);
var inst_30984 = p.call(null,inst_30978);
var state_31001__$1 = state_31001;
if(cljs.core.truth_(inst_30984)){
var statearr_31009_31030 = state_31001__$1;
(statearr_31009_31030[(1)] = (9));

} else {
var statearr_31010_31031 = state_31001__$1;
(statearr_31010_31031[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (3))){
var inst_30999 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31001__$1,inst_30999);
} else {
if((state_val_31002 === (12))){
var state_31001__$1 = state_31001;
var statearr_31011_31032 = state_31001__$1;
(statearr_31011_31032[(2)] = null);

(statearr_31011_31032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (2))){
var state_31001__$1 = state_31001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31001__$1,(4),ch);
} else {
if((state_val_31002 === (11))){
var inst_30978 = (state_31001[(7)]);
var inst_30988 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31001__$1,(8),inst_30988,inst_30978);
} else {
if((state_val_31002 === (9))){
var state_31001__$1 = state_31001;
var statearr_31012_31033 = state_31001__$1;
(statearr_31012_31033[(2)] = tc);

(statearr_31012_31033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (5))){
var inst_30981 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30982 = cljs.core.async.close_BANG_.call(null,fc);
var state_31001__$1 = (function (){var statearr_31013 = state_31001;
(statearr_31013[(8)] = inst_30981);

return statearr_31013;
})();
var statearr_31014_31034 = state_31001__$1;
(statearr_31014_31034[(2)] = inst_30982);

(statearr_31014_31034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (14))){
var inst_30995 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
var statearr_31015_31035 = state_31001__$1;
(statearr_31015_31035[(2)] = inst_30995);

(statearr_31015_31035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (10))){
var state_31001__$1 = state_31001;
var statearr_31016_31036 = state_31001__$1;
(statearr_31016_31036[(2)] = fc);

(statearr_31016_31036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31002 === (8))){
var inst_30990 = (state_31001[(2)]);
var state_31001__$1 = state_31001;
if(cljs.core.truth_(inst_30990)){
var statearr_31017_31037 = state_31001__$1;
(statearr_31017_31037[(1)] = (12));

} else {
var statearr_31018_31038 = state_31001__$1;
(statearr_31018_31038[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto___31024,tc,fc))
;
return ((function (switch__30500__auto__,c__30588__auto___31024,tc,fc){
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_31019 = [null,null,null,null,null,null,null,null,null];
(statearr_31019[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_31019[(1)] = (1));

return statearr_31019;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_31001){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_31001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31020){if((e31020 instanceof Object)){
var ex__30504__auto__ = e31020;
var statearr_31021_31039 = state_31001;
(statearr_31021_31039[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31040 = state_31001;
state_31001 = G__31040;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_31001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_31001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___31024,tc,fc))
})();
var state__30590__auto__ = (function (){var statearr_31022 = f__30589__auto__.call(null);
(statearr_31022[(6)] = c__30588__auto___31024);

return statearr_31022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___31024,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__){
return (function (state_31061){
var state_val_31062 = (state_31061[(1)]);
if((state_val_31062 === (7))){
var inst_31057 = (state_31061[(2)]);
var state_31061__$1 = state_31061;
var statearr_31063_31081 = state_31061__$1;
(statearr_31063_31081[(2)] = inst_31057);

(statearr_31063_31081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31062 === (1))){
var inst_31041 = init;
var state_31061__$1 = (function (){var statearr_31064 = state_31061;
(statearr_31064[(7)] = inst_31041);

return statearr_31064;
})();
var statearr_31065_31082 = state_31061__$1;
(statearr_31065_31082[(2)] = null);

(statearr_31065_31082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31062 === (4))){
var inst_31044 = (state_31061[(8)]);
var inst_31044__$1 = (state_31061[(2)]);
var inst_31045 = (inst_31044__$1 == null);
var state_31061__$1 = (function (){var statearr_31066 = state_31061;
(statearr_31066[(8)] = inst_31044__$1);

return statearr_31066;
})();
if(cljs.core.truth_(inst_31045)){
var statearr_31067_31083 = state_31061__$1;
(statearr_31067_31083[(1)] = (5));

} else {
var statearr_31068_31084 = state_31061__$1;
(statearr_31068_31084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31062 === (6))){
var inst_31048 = (state_31061[(9)]);
var inst_31044 = (state_31061[(8)]);
var inst_31041 = (state_31061[(7)]);
var inst_31048__$1 = f.call(null,inst_31041,inst_31044);
var inst_31049 = cljs.core.reduced_QMARK_.call(null,inst_31048__$1);
var state_31061__$1 = (function (){var statearr_31069 = state_31061;
(statearr_31069[(9)] = inst_31048__$1);

return statearr_31069;
})();
if(inst_31049){
var statearr_31070_31085 = state_31061__$1;
(statearr_31070_31085[(1)] = (8));

} else {
var statearr_31071_31086 = state_31061__$1;
(statearr_31071_31086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31062 === (3))){
var inst_31059 = (state_31061[(2)]);
var state_31061__$1 = state_31061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31061__$1,inst_31059);
} else {
if((state_val_31062 === (2))){
var state_31061__$1 = state_31061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31061__$1,(4),ch);
} else {
if((state_val_31062 === (9))){
var inst_31048 = (state_31061[(9)]);
var inst_31041 = inst_31048;
var state_31061__$1 = (function (){var statearr_31072 = state_31061;
(statearr_31072[(7)] = inst_31041);

return statearr_31072;
})();
var statearr_31073_31087 = state_31061__$1;
(statearr_31073_31087[(2)] = null);

(statearr_31073_31087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31062 === (5))){
var inst_31041 = (state_31061[(7)]);
var state_31061__$1 = state_31061;
var statearr_31074_31088 = state_31061__$1;
(statearr_31074_31088[(2)] = inst_31041);

(statearr_31074_31088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31062 === (10))){
var inst_31055 = (state_31061[(2)]);
var state_31061__$1 = state_31061;
var statearr_31075_31089 = state_31061__$1;
(statearr_31075_31089[(2)] = inst_31055);

(statearr_31075_31089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31062 === (8))){
var inst_31048 = (state_31061[(9)]);
var inst_31051 = cljs.core.deref.call(null,inst_31048);
var state_31061__$1 = state_31061;
var statearr_31076_31090 = state_31061__$1;
(statearr_31076_31090[(2)] = inst_31051);

(statearr_31076_31090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto__))
;
return ((function (switch__30500__auto__,c__30588__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30501__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30501__auto____0 = (function (){
var statearr_31077 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31077[(0)] = cljs$core$async$reduce_$_state_machine__30501__auto__);

(statearr_31077[(1)] = (1));

return statearr_31077;
});
var cljs$core$async$reduce_$_state_machine__30501__auto____1 = (function (state_31061){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_31061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31078){if((e31078 instanceof Object)){
var ex__30504__auto__ = e31078;
var statearr_31079_31091 = state_31061;
(statearr_31079_31091[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31092 = state_31061;
state_31061 = G__31092;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30501__auto__ = function(state_31061){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30501__auto____1.call(this,state_31061);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30501__auto____0;
cljs$core$async$reduce_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30501__auto____1;
return cljs$core$async$reduce_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__))
})();
var state__30590__auto__ = (function (){var statearr_31080 = f__30589__auto__.call(null);
(statearr_31080[(6)] = c__30588__auto__);

return statearr_31080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__))
);

return c__30588__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__,f__$1){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__,f__$1){
return (function (state_31098){
var state_val_31099 = (state_31098[(1)]);
if((state_val_31099 === (1))){
var inst_31093 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31098__$1,(2),inst_31093);
} else {
if((state_val_31099 === (2))){
var inst_31095 = (state_31098[(2)]);
var inst_31096 = f__$1.call(null,inst_31095);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31098__$1,inst_31096);
} else {
return null;
}
}
});})(c__30588__auto__,f__$1))
;
return ((function (switch__30500__auto__,c__30588__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30501__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30501__auto____0 = (function (){
var statearr_31100 = [null,null,null,null,null,null,null];
(statearr_31100[(0)] = cljs$core$async$transduce_$_state_machine__30501__auto__);

(statearr_31100[(1)] = (1));

return statearr_31100;
});
var cljs$core$async$transduce_$_state_machine__30501__auto____1 = (function (state_31098){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_31098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31101){if((e31101 instanceof Object)){
var ex__30504__auto__ = e31101;
var statearr_31102_31104 = state_31098;
(statearr_31102_31104[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31105 = state_31098;
state_31098 = G__31105;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30501__auto__ = function(state_31098){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30501__auto____1.call(this,state_31098);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30501__auto____0;
cljs$core$async$transduce_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30501__auto____1;
return cljs$core$async$transduce_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__,f__$1))
})();
var state__30590__auto__ = (function (){var statearr_31103 = f__30589__auto__.call(null);
(statearr_31103[(6)] = c__30588__auto__);

return statearr_31103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__,f__$1))
);

return c__30588__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31107 = arguments.length;
switch (G__31107) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__){
return (function (state_31132){
var state_val_31133 = (state_31132[(1)]);
if((state_val_31133 === (7))){
var inst_31114 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31134_31155 = state_31132__$1;
(statearr_31134_31155[(2)] = inst_31114);

(statearr_31134_31155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (1))){
var inst_31108 = cljs.core.seq.call(null,coll);
var inst_31109 = inst_31108;
var state_31132__$1 = (function (){var statearr_31135 = state_31132;
(statearr_31135[(7)] = inst_31109);

return statearr_31135;
})();
var statearr_31136_31156 = state_31132__$1;
(statearr_31136_31156[(2)] = null);

(statearr_31136_31156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (4))){
var inst_31109 = (state_31132[(7)]);
var inst_31112 = cljs.core.first.call(null,inst_31109);
var state_31132__$1 = state_31132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31132__$1,(7),ch,inst_31112);
} else {
if((state_val_31133 === (13))){
var inst_31126 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31137_31157 = state_31132__$1;
(statearr_31137_31157[(2)] = inst_31126);

(statearr_31137_31157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (6))){
var inst_31117 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
if(cljs.core.truth_(inst_31117)){
var statearr_31138_31158 = state_31132__$1;
(statearr_31138_31158[(1)] = (8));

} else {
var statearr_31139_31159 = state_31132__$1;
(statearr_31139_31159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (3))){
var inst_31130 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31132__$1,inst_31130);
} else {
if((state_val_31133 === (12))){
var state_31132__$1 = state_31132;
var statearr_31140_31160 = state_31132__$1;
(statearr_31140_31160[(2)] = null);

(statearr_31140_31160[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (2))){
var inst_31109 = (state_31132[(7)]);
var state_31132__$1 = state_31132;
if(cljs.core.truth_(inst_31109)){
var statearr_31141_31161 = state_31132__$1;
(statearr_31141_31161[(1)] = (4));

} else {
var statearr_31142_31162 = state_31132__$1;
(statearr_31142_31162[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (11))){
var inst_31123 = cljs.core.async.close_BANG_.call(null,ch);
var state_31132__$1 = state_31132;
var statearr_31143_31163 = state_31132__$1;
(statearr_31143_31163[(2)] = inst_31123);

(statearr_31143_31163[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (9))){
var state_31132__$1 = state_31132;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31144_31164 = state_31132__$1;
(statearr_31144_31164[(1)] = (11));

} else {
var statearr_31145_31165 = state_31132__$1;
(statearr_31145_31165[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (5))){
var inst_31109 = (state_31132[(7)]);
var state_31132__$1 = state_31132;
var statearr_31146_31166 = state_31132__$1;
(statearr_31146_31166[(2)] = inst_31109);

(statearr_31146_31166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (10))){
var inst_31128 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31147_31167 = state_31132__$1;
(statearr_31147_31167[(2)] = inst_31128);

(statearr_31147_31167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (8))){
var inst_31109 = (state_31132[(7)]);
var inst_31119 = cljs.core.next.call(null,inst_31109);
var inst_31109__$1 = inst_31119;
var state_31132__$1 = (function (){var statearr_31148 = state_31132;
(statearr_31148[(7)] = inst_31109__$1);

return statearr_31148;
})();
var statearr_31149_31168 = state_31132__$1;
(statearr_31149_31168[(2)] = null);

(statearr_31149_31168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto__))
;
return ((function (switch__30500__auto__,c__30588__auto__){
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_31150 = [null,null,null,null,null,null,null,null];
(statearr_31150[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_31150[(1)] = (1));

return statearr_31150;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_31132){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_31132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31151){if((e31151 instanceof Object)){
var ex__30504__auto__ = e31151;
var statearr_31152_31169 = state_31132;
(statearr_31152_31169[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31170 = state_31132;
state_31132 = G__31170;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_31132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_31132);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__))
})();
var state__30590__auto__ = (function (){var statearr_31153 = f__30589__auto__.call(null);
(statearr_31153[(6)] = c__30588__auto__);

return statearr_31153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__))
);

return c__30588__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28672__auto__ = (((_ == null))?null:_);
var m__28673__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,_);
} else {
var m__28673__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28673__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m);
} else {
var m__28673__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31171 = (function (ch,cs,meta31172){
this.ch = ch;
this.cs = cs;
this.meta31172 = meta31172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31173,meta31172__$1){
var self__ = this;
var _31173__$1 = this;
return (new cljs.core.async.t_cljs$core$async31171(self__.ch,self__.cs,meta31172__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31173){
var self__ = this;
var _31173__$1 = this;
return self__.meta31172;
});})(cs))
;

cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31171.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31171.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31172","meta31172",966406259,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31171";

cljs.core.async.t_cljs$core$async31171.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async31171");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31171 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31171(ch__$1,cs__$1,meta31172){
return (new cljs.core.async.t_cljs$core$async31171(ch__$1,cs__$1,meta31172));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31171(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30588__auto___31393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___31393,cs,m,dchan,dctr,done){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___31393,cs,m,dchan,dctr,done){
return (function (state_31308){
var state_val_31309 = (state_31308[(1)]);
if((state_val_31309 === (7))){
var inst_31304 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31310_31394 = state_31308__$1;
(statearr_31310_31394[(2)] = inst_31304);

(statearr_31310_31394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (20))){
var inst_31207 = (state_31308[(7)]);
var inst_31219 = cljs.core.first.call(null,inst_31207);
var inst_31220 = cljs.core.nth.call(null,inst_31219,(0),null);
var inst_31221 = cljs.core.nth.call(null,inst_31219,(1),null);
var state_31308__$1 = (function (){var statearr_31311 = state_31308;
(statearr_31311[(8)] = inst_31220);

return statearr_31311;
})();
if(cljs.core.truth_(inst_31221)){
var statearr_31312_31395 = state_31308__$1;
(statearr_31312_31395[(1)] = (22));

} else {
var statearr_31313_31396 = state_31308__$1;
(statearr_31313_31396[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (27))){
var inst_31251 = (state_31308[(9)]);
var inst_31249 = (state_31308[(10)]);
var inst_31176 = (state_31308[(11)]);
var inst_31256 = (state_31308[(12)]);
var inst_31256__$1 = cljs.core._nth.call(null,inst_31249,inst_31251);
var inst_31257 = cljs.core.async.put_BANG_.call(null,inst_31256__$1,inst_31176,done);
var state_31308__$1 = (function (){var statearr_31314 = state_31308;
(statearr_31314[(12)] = inst_31256__$1);

return statearr_31314;
})();
if(cljs.core.truth_(inst_31257)){
var statearr_31315_31397 = state_31308__$1;
(statearr_31315_31397[(1)] = (30));

} else {
var statearr_31316_31398 = state_31308__$1;
(statearr_31316_31398[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (1))){
var state_31308__$1 = state_31308;
var statearr_31317_31399 = state_31308__$1;
(statearr_31317_31399[(2)] = null);

(statearr_31317_31399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (24))){
var inst_31207 = (state_31308[(7)]);
var inst_31226 = (state_31308[(2)]);
var inst_31227 = cljs.core.next.call(null,inst_31207);
var inst_31185 = inst_31227;
var inst_31186 = null;
var inst_31187 = (0);
var inst_31188 = (0);
var state_31308__$1 = (function (){var statearr_31318 = state_31308;
(statearr_31318[(13)] = inst_31187);

(statearr_31318[(14)] = inst_31188);

(statearr_31318[(15)] = inst_31186);

(statearr_31318[(16)] = inst_31226);

(statearr_31318[(17)] = inst_31185);

return statearr_31318;
})();
var statearr_31319_31400 = state_31308__$1;
(statearr_31319_31400[(2)] = null);

(statearr_31319_31400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (39))){
var state_31308__$1 = state_31308;
var statearr_31323_31401 = state_31308__$1;
(statearr_31323_31401[(2)] = null);

(statearr_31323_31401[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (4))){
var inst_31176 = (state_31308[(11)]);
var inst_31176__$1 = (state_31308[(2)]);
var inst_31177 = (inst_31176__$1 == null);
var state_31308__$1 = (function (){var statearr_31324 = state_31308;
(statearr_31324[(11)] = inst_31176__$1);

return statearr_31324;
})();
if(cljs.core.truth_(inst_31177)){
var statearr_31325_31402 = state_31308__$1;
(statearr_31325_31402[(1)] = (5));

} else {
var statearr_31326_31403 = state_31308__$1;
(statearr_31326_31403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (15))){
var inst_31187 = (state_31308[(13)]);
var inst_31188 = (state_31308[(14)]);
var inst_31186 = (state_31308[(15)]);
var inst_31185 = (state_31308[(17)]);
var inst_31203 = (state_31308[(2)]);
var inst_31204 = (inst_31188 + (1));
var tmp31320 = inst_31187;
var tmp31321 = inst_31186;
var tmp31322 = inst_31185;
var inst_31185__$1 = tmp31322;
var inst_31186__$1 = tmp31321;
var inst_31187__$1 = tmp31320;
var inst_31188__$1 = inst_31204;
var state_31308__$1 = (function (){var statearr_31327 = state_31308;
(statearr_31327[(13)] = inst_31187__$1);

(statearr_31327[(18)] = inst_31203);

(statearr_31327[(14)] = inst_31188__$1);

(statearr_31327[(15)] = inst_31186__$1);

(statearr_31327[(17)] = inst_31185__$1);

return statearr_31327;
})();
var statearr_31328_31404 = state_31308__$1;
(statearr_31328_31404[(2)] = null);

(statearr_31328_31404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (21))){
var inst_31230 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31332_31405 = state_31308__$1;
(statearr_31332_31405[(2)] = inst_31230);

(statearr_31332_31405[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (31))){
var inst_31256 = (state_31308[(12)]);
var inst_31260 = done.call(null,null);
var inst_31261 = cljs.core.async.untap_STAR_.call(null,m,inst_31256);
var state_31308__$1 = (function (){var statearr_31333 = state_31308;
(statearr_31333[(19)] = inst_31260);

return statearr_31333;
})();
var statearr_31334_31406 = state_31308__$1;
(statearr_31334_31406[(2)] = inst_31261);

(statearr_31334_31406[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (32))){
var inst_31251 = (state_31308[(9)]);
var inst_31249 = (state_31308[(10)]);
var inst_31248 = (state_31308[(20)]);
var inst_31250 = (state_31308[(21)]);
var inst_31263 = (state_31308[(2)]);
var inst_31264 = (inst_31251 + (1));
var tmp31329 = inst_31249;
var tmp31330 = inst_31248;
var tmp31331 = inst_31250;
var inst_31248__$1 = tmp31330;
var inst_31249__$1 = tmp31329;
var inst_31250__$1 = tmp31331;
var inst_31251__$1 = inst_31264;
var state_31308__$1 = (function (){var statearr_31335 = state_31308;
(statearr_31335[(22)] = inst_31263);

(statearr_31335[(9)] = inst_31251__$1);

(statearr_31335[(10)] = inst_31249__$1);

(statearr_31335[(20)] = inst_31248__$1);

(statearr_31335[(21)] = inst_31250__$1);

return statearr_31335;
})();
var statearr_31336_31407 = state_31308__$1;
(statearr_31336_31407[(2)] = null);

(statearr_31336_31407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (40))){
var inst_31276 = (state_31308[(23)]);
var inst_31280 = done.call(null,null);
var inst_31281 = cljs.core.async.untap_STAR_.call(null,m,inst_31276);
var state_31308__$1 = (function (){var statearr_31337 = state_31308;
(statearr_31337[(24)] = inst_31280);

return statearr_31337;
})();
var statearr_31338_31408 = state_31308__$1;
(statearr_31338_31408[(2)] = inst_31281);

(statearr_31338_31408[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (33))){
var inst_31267 = (state_31308[(25)]);
var inst_31269 = cljs.core.chunked_seq_QMARK_.call(null,inst_31267);
var state_31308__$1 = state_31308;
if(inst_31269){
var statearr_31339_31409 = state_31308__$1;
(statearr_31339_31409[(1)] = (36));

} else {
var statearr_31340_31410 = state_31308__$1;
(statearr_31340_31410[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (13))){
var inst_31197 = (state_31308[(26)]);
var inst_31200 = cljs.core.async.close_BANG_.call(null,inst_31197);
var state_31308__$1 = state_31308;
var statearr_31341_31411 = state_31308__$1;
(statearr_31341_31411[(2)] = inst_31200);

(statearr_31341_31411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (22))){
var inst_31220 = (state_31308[(8)]);
var inst_31223 = cljs.core.async.close_BANG_.call(null,inst_31220);
var state_31308__$1 = state_31308;
var statearr_31342_31412 = state_31308__$1;
(statearr_31342_31412[(2)] = inst_31223);

(statearr_31342_31412[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (36))){
var inst_31267 = (state_31308[(25)]);
var inst_31271 = cljs.core.chunk_first.call(null,inst_31267);
var inst_31272 = cljs.core.chunk_rest.call(null,inst_31267);
var inst_31273 = cljs.core.count.call(null,inst_31271);
var inst_31248 = inst_31272;
var inst_31249 = inst_31271;
var inst_31250 = inst_31273;
var inst_31251 = (0);
var state_31308__$1 = (function (){var statearr_31343 = state_31308;
(statearr_31343[(9)] = inst_31251);

(statearr_31343[(10)] = inst_31249);

(statearr_31343[(20)] = inst_31248);

(statearr_31343[(21)] = inst_31250);

return statearr_31343;
})();
var statearr_31344_31413 = state_31308__$1;
(statearr_31344_31413[(2)] = null);

(statearr_31344_31413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (41))){
var inst_31267 = (state_31308[(25)]);
var inst_31283 = (state_31308[(2)]);
var inst_31284 = cljs.core.next.call(null,inst_31267);
var inst_31248 = inst_31284;
var inst_31249 = null;
var inst_31250 = (0);
var inst_31251 = (0);
var state_31308__$1 = (function (){var statearr_31345 = state_31308;
(statearr_31345[(9)] = inst_31251);

(statearr_31345[(10)] = inst_31249);

(statearr_31345[(20)] = inst_31248);

(statearr_31345[(27)] = inst_31283);

(statearr_31345[(21)] = inst_31250);

return statearr_31345;
})();
var statearr_31346_31414 = state_31308__$1;
(statearr_31346_31414[(2)] = null);

(statearr_31346_31414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (43))){
var state_31308__$1 = state_31308;
var statearr_31347_31415 = state_31308__$1;
(statearr_31347_31415[(2)] = null);

(statearr_31347_31415[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (29))){
var inst_31292 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31348_31416 = state_31308__$1;
(statearr_31348_31416[(2)] = inst_31292);

(statearr_31348_31416[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (44))){
var inst_31301 = (state_31308[(2)]);
var state_31308__$1 = (function (){var statearr_31349 = state_31308;
(statearr_31349[(28)] = inst_31301);

return statearr_31349;
})();
var statearr_31350_31417 = state_31308__$1;
(statearr_31350_31417[(2)] = null);

(statearr_31350_31417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (6))){
var inst_31240 = (state_31308[(29)]);
var inst_31239 = cljs.core.deref.call(null,cs);
var inst_31240__$1 = cljs.core.keys.call(null,inst_31239);
var inst_31241 = cljs.core.count.call(null,inst_31240__$1);
var inst_31242 = cljs.core.reset_BANG_.call(null,dctr,inst_31241);
var inst_31247 = cljs.core.seq.call(null,inst_31240__$1);
var inst_31248 = inst_31247;
var inst_31249 = null;
var inst_31250 = (0);
var inst_31251 = (0);
var state_31308__$1 = (function (){var statearr_31351 = state_31308;
(statearr_31351[(29)] = inst_31240__$1);

(statearr_31351[(9)] = inst_31251);

(statearr_31351[(10)] = inst_31249);

(statearr_31351[(20)] = inst_31248);

(statearr_31351[(30)] = inst_31242);

(statearr_31351[(21)] = inst_31250);

return statearr_31351;
})();
var statearr_31352_31418 = state_31308__$1;
(statearr_31352_31418[(2)] = null);

(statearr_31352_31418[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (28))){
var inst_31267 = (state_31308[(25)]);
var inst_31248 = (state_31308[(20)]);
var inst_31267__$1 = cljs.core.seq.call(null,inst_31248);
var state_31308__$1 = (function (){var statearr_31353 = state_31308;
(statearr_31353[(25)] = inst_31267__$1);

return statearr_31353;
})();
if(inst_31267__$1){
var statearr_31354_31419 = state_31308__$1;
(statearr_31354_31419[(1)] = (33));

} else {
var statearr_31355_31420 = state_31308__$1;
(statearr_31355_31420[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (25))){
var inst_31251 = (state_31308[(9)]);
var inst_31250 = (state_31308[(21)]);
var inst_31253 = (inst_31251 < inst_31250);
var inst_31254 = inst_31253;
var state_31308__$1 = state_31308;
if(cljs.core.truth_(inst_31254)){
var statearr_31356_31421 = state_31308__$1;
(statearr_31356_31421[(1)] = (27));

} else {
var statearr_31357_31422 = state_31308__$1;
(statearr_31357_31422[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (34))){
var state_31308__$1 = state_31308;
var statearr_31358_31423 = state_31308__$1;
(statearr_31358_31423[(2)] = null);

(statearr_31358_31423[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (17))){
var state_31308__$1 = state_31308;
var statearr_31359_31424 = state_31308__$1;
(statearr_31359_31424[(2)] = null);

(statearr_31359_31424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (3))){
var inst_31306 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31308__$1,inst_31306);
} else {
if((state_val_31309 === (12))){
var inst_31235 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31360_31425 = state_31308__$1;
(statearr_31360_31425[(2)] = inst_31235);

(statearr_31360_31425[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (2))){
var state_31308__$1 = state_31308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31308__$1,(4),ch);
} else {
if((state_val_31309 === (23))){
var state_31308__$1 = state_31308;
var statearr_31361_31426 = state_31308__$1;
(statearr_31361_31426[(2)] = null);

(statearr_31361_31426[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (35))){
var inst_31290 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31362_31427 = state_31308__$1;
(statearr_31362_31427[(2)] = inst_31290);

(statearr_31362_31427[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (19))){
var inst_31207 = (state_31308[(7)]);
var inst_31211 = cljs.core.chunk_first.call(null,inst_31207);
var inst_31212 = cljs.core.chunk_rest.call(null,inst_31207);
var inst_31213 = cljs.core.count.call(null,inst_31211);
var inst_31185 = inst_31212;
var inst_31186 = inst_31211;
var inst_31187 = inst_31213;
var inst_31188 = (0);
var state_31308__$1 = (function (){var statearr_31363 = state_31308;
(statearr_31363[(13)] = inst_31187);

(statearr_31363[(14)] = inst_31188);

(statearr_31363[(15)] = inst_31186);

(statearr_31363[(17)] = inst_31185);

return statearr_31363;
})();
var statearr_31364_31428 = state_31308__$1;
(statearr_31364_31428[(2)] = null);

(statearr_31364_31428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (11))){
var inst_31207 = (state_31308[(7)]);
var inst_31185 = (state_31308[(17)]);
var inst_31207__$1 = cljs.core.seq.call(null,inst_31185);
var state_31308__$1 = (function (){var statearr_31365 = state_31308;
(statearr_31365[(7)] = inst_31207__$1);

return statearr_31365;
})();
if(inst_31207__$1){
var statearr_31366_31429 = state_31308__$1;
(statearr_31366_31429[(1)] = (16));

} else {
var statearr_31367_31430 = state_31308__$1;
(statearr_31367_31430[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (9))){
var inst_31237 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31368_31431 = state_31308__$1;
(statearr_31368_31431[(2)] = inst_31237);

(statearr_31368_31431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (5))){
var inst_31183 = cljs.core.deref.call(null,cs);
var inst_31184 = cljs.core.seq.call(null,inst_31183);
var inst_31185 = inst_31184;
var inst_31186 = null;
var inst_31187 = (0);
var inst_31188 = (0);
var state_31308__$1 = (function (){var statearr_31369 = state_31308;
(statearr_31369[(13)] = inst_31187);

(statearr_31369[(14)] = inst_31188);

(statearr_31369[(15)] = inst_31186);

(statearr_31369[(17)] = inst_31185);

return statearr_31369;
})();
var statearr_31370_31432 = state_31308__$1;
(statearr_31370_31432[(2)] = null);

(statearr_31370_31432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (14))){
var state_31308__$1 = state_31308;
var statearr_31371_31433 = state_31308__$1;
(statearr_31371_31433[(2)] = null);

(statearr_31371_31433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (45))){
var inst_31298 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31372_31434 = state_31308__$1;
(statearr_31372_31434[(2)] = inst_31298);

(statearr_31372_31434[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (26))){
var inst_31240 = (state_31308[(29)]);
var inst_31294 = (state_31308[(2)]);
var inst_31295 = cljs.core.seq.call(null,inst_31240);
var state_31308__$1 = (function (){var statearr_31373 = state_31308;
(statearr_31373[(31)] = inst_31294);

return statearr_31373;
})();
if(inst_31295){
var statearr_31374_31435 = state_31308__$1;
(statearr_31374_31435[(1)] = (42));

} else {
var statearr_31375_31436 = state_31308__$1;
(statearr_31375_31436[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (16))){
var inst_31207 = (state_31308[(7)]);
var inst_31209 = cljs.core.chunked_seq_QMARK_.call(null,inst_31207);
var state_31308__$1 = state_31308;
if(inst_31209){
var statearr_31376_31437 = state_31308__$1;
(statearr_31376_31437[(1)] = (19));

} else {
var statearr_31377_31438 = state_31308__$1;
(statearr_31377_31438[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (38))){
var inst_31287 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31378_31439 = state_31308__$1;
(statearr_31378_31439[(2)] = inst_31287);

(statearr_31378_31439[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (30))){
var state_31308__$1 = state_31308;
var statearr_31379_31440 = state_31308__$1;
(statearr_31379_31440[(2)] = null);

(statearr_31379_31440[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (10))){
var inst_31188 = (state_31308[(14)]);
var inst_31186 = (state_31308[(15)]);
var inst_31196 = cljs.core._nth.call(null,inst_31186,inst_31188);
var inst_31197 = cljs.core.nth.call(null,inst_31196,(0),null);
var inst_31198 = cljs.core.nth.call(null,inst_31196,(1),null);
var state_31308__$1 = (function (){var statearr_31380 = state_31308;
(statearr_31380[(26)] = inst_31197);

return statearr_31380;
})();
if(cljs.core.truth_(inst_31198)){
var statearr_31381_31441 = state_31308__$1;
(statearr_31381_31441[(1)] = (13));

} else {
var statearr_31382_31442 = state_31308__$1;
(statearr_31382_31442[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (18))){
var inst_31233 = (state_31308[(2)]);
var state_31308__$1 = state_31308;
var statearr_31383_31443 = state_31308__$1;
(statearr_31383_31443[(2)] = inst_31233);

(statearr_31383_31443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (42))){
var state_31308__$1 = state_31308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31308__$1,(45),dchan);
} else {
if((state_val_31309 === (37))){
var inst_31267 = (state_31308[(25)]);
var inst_31176 = (state_31308[(11)]);
var inst_31276 = (state_31308[(23)]);
var inst_31276__$1 = cljs.core.first.call(null,inst_31267);
var inst_31277 = cljs.core.async.put_BANG_.call(null,inst_31276__$1,inst_31176,done);
var state_31308__$1 = (function (){var statearr_31384 = state_31308;
(statearr_31384[(23)] = inst_31276__$1);

return statearr_31384;
})();
if(cljs.core.truth_(inst_31277)){
var statearr_31385_31444 = state_31308__$1;
(statearr_31385_31444[(1)] = (39));

} else {
var statearr_31386_31445 = state_31308__$1;
(statearr_31386_31445[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31309 === (8))){
var inst_31187 = (state_31308[(13)]);
var inst_31188 = (state_31308[(14)]);
var inst_31190 = (inst_31188 < inst_31187);
var inst_31191 = inst_31190;
var state_31308__$1 = state_31308;
if(cljs.core.truth_(inst_31191)){
var statearr_31387_31446 = state_31308__$1;
(statearr_31387_31446[(1)] = (10));

} else {
var statearr_31388_31447 = state_31308__$1;
(statearr_31388_31447[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto___31393,cs,m,dchan,dctr,done))
;
return ((function (switch__30500__auto__,c__30588__auto___31393,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30501__auto__ = null;
var cljs$core$async$mult_$_state_machine__30501__auto____0 = (function (){
var statearr_31389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31389[(0)] = cljs$core$async$mult_$_state_machine__30501__auto__);

(statearr_31389[(1)] = (1));

return statearr_31389;
});
var cljs$core$async$mult_$_state_machine__30501__auto____1 = (function (state_31308){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_31308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31390){if((e31390 instanceof Object)){
var ex__30504__auto__ = e31390;
var statearr_31391_31448 = state_31308;
(statearr_31391_31448[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31449 = state_31308;
state_31308 = G__31449;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30501__auto__ = function(state_31308){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30501__auto____1.call(this,state_31308);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30501__auto____0;
cljs$core$async$mult_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30501__auto____1;
return cljs$core$async$mult_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___31393,cs,m,dchan,dctr,done))
})();
var state__30590__auto__ = (function (){var statearr_31392 = f__30589__auto__.call(null);
(statearr_31392[(6)] = c__30588__auto___31393);

return statearr_31392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___31393,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31451 = arguments.length;
switch (G__31451) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m);
} else {
var m__28673__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,state_map);
} else {
var m__28673__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,mode);
} else {
var m__28673__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___31463 = arguments.length;
var i__29159__auto___31464 = (0);
while(true){
if((i__29159__auto___31464 < len__29158__auto___31463)){
args__29165__auto__.push((arguments[i__29159__auto___31464]));

var G__31465 = (i__29159__auto___31464 + (1));
i__29159__auto___31464 = G__31465;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((3) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29166__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31457){
var map__31458 = p__31457;
var map__31458__$1 = ((((!((map__31458 == null)))?((((map__31458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31458):map__31458);
var opts = map__31458__$1;
var statearr_31460_31466 = state;
(statearr_31460_31466[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31458,map__31458__$1,opts){
return (function (val){
var statearr_31461_31467 = state;
(statearr_31461_31467[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31458,map__31458__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31462_31468 = state;
(statearr_31462_31468[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31453){
var G__31454 = cljs.core.first.call(null,seq31453);
var seq31453__$1 = cljs.core.next.call(null,seq31453);
var G__31455 = cljs.core.first.call(null,seq31453__$1);
var seq31453__$2 = cljs.core.next.call(null,seq31453__$1);
var G__31456 = cljs.core.first.call(null,seq31453__$2);
var seq31453__$3 = cljs.core.next.call(null,seq31453__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31454,G__31455,G__31456,seq31453__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31469 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31469 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31470){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31470 = meta31470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31471,meta31470__$1){
var self__ = this;
var _31471__$1 = this;
return (new cljs.core.async.t_cljs$core$async31469(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31470__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31471){
var self__ = this;
var _31471__$1 = this;
return self__.meta31470;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31469.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31469.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31469.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31469.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31469.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31469.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31469.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31469.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31469.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31470","meta31470",-895257945,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31469.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31469";

cljs.core.async.t_cljs$core$async31469.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async31469");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31469 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31469(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31470){
return (new cljs.core.async.t_cljs$core$async31469(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31470));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31469(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30588__auto___31633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___31633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___31633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31573){
var state_val_31574 = (state_31573[(1)]);
if((state_val_31574 === (7))){
var inst_31488 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31575_31634 = state_31573__$1;
(statearr_31575_31634[(2)] = inst_31488);

(statearr_31575_31634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (20))){
var inst_31500 = (state_31573[(7)]);
var state_31573__$1 = state_31573;
var statearr_31576_31635 = state_31573__$1;
(statearr_31576_31635[(2)] = inst_31500);

(statearr_31576_31635[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (27))){
var state_31573__$1 = state_31573;
var statearr_31577_31636 = state_31573__$1;
(statearr_31577_31636[(2)] = null);

(statearr_31577_31636[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (1))){
var inst_31475 = (state_31573[(8)]);
var inst_31475__$1 = calc_state.call(null);
var inst_31477 = (inst_31475__$1 == null);
var inst_31478 = cljs.core.not.call(null,inst_31477);
var state_31573__$1 = (function (){var statearr_31578 = state_31573;
(statearr_31578[(8)] = inst_31475__$1);

return statearr_31578;
})();
if(inst_31478){
var statearr_31579_31637 = state_31573__$1;
(statearr_31579_31637[(1)] = (2));

} else {
var statearr_31580_31638 = state_31573__$1;
(statearr_31580_31638[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (24))){
var inst_31533 = (state_31573[(9)]);
var inst_31547 = (state_31573[(10)]);
var inst_31524 = (state_31573[(11)]);
var inst_31547__$1 = inst_31524.call(null,inst_31533);
var state_31573__$1 = (function (){var statearr_31581 = state_31573;
(statearr_31581[(10)] = inst_31547__$1);

return statearr_31581;
})();
if(cljs.core.truth_(inst_31547__$1)){
var statearr_31582_31639 = state_31573__$1;
(statearr_31582_31639[(1)] = (29));

} else {
var statearr_31583_31640 = state_31573__$1;
(statearr_31583_31640[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (4))){
var inst_31491 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
if(cljs.core.truth_(inst_31491)){
var statearr_31584_31641 = state_31573__$1;
(statearr_31584_31641[(1)] = (8));

} else {
var statearr_31585_31642 = state_31573__$1;
(statearr_31585_31642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (15))){
var inst_31518 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
if(cljs.core.truth_(inst_31518)){
var statearr_31586_31643 = state_31573__$1;
(statearr_31586_31643[(1)] = (19));

} else {
var statearr_31587_31644 = state_31573__$1;
(statearr_31587_31644[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (21))){
var inst_31523 = (state_31573[(12)]);
var inst_31523__$1 = (state_31573[(2)]);
var inst_31524 = cljs.core.get.call(null,inst_31523__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31525 = cljs.core.get.call(null,inst_31523__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31526 = cljs.core.get.call(null,inst_31523__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31573__$1 = (function (){var statearr_31588 = state_31573;
(statearr_31588[(13)] = inst_31525);

(statearr_31588[(12)] = inst_31523__$1);

(statearr_31588[(11)] = inst_31524);

return statearr_31588;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31573__$1,(22),inst_31526);
} else {
if((state_val_31574 === (31))){
var inst_31555 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
if(cljs.core.truth_(inst_31555)){
var statearr_31589_31645 = state_31573__$1;
(statearr_31589_31645[(1)] = (32));

} else {
var statearr_31590_31646 = state_31573__$1;
(statearr_31590_31646[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (32))){
var inst_31532 = (state_31573[(14)]);
var state_31573__$1 = state_31573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31573__$1,(35),out,inst_31532);
} else {
if((state_val_31574 === (33))){
var inst_31523 = (state_31573[(12)]);
var inst_31500 = inst_31523;
var state_31573__$1 = (function (){var statearr_31591 = state_31573;
(statearr_31591[(7)] = inst_31500);

return statearr_31591;
})();
var statearr_31592_31647 = state_31573__$1;
(statearr_31592_31647[(2)] = null);

(statearr_31592_31647[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (13))){
var inst_31500 = (state_31573[(7)]);
var inst_31507 = inst_31500.cljs$lang$protocol_mask$partition0$;
var inst_31508 = (inst_31507 & (64));
var inst_31509 = inst_31500.cljs$core$ISeq$;
var inst_31510 = (cljs.core.PROTOCOL_SENTINEL === inst_31509);
var inst_31511 = (inst_31508) || (inst_31510);
var state_31573__$1 = state_31573;
if(cljs.core.truth_(inst_31511)){
var statearr_31593_31648 = state_31573__$1;
(statearr_31593_31648[(1)] = (16));

} else {
var statearr_31594_31649 = state_31573__$1;
(statearr_31594_31649[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (22))){
var inst_31533 = (state_31573[(9)]);
var inst_31532 = (state_31573[(14)]);
var inst_31531 = (state_31573[(2)]);
var inst_31532__$1 = cljs.core.nth.call(null,inst_31531,(0),null);
var inst_31533__$1 = cljs.core.nth.call(null,inst_31531,(1),null);
var inst_31534 = (inst_31532__$1 == null);
var inst_31535 = cljs.core._EQ_.call(null,inst_31533__$1,change);
var inst_31536 = (inst_31534) || (inst_31535);
var state_31573__$1 = (function (){var statearr_31595 = state_31573;
(statearr_31595[(9)] = inst_31533__$1);

(statearr_31595[(14)] = inst_31532__$1);

return statearr_31595;
})();
if(cljs.core.truth_(inst_31536)){
var statearr_31596_31650 = state_31573__$1;
(statearr_31596_31650[(1)] = (23));

} else {
var statearr_31597_31651 = state_31573__$1;
(statearr_31597_31651[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (36))){
var inst_31523 = (state_31573[(12)]);
var inst_31500 = inst_31523;
var state_31573__$1 = (function (){var statearr_31598 = state_31573;
(statearr_31598[(7)] = inst_31500);

return statearr_31598;
})();
var statearr_31599_31652 = state_31573__$1;
(statearr_31599_31652[(2)] = null);

(statearr_31599_31652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (29))){
var inst_31547 = (state_31573[(10)]);
var state_31573__$1 = state_31573;
var statearr_31600_31653 = state_31573__$1;
(statearr_31600_31653[(2)] = inst_31547);

(statearr_31600_31653[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (6))){
var state_31573__$1 = state_31573;
var statearr_31601_31654 = state_31573__$1;
(statearr_31601_31654[(2)] = false);

(statearr_31601_31654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (28))){
var inst_31543 = (state_31573[(2)]);
var inst_31544 = calc_state.call(null);
var inst_31500 = inst_31544;
var state_31573__$1 = (function (){var statearr_31602 = state_31573;
(statearr_31602[(7)] = inst_31500);

(statearr_31602[(15)] = inst_31543);

return statearr_31602;
})();
var statearr_31603_31655 = state_31573__$1;
(statearr_31603_31655[(2)] = null);

(statearr_31603_31655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (25))){
var inst_31569 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31604_31656 = state_31573__$1;
(statearr_31604_31656[(2)] = inst_31569);

(statearr_31604_31656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (34))){
var inst_31567 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31605_31657 = state_31573__$1;
(statearr_31605_31657[(2)] = inst_31567);

(statearr_31605_31657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (17))){
var state_31573__$1 = state_31573;
var statearr_31606_31658 = state_31573__$1;
(statearr_31606_31658[(2)] = false);

(statearr_31606_31658[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (3))){
var state_31573__$1 = state_31573;
var statearr_31607_31659 = state_31573__$1;
(statearr_31607_31659[(2)] = false);

(statearr_31607_31659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (12))){
var inst_31571 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31573__$1,inst_31571);
} else {
if((state_val_31574 === (2))){
var inst_31475 = (state_31573[(8)]);
var inst_31480 = inst_31475.cljs$lang$protocol_mask$partition0$;
var inst_31481 = (inst_31480 & (64));
var inst_31482 = inst_31475.cljs$core$ISeq$;
var inst_31483 = (cljs.core.PROTOCOL_SENTINEL === inst_31482);
var inst_31484 = (inst_31481) || (inst_31483);
var state_31573__$1 = state_31573;
if(cljs.core.truth_(inst_31484)){
var statearr_31608_31660 = state_31573__$1;
(statearr_31608_31660[(1)] = (5));

} else {
var statearr_31609_31661 = state_31573__$1;
(statearr_31609_31661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (23))){
var inst_31532 = (state_31573[(14)]);
var inst_31538 = (inst_31532 == null);
var state_31573__$1 = state_31573;
if(cljs.core.truth_(inst_31538)){
var statearr_31610_31662 = state_31573__$1;
(statearr_31610_31662[(1)] = (26));

} else {
var statearr_31611_31663 = state_31573__$1;
(statearr_31611_31663[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (35))){
var inst_31558 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
if(cljs.core.truth_(inst_31558)){
var statearr_31612_31664 = state_31573__$1;
(statearr_31612_31664[(1)] = (36));

} else {
var statearr_31613_31665 = state_31573__$1;
(statearr_31613_31665[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (19))){
var inst_31500 = (state_31573[(7)]);
var inst_31520 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31500);
var state_31573__$1 = state_31573;
var statearr_31614_31666 = state_31573__$1;
(statearr_31614_31666[(2)] = inst_31520);

(statearr_31614_31666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (11))){
var inst_31500 = (state_31573[(7)]);
var inst_31504 = (inst_31500 == null);
var inst_31505 = cljs.core.not.call(null,inst_31504);
var state_31573__$1 = state_31573;
if(inst_31505){
var statearr_31615_31667 = state_31573__$1;
(statearr_31615_31667[(1)] = (13));

} else {
var statearr_31616_31668 = state_31573__$1;
(statearr_31616_31668[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (9))){
var inst_31475 = (state_31573[(8)]);
var state_31573__$1 = state_31573;
var statearr_31617_31669 = state_31573__$1;
(statearr_31617_31669[(2)] = inst_31475);

(statearr_31617_31669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (5))){
var state_31573__$1 = state_31573;
var statearr_31618_31670 = state_31573__$1;
(statearr_31618_31670[(2)] = true);

(statearr_31618_31670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (14))){
var state_31573__$1 = state_31573;
var statearr_31619_31671 = state_31573__$1;
(statearr_31619_31671[(2)] = false);

(statearr_31619_31671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (26))){
var inst_31533 = (state_31573[(9)]);
var inst_31540 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31533);
var state_31573__$1 = state_31573;
var statearr_31620_31672 = state_31573__$1;
(statearr_31620_31672[(2)] = inst_31540);

(statearr_31620_31672[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (16))){
var state_31573__$1 = state_31573;
var statearr_31621_31673 = state_31573__$1;
(statearr_31621_31673[(2)] = true);

(statearr_31621_31673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (38))){
var inst_31563 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31622_31674 = state_31573__$1;
(statearr_31622_31674[(2)] = inst_31563);

(statearr_31622_31674[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (30))){
var inst_31525 = (state_31573[(13)]);
var inst_31533 = (state_31573[(9)]);
var inst_31524 = (state_31573[(11)]);
var inst_31550 = cljs.core.empty_QMARK_.call(null,inst_31524);
var inst_31551 = inst_31525.call(null,inst_31533);
var inst_31552 = cljs.core.not.call(null,inst_31551);
var inst_31553 = (inst_31550) && (inst_31552);
var state_31573__$1 = state_31573;
var statearr_31623_31675 = state_31573__$1;
(statearr_31623_31675[(2)] = inst_31553);

(statearr_31623_31675[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (10))){
var inst_31475 = (state_31573[(8)]);
var inst_31496 = (state_31573[(2)]);
var inst_31497 = cljs.core.get.call(null,inst_31496,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31498 = cljs.core.get.call(null,inst_31496,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31499 = cljs.core.get.call(null,inst_31496,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31500 = inst_31475;
var state_31573__$1 = (function (){var statearr_31624 = state_31573;
(statearr_31624[(7)] = inst_31500);

(statearr_31624[(16)] = inst_31499);

(statearr_31624[(17)] = inst_31497);

(statearr_31624[(18)] = inst_31498);

return statearr_31624;
})();
var statearr_31625_31676 = state_31573__$1;
(statearr_31625_31676[(2)] = null);

(statearr_31625_31676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (18))){
var inst_31515 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31626_31677 = state_31573__$1;
(statearr_31626_31677[(2)] = inst_31515);

(statearr_31626_31677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (37))){
var state_31573__$1 = state_31573;
var statearr_31627_31678 = state_31573__$1;
(statearr_31627_31678[(2)] = null);

(statearr_31627_31678[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (8))){
var inst_31475 = (state_31573[(8)]);
var inst_31493 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31475);
var state_31573__$1 = state_31573;
var statearr_31628_31679 = state_31573__$1;
(statearr_31628_31679[(2)] = inst_31493);

(statearr_31628_31679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto___31633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30500__auto__,c__30588__auto___31633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30501__auto__ = null;
var cljs$core$async$mix_$_state_machine__30501__auto____0 = (function (){
var statearr_31629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31629[(0)] = cljs$core$async$mix_$_state_machine__30501__auto__);

(statearr_31629[(1)] = (1));

return statearr_31629;
});
var cljs$core$async$mix_$_state_machine__30501__auto____1 = (function (state_31573){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_31573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31630){if((e31630 instanceof Object)){
var ex__30504__auto__ = e31630;
var statearr_31631_31680 = state_31573;
(statearr_31631_31680[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31681 = state_31573;
state_31573 = G__31681;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30501__auto__ = function(state_31573){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30501__auto____1.call(this,state_31573);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30501__auto____0;
cljs$core$async$mix_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30501__auto____1;
return cljs$core$async$mix_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___31633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30590__auto__ = (function (){var statearr_31632 = f__30589__auto__.call(null);
(statearr_31632[(6)] = c__30588__auto___31633);

return statearr_31632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___31633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28673__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31683 = arguments.length;
switch (G__31683) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31687 = arguments.length;
switch (G__31687) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27989__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27989__auto__,mults){
return (function (p1__31685_SHARP_){
if(cljs.core.truth_(p1__31685_SHARP_.call(null,topic))){
return p1__31685_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31685_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27989__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31688 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31688 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31689){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31689 = meta31689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31690,meta31689__$1){
var self__ = this;
var _31690__$1 = this;
return (new cljs.core.async.t_cljs$core$async31688(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31689__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31690){
var self__ = this;
var _31690__$1 = this;
return self__.meta31689;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31688.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31688.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31688.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31688.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31688.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31688.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31688.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31688.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31689","meta31689",-1224307442,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31688.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31688";

cljs.core.async.t_cljs$core$async31688.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async31688");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31688 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31688(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31689){
return (new cljs.core.async.t_cljs$core$async31688(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31689));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31688(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30588__auto___31808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___31808,mults,ensure_mult,p){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___31808,mults,ensure_mult,p){
return (function (state_31762){
var state_val_31763 = (state_31762[(1)]);
if((state_val_31763 === (7))){
var inst_31758 = (state_31762[(2)]);
var state_31762__$1 = state_31762;
var statearr_31764_31809 = state_31762__$1;
(statearr_31764_31809[(2)] = inst_31758);

(statearr_31764_31809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (20))){
var state_31762__$1 = state_31762;
var statearr_31765_31810 = state_31762__$1;
(statearr_31765_31810[(2)] = null);

(statearr_31765_31810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (1))){
var state_31762__$1 = state_31762;
var statearr_31766_31811 = state_31762__$1;
(statearr_31766_31811[(2)] = null);

(statearr_31766_31811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (24))){
var inst_31741 = (state_31762[(7)]);
var inst_31750 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31741);
var state_31762__$1 = state_31762;
var statearr_31767_31812 = state_31762__$1;
(statearr_31767_31812[(2)] = inst_31750);

(statearr_31767_31812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (4))){
var inst_31693 = (state_31762[(8)]);
var inst_31693__$1 = (state_31762[(2)]);
var inst_31694 = (inst_31693__$1 == null);
var state_31762__$1 = (function (){var statearr_31768 = state_31762;
(statearr_31768[(8)] = inst_31693__$1);

return statearr_31768;
})();
if(cljs.core.truth_(inst_31694)){
var statearr_31769_31813 = state_31762__$1;
(statearr_31769_31813[(1)] = (5));

} else {
var statearr_31770_31814 = state_31762__$1;
(statearr_31770_31814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (15))){
var inst_31735 = (state_31762[(2)]);
var state_31762__$1 = state_31762;
var statearr_31771_31815 = state_31762__$1;
(statearr_31771_31815[(2)] = inst_31735);

(statearr_31771_31815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (21))){
var inst_31755 = (state_31762[(2)]);
var state_31762__$1 = (function (){var statearr_31772 = state_31762;
(statearr_31772[(9)] = inst_31755);

return statearr_31772;
})();
var statearr_31773_31816 = state_31762__$1;
(statearr_31773_31816[(2)] = null);

(statearr_31773_31816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (13))){
var inst_31717 = (state_31762[(10)]);
var inst_31719 = cljs.core.chunked_seq_QMARK_.call(null,inst_31717);
var state_31762__$1 = state_31762;
if(inst_31719){
var statearr_31774_31817 = state_31762__$1;
(statearr_31774_31817[(1)] = (16));

} else {
var statearr_31775_31818 = state_31762__$1;
(statearr_31775_31818[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (22))){
var inst_31747 = (state_31762[(2)]);
var state_31762__$1 = state_31762;
if(cljs.core.truth_(inst_31747)){
var statearr_31776_31819 = state_31762__$1;
(statearr_31776_31819[(1)] = (23));

} else {
var statearr_31777_31820 = state_31762__$1;
(statearr_31777_31820[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (6))){
var inst_31741 = (state_31762[(7)]);
var inst_31743 = (state_31762[(11)]);
var inst_31693 = (state_31762[(8)]);
var inst_31741__$1 = topic_fn.call(null,inst_31693);
var inst_31742 = cljs.core.deref.call(null,mults);
var inst_31743__$1 = cljs.core.get.call(null,inst_31742,inst_31741__$1);
var state_31762__$1 = (function (){var statearr_31778 = state_31762;
(statearr_31778[(7)] = inst_31741__$1);

(statearr_31778[(11)] = inst_31743__$1);

return statearr_31778;
})();
if(cljs.core.truth_(inst_31743__$1)){
var statearr_31779_31821 = state_31762__$1;
(statearr_31779_31821[(1)] = (19));

} else {
var statearr_31780_31822 = state_31762__$1;
(statearr_31780_31822[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (25))){
var inst_31752 = (state_31762[(2)]);
var state_31762__$1 = state_31762;
var statearr_31781_31823 = state_31762__$1;
(statearr_31781_31823[(2)] = inst_31752);

(statearr_31781_31823[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (17))){
var inst_31717 = (state_31762[(10)]);
var inst_31726 = cljs.core.first.call(null,inst_31717);
var inst_31727 = cljs.core.async.muxch_STAR_.call(null,inst_31726);
var inst_31728 = cljs.core.async.close_BANG_.call(null,inst_31727);
var inst_31729 = cljs.core.next.call(null,inst_31717);
var inst_31703 = inst_31729;
var inst_31704 = null;
var inst_31705 = (0);
var inst_31706 = (0);
var state_31762__$1 = (function (){var statearr_31782 = state_31762;
(statearr_31782[(12)] = inst_31704);

(statearr_31782[(13)] = inst_31705);

(statearr_31782[(14)] = inst_31703);

(statearr_31782[(15)] = inst_31728);

(statearr_31782[(16)] = inst_31706);

return statearr_31782;
})();
var statearr_31783_31824 = state_31762__$1;
(statearr_31783_31824[(2)] = null);

(statearr_31783_31824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (3))){
var inst_31760 = (state_31762[(2)]);
var state_31762__$1 = state_31762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31762__$1,inst_31760);
} else {
if((state_val_31763 === (12))){
var inst_31737 = (state_31762[(2)]);
var state_31762__$1 = state_31762;
var statearr_31784_31825 = state_31762__$1;
(statearr_31784_31825[(2)] = inst_31737);

(statearr_31784_31825[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (2))){
var state_31762__$1 = state_31762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31762__$1,(4),ch);
} else {
if((state_val_31763 === (23))){
var state_31762__$1 = state_31762;
var statearr_31785_31826 = state_31762__$1;
(statearr_31785_31826[(2)] = null);

(statearr_31785_31826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (19))){
var inst_31743 = (state_31762[(11)]);
var inst_31693 = (state_31762[(8)]);
var inst_31745 = cljs.core.async.muxch_STAR_.call(null,inst_31743);
var state_31762__$1 = state_31762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31762__$1,(22),inst_31745,inst_31693);
} else {
if((state_val_31763 === (11))){
var inst_31717 = (state_31762[(10)]);
var inst_31703 = (state_31762[(14)]);
var inst_31717__$1 = cljs.core.seq.call(null,inst_31703);
var state_31762__$1 = (function (){var statearr_31786 = state_31762;
(statearr_31786[(10)] = inst_31717__$1);

return statearr_31786;
})();
if(inst_31717__$1){
var statearr_31787_31827 = state_31762__$1;
(statearr_31787_31827[(1)] = (13));

} else {
var statearr_31788_31828 = state_31762__$1;
(statearr_31788_31828[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (9))){
var inst_31739 = (state_31762[(2)]);
var state_31762__$1 = state_31762;
var statearr_31789_31829 = state_31762__$1;
(statearr_31789_31829[(2)] = inst_31739);

(statearr_31789_31829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (5))){
var inst_31700 = cljs.core.deref.call(null,mults);
var inst_31701 = cljs.core.vals.call(null,inst_31700);
var inst_31702 = cljs.core.seq.call(null,inst_31701);
var inst_31703 = inst_31702;
var inst_31704 = null;
var inst_31705 = (0);
var inst_31706 = (0);
var state_31762__$1 = (function (){var statearr_31790 = state_31762;
(statearr_31790[(12)] = inst_31704);

(statearr_31790[(13)] = inst_31705);

(statearr_31790[(14)] = inst_31703);

(statearr_31790[(16)] = inst_31706);

return statearr_31790;
})();
var statearr_31791_31830 = state_31762__$1;
(statearr_31791_31830[(2)] = null);

(statearr_31791_31830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (14))){
var state_31762__$1 = state_31762;
var statearr_31795_31831 = state_31762__$1;
(statearr_31795_31831[(2)] = null);

(statearr_31795_31831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (16))){
var inst_31717 = (state_31762[(10)]);
var inst_31721 = cljs.core.chunk_first.call(null,inst_31717);
var inst_31722 = cljs.core.chunk_rest.call(null,inst_31717);
var inst_31723 = cljs.core.count.call(null,inst_31721);
var inst_31703 = inst_31722;
var inst_31704 = inst_31721;
var inst_31705 = inst_31723;
var inst_31706 = (0);
var state_31762__$1 = (function (){var statearr_31796 = state_31762;
(statearr_31796[(12)] = inst_31704);

(statearr_31796[(13)] = inst_31705);

(statearr_31796[(14)] = inst_31703);

(statearr_31796[(16)] = inst_31706);

return statearr_31796;
})();
var statearr_31797_31832 = state_31762__$1;
(statearr_31797_31832[(2)] = null);

(statearr_31797_31832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (10))){
var inst_31704 = (state_31762[(12)]);
var inst_31705 = (state_31762[(13)]);
var inst_31703 = (state_31762[(14)]);
var inst_31706 = (state_31762[(16)]);
var inst_31711 = cljs.core._nth.call(null,inst_31704,inst_31706);
var inst_31712 = cljs.core.async.muxch_STAR_.call(null,inst_31711);
var inst_31713 = cljs.core.async.close_BANG_.call(null,inst_31712);
var inst_31714 = (inst_31706 + (1));
var tmp31792 = inst_31704;
var tmp31793 = inst_31705;
var tmp31794 = inst_31703;
var inst_31703__$1 = tmp31794;
var inst_31704__$1 = tmp31792;
var inst_31705__$1 = tmp31793;
var inst_31706__$1 = inst_31714;
var state_31762__$1 = (function (){var statearr_31798 = state_31762;
(statearr_31798[(12)] = inst_31704__$1);

(statearr_31798[(13)] = inst_31705__$1);

(statearr_31798[(14)] = inst_31703__$1);

(statearr_31798[(17)] = inst_31713);

(statearr_31798[(16)] = inst_31706__$1);

return statearr_31798;
})();
var statearr_31799_31833 = state_31762__$1;
(statearr_31799_31833[(2)] = null);

(statearr_31799_31833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (18))){
var inst_31732 = (state_31762[(2)]);
var state_31762__$1 = state_31762;
var statearr_31800_31834 = state_31762__$1;
(statearr_31800_31834[(2)] = inst_31732);

(statearr_31800_31834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31763 === (8))){
var inst_31705 = (state_31762[(13)]);
var inst_31706 = (state_31762[(16)]);
var inst_31708 = (inst_31706 < inst_31705);
var inst_31709 = inst_31708;
var state_31762__$1 = state_31762;
if(cljs.core.truth_(inst_31709)){
var statearr_31801_31835 = state_31762__$1;
(statearr_31801_31835[(1)] = (10));

} else {
var statearr_31802_31836 = state_31762__$1;
(statearr_31802_31836[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto___31808,mults,ensure_mult,p))
;
return ((function (switch__30500__auto__,c__30588__auto___31808,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_31803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31803[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_31803[(1)] = (1));

return statearr_31803;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_31762){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_31762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31804){if((e31804 instanceof Object)){
var ex__30504__auto__ = e31804;
var statearr_31805_31837 = state_31762;
(statearr_31805_31837[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31838 = state_31762;
state_31762 = G__31838;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_31762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_31762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___31808,mults,ensure_mult,p))
})();
var state__30590__auto__ = (function (){var statearr_31806 = f__30589__auto__.call(null);
(statearr_31806[(6)] = c__30588__auto___31808);

return statearr_31806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___31808,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31840 = arguments.length;
switch (G__31840) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31843 = arguments.length;
switch (G__31843) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31846 = arguments.length;
switch (G__31846) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30588__auto___31913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___31913,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___31913,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31885){
var state_val_31886 = (state_31885[(1)]);
if((state_val_31886 === (7))){
var state_31885__$1 = state_31885;
var statearr_31887_31914 = state_31885__$1;
(statearr_31887_31914[(2)] = null);

(statearr_31887_31914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (1))){
var state_31885__$1 = state_31885;
var statearr_31888_31915 = state_31885__$1;
(statearr_31888_31915[(2)] = null);

(statearr_31888_31915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (4))){
var inst_31849 = (state_31885[(7)]);
var inst_31851 = (inst_31849 < cnt);
var state_31885__$1 = state_31885;
if(cljs.core.truth_(inst_31851)){
var statearr_31889_31916 = state_31885__$1;
(statearr_31889_31916[(1)] = (6));

} else {
var statearr_31890_31917 = state_31885__$1;
(statearr_31890_31917[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (15))){
var inst_31881 = (state_31885[(2)]);
var state_31885__$1 = state_31885;
var statearr_31891_31918 = state_31885__$1;
(statearr_31891_31918[(2)] = inst_31881);

(statearr_31891_31918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (13))){
var inst_31874 = cljs.core.async.close_BANG_.call(null,out);
var state_31885__$1 = state_31885;
var statearr_31892_31919 = state_31885__$1;
(statearr_31892_31919[(2)] = inst_31874);

(statearr_31892_31919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (6))){
var state_31885__$1 = state_31885;
var statearr_31893_31920 = state_31885__$1;
(statearr_31893_31920[(2)] = null);

(statearr_31893_31920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (3))){
var inst_31883 = (state_31885[(2)]);
var state_31885__$1 = state_31885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31885__$1,inst_31883);
} else {
if((state_val_31886 === (12))){
var inst_31871 = (state_31885[(8)]);
var inst_31871__$1 = (state_31885[(2)]);
var inst_31872 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31871__$1);
var state_31885__$1 = (function (){var statearr_31894 = state_31885;
(statearr_31894[(8)] = inst_31871__$1);

return statearr_31894;
})();
if(cljs.core.truth_(inst_31872)){
var statearr_31895_31921 = state_31885__$1;
(statearr_31895_31921[(1)] = (13));

} else {
var statearr_31896_31922 = state_31885__$1;
(statearr_31896_31922[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (2))){
var inst_31848 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31849 = (0);
var state_31885__$1 = (function (){var statearr_31897 = state_31885;
(statearr_31897[(7)] = inst_31849);

(statearr_31897[(9)] = inst_31848);

return statearr_31897;
})();
var statearr_31898_31923 = state_31885__$1;
(statearr_31898_31923[(2)] = null);

(statearr_31898_31923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (11))){
var inst_31849 = (state_31885[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31885,(10),Object,null,(9));
var inst_31858 = chs__$1.call(null,inst_31849);
var inst_31859 = done.call(null,inst_31849);
var inst_31860 = cljs.core.async.take_BANG_.call(null,inst_31858,inst_31859);
var state_31885__$1 = state_31885;
var statearr_31899_31924 = state_31885__$1;
(statearr_31899_31924[(2)] = inst_31860);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31885__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (9))){
var inst_31849 = (state_31885[(7)]);
var inst_31862 = (state_31885[(2)]);
var inst_31863 = (inst_31849 + (1));
var inst_31849__$1 = inst_31863;
var state_31885__$1 = (function (){var statearr_31900 = state_31885;
(statearr_31900[(10)] = inst_31862);

(statearr_31900[(7)] = inst_31849__$1);

return statearr_31900;
})();
var statearr_31901_31925 = state_31885__$1;
(statearr_31901_31925[(2)] = null);

(statearr_31901_31925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (5))){
var inst_31869 = (state_31885[(2)]);
var state_31885__$1 = (function (){var statearr_31902 = state_31885;
(statearr_31902[(11)] = inst_31869);

return statearr_31902;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31885__$1,(12),dchan);
} else {
if((state_val_31886 === (14))){
var inst_31871 = (state_31885[(8)]);
var inst_31876 = cljs.core.apply.call(null,f,inst_31871);
var state_31885__$1 = state_31885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31885__$1,(16),out,inst_31876);
} else {
if((state_val_31886 === (16))){
var inst_31878 = (state_31885[(2)]);
var state_31885__$1 = (function (){var statearr_31903 = state_31885;
(statearr_31903[(12)] = inst_31878);

return statearr_31903;
})();
var statearr_31904_31926 = state_31885__$1;
(statearr_31904_31926[(2)] = null);

(statearr_31904_31926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (10))){
var inst_31853 = (state_31885[(2)]);
var inst_31854 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31885__$1 = (function (){var statearr_31905 = state_31885;
(statearr_31905[(13)] = inst_31853);

return statearr_31905;
})();
var statearr_31906_31927 = state_31885__$1;
(statearr_31906_31927[(2)] = inst_31854);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31885__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31886 === (8))){
var inst_31867 = (state_31885[(2)]);
var state_31885__$1 = state_31885;
var statearr_31907_31928 = state_31885__$1;
(statearr_31907_31928[(2)] = inst_31867);

(statearr_31907_31928[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto___31913,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30500__auto__,c__30588__auto___31913,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_31908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31908[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_31908[(1)] = (1));

return statearr_31908;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_31885){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_31885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31909){if((e31909 instanceof Object)){
var ex__30504__auto__ = e31909;
var statearr_31910_31929 = state_31885;
(statearr_31910_31929[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31930 = state_31885;
state_31885 = G__31930;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_31885){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_31885);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___31913,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30590__auto__ = (function (){var statearr_31911 = f__30589__auto__.call(null);
(statearr_31911[(6)] = c__30588__auto___31913);

return statearr_31911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___31913,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31933 = arguments.length;
switch (G__31933) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30588__auto___31987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___31987,out){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___31987,out){
return (function (state_31965){
var state_val_31966 = (state_31965[(1)]);
if((state_val_31966 === (7))){
var inst_31944 = (state_31965[(7)]);
var inst_31945 = (state_31965[(8)]);
var inst_31944__$1 = (state_31965[(2)]);
var inst_31945__$1 = cljs.core.nth.call(null,inst_31944__$1,(0),null);
var inst_31946 = cljs.core.nth.call(null,inst_31944__$1,(1),null);
var inst_31947 = (inst_31945__$1 == null);
var state_31965__$1 = (function (){var statearr_31967 = state_31965;
(statearr_31967[(7)] = inst_31944__$1);

(statearr_31967[(8)] = inst_31945__$1);

(statearr_31967[(9)] = inst_31946);

return statearr_31967;
})();
if(cljs.core.truth_(inst_31947)){
var statearr_31968_31988 = state_31965__$1;
(statearr_31968_31988[(1)] = (8));

} else {
var statearr_31969_31989 = state_31965__$1;
(statearr_31969_31989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (1))){
var inst_31934 = cljs.core.vec.call(null,chs);
var inst_31935 = inst_31934;
var state_31965__$1 = (function (){var statearr_31970 = state_31965;
(statearr_31970[(10)] = inst_31935);

return statearr_31970;
})();
var statearr_31971_31990 = state_31965__$1;
(statearr_31971_31990[(2)] = null);

(statearr_31971_31990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (4))){
var inst_31935 = (state_31965[(10)]);
var state_31965__$1 = state_31965;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31965__$1,(7),inst_31935);
} else {
if((state_val_31966 === (6))){
var inst_31961 = (state_31965[(2)]);
var state_31965__$1 = state_31965;
var statearr_31972_31991 = state_31965__$1;
(statearr_31972_31991[(2)] = inst_31961);

(statearr_31972_31991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (3))){
var inst_31963 = (state_31965[(2)]);
var state_31965__$1 = state_31965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31965__$1,inst_31963);
} else {
if((state_val_31966 === (2))){
var inst_31935 = (state_31965[(10)]);
var inst_31937 = cljs.core.count.call(null,inst_31935);
var inst_31938 = (inst_31937 > (0));
var state_31965__$1 = state_31965;
if(cljs.core.truth_(inst_31938)){
var statearr_31974_31992 = state_31965__$1;
(statearr_31974_31992[(1)] = (4));

} else {
var statearr_31975_31993 = state_31965__$1;
(statearr_31975_31993[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (11))){
var inst_31935 = (state_31965[(10)]);
var inst_31954 = (state_31965[(2)]);
var tmp31973 = inst_31935;
var inst_31935__$1 = tmp31973;
var state_31965__$1 = (function (){var statearr_31976 = state_31965;
(statearr_31976[(11)] = inst_31954);

(statearr_31976[(10)] = inst_31935__$1);

return statearr_31976;
})();
var statearr_31977_31994 = state_31965__$1;
(statearr_31977_31994[(2)] = null);

(statearr_31977_31994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (9))){
var inst_31945 = (state_31965[(8)]);
var state_31965__$1 = state_31965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31965__$1,(11),out,inst_31945);
} else {
if((state_val_31966 === (5))){
var inst_31959 = cljs.core.async.close_BANG_.call(null,out);
var state_31965__$1 = state_31965;
var statearr_31978_31995 = state_31965__$1;
(statearr_31978_31995[(2)] = inst_31959);

(statearr_31978_31995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (10))){
var inst_31957 = (state_31965[(2)]);
var state_31965__$1 = state_31965;
var statearr_31979_31996 = state_31965__$1;
(statearr_31979_31996[(2)] = inst_31957);

(statearr_31979_31996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31966 === (8))){
var inst_31944 = (state_31965[(7)]);
var inst_31945 = (state_31965[(8)]);
var inst_31935 = (state_31965[(10)]);
var inst_31946 = (state_31965[(9)]);
var inst_31949 = (function (){var cs = inst_31935;
var vec__31940 = inst_31944;
var v = inst_31945;
var c = inst_31946;
return ((function (cs,vec__31940,v,c,inst_31944,inst_31945,inst_31935,inst_31946,state_val_31966,c__30588__auto___31987,out){
return (function (p1__31931_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31931_SHARP_);
});
;})(cs,vec__31940,v,c,inst_31944,inst_31945,inst_31935,inst_31946,state_val_31966,c__30588__auto___31987,out))
})();
var inst_31950 = cljs.core.filterv.call(null,inst_31949,inst_31935);
var inst_31935__$1 = inst_31950;
var state_31965__$1 = (function (){var statearr_31980 = state_31965;
(statearr_31980[(10)] = inst_31935__$1);

return statearr_31980;
})();
var statearr_31981_31997 = state_31965__$1;
(statearr_31981_31997[(2)] = null);

(statearr_31981_31997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto___31987,out))
;
return ((function (switch__30500__auto__,c__30588__auto___31987,out){
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_31982 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31982[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_31982[(1)] = (1));

return statearr_31982;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_31965){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_31965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e31983){if((e31983 instanceof Object)){
var ex__30504__auto__ = e31983;
var statearr_31984_31998 = state_31965;
(statearr_31984_31998[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31999 = state_31965;
state_31965 = G__31999;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_31965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_31965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___31987,out))
})();
var state__30590__auto__ = (function (){var statearr_31985 = f__30589__auto__.call(null);
(statearr_31985[(6)] = c__30588__auto___31987);

return statearr_31985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___31987,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32001 = arguments.length;
switch (G__32001) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30588__auto___32046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___32046,out){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___32046,out){
return (function (state_32025){
var state_val_32026 = (state_32025[(1)]);
if((state_val_32026 === (7))){
var inst_32007 = (state_32025[(7)]);
var inst_32007__$1 = (state_32025[(2)]);
var inst_32008 = (inst_32007__$1 == null);
var inst_32009 = cljs.core.not.call(null,inst_32008);
var state_32025__$1 = (function (){var statearr_32027 = state_32025;
(statearr_32027[(7)] = inst_32007__$1);

return statearr_32027;
})();
if(inst_32009){
var statearr_32028_32047 = state_32025__$1;
(statearr_32028_32047[(1)] = (8));

} else {
var statearr_32029_32048 = state_32025__$1;
(statearr_32029_32048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (1))){
var inst_32002 = (0);
var state_32025__$1 = (function (){var statearr_32030 = state_32025;
(statearr_32030[(8)] = inst_32002);

return statearr_32030;
})();
var statearr_32031_32049 = state_32025__$1;
(statearr_32031_32049[(2)] = null);

(statearr_32031_32049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (4))){
var state_32025__$1 = state_32025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32025__$1,(7),ch);
} else {
if((state_val_32026 === (6))){
var inst_32020 = (state_32025[(2)]);
var state_32025__$1 = state_32025;
var statearr_32032_32050 = state_32025__$1;
(statearr_32032_32050[(2)] = inst_32020);

(statearr_32032_32050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (3))){
var inst_32022 = (state_32025[(2)]);
var inst_32023 = cljs.core.async.close_BANG_.call(null,out);
var state_32025__$1 = (function (){var statearr_32033 = state_32025;
(statearr_32033[(9)] = inst_32022);

return statearr_32033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32025__$1,inst_32023);
} else {
if((state_val_32026 === (2))){
var inst_32002 = (state_32025[(8)]);
var inst_32004 = (inst_32002 < n);
var state_32025__$1 = state_32025;
if(cljs.core.truth_(inst_32004)){
var statearr_32034_32051 = state_32025__$1;
(statearr_32034_32051[(1)] = (4));

} else {
var statearr_32035_32052 = state_32025__$1;
(statearr_32035_32052[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (11))){
var inst_32002 = (state_32025[(8)]);
var inst_32012 = (state_32025[(2)]);
var inst_32013 = (inst_32002 + (1));
var inst_32002__$1 = inst_32013;
var state_32025__$1 = (function (){var statearr_32036 = state_32025;
(statearr_32036[(10)] = inst_32012);

(statearr_32036[(8)] = inst_32002__$1);

return statearr_32036;
})();
var statearr_32037_32053 = state_32025__$1;
(statearr_32037_32053[(2)] = null);

(statearr_32037_32053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (9))){
var state_32025__$1 = state_32025;
var statearr_32038_32054 = state_32025__$1;
(statearr_32038_32054[(2)] = null);

(statearr_32038_32054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (5))){
var state_32025__$1 = state_32025;
var statearr_32039_32055 = state_32025__$1;
(statearr_32039_32055[(2)] = null);

(statearr_32039_32055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (10))){
var inst_32017 = (state_32025[(2)]);
var state_32025__$1 = state_32025;
var statearr_32040_32056 = state_32025__$1;
(statearr_32040_32056[(2)] = inst_32017);

(statearr_32040_32056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (8))){
var inst_32007 = (state_32025[(7)]);
var state_32025__$1 = state_32025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32025__$1,(11),out,inst_32007);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto___32046,out))
;
return ((function (switch__30500__auto__,c__30588__auto___32046,out){
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_32041 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32041[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_32041[(1)] = (1));

return statearr_32041;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_32025){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_32025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e32042){if((e32042 instanceof Object)){
var ex__30504__auto__ = e32042;
var statearr_32043_32057 = state_32025;
(statearr_32043_32057[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32058 = state_32025;
state_32025 = G__32058;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_32025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_32025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___32046,out))
})();
var state__30590__auto__ = (function (){var statearr_32044 = f__30589__auto__.call(null);
(statearr_32044[(6)] = c__30588__auto___32046);

return statearr_32044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___32046,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32060 = (function (f,ch,meta32061){
this.f = f;
this.ch = ch;
this.meta32061 = meta32061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32062,meta32061__$1){
var self__ = this;
var _32062__$1 = this;
return (new cljs.core.async.t_cljs$core$async32060(self__.f,self__.ch,meta32061__$1));
});

cljs.core.async.t_cljs$core$async32060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32062){
var self__ = this;
var _32062__$1 = this;
return self__.meta32061;
});

cljs.core.async.t_cljs$core$async32060.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32060.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32060.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32060.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32060.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32063 = (function (f,ch,meta32061,_,fn1,meta32064){
this.f = f;
this.ch = ch;
this.meta32061 = meta32061;
this._ = _;
this.fn1 = fn1;
this.meta32064 = meta32064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32065,meta32064__$1){
var self__ = this;
var _32065__$1 = this;
return (new cljs.core.async.t_cljs$core$async32063(self__.f,self__.ch,self__.meta32061,self__._,self__.fn1,meta32064__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32063.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32065){
var self__ = this;
var _32065__$1 = this;
return self__.meta32064;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32063.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32059_SHARP_){
return f1.call(null,(((p1__32059_SHARP_ == null))?null:self__.f.call(null,p1__32059_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32063.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32061","meta32061",-784923045,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32060","cljs.core.async/t_cljs$core$async32060",-777090497,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32064","meta32064",330388757,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32063";

cljs.core.async.t_cljs$core$async32063.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32063");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32063 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32063(f__$1,ch__$1,meta32061__$1,___$2,fn1__$1,meta32064){
return (new cljs.core.async.t_cljs$core$async32063(f__$1,ch__$1,meta32061__$1,___$2,fn1__$1,meta32064));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32063(self__.f,self__.ch,self__.meta32061,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27977__auto__ = ret;
if(cljs.core.truth_(and__27977__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27977__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32060.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32060.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32061","meta32061",-784923045,null)], null);
});

cljs.core.async.t_cljs$core$async32060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32060";

cljs.core.async.t_cljs$core$async32060.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32060");
});

cljs.core.async.__GT_t_cljs$core$async32060 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32060(f__$1,ch__$1,meta32061){
return (new cljs.core.async.t_cljs$core$async32060(f__$1,ch__$1,meta32061));
});

}

return (new cljs.core.async.t_cljs$core$async32060(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32066 = (function (f,ch,meta32067){
this.f = f;
this.ch = ch;
this.meta32067 = meta32067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32068,meta32067__$1){
var self__ = this;
var _32068__$1 = this;
return (new cljs.core.async.t_cljs$core$async32066(self__.f,self__.ch,meta32067__$1));
});

cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32068){
var self__ = this;
var _32068__$1 = this;
return self__.meta32067;
});

cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32066.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32067","meta32067",-1700642075,null)], null);
});

cljs.core.async.t_cljs$core$async32066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32066";

cljs.core.async.t_cljs$core$async32066.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32066");
});

cljs.core.async.__GT_t_cljs$core$async32066 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32066(f__$1,ch__$1,meta32067){
return (new cljs.core.async.t_cljs$core$async32066(f__$1,ch__$1,meta32067));
});

}

return (new cljs.core.async.t_cljs$core$async32066(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32069 = (function (p,ch,meta32070){
this.p = p;
this.ch = ch;
this.meta32070 = meta32070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32071,meta32070__$1){
var self__ = this;
var _32071__$1 = this;
return (new cljs.core.async.t_cljs$core$async32069(self__.p,self__.ch,meta32070__$1));
});

cljs.core.async.t_cljs$core$async32069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32071){
var self__ = this;
var _32071__$1 = this;
return self__.meta32070;
});

cljs.core.async.t_cljs$core$async32069.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32069.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32069.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32069.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32069.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32069.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32069.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32070","meta32070",-1303904236,null)], null);
});

cljs.core.async.t_cljs$core$async32069.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32069";

cljs.core.async.t_cljs$core$async32069.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32069");
});

cljs.core.async.__GT_t_cljs$core$async32069 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32069(p__$1,ch__$1,meta32070){
return (new cljs.core.async.t_cljs$core$async32069(p__$1,ch__$1,meta32070));
});

}

return (new cljs.core.async.t_cljs$core$async32069(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32073 = arguments.length;
switch (G__32073) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30588__auto___32113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___32113,out){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___32113,out){
return (function (state_32094){
var state_val_32095 = (state_32094[(1)]);
if((state_val_32095 === (7))){
var inst_32090 = (state_32094[(2)]);
var state_32094__$1 = state_32094;
var statearr_32096_32114 = state_32094__$1;
(statearr_32096_32114[(2)] = inst_32090);

(statearr_32096_32114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (1))){
var state_32094__$1 = state_32094;
var statearr_32097_32115 = state_32094__$1;
(statearr_32097_32115[(2)] = null);

(statearr_32097_32115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (4))){
var inst_32076 = (state_32094[(7)]);
var inst_32076__$1 = (state_32094[(2)]);
var inst_32077 = (inst_32076__$1 == null);
var state_32094__$1 = (function (){var statearr_32098 = state_32094;
(statearr_32098[(7)] = inst_32076__$1);

return statearr_32098;
})();
if(cljs.core.truth_(inst_32077)){
var statearr_32099_32116 = state_32094__$1;
(statearr_32099_32116[(1)] = (5));

} else {
var statearr_32100_32117 = state_32094__$1;
(statearr_32100_32117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (6))){
var inst_32076 = (state_32094[(7)]);
var inst_32081 = p.call(null,inst_32076);
var state_32094__$1 = state_32094;
if(cljs.core.truth_(inst_32081)){
var statearr_32101_32118 = state_32094__$1;
(statearr_32101_32118[(1)] = (8));

} else {
var statearr_32102_32119 = state_32094__$1;
(statearr_32102_32119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (3))){
var inst_32092 = (state_32094[(2)]);
var state_32094__$1 = state_32094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32094__$1,inst_32092);
} else {
if((state_val_32095 === (2))){
var state_32094__$1 = state_32094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32094__$1,(4),ch);
} else {
if((state_val_32095 === (11))){
var inst_32084 = (state_32094[(2)]);
var state_32094__$1 = state_32094;
var statearr_32103_32120 = state_32094__$1;
(statearr_32103_32120[(2)] = inst_32084);

(statearr_32103_32120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (9))){
var state_32094__$1 = state_32094;
var statearr_32104_32121 = state_32094__$1;
(statearr_32104_32121[(2)] = null);

(statearr_32104_32121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (5))){
var inst_32079 = cljs.core.async.close_BANG_.call(null,out);
var state_32094__$1 = state_32094;
var statearr_32105_32122 = state_32094__$1;
(statearr_32105_32122[(2)] = inst_32079);

(statearr_32105_32122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (10))){
var inst_32087 = (state_32094[(2)]);
var state_32094__$1 = (function (){var statearr_32106 = state_32094;
(statearr_32106[(8)] = inst_32087);

return statearr_32106;
})();
var statearr_32107_32123 = state_32094__$1;
(statearr_32107_32123[(2)] = null);

(statearr_32107_32123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32095 === (8))){
var inst_32076 = (state_32094[(7)]);
var state_32094__$1 = state_32094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32094__$1,(11),out,inst_32076);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto___32113,out))
;
return ((function (switch__30500__auto__,c__30588__auto___32113,out){
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_32108 = [null,null,null,null,null,null,null,null,null];
(statearr_32108[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_32108[(1)] = (1));

return statearr_32108;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_32094){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_32094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e32109){if((e32109 instanceof Object)){
var ex__30504__auto__ = e32109;
var statearr_32110_32124 = state_32094;
(statearr_32110_32124[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32125 = state_32094;
state_32094 = G__32125;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_32094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_32094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___32113,out))
})();
var state__30590__auto__ = (function (){var statearr_32111 = f__30589__auto__.call(null);
(statearr_32111[(6)] = c__30588__auto___32113);

return statearr_32111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___32113,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32127 = arguments.length;
switch (G__32127) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__){
return (function (state_32190){
var state_val_32191 = (state_32190[(1)]);
if((state_val_32191 === (7))){
var inst_32186 = (state_32190[(2)]);
var state_32190__$1 = state_32190;
var statearr_32192_32230 = state_32190__$1;
(statearr_32192_32230[(2)] = inst_32186);

(statearr_32192_32230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (20))){
var inst_32156 = (state_32190[(7)]);
var inst_32167 = (state_32190[(2)]);
var inst_32168 = cljs.core.next.call(null,inst_32156);
var inst_32142 = inst_32168;
var inst_32143 = null;
var inst_32144 = (0);
var inst_32145 = (0);
var state_32190__$1 = (function (){var statearr_32193 = state_32190;
(statearr_32193[(8)] = inst_32142);

(statearr_32193[(9)] = inst_32144);

(statearr_32193[(10)] = inst_32143);

(statearr_32193[(11)] = inst_32145);

(statearr_32193[(12)] = inst_32167);

return statearr_32193;
})();
var statearr_32194_32231 = state_32190__$1;
(statearr_32194_32231[(2)] = null);

(statearr_32194_32231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (1))){
var state_32190__$1 = state_32190;
var statearr_32195_32232 = state_32190__$1;
(statearr_32195_32232[(2)] = null);

(statearr_32195_32232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (4))){
var inst_32131 = (state_32190[(13)]);
var inst_32131__$1 = (state_32190[(2)]);
var inst_32132 = (inst_32131__$1 == null);
var state_32190__$1 = (function (){var statearr_32196 = state_32190;
(statearr_32196[(13)] = inst_32131__$1);

return statearr_32196;
})();
if(cljs.core.truth_(inst_32132)){
var statearr_32197_32233 = state_32190__$1;
(statearr_32197_32233[(1)] = (5));

} else {
var statearr_32198_32234 = state_32190__$1;
(statearr_32198_32234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (15))){
var state_32190__$1 = state_32190;
var statearr_32202_32235 = state_32190__$1;
(statearr_32202_32235[(2)] = null);

(statearr_32202_32235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (21))){
var state_32190__$1 = state_32190;
var statearr_32203_32236 = state_32190__$1;
(statearr_32203_32236[(2)] = null);

(statearr_32203_32236[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (13))){
var inst_32142 = (state_32190[(8)]);
var inst_32144 = (state_32190[(9)]);
var inst_32143 = (state_32190[(10)]);
var inst_32145 = (state_32190[(11)]);
var inst_32152 = (state_32190[(2)]);
var inst_32153 = (inst_32145 + (1));
var tmp32199 = inst_32142;
var tmp32200 = inst_32144;
var tmp32201 = inst_32143;
var inst_32142__$1 = tmp32199;
var inst_32143__$1 = tmp32201;
var inst_32144__$1 = tmp32200;
var inst_32145__$1 = inst_32153;
var state_32190__$1 = (function (){var statearr_32204 = state_32190;
(statearr_32204[(8)] = inst_32142__$1);

(statearr_32204[(9)] = inst_32144__$1);

(statearr_32204[(10)] = inst_32143__$1);

(statearr_32204[(14)] = inst_32152);

(statearr_32204[(11)] = inst_32145__$1);

return statearr_32204;
})();
var statearr_32205_32237 = state_32190__$1;
(statearr_32205_32237[(2)] = null);

(statearr_32205_32237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (22))){
var state_32190__$1 = state_32190;
var statearr_32206_32238 = state_32190__$1;
(statearr_32206_32238[(2)] = null);

(statearr_32206_32238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (6))){
var inst_32131 = (state_32190[(13)]);
var inst_32140 = f.call(null,inst_32131);
var inst_32141 = cljs.core.seq.call(null,inst_32140);
var inst_32142 = inst_32141;
var inst_32143 = null;
var inst_32144 = (0);
var inst_32145 = (0);
var state_32190__$1 = (function (){var statearr_32207 = state_32190;
(statearr_32207[(8)] = inst_32142);

(statearr_32207[(9)] = inst_32144);

(statearr_32207[(10)] = inst_32143);

(statearr_32207[(11)] = inst_32145);

return statearr_32207;
})();
var statearr_32208_32239 = state_32190__$1;
(statearr_32208_32239[(2)] = null);

(statearr_32208_32239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (17))){
var inst_32156 = (state_32190[(7)]);
var inst_32160 = cljs.core.chunk_first.call(null,inst_32156);
var inst_32161 = cljs.core.chunk_rest.call(null,inst_32156);
var inst_32162 = cljs.core.count.call(null,inst_32160);
var inst_32142 = inst_32161;
var inst_32143 = inst_32160;
var inst_32144 = inst_32162;
var inst_32145 = (0);
var state_32190__$1 = (function (){var statearr_32209 = state_32190;
(statearr_32209[(8)] = inst_32142);

(statearr_32209[(9)] = inst_32144);

(statearr_32209[(10)] = inst_32143);

(statearr_32209[(11)] = inst_32145);

return statearr_32209;
})();
var statearr_32210_32240 = state_32190__$1;
(statearr_32210_32240[(2)] = null);

(statearr_32210_32240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (3))){
var inst_32188 = (state_32190[(2)]);
var state_32190__$1 = state_32190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32190__$1,inst_32188);
} else {
if((state_val_32191 === (12))){
var inst_32176 = (state_32190[(2)]);
var state_32190__$1 = state_32190;
var statearr_32211_32241 = state_32190__$1;
(statearr_32211_32241[(2)] = inst_32176);

(statearr_32211_32241[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (2))){
var state_32190__$1 = state_32190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32190__$1,(4),in$);
} else {
if((state_val_32191 === (23))){
var inst_32184 = (state_32190[(2)]);
var state_32190__$1 = state_32190;
var statearr_32212_32242 = state_32190__$1;
(statearr_32212_32242[(2)] = inst_32184);

(statearr_32212_32242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (19))){
var inst_32171 = (state_32190[(2)]);
var state_32190__$1 = state_32190;
var statearr_32213_32243 = state_32190__$1;
(statearr_32213_32243[(2)] = inst_32171);

(statearr_32213_32243[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (11))){
var inst_32142 = (state_32190[(8)]);
var inst_32156 = (state_32190[(7)]);
var inst_32156__$1 = cljs.core.seq.call(null,inst_32142);
var state_32190__$1 = (function (){var statearr_32214 = state_32190;
(statearr_32214[(7)] = inst_32156__$1);

return statearr_32214;
})();
if(inst_32156__$1){
var statearr_32215_32244 = state_32190__$1;
(statearr_32215_32244[(1)] = (14));

} else {
var statearr_32216_32245 = state_32190__$1;
(statearr_32216_32245[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (9))){
var inst_32178 = (state_32190[(2)]);
var inst_32179 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32190__$1 = (function (){var statearr_32217 = state_32190;
(statearr_32217[(15)] = inst_32178);

return statearr_32217;
})();
if(cljs.core.truth_(inst_32179)){
var statearr_32218_32246 = state_32190__$1;
(statearr_32218_32246[(1)] = (21));

} else {
var statearr_32219_32247 = state_32190__$1;
(statearr_32219_32247[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (5))){
var inst_32134 = cljs.core.async.close_BANG_.call(null,out);
var state_32190__$1 = state_32190;
var statearr_32220_32248 = state_32190__$1;
(statearr_32220_32248[(2)] = inst_32134);

(statearr_32220_32248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (14))){
var inst_32156 = (state_32190[(7)]);
var inst_32158 = cljs.core.chunked_seq_QMARK_.call(null,inst_32156);
var state_32190__$1 = state_32190;
if(inst_32158){
var statearr_32221_32249 = state_32190__$1;
(statearr_32221_32249[(1)] = (17));

} else {
var statearr_32222_32250 = state_32190__$1;
(statearr_32222_32250[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (16))){
var inst_32174 = (state_32190[(2)]);
var state_32190__$1 = state_32190;
var statearr_32223_32251 = state_32190__$1;
(statearr_32223_32251[(2)] = inst_32174);

(statearr_32223_32251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32191 === (10))){
var inst_32143 = (state_32190[(10)]);
var inst_32145 = (state_32190[(11)]);
var inst_32150 = cljs.core._nth.call(null,inst_32143,inst_32145);
var state_32190__$1 = state_32190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32190__$1,(13),out,inst_32150);
} else {
if((state_val_32191 === (18))){
var inst_32156 = (state_32190[(7)]);
var inst_32165 = cljs.core.first.call(null,inst_32156);
var state_32190__$1 = state_32190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32190__$1,(20),out,inst_32165);
} else {
if((state_val_32191 === (8))){
var inst_32144 = (state_32190[(9)]);
var inst_32145 = (state_32190[(11)]);
var inst_32147 = (inst_32145 < inst_32144);
var inst_32148 = inst_32147;
var state_32190__$1 = state_32190;
if(cljs.core.truth_(inst_32148)){
var statearr_32224_32252 = state_32190__$1;
(statearr_32224_32252[(1)] = (10));

} else {
var statearr_32225_32253 = state_32190__$1;
(statearr_32225_32253[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto__))
;
return ((function (switch__30500__auto__,c__30588__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30501__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30501__auto____0 = (function (){
var statearr_32226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32226[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30501__auto__);

(statearr_32226[(1)] = (1));

return statearr_32226;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30501__auto____1 = (function (state_32190){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_32190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e32227){if((e32227 instanceof Object)){
var ex__30504__auto__ = e32227;
var statearr_32228_32254 = state_32190;
(statearr_32228_32254[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32255 = state_32190;
state_32190 = G__32255;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30501__auto__ = function(state_32190){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30501__auto____1.call(this,state_32190);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30501__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30501__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__))
})();
var state__30590__auto__ = (function (){var statearr_32229 = f__30589__auto__.call(null);
(statearr_32229[(6)] = c__30588__auto__);

return statearr_32229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__))
);

return c__30588__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32257 = arguments.length;
switch (G__32257) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32260 = arguments.length;
switch (G__32260) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32263 = arguments.length;
switch (G__32263) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30588__auto___32310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___32310,out){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___32310,out){
return (function (state_32287){
var state_val_32288 = (state_32287[(1)]);
if((state_val_32288 === (7))){
var inst_32282 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
var statearr_32289_32311 = state_32287__$1;
(statearr_32289_32311[(2)] = inst_32282);

(statearr_32289_32311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (1))){
var inst_32264 = null;
var state_32287__$1 = (function (){var statearr_32290 = state_32287;
(statearr_32290[(7)] = inst_32264);

return statearr_32290;
})();
var statearr_32291_32312 = state_32287__$1;
(statearr_32291_32312[(2)] = null);

(statearr_32291_32312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (4))){
var inst_32267 = (state_32287[(8)]);
var inst_32267__$1 = (state_32287[(2)]);
var inst_32268 = (inst_32267__$1 == null);
var inst_32269 = cljs.core.not.call(null,inst_32268);
var state_32287__$1 = (function (){var statearr_32292 = state_32287;
(statearr_32292[(8)] = inst_32267__$1);

return statearr_32292;
})();
if(inst_32269){
var statearr_32293_32313 = state_32287__$1;
(statearr_32293_32313[(1)] = (5));

} else {
var statearr_32294_32314 = state_32287__$1;
(statearr_32294_32314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (6))){
var state_32287__$1 = state_32287;
var statearr_32295_32315 = state_32287__$1;
(statearr_32295_32315[(2)] = null);

(statearr_32295_32315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (3))){
var inst_32284 = (state_32287[(2)]);
var inst_32285 = cljs.core.async.close_BANG_.call(null,out);
var state_32287__$1 = (function (){var statearr_32296 = state_32287;
(statearr_32296[(9)] = inst_32284);

return statearr_32296;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32287__$1,inst_32285);
} else {
if((state_val_32288 === (2))){
var state_32287__$1 = state_32287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32287__$1,(4),ch);
} else {
if((state_val_32288 === (11))){
var inst_32267 = (state_32287[(8)]);
var inst_32276 = (state_32287[(2)]);
var inst_32264 = inst_32267;
var state_32287__$1 = (function (){var statearr_32297 = state_32287;
(statearr_32297[(10)] = inst_32276);

(statearr_32297[(7)] = inst_32264);

return statearr_32297;
})();
var statearr_32298_32316 = state_32287__$1;
(statearr_32298_32316[(2)] = null);

(statearr_32298_32316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (9))){
var inst_32267 = (state_32287[(8)]);
var state_32287__$1 = state_32287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32287__$1,(11),out,inst_32267);
} else {
if((state_val_32288 === (5))){
var inst_32267 = (state_32287[(8)]);
var inst_32264 = (state_32287[(7)]);
var inst_32271 = cljs.core._EQ_.call(null,inst_32267,inst_32264);
var state_32287__$1 = state_32287;
if(inst_32271){
var statearr_32300_32317 = state_32287__$1;
(statearr_32300_32317[(1)] = (8));

} else {
var statearr_32301_32318 = state_32287__$1;
(statearr_32301_32318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (10))){
var inst_32279 = (state_32287[(2)]);
var state_32287__$1 = state_32287;
var statearr_32302_32319 = state_32287__$1;
(statearr_32302_32319[(2)] = inst_32279);

(statearr_32302_32319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32288 === (8))){
var inst_32264 = (state_32287[(7)]);
var tmp32299 = inst_32264;
var inst_32264__$1 = tmp32299;
var state_32287__$1 = (function (){var statearr_32303 = state_32287;
(statearr_32303[(7)] = inst_32264__$1);

return statearr_32303;
})();
var statearr_32304_32320 = state_32287__$1;
(statearr_32304_32320[(2)] = null);

(statearr_32304_32320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto___32310,out))
;
return ((function (switch__30500__auto__,c__30588__auto___32310,out){
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_32305 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32305[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_32305[(1)] = (1));

return statearr_32305;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_32287){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_32287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e32306){if((e32306 instanceof Object)){
var ex__30504__auto__ = e32306;
var statearr_32307_32321 = state_32287;
(statearr_32307_32321[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32322 = state_32287;
state_32287 = G__32322;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_32287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_32287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___32310,out))
})();
var state__30590__auto__ = (function (){var statearr_32308 = f__30589__auto__.call(null);
(statearr_32308[(6)] = c__30588__auto___32310);

return statearr_32308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___32310,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32324 = arguments.length;
switch (G__32324) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30588__auto___32390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___32390,out){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___32390,out){
return (function (state_32362){
var state_val_32363 = (state_32362[(1)]);
if((state_val_32363 === (7))){
var inst_32358 = (state_32362[(2)]);
var state_32362__$1 = state_32362;
var statearr_32364_32391 = state_32362__$1;
(statearr_32364_32391[(2)] = inst_32358);

(statearr_32364_32391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32363 === (1))){
var inst_32325 = (new Array(n));
var inst_32326 = inst_32325;
var inst_32327 = (0);
var state_32362__$1 = (function (){var statearr_32365 = state_32362;
(statearr_32365[(7)] = inst_32327);

(statearr_32365[(8)] = inst_32326);

return statearr_32365;
})();
var statearr_32366_32392 = state_32362__$1;
(statearr_32366_32392[(2)] = null);

(statearr_32366_32392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32363 === (4))){
var inst_32330 = (state_32362[(9)]);
var inst_32330__$1 = (state_32362[(2)]);
var inst_32331 = (inst_32330__$1 == null);
var inst_32332 = cljs.core.not.call(null,inst_32331);
var state_32362__$1 = (function (){var statearr_32367 = state_32362;
(statearr_32367[(9)] = inst_32330__$1);

return statearr_32367;
})();
if(inst_32332){
var statearr_32368_32393 = state_32362__$1;
(statearr_32368_32393[(1)] = (5));

} else {
var statearr_32369_32394 = state_32362__$1;
(statearr_32369_32394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32363 === (15))){
var inst_32352 = (state_32362[(2)]);
var state_32362__$1 = state_32362;
var statearr_32370_32395 = state_32362__$1;
(statearr_32370_32395[(2)] = inst_32352);

(statearr_32370_32395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32363 === (13))){
var state_32362__$1 = state_32362;
var statearr_32371_32396 = state_32362__$1;
(statearr_32371_32396[(2)] = null);

(statearr_32371_32396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32363 === (6))){
var inst_32327 = (state_32362[(7)]);
var inst_32348 = (inst_32327 > (0));
var state_32362__$1 = state_32362;
if(cljs.core.truth_(inst_32348)){
var statearr_32372_32397 = state_32362__$1;
(statearr_32372_32397[(1)] = (12));

} else {
var statearr_32373_32398 = state_32362__$1;
(statearr_32373_32398[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32363 === (3))){
var inst_32360 = (state_32362[(2)]);
var state_32362__$1 = state_32362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32362__$1,inst_32360);
} else {
if((state_val_32363 === (12))){
var inst_32326 = (state_32362[(8)]);
var inst_32350 = cljs.core.vec.call(null,inst_32326);
var state_32362__$1 = state_32362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32362__$1,(15),out,inst_32350);
} else {
if((state_val_32363 === (2))){
var state_32362__$1 = state_32362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32362__$1,(4),ch);
} else {
if((state_val_32363 === (11))){
var inst_32342 = (state_32362[(2)]);
var inst_32343 = (new Array(n));
var inst_32326 = inst_32343;
var inst_32327 = (0);
var state_32362__$1 = (function (){var statearr_32374 = state_32362;
(statearr_32374[(7)] = inst_32327);

(statearr_32374[(8)] = inst_32326);

(statearr_32374[(10)] = inst_32342);

return statearr_32374;
})();
var statearr_32375_32399 = state_32362__$1;
(statearr_32375_32399[(2)] = null);

(statearr_32375_32399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32363 === (9))){
var inst_32326 = (state_32362[(8)]);
var inst_32340 = cljs.core.vec.call(null,inst_32326);
var state_32362__$1 = state_32362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32362__$1,(11),out,inst_32340);
} else {
if((state_val_32363 === (5))){
var inst_32335 = (state_32362[(11)]);
var inst_32327 = (state_32362[(7)]);
var inst_32326 = (state_32362[(8)]);
var inst_32330 = (state_32362[(9)]);
var inst_32334 = (inst_32326[inst_32327] = inst_32330);
var inst_32335__$1 = (inst_32327 + (1));
var inst_32336 = (inst_32335__$1 < n);
var state_32362__$1 = (function (){var statearr_32376 = state_32362;
(statearr_32376[(11)] = inst_32335__$1);

(statearr_32376[(12)] = inst_32334);

return statearr_32376;
})();
if(cljs.core.truth_(inst_32336)){
var statearr_32377_32400 = state_32362__$1;
(statearr_32377_32400[(1)] = (8));

} else {
var statearr_32378_32401 = state_32362__$1;
(statearr_32378_32401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32363 === (14))){
var inst_32355 = (state_32362[(2)]);
var inst_32356 = cljs.core.async.close_BANG_.call(null,out);
var state_32362__$1 = (function (){var statearr_32380 = state_32362;
(statearr_32380[(13)] = inst_32355);

return statearr_32380;
})();
var statearr_32381_32402 = state_32362__$1;
(statearr_32381_32402[(2)] = inst_32356);

(statearr_32381_32402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32363 === (10))){
var inst_32346 = (state_32362[(2)]);
var state_32362__$1 = state_32362;
var statearr_32382_32403 = state_32362__$1;
(statearr_32382_32403[(2)] = inst_32346);

(statearr_32382_32403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32363 === (8))){
var inst_32335 = (state_32362[(11)]);
var inst_32326 = (state_32362[(8)]);
var tmp32379 = inst_32326;
var inst_32326__$1 = tmp32379;
var inst_32327 = inst_32335;
var state_32362__$1 = (function (){var statearr_32383 = state_32362;
(statearr_32383[(7)] = inst_32327);

(statearr_32383[(8)] = inst_32326__$1);

return statearr_32383;
})();
var statearr_32384_32404 = state_32362__$1;
(statearr_32384_32404[(2)] = null);

(statearr_32384_32404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto___32390,out))
;
return ((function (switch__30500__auto__,c__30588__auto___32390,out){
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_32385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32385[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_32385[(1)] = (1));

return statearr_32385;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_32362){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_32362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e32386){if((e32386 instanceof Object)){
var ex__30504__auto__ = e32386;
var statearr_32387_32405 = state_32362;
(statearr_32387_32405[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32406 = state_32362;
state_32362 = G__32406;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_32362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_32362);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___32390,out))
})();
var state__30590__auto__ = (function (){var statearr_32388 = f__30589__auto__.call(null);
(statearr_32388[(6)] = c__30588__auto___32390);

return statearr_32388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___32390,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32408 = arguments.length;
switch (G__32408) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30588__auto___32478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___32478,out){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___32478,out){
return (function (state_32450){
var state_val_32451 = (state_32450[(1)]);
if((state_val_32451 === (7))){
var inst_32446 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32452_32479 = state_32450__$1;
(statearr_32452_32479[(2)] = inst_32446);

(statearr_32452_32479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (1))){
var inst_32409 = [];
var inst_32410 = inst_32409;
var inst_32411 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32450__$1 = (function (){var statearr_32453 = state_32450;
(statearr_32453[(7)] = inst_32411);

(statearr_32453[(8)] = inst_32410);

return statearr_32453;
})();
var statearr_32454_32480 = state_32450__$1;
(statearr_32454_32480[(2)] = null);

(statearr_32454_32480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (4))){
var inst_32414 = (state_32450[(9)]);
var inst_32414__$1 = (state_32450[(2)]);
var inst_32415 = (inst_32414__$1 == null);
var inst_32416 = cljs.core.not.call(null,inst_32415);
var state_32450__$1 = (function (){var statearr_32455 = state_32450;
(statearr_32455[(9)] = inst_32414__$1);

return statearr_32455;
})();
if(inst_32416){
var statearr_32456_32481 = state_32450__$1;
(statearr_32456_32481[(1)] = (5));

} else {
var statearr_32457_32482 = state_32450__$1;
(statearr_32457_32482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (15))){
var inst_32440 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32458_32483 = state_32450__$1;
(statearr_32458_32483[(2)] = inst_32440);

(statearr_32458_32483[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (13))){
var state_32450__$1 = state_32450;
var statearr_32459_32484 = state_32450__$1;
(statearr_32459_32484[(2)] = null);

(statearr_32459_32484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (6))){
var inst_32410 = (state_32450[(8)]);
var inst_32435 = inst_32410.length;
var inst_32436 = (inst_32435 > (0));
var state_32450__$1 = state_32450;
if(cljs.core.truth_(inst_32436)){
var statearr_32460_32485 = state_32450__$1;
(statearr_32460_32485[(1)] = (12));

} else {
var statearr_32461_32486 = state_32450__$1;
(statearr_32461_32486[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (3))){
var inst_32448 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32450__$1,inst_32448);
} else {
if((state_val_32451 === (12))){
var inst_32410 = (state_32450[(8)]);
var inst_32438 = cljs.core.vec.call(null,inst_32410);
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32450__$1,(15),out,inst_32438);
} else {
if((state_val_32451 === (2))){
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32450__$1,(4),ch);
} else {
if((state_val_32451 === (11))){
var inst_32414 = (state_32450[(9)]);
var inst_32418 = (state_32450[(10)]);
var inst_32428 = (state_32450[(2)]);
var inst_32429 = [];
var inst_32430 = inst_32429.push(inst_32414);
var inst_32410 = inst_32429;
var inst_32411 = inst_32418;
var state_32450__$1 = (function (){var statearr_32462 = state_32450;
(statearr_32462[(7)] = inst_32411);

(statearr_32462[(11)] = inst_32428);

(statearr_32462[(12)] = inst_32430);

(statearr_32462[(8)] = inst_32410);

return statearr_32462;
})();
var statearr_32463_32487 = state_32450__$1;
(statearr_32463_32487[(2)] = null);

(statearr_32463_32487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (9))){
var inst_32410 = (state_32450[(8)]);
var inst_32426 = cljs.core.vec.call(null,inst_32410);
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32450__$1,(11),out,inst_32426);
} else {
if((state_val_32451 === (5))){
var inst_32411 = (state_32450[(7)]);
var inst_32414 = (state_32450[(9)]);
var inst_32418 = (state_32450[(10)]);
var inst_32418__$1 = f.call(null,inst_32414);
var inst_32419 = cljs.core._EQ_.call(null,inst_32418__$1,inst_32411);
var inst_32420 = cljs.core.keyword_identical_QMARK_.call(null,inst_32411,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32421 = (inst_32419) || (inst_32420);
var state_32450__$1 = (function (){var statearr_32464 = state_32450;
(statearr_32464[(10)] = inst_32418__$1);

return statearr_32464;
})();
if(cljs.core.truth_(inst_32421)){
var statearr_32465_32488 = state_32450__$1;
(statearr_32465_32488[(1)] = (8));

} else {
var statearr_32466_32489 = state_32450__$1;
(statearr_32466_32489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (14))){
var inst_32443 = (state_32450[(2)]);
var inst_32444 = cljs.core.async.close_BANG_.call(null,out);
var state_32450__$1 = (function (){var statearr_32468 = state_32450;
(statearr_32468[(13)] = inst_32443);

return statearr_32468;
})();
var statearr_32469_32490 = state_32450__$1;
(statearr_32469_32490[(2)] = inst_32444);

(statearr_32469_32490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (10))){
var inst_32433 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32470_32491 = state_32450__$1;
(statearr_32470_32491[(2)] = inst_32433);

(statearr_32470_32491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (8))){
var inst_32414 = (state_32450[(9)]);
var inst_32418 = (state_32450[(10)]);
var inst_32410 = (state_32450[(8)]);
var inst_32423 = inst_32410.push(inst_32414);
var tmp32467 = inst_32410;
var inst_32410__$1 = tmp32467;
var inst_32411 = inst_32418;
var state_32450__$1 = (function (){var statearr_32471 = state_32450;
(statearr_32471[(7)] = inst_32411);

(statearr_32471[(8)] = inst_32410__$1);

(statearr_32471[(14)] = inst_32423);

return statearr_32471;
})();
var statearr_32472_32492 = state_32450__$1;
(statearr_32472_32492[(2)] = null);

(statearr_32472_32492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto___32478,out))
;
return ((function (switch__30500__auto__,c__30588__auto___32478,out){
return (function() {
var cljs$core$async$state_machine__30501__auto__ = null;
var cljs$core$async$state_machine__30501__auto____0 = (function (){
var statearr_32473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32473[(0)] = cljs$core$async$state_machine__30501__auto__);

(statearr_32473[(1)] = (1));

return statearr_32473;
});
var cljs$core$async$state_machine__30501__auto____1 = (function (state_32450){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_32450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e32474){if((e32474 instanceof Object)){
var ex__30504__auto__ = e32474;
var statearr_32475_32493 = state_32450;
(statearr_32475_32493[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32494 = state_32450;
state_32450 = G__32494;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
cljs$core$async$state_machine__30501__auto__ = function(state_32450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30501__auto____1.call(this,state_32450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30501__auto____0;
cljs$core$async$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30501__auto____1;
return cljs$core$async$state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___32478,out))
})();
var state__30590__auto__ = (function (){var statearr_32476 = f__30589__auto__.call(null);
(statearr_32476[(6)] = c__30588__auto___32478);

return statearr_32476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___32478,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1509593227553
