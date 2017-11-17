// Compiled by ClojureScript 1.9.908 {}
goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__8594__auto__ = [];
var len__8587__auto___13923 = arguments.length;
var i__8588__auto___13924 = (0);
while(true){
if((i__8588__auto___13924 < len__8587__auto___13923)){
args__8594__auto__.push((arguments[i__8588__auto___13924]));

var G__13925 = (i__8588__auto___13924 + (1));
i__8588__auto___13924 = G__13925;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((0) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__8595__auto__);
});

instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
throw cljs.core.apply.call(null,cljs.core.str,message);
});

instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0);

instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq13922){
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13922));
});

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__8594__auto__ = [];
var len__8587__auto___13927 = arguments.length;
var i__8588__auto___13928 = (0);
while(true){
if((i__8588__auto___13928 < len__8587__auto___13927)){
args__8594__auto__.push((arguments[i__8588__auto___13928]));

var G__13929 = (i__8588__auto___13928 + (1));
i__8588__auto___13928 = G__13929;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((0) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__8595__auto__);
});

instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
throw cljs.core.apply.call(null,cljs.core.str,message);
});

instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0);

instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq13926){
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13926));
});


//# sourceMappingURL=util.js.map
