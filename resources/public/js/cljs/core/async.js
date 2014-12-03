// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12019 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12019 = (function (f,fn_handler,meta12020){
this.f = f;
this.fn_handler = fn_handler;
this.meta12020 = meta12020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12019.cljs$lang$type = true;
cljs.core.async.t12019.cljs$lang$ctorStr = "cljs.core.async/t12019";
cljs.core.async.t12019.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12019");
});
cljs.core.async.t12019.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12021){var self__ = this;
var _12021__$1 = this;return self__.meta12020;
});
cljs.core.async.t12019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12021,meta12020__$1){var self__ = this;
var _12021__$1 = this;return (new cljs.core.async.t12019(self__.f,self__.fn_handler,meta12020__$1));
});
cljs.core.async.__GT_t12019 = (function __GT_t12019(f__$1,fn_handler__$1,meta12020){return (new cljs.core.async.t12019(f__$1,fn_handler__$1,meta12020));
});
}
return (new cljs.core.async.t12019(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12023 = buff;if(G__12023)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__12023.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12023.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12023);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12023);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12024 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12024);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12024,ret){
return (function (){return fn1.call(null,val_12024);
});})(val_12024,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3628__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___12025 = n;var x_12026 = (0);while(true){
if((x_12026 < n__4510__auto___12025))
{(a[x_12026] = (0));
{
var G__12027 = (x_12026 + (1));
x_12026 = G__12027;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12028 = (i + (1));
i = G__12028;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12032 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12032 = (function (flag,alt_flag,meta12033){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12033 = meta12033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12032.cljs$lang$type = true;
cljs.core.async.t12032.cljs$lang$ctorStr = "cljs.core.async/t12032";
cljs.core.async.t12032.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12032");
});})(flag))
;
cljs.core.async.t12032.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12032.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12032.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12034){var self__ = this;
var _12034__$1 = this;return self__.meta12033;
});})(flag))
;
cljs.core.async.t12032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12034,meta12033__$1){var self__ = this;
var _12034__$1 = this;return (new cljs.core.async.t12032(self__.flag,self__.alt_flag,meta12033__$1));
});})(flag))
;
cljs.core.async.__GT_t12032 = ((function (flag){
return (function __GT_t12032(flag__$1,alt_flag__$1,meta12033){return (new cljs.core.async.t12032(flag__$1,alt_flag__$1,meta12033));
});})(flag))
;
}
return (new cljs.core.async.t12032(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12038 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12038 = (function (cb,flag,alt_handler,meta12039){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12039 = meta12039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12038.cljs$lang$type = true;
cljs.core.async.t12038.cljs$lang$ctorStr = "cljs.core.async/t12038";
cljs.core.async.t12038.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12038");
});
cljs.core.async.t12038.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12040){var self__ = this;
var _12040__$1 = this;return self__.meta12039;
});
cljs.core.async.t12038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12040,meta12039__$1){var self__ = this;
var _12040__$1 = this;return (new cljs.core.async.t12038(self__.cb,self__.flag,self__.alt_handler,meta12039__$1));
});
cljs.core.async.__GT_t12038 = (function __GT_t12038(cb__$1,flag__$1,alt_handler__$1,meta12039){return (new cljs.core.async.t12038(cb__$1,flag__$1,alt_handler__$1,meta12039));
});
}
return (new cljs.core.async.t12038(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12041_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12041_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12042 = (i + (1));
i = G__12042;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3628__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12043){var map__12045 = p__12043;var map__12045__$1 = ((cljs.core.seq_QMARK_.call(null,map__12045))?cljs.core.apply.call(null,cljs.core.hash_map,map__12045):map__12045);var opts = map__12045__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__12043 = null;if (arguments.length > 1) {
  p__12043 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12043);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12046){
var ports = cljs.core.first(arglist__12046);
var p__12043 = cljs.core.rest(arglist__12046);
return alts_BANG___delegate(ports,p__12043);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12054 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12054 = (function (ch,f,map_LT_,meta12055){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12055 = meta12055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12054.cljs$lang$type = true;
cljs.core.async.t12054.cljs$lang$ctorStr = "cljs.core.async/t12054";
cljs.core.async.t12054.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12054");
});
cljs.core.async.t12054.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12054.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12054.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12054.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12057 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12057 = (function (fn1,_,meta12055,ch,f,map_LT_,meta12058){
this.fn1 = fn1;
this._ = _;
this.meta12055 = meta12055;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12058 = meta12058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12057.cljs$lang$type = true;
cljs.core.async.t12057.cljs$lang$ctorStr = "cljs.core.async/t12057";
cljs.core.async.t12057.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12057");
});})(___$1))
;
cljs.core.async.t12057.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12057.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12057.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12057.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__12047_SHARP_){return f1.call(null,(((p1__12047_SHARP_ == null))?null:self__.f.call(null,p1__12047_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t12057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12059){var self__ = this;
var _12059__$1 = this;return self__.meta12058;
});})(___$1))
;
cljs.core.async.t12057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12059,meta12058__$1){var self__ = this;
var _12059__$1 = this;return (new cljs.core.async.t12057(self__.fn1,self__._,self__.meta12055,self__.ch,self__.f,self__.map_LT_,meta12058__$1));
});})(___$1))
;
cljs.core.async.__GT_t12057 = ((function (___$1){
return (function __GT_t12057(fn1__$1,___$2,meta12055__$1,ch__$2,f__$2,map_LT___$2,meta12058){return (new cljs.core.async.t12057(fn1__$1,___$2,meta12055__$1,ch__$2,f__$2,map_LT___$2,meta12058));
});})(___$1))
;
}
return (new cljs.core.async.t12057(fn1,___$1,self__.meta12055,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12054.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12054.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12056){var self__ = this;
var _12056__$1 = this;return self__.meta12055;
});
cljs.core.async.t12054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12056,meta12055__$1){var self__ = this;
var _12056__$1 = this;return (new cljs.core.async.t12054(self__.ch,self__.f,self__.map_LT_,meta12055__$1));
});
cljs.core.async.__GT_t12054 = (function __GT_t12054(ch__$1,f__$1,map_LT___$1,meta12055){return (new cljs.core.async.t12054(ch__$1,f__$1,map_LT___$1,meta12055));
});
}
return (new cljs.core.async.t12054(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12063 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12063 = (function (ch,f,map_GT_,meta12064){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12064 = meta12064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12063.cljs$lang$type = true;
cljs.core.async.t12063.cljs$lang$ctorStr = "cljs.core.async/t12063";
cljs.core.async.t12063.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12063");
});
cljs.core.async.t12063.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12063.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12063.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12065){var self__ = this;
var _12065__$1 = this;return self__.meta12064;
});
cljs.core.async.t12063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12065,meta12064__$1){var self__ = this;
var _12065__$1 = this;return (new cljs.core.async.t12063(self__.ch,self__.f,self__.map_GT_,meta12064__$1));
});
cljs.core.async.__GT_t12063 = (function __GT_t12063(ch__$1,f__$1,map_GT___$1,meta12064){return (new cljs.core.async.t12063(ch__$1,f__$1,map_GT___$1,meta12064));
});
}
return (new cljs.core.async.t12063(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12069 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12069 = (function (ch,p,filter_GT_,meta12070){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12070 = meta12070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12069.cljs$lang$type = true;
cljs.core.async.t12069.cljs$lang$ctorStr = "cljs.core.async/t12069";
cljs.core.async.t12069.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12069");
});
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12069.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12071){var self__ = this;
var _12071__$1 = this;return self__.meta12070;
});
cljs.core.async.t12069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12071,meta12070__$1){var self__ = this;
var _12071__$1 = this;return (new cljs.core.async.t12069(self__.ch,self__.p,self__.filter_GT_,meta12070__$1));
});
cljs.core.async.__GT_t12069 = (function __GT_t12069(ch__$1,p__$1,filter_GT___$1,meta12070){return (new cljs.core.async.t12069(ch__$1,p__$1,filter_GT___$1,meta12070));
});
}
return (new cljs.core.async.t12069(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7070__auto___12154 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto___12154,out){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto___12154,out){
return (function (state_12133){var state_val_12134 = (state_12133[(1)]);if((state_val_12134 === (7)))
{var inst_12129 = (state_12133[(2)]);var state_12133__$1 = state_12133;var statearr_12135_12155 = state_12133__$1;(statearr_12135_12155[(2)] = inst_12129);
(statearr_12135_12155[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12134 === (1)))
{var state_12133__$1 = state_12133;var statearr_12136_12156 = state_12133__$1;(statearr_12136_12156[(2)] = null);
(statearr_12136_12156[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12134 === (4)))
{var inst_12115 = (state_12133[(7)]);var inst_12115__$1 = (state_12133[(2)]);var inst_12116 = (inst_12115__$1 == null);var state_12133__$1 = (function (){var statearr_12137 = state_12133;(statearr_12137[(7)] = inst_12115__$1);
return statearr_12137;
})();if(cljs.core.truth_(inst_12116))
{var statearr_12138_12157 = state_12133__$1;(statearr_12138_12157[(1)] = (5));
} else
{var statearr_12139_12158 = state_12133__$1;(statearr_12139_12158[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12134 === (6)))
{var inst_12115 = (state_12133[(7)]);var inst_12120 = p.call(null,inst_12115);var state_12133__$1 = state_12133;if(cljs.core.truth_(inst_12120))
{var statearr_12140_12159 = state_12133__$1;(statearr_12140_12159[(1)] = (8));
} else
{var statearr_12141_12160 = state_12133__$1;(statearr_12141_12160[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12134 === (3)))
{var inst_12131 = (state_12133[(2)]);var state_12133__$1 = state_12133;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12133__$1,inst_12131);
} else
{if((state_val_12134 === (2)))
{var state_12133__$1 = state_12133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12133__$1,(4),ch);
} else
{if((state_val_12134 === (11)))
{var inst_12123 = (state_12133[(2)]);var state_12133__$1 = state_12133;var statearr_12142_12161 = state_12133__$1;(statearr_12142_12161[(2)] = inst_12123);
(statearr_12142_12161[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12134 === (9)))
{var state_12133__$1 = state_12133;var statearr_12143_12162 = state_12133__$1;(statearr_12143_12162[(2)] = null);
(statearr_12143_12162[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12134 === (5)))
{var inst_12118 = cljs.core.async.close_BANG_.call(null,out);var state_12133__$1 = state_12133;var statearr_12144_12163 = state_12133__$1;(statearr_12144_12163[(2)] = inst_12118);
(statearr_12144_12163[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12134 === (10)))
{var inst_12126 = (state_12133[(2)]);var state_12133__$1 = (function (){var statearr_12145 = state_12133;(statearr_12145[(8)] = inst_12126);
return statearr_12145;
})();var statearr_12146_12164 = state_12133__$1;(statearr_12146_12164[(2)] = null);
(statearr_12146_12164[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12134 === (8)))
{var inst_12115 = (state_12133[(7)]);var state_12133__$1 = state_12133;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12133__$1,(11),out,inst_12115);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7070__auto___12154,out))
;return ((function (switch__7055__auto__,c__7070__auto___12154,out){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_12150 = [null,null,null,null,null,null,null,null,null];(statearr_12150[(0)] = state_machine__7056__auto__);
(statearr_12150[(1)] = (1));
return statearr_12150;
});
var state_machine__7056__auto____1 = (function (state_12133){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_12133);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e12151){if((e12151 instanceof Object))
{var ex__7059__auto__ = e12151;var statearr_12152_12165 = state_12133;(statearr_12152_12165[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12133);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12151;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12166 = state_12133;
state_12133 = G__12166;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_12133){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_12133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto___12154,out))
})();var state__7072__auto__ = (function (){var statearr_12153 = f__7071__auto__.call(null);(statearr_12153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto___12154);
return statearr_12153;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto___12154,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7070__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto__){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto__){
return (function (state_12318){var state_val_12319 = (state_12318[(1)]);if((state_val_12319 === (7)))
{var inst_12314 = (state_12318[(2)]);var state_12318__$1 = state_12318;var statearr_12320_12357 = state_12318__$1;(statearr_12320_12357[(2)] = inst_12314);
(statearr_12320_12357[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (20)))
{var inst_12289 = (state_12318[(7)]);var inst_12300 = (state_12318[(2)]);var inst_12301 = cljs.core.next.call(null,inst_12289);var inst_12275 = inst_12301;var inst_12276 = null;var inst_12277 = (0);var inst_12278 = (0);var state_12318__$1 = (function (){var statearr_12321 = state_12318;(statearr_12321[(8)] = inst_12276);
(statearr_12321[(9)] = inst_12278);
(statearr_12321[(10)] = inst_12300);
(statearr_12321[(11)] = inst_12275);
(statearr_12321[(12)] = inst_12277);
return statearr_12321;
})();var statearr_12322_12358 = state_12318__$1;(statearr_12322_12358[(2)] = null);
(statearr_12322_12358[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (1)))
{var state_12318__$1 = state_12318;var statearr_12323_12359 = state_12318__$1;(statearr_12323_12359[(2)] = null);
(statearr_12323_12359[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (4)))
{var inst_12264 = (state_12318[(13)]);var inst_12264__$1 = (state_12318[(2)]);var inst_12265 = (inst_12264__$1 == null);var state_12318__$1 = (function (){var statearr_12327 = state_12318;(statearr_12327[(13)] = inst_12264__$1);
return statearr_12327;
})();if(cljs.core.truth_(inst_12265))
{var statearr_12328_12360 = state_12318__$1;(statearr_12328_12360[(1)] = (5));
} else
{var statearr_12329_12361 = state_12318__$1;(statearr_12329_12361[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (15)))
{var state_12318__$1 = state_12318;var statearr_12330_12362 = state_12318__$1;(statearr_12330_12362[(2)] = null);
(statearr_12330_12362[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (13)))
{var inst_12276 = (state_12318[(8)]);var inst_12278 = (state_12318[(9)]);var inst_12275 = (state_12318[(11)]);var inst_12277 = (state_12318[(12)]);var inst_12285 = (state_12318[(2)]);var inst_12286 = (inst_12278 + (1));var tmp12324 = inst_12276;var tmp12325 = inst_12275;var tmp12326 = inst_12277;var inst_12275__$1 = tmp12325;var inst_12276__$1 = tmp12324;var inst_12277__$1 = tmp12326;var inst_12278__$1 = inst_12286;var state_12318__$1 = (function (){var statearr_12331 = state_12318;(statearr_12331[(8)] = inst_12276__$1);
(statearr_12331[(9)] = inst_12278__$1);
(statearr_12331[(14)] = inst_12285);
(statearr_12331[(11)] = inst_12275__$1);
(statearr_12331[(12)] = inst_12277__$1);
return statearr_12331;
})();var statearr_12332_12363 = state_12318__$1;(statearr_12332_12363[(2)] = null);
(statearr_12332_12363[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (6)))
{var inst_12264 = (state_12318[(13)]);var inst_12269 = f.call(null,inst_12264);var inst_12274 = cljs.core.seq.call(null,inst_12269);var inst_12275 = inst_12274;var inst_12276 = null;var inst_12277 = (0);var inst_12278 = (0);var state_12318__$1 = (function (){var statearr_12333 = state_12318;(statearr_12333[(8)] = inst_12276);
(statearr_12333[(9)] = inst_12278);
(statearr_12333[(11)] = inst_12275);
(statearr_12333[(12)] = inst_12277);
return statearr_12333;
})();var statearr_12334_12364 = state_12318__$1;(statearr_12334_12364[(2)] = null);
(statearr_12334_12364[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (17)))
{var inst_12289 = (state_12318[(7)]);var inst_12293 = cljs.core.chunk_first.call(null,inst_12289);var inst_12294 = cljs.core.chunk_rest.call(null,inst_12289);var inst_12295 = cljs.core.count.call(null,inst_12293);var inst_12275 = inst_12294;var inst_12276 = inst_12293;var inst_12277 = inst_12295;var inst_12278 = (0);var state_12318__$1 = (function (){var statearr_12335 = state_12318;(statearr_12335[(8)] = inst_12276);
(statearr_12335[(9)] = inst_12278);
(statearr_12335[(11)] = inst_12275);
(statearr_12335[(12)] = inst_12277);
return statearr_12335;
})();var statearr_12336_12365 = state_12318__$1;(statearr_12336_12365[(2)] = null);
(statearr_12336_12365[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (3)))
{var inst_12316 = (state_12318[(2)]);var state_12318__$1 = state_12318;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12318__$1,inst_12316);
} else
{if((state_val_12319 === (12)))
{var inst_12309 = (state_12318[(2)]);var state_12318__$1 = state_12318;var statearr_12337_12366 = state_12318__$1;(statearr_12337_12366[(2)] = inst_12309);
(statearr_12337_12366[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (2)))
{var state_12318__$1 = state_12318;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12318__$1,(4),in$);
} else
{if((state_val_12319 === (19)))
{var inst_12304 = (state_12318[(2)]);var state_12318__$1 = state_12318;var statearr_12338_12367 = state_12318__$1;(statearr_12338_12367[(2)] = inst_12304);
(statearr_12338_12367[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (11)))
{var inst_12289 = (state_12318[(7)]);var inst_12275 = (state_12318[(11)]);var inst_12289__$1 = cljs.core.seq.call(null,inst_12275);var state_12318__$1 = (function (){var statearr_12339 = state_12318;(statearr_12339[(7)] = inst_12289__$1);
return statearr_12339;
})();if(inst_12289__$1)
{var statearr_12340_12368 = state_12318__$1;(statearr_12340_12368[(1)] = (14));
} else
{var statearr_12341_12369 = state_12318__$1;(statearr_12341_12369[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (9)))
{var inst_12311 = (state_12318[(2)]);var state_12318__$1 = (function (){var statearr_12342 = state_12318;(statearr_12342[(15)] = inst_12311);
return statearr_12342;
})();var statearr_12343_12370 = state_12318__$1;(statearr_12343_12370[(2)] = null);
(statearr_12343_12370[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (5)))
{var inst_12267 = cljs.core.async.close_BANG_.call(null,out);var state_12318__$1 = state_12318;var statearr_12344_12371 = state_12318__$1;(statearr_12344_12371[(2)] = inst_12267);
(statearr_12344_12371[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (14)))
{var inst_12289 = (state_12318[(7)]);var inst_12291 = cljs.core.chunked_seq_QMARK_.call(null,inst_12289);var state_12318__$1 = state_12318;if(inst_12291)
{var statearr_12345_12372 = state_12318__$1;(statearr_12345_12372[(1)] = (17));
} else
{var statearr_12346_12373 = state_12318__$1;(statearr_12346_12373[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (16)))
{var inst_12307 = (state_12318[(2)]);var state_12318__$1 = state_12318;var statearr_12347_12374 = state_12318__$1;(statearr_12347_12374[(2)] = inst_12307);
(statearr_12347_12374[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12319 === (10)))
{var inst_12276 = (state_12318[(8)]);var inst_12278 = (state_12318[(9)]);var inst_12283 = cljs.core._nth.call(null,inst_12276,inst_12278);var state_12318__$1 = state_12318;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12318__$1,(13),out,inst_12283);
} else
{if((state_val_12319 === (18)))
{var inst_12289 = (state_12318[(7)]);var inst_12298 = cljs.core.first.call(null,inst_12289);var state_12318__$1 = state_12318;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12318__$1,(20),out,inst_12298);
} else
{if((state_val_12319 === (8)))
{var inst_12278 = (state_12318[(9)]);var inst_12277 = (state_12318[(12)]);var inst_12280 = (inst_12278 < inst_12277);var inst_12281 = inst_12280;var state_12318__$1 = state_12318;if(cljs.core.truth_(inst_12281))
{var statearr_12348_12375 = state_12318__$1;(statearr_12348_12375[(1)] = (10));
} else
{var statearr_12349_12376 = state_12318__$1;(statearr_12349_12376[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7070__auto__))
;return ((function (switch__7055__auto__,c__7070__auto__){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_12353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12353[(0)] = state_machine__7056__auto__);
(statearr_12353[(1)] = (1));
return statearr_12353;
});
var state_machine__7056__auto____1 = (function (state_12318){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_12318);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e12354){if((e12354 instanceof Object))
{var ex__7059__auto__ = e12354;var statearr_12355_12377 = state_12318;(statearr_12355_12377[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12318);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12354;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12378 = state_12318;
state_12318 = G__12378;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_12318){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_12318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto__))
})();var state__7072__auto__ = (function (){var statearr_12356 = f__7071__auto__.call(null);(statearr_12356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto__);
return statearr_12356;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto__))
);
return c__7070__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7070__auto___12459 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto___12459){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto___12459){
return (function (state_12438){var state_val_12439 = (state_12438[(1)]);if((state_val_12439 === (7)))
{var inst_12434 = (state_12438[(2)]);var state_12438__$1 = state_12438;var statearr_12440_12460 = state_12438__$1;(statearr_12440_12460[(2)] = inst_12434);
(statearr_12440_12460[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12439 === (1)))
{var state_12438__$1 = state_12438;var statearr_12441_12461 = state_12438__$1;(statearr_12441_12461[(2)] = null);
(statearr_12441_12461[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12439 === (4)))
{var inst_12421 = (state_12438[(7)]);var inst_12421__$1 = (state_12438[(2)]);var inst_12422 = (inst_12421__$1 == null);var state_12438__$1 = (function (){var statearr_12442 = state_12438;(statearr_12442[(7)] = inst_12421__$1);
return statearr_12442;
})();if(cljs.core.truth_(inst_12422))
{var statearr_12443_12462 = state_12438__$1;(statearr_12443_12462[(1)] = (5));
} else
{var statearr_12444_12463 = state_12438__$1;(statearr_12444_12463[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12439 === (6)))
{var inst_12421 = (state_12438[(7)]);var state_12438__$1 = state_12438;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12438__$1,(11),to,inst_12421);
} else
{if((state_val_12439 === (3)))
{var inst_12436 = (state_12438[(2)]);var state_12438__$1 = state_12438;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12438__$1,inst_12436);
} else
{if((state_val_12439 === (2)))
{var state_12438__$1 = state_12438;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12438__$1,(4),from);
} else
{if((state_val_12439 === (11)))
{var inst_12431 = (state_12438[(2)]);var state_12438__$1 = (function (){var statearr_12445 = state_12438;(statearr_12445[(8)] = inst_12431);
return statearr_12445;
})();var statearr_12446_12464 = state_12438__$1;(statearr_12446_12464[(2)] = null);
(statearr_12446_12464[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12439 === (9)))
{var state_12438__$1 = state_12438;var statearr_12447_12465 = state_12438__$1;(statearr_12447_12465[(2)] = null);
(statearr_12447_12465[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12439 === (5)))
{var state_12438__$1 = state_12438;if(cljs.core.truth_(close_QMARK_))
{var statearr_12448_12466 = state_12438__$1;(statearr_12448_12466[(1)] = (8));
} else
{var statearr_12449_12467 = state_12438__$1;(statearr_12449_12467[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12439 === (10)))
{var inst_12428 = (state_12438[(2)]);var state_12438__$1 = state_12438;var statearr_12450_12468 = state_12438__$1;(statearr_12450_12468[(2)] = inst_12428);
(statearr_12450_12468[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12439 === (8)))
{var inst_12425 = cljs.core.async.close_BANG_.call(null,to);var state_12438__$1 = state_12438;var statearr_12451_12469 = state_12438__$1;(statearr_12451_12469[(2)] = inst_12425);
(statearr_12451_12469[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7070__auto___12459))
;return ((function (switch__7055__auto__,c__7070__auto___12459){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_12455 = [null,null,null,null,null,null,null,null,null];(statearr_12455[(0)] = state_machine__7056__auto__);
(statearr_12455[(1)] = (1));
return statearr_12455;
});
var state_machine__7056__auto____1 = (function (state_12438){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_12438);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e12456){if((e12456 instanceof Object))
{var ex__7059__auto__ = e12456;var statearr_12457_12470 = state_12438;(statearr_12457_12470[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12438);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12456;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12471 = state_12438;
state_12438 = G__12471;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_12438){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_12438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto___12459))
})();var state__7072__auto__ = (function (){var statearr_12458 = f__7071__auto__.call(null);(statearr_12458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto___12459);
return statearr_12458;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto___12459))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7070__auto___12558 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto___12558,tc,fc){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto___12558,tc,fc){
return (function (state_12536){var state_val_12537 = (state_12536[(1)]);if((state_val_12537 === (7)))
{var inst_12532 = (state_12536[(2)]);var state_12536__$1 = state_12536;var statearr_12538_12559 = state_12536__$1;(statearr_12538_12559[(2)] = inst_12532);
(statearr_12538_12559[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (1)))
{var state_12536__$1 = state_12536;var statearr_12539_12560 = state_12536__$1;(statearr_12539_12560[(2)] = null);
(statearr_12539_12560[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (4)))
{var inst_12517 = (state_12536[(7)]);var inst_12517__$1 = (state_12536[(2)]);var inst_12518 = (inst_12517__$1 == null);var state_12536__$1 = (function (){var statearr_12540 = state_12536;(statearr_12540[(7)] = inst_12517__$1);
return statearr_12540;
})();if(cljs.core.truth_(inst_12518))
{var statearr_12541_12561 = state_12536__$1;(statearr_12541_12561[(1)] = (5));
} else
{var statearr_12542_12562 = state_12536__$1;(statearr_12542_12562[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (6)))
{var inst_12517 = (state_12536[(7)]);var inst_12523 = p.call(null,inst_12517);var state_12536__$1 = state_12536;if(cljs.core.truth_(inst_12523))
{var statearr_12543_12563 = state_12536__$1;(statearr_12543_12563[(1)] = (9));
} else
{var statearr_12544_12564 = state_12536__$1;(statearr_12544_12564[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (3)))
{var inst_12534 = (state_12536[(2)]);var state_12536__$1 = state_12536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12536__$1,inst_12534);
} else
{if((state_val_12537 === (2)))
{var state_12536__$1 = state_12536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12536__$1,(4),ch);
} else
{if((state_val_12537 === (11)))
{var inst_12517 = (state_12536[(7)]);var inst_12527 = (state_12536[(2)]);var state_12536__$1 = state_12536;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12536__$1,(8),inst_12527,inst_12517);
} else
{if((state_val_12537 === (9)))
{var state_12536__$1 = state_12536;var statearr_12545_12565 = state_12536__$1;(statearr_12545_12565[(2)] = tc);
(statearr_12545_12565[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (5)))
{var inst_12520 = cljs.core.async.close_BANG_.call(null,tc);var inst_12521 = cljs.core.async.close_BANG_.call(null,fc);var state_12536__$1 = (function (){var statearr_12546 = state_12536;(statearr_12546[(8)] = inst_12520);
return statearr_12546;
})();var statearr_12547_12566 = state_12536__$1;(statearr_12547_12566[(2)] = inst_12521);
(statearr_12547_12566[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (10)))
{var state_12536__$1 = state_12536;var statearr_12548_12567 = state_12536__$1;(statearr_12548_12567[(2)] = fc);
(statearr_12548_12567[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (8)))
{var inst_12529 = (state_12536[(2)]);var state_12536__$1 = (function (){var statearr_12549 = state_12536;(statearr_12549[(9)] = inst_12529);
return statearr_12549;
})();var statearr_12550_12568 = state_12536__$1;(statearr_12550_12568[(2)] = null);
(statearr_12550_12568[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7070__auto___12558,tc,fc))
;return ((function (switch__7055__auto__,c__7070__auto___12558,tc,fc){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_12554 = [null,null,null,null,null,null,null,null,null,null];(statearr_12554[(0)] = state_machine__7056__auto__);
(statearr_12554[(1)] = (1));
return statearr_12554;
});
var state_machine__7056__auto____1 = (function (state_12536){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_12536);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e12555){if((e12555 instanceof Object))
{var ex__7059__auto__ = e12555;var statearr_12556_12569 = state_12536;(statearr_12556_12569[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12536);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12555;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12570 = state_12536;
state_12536 = G__12570;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_12536){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_12536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto___12558,tc,fc))
})();var state__7072__auto__ = (function (){var statearr_12557 = f__7071__auto__.call(null);(statearr_12557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto___12558);
return statearr_12557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto___12558,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7070__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto__){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto__){
return (function (state_12617){var state_val_12618 = (state_12617[(1)]);if((state_val_12618 === (7)))
{var inst_12613 = (state_12617[(2)]);var state_12617__$1 = state_12617;var statearr_12619_12635 = state_12617__$1;(statearr_12619_12635[(2)] = inst_12613);
(statearr_12619_12635[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12618 === (6)))
{var inst_12603 = (state_12617[(7)]);var inst_12606 = (state_12617[(8)]);var inst_12610 = f.call(null,inst_12603,inst_12606);var inst_12603__$1 = inst_12610;var state_12617__$1 = (function (){var statearr_12620 = state_12617;(statearr_12620[(7)] = inst_12603__$1);
return statearr_12620;
})();var statearr_12621_12636 = state_12617__$1;(statearr_12621_12636[(2)] = null);
(statearr_12621_12636[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12618 === (5)))
{var inst_12603 = (state_12617[(7)]);var state_12617__$1 = state_12617;var statearr_12622_12637 = state_12617__$1;(statearr_12622_12637[(2)] = inst_12603);
(statearr_12622_12637[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12618 === (4)))
{var inst_12606 = (state_12617[(8)]);var inst_12606__$1 = (state_12617[(2)]);var inst_12607 = (inst_12606__$1 == null);var state_12617__$1 = (function (){var statearr_12623 = state_12617;(statearr_12623[(8)] = inst_12606__$1);
return statearr_12623;
})();if(cljs.core.truth_(inst_12607))
{var statearr_12624_12638 = state_12617__$1;(statearr_12624_12638[(1)] = (5));
} else
{var statearr_12625_12639 = state_12617__$1;(statearr_12625_12639[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12618 === (3)))
{var inst_12615 = (state_12617[(2)]);var state_12617__$1 = state_12617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12617__$1,inst_12615);
} else
{if((state_val_12618 === (2)))
{var state_12617__$1 = state_12617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12617__$1,(4),ch);
} else
{if((state_val_12618 === (1)))
{var inst_12603 = init;var state_12617__$1 = (function (){var statearr_12626 = state_12617;(statearr_12626[(7)] = inst_12603);
return statearr_12626;
})();var statearr_12627_12640 = state_12617__$1;(statearr_12627_12640[(2)] = null);
(statearr_12627_12640[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__7070__auto__))
;return ((function (switch__7055__auto__,c__7070__auto__){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_12631 = [null,null,null,null,null,null,null,null,null];(statearr_12631[(0)] = state_machine__7056__auto__);
(statearr_12631[(1)] = (1));
return statearr_12631;
});
var state_machine__7056__auto____1 = (function (state_12617){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_12617);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e12632){if((e12632 instanceof Object))
{var ex__7059__auto__ = e12632;var statearr_12633_12641 = state_12617;(statearr_12633_12641[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12632;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12642 = state_12617;
state_12617 = G__12642;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_12617){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_12617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto__))
})();var state__7072__auto__ = (function (){var statearr_12634 = f__7071__auto__.call(null);(statearr_12634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto__);
return statearr_12634;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto__))
);
return c__7070__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7070__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto__){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto__){
return (function (state_12704){var state_val_12705 = (state_12704[(1)]);if((state_val_12705 === (7)))
{var inst_12685 = (state_12704[(7)]);var inst_12690 = (state_12704[(2)]);var inst_12691 = cljs.core.next.call(null,inst_12685);var inst_12685__$1 = inst_12691;var state_12704__$1 = (function (){var statearr_12706 = state_12704;(statearr_12706[(7)] = inst_12685__$1);
(statearr_12706[(8)] = inst_12690);
return statearr_12706;
})();var statearr_12707_12725 = state_12704__$1;(statearr_12707_12725[(2)] = null);
(statearr_12707_12725[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12705 === (1)))
{var inst_12684 = cljs.core.seq.call(null,coll);var inst_12685 = inst_12684;var state_12704__$1 = (function (){var statearr_12708 = state_12704;(statearr_12708[(7)] = inst_12685);
return statearr_12708;
})();var statearr_12709_12726 = state_12704__$1;(statearr_12709_12726[(2)] = null);
(statearr_12709_12726[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12705 === (4)))
{var inst_12685 = (state_12704[(7)]);var inst_12688 = cljs.core.first.call(null,inst_12685);var state_12704__$1 = state_12704;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12704__$1,(7),ch,inst_12688);
} else
{if((state_val_12705 === (6)))
{var inst_12700 = (state_12704[(2)]);var state_12704__$1 = state_12704;var statearr_12710_12727 = state_12704__$1;(statearr_12710_12727[(2)] = inst_12700);
(statearr_12710_12727[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12705 === (3)))
{var inst_12702 = (state_12704[(2)]);var state_12704__$1 = state_12704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12704__$1,inst_12702);
} else
{if((state_val_12705 === (2)))
{var inst_12685 = (state_12704[(7)]);var state_12704__$1 = state_12704;if(cljs.core.truth_(inst_12685))
{var statearr_12711_12728 = state_12704__$1;(statearr_12711_12728[(1)] = (4));
} else
{var statearr_12712_12729 = state_12704__$1;(statearr_12712_12729[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12705 === (9)))
{var state_12704__$1 = state_12704;var statearr_12713_12730 = state_12704__$1;(statearr_12713_12730[(2)] = null);
(statearr_12713_12730[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12705 === (5)))
{var state_12704__$1 = state_12704;if(cljs.core.truth_(close_QMARK_))
{var statearr_12714_12731 = state_12704__$1;(statearr_12714_12731[(1)] = (8));
} else
{var statearr_12715_12732 = state_12704__$1;(statearr_12715_12732[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12705 === (10)))
{var inst_12698 = (state_12704[(2)]);var state_12704__$1 = state_12704;var statearr_12716_12733 = state_12704__$1;(statearr_12716_12733[(2)] = inst_12698);
(statearr_12716_12733[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12705 === (8)))
{var inst_12695 = cljs.core.async.close_BANG_.call(null,ch);var state_12704__$1 = state_12704;var statearr_12717_12734 = state_12704__$1;(statearr_12717_12734[(2)] = inst_12695);
(statearr_12717_12734[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7070__auto__))
;return ((function (switch__7055__auto__,c__7070__auto__){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_12721 = [null,null,null,null,null,null,null,null,null];(statearr_12721[(0)] = state_machine__7056__auto__);
(statearr_12721[(1)] = (1));
return statearr_12721;
});
var state_machine__7056__auto____1 = (function (state_12704){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_12704);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e12722){if((e12722 instanceof Object))
{var ex__7059__auto__ = e12722;var statearr_12723_12735 = state_12704;(statearr_12723_12735[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12704);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12722;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12736 = state_12704;
state_12704 = G__12736;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_12704){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_12704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto__))
})();var state__7072__auto__ = (function (){var statearr_12724 = f__7071__auto__.call(null);(statearr_12724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto__);
return statearr_12724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto__))
);
return c__7070__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12738 = {};return obj12738;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12740 = {};return obj12740;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12964 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12964 = (function (cs,ch,mult,meta12965){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12965 = meta12965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12964.cljs$lang$type = true;
cljs.core.async.t12964.cljs$lang$ctorStr = "cljs.core.async/t12964";
cljs.core.async.t12964.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12964");
});})(cs))
;
cljs.core.async.t12964.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12964.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12964.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12964.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12964.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12966){var self__ = this;
var _12966__$1 = this;return self__.meta12965;
});})(cs))
;
cljs.core.async.t12964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12966,meta12965__$1){var self__ = this;
var _12966__$1 = this;return (new cljs.core.async.t12964(self__.cs,self__.ch,self__.mult,meta12965__$1));
});})(cs))
;
cljs.core.async.__GT_t12964 = ((function (cs){
return (function __GT_t12964(cs__$1,ch__$1,mult__$1,meta12965){return (new cljs.core.async.t12964(cs__$1,ch__$1,mult__$1,meta12965));
});})(cs))
;
}
return (new cljs.core.async.t12964(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7070__auto___13187 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto___13187,cs,m,dchan,dctr,done){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto___13187,cs,m,dchan,dctr,done){
return (function (state_13101){var state_val_13102 = (state_13101[(1)]);if((state_val_13102 === (7)))
{var inst_13097 = (state_13101[(2)]);var state_13101__$1 = state_13101;var statearr_13103_13188 = state_13101__$1;(statearr_13103_13188[(2)] = inst_13097);
(statearr_13103_13188[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (20)))
{var inst_12998 = (state_13101[(7)]);var inst_13008 = cljs.core.first.call(null,inst_12998);var inst_13009 = cljs.core.nth.call(null,inst_13008,(0),null);var inst_13010 = cljs.core.nth.call(null,inst_13008,(1),null);var state_13101__$1 = (function (){var statearr_13104 = state_13101;(statearr_13104[(8)] = inst_13009);
return statearr_13104;
})();if(cljs.core.truth_(inst_13010))
{var statearr_13105_13189 = state_13101__$1;(statearr_13105_13189[(1)] = (22));
} else
{var statearr_13106_13190 = state_13101__$1;(statearr_13106_13190[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (27)))
{var inst_13038 = (state_13101[(9)]);var inst_13040 = (state_13101[(10)]);var inst_13045 = cljs.core._nth.call(null,inst_13038,inst_13040);var state_13101__$1 = (function (){var statearr_13107 = state_13101;(statearr_13107[(11)] = inst_13045);
return statearr_13107;
})();var statearr_13108_13191 = state_13101__$1;(statearr_13108_13191[(2)] = null);
(statearr_13108_13191[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (1)))
{var state_13101__$1 = state_13101;var statearr_13109_13192 = state_13101__$1;(statearr_13109_13192[(2)] = null);
(statearr_13109_13192[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (24)))
{var inst_12998 = (state_13101[(7)]);var inst_13015 = (state_13101[(2)]);var inst_13016 = cljs.core.next.call(null,inst_12998);var inst_12978 = inst_13016;var inst_12979 = null;var inst_12980 = (0);var inst_12981 = (0);var state_13101__$1 = (function (){var statearr_13110 = state_13101;(statearr_13110[(12)] = inst_13015);
(statearr_13110[(13)] = inst_12979);
(statearr_13110[(14)] = inst_12981);
(statearr_13110[(15)] = inst_12980);
(statearr_13110[(16)] = inst_12978);
return statearr_13110;
})();var statearr_13111_13193 = state_13101__$1;(statearr_13111_13193[(2)] = null);
(statearr_13111_13193[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (39)))
{var inst_13058 = (state_13101[(17)]);var inst_13076 = (state_13101[(2)]);var inst_13077 = cljs.core.next.call(null,inst_13058);var inst_13037 = inst_13077;var inst_13038 = null;var inst_13039 = (0);var inst_13040 = (0);var state_13101__$1 = (function (){var statearr_13115 = state_13101;(statearr_13115[(9)] = inst_13038);
(statearr_13115[(18)] = inst_13076);
(statearr_13115[(10)] = inst_13040);
(statearr_13115[(19)] = inst_13039);
(statearr_13115[(20)] = inst_13037);
return statearr_13115;
})();var statearr_13116_13194 = state_13101__$1;(statearr_13116_13194[(2)] = null);
(statearr_13116_13194[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (4)))
{var inst_12969 = (state_13101[(21)]);var inst_12969__$1 = (state_13101[(2)]);var inst_12970 = (inst_12969__$1 == null);var state_13101__$1 = (function (){var statearr_13117 = state_13101;(statearr_13117[(21)] = inst_12969__$1);
return statearr_13117;
})();if(cljs.core.truth_(inst_12970))
{var statearr_13118_13195 = state_13101__$1;(statearr_13118_13195[(1)] = (5));
} else
{var statearr_13119_13196 = state_13101__$1;(statearr_13119_13196[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (15)))
{var inst_12979 = (state_13101[(13)]);var inst_12981 = (state_13101[(14)]);var inst_12980 = (state_13101[(15)]);var inst_12978 = (state_13101[(16)]);var inst_12994 = (state_13101[(2)]);var inst_12995 = (inst_12981 + (1));var tmp13112 = inst_12979;var tmp13113 = inst_12980;var tmp13114 = inst_12978;var inst_12978__$1 = tmp13114;var inst_12979__$1 = tmp13112;var inst_12980__$1 = tmp13113;var inst_12981__$1 = inst_12995;var state_13101__$1 = (function (){var statearr_13120 = state_13101;(statearr_13120[(13)] = inst_12979__$1);
(statearr_13120[(14)] = inst_12981__$1);
(statearr_13120[(15)] = inst_12980__$1);
(statearr_13120[(22)] = inst_12994);
(statearr_13120[(16)] = inst_12978__$1);
return statearr_13120;
})();var statearr_13121_13197 = state_13101__$1;(statearr_13121_13197[(2)] = null);
(statearr_13121_13197[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (21)))
{var inst_13019 = (state_13101[(2)]);var state_13101__$1 = state_13101;var statearr_13122_13198 = state_13101__$1;(statearr_13122_13198[(2)] = inst_13019);
(statearr_13122_13198[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (31)))
{var inst_13045 = (state_13101[(11)]);var inst_13046 = (state_13101[(2)]);var inst_13047 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13048 = cljs.core.async.untap_STAR_.call(null,m,inst_13045);var state_13101__$1 = (function (){var statearr_13123 = state_13101;(statearr_13123[(23)] = inst_13047);
(statearr_13123[(24)] = inst_13046);
return statearr_13123;
})();var statearr_13124_13199 = state_13101__$1;(statearr_13124_13199[(2)] = inst_13048);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13101__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (32)))
{var inst_12969 = (state_13101[(21)]);var inst_13045 = (state_13101[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13101,(31),Object,null,(30));var inst_13052 = cljs.core.async.put_BANG_.call(null,inst_13045,inst_12969,done);var state_13101__$1 = state_13101;var statearr_13125_13200 = state_13101__$1;(statearr_13125_13200[(2)] = inst_13052);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13101__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (40)))
{var inst_13067 = (state_13101[(25)]);var inst_13068 = (state_13101[(2)]);var inst_13069 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13070 = cljs.core.async.untap_STAR_.call(null,m,inst_13067);var state_13101__$1 = (function (){var statearr_13126 = state_13101;(statearr_13126[(26)] = inst_13068);
(statearr_13126[(27)] = inst_13069);
return statearr_13126;
})();var statearr_13127_13201 = state_13101__$1;(statearr_13127_13201[(2)] = inst_13070);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13101__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (33)))
{var inst_13058 = (state_13101[(17)]);var inst_13060 = cljs.core.chunked_seq_QMARK_.call(null,inst_13058);var state_13101__$1 = state_13101;if(inst_13060)
{var statearr_13128_13202 = state_13101__$1;(statearr_13128_13202[(1)] = (36));
} else
{var statearr_13129_13203 = state_13101__$1;(statearr_13129_13203[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (13)))
{var inst_12988 = (state_13101[(28)]);var inst_12991 = cljs.core.async.close_BANG_.call(null,inst_12988);var state_13101__$1 = state_13101;var statearr_13130_13204 = state_13101__$1;(statearr_13130_13204[(2)] = inst_12991);
(statearr_13130_13204[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (22)))
{var inst_13009 = (state_13101[(8)]);var inst_13012 = cljs.core.async.close_BANG_.call(null,inst_13009);var state_13101__$1 = state_13101;var statearr_13131_13205 = state_13101__$1;(statearr_13131_13205[(2)] = inst_13012);
(statearr_13131_13205[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (36)))
{var inst_13058 = (state_13101[(17)]);var inst_13062 = cljs.core.chunk_first.call(null,inst_13058);var inst_13063 = cljs.core.chunk_rest.call(null,inst_13058);var inst_13064 = cljs.core.count.call(null,inst_13062);var inst_13037 = inst_13063;var inst_13038 = inst_13062;var inst_13039 = inst_13064;var inst_13040 = (0);var state_13101__$1 = (function (){var statearr_13132 = state_13101;(statearr_13132[(9)] = inst_13038);
(statearr_13132[(10)] = inst_13040);
(statearr_13132[(19)] = inst_13039);
(statearr_13132[(20)] = inst_13037);
return statearr_13132;
})();var statearr_13133_13206 = state_13101__$1;(statearr_13133_13206[(2)] = null);
(statearr_13133_13206[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (41)))
{var inst_12969 = (state_13101[(21)]);var inst_13067 = (state_13101[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13101,(40),Object,null,(39));var inst_13074 = cljs.core.async.put_BANG_.call(null,inst_13067,inst_12969,done);var state_13101__$1 = state_13101;var statearr_13134_13207 = state_13101__$1;(statearr_13134_13207[(2)] = inst_13074);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13101__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (43)))
{var state_13101__$1 = state_13101;var statearr_13135_13208 = state_13101__$1;(statearr_13135_13208[(2)] = null);
(statearr_13135_13208[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (29)))
{var inst_13085 = (state_13101[(2)]);var state_13101__$1 = state_13101;var statearr_13136_13209 = state_13101__$1;(statearr_13136_13209[(2)] = inst_13085);
(statearr_13136_13209[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (44)))
{var inst_13094 = (state_13101[(2)]);var state_13101__$1 = (function (){var statearr_13137 = state_13101;(statearr_13137[(29)] = inst_13094);
return statearr_13137;
})();var statearr_13138_13210 = state_13101__$1;(statearr_13138_13210[(2)] = null);
(statearr_13138_13210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (6)))
{var inst_13029 = (state_13101[(30)]);var inst_13028 = cljs.core.deref.call(null,cs);var inst_13029__$1 = cljs.core.keys.call(null,inst_13028);var inst_13030 = cljs.core.count.call(null,inst_13029__$1);var inst_13031 = cljs.core.reset_BANG_.call(null,dctr,inst_13030);var inst_13036 = cljs.core.seq.call(null,inst_13029__$1);var inst_13037 = inst_13036;var inst_13038 = null;var inst_13039 = (0);var inst_13040 = (0);var state_13101__$1 = (function (){var statearr_13139 = state_13101;(statearr_13139[(9)] = inst_13038);
(statearr_13139[(31)] = inst_13031);
(statearr_13139[(30)] = inst_13029__$1);
(statearr_13139[(10)] = inst_13040);
(statearr_13139[(19)] = inst_13039);
(statearr_13139[(20)] = inst_13037);
return statearr_13139;
})();var statearr_13140_13211 = state_13101__$1;(statearr_13140_13211[(2)] = null);
(statearr_13140_13211[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (28)))
{var inst_13058 = (state_13101[(17)]);var inst_13037 = (state_13101[(20)]);var inst_13058__$1 = cljs.core.seq.call(null,inst_13037);var state_13101__$1 = (function (){var statearr_13141 = state_13101;(statearr_13141[(17)] = inst_13058__$1);
return statearr_13141;
})();if(inst_13058__$1)
{var statearr_13142_13212 = state_13101__$1;(statearr_13142_13212[(1)] = (33));
} else
{var statearr_13143_13213 = state_13101__$1;(statearr_13143_13213[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (25)))
{var inst_13040 = (state_13101[(10)]);var inst_13039 = (state_13101[(19)]);var inst_13042 = (inst_13040 < inst_13039);var inst_13043 = inst_13042;var state_13101__$1 = state_13101;if(cljs.core.truth_(inst_13043))
{var statearr_13144_13214 = state_13101__$1;(statearr_13144_13214[(1)] = (27));
} else
{var statearr_13145_13215 = state_13101__$1;(statearr_13145_13215[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (34)))
{var state_13101__$1 = state_13101;var statearr_13146_13216 = state_13101__$1;(statearr_13146_13216[(2)] = null);
(statearr_13146_13216[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (17)))
{var state_13101__$1 = state_13101;var statearr_13147_13217 = state_13101__$1;(statearr_13147_13217[(2)] = null);
(statearr_13147_13217[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (3)))
{var inst_13099 = (state_13101[(2)]);var state_13101__$1 = state_13101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13101__$1,inst_13099);
} else
{if((state_val_13102 === (12)))
{var inst_13024 = (state_13101[(2)]);var state_13101__$1 = state_13101;var statearr_13148_13218 = state_13101__$1;(statearr_13148_13218[(2)] = inst_13024);
(statearr_13148_13218[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (2)))
{var state_13101__$1 = state_13101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13101__$1,(4),ch);
} else
{if((state_val_13102 === (23)))
{var state_13101__$1 = state_13101;var statearr_13149_13219 = state_13101__$1;(statearr_13149_13219[(2)] = null);
(statearr_13149_13219[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (35)))
{var inst_13083 = (state_13101[(2)]);var state_13101__$1 = state_13101;var statearr_13150_13220 = state_13101__$1;(statearr_13150_13220[(2)] = inst_13083);
(statearr_13150_13220[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (19)))
{var inst_12998 = (state_13101[(7)]);var inst_13002 = cljs.core.chunk_first.call(null,inst_12998);var inst_13003 = cljs.core.chunk_rest.call(null,inst_12998);var inst_13004 = cljs.core.count.call(null,inst_13002);var inst_12978 = inst_13003;var inst_12979 = inst_13002;var inst_12980 = inst_13004;var inst_12981 = (0);var state_13101__$1 = (function (){var statearr_13151 = state_13101;(statearr_13151[(13)] = inst_12979);
(statearr_13151[(14)] = inst_12981);
(statearr_13151[(15)] = inst_12980);
(statearr_13151[(16)] = inst_12978);
return statearr_13151;
})();var statearr_13152_13221 = state_13101__$1;(statearr_13152_13221[(2)] = null);
(statearr_13152_13221[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (11)))
{var inst_12998 = (state_13101[(7)]);var inst_12978 = (state_13101[(16)]);var inst_12998__$1 = cljs.core.seq.call(null,inst_12978);var state_13101__$1 = (function (){var statearr_13153 = state_13101;(statearr_13153[(7)] = inst_12998__$1);
return statearr_13153;
})();if(inst_12998__$1)
{var statearr_13154_13222 = state_13101__$1;(statearr_13154_13222[(1)] = (16));
} else
{var statearr_13155_13223 = state_13101__$1;(statearr_13155_13223[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (9)))
{var inst_13026 = (state_13101[(2)]);var state_13101__$1 = state_13101;var statearr_13156_13224 = state_13101__$1;(statearr_13156_13224[(2)] = inst_13026);
(statearr_13156_13224[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (5)))
{var inst_12976 = cljs.core.deref.call(null,cs);var inst_12977 = cljs.core.seq.call(null,inst_12976);var inst_12978 = inst_12977;var inst_12979 = null;var inst_12980 = (0);var inst_12981 = (0);var state_13101__$1 = (function (){var statearr_13157 = state_13101;(statearr_13157[(13)] = inst_12979);
(statearr_13157[(14)] = inst_12981);
(statearr_13157[(15)] = inst_12980);
(statearr_13157[(16)] = inst_12978);
return statearr_13157;
})();var statearr_13158_13225 = state_13101__$1;(statearr_13158_13225[(2)] = null);
(statearr_13158_13225[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (14)))
{var state_13101__$1 = state_13101;var statearr_13159_13226 = state_13101__$1;(statearr_13159_13226[(2)] = null);
(statearr_13159_13226[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (45)))
{var inst_13091 = (state_13101[(2)]);var state_13101__$1 = state_13101;var statearr_13160_13227 = state_13101__$1;(statearr_13160_13227[(2)] = inst_13091);
(statearr_13160_13227[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (26)))
{var inst_13029 = (state_13101[(30)]);var inst_13087 = (state_13101[(2)]);var inst_13088 = cljs.core.seq.call(null,inst_13029);var state_13101__$1 = (function (){var statearr_13161 = state_13101;(statearr_13161[(32)] = inst_13087);
return statearr_13161;
})();if(inst_13088)
{var statearr_13162_13228 = state_13101__$1;(statearr_13162_13228[(1)] = (42));
} else
{var statearr_13163_13229 = state_13101__$1;(statearr_13163_13229[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (16)))
{var inst_12998 = (state_13101[(7)]);var inst_13000 = cljs.core.chunked_seq_QMARK_.call(null,inst_12998);var state_13101__$1 = state_13101;if(inst_13000)
{var statearr_13167_13230 = state_13101__$1;(statearr_13167_13230[(1)] = (19));
} else
{var statearr_13168_13231 = state_13101__$1;(statearr_13168_13231[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (38)))
{var inst_13080 = (state_13101[(2)]);var state_13101__$1 = state_13101;var statearr_13169_13232 = state_13101__$1;(statearr_13169_13232[(2)] = inst_13080);
(statearr_13169_13232[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (30)))
{var inst_13038 = (state_13101[(9)]);var inst_13040 = (state_13101[(10)]);var inst_13039 = (state_13101[(19)]);var inst_13037 = (state_13101[(20)]);var inst_13054 = (state_13101[(2)]);var inst_13055 = (inst_13040 + (1));var tmp13164 = inst_13038;var tmp13165 = inst_13039;var tmp13166 = inst_13037;var inst_13037__$1 = tmp13166;var inst_13038__$1 = tmp13164;var inst_13039__$1 = tmp13165;var inst_13040__$1 = inst_13055;var state_13101__$1 = (function (){var statearr_13170 = state_13101;(statearr_13170[(9)] = inst_13038__$1);
(statearr_13170[(33)] = inst_13054);
(statearr_13170[(10)] = inst_13040__$1);
(statearr_13170[(19)] = inst_13039__$1);
(statearr_13170[(20)] = inst_13037__$1);
return statearr_13170;
})();var statearr_13171_13233 = state_13101__$1;(statearr_13171_13233[(2)] = null);
(statearr_13171_13233[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (10)))
{var inst_12979 = (state_13101[(13)]);var inst_12981 = (state_13101[(14)]);var inst_12987 = cljs.core._nth.call(null,inst_12979,inst_12981);var inst_12988 = cljs.core.nth.call(null,inst_12987,(0),null);var inst_12989 = cljs.core.nth.call(null,inst_12987,(1),null);var state_13101__$1 = (function (){var statearr_13172 = state_13101;(statearr_13172[(28)] = inst_12988);
return statearr_13172;
})();if(cljs.core.truth_(inst_12989))
{var statearr_13173_13234 = state_13101__$1;(statearr_13173_13234[(1)] = (13));
} else
{var statearr_13174_13235 = state_13101__$1;(statearr_13174_13235[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (18)))
{var inst_13022 = (state_13101[(2)]);var state_13101__$1 = state_13101;var statearr_13175_13236 = state_13101__$1;(statearr_13175_13236[(2)] = inst_13022);
(statearr_13175_13236[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (42)))
{var state_13101__$1 = state_13101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13101__$1,(45),dchan);
} else
{if((state_val_13102 === (37)))
{var inst_13058 = (state_13101[(17)]);var inst_13067 = cljs.core.first.call(null,inst_13058);var state_13101__$1 = (function (){var statearr_13176 = state_13101;(statearr_13176[(25)] = inst_13067);
return statearr_13176;
})();var statearr_13177_13237 = state_13101__$1;(statearr_13177_13237[(2)] = null);
(statearr_13177_13237[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13102 === (8)))
{var inst_12981 = (state_13101[(14)]);var inst_12980 = (state_13101[(15)]);var inst_12983 = (inst_12981 < inst_12980);var inst_12984 = inst_12983;var state_13101__$1 = state_13101;if(cljs.core.truth_(inst_12984))
{var statearr_13178_13238 = state_13101__$1;(statearr_13178_13238[(1)] = (10));
} else
{var statearr_13179_13239 = state_13101__$1;(statearr_13179_13239[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7070__auto___13187,cs,m,dchan,dctr,done))
;return ((function (switch__7055__auto__,c__7070__auto___13187,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_13183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13183[(0)] = state_machine__7056__auto__);
(statearr_13183[(1)] = (1));
return statearr_13183;
});
var state_machine__7056__auto____1 = (function (state_13101){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_13101);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e13184){if((e13184 instanceof Object))
{var ex__7059__auto__ = e13184;var statearr_13185_13240 = state_13101;(statearr_13185_13240[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13184;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13241 = state_13101;
state_13101 = G__13241;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_13101){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_13101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto___13187,cs,m,dchan,dctr,done))
})();var state__7072__auto__ = (function (){var statearr_13186 = f__7071__auto__.call(null);(statearr_13186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto___13187);
return statearr_13186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto___13187,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13243 = {};return obj13243;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13353 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13353 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13354){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13354 = meta13354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13353.cljs$lang$type = true;
cljs.core.async.t13353.cljs$lang$ctorStr = "cljs.core.async/t13353";
cljs.core.async.t13353.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13353");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13353.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13353.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13353.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13353.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13353.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13353.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13353.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13353.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13355){var self__ = this;
var _13355__$1 = this;return self__.meta13354;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13355,meta13354__$1){var self__ = this;
var _13355__$1 = this;return (new cljs.core.async.t13353(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13354__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13353 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13353(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13354){return (new cljs.core.async.t13353(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13354));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13353(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__7070__auto___13462 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto___13462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto___13462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13420){var state_val_13421 = (state_13420[(1)]);if((state_val_13421 === (7)))
{var inst_13369 = (state_13420[(7)]);var inst_13374 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13369);var state_13420__$1 = state_13420;var statearr_13422_13463 = state_13420__$1;(statearr_13422_13463[(2)] = inst_13374);
(statearr_13422_13463[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (20)))
{var inst_13384 = (state_13420[(8)]);var state_13420__$1 = state_13420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13420__$1,(23),out,inst_13384);
} else
{if((state_val_13421 === (1)))
{var inst_13359 = (state_13420[(9)]);var inst_13359__$1 = calc_state.call(null);var inst_13360 = cljs.core.seq_QMARK_.call(null,inst_13359__$1);var state_13420__$1 = (function (){var statearr_13423 = state_13420;(statearr_13423[(9)] = inst_13359__$1);
return statearr_13423;
})();if(inst_13360)
{var statearr_13424_13464 = state_13420__$1;(statearr_13424_13464[(1)] = (2));
} else
{var statearr_13425_13465 = state_13420__$1;(statearr_13425_13465[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (4)))
{var inst_13359 = (state_13420[(9)]);var inst_13365 = (state_13420[(2)]);var inst_13366 = cljs.core.get.call(null,inst_13365,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13367 = cljs.core.get.call(null,inst_13365,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13368 = cljs.core.get.call(null,inst_13365,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13369 = inst_13359;var state_13420__$1 = (function (){var statearr_13426 = state_13420;(statearr_13426[(7)] = inst_13369);
(statearr_13426[(10)] = inst_13366);
(statearr_13426[(11)] = inst_13367);
(statearr_13426[(12)] = inst_13368);
return statearr_13426;
})();var statearr_13427_13466 = state_13420__$1;(statearr_13427_13466[(2)] = null);
(statearr_13427_13466[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (15)))
{var state_13420__$1 = state_13420;var statearr_13428_13467 = state_13420__$1;(statearr_13428_13467[(2)] = null);
(statearr_13428_13467[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (21)))
{var state_13420__$1 = state_13420;var statearr_13429_13468 = state_13420__$1;(statearr_13429_13468[(2)] = null);
(statearr_13429_13468[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (13)))
{var inst_13416 = (state_13420[(2)]);var state_13420__$1 = state_13420;var statearr_13430_13469 = state_13420__$1;(statearr_13430_13469[(2)] = inst_13416);
(statearr_13430_13469[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (22)))
{var inst_13377 = (state_13420[(13)]);var inst_13413 = (state_13420[(2)]);var inst_13369 = inst_13377;var state_13420__$1 = (function (){var statearr_13431 = state_13420;(statearr_13431[(7)] = inst_13369);
(statearr_13431[(14)] = inst_13413);
return statearr_13431;
})();var statearr_13432_13470 = state_13420__$1;(statearr_13432_13470[(2)] = null);
(statearr_13432_13470[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (6)))
{var inst_13418 = (state_13420[(2)]);var state_13420__$1 = state_13420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13420__$1,inst_13418);
} else
{if((state_val_13421 === (17)))
{var inst_13399 = (state_13420[(15)]);var state_13420__$1 = state_13420;var statearr_13433_13471 = state_13420__$1;(statearr_13433_13471[(2)] = inst_13399);
(statearr_13433_13471[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (3)))
{var inst_13359 = (state_13420[(9)]);var state_13420__$1 = state_13420;var statearr_13434_13472 = state_13420__$1;(statearr_13434_13472[(2)] = inst_13359);
(statearr_13434_13472[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (12)))
{var inst_13399 = (state_13420[(15)]);var inst_13385 = (state_13420[(16)]);var inst_13380 = (state_13420[(17)]);var inst_13399__$1 = inst_13380.call(null,inst_13385);var state_13420__$1 = (function (){var statearr_13435 = state_13420;(statearr_13435[(15)] = inst_13399__$1);
return statearr_13435;
})();if(cljs.core.truth_(inst_13399__$1))
{var statearr_13436_13473 = state_13420__$1;(statearr_13436_13473[(1)] = (17));
} else
{var statearr_13437_13474 = state_13420__$1;(statearr_13437_13474[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (2)))
{var inst_13359 = (state_13420[(9)]);var inst_13362 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13359);var state_13420__$1 = state_13420;var statearr_13438_13475 = state_13420__$1;(statearr_13438_13475[(2)] = inst_13362);
(statearr_13438_13475[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (23)))
{var inst_13410 = (state_13420[(2)]);var state_13420__$1 = state_13420;var statearr_13439_13476 = state_13420__$1;(statearr_13439_13476[(2)] = inst_13410);
(statearr_13439_13476[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (19)))
{var inst_13407 = (state_13420[(2)]);var state_13420__$1 = state_13420;if(cljs.core.truth_(inst_13407))
{var statearr_13440_13477 = state_13420__$1;(statearr_13440_13477[(1)] = (20));
} else
{var statearr_13441_13478 = state_13420__$1;(statearr_13441_13478[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (11)))
{var inst_13384 = (state_13420[(8)]);var inst_13390 = (inst_13384 == null);var state_13420__$1 = state_13420;if(cljs.core.truth_(inst_13390))
{var statearr_13442_13479 = state_13420__$1;(statearr_13442_13479[(1)] = (14));
} else
{var statearr_13443_13480 = state_13420__$1;(statearr_13443_13480[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (9)))
{var inst_13377 = (state_13420[(13)]);var inst_13377__$1 = (state_13420[(2)]);var inst_13378 = cljs.core.get.call(null,inst_13377__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13379 = cljs.core.get.call(null,inst_13377__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13380 = cljs.core.get.call(null,inst_13377__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13420__$1 = (function (){var statearr_13444 = state_13420;(statearr_13444[(13)] = inst_13377__$1);
(statearr_13444[(18)] = inst_13379);
(statearr_13444[(17)] = inst_13380);
return statearr_13444;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13420__$1,(10),inst_13378);
} else
{if((state_val_13421 === (5)))
{var inst_13369 = (state_13420[(7)]);var inst_13372 = cljs.core.seq_QMARK_.call(null,inst_13369);var state_13420__$1 = state_13420;if(inst_13372)
{var statearr_13445_13481 = state_13420__$1;(statearr_13445_13481[(1)] = (7));
} else
{var statearr_13446_13482 = state_13420__$1;(statearr_13446_13482[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (14)))
{var inst_13385 = (state_13420[(16)]);var inst_13392 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13385);var state_13420__$1 = state_13420;var statearr_13447_13483 = state_13420__$1;(statearr_13447_13483[(2)] = inst_13392);
(statearr_13447_13483[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (16)))
{var inst_13395 = (state_13420[(2)]);var inst_13396 = calc_state.call(null);var inst_13369 = inst_13396;var state_13420__$1 = (function (){var statearr_13448 = state_13420;(statearr_13448[(19)] = inst_13395);
(statearr_13448[(7)] = inst_13369);
return statearr_13448;
})();var statearr_13449_13484 = state_13420__$1;(statearr_13449_13484[(2)] = null);
(statearr_13449_13484[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (10)))
{var inst_13384 = (state_13420[(8)]);var inst_13385 = (state_13420[(16)]);var inst_13383 = (state_13420[(2)]);var inst_13384__$1 = cljs.core.nth.call(null,inst_13383,(0),null);var inst_13385__$1 = cljs.core.nth.call(null,inst_13383,(1),null);var inst_13386 = (inst_13384__$1 == null);var inst_13387 = cljs.core._EQ_.call(null,inst_13385__$1,change);var inst_13388 = (inst_13386) || (inst_13387);var state_13420__$1 = (function (){var statearr_13450 = state_13420;(statearr_13450[(8)] = inst_13384__$1);
(statearr_13450[(16)] = inst_13385__$1);
return statearr_13450;
})();if(cljs.core.truth_(inst_13388))
{var statearr_13451_13485 = state_13420__$1;(statearr_13451_13485[(1)] = (11));
} else
{var statearr_13452_13486 = state_13420__$1;(statearr_13452_13486[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (18)))
{var inst_13379 = (state_13420[(18)]);var inst_13385 = (state_13420[(16)]);var inst_13380 = (state_13420[(17)]);var inst_13402 = cljs.core.empty_QMARK_.call(null,inst_13380);var inst_13403 = inst_13379.call(null,inst_13385);var inst_13404 = cljs.core.not.call(null,inst_13403);var inst_13405 = (inst_13402) && (inst_13404);var state_13420__$1 = state_13420;var statearr_13453_13487 = state_13420__$1;(statearr_13453_13487[(2)] = inst_13405);
(statearr_13453_13487[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13421 === (8)))
{var inst_13369 = (state_13420[(7)]);var state_13420__$1 = state_13420;var statearr_13454_13488 = state_13420__$1;(statearr_13454_13488[(2)] = inst_13369);
(statearr_13454_13488[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7070__auto___13462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__7055__auto__,c__7070__auto___13462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_13458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13458[(0)] = state_machine__7056__auto__);
(statearr_13458[(1)] = (1));
return statearr_13458;
});
var state_machine__7056__auto____1 = (function (state_13420){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_13420);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e13459){if((e13459 instanceof Object))
{var ex__7059__auto__ = e13459;var statearr_13460_13489 = state_13420;(statearr_13460_13489[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13420);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13459;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13490 = state_13420;
state_13420 = G__13490;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_13420){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_13420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto___13462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__7072__auto__ = (function (){var statearr_13461 = f__7071__auto__.call(null);(statearr_13461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto___13462);
return statearr_13461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto___13462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13492 = {};return obj13492;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3640__auto__,mults){
return (function (p1__13493_SHARP_){if(cljs.core.truth_(p1__13493_SHARP_.call(null,topic)))
{return p1__13493_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13493_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13618 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13618 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13619){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13619 = meta13619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13618.cljs$lang$type = true;
cljs.core.async.t13618.cljs$lang$ctorStr = "cljs.core.async/t13618";
cljs.core.async.t13618.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13618");
});})(mults,ensure_mult))
;
cljs.core.async.t13618.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13618.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13618.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13618.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13618.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13618.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13620){var self__ = this;
var _13620__$1 = this;return self__.meta13619;
});})(mults,ensure_mult))
;
cljs.core.async.t13618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13620,meta13619__$1){var self__ = this;
var _13620__$1 = this;return (new cljs.core.async.t13618(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13619__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13618 = ((function (mults,ensure_mult){
return (function __GT_t13618(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13619){return (new cljs.core.async.t13618(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13619));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13618(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7070__auto___13742 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto___13742,mults,ensure_mult,p){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto___13742,mults,ensure_mult,p){
return (function (state_13694){var state_val_13695 = (state_13694[(1)]);if((state_val_13695 === (7)))
{var inst_13690 = (state_13694[(2)]);var state_13694__$1 = state_13694;var statearr_13696_13743 = state_13694__$1;(statearr_13696_13743[(2)] = inst_13690);
(statearr_13696_13743[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (20)))
{var state_13694__$1 = state_13694;var statearr_13697_13744 = state_13694__$1;(statearr_13697_13744[(2)] = null);
(statearr_13697_13744[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (1)))
{var state_13694__$1 = state_13694;var statearr_13698_13745 = state_13694__$1;(statearr_13698_13745[(2)] = null);
(statearr_13698_13745[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (24)))
{var inst_13623 = (state_13694[(7)]);var inst_13673 = (state_13694[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13694,(23),Object,null,(22));var inst_13680 = cljs.core.async.muxch_STAR_.call(null,inst_13673);var state_13694__$1 = state_13694;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13694__$1,(25),inst_13680,inst_13623);
} else
{if((state_val_13695 === (4)))
{var inst_13623 = (state_13694[(7)]);var inst_13623__$1 = (state_13694[(2)]);var inst_13624 = (inst_13623__$1 == null);var state_13694__$1 = (function (){var statearr_13699 = state_13694;(statearr_13699[(7)] = inst_13623__$1);
return statearr_13699;
})();if(cljs.core.truth_(inst_13624))
{var statearr_13700_13746 = state_13694__$1;(statearr_13700_13746[(1)] = (5));
} else
{var statearr_13701_13747 = state_13694__$1;(statearr_13701_13747[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (15)))
{var inst_13665 = (state_13694[(2)]);var state_13694__$1 = state_13694;var statearr_13702_13748 = state_13694__$1;(statearr_13702_13748[(2)] = inst_13665);
(statearr_13702_13748[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (21)))
{var inst_13687 = (state_13694[(2)]);var state_13694__$1 = (function (){var statearr_13703 = state_13694;(statearr_13703[(9)] = inst_13687);
return statearr_13703;
})();var statearr_13704_13749 = state_13694__$1;(statearr_13704_13749[(2)] = null);
(statearr_13704_13749[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (13)))
{var inst_13647 = (state_13694[(10)]);var inst_13649 = cljs.core.chunked_seq_QMARK_.call(null,inst_13647);var state_13694__$1 = state_13694;if(inst_13649)
{var statearr_13705_13750 = state_13694__$1;(statearr_13705_13750[(1)] = (16));
} else
{var statearr_13706_13751 = state_13694__$1;(statearr_13706_13751[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (22)))
{var inst_13684 = (state_13694[(2)]);var state_13694__$1 = state_13694;var statearr_13707_13752 = state_13694__$1;(statearr_13707_13752[(2)] = inst_13684);
(statearr_13707_13752[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (6)))
{var inst_13623 = (state_13694[(7)]);var inst_13671 = (state_13694[(11)]);var inst_13673 = (state_13694[(8)]);var inst_13671__$1 = topic_fn.call(null,inst_13623);var inst_13672 = cljs.core.deref.call(null,mults);var inst_13673__$1 = cljs.core.get.call(null,inst_13672,inst_13671__$1);var state_13694__$1 = (function (){var statearr_13708 = state_13694;(statearr_13708[(11)] = inst_13671__$1);
(statearr_13708[(8)] = inst_13673__$1);
return statearr_13708;
})();if(cljs.core.truth_(inst_13673__$1))
{var statearr_13709_13753 = state_13694__$1;(statearr_13709_13753[(1)] = (19));
} else
{var statearr_13710_13754 = state_13694__$1;(statearr_13710_13754[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (25)))
{var inst_13682 = (state_13694[(2)]);var state_13694__$1 = state_13694;var statearr_13711_13755 = state_13694__$1;(statearr_13711_13755[(2)] = inst_13682);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13694__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (17)))
{var inst_13647 = (state_13694[(10)]);var inst_13656 = cljs.core.first.call(null,inst_13647);var inst_13657 = cljs.core.async.muxch_STAR_.call(null,inst_13656);var inst_13658 = cljs.core.async.close_BANG_.call(null,inst_13657);var inst_13659 = cljs.core.next.call(null,inst_13647);var inst_13633 = inst_13659;var inst_13634 = null;var inst_13635 = (0);var inst_13636 = (0);var state_13694__$1 = (function (){var statearr_13712 = state_13694;(statearr_13712[(12)] = inst_13658);
(statearr_13712[(13)] = inst_13634);
(statearr_13712[(14)] = inst_13635);
(statearr_13712[(15)] = inst_13633);
(statearr_13712[(16)] = inst_13636);
return statearr_13712;
})();var statearr_13713_13756 = state_13694__$1;(statearr_13713_13756[(2)] = null);
(statearr_13713_13756[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (3)))
{var inst_13692 = (state_13694[(2)]);var state_13694__$1 = state_13694;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13694__$1,inst_13692);
} else
{if((state_val_13695 === (12)))
{var inst_13667 = (state_13694[(2)]);var state_13694__$1 = state_13694;var statearr_13714_13757 = state_13694__$1;(statearr_13714_13757[(2)] = inst_13667);
(statearr_13714_13757[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (2)))
{var state_13694__$1 = state_13694;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13694__$1,(4),ch);
} else
{if((state_val_13695 === (23)))
{var inst_13671 = (state_13694[(11)]);var inst_13675 = (state_13694[(2)]);var inst_13676 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13671);var state_13694__$1 = (function (){var statearr_13715 = state_13694;(statearr_13715[(17)] = inst_13675);
return statearr_13715;
})();var statearr_13716_13758 = state_13694__$1;(statearr_13716_13758[(2)] = inst_13676);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13694__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (19)))
{var state_13694__$1 = state_13694;var statearr_13717_13759 = state_13694__$1;(statearr_13717_13759[(2)] = null);
(statearr_13717_13759[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (11)))
{var inst_13647 = (state_13694[(10)]);var inst_13633 = (state_13694[(15)]);var inst_13647__$1 = cljs.core.seq.call(null,inst_13633);var state_13694__$1 = (function (){var statearr_13718 = state_13694;(statearr_13718[(10)] = inst_13647__$1);
return statearr_13718;
})();if(inst_13647__$1)
{var statearr_13719_13760 = state_13694__$1;(statearr_13719_13760[(1)] = (13));
} else
{var statearr_13720_13761 = state_13694__$1;(statearr_13720_13761[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (9)))
{var inst_13669 = (state_13694[(2)]);var state_13694__$1 = state_13694;var statearr_13721_13762 = state_13694__$1;(statearr_13721_13762[(2)] = inst_13669);
(statearr_13721_13762[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (5)))
{var inst_13630 = cljs.core.deref.call(null,mults);var inst_13631 = cljs.core.vals.call(null,inst_13630);var inst_13632 = cljs.core.seq.call(null,inst_13631);var inst_13633 = inst_13632;var inst_13634 = null;var inst_13635 = (0);var inst_13636 = (0);var state_13694__$1 = (function (){var statearr_13722 = state_13694;(statearr_13722[(13)] = inst_13634);
(statearr_13722[(14)] = inst_13635);
(statearr_13722[(15)] = inst_13633);
(statearr_13722[(16)] = inst_13636);
return statearr_13722;
})();var statearr_13723_13763 = state_13694__$1;(statearr_13723_13763[(2)] = null);
(statearr_13723_13763[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (14)))
{var state_13694__$1 = state_13694;var statearr_13727_13764 = state_13694__$1;(statearr_13727_13764[(2)] = null);
(statearr_13727_13764[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (16)))
{var inst_13647 = (state_13694[(10)]);var inst_13651 = cljs.core.chunk_first.call(null,inst_13647);var inst_13652 = cljs.core.chunk_rest.call(null,inst_13647);var inst_13653 = cljs.core.count.call(null,inst_13651);var inst_13633 = inst_13652;var inst_13634 = inst_13651;var inst_13635 = inst_13653;var inst_13636 = (0);var state_13694__$1 = (function (){var statearr_13728 = state_13694;(statearr_13728[(13)] = inst_13634);
(statearr_13728[(14)] = inst_13635);
(statearr_13728[(15)] = inst_13633);
(statearr_13728[(16)] = inst_13636);
return statearr_13728;
})();var statearr_13729_13765 = state_13694__$1;(statearr_13729_13765[(2)] = null);
(statearr_13729_13765[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (10)))
{var inst_13634 = (state_13694[(13)]);var inst_13635 = (state_13694[(14)]);var inst_13633 = (state_13694[(15)]);var inst_13636 = (state_13694[(16)]);var inst_13641 = cljs.core._nth.call(null,inst_13634,inst_13636);var inst_13642 = cljs.core.async.muxch_STAR_.call(null,inst_13641);var inst_13643 = cljs.core.async.close_BANG_.call(null,inst_13642);var inst_13644 = (inst_13636 + (1));var tmp13724 = inst_13634;var tmp13725 = inst_13635;var tmp13726 = inst_13633;var inst_13633__$1 = tmp13726;var inst_13634__$1 = tmp13724;var inst_13635__$1 = tmp13725;var inst_13636__$1 = inst_13644;var state_13694__$1 = (function (){var statearr_13730 = state_13694;(statearr_13730[(13)] = inst_13634__$1);
(statearr_13730[(14)] = inst_13635__$1);
(statearr_13730[(15)] = inst_13633__$1);
(statearr_13730[(18)] = inst_13643);
(statearr_13730[(16)] = inst_13636__$1);
return statearr_13730;
})();var statearr_13731_13766 = state_13694__$1;(statearr_13731_13766[(2)] = null);
(statearr_13731_13766[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (18)))
{var inst_13662 = (state_13694[(2)]);var state_13694__$1 = state_13694;var statearr_13732_13767 = state_13694__$1;(statearr_13732_13767[(2)] = inst_13662);
(statearr_13732_13767[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13695 === (8)))
{var inst_13635 = (state_13694[(14)]);var inst_13636 = (state_13694[(16)]);var inst_13638 = (inst_13636 < inst_13635);var inst_13639 = inst_13638;var state_13694__$1 = state_13694;if(cljs.core.truth_(inst_13639))
{var statearr_13733_13768 = state_13694__$1;(statearr_13733_13768[(1)] = (10));
} else
{var statearr_13734_13769 = state_13694__$1;(statearr_13734_13769[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7070__auto___13742,mults,ensure_mult,p))
;return ((function (switch__7055__auto__,c__7070__auto___13742,mults,ensure_mult,p){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_13738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13738[(0)] = state_machine__7056__auto__);
(statearr_13738[(1)] = (1));
return statearr_13738;
});
var state_machine__7056__auto____1 = (function (state_13694){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_13694);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e13739){if((e13739 instanceof Object))
{var ex__7059__auto__ = e13739;var statearr_13740_13770 = state_13694;(statearr_13740_13770[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13694);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13739;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13771 = state_13694;
state_13694 = G__13771;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_13694){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_13694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto___13742,mults,ensure_mult,p))
})();var state__7072__auto__ = (function (){var statearr_13741 = f__7071__auto__.call(null);(statearr_13741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto___13742);
return statearr_13741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto___13742,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__7070__auto___13908 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto___13908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto___13908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13878){var state_val_13879 = (state_13878[(1)]);if((state_val_13879 === (7)))
{var state_13878__$1 = state_13878;var statearr_13880_13909 = state_13878__$1;(statearr_13880_13909[(2)] = null);
(statearr_13880_13909[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13879 === (1)))
{var state_13878__$1 = state_13878;var statearr_13881_13910 = state_13878__$1;(statearr_13881_13910[(2)] = null);
(statearr_13881_13910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13879 === (4)))
{var inst_13842 = (state_13878[(7)]);var inst_13844 = (inst_13842 < cnt);var state_13878__$1 = state_13878;if(cljs.core.truth_(inst_13844))
{var statearr_13882_13911 = state_13878__$1;(statearr_13882_13911[(1)] = (6));
} else
{var statearr_13883_13912 = state_13878__$1;(statearr_13883_13912[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13879 === (15)))
{var inst_13874 = (state_13878[(2)]);var state_13878__$1 = state_13878;var statearr_13884_13913 = state_13878__$1;(statearr_13884_13913[(2)] = inst_13874);
(statearr_13884_13913[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13879 === (13)))
{var inst_13867 = cljs.core.async.close_BANG_.call(null,out);var state_13878__$1 = state_13878;var statearr_13885_13914 = state_13878__$1;(statearr_13885_13914[(2)] = inst_13867);
(statearr_13885_13914[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13879 === (6)))
{var state_13878__$1 = state_13878;var statearr_13886_13915 = state_13878__$1;(statearr_13886_13915[(2)] = null);
(statearr_13886_13915[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13879 === (3)))
{var inst_13876 = (state_13878[(2)]);var state_13878__$1 = state_13878;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13878__$1,inst_13876);
} else
{if((state_val_13879 === (12)))
{var inst_13864 = (state_13878[(8)]);var inst_13864__$1 = (state_13878[(2)]);var inst_13865 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13864__$1);var state_13878__$1 = (function (){var statearr_13887 = state_13878;(statearr_13887[(8)] = inst_13864__$1);
return statearr_13887;
})();if(cljs.core.truth_(inst_13865))
{var statearr_13888_13916 = state_13878__$1;(statearr_13888_13916[(1)] = (13));
} else
{var statearr_13889_13917 = state_13878__$1;(statearr_13889_13917[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13879 === (2)))
{var inst_13841 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13842 = (0);var state_13878__$1 = (function (){var statearr_13890 = state_13878;(statearr_13890[(9)] = inst_13841);
(statearr_13890[(7)] = inst_13842);
return statearr_13890;
})();var statearr_13891_13918 = state_13878__$1;(statearr_13891_13918[(2)] = null);
(statearr_13891_13918[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13879 === (11)))
{var inst_13842 = (state_13878[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13878,(10),Object,null,(9));var inst_13851 = chs__$1.call(null,inst_13842);var inst_13852 = done.call(null,inst_13842);var inst_13853 = cljs.core.async.take_BANG_.call(null,inst_13851,inst_13852);var state_13878__$1 = state_13878;var statearr_13892_13919 = state_13878__$1;(statearr_13892_13919[(2)] = inst_13853);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13878__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13879 === (9)))
{var inst_13842 = (state_13878[(7)]);var inst_13855 = (state_13878[(2)]);var inst_13856 = (inst_13842 + (1));var inst_13842__$1 = inst_13856;var state_13878__$1 = (function (){var statearr_13893 = state_13878;(statearr_13893[(10)] = inst_13855);
(statearr_13893[(7)] = inst_13842__$1);
return statearr_13893;
})();var statearr_13894_13920 = state_13878__$1;(statearr_13894_13920[(2)] = null);
(statearr_13894_13920[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13879 === (5)))
{var inst_13862 = (state_13878[(2)]);var state_13878__$1 = (function (){var statearr_13895 = state_13878;(statearr_13895[(11)] = inst_13862);
return statearr_13895;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13878__$1,(12),dchan);
} else
{if((state_val_13879 === (14)))
{var inst_13864 = (state_13878[(8)]);var inst_13869 = cljs.core.apply.call(null,f,inst_13864);var state_13878__$1 = state_13878;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13878__$1,(16),out,inst_13869);
} else
{if((state_val_13879 === (16)))
{var inst_13871 = (state_13878[(2)]);var state_13878__$1 = (function (){var statearr_13896 = state_13878;(statearr_13896[(12)] = inst_13871);
return statearr_13896;
})();var statearr_13897_13921 = state_13878__$1;(statearr_13897_13921[(2)] = null);
(statearr_13897_13921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13879 === (10)))
{var inst_13846 = (state_13878[(2)]);var inst_13847 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13878__$1 = (function (){var statearr_13898 = state_13878;(statearr_13898[(13)] = inst_13846);
return statearr_13898;
})();var statearr_13899_13922 = state_13878__$1;(statearr_13899_13922[(2)] = inst_13847);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13878__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13879 === (8)))
{var inst_13860 = (state_13878[(2)]);var state_13878__$1 = state_13878;var statearr_13900_13923 = state_13878__$1;(statearr_13900_13923[(2)] = inst_13860);
(statearr_13900_13923[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7070__auto___13908,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__7055__auto__,c__7070__auto___13908,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_13904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13904[(0)] = state_machine__7056__auto__);
(statearr_13904[(1)] = (1));
return statearr_13904;
});
var state_machine__7056__auto____1 = (function (state_13878){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_13878);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e13905){if((e13905 instanceof Object))
{var ex__7059__auto__ = e13905;var statearr_13906_13924 = state_13878;(statearr_13906_13924[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13878);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13905;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13925 = state_13878;
state_13878 = G__13925;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_13878){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_13878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto___13908,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__7072__auto__ = (function (){var statearr_13907 = f__7071__auto__.call(null);(statearr_13907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto___13908);
return statearr_13907;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto___13908,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7070__auto___14033 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto___14033,out){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto___14033,out){
return (function (state_14009){var state_val_14010 = (state_14009[(1)]);if((state_val_14010 === (7)))
{var inst_13989 = (state_14009[(7)]);var inst_13988 = (state_14009[(8)]);var inst_13988__$1 = (state_14009[(2)]);var inst_13989__$1 = cljs.core.nth.call(null,inst_13988__$1,(0),null);var inst_13990 = cljs.core.nth.call(null,inst_13988__$1,(1),null);var inst_13991 = (inst_13989__$1 == null);var state_14009__$1 = (function (){var statearr_14011 = state_14009;(statearr_14011[(9)] = inst_13990);
(statearr_14011[(7)] = inst_13989__$1);
(statearr_14011[(8)] = inst_13988__$1);
return statearr_14011;
})();if(cljs.core.truth_(inst_13991))
{var statearr_14012_14034 = state_14009__$1;(statearr_14012_14034[(1)] = (8));
} else
{var statearr_14013_14035 = state_14009__$1;(statearr_14013_14035[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14010 === (1)))
{var inst_13980 = cljs.core.vec.call(null,chs);var inst_13981 = inst_13980;var state_14009__$1 = (function (){var statearr_14014 = state_14009;(statearr_14014[(10)] = inst_13981);
return statearr_14014;
})();var statearr_14015_14036 = state_14009__$1;(statearr_14015_14036[(2)] = null);
(statearr_14015_14036[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14010 === (4)))
{var inst_13981 = (state_14009[(10)]);var state_14009__$1 = state_14009;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14009__$1,(7),inst_13981);
} else
{if((state_val_14010 === (6)))
{var inst_14005 = (state_14009[(2)]);var state_14009__$1 = state_14009;var statearr_14016_14037 = state_14009__$1;(statearr_14016_14037[(2)] = inst_14005);
(statearr_14016_14037[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14010 === (3)))
{var inst_14007 = (state_14009[(2)]);var state_14009__$1 = state_14009;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14009__$1,inst_14007);
} else
{if((state_val_14010 === (2)))
{var inst_13981 = (state_14009[(10)]);var inst_13983 = cljs.core.count.call(null,inst_13981);var inst_13984 = (inst_13983 > (0));var state_14009__$1 = state_14009;if(cljs.core.truth_(inst_13984))
{var statearr_14018_14038 = state_14009__$1;(statearr_14018_14038[(1)] = (4));
} else
{var statearr_14019_14039 = state_14009__$1;(statearr_14019_14039[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14010 === (11)))
{var inst_13981 = (state_14009[(10)]);var inst_13998 = (state_14009[(2)]);var tmp14017 = inst_13981;var inst_13981__$1 = tmp14017;var state_14009__$1 = (function (){var statearr_14020 = state_14009;(statearr_14020[(10)] = inst_13981__$1);
(statearr_14020[(11)] = inst_13998);
return statearr_14020;
})();var statearr_14021_14040 = state_14009__$1;(statearr_14021_14040[(2)] = null);
(statearr_14021_14040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14010 === (9)))
{var inst_13989 = (state_14009[(7)]);var state_14009__$1 = state_14009;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14009__$1,(11),out,inst_13989);
} else
{if((state_val_14010 === (5)))
{var inst_14003 = cljs.core.async.close_BANG_.call(null,out);var state_14009__$1 = state_14009;var statearr_14022_14041 = state_14009__$1;(statearr_14022_14041[(2)] = inst_14003);
(statearr_14022_14041[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14010 === (10)))
{var inst_14001 = (state_14009[(2)]);var state_14009__$1 = state_14009;var statearr_14023_14042 = state_14009__$1;(statearr_14023_14042[(2)] = inst_14001);
(statearr_14023_14042[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14010 === (8)))
{var inst_13981 = (state_14009[(10)]);var inst_13990 = (state_14009[(9)]);var inst_13989 = (state_14009[(7)]);var inst_13988 = (state_14009[(8)]);var inst_13993 = (function (){var c = inst_13990;var v = inst_13989;var vec__13986 = inst_13988;var cs = inst_13981;return ((function (c,v,vec__13986,cs,inst_13981,inst_13990,inst_13989,inst_13988,state_val_14010,c__7070__auto___14033,out){
return (function (p1__13926_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13926_SHARP_);
});
;})(c,v,vec__13986,cs,inst_13981,inst_13990,inst_13989,inst_13988,state_val_14010,c__7070__auto___14033,out))
})();var inst_13994 = cljs.core.filterv.call(null,inst_13993,inst_13981);var inst_13981__$1 = inst_13994;var state_14009__$1 = (function (){var statearr_14024 = state_14009;(statearr_14024[(10)] = inst_13981__$1);
return statearr_14024;
})();var statearr_14025_14043 = state_14009__$1;(statearr_14025_14043[(2)] = null);
(statearr_14025_14043[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7070__auto___14033,out))
;return ((function (switch__7055__auto__,c__7070__auto___14033,out){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_14029 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14029[(0)] = state_machine__7056__auto__);
(statearr_14029[(1)] = (1));
return statearr_14029;
});
var state_machine__7056__auto____1 = (function (state_14009){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_14009);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e14030){if((e14030 instanceof Object))
{var ex__7059__auto__ = e14030;var statearr_14031_14044 = state_14009;(statearr_14031_14044[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14009);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14030;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14045 = state_14009;
state_14009 = G__14045;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_14009){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_14009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto___14033,out))
})();var state__7072__auto__ = (function (){var statearr_14032 = f__7071__auto__.call(null);(statearr_14032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto___14033);
return statearr_14032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto___14033,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7070__auto___14138 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto___14138,out){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto___14138,out){
return (function (state_14115){var state_val_14116 = (state_14115[(1)]);if((state_val_14116 === (7)))
{var inst_14097 = (state_14115[(7)]);var inst_14097__$1 = (state_14115[(2)]);var inst_14098 = (inst_14097__$1 == null);var inst_14099 = cljs.core.not.call(null,inst_14098);var state_14115__$1 = (function (){var statearr_14117 = state_14115;(statearr_14117[(7)] = inst_14097__$1);
return statearr_14117;
})();if(inst_14099)
{var statearr_14118_14139 = state_14115__$1;(statearr_14118_14139[(1)] = (8));
} else
{var statearr_14119_14140 = state_14115__$1;(statearr_14119_14140[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (1)))
{var inst_14092 = (0);var state_14115__$1 = (function (){var statearr_14120 = state_14115;(statearr_14120[(8)] = inst_14092);
return statearr_14120;
})();var statearr_14121_14141 = state_14115__$1;(statearr_14121_14141[(2)] = null);
(statearr_14121_14141[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (4)))
{var state_14115__$1 = state_14115;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14115__$1,(7),ch);
} else
{if((state_val_14116 === (6)))
{var inst_14110 = (state_14115[(2)]);var state_14115__$1 = state_14115;var statearr_14122_14142 = state_14115__$1;(statearr_14122_14142[(2)] = inst_14110);
(statearr_14122_14142[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (3)))
{var inst_14112 = (state_14115[(2)]);var inst_14113 = cljs.core.async.close_BANG_.call(null,out);var state_14115__$1 = (function (){var statearr_14123 = state_14115;(statearr_14123[(9)] = inst_14112);
return statearr_14123;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14115__$1,inst_14113);
} else
{if((state_val_14116 === (2)))
{var inst_14092 = (state_14115[(8)]);var inst_14094 = (inst_14092 < n);var state_14115__$1 = state_14115;if(cljs.core.truth_(inst_14094))
{var statearr_14124_14143 = state_14115__$1;(statearr_14124_14143[(1)] = (4));
} else
{var statearr_14125_14144 = state_14115__$1;(statearr_14125_14144[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (11)))
{var inst_14092 = (state_14115[(8)]);var inst_14102 = (state_14115[(2)]);var inst_14103 = (inst_14092 + (1));var inst_14092__$1 = inst_14103;var state_14115__$1 = (function (){var statearr_14126 = state_14115;(statearr_14126[(10)] = inst_14102);
(statearr_14126[(8)] = inst_14092__$1);
return statearr_14126;
})();var statearr_14127_14145 = state_14115__$1;(statearr_14127_14145[(2)] = null);
(statearr_14127_14145[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (9)))
{var state_14115__$1 = state_14115;var statearr_14128_14146 = state_14115__$1;(statearr_14128_14146[(2)] = null);
(statearr_14128_14146[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (5)))
{var state_14115__$1 = state_14115;var statearr_14129_14147 = state_14115__$1;(statearr_14129_14147[(2)] = null);
(statearr_14129_14147[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (10)))
{var inst_14107 = (state_14115[(2)]);var state_14115__$1 = state_14115;var statearr_14130_14148 = state_14115__$1;(statearr_14130_14148[(2)] = inst_14107);
(statearr_14130_14148[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14116 === (8)))
{var inst_14097 = (state_14115[(7)]);var state_14115__$1 = state_14115;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14115__$1,(11),out,inst_14097);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7070__auto___14138,out))
;return ((function (switch__7055__auto__,c__7070__auto___14138,out){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_14134 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14134[(0)] = state_machine__7056__auto__);
(statearr_14134[(1)] = (1));
return statearr_14134;
});
var state_machine__7056__auto____1 = (function (state_14115){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_14115);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e14135){if((e14135 instanceof Object))
{var ex__7059__auto__ = e14135;var statearr_14136_14149 = state_14115;(statearr_14136_14149[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14115);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14135;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14150 = state_14115;
state_14115 = G__14150;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_14115){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_14115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto___14138,out))
})();var state__7072__auto__ = (function (){var statearr_14137 = f__7071__auto__.call(null);(statearr_14137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto___14138);
return statearr_14137;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto___14138,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7070__auto___14247 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto___14247,out){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto___14247,out){
return (function (state_14222){var state_val_14223 = (state_14222[(1)]);if((state_val_14223 === (7)))
{var inst_14217 = (state_14222[(2)]);var state_14222__$1 = state_14222;var statearr_14224_14248 = state_14222__$1;(statearr_14224_14248[(2)] = inst_14217);
(statearr_14224_14248[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14223 === (1)))
{var inst_14199 = null;var state_14222__$1 = (function (){var statearr_14225 = state_14222;(statearr_14225[(7)] = inst_14199);
return statearr_14225;
})();var statearr_14226_14249 = state_14222__$1;(statearr_14226_14249[(2)] = null);
(statearr_14226_14249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14223 === (4)))
{var inst_14202 = (state_14222[(8)]);var inst_14202__$1 = (state_14222[(2)]);var inst_14203 = (inst_14202__$1 == null);var inst_14204 = cljs.core.not.call(null,inst_14203);var state_14222__$1 = (function (){var statearr_14227 = state_14222;(statearr_14227[(8)] = inst_14202__$1);
return statearr_14227;
})();if(inst_14204)
{var statearr_14228_14250 = state_14222__$1;(statearr_14228_14250[(1)] = (5));
} else
{var statearr_14229_14251 = state_14222__$1;(statearr_14229_14251[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14223 === (6)))
{var state_14222__$1 = state_14222;var statearr_14230_14252 = state_14222__$1;(statearr_14230_14252[(2)] = null);
(statearr_14230_14252[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14223 === (3)))
{var inst_14219 = (state_14222[(2)]);var inst_14220 = cljs.core.async.close_BANG_.call(null,out);var state_14222__$1 = (function (){var statearr_14231 = state_14222;(statearr_14231[(9)] = inst_14219);
return statearr_14231;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14222__$1,inst_14220);
} else
{if((state_val_14223 === (2)))
{var state_14222__$1 = state_14222;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14222__$1,(4),ch);
} else
{if((state_val_14223 === (11)))
{var inst_14202 = (state_14222[(8)]);var inst_14211 = (state_14222[(2)]);var inst_14199 = inst_14202;var state_14222__$1 = (function (){var statearr_14232 = state_14222;(statearr_14232[(10)] = inst_14211);
(statearr_14232[(7)] = inst_14199);
return statearr_14232;
})();var statearr_14233_14253 = state_14222__$1;(statearr_14233_14253[(2)] = null);
(statearr_14233_14253[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14223 === (9)))
{var inst_14202 = (state_14222[(8)]);var state_14222__$1 = state_14222;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14222__$1,(11),out,inst_14202);
} else
{if((state_val_14223 === (5)))
{var inst_14199 = (state_14222[(7)]);var inst_14202 = (state_14222[(8)]);var inst_14206 = cljs.core._EQ_.call(null,inst_14202,inst_14199);var state_14222__$1 = state_14222;if(inst_14206)
{var statearr_14235_14254 = state_14222__$1;(statearr_14235_14254[(1)] = (8));
} else
{var statearr_14236_14255 = state_14222__$1;(statearr_14236_14255[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14223 === (10)))
{var inst_14214 = (state_14222[(2)]);var state_14222__$1 = state_14222;var statearr_14237_14256 = state_14222__$1;(statearr_14237_14256[(2)] = inst_14214);
(statearr_14237_14256[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14223 === (8)))
{var inst_14199 = (state_14222[(7)]);var tmp14234 = inst_14199;var inst_14199__$1 = tmp14234;var state_14222__$1 = (function (){var statearr_14238 = state_14222;(statearr_14238[(7)] = inst_14199__$1);
return statearr_14238;
})();var statearr_14239_14257 = state_14222__$1;(statearr_14239_14257[(2)] = null);
(statearr_14239_14257[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7070__auto___14247,out))
;return ((function (switch__7055__auto__,c__7070__auto___14247,out){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_14243 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14243[(0)] = state_machine__7056__auto__);
(statearr_14243[(1)] = (1));
return statearr_14243;
});
var state_machine__7056__auto____1 = (function (state_14222){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_14222);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e14244){if((e14244 instanceof Object))
{var ex__7059__auto__ = e14244;var statearr_14245_14258 = state_14222;(statearr_14245_14258[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14222);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14244;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14259 = state_14222;
state_14222 = G__14259;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_14222){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_14222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto___14247,out))
})();var state__7072__auto__ = (function (){var statearr_14246 = f__7071__auto__.call(null);(statearr_14246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto___14247);
return statearr_14246;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto___14247,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7070__auto___14394 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto___14394,out){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto___14394,out){
return (function (state_14364){var state_val_14365 = (state_14364[(1)]);if((state_val_14365 === (7)))
{var inst_14360 = (state_14364[(2)]);var state_14364__$1 = state_14364;var statearr_14366_14395 = state_14364__$1;(statearr_14366_14395[(2)] = inst_14360);
(statearr_14366_14395[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (1)))
{var inst_14327 = (new Array(n));var inst_14328 = inst_14327;var inst_14329 = (0);var state_14364__$1 = (function (){var statearr_14367 = state_14364;(statearr_14367[(7)] = inst_14328);
(statearr_14367[(8)] = inst_14329);
return statearr_14367;
})();var statearr_14368_14396 = state_14364__$1;(statearr_14368_14396[(2)] = null);
(statearr_14368_14396[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (4)))
{var inst_14332 = (state_14364[(9)]);var inst_14332__$1 = (state_14364[(2)]);var inst_14333 = (inst_14332__$1 == null);var inst_14334 = cljs.core.not.call(null,inst_14333);var state_14364__$1 = (function (){var statearr_14369 = state_14364;(statearr_14369[(9)] = inst_14332__$1);
return statearr_14369;
})();if(inst_14334)
{var statearr_14370_14397 = state_14364__$1;(statearr_14370_14397[(1)] = (5));
} else
{var statearr_14371_14398 = state_14364__$1;(statearr_14371_14398[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (15)))
{var inst_14354 = (state_14364[(2)]);var state_14364__$1 = state_14364;var statearr_14372_14399 = state_14364__$1;(statearr_14372_14399[(2)] = inst_14354);
(statearr_14372_14399[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (13)))
{var state_14364__$1 = state_14364;var statearr_14373_14400 = state_14364__$1;(statearr_14373_14400[(2)] = null);
(statearr_14373_14400[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (6)))
{var inst_14329 = (state_14364[(8)]);var inst_14350 = (inst_14329 > (0));var state_14364__$1 = state_14364;if(cljs.core.truth_(inst_14350))
{var statearr_14374_14401 = state_14364__$1;(statearr_14374_14401[(1)] = (12));
} else
{var statearr_14375_14402 = state_14364__$1;(statearr_14375_14402[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (3)))
{var inst_14362 = (state_14364[(2)]);var state_14364__$1 = state_14364;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14364__$1,inst_14362);
} else
{if((state_val_14365 === (12)))
{var inst_14328 = (state_14364[(7)]);var inst_14352 = cljs.core.vec.call(null,inst_14328);var state_14364__$1 = state_14364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14364__$1,(15),out,inst_14352);
} else
{if((state_val_14365 === (2)))
{var state_14364__$1 = state_14364;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14364__$1,(4),ch);
} else
{if((state_val_14365 === (11)))
{var inst_14344 = (state_14364[(2)]);var inst_14345 = (new Array(n));var inst_14328 = inst_14345;var inst_14329 = (0);var state_14364__$1 = (function (){var statearr_14376 = state_14364;(statearr_14376[(7)] = inst_14328);
(statearr_14376[(10)] = inst_14344);
(statearr_14376[(8)] = inst_14329);
return statearr_14376;
})();var statearr_14377_14403 = state_14364__$1;(statearr_14377_14403[(2)] = null);
(statearr_14377_14403[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (9)))
{var inst_14328 = (state_14364[(7)]);var inst_14342 = cljs.core.vec.call(null,inst_14328);var state_14364__$1 = state_14364;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14364__$1,(11),out,inst_14342);
} else
{if((state_val_14365 === (5)))
{var inst_14328 = (state_14364[(7)]);var inst_14332 = (state_14364[(9)]);var inst_14337 = (state_14364[(11)]);var inst_14329 = (state_14364[(8)]);var inst_14336 = (inst_14328[inst_14329] = inst_14332);var inst_14337__$1 = (inst_14329 + (1));var inst_14338 = (inst_14337__$1 < n);var state_14364__$1 = (function (){var statearr_14378 = state_14364;(statearr_14378[(12)] = inst_14336);
(statearr_14378[(11)] = inst_14337__$1);
return statearr_14378;
})();if(cljs.core.truth_(inst_14338))
{var statearr_14379_14404 = state_14364__$1;(statearr_14379_14404[(1)] = (8));
} else
{var statearr_14380_14405 = state_14364__$1;(statearr_14380_14405[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (14)))
{var inst_14357 = (state_14364[(2)]);var inst_14358 = cljs.core.async.close_BANG_.call(null,out);var state_14364__$1 = (function (){var statearr_14382 = state_14364;(statearr_14382[(13)] = inst_14357);
return statearr_14382;
})();var statearr_14383_14406 = state_14364__$1;(statearr_14383_14406[(2)] = inst_14358);
(statearr_14383_14406[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (10)))
{var inst_14348 = (state_14364[(2)]);var state_14364__$1 = state_14364;var statearr_14384_14407 = state_14364__$1;(statearr_14384_14407[(2)] = inst_14348);
(statearr_14384_14407[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14365 === (8)))
{var inst_14328 = (state_14364[(7)]);var inst_14337 = (state_14364[(11)]);var tmp14381 = inst_14328;var inst_14328__$1 = tmp14381;var inst_14329 = inst_14337;var state_14364__$1 = (function (){var statearr_14385 = state_14364;(statearr_14385[(7)] = inst_14328__$1);
(statearr_14385[(8)] = inst_14329);
return statearr_14385;
})();var statearr_14386_14408 = state_14364__$1;(statearr_14386_14408[(2)] = null);
(statearr_14386_14408[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7070__auto___14394,out))
;return ((function (switch__7055__auto__,c__7070__auto___14394,out){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_14390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14390[(0)] = state_machine__7056__auto__);
(statearr_14390[(1)] = (1));
return statearr_14390;
});
var state_machine__7056__auto____1 = (function (state_14364){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_14364);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e14391){if((e14391 instanceof Object))
{var ex__7059__auto__ = e14391;var statearr_14392_14409 = state_14364;(statearr_14392_14409[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14364);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14391;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14410 = state_14364;
state_14364 = G__14410;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_14364){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_14364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto___14394,out))
})();var state__7072__auto__ = (function (){var statearr_14393 = f__7071__auto__.call(null);(statearr_14393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto___14394);
return statearr_14393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto___14394,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7070__auto___14553 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7070__auto___14553,out){
return (function (){var f__7071__auto__ = (function (){var switch__7055__auto__ = ((function (c__7070__auto___14553,out){
return (function (state_14523){var state_val_14524 = (state_14523[(1)]);if((state_val_14524 === (7)))
{var inst_14519 = (state_14523[(2)]);var state_14523__$1 = state_14523;var statearr_14525_14554 = state_14523__$1;(statearr_14525_14554[(2)] = inst_14519);
(statearr_14525_14554[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14524 === (1)))
{var inst_14482 = [];var inst_14483 = inst_14482;var inst_14484 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14523__$1 = (function (){var statearr_14526 = state_14523;(statearr_14526[(7)] = inst_14484);
(statearr_14526[(8)] = inst_14483);
return statearr_14526;
})();var statearr_14527_14555 = state_14523__$1;(statearr_14527_14555[(2)] = null);
(statearr_14527_14555[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14524 === (4)))
{var inst_14487 = (state_14523[(9)]);var inst_14487__$1 = (state_14523[(2)]);var inst_14488 = (inst_14487__$1 == null);var inst_14489 = cljs.core.not.call(null,inst_14488);var state_14523__$1 = (function (){var statearr_14528 = state_14523;(statearr_14528[(9)] = inst_14487__$1);
return statearr_14528;
})();if(inst_14489)
{var statearr_14529_14556 = state_14523__$1;(statearr_14529_14556[(1)] = (5));
} else
{var statearr_14530_14557 = state_14523__$1;(statearr_14530_14557[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14524 === (15)))
{var inst_14513 = (state_14523[(2)]);var state_14523__$1 = state_14523;var statearr_14531_14558 = state_14523__$1;(statearr_14531_14558[(2)] = inst_14513);
(statearr_14531_14558[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14524 === (13)))
{var state_14523__$1 = state_14523;var statearr_14532_14559 = state_14523__$1;(statearr_14532_14559[(2)] = null);
(statearr_14532_14559[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14524 === (6)))
{var inst_14483 = (state_14523[(8)]);var inst_14508 = inst_14483.length;var inst_14509 = (inst_14508 > (0));var state_14523__$1 = state_14523;if(cljs.core.truth_(inst_14509))
{var statearr_14533_14560 = state_14523__$1;(statearr_14533_14560[(1)] = (12));
} else
{var statearr_14534_14561 = state_14523__$1;(statearr_14534_14561[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14524 === (3)))
{var inst_14521 = (state_14523[(2)]);var state_14523__$1 = state_14523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14523__$1,inst_14521);
} else
{if((state_val_14524 === (12)))
{var inst_14483 = (state_14523[(8)]);var inst_14511 = cljs.core.vec.call(null,inst_14483);var state_14523__$1 = state_14523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14523__$1,(15),out,inst_14511);
} else
{if((state_val_14524 === (2)))
{var state_14523__$1 = state_14523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14523__$1,(4),ch);
} else
{if((state_val_14524 === (11)))
{var inst_14491 = (state_14523[(10)]);var inst_14487 = (state_14523[(9)]);var inst_14501 = (state_14523[(2)]);var inst_14502 = [];var inst_14503 = inst_14502.push(inst_14487);var inst_14483 = inst_14502;var inst_14484 = inst_14491;var state_14523__$1 = (function (){var statearr_14535 = state_14523;(statearr_14535[(11)] = inst_14503);
(statearr_14535[(7)] = inst_14484);
(statearr_14535[(8)] = inst_14483);
(statearr_14535[(12)] = inst_14501);
return statearr_14535;
})();var statearr_14536_14562 = state_14523__$1;(statearr_14536_14562[(2)] = null);
(statearr_14536_14562[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14524 === (9)))
{var inst_14483 = (state_14523[(8)]);var inst_14499 = cljs.core.vec.call(null,inst_14483);var state_14523__$1 = state_14523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14523__$1,(11),out,inst_14499);
} else
{if((state_val_14524 === (5)))
{var inst_14491 = (state_14523[(10)]);var inst_14487 = (state_14523[(9)]);var inst_14484 = (state_14523[(7)]);var inst_14491__$1 = f.call(null,inst_14487);var inst_14492 = cljs.core._EQ_.call(null,inst_14491__$1,inst_14484);var inst_14493 = cljs.core.keyword_identical_QMARK_.call(null,inst_14484,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14494 = (inst_14492) || (inst_14493);var state_14523__$1 = (function (){var statearr_14537 = state_14523;(statearr_14537[(10)] = inst_14491__$1);
return statearr_14537;
})();if(cljs.core.truth_(inst_14494))
{var statearr_14538_14563 = state_14523__$1;(statearr_14538_14563[(1)] = (8));
} else
{var statearr_14539_14564 = state_14523__$1;(statearr_14539_14564[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14524 === (14)))
{var inst_14516 = (state_14523[(2)]);var inst_14517 = cljs.core.async.close_BANG_.call(null,out);var state_14523__$1 = (function (){var statearr_14541 = state_14523;(statearr_14541[(13)] = inst_14516);
return statearr_14541;
})();var statearr_14542_14565 = state_14523__$1;(statearr_14542_14565[(2)] = inst_14517);
(statearr_14542_14565[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14524 === (10)))
{var inst_14506 = (state_14523[(2)]);var state_14523__$1 = state_14523;var statearr_14543_14566 = state_14523__$1;(statearr_14543_14566[(2)] = inst_14506);
(statearr_14543_14566[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14524 === (8)))
{var inst_14491 = (state_14523[(10)]);var inst_14487 = (state_14523[(9)]);var inst_14483 = (state_14523[(8)]);var inst_14496 = inst_14483.push(inst_14487);var tmp14540 = inst_14483;var inst_14483__$1 = tmp14540;var inst_14484 = inst_14491;var state_14523__$1 = (function (){var statearr_14544 = state_14523;(statearr_14544[(7)] = inst_14484);
(statearr_14544[(8)] = inst_14483__$1);
(statearr_14544[(14)] = inst_14496);
return statearr_14544;
})();var statearr_14545_14567 = state_14523__$1;(statearr_14545_14567[(2)] = null);
(statearr_14545_14567[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7070__auto___14553,out))
;return ((function (switch__7055__auto__,c__7070__auto___14553,out){
return (function() {
var state_machine__7056__auto__ = null;
var state_machine__7056__auto____0 = (function (){var statearr_14549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14549[(0)] = state_machine__7056__auto__);
(statearr_14549[(1)] = (1));
return statearr_14549;
});
var state_machine__7056__auto____1 = (function (state_14523){while(true){
var ret_value__7057__auto__ = (function (){try{while(true){
var result__7058__auto__ = switch__7055__auto__.call(null,state_14523);if(cljs.core.keyword_identical_QMARK_.call(null,result__7058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7058__auto__;
}
break;
}
}catch (e14550){if((e14550 instanceof Object))
{var ex__7059__auto__ = e14550;var statearr_14551_14568 = state_14523;(statearr_14551_14568[(5)] = ex__7059__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14523);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14550;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14569 = state_14523;
state_14523 = G__14569;
continue;
}
} else
{return ret_value__7057__auto__;
}
break;
}
});
state_machine__7056__auto__ = function(state_14523){
switch(arguments.length){
case 0:
return state_machine__7056__auto____0.call(this);
case 1:
return state_machine__7056__auto____1.call(this,state_14523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7056__auto____0;
state_machine__7056__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7056__auto____1;
return state_machine__7056__auto__;
})()
;})(switch__7055__auto__,c__7070__auto___14553,out))
})();var state__7072__auto__ = (function (){var statearr_14552 = f__7071__auto__.call(null);(statearr_14552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7070__auto___14553);
return statearr_14552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7072__auto__);
});})(c__7070__auto___14553,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
