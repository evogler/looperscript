// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.start_time');
goog.require('cljs.core');
goog.require('cljs.looperscript.audio');
cljs.looperscript.start_time.current_start_time = cljs.core.atom.call(null,null);
cljs.looperscript.start_time.get_current_start_time = (function cljs$looperscript$start_time$get_current_start_time(){
return cljs.core.deref.call(null,cljs.looperscript.start_time.current_start_time);
});
cljs.looperscript.start_time.reset_clock_BANG_ = (function cljs$looperscript$start_time$reset_clock_BANG_(var_args){
var G__40553 = arguments.length;
switch (G__40553) {
case 0:
return cljs.looperscript.start_time.reset_clock_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.looperscript.start_time.reset_clock_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.looperscript.start_time.reset_clock_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.looperscript.start_time.reset_clock_BANG_.call(null,null);
});

cljs.looperscript.start_time.reset_clock_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (time){
return cljs.core.reset_BANG_.call(null,cljs.looperscript.start_time.current_start_time,time);
});

cljs.looperscript.start_time.reset_clock_BANG_.cljs$lang$maxFixedArity = 1;

cljs.looperscript.start_time.now = (function cljs$looperscript$start_time$now(){
return (cljs.looperscript.audio.ctx["currentTime"]);
});

//# sourceMappingURL=start_time.js.map?rel=1511400155285
