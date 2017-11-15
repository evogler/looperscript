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
var G__33657 = arguments.length;
switch (G__33657) {
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
if(typeof cljs.core.async.t_cljs$core$async33658 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33658 = (function (f,blockable,meta33659){
this.f = f;
this.blockable = blockable;
this.meta33659 = meta33659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33660,meta33659__$1){
var self__ = this;
var _33660__$1 = this;
return (new cljs.core.async.t_cljs$core$async33658(self__.f,self__.blockable,meta33659__$1));
});

cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33660){
var self__ = this;
var _33660__$1 = this;
return self__.meta33659;
});

cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33659","meta33659",-1021915730,null)], null);
});

cljs.core.async.t_cljs$core$async33658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33658";

cljs.core.async.t_cljs$core$async33658.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async33658");
});

cljs.core.async.__GT_t_cljs$core$async33658 = (function cljs$core$async$__GT_t_cljs$core$async33658(f__$1,blockable__$1,meta33659){
return (new cljs.core.async.t_cljs$core$async33658(f__$1,blockable__$1,meta33659));
});

}

return (new cljs.core.async.t_cljs$core$async33658(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33664 = arguments.length;
switch (G__33664) {
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
var G__33667 = arguments.length;
switch (G__33667) {
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
var G__33670 = arguments.length;
switch (G__33670) {
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
var val_33672 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33672);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33672,ret){
return (function (){
return fn1.call(null,val_33672);
});})(val_33672,ret))
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
var G__33674 = arguments.length;
switch (G__33674) {
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
var n__28881__auto___33676 = n;
var x_33677 = (0);
while(true){
if((x_33677 < n__28881__auto___33676)){
(a[x_33677] = (0));

var G__33678 = (x_33677 + (1));
x_33677 = G__33678;
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

var G__33679 = (i + (1));
i = G__33679;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33680 = (function (flag,meta33681){
this.flag = flag;
this.meta33681 = meta33681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33682,meta33681__$1){
var self__ = this;
var _33682__$1 = this;
return (new cljs.core.async.t_cljs$core$async33680(self__.flag,meta33681__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33682){
var self__ = this;
var _33682__$1 = this;
return self__.meta33681;
});})(flag))
;

cljs.core.async.t_cljs$core$async33680.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33680.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33680.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33681","meta33681",532739338,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33680";

cljs.core.async.t_cljs$core$async33680.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async33680");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33680 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33680(flag__$1,meta33681){
return (new cljs.core.async.t_cljs$core$async33680(flag__$1,meta33681));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33680(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33683 = (function (flag,cb,meta33684){
this.flag = flag;
this.cb = cb;
this.meta33684 = meta33684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33685,meta33684__$1){
var self__ = this;
var _33685__$1 = this;
return (new cljs.core.async.t_cljs$core$async33683(self__.flag,self__.cb,meta33684__$1));
});

cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33685){
var self__ = this;
var _33685__$1 = this;
return self__.meta33684;
});

cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33683.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33684","meta33684",-1607608484,null)], null);
});

cljs.core.async.t_cljs$core$async33683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33683";

cljs.core.async.t_cljs$core$async33683.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async33683");
});

cljs.core.async.__GT_t_cljs$core$async33683 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33683(flag__$1,cb__$1,meta33684){
return (new cljs.core.async.t_cljs$core$async33683(flag__$1,cb__$1,meta33684));
});

}

return (new cljs.core.async.t_cljs$core$async33683(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33686_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33686_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33687_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33687_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27936__auto__ = wport;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33688 = (i + (1));
i = G__33688;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27936__auto__ = ret;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27924__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27924__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27924__auto__;
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
var args__29112__auto__ = [];
var len__29105__auto___33694 = arguments.length;
var i__29106__auto___33695 = (0);
while(true){
if((i__29106__auto___33695 < len__29105__auto___33694)){
args__29112__auto__.push((arguments[i__29106__auto___33695]));

var G__33696 = (i__29106__auto___33695 + (1));
i__29106__auto___33695 = G__33696;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((1) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29113__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33691){
var map__33692 = p__33691;
var map__33692__$1 = ((((!((map__33692 == null)))?((((map__33692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33692):map__33692);
var opts = map__33692__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33689){
var G__33690 = cljs.core.first.call(null,seq33689);
var seq33689__$1 = cljs.core.next.call(null,seq33689);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33690,seq33689__$1);
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
var G__33698 = arguments.length;
switch (G__33698) {
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
var c__33611__auto___33744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___33744){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___33744){
return (function (state_33722){
var state_val_33723 = (state_33722[(1)]);
if((state_val_33723 === (7))){
var inst_33718 = (state_33722[(2)]);
var state_33722__$1 = state_33722;
var statearr_33724_33745 = state_33722__$1;
(statearr_33724_33745[(2)] = inst_33718);

(statearr_33724_33745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (1))){
var state_33722__$1 = state_33722;
var statearr_33725_33746 = state_33722__$1;
(statearr_33725_33746[(2)] = null);

(statearr_33725_33746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (4))){
var inst_33701 = (state_33722[(7)]);
var inst_33701__$1 = (state_33722[(2)]);
var inst_33702 = (inst_33701__$1 == null);
var state_33722__$1 = (function (){var statearr_33726 = state_33722;
(statearr_33726[(7)] = inst_33701__$1);

return statearr_33726;
})();
if(cljs.core.truth_(inst_33702)){
var statearr_33727_33747 = state_33722__$1;
(statearr_33727_33747[(1)] = (5));

} else {
var statearr_33728_33748 = state_33722__$1;
(statearr_33728_33748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (13))){
var state_33722__$1 = state_33722;
var statearr_33729_33749 = state_33722__$1;
(statearr_33729_33749[(2)] = null);

(statearr_33729_33749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (6))){
var inst_33701 = (state_33722[(7)]);
var state_33722__$1 = state_33722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33722__$1,(11),to,inst_33701);
} else {
if((state_val_33723 === (3))){
var inst_33720 = (state_33722[(2)]);
var state_33722__$1 = state_33722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33722__$1,inst_33720);
} else {
if((state_val_33723 === (12))){
var state_33722__$1 = state_33722;
var statearr_33730_33750 = state_33722__$1;
(statearr_33730_33750[(2)] = null);

(statearr_33730_33750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (2))){
var state_33722__$1 = state_33722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33722__$1,(4),from);
} else {
if((state_val_33723 === (11))){
var inst_33711 = (state_33722[(2)]);
var state_33722__$1 = state_33722;
if(cljs.core.truth_(inst_33711)){
var statearr_33731_33751 = state_33722__$1;
(statearr_33731_33751[(1)] = (12));

} else {
var statearr_33732_33752 = state_33722__$1;
(statearr_33732_33752[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (9))){
var state_33722__$1 = state_33722;
var statearr_33733_33753 = state_33722__$1;
(statearr_33733_33753[(2)] = null);

(statearr_33733_33753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (5))){
var state_33722__$1 = state_33722;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33734_33754 = state_33722__$1;
(statearr_33734_33754[(1)] = (8));

} else {
var statearr_33735_33755 = state_33722__$1;
(statearr_33735_33755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (14))){
var inst_33716 = (state_33722[(2)]);
var state_33722__$1 = state_33722;
var statearr_33736_33756 = state_33722__$1;
(statearr_33736_33756[(2)] = inst_33716);

(statearr_33736_33756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (10))){
var inst_33708 = (state_33722[(2)]);
var state_33722__$1 = state_33722;
var statearr_33737_33757 = state_33722__$1;
(statearr_33737_33757[(2)] = inst_33708);

(statearr_33737_33757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (8))){
var inst_33705 = cljs.core.async.close_BANG_.call(null,to);
var state_33722__$1 = state_33722;
var statearr_33738_33758 = state_33722__$1;
(statearr_33738_33758[(2)] = inst_33705);

(statearr_33738_33758[(1)] = (10));


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
});})(c__33611__auto___33744))
;
return ((function (switch__33523__auto__,c__33611__auto___33744){
return (function() {
var cljs$core$async$state_machine__33524__auto__ = null;
var cljs$core$async$state_machine__33524__auto____0 = (function (){
var statearr_33739 = [null,null,null,null,null,null,null,null];
(statearr_33739[(0)] = cljs$core$async$state_machine__33524__auto__);

(statearr_33739[(1)] = (1));

return statearr_33739;
});
var cljs$core$async$state_machine__33524__auto____1 = (function (state_33722){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_33722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e33740){if((e33740 instanceof Object)){
var ex__33527__auto__ = e33740;
var statearr_33741_33759 = state_33722;
(statearr_33741_33759[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33760 = state_33722;
state_33722 = G__33760;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$state_machine__33524__auto__ = function(state_33722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33524__auto____1.call(this,state_33722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33524__auto____0;
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33524__auto____1;
return cljs$core$async$state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___33744))
})();
var state__33613__auto__ = (function (){var statearr_33742 = f__33612__auto__.call(null);
(statearr_33742[(6)] = c__33611__auto___33744);

return statearr_33742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___33744))
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
return (function (p__33761){
var vec__33762 = p__33761;
var v = cljs.core.nth.call(null,vec__33762,(0),null);
var p = cljs.core.nth.call(null,vec__33762,(1),null);
var job = vec__33762;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33611__auto___33933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___33933,res,vec__33762,v,p,job,jobs,results){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___33933,res,vec__33762,v,p,job,jobs,results){
return (function (state_33769){
var state_val_33770 = (state_33769[(1)]);
if((state_val_33770 === (1))){
var state_33769__$1 = state_33769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33769__$1,(2),res,v);
} else {
if((state_val_33770 === (2))){
var inst_33766 = (state_33769[(2)]);
var inst_33767 = cljs.core.async.close_BANG_.call(null,res);
var state_33769__$1 = (function (){var statearr_33771 = state_33769;
(statearr_33771[(7)] = inst_33766);

return statearr_33771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33769__$1,inst_33767);
} else {
return null;
}
}
});})(c__33611__auto___33933,res,vec__33762,v,p,job,jobs,results))
;
return ((function (switch__33523__auto__,c__33611__auto___33933,res,vec__33762,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0 = (function (){
var statearr_33772 = [null,null,null,null,null,null,null,null];
(statearr_33772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__);

(statearr_33772[(1)] = (1));

return statearr_33772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1 = (function (state_33769){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_33769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e33773){if((e33773 instanceof Object)){
var ex__33527__auto__ = e33773;
var statearr_33774_33934 = state_33769;
(statearr_33774_33934[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33935 = state_33769;
state_33769 = G__33935;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__ = function(state_33769){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1.call(this,state_33769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___33933,res,vec__33762,v,p,job,jobs,results))
})();
var state__33613__auto__ = (function (){var statearr_33775 = f__33612__auto__.call(null);
(statearr_33775[(6)] = c__33611__auto___33933);

return statearr_33775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___33933,res,vec__33762,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33776){
var vec__33777 = p__33776;
var v = cljs.core.nth.call(null,vec__33777,(0),null);
var p = cljs.core.nth.call(null,vec__33777,(1),null);
var job = vec__33777;
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
var n__28881__auto___33936 = n;
var __33937 = (0);
while(true){
if((__33937 < n__28881__auto___33936)){
var G__33780_33938 = type;
var G__33780_33939__$1 = (((G__33780_33938 instanceof cljs.core.Keyword))?G__33780_33938.fqn:null);
switch (G__33780_33939__$1) {
case "compute":
var c__33611__auto___33941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33937,c__33611__auto___33941,G__33780_33938,G__33780_33939__$1,n__28881__auto___33936,jobs,results,process,async){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (__33937,c__33611__auto___33941,G__33780_33938,G__33780_33939__$1,n__28881__auto___33936,jobs,results,process,async){
return (function (state_33793){
var state_val_33794 = (state_33793[(1)]);
if((state_val_33794 === (1))){
var state_33793__$1 = state_33793;
var statearr_33795_33942 = state_33793__$1;
(statearr_33795_33942[(2)] = null);

(statearr_33795_33942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (2))){
var state_33793__$1 = state_33793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33793__$1,(4),jobs);
} else {
if((state_val_33794 === (3))){
var inst_33791 = (state_33793[(2)]);
var state_33793__$1 = state_33793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33793__$1,inst_33791);
} else {
if((state_val_33794 === (4))){
var inst_33783 = (state_33793[(2)]);
var inst_33784 = process.call(null,inst_33783);
var state_33793__$1 = state_33793;
if(cljs.core.truth_(inst_33784)){
var statearr_33796_33943 = state_33793__$1;
(statearr_33796_33943[(1)] = (5));

} else {
var statearr_33797_33944 = state_33793__$1;
(statearr_33797_33944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (5))){
var state_33793__$1 = state_33793;
var statearr_33798_33945 = state_33793__$1;
(statearr_33798_33945[(2)] = null);

(statearr_33798_33945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (6))){
var state_33793__$1 = state_33793;
var statearr_33799_33946 = state_33793__$1;
(statearr_33799_33946[(2)] = null);

(statearr_33799_33946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33794 === (7))){
var inst_33789 = (state_33793[(2)]);
var state_33793__$1 = state_33793;
var statearr_33800_33947 = state_33793__$1;
(statearr_33800_33947[(2)] = inst_33789);

(statearr_33800_33947[(1)] = (3));


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
});})(__33937,c__33611__auto___33941,G__33780_33938,G__33780_33939__$1,n__28881__auto___33936,jobs,results,process,async))
;
return ((function (__33937,switch__33523__auto__,c__33611__auto___33941,G__33780_33938,G__33780_33939__$1,n__28881__auto___33936,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0 = (function (){
var statearr_33801 = [null,null,null,null,null,null,null];
(statearr_33801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__);

(statearr_33801[(1)] = (1));

return statearr_33801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1 = (function (state_33793){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_33793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e33802){if((e33802 instanceof Object)){
var ex__33527__auto__ = e33802;
var statearr_33803_33948 = state_33793;
(statearr_33803_33948[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33949 = state_33793;
state_33793 = G__33949;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__ = function(state_33793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1.call(this,state_33793);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__;
})()
;})(__33937,switch__33523__auto__,c__33611__auto___33941,G__33780_33938,G__33780_33939__$1,n__28881__auto___33936,jobs,results,process,async))
})();
var state__33613__auto__ = (function (){var statearr_33804 = f__33612__auto__.call(null);
(statearr_33804[(6)] = c__33611__auto___33941);

return statearr_33804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(__33937,c__33611__auto___33941,G__33780_33938,G__33780_33939__$1,n__28881__auto___33936,jobs,results,process,async))
);


break;
case "async":
var c__33611__auto___33950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33937,c__33611__auto___33950,G__33780_33938,G__33780_33939__$1,n__28881__auto___33936,jobs,results,process,async){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (__33937,c__33611__auto___33950,G__33780_33938,G__33780_33939__$1,n__28881__auto___33936,jobs,results,process,async){
return (function (state_33817){
var state_val_33818 = (state_33817[(1)]);
if((state_val_33818 === (1))){
var state_33817__$1 = state_33817;
var statearr_33819_33951 = state_33817__$1;
(statearr_33819_33951[(2)] = null);

(statearr_33819_33951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (2))){
var state_33817__$1 = state_33817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33817__$1,(4),jobs);
} else {
if((state_val_33818 === (3))){
var inst_33815 = (state_33817[(2)]);
var state_33817__$1 = state_33817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33817__$1,inst_33815);
} else {
if((state_val_33818 === (4))){
var inst_33807 = (state_33817[(2)]);
var inst_33808 = async.call(null,inst_33807);
var state_33817__$1 = state_33817;
if(cljs.core.truth_(inst_33808)){
var statearr_33820_33952 = state_33817__$1;
(statearr_33820_33952[(1)] = (5));

} else {
var statearr_33821_33953 = state_33817__$1;
(statearr_33821_33953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (5))){
var state_33817__$1 = state_33817;
var statearr_33822_33954 = state_33817__$1;
(statearr_33822_33954[(2)] = null);

(statearr_33822_33954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (6))){
var state_33817__$1 = state_33817;
var statearr_33823_33955 = state_33817__$1;
(statearr_33823_33955[(2)] = null);

(statearr_33823_33955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33818 === (7))){
var inst_33813 = (state_33817[(2)]);
var state_33817__$1 = state_33817;
var statearr_33824_33956 = state_33817__$1;
(statearr_33824_33956[(2)] = inst_33813);

(statearr_33824_33956[(1)] = (3));


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
});})(__33937,c__33611__auto___33950,G__33780_33938,G__33780_33939__$1,n__28881__auto___33936,jobs,results,process,async))
;
return ((function (__33937,switch__33523__auto__,c__33611__auto___33950,G__33780_33938,G__33780_33939__$1,n__28881__auto___33936,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0 = (function (){
var statearr_33825 = [null,null,null,null,null,null,null];
(statearr_33825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__);

(statearr_33825[(1)] = (1));

return statearr_33825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1 = (function (state_33817){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_33817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e33826){if((e33826 instanceof Object)){
var ex__33527__auto__ = e33826;
var statearr_33827_33957 = state_33817;
(statearr_33827_33957[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33958 = state_33817;
state_33817 = G__33958;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__ = function(state_33817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1.call(this,state_33817);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__;
})()
;})(__33937,switch__33523__auto__,c__33611__auto___33950,G__33780_33938,G__33780_33939__$1,n__28881__auto___33936,jobs,results,process,async))
})();
var state__33613__auto__ = (function (){var statearr_33828 = f__33612__auto__.call(null);
(statearr_33828[(6)] = c__33611__auto___33950);

return statearr_33828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(__33937,c__33611__auto___33950,G__33780_33938,G__33780_33939__$1,n__28881__auto___33936,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33780_33939__$1)].join('')));

}

var G__33959 = (__33937 + (1));
__33937 = G__33959;
continue;
} else {
}
break;
}

var c__33611__auto___33960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___33960,jobs,results,process,async){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___33960,jobs,results,process,async){
return (function (state_33850){
var state_val_33851 = (state_33850[(1)]);
if((state_val_33851 === (1))){
var state_33850__$1 = state_33850;
var statearr_33852_33961 = state_33850__$1;
(statearr_33852_33961[(2)] = null);

(statearr_33852_33961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (2))){
var state_33850__$1 = state_33850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33850__$1,(4),from);
} else {
if((state_val_33851 === (3))){
var inst_33848 = (state_33850[(2)]);
var state_33850__$1 = state_33850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33850__$1,inst_33848);
} else {
if((state_val_33851 === (4))){
var inst_33831 = (state_33850[(7)]);
var inst_33831__$1 = (state_33850[(2)]);
var inst_33832 = (inst_33831__$1 == null);
var state_33850__$1 = (function (){var statearr_33853 = state_33850;
(statearr_33853[(7)] = inst_33831__$1);

return statearr_33853;
})();
if(cljs.core.truth_(inst_33832)){
var statearr_33854_33962 = state_33850__$1;
(statearr_33854_33962[(1)] = (5));

} else {
var statearr_33855_33963 = state_33850__$1;
(statearr_33855_33963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (5))){
var inst_33834 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33850__$1 = state_33850;
var statearr_33856_33964 = state_33850__$1;
(statearr_33856_33964[(2)] = inst_33834);

(statearr_33856_33964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (6))){
var inst_33836 = (state_33850[(8)]);
var inst_33831 = (state_33850[(7)]);
var inst_33836__$1 = cljs.core.async.chan.call(null,(1));
var inst_33837 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33838 = [inst_33831,inst_33836__$1];
var inst_33839 = (new cljs.core.PersistentVector(null,2,(5),inst_33837,inst_33838,null));
var state_33850__$1 = (function (){var statearr_33857 = state_33850;
(statearr_33857[(8)] = inst_33836__$1);

return statearr_33857;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33850__$1,(8),jobs,inst_33839);
} else {
if((state_val_33851 === (7))){
var inst_33846 = (state_33850[(2)]);
var state_33850__$1 = state_33850;
var statearr_33858_33965 = state_33850__$1;
(statearr_33858_33965[(2)] = inst_33846);

(statearr_33858_33965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33851 === (8))){
var inst_33836 = (state_33850[(8)]);
var inst_33841 = (state_33850[(2)]);
var state_33850__$1 = (function (){var statearr_33859 = state_33850;
(statearr_33859[(9)] = inst_33841);

return statearr_33859;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33850__$1,(9),results,inst_33836);
} else {
if((state_val_33851 === (9))){
var inst_33843 = (state_33850[(2)]);
var state_33850__$1 = (function (){var statearr_33860 = state_33850;
(statearr_33860[(10)] = inst_33843);

return statearr_33860;
})();
var statearr_33861_33966 = state_33850__$1;
(statearr_33861_33966[(2)] = null);

(statearr_33861_33966[(1)] = (2));


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
});})(c__33611__auto___33960,jobs,results,process,async))
;
return ((function (switch__33523__auto__,c__33611__auto___33960,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0 = (function (){
var statearr_33862 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33862[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__);

(statearr_33862[(1)] = (1));

return statearr_33862;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1 = (function (state_33850){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_33850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e33863){if((e33863 instanceof Object)){
var ex__33527__auto__ = e33863;
var statearr_33864_33967 = state_33850;
(statearr_33864_33967[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33968 = state_33850;
state_33850 = G__33968;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__ = function(state_33850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1.call(this,state_33850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___33960,jobs,results,process,async))
})();
var state__33613__auto__ = (function (){var statearr_33865 = f__33612__auto__.call(null);
(statearr_33865[(6)] = c__33611__auto___33960);

return statearr_33865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___33960,jobs,results,process,async))
);


var c__33611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto__,jobs,results,process,async){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto__,jobs,results,process,async){
return (function (state_33903){
var state_val_33904 = (state_33903[(1)]);
if((state_val_33904 === (7))){
var inst_33899 = (state_33903[(2)]);
var state_33903__$1 = state_33903;
var statearr_33905_33969 = state_33903__$1;
(statearr_33905_33969[(2)] = inst_33899);

(statearr_33905_33969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (20))){
var state_33903__$1 = state_33903;
var statearr_33906_33970 = state_33903__$1;
(statearr_33906_33970[(2)] = null);

(statearr_33906_33970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (1))){
var state_33903__$1 = state_33903;
var statearr_33907_33971 = state_33903__$1;
(statearr_33907_33971[(2)] = null);

(statearr_33907_33971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (4))){
var inst_33868 = (state_33903[(7)]);
var inst_33868__$1 = (state_33903[(2)]);
var inst_33869 = (inst_33868__$1 == null);
var state_33903__$1 = (function (){var statearr_33908 = state_33903;
(statearr_33908[(7)] = inst_33868__$1);

return statearr_33908;
})();
if(cljs.core.truth_(inst_33869)){
var statearr_33909_33972 = state_33903__$1;
(statearr_33909_33972[(1)] = (5));

} else {
var statearr_33910_33973 = state_33903__$1;
(statearr_33910_33973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (15))){
var inst_33881 = (state_33903[(8)]);
var state_33903__$1 = state_33903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33903__$1,(18),to,inst_33881);
} else {
if((state_val_33904 === (21))){
var inst_33894 = (state_33903[(2)]);
var state_33903__$1 = state_33903;
var statearr_33911_33974 = state_33903__$1;
(statearr_33911_33974[(2)] = inst_33894);

(statearr_33911_33974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (13))){
var inst_33896 = (state_33903[(2)]);
var state_33903__$1 = (function (){var statearr_33912 = state_33903;
(statearr_33912[(9)] = inst_33896);

return statearr_33912;
})();
var statearr_33913_33975 = state_33903__$1;
(statearr_33913_33975[(2)] = null);

(statearr_33913_33975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (6))){
var inst_33868 = (state_33903[(7)]);
var state_33903__$1 = state_33903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33903__$1,(11),inst_33868);
} else {
if((state_val_33904 === (17))){
var inst_33889 = (state_33903[(2)]);
var state_33903__$1 = state_33903;
if(cljs.core.truth_(inst_33889)){
var statearr_33914_33976 = state_33903__$1;
(statearr_33914_33976[(1)] = (19));

} else {
var statearr_33915_33977 = state_33903__$1;
(statearr_33915_33977[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (3))){
var inst_33901 = (state_33903[(2)]);
var state_33903__$1 = state_33903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33903__$1,inst_33901);
} else {
if((state_val_33904 === (12))){
var inst_33878 = (state_33903[(10)]);
var state_33903__$1 = state_33903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33903__$1,(14),inst_33878);
} else {
if((state_val_33904 === (2))){
var state_33903__$1 = state_33903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33903__$1,(4),results);
} else {
if((state_val_33904 === (19))){
var state_33903__$1 = state_33903;
var statearr_33916_33978 = state_33903__$1;
(statearr_33916_33978[(2)] = null);

(statearr_33916_33978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (11))){
var inst_33878 = (state_33903[(2)]);
var state_33903__$1 = (function (){var statearr_33917 = state_33903;
(statearr_33917[(10)] = inst_33878);

return statearr_33917;
})();
var statearr_33918_33979 = state_33903__$1;
(statearr_33918_33979[(2)] = null);

(statearr_33918_33979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (9))){
var state_33903__$1 = state_33903;
var statearr_33919_33980 = state_33903__$1;
(statearr_33919_33980[(2)] = null);

(statearr_33919_33980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (5))){
var state_33903__$1 = state_33903;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33920_33981 = state_33903__$1;
(statearr_33920_33981[(1)] = (8));

} else {
var statearr_33921_33982 = state_33903__$1;
(statearr_33921_33982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (14))){
var inst_33883 = (state_33903[(11)]);
var inst_33881 = (state_33903[(8)]);
var inst_33881__$1 = (state_33903[(2)]);
var inst_33882 = (inst_33881__$1 == null);
var inst_33883__$1 = cljs.core.not.call(null,inst_33882);
var state_33903__$1 = (function (){var statearr_33922 = state_33903;
(statearr_33922[(11)] = inst_33883__$1);

(statearr_33922[(8)] = inst_33881__$1);

return statearr_33922;
})();
if(inst_33883__$1){
var statearr_33923_33983 = state_33903__$1;
(statearr_33923_33983[(1)] = (15));

} else {
var statearr_33924_33984 = state_33903__$1;
(statearr_33924_33984[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (16))){
var inst_33883 = (state_33903[(11)]);
var state_33903__$1 = state_33903;
var statearr_33925_33985 = state_33903__$1;
(statearr_33925_33985[(2)] = inst_33883);

(statearr_33925_33985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (10))){
var inst_33875 = (state_33903[(2)]);
var state_33903__$1 = state_33903;
var statearr_33926_33986 = state_33903__$1;
(statearr_33926_33986[(2)] = inst_33875);

(statearr_33926_33986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (18))){
var inst_33886 = (state_33903[(2)]);
var state_33903__$1 = state_33903;
var statearr_33927_33987 = state_33903__$1;
(statearr_33927_33987[(2)] = inst_33886);

(statearr_33927_33987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (8))){
var inst_33872 = cljs.core.async.close_BANG_.call(null,to);
var state_33903__$1 = state_33903;
var statearr_33928_33988 = state_33903__$1;
(statearr_33928_33988[(2)] = inst_33872);

(statearr_33928_33988[(1)] = (10));


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
});})(c__33611__auto__,jobs,results,process,async))
;
return ((function (switch__33523__auto__,c__33611__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0 = (function (){
var statearr_33929 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__);

(statearr_33929[(1)] = (1));

return statearr_33929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1 = (function (state_33903){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_33903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e33930){if((e33930 instanceof Object)){
var ex__33527__auto__ = e33930;
var statearr_33931_33989 = state_33903;
(statearr_33931_33989[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33990 = state_33903;
state_33903 = G__33990;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__ = function(state_33903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1.call(this,state_33903);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33524__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto__,jobs,results,process,async))
})();
var state__33613__auto__ = (function (){var statearr_33932 = f__33612__auto__.call(null);
(statearr_33932[(6)] = c__33611__auto__);

return statearr_33932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto__,jobs,results,process,async))
);

return c__33611__auto__;
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
var G__33992 = arguments.length;
switch (G__33992) {
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
var G__33995 = arguments.length;
switch (G__33995) {
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
var G__33998 = arguments.length;
switch (G__33998) {
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
var c__33611__auto___34047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___34047,tc,fc){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___34047,tc,fc){
return (function (state_34024){
var state_val_34025 = (state_34024[(1)]);
if((state_val_34025 === (7))){
var inst_34020 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
var statearr_34026_34048 = state_34024__$1;
(statearr_34026_34048[(2)] = inst_34020);

(statearr_34026_34048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (1))){
var state_34024__$1 = state_34024;
var statearr_34027_34049 = state_34024__$1;
(statearr_34027_34049[(2)] = null);

(statearr_34027_34049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (4))){
var inst_34001 = (state_34024[(7)]);
var inst_34001__$1 = (state_34024[(2)]);
var inst_34002 = (inst_34001__$1 == null);
var state_34024__$1 = (function (){var statearr_34028 = state_34024;
(statearr_34028[(7)] = inst_34001__$1);

return statearr_34028;
})();
if(cljs.core.truth_(inst_34002)){
var statearr_34029_34050 = state_34024__$1;
(statearr_34029_34050[(1)] = (5));

} else {
var statearr_34030_34051 = state_34024__$1;
(statearr_34030_34051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (13))){
var state_34024__$1 = state_34024;
var statearr_34031_34052 = state_34024__$1;
(statearr_34031_34052[(2)] = null);

(statearr_34031_34052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (6))){
var inst_34001 = (state_34024[(7)]);
var inst_34007 = p.call(null,inst_34001);
var state_34024__$1 = state_34024;
if(cljs.core.truth_(inst_34007)){
var statearr_34032_34053 = state_34024__$1;
(statearr_34032_34053[(1)] = (9));

} else {
var statearr_34033_34054 = state_34024__$1;
(statearr_34033_34054[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (3))){
var inst_34022 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34024__$1,inst_34022);
} else {
if((state_val_34025 === (12))){
var state_34024__$1 = state_34024;
var statearr_34034_34055 = state_34024__$1;
(statearr_34034_34055[(2)] = null);

(statearr_34034_34055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (2))){
var state_34024__$1 = state_34024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34024__$1,(4),ch);
} else {
if((state_val_34025 === (11))){
var inst_34001 = (state_34024[(7)]);
var inst_34011 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34024__$1,(8),inst_34011,inst_34001);
} else {
if((state_val_34025 === (9))){
var state_34024__$1 = state_34024;
var statearr_34035_34056 = state_34024__$1;
(statearr_34035_34056[(2)] = tc);

(statearr_34035_34056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (5))){
var inst_34004 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34005 = cljs.core.async.close_BANG_.call(null,fc);
var state_34024__$1 = (function (){var statearr_34036 = state_34024;
(statearr_34036[(8)] = inst_34004);

return statearr_34036;
})();
var statearr_34037_34057 = state_34024__$1;
(statearr_34037_34057[(2)] = inst_34005);

(statearr_34037_34057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (14))){
var inst_34018 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
var statearr_34038_34058 = state_34024__$1;
(statearr_34038_34058[(2)] = inst_34018);

(statearr_34038_34058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (10))){
var state_34024__$1 = state_34024;
var statearr_34039_34059 = state_34024__$1;
(statearr_34039_34059[(2)] = fc);

(statearr_34039_34059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34025 === (8))){
var inst_34013 = (state_34024[(2)]);
var state_34024__$1 = state_34024;
if(cljs.core.truth_(inst_34013)){
var statearr_34040_34060 = state_34024__$1;
(statearr_34040_34060[(1)] = (12));

} else {
var statearr_34041_34061 = state_34024__$1;
(statearr_34041_34061[(1)] = (13));

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
});})(c__33611__auto___34047,tc,fc))
;
return ((function (switch__33523__auto__,c__33611__auto___34047,tc,fc){
return (function() {
var cljs$core$async$state_machine__33524__auto__ = null;
var cljs$core$async$state_machine__33524__auto____0 = (function (){
var statearr_34042 = [null,null,null,null,null,null,null,null,null];
(statearr_34042[(0)] = cljs$core$async$state_machine__33524__auto__);

(statearr_34042[(1)] = (1));

return statearr_34042;
});
var cljs$core$async$state_machine__33524__auto____1 = (function (state_34024){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_34024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e34043){if((e34043 instanceof Object)){
var ex__33527__auto__ = e34043;
var statearr_34044_34062 = state_34024;
(statearr_34044_34062[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34063 = state_34024;
state_34024 = G__34063;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$state_machine__33524__auto__ = function(state_34024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33524__auto____1.call(this,state_34024);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33524__auto____0;
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33524__auto____1;
return cljs$core$async$state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___34047,tc,fc))
})();
var state__33613__auto__ = (function (){var statearr_34045 = f__33612__auto__.call(null);
(statearr_34045[(6)] = c__33611__auto___34047);

return statearr_34045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___34047,tc,fc))
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
var c__33611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto__){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto__){
return (function (state_34084){
var state_val_34085 = (state_34084[(1)]);
if((state_val_34085 === (7))){
var inst_34080 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
var statearr_34086_34104 = state_34084__$1;
(statearr_34086_34104[(2)] = inst_34080);

(statearr_34086_34104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (1))){
var inst_34064 = init;
var state_34084__$1 = (function (){var statearr_34087 = state_34084;
(statearr_34087[(7)] = inst_34064);

return statearr_34087;
})();
var statearr_34088_34105 = state_34084__$1;
(statearr_34088_34105[(2)] = null);

(statearr_34088_34105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (4))){
var inst_34067 = (state_34084[(8)]);
var inst_34067__$1 = (state_34084[(2)]);
var inst_34068 = (inst_34067__$1 == null);
var state_34084__$1 = (function (){var statearr_34089 = state_34084;
(statearr_34089[(8)] = inst_34067__$1);

return statearr_34089;
})();
if(cljs.core.truth_(inst_34068)){
var statearr_34090_34106 = state_34084__$1;
(statearr_34090_34106[(1)] = (5));

} else {
var statearr_34091_34107 = state_34084__$1;
(statearr_34091_34107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (6))){
var inst_34071 = (state_34084[(9)]);
var inst_34064 = (state_34084[(7)]);
var inst_34067 = (state_34084[(8)]);
var inst_34071__$1 = f.call(null,inst_34064,inst_34067);
var inst_34072 = cljs.core.reduced_QMARK_.call(null,inst_34071__$1);
var state_34084__$1 = (function (){var statearr_34092 = state_34084;
(statearr_34092[(9)] = inst_34071__$1);

return statearr_34092;
})();
if(inst_34072){
var statearr_34093_34108 = state_34084__$1;
(statearr_34093_34108[(1)] = (8));

} else {
var statearr_34094_34109 = state_34084__$1;
(statearr_34094_34109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (3))){
var inst_34082 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34084__$1,inst_34082);
} else {
if((state_val_34085 === (2))){
var state_34084__$1 = state_34084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34084__$1,(4),ch);
} else {
if((state_val_34085 === (9))){
var inst_34071 = (state_34084[(9)]);
var inst_34064 = inst_34071;
var state_34084__$1 = (function (){var statearr_34095 = state_34084;
(statearr_34095[(7)] = inst_34064);

return statearr_34095;
})();
var statearr_34096_34110 = state_34084__$1;
(statearr_34096_34110[(2)] = null);

(statearr_34096_34110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (5))){
var inst_34064 = (state_34084[(7)]);
var state_34084__$1 = state_34084;
var statearr_34097_34111 = state_34084__$1;
(statearr_34097_34111[(2)] = inst_34064);

(statearr_34097_34111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (10))){
var inst_34078 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
var statearr_34098_34112 = state_34084__$1;
(statearr_34098_34112[(2)] = inst_34078);

(statearr_34098_34112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (8))){
var inst_34071 = (state_34084[(9)]);
var inst_34074 = cljs.core.deref.call(null,inst_34071);
var state_34084__$1 = state_34084;
var statearr_34099_34113 = state_34084__$1;
(statearr_34099_34113[(2)] = inst_34074);

(statearr_34099_34113[(1)] = (10));


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
});})(c__33611__auto__))
;
return ((function (switch__33523__auto__,c__33611__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33524__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33524__auto____0 = (function (){
var statearr_34100 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34100[(0)] = cljs$core$async$reduce_$_state_machine__33524__auto__);

(statearr_34100[(1)] = (1));

return statearr_34100;
});
var cljs$core$async$reduce_$_state_machine__33524__auto____1 = (function (state_34084){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_34084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e34101){if((e34101 instanceof Object)){
var ex__33527__auto__ = e34101;
var statearr_34102_34114 = state_34084;
(statearr_34102_34114[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34115 = state_34084;
state_34084 = G__34115;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33524__auto__ = function(state_34084){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33524__auto____1.call(this,state_34084);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33524__auto____0;
cljs$core$async$reduce_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33524__auto____1;
return cljs$core$async$reduce_$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto__))
})();
var state__33613__auto__ = (function (){var statearr_34103 = f__33612__auto__.call(null);
(statearr_34103[(6)] = c__33611__auto__);

return statearr_34103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto__))
);

return c__33611__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto__,f__$1){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto__,f__$1){
return (function (state_34121){
var state_val_34122 = (state_34121[(1)]);
if((state_val_34122 === (1))){
var inst_34116 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34121__$1 = state_34121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34121__$1,(2),inst_34116);
} else {
if((state_val_34122 === (2))){
var inst_34118 = (state_34121[(2)]);
var inst_34119 = f__$1.call(null,inst_34118);
var state_34121__$1 = state_34121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34121__$1,inst_34119);
} else {
return null;
}
}
});})(c__33611__auto__,f__$1))
;
return ((function (switch__33523__auto__,c__33611__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33524__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33524__auto____0 = (function (){
var statearr_34123 = [null,null,null,null,null,null,null];
(statearr_34123[(0)] = cljs$core$async$transduce_$_state_machine__33524__auto__);

(statearr_34123[(1)] = (1));

return statearr_34123;
});
var cljs$core$async$transduce_$_state_machine__33524__auto____1 = (function (state_34121){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_34121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e34124){if((e34124 instanceof Object)){
var ex__33527__auto__ = e34124;
var statearr_34125_34127 = state_34121;
(statearr_34125_34127[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34128 = state_34121;
state_34121 = G__34128;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33524__auto__ = function(state_34121){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33524__auto____1.call(this,state_34121);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33524__auto____0;
cljs$core$async$transduce_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33524__auto____1;
return cljs$core$async$transduce_$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto__,f__$1))
})();
var state__33613__auto__ = (function (){var statearr_34126 = f__33612__auto__.call(null);
(statearr_34126[(6)] = c__33611__auto__);

return statearr_34126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto__,f__$1))
);

return c__33611__auto__;
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
var G__34130 = arguments.length;
switch (G__34130) {
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
var c__33611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto__){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto__){
return (function (state_34155){
var state_val_34156 = (state_34155[(1)]);
if((state_val_34156 === (7))){
var inst_34137 = (state_34155[(2)]);
var state_34155__$1 = state_34155;
var statearr_34157_34178 = state_34155__$1;
(statearr_34157_34178[(2)] = inst_34137);

(statearr_34157_34178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34156 === (1))){
var inst_34131 = cljs.core.seq.call(null,coll);
var inst_34132 = inst_34131;
var state_34155__$1 = (function (){var statearr_34158 = state_34155;
(statearr_34158[(7)] = inst_34132);

return statearr_34158;
})();
var statearr_34159_34179 = state_34155__$1;
(statearr_34159_34179[(2)] = null);

(statearr_34159_34179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34156 === (4))){
var inst_34132 = (state_34155[(7)]);
var inst_34135 = cljs.core.first.call(null,inst_34132);
var state_34155__$1 = state_34155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34155__$1,(7),ch,inst_34135);
} else {
if((state_val_34156 === (13))){
var inst_34149 = (state_34155[(2)]);
var state_34155__$1 = state_34155;
var statearr_34160_34180 = state_34155__$1;
(statearr_34160_34180[(2)] = inst_34149);

(statearr_34160_34180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34156 === (6))){
var inst_34140 = (state_34155[(2)]);
var state_34155__$1 = state_34155;
if(cljs.core.truth_(inst_34140)){
var statearr_34161_34181 = state_34155__$1;
(statearr_34161_34181[(1)] = (8));

} else {
var statearr_34162_34182 = state_34155__$1;
(statearr_34162_34182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34156 === (3))){
var inst_34153 = (state_34155[(2)]);
var state_34155__$1 = state_34155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34155__$1,inst_34153);
} else {
if((state_val_34156 === (12))){
var state_34155__$1 = state_34155;
var statearr_34163_34183 = state_34155__$1;
(statearr_34163_34183[(2)] = null);

(statearr_34163_34183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34156 === (2))){
var inst_34132 = (state_34155[(7)]);
var state_34155__$1 = state_34155;
if(cljs.core.truth_(inst_34132)){
var statearr_34164_34184 = state_34155__$1;
(statearr_34164_34184[(1)] = (4));

} else {
var statearr_34165_34185 = state_34155__$1;
(statearr_34165_34185[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34156 === (11))){
var inst_34146 = cljs.core.async.close_BANG_.call(null,ch);
var state_34155__$1 = state_34155;
var statearr_34166_34186 = state_34155__$1;
(statearr_34166_34186[(2)] = inst_34146);

(statearr_34166_34186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34156 === (9))){
var state_34155__$1 = state_34155;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34167_34187 = state_34155__$1;
(statearr_34167_34187[(1)] = (11));

} else {
var statearr_34168_34188 = state_34155__$1;
(statearr_34168_34188[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34156 === (5))){
var inst_34132 = (state_34155[(7)]);
var state_34155__$1 = state_34155;
var statearr_34169_34189 = state_34155__$1;
(statearr_34169_34189[(2)] = inst_34132);

(statearr_34169_34189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34156 === (10))){
var inst_34151 = (state_34155[(2)]);
var state_34155__$1 = state_34155;
var statearr_34170_34190 = state_34155__$1;
(statearr_34170_34190[(2)] = inst_34151);

(statearr_34170_34190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34156 === (8))){
var inst_34132 = (state_34155[(7)]);
var inst_34142 = cljs.core.next.call(null,inst_34132);
var inst_34132__$1 = inst_34142;
var state_34155__$1 = (function (){var statearr_34171 = state_34155;
(statearr_34171[(7)] = inst_34132__$1);

return statearr_34171;
})();
var statearr_34172_34191 = state_34155__$1;
(statearr_34172_34191[(2)] = null);

(statearr_34172_34191[(1)] = (2));


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
});})(c__33611__auto__))
;
return ((function (switch__33523__auto__,c__33611__auto__){
return (function() {
var cljs$core$async$state_machine__33524__auto__ = null;
var cljs$core$async$state_machine__33524__auto____0 = (function (){
var statearr_34173 = [null,null,null,null,null,null,null,null];
(statearr_34173[(0)] = cljs$core$async$state_machine__33524__auto__);

(statearr_34173[(1)] = (1));

return statearr_34173;
});
var cljs$core$async$state_machine__33524__auto____1 = (function (state_34155){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_34155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e34174){if((e34174 instanceof Object)){
var ex__33527__auto__ = e34174;
var statearr_34175_34192 = state_34155;
(statearr_34175_34192[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34193 = state_34155;
state_34155 = G__34193;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$state_machine__33524__auto__ = function(state_34155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33524__auto____1.call(this,state_34155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33524__auto____0;
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33524__auto____1;
return cljs$core$async$state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto__))
})();
var state__33613__auto__ = (function (){var statearr_34176 = f__33612__auto__.call(null);
(statearr_34176[(6)] = c__33611__auto__);

return statearr_34176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto__))
);

return c__33611__auto__;
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
var x__28619__auto__ = (((_ == null))?null:_);
var m__28620__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,_);
} else {
var m__28620__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,_);
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
var x__28619__auto__ = (((m == null))?null:m);
var m__28620__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28620__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__28619__auto__ = (((m == null))?null:m);
var m__28620__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,m,ch);
} else {
var m__28620__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,m,ch);
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
var x__28619__auto__ = (((m == null))?null:m);
var m__28620__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,m);
} else {
var m__28620__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async34194 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34194 = (function (ch,cs,meta34195){
this.ch = ch;
this.cs = cs;
this.meta34195 = meta34195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34196,meta34195__$1){
var self__ = this;
var _34196__$1 = this;
return (new cljs.core.async.t_cljs$core$async34194(self__.ch,self__.cs,meta34195__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34196){
var self__ = this;
var _34196__$1 = this;
return self__.meta34195;
});})(cs))
;

cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34194.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34195","meta34195",1859924080,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34194.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34194";

cljs.core.async.t_cljs$core$async34194.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async34194");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34194 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34194(ch__$1,cs__$1,meta34195){
return (new cljs.core.async.t_cljs$core$async34194(ch__$1,cs__$1,meta34195));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34194(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33611__auto___34416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___34416,cs,m,dchan,dctr,done){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___34416,cs,m,dchan,dctr,done){
return (function (state_34331){
var state_val_34332 = (state_34331[(1)]);
if((state_val_34332 === (7))){
var inst_34327 = (state_34331[(2)]);
var state_34331__$1 = state_34331;
var statearr_34333_34417 = state_34331__$1;
(statearr_34333_34417[(2)] = inst_34327);

(statearr_34333_34417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (20))){
var inst_34230 = (state_34331[(7)]);
var inst_34242 = cljs.core.first.call(null,inst_34230);
var inst_34243 = cljs.core.nth.call(null,inst_34242,(0),null);
var inst_34244 = cljs.core.nth.call(null,inst_34242,(1),null);
var state_34331__$1 = (function (){var statearr_34334 = state_34331;
(statearr_34334[(8)] = inst_34243);

return statearr_34334;
})();
if(cljs.core.truth_(inst_34244)){
var statearr_34335_34418 = state_34331__$1;
(statearr_34335_34418[(1)] = (22));

} else {
var statearr_34336_34419 = state_34331__$1;
(statearr_34336_34419[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (27))){
var inst_34274 = (state_34331[(9)]);
var inst_34199 = (state_34331[(10)]);
var inst_34272 = (state_34331[(11)]);
var inst_34279 = (state_34331[(12)]);
var inst_34279__$1 = cljs.core._nth.call(null,inst_34272,inst_34274);
var inst_34280 = cljs.core.async.put_BANG_.call(null,inst_34279__$1,inst_34199,done);
var state_34331__$1 = (function (){var statearr_34337 = state_34331;
(statearr_34337[(12)] = inst_34279__$1);

return statearr_34337;
})();
if(cljs.core.truth_(inst_34280)){
var statearr_34338_34420 = state_34331__$1;
(statearr_34338_34420[(1)] = (30));

} else {
var statearr_34339_34421 = state_34331__$1;
(statearr_34339_34421[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (1))){
var state_34331__$1 = state_34331;
var statearr_34340_34422 = state_34331__$1;
(statearr_34340_34422[(2)] = null);

(statearr_34340_34422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (24))){
var inst_34230 = (state_34331[(7)]);
var inst_34249 = (state_34331[(2)]);
var inst_34250 = cljs.core.next.call(null,inst_34230);
var inst_34208 = inst_34250;
var inst_34209 = null;
var inst_34210 = (0);
var inst_34211 = (0);
var state_34331__$1 = (function (){var statearr_34341 = state_34331;
(statearr_34341[(13)] = inst_34210);

(statearr_34341[(14)] = inst_34211);

(statearr_34341[(15)] = inst_34249);

(statearr_34341[(16)] = inst_34208);

(statearr_34341[(17)] = inst_34209);

return statearr_34341;
})();
var statearr_34342_34423 = state_34331__$1;
(statearr_34342_34423[(2)] = null);

(statearr_34342_34423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (39))){
var state_34331__$1 = state_34331;
var statearr_34346_34424 = state_34331__$1;
(statearr_34346_34424[(2)] = null);

(statearr_34346_34424[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (4))){
var inst_34199 = (state_34331[(10)]);
var inst_34199__$1 = (state_34331[(2)]);
var inst_34200 = (inst_34199__$1 == null);
var state_34331__$1 = (function (){var statearr_34347 = state_34331;
(statearr_34347[(10)] = inst_34199__$1);

return statearr_34347;
})();
if(cljs.core.truth_(inst_34200)){
var statearr_34348_34425 = state_34331__$1;
(statearr_34348_34425[(1)] = (5));

} else {
var statearr_34349_34426 = state_34331__$1;
(statearr_34349_34426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (15))){
var inst_34210 = (state_34331[(13)]);
var inst_34211 = (state_34331[(14)]);
var inst_34208 = (state_34331[(16)]);
var inst_34209 = (state_34331[(17)]);
var inst_34226 = (state_34331[(2)]);
var inst_34227 = (inst_34211 + (1));
var tmp34343 = inst_34210;
var tmp34344 = inst_34208;
var tmp34345 = inst_34209;
var inst_34208__$1 = tmp34344;
var inst_34209__$1 = tmp34345;
var inst_34210__$1 = tmp34343;
var inst_34211__$1 = inst_34227;
var state_34331__$1 = (function (){var statearr_34350 = state_34331;
(statearr_34350[(13)] = inst_34210__$1);

(statearr_34350[(14)] = inst_34211__$1);

(statearr_34350[(16)] = inst_34208__$1);

(statearr_34350[(18)] = inst_34226);

(statearr_34350[(17)] = inst_34209__$1);

return statearr_34350;
})();
var statearr_34351_34427 = state_34331__$1;
(statearr_34351_34427[(2)] = null);

(statearr_34351_34427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (21))){
var inst_34253 = (state_34331[(2)]);
var state_34331__$1 = state_34331;
var statearr_34355_34428 = state_34331__$1;
(statearr_34355_34428[(2)] = inst_34253);

(statearr_34355_34428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (31))){
var inst_34279 = (state_34331[(12)]);
var inst_34283 = done.call(null,null);
var inst_34284 = cljs.core.async.untap_STAR_.call(null,m,inst_34279);
var state_34331__$1 = (function (){var statearr_34356 = state_34331;
(statearr_34356[(19)] = inst_34283);

return statearr_34356;
})();
var statearr_34357_34429 = state_34331__$1;
(statearr_34357_34429[(2)] = inst_34284);

(statearr_34357_34429[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (32))){
var inst_34274 = (state_34331[(9)]);
var inst_34271 = (state_34331[(20)]);
var inst_34272 = (state_34331[(11)]);
var inst_34273 = (state_34331[(21)]);
var inst_34286 = (state_34331[(2)]);
var inst_34287 = (inst_34274 + (1));
var tmp34352 = inst_34271;
var tmp34353 = inst_34272;
var tmp34354 = inst_34273;
var inst_34271__$1 = tmp34352;
var inst_34272__$1 = tmp34353;
var inst_34273__$1 = tmp34354;
var inst_34274__$1 = inst_34287;
var state_34331__$1 = (function (){var statearr_34358 = state_34331;
(statearr_34358[(9)] = inst_34274__$1);

(statearr_34358[(20)] = inst_34271__$1);

(statearr_34358[(22)] = inst_34286);

(statearr_34358[(11)] = inst_34272__$1);

(statearr_34358[(21)] = inst_34273__$1);

return statearr_34358;
})();
var statearr_34359_34430 = state_34331__$1;
(statearr_34359_34430[(2)] = null);

(statearr_34359_34430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (40))){
var inst_34299 = (state_34331[(23)]);
var inst_34303 = done.call(null,null);
var inst_34304 = cljs.core.async.untap_STAR_.call(null,m,inst_34299);
var state_34331__$1 = (function (){var statearr_34360 = state_34331;
(statearr_34360[(24)] = inst_34303);

return statearr_34360;
})();
var statearr_34361_34431 = state_34331__$1;
(statearr_34361_34431[(2)] = inst_34304);

(statearr_34361_34431[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (33))){
var inst_34290 = (state_34331[(25)]);
var inst_34292 = cljs.core.chunked_seq_QMARK_.call(null,inst_34290);
var state_34331__$1 = state_34331;
if(inst_34292){
var statearr_34362_34432 = state_34331__$1;
(statearr_34362_34432[(1)] = (36));

} else {
var statearr_34363_34433 = state_34331__$1;
(statearr_34363_34433[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (13))){
var inst_34220 = (state_34331[(26)]);
var inst_34223 = cljs.core.async.close_BANG_.call(null,inst_34220);
var state_34331__$1 = state_34331;
var statearr_34364_34434 = state_34331__$1;
(statearr_34364_34434[(2)] = inst_34223);

(statearr_34364_34434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (22))){
var inst_34243 = (state_34331[(8)]);
var inst_34246 = cljs.core.async.close_BANG_.call(null,inst_34243);
var state_34331__$1 = state_34331;
var statearr_34365_34435 = state_34331__$1;
(statearr_34365_34435[(2)] = inst_34246);

(statearr_34365_34435[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (36))){
var inst_34290 = (state_34331[(25)]);
var inst_34294 = cljs.core.chunk_first.call(null,inst_34290);
var inst_34295 = cljs.core.chunk_rest.call(null,inst_34290);
var inst_34296 = cljs.core.count.call(null,inst_34294);
var inst_34271 = inst_34295;
var inst_34272 = inst_34294;
var inst_34273 = inst_34296;
var inst_34274 = (0);
var state_34331__$1 = (function (){var statearr_34366 = state_34331;
(statearr_34366[(9)] = inst_34274);

(statearr_34366[(20)] = inst_34271);

(statearr_34366[(11)] = inst_34272);

(statearr_34366[(21)] = inst_34273);

return statearr_34366;
})();
var statearr_34367_34436 = state_34331__$1;
(statearr_34367_34436[(2)] = null);

(statearr_34367_34436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (41))){
var inst_34290 = (state_34331[(25)]);
var inst_34306 = (state_34331[(2)]);
var inst_34307 = cljs.core.next.call(null,inst_34290);
var inst_34271 = inst_34307;
var inst_34272 = null;
var inst_34273 = (0);
var inst_34274 = (0);
var state_34331__$1 = (function (){var statearr_34368 = state_34331;
(statearr_34368[(9)] = inst_34274);

(statearr_34368[(20)] = inst_34271);

(statearr_34368[(27)] = inst_34306);

(statearr_34368[(11)] = inst_34272);

(statearr_34368[(21)] = inst_34273);

return statearr_34368;
})();
var statearr_34369_34437 = state_34331__$1;
(statearr_34369_34437[(2)] = null);

(statearr_34369_34437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (43))){
var state_34331__$1 = state_34331;
var statearr_34370_34438 = state_34331__$1;
(statearr_34370_34438[(2)] = null);

(statearr_34370_34438[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (29))){
var inst_34315 = (state_34331[(2)]);
var state_34331__$1 = state_34331;
var statearr_34371_34439 = state_34331__$1;
(statearr_34371_34439[(2)] = inst_34315);

(statearr_34371_34439[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (44))){
var inst_34324 = (state_34331[(2)]);
var state_34331__$1 = (function (){var statearr_34372 = state_34331;
(statearr_34372[(28)] = inst_34324);

return statearr_34372;
})();
var statearr_34373_34440 = state_34331__$1;
(statearr_34373_34440[(2)] = null);

(statearr_34373_34440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (6))){
var inst_34263 = (state_34331[(29)]);
var inst_34262 = cljs.core.deref.call(null,cs);
var inst_34263__$1 = cljs.core.keys.call(null,inst_34262);
var inst_34264 = cljs.core.count.call(null,inst_34263__$1);
var inst_34265 = cljs.core.reset_BANG_.call(null,dctr,inst_34264);
var inst_34270 = cljs.core.seq.call(null,inst_34263__$1);
var inst_34271 = inst_34270;
var inst_34272 = null;
var inst_34273 = (0);
var inst_34274 = (0);
var state_34331__$1 = (function (){var statearr_34374 = state_34331;
(statearr_34374[(9)] = inst_34274);

(statearr_34374[(20)] = inst_34271);

(statearr_34374[(11)] = inst_34272);

(statearr_34374[(21)] = inst_34273);

(statearr_34374[(30)] = inst_34265);

(statearr_34374[(29)] = inst_34263__$1);

return statearr_34374;
})();
var statearr_34375_34441 = state_34331__$1;
(statearr_34375_34441[(2)] = null);

(statearr_34375_34441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (28))){
var inst_34271 = (state_34331[(20)]);
var inst_34290 = (state_34331[(25)]);
var inst_34290__$1 = cljs.core.seq.call(null,inst_34271);
var state_34331__$1 = (function (){var statearr_34376 = state_34331;
(statearr_34376[(25)] = inst_34290__$1);

return statearr_34376;
})();
if(inst_34290__$1){
var statearr_34377_34442 = state_34331__$1;
(statearr_34377_34442[(1)] = (33));

} else {
var statearr_34378_34443 = state_34331__$1;
(statearr_34378_34443[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (25))){
var inst_34274 = (state_34331[(9)]);
var inst_34273 = (state_34331[(21)]);
var inst_34276 = (inst_34274 < inst_34273);
var inst_34277 = inst_34276;
var state_34331__$1 = state_34331;
if(cljs.core.truth_(inst_34277)){
var statearr_34379_34444 = state_34331__$1;
(statearr_34379_34444[(1)] = (27));

} else {
var statearr_34380_34445 = state_34331__$1;
(statearr_34380_34445[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (34))){
var state_34331__$1 = state_34331;
var statearr_34381_34446 = state_34331__$1;
(statearr_34381_34446[(2)] = null);

(statearr_34381_34446[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (17))){
var state_34331__$1 = state_34331;
var statearr_34382_34447 = state_34331__$1;
(statearr_34382_34447[(2)] = null);

(statearr_34382_34447[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (3))){
var inst_34329 = (state_34331[(2)]);
var state_34331__$1 = state_34331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34331__$1,inst_34329);
} else {
if((state_val_34332 === (12))){
var inst_34258 = (state_34331[(2)]);
var state_34331__$1 = state_34331;
var statearr_34383_34448 = state_34331__$1;
(statearr_34383_34448[(2)] = inst_34258);

(statearr_34383_34448[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (2))){
var state_34331__$1 = state_34331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34331__$1,(4),ch);
} else {
if((state_val_34332 === (23))){
var state_34331__$1 = state_34331;
var statearr_34384_34449 = state_34331__$1;
(statearr_34384_34449[(2)] = null);

(statearr_34384_34449[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (35))){
var inst_34313 = (state_34331[(2)]);
var state_34331__$1 = state_34331;
var statearr_34385_34450 = state_34331__$1;
(statearr_34385_34450[(2)] = inst_34313);

(statearr_34385_34450[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (19))){
var inst_34230 = (state_34331[(7)]);
var inst_34234 = cljs.core.chunk_first.call(null,inst_34230);
var inst_34235 = cljs.core.chunk_rest.call(null,inst_34230);
var inst_34236 = cljs.core.count.call(null,inst_34234);
var inst_34208 = inst_34235;
var inst_34209 = inst_34234;
var inst_34210 = inst_34236;
var inst_34211 = (0);
var state_34331__$1 = (function (){var statearr_34386 = state_34331;
(statearr_34386[(13)] = inst_34210);

(statearr_34386[(14)] = inst_34211);

(statearr_34386[(16)] = inst_34208);

(statearr_34386[(17)] = inst_34209);

return statearr_34386;
})();
var statearr_34387_34451 = state_34331__$1;
(statearr_34387_34451[(2)] = null);

(statearr_34387_34451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (11))){
var inst_34230 = (state_34331[(7)]);
var inst_34208 = (state_34331[(16)]);
var inst_34230__$1 = cljs.core.seq.call(null,inst_34208);
var state_34331__$1 = (function (){var statearr_34388 = state_34331;
(statearr_34388[(7)] = inst_34230__$1);

return statearr_34388;
})();
if(inst_34230__$1){
var statearr_34389_34452 = state_34331__$1;
(statearr_34389_34452[(1)] = (16));

} else {
var statearr_34390_34453 = state_34331__$1;
(statearr_34390_34453[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (9))){
var inst_34260 = (state_34331[(2)]);
var state_34331__$1 = state_34331;
var statearr_34391_34454 = state_34331__$1;
(statearr_34391_34454[(2)] = inst_34260);

(statearr_34391_34454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (5))){
var inst_34206 = cljs.core.deref.call(null,cs);
var inst_34207 = cljs.core.seq.call(null,inst_34206);
var inst_34208 = inst_34207;
var inst_34209 = null;
var inst_34210 = (0);
var inst_34211 = (0);
var state_34331__$1 = (function (){var statearr_34392 = state_34331;
(statearr_34392[(13)] = inst_34210);

(statearr_34392[(14)] = inst_34211);

(statearr_34392[(16)] = inst_34208);

(statearr_34392[(17)] = inst_34209);

return statearr_34392;
})();
var statearr_34393_34455 = state_34331__$1;
(statearr_34393_34455[(2)] = null);

(statearr_34393_34455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (14))){
var state_34331__$1 = state_34331;
var statearr_34394_34456 = state_34331__$1;
(statearr_34394_34456[(2)] = null);

(statearr_34394_34456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (45))){
var inst_34321 = (state_34331[(2)]);
var state_34331__$1 = state_34331;
var statearr_34395_34457 = state_34331__$1;
(statearr_34395_34457[(2)] = inst_34321);

(statearr_34395_34457[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (26))){
var inst_34263 = (state_34331[(29)]);
var inst_34317 = (state_34331[(2)]);
var inst_34318 = cljs.core.seq.call(null,inst_34263);
var state_34331__$1 = (function (){var statearr_34396 = state_34331;
(statearr_34396[(31)] = inst_34317);

return statearr_34396;
})();
if(inst_34318){
var statearr_34397_34458 = state_34331__$1;
(statearr_34397_34458[(1)] = (42));

} else {
var statearr_34398_34459 = state_34331__$1;
(statearr_34398_34459[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (16))){
var inst_34230 = (state_34331[(7)]);
var inst_34232 = cljs.core.chunked_seq_QMARK_.call(null,inst_34230);
var state_34331__$1 = state_34331;
if(inst_34232){
var statearr_34399_34460 = state_34331__$1;
(statearr_34399_34460[(1)] = (19));

} else {
var statearr_34400_34461 = state_34331__$1;
(statearr_34400_34461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (38))){
var inst_34310 = (state_34331[(2)]);
var state_34331__$1 = state_34331;
var statearr_34401_34462 = state_34331__$1;
(statearr_34401_34462[(2)] = inst_34310);

(statearr_34401_34462[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (30))){
var state_34331__$1 = state_34331;
var statearr_34402_34463 = state_34331__$1;
(statearr_34402_34463[(2)] = null);

(statearr_34402_34463[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (10))){
var inst_34211 = (state_34331[(14)]);
var inst_34209 = (state_34331[(17)]);
var inst_34219 = cljs.core._nth.call(null,inst_34209,inst_34211);
var inst_34220 = cljs.core.nth.call(null,inst_34219,(0),null);
var inst_34221 = cljs.core.nth.call(null,inst_34219,(1),null);
var state_34331__$1 = (function (){var statearr_34403 = state_34331;
(statearr_34403[(26)] = inst_34220);

return statearr_34403;
})();
if(cljs.core.truth_(inst_34221)){
var statearr_34404_34464 = state_34331__$1;
(statearr_34404_34464[(1)] = (13));

} else {
var statearr_34405_34465 = state_34331__$1;
(statearr_34405_34465[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (18))){
var inst_34256 = (state_34331[(2)]);
var state_34331__$1 = state_34331;
var statearr_34406_34466 = state_34331__$1;
(statearr_34406_34466[(2)] = inst_34256);

(statearr_34406_34466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (42))){
var state_34331__$1 = state_34331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34331__$1,(45),dchan);
} else {
if((state_val_34332 === (37))){
var inst_34199 = (state_34331[(10)]);
var inst_34290 = (state_34331[(25)]);
var inst_34299 = (state_34331[(23)]);
var inst_34299__$1 = cljs.core.first.call(null,inst_34290);
var inst_34300 = cljs.core.async.put_BANG_.call(null,inst_34299__$1,inst_34199,done);
var state_34331__$1 = (function (){var statearr_34407 = state_34331;
(statearr_34407[(23)] = inst_34299__$1);

return statearr_34407;
})();
if(cljs.core.truth_(inst_34300)){
var statearr_34408_34467 = state_34331__$1;
(statearr_34408_34467[(1)] = (39));

} else {
var statearr_34409_34468 = state_34331__$1;
(statearr_34409_34468[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (8))){
var inst_34210 = (state_34331[(13)]);
var inst_34211 = (state_34331[(14)]);
var inst_34213 = (inst_34211 < inst_34210);
var inst_34214 = inst_34213;
var state_34331__$1 = state_34331;
if(cljs.core.truth_(inst_34214)){
var statearr_34410_34469 = state_34331__$1;
(statearr_34410_34469[(1)] = (10));

} else {
var statearr_34411_34470 = state_34331__$1;
(statearr_34411_34470[(1)] = (11));

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
});})(c__33611__auto___34416,cs,m,dchan,dctr,done))
;
return ((function (switch__33523__auto__,c__33611__auto___34416,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33524__auto__ = null;
var cljs$core$async$mult_$_state_machine__33524__auto____0 = (function (){
var statearr_34412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34412[(0)] = cljs$core$async$mult_$_state_machine__33524__auto__);

(statearr_34412[(1)] = (1));

return statearr_34412;
});
var cljs$core$async$mult_$_state_machine__33524__auto____1 = (function (state_34331){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_34331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e34413){if((e34413 instanceof Object)){
var ex__33527__auto__ = e34413;
var statearr_34414_34471 = state_34331;
(statearr_34414_34471[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34472 = state_34331;
state_34331 = G__34472;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33524__auto__ = function(state_34331){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33524__auto____1.call(this,state_34331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33524__auto____0;
cljs$core$async$mult_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33524__auto____1;
return cljs$core$async$mult_$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___34416,cs,m,dchan,dctr,done))
})();
var state__33613__auto__ = (function (){var statearr_34415 = f__33612__auto__.call(null);
(statearr_34415[(6)] = c__33611__auto___34416);

return statearr_34415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___34416,cs,m,dchan,dctr,done))
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
var G__34474 = arguments.length;
switch (G__34474) {
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
var x__28619__auto__ = (((m == null))?null:m);
var m__28620__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,m,ch);
} else {
var m__28620__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,m,ch);
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
var x__28619__auto__ = (((m == null))?null:m);
var m__28620__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,m,ch);
} else {
var m__28620__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,m,ch);
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
var x__28619__auto__ = (((m == null))?null:m);
var m__28620__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,m);
} else {
var m__28620__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,m);
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
var x__28619__auto__ = (((m == null))?null:m);
var m__28620__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,m,state_map);
} else {
var m__28620__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,m,state_map);
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
var x__28619__auto__ = (((m == null))?null:m);
var m__28620__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,m,mode);
} else {
var m__28620__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29112__auto__ = [];
var len__29105__auto___34486 = arguments.length;
var i__29106__auto___34487 = (0);
while(true){
if((i__29106__auto___34487 < len__29105__auto___34486)){
args__29112__auto__.push((arguments[i__29106__auto___34487]));

var G__34488 = (i__29106__auto___34487 + (1));
i__29106__auto___34487 = G__34488;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34480){
var map__34481 = p__34480;
var map__34481__$1 = ((((!((map__34481 == null)))?((((map__34481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34481):map__34481);
var opts = map__34481__$1;
var statearr_34483_34489 = state;
(statearr_34483_34489[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__34481,map__34481__$1,opts){
return (function (val){
var statearr_34484_34490 = state;
(statearr_34484_34490[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34481,map__34481__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_34485_34491 = state;
(statearr_34485_34491[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34476){
var G__34477 = cljs.core.first.call(null,seq34476);
var seq34476__$1 = cljs.core.next.call(null,seq34476);
var G__34478 = cljs.core.first.call(null,seq34476__$1);
var seq34476__$2 = cljs.core.next.call(null,seq34476__$1);
var G__34479 = cljs.core.first.call(null,seq34476__$2);
var seq34476__$3 = cljs.core.next.call(null,seq34476__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34477,G__34478,G__34479,seq34476__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34492 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34492 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34493){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34493 = meta34493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34494,meta34493__$1){
var self__ = this;
var _34494__$1 = this;
return (new cljs.core.async.t_cljs$core$async34492(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34493__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34494){
var self__ = this;
var _34494__$1 = this;
return self__.meta34493;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34492.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34492.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34493","meta34493",1285443517,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34492";

cljs.core.async.t_cljs$core$async34492.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async34492");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34492 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34492(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34493){
return (new cljs.core.async.t_cljs$core$async34492(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34493));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34492(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33611__auto___34656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___34656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___34656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34596){
var state_val_34597 = (state_34596[(1)]);
if((state_val_34597 === (7))){
var inst_34511 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
var statearr_34598_34657 = state_34596__$1;
(statearr_34598_34657[(2)] = inst_34511);

(statearr_34598_34657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (20))){
var inst_34523 = (state_34596[(7)]);
var state_34596__$1 = state_34596;
var statearr_34599_34658 = state_34596__$1;
(statearr_34599_34658[(2)] = inst_34523);

(statearr_34599_34658[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (27))){
var state_34596__$1 = state_34596;
var statearr_34600_34659 = state_34596__$1;
(statearr_34600_34659[(2)] = null);

(statearr_34600_34659[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (1))){
var inst_34498 = (state_34596[(8)]);
var inst_34498__$1 = calc_state.call(null);
var inst_34500 = (inst_34498__$1 == null);
var inst_34501 = cljs.core.not.call(null,inst_34500);
var state_34596__$1 = (function (){var statearr_34601 = state_34596;
(statearr_34601[(8)] = inst_34498__$1);

return statearr_34601;
})();
if(inst_34501){
var statearr_34602_34660 = state_34596__$1;
(statearr_34602_34660[(1)] = (2));

} else {
var statearr_34603_34661 = state_34596__$1;
(statearr_34603_34661[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (24))){
var inst_34570 = (state_34596[(9)]);
var inst_34556 = (state_34596[(10)]);
var inst_34547 = (state_34596[(11)]);
var inst_34570__$1 = inst_34547.call(null,inst_34556);
var state_34596__$1 = (function (){var statearr_34604 = state_34596;
(statearr_34604[(9)] = inst_34570__$1);

return statearr_34604;
})();
if(cljs.core.truth_(inst_34570__$1)){
var statearr_34605_34662 = state_34596__$1;
(statearr_34605_34662[(1)] = (29));

} else {
var statearr_34606_34663 = state_34596__$1;
(statearr_34606_34663[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (4))){
var inst_34514 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
if(cljs.core.truth_(inst_34514)){
var statearr_34607_34664 = state_34596__$1;
(statearr_34607_34664[(1)] = (8));

} else {
var statearr_34608_34665 = state_34596__$1;
(statearr_34608_34665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (15))){
var inst_34541 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
if(cljs.core.truth_(inst_34541)){
var statearr_34609_34666 = state_34596__$1;
(statearr_34609_34666[(1)] = (19));

} else {
var statearr_34610_34667 = state_34596__$1;
(statearr_34610_34667[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (21))){
var inst_34546 = (state_34596[(12)]);
var inst_34546__$1 = (state_34596[(2)]);
var inst_34547 = cljs.core.get.call(null,inst_34546__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34548 = cljs.core.get.call(null,inst_34546__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34549 = cljs.core.get.call(null,inst_34546__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34596__$1 = (function (){var statearr_34611 = state_34596;
(statearr_34611[(12)] = inst_34546__$1);

(statearr_34611[(11)] = inst_34547);

(statearr_34611[(13)] = inst_34548);

return statearr_34611;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34596__$1,(22),inst_34549);
} else {
if((state_val_34597 === (31))){
var inst_34578 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
if(cljs.core.truth_(inst_34578)){
var statearr_34612_34668 = state_34596__$1;
(statearr_34612_34668[(1)] = (32));

} else {
var statearr_34613_34669 = state_34596__$1;
(statearr_34613_34669[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (32))){
var inst_34555 = (state_34596[(14)]);
var state_34596__$1 = state_34596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34596__$1,(35),out,inst_34555);
} else {
if((state_val_34597 === (33))){
var inst_34546 = (state_34596[(12)]);
var inst_34523 = inst_34546;
var state_34596__$1 = (function (){var statearr_34614 = state_34596;
(statearr_34614[(7)] = inst_34523);

return statearr_34614;
})();
var statearr_34615_34670 = state_34596__$1;
(statearr_34615_34670[(2)] = null);

(statearr_34615_34670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (13))){
var inst_34523 = (state_34596[(7)]);
var inst_34530 = inst_34523.cljs$lang$protocol_mask$partition0$;
var inst_34531 = (inst_34530 & (64));
var inst_34532 = inst_34523.cljs$core$ISeq$;
var inst_34533 = (cljs.core.PROTOCOL_SENTINEL === inst_34532);
var inst_34534 = (inst_34531) || (inst_34533);
var state_34596__$1 = state_34596;
if(cljs.core.truth_(inst_34534)){
var statearr_34616_34671 = state_34596__$1;
(statearr_34616_34671[(1)] = (16));

} else {
var statearr_34617_34672 = state_34596__$1;
(statearr_34617_34672[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (22))){
var inst_34555 = (state_34596[(14)]);
var inst_34556 = (state_34596[(10)]);
var inst_34554 = (state_34596[(2)]);
var inst_34555__$1 = cljs.core.nth.call(null,inst_34554,(0),null);
var inst_34556__$1 = cljs.core.nth.call(null,inst_34554,(1),null);
var inst_34557 = (inst_34555__$1 == null);
var inst_34558 = cljs.core._EQ_.call(null,inst_34556__$1,change);
var inst_34559 = (inst_34557) || (inst_34558);
var state_34596__$1 = (function (){var statearr_34618 = state_34596;
(statearr_34618[(14)] = inst_34555__$1);

(statearr_34618[(10)] = inst_34556__$1);

return statearr_34618;
})();
if(cljs.core.truth_(inst_34559)){
var statearr_34619_34673 = state_34596__$1;
(statearr_34619_34673[(1)] = (23));

} else {
var statearr_34620_34674 = state_34596__$1;
(statearr_34620_34674[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (36))){
var inst_34546 = (state_34596[(12)]);
var inst_34523 = inst_34546;
var state_34596__$1 = (function (){var statearr_34621 = state_34596;
(statearr_34621[(7)] = inst_34523);

return statearr_34621;
})();
var statearr_34622_34675 = state_34596__$1;
(statearr_34622_34675[(2)] = null);

(statearr_34622_34675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (29))){
var inst_34570 = (state_34596[(9)]);
var state_34596__$1 = state_34596;
var statearr_34623_34676 = state_34596__$1;
(statearr_34623_34676[(2)] = inst_34570);

(statearr_34623_34676[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (6))){
var state_34596__$1 = state_34596;
var statearr_34624_34677 = state_34596__$1;
(statearr_34624_34677[(2)] = false);

(statearr_34624_34677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (28))){
var inst_34566 = (state_34596[(2)]);
var inst_34567 = calc_state.call(null);
var inst_34523 = inst_34567;
var state_34596__$1 = (function (){var statearr_34625 = state_34596;
(statearr_34625[(7)] = inst_34523);

(statearr_34625[(15)] = inst_34566);

return statearr_34625;
})();
var statearr_34626_34678 = state_34596__$1;
(statearr_34626_34678[(2)] = null);

(statearr_34626_34678[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (25))){
var inst_34592 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
var statearr_34627_34679 = state_34596__$1;
(statearr_34627_34679[(2)] = inst_34592);

(statearr_34627_34679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (34))){
var inst_34590 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
var statearr_34628_34680 = state_34596__$1;
(statearr_34628_34680[(2)] = inst_34590);

(statearr_34628_34680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (17))){
var state_34596__$1 = state_34596;
var statearr_34629_34681 = state_34596__$1;
(statearr_34629_34681[(2)] = false);

(statearr_34629_34681[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (3))){
var state_34596__$1 = state_34596;
var statearr_34630_34682 = state_34596__$1;
(statearr_34630_34682[(2)] = false);

(statearr_34630_34682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (12))){
var inst_34594 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34596__$1,inst_34594);
} else {
if((state_val_34597 === (2))){
var inst_34498 = (state_34596[(8)]);
var inst_34503 = inst_34498.cljs$lang$protocol_mask$partition0$;
var inst_34504 = (inst_34503 & (64));
var inst_34505 = inst_34498.cljs$core$ISeq$;
var inst_34506 = (cljs.core.PROTOCOL_SENTINEL === inst_34505);
var inst_34507 = (inst_34504) || (inst_34506);
var state_34596__$1 = state_34596;
if(cljs.core.truth_(inst_34507)){
var statearr_34631_34683 = state_34596__$1;
(statearr_34631_34683[(1)] = (5));

} else {
var statearr_34632_34684 = state_34596__$1;
(statearr_34632_34684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (23))){
var inst_34555 = (state_34596[(14)]);
var inst_34561 = (inst_34555 == null);
var state_34596__$1 = state_34596;
if(cljs.core.truth_(inst_34561)){
var statearr_34633_34685 = state_34596__$1;
(statearr_34633_34685[(1)] = (26));

} else {
var statearr_34634_34686 = state_34596__$1;
(statearr_34634_34686[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (35))){
var inst_34581 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
if(cljs.core.truth_(inst_34581)){
var statearr_34635_34687 = state_34596__$1;
(statearr_34635_34687[(1)] = (36));

} else {
var statearr_34636_34688 = state_34596__$1;
(statearr_34636_34688[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (19))){
var inst_34523 = (state_34596[(7)]);
var inst_34543 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34523);
var state_34596__$1 = state_34596;
var statearr_34637_34689 = state_34596__$1;
(statearr_34637_34689[(2)] = inst_34543);

(statearr_34637_34689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (11))){
var inst_34523 = (state_34596[(7)]);
var inst_34527 = (inst_34523 == null);
var inst_34528 = cljs.core.not.call(null,inst_34527);
var state_34596__$1 = state_34596;
if(inst_34528){
var statearr_34638_34690 = state_34596__$1;
(statearr_34638_34690[(1)] = (13));

} else {
var statearr_34639_34691 = state_34596__$1;
(statearr_34639_34691[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (9))){
var inst_34498 = (state_34596[(8)]);
var state_34596__$1 = state_34596;
var statearr_34640_34692 = state_34596__$1;
(statearr_34640_34692[(2)] = inst_34498);

(statearr_34640_34692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (5))){
var state_34596__$1 = state_34596;
var statearr_34641_34693 = state_34596__$1;
(statearr_34641_34693[(2)] = true);

(statearr_34641_34693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (14))){
var state_34596__$1 = state_34596;
var statearr_34642_34694 = state_34596__$1;
(statearr_34642_34694[(2)] = false);

(statearr_34642_34694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (26))){
var inst_34556 = (state_34596[(10)]);
var inst_34563 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34556);
var state_34596__$1 = state_34596;
var statearr_34643_34695 = state_34596__$1;
(statearr_34643_34695[(2)] = inst_34563);

(statearr_34643_34695[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (16))){
var state_34596__$1 = state_34596;
var statearr_34644_34696 = state_34596__$1;
(statearr_34644_34696[(2)] = true);

(statearr_34644_34696[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (38))){
var inst_34586 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
var statearr_34645_34697 = state_34596__$1;
(statearr_34645_34697[(2)] = inst_34586);

(statearr_34645_34697[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (30))){
var inst_34556 = (state_34596[(10)]);
var inst_34547 = (state_34596[(11)]);
var inst_34548 = (state_34596[(13)]);
var inst_34573 = cljs.core.empty_QMARK_.call(null,inst_34547);
var inst_34574 = inst_34548.call(null,inst_34556);
var inst_34575 = cljs.core.not.call(null,inst_34574);
var inst_34576 = (inst_34573) && (inst_34575);
var state_34596__$1 = state_34596;
var statearr_34646_34698 = state_34596__$1;
(statearr_34646_34698[(2)] = inst_34576);

(statearr_34646_34698[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (10))){
var inst_34498 = (state_34596[(8)]);
var inst_34519 = (state_34596[(2)]);
var inst_34520 = cljs.core.get.call(null,inst_34519,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34521 = cljs.core.get.call(null,inst_34519,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34522 = cljs.core.get.call(null,inst_34519,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34523 = inst_34498;
var state_34596__$1 = (function (){var statearr_34647 = state_34596;
(statearr_34647[(16)] = inst_34521);

(statearr_34647[(7)] = inst_34523);

(statearr_34647[(17)] = inst_34520);

(statearr_34647[(18)] = inst_34522);

return statearr_34647;
})();
var statearr_34648_34699 = state_34596__$1;
(statearr_34648_34699[(2)] = null);

(statearr_34648_34699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (18))){
var inst_34538 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
var statearr_34649_34700 = state_34596__$1;
(statearr_34649_34700[(2)] = inst_34538);

(statearr_34649_34700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (37))){
var state_34596__$1 = state_34596;
var statearr_34650_34701 = state_34596__$1;
(statearr_34650_34701[(2)] = null);

(statearr_34650_34701[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (8))){
var inst_34498 = (state_34596[(8)]);
var inst_34516 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34498);
var state_34596__$1 = state_34596;
var statearr_34651_34702 = state_34596__$1;
(statearr_34651_34702[(2)] = inst_34516);

(statearr_34651_34702[(1)] = (10));


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
});})(c__33611__auto___34656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33523__auto__,c__33611__auto___34656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33524__auto__ = null;
var cljs$core$async$mix_$_state_machine__33524__auto____0 = (function (){
var statearr_34652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34652[(0)] = cljs$core$async$mix_$_state_machine__33524__auto__);

(statearr_34652[(1)] = (1));

return statearr_34652;
});
var cljs$core$async$mix_$_state_machine__33524__auto____1 = (function (state_34596){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_34596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e34653){if((e34653 instanceof Object)){
var ex__33527__auto__ = e34653;
var statearr_34654_34703 = state_34596;
(statearr_34654_34703[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34704 = state_34596;
state_34596 = G__34704;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33524__auto__ = function(state_34596){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33524__auto____1.call(this,state_34596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33524__auto____0;
cljs$core$async$mix_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33524__auto____1;
return cljs$core$async$mix_$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___34656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33613__auto__ = (function (){var statearr_34655 = f__33612__auto__.call(null);
(statearr_34655[(6)] = c__33611__auto___34656);

return statearr_34655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___34656,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__28619__auto__ = (((p == null))?null:p);
var m__28620__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28620__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__28619__auto__ = (((p == null))?null:p);
var m__28620__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,p,v,ch);
} else {
var m__28620__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34706 = arguments.length;
switch (G__34706) {
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
var x__28619__auto__ = (((p == null))?null:p);
var m__28620__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,p);
} else {
var m__28620__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,p);
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
var x__28619__auto__ = (((p == null))?null:p);
var m__28620__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,p,v);
} else {
var m__28620__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,p,v);
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
var G__34710 = arguments.length;
switch (G__34710) {
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
var or__27936__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27936__auto__,mults){
return (function (p1__34708_SHARP_){
if(cljs.core.truth_(p1__34708_SHARP_.call(null,topic))){
return p1__34708_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34708_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27936__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34711 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34711 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34712){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34712 = meta34712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34713,meta34712__$1){
var self__ = this;
var _34713__$1 = this;
return (new cljs.core.async.t_cljs$core$async34711(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34712__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34713){
var self__ = this;
var _34713__$1 = this;
return self__.meta34712;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34711.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34711.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34711.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34711.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34711.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34711.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34711.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34712","meta34712",-57813361,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34711";

cljs.core.async.t_cljs$core$async34711.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async34711");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34711 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34711(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34712){
return (new cljs.core.async.t_cljs$core$async34711(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34712));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34711(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33611__auto___34831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___34831,mults,ensure_mult,p){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___34831,mults,ensure_mult,p){
return (function (state_34785){
var state_val_34786 = (state_34785[(1)]);
if((state_val_34786 === (7))){
var inst_34781 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
var statearr_34787_34832 = state_34785__$1;
(statearr_34787_34832[(2)] = inst_34781);

(statearr_34787_34832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (20))){
var state_34785__$1 = state_34785;
var statearr_34788_34833 = state_34785__$1;
(statearr_34788_34833[(2)] = null);

(statearr_34788_34833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (1))){
var state_34785__$1 = state_34785;
var statearr_34789_34834 = state_34785__$1;
(statearr_34789_34834[(2)] = null);

(statearr_34789_34834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (24))){
var inst_34764 = (state_34785[(7)]);
var inst_34773 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34764);
var state_34785__$1 = state_34785;
var statearr_34790_34835 = state_34785__$1;
(statearr_34790_34835[(2)] = inst_34773);

(statearr_34790_34835[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (4))){
var inst_34716 = (state_34785[(8)]);
var inst_34716__$1 = (state_34785[(2)]);
var inst_34717 = (inst_34716__$1 == null);
var state_34785__$1 = (function (){var statearr_34791 = state_34785;
(statearr_34791[(8)] = inst_34716__$1);

return statearr_34791;
})();
if(cljs.core.truth_(inst_34717)){
var statearr_34792_34836 = state_34785__$1;
(statearr_34792_34836[(1)] = (5));

} else {
var statearr_34793_34837 = state_34785__$1;
(statearr_34793_34837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (15))){
var inst_34758 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
var statearr_34794_34838 = state_34785__$1;
(statearr_34794_34838[(2)] = inst_34758);

(statearr_34794_34838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (21))){
var inst_34778 = (state_34785[(2)]);
var state_34785__$1 = (function (){var statearr_34795 = state_34785;
(statearr_34795[(9)] = inst_34778);

return statearr_34795;
})();
var statearr_34796_34839 = state_34785__$1;
(statearr_34796_34839[(2)] = null);

(statearr_34796_34839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (13))){
var inst_34740 = (state_34785[(10)]);
var inst_34742 = cljs.core.chunked_seq_QMARK_.call(null,inst_34740);
var state_34785__$1 = state_34785;
if(inst_34742){
var statearr_34797_34840 = state_34785__$1;
(statearr_34797_34840[(1)] = (16));

} else {
var statearr_34798_34841 = state_34785__$1;
(statearr_34798_34841[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (22))){
var inst_34770 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
if(cljs.core.truth_(inst_34770)){
var statearr_34799_34842 = state_34785__$1;
(statearr_34799_34842[(1)] = (23));

} else {
var statearr_34800_34843 = state_34785__$1;
(statearr_34800_34843[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (6))){
var inst_34716 = (state_34785[(8)]);
var inst_34764 = (state_34785[(7)]);
var inst_34766 = (state_34785[(11)]);
var inst_34764__$1 = topic_fn.call(null,inst_34716);
var inst_34765 = cljs.core.deref.call(null,mults);
var inst_34766__$1 = cljs.core.get.call(null,inst_34765,inst_34764__$1);
var state_34785__$1 = (function (){var statearr_34801 = state_34785;
(statearr_34801[(7)] = inst_34764__$1);

(statearr_34801[(11)] = inst_34766__$1);

return statearr_34801;
})();
if(cljs.core.truth_(inst_34766__$1)){
var statearr_34802_34844 = state_34785__$1;
(statearr_34802_34844[(1)] = (19));

} else {
var statearr_34803_34845 = state_34785__$1;
(statearr_34803_34845[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (25))){
var inst_34775 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
var statearr_34804_34846 = state_34785__$1;
(statearr_34804_34846[(2)] = inst_34775);

(statearr_34804_34846[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (17))){
var inst_34740 = (state_34785[(10)]);
var inst_34749 = cljs.core.first.call(null,inst_34740);
var inst_34750 = cljs.core.async.muxch_STAR_.call(null,inst_34749);
var inst_34751 = cljs.core.async.close_BANG_.call(null,inst_34750);
var inst_34752 = cljs.core.next.call(null,inst_34740);
var inst_34726 = inst_34752;
var inst_34727 = null;
var inst_34728 = (0);
var inst_34729 = (0);
var state_34785__$1 = (function (){var statearr_34805 = state_34785;
(statearr_34805[(12)] = inst_34727);

(statearr_34805[(13)] = inst_34751);

(statearr_34805[(14)] = inst_34726);

(statearr_34805[(15)] = inst_34728);

(statearr_34805[(16)] = inst_34729);

return statearr_34805;
})();
var statearr_34806_34847 = state_34785__$1;
(statearr_34806_34847[(2)] = null);

(statearr_34806_34847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (3))){
var inst_34783 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34785__$1,inst_34783);
} else {
if((state_val_34786 === (12))){
var inst_34760 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
var statearr_34807_34848 = state_34785__$1;
(statearr_34807_34848[(2)] = inst_34760);

(statearr_34807_34848[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (2))){
var state_34785__$1 = state_34785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34785__$1,(4),ch);
} else {
if((state_val_34786 === (23))){
var state_34785__$1 = state_34785;
var statearr_34808_34849 = state_34785__$1;
(statearr_34808_34849[(2)] = null);

(statearr_34808_34849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (19))){
var inst_34716 = (state_34785[(8)]);
var inst_34766 = (state_34785[(11)]);
var inst_34768 = cljs.core.async.muxch_STAR_.call(null,inst_34766);
var state_34785__$1 = state_34785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34785__$1,(22),inst_34768,inst_34716);
} else {
if((state_val_34786 === (11))){
var inst_34740 = (state_34785[(10)]);
var inst_34726 = (state_34785[(14)]);
var inst_34740__$1 = cljs.core.seq.call(null,inst_34726);
var state_34785__$1 = (function (){var statearr_34809 = state_34785;
(statearr_34809[(10)] = inst_34740__$1);

return statearr_34809;
})();
if(inst_34740__$1){
var statearr_34810_34850 = state_34785__$1;
(statearr_34810_34850[(1)] = (13));

} else {
var statearr_34811_34851 = state_34785__$1;
(statearr_34811_34851[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (9))){
var inst_34762 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
var statearr_34812_34852 = state_34785__$1;
(statearr_34812_34852[(2)] = inst_34762);

(statearr_34812_34852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (5))){
var inst_34723 = cljs.core.deref.call(null,mults);
var inst_34724 = cljs.core.vals.call(null,inst_34723);
var inst_34725 = cljs.core.seq.call(null,inst_34724);
var inst_34726 = inst_34725;
var inst_34727 = null;
var inst_34728 = (0);
var inst_34729 = (0);
var state_34785__$1 = (function (){var statearr_34813 = state_34785;
(statearr_34813[(12)] = inst_34727);

(statearr_34813[(14)] = inst_34726);

(statearr_34813[(15)] = inst_34728);

(statearr_34813[(16)] = inst_34729);

return statearr_34813;
})();
var statearr_34814_34853 = state_34785__$1;
(statearr_34814_34853[(2)] = null);

(statearr_34814_34853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (14))){
var state_34785__$1 = state_34785;
var statearr_34818_34854 = state_34785__$1;
(statearr_34818_34854[(2)] = null);

(statearr_34818_34854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (16))){
var inst_34740 = (state_34785[(10)]);
var inst_34744 = cljs.core.chunk_first.call(null,inst_34740);
var inst_34745 = cljs.core.chunk_rest.call(null,inst_34740);
var inst_34746 = cljs.core.count.call(null,inst_34744);
var inst_34726 = inst_34745;
var inst_34727 = inst_34744;
var inst_34728 = inst_34746;
var inst_34729 = (0);
var state_34785__$1 = (function (){var statearr_34819 = state_34785;
(statearr_34819[(12)] = inst_34727);

(statearr_34819[(14)] = inst_34726);

(statearr_34819[(15)] = inst_34728);

(statearr_34819[(16)] = inst_34729);

return statearr_34819;
})();
var statearr_34820_34855 = state_34785__$1;
(statearr_34820_34855[(2)] = null);

(statearr_34820_34855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (10))){
var inst_34727 = (state_34785[(12)]);
var inst_34726 = (state_34785[(14)]);
var inst_34728 = (state_34785[(15)]);
var inst_34729 = (state_34785[(16)]);
var inst_34734 = cljs.core._nth.call(null,inst_34727,inst_34729);
var inst_34735 = cljs.core.async.muxch_STAR_.call(null,inst_34734);
var inst_34736 = cljs.core.async.close_BANG_.call(null,inst_34735);
var inst_34737 = (inst_34729 + (1));
var tmp34815 = inst_34727;
var tmp34816 = inst_34726;
var tmp34817 = inst_34728;
var inst_34726__$1 = tmp34816;
var inst_34727__$1 = tmp34815;
var inst_34728__$1 = tmp34817;
var inst_34729__$1 = inst_34737;
var state_34785__$1 = (function (){var statearr_34821 = state_34785;
(statearr_34821[(12)] = inst_34727__$1);

(statearr_34821[(14)] = inst_34726__$1);

(statearr_34821[(15)] = inst_34728__$1);

(statearr_34821[(17)] = inst_34736);

(statearr_34821[(16)] = inst_34729__$1);

return statearr_34821;
})();
var statearr_34822_34856 = state_34785__$1;
(statearr_34822_34856[(2)] = null);

(statearr_34822_34856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (18))){
var inst_34755 = (state_34785[(2)]);
var state_34785__$1 = state_34785;
var statearr_34823_34857 = state_34785__$1;
(statearr_34823_34857[(2)] = inst_34755);

(statearr_34823_34857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34786 === (8))){
var inst_34728 = (state_34785[(15)]);
var inst_34729 = (state_34785[(16)]);
var inst_34731 = (inst_34729 < inst_34728);
var inst_34732 = inst_34731;
var state_34785__$1 = state_34785;
if(cljs.core.truth_(inst_34732)){
var statearr_34824_34858 = state_34785__$1;
(statearr_34824_34858[(1)] = (10));

} else {
var statearr_34825_34859 = state_34785__$1;
(statearr_34825_34859[(1)] = (11));

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
});})(c__33611__auto___34831,mults,ensure_mult,p))
;
return ((function (switch__33523__auto__,c__33611__auto___34831,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33524__auto__ = null;
var cljs$core$async$state_machine__33524__auto____0 = (function (){
var statearr_34826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34826[(0)] = cljs$core$async$state_machine__33524__auto__);

(statearr_34826[(1)] = (1));

return statearr_34826;
});
var cljs$core$async$state_machine__33524__auto____1 = (function (state_34785){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_34785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e34827){if((e34827 instanceof Object)){
var ex__33527__auto__ = e34827;
var statearr_34828_34860 = state_34785;
(statearr_34828_34860[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34861 = state_34785;
state_34785 = G__34861;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$state_machine__33524__auto__ = function(state_34785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33524__auto____1.call(this,state_34785);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33524__auto____0;
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33524__auto____1;
return cljs$core$async$state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___34831,mults,ensure_mult,p))
})();
var state__33613__auto__ = (function (){var statearr_34829 = f__33612__auto__.call(null);
(statearr_34829[(6)] = c__33611__auto___34831);

return statearr_34829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___34831,mults,ensure_mult,p))
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
var G__34863 = arguments.length;
switch (G__34863) {
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
var G__34866 = arguments.length;
switch (G__34866) {
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
var G__34869 = arguments.length;
switch (G__34869) {
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
var c__33611__auto___34936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___34936,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___34936,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34908){
var state_val_34909 = (state_34908[(1)]);
if((state_val_34909 === (7))){
var state_34908__$1 = state_34908;
var statearr_34910_34937 = state_34908__$1;
(statearr_34910_34937[(2)] = null);

(statearr_34910_34937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (1))){
var state_34908__$1 = state_34908;
var statearr_34911_34938 = state_34908__$1;
(statearr_34911_34938[(2)] = null);

(statearr_34911_34938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (4))){
var inst_34872 = (state_34908[(7)]);
var inst_34874 = (inst_34872 < cnt);
var state_34908__$1 = state_34908;
if(cljs.core.truth_(inst_34874)){
var statearr_34912_34939 = state_34908__$1;
(statearr_34912_34939[(1)] = (6));

} else {
var statearr_34913_34940 = state_34908__$1;
(statearr_34913_34940[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (15))){
var inst_34904 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34914_34941 = state_34908__$1;
(statearr_34914_34941[(2)] = inst_34904);

(statearr_34914_34941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (13))){
var inst_34897 = cljs.core.async.close_BANG_.call(null,out);
var state_34908__$1 = state_34908;
var statearr_34915_34942 = state_34908__$1;
(statearr_34915_34942[(2)] = inst_34897);

(statearr_34915_34942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (6))){
var state_34908__$1 = state_34908;
var statearr_34916_34943 = state_34908__$1;
(statearr_34916_34943[(2)] = null);

(statearr_34916_34943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (3))){
var inst_34906 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34908__$1,inst_34906);
} else {
if((state_val_34909 === (12))){
var inst_34894 = (state_34908[(8)]);
var inst_34894__$1 = (state_34908[(2)]);
var inst_34895 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34894__$1);
var state_34908__$1 = (function (){var statearr_34917 = state_34908;
(statearr_34917[(8)] = inst_34894__$1);

return statearr_34917;
})();
if(cljs.core.truth_(inst_34895)){
var statearr_34918_34944 = state_34908__$1;
(statearr_34918_34944[(1)] = (13));

} else {
var statearr_34919_34945 = state_34908__$1;
(statearr_34919_34945[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (2))){
var inst_34871 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34872 = (0);
var state_34908__$1 = (function (){var statearr_34920 = state_34908;
(statearr_34920[(9)] = inst_34871);

(statearr_34920[(7)] = inst_34872);

return statearr_34920;
})();
var statearr_34921_34946 = state_34908__$1;
(statearr_34921_34946[(2)] = null);

(statearr_34921_34946[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (11))){
var inst_34872 = (state_34908[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34908,(10),Object,null,(9));
var inst_34881 = chs__$1.call(null,inst_34872);
var inst_34882 = done.call(null,inst_34872);
var inst_34883 = cljs.core.async.take_BANG_.call(null,inst_34881,inst_34882);
var state_34908__$1 = state_34908;
var statearr_34922_34947 = state_34908__$1;
(statearr_34922_34947[(2)] = inst_34883);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34908__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (9))){
var inst_34872 = (state_34908[(7)]);
var inst_34885 = (state_34908[(2)]);
var inst_34886 = (inst_34872 + (1));
var inst_34872__$1 = inst_34886;
var state_34908__$1 = (function (){var statearr_34923 = state_34908;
(statearr_34923[(10)] = inst_34885);

(statearr_34923[(7)] = inst_34872__$1);

return statearr_34923;
})();
var statearr_34924_34948 = state_34908__$1;
(statearr_34924_34948[(2)] = null);

(statearr_34924_34948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (5))){
var inst_34892 = (state_34908[(2)]);
var state_34908__$1 = (function (){var statearr_34925 = state_34908;
(statearr_34925[(11)] = inst_34892);

return statearr_34925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34908__$1,(12),dchan);
} else {
if((state_val_34909 === (14))){
var inst_34894 = (state_34908[(8)]);
var inst_34899 = cljs.core.apply.call(null,f,inst_34894);
var state_34908__$1 = state_34908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34908__$1,(16),out,inst_34899);
} else {
if((state_val_34909 === (16))){
var inst_34901 = (state_34908[(2)]);
var state_34908__$1 = (function (){var statearr_34926 = state_34908;
(statearr_34926[(12)] = inst_34901);

return statearr_34926;
})();
var statearr_34927_34949 = state_34908__$1;
(statearr_34927_34949[(2)] = null);

(statearr_34927_34949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (10))){
var inst_34876 = (state_34908[(2)]);
var inst_34877 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34908__$1 = (function (){var statearr_34928 = state_34908;
(statearr_34928[(13)] = inst_34876);

return statearr_34928;
})();
var statearr_34929_34950 = state_34908__$1;
(statearr_34929_34950[(2)] = inst_34877);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34908__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34909 === (8))){
var inst_34890 = (state_34908[(2)]);
var state_34908__$1 = state_34908;
var statearr_34930_34951 = state_34908__$1;
(statearr_34930_34951[(2)] = inst_34890);

(statearr_34930_34951[(1)] = (5));


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
});})(c__33611__auto___34936,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33523__auto__,c__33611__auto___34936,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33524__auto__ = null;
var cljs$core$async$state_machine__33524__auto____0 = (function (){
var statearr_34931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34931[(0)] = cljs$core$async$state_machine__33524__auto__);

(statearr_34931[(1)] = (1));

return statearr_34931;
});
var cljs$core$async$state_machine__33524__auto____1 = (function (state_34908){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_34908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e34932){if((e34932 instanceof Object)){
var ex__33527__auto__ = e34932;
var statearr_34933_34952 = state_34908;
(statearr_34933_34952[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34953 = state_34908;
state_34908 = G__34953;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$state_machine__33524__auto__ = function(state_34908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33524__auto____1.call(this,state_34908);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33524__auto____0;
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33524__auto____1;
return cljs$core$async$state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___34936,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33613__auto__ = (function (){var statearr_34934 = f__33612__auto__.call(null);
(statearr_34934[(6)] = c__33611__auto___34936);

return statearr_34934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___34936,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34956 = arguments.length;
switch (G__34956) {
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
var c__33611__auto___35010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___35010,out){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___35010,out){
return (function (state_34988){
var state_val_34989 = (state_34988[(1)]);
if((state_val_34989 === (7))){
var inst_34968 = (state_34988[(7)]);
var inst_34967 = (state_34988[(8)]);
var inst_34967__$1 = (state_34988[(2)]);
var inst_34968__$1 = cljs.core.nth.call(null,inst_34967__$1,(0),null);
var inst_34969 = cljs.core.nth.call(null,inst_34967__$1,(1),null);
var inst_34970 = (inst_34968__$1 == null);
var state_34988__$1 = (function (){var statearr_34990 = state_34988;
(statearr_34990[(9)] = inst_34969);

(statearr_34990[(7)] = inst_34968__$1);

(statearr_34990[(8)] = inst_34967__$1);

return statearr_34990;
})();
if(cljs.core.truth_(inst_34970)){
var statearr_34991_35011 = state_34988__$1;
(statearr_34991_35011[(1)] = (8));

} else {
var statearr_34992_35012 = state_34988__$1;
(statearr_34992_35012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (1))){
var inst_34957 = cljs.core.vec.call(null,chs);
var inst_34958 = inst_34957;
var state_34988__$1 = (function (){var statearr_34993 = state_34988;
(statearr_34993[(10)] = inst_34958);

return statearr_34993;
})();
var statearr_34994_35013 = state_34988__$1;
(statearr_34994_35013[(2)] = null);

(statearr_34994_35013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (4))){
var inst_34958 = (state_34988[(10)]);
var state_34988__$1 = state_34988;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34988__$1,(7),inst_34958);
} else {
if((state_val_34989 === (6))){
var inst_34984 = (state_34988[(2)]);
var state_34988__$1 = state_34988;
var statearr_34995_35014 = state_34988__$1;
(statearr_34995_35014[(2)] = inst_34984);

(statearr_34995_35014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (3))){
var inst_34986 = (state_34988[(2)]);
var state_34988__$1 = state_34988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34988__$1,inst_34986);
} else {
if((state_val_34989 === (2))){
var inst_34958 = (state_34988[(10)]);
var inst_34960 = cljs.core.count.call(null,inst_34958);
var inst_34961 = (inst_34960 > (0));
var state_34988__$1 = state_34988;
if(cljs.core.truth_(inst_34961)){
var statearr_34997_35015 = state_34988__$1;
(statearr_34997_35015[(1)] = (4));

} else {
var statearr_34998_35016 = state_34988__$1;
(statearr_34998_35016[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (11))){
var inst_34958 = (state_34988[(10)]);
var inst_34977 = (state_34988[(2)]);
var tmp34996 = inst_34958;
var inst_34958__$1 = tmp34996;
var state_34988__$1 = (function (){var statearr_34999 = state_34988;
(statearr_34999[(10)] = inst_34958__$1);

(statearr_34999[(11)] = inst_34977);

return statearr_34999;
})();
var statearr_35000_35017 = state_34988__$1;
(statearr_35000_35017[(2)] = null);

(statearr_35000_35017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (9))){
var inst_34968 = (state_34988[(7)]);
var state_34988__$1 = state_34988;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34988__$1,(11),out,inst_34968);
} else {
if((state_val_34989 === (5))){
var inst_34982 = cljs.core.async.close_BANG_.call(null,out);
var state_34988__$1 = state_34988;
var statearr_35001_35018 = state_34988__$1;
(statearr_35001_35018[(2)] = inst_34982);

(statearr_35001_35018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (10))){
var inst_34980 = (state_34988[(2)]);
var state_34988__$1 = state_34988;
var statearr_35002_35019 = state_34988__$1;
(statearr_35002_35019[(2)] = inst_34980);

(statearr_35002_35019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (8))){
var inst_34958 = (state_34988[(10)]);
var inst_34969 = (state_34988[(9)]);
var inst_34968 = (state_34988[(7)]);
var inst_34967 = (state_34988[(8)]);
var inst_34972 = (function (){var cs = inst_34958;
var vec__34963 = inst_34967;
var v = inst_34968;
var c = inst_34969;
return ((function (cs,vec__34963,v,c,inst_34958,inst_34969,inst_34968,inst_34967,state_val_34989,c__33611__auto___35010,out){
return (function (p1__34954_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34954_SHARP_);
});
;})(cs,vec__34963,v,c,inst_34958,inst_34969,inst_34968,inst_34967,state_val_34989,c__33611__auto___35010,out))
})();
var inst_34973 = cljs.core.filterv.call(null,inst_34972,inst_34958);
var inst_34958__$1 = inst_34973;
var state_34988__$1 = (function (){var statearr_35003 = state_34988;
(statearr_35003[(10)] = inst_34958__$1);

return statearr_35003;
})();
var statearr_35004_35020 = state_34988__$1;
(statearr_35004_35020[(2)] = null);

(statearr_35004_35020[(1)] = (2));


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
});})(c__33611__auto___35010,out))
;
return ((function (switch__33523__auto__,c__33611__auto___35010,out){
return (function() {
var cljs$core$async$state_machine__33524__auto__ = null;
var cljs$core$async$state_machine__33524__auto____0 = (function (){
var statearr_35005 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35005[(0)] = cljs$core$async$state_machine__33524__auto__);

(statearr_35005[(1)] = (1));

return statearr_35005;
});
var cljs$core$async$state_machine__33524__auto____1 = (function (state_34988){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_34988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e35006){if((e35006 instanceof Object)){
var ex__33527__auto__ = e35006;
var statearr_35007_35021 = state_34988;
(statearr_35007_35021[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35022 = state_34988;
state_34988 = G__35022;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$state_machine__33524__auto__ = function(state_34988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33524__auto____1.call(this,state_34988);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33524__auto____0;
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33524__auto____1;
return cljs$core$async$state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___35010,out))
})();
var state__33613__auto__ = (function (){var statearr_35008 = f__33612__auto__.call(null);
(statearr_35008[(6)] = c__33611__auto___35010);

return statearr_35008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___35010,out))
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
var G__35024 = arguments.length;
switch (G__35024) {
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
var c__33611__auto___35069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___35069,out){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___35069,out){
return (function (state_35048){
var state_val_35049 = (state_35048[(1)]);
if((state_val_35049 === (7))){
var inst_35030 = (state_35048[(7)]);
var inst_35030__$1 = (state_35048[(2)]);
var inst_35031 = (inst_35030__$1 == null);
var inst_35032 = cljs.core.not.call(null,inst_35031);
var state_35048__$1 = (function (){var statearr_35050 = state_35048;
(statearr_35050[(7)] = inst_35030__$1);

return statearr_35050;
})();
if(inst_35032){
var statearr_35051_35070 = state_35048__$1;
(statearr_35051_35070[(1)] = (8));

} else {
var statearr_35052_35071 = state_35048__$1;
(statearr_35052_35071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (1))){
var inst_35025 = (0);
var state_35048__$1 = (function (){var statearr_35053 = state_35048;
(statearr_35053[(8)] = inst_35025);

return statearr_35053;
})();
var statearr_35054_35072 = state_35048__$1;
(statearr_35054_35072[(2)] = null);

(statearr_35054_35072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (4))){
var state_35048__$1 = state_35048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35048__$1,(7),ch);
} else {
if((state_val_35049 === (6))){
var inst_35043 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
var statearr_35055_35073 = state_35048__$1;
(statearr_35055_35073[(2)] = inst_35043);

(statearr_35055_35073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (3))){
var inst_35045 = (state_35048[(2)]);
var inst_35046 = cljs.core.async.close_BANG_.call(null,out);
var state_35048__$1 = (function (){var statearr_35056 = state_35048;
(statearr_35056[(9)] = inst_35045);

return statearr_35056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35048__$1,inst_35046);
} else {
if((state_val_35049 === (2))){
var inst_35025 = (state_35048[(8)]);
var inst_35027 = (inst_35025 < n);
var state_35048__$1 = state_35048;
if(cljs.core.truth_(inst_35027)){
var statearr_35057_35074 = state_35048__$1;
(statearr_35057_35074[(1)] = (4));

} else {
var statearr_35058_35075 = state_35048__$1;
(statearr_35058_35075[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (11))){
var inst_35025 = (state_35048[(8)]);
var inst_35035 = (state_35048[(2)]);
var inst_35036 = (inst_35025 + (1));
var inst_35025__$1 = inst_35036;
var state_35048__$1 = (function (){var statearr_35059 = state_35048;
(statearr_35059[(10)] = inst_35035);

(statearr_35059[(8)] = inst_35025__$1);

return statearr_35059;
})();
var statearr_35060_35076 = state_35048__$1;
(statearr_35060_35076[(2)] = null);

(statearr_35060_35076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (9))){
var state_35048__$1 = state_35048;
var statearr_35061_35077 = state_35048__$1;
(statearr_35061_35077[(2)] = null);

(statearr_35061_35077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (5))){
var state_35048__$1 = state_35048;
var statearr_35062_35078 = state_35048__$1;
(statearr_35062_35078[(2)] = null);

(statearr_35062_35078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (10))){
var inst_35040 = (state_35048[(2)]);
var state_35048__$1 = state_35048;
var statearr_35063_35079 = state_35048__$1;
(statearr_35063_35079[(2)] = inst_35040);

(statearr_35063_35079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35049 === (8))){
var inst_35030 = (state_35048[(7)]);
var state_35048__$1 = state_35048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35048__$1,(11),out,inst_35030);
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
});})(c__33611__auto___35069,out))
;
return ((function (switch__33523__auto__,c__33611__auto___35069,out){
return (function() {
var cljs$core$async$state_machine__33524__auto__ = null;
var cljs$core$async$state_machine__33524__auto____0 = (function (){
var statearr_35064 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35064[(0)] = cljs$core$async$state_machine__33524__auto__);

(statearr_35064[(1)] = (1));

return statearr_35064;
});
var cljs$core$async$state_machine__33524__auto____1 = (function (state_35048){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_35048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e35065){if((e35065 instanceof Object)){
var ex__33527__auto__ = e35065;
var statearr_35066_35080 = state_35048;
(statearr_35066_35080[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35081 = state_35048;
state_35048 = G__35081;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$state_machine__33524__auto__ = function(state_35048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33524__auto____1.call(this,state_35048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33524__auto____0;
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33524__auto____1;
return cljs$core$async$state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___35069,out))
})();
var state__33613__auto__ = (function (){var statearr_35067 = f__33612__auto__.call(null);
(statearr_35067[(6)] = c__33611__auto___35069);

return statearr_35067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___35069,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35083 = (function (f,ch,meta35084){
this.f = f;
this.ch = ch;
this.meta35084 = meta35084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35085,meta35084__$1){
var self__ = this;
var _35085__$1 = this;
return (new cljs.core.async.t_cljs$core$async35083(self__.f,self__.ch,meta35084__$1));
});

cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35085){
var self__ = this;
var _35085__$1 = this;
return self__.meta35084;
});

cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35086 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35086 = (function (f,ch,meta35084,_,fn1,meta35087){
this.f = f;
this.ch = ch;
this.meta35084 = meta35084;
this._ = _;
this.fn1 = fn1;
this.meta35087 = meta35087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35088,meta35087__$1){
var self__ = this;
var _35088__$1 = this;
return (new cljs.core.async.t_cljs$core$async35086(self__.f,self__.ch,self__.meta35084,self__._,self__.fn1,meta35087__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35088){
var self__ = this;
var _35088__$1 = this;
return self__.meta35087;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35082_SHARP_){
return f1.call(null,(((p1__35082_SHARP_ == null))?null:self__.f.call(null,p1__35082_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35086.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35084","meta35084",763828155,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35083","cljs.core.async/t_cljs$core$async35083",-1638259535,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35087","meta35087",44104734,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35086";

cljs.core.async.t_cljs$core$async35086.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async35086");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35086 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35086(f__$1,ch__$1,meta35084__$1,___$2,fn1__$1,meta35087){
return (new cljs.core.async.t_cljs$core$async35086(f__$1,ch__$1,meta35084__$1,___$2,fn1__$1,meta35087));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35086(self__.f,self__.ch,self__.meta35084,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27924__auto__ = ret;
if(cljs.core.truth_(and__27924__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27924__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35084","meta35084",763828155,null)], null);
});

cljs.core.async.t_cljs$core$async35083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35083";

cljs.core.async.t_cljs$core$async35083.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async35083");
});

cljs.core.async.__GT_t_cljs$core$async35083 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35083(f__$1,ch__$1,meta35084){
return (new cljs.core.async.t_cljs$core$async35083(f__$1,ch__$1,meta35084));
});

}

return (new cljs.core.async.t_cljs$core$async35083(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35089 = (function (f,ch,meta35090){
this.f = f;
this.ch = ch;
this.meta35090 = meta35090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35091,meta35090__$1){
var self__ = this;
var _35091__$1 = this;
return (new cljs.core.async.t_cljs$core$async35089(self__.f,self__.ch,meta35090__$1));
});

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35091){
var self__ = this;
var _35091__$1 = this;
return self__.meta35090;
});

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35089.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35090","meta35090",-455513880,null)], null);
});

cljs.core.async.t_cljs$core$async35089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35089";

cljs.core.async.t_cljs$core$async35089.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async35089");
});

cljs.core.async.__GT_t_cljs$core$async35089 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35089(f__$1,ch__$1,meta35090){
return (new cljs.core.async.t_cljs$core$async35089(f__$1,ch__$1,meta35090));
});

}

return (new cljs.core.async.t_cljs$core$async35089(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35092 = (function (p,ch,meta35093){
this.p = p;
this.ch = ch;
this.meta35093 = meta35093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35094,meta35093__$1){
var self__ = this;
var _35094__$1 = this;
return (new cljs.core.async.t_cljs$core$async35092(self__.p,self__.ch,meta35093__$1));
});

cljs.core.async.t_cljs$core$async35092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35094){
var self__ = this;
var _35094__$1 = this;
return self__.meta35093;
});

cljs.core.async.t_cljs$core$async35092.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35092.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35092.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35092.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35092.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35092.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35092.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35093","meta35093",-724599107,null)], null);
});

cljs.core.async.t_cljs$core$async35092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35092";

cljs.core.async.t_cljs$core$async35092.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async35092");
});

cljs.core.async.__GT_t_cljs$core$async35092 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35092(p__$1,ch__$1,meta35093){
return (new cljs.core.async.t_cljs$core$async35092(p__$1,ch__$1,meta35093));
});

}

return (new cljs.core.async.t_cljs$core$async35092(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35096 = arguments.length;
switch (G__35096) {
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
var c__33611__auto___35136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___35136,out){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___35136,out){
return (function (state_35117){
var state_val_35118 = (state_35117[(1)]);
if((state_val_35118 === (7))){
var inst_35113 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
var statearr_35119_35137 = state_35117__$1;
(statearr_35119_35137[(2)] = inst_35113);

(statearr_35119_35137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (1))){
var state_35117__$1 = state_35117;
var statearr_35120_35138 = state_35117__$1;
(statearr_35120_35138[(2)] = null);

(statearr_35120_35138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (4))){
var inst_35099 = (state_35117[(7)]);
var inst_35099__$1 = (state_35117[(2)]);
var inst_35100 = (inst_35099__$1 == null);
var state_35117__$1 = (function (){var statearr_35121 = state_35117;
(statearr_35121[(7)] = inst_35099__$1);

return statearr_35121;
})();
if(cljs.core.truth_(inst_35100)){
var statearr_35122_35139 = state_35117__$1;
(statearr_35122_35139[(1)] = (5));

} else {
var statearr_35123_35140 = state_35117__$1;
(statearr_35123_35140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (6))){
var inst_35099 = (state_35117[(7)]);
var inst_35104 = p.call(null,inst_35099);
var state_35117__$1 = state_35117;
if(cljs.core.truth_(inst_35104)){
var statearr_35124_35141 = state_35117__$1;
(statearr_35124_35141[(1)] = (8));

} else {
var statearr_35125_35142 = state_35117__$1;
(statearr_35125_35142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (3))){
var inst_35115 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35117__$1,inst_35115);
} else {
if((state_val_35118 === (2))){
var state_35117__$1 = state_35117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35117__$1,(4),ch);
} else {
if((state_val_35118 === (11))){
var inst_35107 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
var statearr_35126_35143 = state_35117__$1;
(statearr_35126_35143[(2)] = inst_35107);

(statearr_35126_35143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (9))){
var state_35117__$1 = state_35117;
var statearr_35127_35144 = state_35117__$1;
(statearr_35127_35144[(2)] = null);

(statearr_35127_35144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (5))){
var inst_35102 = cljs.core.async.close_BANG_.call(null,out);
var state_35117__$1 = state_35117;
var statearr_35128_35145 = state_35117__$1;
(statearr_35128_35145[(2)] = inst_35102);

(statearr_35128_35145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (10))){
var inst_35110 = (state_35117[(2)]);
var state_35117__$1 = (function (){var statearr_35129 = state_35117;
(statearr_35129[(8)] = inst_35110);

return statearr_35129;
})();
var statearr_35130_35146 = state_35117__$1;
(statearr_35130_35146[(2)] = null);

(statearr_35130_35146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35118 === (8))){
var inst_35099 = (state_35117[(7)]);
var state_35117__$1 = state_35117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35117__$1,(11),out,inst_35099);
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
});})(c__33611__auto___35136,out))
;
return ((function (switch__33523__auto__,c__33611__auto___35136,out){
return (function() {
var cljs$core$async$state_machine__33524__auto__ = null;
var cljs$core$async$state_machine__33524__auto____0 = (function (){
var statearr_35131 = [null,null,null,null,null,null,null,null,null];
(statearr_35131[(0)] = cljs$core$async$state_machine__33524__auto__);

(statearr_35131[(1)] = (1));

return statearr_35131;
});
var cljs$core$async$state_machine__33524__auto____1 = (function (state_35117){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_35117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e35132){if((e35132 instanceof Object)){
var ex__33527__auto__ = e35132;
var statearr_35133_35147 = state_35117;
(statearr_35133_35147[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35148 = state_35117;
state_35117 = G__35148;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$state_machine__33524__auto__ = function(state_35117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33524__auto____1.call(this,state_35117);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33524__auto____0;
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33524__auto____1;
return cljs$core$async$state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___35136,out))
})();
var state__33613__auto__ = (function (){var statearr_35134 = f__33612__auto__.call(null);
(statearr_35134[(6)] = c__33611__auto___35136);

return statearr_35134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___35136,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35150 = arguments.length;
switch (G__35150) {
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
var c__33611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto__){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto__){
return (function (state_35213){
var state_val_35214 = (state_35213[(1)]);
if((state_val_35214 === (7))){
var inst_35209 = (state_35213[(2)]);
var state_35213__$1 = state_35213;
var statearr_35215_35253 = state_35213__$1;
(statearr_35215_35253[(2)] = inst_35209);

(statearr_35215_35253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (20))){
var inst_35179 = (state_35213[(7)]);
var inst_35190 = (state_35213[(2)]);
var inst_35191 = cljs.core.next.call(null,inst_35179);
var inst_35165 = inst_35191;
var inst_35166 = null;
var inst_35167 = (0);
var inst_35168 = (0);
var state_35213__$1 = (function (){var statearr_35216 = state_35213;
(statearr_35216[(8)] = inst_35167);

(statearr_35216[(9)] = inst_35190);

(statearr_35216[(10)] = inst_35168);

(statearr_35216[(11)] = inst_35166);

(statearr_35216[(12)] = inst_35165);

return statearr_35216;
})();
var statearr_35217_35254 = state_35213__$1;
(statearr_35217_35254[(2)] = null);

(statearr_35217_35254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (1))){
var state_35213__$1 = state_35213;
var statearr_35218_35255 = state_35213__$1;
(statearr_35218_35255[(2)] = null);

(statearr_35218_35255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (4))){
var inst_35154 = (state_35213[(13)]);
var inst_35154__$1 = (state_35213[(2)]);
var inst_35155 = (inst_35154__$1 == null);
var state_35213__$1 = (function (){var statearr_35219 = state_35213;
(statearr_35219[(13)] = inst_35154__$1);

return statearr_35219;
})();
if(cljs.core.truth_(inst_35155)){
var statearr_35220_35256 = state_35213__$1;
(statearr_35220_35256[(1)] = (5));

} else {
var statearr_35221_35257 = state_35213__$1;
(statearr_35221_35257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (15))){
var state_35213__$1 = state_35213;
var statearr_35225_35258 = state_35213__$1;
(statearr_35225_35258[(2)] = null);

(statearr_35225_35258[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (21))){
var state_35213__$1 = state_35213;
var statearr_35226_35259 = state_35213__$1;
(statearr_35226_35259[(2)] = null);

(statearr_35226_35259[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (13))){
var inst_35167 = (state_35213[(8)]);
var inst_35168 = (state_35213[(10)]);
var inst_35166 = (state_35213[(11)]);
var inst_35165 = (state_35213[(12)]);
var inst_35175 = (state_35213[(2)]);
var inst_35176 = (inst_35168 + (1));
var tmp35222 = inst_35167;
var tmp35223 = inst_35166;
var tmp35224 = inst_35165;
var inst_35165__$1 = tmp35224;
var inst_35166__$1 = tmp35223;
var inst_35167__$1 = tmp35222;
var inst_35168__$1 = inst_35176;
var state_35213__$1 = (function (){var statearr_35227 = state_35213;
(statearr_35227[(8)] = inst_35167__$1);

(statearr_35227[(10)] = inst_35168__$1);

(statearr_35227[(11)] = inst_35166__$1);

(statearr_35227[(14)] = inst_35175);

(statearr_35227[(12)] = inst_35165__$1);

return statearr_35227;
})();
var statearr_35228_35260 = state_35213__$1;
(statearr_35228_35260[(2)] = null);

(statearr_35228_35260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (22))){
var state_35213__$1 = state_35213;
var statearr_35229_35261 = state_35213__$1;
(statearr_35229_35261[(2)] = null);

(statearr_35229_35261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (6))){
var inst_35154 = (state_35213[(13)]);
var inst_35163 = f.call(null,inst_35154);
var inst_35164 = cljs.core.seq.call(null,inst_35163);
var inst_35165 = inst_35164;
var inst_35166 = null;
var inst_35167 = (0);
var inst_35168 = (0);
var state_35213__$1 = (function (){var statearr_35230 = state_35213;
(statearr_35230[(8)] = inst_35167);

(statearr_35230[(10)] = inst_35168);

(statearr_35230[(11)] = inst_35166);

(statearr_35230[(12)] = inst_35165);

return statearr_35230;
})();
var statearr_35231_35262 = state_35213__$1;
(statearr_35231_35262[(2)] = null);

(statearr_35231_35262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (17))){
var inst_35179 = (state_35213[(7)]);
var inst_35183 = cljs.core.chunk_first.call(null,inst_35179);
var inst_35184 = cljs.core.chunk_rest.call(null,inst_35179);
var inst_35185 = cljs.core.count.call(null,inst_35183);
var inst_35165 = inst_35184;
var inst_35166 = inst_35183;
var inst_35167 = inst_35185;
var inst_35168 = (0);
var state_35213__$1 = (function (){var statearr_35232 = state_35213;
(statearr_35232[(8)] = inst_35167);

(statearr_35232[(10)] = inst_35168);

(statearr_35232[(11)] = inst_35166);

(statearr_35232[(12)] = inst_35165);

return statearr_35232;
})();
var statearr_35233_35263 = state_35213__$1;
(statearr_35233_35263[(2)] = null);

(statearr_35233_35263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (3))){
var inst_35211 = (state_35213[(2)]);
var state_35213__$1 = state_35213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35213__$1,inst_35211);
} else {
if((state_val_35214 === (12))){
var inst_35199 = (state_35213[(2)]);
var state_35213__$1 = state_35213;
var statearr_35234_35264 = state_35213__$1;
(statearr_35234_35264[(2)] = inst_35199);

(statearr_35234_35264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (2))){
var state_35213__$1 = state_35213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35213__$1,(4),in$);
} else {
if((state_val_35214 === (23))){
var inst_35207 = (state_35213[(2)]);
var state_35213__$1 = state_35213;
var statearr_35235_35265 = state_35213__$1;
(statearr_35235_35265[(2)] = inst_35207);

(statearr_35235_35265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (19))){
var inst_35194 = (state_35213[(2)]);
var state_35213__$1 = state_35213;
var statearr_35236_35266 = state_35213__$1;
(statearr_35236_35266[(2)] = inst_35194);

(statearr_35236_35266[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (11))){
var inst_35179 = (state_35213[(7)]);
var inst_35165 = (state_35213[(12)]);
var inst_35179__$1 = cljs.core.seq.call(null,inst_35165);
var state_35213__$1 = (function (){var statearr_35237 = state_35213;
(statearr_35237[(7)] = inst_35179__$1);

return statearr_35237;
})();
if(inst_35179__$1){
var statearr_35238_35267 = state_35213__$1;
(statearr_35238_35267[(1)] = (14));

} else {
var statearr_35239_35268 = state_35213__$1;
(statearr_35239_35268[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (9))){
var inst_35201 = (state_35213[(2)]);
var inst_35202 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35213__$1 = (function (){var statearr_35240 = state_35213;
(statearr_35240[(15)] = inst_35201);

return statearr_35240;
})();
if(cljs.core.truth_(inst_35202)){
var statearr_35241_35269 = state_35213__$1;
(statearr_35241_35269[(1)] = (21));

} else {
var statearr_35242_35270 = state_35213__$1;
(statearr_35242_35270[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (5))){
var inst_35157 = cljs.core.async.close_BANG_.call(null,out);
var state_35213__$1 = state_35213;
var statearr_35243_35271 = state_35213__$1;
(statearr_35243_35271[(2)] = inst_35157);

(statearr_35243_35271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (14))){
var inst_35179 = (state_35213[(7)]);
var inst_35181 = cljs.core.chunked_seq_QMARK_.call(null,inst_35179);
var state_35213__$1 = state_35213;
if(inst_35181){
var statearr_35244_35272 = state_35213__$1;
(statearr_35244_35272[(1)] = (17));

} else {
var statearr_35245_35273 = state_35213__$1;
(statearr_35245_35273[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (16))){
var inst_35197 = (state_35213[(2)]);
var state_35213__$1 = state_35213;
var statearr_35246_35274 = state_35213__$1;
(statearr_35246_35274[(2)] = inst_35197);

(statearr_35246_35274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35214 === (10))){
var inst_35168 = (state_35213[(10)]);
var inst_35166 = (state_35213[(11)]);
var inst_35173 = cljs.core._nth.call(null,inst_35166,inst_35168);
var state_35213__$1 = state_35213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35213__$1,(13),out,inst_35173);
} else {
if((state_val_35214 === (18))){
var inst_35179 = (state_35213[(7)]);
var inst_35188 = cljs.core.first.call(null,inst_35179);
var state_35213__$1 = state_35213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35213__$1,(20),out,inst_35188);
} else {
if((state_val_35214 === (8))){
var inst_35167 = (state_35213[(8)]);
var inst_35168 = (state_35213[(10)]);
var inst_35170 = (inst_35168 < inst_35167);
var inst_35171 = inst_35170;
var state_35213__$1 = state_35213;
if(cljs.core.truth_(inst_35171)){
var statearr_35247_35275 = state_35213__$1;
(statearr_35247_35275[(1)] = (10));

} else {
var statearr_35248_35276 = state_35213__$1;
(statearr_35248_35276[(1)] = (11));

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
});})(c__33611__auto__))
;
return ((function (switch__33523__auto__,c__33611__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33524__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33524__auto____0 = (function (){
var statearr_35249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35249[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33524__auto__);

(statearr_35249[(1)] = (1));

return statearr_35249;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33524__auto____1 = (function (state_35213){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_35213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e35250){if((e35250 instanceof Object)){
var ex__33527__auto__ = e35250;
var statearr_35251_35277 = state_35213;
(statearr_35251_35277[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35278 = state_35213;
state_35213 = G__35278;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33524__auto__ = function(state_35213){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33524__auto____1.call(this,state_35213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33524__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33524__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto__))
})();
var state__33613__auto__ = (function (){var statearr_35252 = f__33612__auto__.call(null);
(statearr_35252[(6)] = c__33611__auto__);

return statearr_35252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto__))
);

return c__33611__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35280 = arguments.length;
switch (G__35280) {
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
var G__35283 = arguments.length;
switch (G__35283) {
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
var G__35286 = arguments.length;
switch (G__35286) {
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
var c__33611__auto___35333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___35333,out){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___35333,out){
return (function (state_35310){
var state_val_35311 = (state_35310[(1)]);
if((state_val_35311 === (7))){
var inst_35305 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
var statearr_35312_35334 = state_35310__$1;
(statearr_35312_35334[(2)] = inst_35305);

(statearr_35312_35334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (1))){
var inst_35287 = null;
var state_35310__$1 = (function (){var statearr_35313 = state_35310;
(statearr_35313[(7)] = inst_35287);

return statearr_35313;
})();
var statearr_35314_35335 = state_35310__$1;
(statearr_35314_35335[(2)] = null);

(statearr_35314_35335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (4))){
var inst_35290 = (state_35310[(8)]);
var inst_35290__$1 = (state_35310[(2)]);
var inst_35291 = (inst_35290__$1 == null);
var inst_35292 = cljs.core.not.call(null,inst_35291);
var state_35310__$1 = (function (){var statearr_35315 = state_35310;
(statearr_35315[(8)] = inst_35290__$1);

return statearr_35315;
})();
if(inst_35292){
var statearr_35316_35336 = state_35310__$1;
(statearr_35316_35336[(1)] = (5));

} else {
var statearr_35317_35337 = state_35310__$1;
(statearr_35317_35337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (6))){
var state_35310__$1 = state_35310;
var statearr_35318_35338 = state_35310__$1;
(statearr_35318_35338[(2)] = null);

(statearr_35318_35338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (3))){
var inst_35307 = (state_35310[(2)]);
var inst_35308 = cljs.core.async.close_BANG_.call(null,out);
var state_35310__$1 = (function (){var statearr_35319 = state_35310;
(statearr_35319[(9)] = inst_35307);

return statearr_35319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35310__$1,inst_35308);
} else {
if((state_val_35311 === (2))){
var state_35310__$1 = state_35310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35310__$1,(4),ch);
} else {
if((state_val_35311 === (11))){
var inst_35290 = (state_35310[(8)]);
var inst_35299 = (state_35310[(2)]);
var inst_35287 = inst_35290;
var state_35310__$1 = (function (){var statearr_35320 = state_35310;
(statearr_35320[(7)] = inst_35287);

(statearr_35320[(10)] = inst_35299);

return statearr_35320;
})();
var statearr_35321_35339 = state_35310__$1;
(statearr_35321_35339[(2)] = null);

(statearr_35321_35339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (9))){
var inst_35290 = (state_35310[(8)]);
var state_35310__$1 = state_35310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35310__$1,(11),out,inst_35290);
} else {
if((state_val_35311 === (5))){
var inst_35290 = (state_35310[(8)]);
var inst_35287 = (state_35310[(7)]);
var inst_35294 = cljs.core._EQ_.call(null,inst_35290,inst_35287);
var state_35310__$1 = state_35310;
if(inst_35294){
var statearr_35323_35340 = state_35310__$1;
(statearr_35323_35340[(1)] = (8));

} else {
var statearr_35324_35341 = state_35310__$1;
(statearr_35324_35341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (10))){
var inst_35302 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
var statearr_35325_35342 = state_35310__$1;
(statearr_35325_35342[(2)] = inst_35302);

(statearr_35325_35342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (8))){
var inst_35287 = (state_35310[(7)]);
var tmp35322 = inst_35287;
var inst_35287__$1 = tmp35322;
var state_35310__$1 = (function (){var statearr_35326 = state_35310;
(statearr_35326[(7)] = inst_35287__$1);

return statearr_35326;
})();
var statearr_35327_35343 = state_35310__$1;
(statearr_35327_35343[(2)] = null);

(statearr_35327_35343[(1)] = (2));


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
});})(c__33611__auto___35333,out))
;
return ((function (switch__33523__auto__,c__33611__auto___35333,out){
return (function() {
var cljs$core$async$state_machine__33524__auto__ = null;
var cljs$core$async$state_machine__33524__auto____0 = (function (){
var statearr_35328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35328[(0)] = cljs$core$async$state_machine__33524__auto__);

(statearr_35328[(1)] = (1));

return statearr_35328;
});
var cljs$core$async$state_machine__33524__auto____1 = (function (state_35310){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_35310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e35329){if((e35329 instanceof Object)){
var ex__33527__auto__ = e35329;
var statearr_35330_35344 = state_35310;
(statearr_35330_35344[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35345 = state_35310;
state_35310 = G__35345;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$state_machine__33524__auto__ = function(state_35310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33524__auto____1.call(this,state_35310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33524__auto____0;
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33524__auto____1;
return cljs$core$async$state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___35333,out))
})();
var state__33613__auto__ = (function (){var statearr_35331 = f__33612__auto__.call(null);
(statearr_35331[(6)] = c__33611__auto___35333);

return statearr_35331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___35333,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35347 = arguments.length;
switch (G__35347) {
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
var c__33611__auto___35413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___35413,out){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___35413,out){
return (function (state_35385){
var state_val_35386 = (state_35385[(1)]);
if((state_val_35386 === (7))){
var inst_35381 = (state_35385[(2)]);
var state_35385__$1 = state_35385;
var statearr_35387_35414 = state_35385__$1;
(statearr_35387_35414[(2)] = inst_35381);

(statearr_35387_35414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (1))){
var inst_35348 = (new Array(n));
var inst_35349 = inst_35348;
var inst_35350 = (0);
var state_35385__$1 = (function (){var statearr_35388 = state_35385;
(statearr_35388[(7)] = inst_35349);

(statearr_35388[(8)] = inst_35350);

return statearr_35388;
})();
var statearr_35389_35415 = state_35385__$1;
(statearr_35389_35415[(2)] = null);

(statearr_35389_35415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (4))){
var inst_35353 = (state_35385[(9)]);
var inst_35353__$1 = (state_35385[(2)]);
var inst_35354 = (inst_35353__$1 == null);
var inst_35355 = cljs.core.not.call(null,inst_35354);
var state_35385__$1 = (function (){var statearr_35390 = state_35385;
(statearr_35390[(9)] = inst_35353__$1);

return statearr_35390;
})();
if(inst_35355){
var statearr_35391_35416 = state_35385__$1;
(statearr_35391_35416[(1)] = (5));

} else {
var statearr_35392_35417 = state_35385__$1;
(statearr_35392_35417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (15))){
var inst_35375 = (state_35385[(2)]);
var state_35385__$1 = state_35385;
var statearr_35393_35418 = state_35385__$1;
(statearr_35393_35418[(2)] = inst_35375);

(statearr_35393_35418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (13))){
var state_35385__$1 = state_35385;
var statearr_35394_35419 = state_35385__$1;
(statearr_35394_35419[(2)] = null);

(statearr_35394_35419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (6))){
var inst_35350 = (state_35385[(8)]);
var inst_35371 = (inst_35350 > (0));
var state_35385__$1 = state_35385;
if(cljs.core.truth_(inst_35371)){
var statearr_35395_35420 = state_35385__$1;
(statearr_35395_35420[(1)] = (12));

} else {
var statearr_35396_35421 = state_35385__$1;
(statearr_35396_35421[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (3))){
var inst_35383 = (state_35385[(2)]);
var state_35385__$1 = state_35385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35385__$1,inst_35383);
} else {
if((state_val_35386 === (12))){
var inst_35349 = (state_35385[(7)]);
var inst_35373 = cljs.core.vec.call(null,inst_35349);
var state_35385__$1 = state_35385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35385__$1,(15),out,inst_35373);
} else {
if((state_val_35386 === (2))){
var state_35385__$1 = state_35385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35385__$1,(4),ch);
} else {
if((state_val_35386 === (11))){
var inst_35365 = (state_35385[(2)]);
var inst_35366 = (new Array(n));
var inst_35349 = inst_35366;
var inst_35350 = (0);
var state_35385__$1 = (function (){var statearr_35397 = state_35385;
(statearr_35397[(10)] = inst_35365);

(statearr_35397[(7)] = inst_35349);

(statearr_35397[(8)] = inst_35350);

return statearr_35397;
})();
var statearr_35398_35422 = state_35385__$1;
(statearr_35398_35422[(2)] = null);

(statearr_35398_35422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (9))){
var inst_35349 = (state_35385[(7)]);
var inst_35363 = cljs.core.vec.call(null,inst_35349);
var state_35385__$1 = state_35385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35385__$1,(11),out,inst_35363);
} else {
if((state_val_35386 === (5))){
var inst_35349 = (state_35385[(7)]);
var inst_35353 = (state_35385[(9)]);
var inst_35350 = (state_35385[(8)]);
var inst_35358 = (state_35385[(11)]);
var inst_35357 = (inst_35349[inst_35350] = inst_35353);
var inst_35358__$1 = (inst_35350 + (1));
var inst_35359 = (inst_35358__$1 < n);
var state_35385__$1 = (function (){var statearr_35399 = state_35385;
(statearr_35399[(12)] = inst_35357);

(statearr_35399[(11)] = inst_35358__$1);

return statearr_35399;
})();
if(cljs.core.truth_(inst_35359)){
var statearr_35400_35423 = state_35385__$1;
(statearr_35400_35423[(1)] = (8));

} else {
var statearr_35401_35424 = state_35385__$1;
(statearr_35401_35424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (14))){
var inst_35378 = (state_35385[(2)]);
var inst_35379 = cljs.core.async.close_BANG_.call(null,out);
var state_35385__$1 = (function (){var statearr_35403 = state_35385;
(statearr_35403[(13)] = inst_35378);

return statearr_35403;
})();
var statearr_35404_35425 = state_35385__$1;
(statearr_35404_35425[(2)] = inst_35379);

(statearr_35404_35425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (10))){
var inst_35369 = (state_35385[(2)]);
var state_35385__$1 = state_35385;
var statearr_35405_35426 = state_35385__$1;
(statearr_35405_35426[(2)] = inst_35369);

(statearr_35405_35426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35386 === (8))){
var inst_35349 = (state_35385[(7)]);
var inst_35358 = (state_35385[(11)]);
var tmp35402 = inst_35349;
var inst_35349__$1 = tmp35402;
var inst_35350 = inst_35358;
var state_35385__$1 = (function (){var statearr_35406 = state_35385;
(statearr_35406[(7)] = inst_35349__$1);

(statearr_35406[(8)] = inst_35350);

return statearr_35406;
})();
var statearr_35407_35427 = state_35385__$1;
(statearr_35407_35427[(2)] = null);

(statearr_35407_35427[(1)] = (2));


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
});})(c__33611__auto___35413,out))
;
return ((function (switch__33523__auto__,c__33611__auto___35413,out){
return (function() {
var cljs$core$async$state_machine__33524__auto__ = null;
var cljs$core$async$state_machine__33524__auto____0 = (function (){
var statearr_35408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35408[(0)] = cljs$core$async$state_machine__33524__auto__);

(statearr_35408[(1)] = (1));

return statearr_35408;
});
var cljs$core$async$state_machine__33524__auto____1 = (function (state_35385){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_35385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e35409){if((e35409 instanceof Object)){
var ex__33527__auto__ = e35409;
var statearr_35410_35428 = state_35385;
(statearr_35410_35428[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35429 = state_35385;
state_35385 = G__35429;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$state_machine__33524__auto__ = function(state_35385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33524__auto____1.call(this,state_35385);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33524__auto____0;
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33524__auto____1;
return cljs$core$async$state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___35413,out))
})();
var state__33613__auto__ = (function (){var statearr_35411 = f__33612__auto__.call(null);
(statearr_35411[(6)] = c__33611__auto___35413);

return statearr_35411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___35413,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35431 = arguments.length;
switch (G__35431) {
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
var c__33611__auto___35501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___35501,out){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___35501,out){
return (function (state_35473){
var state_val_35474 = (state_35473[(1)]);
if((state_val_35474 === (7))){
var inst_35469 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35475_35502 = state_35473__$1;
(statearr_35475_35502[(2)] = inst_35469);

(statearr_35475_35502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (1))){
var inst_35432 = [];
var inst_35433 = inst_35432;
var inst_35434 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35473__$1 = (function (){var statearr_35476 = state_35473;
(statearr_35476[(7)] = inst_35434);

(statearr_35476[(8)] = inst_35433);

return statearr_35476;
})();
var statearr_35477_35503 = state_35473__$1;
(statearr_35477_35503[(2)] = null);

(statearr_35477_35503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (4))){
var inst_35437 = (state_35473[(9)]);
var inst_35437__$1 = (state_35473[(2)]);
var inst_35438 = (inst_35437__$1 == null);
var inst_35439 = cljs.core.not.call(null,inst_35438);
var state_35473__$1 = (function (){var statearr_35478 = state_35473;
(statearr_35478[(9)] = inst_35437__$1);

return statearr_35478;
})();
if(inst_35439){
var statearr_35479_35504 = state_35473__$1;
(statearr_35479_35504[(1)] = (5));

} else {
var statearr_35480_35505 = state_35473__$1;
(statearr_35480_35505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (15))){
var inst_35463 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35481_35506 = state_35473__$1;
(statearr_35481_35506[(2)] = inst_35463);

(statearr_35481_35506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (13))){
var state_35473__$1 = state_35473;
var statearr_35482_35507 = state_35473__$1;
(statearr_35482_35507[(2)] = null);

(statearr_35482_35507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (6))){
var inst_35433 = (state_35473[(8)]);
var inst_35458 = inst_35433.length;
var inst_35459 = (inst_35458 > (0));
var state_35473__$1 = state_35473;
if(cljs.core.truth_(inst_35459)){
var statearr_35483_35508 = state_35473__$1;
(statearr_35483_35508[(1)] = (12));

} else {
var statearr_35484_35509 = state_35473__$1;
(statearr_35484_35509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (3))){
var inst_35471 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35473__$1,inst_35471);
} else {
if((state_val_35474 === (12))){
var inst_35433 = (state_35473[(8)]);
var inst_35461 = cljs.core.vec.call(null,inst_35433);
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35473__$1,(15),out,inst_35461);
} else {
if((state_val_35474 === (2))){
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35473__$1,(4),ch);
} else {
if((state_val_35474 === (11))){
var inst_35441 = (state_35473[(10)]);
var inst_35437 = (state_35473[(9)]);
var inst_35451 = (state_35473[(2)]);
var inst_35452 = [];
var inst_35453 = inst_35452.push(inst_35437);
var inst_35433 = inst_35452;
var inst_35434 = inst_35441;
var state_35473__$1 = (function (){var statearr_35485 = state_35473;
(statearr_35485[(7)] = inst_35434);

(statearr_35485[(11)] = inst_35453);

(statearr_35485[(12)] = inst_35451);

(statearr_35485[(8)] = inst_35433);

return statearr_35485;
})();
var statearr_35486_35510 = state_35473__$1;
(statearr_35486_35510[(2)] = null);

(statearr_35486_35510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (9))){
var inst_35433 = (state_35473[(8)]);
var inst_35449 = cljs.core.vec.call(null,inst_35433);
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35473__$1,(11),out,inst_35449);
} else {
if((state_val_35474 === (5))){
var inst_35434 = (state_35473[(7)]);
var inst_35441 = (state_35473[(10)]);
var inst_35437 = (state_35473[(9)]);
var inst_35441__$1 = f.call(null,inst_35437);
var inst_35442 = cljs.core._EQ_.call(null,inst_35441__$1,inst_35434);
var inst_35443 = cljs.core.keyword_identical_QMARK_.call(null,inst_35434,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35444 = (inst_35442) || (inst_35443);
var state_35473__$1 = (function (){var statearr_35487 = state_35473;
(statearr_35487[(10)] = inst_35441__$1);

return statearr_35487;
})();
if(cljs.core.truth_(inst_35444)){
var statearr_35488_35511 = state_35473__$1;
(statearr_35488_35511[(1)] = (8));

} else {
var statearr_35489_35512 = state_35473__$1;
(statearr_35489_35512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (14))){
var inst_35466 = (state_35473[(2)]);
var inst_35467 = cljs.core.async.close_BANG_.call(null,out);
var state_35473__$1 = (function (){var statearr_35491 = state_35473;
(statearr_35491[(13)] = inst_35466);

return statearr_35491;
})();
var statearr_35492_35513 = state_35473__$1;
(statearr_35492_35513[(2)] = inst_35467);

(statearr_35492_35513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (10))){
var inst_35456 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35493_35514 = state_35473__$1;
(statearr_35493_35514[(2)] = inst_35456);

(statearr_35493_35514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (8))){
var inst_35441 = (state_35473[(10)]);
var inst_35437 = (state_35473[(9)]);
var inst_35433 = (state_35473[(8)]);
var inst_35446 = inst_35433.push(inst_35437);
var tmp35490 = inst_35433;
var inst_35433__$1 = tmp35490;
var inst_35434 = inst_35441;
var state_35473__$1 = (function (){var statearr_35494 = state_35473;
(statearr_35494[(14)] = inst_35446);

(statearr_35494[(7)] = inst_35434);

(statearr_35494[(8)] = inst_35433__$1);

return statearr_35494;
})();
var statearr_35495_35515 = state_35473__$1;
(statearr_35495_35515[(2)] = null);

(statearr_35495_35515[(1)] = (2));


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
});})(c__33611__auto___35501,out))
;
return ((function (switch__33523__auto__,c__33611__auto___35501,out){
return (function() {
var cljs$core$async$state_machine__33524__auto__ = null;
var cljs$core$async$state_machine__33524__auto____0 = (function (){
var statearr_35496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35496[(0)] = cljs$core$async$state_machine__33524__auto__);

(statearr_35496[(1)] = (1));

return statearr_35496;
});
var cljs$core$async$state_machine__33524__auto____1 = (function (state_35473){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_35473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e35497){if((e35497 instanceof Object)){
var ex__33527__auto__ = e35497;
var statearr_35498_35516 = state_35473;
(statearr_35498_35516[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35517 = state_35473;
state_35473 = G__35517;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
cljs$core$async$state_machine__33524__auto__ = function(state_35473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33524__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33524__auto____1.call(this,state_35473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33524__auto____0;
cljs$core$async$state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33524__auto____1;
return cljs$core$async$state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___35501,out))
})();
var state__33613__auto__ = (function (){var statearr_35499 = f__33612__auto__.call(null);
(statearr_35499[(6)] = c__33611__auto___35501);

return statearr_35499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___35501,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510190753401
