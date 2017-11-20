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
var G__31962 = arguments.length;
switch (G__31962) {
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
if(typeof cljs.core.async.t_cljs$core$async31963 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31963 = (function (f,blockable,meta31964){
this.f = f;
this.blockable = blockable;
this.meta31964 = meta31964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31965,meta31964__$1){
var self__ = this;
var _31965__$1 = this;
return (new cljs.core.async.t_cljs$core$async31963(self__.f,self__.blockable,meta31964__$1));
});

cljs.core.async.t_cljs$core$async31963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31965){
var self__ = this;
var _31965__$1 = this;
return self__.meta31964;
});

cljs.core.async.t_cljs$core$async31963.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31963.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31963.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31963.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31964","meta31964",1812998236,null)], null);
});

cljs.core.async.t_cljs$core$async31963.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31963";

cljs.core.async.t_cljs$core$async31963.cljs$lang$ctorPrWriter = (function (this__28334__auto__,writer__28335__auto__,opt__28336__auto__){
return cljs.core._write.call(null,writer__28335__auto__,"cljs.core.async/t_cljs$core$async31963");
});

cljs.core.async.__GT_t_cljs$core$async31963 = (function cljs$core$async$__GT_t_cljs$core$async31963(f__$1,blockable__$1,meta31964){
return (new cljs.core.async.t_cljs$core$async31963(f__$1,blockable__$1,meta31964));
});

}

return (new cljs.core.async.t_cljs$core$async31963(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31969 = arguments.length;
switch (G__31969) {
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
var G__31972 = arguments.length;
switch (G__31972) {
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
var G__31975 = arguments.length;
switch (G__31975) {
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
var val_31977 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31977);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31977,ret){
return (function (){
return fn1.call(null,val_31977);
});})(val_31977,ret))
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
var G__31979 = arguments.length;
switch (G__31979) {
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
var n__28654__auto___31981 = n;
var x_31982 = (0);
while(true){
if((x_31982 < n__28654__auto___31981)){
(a[x_31982] = (0));

var G__31983 = (x_31982 + (1));
x_31982 = G__31983;
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

var G__31984 = (i + (1));
i = G__31984;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31985 = (function (flag,meta31986){
this.flag = flag;
this.meta31986 = meta31986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31987,meta31986__$1){
var self__ = this;
var _31987__$1 = this;
return (new cljs.core.async.t_cljs$core$async31985(self__.flag,meta31986__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31987){
var self__ = this;
var _31987__$1 = this;
return self__.meta31986;
});})(flag))
;

cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31985.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31986","meta31986",-1543893569,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31985";

cljs.core.async.t_cljs$core$async31985.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28334__auto__,writer__28335__auto__,opt__28336__auto__){
return cljs.core._write.call(null,writer__28335__auto__,"cljs.core.async/t_cljs$core$async31985");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31985 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31985(flag__$1,meta31986){
return (new cljs.core.async.t_cljs$core$async31985(flag__$1,meta31986));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31985(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31988 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31988 = (function (flag,cb,meta31989){
this.flag = flag;
this.cb = cb;
this.meta31989 = meta31989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31990,meta31989__$1){
var self__ = this;
var _31990__$1 = this;
return (new cljs.core.async.t_cljs$core$async31988(self__.flag,self__.cb,meta31989__$1));
});

cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31990){
var self__ = this;
var _31990__$1 = this;
return self__.meta31989;
});

cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31989","meta31989",1411291826,null)], null);
});

cljs.core.async.t_cljs$core$async31988.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31988";

cljs.core.async.t_cljs$core$async31988.cljs$lang$ctorPrWriter = (function (this__28334__auto__,writer__28335__auto__,opt__28336__auto__){
return cljs.core._write.call(null,writer__28335__auto__,"cljs.core.async/t_cljs$core$async31988");
});

cljs.core.async.__GT_t_cljs$core$async31988 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31988(flag__$1,cb__$1,meta31989){
return (new cljs.core.async.t_cljs$core$async31988(flag__$1,cb__$1,meta31989));
});

}

return (new cljs.core.async.t_cljs$core$async31988(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31991_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31991_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31992_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31992_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27709__auto__ = wport;
if(cljs.core.truth_(or__27709__auto__)){
return or__27709__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31993 = (i + (1));
i = G__31993;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27709__auto__ = ret;
if(cljs.core.truth_(or__27709__auto__)){
return or__27709__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27697__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27697__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27697__auto__;
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
var args__28885__auto__ = [];
var len__28878__auto___31999 = arguments.length;
var i__28879__auto___32000 = (0);
while(true){
if((i__28879__auto___32000 < len__28878__auto___31999)){
args__28885__auto__.push((arguments[i__28879__auto___32000]));

var G__32001 = (i__28879__auto___32000 + (1));
i__28879__auto___32000 = G__32001;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((1) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28886__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31996){
var map__31997 = p__31996;
var map__31997__$1 = ((((!((map__31997 == null)))?((((map__31997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31997):map__31997);
var opts = map__31997__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31994){
var G__31995 = cljs.core.first.call(null,seq31994);
var seq31994__$1 = cljs.core.next.call(null,seq31994);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31995,seq31994__$1);
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
var G__32003 = arguments.length;
switch (G__32003) {
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
var c__31916__auto___32049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___32049){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___32049){
return (function (state_32027){
var state_val_32028 = (state_32027[(1)]);
if((state_val_32028 === (7))){
var inst_32023 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
var statearr_32029_32050 = state_32027__$1;
(statearr_32029_32050[(2)] = inst_32023);

(statearr_32029_32050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (1))){
var state_32027__$1 = state_32027;
var statearr_32030_32051 = state_32027__$1;
(statearr_32030_32051[(2)] = null);

(statearr_32030_32051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (4))){
var inst_32006 = (state_32027[(7)]);
var inst_32006__$1 = (state_32027[(2)]);
var inst_32007 = (inst_32006__$1 == null);
var state_32027__$1 = (function (){var statearr_32031 = state_32027;
(statearr_32031[(7)] = inst_32006__$1);

return statearr_32031;
})();
if(cljs.core.truth_(inst_32007)){
var statearr_32032_32052 = state_32027__$1;
(statearr_32032_32052[(1)] = (5));

} else {
var statearr_32033_32053 = state_32027__$1;
(statearr_32033_32053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (13))){
var state_32027__$1 = state_32027;
var statearr_32034_32054 = state_32027__$1;
(statearr_32034_32054[(2)] = null);

(statearr_32034_32054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (6))){
var inst_32006 = (state_32027[(7)]);
var state_32027__$1 = state_32027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32027__$1,(11),to,inst_32006);
} else {
if((state_val_32028 === (3))){
var inst_32025 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32027__$1,inst_32025);
} else {
if((state_val_32028 === (12))){
var state_32027__$1 = state_32027;
var statearr_32035_32055 = state_32027__$1;
(statearr_32035_32055[(2)] = null);

(statearr_32035_32055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (2))){
var state_32027__$1 = state_32027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32027__$1,(4),from);
} else {
if((state_val_32028 === (11))){
var inst_32016 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
if(cljs.core.truth_(inst_32016)){
var statearr_32036_32056 = state_32027__$1;
(statearr_32036_32056[(1)] = (12));

} else {
var statearr_32037_32057 = state_32027__$1;
(statearr_32037_32057[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (9))){
var state_32027__$1 = state_32027;
var statearr_32038_32058 = state_32027__$1;
(statearr_32038_32058[(2)] = null);

(statearr_32038_32058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (5))){
var state_32027__$1 = state_32027;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32039_32059 = state_32027__$1;
(statearr_32039_32059[(1)] = (8));

} else {
var statearr_32040_32060 = state_32027__$1;
(statearr_32040_32060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (14))){
var inst_32021 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
var statearr_32041_32061 = state_32027__$1;
(statearr_32041_32061[(2)] = inst_32021);

(statearr_32041_32061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (10))){
var inst_32013 = (state_32027[(2)]);
var state_32027__$1 = state_32027;
var statearr_32042_32062 = state_32027__$1;
(statearr_32042_32062[(2)] = inst_32013);

(statearr_32042_32062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32028 === (8))){
var inst_32010 = cljs.core.async.close_BANG_.call(null,to);
var state_32027__$1 = state_32027;
var statearr_32043_32063 = state_32027__$1;
(statearr_32043_32063[(2)] = inst_32010);

(statearr_32043_32063[(1)] = (10));


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
});})(c__31916__auto___32049))
;
return ((function (switch__31828__auto__,c__31916__auto___32049){
return (function() {
var cljs$core$async$state_machine__31829__auto__ = null;
var cljs$core$async$state_machine__31829__auto____0 = (function (){
var statearr_32044 = [null,null,null,null,null,null,null,null];
(statearr_32044[(0)] = cljs$core$async$state_machine__31829__auto__);

(statearr_32044[(1)] = (1));

return statearr_32044;
});
var cljs$core$async$state_machine__31829__auto____1 = (function (state_32027){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_32027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e32045){if((e32045 instanceof Object)){
var ex__31832__auto__ = e32045;
var statearr_32046_32064 = state_32027;
(statearr_32046_32064[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32065 = state_32027;
state_32027 = G__32065;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$state_machine__31829__auto__ = function(state_32027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31829__auto____1.call(this,state_32027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31829__auto____0;
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31829__auto____1;
return cljs$core$async$state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___32049))
})();
var state__31918__auto__ = (function (){var statearr_32047 = f__31917__auto__.call(null);
(statearr_32047[(6)] = c__31916__auto___32049);

return statearr_32047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___32049))
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
return (function (p__32066){
var vec__32067 = p__32066;
var v = cljs.core.nth.call(null,vec__32067,(0),null);
var p = cljs.core.nth.call(null,vec__32067,(1),null);
var job = vec__32067;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31916__auto___32238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___32238,res,vec__32067,v,p,job,jobs,results){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___32238,res,vec__32067,v,p,job,jobs,results){
return (function (state_32074){
var state_val_32075 = (state_32074[(1)]);
if((state_val_32075 === (1))){
var state_32074__$1 = state_32074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32074__$1,(2),res,v);
} else {
if((state_val_32075 === (2))){
var inst_32071 = (state_32074[(2)]);
var inst_32072 = cljs.core.async.close_BANG_.call(null,res);
var state_32074__$1 = (function (){var statearr_32076 = state_32074;
(statearr_32076[(7)] = inst_32071);

return statearr_32076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32074__$1,inst_32072);
} else {
return null;
}
}
});})(c__31916__auto___32238,res,vec__32067,v,p,job,jobs,results))
;
return ((function (switch__31828__auto__,c__31916__auto___32238,res,vec__32067,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0 = (function (){
var statearr_32077 = [null,null,null,null,null,null,null,null];
(statearr_32077[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__);

(statearr_32077[(1)] = (1));

return statearr_32077;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1 = (function (state_32074){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_32074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e32078){if((e32078 instanceof Object)){
var ex__31832__auto__ = e32078;
var statearr_32079_32239 = state_32074;
(statearr_32079_32239[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32240 = state_32074;
state_32074 = G__32240;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__ = function(state_32074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1.call(this,state_32074);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___32238,res,vec__32067,v,p,job,jobs,results))
})();
var state__31918__auto__ = (function (){var statearr_32080 = f__31917__auto__.call(null);
(statearr_32080[(6)] = c__31916__auto___32238);

return statearr_32080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___32238,res,vec__32067,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32081){
var vec__32082 = p__32081;
var v = cljs.core.nth.call(null,vec__32082,(0),null);
var p = cljs.core.nth.call(null,vec__32082,(1),null);
var job = vec__32082;
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
var n__28654__auto___32241 = n;
var __32242 = (0);
while(true){
if((__32242 < n__28654__auto___32241)){
var G__32085_32243 = type;
var G__32085_32244__$1 = (((G__32085_32243 instanceof cljs.core.Keyword))?G__32085_32243.fqn:null);
switch (G__32085_32244__$1) {
case "compute":
var c__31916__auto___32246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32242,c__31916__auto___32246,G__32085_32243,G__32085_32244__$1,n__28654__auto___32241,jobs,results,process,async){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (__32242,c__31916__auto___32246,G__32085_32243,G__32085_32244__$1,n__28654__auto___32241,jobs,results,process,async){
return (function (state_32098){
var state_val_32099 = (state_32098[(1)]);
if((state_val_32099 === (1))){
var state_32098__$1 = state_32098;
var statearr_32100_32247 = state_32098__$1;
(statearr_32100_32247[(2)] = null);

(statearr_32100_32247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (2))){
var state_32098__$1 = state_32098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32098__$1,(4),jobs);
} else {
if((state_val_32099 === (3))){
var inst_32096 = (state_32098[(2)]);
var state_32098__$1 = state_32098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32098__$1,inst_32096);
} else {
if((state_val_32099 === (4))){
var inst_32088 = (state_32098[(2)]);
var inst_32089 = process.call(null,inst_32088);
var state_32098__$1 = state_32098;
if(cljs.core.truth_(inst_32089)){
var statearr_32101_32248 = state_32098__$1;
(statearr_32101_32248[(1)] = (5));

} else {
var statearr_32102_32249 = state_32098__$1;
(statearr_32102_32249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (5))){
var state_32098__$1 = state_32098;
var statearr_32103_32250 = state_32098__$1;
(statearr_32103_32250[(2)] = null);

(statearr_32103_32250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (6))){
var state_32098__$1 = state_32098;
var statearr_32104_32251 = state_32098__$1;
(statearr_32104_32251[(2)] = null);

(statearr_32104_32251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32099 === (7))){
var inst_32094 = (state_32098[(2)]);
var state_32098__$1 = state_32098;
var statearr_32105_32252 = state_32098__$1;
(statearr_32105_32252[(2)] = inst_32094);

(statearr_32105_32252[(1)] = (3));


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
});})(__32242,c__31916__auto___32246,G__32085_32243,G__32085_32244__$1,n__28654__auto___32241,jobs,results,process,async))
;
return ((function (__32242,switch__31828__auto__,c__31916__auto___32246,G__32085_32243,G__32085_32244__$1,n__28654__auto___32241,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0 = (function (){
var statearr_32106 = [null,null,null,null,null,null,null];
(statearr_32106[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__);

(statearr_32106[(1)] = (1));

return statearr_32106;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1 = (function (state_32098){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_32098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e32107){if((e32107 instanceof Object)){
var ex__31832__auto__ = e32107;
var statearr_32108_32253 = state_32098;
(statearr_32108_32253[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32254 = state_32098;
state_32098 = G__32254;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__ = function(state_32098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1.call(this,state_32098);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__;
})()
;})(__32242,switch__31828__auto__,c__31916__auto___32246,G__32085_32243,G__32085_32244__$1,n__28654__auto___32241,jobs,results,process,async))
})();
var state__31918__auto__ = (function (){var statearr_32109 = f__31917__auto__.call(null);
(statearr_32109[(6)] = c__31916__auto___32246);

return statearr_32109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(__32242,c__31916__auto___32246,G__32085_32243,G__32085_32244__$1,n__28654__auto___32241,jobs,results,process,async))
);


break;
case "async":
var c__31916__auto___32255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32242,c__31916__auto___32255,G__32085_32243,G__32085_32244__$1,n__28654__auto___32241,jobs,results,process,async){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (__32242,c__31916__auto___32255,G__32085_32243,G__32085_32244__$1,n__28654__auto___32241,jobs,results,process,async){
return (function (state_32122){
var state_val_32123 = (state_32122[(1)]);
if((state_val_32123 === (1))){
var state_32122__$1 = state_32122;
var statearr_32124_32256 = state_32122__$1;
(statearr_32124_32256[(2)] = null);

(statearr_32124_32256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (2))){
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32122__$1,(4),jobs);
} else {
if((state_val_32123 === (3))){
var inst_32120 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32122__$1,inst_32120);
} else {
if((state_val_32123 === (4))){
var inst_32112 = (state_32122[(2)]);
var inst_32113 = async.call(null,inst_32112);
var state_32122__$1 = state_32122;
if(cljs.core.truth_(inst_32113)){
var statearr_32125_32257 = state_32122__$1;
(statearr_32125_32257[(1)] = (5));

} else {
var statearr_32126_32258 = state_32122__$1;
(statearr_32126_32258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (5))){
var state_32122__$1 = state_32122;
var statearr_32127_32259 = state_32122__$1;
(statearr_32127_32259[(2)] = null);

(statearr_32127_32259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (6))){
var state_32122__$1 = state_32122;
var statearr_32128_32260 = state_32122__$1;
(statearr_32128_32260[(2)] = null);

(statearr_32128_32260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32123 === (7))){
var inst_32118 = (state_32122[(2)]);
var state_32122__$1 = state_32122;
var statearr_32129_32261 = state_32122__$1;
(statearr_32129_32261[(2)] = inst_32118);

(statearr_32129_32261[(1)] = (3));


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
});})(__32242,c__31916__auto___32255,G__32085_32243,G__32085_32244__$1,n__28654__auto___32241,jobs,results,process,async))
;
return ((function (__32242,switch__31828__auto__,c__31916__auto___32255,G__32085_32243,G__32085_32244__$1,n__28654__auto___32241,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0 = (function (){
var statearr_32130 = [null,null,null,null,null,null,null];
(statearr_32130[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__);

(statearr_32130[(1)] = (1));

return statearr_32130;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1 = (function (state_32122){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_32122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e32131){if((e32131 instanceof Object)){
var ex__31832__auto__ = e32131;
var statearr_32132_32262 = state_32122;
(statearr_32132_32262[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32263 = state_32122;
state_32122 = G__32263;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__ = function(state_32122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1.call(this,state_32122);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__;
})()
;})(__32242,switch__31828__auto__,c__31916__auto___32255,G__32085_32243,G__32085_32244__$1,n__28654__auto___32241,jobs,results,process,async))
})();
var state__31918__auto__ = (function (){var statearr_32133 = f__31917__auto__.call(null);
(statearr_32133[(6)] = c__31916__auto___32255);

return statearr_32133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(__32242,c__31916__auto___32255,G__32085_32243,G__32085_32244__$1,n__28654__auto___32241,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32085_32244__$1)].join('')));

}

var G__32264 = (__32242 + (1));
__32242 = G__32264;
continue;
} else {
}
break;
}

var c__31916__auto___32265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___32265,jobs,results,process,async){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___32265,jobs,results,process,async){
return (function (state_32155){
var state_val_32156 = (state_32155[(1)]);
if((state_val_32156 === (1))){
var state_32155__$1 = state_32155;
var statearr_32157_32266 = state_32155__$1;
(statearr_32157_32266[(2)] = null);

(statearr_32157_32266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32156 === (2))){
var state_32155__$1 = state_32155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32155__$1,(4),from);
} else {
if((state_val_32156 === (3))){
var inst_32153 = (state_32155[(2)]);
var state_32155__$1 = state_32155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32155__$1,inst_32153);
} else {
if((state_val_32156 === (4))){
var inst_32136 = (state_32155[(7)]);
var inst_32136__$1 = (state_32155[(2)]);
var inst_32137 = (inst_32136__$1 == null);
var state_32155__$1 = (function (){var statearr_32158 = state_32155;
(statearr_32158[(7)] = inst_32136__$1);

return statearr_32158;
})();
if(cljs.core.truth_(inst_32137)){
var statearr_32159_32267 = state_32155__$1;
(statearr_32159_32267[(1)] = (5));

} else {
var statearr_32160_32268 = state_32155__$1;
(statearr_32160_32268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32156 === (5))){
var inst_32139 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32155__$1 = state_32155;
var statearr_32161_32269 = state_32155__$1;
(statearr_32161_32269[(2)] = inst_32139);

(statearr_32161_32269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32156 === (6))){
var inst_32136 = (state_32155[(7)]);
var inst_32141 = (state_32155[(8)]);
var inst_32141__$1 = cljs.core.async.chan.call(null,(1));
var inst_32142 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32143 = [inst_32136,inst_32141__$1];
var inst_32144 = (new cljs.core.PersistentVector(null,2,(5),inst_32142,inst_32143,null));
var state_32155__$1 = (function (){var statearr_32162 = state_32155;
(statearr_32162[(8)] = inst_32141__$1);

return statearr_32162;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32155__$1,(8),jobs,inst_32144);
} else {
if((state_val_32156 === (7))){
var inst_32151 = (state_32155[(2)]);
var state_32155__$1 = state_32155;
var statearr_32163_32270 = state_32155__$1;
(statearr_32163_32270[(2)] = inst_32151);

(statearr_32163_32270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32156 === (8))){
var inst_32141 = (state_32155[(8)]);
var inst_32146 = (state_32155[(2)]);
var state_32155__$1 = (function (){var statearr_32164 = state_32155;
(statearr_32164[(9)] = inst_32146);

return statearr_32164;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32155__$1,(9),results,inst_32141);
} else {
if((state_val_32156 === (9))){
var inst_32148 = (state_32155[(2)]);
var state_32155__$1 = (function (){var statearr_32165 = state_32155;
(statearr_32165[(10)] = inst_32148);

return statearr_32165;
})();
var statearr_32166_32271 = state_32155__$1;
(statearr_32166_32271[(2)] = null);

(statearr_32166_32271[(1)] = (2));


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
});})(c__31916__auto___32265,jobs,results,process,async))
;
return ((function (switch__31828__auto__,c__31916__auto___32265,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0 = (function (){
var statearr_32167 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32167[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__);

(statearr_32167[(1)] = (1));

return statearr_32167;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1 = (function (state_32155){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_32155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e32168){if((e32168 instanceof Object)){
var ex__31832__auto__ = e32168;
var statearr_32169_32272 = state_32155;
(statearr_32169_32272[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32273 = state_32155;
state_32155 = G__32273;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__ = function(state_32155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1.call(this,state_32155);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___32265,jobs,results,process,async))
})();
var state__31918__auto__ = (function (){var statearr_32170 = f__31917__auto__.call(null);
(statearr_32170[(6)] = c__31916__auto___32265);

return statearr_32170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___32265,jobs,results,process,async))
);


var c__31916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto__,jobs,results,process,async){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto__,jobs,results,process,async){
return (function (state_32208){
var state_val_32209 = (state_32208[(1)]);
if((state_val_32209 === (7))){
var inst_32204 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
var statearr_32210_32274 = state_32208__$1;
(statearr_32210_32274[(2)] = inst_32204);

(statearr_32210_32274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (20))){
var state_32208__$1 = state_32208;
var statearr_32211_32275 = state_32208__$1;
(statearr_32211_32275[(2)] = null);

(statearr_32211_32275[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (1))){
var state_32208__$1 = state_32208;
var statearr_32212_32276 = state_32208__$1;
(statearr_32212_32276[(2)] = null);

(statearr_32212_32276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (4))){
var inst_32173 = (state_32208[(7)]);
var inst_32173__$1 = (state_32208[(2)]);
var inst_32174 = (inst_32173__$1 == null);
var state_32208__$1 = (function (){var statearr_32213 = state_32208;
(statearr_32213[(7)] = inst_32173__$1);

return statearr_32213;
})();
if(cljs.core.truth_(inst_32174)){
var statearr_32214_32277 = state_32208__$1;
(statearr_32214_32277[(1)] = (5));

} else {
var statearr_32215_32278 = state_32208__$1;
(statearr_32215_32278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (15))){
var inst_32186 = (state_32208[(8)]);
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32208__$1,(18),to,inst_32186);
} else {
if((state_val_32209 === (21))){
var inst_32199 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
var statearr_32216_32279 = state_32208__$1;
(statearr_32216_32279[(2)] = inst_32199);

(statearr_32216_32279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (13))){
var inst_32201 = (state_32208[(2)]);
var state_32208__$1 = (function (){var statearr_32217 = state_32208;
(statearr_32217[(9)] = inst_32201);

return statearr_32217;
})();
var statearr_32218_32280 = state_32208__$1;
(statearr_32218_32280[(2)] = null);

(statearr_32218_32280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (6))){
var inst_32173 = (state_32208[(7)]);
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32208__$1,(11),inst_32173);
} else {
if((state_val_32209 === (17))){
var inst_32194 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
if(cljs.core.truth_(inst_32194)){
var statearr_32219_32281 = state_32208__$1;
(statearr_32219_32281[(1)] = (19));

} else {
var statearr_32220_32282 = state_32208__$1;
(statearr_32220_32282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (3))){
var inst_32206 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32208__$1,inst_32206);
} else {
if((state_val_32209 === (12))){
var inst_32183 = (state_32208[(10)]);
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32208__$1,(14),inst_32183);
} else {
if((state_val_32209 === (2))){
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32208__$1,(4),results);
} else {
if((state_val_32209 === (19))){
var state_32208__$1 = state_32208;
var statearr_32221_32283 = state_32208__$1;
(statearr_32221_32283[(2)] = null);

(statearr_32221_32283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (11))){
var inst_32183 = (state_32208[(2)]);
var state_32208__$1 = (function (){var statearr_32222 = state_32208;
(statearr_32222[(10)] = inst_32183);

return statearr_32222;
})();
var statearr_32223_32284 = state_32208__$1;
(statearr_32223_32284[(2)] = null);

(statearr_32223_32284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (9))){
var state_32208__$1 = state_32208;
var statearr_32224_32285 = state_32208__$1;
(statearr_32224_32285[(2)] = null);

(statearr_32224_32285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (5))){
var state_32208__$1 = state_32208;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32225_32286 = state_32208__$1;
(statearr_32225_32286[(1)] = (8));

} else {
var statearr_32226_32287 = state_32208__$1;
(statearr_32226_32287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (14))){
var inst_32188 = (state_32208[(11)]);
var inst_32186 = (state_32208[(8)]);
var inst_32186__$1 = (state_32208[(2)]);
var inst_32187 = (inst_32186__$1 == null);
var inst_32188__$1 = cljs.core.not.call(null,inst_32187);
var state_32208__$1 = (function (){var statearr_32227 = state_32208;
(statearr_32227[(11)] = inst_32188__$1);

(statearr_32227[(8)] = inst_32186__$1);

return statearr_32227;
})();
if(inst_32188__$1){
var statearr_32228_32288 = state_32208__$1;
(statearr_32228_32288[(1)] = (15));

} else {
var statearr_32229_32289 = state_32208__$1;
(statearr_32229_32289[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (16))){
var inst_32188 = (state_32208[(11)]);
var state_32208__$1 = state_32208;
var statearr_32230_32290 = state_32208__$1;
(statearr_32230_32290[(2)] = inst_32188);

(statearr_32230_32290[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (10))){
var inst_32180 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
var statearr_32231_32291 = state_32208__$1;
(statearr_32231_32291[(2)] = inst_32180);

(statearr_32231_32291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (18))){
var inst_32191 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
var statearr_32232_32292 = state_32208__$1;
(statearr_32232_32292[(2)] = inst_32191);

(statearr_32232_32292[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (8))){
var inst_32177 = cljs.core.async.close_BANG_.call(null,to);
var state_32208__$1 = state_32208;
var statearr_32233_32293 = state_32208__$1;
(statearr_32233_32293[(2)] = inst_32177);

(statearr_32233_32293[(1)] = (10));


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
});})(c__31916__auto__,jobs,results,process,async))
;
return ((function (switch__31828__auto__,c__31916__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0 = (function (){
var statearr_32234 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32234[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__);

(statearr_32234[(1)] = (1));

return statearr_32234;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1 = (function (state_32208){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_32208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e32235){if((e32235 instanceof Object)){
var ex__31832__auto__ = e32235;
var statearr_32236_32294 = state_32208;
(statearr_32236_32294[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32295 = state_32208;
state_32208 = G__32295;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__ = function(state_32208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1.call(this,state_32208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31829__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto__,jobs,results,process,async))
})();
var state__31918__auto__ = (function (){var statearr_32237 = f__31917__auto__.call(null);
(statearr_32237[(6)] = c__31916__auto__);

return statearr_32237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto__,jobs,results,process,async))
);

return c__31916__auto__;
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
var G__32297 = arguments.length;
switch (G__32297) {
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
var G__32300 = arguments.length;
switch (G__32300) {
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
var G__32303 = arguments.length;
switch (G__32303) {
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
var c__31916__auto___32352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___32352,tc,fc){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___32352,tc,fc){
return (function (state_32329){
var state_val_32330 = (state_32329[(1)]);
if((state_val_32330 === (7))){
var inst_32325 = (state_32329[(2)]);
var state_32329__$1 = state_32329;
var statearr_32331_32353 = state_32329__$1;
(statearr_32331_32353[(2)] = inst_32325);

(statearr_32331_32353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (1))){
var state_32329__$1 = state_32329;
var statearr_32332_32354 = state_32329__$1;
(statearr_32332_32354[(2)] = null);

(statearr_32332_32354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (4))){
var inst_32306 = (state_32329[(7)]);
var inst_32306__$1 = (state_32329[(2)]);
var inst_32307 = (inst_32306__$1 == null);
var state_32329__$1 = (function (){var statearr_32333 = state_32329;
(statearr_32333[(7)] = inst_32306__$1);

return statearr_32333;
})();
if(cljs.core.truth_(inst_32307)){
var statearr_32334_32355 = state_32329__$1;
(statearr_32334_32355[(1)] = (5));

} else {
var statearr_32335_32356 = state_32329__$1;
(statearr_32335_32356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (13))){
var state_32329__$1 = state_32329;
var statearr_32336_32357 = state_32329__$1;
(statearr_32336_32357[(2)] = null);

(statearr_32336_32357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (6))){
var inst_32306 = (state_32329[(7)]);
var inst_32312 = p.call(null,inst_32306);
var state_32329__$1 = state_32329;
if(cljs.core.truth_(inst_32312)){
var statearr_32337_32358 = state_32329__$1;
(statearr_32337_32358[(1)] = (9));

} else {
var statearr_32338_32359 = state_32329__$1;
(statearr_32338_32359[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (3))){
var inst_32327 = (state_32329[(2)]);
var state_32329__$1 = state_32329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32329__$1,inst_32327);
} else {
if((state_val_32330 === (12))){
var state_32329__$1 = state_32329;
var statearr_32339_32360 = state_32329__$1;
(statearr_32339_32360[(2)] = null);

(statearr_32339_32360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (2))){
var state_32329__$1 = state_32329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32329__$1,(4),ch);
} else {
if((state_val_32330 === (11))){
var inst_32306 = (state_32329[(7)]);
var inst_32316 = (state_32329[(2)]);
var state_32329__$1 = state_32329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32329__$1,(8),inst_32316,inst_32306);
} else {
if((state_val_32330 === (9))){
var state_32329__$1 = state_32329;
var statearr_32340_32361 = state_32329__$1;
(statearr_32340_32361[(2)] = tc);

(statearr_32340_32361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (5))){
var inst_32309 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32310 = cljs.core.async.close_BANG_.call(null,fc);
var state_32329__$1 = (function (){var statearr_32341 = state_32329;
(statearr_32341[(8)] = inst_32309);

return statearr_32341;
})();
var statearr_32342_32362 = state_32329__$1;
(statearr_32342_32362[(2)] = inst_32310);

(statearr_32342_32362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (14))){
var inst_32323 = (state_32329[(2)]);
var state_32329__$1 = state_32329;
var statearr_32343_32363 = state_32329__$1;
(statearr_32343_32363[(2)] = inst_32323);

(statearr_32343_32363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (10))){
var state_32329__$1 = state_32329;
var statearr_32344_32364 = state_32329__$1;
(statearr_32344_32364[(2)] = fc);

(statearr_32344_32364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (8))){
var inst_32318 = (state_32329[(2)]);
var state_32329__$1 = state_32329;
if(cljs.core.truth_(inst_32318)){
var statearr_32345_32365 = state_32329__$1;
(statearr_32345_32365[(1)] = (12));

} else {
var statearr_32346_32366 = state_32329__$1;
(statearr_32346_32366[(1)] = (13));

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
});})(c__31916__auto___32352,tc,fc))
;
return ((function (switch__31828__auto__,c__31916__auto___32352,tc,fc){
return (function() {
var cljs$core$async$state_machine__31829__auto__ = null;
var cljs$core$async$state_machine__31829__auto____0 = (function (){
var statearr_32347 = [null,null,null,null,null,null,null,null,null];
(statearr_32347[(0)] = cljs$core$async$state_machine__31829__auto__);

(statearr_32347[(1)] = (1));

return statearr_32347;
});
var cljs$core$async$state_machine__31829__auto____1 = (function (state_32329){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_32329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e32348){if((e32348 instanceof Object)){
var ex__31832__auto__ = e32348;
var statearr_32349_32367 = state_32329;
(statearr_32349_32367[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32368 = state_32329;
state_32329 = G__32368;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$state_machine__31829__auto__ = function(state_32329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31829__auto____1.call(this,state_32329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31829__auto____0;
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31829__auto____1;
return cljs$core$async$state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___32352,tc,fc))
})();
var state__31918__auto__ = (function (){var statearr_32350 = f__31917__auto__.call(null);
(statearr_32350[(6)] = c__31916__auto___32352);

return statearr_32350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___32352,tc,fc))
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
var c__31916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto__){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto__){
return (function (state_32389){
var state_val_32390 = (state_32389[(1)]);
if((state_val_32390 === (7))){
var inst_32385 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
var statearr_32391_32409 = state_32389__$1;
(statearr_32391_32409[(2)] = inst_32385);

(statearr_32391_32409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (1))){
var inst_32369 = init;
var state_32389__$1 = (function (){var statearr_32392 = state_32389;
(statearr_32392[(7)] = inst_32369);

return statearr_32392;
})();
var statearr_32393_32410 = state_32389__$1;
(statearr_32393_32410[(2)] = null);

(statearr_32393_32410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (4))){
var inst_32372 = (state_32389[(8)]);
var inst_32372__$1 = (state_32389[(2)]);
var inst_32373 = (inst_32372__$1 == null);
var state_32389__$1 = (function (){var statearr_32394 = state_32389;
(statearr_32394[(8)] = inst_32372__$1);

return statearr_32394;
})();
if(cljs.core.truth_(inst_32373)){
var statearr_32395_32411 = state_32389__$1;
(statearr_32395_32411[(1)] = (5));

} else {
var statearr_32396_32412 = state_32389__$1;
(statearr_32396_32412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (6))){
var inst_32369 = (state_32389[(7)]);
var inst_32376 = (state_32389[(9)]);
var inst_32372 = (state_32389[(8)]);
var inst_32376__$1 = f.call(null,inst_32369,inst_32372);
var inst_32377 = cljs.core.reduced_QMARK_.call(null,inst_32376__$1);
var state_32389__$1 = (function (){var statearr_32397 = state_32389;
(statearr_32397[(9)] = inst_32376__$1);

return statearr_32397;
})();
if(inst_32377){
var statearr_32398_32413 = state_32389__$1;
(statearr_32398_32413[(1)] = (8));

} else {
var statearr_32399_32414 = state_32389__$1;
(statearr_32399_32414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (3))){
var inst_32387 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32389__$1,inst_32387);
} else {
if((state_val_32390 === (2))){
var state_32389__$1 = state_32389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32389__$1,(4),ch);
} else {
if((state_val_32390 === (9))){
var inst_32376 = (state_32389[(9)]);
var inst_32369 = inst_32376;
var state_32389__$1 = (function (){var statearr_32400 = state_32389;
(statearr_32400[(7)] = inst_32369);

return statearr_32400;
})();
var statearr_32401_32415 = state_32389__$1;
(statearr_32401_32415[(2)] = null);

(statearr_32401_32415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (5))){
var inst_32369 = (state_32389[(7)]);
var state_32389__$1 = state_32389;
var statearr_32402_32416 = state_32389__$1;
(statearr_32402_32416[(2)] = inst_32369);

(statearr_32402_32416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (10))){
var inst_32383 = (state_32389[(2)]);
var state_32389__$1 = state_32389;
var statearr_32403_32417 = state_32389__$1;
(statearr_32403_32417[(2)] = inst_32383);

(statearr_32403_32417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32390 === (8))){
var inst_32376 = (state_32389[(9)]);
var inst_32379 = cljs.core.deref.call(null,inst_32376);
var state_32389__$1 = state_32389;
var statearr_32404_32418 = state_32389__$1;
(statearr_32404_32418[(2)] = inst_32379);

(statearr_32404_32418[(1)] = (10));


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
});})(c__31916__auto__))
;
return ((function (switch__31828__auto__,c__31916__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31829__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31829__auto____0 = (function (){
var statearr_32405 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32405[(0)] = cljs$core$async$reduce_$_state_machine__31829__auto__);

(statearr_32405[(1)] = (1));

return statearr_32405;
});
var cljs$core$async$reduce_$_state_machine__31829__auto____1 = (function (state_32389){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_32389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e32406){if((e32406 instanceof Object)){
var ex__31832__auto__ = e32406;
var statearr_32407_32419 = state_32389;
(statearr_32407_32419[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32420 = state_32389;
state_32389 = G__32420;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31829__auto__ = function(state_32389){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31829__auto____1.call(this,state_32389);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31829__auto____0;
cljs$core$async$reduce_$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31829__auto____1;
return cljs$core$async$reduce_$_state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto__))
})();
var state__31918__auto__ = (function (){var statearr_32408 = f__31917__auto__.call(null);
(statearr_32408[(6)] = c__31916__auto__);

return statearr_32408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto__))
);

return c__31916__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto__,f__$1){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto__,f__$1){
return (function (state_32426){
var state_val_32427 = (state_32426[(1)]);
if((state_val_32427 === (1))){
var inst_32421 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32426__$1 = state_32426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32426__$1,(2),inst_32421);
} else {
if((state_val_32427 === (2))){
var inst_32423 = (state_32426[(2)]);
var inst_32424 = f__$1.call(null,inst_32423);
var state_32426__$1 = state_32426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32426__$1,inst_32424);
} else {
return null;
}
}
});})(c__31916__auto__,f__$1))
;
return ((function (switch__31828__auto__,c__31916__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31829__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31829__auto____0 = (function (){
var statearr_32428 = [null,null,null,null,null,null,null];
(statearr_32428[(0)] = cljs$core$async$transduce_$_state_machine__31829__auto__);

(statearr_32428[(1)] = (1));

return statearr_32428;
});
var cljs$core$async$transduce_$_state_machine__31829__auto____1 = (function (state_32426){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_32426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e32429){if((e32429 instanceof Object)){
var ex__31832__auto__ = e32429;
var statearr_32430_32432 = state_32426;
(statearr_32430_32432[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32433 = state_32426;
state_32426 = G__32433;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31829__auto__ = function(state_32426){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31829__auto____1.call(this,state_32426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31829__auto____0;
cljs$core$async$transduce_$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31829__auto____1;
return cljs$core$async$transduce_$_state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto__,f__$1))
})();
var state__31918__auto__ = (function (){var statearr_32431 = f__31917__auto__.call(null);
(statearr_32431[(6)] = c__31916__auto__);

return statearr_32431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto__,f__$1))
);

return c__31916__auto__;
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
var G__32435 = arguments.length;
switch (G__32435) {
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
var c__31916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto__){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto__){
return (function (state_32460){
var state_val_32461 = (state_32460[(1)]);
if((state_val_32461 === (7))){
var inst_32442 = (state_32460[(2)]);
var state_32460__$1 = state_32460;
var statearr_32462_32483 = state_32460__$1;
(statearr_32462_32483[(2)] = inst_32442);

(statearr_32462_32483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (1))){
var inst_32436 = cljs.core.seq.call(null,coll);
var inst_32437 = inst_32436;
var state_32460__$1 = (function (){var statearr_32463 = state_32460;
(statearr_32463[(7)] = inst_32437);

return statearr_32463;
})();
var statearr_32464_32484 = state_32460__$1;
(statearr_32464_32484[(2)] = null);

(statearr_32464_32484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (4))){
var inst_32437 = (state_32460[(7)]);
var inst_32440 = cljs.core.first.call(null,inst_32437);
var state_32460__$1 = state_32460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32460__$1,(7),ch,inst_32440);
} else {
if((state_val_32461 === (13))){
var inst_32454 = (state_32460[(2)]);
var state_32460__$1 = state_32460;
var statearr_32465_32485 = state_32460__$1;
(statearr_32465_32485[(2)] = inst_32454);

(statearr_32465_32485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (6))){
var inst_32445 = (state_32460[(2)]);
var state_32460__$1 = state_32460;
if(cljs.core.truth_(inst_32445)){
var statearr_32466_32486 = state_32460__$1;
(statearr_32466_32486[(1)] = (8));

} else {
var statearr_32467_32487 = state_32460__$1;
(statearr_32467_32487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (3))){
var inst_32458 = (state_32460[(2)]);
var state_32460__$1 = state_32460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32460__$1,inst_32458);
} else {
if((state_val_32461 === (12))){
var state_32460__$1 = state_32460;
var statearr_32468_32488 = state_32460__$1;
(statearr_32468_32488[(2)] = null);

(statearr_32468_32488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (2))){
var inst_32437 = (state_32460[(7)]);
var state_32460__$1 = state_32460;
if(cljs.core.truth_(inst_32437)){
var statearr_32469_32489 = state_32460__$1;
(statearr_32469_32489[(1)] = (4));

} else {
var statearr_32470_32490 = state_32460__$1;
(statearr_32470_32490[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (11))){
var inst_32451 = cljs.core.async.close_BANG_.call(null,ch);
var state_32460__$1 = state_32460;
var statearr_32471_32491 = state_32460__$1;
(statearr_32471_32491[(2)] = inst_32451);

(statearr_32471_32491[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (9))){
var state_32460__$1 = state_32460;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32472_32492 = state_32460__$1;
(statearr_32472_32492[(1)] = (11));

} else {
var statearr_32473_32493 = state_32460__$1;
(statearr_32473_32493[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (5))){
var inst_32437 = (state_32460[(7)]);
var state_32460__$1 = state_32460;
var statearr_32474_32494 = state_32460__$1;
(statearr_32474_32494[(2)] = inst_32437);

(statearr_32474_32494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (10))){
var inst_32456 = (state_32460[(2)]);
var state_32460__$1 = state_32460;
var statearr_32475_32495 = state_32460__$1;
(statearr_32475_32495[(2)] = inst_32456);

(statearr_32475_32495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (8))){
var inst_32437 = (state_32460[(7)]);
var inst_32447 = cljs.core.next.call(null,inst_32437);
var inst_32437__$1 = inst_32447;
var state_32460__$1 = (function (){var statearr_32476 = state_32460;
(statearr_32476[(7)] = inst_32437__$1);

return statearr_32476;
})();
var statearr_32477_32496 = state_32460__$1;
(statearr_32477_32496[(2)] = null);

(statearr_32477_32496[(1)] = (2));


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
});})(c__31916__auto__))
;
return ((function (switch__31828__auto__,c__31916__auto__){
return (function() {
var cljs$core$async$state_machine__31829__auto__ = null;
var cljs$core$async$state_machine__31829__auto____0 = (function (){
var statearr_32478 = [null,null,null,null,null,null,null,null];
(statearr_32478[(0)] = cljs$core$async$state_machine__31829__auto__);

(statearr_32478[(1)] = (1));

return statearr_32478;
});
var cljs$core$async$state_machine__31829__auto____1 = (function (state_32460){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_32460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e32479){if((e32479 instanceof Object)){
var ex__31832__auto__ = e32479;
var statearr_32480_32497 = state_32460;
(statearr_32480_32497[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32498 = state_32460;
state_32460 = G__32498;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$state_machine__31829__auto__ = function(state_32460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31829__auto____1.call(this,state_32460);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31829__auto____0;
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31829__auto____1;
return cljs$core$async$state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto__))
})();
var state__31918__auto__ = (function (){var statearr_32481 = f__31917__auto__.call(null);
(statearr_32481[(6)] = c__31916__auto__);

return statearr_32481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto__))
);

return c__31916__auto__;
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
var x__28392__auto__ = (((_ == null))?null:_);
var m__28393__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28392__auto__)]);
if(!((m__28393__auto__ == null))){
return m__28393__auto__.call(null,_);
} else {
var m__28393__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28393__auto____$1 == null))){
return m__28393__auto____$1.call(null,_);
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
var x__28392__auto__ = (((m == null))?null:m);
var m__28393__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28392__auto__)]);
if(!((m__28393__auto__ == null))){
return m__28393__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28393__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28393__auto____$1 == null))){
return m__28393__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__28392__auto__ = (((m == null))?null:m);
var m__28393__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28392__auto__)]);
if(!((m__28393__auto__ == null))){
return m__28393__auto__.call(null,m,ch);
} else {
var m__28393__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28393__auto____$1 == null))){
return m__28393__auto____$1.call(null,m,ch);
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
var x__28392__auto__ = (((m == null))?null:m);
var m__28393__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28392__auto__)]);
if(!((m__28393__auto__ == null))){
return m__28393__auto__.call(null,m);
} else {
var m__28393__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28393__auto____$1 == null))){
return m__28393__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async32499 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32499 = (function (ch,cs,meta32500){
this.ch = ch;
this.cs = cs;
this.meta32500 = meta32500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32501,meta32500__$1){
var self__ = this;
var _32501__$1 = this;
return (new cljs.core.async.t_cljs$core$async32499(self__.ch,self__.cs,meta32500__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32501){
var self__ = this;
var _32501__$1 = this;
return self__.meta32500;
});})(cs))
;

cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32499.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32499.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32500","meta32500",1612094325,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32499.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32499";

cljs.core.async.t_cljs$core$async32499.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28334__auto__,writer__28335__auto__,opt__28336__auto__){
return cljs.core._write.call(null,writer__28335__auto__,"cljs.core.async/t_cljs$core$async32499");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32499 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32499(ch__$1,cs__$1,meta32500){
return (new cljs.core.async.t_cljs$core$async32499(ch__$1,cs__$1,meta32500));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32499(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31916__auto___32721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___32721,cs,m,dchan,dctr,done){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___32721,cs,m,dchan,dctr,done){
return (function (state_32636){
var state_val_32637 = (state_32636[(1)]);
if((state_val_32637 === (7))){
var inst_32632 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32638_32722 = state_32636__$1;
(statearr_32638_32722[(2)] = inst_32632);

(statearr_32638_32722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (20))){
var inst_32535 = (state_32636[(7)]);
var inst_32547 = cljs.core.first.call(null,inst_32535);
var inst_32548 = cljs.core.nth.call(null,inst_32547,(0),null);
var inst_32549 = cljs.core.nth.call(null,inst_32547,(1),null);
var state_32636__$1 = (function (){var statearr_32639 = state_32636;
(statearr_32639[(8)] = inst_32548);

return statearr_32639;
})();
if(cljs.core.truth_(inst_32549)){
var statearr_32640_32723 = state_32636__$1;
(statearr_32640_32723[(1)] = (22));

} else {
var statearr_32641_32724 = state_32636__$1;
(statearr_32641_32724[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (27))){
var inst_32579 = (state_32636[(9)]);
var inst_32504 = (state_32636[(10)]);
var inst_32584 = (state_32636[(11)]);
var inst_32577 = (state_32636[(12)]);
var inst_32584__$1 = cljs.core._nth.call(null,inst_32577,inst_32579);
var inst_32585 = cljs.core.async.put_BANG_.call(null,inst_32584__$1,inst_32504,done);
var state_32636__$1 = (function (){var statearr_32642 = state_32636;
(statearr_32642[(11)] = inst_32584__$1);

return statearr_32642;
})();
if(cljs.core.truth_(inst_32585)){
var statearr_32643_32725 = state_32636__$1;
(statearr_32643_32725[(1)] = (30));

} else {
var statearr_32644_32726 = state_32636__$1;
(statearr_32644_32726[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (1))){
var state_32636__$1 = state_32636;
var statearr_32645_32727 = state_32636__$1;
(statearr_32645_32727[(2)] = null);

(statearr_32645_32727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (24))){
var inst_32535 = (state_32636[(7)]);
var inst_32554 = (state_32636[(2)]);
var inst_32555 = cljs.core.next.call(null,inst_32535);
var inst_32513 = inst_32555;
var inst_32514 = null;
var inst_32515 = (0);
var inst_32516 = (0);
var state_32636__$1 = (function (){var statearr_32646 = state_32636;
(statearr_32646[(13)] = inst_32515);

(statearr_32646[(14)] = inst_32514);

(statearr_32646[(15)] = inst_32516);

(statearr_32646[(16)] = inst_32554);

(statearr_32646[(17)] = inst_32513);

return statearr_32646;
})();
var statearr_32647_32728 = state_32636__$1;
(statearr_32647_32728[(2)] = null);

(statearr_32647_32728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (39))){
var state_32636__$1 = state_32636;
var statearr_32651_32729 = state_32636__$1;
(statearr_32651_32729[(2)] = null);

(statearr_32651_32729[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (4))){
var inst_32504 = (state_32636[(10)]);
var inst_32504__$1 = (state_32636[(2)]);
var inst_32505 = (inst_32504__$1 == null);
var state_32636__$1 = (function (){var statearr_32652 = state_32636;
(statearr_32652[(10)] = inst_32504__$1);

return statearr_32652;
})();
if(cljs.core.truth_(inst_32505)){
var statearr_32653_32730 = state_32636__$1;
(statearr_32653_32730[(1)] = (5));

} else {
var statearr_32654_32731 = state_32636__$1;
(statearr_32654_32731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (15))){
var inst_32515 = (state_32636[(13)]);
var inst_32514 = (state_32636[(14)]);
var inst_32516 = (state_32636[(15)]);
var inst_32513 = (state_32636[(17)]);
var inst_32531 = (state_32636[(2)]);
var inst_32532 = (inst_32516 + (1));
var tmp32648 = inst_32515;
var tmp32649 = inst_32514;
var tmp32650 = inst_32513;
var inst_32513__$1 = tmp32650;
var inst_32514__$1 = tmp32649;
var inst_32515__$1 = tmp32648;
var inst_32516__$1 = inst_32532;
var state_32636__$1 = (function (){var statearr_32655 = state_32636;
(statearr_32655[(13)] = inst_32515__$1);

(statearr_32655[(14)] = inst_32514__$1);

(statearr_32655[(15)] = inst_32516__$1);

(statearr_32655[(18)] = inst_32531);

(statearr_32655[(17)] = inst_32513__$1);

return statearr_32655;
})();
var statearr_32656_32732 = state_32636__$1;
(statearr_32656_32732[(2)] = null);

(statearr_32656_32732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (21))){
var inst_32558 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32660_32733 = state_32636__$1;
(statearr_32660_32733[(2)] = inst_32558);

(statearr_32660_32733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (31))){
var inst_32584 = (state_32636[(11)]);
var inst_32588 = done.call(null,null);
var inst_32589 = cljs.core.async.untap_STAR_.call(null,m,inst_32584);
var state_32636__$1 = (function (){var statearr_32661 = state_32636;
(statearr_32661[(19)] = inst_32588);

return statearr_32661;
})();
var statearr_32662_32734 = state_32636__$1;
(statearr_32662_32734[(2)] = inst_32589);

(statearr_32662_32734[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (32))){
var inst_32579 = (state_32636[(9)]);
var inst_32578 = (state_32636[(20)]);
var inst_32577 = (state_32636[(12)]);
var inst_32576 = (state_32636[(21)]);
var inst_32591 = (state_32636[(2)]);
var inst_32592 = (inst_32579 + (1));
var tmp32657 = inst_32578;
var tmp32658 = inst_32577;
var tmp32659 = inst_32576;
var inst_32576__$1 = tmp32659;
var inst_32577__$1 = tmp32658;
var inst_32578__$1 = tmp32657;
var inst_32579__$1 = inst_32592;
var state_32636__$1 = (function (){var statearr_32663 = state_32636;
(statearr_32663[(9)] = inst_32579__$1);

(statearr_32663[(20)] = inst_32578__$1);

(statearr_32663[(12)] = inst_32577__$1);

(statearr_32663[(21)] = inst_32576__$1);

(statearr_32663[(22)] = inst_32591);

return statearr_32663;
})();
var statearr_32664_32735 = state_32636__$1;
(statearr_32664_32735[(2)] = null);

(statearr_32664_32735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (40))){
var inst_32604 = (state_32636[(23)]);
var inst_32608 = done.call(null,null);
var inst_32609 = cljs.core.async.untap_STAR_.call(null,m,inst_32604);
var state_32636__$1 = (function (){var statearr_32665 = state_32636;
(statearr_32665[(24)] = inst_32608);

return statearr_32665;
})();
var statearr_32666_32736 = state_32636__$1;
(statearr_32666_32736[(2)] = inst_32609);

(statearr_32666_32736[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (33))){
var inst_32595 = (state_32636[(25)]);
var inst_32597 = cljs.core.chunked_seq_QMARK_.call(null,inst_32595);
var state_32636__$1 = state_32636;
if(inst_32597){
var statearr_32667_32737 = state_32636__$1;
(statearr_32667_32737[(1)] = (36));

} else {
var statearr_32668_32738 = state_32636__$1;
(statearr_32668_32738[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (13))){
var inst_32525 = (state_32636[(26)]);
var inst_32528 = cljs.core.async.close_BANG_.call(null,inst_32525);
var state_32636__$1 = state_32636;
var statearr_32669_32739 = state_32636__$1;
(statearr_32669_32739[(2)] = inst_32528);

(statearr_32669_32739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (22))){
var inst_32548 = (state_32636[(8)]);
var inst_32551 = cljs.core.async.close_BANG_.call(null,inst_32548);
var state_32636__$1 = state_32636;
var statearr_32670_32740 = state_32636__$1;
(statearr_32670_32740[(2)] = inst_32551);

(statearr_32670_32740[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (36))){
var inst_32595 = (state_32636[(25)]);
var inst_32599 = cljs.core.chunk_first.call(null,inst_32595);
var inst_32600 = cljs.core.chunk_rest.call(null,inst_32595);
var inst_32601 = cljs.core.count.call(null,inst_32599);
var inst_32576 = inst_32600;
var inst_32577 = inst_32599;
var inst_32578 = inst_32601;
var inst_32579 = (0);
var state_32636__$1 = (function (){var statearr_32671 = state_32636;
(statearr_32671[(9)] = inst_32579);

(statearr_32671[(20)] = inst_32578);

(statearr_32671[(12)] = inst_32577);

(statearr_32671[(21)] = inst_32576);

return statearr_32671;
})();
var statearr_32672_32741 = state_32636__$1;
(statearr_32672_32741[(2)] = null);

(statearr_32672_32741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (41))){
var inst_32595 = (state_32636[(25)]);
var inst_32611 = (state_32636[(2)]);
var inst_32612 = cljs.core.next.call(null,inst_32595);
var inst_32576 = inst_32612;
var inst_32577 = null;
var inst_32578 = (0);
var inst_32579 = (0);
var state_32636__$1 = (function (){var statearr_32673 = state_32636;
(statearr_32673[(9)] = inst_32579);

(statearr_32673[(20)] = inst_32578);

(statearr_32673[(12)] = inst_32577);

(statearr_32673[(21)] = inst_32576);

(statearr_32673[(27)] = inst_32611);

return statearr_32673;
})();
var statearr_32674_32742 = state_32636__$1;
(statearr_32674_32742[(2)] = null);

(statearr_32674_32742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (43))){
var state_32636__$1 = state_32636;
var statearr_32675_32743 = state_32636__$1;
(statearr_32675_32743[(2)] = null);

(statearr_32675_32743[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (29))){
var inst_32620 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32676_32744 = state_32636__$1;
(statearr_32676_32744[(2)] = inst_32620);

(statearr_32676_32744[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (44))){
var inst_32629 = (state_32636[(2)]);
var state_32636__$1 = (function (){var statearr_32677 = state_32636;
(statearr_32677[(28)] = inst_32629);

return statearr_32677;
})();
var statearr_32678_32745 = state_32636__$1;
(statearr_32678_32745[(2)] = null);

(statearr_32678_32745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (6))){
var inst_32568 = (state_32636[(29)]);
var inst_32567 = cljs.core.deref.call(null,cs);
var inst_32568__$1 = cljs.core.keys.call(null,inst_32567);
var inst_32569 = cljs.core.count.call(null,inst_32568__$1);
var inst_32570 = cljs.core.reset_BANG_.call(null,dctr,inst_32569);
var inst_32575 = cljs.core.seq.call(null,inst_32568__$1);
var inst_32576 = inst_32575;
var inst_32577 = null;
var inst_32578 = (0);
var inst_32579 = (0);
var state_32636__$1 = (function (){var statearr_32679 = state_32636;
(statearr_32679[(9)] = inst_32579);

(statearr_32679[(20)] = inst_32578);

(statearr_32679[(29)] = inst_32568__$1);

(statearr_32679[(12)] = inst_32577);

(statearr_32679[(21)] = inst_32576);

(statearr_32679[(30)] = inst_32570);

return statearr_32679;
})();
var statearr_32680_32746 = state_32636__$1;
(statearr_32680_32746[(2)] = null);

(statearr_32680_32746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (28))){
var inst_32595 = (state_32636[(25)]);
var inst_32576 = (state_32636[(21)]);
var inst_32595__$1 = cljs.core.seq.call(null,inst_32576);
var state_32636__$1 = (function (){var statearr_32681 = state_32636;
(statearr_32681[(25)] = inst_32595__$1);

return statearr_32681;
})();
if(inst_32595__$1){
var statearr_32682_32747 = state_32636__$1;
(statearr_32682_32747[(1)] = (33));

} else {
var statearr_32683_32748 = state_32636__$1;
(statearr_32683_32748[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (25))){
var inst_32579 = (state_32636[(9)]);
var inst_32578 = (state_32636[(20)]);
var inst_32581 = (inst_32579 < inst_32578);
var inst_32582 = inst_32581;
var state_32636__$1 = state_32636;
if(cljs.core.truth_(inst_32582)){
var statearr_32684_32749 = state_32636__$1;
(statearr_32684_32749[(1)] = (27));

} else {
var statearr_32685_32750 = state_32636__$1;
(statearr_32685_32750[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (34))){
var state_32636__$1 = state_32636;
var statearr_32686_32751 = state_32636__$1;
(statearr_32686_32751[(2)] = null);

(statearr_32686_32751[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (17))){
var state_32636__$1 = state_32636;
var statearr_32687_32752 = state_32636__$1;
(statearr_32687_32752[(2)] = null);

(statearr_32687_32752[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (3))){
var inst_32634 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32636__$1,inst_32634);
} else {
if((state_val_32637 === (12))){
var inst_32563 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32688_32753 = state_32636__$1;
(statearr_32688_32753[(2)] = inst_32563);

(statearr_32688_32753[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (2))){
var state_32636__$1 = state_32636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32636__$1,(4),ch);
} else {
if((state_val_32637 === (23))){
var state_32636__$1 = state_32636;
var statearr_32689_32754 = state_32636__$1;
(statearr_32689_32754[(2)] = null);

(statearr_32689_32754[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (35))){
var inst_32618 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32690_32755 = state_32636__$1;
(statearr_32690_32755[(2)] = inst_32618);

(statearr_32690_32755[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (19))){
var inst_32535 = (state_32636[(7)]);
var inst_32539 = cljs.core.chunk_first.call(null,inst_32535);
var inst_32540 = cljs.core.chunk_rest.call(null,inst_32535);
var inst_32541 = cljs.core.count.call(null,inst_32539);
var inst_32513 = inst_32540;
var inst_32514 = inst_32539;
var inst_32515 = inst_32541;
var inst_32516 = (0);
var state_32636__$1 = (function (){var statearr_32691 = state_32636;
(statearr_32691[(13)] = inst_32515);

(statearr_32691[(14)] = inst_32514);

(statearr_32691[(15)] = inst_32516);

(statearr_32691[(17)] = inst_32513);

return statearr_32691;
})();
var statearr_32692_32756 = state_32636__$1;
(statearr_32692_32756[(2)] = null);

(statearr_32692_32756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (11))){
var inst_32535 = (state_32636[(7)]);
var inst_32513 = (state_32636[(17)]);
var inst_32535__$1 = cljs.core.seq.call(null,inst_32513);
var state_32636__$1 = (function (){var statearr_32693 = state_32636;
(statearr_32693[(7)] = inst_32535__$1);

return statearr_32693;
})();
if(inst_32535__$1){
var statearr_32694_32757 = state_32636__$1;
(statearr_32694_32757[(1)] = (16));

} else {
var statearr_32695_32758 = state_32636__$1;
(statearr_32695_32758[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (9))){
var inst_32565 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32696_32759 = state_32636__$1;
(statearr_32696_32759[(2)] = inst_32565);

(statearr_32696_32759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (5))){
var inst_32511 = cljs.core.deref.call(null,cs);
var inst_32512 = cljs.core.seq.call(null,inst_32511);
var inst_32513 = inst_32512;
var inst_32514 = null;
var inst_32515 = (0);
var inst_32516 = (0);
var state_32636__$1 = (function (){var statearr_32697 = state_32636;
(statearr_32697[(13)] = inst_32515);

(statearr_32697[(14)] = inst_32514);

(statearr_32697[(15)] = inst_32516);

(statearr_32697[(17)] = inst_32513);

return statearr_32697;
})();
var statearr_32698_32760 = state_32636__$1;
(statearr_32698_32760[(2)] = null);

(statearr_32698_32760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (14))){
var state_32636__$1 = state_32636;
var statearr_32699_32761 = state_32636__$1;
(statearr_32699_32761[(2)] = null);

(statearr_32699_32761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (45))){
var inst_32626 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32700_32762 = state_32636__$1;
(statearr_32700_32762[(2)] = inst_32626);

(statearr_32700_32762[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (26))){
var inst_32568 = (state_32636[(29)]);
var inst_32622 = (state_32636[(2)]);
var inst_32623 = cljs.core.seq.call(null,inst_32568);
var state_32636__$1 = (function (){var statearr_32701 = state_32636;
(statearr_32701[(31)] = inst_32622);

return statearr_32701;
})();
if(inst_32623){
var statearr_32702_32763 = state_32636__$1;
(statearr_32702_32763[(1)] = (42));

} else {
var statearr_32703_32764 = state_32636__$1;
(statearr_32703_32764[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (16))){
var inst_32535 = (state_32636[(7)]);
var inst_32537 = cljs.core.chunked_seq_QMARK_.call(null,inst_32535);
var state_32636__$1 = state_32636;
if(inst_32537){
var statearr_32704_32765 = state_32636__$1;
(statearr_32704_32765[(1)] = (19));

} else {
var statearr_32705_32766 = state_32636__$1;
(statearr_32705_32766[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (38))){
var inst_32615 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32706_32767 = state_32636__$1;
(statearr_32706_32767[(2)] = inst_32615);

(statearr_32706_32767[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (30))){
var state_32636__$1 = state_32636;
var statearr_32707_32768 = state_32636__$1;
(statearr_32707_32768[(2)] = null);

(statearr_32707_32768[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (10))){
var inst_32514 = (state_32636[(14)]);
var inst_32516 = (state_32636[(15)]);
var inst_32524 = cljs.core._nth.call(null,inst_32514,inst_32516);
var inst_32525 = cljs.core.nth.call(null,inst_32524,(0),null);
var inst_32526 = cljs.core.nth.call(null,inst_32524,(1),null);
var state_32636__$1 = (function (){var statearr_32708 = state_32636;
(statearr_32708[(26)] = inst_32525);

return statearr_32708;
})();
if(cljs.core.truth_(inst_32526)){
var statearr_32709_32769 = state_32636__$1;
(statearr_32709_32769[(1)] = (13));

} else {
var statearr_32710_32770 = state_32636__$1;
(statearr_32710_32770[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (18))){
var inst_32561 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32711_32771 = state_32636__$1;
(statearr_32711_32771[(2)] = inst_32561);

(statearr_32711_32771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (42))){
var state_32636__$1 = state_32636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32636__$1,(45),dchan);
} else {
if((state_val_32637 === (37))){
var inst_32604 = (state_32636[(23)]);
var inst_32504 = (state_32636[(10)]);
var inst_32595 = (state_32636[(25)]);
var inst_32604__$1 = cljs.core.first.call(null,inst_32595);
var inst_32605 = cljs.core.async.put_BANG_.call(null,inst_32604__$1,inst_32504,done);
var state_32636__$1 = (function (){var statearr_32712 = state_32636;
(statearr_32712[(23)] = inst_32604__$1);

return statearr_32712;
})();
if(cljs.core.truth_(inst_32605)){
var statearr_32713_32772 = state_32636__$1;
(statearr_32713_32772[(1)] = (39));

} else {
var statearr_32714_32773 = state_32636__$1;
(statearr_32714_32773[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (8))){
var inst_32515 = (state_32636[(13)]);
var inst_32516 = (state_32636[(15)]);
var inst_32518 = (inst_32516 < inst_32515);
var inst_32519 = inst_32518;
var state_32636__$1 = state_32636;
if(cljs.core.truth_(inst_32519)){
var statearr_32715_32774 = state_32636__$1;
(statearr_32715_32774[(1)] = (10));

} else {
var statearr_32716_32775 = state_32636__$1;
(statearr_32716_32775[(1)] = (11));

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
});})(c__31916__auto___32721,cs,m,dchan,dctr,done))
;
return ((function (switch__31828__auto__,c__31916__auto___32721,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31829__auto__ = null;
var cljs$core$async$mult_$_state_machine__31829__auto____0 = (function (){
var statearr_32717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32717[(0)] = cljs$core$async$mult_$_state_machine__31829__auto__);

(statearr_32717[(1)] = (1));

return statearr_32717;
});
var cljs$core$async$mult_$_state_machine__31829__auto____1 = (function (state_32636){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_32636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e32718){if((e32718 instanceof Object)){
var ex__31832__auto__ = e32718;
var statearr_32719_32776 = state_32636;
(statearr_32719_32776[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32777 = state_32636;
state_32636 = G__32777;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31829__auto__ = function(state_32636){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31829__auto____1.call(this,state_32636);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31829__auto____0;
cljs$core$async$mult_$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31829__auto____1;
return cljs$core$async$mult_$_state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___32721,cs,m,dchan,dctr,done))
})();
var state__31918__auto__ = (function (){var statearr_32720 = f__31917__auto__.call(null);
(statearr_32720[(6)] = c__31916__auto___32721);

return statearr_32720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___32721,cs,m,dchan,dctr,done))
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
var G__32779 = arguments.length;
switch (G__32779) {
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
var x__28392__auto__ = (((m == null))?null:m);
var m__28393__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28392__auto__)]);
if(!((m__28393__auto__ == null))){
return m__28393__auto__.call(null,m,ch);
} else {
var m__28393__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28393__auto____$1 == null))){
return m__28393__auto____$1.call(null,m,ch);
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
var x__28392__auto__ = (((m == null))?null:m);
var m__28393__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28392__auto__)]);
if(!((m__28393__auto__ == null))){
return m__28393__auto__.call(null,m,ch);
} else {
var m__28393__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28393__auto____$1 == null))){
return m__28393__auto____$1.call(null,m,ch);
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
var x__28392__auto__ = (((m == null))?null:m);
var m__28393__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28392__auto__)]);
if(!((m__28393__auto__ == null))){
return m__28393__auto__.call(null,m);
} else {
var m__28393__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28393__auto____$1 == null))){
return m__28393__auto____$1.call(null,m);
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
var x__28392__auto__ = (((m == null))?null:m);
var m__28393__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28392__auto__)]);
if(!((m__28393__auto__ == null))){
return m__28393__auto__.call(null,m,state_map);
} else {
var m__28393__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28393__auto____$1 == null))){
return m__28393__auto____$1.call(null,m,state_map);
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
var x__28392__auto__ = (((m == null))?null:m);
var m__28393__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28392__auto__)]);
if(!((m__28393__auto__ == null))){
return m__28393__auto__.call(null,m,mode);
} else {
var m__28393__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28393__auto____$1 == null))){
return m__28393__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28885__auto__ = [];
var len__28878__auto___32791 = arguments.length;
var i__28879__auto___32792 = (0);
while(true){
if((i__28879__auto___32792 < len__28878__auto___32791)){
args__28885__auto__.push((arguments[i__28879__auto___32792]));

var G__32793 = (i__28879__auto___32792 + (1));
i__28879__auto___32792 = G__32793;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((3) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28886__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32785){
var map__32786 = p__32785;
var map__32786__$1 = ((((!((map__32786 == null)))?((((map__32786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32786):map__32786);
var opts = map__32786__$1;
var statearr_32788_32794 = state;
(statearr_32788_32794[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32786,map__32786__$1,opts){
return (function (val){
var statearr_32789_32795 = state;
(statearr_32789_32795[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32786,map__32786__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32790_32796 = state;
(statearr_32790_32796[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32781){
var G__32782 = cljs.core.first.call(null,seq32781);
var seq32781__$1 = cljs.core.next.call(null,seq32781);
var G__32783 = cljs.core.first.call(null,seq32781__$1);
var seq32781__$2 = cljs.core.next.call(null,seq32781__$1);
var G__32784 = cljs.core.first.call(null,seq32781__$2);
var seq32781__$3 = cljs.core.next.call(null,seq32781__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32782,G__32783,G__32784,seq32781__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32797 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32797 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32798){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32798 = meta32798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32799,meta32798__$1){
var self__ = this;
var _32799__$1 = this;
return (new cljs.core.async.t_cljs$core$async32797(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32798__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32799){
var self__ = this;
var _32799__$1 = this;
return self__.meta32798;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32797.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32797.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32798","meta32798",-1253703578,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32797.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32797";

cljs.core.async.t_cljs$core$async32797.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28334__auto__,writer__28335__auto__,opt__28336__auto__){
return cljs.core._write.call(null,writer__28335__auto__,"cljs.core.async/t_cljs$core$async32797");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32797 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32797(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32798){
return (new cljs.core.async.t_cljs$core$async32797(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32798));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32797(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31916__auto___32961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___32961,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___32961,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32901){
var state_val_32902 = (state_32901[(1)]);
if((state_val_32902 === (7))){
var inst_32816 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
var statearr_32903_32962 = state_32901__$1;
(statearr_32903_32962[(2)] = inst_32816);

(statearr_32903_32962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (20))){
var inst_32828 = (state_32901[(7)]);
var state_32901__$1 = state_32901;
var statearr_32904_32963 = state_32901__$1;
(statearr_32904_32963[(2)] = inst_32828);

(statearr_32904_32963[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (27))){
var state_32901__$1 = state_32901;
var statearr_32905_32964 = state_32901__$1;
(statearr_32905_32964[(2)] = null);

(statearr_32905_32964[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (1))){
var inst_32803 = (state_32901[(8)]);
var inst_32803__$1 = calc_state.call(null);
var inst_32805 = (inst_32803__$1 == null);
var inst_32806 = cljs.core.not.call(null,inst_32805);
var state_32901__$1 = (function (){var statearr_32906 = state_32901;
(statearr_32906[(8)] = inst_32803__$1);

return statearr_32906;
})();
if(inst_32806){
var statearr_32907_32965 = state_32901__$1;
(statearr_32907_32965[(1)] = (2));

} else {
var statearr_32908_32966 = state_32901__$1;
(statearr_32908_32966[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (24))){
var inst_32861 = (state_32901[(9)]);
var inst_32852 = (state_32901[(10)]);
var inst_32875 = (state_32901[(11)]);
var inst_32875__$1 = inst_32852.call(null,inst_32861);
var state_32901__$1 = (function (){var statearr_32909 = state_32901;
(statearr_32909[(11)] = inst_32875__$1);

return statearr_32909;
})();
if(cljs.core.truth_(inst_32875__$1)){
var statearr_32910_32967 = state_32901__$1;
(statearr_32910_32967[(1)] = (29));

} else {
var statearr_32911_32968 = state_32901__$1;
(statearr_32911_32968[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (4))){
var inst_32819 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
if(cljs.core.truth_(inst_32819)){
var statearr_32912_32969 = state_32901__$1;
(statearr_32912_32969[(1)] = (8));

} else {
var statearr_32913_32970 = state_32901__$1;
(statearr_32913_32970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (15))){
var inst_32846 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
if(cljs.core.truth_(inst_32846)){
var statearr_32914_32971 = state_32901__$1;
(statearr_32914_32971[(1)] = (19));

} else {
var statearr_32915_32972 = state_32901__$1;
(statearr_32915_32972[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (21))){
var inst_32851 = (state_32901[(12)]);
var inst_32851__$1 = (state_32901[(2)]);
var inst_32852 = cljs.core.get.call(null,inst_32851__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32853 = cljs.core.get.call(null,inst_32851__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32854 = cljs.core.get.call(null,inst_32851__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32901__$1 = (function (){var statearr_32916 = state_32901;
(statearr_32916[(12)] = inst_32851__$1);

(statearr_32916[(13)] = inst_32853);

(statearr_32916[(10)] = inst_32852);

return statearr_32916;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32901__$1,(22),inst_32854);
} else {
if((state_val_32902 === (31))){
var inst_32883 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
if(cljs.core.truth_(inst_32883)){
var statearr_32917_32973 = state_32901__$1;
(statearr_32917_32973[(1)] = (32));

} else {
var statearr_32918_32974 = state_32901__$1;
(statearr_32918_32974[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (32))){
var inst_32860 = (state_32901[(14)]);
var state_32901__$1 = state_32901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32901__$1,(35),out,inst_32860);
} else {
if((state_val_32902 === (33))){
var inst_32851 = (state_32901[(12)]);
var inst_32828 = inst_32851;
var state_32901__$1 = (function (){var statearr_32919 = state_32901;
(statearr_32919[(7)] = inst_32828);

return statearr_32919;
})();
var statearr_32920_32975 = state_32901__$1;
(statearr_32920_32975[(2)] = null);

(statearr_32920_32975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (13))){
var inst_32828 = (state_32901[(7)]);
var inst_32835 = inst_32828.cljs$lang$protocol_mask$partition0$;
var inst_32836 = (inst_32835 & (64));
var inst_32837 = inst_32828.cljs$core$ISeq$;
var inst_32838 = (cljs.core.PROTOCOL_SENTINEL === inst_32837);
var inst_32839 = (inst_32836) || (inst_32838);
var state_32901__$1 = state_32901;
if(cljs.core.truth_(inst_32839)){
var statearr_32921_32976 = state_32901__$1;
(statearr_32921_32976[(1)] = (16));

} else {
var statearr_32922_32977 = state_32901__$1;
(statearr_32922_32977[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (22))){
var inst_32861 = (state_32901[(9)]);
var inst_32860 = (state_32901[(14)]);
var inst_32859 = (state_32901[(2)]);
var inst_32860__$1 = cljs.core.nth.call(null,inst_32859,(0),null);
var inst_32861__$1 = cljs.core.nth.call(null,inst_32859,(1),null);
var inst_32862 = (inst_32860__$1 == null);
var inst_32863 = cljs.core._EQ_.call(null,inst_32861__$1,change);
var inst_32864 = (inst_32862) || (inst_32863);
var state_32901__$1 = (function (){var statearr_32923 = state_32901;
(statearr_32923[(9)] = inst_32861__$1);

(statearr_32923[(14)] = inst_32860__$1);

return statearr_32923;
})();
if(cljs.core.truth_(inst_32864)){
var statearr_32924_32978 = state_32901__$1;
(statearr_32924_32978[(1)] = (23));

} else {
var statearr_32925_32979 = state_32901__$1;
(statearr_32925_32979[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (36))){
var inst_32851 = (state_32901[(12)]);
var inst_32828 = inst_32851;
var state_32901__$1 = (function (){var statearr_32926 = state_32901;
(statearr_32926[(7)] = inst_32828);

return statearr_32926;
})();
var statearr_32927_32980 = state_32901__$1;
(statearr_32927_32980[(2)] = null);

(statearr_32927_32980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (29))){
var inst_32875 = (state_32901[(11)]);
var state_32901__$1 = state_32901;
var statearr_32928_32981 = state_32901__$1;
(statearr_32928_32981[(2)] = inst_32875);

(statearr_32928_32981[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (6))){
var state_32901__$1 = state_32901;
var statearr_32929_32982 = state_32901__$1;
(statearr_32929_32982[(2)] = false);

(statearr_32929_32982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (28))){
var inst_32871 = (state_32901[(2)]);
var inst_32872 = calc_state.call(null);
var inst_32828 = inst_32872;
var state_32901__$1 = (function (){var statearr_32930 = state_32901;
(statearr_32930[(15)] = inst_32871);

(statearr_32930[(7)] = inst_32828);

return statearr_32930;
})();
var statearr_32931_32983 = state_32901__$1;
(statearr_32931_32983[(2)] = null);

(statearr_32931_32983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (25))){
var inst_32897 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
var statearr_32932_32984 = state_32901__$1;
(statearr_32932_32984[(2)] = inst_32897);

(statearr_32932_32984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (34))){
var inst_32895 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
var statearr_32933_32985 = state_32901__$1;
(statearr_32933_32985[(2)] = inst_32895);

(statearr_32933_32985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (17))){
var state_32901__$1 = state_32901;
var statearr_32934_32986 = state_32901__$1;
(statearr_32934_32986[(2)] = false);

(statearr_32934_32986[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (3))){
var state_32901__$1 = state_32901;
var statearr_32935_32987 = state_32901__$1;
(statearr_32935_32987[(2)] = false);

(statearr_32935_32987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (12))){
var inst_32899 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32901__$1,inst_32899);
} else {
if((state_val_32902 === (2))){
var inst_32803 = (state_32901[(8)]);
var inst_32808 = inst_32803.cljs$lang$protocol_mask$partition0$;
var inst_32809 = (inst_32808 & (64));
var inst_32810 = inst_32803.cljs$core$ISeq$;
var inst_32811 = (cljs.core.PROTOCOL_SENTINEL === inst_32810);
var inst_32812 = (inst_32809) || (inst_32811);
var state_32901__$1 = state_32901;
if(cljs.core.truth_(inst_32812)){
var statearr_32936_32988 = state_32901__$1;
(statearr_32936_32988[(1)] = (5));

} else {
var statearr_32937_32989 = state_32901__$1;
(statearr_32937_32989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (23))){
var inst_32860 = (state_32901[(14)]);
var inst_32866 = (inst_32860 == null);
var state_32901__$1 = state_32901;
if(cljs.core.truth_(inst_32866)){
var statearr_32938_32990 = state_32901__$1;
(statearr_32938_32990[(1)] = (26));

} else {
var statearr_32939_32991 = state_32901__$1;
(statearr_32939_32991[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (35))){
var inst_32886 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
if(cljs.core.truth_(inst_32886)){
var statearr_32940_32992 = state_32901__$1;
(statearr_32940_32992[(1)] = (36));

} else {
var statearr_32941_32993 = state_32901__$1;
(statearr_32941_32993[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (19))){
var inst_32828 = (state_32901[(7)]);
var inst_32848 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32828);
var state_32901__$1 = state_32901;
var statearr_32942_32994 = state_32901__$1;
(statearr_32942_32994[(2)] = inst_32848);

(statearr_32942_32994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (11))){
var inst_32828 = (state_32901[(7)]);
var inst_32832 = (inst_32828 == null);
var inst_32833 = cljs.core.not.call(null,inst_32832);
var state_32901__$1 = state_32901;
if(inst_32833){
var statearr_32943_32995 = state_32901__$1;
(statearr_32943_32995[(1)] = (13));

} else {
var statearr_32944_32996 = state_32901__$1;
(statearr_32944_32996[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (9))){
var inst_32803 = (state_32901[(8)]);
var state_32901__$1 = state_32901;
var statearr_32945_32997 = state_32901__$1;
(statearr_32945_32997[(2)] = inst_32803);

(statearr_32945_32997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (5))){
var state_32901__$1 = state_32901;
var statearr_32946_32998 = state_32901__$1;
(statearr_32946_32998[(2)] = true);

(statearr_32946_32998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (14))){
var state_32901__$1 = state_32901;
var statearr_32947_32999 = state_32901__$1;
(statearr_32947_32999[(2)] = false);

(statearr_32947_32999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (26))){
var inst_32861 = (state_32901[(9)]);
var inst_32868 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32861);
var state_32901__$1 = state_32901;
var statearr_32948_33000 = state_32901__$1;
(statearr_32948_33000[(2)] = inst_32868);

(statearr_32948_33000[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (16))){
var state_32901__$1 = state_32901;
var statearr_32949_33001 = state_32901__$1;
(statearr_32949_33001[(2)] = true);

(statearr_32949_33001[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (38))){
var inst_32891 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
var statearr_32950_33002 = state_32901__$1;
(statearr_32950_33002[(2)] = inst_32891);

(statearr_32950_33002[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (30))){
var inst_32861 = (state_32901[(9)]);
var inst_32853 = (state_32901[(13)]);
var inst_32852 = (state_32901[(10)]);
var inst_32878 = cljs.core.empty_QMARK_.call(null,inst_32852);
var inst_32879 = inst_32853.call(null,inst_32861);
var inst_32880 = cljs.core.not.call(null,inst_32879);
var inst_32881 = (inst_32878) && (inst_32880);
var state_32901__$1 = state_32901;
var statearr_32951_33003 = state_32901__$1;
(statearr_32951_33003[(2)] = inst_32881);

(statearr_32951_33003[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (10))){
var inst_32803 = (state_32901[(8)]);
var inst_32824 = (state_32901[(2)]);
var inst_32825 = cljs.core.get.call(null,inst_32824,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32826 = cljs.core.get.call(null,inst_32824,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32827 = cljs.core.get.call(null,inst_32824,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32828 = inst_32803;
var state_32901__$1 = (function (){var statearr_32952 = state_32901;
(statearr_32952[(16)] = inst_32826);

(statearr_32952[(17)] = inst_32827);

(statearr_32952[(18)] = inst_32825);

(statearr_32952[(7)] = inst_32828);

return statearr_32952;
})();
var statearr_32953_33004 = state_32901__$1;
(statearr_32953_33004[(2)] = null);

(statearr_32953_33004[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (18))){
var inst_32843 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
var statearr_32954_33005 = state_32901__$1;
(statearr_32954_33005[(2)] = inst_32843);

(statearr_32954_33005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (37))){
var state_32901__$1 = state_32901;
var statearr_32955_33006 = state_32901__$1;
(statearr_32955_33006[(2)] = null);

(statearr_32955_33006[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (8))){
var inst_32803 = (state_32901[(8)]);
var inst_32821 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32803);
var state_32901__$1 = state_32901;
var statearr_32956_33007 = state_32901__$1;
(statearr_32956_33007[(2)] = inst_32821);

(statearr_32956_33007[(1)] = (10));


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
});})(c__31916__auto___32961,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31828__auto__,c__31916__auto___32961,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31829__auto__ = null;
var cljs$core$async$mix_$_state_machine__31829__auto____0 = (function (){
var statearr_32957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32957[(0)] = cljs$core$async$mix_$_state_machine__31829__auto__);

(statearr_32957[(1)] = (1));

return statearr_32957;
});
var cljs$core$async$mix_$_state_machine__31829__auto____1 = (function (state_32901){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_32901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e32958){if((e32958 instanceof Object)){
var ex__31832__auto__ = e32958;
var statearr_32959_33008 = state_32901;
(statearr_32959_33008[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33009 = state_32901;
state_32901 = G__33009;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31829__auto__ = function(state_32901){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31829__auto____1.call(this,state_32901);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31829__auto____0;
cljs$core$async$mix_$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31829__auto____1;
return cljs$core$async$mix_$_state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___32961,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31918__auto__ = (function (){var statearr_32960 = f__31917__auto__.call(null);
(statearr_32960[(6)] = c__31916__auto___32961);

return statearr_32960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___32961,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__28392__auto__ = (((p == null))?null:p);
var m__28393__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28392__auto__)]);
if(!((m__28393__auto__ == null))){
return m__28393__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28393__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28393__auto____$1 == null))){
return m__28393__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__28392__auto__ = (((p == null))?null:p);
var m__28393__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28392__auto__)]);
if(!((m__28393__auto__ == null))){
return m__28393__auto__.call(null,p,v,ch);
} else {
var m__28393__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28393__auto____$1 == null))){
return m__28393__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33011 = arguments.length;
switch (G__33011) {
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
var x__28392__auto__ = (((p == null))?null:p);
var m__28393__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28392__auto__)]);
if(!((m__28393__auto__ == null))){
return m__28393__auto__.call(null,p);
} else {
var m__28393__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28393__auto____$1 == null))){
return m__28393__auto____$1.call(null,p);
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
var x__28392__auto__ = (((p == null))?null:p);
var m__28393__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28392__auto__)]);
if(!((m__28393__auto__ == null))){
return m__28393__auto__.call(null,p,v);
} else {
var m__28393__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28393__auto____$1 == null))){
return m__28393__auto____$1.call(null,p,v);
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
var G__33015 = arguments.length;
switch (G__33015) {
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
var or__27709__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27709__auto__)){
return or__27709__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27709__auto__,mults){
return (function (p1__33013_SHARP_){
if(cljs.core.truth_(p1__33013_SHARP_.call(null,topic))){
return p1__33013_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33013_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27709__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33016 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33017){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33017 = meta33017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33018,meta33017__$1){
var self__ = this;
var _33018__$1 = this;
return (new cljs.core.async.t_cljs$core$async33016(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33017__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33018){
var self__ = this;
var _33018__$1 = this;
return self__.meta33017;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33016.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33016.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33017","meta33017",-347894169,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33016";

cljs.core.async.t_cljs$core$async33016.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28334__auto__,writer__28335__auto__,opt__28336__auto__){
return cljs.core._write.call(null,writer__28335__auto__,"cljs.core.async/t_cljs$core$async33016");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33016 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33016(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33017){
return (new cljs.core.async.t_cljs$core$async33016(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33017));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33016(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31916__auto___33136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___33136,mults,ensure_mult,p){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___33136,mults,ensure_mult,p){
return (function (state_33090){
var state_val_33091 = (state_33090[(1)]);
if((state_val_33091 === (7))){
var inst_33086 = (state_33090[(2)]);
var state_33090__$1 = state_33090;
var statearr_33092_33137 = state_33090__$1;
(statearr_33092_33137[(2)] = inst_33086);

(statearr_33092_33137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (20))){
var state_33090__$1 = state_33090;
var statearr_33093_33138 = state_33090__$1;
(statearr_33093_33138[(2)] = null);

(statearr_33093_33138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (1))){
var state_33090__$1 = state_33090;
var statearr_33094_33139 = state_33090__$1;
(statearr_33094_33139[(2)] = null);

(statearr_33094_33139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (24))){
var inst_33069 = (state_33090[(7)]);
var inst_33078 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33069);
var state_33090__$1 = state_33090;
var statearr_33095_33140 = state_33090__$1;
(statearr_33095_33140[(2)] = inst_33078);

(statearr_33095_33140[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (4))){
var inst_33021 = (state_33090[(8)]);
var inst_33021__$1 = (state_33090[(2)]);
var inst_33022 = (inst_33021__$1 == null);
var state_33090__$1 = (function (){var statearr_33096 = state_33090;
(statearr_33096[(8)] = inst_33021__$1);

return statearr_33096;
})();
if(cljs.core.truth_(inst_33022)){
var statearr_33097_33141 = state_33090__$1;
(statearr_33097_33141[(1)] = (5));

} else {
var statearr_33098_33142 = state_33090__$1;
(statearr_33098_33142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (15))){
var inst_33063 = (state_33090[(2)]);
var state_33090__$1 = state_33090;
var statearr_33099_33143 = state_33090__$1;
(statearr_33099_33143[(2)] = inst_33063);

(statearr_33099_33143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (21))){
var inst_33083 = (state_33090[(2)]);
var state_33090__$1 = (function (){var statearr_33100 = state_33090;
(statearr_33100[(9)] = inst_33083);

return statearr_33100;
})();
var statearr_33101_33144 = state_33090__$1;
(statearr_33101_33144[(2)] = null);

(statearr_33101_33144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (13))){
var inst_33045 = (state_33090[(10)]);
var inst_33047 = cljs.core.chunked_seq_QMARK_.call(null,inst_33045);
var state_33090__$1 = state_33090;
if(inst_33047){
var statearr_33102_33145 = state_33090__$1;
(statearr_33102_33145[(1)] = (16));

} else {
var statearr_33103_33146 = state_33090__$1;
(statearr_33103_33146[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (22))){
var inst_33075 = (state_33090[(2)]);
var state_33090__$1 = state_33090;
if(cljs.core.truth_(inst_33075)){
var statearr_33104_33147 = state_33090__$1;
(statearr_33104_33147[(1)] = (23));

} else {
var statearr_33105_33148 = state_33090__$1;
(statearr_33105_33148[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (6))){
var inst_33071 = (state_33090[(11)]);
var inst_33021 = (state_33090[(8)]);
var inst_33069 = (state_33090[(7)]);
var inst_33069__$1 = topic_fn.call(null,inst_33021);
var inst_33070 = cljs.core.deref.call(null,mults);
var inst_33071__$1 = cljs.core.get.call(null,inst_33070,inst_33069__$1);
var state_33090__$1 = (function (){var statearr_33106 = state_33090;
(statearr_33106[(11)] = inst_33071__$1);

(statearr_33106[(7)] = inst_33069__$1);

return statearr_33106;
})();
if(cljs.core.truth_(inst_33071__$1)){
var statearr_33107_33149 = state_33090__$1;
(statearr_33107_33149[(1)] = (19));

} else {
var statearr_33108_33150 = state_33090__$1;
(statearr_33108_33150[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (25))){
var inst_33080 = (state_33090[(2)]);
var state_33090__$1 = state_33090;
var statearr_33109_33151 = state_33090__$1;
(statearr_33109_33151[(2)] = inst_33080);

(statearr_33109_33151[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (17))){
var inst_33045 = (state_33090[(10)]);
var inst_33054 = cljs.core.first.call(null,inst_33045);
var inst_33055 = cljs.core.async.muxch_STAR_.call(null,inst_33054);
var inst_33056 = cljs.core.async.close_BANG_.call(null,inst_33055);
var inst_33057 = cljs.core.next.call(null,inst_33045);
var inst_33031 = inst_33057;
var inst_33032 = null;
var inst_33033 = (0);
var inst_33034 = (0);
var state_33090__$1 = (function (){var statearr_33110 = state_33090;
(statearr_33110[(12)] = inst_33032);

(statearr_33110[(13)] = inst_33031);

(statearr_33110[(14)] = inst_33033);

(statearr_33110[(15)] = inst_33056);

(statearr_33110[(16)] = inst_33034);

return statearr_33110;
})();
var statearr_33111_33152 = state_33090__$1;
(statearr_33111_33152[(2)] = null);

(statearr_33111_33152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (3))){
var inst_33088 = (state_33090[(2)]);
var state_33090__$1 = state_33090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33090__$1,inst_33088);
} else {
if((state_val_33091 === (12))){
var inst_33065 = (state_33090[(2)]);
var state_33090__$1 = state_33090;
var statearr_33112_33153 = state_33090__$1;
(statearr_33112_33153[(2)] = inst_33065);

(statearr_33112_33153[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (2))){
var state_33090__$1 = state_33090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33090__$1,(4),ch);
} else {
if((state_val_33091 === (23))){
var state_33090__$1 = state_33090;
var statearr_33113_33154 = state_33090__$1;
(statearr_33113_33154[(2)] = null);

(statearr_33113_33154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (19))){
var inst_33071 = (state_33090[(11)]);
var inst_33021 = (state_33090[(8)]);
var inst_33073 = cljs.core.async.muxch_STAR_.call(null,inst_33071);
var state_33090__$1 = state_33090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33090__$1,(22),inst_33073,inst_33021);
} else {
if((state_val_33091 === (11))){
var inst_33031 = (state_33090[(13)]);
var inst_33045 = (state_33090[(10)]);
var inst_33045__$1 = cljs.core.seq.call(null,inst_33031);
var state_33090__$1 = (function (){var statearr_33114 = state_33090;
(statearr_33114[(10)] = inst_33045__$1);

return statearr_33114;
})();
if(inst_33045__$1){
var statearr_33115_33155 = state_33090__$1;
(statearr_33115_33155[(1)] = (13));

} else {
var statearr_33116_33156 = state_33090__$1;
(statearr_33116_33156[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (9))){
var inst_33067 = (state_33090[(2)]);
var state_33090__$1 = state_33090;
var statearr_33117_33157 = state_33090__$1;
(statearr_33117_33157[(2)] = inst_33067);

(statearr_33117_33157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (5))){
var inst_33028 = cljs.core.deref.call(null,mults);
var inst_33029 = cljs.core.vals.call(null,inst_33028);
var inst_33030 = cljs.core.seq.call(null,inst_33029);
var inst_33031 = inst_33030;
var inst_33032 = null;
var inst_33033 = (0);
var inst_33034 = (0);
var state_33090__$1 = (function (){var statearr_33118 = state_33090;
(statearr_33118[(12)] = inst_33032);

(statearr_33118[(13)] = inst_33031);

(statearr_33118[(14)] = inst_33033);

(statearr_33118[(16)] = inst_33034);

return statearr_33118;
})();
var statearr_33119_33158 = state_33090__$1;
(statearr_33119_33158[(2)] = null);

(statearr_33119_33158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (14))){
var state_33090__$1 = state_33090;
var statearr_33123_33159 = state_33090__$1;
(statearr_33123_33159[(2)] = null);

(statearr_33123_33159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (16))){
var inst_33045 = (state_33090[(10)]);
var inst_33049 = cljs.core.chunk_first.call(null,inst_33045);
var inst_33050 = cljs.core.chunk_rest.call(null,inst_33045);
var inst_33051 = cljs.core.count.call(null,inst_33049);
var inst_33031 = inst_33050;
var inst_33032 = inst_33049;
var inst_33033 = inst_33051;
var inst_33034 = (0);
var state_33090__$1 = (function (){var statearr_33124 = state_33090;
(statearr_33124[(12)] = inst_33032);

(statearr_33124[(13)] = inst_33031);

(statearr_33124[(14)] = inst_33033);

(statearr_33124[(16)] = inst_33034);

return statearr_33124;
})();
var statearr_33125_33160 = state_33090__$1;
(statearr_33125_33160[(2)] = null);

(statearr_33125_33160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (10))){
var inst_33032 = (state_33090[(12)]);
var inst_33031 = (state_33090[(13)]);
var inst_33033 = (state_33090[(14)]);
var inst_33034 = (state_33090[(16)]);
var inst_33039 = cljs.core._nth.call(null,inst_33032,inst_33034);
var inst_33040 = cljs.core.async.muxch_STAR_.call(null,inst_33039);
var inst_33041 = cljs.core.async.close_BANG_.call(null,inst_33040);
var inst_33042 = (inst_33034 + (1));
var tmp33120 = inst_33032;
var tmp33121 = inst_33031;
var tmp33122 = inst_33033;
var inst_33031__$1 = tmp33121;
var inst_33032__$1 = tmp33120;
var inst_33033__$1 = tmp33122;
var inst_33034__$1 = inst_33042;
var state_33090__$1 = (function (){var statearr_33126 = state_33090;
(statearr_33126[(12)] = inst_33032__$1);

(statearr_33126[(13)] = inst_33031__$1);

(statearr_33126[(14)] = inst_33033__$1);

(statearr_33126[(17)] = inst_33041);

(statearr_33126[(16)] = inst_33034__$1);

return statearr_33126;
})();
var statearr_33127_33161 = state_33090__$1;
(statearr_33127_33161[(2)] = null);

(statearr_33127_33161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (18))){
var inst_33060 = (state_33090[(2)]);
var state_33090__$1 = state_33090;
var statearr_33128_33162 = state_33090__$1;
(statearr_33128_33162[(2)] = inst_33060);

(statearr_33128_33162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33091 === (8))){
var inst_33033 = (state_33090[(14)]);
var inst_33034 = (state_33090[(16)]);
var inst_33036 = (inst_33034 < inst_33033);
var inst_33037 = inst_33036;
var state_33090__$1 = state_33090;
if(cljs.core.truth_(inst_33037)){
var statearr_33129_33163 = state_33090__$1;
(statearr_33129_33163[(1)] = (10));

} else {
var statearr_33130_33164 = state_33090__$1;
(statearr_33130_33164[(1)] = (11));

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
});})(c__31916__auto___33136,mults,ensure_mult,p))
;
return ((function (switch__31828__auto__,c__31916__auto___33136,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31829__auto__ = null;
var cljs$core$async$state_machine__31829__auto____0 = (function (){
var statearr_33131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33131[(0)] = cljs$core$async$state_machine__31829__auto__);

(statearr_33131[(1)] = (1));

return statearr_33131;
});
var cljs$core$async$state_machine__31829__auto____1 = (function (state_33090){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_33090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e33132){if((e33132 instanceof Object)){
var ex__31832__auto__ = e33132;
var statearr_33133_33165 = state_33090;
(statearr_33133_33165[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33166 = state_33090;
state_33090 = G__33166;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$state_machine__31829__auto__ = function(state_33090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31829__auto____1.call(this,state_33090);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31829__auto____0;
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31829__auto____1;
return cljs$core$async$state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___33136,mults,ensure_mult,p))
})();
var state__31918__auto__ = (function (){var statearr_33134 = f__31917__auto__.call(null);
(statearr_33134[(6)] = c__31916__auto___33136);

return statearr_33134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___33136,mults,ensure_mult,p))
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
var G__33168 = arguments.length;
switch (G__33168) {
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
var G__33171 = arguments.length;
switch (G__33171) {
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
var G__33174 = arguments.length;
switch (G__33174) {
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
var c__31916__auto___33241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___33241,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___33241,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33213){
var state_val_33214 = (state_33213[(1)]);
if((state_val_33214 === (7))){
var state_33213__$1 = state_33213;
var statearr_33215_33242 = state_33213__$1;
(statearr_33215_33242[(2)] = null);

(statearr_33215_33242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (1))){
var state_33213__$1 = state_33213;
var statearr_33216_33243 = state_33213__$1;
(statearr_33216_33243[(2)] = null);

(statearr_33216_33243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (4))){
var inst_33177 = (state_33213[(7)]);
var inst_33179 = (inst_33177 < cnt);
var state_33213__$1 = state_33213;
if(cljs.core.truth_(inst_33179)){
var statearr_33217_33244 = state_33213__$1;
(statearr_33217_33244[(1)] = (6));

} else {
var statearr_33218_33245 = state_33213__$1;
(statearr_33218_33245[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (15))){
var inst_33209 = (state_33213[(2)]);
var state_33213__$1 = state_33213;
var statearr_33219_33246 = state_33213__$1;
(statearr_33219_33246[(2)] = inst_33209);

(statearr_33219_33246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (13))){
var inst_33202 = cljs.core.async.close_BANG_.call(null,out);
var state_33213__$1 = state_33213;
var statearr_33220_33247 = state_33213__$1;
(statearr_33220_33247[(2)] = inst_33202);

(statearr_33220_33247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (6))){
var state_33213__$1 = state_33213;
var statearr_33221_33248 = state_33213__$1;
(statearr_33221_33248[(2)] = null);

(statearr_33221_33248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (3))){
var inst_33211 = (state_33213[(2)]);
var state_33213__$1 = state_33213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33213__$1,inst_33211);
} else {
if((state_val_33214 === (12))){
var inst_33199 = (state_33213[(8)]);
var inst_33199__$1 = (state_33213[(2)]);
var inst_33200 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33199__$1);
var state_33213__$1 = (function (){var statearr_33222 = state_33213;
(statearr_33222[(8)] = inst_33199__$1);

return statearr_33222;
})();
if(cljs.core.truth_(inst_33200)){
var statearr_33223_33249 = state_33213__$1;
(statearr_33223_33249[(1)] = (13));

} else {
var statearr_33224_33250 = state_33213__$1;
(statearr_33224_33250[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (2))){
var inst_33176 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33177 = (0);
var state_33213__$1 = (function (){var statearr_33225 = state_33213;
(statearr_33225[(7)] = inst_33177);

(statearr_33225[(9)] = inst_33176);

return statearr_33225;
})();
var statearr_33226_33251 = state_33213__$1;
(statearr_33226_33251[(2)] = null);

(statearr_33226_33251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (11))){
var inst_33177 = (state_33213[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33213,(10),Object,null,(9));
var inst_33186 = chs__$1.call(null,inst_33177);
var inst_33187 = done.call(null,inst_33177);
var inst_33188 = cljs.core.async.take_BANG_.call(null,inst_33186,inst_33187);
var state_33213__$1 = state_33213;
var statearr_33227_33252 = state_33213__$1;
(statearr_33227_33252[(2)] = inst_33188);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33213__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (9))){
var inst_33177 = (state_33213[(7)]);
var inst_33190 = (state_33213[(2)]);
var inst_33191 = (inst_33177 + (1));
var inst_33177__$1 = inst_33191;
var state_33213__$1 = (function (){var statearr_33228 = state_33213;
(statearr_33228[(7)] = inst_33177__$1);

(statearr_33228[(10)] = inst_33190);

return statearr_33228;
})();
var statearr_33229_33253 = state_33213__$1;
(statearr_33229_33253[(2)] = null);

(statearr_33229_33253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (5))){
var inst_33197 = (state_33213[(2)]);
var state_33213__$1 = (function (){var statearr_33230 = state_33213;
(statearr_33230[(11)] = inst_33197);

return statearr_33230;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33213__$1,(12),dchan);
} else {
if((state_val_33214 === (14))){
var inst_33199 = (state_33213[(8)]);
var inst_33204 = cljs.core.apply.call(null,f,inst_33199);
var state_33213__$1 = state_33213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33213__$1,(16),out,inst_33204);
} else {
if((state_val_33214 === (16))){
var inst_33206 = (state_33213[(2)]);
var state_33213__$1 = (function (){var statearr_33231 = state_33213;
(statearr_33231[(12)] = inst_33206);

return statearr_33231;
})();
var statearr_33232_33254 = state_33213__$1;
(statearr_33232_33254[(2)] = null);

(statearr_33232_33254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (10))){
var inst_33181 = (state_33213[(2)]);
var inst_33182 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33213__$1 = (function (){var statearr_33233 = state_33213;
(statearr_33233[(13)] = inst_33181);

return statearr_33233;
})();
var statearr_33234_33255 = state_33213__$1;
(statearr_33234_33255[(2)] = inst_33182);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33213__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (8))){
var inst_33195 = (state_33213[(2)]);
var state_33213__$1 = state_33213;
var statearr_33235_33256 = state_33213__$1;
(statearr_33235_33256[(2)] = inst_33195);

(statearr_33235_33256[(1)] = (5));


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
});})(c__31916__auto___33241,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31828__auto__,c__31916__auto___33241,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31829__auto__ = null;
var cljs$core$async$state_machine__31829__auto____0 = (function (){
var statearr_33236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33236[(0)] = cljs$core$async$state_machine__31829__auto__);

(statearr_33236[(1)] = (1));

return statearr_33236;
});
var cljs$core$async$state_machine__31829__auto____1 = (function (state_33213){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_33213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e33237){if((e33237 instanceof Object)){
var ex__31832__auto__ = e33237;
var statearr_33238_33257 = state_33213;
(statearr_33238_33257[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33258 = state_33213;
state_33213 = G__33258;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$state_machine__31829__auto__ = function(state_33213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31829__auto____1.call(this,state_33213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31829__auto____0;
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31829__auto____1;
return cljs$core$async$state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___33241,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31918__auto__ = (function (){var statearr_33239 = f__31917__auto__.call(null);
(statearr_33239[(6)] = c__31916__auto___33241);

return statearr_33239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___33241,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33261 = arguments.length;
switch (G__33261) {
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
var c__31916__auto___33315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___33315,out){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___33315,out){
return (function (state_33293){
var state_val_33294 = (state_33293[(1)]);
if((state_val_33294 === (7))){
var inst_33273 = (state_33293[(7)]);
var inst_33272 = (state_33293[(8)]);
var inst_33272__$1 = (state_33293[(2)]);
var inst_33273__$1 = cljs.core.nth.call(null,inst_33272__$1,(0),null);
var inst_33274 = cljs.core.nth.call(null,inst_33272__$1,(1),null);
var inst_33275 = (inst_33273__$1 == null);
var state_33293__$1 = (function (){var statearr_33295 = state_33293;
(statearr_33295[(9)] = inst_33274);

(statearr_33295[(7)] = inst_33273__$1);

(statearr_33295[(8)] = inst_33272__$1);

return statearr_33295;
})();
if(cljs.core.truth_(inst_33275)){
var statearr_33296_33316 = state_33293__$1;
(statearr_33296_33316[(1)] = (8));

} else {
var statearr_33297_33317 = state_33293__$1;
(statearr_33297_33317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (1))){
var inst_33262 = cljs.core.vec.call(null,chs);
var inst_33263 = inst_33262;
var state_33293__$1 = (function (){var statearr_33298 = state_33293;
(statearr_33298[(10)] = inst_33263);

return statearr_33298;
})();
var statearr_33299_33318 = state_33293__$1;
(statearr_33299_33318[(2)] = null);

(statearr_33299_33318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (4))){
var inst_33263 = (state_33293[(10)]);
var state_33293__$1 = state_33293;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33293__$1,(7),inst_33263);
} else {
if((state_val_33294 === (6))){
var inst_33289 = (state_33293[(2)]);
var state_33293__$1 = state_33293;
var statearr_33300_33319 = state_33293__$1;
(statearr_33300_33319[(2)] = inst_33289);

(statearr_33300_33319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (3))){
var inst_33291 = (state_33293[(2)]);
var state_33293__$1 = state_33293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33293__$1,inst_33291);
} else {
if((state_val_33294 === (2))){
var inst_33263 = (state_33293[(10)]);
var inst_33265 = cljs.core.count.call(null,inst_33263);
var inst_33266 = (inst_33265 > (0));
var state_33293__$1 = state_33293;
if(cljs.core.truth_(inst_33266)){
var statearr_33302_33320 = state_33293__$1;
(statearr_33302_33320[(1)] = (4));

} else {
var statearr_33303_33321 = state_33293__$1;
(statearr_33303_33321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (11))){
var inst_33263 = (state_33293[(10)]);
var inst_33282 = (state_33293[(2)]);
var tmp33301 = inst_33263;
var inst_33263__$1 = tmp33301;
var state_33293__$1 = (function (){var statearr_33304 = state_33293;
(statearr_33304[(10)] = inst_33263__$1);

(statearr_33304[(11)] = inst_33282);

return statearr_33304;
})();
var statearr_33305_33322 = state_33293__$1;
(statearr_33305_33322[(2)] = null);

(statearr_33305_33322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (9))){
var inst_33273 = (state_33293[(7)]);
var state_33293__$1 = state_33293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33293__$1,(11),out,inst_33273);
} else {
if((state_val_33294 === (5))){
var inst_33287 = cljs.core.async.close_BANG_.call(null,out);
var state_33293__$1 = state_33293;
var statearr_33306_33323 = state_33293__$1;
(statearr_33306_33323[(2)] = inst_33287);

(statearr_33306_33323[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (10))){
var inst_33285 = (state_33293[(2)]);
var state_33293__$1 = state_33293;
var statearr_33307_33324 = state_33293__$1;
(statearr_33307_33324[(2)] = inst_33285);

(statearr_33307_33324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33294 === (8))){
var inst_33263 = (state_33293[(10)]);
var inst_33274 = (state_33293[(9)]);
var inst_33273 = (state_33293[(7)]);
var inst_33272 = (state_33293[(8)]);
var inst_33277 = (function (){var cs = inst_33263;
var vec__33268 = inst_33272;
var v = inst_33273;
var c = inst_33274;
return ((function (cs,vec__33268,v,c,inst_33263,inst_33274,inst_33273,inst_33272,state_val_33294,c__31916__auto___33315,out){
return (function (p1__33259_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33259_SHARP_);
});
;})(cs,vec__33268,v,c,inst_33263,inst_33274,inst_33273,inst_33272,state_val_33294,c__31916__auto___33315,out))
})();
var inst_33278 = cljs.core.filterv.call(null,inst_33277,inst_33263);
var inst_33263__$1 = inst_33278;
var state_33293__$1 = (function (){var statearr_33308 = state_33293;
(statearr_33308[(10)] = inst_33263__$1);

return statearr_33308;
})();
var statearr_33309_33325 = state_33293__$1;
(statearr_33309_33325[(2)] = null);

(statearr_33309_33325[(1)] = (2));


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
});})(c__31916__auto___33315,out))
;
return ((function (switch__31828__auto__,c__31916__auto___33315,out){
return (function() {
var cljs$core$async$state_machine__31829__auto__ = null;
var cljs$core$async$state_machine__31829__auto____0 = (function (){
var statearr_33310 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33310[(0)] = cljs$core$async$state_machine__31829__auto__);

(statearr_33310[(1)] = (1));

return statearr_33310;
});
var cljs$core$async$state_machine__31829__auto____1 = (function (state_33293){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_33293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e33311){if((e33311 instanceof Object)){
var ex__31832__auto__ = e33311;
var statearr_33312_33326 = state_33293;
(statearr_33312_33326[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33327 = state_33293;
state_33293 = G__33327;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$state_machine__31829__auto__ = function(state_33293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31829__auto____1.call(this,state_33293);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31829__auto____0;
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31829__auto____1;
return cljs$core$async$state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___33315,out))
})();
var state__31918__auto__ = (function (){var statearr_33313 = f__31917__auto__.call(null);
(statearr_33313[(6)] = c__31916__auto___33315);

return statearr_33313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___33315,out))
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
var G__33329 = arguments.length;
switch (G__33329) {
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
var c__31916__auto___33374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___33374,out){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___33374,out){
return (function (state_33353){
var state_val_33354 = (state_33353[(1)]);
if((state_val_33354 === (7))){
var inst_33335 = (state_33353[(7)]);
var inst_33335__$1 = (state_33353[(2)]);
var inst_33336 = (inst_33335__$1 == null);
var inst_33337 = cljs.core.not.call(null,inst_33336);
var state_33353__$1 = (function (){var statearr_33355 = state_33353;
(statearr_33355[(7)] = inst_33335__$1);

return statearr_33355;
})();
if(inst_33337){
var statearr_33356_33375 = state_33353__$1;
(statearr_33356_33375[(1)] = (8));

} else {
var statearr_33357_33376 = state_33353__$1;
(statearr_33357_33376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33354 === (1))){
var inst_33330 = (0);
var state_33353__$1 = (function (){var statearr_33358 = state_33353;
(statearr_33358[(8)] = inst_33330);

return statearr_33358;
})();
var statearr_33359_33377 = state_33353__$1;
(statearr_33359_33377[(2)] = null);

(statearr_33359_33377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33354 === (4))){
var state_33353__$1 = state_33353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33353__$1,(7),ch);
} else {
if((state_val_33354 === (6))){
var inst_33348 = (state_33353[(2)]);
var state_33353__$1 = state_33353;
var statearr_33360_33378 = state_33353__$1;
(statearr_33360_33378[(2)] = inst_33348);

(statearr_33360_33378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33354 === (3))){
var inst_33350 = (state_33353[(2)]);
var inst_33351 = cljs.core.async.close_BANG_.call(null,out);
var state_33353__$1 = (function (){var statearr_33361 = state_33353;
(statearr_33361[(9)] = inst_33350);

return statearr_33361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33353__$1,inst_33351);
} else {
if((state_val_33354 === (2))){
var inst_33330 = (state_33353[(8)]);
var inst_33332 = (inst_33330 < n);
var state_33353__$1 = state_33353;
if(cljs.core.truth_(inst_33332)){
var statearr_33362_33379 = state_33353__$1;
(statearr_33362_33379[(1)] = (4));

} else {
var statearr_33363_33380 = state_33353__$1;
(statearr_33363_33380[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33354 === (11))){
var inst_33330 = (state_33353[(8)]);
var inst_33340 = (state_33353[(2)]);
var inst_33341 = (inst_33330 + (1));
var inst_33330__$1 = inst_33341;
var state_33353__$1 = (function (){var statearr_33364 = state_33353;
(statearr_33364[(8)] = inst_33330__$1);

(statearr_33364[(10)] = inst_33340);

return statearr_33364;
})();
var statearr_33365_33381 = state_33353__$1;
(statearr_33365_33381[(2)] = null);

(statearr_33365_33381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33354 === (9))){
var state_33353__$1 = state_33353;
var statearr_33366_33382 = state_33353__$1;
(statearr_33366_33382[(2)] = null);

(statearr_33366_33382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33354 === (5))){
var state_33353__$1 = state_33353;
var statearr_33367_33383 = state_33353__$1;
(statearr_33367_33383[(2)] = null);

(statearr_33367_33383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33354 === (10))){
var inst_33345 = (state_33353[(2)]);
var state_33353__$1 = state_33353;
var statearr_33368_33384 = state_33353__$1;
(statearr_33368_33384[(2)] = inst_33345);

(statearr_33368_33384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33354 === (8))){
var inst_33335 = (state_33353[(7)]);
var state_33353__$1 = state_33353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33353__$1,(11),out,inst_33335);
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
});})(c__31916__auto___33374,out))
;
return ((function (switch__31828__auto__,c__31916__auto___33374,out){
return (function() {
var cljs$core$async$state_machine__31829__auto__ = null;
var cljs$core$async$state_machine__31829__auto____0 = (function (){
var statearr_33369 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33369[(0)] = cljs$core$async$state_machine__31829__auto__);

(statearr_33369[(1)] = (1));

return statearr_33369;
});
var cljs$core$async$state_machine__31829__auto____1 = (function (state_33353){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_33353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e33370){if((e33370 instanceof Object)){
var ex__31832__auto__ = e33370;
var statearr_33371_33385 = state_33353;
(statearr_33371_33385[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33386 = state_33353;
state_33353 = G__33386;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$state_machine__31829__auto__ = function(state_33353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31829__auto____1.call(this,state_33353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31829__auto____0;
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31829__auto____1;
return cljs$core$async$state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___33374,out))
})();
var state__31918__auto__ = (function (){var statearr_33372 = f__31917__auto__.call(null);
(statearr_33372[(6)] = c__31916__auto___33374);

return statearr_33372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___33374,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33388 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33388 = (function (f,ch,meta33389){
this.f = f;
this.ch = ch;
this.meta33389 = meta33389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33390,meta33389__$1){
var self__ = this;
var _33390__$1 = this;
return (new cljs.core.async.t_cljs$core$async33388(self__.f,self__.ch,meta33389__$1));
});

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33390){
var self__ = this;
var _33390__$1 = this;
return self__.meta33389;
});

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33391 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33391 = (function (f,ch,meta33389,_,fn1,meta33392){
this.f = f;
this.ch = ch;
this.meta33389 = meta33389;
this._ = _;
this.fn1 = fn1;
this.meta33392 = meta33392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33393,meta33392__$1){
var self__ = this;
var _33393__$1 = this;
return (new cljs.core.async.t_cljs$core$async33391(self__.f,self__.ch,self__.meta33389,self__._,self__.fn1,meta33392__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33391.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33393){
var self__ = this;
var _33393__$1 = this;
return self__.meta33392;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33391.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33391.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33391.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33391.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33387_SHARP_){
return f1.call(null,(((p1__33387_SHARP_ == null))?null:self__.f.call(null,p1__33387_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33391.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33389","meta33389",-878680316,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33388","cljs.core.async/t_cljs$core$async33388",-2104116594,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33392","meta33392",1498539134,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33391";

cljs.core.async.t_cljs$core$async33391.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28334__auto__,writer__28335__auto__,opt__28336__auto__){
return cljs.core._write.call(null,writer__28335__auto__,"cljs.core.async/t_cljs$core$async33391");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33391 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33391(f__$1,ch__$1,meta33389__$1,___$2,fn1__$1,meta33392){
return (new cljs.core.async.t_cljs$core$async33391(f__$1,ch__$1,meta33389__$1,___$2,fn1__$1,meta33392));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33391(self__.f,self__.ch,self__.meta33389,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27697__auto__ = ret;
if(cljs.core.truth_(and__27697__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27697__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33388.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33389","meta33389",-878680316,null)], null);
});

cljs.core.async.t_cljs$core$async33388.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33388";

cljs.core.async.t_cljs$core$async33388.cljs$lang$ctorPrWriter = (function (this__28334__auto__,writer__28335__auto__,opt__28336__auto__){
return cljs.core._write.call(null,writer__28335__auto__,"cljs.core.async/t_cljs$core$async33388");
});

cljs.core.async.__GT_t_cljs$core$async33388 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33388(f__$1,ch__$1,meta33389){
return (new cljs.core.async.t_cljs$core$async33388(f__$1,ch__$1,meta33389));
});

}

return (new cljs.core.async.t_cljs$core$async33388(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33394 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33394 = (function (f,ch,meta33395){
this.f = f;
this.ch = ch;
this.meta33395 = meta33395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33396,meta33395__$1){
var self__ = this;
var _33396__$1 = this;
return (new cljs.core.async.t_cljs$core$async33394(self__.f,self__.ch,meta33395__$1));
});

cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33396){
var self__ = this;
var _33396__$1 = this;
return self__.meta33395;
});

cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33394.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33395","meta33395",846664343,null)], null);
});

cljs.core.async.t_cljs$core$async33394.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33394";

cljs.core.async.t_cljs$core$async33394.cljs$lang$ctorPrWriter = (function (this__28334__auto__,writer__28335__auto__,opt__28336__auto__){
return cljs.core._write.call(null,writer__28335__auto__,"cljs.core.async/t_cljs$core$async33394");
});

cljs.core.async.__GT_t_cljs$core$async33394 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33394(f__$1,ch__$1,meta33395){
return (new cljs.core.async.t_cljs$core$async33394(f__$1,ch__$1,meta33395));
});

}

return (new cljs.core.async.t_cljs$core$async33394(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33397 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33397 = (function (p,ch,meta33398){
this.p = p;
this.ch = ch;
this.meta33398 = meta33398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33399,meta33398__$1){
var self__ = this;
var _33399__$1 = this;
return (new cljs.core.async.t_cljs$core$async33397(self__.p,self__.ch,meta33398__$1));
});

cljs.core.async.t_cljs$core$async33397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33399){
var self__ = this;
var _33399__$1 = this;
return self__.meta33398;
});

cljs.core.async.t_cljs$core$async33397.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33397.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33397.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33397.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33397.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33397.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33397.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33397.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33398","meta33398",-1065938564,null)], null);
});

cljs.core.async.t_cljs$core$async33397.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33397";

cljs.core.async.t_cljs$core$async33397.cljs$lang$ctorPrWriter = (function (this__28334__auto__,writer__28335__auto__,opt__28336__auto__){
return cljs.core._write.call(null,writer__28335__auto__,"cljs.core.async/t_cljs$core$async33397");
});

cljs.core.async.__GT_t_cljs$core$async33397 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33397(p__$1,ch__$1,meta33398){
return (new cljs.core.async.t_cljs$core$async33397(p__$1,ch__$1,meta33398));
});

}

return (new cljs.core.async.t_cljs$core$async33397(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33401 = arguments.length;
switch (G__33401) {
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
var c__31916__auto___33441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___33441,out){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___33441,out){
return (function (state_33422){
var state_val_33423 = (state_33422[(1)]);
if((state_val_33423 === (7))){
var inst_33418 = (state_33422[(2)]);
var state_33422__$1 = state_33422;
var statearr_33424_33442 = state_33422__$1;
(statearr_33424_33442[(2)] = inst_33418);

(statearr_33424_33442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (1))){
var state_33422__$1 = state_33422;
var statearr_33425_33443 = state_33422__$1;
(statearr_33425_33443[(2)] = null);

(statearr_33425_33443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (4))){
var inst_33404 = (state_33422[(7)]);
var inst_33404__$1 = (state_33422[(2)]);
var inst_33405 = (inst_33404__$1 == null);
var state_33422__$1 = (function (){var statearr_33426 = state_33422;
(statearr_33426[(7)] = inst_33404__$1);

return statearr_33426;
})();
if(cljs.core.truth_(inst_33405)){
var statearr_33427_33444 = state_33422__$1;
(statearr_33427_33444[(1)] = (5));

} else {
var statearr_33428_33445 = state_33422__$1;
(statearr_33428_33445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (6))){
var inst_33404 = (state_33422[(7)]);
var inst_33409 = p.call(null,inst_33404);
var state_33422__$1 = state_33422;
if(cljs.core.truth_(inst_33409)){
var statearr_33429_33446 = state_33422__$1;
(statearr_33429_33446[(1)] = (8));

} else {
var statearr_33430_33447 = state_33422__$1;
(statearr_33430_33447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (3))){
var inst_33420 = (state_33422[(2)]);
var state_33422__$1 = state_33422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33422__$1,inst_33420);
} else {
if((state_val_33423 === (2))){
var state_33422__$1 = state_33422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33422__$1,(4),ch);
} else {
if((state_val_33423 === (11))){
var inst_33412 = (state_33422[(2)]);
var state_33422__$1 = state_33422;
var statearr_33431_33448 = state_33422__$1;
(statearr_33431_33448[(2)] = inst_33412);

(statearr_33431_33448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (9))){
var state_33422__$1 = state_33422;
var statearr_33432_33449 = state_33422__$1;
(statearr_33432_33449[(2)] = null);

(statearr_33432_33449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (5))){
var inst_33407 = cljs.core.async.close_BANG_.call(null,out);
var state_33422__$1 = state_33422;
var statearr_33433_33450 = state_33422__$1;
(statearr_33433_33450[(2)] = inst_33407);

(statearr_33433_33450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (10))){
var inst_33415 = (state_33422[(2)]);
var state_33422__$1 = (function (){var statearr_33434 = state_33422;
(statearr_33434[(8)] = inst_33415);

return statearr_33434;
})();
var statearr_33435_33451 = state_33422__$1;
(statearr_33435_33451[(2)] = null);

(statearr_33435_33451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33423 === (8))){
var inst_33404 = (state_33422[(7)]);
var state_33422__$1 = state_33422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33422__$1,(11),out,inst_33404);
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
});})(c__31916__auto___33441,out))
;
return ((function (switch__31828__auto__,c__31916__auto___33441,out){
return (function() {
var cljs$core$async$state_machine__31829__auto__ = null;
var cljs$core$async$state_machine__31829__auto____0 = (function (){
var statearr_33436 = [null,null,null,null,null,null,null,null,null];
(statearr_33436[(0)] = cljs$core$async$state_machine__31829__auto__);

(statearr_33436[(1)] = (1));

return statearr_33436;
});
var cljs$core$async$state_machine__31829__auto____1 = (function (state_33422){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_33422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e33437){if((e33437 instanceof Object)){
var ex__31832__auto__ = e33437;
var statearr_33438_33452 = state_33422;
(statearr_33438_33452[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33453 = state_33422;
state_33422 = G__33453;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$state_machine__31829__auto__ = function(state_33422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31829__auto____1.call(this,state_33422);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31829__auto____0;
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31829__auto____1;
return cljs$core$async$state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___33441,out))
})();
var state__31918__auto__ = (function (){var statearr_33439 = f__31917__auto__.call(null);
(statearr_33439[(6)] = c__31916__auto___33441);

return statearr_33439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___33441,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33455 = arguments.length;
switch (G__33455) {
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
var c__31916__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto__){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto__){
return (function (state_33518){
var state_val_33519 = (state_33518[(1)]);
if((state_val_33519 === (7))){
var inst_33514 = (state_33518[(2)]);
var state_33518__$1 = state_33518;
var statearr_33520_33558 = state_33518__$1;
(statearr_33520_33558[(2)] = inst_33514);

(statearr_33520_33558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (20))){
var inst_33484 = (state_33518[(7)]);
var inst_33495 = (state_33518[(2)]);
var inst_33496 = cljs.core.next.call(null,inst_33484);
var inst_33470 = inst_33496;
var inst_33471 = null;
var inst_33472 = (0);
var inst_33473 = (0);
var state_33518__$1 = (function (){var statearr_33521 = state_33518;
(statearr_33521[(8)] = inst_33472);

(statearr_33521[(9)] = inst_33495);

(statearr_33521[(10)] = inst_33471);

(statearr_33521[(11)] = inst_33470);

(statearr_33521[(12)] = inst_33473);

return statearr_33521;
})();
var statearr_33522_33559 = state_33518__$1;
(statearr_33522_33559[(2)] = null);

(statearr_33522_33559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (1))){
var state_33518__$1 = state_33518;
var statearr_33523_33560 = state_33518__$1;
(statearr_33523_33560[(2)] = null);

(statearr_33523_33560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (4))){
var inst_33459 = (state_33518[(13)]);
var inst_33459__$1 = (state_33518[(2)]);
var inst_33460 = (inst_33459__$1 == null);
var state_33518__$1 = (function (){var statearr_33524 = state_33518;
(statearr_33524[(13)] = inst_33459__$1);

return statearr_33524;
})();
if(cljs.core.truth_(inst_33460)){
var statearr_33525_33561 = state_33518__$1;
(statearr_33525_33561[(1)] = (5));

} else {
var statearr_33526_33562 = state_33518__$1;
(statearr_33526_33562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (15))){
var state_33518__$1 = state_33518;
var statearr_33530_33563 = state_33518__$1;
(statearr_33530_33563[(2)] = null);

(statearr_33530_33563[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (21))){
var state_33518__$1 = state_33518;
var statearr_33531_33564 = state_33518__$1;
(statearr_33531_33564[(2)] = null);

(statearr_33531_33564[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (13))){
var inst_33472 = (state_33518[(8)]);
var inst_33471 = (state_33518[(10)]);
var inst_33470 = (state_33518[(11)]);
var inst_33473 = (state_33518[(12)]);
var inst_33480 = (state_33518[(2)]);
var inst_33481 = (inst_33473 + (1));
var tmp33527 = inst_33472;
var tmp33528 = inst_33471;
var tmp33529 = inst_33470;
var inst_33470__$1 = tmp33529;
var inst_33471__$1 = tmp33528;
var inst_33472__$1 = tmp33527;
var inst_33473__$1 = inst_33481;
var state_33518__$1 = (function (){var statearr_33532 = state_33518;
(statearr_33532[(14)] = inst_33480);

(statearr_33532[(8)] = inst_33472__$1);

(statearr_33532[(10)] = inst_33471__$1);

(statearr_33532[(11)] = inst_33470__$1);

(statearr_33532[(12)] = inst_33473__$1);

return statearr_33532;
})();
var statearr_33533_33565 = state_33518__$1;
(statearr_33533_33565[(2)] = null);

(statearr_33533_33565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (22))){
var state_33518__$1 = state_33518;
var statearr_33534_33566 = state_33518__$1;
(statearr_33534_33566[(2)] = null);

(statearr_33534_33566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (6))){
var inst_33459 = (state_33518[(13)]);
var inst_33468 = f.call(null,inst_33459);
var inst_33469 = cljs.core.seq.call(null,inst_33468);
var inst_33470 = inst_33469;
var inst_33471 = null;
var inst_33472 = (0);
var inst_33473 = (0);
var state_33518__$1 = (function (){var statearr_33535 = state_33518;
(statearr_33535[(8)] = inst_33472);

(statearr_33535[(10)] = inst_33471);

(statearr_33535[(11)] = inst_33470);

(statearr_33535[(12)] = inst_33473);

return statearr_33535;
})();
var statearr_33536_33567 = state_33518__$1;
(statearr_33536_33567[(2)] = null);

(statearr_33536_33567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (17))){
var inst_33484 = (state_33518[(7)]);
var inst_33488 = cljs.core.chunk_first.call(null,inst_33484);
var inst_33489 = cljs.core.chunk_rest.call(null,inst_33484);
var inst_33490 = cljs.core.count.call(null,inst_33488);
var inst_33470 = inst_33489;
var inst_33471 = inst_33488;
var inst_33472 = inst_33490;
var inst_33473 = (0);
var state_33518__$1 = (function (){var statearr_33537 = state_33518;
(statearr_33537[(8)] = inst_33472);

(statearr_33537[(10)] = inst_33471);

(statearr_33537[(11)] = inst_33470);

(statearr_33537[(12)] = inst_33473);

return statearr_33537;
})();
var statearr_33538_33568 = state_33518__$1;
(statearr_33538_33568[(2)] = null);

(statearr_33538_33568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (3))){
var inst_33516 = (state_33518[(2)]);
var state_33518__$1 = state_33518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33518__$1,inst_33516);
} else {
if((state_val_33519 === (12))){
var inst_33504 = (state_33518[(2)]);
var state_33518__$1 = state_33518;
var statearr_33539_33569 = state_33518__$1;
(statearr_33539_33569[(2)] = inst_33504);

(statearr_33539_33569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (2))){
var state_33518__$1 = state_33518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33518__$1,(4),in$);
} else {
if((state_val_33519 === (23))){
var inst_33512 = (state_33518[(2)]);
var state_33518__$1 = state_33518;
var statearr_33540_33570 = state_33518__$1;
(statearr_33540_33570[(2)] = inst_33512);

(statearr_33540_33570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (19))){
var inst_33499 = (state_33518[(2)]);
var state_33518__$1 = state_33518;
var statearr_33541_33571 = state_33518__$1;
(statearr_33541_33571[(2)] = inst_33499);

(statearr_33541_33571[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (11))){
var inst_33470 = (state_33518[(11)]);
var inst_33484 = (state_33518[(7)]);
var inst_33484__$1 = cljs.core.seq.call(null,inst_33470);
var state_33518__$1 = (function (){var statearr_33542 = state_33518;
(statearr_33542[(7)] = inst_33484__$1);

return statearr_33542;
})();
if(inst_33484__$1){
var statearr_33543_33572 = state_33518__$1;
(statearr_33543_33572[(1)] = (14));

} else {
var statearr_33544_33573 = state_33518__$1;
(statearr_33544_33573[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (9))){
var inst_33506 = (state_33518[(2)]);
var inst_33507 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33518__$1 = (function (){var statearr_33545 = state_33518;
(statearr_33545[(15)] = inst_33506);

return statearr_33545;
})();
if(cljs.core.truth_(inst_33507)){
var statearr_33546_33574 = state_33518__$1;
(statearr_33546_33574[(1)] = (21));

} else {
var statearr_33547_33575 = state_33518__$1;
(statearr_33547_33575[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (5))){
var inst_33462 = cljs.core.async.close_BANG_.call(null,out);
var state_33518__$1 = state_33518;
var statearr_33548_33576 = state_33518__$1;
(statearr_33548_33576[(2)] = inst_33462);

(statearr_33548_33576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (14))){
var inst_33484 = (state_33518[(7)]);
var inst_33486 = cljs.core.chunked_seq_QMARK_.call(null,inst_33484);
var state_33518__$1 = state_33518;
if(inst_33486){
var statearr_33549_33577 = state_33518__$1;
(statearr_33549_33577[(1)] = (17));

} else {
var statearr_33550_33578 = state_33518__$1;
(statearr_33550_33578[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (16))){
var inst_33502 = (state_33518[(2)]);
var state_33518__$1 = state_33518;
var statearr_33551_33579 = state_33518__$1;
(statearr_33551_33579[(2)] = inst_33502);

(statearr_33551_33579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33519 === (10))){
var inst_33471 = (state_33518[(10)]);
var inst_33473 = (state_33518[(12)]);
var inst_33478 = cljs.core._nth.call(null,inst_33471,inst_33473);
var state_33518__$1 = state_33518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33518__$1,(13),out,inst_33478);
} else {
if((state_val_33519 === (18))){
var inst_33484 = (state_33518[(7)]);
var inst_33493 = cljs.core.first.call(null,inst_33484);
var state_33518__$1 = state_33518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33518__$1,(20),out,inst_33493);
} else {
if((state_val_33519 === (8))){
var inst_33472 = (state_33518[(8)]);
var inst_33473 = (state_33518[(12)]);
var inst_33475 = (inst_33473 < inst_33472);
var inst_33476 = inst_33475;
var state_33518__$1 = state_33518;
if(cljs.core.truth_(inst_33476)){
var statearr_33552_33580 = state_33518__$1;
(statearr_33552_33580[(1)] = (10));

} else {
var statearr_33553_33581 = state_33518__$1;
(statearr_33553_33581[(1)] = (11));

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
});})(c__31916__auto__))
;
return ((function (switch__31828__auto__,c__31916__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31829__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31829__auto____0 = (function (){
var statearr_33554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33554[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31829__auto__);

(statearr_33554[(1)] = (1));

return statearr_33554;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31829__auto____1 = (function (state_33518){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_33518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e33555){if((e33555 instanceof Object)){
var ex__31832__auto__ = e33555;
var statearr_33556_33582 = state_33518;
(statearr_33556_33582[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33583 = state_33518;
state_33518 = G__33583;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31829__auto__ = function(state_33518){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31829__auto____1.call(this,state_33518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31829__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31829__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto__))
})();
var state__31918__auto__ = (function (){var statearr_33557 = f__31917__auto__.call(null);
(statearr_33557[(6)] = c__31916__auto__);

return statearr_33557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto__))
);

return c__31916__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33585 = arguments.length;
switch (G__33585) {
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
var G__33588 = arguments.length;
switch (G__33588) {
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
var G__33591 = arguments.length;
switch (G__33591) {
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
var c__31916__auto___33638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___33638,out){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___33638,out){
return (function (state_33615){
var state_val_33616 = (state_33615[(1)]);
if((state_val_33616 === (7))){
var inst_33610 = (state_33615[(2)]);
var state_33615__$1 = state_33615;
var statearr_33617_33639 = state_33615__$1;
(statearr_33617_33639[(2)] = inst_33610);

(statearr_33617_33639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (1))){
var inst_33592 = null;
var state_33615__$1 = (function (){var statearr_33618 = state_33615;
(statearr_33618[(7)] = inst_33592);

return statearr_33618;
})();
var statearr_33619_33640 = state_33615__$1;
(statearr_33619_33640[(2)] = null);

(statearr_33619_33640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (4))){
var inst_33595 = (state_33615[(8)]);
var inst_33595__$1 = (state_33615[(2)]);
var inst_33596 = (inst_33595__$1 == null);
var inst_33597 = cljs.core.not.call(null,inst_33596);
var state_33615__$1 = (function (){var statearr_33620 = state_33615;
(statearr_33620[(8)] = inst_33595__$1);

return statearr_33620;
})();
if(inst_33597){
var statearr_33621_33641 = state_33615__$1;
(statearr_33621_33641[(1)] = (5));

} else {
var statearr_33622_33642 = state_33615__$1;
(statearr_33622_33642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (6))){
var state_33615__$1 = state_33615;
var statearr_33623_33643 = state_33615__$1;
(statearr_33623_33643[(2)] = null);

(statearr_33623_33643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (3))){
var inst_33612 = (state_33615[(2)]);
var inst_33613 = cljs.core.async.close_BANG_.call(null,out);
var state_33615__$1 = (function (){var statearr_33624 = state_33615;
(statearr_33624[(9)] = inst_33612);

return statearr_33624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33615__$1,inst_33613);
} else {
if((state_val_33616 === (2))){
var state_33615__$1 = state_33615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33615__$1,(4),ch);
} else {
if((state_val_33616 === (11))){
var inst_33595 = (state_33615[(8)]);
var inst_33604 = (state_33615[(2)]);
var inst_33592 = inst_33595;
var state_33615__$1 = (function (){var statearr_33625 = state_33615;
(statearr_33625[(7)] = inst_33592);

(statearr_33625[(10)] = inst_33604);

return statearr_33625;
})();
var statearr_33626_33644 = state_33615__$1;
(statearr_33626_33644[(2)] = null);

(statearr_33626_33644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (9))){
var inst_33595 = (state_33615[(8)]);
var state_33615__$1 = state_33615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33615__$1,(11),out,inst_33595);
} else {
if((state_val_33616 === (5))){
var inst_33595 = (state_33615[(8)]);
var inst_33592 = (state_33615[(7)]);
var inst_33599 = cljs.core._EQ_.call(null,inst_33595,inst_33592);
var state_33615__$1 = state_33615;
if(inst_33599){
var statearr_33628_33645 = state_33615__$1;
(statearr_33628_33645[(1)] = (8));

} else {
var statearr_33629_33646 = state_33615__$1;
(statearr_33629_33646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (10))){
var inst_33607 = (state_33615[(2)]);
var state_33615__$1 = state_33615;
var statearr_33630_33647 = state_33615__$1;
(statearr_33630_33647[(2)] = inst_33607);

(statearr_33630_33647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33616 === (8))){
var inst_33592 = (state_33615[(7)]);
var tmp33627 = inst_33592;
var inst_33592__$1 = tmp33627;
var state_33615__$1 = (function (){var statearr_33631 = state_33615;
(statearr_33631[(7)] = inst_33592__$1);

return statearr_33631;
})();
var statearr_33632_33648 = state_33615__$1;
(statearr_33632_33648[(2)] = null);

(statearr_33632_33648[(1)] = (2));


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
});})(c__31916__auto___33638,out))
;
return ((function (switch__31828__auto__,c__31916__auto___33638,out){
return (function() {
var cljs$core$async$state_machine__31829__auto__ = null;
var cljs$core$async$state_machine__31829__auto____0 = (function (){
var statearr_33633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33633[(0)] = cljs$core$async$state_machine__31829__auto__);

(statearr_33633[(1)] = (1));

return statearr_33633;
});
var cljs$core$async$state_machine__31829__auto____1 = (function (state_33615){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_33615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e33634){if((e33634 instanceof Object)){
var ex__31832__auto__ = e33634;
var statearr_33635_33649 = state_33615;
(statearr_33635_33649[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33650 = state_33615;
state_33615 = G__33650;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$state_machine__31829__auto__ = function(state_33615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31829__auto____1.call(this,state_33615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31829__auto____0;
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31829__auto____1;
return cljs$core$async$state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___33638,out))
})();
var state__31918__auto__ = (function (){var statearr_33636 = f__31917__auto__.call(null);
(statearr_33636[(6)] = c__31916__auto___33638);

return statearr_33636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___33638,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33652 = arguments.length;
switch (G__33652) {
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
var c__31916__auto___33718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___33718,out){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___33718,out){
return (function (state_33690){
var state_val_33691 = (state_33690[(1)]);
if((state_val_33691 === (7))){
var inst_33686 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33692_33719 = state_33690__$1;
(statearr_33692_33719[(2)] = inst_33686);

(statearr_33692_33719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (1))){
var inst_33653 = (new Array(n));
var inst_33654 = inst_33653;
var inst_33655 = (0);
var state_33690__$1 = (function (){var statearr_33693 = state_33690;
(statearr_33693[(7)] = inst_33655);

(statearr_33693[(8)] = inst_33654);

return statearr_33693;
})();
var statearr_33694_33720 = state_33690__$1;
(statearr_33694_33720[(2)] = null);

(statearr_33694_33720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (4))){
var inst_33658 = (state_33690[(9)]);
var inst_33658__$1 = (state_33690[(2)]);
var inst_33659 = (inst_33658__$1 == null);
var inst_33660 = cljs.core.not.call(null,inst_33659);
var state_33690__$1 = (function (){var statearr_33695 = state_33690;
(statearr_33695[(9)] = inst_33658__$1);

return statearr_33695;
})();
if(inst_33660){
var statearr_33696_33721 = state_33690__$1;
(statearr_33696_33721[(1)] = (5));

} else {
var statearr_33697_33722 = state_33690__$1;
(statearr_33697_33722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (15))){
var inst_33680 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33698_33723 = state_33690__$1;
(statearr_33698_33723[(2)] = inst_33680);

(statearr_33698_33723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (13))){
var state_33690__$1 = state_33690;
var statearr_33699_33724 = state_33690__$1;
(statearr_33699_33724[(2)] = null);

(statearr_33699_33724[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (6))){
var inst_33655 = (state_33690[(7)]);
var inst_33676 = (inst_33655 > (0));
var state_33690__$1 = state_33690;
if(cljs.core.truth_(inst_33676)){
var statearr_33700_33725 = state_33690__$1;
(statearr_33700_33725[(1)] = (12));

} else {
var statearr_33701_33726 = state_33690__$1;
(statearr_33701_33726[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (3))){
var inst_33688 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33690__$1,inst_33688);
} else {
if((state_val_33691 === (12))){
var inst_33654 = (state_33690[(8)]);
var inst_33678 = cljs.core.vec.call(null,inst_33654);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33690__$1,(15),out,inst_33678);
} else {
if((state_val_33691 === (2))){
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33690__$1,(4),ch);
} else {
if((state_val_33691 === (11))){
var inst_33670 = (state_33690[(2)]);
var inst_33671 = (new Array(n));
var inst_33654 = inst_33671;
var inst_33655 = (0);
var state_33690__$1 = (function (){var statearr_33702 = state_33690;
(statearr_33702[(7)] = inst_33655);

(statearr_33702[(10)] = inst_33670);

(statearr_33702[(8)] = inst_33654);

return statearr_33702;
})();
var statearr_33703_33727 = state_33690__$1;
(statearr_33703_33727[(2)] = null);

(statearr_33703_33727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (9))){
var inst_33654 = (state_33690[(8)]);
var inst_33668 = cljs.core.vec.call(null,inst_33654);
var state_33690__$1 = state_33690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33690__$1,(11),out,inst_33668);
} else {
if((state_val_33691 === (5))){
var inst_33663 = (state_33690[(11)]);
var inst_33655 = (state_33690[(7)]);
var inst_33658 = (state_33690[(9)]);
var inst_33654 = (state_33690[(8)]);
var inst_33662 = (inst_33654[inst_33655] = inst_33658);
var inst_33663__$1 = (inst_33655 + (1));
var inst_33664 = (inst_33663__$1 < n);
var state_33690__$1 = (function (){var statearr_33704 = state_33690;
(statearr_33704[(11)] = inst_33663__$1);

(statearr_33704[(12)] = inst_33662);

return statearr_33704;
})();
if(cljs.core.truth_(inst_33664)){
var statearr_33705_33728 = state_33690__$1;
(statearr_33705_33728[(1)] = (8));

} else {
var statearr_33706_33729 = state_33690__$1;
(statearr_33706_33729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (14))){
var inst_33683 = (state_33690[(2)]);
var inst_33684 = cljs.core.async.close_BANG_.call(null,out);
var state_33690__$1 = (function (){var statearr_33708 = state_33690;
(statearr_33708[(13)] = inst_33683);

return statearr_33708;
})();
var statearr_33709_33730 = state_33690__$1;
(statearr_33709_33730[(2)] = inst_33684);

(statearr_33709_33730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (10))){
var inst_33674 = (state_33690[(2)]);
var state_33690__$1 = state_33690;
var statearr_33710_33731 = state_33690__$1;
(statearr_33710_33731[(2)] = inst_33674);

(statearr_33710_33731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33691 === (8))){
var inst_33663 = (state_33690[(11)]);
var inst_33654 = (state_33690[(8)]);
var tmp33707 = inst_33654;
var inst_33654__$1 = tmp33707;
var inst_33655 = inst_33663;
var state_33690__$1 = (function (){var statearr_33711 = state_33690;
(statearr_33711[(7)] = inst_33655);

(statearr_33711[(8)] = inst_33654__$1);

return statearr_33711;
})();
var statearr_33712_33732 = state_33690__$1;
(statearr_33712_33732[(2)] = null);

(statearr_33712_33732[(1)] = (2));


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
});})(c__31916__auto___33718,out))
;
return ((function (switch__31828__auto__,c__31916__auto___33718,out){
return (function() {
var cljs$core$async$state_machine__31829__auto__ = null;
var cljs$core$async$state_machine__31829__auto____0 = (function (){
var statearr_33713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33713[(0)] = cljs$core$async$state_machine__31829__auto__);

(statearr_33713[(1)] = (1));

return statearr_33713;
});
var cljs$core$async$state_machine__31829__auto____1 = (function (state_33690){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_33690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e33714){if((e33714 instanceof Object)){
var ex__31832__auto__ = e33714;
var statearr_33715_33733 = state_33690;
(statearr_33715_33733[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33734 = state_33690;
state_33690 = G__33734;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$state_machine__31829__auto__ = function(state_33690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31829__auto____1.call(this,state_33690);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31829__auto____0;
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31829__auto____1;
return cljs$core$async$state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___33718,out))
})();
var state__31918__auto__ = (function (){var statearr_33716 = f__31917__auto__.call(null);
(statearr_33716[(6)] = c__31916__auto___33718);

return statearr_33716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___33718,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33736 = arguments.length;
switch (G__33736) {
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
var c__31916__auto___33806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31916__auto___33806,out){
return (function (){
var f__31917__auto__ = (function (){var switch__31828__auto__ = ((function (c__31916__auto___33806,out){
return (function (state_33778){
var state_val_33779 = (state_33778[(1)]);
if((state_val_33779 === (7))){
var inst_33774 = (state_33778[(2)]);
var state_33778__$1 = state_33778;
var statearr_33780_33807 = state_33778__$1;
(statearr_33780_33807[(2)] = inst_33774);

(statearr_33780_33807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (1))){
var inst_33737 = [];
var inst_33738 = inst_33737;
var inst_33739 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33778__$1 = (function (){var statearr_33781 = state_33778;
(statearr_33781[(7)] = inst_33738);

(statearr_33781[(8)] = inst_33739);

return statearr_33781;
})();
var statearr_33782_33808 = state_33778__$1;
(statearr_33782_33808[(2)] = null);

(statearr_33782_33808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (4))){
var inst_33742 = (state_33778[(9)]);
var inst_33742__$1 = (state_33778[(2)]);
var inst_33743 = (inst_33742__$1 == null);
var inst_33744 = cljs.core.not.call(null,inst_33743);
var state_33778__$1 = (function (){var statearr_33783 = state_33778;
(statearr_33783[(9)] = inst_33742__$1);

return statearr_33783;
})();
if(inst_33744){
var statearr_33784_33809 = state_33778__$1;
(statearr_33784_33809[(1)] = (5));

} else {
var statearr_33785_33810 = state_33778__$1;
(statearr_33785_33810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (15))){
var inst_33768 = (state_33778[(2)]);
var state_33778__$1 = state_33778;
var statearr_33786_33811 = state_33778__$1;
(statearr_33786_33811[(2)] = inst_33768);

(statearr_33786_33811[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (13))){
var state_33778__$1 = state_33778;
var statearr_33787_33812 = state_33778__$1;
(statearr_33787_33812[(2)] = null);

(statearr_33787_33812[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (6))){
var inst_33738 = (state_33778[(7)]);
var inst_33763 = inst_33738.length;
var inst_33764 = (inst_33763 > (0));
var state_33778__$1 = state_33778;
if(cljs.core.truth_(inst_33764)){
var statearr_33788_33813 = state_33778__$1;
(statearr_33788_33813[(1)] = (12));

} else {
var statearr_33789_33814 = state_33778__$1;
(statearr_33789_33814[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (3))){
var inst_33776 = (state_33778[(2)]);
var state_33778__$1 = state_33778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33778__$1,inst_33776);
} else {
if((state_val_33779 === (12))){
var inst_33738 = (state_33778[(7)]);
var inst_33766 = cljs.core.vec.call(null,inst_33738);
var state_33778__$1 = state_33778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33778__$1,(15),out,inst_33766);
} else {
if((state_val_33779 === (2))){
var state_33778__$1 = state_33778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33778__$1,(4),ch);
} else {
if((state_val_33779 === (11))){
var inst_33742 = (state_33778[(9)]);
var inst_33746 = (state_33778[(10)]);
var inst_33756 = (state_33778[(2)]);
var inst_33757 = [];
var inst_33758 = inst_33757.push(inst_33742);
var inst_33738 = inst_33757;
var inst_33739 = inst_33746;
var state_33778__$1 = (function (){var statearr_33790 = state_33778;
(statearr_33790[(7)] = inst_33738);

(statearr_33790[(11)] = inst_33756);

(statearr_33790[(12)] = inst_33758);

(statearr_33790[(8)] = inst_33739);

return statearr_33790;
})();
var statearr_33791_33815 = state_33778__$1;
(statearr_33791_33815[(2)] = null);

(statearr_33791_33815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (9))){
var inst_33738 = (state_33778[(7)]);
var inst_33754 = cljs.core.vec.call(null,inst_33738);
var state_33778__$1 = state_33778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33778__$1,(11),out,inst_33754);
} else {
if((state_val_33779 === (5))){
var inst_33742 = (state_33778[(9)]);
var inst_33746 = (state_33778[(10)]);
var inst_33739 = (state_33778[(8)]);
var inst_33746__$1 = f.call(null,inst_33742);
var inst_33747 = cljs.core._EQ_.call(null,inst_33746__$1,inst_33739);
var inst_33748 = cljs.core.keyword_identical_QMARK_.call(null,inst_33739,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33749 = (inst_33747) || (inst_33748);
var state_33778__$1 = (function (){var statearr_33792 = state_33778;
(statearr_33792[(10)] = inst_33746__$1);

return statearr_33792;
})();
if(cljs.core.truth_(inst_33749)){
var statearr_33793_33816 = state_33778__$1;
(statearr_33793_33816[(1)] = (8));

} else {
var statearr_33794_33817 = state_33778__$1;
(statearr_33794_33817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (14))){
var inst_33771 = (state_33778[(2)]);
var inst_33772 = cljs.core.async.close_BANG_.call(null,out);
var state_33778__$1 = (function (){var statearr_33796 = state_33778;
(statearr_33796[(13)] = inst_33771);

return statearr_33796;
})();
var statearr_33797_33818 = state_33778__$1;
(statearr_33797_33818[(2)] = inst_33772);

(statearr_33797_33818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (10))){
var inst_33761 = (state_33778[(2)]);
var state_33778__$1 = state_33778;
var statearr_33798_33819 = state_33778__$1;
(statearr_33798_33819[(2)] = inst_33761);

(statearr_33798_33819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33779 === (8))){
var inst_33738 = (state_33778[(7)]);
var inst_33742 = (state_33778[(9)]);
var inst_33746 = (state_33778[(10)]);
var inst_33751 = inst_33738.push(inst_33742);
var tmp33795 = inst_33738;
var inst_33738__$1 = tmp33795;
var inst_33739 = inst_33746;
var state_33778__$1 = (function (){var statearr_33799 = state_33778;
(statearr_33799[(7)] = inst_33738__$1);

(statearr_33799[(14)] = inst_33751);

(statearr_33799[(8)] = inst_33739);

return statearr_33799;
})();
var statearr_33800_33820 = state_33778__$1;
(statearr_33800_33820[(2)] = null);

(statearr_33800_33820[(1)] = (2));


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
});})(c__31916__auto___33806,out))
;
return ((function (switch__31828__auto__,c__31916__auto___33806,out){
return (function() {
var cljs$core$async$state_machine__31829__auto__ = null;
var cljs$core$async$state_machine__31829__auto____0 = (function (){
var statearr_33801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33801[(0)] = cljs$core$async$state_machine__31829__auto__);

(statearr_33801[(1)] = (1));

return statearr_33801;
});
var cljs$core$async$state_machine__31829__auto____1 = (function (state_33778){
while(true){
var ret_value__31830__auto__ = (function (){try{while(true){
var result__31831__auto__ = switch__31828__auto__.call(null,state_33778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31831__auto__;
}
break;
}
}catch (e33802){if((e33802 instanceof Object)){
var ex__31832__auto__ = e33802;
var statearr_33803_33821 = state_33778;
(statearr_33803_33821[(5)] = ex__31832__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31830__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33822 = state_33778;
state_33778 = G__33822;
continue;
} else {
return ret_value__31830__auto__;
}
break;
}
});
cljs$core$async$state_machine__31829__auto__ = function(state_33778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31829__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31829__auto____1.call(this,state_33778);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31829__auto____0;
cljs$core$async$state_machine__31829__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31829__auto____1;
return cljs$core$async$state_machine__31829__auto__;
})()
;})(switch__31828__auto__,c__31916__auto___33806,out))
})();
var state__31918__auto__ = (function (){var statearr_33804 = f__31917__auto__.call(null);
(statearr_33804[(6)] = c__31916__auto___33806);

return statearr_33804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31918__auto__);
});})(c__31916__auto___33806,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1511212147728
