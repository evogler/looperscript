// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.logging');
goog.require('cljs.core');
goog.require('domina');
cljs.looperscript.logging.log = (function cljs$looperscript$logging$log(var_args){
var args__8594__auto__ = [];
var len__8587__auto___15598 = arguments.length;
var i__8588__auto___15599 = (0);
while(true){
if((i__8588__auto___15599 < len__8587__auto___15598)){
args__8594__auto__.push((arguments[i__8588__auto___15599]));

var G__15600 = (i__8588__auto___15599 + (1));
i__8588__auto___15599 = G__15600;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((0) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.logging.log.cljs$core$IFn$_invoke$arity$variadic(argseq__8595__auto__);
});

cljs.looperscript.logging.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var s = cljs.core.apply.call(null,cljs.core.str,cljs.core.conj.call(null,cljs.core.vec.call(null,args),"\n"));
domina.append_BANG_.call(null,domina.by_id.call(null,"console"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"<p />"].join(''));

return console.log(s);
});

cljs.looperscript.logging.log.cljs$lang$maxFixedArity = (0);

cljs.looperscript.logging.log.cljs$lang$applyTo = (function (seq15597){
return cljs.looperscript.logging.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15597));
});

cljs.looperscript.logging.log__GT_ = (function cljs$looperscript$logging$log__GT_(var_args){
var args__8594__auto__ = [];
var len__8587__auto___15602 = arguments.length;
var i__8588__auto___15603 = (0);
while(true){
if((i__8588__auto___15603 < len__8587__auto___15602)){
args__8594__auto__.push((arguments[i__8588__auto___15603]));

var G__15604 = (i__8588__auto___15603 + (1));
i__8588__auto___15603 = G__15604;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((0) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.logging.log__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__8595__auto__);
});

cljs.looperscript.logging.log__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.apply.call(null,cljs.looperscript.logging.log,args);

return cljs.core.first.call(null,args);
});

cljs.looperscript.logging.log__GT_.cljs$lang$maxFixedArity = (0);

cljs.looperscript.logging.log__GT_.cljs$lang$applyTo = (function (seq15601){
return cljs.looperscript.logging.log__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15601));
});


//# sourceMappingURL=logging.js.map
