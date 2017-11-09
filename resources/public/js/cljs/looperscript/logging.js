// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.logging');
goog.require('cljs.core');
goog.require('domina');
cljs.looperscript.logging.log = (function cljs$looperscript$logging$log(var_args){
var args__29112__auto__ = [];
var len__29105__auto___32205 = arguments.length;
var i__29106__auto___32206 = (0);
while(true){
if((i__29106__auto___32206 < len__29105__auto___32205)){
args__29112__auto__.push((arguments[i__29106__auto___32206]));

var G__32207 = (i__29106__auto___32206 + (1));
i__29106__auto___32206 = G__32207;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.logging.log.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

cljs.looperscript.logging.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var s = cljs.core.apply.call(null,cljs.core.str,cljs.core.conj.call(null,cljs.core.vec.call(null,args),"\n"));
domina.append_BANG_.call(null,domina.by_id.call(null,"console"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"<p />"].join(''));

return console.log(s);
});

cljs.looperscript.logging.log.cljs$lang$maxFixedArity = (0);

cljs.looperscript.logging.log.cljs$lang$applyTo = (function (seq32204){
return cljs.looperscript.logging.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32204));
});

cljs.looperscript.logging.log__GT_ = (function cljs$looperscript$logging$log__GT_(var_args){
var args__29112__auto__ = [];
var len__29105__auto___32209 = arguments.length;
var i__29106__auto___32210 = (0);
while(true){
if((i__29106__auto___32210 < len__29105__auto___32209)){
args__29112__auto__.push((arguments[i__29106__auto___32210]));

var G__32211 = (i__29106__auto___32210 + (1));
i__29106__auto___32210 = G__32211;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.logging.log__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

cljs.looperscript.logging.log__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.apply.call(null,cljs.looperscript.logging.log,args);

return cljs.core.first.call(null,args);
});

cljs.looperscript.logging.log__GT_.cljs$lang$maxFixedArity = (0);

cljs.looperscript.logging.log__GT_.cljs$lang$applyTo = (function (seq32208){
return cljs.looperscript.logging.log__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32208));
});


//# sourceMappingURL=logging.js.map?rel=1509845005637
