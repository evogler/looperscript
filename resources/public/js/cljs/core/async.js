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
var G__33658 = arguments.length;
switch (G__33658) {
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
if(typeof cljs.core.async.t_cljs$core$async33659 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33659 = (function (f,blockable,meta33660){
this.f = f;
this.blockable = blockable;
this.meta33660 = meta33660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33661,meta33660__$1){
var self__ = this;
var _33661__$1 = this;
return (new cljs.core.async.t_cljs$core$async33659(self__.f,self__.blockable,meta33660__$1));
});

cljs.core.async.t_cljs$core$async33659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33661){
var self__ = this;
var _33661__$1 = this;
return self__.meta33660;
});

cljs.core.async.t_cljs$core$async33659.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33660","meta33660",306958232,null)], null);
});

cljs.core.async.t_cljs$core$async33659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33659";

cljs.core.async.t_cljs$core$async33659.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async33659");
});

cljs.core.async.__GT_t_cljs$core$async33659 = (function cljs$core$async$__GT_t_cljs$core$async33659(f__$1,blockable__$1,meta33660){
return (new cljs.core.async.t_cljs$core$async33659(f__$1,blockable__$1,meta33660));
});

}

return (new cljs.core.async.t_cljs$core$async33659(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33665 = arguments.length;
switch (G__33665) {
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
var G__33668 = arguments.length;
switch (G__33668) {
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
var G__33671 = arguments.length;
switch (G__33671) {
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
var val_33673 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33673);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33673,ret){
return (function (){
return fn1.call(null,val_33673);
});})(val_33673,ret))
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
var G__33675 = arguments.length;
switch (G__33675) {
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
var n__28881__auto___33677 = n;
var x_33678 = (0);
while(true){
if((x_33678 < n__28881__auto___33677)){
(a[x_33678] = (0));

var G__33679 = (x_33678 + (1));
x_33678 = G__33679;
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

var G__33680 = (i + (1));
i = G__33680;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33681 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33681 = (function (flag,meta33682){
this.flag = flag;
this.meta33682 = meta33682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33683,meta33682__$1){
var self__ = this;
var _33683__$1 = this;
return (new cljs.core.async.t_cljs$core$async33681(self__.flag,meta33682__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33683){
var self__ = this;
var _33683__$1 = this;
return self__.meta33682;
});})(flag))
;

cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33681.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33682","meta33682",-499138777,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33681";

cljs.core.async.t_cljs$core$async33681.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async33681");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33681 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33681(flag__$1,meta33682){
return (new cljs.core.async.t_cljs$core$async33681(flag__$1,meta33682));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33681(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33684 = (function (flag,cb,meta33685){
this.flag = flag;
this.cb = cb;
this.meta33685 = meta33685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33686,meta33685__$1){
var self__ = this;
var _33686__$1 = this;
return (new cljs.core.async.t_cljs$core$async33684(self__.flag,self__.cb,meta33685__$1));
});

cljs.core.async.t_cljs$core$async33684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33686){
var self__ = this;
var _33686__$1 = this;
return self__.meta33685;
});

cljs.core.async.t_cljs$core$async33684.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33684.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33684.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33684.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33685","meta33685",-381943680,null)], null);
});

cljs.core.async.t_cljs$core$async33684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33684";

cljs.core.async.t_cljs$core$async33684.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async33684");
});

cljs.core.async.__GT_t_cljs$core$async33684 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33684(flag__$1,cb__$1,meta33685){
return (new cljs.core.async.t_cljs$core$async33684(flag__$1,cb__$1,meta33685));
});

}

return (new cljs.core.async.t_cljs$core$async33684(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33687_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33687_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33688_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33688_SHARP_,port], null));
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
var G__33689 = (i + (1));
i = G__33689;
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
var len__29105__auto___33695 = arguments.length;
var i__29106__auto___33696 = (0);
while(true){
if((i__29106__auto___33696 < len__29105__auto___33695)){
args__29112__auto__.push((arguments[i__29106__auto___33696]));

var G__33697 = (i__29106__auto___33696 + (1));
i__29106__auto___33696 = G__33697;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((1) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29113__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33692){
var map__33693 = p__33692;
var map__33693__$1 = ((((!((map__33693 == null)))?((((map__33693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33693):map__33693);
var opts = map__33693__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33690){
var G__33691 = cljs.core.first.call(null,seq33690);
var seq33690__$1 = cljs.core.next.call(null,seq33690);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33691,seq33690__$1);
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
var G__33699 = arguments.length;
switch (G__33699) {
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
var c__33612__auto___33745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___33745){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___33745){
return (function (state_33723){
var state_val_33724 = (state_33723[(1)]);
if((state_val_33724 === (7))){
var inst_33719 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
var statearr_33725_33746 = state_33723__$1;
(statearr_33725_33746[(2)] = inst_33719);

(statearr_33725_33746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (1))){
var state_33723__$1 = state_33723;
var statearr_33726_33747 = state_33723__$1;
(statearr_33726_33747[(2)] = null);

(statearr_33726_33747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (4))){
var inst_33702 = (state_33723[(7)]);
var inst_33702__$1 = (state_33723[(2)]);
var inst_33703 = (inst_33702__$1 == null);
var state_33723__$1 = (function (){var statearr_33727 = state_33723;
(statearr_33727[(7)] = inst_33702__$1);

return statearr_33727;
})();
if(cljs.core.truth_(inst_33703)){
var statearr_33728_33748 = state_33723__$1;
(statearr_33728_33748[(1)] = (5));

} else {
var statearr_33729_33749 = state_33723__$1;
(statearr_33729_33749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (13))){
var state_33723__$1 = state_33723;
var statearr_33730_33750 = state_33723__$1;
(statearr_33730_33750[(2)] = null);

(statearr_33730_33750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (6))){
var inst_33702 = (state_33723[(7)]);
var state_33723__$1 = state_33723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33723__$1,(11),to,inst_33702);
} else {
if((state_val_33724 === (3))){
var inst_33721 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33723__$1,inst_33721);
} else {
if((state_val_33724 === (12))){
var state_33723__$1 = state_33723;
var statearr_33731_33751 = state_33723__$1;
(statearr_33731_33751[(2)] = null);

(statearr_33731_33751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (2))){
var state_33723__$1 = state_33723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33723__$1,(4),from);
} else {
if((state_val_33724 === (11))){
var inst_33712 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
if(cljs.core.truth_(inst_33712)){
var statearr_33732_33752 = state_33723__$1;
(statearr_33732_33752[(1)] = (12));

} else {
var statearr_33733_33753 = state_33723__$1;
(statearr_33733_33753[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (9))){
var state_33723__$1 = state_33723;
var statearr_33734_33754 = state_33723__$1;
(statearr_33734_33754[(2)] = null);

(statearr_33734_33754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (5))){
var state_33723__$1 = state_33723;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33735_33755 = state_33723__$1;
(statearr_33735_33755[(1)] = (8));

} else {
var statearr_33736_33756 = state_33723__$1;
(statearr_33736_33756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (14))){
var inst_33717 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
var statearr_33737_33757 = state_33723__$1;
(statearr_33737_33757[(2)] = inst_33717);

(statearr_33737_33757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (10))){
var inst_33709 = (state_33723[(2)]);
var state_33723__$1 = state_33723;
var statearr_33738_33758 = state_33723__$1;
(statearr_33738_33758[(2)] = inst_33709);

(statearr_33738_33758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33724 === (8))){
var inst_33706 = cljs.core.async.close_BANG_.call(null,to);
var state_33723__$1 = state_33723;
var statearr_33739_33759 = state_33723__$1;
(statearr_33739_33759[(2)] = inst_33706);

(statearr_33739_33759[(1)] = (10));


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
});})(c__33612__auto___33745))
;
return ((function (switch__33524__auto__,c__33612__auto___33745){
return (function() {
var cljs$core$async$state_machine__33525__auto__ = null;
var cljs$core$async$state_machine__33525__auto____0 = (function (){
var statearr_33740 = [null,null,null,null,null,null,null,null];
(statearr_33740[(0)] = cljs$core$async$state_machine__33525__auto__);

(statearr_33740[(1)] = (1));

return statearr_33740;
});
var cljs$core$async$state_machine__33525__auto____1 = (function (state_33723){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_33723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e33741){if((e33741 instanceof Object)){
var ex__33528__auto__ = e33741;
var statearr_33742_33760 = state_33723;
(statearr_33742_33760[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33761 = state_33723;
state_33723 = G__33761;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$state_machine__33525__auto__ = function(state_33723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33525__auto____1.call(this,state_33723);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33525__auto____0;
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33525__auto____1;
return cljs$core$async$state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___33745))
})();
var state__33614__auto__ = (function (){var statearr_33743 = f__33613__auto__.call(null);
(statearr_33743[(6)] = c__33612__auto___33745);

return statearr_33743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___33745))
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
return (function (p__33762){
var vec__33763 = p__33762;
var v = cljs.core.nth.call(null,vec__33763,(0),null);
var p = cljs.core.nth.call(null,vec__33763,(1),null);
var job = vec__33763;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33612__auto___33934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___33934,res,vec__33763,v,p,job,jobs,results){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___33934,res,vec__33763,v,p,job,jobs,results){
return (function (state_33770){
var state_val_33771 = (state_33770[(1)]);
if((state_val_33771 === (1))){
var state_33770__$1 = state_33770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33770__$1,(2),res,v);
} else {
if((state_val_33771 === (2))){
var inst_33767 = (state_33770[(2)]);
var inst_33768 = cljs.core.async.close_BANG_.call(null,res);
var state_33770__$1 = (function (){var statearr_33772 = state_33770;
(statearr_33772[(7)] = inst_33767);

return statearr_33772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33770__$1,inst_33768);
} else {
return null;
}
}
});})(c__33612__auto___33934,res,vec__33763,v,p,job,jobs,results))
;
return ((function (switch__33524__auto__,c__33612__auto___33934,res,vec__33763,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0 = (function (){
var statearr_33773 = [null,null,null,null,null,null,null,null];
(statearr_33773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__);

(statearr_33773[(1)] = (1));

return statearr_33773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1 = (function (state_33770){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_33770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e33774){if((e33774 instanceof Object)){
var ex__33528__auto__ = e33774;
var statearr_33775_33935 = state_33770;
(statearr_33775_33935[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33936 = state_33770;
state_33770 = G__33936;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__ = function(state_33770){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1.call(this,state_33770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___33934,res,vec__33763,v,p,job,jobs,results))
})();
var state__33614__auto__ = (function (){var statearr_33776 = f__33613__auto__.call(null);
(statearr_33776[(6)] = c__33612__auto___33934);

return statearr_33776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___33934,res,vec__33763,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33777){
var vec__33778 = p__33777;
var v = cljs.core.nth.call(null,vec__33778,(0),null);
var p = cljs.core.nth.call(null,vec__33778,(1),null);
var job = vec__33778;
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
var n__28881__auto___33937 = n;
var __33938 = (0);
while(true){
if((__33938 < n__28881__auto___33937)){
var G__33781_33939 = type;
var G__33781_33940__$1 = (((G__33781_33939 instanceof cljs.core.Keyword))?G__33781_33939.fqn:null);
switch (G__33781_33940__$1) {
case "compute":
var c__33612__auto___33942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33938,c__33612__auto___33942,G__33781_33939,G__33781_33940__$1,n__28881__auto___33937,jobs,results,process,async){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (__33938,c__33612__auto___33942,G__33781_33939,G__33781_33940__$1,n__28881__auto___33937,jobs,results,process,async){
return (function (state_33794){
var state_val_33795 = (state_33794[(1)]);
if((state_val_33795 === (1))){
var state_33794__$1 = state_33794;
var statearr_33796_33943 = state_33794__$1;
(statearr_33796_33943[(2)] = null);

(statearr_33796_33943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (2))){
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33794__$1,(4),jobs);
} else {
if((state_val_33795 === (3))){
var inst_33792 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33794__$1,inst_33792);
} else {
if((state_val_33795 === (4))){
var inst_33784 = (state_33794[(2)]);
var inst_33785 = process.call(null,inst_33784);
var state_33794__$1 = state_33794;
if(cljs.core.truth_(inst_33785)){
var statearr_33797_33944 = state_33794__$1;
(statearr_33797_33944[(1)] = (5));

} else {
var statearr_33798_33945 = state_33794__$1;
(statearr_33798_33945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (5))){
var state_33794__$1 = state_33794;
var statearr_33799_33946 = state_33794__$1;
(statearr_33799_33946[(2)] = null);

(statearr_33799_33946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (6))){
var state_33794__$1 = state_33794;
var statearr_33800_33947 = state_33794__$1;
(statearr_33800_33947[(2)] = null);

(statearr_33800_33947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (7))){
var inst_33790 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33801_33948 = state_33794__$1;
(statearr_33801_33948[(2)] = inst_33790);

(statearr_33801_33948[(1)] = (3));


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
});})(__33938,c__33612__auto___33942,G__33781_33939,G__33781_33940__$1,n__28881__auto___33937,jobs,results,process,async))
;
return ((function (__33938,switch__33524__auto__,c__33612__auto___33942,G__33781_33939,G__33781_33940__$1,n__28881__auto___33937,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0 = (function (){
var statearr_33802 = [null,null,null,null,null,null,null];
(statearr_33802[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__);

(statearr_33802[(1)] = (1));

return statearr_33802;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1 = (function (state_33794){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_33794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e33803){if((e33803 instanceof Object)){
var ex__33528__auto__ = e33803;
var statearr_33804_33949 = state_33794;
(statearr_33804_33949[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33950 = state_33794;
state_33794 = G__33950;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__ = function(state_33794){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1.call(this,state_33794);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__;
})()
;})(__33938,switch__33524__auto__,c__33612__auto___33942,G__33781_33939,G__33781_33940__$1,n__28881__auto___33937,jobs,results,process,async))
})();
var state__33614__auto__ = (function (){var statearr_33805 = f__33613__auto__.call(null);
(statearr_33805[(6)] = c__33612__auto___33942);

return statearr_33805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(__33938,c__33612__auto___33942,G__33781_33939,G__33781_33940__$1,n__28881__auto___33937,jobs,results,process,async))
);


break;
case "async":
var c__33612__auto___33951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33938,c__33612__auto___33951,G__33781_33939,G__33781_33940__$1,n__28881__auto___33937,jobs,results,process,async){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (__33938,c__33612__auto___33951,G__33781_33939,G__33781_33940__$1,n__28881__auto___33937,jobs,results,process,async){
return (function (state_33818){
var state_val_33819 = (state_33818[(1)]);
if((state_val_33819 === (1))){
var state_33818__$1 = state_33818;
var statearr_33820_33952 = state_33818__$1;
(statearr_33820_33952[(2)] = null);

(statearr_33820_33952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (2))){
var state_33818__$1 = state_33818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33818__$1,(4),jobs);
} else {
if((state_val_33819 === (3))){
var inst_33816 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33818__$1,inst_33816);
} else {
if((state_val_33819 === (4))){
var inst_33808 = (state_33818[(2)]);
var inst_33809 = async.call(null,inst_33808);
var state_33818__$1 = state_33818;
if(cljs.core.truth_(inst_33809)){
var statearr_33821_33953 = state_33818__$1;
(statearr_33821_33953[(1)] = (5));

} else {
var statearr_33822_33954 = state_33818__$1;
(statearr_33822_33954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (5))){
var state_33818__$1 = state_33818;
var statearr_33823_33955 = state_33818__$1;
(statearr_33823_33955[(2)] = null);

(statearr_33823_33955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (6))){
var state_33818__$1 = state_33818;
var statearr_33824_33956 = state_33818__$1;
(statearr_33824_33956[(2)] = null);

(statearr_33824_33956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33819 === (7))){
var inst_33814 = (state_33818[(2)]);
var state_33818__$1 = state_33818;
var statearr_33825_33957 = state_33818__$1;
(statearr_33825_33957[(2)] = inst_33814);

(statearr_33825_33957[(1)] = (3));


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
});})(__33938,c__33612__auto___33951,G__33781_33939,G__33781_33940__$1,n__28881__auto___33937,jobs,results,process,async))
;
return ((function (__33938,switch__33524__auto__,c__33612__auto___33951,G__33781_33939,G__33781_33940__$1,n__28881__auto___33937,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0 = (function (){
var statearr_33826 = [null,null,null,null,null,null,null];
(statearr_33826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__);

(statearr_33826[(1)] = (1));

return statearr_33826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1 = (function (state_33818){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_33818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e33827){if((e33827 instanceof Object)){
var ex__33528__auto__ = e33827;
var statearr_33828_33958 = state_33818;
(statearr_33828_33958[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33959 = state_33818;
state_33818 = G__33959;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__ = function(state_33818){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1.call(this,state_33818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__;
})()
;})(__33938,switch__33524__auto__,c__33612__auto___33951,G__33781_33939,G__33781_33940__$1,n__28881__auto___33937,jobs,results,process,async))
})();
var state__33614__auto__ = (function (){var statearr_33829 = f__33613__auto__.call(null);
(statearr_33829[(6)] = c__33612__auto___33951);

return statearr_33829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(__33938,c__33612__auto___33951,G__33781_33939,G__33781_33940__$1,n__28881__auto___33937,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33781_33940__$1)].join('')));

}

var G__33960 = (__33938 + (1));
__33938 = G__33960;
continue;
} else {
}
break;
}

var c__33612__auto___33961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___33961,jobs,results,process,async){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___33961,jobs,results,process,async){
return (function (state_33851){
var state_val_33852 = (state_33851[(1)]);
if((state_val_33852 === (1))){
var state_33851__$1 = state_33851;
var statearr_33853_33962 = state_33851__$1;
(statearr_33853_33962[(2)] = null);

(statearr_33853_33962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (2))){
var state_33851__$1 = state_33851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33851__$1,(4),from);
} else {
if((state_val_33852 === (3))){
var inst_33849 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33851__$1,inst_33849);
} else {
if((state_val_33852 === (4))){
var inst_33832 = (state_33851[(7)]);
var inst_33832__$1 = (state_33851[(2)]);
var inst_33833 = (inst_33832__$1 == null);
var state_33851__$1 = (function (){var statearr_33854 = state_33851;
(statearr_33854[(7)] = inst_33832__$1);

return statearr_33854;
})();
if(cljs.core.truth_(inst_33833)){
var statearr_33855_33963 = state_33851__$1;
(statearr_33855_33963[(1)] = (5));

} else {
var statearr_33856_33964 = state_33851__$1;
(statearr_33856_33964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (5))){
var inst_33835 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33851__$1 = state_33851;
var statearr_33857_33965 = state_33851__$1;
(statearr_33857_33965[(2)] = inst_33835);

(statearr_33857_33965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (6))){
var inst_33837 = (state_33851[(8)]);
var inst_33832 = (state_33851[(7)]);
var inst_33837__$1 = cljs.core.async.chan.call(null,(1));
var inst_33838 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33839 = [inst_33832,inst_33837__$1];
var inst_33840 = (new cljs.core.PersistentVector(null,2,(5),inst_33838,inst_33839,null));
var state_33851__$1 = (function (){var statearr_33858 = state_33851;
(statearr_33858[(8)] = inst_33837__$1);

return statearr_33858;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33851__$1,(8),jobs,inst_33840);
} else {
if((state_val_33852 === (7))){
var inst_33847 = (state_33851[(2)]);
var state_33851__$1 = state_33851;
var statearr_33859_33966 = state_33851__$1;
(statearr_33859_33966[(2)] = inst_33847);

(statearr_33859_33966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33852 === (8))){
var inst_33837 = (state_33851[(8)]);
var inst_33842 = (state_33851[(2)]);
var state_33851__$1 = (function (){var statearr_33860 = state_33851;
(statearr_33860[(9)] = inst_33842);

return statearr_33860;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33851__$1,(9),results,inst_33837);
} else {
if((state_val_33852 === (9))){
var inst_33844 = (state_33851[(2)]);
var state_33851__$1 = (function (){var statearr_33861 = state_33851;
(statearr_33861[(10)] = inst_33844);

return statearr_33861;
})();
var statearr_33862_33967 = state_33851__$1;
(statearr_33862_33967[(2)] = null);

(statearr_33862_33967[(1)] = (2));


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
});})(c__33612__auto___33961,jobs,results,process,async))
;
return ((function (switch__33524__auto__,c__33612__auto___33961,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0 = (function (){
var statearr_33863 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__);

(statearr_33863[(1)] = (1));

return statearr_33863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1 = (function (state_33851){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_33851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e33864){if((e33864 instanceof Object)){
var ex__33528__auto__ = e33864;
var statearr_33865_33968 = state_33851;
(statearr_33865_33968[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33969 = state_33851;
state_33851 = G__33969;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__ = function(state_33851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1.call(this,state_33851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___33961,jobs,results,process,async))
})();
var state__33614__auto__ = (function (){var statearr_33866 = f__33613__auto__.call(null);
(statearr_33866[(6)] = c__33612__auto___33961);

return statearr_33866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___33961,jobs,results,process,async))
);


var c__33612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto__,jobs,results,process,async){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto__,jobs,results,process,async){
return (function (state_33904){
var state_val_33905 = (state_33904[(1)]);
if((state_val_33905 === (7))){
var inst_33900 = (state_33904[(2)]);
var state_33904__$1 = state_33904;
var statearr_33906_33970 = state_33904__$1;
(statearr_33906_33970[(2)] = inst_33900);

(statearr_33906_33970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (20))){
var state_33904__$1 = state_33904;
var statearr_33907_33971 = state_33904__$1;
(statearr_33907_33971[(2)] = null);

(statearr_33907_33971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (1))){
var state_33904__$1 = state_33904;
var statearr_33908_33972 = state_33904__$1;
(statearr_33908_33972[(2)] = null);

(statearr_33908_33972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (4))){
var inst_33869 = (state_33904[(7)]);
var inst_33869__$1 = (state_33904[(2)]);
var inst_33870 = (inst_33869__$1 == null);
var state_33904__$1 = (function (){var statearr_33909 = state_33904;
(statearr_33909[(7)] = inst_33869__$1);

return statearr_33909;
})();
if(cljs.core.truth_(inst_33870)){
var statearr_33910_33973 = state_33904__$1;
(statearr_33910_33973[(1)] = (5));

} else {
var statearr_33911_33974 = state_33904__$1;
(statearr_33911_33974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (15))){
var inst_33882 = (state_33904[(8)]);
var state_33904__$1 = state_33904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33904__$1,(18),to,inst_33882);
} else {
if((state_val_33905 === (21))){
var inst_33895 = (state_33904[(2)]);
var state_33904__$1 = state_33904;
var statearr_33912_33975 = state_33904__$1;
(statearr_33912_33975[(2)] = inst_33895);

(statearr_33912_33975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (13))){
var inst_33897 = (state_33904[(2)]);
var state_33904__$1 = (function (){var statearr_33913 = state_33904;
(statearr_33913[(9)] = inst_33897);

return statearr_33913;
})();
var statearr_33914_33976 = state_33904__$1;
(statearr_33914_33976[(2)] = null);

(statearr_33914_33976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (6))){
var inst_33869 = (state_33904[(7)]);
var state_33904__$1 = state_33904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33904__$1,(11),inst_33869);
} else {
if((state_val_33905 === (17))){
var inst_33890 = (state_33904[(2)]);
var state_33904__$1 = state_33904;
if(cljs.core.truth_(inst_33890)){
var statearr_33915_33977 = state_33904__$1;
(statearr_33915_33977[(1)] = (19));

} else {
var statearr_33916_33978 = state_33904__$1;
(statearr_33916_33978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (3))){
var inst_33902 = (state_33904[(2)]);
var state_33904__$1 = state_33904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33904__$1,inst_33902);
} else {
if((state_val_33905 === (12))){
var inst_33879 = (state_33904[(10)]);
var state_33904__$1 = state_33904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33904__$1,(14),inst_33879);
} else {
if((state_val_33905 === (2))){
var state_33904__$1 = state_33904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33904__$1,(4),results);
} else {
if((state_val_33905 === (19))){
var state_33904__$1 = state_33904;
var statearr_33917_33979 = state_33904__$1;
(statearr_33917_33979[(2)] = null);

(statearr_33917_33979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (11))){
var inst_33879 = (state_33904[(2)]);
var state_33904__$1 = (function (){var statearr_33918 = state_33904;
(statearr_33918[(10)] = inst_33879);

return statearr_33918;
})();
var statearr_33919_33980 = state_33904__$1;
(statearr_33919_33980[(2)] = null);

(statearr_33919_33980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (9))){
var state_33904__$1 = state_33904;
var statearr_33920_33981 = state_33904__$1;
(statearr_33920_33981[(2)] = null);

(statearr_33920_33981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (5))){
var state_33904__$1 = state_33904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33921_33982 = state_33904__$1;
(statearr_33921_33982[(1)] = (8));

} else {
var statearr_33922_33983 = state_33904__$1;
(statearr_33922_33983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (14))){
var inst_33882 = (state_33904[(8)]);
var inst_33884 = (state_33904[(11)]);
var inst_33882__$1 = (state_33904[(2)]);
var inst_33883 = (inst_33882__$1 == null);
var inst_33884__$1 = cljs.core.not.call(null,inst_33883);
var state_33904__$1 = (function (){var statearr_33923 = state_33904;
(statearr_33923[(8)] = inst_33882__$1);

(statearr_33923[(11)] = inst_33884__$1);

return statearr_33923;
})();
if(inst_33884__$1){
var statearr_33924_33984 = state_33904__$1;
(statearr_33924_33984[(1)] = (15));

} else {
var statearr_33925_33985 = state_33904__$1;
(statearr_33925_33985[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (16))){
var inst_33884 = (state_33904[(11)]);
var state_33904__$1 = state_33904;
var statearr_33926_33986 = state_33904__$1;
(statearr_33926_33986[(2)] = inst_33884);

(statearr_33926_33986[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (10))){
var inst_33876 = (state_33904[(2)]);
var state_33904__$1 = state_33904;
var statearr_33927_33987 = state_33904__$1;
(statearr_33927_33987[(2)] = inst_33876);

(statearr_33927_33987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (18))){
var inst_33887 = (state_33904[(2)]);
var state_33904__$1 = state_33904;
var statearr_33928_33988 = state_33904__$1;
(statearr_33928_33988[(2)] = inst_33887);

(statearr_33928_33988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33905 === (8))){
var inst_33873 = cljs.core.async.close_BANG_.call(null,to);
var state_33904__$1 = state_33904;
var statearr_33929_33989 = state_33904__$1;
(statearr_33929_33989[(2)] = inst_33873);

(statearr_33929_33989[(1)] = (10));


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
});})(c__33612__auto__,jobs,results,process,async))
;
return ((function (switch__33524__auto__,c__33612__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0 = (function (){
var statearr_33930 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__);

(statearr_33930[(1)] = (1));

return statearr_33930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1 = (function (state_33904){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_33904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e33931){if((e33931 instanceof Object)){
var ex__33528__auto__ = e33931;
var statearr_33932_33990 = state_33904;
(statearr_33932_33990[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33991 = state_33904;
state_33904 = G__33991;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__ = function(state_33904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1.call(this,state_33904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33525__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto__,jobs,results,process,async))
})();
var state__33614__auto__ = (function (){var statearr_33933 = f__33613__auto__.call(null);
(statearr_33933[(6)] = c__33612__auto__);

return statearr_33933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto__,jobs,results,process,async))
);

return c__33612__auto__;
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
var G__33993 = arguments.length;
switch (G__33993) {
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
var G__33996 = arguments.length;
switch (G__33996) {
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
var G__33999 = arguments.length;
switch (G__33999) {
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
var c__33612__auto___34048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___34048,tc,fc){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___34048,tc,fc){
return (function (state_34025){
var state_val_34026 = (state_34025[(1)]);
if((state_val_34026 === (7))){
var inst_34021 = (state_34025[(2)]);
var state_34025__$1 = state_34025;
var statearr_34027_34049 = state_34025__$1;
(statearr_34027_34049[(2)] = inst_34021);

(statearr_34027_34049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (1))){
var state_34025__$1 = state_34025;
var statearr_34028_34050 = state_34025__$1;
(statearr_34028_34050[(2)] = null);

(statearr_34028_34050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (4))){
var inst_34002 = (state_34025[(7)]);
var inst_34002__$1 = (state_34025[(2)]);
var inst_34003 = (inst_34002__$1 == null);
var state_34025__$1 = (function (){var statearr_34029 = state_34025;
(statearr_34029[(7)] = inst_34002__$1);

return statearr_34029;
})();
if(cljs.core.truth_(inst_34003)){
var statearr_34030_34051 = state_34025__$1;
(statearr_34030_34051[(1)] = (5));

} else {
var statearr_34031_34052 = state_34025__$1;
(statearr_34031_34052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (13))){
var state_34025__$1 = state_34025;
var statearr_34032_34053 = state_34025__$1;
(statearr_34032_34053[(2)] = null);

(statearr_34032_34053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (6))){
var inst_34002 = (state_34025[(7)]);
var inst_34008 = p.call(null,inst_34002);
var state_34025__$1 = state_34025;
if(cljs.core.truth_(inst_34008)){
var statearr_34033_34054 = state_34025__$1;
(statearr_34033_34054[(1)] = (9));

} else {
var statearr_34034_34055 = state_34025__$1;
(statearr_34034_34055[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (3))){
var inst_34023 = (state_34025[(2)]);
var state_34025__$1 = state_34025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34025__$1,inst_34023);
} else {
if((state_val_34026 === (12))){
var state_34025__$1 = state_34025;
var statearr_34035_34056 = state_34025__$1;
(statearr_34035_34056[(2)] = null);

(statearr_34035_34056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (2))){
var state_34025__$1 = state_34025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34025__$1,(4),ch);
} else {
if((state_val_34026 === (11))){
var inst_34002 = (state_34025[(7)]);
var inst_34012 = (state_34025[(2)]);
var state_34025__$1 = state_34025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34025__$1,(8),inst_34012,inst_34002);
} else {
if((state_val_34026 === (9))){
var state_34025__$1 = state_34025;
var statearr_34036_34057 = state_34025__$1;
(statearr_34036_34057[(2)] = tc);

(statearr_34036_34057[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (5))){
var inst_34005 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34006 = cljs.core.async.close_BANG_.call(null,fc);
var state_34025__$1 = (function (){var statearr_34037 = state_34025;
(statearr_34037[(8)] = inst_34005);

return statearr_34037;
})();
var statearr_34038_34058 = state_34025__$1;
(statearr_34038_34058[(2)] = inst_34006);

(statearr_34038_34058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (14))){
var inst_34019 = (state_34025[(2)]);
var state_34025__$1 = state_34025;
var statearr_34039_34059 = state_34025__$1;
(statearr_34039_34059[(2)] = inst_34019);

(statearr_34039_34059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (10))){
var state_34025__$1 = state_34025;
var statearr_34040_34060 = state_34025__$1;
(statearr_34040_34060[(2)] = fc);

(statearr_34040_34060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34026 === (8))){
var inst_34014 = (state_34025[(2)]);
var state_34025__$1 = state_34025;
if(cljs.core.truth_(inst_34014)){
var statearr_34041_34061 = state_34025__$1;
(statearr_34041_34061[(1)] = (12));

} else {
var statearr_34042_34062 = state_34025__$1;
(statearr_34042_34062[(1)] = (13));

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
});})(c__33612__auto___34048,tc,fc))
;
return ((function (switch__33524__auto__,c__33612__auto___34048,tc,fc){
return (function() {
var cljs$core$async$state_machine__33525__auto__ = null;
var cljs$core$async$state_machine__33525__auto____0 = (function (){
var statearr_34043 = [null,null,null,null,null,null,null,null,null];
(statearr_34043[(0)] = cljs$core$async$state_machine__33525__auto__);

(statearr_34043[(1)] = (1));

return statearr_34043;
});
var cljs$core$async$state_machine__33525__auto____1 = (function (state_34025){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_34025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e34044){if((e34044 instanceof Object)){
var ex__33528__auto__ = e34044;
var statearr_34045_34063 = state_34025;
(statearr_34045_34063[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34064 = state_34025;
state_34025 = G__34064;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$state_machine__33525__auto__ = function(state_34025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33525__auto____1.call(this,state_34025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33525__auto____0;
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33525__auto____1;
return cljs$core$async$state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___34048,tc,fc))
})();
var state__33614__auto__ = (function (){var statearr_34046 = f__33613__auto__.call(null);
(statearr_34046[(6)] = c__33612__auto___34048);

return statearr_34046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___34048,tc,fc))
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
var c__33612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto__){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto__){
return (function (state_34085){
var state_val_34086 = (state_34085[(1)]);
if((state_val_34086 === (7))){
var inst_34081 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
var statearr_34087_34105 = state_34085__$1;
(statearr_34087_34105[(2)] = inst_34081);

(statearr_34087_34105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (1))){
var inst_34065 = init;
var state_34085__$1 = (function (){var statearr_34088 = state_34085;
(statearr_34088[(7)] = inst_34065);

return statearr_34088;
})();
var statearr_34089_34106 = state_34085__$1;
(statearr_34089_34106[(2)] = null);

(statearr_34089_34106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (4))){
var inst_34068 = (state_34085[(8)]);
var inst_34068__$1 = (state_34085[(2)]);
var inst_34069 = (inst_34068__$1 == null);
var state_34085__$1 = (function (){var statearr_34090 = state_34085;
(statearr_34090[(8)] = inst_34068__$1);

return statearr_34090;
})();
if(cljs.core.truth_(inst_34069)){
var statearr_34091_34107 = state_34085__$1;
(statearr_34091_34107[(1)] = (5));

} else {
var statearr_34092_34108 = state_34085__$1;
(statearr_34092_34108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (6))){
var inst_34068 = (state_34085[(8)]);
var inst_34072 = (state_34085[(9)]);
var inst_34065 = (state_34085[(7)]);
var inst_34072__$1 = f.call(null,inst_34065,inst_34068);
var inst_34073 = cljs.core.reduced_QMARK_.call(null,inst_34072__$1);
var state_34085__$1 = (function (){var statearr_34093 = state_34085;
(statearr_34093[(9)] = inst_34072__$1);

return statearr_34093;
})();
if(inst_34073){
var statearr_34094_34109 = state_34085__$1;
(statearr_34094_34109[(1)] = (8));

} else {
var statearr_34095_34110 = state_34085__$1;
(statearr_34095_34110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (3))){
var inst_34083 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34085__$1,inst_34083);
} else {
if((state_val_34086 === (2))){
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34085__$1,(4),ch);
} else {
if((state_val_34086 === (9))){
var inst_34072 = (state_34085[(9)]);
var inst_34065 = inst_34072;
var state_34085__$1 = (function (){var statearr_34096 = state_34085;
(statearr_34096[(7)] = inst_34065);

return statearr_34096;
})();
var statearr_34097_34111 = state_34085__$1;
(statearr_34097_34111[(2)] = null);

(statearr_34097_34111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (5))){
var inst_34065 = (state_34085[(7)]);
var state_34085__$1 = state_34085;
var statearr_34098_34112 = state_34085__$1;
(statearr_34098_34112[(2)] = inst_34065);

(statearr_34098_34112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (10))){
var inst_34079 = (state_34085[(2)]);
var state_34085__$1 = state_34085;
var statearr_34099_34113 = state_34085__$1;
(statearr_34099_34113[(2)] = inst_34079);

(statearr_34099_34113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34086 === (8))){
var inst_34072 = (state_34085[(9)]);
var inst_34075 = cljs.core.deref.call(null,inst_34072);
var state_34085__$1 = state_34085;
var statearr_34100_34114 = state_34085__$1;
(statearr_34100_34114[(2)] = inst_34075);

(statearr_34100_34114[(1)] = (10));


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
});})(c__33612__auto__))
;
return ((function (switch__33524__auto__,c__33612__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33525__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33525__auto____0 = (function (){
var statearr_34101 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34101[(0)] = cljs$core$async$reduce_$_state_machine__33525__auto__);

(statearr_34101[(1)] = (1));

return statearr_34101;
});
var cljs$core$async$reduce_$_state_machine__33525__auto____1 = (function (state_34085){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_34085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e34102){if((e34102 instanceof Object)){
var ex__33528__auto__ = e34102;
var statearr_34103_34115 = state_34085;
(statearr_34103_34115[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34116 = state_34085;
state_34085 = G__34116;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33525__auto__ = function(state_34085){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33525__auto____1.call(this,state_34085);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33525__auto____0;
cljs$core$async$reduce_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33525__auto____1;
return cljs$core$async$reduce_$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto__))
})();
var state__33614__auto__ = (function (){var statearr_34104 = f__33613__auto__.call(null);
(statearr_34104[(6)] = c__33612__auto__);

return statearr_34104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto__))
);

return c__33612__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto__,f__$1){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto__,f__$1){
return (function (state_34122){
var state_val_34123 = (state_34122[(1)]);
if((state_val_34123 === (1))){
var inst_34117 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34122__$1,(2),inst_34117);
} else {
if((state_val_34123 === (2))){
var inst_34119 = (state_34122[(2)]);
var inst_34120 = f__$1.call(null,inst_34119);
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34122__$1,inst_34120);
} else {
return null;
}
}
});})(c__33612__auto__,f__$1))
;
return ((function (switch__33524__auto__,c__33612__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33525__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33525__auto____0 = (function (){
var statearr_34124 = [null,null,null,null,null,null,null];
(statearr_34124[(0)] = cljs$core$async$transduce_$_state_machine__33525__auto__);

(statearr_34124[(1)] = (1));

return statearr_34124;
});
var cljs$core$async$transduce_$_state_machine__33525__auto____1 = (function (state_34122){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_34122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e34125){if((e34125 instanceof Object)){
var ex__33528__auto__ = e34125;
var statearr_34126_34128 = state_34122;
(statearr_34126_34128[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34129 = state_34122;
state_34122 = G__34129;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33525__auto__ = function(state_34122){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33525__auto____1.call(this,state_34122);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33525__auto____0;
cljs$core$async$transduce_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33525__auto____1;
return cljs$core$async$transduce_$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto__,f__$1))
})();
var state__33614__auto__ = (function (){var statearr_34127 = f__33613__auto__.call(null);
(statearr_34127[(6)] = c__33612__auto__);

return statearr_34127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto__,f__$1))
);

return c__33612__auto__;
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
var G__34131 = arguments.length;
switch (G__34131) {
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
var c__33612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto__){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto__){
return (function (state_34156){
var state_val_34157 = (state_34156[(1)]);
if((state_val_34157 === (7))){
var inst_34138 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34158_34179 = state_34156__$1;
(statearr_34158_34179[(2)] = inst_34138);

(statearr_34158_34179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (1))){
var inst_34132 = cljs.core.seq.call(null,coll);
var inst_34133 = inst_34132;
var state_34156__$1 = (function (){var statearr_34159 = state_34156;
(statearr_34159[(7)] = inst_34133);

return statearr_34159;
})();
var statearr_34160_34180 = state_34156__$1;
(statearr_34160_34180[(2)] = null);

(statearr_34160_34180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (4))){
var inst_34133 = (state_34156[(7)]);
var inst_34136 = cljs.core.first.call(null,inst_34133);
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34156__$1,(7),ch,inst_34136);
} else {
if((state_val_34157 === (13))){
var inst_34150 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34161_34181 = state_34156__$1;
(statearr_34161_34181[(2)] = inst_34150);

(statearr_34161_34181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (6))){
var inst_34141 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
if(cljs.core.truth_(inst_34141)){
var statearr_34162_34182 = state_34156__$1;
(statearr_34162_34182[(1)] = (8));

} else {
var statearr_34163_34183 = state_34156__$1;
(statearr_34163_34183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (3))){
var inst_34154 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34156__$1,inst_34154);
} else {
if((state_val_34157 === (12))){
var state_34156__$1 = state_34156;
var statearr_34164_34184 = state_34156__$1;
(statearr_34164_34184[(2)] = null);

(statearr_34164_34184[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (2))){
var inst_34133 = (state_34156[(7)]);
var state_34156__$1 = state_34156;
if(cljs.core.truth_(inst_34133)){
var statearr_34165_34185 = state_34156__$1;
(statearr_34165_34185[(1)] = (4));

} else {
var statearr_34166_34186 = state_34156__$1;
(statearr_34166_34186[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (11))){
var inst_34147 = cljs.core.async.close_BANG_.call(null,ch);
var state_34156__$1 = state_34156;
var statearr_34167_34187 = state_34156__$1;
(statearr_34167_34187[(2)] = inst_34147);

(statearr_34167_34187[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (9))){
var state_34156__$1 = state_34156;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34168_34188 = state_34156__$1;
(statearr_34168_34188[(1)] = (11));

} else {
var statearr_34169_34189 = state_34156__$1;
(statearr_34169_34189[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (5))){
var inst_34133 = (state_34156[(7)]);
var state_34156__$1 = state_34156;
var statearr_34170_34190 = state_34156__$1;
(statearr_34170_34190[(2)] = inst_34133);

(statearr_34170_34190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (10))){
var inst_34152 = (state_34156[(2)]);
var state_34156__$1 = state_34156;
var statearr_34171_34191 = state_34156__$1;
(statearr_34171_34191[(2)] = inst_34152);

(statearr_34171_34191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34157 === (8))){
var inst_34133 = (state_34156[(7)]);
var inst_34143 = cljs.core.next.call(null,inst_34133);
var inst_34133__$1 = inst_34143;
var state_34156__$1 = (function (){var statearr_34172 = state_34156;
(statearr_34172[(7)] = inst_34133__$1);

return statearr_34172;
})();
var statearr_34173_34192 = state_34156__$1;
(statearr_34173_34192[(2)] = null);

(statearr_34173_34192[(1)] = (2));


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
});})(c__33612__auto__))
;
return ((function (switch__33524__auto__,c__33612__auto__){
return (function() {
var cljs$core$async$state_machine__33525__auto__ = null;
var cljs$core$async$state_machine__33525__auto____0 = (function (){
var statearr_34174 = [null,null,null,null,null,null,null,null];
(statearr_34174[(0)] = cljs$core$async$state_machine__33525__auto__);

(statearr_34174[(1)] = (1));

return statearr_34174;
});
var cljs$core$async$state_machine__33525__auto____1 = (function (state_34156){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_34156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e34175){if((e34175 instanceof Object)){
var ex__33528__auto__ = e34175;
var statearr_34176_34193 = state_34156;
(statearr_34176_34193[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34194 = state_34156;
state_34156 = G__34194;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$state_machine__33525__auto__ = function(state_34156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33525__auto____1.call(this,state_34156);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33525__auto____0;
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33525__auto____1;
return cljs$core$async$state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto__))
})();
var state__33614__auto__ = (function (){var statearr_34177 = f__33613__auto__.call(null);
(statearr_34177[(6)] = c__33612__auto__);

return statearr_34177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto__))
);

return c__33612__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async34195 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34195 = (function (ch,cs,meta34196){
this.ch = ch;
this.cs = cs;
this.meta34196 = meta34196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34197,meta34196__$1){
var self__ = this;
var _34197__$1 = this;
return (new cljs.core.async.t_cljs$core$async34195(self__.ch,self__.cs,meta34196__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34197){
var self__ = this;
var _34197__$1 = this;
return self__.meta34196;
});})(cs))
;

cljs.core.async.t_cljs$core$async34195.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34195.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34195.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34195.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34195.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34195.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34195.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34196","meta34196",-1363812980,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34195";

cljs.core.async.t_cljs$core$async34195.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async34195");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34195 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34195(ch__$1,cs__$1,meta34196){
return (new cljs.core.async.t_cljs$core$async34195(ch__$1,cs__$1,meta34196));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34195(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33612__auto___34417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___34417,cs,m,dchan,dctr,done){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___34417,cs,m,dchan,dctr,done){
return (function (state_34332){
var state_val_34333 = (state_34332[(1)]);
if((state_val_34333 === (7))){
var inst_34328 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
var statearr_34334_34418 = state_34332__$1;
(statearr_34334_34418[(2)] = inst_34328);

(statearr_34334_34418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (20))){
var inst_34231 = (state_34332[(7)]);
var inst_34243 = cljs.core.first.call(null,inst_34231);
var inst_34244 = cljs.core.nth.call(null,inst_34243,(0),null);
var inst_34245 = cljs.core.nth.call(null,inst_34243,(1),null);
var state_34332__$1 = (function (){var statearr_34335 = state_34332;
(statearr_34335[(8)] = inst_34244);

return statearr_34335;
})();
if(cljs.core.truth_(inst_34245)){
var statearr_34336_34419 = state_34332__$1;
(statearr_34336_34419[(1)] = (22));

} else {
var statearr_34337_34420 = state_34332__$1;
(statearr_34337_34420[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (27))){
var inst_34275 = (state_34332[(9)]);
var inst_34200 = (state_34332[(10)]);
var inst_34280 = (state_34332[(11)]);
var inst_34273 = (state_34332[(12)]);
var inst_34280__$1 = cljs.core._nth.call(null,inst_34273,inst_34275);
var inst_34281 = cljs.core.async.put_BANG_.call(null,inst_34280__$1,inst_34200,done);
var state_34332__$1 = (function (){var statearr_34338 = state_34332;
(statearr_34338[(11)] = inst_34280__$1);

return statearr_34338;
})();
if(cljs.core.truth_(inst_34281)){
var statearr_34339_34421 = state_34332__$1;
(statearr_34339_34421[(1)] = (30));

} else {
var statearr_34340_34422 = state_34332__$1;
(statearr_34340_34422[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (1))){
var state_34332__$1 = state_34332;
var statearr_34341_34423 = state_34332__$1;
(statearr_34341_34423[(2)] = null);

(statearr_34341_34423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (24))){
var inst_34231 = (state_34332[(7)]);
var inst_34250 = (state_34332[(2)]);
var inst_34251 = cljs.core.next.call(null,inst_34231);
var inst_34209 = inst_34251;
var inst_34210 = null;
var inst_34211 = (0);
var inst_34212 = (0);
var state_34332__$1 = (function (){var statearr_34342 = state_34332;
(statearr_34342[(13)] = inst_34210);

(statearr_34342[(14)] = inst_34211);

(statearr_34342[(15)] = inst_34250);

(statearr_34342[(16)] = inst_34212);

(statearr_34342[(17)] = inst_34209);

return statearr_34342;
})();
var statearr_34343_34424 = state_34332__$1;
(statearr_34343_34424[(2)] = null);

(statearr_34343_34424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (39))){
var state_34332__$1 = state_34332;
var statearr_34347_34425 = state_34332__$1;
(statearr_34347_34425[(2)] = null);

(statearr_34347_34425[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (4))){
var inst_34200 = (state_34332[(10)]);
var inst_34200__$1 = (state_34332[(2)]);
var inst_34201 = (inst_34200__$1 == null);
var state_34332__$1 = (function (){var statearr_34348 = state_34332;
(statearr_34348[(10)] = inst_34200__$1);

return statearr_34348;
})();
if(cljs.core.truth_(inst_34201)){
var statearr_34349_34426 = state_34332__$1;
(statearr_34349_34426[(1)] = (5));

} else {
var statearr_34350_34427 = state_34332__$1;
(statearr_34350_34427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (15))){
var inst_34210 = (state_34332[(13)]);
var inst_34211 = (state_34332[(14)]);
var inst_34212 = (state_34332[(16)]);
var inst_34209 = (state_34332[(17)]);
var inst_34227 = (state_34332[(2)]);
var inst_34228 = (inst_34212 + (1));
var tmp34344 = inst_34210;
var tmp34345 = inst_34211;
var tmp34346 = inst_34209;
var inst_34209__$1 = tmp34346;
var inst_34210__$1 = tmp34344;
var inst_34211__$1 = tmp34345;
var inst_34212__$1 = inst_34228;
var state_34332__$1 = (function (){var statearr_34351 = state_34332;
(statearr_34351[(18)] = inst_34227);

(statearr_34351[(13)] = inst_34210__$1);

(statearr_34351[(14)] = inst_34211__$1);

(statearr_34351[(16)] = inst_34212__$1);

(statearr_34351[(17)] = inst_34209__$1);

return statearr_34351;
})();
var statearr_34352_34428 = state_34332__$1;
(statearr_34352_34428[(2)] = null);

(statearr_34352_34428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (21))){
var inst_34254 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
var statearr_34356_34429 = state_34332__$1;
(statearr_34356_34429[(2)] = inst_34254);

(statearr_34356_34429[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (31))){
var inst_34280 = (state_34332[(11)]);
var inst_34284 = done.call(null,null);
var inst_34285 = cljs.core.async.untap_STAR_.call(null,m,inst_34280);
var state_34332__$1 = (function (){var statearr_34357 = state_34332;
(statearr_34357[(19)] = inst_34284);

return statearr_34357;
})();
var statearr_34358_34430 = state_34332__$1;
(statearr_34358_34430[(2)] = inst_34285);

(statearr_34358_34430[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (32))){
var inst_34274 = (state_34332[(20)]);
var inst_34275 = (state_34332[(9)]);
var inst_34272 = (state_34332[(21)]);
var inst_34273 = (state_34332[(12)]);
var inst_34287 = (state_34332[(2)]);
var inst_34288 = (inst_34275 + (1));
var tmp34353 = inst_34274;
var tmp34354 = inst_34272;
var tmp34355 = inst_34273;
var inst_34272__$1 = tmp34354;
var inst_34273__$1 = tmp34355;
var inst_34274__$1 = tmp34353;
var inst_34275__$1 = inst_34288;
var state_34332__$1 = (function (){var statearr_34359 = state_34332;
(statearr_34359[(20)] = inst_34274__$1);

(statearr_34359[(9)] = inst_34275__$1);

(statearr_34359[(21)] = inst_34272__$1);

(statearr_34359[(12)] = inst_34273__$1);

(statearr_34359[(22)] = inst_34287);

return statearr_34359;
})();
var statearr_34360_34431 = state_34332__$1;
(statearr_34360_34431[(2)] = null);

(statearr_34360_34431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (40))){
var inst_34300 = (state_34332[(23)]);
var inst_34304 = done.call(null,null);
var inst_34305 = cljs.core.async.untap_STAR_.call(null,m,inst_34300);
var state_34332__$1 = (function (){var statearr_34361 = state_34332;
(statearr_34361[(24)] = inst_34304);

return statearr_34361;
})();
var statearr_34362_34432 = state_34332__$1;
(statearr_34362_34432[(2)] = inst_34305);

(statearr_34362_34432[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (33))){
var inst_34291 = (state_34332[(25)]);
var inst_34293 = cljs.core.chunked_seq_QMARK_.call(null,inst_34291);
var state_34332__$1 = state_34332;
if(inst_34293){
var statearr_34363_34433 = state_34332__$1;
(statearr_34363_34433[(1)] = (36));

} else {
var statearr_34364_34434 = state_34332__$1;
(statearr_34364_34434[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (13))){
var inst_34221 = (state_34332[(26)]);
var inst_34224 = cljs.core.async.close_BANG_.call(null,inst_34221);
var state_34332__$1 = state_34332;
var statearr_34365_34435 = state_34332__$1;
(statearr_34365_34435[(2)] = inst_34224);

(statearr_34365_34435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (22))){
var inst_34244 = (state_34332[(8)]);
var inst_34247 = cljs.core.async.close_BANG_.call(null,inst_34244);
var state_34332__$1 = state_34332;
var statearr_34366_34436 = state_34332__$1;
(statearr_34366_34436[(2)] = inst_34247);

(statearr_34366_34436[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (36))){
var inst_34291 = (state_34332[(25)]);
var inst_34295 = cljs.core.chunk_first.call(null,inst_34291);
var inst_34296 = cljs.core.chunk_rest.call(null,inst_34291);
var inst_34297 = cljs.core.count.call(null,inst_34295);
var inst_34272 = inst_34296;
var inst_34273 = inst_34295;
var inst_34274 = inst_34297;
var inst_34275 = (0);
var state_34332__$1 = (function (){var statearr_34367 = state_34332;
(statearr_34367[(20)] = inst_34274);

(statearr_34367[(9)] = inst_34275);

(statearr_34367[(21)] = inst_34272);

(statearr_34367[(12)] = inst_34273);

return statearr_34367;
})();
var statearr_34368_34437 = state_34332__$1;
(statearr_34368_34437[(2)] = null);

(statearr_34368_34437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (41))){
var inst_34291 = (state_34332[(25)]);
var inst_34307 = (state_34332[(2)]);
var inst_34308 = cljs.core.next.call(null,inst_34291);
var inst_34272 = inst_34308;
var inst_34273 = null;
var inst_34274 = (0);
var inst_34275 = (0);
var state_34332__$1 = (function (){var statearr_34369 = state_34332;
(statearr_34369[(20)] = inst_34274);

(statearr_34369[(9)] = inst_34275);

(statearr_34369[(21)] = inst_34272);

(statearr_34369[(12)] = inst_34273);

(statearr_34369[(27)] = inst_34307);

return statearr_34369;
})();
var statearr_34370_34438 = state_34332__$1;
(statearr_34370_34438[(2)] = null);

(statearr_34370_34438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (43))){
var state_34332__$1 = state_34332;
var statearr_34371_34439 = state_34332__$1;
(statearr_34371_34439[(2)] = null);

(statearr_34371_34439[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (29))){
var inst_34316 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
var statearr_34372_34440 = state_34332__$1;
(statearr_34372_34440[(2)] = inst_34316);

(statearr_34372_34440[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (44))){
var inst_34325 = (state_34332[(2)]);
var state_34332__$1 = (function (){var statearr_34373 = state_34332;
(statearr_34373[(28)] = inst_34325);

return statearr_34373;
})();
var statearr_34374_34441 = state_34332__$1;
(statearr_34374_34441[(2)] = null);

(statearr_34374_34441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (6))){
var inst_34264 = (state_34332[(29)]);
var inst_34263 = cljs.core.deref.call(null,cs);
var inst_34264__$1 = cljs.core.keys.call(null,inst_34263);
var inst_34265 = cljs.core.count.call(null,inst_34264__$1);
var inst_34266 = cljs.core.reset_BANG_.call(null,dctr,inst_34265);
var inst_34271 = cljs.core.seq.call(null,inst_34264__$1);
var inst_34272 = inst_34271;
var inst_34273 = null;
var inst_34274 = (0);
var inst_34275 = (0);
var state_34332__$1 = (function (){var statearr_34375 = state_34332;
(statearr_34375[(20)] = inst_34274);

(statearr_34375[(9)] = inst_34275);

(statearr_34375[(21)] = inst_34272);

(statearr_34375[(30)] = inst_34266);

(statearr_34375[(29)] = inst_34264__$1);

(statearr_34375[(12)] = inst_34273);

return statearr_34375;
})();
var statearr_34376_34442 = state_34332__$1;
(statearr_34376_34442[(2)] = null);

(statearr_34376_34442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (28))){
var inst_34272 = (state_34332[(21)]);
var inst_34291 = (state_34332[(25)]);
var inst_34291__$1 = cljs.core.seq.call(null,inst_34272);
var state_34332__$1 = (function (){var statearr_34377 = state_34332;
(statearr_34377[(25)] = inst_34291__$1);

return statearr_34377;
})();
if(inst_34291__$1){
var statearr_34378_34443 = state_34332__$1;
(statearr_34378_34443[(1)] = (33));

} else {
var statearr_34379_34444 = state_34332__$1;
(statearr_34379_34444[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (25))){
var inst_34274 = (state_34332[(20)]);
var inst_34275 = (state_34332[(9)]);
var inst_34277 = (inst_34275 < inst_34274);
var inst_34278 = inst_34277;
var state_34332__$1 = state_34332;
if(cljs.core.truth_(inst_34278)){
var statearr_34380_34445 = state_34332__$1;
(statearr_34380_34445[(1)] = (27));

} else {
var statearr_34381_34446 = state_34332__$1;
(statearr_34381_34446[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (34))){
var state_34332__$1 = state_34332;
var statearr_34382_34447 = state_34332__$1;
(statearr_34382_34447[(2)] = null);

(statearr_34382_34447[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (17))){
var state_34332__$1 = state_34332;
var statearr_34383_34448 = state_34332__$1;
(statearr_34383_34448[(2)] = null);

(statearr_34383_34448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (3))){
var inst_34330 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34332__$1,inst_34330);
} else {
if((state_val_34333 === (12))){
var inst_34259 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
var statearr_34384_34449 = state_34332__$1;
(statearr_34384_34449[(2)] = inst_34259);

(statearr_34384_34449[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (2))){
var state_34332__$1 = state_34332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34332__$1,(4),ch);
} else {
if((state_val_34333 === (23))){
var state_34332__$1 = state_34332;
var statearr_34385_34450 = state_34332__$1;
(statearr_34385_34450[(2)] = null);

(statearr_34385_34450[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (35))){
var inst_34314 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
var statearr_34386_34451 = state_34332__$1;
(statearr_34386_34451[(2)] = inst_34314);

(statearr_34386_34451[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (19))){
var inst_34231 = (state_34332[(7)]);
var inst_34235 = cljs.core.chunk_first.call(null,inst_34231);
var inst_34236 = cljs.core.chunk_rest.call(null,inst_34231);
var inst_34237 = cljs.core.count.call(null,inst_34235);
var inst_34209 = inst_34236;
var inst_34210 = inst_34235;
var inst_34211 = inst_34237;
var inst_34212 = (0);
var state_34332__$1 = (function (){var statearr_34387 = state_34332;
(statearr_34387[(13)] = inst_34210);

(statearr_34387[(14)] = inst_34211);

(statearr_34387[(16)] = inst_34212);

(statearr_34387[(17)] = inst_34209);

return statearr_34387;
})();
var statearr_34388_34452 = state_34332__$1;
(statearr_34388_34452[(2)] = null);

(statearr_34388_34452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (11))){
var inst_34231 = (state_34332[(7)]);
var inst_34209 = (state_34332[(17)]);
var inst_34231__$1 = cljs.core.seq.call(null,inst_34209);
var state_34332__$1 = (function (){var statearr_34389 = state_34332;
(statearr_34389[(7)] = inst_34231__$1);

return statearr_34389;
})();
if(inst_34231__$1){
var statearr_34390_34453 = state_34332__$1;
(statearr_34390_34453[(1)] = (16));

} else {
var statearr_34391_34454 = state_34332__$1;
(statearr_34391_34454[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (9))){
var inst_34261 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
var statearr_34392_34455 = state_34332__$1;
(statearr_34392_34455[(2)] = inst_34261);

(statearr_34392_34455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (5))){
var inst_34207 = cljs.core.deref.call(null,cs);
var inst_34208 = cljs.core.seq.call(null,inst_34207);
var inst_34209 = inst_34208;
var inst_34210 = null;
var inst_34211 = (0);
var inst_34212 = (0);
var state_34332__$1 = (function (){var statearr_34393 = state_34332;
(statearr_34393[(13)] = inst_34210);

(statearr_34393[(14)] = inst_34211);

(statearr_34393[(16)] = inst_34212);

(statearr_34393[(17)] = inst_34209);

return statearr_34393;
})();
var statearr_34394_34456 = state_34332__$1;
(statearr_34394_34456[(2)] = null);

(statearr_34394_34456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (14))){
var state_34332__$1 = state_34332;
var statearr_34395_34457 = state_34332__$1;
(statearr_34395_34457[(2)] = null);

(statearr_34395_34457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (45))){
var inst_34322 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
var statearr_34396_34458 = state_34332__$1;
(statearr_34396_34458[(2)] = inst_34322);

(statearr_34396_34458[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (26))){
var inst_34264 = (state_34332[(29)]);
var inst_34318 = (state_34332[(2)]);
var inst_34319 = cljs.core.seq.call(null,inst_34264);
var state_34332__$1 = (function (){var statearr_34397 = state_34332;
(statearr_34397[(31)] = inst_34318);

return statearr_34397;
})();
if(inst_34319){
var statearr_34398_34459 = state_34332__$1;
(statearr_34398_34459[(1)] = (42));

} else {
var statearr_34399_34460 = state_34332__$1;
(statearr_34399_34460[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (16))){
var inst_34231 = (state_34332[(7)]);
var inst_34233 = cljs.core.chunked_seq_QMARK_.call(null,inst_34231);
var state_34332__$1 = state_34332;
if(inst_34233){
var statearr_34400_34461 = state_34332__$1;
(statearr_34400_34461[(1)] = (19));

} else {
var statearr_34401_34462 = state_34332__$1;
(statearr_34401_34462[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (38))){
var inst_34311 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
var statearr_34402_34463 = state_34332__$1;
(statearr_34402_34463[(2)] = inst_34311);

(statearr_34402_34463[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (30))){
var state_34332__$1 = state_34332;
var statearr_34403_34464 = state_34332__$1;
(statearr_34403_34464[(2)] = null);

(statearr_34403_34464[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (10))){
var inst_34210 = (state_34332[(13)]);
var inst_34212 = (state_34332[(16)]);
var inst_34220 = cljs.core._nth.call(null,inst_34210,inst_34212);
var inst_34221 = cljs.core.nth.call(null,inst_34220,(0),null);
var inst_34222 = cljs.core.nth.call(null,inst_34220,(1),null);
var state_34332__$1 = (function (){var statearr_34404 = state_34332;
(statearr_34404[(26)] = inst_34221);

return statearr_34404;
})();
if(cljs.core.truth_(inst_34222)){
var statearr_34405_34465 = state_34332__$1;
(statearr_34405_34465[(1)] = (13));

} else {
var statearr_34406_34466 = state_34332__$1;
(statearr_34406_34466[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (18))){
var inst_34257 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
var statearr_34407_34467 = state_34332__$1;
(statearr_34407_34467[(2)] = inst_34257);

(statearr_34407_34467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (42))){
var state_34332__$1 = state_34332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34332__$1,(45),dchan);
} else {
if((state_val_34333 === (37))){
var inst_34200 = (state_34332[(10)]);
var inst_34291 = (state_34332[(25)]);
var inst_34300 = (state_34332[(23)]);
var inst_34300__$1 = cljs.core.first.call(null,inst_34291);
var inst_34301 = cljs.core.async.put_BANG_.call(null,inst_34300__$1,inst_34200,done);
var state_34332__$1 = (function (){var statearr_34408 = state_34332;
(statearr_34408[(23)] = inst_34300__$1);

return statearr_34408;
})();
if(cljs.core.truth_(inst_34301)){
var statearr_34409_34468 = state_34332__$1;
(statearr_34409_34468[(1)] = (39));

} else {
var statearr_34410_34469 = state_34332__$1;
(statearr_34410_34469[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (8))){
var inst_34211 = (state_34332[(14)]);
var inst_34212 = (state_34332[(16)]);
var inst_34214 = (inst_34212 < inst_34211);
var inst_34215 = inst_34214;
var state_34332__$1 = state_34332;
if(cljs.core.truth_(inst_34215)){
var statearr_34411_34470 = state_34332__$1;
(statearr_34411_34470[(1)] = (10));

} else {
var statearr_34412_34471 = state_34332__$1;
(statearr_34412_34471[(1)] = (11));

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
});})(c__33612__auto___34417,cs,m,dchan,dctr,done))
;
return ((function (switch__33524__auto__,c__33612__auto___34417,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33525__auto__ = null;
var cljs$core$async$mult_$_state_machine__33525__auto____0 = (function (){
var statearr_34413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34413[(0)] = cljs$core$async$mult_$_state_machine__33525__auto__);

(statearr_34413[(1)] = (1));

return statearr_34413;
});
var cljs$core$async$mult_$_state_machine__33525__auto____1 = (function (state_34332){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_34332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e34414){if((e34414 instanceof Object)){
var ex__33528__auto__ = e34414;
var statearr_34415_34472 = state_34332;
(statearr_34415_34472[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34473 = state_34332;
state_34332 = G__34473;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33525__auto__ = function(state_34332){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33525__auto____1.call(this,state_34332);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33525__auto____0;
cljs$core$async$mult_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33525__auto____1;
return cljs$core$async$mult_$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___34417,cs,m,dchan,dctr,done))
})();
var state__33614__auto__ = (function (){var statearr_34416 = f__33613__auto__.call(null);
(statearr_34416[(6)] = c__33612__auto___34417);

return statearr_34416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___34417,cs,m,dchan,dctr,done))
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
var G__34475 = arguments.length;
switch (G__34475) {
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
var len__29105__auto___34487 = arguments.length;
var i__29106__auto___34488 = (0);
while(true){
if((i__29106__auto___34488 < len__29105__auto___34487)){
args__29112__auto__.push((arguments[i__29106__auto___34488]));

var G__34489 = (i__29106__auto___34488 + (1));
i__29106__auto___34488 = G__34489;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34481){
var map__34482 = p__34481;
var map__34482__$1 = ((((!((map__34482 == null)))?((((map__34482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34482):map__34482);
var opts = map__34482__$1;
var statearr_34484_34490 = state;
(statearr_34484_34490[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__34482,map__34482__$1,opts){
return (function (val){
var statearr_34485_34491 = state;
(statearr_34485_34491[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34482,map__34482__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_34486_34492 = state;
(statearr_34486_34492[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34477){
var G__34478 = cljs.core.first.call(null,seq34477);
var seq34477__$1 = cljs.core.next.call(null,seq34477);
var G__34479 = cljs.core.first.call(null,seq34477__$1);
var seq34477__$2 = cljs.core.next.call(null,seq34477__$1);
var G__34480 = cljs.core.first.call(null,seq34477__$2);
var seq34477__$3 = cljs.core.next.call(null,seq34477__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34478,G__34479,G__34480,seq34477__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34493 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34494){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34494 = meta34494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34495,meta34494__$1){
var self__ = this;
var _34495__$1 = this;
return (new cljs.core.async.t_cljs$core$async34493(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34494__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34495){
var self__ = this;
var _34495__$1 = this;
return self__.meta34494;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34493.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34494","meta34494",-883342596,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34493";

cljs.core.async.t_cljs$core$async34493.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async34493");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34493 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34493(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34494){
return (new cljs.core.async.t_cljs$core$async34493(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34494));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34493(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33612__auto___34657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___34657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___34657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34597){
var state_val_34598 = (state_34597[(1)]);
if((state_val_34598 === (7))){
var inst_34512 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
var statearr_34599_34658 = state_34597__$1;
(statearr_34599_34658[(2)] = inst_34512);

(statearr_34599_34658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (20))){
var inst_34524 = (state_34597[(7)]);
var state_34597__$1 = state_34597;
var statearr_34600_34659 = state_34597__$1;
(statearr_34600_34659[(2)] = inst_34524);

(statearr_34600_34659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (27))){
var state_34597__$1 = state_34597;
var statearr_34601_34660 = state_34597__$1;
(statearr_34601_34660[(2)] = null);

(statearr_34601_34660[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (1))){
var inst_34499 = (state_34597[(8)]);
var inst_34499__$1 = calc_state.call(null);
var inst_34501 = (inst_34499__$1 == null);
var inst_34502 = cljs.core.not.call(null,inst_34501);
var state_34597__$1 = (function (){var statearr_34602 = state_34597;
(statearr_34602[(8)] = inst_34499__$1);

return statearr_34602;
})();
if(inst_34502){
var statearr_34603_34661 = state_34597__$1;
(statearr_34603_34661[(1)] = (2));

} else {
var statearr_34604_34662 = state_34597__$1;
(statearr_34604_34662[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (24))){
var inst_34571 = (state_34597[(9)]);
var inst_34557 = (state_34597[(10)]);
var inst_34548 = (state_34597[(11)]);
var inst_34571__$1 = inst_34548.call(null,inst_34557);
var state_34597__$1 = (function (){var statearr_34605 = state_34597;
(statearr_34605[(9)] = inst_34571__$1);

return statearr_34605;
})();
if(cljs.core.truth_(inst_34571__$1)){
var statearr_34606_34663 = state_34597__$1;
(statearr_34606_34663[(1)] = (29));

} else {
var statearr_34607_34664 = state_34597__$1;
(statearr_34607_34664[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (4))){
var inst_34515 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
if(cljs.core.truth_(inst_34515)){
var statearr_34608_34665 = state_34597__$1;
(statearr_34608_34665[(1)] = (8));

} else {
var statearr_34609_34666 = state_34597__$1;
(statearr_34609_34666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (15))){
var inst_34542 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
if(cljs.core.truth_(inst_34542)){
var statearr_34610_34667 = state_34597__$1;
(statearr_34610_34667[(1)] = (19));

} else {
var statearr_34611_34668 = state_34597__$1;
(statearr_34611_34668[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (21))){
var inst_34547 = (state_34597[(12)]);
var inst_34547__$1 = (state_34597[(2)]);
var inst_34548 = cljs.core.get.call(null,inst_34547__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34549 = cljs.core.get.call(null,inst_34547__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34550 = cljs.core.get.call(null,inst_34547__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34597__$1 = (function (){var statearr_34612 = state_34597;
(statearr_34612[(13)] = inst_34549);

(statearr_34612[(12)] = inst_34547__$1);

(statearr_34612[(11)] = inst_34548);

return statearr_34612;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34597__$1,(22),inst_34550);
} else {
if((state_val_34598 === (31))){
var inst_34579 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
if(cljs.core.truth_(inst_34579)){
var statearr_34613_34669 = state_34597__$1;
(statearr_34613_34669[(1)] = (32));

} else {
var statearr_34614_34670 = state_34597__$1;
(statearr_34614_34670[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (32))){
var inst_34556 = (state_34597[(14)]);
var state_34597__$1 = state_34597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34597__$1,(35),out,inst_34556);
} else {
if((state_val_34598 === (33))){
var inst_34547 = (state_34597[(12)]);
var inst_34524 = inst_34547;
var state_34597__$1 = (function (){var statearr_34615 = state_34597;
(statearr_34615[(7)] = inst_34524);

return statearr_34615;
})();
var statearr_34616_34671 = state_34597__$1;
(statearr_34616_34671[(2)] = null);

(statearr_34616_34671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (13))){
var inst_34524 = (state_34597[(7)]);
var inst_34531 = inst_34524.cljs$lang$protocol_mask$partition0$;
var inst_34532 = (inst_34531 & (64));
var inst_34533 = inst_34524.cljs$core$ISeq$;
var inst_34534 = (cljs.core.PROTOCOL_SENTINEL === inst_34533);
var inst_34535 = (inst_34532) || (inst_34534);
var state_34597__$1 = state_34597;
if(cljs.core.truth_(inst_34535)){
var statearr_34617_34672 = state_34597__$1;
(statearr_34617_34672[(1)] = (16));

} else {
var statearr_34618_34673 = state_34597__$1;
(statearr_34618_34673[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (22))){
var inst_34556 = (state_34597[(14)]);
var inst_34557 = (state_34597[(10)]);
var inst_34555 = (state_34597[(2)]);
var inst_34556__$1 = cljs.core.nth.call(null,inst_34555,(0),null);
var inst_34557__$1 = cljs.core.nth.call(null,inst_34555,(1),null);
var inst_34558 = (inst_34556__$1 == null);
var inst_34559 = cljs.core._EQ_.call(null,inst_34557__$1,change);
var inst_34560 = (inst_34558) || (inst_34559);
var state_34597__$1 = (function (){var statearr_34619 = state_34597;
(statearr_34619[(14)] = inst_34556__$1);

(statearr_34619[(10)] = inst_34557__$1);

return statearr_34619;
})();
if(cljs.core.truth_(inst_34560)){
var statearr_34620_34674 = state_34597__$1;
(statearr_34620_34674[(1)] = (23));

} else {
var statearr_34621_34675 = state_34597__$1;
(statearr_34621_34675[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (36))){
var inst_34547 = (state_34597[(12)]);
var inst_34524 = inst_34547;
var state_34597__$1 = (function (){var statearr_34622 = state_34597;
(statearr_34622[(7)] = inst_34524);

return statearr_34622;
})();
var statearr_34623_34676 = state_34597__$1;
(statearr_34623_34676[(2)] = null);

(statearr_34623_34676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (29))){
var inst_34571 = (state_34597[(9)]);
var state_34597__$1 = state_34597;
var statearr_34624_34677 = state_34597__$1;
(statearr_34624_34677[(2)] = inst_34571);

(statearr_34624_34677[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (6))){
var state_34597__$1 = state_34597;
var statearr_34625_34678 = state_34597__$1;
(statearr_34625_34678[(2)] = false);

(statearr_34625_34678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (28))){
var inst_34567 = (state_34597[(2)]);
var inst_34568 = calc_state.call(null);
var inst_34524 = inst_34568;
var state_34597__$1 = (function (){var statearr_34626 = state_34597;
(statearr_34626[(15)] = inst_34567);

(statearr_34626[(7)] = inst_34524);

return statearr_34626;
})();
var statearr_34627_34679 = state_34597__$1;
(statearr_34627_34679[(2)] = null);

(statearr_34627_34679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (25))){
var inst_34593 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
var statearr_34628_34680 = state_34597__$1;
(statearr_34628_34680[(2)] = inst_34593);

(statearr_34628_34680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (34))){
var inst_34591 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
var statearr_34629_34681 = state_34597__$1;
(statearr_34629_34681[(2)] = inst_34591);

(statearr_34629_34681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (17))){
var state_34597__$1 = state_34597;
var statearr_34630_34682 = state_34597__$1;
(statearr_34630_34682[(2)] = false);

(statearr_34630_34682[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (3))){
var state_34597__$1 = state_34597;
var statearr_34631_34683 = state_34597__$1;
(statearr_34631_34683[(2)] = false);

(statearr_34631_34683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (12))){
var inst_34595 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34597__$1,inst_34595);
} else {
if((state_val_34598 === (2))){
var inst_34499 = (state_34597[(8)]);
var inst_34504 = inst_34499.cljs$lang$protocol_mask$partition0$;
var inst_34505 = (inst_34504 & (64));
var inst_34506 = inst_34499.cljs$core$ISeq$;
var inst_34507 = (cljs.core.PROTOCOL_SENTINEL === inst_34506);
var inst_34508 = (inst_34505) || (inst_34507);
var state_34597__$1 = state_34597;
if(cljs.core.truth_(inst_34508)){
var statearr_34632_34684 = state_34597__$1;
(statearr_34632_34684[(1)] = (5));

} else {
var statearr_34633_34685 = state_34597__$1;
(statearr_34633_34685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (23))){
var inst_34556 = (state_34597[(14)]);
var inst_34562 = (inst_34556 == null);
var state_34597__$1 = state_34597;
if(cljs.core.truth_(inst_34562)){
var statearr_34634_34686 = state_34597__$1;
(statearr_34634_34686[(1)] = (26));

} else {
var statearr_34635_34687 = state_34597__$1;
(statearr_34635_34687[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (35))){
var inst_34582 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
if(cljs.core.truth_(inst_34582)){
var statearr_34636_34688 = state_34597__$1;
(statearr_34636_34688[(1)] = (36));

} else {
var statearr_34637_34689 = state_34597__$1;
(statearr_34637_34689[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (19))){
var inst_34524 = (state_34597[(7)]);
var inst_34544 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34524);
var state_34597__$1 = state_34597;
var statearr_34638_34690 = state_34597__$1;
(statearr_34638_34690[(2)] = inst_34544);

(statearr_34638_34690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (11))){
var inst_34524 = (state_34597[(7)]);
var inst_34528 = (inst_34524 == null);
var inst_34529 = cljs.core.not.call(null,inst_34528);
var state_34597__$1 = state_34597;
if(inst_34529){
var statearr_34639_34691 = state_34597__$1;
(statearr_34639_34691[(1)] = (13));

} else {
var statearr_34640_34692 = state_34597__$1;
(statearr_34640_34692[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (9))){
var inst_34499 = (state_34597[(8)]);
var state_34597__$1 = state_34597;
var statearr_34641_34693 = state_34597__$1;
(statearr_34641_34693[(2)] = inst_34499);

(statearr_34641_34693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (5))){
var state_34597__$1 = state_34597;
var statearr_34642_34694 = state_34597__$1;
(statearr_34642_34694[(2)] = true);

(statearr_34642_34694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (14))){
var state_34597__$1 = state_34597;
var statearr_34643_34695 = state_34597__$1;
(statearr_34643_34695[(2)] = false);

(statearr_34643_34695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (26))){
var inst_34557 = (state_34597[(10)]);
var inst_34564 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34557);
var state_34597__$1 = state_34597;
var statearr_34644_34696 = state_34597__$1;
(statearr_34644_34696[(2)] = inst_34564);

(statearr_34644_34696[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (16))){
var state_34597__$1 = state_34597;
var statearr_34645_34697 = state_34597__$1;
(statearr_34645_34697[(2)] = true);

(statearr_34645_34697[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (38))){
var inst_34587 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
var statearr_34646_34698 = state_34597__$1;
(statearr_34646_34698[(2)] = inst_34587);

(statearr_34646_34698[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (30))){
var inst_34557 = (state_34597[(10)]);
var inst_34549 = (state_34597[(13)]);
var inst_34548 = (state_34597[(11)]);
var inst_34574 = cljs.core.empty_QMARK_.call(null,inst_34548);
var inst_34575 = inst_34549.call(null,inst_34557);
var inst_34576 = cljs.core.not.call(null,inst_34575);
var inst_34577 = (inst_34574) && (inst_34576);
var state_34597__$1 = state_34597;
var statearr_34647_34699 = state_34597__$1;
(statearr_34647_34699[(2)] = inst_34577);

(statearr_34647_34699[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (10))){
var inst_34499 = (state_34597[(8)]);
var inst_34520 = (state_34597[(2)]);
var inst_34521 = cljs.core.get.call(null,inst_34520,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34522 = cljs.core.get.call(null,inst_34520,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34523 = cljs.core.get.call(null,inst_34520,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34524 = inst_34499;
var state_34597__$1 = (function (){var statearr_34648 = state_34597;
(statearr_34648[(7)] = inst_34524);

(statearr_34648[(16)] = inst_34521);

(statearr_34648[(17)] = inst_34523);

(statearr_34648[(18)] = inst_34522);

return statearr_34648;
})();
var statearr_34649_34700 = state_34597__$1;
(statearr_34649_34700[(2)] = null);

(statearr_34649_34700[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (18))){
var inst_34539 = (state_34597[(2)]);
var state_34597__$1 = state_34597;
var statearr_34650_34701 = state_34597__$1;
(statearr_34650_34701[(2)] = inst_34539);

(statearr_34650_34701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (37))){
var state_34597__$1 = state_34597;
var statearr_34651_34702 = state_34597__$1;
(statearr_34651_34702[(2)] = null);

(statearr_34651_34702[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34598 === (8))){
var inst_34499 = (state_34597[(8)]);
var inst_34517 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34499);
var state_34597__$1 = state_34597;
var statearr_34652_34703 = state_34597__$1;
(statearr_34652_34703[(2)] = inst_34517);

(statearr_34652_34703[(1)] = (10));


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
});})(c__33612__auto___34657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33524__auto__,c__33612__auto___34657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33525__auto__ = null;
var cljs$core$async$mix_$_state_machine__33525__auto____0 = (function (){
var statearr_34653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34653[(0)] = cljs$core$async$mix_$_state_machine__33525__auto__);

(statearr_34653[(1)] = (1));

return statearr_34653;
});
var cljs$core$async$mix_$_state_machine__33525__auto____1 = (function (state_34597){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_34597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e34654){if((e34654 instanceof Object)){
var ex__33528__auto__ = e34654;
var statearr_34655_34704 = state_34597;
(statearr_34655_34704[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34705 = state_34597;
state_34597 = G__34705;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33525__auto__ = function(state_34597){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33525__auto____1.call(this,state_34597);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33525__auto____0;
cljs$core$async$mix_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33525__auto____1;
return cljs$core$async$mix_$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___34657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33614__auto__ = (function (){var statearr_34656 = f__33613__auto__.call(null);
(statearr_34656[(6)] = c__33612__auto___34657);

return statearr_34656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___34657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__34707 = arguments.length;
switch (G__34707) {
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
var G__34711 = arguments.length;
switch (G__34711) {
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
return (function (p1__34709_SHARP_){
if(cljs.core.truth_(p1__34709_SHARP_.call(null,topic))){
return p1__34709_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34709_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27936__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34712 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34712 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34713){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34713 = meta34713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34714,meta34713__$1){
var self__ = this;
var _34714__$1 = this;
return (new cljs.core.async.t_cljs$core$async34712(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34713__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34714){
var self__ = this;
var _34714__$1 = this;
return self__.meta34713;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34713","meta34713",-159488635,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34712";

cljs.core.async.t_cljs$core$async34712.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async34712");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34712 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34712(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34713){
return (new cljs.core.async.t_cljs$core$async34712(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34713));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34712(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33612__auto___34832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___34832,mults,ensure_mult,p){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___34832,mults,ensure_mult,p){
return (function (state_34786){
var state_val_34787 = (state_34786[(1)]);
if((state_val_34787 === (7))){
var inst_34782 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34788_34833 = state_34786__$1;
(statearr_34788_34833[(2)] = inst_34782);

(statearr_34788_34833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (20))){
var state_34786__$1 = state_34786;
var statearr_34789_34834 = state_34786__$1;
(statearr_34789_34834[(2)] = null);

(statearr_34789_34834[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (1))){
var state_34786__$1 = state_34786;
var statearr_34790_34835 = state_34786__$1;
(statearr_34790_34835[(2)] = null);

(statearr_34790_34835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (24))){
var inst_34765 = (state_34786[(7)]);
var inst_34774 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34765);
var state_34786__$1 = state_34786;
var statearr_34791_34836 = state_34786__$1;
(statearr_34791_34836[(2)] = inst_34774);

(statearr_34791_34836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (4))){
var inst_34717 = (state_34786[(8)]);
var inst_34717__$1 = (state_34786[(2)]);
var inst_34718 = (inst_34717__$1 == null);
var state_34786__$1 = (function (){var statearr_34792 = state_34786;
(statearr_34792[(8)] = inst_34717__$1);

return statearr_34792;
})();
if(cljs.core.truth_(inst_34718)){
var statearr_34793_34837 = state_34786__$1;
(statearr_34793_34837[(1)] = (5));

} else {
var statearr_34794_34838 = state_34786__$1;
(statearr_34794_34838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (15))){
var inst_34759 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34795_34839 = state_34786__$1;
(statearr_34795_34839[(2)] = inst_34759);

(statearr_34795_34839[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (21))){
var inst_34779 = (state_34786[(2)]);
var state_34786__$1 = (function (){var statearr_34796 = state_34786;
(statearr_34796[(9)] = inst_34779);

return statearr_34796;
})();
var statearr_34797_34840 = state_34786__$1;
(statearr_34797_34840[(2)] = null);

(statearr_34797_34840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (13))){
var inst_34741 = (state_34786[(10)]);
var inst_34743 = cljs.core.chunked_seq_QMARK_.call(null,inst_34741);
var state_34786__$1 = state_34786;
if(inst_34743){
var statearr_34798_34841 = state_34786__$1;
(statearr_34798_34841[(1)] = (16));

} else {
var statearr_34799_34842 = state_34786__$1;
(statearr_34799_34842[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (22))){
var inst_34771 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
if(cljs.core.truth_(inst_34771)){
var statearr_34800_34843 = state_34786__$1;
(statearr_34800_34843[(1)] = (23));

} else {
var statearr_34801_34844 = state_34786__$1;
(statearr_34801_34844[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (6))){
var inst_34767 = (state_34786[(11)]);
var inst_34717 = (state_34786[(8)]);
var inst_34765 = (state_34786[(7)]);
var inst_34765__$1 = topic_fn.call(null,inst_34717);
var inst_34766 = cljs.core.deref.call(null,mults);
var inst_34767__$1 = cljs.core.get.call(null,inst_34766,inst_34765__$1);
var state_34786__$1 = (function (){var statearr_34802 = state_34786;
(statearr_34802[(11)] = inst_34767__$1);

(statearr_34802[(7)] = inst_34765__$1);

return statearr_34802;
})();
if(cljs.core.truth_(inst_34767__$1)){
var statearr_34803_34845 = state_34786__$1;
(statearr_34803_34845[(1)] = (19));

} else {
var statearr_34804_34846 = state_34786__$1;
(statearr_34804_34846[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (25))){
var inst_34776 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34805_34847 = state_34786__$1;
(statearr_34805_34847[(2)] = inst_34776);

(statearr_34805_34847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (17))){
var inst_34741 = (state_34786[(10)]);
var inst_34750 = cljs.core.first.call(null,inst_34741);
var inst_34751 = cljs.core.async.muxch_STAR_.call(null,inst_34750);
var inst_34752 = cljs.core.async.close_BANG_.call(null,inst_34751);
var inst_34753 = cljs.core.next.call(null,inst_34741);
var inst_34727 = inst_34753;
var inst_34728 = null;
var inst_34729 = (0);
var inst_34730 = (0);
var state_34786__$1 = (function (){var statearr_34806 = state_34786;
(statearr_34806[(12)] = inst_34727);

(statearr_34806[(13)] = inst_34730);

(statearr_34806[(14)] = inst_34728);

(statearr_34806[(15)] = inst_34752);

(statearr_34806[(16)] = inst_34729);

return statearr_34806;
})();
var statearr_34807_34848 = state_34786__$1;
(statearr_34807_34848[(2)] = null);

(statearr_34807_34848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (3))){
var inst_34784 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34786__$1,inst_34784);
} else {
if((state_val_34787 === (12))){
var inst_34761 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34808_34849 = state_34786__$1;
(statearr_34808_34849[(2)] = inst_34761);

(statearr_34808_34849[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (2))){
var state_34786__$1 = state_34786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34786__$1,(4),ch);
} else {
if((state_val_34787 === (23))){
var state_34786__$1 = state_34786;
var statearr_34809_34850 = state_34786__$1;
(statearr_34809_34850[(2)] = null);

(statearr_34809_34850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (19))){
var inst_34767 = (state_34786[(11)]);
var inst_34717 = (state_34786[(8)]);
var inst_34769 = cljs.core.async.muxch_STAR_.call(null,inst_34767);
var state_34786__$1 = state_34786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34786__$1,(22),inst_34769,inst_34717);
} else {
if((state_val_34787 === (11))){
var inst_34727 = (state_34786[(12)]);
var inst_34741 = (state_34786[(10)]);
var inst_34741__$1 = cljs.core.seq.call(null,inst_34727);
var state_34786__$1 = (function (){var statearr_34810 = state_34786;
(statearr_34810[(10)] = inst_34741__$1);

return statearr_34810;
})();
if(inst_34741__$1){
var statearr_34811_34851 = state_34786__$1;
(statearr_34811_34851[(1)] = (13));

} else {
var statearr_34812_34852 = state_34786__$1;
(statearr_34812_34852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (9))){
var inst_34763 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34813_34853 = state_34786__$1;
(statearr_34813_34853[(2)] = inst_34763);

(statearr_34813_34853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (5))){
var inst_34724 = cljs.core.deref.call(null,mults);
var inst_34725 = cljs.core.vals.call(null,inst_34724);
var inst_34726 = cljs.core.seq.call(null,inst_34725);
var inst_34727 = inst_34726;
var inst_34728 = null;
var inst_34729 = (0);
var inst_34730 = (0);
var state_34786__$1 = (function (){var statearr_34814 = state_34786;
(statearr_34814[(12)] = inst_34727);

(statearr_34814[(13)] = inst_34730);

(statearr_34814[(14)] = inst_34728);

(statearr_34814[(16)] = inst_34729);

return statearr_34814;
})();
var statearr_34815_34854 = state_34786__$1;
(statearr_34815_34854[(2)] = null);

(statearr_34815_34854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (14))){
var state_34786__$1 = state_34786;
var statearr_34819_34855 = state_34786__$1;
(statearr_34819_34855[(2)] = null);

(statearr_34819_34855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (16))){
var inst_34741 = (state_34786[(10)]);
var inst_34745 = cljs.core.chunk_first.call(null,inst_34741);
var inst_34746 = cljs.core.chunk_rest.call(null,inst_34741);
var inst_34747 = cljs.core.count.call(null,inst_34745);
var inst_34727 = inst_34746;
var inst_34728 = inst_34745;
var inst_34729 = inst_34747;
var inst_34730 = (0);
var state_34786__$1 = (function (){var statearr_34820 = state_34786;
(statearr_34820[(12)] = inst_34727);

(statearr_34820[(13)] = inst_34730);

(statearr_34820[(14)] = inst_34728);

(statearr_34820[(16)] = inst_34729);

return statearr_34820;
})();
var statearr_34821_34856 = state_34786__$1;
(statearr_34821_34856[(2)] = null);

(statearr_34821_34856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (10))){
var inst_34727 = (state_34786[(12)]);
var inst_34730 = (state_34786[(13)]);
var inst_34728 = (state_34786[(14)]);
var inst_34729 = (state_34786[(16)]);
var inst_34735 = cljs.core._nth.call(null,inst_34728,inst_34730);
var inst_34736 = cljs.core.async.muxch_STAR_.call(null,inst_34735);
var inst_34737 = cljs.core.async.close_BANG_.call(null,inst_34736);
var inst_34738 = (inst_34730 + (1));
var tmp34816 = inst_34727;
var tmp34817 = inst_34728;
var tmp34818 = inst_34729;
var inst_34727__$1 = tmp34816;
var inst_34728__$1 = tmp34817;
var inst_34729__$1 = tmp34818;
var inst_34730__$1 = inst_34738;
var state_34786__$1 = (function (){var statearr_34822 = state_34786;
(statearr_34822[(12)] = inst_34727__$1);

(statearr_34822[(13)] = inst_34730__$1);

(statearr_34822[(17)] = inst_34737);

(statearr_34822[(14)] = inst_34728__$1);

(statearr_34822[(16)] = inst_34729__$1);

return statearr_34822;
})();
var statearr_34823_34857 = state_34786__$1;
(statearr_34823_34857[(2)] = null);

(statearr_34823_34857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (18))){
var inst_34756 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34824_34858 = state_34786__$1;
(statearr_34824_34858[(2)] = inst_34756);

(statearr_34824_34858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (8))){
var inst_34730 = (state_34786[(13)]);
var inst_34729 = (state_34786[(16)]);
var inst_34732 = (inst_34730 < inst_34729);
var inst_34733 = inst_34732;
var state_34786__$1 = state_34786;
if(cljs.core.truth_(inst_34733)){
var statearr_34825_34859 = state_34786__$1;
(statearr_34825_34859[(1)] = (10));

} else {
var statearr_34826_34860 = state_34786__$1;
(statearr_34826_34860[(1)] = (11));

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
});})(c__33612__auto___34832,mults,ensure_mult,p))
;
return ((function (switch__33524__auto__,c__33612__auto___34832,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33525__auto__ = null;
var cljs$core$async$state_machine__33525__auto____0 = (function (){
var statearr_34827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34827[(0)] = cljs$core$async$state_machine__33525__auto__);

(statearr_34827[(1)] = (1));

return statearr_34827;
});
var cljs$core$async$state_machine__33525__auto____1 = (function (state_34786){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_34786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e34828){if((e34828 instanceof Object)){
var ex__33528__auto__ = e34828;
var statearr_34829_34861 = state_34786;
(statearr_34829_34861[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34862 = state_34786;
state_34786 = G__34862;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$state_machine__33525__auto__ = function(state_34786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33525__auto____1.call(this,state_34786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33525__auto____0;
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33525__auto____1;
return cljs$core$async$state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___34832,mults,ensure_mult,p))
})();
var state__33614__auto__ = (function (){var statearr_34830 = f__33613__auto__.call(null);
(statearr_34830[(6)] = c__33612__auto___34832);

return statearr_34830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___34832,mults,ensure_mult,p))
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
var G__34864 = arguments.length;
switch (G__34864) {
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
var G__34867 = arguments.length;
switch (G__34867) {
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
var G__34870 = arguments.length;
switch (G__34870) {
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
var c__33612__auto___34937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___34937,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___34937,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34909){
var state_val_34910 = (state_34909[(1)]);
if((state_val_34910 === (7))){
var state_34909__$1 = state_34909;
var statearr_34911_34938 = state_34909__$1;
(statearr_34911_34938[(2)] = null);

(statearr_34911_34938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (1))){
var state_34909__$1 = state_34909;
var statearr_34912_34939 = state_34909__$1;
(statearr_34912_34939[(2)] = null);

(statearr_34912_34939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (4))){
var inst_34873 = (state_34909[(7)]);
var inst_34875 = (inst_34873 < cnt);
var state_34909__$1 = state_34909;
if(cljs.core.truth_(inst_34875)){
var statearr_34913_34940 = state_34909__$1;
(statearr_34913_34940[(1)] = (6));

} else {
var statearr_34914_34941 = state_34909__$1;
(statearr_34914_34941[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (15))){
var inst_34905 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
var statearr_34915_34942 = state_34909__$1;
(statearr_34915_34942[(2)] = inst_34905);

(statearr_34915_34942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (13))){
var inst_34898 = cljs.core.async.close_BANG_.call(null,out);
var state_34909__$1 = state_34909;
var statearr_34916_34943 = state_34909__$1;
(statearr_34916_34943[(2)] = inst_34898);

(statearr_34916_34943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (6))){
var state_34909__$1 = state_34909;
var statearr_34917_34944 = state_34909__$1;
(statearr_34917_34944[(2)] = null);

(statearr_34917_34944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (3))){
var inst_34907 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34909__$1,inst_34907);
} else {
if((state_val_34910 === (12))){
var inst_34895 = (state_34909[(8)]);
var inst_34895__$1 = (state_34909[(2)]);
var inst_34896 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34895__$1);
var state_34909__$1 = (function (){var statearr_34918 = state_34909;
(statearr_34918[(8)] = inst_34895__$1);

return statearr_34918;
})();
if(cljs.core.truth_(inst_34896)){
var statearr_34919_34945 = state_34909__$1;
(statearr_34919_34945[(1)] = (13));

} else {
var statearr_34920_34946 = state_34909__$1;
(statearr_34920_34946[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (2))){
var inst_34872 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34873 = (0);
var state_34909__$1 = (function (){var statearr_34921 = state_34909;
(statearr_34921[(7)] = inst_34873);

(statearr_34921[(9)] = inst_34872);

return statearr_34921;
})();
var statearr_34922_34947 = state_34909__$1;
(statearr_34922_34947[(2)] = null);

(statearr_34922_34947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (11))){
var inst_34873 = (state_34909[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34909,(10),Object,null,(9));
var inst_34882 = chs__$1.call(null,inst_34873);
var inst_34883 = done.call(null,inst_34873);
var inst_34884 = cljs.core.async.take_BANG_.call(null,inst_34882,inst_34883);
var state_34909__$1 = state_34909;
var statearr_34923_34948 = state_34909__$1;
(statearr_34923_34948[(2)] = inst_34884);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34909__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (9))){
var inst_34873 = (state_34909[(7)]);
var inst_34886 = (state_34909[(2)]);
var inst_34887 = (inst_34873 + (1));
var inst_34873__$1 = inst_34887;
var state_34909__$1 = (function (){var statearr_34924 = state_34909;
(statearr_34924[(7)] = inst_34873__$1);

(statearr_34924[(10)] = inst_34886);

return statearr_34924;
})();
var statearr_34925_34949 = state_34909__$1;
(statearr_34925_34949[(2)] = null);

(statearr_34925_34949[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (5))){
var inst_34893 = (state_34909[(2)]);
var state_34909__$1 = (function (){var statearr_34926 = state_34909;
(statearr_34926[(11)] = inst_34893);

return statearr_34926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34909__$1,(12),dchan);
} else {
if((state_val_34910 === (14))){
var inst_34895 = (state_34909[(8)]);
var inst_34900 = cljs.core.apply.call(null,f,inst_34895);
var state_34909__$1 = state_34909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34909__$1,(16),out,inst_34900);
} else {
if((state_val_34910 === (16))){
var inst_34902 = (state_34909[(2)]);
var state_34909__$1 = (function (){var statearr_34927 = state_34909;
(statearr_34927[(12)] = inst_34902);

return statearr_34927;
})();
var statearr_34928_34950 = state_34909__$1;
(statearr_34928_34950[(2)] = null);

(statearr_34928_34950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (10))){
var inst_34877 = (state_34909[(2)]);
var inst_34878 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34909__$1 = (function (){var statearr_34929 = state_34909;
(statearr_34929[(13)] = inst_34877);

return statearr_34929;
})();
var statearr_34930_34951 = state_34909__$1;
(statearr_34930_34951[(2)] = inst_34878);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34909__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34910 === (8))){
var inst_34891 = (state_34909[(2)]);
var state_34909__$1 = state_34909;
var statearr_34931_34952 = state_34909__$1;
(statearr_34931_34952[(2)] = inst_34891);

(statearr_34931_34952[(1)] = (5));


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
});})(c__33612__auto___34937,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33524__auto__,c__33612__auto___34937,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33525__auto__ = null;
var cljs$core$async$state_machine__33525__auto____0 = (function (){
var statearr_34932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34932[(0)] = cljs$core$async$state_machine__33525__auto__);

(statearr_34932[(1)] = (1));

return statearr_34932;
});
var cljs$core$async$state_machine__33525__auto____1 = (function (state_34909){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_34909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e34933){if((e34933 instanceof Object)){
var ex__33528__auto__ = e34933;
var statearr_34934_34953 = state_34909;
(statearr_34934_34953[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34954 = state_34909;
state_34909 = G__34954;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$state_machine__33525__auto__ = function(state_34909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33525__auto____1.call(this,state_34909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33525__auto____0;
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33525__auto____1;
return cljs$core$async$state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___34937,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33614__auto__ = (function (){var statearr_34935 = f__33613__auto__.call(null);
(statearr_34935[(6)] = c__33612__auto___34937);

return statearr_34935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___34937,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34957 = arguments.length;
switch (G__34957) {
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
var c__33612__auto___35011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___35011,out){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___35011,out){
return (function (state_34989){
var state_val_34990 = (state_34989[(1)]);
if((state_val_34990 === (7))){
var inst_34969 = (state_34989[(7)]);
var inst_34968 = (state_34989[(8)]);
var inst_34968__$1 = (state_34989[(2)]);
var inst_34969__$1 = cljs.core.nth.call(null,inst_34968__$1,(0),null);
var inst_34970 = cljs.core.nth.call(null,inst_34968__$1,(1),null);
var inst_34971 = (inst_34969__$1 == null);
var state_34989__$1 = (function (){var statearr_34991 = state_34989;
(statearr_34991[(7)] = inst_34969__$1);

(statearr_34991[(8)] = inst_34968__$1);

(statearr_34991[(9)] = inst_34970);

return statearr_34991;
})();
if(cljs.core.truth_(inst_34971)){
var statearr_34992_35012 = state_34989__$1;
(statearr_34992_35012[(1)] = (8));

} else {
var statearr_34993_35013 = state_34989__$1;
(statearr_34993_35013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (1))){
var inst_34958 = cljs.core.vec.call(null,chs);
var inst_34959 = inst_34958;
var state_34989__$1 = (function (){var statearr_34994 = state_34989;
(statearr_34994[(10)] = inst_34959);

return statearr_34994;
})();
var statearr_34995_35014 = state_34989__$1;
(statearr_34995_35014[(2)] = null);

(statearr_34995_35014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (4))){
var inst_34959 = (state_34989[(10)]);
var state_34989__$1 = state_34989;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34989__$1,(7),inst_34959);
} else {
if((state_val_34990 === (6))){
var inst_34985 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_34996_35015 = state_34989__$1;
(statearr_34996_35015[(2)] = inst_34985);

(statearr_34996_35015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (3))){
var inst_34987 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34989__$1,inst_34987);
} else {
if((state_val_34990 === (2))){
var inst_34959 = (state_34989[(10)]);
var inst_34961 = cljs.core.count.call(null,inst_34959);
var inst_34962 = (inst_34961 > (0));
var state_34989__$1 = state_34989;
if(cljs.core.truth_(inst_34962)){
var statearr_34998_35016 = state_34989__$1;
(statearr_34998_35016[(1)] = (4));

} else {
var statearr_34999_35017 = state_34989__$1;
(statearr_34999_35017[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (11))){
var inst_34959 = (state_34989[(10)]);
var inst_34978 = (state_34989[(2)]);
var tmp34997 = inst_34959;
var inst_34959__$1 = tmp34997;
var state_34989__$1 = (function (){var statearr_35000 = state_34989;
(statearr_35000[(10)] = inst_34959__$1);

(statearr_35000[(11)] = inst_34978);

return statearr_35000;
})();
var statearr_35001_35018 = state_34989__$1;
(statearr_35001_35018[(2)] = null);

(statearr_35001_35018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (9))){
var inst_34969 = (state_34989[(7)]);
var state_34989__$1 = state_34989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34989__$1,(11),out,inst_34969);
} else {
if((state_val_34990 === (5))){
var inst_34983 = cljs.core.async.close_BANG_.call(null,out);
var state_34989__$1 = state_34989;
var statearr_35002_35019 = state_34989__$1;
(statearr_35002_35019[(2)] = inst_34983);

(statearr_35002_35019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (10))){
var inst_34981 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35003_35020 = state_34989__$1;
(statearr_35003_35020[(2)] = inst_34981);

(statearr_35003_35020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (8))){
var inst_34969 = (state_34989[(7)]);
var inst_34959 = (state_34989[(10)]);
var inst_34968 = (state_34989[(8)]);
var inst_34970 = (state_34989[(9)]);
var inst_34973 = (function (){var cs = inst_34959;
var vec__34964 = inst_34968;
var v = inst_34969;
var c = inst_34970;
return ((function (cs,vec__34964,v,c,inst_34969,inst_34959,inst_34968,inst_34970,state_val_34990,c__33612__auto___35011,out){
return (function (p1__34955_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34955_SHARP_);
});
;})(cs,vec__34964,v,c,inst_34969,inst_34959,inst_34968,inst_34970,state_val_34990,c__33612__auto___35011,out))
})();
var inst_34974 = cljs.core.filterv.call(null,inst_34973,inst_34959);
var inst_34959__$1 = inst_34974;
var state_34989__$1 = (function (){var statearr_35004 = state_34989;
(statearr_35004[(10)] = inst_34959__$1);

return statearr_35004;
})();
var statearr_35005_35021 = state_34989__$1;
(statearr_35005_35021[(2)] = null);

(statearr_35005_35021[(1)] = (2));


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
});})(c__33612__auto___35011,out))
;
return ((function (switch__33524__auto__,c__33612__auto___35011,out){
return (function() {
var cljs$core$async$state_machine__33525__auto__ = null;
var cljs$core$async$state_machine__33525__auto____0 = (function (){
var statearr_35006 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35006[(0)] = cljs$core$async$state_machine__33525__auto__);

(statearr_35006[(1)] = (1));

return statearr_35006;
});
var cljs$core$async$state_machine__33525__auto____1 = (function (state_34989){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_34989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e35007){if((e35007 instanceof Object)){
var ex__33528__auto__ = e35007;
var statearr_35008_35022 = state_34989;
(statearr_35008_35022[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35023 = state_34989;
state_34989 = G__35023;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$state_machine__33525__auto__ = function(state_34989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33525__auto____1.call(this,state_34989);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33525__auto____0;
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33525__auto____1;
return cljs$core$async$state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___35011,out))
})();
var state__33614__auto__ = (function (){var statearr_35009 = f__33613__auto__.call(null);
(statearr_35009[(6)] = c__33612__auto___35011);

return statearr_35009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___35011,out))
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
var G__35025 = arguments.length;
switch (G__35025) {
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
var c__33612__auto___35070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___35070,out){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___35070,out){
return (function (state_35049){
var state_val_35050 = (state_35049[(1)]);
if((state_val_35050 === (7))){
var inst_35031 = (state_35049[(7)]);
var inst_35031__$1 = (state_35049[(2)]);
var inst_35032 = (inst_35031__$1 == null);
var inst_35033 = cljs.core.not.call(null,inst_35032);
var state_35049__$1 = (function (){var statearr_35051 = state_35049;
(statearr_35051[(7)] = inst_35031__$1);

return statearr_35051;
})();
if(inst_35033){
var statearr_35052_35071 = state_35049__$1;
(statearr_35052_35071[(1)] = (8));

} else {
var statearr_35053_35072 = state_35049__$1;
(statearr_35053_35072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (1))){
var inst_35026 = (0);
var state_35049__$1 = (function (){var statearr_35054 = state_35049;
(statearr_35054[(8)] = inst_35026);

return statearr_35054;
})();
var statearr_35055_35073 = state_35049__$1;
(statearr_35055_35073[(2)] = null);

(statearr_35055_35073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (4))){
var state_35049__$1 = state_35049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35049__$1,(7),ch);
} else {
if((state_val_35050 === (6))){
var inst_35044 = (state_35049[(2)]);
var state_35049__$1 = state_35049;
var statearr_35056_35074 = state_35049__$1;
(statearr_35056_35074[(2)] = inst_35044);

(statearr_35056_35074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (3))){
var inst_35046 = (state_35049[(2)]);
var inst_35047 = cljs.core.async.close_BANG_.call(null,out);
var state_35049__$1 = (function (){var statearr_35057 = state_35049;
(statearr_35057[(9)] = inst_35046);

return statearr_35057;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35049__$1,inst_35047);
} else {
if((state_val_35050 === (2))){
var inst_35026 = (state_35049[(8)]);
var inst_35028 = (inst_35026 < n);
var state_35049__$1 = state_35049;
if(cljs.core.truth_(inst_35028)){
var statearr_35058_35075 = state_35049__$1;
(statearr_35058_35075[(1)] = (4));

} else {
var statearr_35059_35076 = state_35049__$1;
(statearr_35059_35076[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (11))){
var inst_35026 = (state_35049[(8)]);
var inst_35036 = (state_35049[(2)]);
var inst_35037 = (inst_35026 + (1));
var inst_35026__$1 = inst_35037;
var state_35049__$1 = (function (){var statearr_35060 = state_35049;
(statearr_35060[(8)] = inst_35026__$1);

(statearr_35060[(10)] = inst_35036);

return statearr_35060;
})();
var statearr_35061_35077 = state_35049__$1;
(statearr_35061_35077[(2)] = null);

(statearr_35061_35077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (9))){
var state_35049__$1 = state_35049;
var statearr_35062_35078 = state_35049__$1;
(statearr_35062_35078[(2)] = null);

(statearr_35062_35078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (5))){
var state_35049__$1 = state_35049;
var statearr_35063_35079 = state_35049__$1;
(statearr_35063_35079[(2)] = null);

(statearr_35063_35079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (10))){
var inst_35041 = (state_35049[(2)]);
var state_35049__$1 = state_35049;
var statearr_35064_35080 = state_35049__$1;
(statearr_35064_35080[(2)] = inst_35041);

(statearr_35064_35080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (8))){
var inst_35031 = (state_35049[(7)]);
var state_35049__$1 = state_35049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35049__$1,(11),out,inst_35031);
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
});})(c__33612__auto___35070,out))
;
return ((function (switch__33524__auto__,c__33612__auto___35070,out){
return (function() {
var cljs$core$async$state_machine__33525__auto__ = null;
var cljs$core$async$state_machine__33525__auto____0 = (function (){
var statearr_35065 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35065[(0)] = cljs$core$async$state_machine__33525__auto__);

(statearr_35065[(1)] = (1));

return statearr_35065;
});
var cljs$core$async$state_machine__33525__auto____1 = (function (state_35049){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_35049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e35066){if((e35066 instanceof Object)){
var ex__33528__auto__ = e35066;
var statearr_35067_35081 = state_35049;
(statearr_35067_35081[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35082 = state_35049;
state_35049 = G__35082;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$state_machine__33525__auto__ = function(state_35049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33525__auto____1.call(this,state_35049);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33525__auto____0;
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33525__auto____1;
return cljs$core$async$state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___35070,out))
})();
var state__33614__auto__ = (function (){var statearr_35068 = f__33613__auto__.call(null);
(statearr_35068[(6)] = c__33612__auto___35070);

return statearr_35068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___35070,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35084 = (function (f,ch,meta35085){
this.f = f;
this.ch = ch;
this.meta35085 = meta35085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35086,meta35085__$1){
var self__ = this;
var _35086__$1 = this;
return (new cljs.core.async.t_cljs$core$async35084(self__.f,self__.ch,meta35085__$1));
});

cljs.core.async.t_cljs$core$async35084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35086){
var self__ = this;
var _35086__$1 = this;
return self__.meta35085;
});

cljs.core.async.t_cljs$core$async35084.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35084.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35084.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35084.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35084.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35087 = (function (f,ch,meta35085,_,fn1,meta35088){
this.f = f;
this.ch = ch;
this.meta35085 = meta35085;
this._ = _;
this.fn1 = fn1;
this.meta35088 = meta35088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35089,meta35088__$1){
var self__ = this;
var _35089__$1 = this;
return (new cljs.core.async.t_cljs$core$async35087(self__.f,self__.ch,self__.meta35085,self__._,self__.fn1,meta35088__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35089){
var self__ = this;
var _35089__$1 = this;
return self__.meta35088;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35087.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35087.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35083_SHARP_){
return f1.call(null,(((p1__35083_SHARP_ == null))?null:self__.f.call(null,p1__35083_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35087.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35085","meta35085",-791697512,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35084","cljs.core.async/t_cljs$core$async35084",-2017959755,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35088","meta35088",-1660559712,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35087";

cljs.core.async.t_cljs$core$async35087.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async35087");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35087 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35087(f__$1,ch__$1,meta35085__$1,___$2,fn1__$1,meta35088){
return (new cljs.core.async.t_cljs$core$async35087(f__$1,ch__$1,meta35085__$1,___$2,fn1__$1,meta35088));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35087(self__.f,self__.ch,self__.meta35085,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35084.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35084.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35085","meta35085",-791697512,null)], null);
});

cljs.core.async.t_cljs$core$async35084.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35084";

cljs.core.async.t_cljs$core$async35084.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async35084");
});

cljs.core.async.__GT_t_cljs$core$async35084 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35084(f__$1,ch__$1,meta35085){
return (new cljs.core.async.t_cljs$core$async35084(f__$1,ch__$1,meta35085));
});

}

return (new cljs.core.async.t_cljs$core$async35084(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35090 = (function (f,ch,meta35091){
this.f = f;
this.ch = ch;
this.meta35091 = meta35091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35092,meta35091__$1){
var self__ = this;
var _35092__$1 = this;
return (new cljs.core.async.t_cljs$core$async35090(self__.f,self__.ch,meta35091__$1));
});

cljs.core.async.t_cljs$core$async35090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35092){
var self__ = this;
var _35092__$1 = this;
return self__.meta35091;
});

cljs.core.async.t_cljs$core$async35090.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35090.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35090.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35090.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35090.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35090.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35091","meta35091",226825847,null)], null);
});

cljs.core.async.t_cljs$core$async35090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35090";

cljs.core.async.t_cljs$core$async35090.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async35090");
});

cljs.core.async.__GT_t_cljs$core$async35090 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35090(f__$1,ch__$1,meta35091){
return (new cljs.core.async.t_cljs$core$async35090(f__$1,ch__$1,meta35091));
});

}

return (new cljs.core.async.t_cljs$core$async35090(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35093 = (function (p,ch,meta35094){
this.p = p;
this.ch = ch;
this.meta35094 = meta35094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35095,meta35094__$1){
var self__ = this;
var _35095__$1 = this;
return (new cljs.core.async.t_cljs$core$async35093(self__.p,self__.ch,meta35094__$1));
});

cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35095){
var self__ = this;
var _35095__$1 = this;
return self__.meta35094;
});

cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35094","meta35094",851181929,null)], null);
});

cljs.core.async.t_cljs$core$async35093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35093";

cljs.core.async.t_cljs$core$async35093.cljs$lang$ctorPrWriter = (function (this__28561__auto__,writer__28562__auto__,opt__28563__auto__){
return cljs.core._write.call(null,writer__28562__auto__,"cljs.core.async/t_cljs$core$async35093");
});

cljs.core.async.__GT_t_cljs$core$async35093 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35093(p__$1,ch__$1,meta35094){
return (new cljs.core.async.t_cljs$core$async35093(p__$1,ch__$1,meta35094));
});

}

return (new cljs.core.async.t_cljs$core$async35093(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35097 = arguments.length;
switch (G__35097) {
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
var c__33612__auto___35137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___35137,out){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___35137,out){
return (function (state_35118){
var state_val_35119 = (state_35118[(1)]);
if((state_val_35119 === (7))){
var inst_35114 = (state_35118[(2)]);
var state_35118__$1 = state_35118;
var statearr_35120_35138 = state_35118__$1;
(statearr_35120_35138[(2)] = inst_35114);

(statearr_35120_35138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35119 === (1))){
var state_35118__$1 = state_35118;
var statearr_35121_35139 = state_35118__$1;
(statearr_35121_35139[(2)] = null);

(statearr_35121_35139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35119 === (4))){
var inst_35100 = (state_35118[(7)]);
var inst_35100__$1 = (state_35118[(2)]);
var inst_35101 = (inst_35100__$1 == null);
var state_35118__$1 = (function (){var statearr_35122 = state_35118;
(statearr_35122[(7)] = inst_35100__$1);

return statearr_35122;
})();
if(cljs.core.truth_(inst_35101)){
var statearr_35123_35140 = state_35118__$1;
(statearr_35123_35140[(1)] = (5));

} else {
var statearr_35124_35141 = state_35118__$1;
(statearr_35124_35141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35119 === (6))){
var inst_35100 = (state_35118[(7)]);
var inst_35105 = p.call(null,inst_35100);
var state_35118__$1 = state_35118;
if(cljs.core.truth_(inst_35105)){
var statearr_35125_35142 = state_35118__$1;
(statearr_35125_35142[(1)] = (8));

} else {
var statearr_35126_35143 = state_35118__$1;
(statearr_35126_35143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35119 === (3))){
var inst_35116 = (state_35118[(2)]);
var state_35118__$1 = state_35118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35118__$1,inst_35116);
} else {
if((state_val_35119 === (2))){
var state_35118__$1 = state_35118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35118__$1,(4),ch);
} else {
if((state_val_35119 === (11))){
var inst_35108 = (state_35118[(2)]);
var state_35118__$1 = state_35118;
var statearr_35127_35144 = state_35118__$1;
(statearr_35127_35144[(2)] = inst_35108);

(statearr_35127_35144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35119 === (9))){
var state_35118__$1 = state_35118;
var statearr_35128_35145 = state_35118__$1;
(statearr_35128_35145[(2)] = null);

(statearr_35128_35145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35119 === (5))){
var inst_35103 = cljs.core.async.close_BANG_.call(null,out);
var state_35118__$1 = state_35118;
var statearr_35129_35146 = state_35118__$1;
(statearr_35129_35146[(2)] = inst_35103);

(statearr_35129_35146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35119 === (10))){
var inst_35111 = (state_35118[(2)]);
var state_35118__$1 = (function (){var statearr_35130 = state_35118;
(statearr_35130[(8)] = inst_35111);

return statearr_35130;
})();
var statearr_35131_35147 = state_35118__$1;
(statearr_35131_35147[(2)] = null);

(statearr_35131_35147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35119 === (8))){
var inst_35100 = (state_35118[(7)]);
var state_35118__$1 = state_35118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35118__$1,(11),out,inst_35100);
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
});})(c__33612__auto___35137,out))
;
return ((function (switch__33524__auto__,c__33612__auto___35137,out){
return (function() {
var cljs$core$async$state_machine__33525__auto__ = null;
var cljs$core$async$state_machine__33525__auto____0 = (function (){
var statearr_35132 = [null,null,null,null,null,null,null,null,null];
(statearr_35132[(0)] = cljs$core$async$state_machine__33525__auto__);

(statearr_35132[(1)] = (1));

return statearr_35132;
});
var cljs$core$async$state_machine__33525__auto____1 = (function (state_35118){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_35118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e35133){if((e35133 instanceof Object)){
var ex__33528__auto__ = e35133;
var statearr_35134_35148 = state_35118;
(statearr_35134_35148[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35149 = state_35118;
state_35118 = G__35149;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$state_machine__33525__auto__ = function(state_35118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33525__auto____1.call(this,state_35118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33525__auto____0;
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33525__auto____1;
return cljs$core$async$state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___35137,out))
})();
var state__33614__auto__ = (function (){var statearr_35135 = f__33613__auto__.call(null);
(statearr_35135[(6)] = c__33612__auto___35137);

return statearr_35135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___35137,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35151 = arguments.length;
switch (G__35151) {
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
var c__33612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto__){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto__){
return (function (state_35214){
var state_val_35215 = (state_35214[(1)]);
if((state_val_35215 === (7))){
var inst_35210 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35216_35254 = state_35214__$1;
(statearr_35216_35254[(2)] = inst_35210);

(statearr_35216_35254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (20))){
var inst_35180 = (state_35214[(7)]);
var inst_35191 = (state_35214[(2)]);
var inst_35192 = cljs.core.next.call(null,inst_35180);
var inst_35166 = inst_35192;
var inst_35167 = null;
var inst_35168 = (0);
var inst_35169 = (0);
var state_35214__$1 = (function (){var statearr_35217 = state_35214;
(statearr_35217[(8)] = inst_35167);

(statearr_35217[(9)] = inst_35191);

(statearr_35217[(10)] = inst_35168);

(statearr_35217[(11)] = inst_35166);

(statearr_35217[(12)] = inst_35169);

return statearr_35217;
})();
var statearr_35218_35255 = state_35214__$1;
(statearr_35218_35255[(2)] = null);

(statearr_35218_35255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (1))){
var state_35214__$1 = state_35214;
var statearr_35219_35256 = state_35214__$1;
(statearr_35219_35256[(2)] = null);

(statearr_35219_35256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (4))){
var inst_35155 = (state_35214[(13)]);
var inst_35155__$1 = (state_35214[(2)]);
var inst_35156 = (inst_35155__$1 == null);
var state_35214__$1 = (function (){var statearr_35220 = state_35214;
(statearr_35220[(13)] = inst_35155__$1);

return statearr_35220;
})();
if(cljs.core.truth_(inst_35156)){
var statearr_35221_35257 = state_35214__$1;
(statearr_35221_35257[(1)] = (5));

} else {
var statearr_35222_35258 = state_35214__$1;
(statearr_35222_35258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (15))){
var state_35214__$1 = state_35214;
var statearr_35226_35259 = state_35214__$1;
(statearr_35226_35259[(2)] = null);

(statearr_35226_35259[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (21))){
var state_35214__$1 = state_35214;
var statearr_35227_35260 = state_35214__$1;
(statearr_35227_35260[(2)] = null);

(statearr_35227_35260[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (13))){
var inst_35167 = (state_35214[(8)]);
var inst_35168 = (state_35214[(10)]);
var inst_35166 = (state_35214[(11)]);
var inst_35169 = (state_35214[(12)]);
var inst_35176 = (state_35214[(2)]);
var inst_35177 = (inst_35169 + (1));
var tmp35223 = inst_35167;
var tmp35224 = inst_35168;
var tmp35225 = inst_35166;
var inst_35166__$1 = tmp35225;
var inst_35167__$1 = tmp35223;
var inst_35168__$1 = tmp35224;
var inst_35169__$1 = inst_35177;
var state_35214__$1 = (function (){var statearr_35228 = state_35214;
(statearr_35228[(8)] = inst_35167__$1);

(statearr_35228[(10)] = inst_35168__$1);

(statearr_35228[(11)] = inst_35166__$1);

(statearr_35228[(14)] = inst_35176);

(statearr_35228[(12)] = inst_35169__$1);

return statearr_35228;
})();
var statearr_35229_35261 = state_35214__$1;
(statearr_35229_35261[(2)] = null);

(statearr_35229_35261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (22))){
var state_35214__$1 = state_35214;
var statearr_35230_35262 = state_35214__$1;
(statearr_35230_35262[(2)] = null);

(statearr_35230_35262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (6))){
var inst_35155 = (state_35214[(13)]);
var inst_35164 = f.call(null,inst_35155);
var inst_35165 = cljs.core.seq.call(null,inst_35164);
var inst_35166 = inst_35165;
var inst_35167 = null;
var inst_35168 = (0);
var inst_35169 = (0);
var state_35214__$1 = (function (){var statearr_35231 = state_35214;
(statearr_35231[(8)] = inst_35167);

(statearr_35231[(10)] = inst_35168);

(statearr_35231[(11)] = inst_35166);

(statearr_35231[(12)] = inst_35169);

return statearr_35231;
})();
var statearr_35232_35263 = state_35214__$1;
(statearr_35232_35263[(2)] = null);

(statearr_35232_35263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (17))){
var inst_35180 = (state_35214[(7)]);
var inst_35184 = cljs.core.chunk_first.call(null,inst_35180);
var inst_35185 = cljs.core.chunk_rest.call(null,inst_35180);
var inst_35186 = cljs.core.count.call(null,inst_35184);
var inst_35166 = inst_35185;
var inst_35167 = inst_35184;
var inst_35168 = inst_35186;
var inst_35169 = (0);
var state_35214__$1 = (function (){var statearr_35233 = state_35214;
(statearr_35233[(8)] = inst_35167);

(statearr_35233[(10)] = inst_35168);

(statearr_35233[(11)] = inst_35166);

(statearr_35233[(12)] = inst_35169);

return statearr_35233;
})();
var statearr_35234_35264 = state_35214__$1;
(statearr_35234_35264[(2)] = null);

(statearr_35234_35264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (3))){
var inst_35212 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35214__$1,inst_35212);
} else {
if((state_val_35215 === (12))){
var inst_35200 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35235_35265 = state_35214__$1;
(statearr_35235_35265[(2)] = inst_35200);

(statearr_35235_35265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (2))){
var state_35214__$1 = state_35214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35214__$1,(4),in$);
} else {
if((state_val_35215 === (23))){
var inst_35208 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35236_35266 = state_35214__$1;
(statearr_35236_35266[(2)] = inst_35208);

(statearr_35236_35266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (19))){
var inst_35195 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35237_35267 = state_35214__$1;
(statearr_35237_35267[(2)] = inst_35195);

(statearr_35237_35267[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (11))){
var inst_35180 = (state_35214[(7)]);
var inst_35166 = (state_35214[(11)]);
var inst_35180__$1 = cljs.core.seq.call(null,inst_35166);
var state_35214__$1 = (function (){var statearr_35238 = state_35214;
(statearr_35238[(7)] = inst_35180__$1);

return statearr_35238;
})();
if(inst_35180__$1){
var statearr_35239_35268 = state_35214__$1;
(statearr_35239_35268[(1)] = (14));

} else {
var statearr_35240_35269 = state_35214__$1;
(statearr_35240_35269[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (9))){
var inst_35202 = (state_35214[(2)]);
var inst_35203 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35214__$1 = (function (){var statearr_35241 = state_35214;
(statearr_35241[(15)] = inst_35202);

return statearr_35241;
})();
if(cljs.core.truth_(inst_35203)){
var statearr_35242_35270 = state_35214__$1;
(statearr_35242_35270[(1)] = (21));

} else {
var statearr_35243_35271 = state_35214__$1;
(statearr_35243_35271[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (5))){
var inst_35158 = cljs.core.async.close_BANG_.call(null,out);
var state_35214__$1 = state_35214;
var statearr_35244_35272 = state_35214__$1;
(statearr_35244_35272[(2)] = inst_35158);

(statearr_35244_35272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (14))){
var inst_35180 = (state_35214[(7)]);
var inst_35182 = cljs.core.chunked_seq_QMARK_.call(null,inst_35180);
var state_35214__$1 = state_35214;
if(inst_35182){
var statearr_35245_35273 = state_35214__$1;
(statearr_35245_35273[(1)] = (17));

} else {
var statearr_35246_35274 = state_35214__$1;
(statearr_35246_35274[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (16))){
var inst_35198 = (state_35214[(2)]);
var state_35214__$1 = state_35214;
var statearr_35247_35275 = state_35214__$1;
(statearr_35247_35275[(2)] = inst_35198);

(statearr_35247_35275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35215 === (10))){
var inst_35167 = (state_35214[(8)]);
var inst_35169 = (state_35214[(12)]);
var inst_35174 = cljs.core._nth.call(null,inst_35167,inst_35169);
var state_35214__$1 = state_35214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35214__$1,(13),out,inst_35174);
} else {
if((state_val_35215 === (18))){
var inst_35180 = (state_35214[(7)]);
var inst_35189 = cljs.core.first.call(null,inst_35180);
var state_35214__$1 = state_35214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35214__$1,(20),out,inst_35189);
} else {
if((state_val_35215 === (8))){
var inst_35168 = (state_35214[(10)]);
var inst_35169 = (state_35214[(12)]);
var inst_35171 = (inst_35169 < inst_35168);
var inst_35172 = inst_35171;
var state_35214__$1 = state_35214;
if(cljs.core.truth_(inst_35172)){
var statearr_35248_35276 = state_35214__$1;
(statearr_35248_35276[(1)] = (10));

} else {
var statearr_35249_35277 = state_35214__$1;
(statearr_35249_35277[(1)] = (11));

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
});})(c__33612__auto__))
;
return ((function (switch__33524__auto__,c__33612__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33525__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33525__auto____0 = (function (){
var statearr_35250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35250[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33525__auto__);

(statearr_35250[(1)] = (1));

return statearr_35250;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33525__auto____1 = (function (state_35214){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_35214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e35251){if((e35251 instanceof Object)){
var ex__33528__auto__ = e35251;
var statearr_35252_35278 = state_35214;
(statearr_35252_35278[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35279 = state_35214;
state_35214 = G__35279;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33525__auto__ = function(state_35214){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33525__auto____1.call(this,state_35214);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33525__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33525__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto__))
})();
var state__33614__auto__ = (function (){var statearr_35253 = f__33613__auto__.call(null);
(statearr_35253[(6)] = c__33612__auto__);

return statearr_35253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto__))
);

return c__33612__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35281 = arguments.length;
switch (G__35281) {
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
var G__35284 = arguments.length;
switch (G__35284) {
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
var G__35287 = arguments.length;
switch (G__35287) {
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
var c__33612__auto___35334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___35334,out){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___35334,out){
return (function (state_35311){
var state_val_35312 = (state_35311[(1)]);
if((state_val_35312 === (7))){
var inst_35306 = (state_35311[(2)]);
var state_35311__$1 = state_35311;
var statearr_35313_35335 = state_35311__$1;
(statearr_35313_35335[(2)] = inst_35306);

(statearr_35313_35335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (1))){
var inst_35288 = null;
var state_35311__$1 = (function (){var statearr_35314 = state_35311;
(statearr_35314[(7)] = inst_35288);

return statearr_35314;
})();
var statearr_35315_35336 = state_35311__$1;
(statearr_35315_35336[(2)] = null);

(statearr_35315_35336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (4))){
var inst_35291 = (state_35311[(8)]);
var inst_35291__$1 = (state_35311[(2)]);
var inst_35292 = (inst_35291__$1 == null);
var inst_35293 = cljs.core.not.call(null,inst_35292);
var state_35311__$1 = (function (){var statearr_35316 = state_35311;
(statearr_35316[(8)] = inst_35291__$1);

return statearr_35316;
})();
if(inst_35293){
var statearr_35317_35337 = state_35311__$1;
(statearr_35317_35337[(1)] = (5));

} else {
var statearr_35318_35338 = state_35311__$1;
(statearr_35318_35338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (6))){
var state_35311__$1 = state_35311;
var statearr_35319_35339 = state_35311__$1;
(statearr_35319_35339[(2)] = null);

(statearr_35319_35339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (3))){
var inst_35308 = (state_35311[(2)]);
var inst_35309 = cljs.core.async.close_BANG_.call(null,out);
var state_35311__$1 = (function (){var statearr_35320 = state_35311;
(statearr_35320[(9)] = inst_35308);

return statearr_35320;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35311__$1,inst_35309);
} else {
if((state_val_35312 === (2))){
var state_35311__$1 = state_35311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35311__$1,(4),ch);
} else {
if((state_val_35312 === (11))){
var inst_35291 = (state_35311[(8)]);
var inst_35300 = (state_35311[(2)]);
var inst_35288 = inst_35291;
var state_35311__$1 = (function (){var statearr_35321 = state_35311;
(statearr_35321[(7)] = inst_35288);

(statearr_35321[(10)] = inst_35300);

return statearr_35321;
})();
var statearr_35322_35340 = state_35311__$1;
(statearr_35322_35340[(2)] = null);

(statearr_35322_35340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (9))){
var inst_35291 = (state_35311[(8)]);
var state_35311__$1 = state_35311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35311__$1,(11),out,inst_35291);
} else {
if((state_val_35312 === (5))){
var inst_35288 = (state_35311[(7)]);
var inst_35291 = (state_35311[(8)]);
var inst_35295 = cljs.core._EQ_.call(null,inst_35291,inst_35288);
var state_35311__$1 = state_35311;
if(inst_35295){
var statearr_35324_35341 = state_35311__$1;
(statearr_35324_35341[(1)] = (8));

} else {
var statearr_35325_35342 = state_35311__$1;
(statearr_35325_35342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (10))){
var inst_35303 = (state_35311[(2)]);
var state_35311__$1 = state_35311;
var statearr_35326_35343 = state_35311__$1;
(statearr_35326_35343[(2)] = inst_35303);

(statearr_35326_35343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35312 === (8))){
var inst_35288 = (state_35311[(7)]);
var tmp35323 = inst_35288;
var inst_35288__$1 = tmp35323;
var state_35311__$1 = (function (){var statearr_35327 = state_35311;
(statearr_35327[(7)] = inst_35288__$1);

return statearr_35327;
})();
var statearr_35328_35344 = state_35311__$1;
(statearr_35328_35344[(2)] = null);

(statearr_35328_35344[(1)] = (2));


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
});})(c__33612__auto___35334,out))
;
return ((function (switch__33524__auto__,c__33612__auto___35334,out){
return (function() {
var cljs$core$async$state_machine__33525__auto__ = null;
var cljs$core$async$state_machine__33525__auto____0 = (function (){
var statearr_35329 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35329[(0)] = cljs$core$async$state_machine__33525__auto__);

(statearr_35329[(1)] = (1));

return statearr_35329;
});
var cljs$core$async$state_machine__33525__auto____1 = (function (state_35311){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_35311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e35330){if((e35330 instanceof Object)){
var ex__33528__auto__ = e35330;
var statearr_35331_35345 = state_35311;
(statearr_35331_35345[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35346 = state_35311;
state_35311 = G__35346;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$state_machine__33525__auto__ = function(state_35311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33525__auto____1.call(this,state_35311);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33525__auto____0;
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33525__auto____1;
return cljs$core$async$state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___35334,out))
})();
var state__33614__auto__ = (function (){var statearr_35332 = f__33613__auto__.call(null);
(statearr_35332[(6)] = c__33612__auto___35334);

return statearr_35332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___35334,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35348 = arguments.length;
switch (G__35348) {
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
var c__33612__auto___35414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___35414,out){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___35414,out){
return (function (state_35386){
var state_val_35387 = (state_35386[(1)]);
if((state_val_35387 === (7))){
var inst_35382 = (state_35386[(2)]);
var state_35386__$1 = state_35386;
var statearr_35388_35415 = state_35386__$1;
(statearr_35388_35415[(2)] = inst_35382);

(statearr_35388_35415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (1))){
var inst_35349 = (new Array(n));
var inst_35350 = inst_35349;
var inst_35351 = (0);
var state_35386__$1 = (function (){var statearr_35389 = state_35386;
(statearr_35389[(7)] = inst_35350);

(statearr_35389[(8)] = inst_35351);

return statearr_35389;
})();
var statearr_35390_35416 = state_35386__$1;
(statearr_35390_35416[(2)] = null);

(statearr_35390_35416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (4))){
var inst_35354 = (state_35386[(9)]);
var inst_35354__$1 = (state_35386[(2)]);
var inst_35355 = (inst_35354__$1 == null);
var inst_35356 = cljs.core.not.call(null,inst_35355);
var state_35386__$1 = (function (){var statearr_35391 = state_35386;
(statearr_35391[(9)] = inst_35354__$1);

return statearr_35391;
})();
if(inst_35356){
var statearr_35392_35417 = state_35386__$1;
(statearr_35392_35417[(1)] = (5));

} else {
var statearr_35393_35418 = state_35386__$1;
(statearr_35393_35418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (15))){
var inst_35376 = (state_35386[(2)]);
var state_35386__$1 = state_35386;
var statearr_35394_35419 = state_35386__$1;
(statearr_35394_35419[(2)] = inst_35376);

(statearr_35394_35419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (13))){
var state_35386__$1 = state_35386;
var statearr_35395_35420 = state_35386__$1;
(statearr_35395_35420[(2)] = null);

(statearr_35395_35420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (6))){
var inst_35351 = (state_35386[(8)]);
var inst_35372 = (inst_35351 > (0));
var state_35386__$1 = state_35386;
if(cljs.core.truth_(inst_35372)){
var statearr_35396_35421 = state_35386__$1;
(statearr_35396_35421[(1)] = (12));

} else {
var statearr_35397_35422 = state_35386__$1;
(statearr_35397_35422[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (3))){
var inst_35384 = (state_35386[(2)]);
var state_35386__$1 = state_35386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35386__$1,inst_35384);
} else {
if((state_val_35387 === (12))){
var inst_35350 = (state_35386[(7)]);
var inst_35374 = cljs.core.vec.call(null,inst_35350);
var state_35386__$1 = state_35386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35386__$1,(15),out,inst_35374);
} else {
if((state_val_35387 === (2))){
var state_35386__$1 = state_35386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35386__$1,(4),ch);
} else {
if((state_val_35387 === (11))){
var inst_35366 = (state_35386[(2)]);
var inst_35367 = (new Array(n));
var inst_35350 = inst_35367;
var inst_35351 = (0);
var state_35386__$1 = (function (){var statearr_35398 = state_35386;
(statearr_35398[(10)] = inst_35366);

(statearr_35398[(7)] = inst_35350);

(statearr_35398[(8)] = inst_35351);

return statearr_35398;
})();
var statearr_35399_35423 = state_35386__$1;
(statearr_35399_35423[(2)] = null);

(statearr_35399_35423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (9))){
var inst_35350 = (state_35386[(7)]);
var inst_35364 = cljs.core.vec.call(null,inst_35350);
var state_35386__$1 = state_35386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35386__$1,(11),out,inst_35364);
} else {
if((state_val_35387 === (5))){
var inst_35354 = (state_35386[(9)]);
var inst_35350 = (state_35386[(7)]);
var inst_35359 = (state_35386[(11)]);
var inst_35351 = (state_35386[(8)]);
var inst_35358 = (inst_35350[inst_35351] = inst_35354);
var inst_35359__$1 = (inst_35351 + (1));
var inst_35360 = (inst_35359__$1 < n);
var state_35386__$1 = (function (){var statearr_35400 = state_35386;
(statearr_35400[(11)] = inst_35359__$1);

(statearr_35400[(12)] = inst_35358);

return statearr_35400;
})();
if(cljs.core.truth_(inst_35360)){
var statearr_35401_35424 = state_35386__$1;
(statearr_35401_35424[(1)] = (8));

} else {
var statearr_35402_35425 = state_35386__$1;
(statearr_35402_35425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (14))){
var inst_35379 = (state_35386[(2)]);
var inst_35380 = cljs.core.async.close_BANG_.call(null,out);
var state_35386__$1 = (function (){var statearr_35404 = state_35386;
(statearr_35404[(13)] = inst_35379);

return statearr_35404;
})();
var statearr_35405_35426 = state_35386__$1;
(statearr_35405_35426[(2)] = inst_35380);

(statearr_35405_35426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (10))){
var inst_35370 = (state_35386[(2)]);
var state_35386__$1 = state_35386;
var statearr_35406_35427 = state_35386__$1;
(statearr_35406_35427[(2)] = inst_35370);

(statearr_35406_35427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35387 === (8))){
var inst_35350 = (state_35386[(7)]);
var inst_35359 = (state_35386[(11)]);
var tmp35403 = inst_35350;
var inst_35350__$1 = tmp35403;
var inst_35351 = inst_35359;
var state_35386__$1 = (function (){var statearr_35407 = state_35386;
(statearr_35407[(7)] = inst_35350__$1);

(statearr_35407[(8)] = inst_35351);

return statearr_35407;
})();
var statearr_35408_35428 = state_35386__$1;
(statearr_35408_35428[(2)] = null);

(statearr_35408_35428[(1)] = (2));


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
});})(c__33612__auto___35414,out))
;
return ((function (switch__33524__auto__,c__33612__auto___35414,out){
return (function() {
var cljs$core$async$state_machine__33525__auto__ = null;
var cljs$core$async$state_machine__33525__auto____0 = (function (){
var statearr_35409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35409[(0)] = cljs$core$async$state_machine__33525__auto__);

(statearr_35409[(1)] = (1));

return statearr_35409;
});
var cljs$core$async$state_machine__33525__auto____1 = (function (state_35386){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_35386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e35410){if((e35410 instanceof Object)){
var ex__33528__auto__ = e35410;
var statearr_35411_35429 = state_35386;
(statearr_35411_35429[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35430 = state_35386;
state_35386 = G__35430;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$state_machine__33525__auto__ = function(state_35386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33525__auto____1.call(this,state_35386);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33525__auto____0;
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33525__auto____1;
return cljs$core$async$state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___35414,out))
})();
var state__33614__auto__ = (function (){var statearr_35412 = f__33613__auto__.call(null);
(statearr_35412[(6)] = c__33612__auto___35414);

return statearr_35412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___35414,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35432 = arguments.length;
switch (G__35432) {
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
var c__33612__auto___35502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___35502,out){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___35502,out){
return (function (state_35474){
var state_val_35475 = (state_35474[(1)]);
if((state_val_35475 === (7))){
var inst_35470 = (state_35474[(2)]);
var state_35474__$1 = state_35474;
var statearr_35476_35503 = state_35474__$1;
(statearr_35476_35503[(2)] = inst_35470);

(statearr_35476_35503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (1))){
var inst_35433 = [];
var inst_35434 = inst_35433;
var inst_35435 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35474__$1 = (function (){var statearr_35477 = state_35474;
(statearr_35477[(7)] = inst_35434);

(statearr_35477[(8)] = inst_35435);

return statearr_35477;
})();
var statearr_35478_35504 = state_35474__$1;
(statearr_35478_35504[(2)] = null);

(statearr_35478_35504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (4))){
var inst_35438 = (state_35474[(9)]);
var inst_35438__$1 = (state_35474[(2)]);
var inst_35439 = (inst_35438__$1 == null);
var inst_35440 = cljs.core.not.call(null,inst_35439);
var state_35474__$1 = (function (){var statearr_35479 = state_35474;
(statearr_35479[(9)] = inst_35438__$1);

return statearr_35479;
})();
if(inst_35440){
var statearr_35480_35505 = state_35474__$1;
(statearr_35480_35505[(1)] = (5));

} else {
var statearr_35481_35506 = state_35474__$1;
(statearr_35481_35506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (15))){
var inst_35464 = (state_35474[(2)]);
var state_35474__$1 = state_35474;
var statearr_35482_35507 = state_35474__$1;
(statearr_35482_35507[(2)] = inst_35464);

(statearr_35482_35507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (13))){
var state_35474__$1 = state_35474;
var statearr_35483_35508 = state_35474__$1;
(statearr_35483_35508[(2)] = null);

(statearr_35483_35508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (6))){
var inst_35434 = (state_35474[(7)]);
var inst_35459 = inst_35434.length;
var inst_35460 = (inst_35459 > (0));
var state_35474__$1 = state_35474;
if(cljs.core.truth_(inst_35460)){
var statearr_35484_35509 = state_35474__$1;
(statearr_35484_35509[(1)] = (12));

} else {
var statearr_35485_35510 = state_35474__$1;
(statearr_35485_35510[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (3))){
var inst_35472 = (state_35474[(2)]);
var state_35474__$1 = state_35474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35474__$1,inst_35472);
} else {
if((state_val_35475 === (12))){
var inst_35434 = (state_35474[(7)]);
var inst_35462 = cljs.core.vec.call(null,inst_35434);
var state_35474__$1 = state_35474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35474__$1,(15),out,inst_35462);
} else {
if((state_val_35475 === (2))){
var state_35474__$1 = state_35474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35474__$1,(4),ch);
} else {
if((state_val_35475 === (11))){
var inst_35442 = (state_35474[(10)]);
var inst_35438 = (state_35474[(9)]);
var inst_35452 = (state_35474[(2)]);
var inst_35453 = [];
var inst_35454 = inst_35453.push(inst_35438);
var inst_35434 = inst_35453;
var inst_35435 = inst_35442;
var state_35474__$1 = (function (){var statearr_35486 = state_35474;
(statearr_35486[(7)] = inst_35434);

(statearr_35486[(11)] = inst_35454);

(statearr_35486[(12)] = inst_35452);

(statearr_35486[(8)] = inst_35435);

return statearr_35486;
})();
var statearr_35487_35511 = state_35474__$1;
(statearr_35487_35511[(2)] = null);

(statearr_35487_35511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (9))){
var inst_35434 = (state_35474[(7)]);
var inst_35450 = cljs.core.vec.call(null,inst_35434);
var state_35474__$1 = state_35474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35474__$1,(11),out,inst_35450);
} else {
if((state_val_35475 === (5))){
var inst_35442 = (state_35474[(10)]);
var inst_35435 = (state_35474[(8)]);
var inst_35438 = (state_35474[(9)]);
var inst_35442__$1 = f.call(null,inst_35438);
var inst_35443 = cljs.core._EQ_.call(null,inst_35442__$1,inst_35435);
var inst_35444 = cljs.core.keyword_identical_QMARK_.call(null,inst_35435,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35445 = (inst_35443) || (inst_35444);
var state_35474__$1 = (function (){var statearr_35488 = state_35474;
(statearr_35488[(10)] = inst_35442__$1);

return statearr_35488;
})();
if(cljs.core.truth_(inst_35445)){
var statearr_35489_35512 = state_35474__$1;
(statearr_35489_35512[(1)] = (8));

} else {
var statearr_35490_35513 = state_35474__$1;
(statearr_35490_35513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (14))){
var inst_35467 = (state_35474[(2)]);
var inst_35468 = cljs.core.async.close_BANG_.call(null,out);
var state_35474__$1 = (function (){var statearr_35492 = state_35474;
(statearr_35492[(13)] = inst_35467);

return statearr_35492;
})();
var statearr_35493_35514 = state_35474__$1;
(statearr_35493_35514[(2)] = inst_35468);

(statearr_35493_35514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (10))){
var inst_35457 = (state_35474[(2)]);
var state_35474__$1 = state_35474;
var statearr_35494_35515 = state_35474__$1;
(statearr_35494_35515[(2)] = inst_35457);

(statearr_35494_35515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35475 === (8))){
var inst_35434 = (state_35474[(7)]);
var inst_35442 = (state_35474[(10)]);
var inst_35438 = (state_35474[(9)]);
var inst_35447 = inst_35434.push(inst_35438);
var tmp35491 = inst_35434;
var inst_35434__$1 = tmp35491;
var inst_35435 = inst_35442;
var state_35474__$1 = (function (){var statearr_35495 = state_35474;
(statearr_35495[(7)] = inst_35434__$1);

(statearr_35495[(8)] = inst_35435);

(statearr_35495[(14)] = inst_35447);

return statearr_35495;
})();
var statearr_35496_35516 = state_35474__$1;
(statearr_35496_35516[(2)] = null);

(statearr_35496_35516[(1)] = (2));


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
});})(c__33612__auto___35502,out))
;
return ((function (switch__33524__auto__,c__33612__auto___35502,out){
return (function() {
var cljs$core$async$state_machine__33525__auto__ = null;
var cljs$core$async$state_machine__33525__auto____0 = (function (){
var statearr_35497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35497[(0)] = cljs$core$async$state_machine__33525__auto__);

(statearr_35497[(1)] = (1));

return statearr_35497;
});
var cljs$core$async$state_machine__33525__auto____1 = (function (state_35474){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_35474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e35498){if((e35498 instanceof Object)){
var ex__33528__auto__ = e35498;
var statearr_35499_35517 = state_35474;
(statearr_35499_35517[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35518 = state_35474;
state_35474 = G__35518;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
cljs$core$async$state_machine__33525__auto__ = function(state_35474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33525__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33525__auto____1.call(this,state_35474);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33525__auto____0;
cljs$core$async$state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33525__auto____1;
return cljs$core$async$state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___35502,out))
})();
var state__33614__auto__ = (function (){var statearr_35500 = f__33613__auto__.call(null);
(statearr_35500[(6)] = c__33612__auto___35502);

return statearr_35500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___35502,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1509845010102
