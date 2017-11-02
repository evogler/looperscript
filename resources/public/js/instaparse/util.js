// Compiled by ClojureScript 1.9.908 {}
goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__29165__auto__ = [];
var len__29158__auto___29532 = arguments.length;
var i__29159__auto___29533 = (0);
while(true){
if((i__29159__auto___29533 < len__29158__auto___29532)){
args__29165__auto__.push((arguments[i__29159__auto___29533]));

var G__29534 = (i__29159__auto___29533 + (1));
i__29159__auto___29533 = G__29534;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
throw cljs.core.apply.call(null,cljs.core.str,message);
});

instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0);

instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq29531){
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29531));
});

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__29165__auto__ = [];
var len__29158__auto___29536 = arguments.length;
var i__29159__auto___29537 = (0);
while(true){
if((i__29159__auto___29537 < len__29158__auto___29536)){
args__29165__auto__.push((arguments[i__29159__auto___29537]));

var G__29538 = (i__29159__auto___29537 + (1));
i__29159__auto___29537 = G__29538;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
throw cljs.core.apply.call(null,cljs.core.str,message);
});

instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0);

instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq29535){
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29535));
});


//# sourceMappingURL=util.js.map
