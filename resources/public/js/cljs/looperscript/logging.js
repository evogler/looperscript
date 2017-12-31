// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.logging');
goog.require('cljs.core');
goog.require('domina');
cljs.looperscript.logging.log = (function cljs$looperscript$logging$log(var_args){
var args__28885__auto__ = [];
var len__28878__auto___36029 = arguments.length;
var i__28879__auto___36030 = (0);
while(true){
if((i__28879__auto___36030 < len__28878__auto___36029)){
args__28885__auto__.push((arguments[i__28879__auto___36030]));

var G__36031 = (i__28879__auto___36030 + (1));
i__28879__auto___36030 = G__36031;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.logging.log.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.logging.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var s = cljs.core.apply.call(null,cljs.core.str,cljs.core.conj.call(null,cljs.core.vec.call(null,args),"\n"));
domina.append_BANG_.call(null,domina.by_id.call(null,"console"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"<p />"].join(''));

return console.log(s);
});

cljs.looperscript.logging.log.cljs$lang$maxFixedArity = (0);

cljs.looperscript.logging.log.cljs$lang$applyTo = (function (seq36028){
return cljs.looperscript.logging.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36028));
});

cljs.looperscript.logging.log__GT_ = (function cljs$looperscript$logging$log__GT_(var_args){
var args__28885__auto__ = [];
var len__28878__auto___36033 = arguments.length;
var i__28879__auto___36034 = (0);
while(true){
if((i__28879__auto___36034 < len__28878__auto___36033)){
args__28885__auto__.push((arguments[i__28879__auto___36034]));

var G__36035 = (i__28879__auto___36034 + (1));
i__28879__auto___36034 = G__36035;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.logging.log__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.logging.log__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.apply.call(null,cljs.looperscript.logging.log,args);

return cljs.core.first.call(null,args);
});

cljs.looperscript.logging.log__GT_.cljs$lang$maxFixedArity = (0);

cljs.looperscript.logging.log__GT_.cljs$lang$applyTo = (function (seq36032){
return cljs.looperscript.logging.log__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36032));
});

cljs.looperscript.logging.break_val = cljs.core.atom.call(null,null);
cljs.looperscript.logging.break$ = (function cljs$looperscript$logging$break(x){
cljs.core.println.call(null,"HI YOU GUYS",x);

throw (new Error(["break-val: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')));
});

//# sourceMappingURL=logging.js.map?rel=1514751042776
