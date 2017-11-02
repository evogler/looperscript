// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.logging');
goog.require('cljs.core');
goog.require('domina');
cljs.looperscript.logging.log = (function cljs$looperscript$logging$log(var_args){
var args__29165__auto__ = [];
var len__29158__auto___31360 = arguments.length;
var i__29159__auto___31361 = (0);
while(true){
if((i__29159__auto___31361 < len__29158__auto___31360)){
args__29165__auto__.push((arguments[i__29159__auto___31361]));

var G__31362 = (i__29159__auto___31361 + (1));
i__29159__auto___31361 = G__31362;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.logging.log.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.looperscript.logging.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var s = cljs.core.apply.call(null,cljs.core.str,cljs.core.conj.call(null,cljs.core.vec.call(null,args),"\n"));
domina.append_BANG_.call(null,domina.by_id.call(null,"console"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"<p />"].join(''));

return console.log(s);
});

cljs.looperscript.logging.log.cljs$lang$maxFixedArity = (0);

cljs.looperscript.logging.log.cljs$lang$applyTo = (function (seq31359){
return cljs.looperscript.logging.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31359));
});

cljs.looperscript.logging.log__GT_ = (function cljs$looperscript$logging$log__GT_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___31364 = arguments.length;
var i__29159__auto___31365 = (0);
while(true){
if((i__29159__auto___31365 < len__29158__auto___31364)){
args__29165__auto__.push((arguments[i__29159__auto___31365]));

var G__31366 = (i__29159__auto___31365 + (1));
i__29159__auto___31365 = G__31366;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.logging.log__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.looperscript.logging.log__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.apply.call(null,cljs.looperscript.logging.log,args);

return cljs.core.first.call(null,args);
});

cljs.looperscript.logging.log__GT_.cljs$lang$maxFixedArity = (0);

cljs.looperscript.logging.log__GT_.cljs$lang$applyTo = (function (seq31363){
return cljs.looperscript.logging.log__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31363));
});


//# sourceMappingURL=logging.js.map
