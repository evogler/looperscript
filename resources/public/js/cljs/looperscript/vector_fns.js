// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.vector_fns');
goog.require('cljs.core');
goog.require('cljs.looperscript.interp_rhythms');
goog.require('cljs.looperscript.start_time');
goog.require('cljs.looperscript.globals');
goog.require('cljs.looperscript.logging');
goog.require('cljs.tools.reader');
goog.require('cljs.js');
goog.require('cljs.env');
cljs.looperscript.vector_fns.eval_str = (function cljs$looperscript$vector_fns$eval_str(s){
return cljs.js.eval.call(null,cljs.js.empty_state.call(null),cljs.tools.reader.read_string.call(null,clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(do ",s,")"], null))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),(function (result){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result);
}));
});
cljs.looperscript.vector_fns.shuffle_STAR_ = (function cljs$looperscript$vector_fns$shuffle_STAR_(v){
return cljs.core.shuffle;
});
cljs.looperscript.vector_fns.flatten_STAR_ = (function cljs$looperscript$vector_fns$flatten_STAR_(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37723 = arguments.length;
var i__28879__auto___37724 = (0);
while(true){
if((i__28879__auto___37724 < len__28878__auto___37723)){
args__28885__auto__.push((arguments[i__28879__auto___37724]));

var G__37725 = (i__28879__auto___37724 + (1));
i__28879__auto___37724 = G__37725;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.flatten_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.vector_fns.flatten_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.flatten.call(null,args);
});

cljs.looperscript.vector_fns.flatten_STAR_.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.flatten_STAR_.cljs$lang$applyTo = (function (seq37722){
return cljs.looperscript.vector_fns.flatten_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37722));
});

cljs.looperscript.vector_fns.dethunk = (function cljs$looperscript$vector_fns$dethunk(x){
if(cljs.core.fn_QMARK_.call(null,x)){
return cljs.looperscript.vector_fns.dethunk.call(null,x.call(null));
} else {
return x;
}
});
cljs.looperscript.vector_fns.call1 = (function cljs$looperscript$vector_fns$call1(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37728 = arguments.length;
var i__28879__auto___37729 = (0);
while(true){
if((i__28879__auto___37729 < len__28878__auto___37728)){
args__28885__auto__.push((arguments[i__28879__auto___37729]));

var G__37730 = (i__28879__auto___37729 + (1));
i__28879__auto___37729 = G__37730;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((1) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((1)),(0),null)):null);
return cljs.looperscript.vector_fns.call1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28886__auto__);
});

cljs.looperscript.vector_fns.call1.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,args);
});

cljs.looperscript.vector_fns.call1.cljs$lang$maxFixedArity = (1);

cljs.looperscript.vector_fns.call1.cljs$lang$applyTo = (function (seq37726){
var G__37727 = cljs.core.first.call(null,seq37726);
var seq37726__$1 = cljs.core.next.call(null,seq37726);
return cljs.looperscript.vector_fns.call1.cljs$core$IFn$_invoke$arity$variadic(G__37727,seq37726__$1);
});

cljs.looperscript.vector_fns.range_STAR_ = (function cljs$looperscript$vector_fns$range_STAR_(var_args){
var G__37732 = arguments.length;
switch (G__37732) {
case 1:
return cljs.looperscript.vector_fns.range_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.looperscript.vector_fns.range_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.looperscript.vector_fns.range_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.looperscript.vector_fns.range_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return cljs.core.range.call(null,(a + (1)));
});

cljs.looperscript.vector_fns.range_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.range.call(null,a,(b + (1)));
});

cljs.looperscript.vector_fns.range_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return cljs.core.range.call(null,a,(b + c),c);
});

cljs.looperscript.vector_fns.range_STAR_.cljs$lang$maxFixedArity = 3;

cljs.looperscript.vector_fns.sweep_range = (function cljs$looperscript$vector_fns$sweep_range(a,b){
return cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.range.call(null,a,b)),cljs.core.range.call(null,b,a,(-1)));
});
cljs.looperscript.vector_fns.rand_range = (function cljs$looperscript$vector_fns$rand_range(floor,ceil){
return ((cljs.core.rand.call(null) * (ceil - floor)) + floor);
});
cljs.looperscript.vector_fns.rand_int_STAR_ = (function cljs$looperscript$vector_fns$rand_int_STAR_(var_args){
var G__37735 = arguments.length;
switch (G__37735) {
case 1:
return cljs.looperscript.vector_fns.rand_int_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.looperscript.vector_fns.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.looperscript.vector_fns.rand_int_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (b){
return cljs.core.rand_int.call(null,(b + (1)));
});

cljs.looperscript.vector_fns.rand_int_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return (a + cljs.core.rand_int.call(null,((b - a) + (1))));
});

cljs.looperscript.vector_fns.rand_int_STAR_.cljs$lang$maxFixedArity = 2;

cljs.looperscript.vector_fns.rand_nth_STAR_ = (function cljs$looperscript$vector_fns$rand_nth_STAR_(x){
return cljs.core.rand_nth.call(null,x);
});
cljs.looperscript.vector_fns.take_STAR_ = cljs.core.take;
cljs.looperscript.vector_fns.rand_exp_range = (function cljs$looperscript$vector_fns$rand_exp_range(floor,ceil,exp){
return ((Math.pow(cljs.core.rand.call(null),exp) * (ceil - floor)) + floor);
});
cljs.looperscript.vector_fns.handle_v_keyword = (function cljs$looperscript$vector_fns$handle_v_keyword(n,d){
return cljs.core.repeat.call(null,n,(d / n));
});
cljs.looperscript.vector_fns.rand_weighted = (function cljs$looperscript$vector_fns$rand_weighted(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37742 = arguments.length;
var i__28879__auto___37743 = (0);
while(true){
if((i__28879__auto___37743 < len__28878__auto___37742)){
args__28885__auto__.push((arguments[i__28879__auto___37743]));

var G__37744 = (i__28879__auto___37743 + (1));
i__28879__auto___37743 = G__37744;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.rand_weighted.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.vector_fns.rand_weighted.cljs$core$IFn$_invoke$arity$variadic = (function (v){
var vec__37739 = cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.partition.call(null,(2),v));
var vs = cljs.core.nth.call(null,vec__37739,(0),null);
var ws = cljs.core.nth.call(null,vec__37739,(1),null);
var cum_ws = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),ws);
var sum = cljs.core.last.call(null,cum_ws);
var r = (cljs.core.rand.call(null) * sum);
return cljs.core.some.call(null,((function (vec__37739,vs,ws,cum_ws,sum,r){
return (function (p1__37737_SHARP_){
if((cljs.core.nth.call(null,cum_ws,p1__37737_SHARP_) < r)){
return cljs.core.nth.call(null,vs,p1__37737_SHARP_);
} else {
return null;
}
});})(vec__37739,vs,ws,cum_ws,sum,r))
,cljs.core.range.call(null,(cljs.core.count.call(null,vs) - (1)),(-1),(-1)));
});

cljs.looperscript.vector_fns.rand_weighted.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.rand_weighted.cljs$lang$applyTo = (function (seq37738){
return cljs.looperscript.vector_fns.rand_weighted.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37738));
});

cljs.looperscript.vector_fns.rand_weighted_either_or = (function cljs$looperscript$vector_fns$rand_weighted_either_or(odds,a,b){
if((cljs.core.rand.call(null) < odds)){
return a;
} else {
return b;
}
});
cljs.looperscript.vector_fns.rand_weighted_zip = (function cljs$looperscript$vector_fns$rand_weighted_zip(vs,ws){
return cljs.looperscript.vector_fns.rand_weighted.call(null,cljs.core.interleave.call(null,vs,ws));
});
cljs.looperscript.vector_fns.rand_hold = (function cljs$looperscript$vector_fns$rand_hold(odds_of_change,options){
var current_choice = cljs.core.atom.call(null,((cljs.core.fn_QMARK_.call(null,options))?options.call(null):cljs.core.rand_nth.call(null,options)));
return ((function (current_choice){
return (function (){
if((odds_of_change < cljs.core.rand.call(null))){
return cljs.core.deref.call(null,current_choice);
} else {
return cljs.core.reset_BANG_.call(null,current_choice,((cljs.core.fn_QMARK_.call(null,options))?options.call(null):cljs.core.rand_nth.call(null,cljs.core.remove.call(null,((function (current_choice){
return (function (p1__37745_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_choice),p1__37745_SHARP_);
});})(current_choice))
,options))));
}
});
;})(current_choice))
});
cljs.looperscript.vector_fns.rand_walk = (function cljs$looperscript$vector_fns$rand_walk(max_step,v){
var rand_int_range = (function (a,b){
return (a + cljs.core.rand_int.call(null,((b - a) + (1))));
});
var max_v = (cljs.core.count.call(null,v) - (1));
var pos = cljs.core.atom.call(null,cljs.core.rand_int.call(null,cljs.core.count.call(null,v)));
return ((function (rand_int_range,max_v,pos){
return (function (){
return cljs.core.nth.call(null,v,cljs.core.reset_BANG_.call(null,pos,rand_int_range.call(null,(function (){var x__28059__auto__ = (0);
var y__28060__auto__ = (cljs.core.deref.call(null,pos) - max_step);
return ((x__28059__auto__ > y__28060__auto__) ? x__28059__auto__ : y__28060__auto__);
})(),(function (){var x__28066__auto__ = max_v;
var y__28067__auto__ = (cljs.core.deref.call(null,pos) + max_step);
return ((x__28066__auto__ < y__28067__auto__) ? x__28066__auto__ : y__28067__auto__);
})())));
});
;})(rand_int_range,max_v,pos))
});
cljs.looperscript.vector_fns.rand_walk1 = (function cljs$looperscript$vector_fns$rand_walk1(max_step,v){
var rand_int_range = (function (a,b){
return (a + cljs.core.rand_int.call(null,((b - a) + (1))));
});
var max_v = (cljs.core.count.call(null,v) - (1));
var pos = cljs.core.atom.call(null,cljs.core.rand_int.call(null,cljs.core.count.call(null,v)));
return ((function (rand_int_range,max_v,pos){
return (function (){
return cljs.core.nth.call(null,v,cljs.core.reset_BANG_.call(null,pos,(function (){while(true){
var new_pos = rand_int_range.call(null,(function (){var x__28059__auto__ = (0);
var y__28060__auto__ = (cljs.core.deref.call(null,pos) - max_step);
return ((x__28059__auto__ > y__28060__auto__) ? x__28059__auto__ : y__28060__auto__);
})(),(function (){var x__28066__auto__ = max_v;
var y__28067__auto__ = (cljs.core.deref.call(null,pos) + max_step);
return ((x__28066__auto__ < y__28067__auto__) ? x__28066__auto__ : y__28067__auto__);
})());
if(cljs.core._EQ_.call(null,new_pos,cljs.core.deref.call(null,pos))){
continue;
} else {
return new_pos;
}
break;
}
})()));
});
;})(rand_int_range,max_v,pos))
});
cljs.looperscript.vector_fns.rand_walk2 = (function cljs$looperscript$vector_fns$rand_walk2(intervals,v){
var max_v = (cljs.core.count.call(null,v) - (1));
var pos = cljs.core.atom.call(null,cljs.core.rand_int.call(null,cljs.core.count.call(null,v)));
return ((function (max_v,pos){
return (function (){
return cljs.core.nth.call(null,v,cljs.core.reset_BANG_.call(null,pos,(function (){while(true){
var new_pos = cljs.core.rand_nth.call(null,cljs.core.filter.call(null,((function (max_v,pos){
return (function (p1__37747_SHARP_){
return (((0) <= p1__37747_SHARP_)) && ((p1__37747_SHARP_ <= max_v));
});})(max_v,pos))
,cljs.core.map.call(null,((function (max_v,pos){
return (function (p1__37746_SHARP_){
return (p1__37746_SHARP_ + cljs.core.deref.call(null,pos));
});})(max_v,pos))
,intervals)));
if(cljs.core._EQ_.call(null,new_pos,cljs.core.deref.call(null,pos))){
continue;
} else {
return new_pos;
}
break;
}
})()));
});
;})(max_v,pos))
});
cljs.looperscript.vector_fns.memo_rand = cljs.core.memoize.call(null,(function (id,ceil,n){
return cljs.core.rand_int.call(null,ceil);
}));
cljs.looperscript.vector_fns.memo_rand_nth = (function cljs$looperscript$vector_fns$memo_rand_nth(id,v){
var pos = cljs.core.atom.call(null,(0));
var size = cljs.core.count.call(null,v);
return ((function (pos,size){
return (function (){
return cljs.core.nth.call(null,v,cljs.looperscript.vector_fns.memo_rand.call(null,id,size,cljs.core.swap_BANG_.call(null,pos,cljs.core.inc)));
});
;})(pos,size))
});
cljs.looperscript.vector_fns.in$ = (function cljs$looperscript$vector_fns$in(t,v){
var v__$1 = cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
var factor = (t / cljs.core.reduce.call(null,cljs.core._PLUS_,v__$1));
return cljs.core.map.call(null,((function (v__$1,factor){
return (function (p1__37748_SHARP_){
return (factor * p1__37748_SHARP_);
});})(v__$1,factor))
,v__$1);
});
cljs.looperscript.vector_fns.abs_times = (function cljs$looperscript$vector_fns$abs_times(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37750 = arguments.length;
var i__28879__auto___37751 = (0);
while(true){
if((i__28879__auto___37751 < len__28878__auto___37750)){
args__28885__auto__.push((arguments[i__28879__auto___37751]));

var G__37752 = (i__28879__auto___37751 + (1));
i__28879__auto___37751 = G__37752;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.abs_times.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.vector_fns.abs_times.cljs$core$IFn$_invoke$arity$variadic = (function (v){
return cljs.core.map.call(null,cljs.core._,cljs.core.rest.call(null,v),v);
});

cljs.looperscript.vector_fns.abs_times.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.abs_times.cljs$lang$applyTo = (function (seq37749){
return cljs.looperscript.vector_fns.abs_times.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37749));
});

cljs.looperscript.vector_fns.cycle_STAR_ = (function cljs$looperscript$vector_fns$cycle_STAR_(v){
var pos = cljs.core.atom.call(null,(-1));
var v_len = cljs.core.count.call(null,v);
return ((function (pos,v_len){
return (function (){
return cljs.looperscript.vector_fns.dethunk.call(null,cljs.core.nth.call(null,v,cljs.core.swap_BANG_.call(null,pos,((function (pos,v_len){
return (function (p1__37753_SHARP_){
return cljs.core.mod.call(null,(p1__37753_SHARP_ + (1)),v_len);
});})(pos,v_len))
)));
});
;})(pos,v_len))
});
cljs.looperscript.vector_fns.combine = (function cljs$looperscript$vector_fns$combine(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37759 = arguments.length;
var i__28879__auto___37760 = (0);
while(true){
if((i__28879__auto___37760 < len__28878__auto___37759)){
args__28885__auto__.push((arguments[i__28879__auto___37760]));

var G__37761 = (i__28879__auto___37760 + (1));
i__28879__auto___37760 = G__37761;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.vector_fns.combine.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return (function (){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__28517__auto__ = (function cljs$looperscript$vector_fns$iter__37755(s__37756){
return (new cljs.core.LazySeq(null,(function (){
var s__37756__$1 = s__37756;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37756__$1);
if(temp__4657__auto__){
var s__37756__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37756__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__37756__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__37758 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__37757 = (0);
while(true){
if((i__37757 < size__28516__auto__)){
var a = cljs.core._nth.call(null,c__28515__auto__,i__37757);
cljs.core.chunk_append.call(null,b__37758,((cljs.core.fn_QMARK_.call(null,a))?a.call(null):a));

var G__37762 = (i__37757 + (1));
i__37757 = G__37762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37758),cljs$looperscript$vector_fns$iter__37755.call(null,cljs.core.chunk_rest.call(null,s__37756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37758),null);
}
} else {
var a = cljs.core.first.call(null,s__37756__$2);
return cljs.core.cons.call(null,((cljs.core.fn_QMARK_.call(null,a))?a.call(null):a),cljs$looperscript$vector_fns$iter__37755.call(null,cljs.core.rest.call(null,s__37756__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28517__auto__.call(null,args);
})());
});
});

cljs.looperscript.vector_fns.combine.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.combine.cljs$lang$applyTo = (function (seq37754){
return cljs.looperscript.vector_fns.combine.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37754));
});

cljs.looperscript.vector_fns.fill_time = (function cljs$looperscript$vector_fns$fill_time(t,v){
var previous_total = cljs.core.atom.call(null,null);
var total = cljs.core.atom.call(null,(0));
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.take_while.call(null,((function (previous_total,total){
return (function (p1__37763_SHARP_){
cljs.core.reset_BANG_.call(null,previous_total,cljs.core.deref.call(null,total));

return (cljs.core.swap_BANG_.call(null,total,cljs.core._PLUS_,p1__37763_SHARP_) < t);
});})(previous_total,total))
,((cljs.core.fn_QMARK_.call(null,v))?cljs.core.repeatedly.call(null,v):cljs.core.cycle.call(null,cljs.core.flatten.call(null,v))))),(t - cljs.core.deref.call(null,previous_total)));
});
cljs.looperscript.vector_fns.once = (function cljs$looperscript$vector_fns$once(var_args){
var G__37765 = arguments.length;
switch (G__37765) {
case 2:
return cljs.looperscript.vector_fns.once.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.looperscript.vector_fns.once.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.looperscript.vector_fns.once.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var called_QMARK_ = cljs.core.atom.call(null,false);
return ((function (called_QMARK_){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,called_QMARK_))){
cljs.core.reset_BANG_.call(null,called_QMARK_,true);

return x;
} else {
return y;
}
});
;})(called_QMARK_))
});

cljs.looperscript.vector_fns.once.cljs$core$IFn$_invoke$arity$1 = (function (x){
var called_QMARK_ = cljs.core.atom.call(null,false);
return ((function (called_QMARK_){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,called_QMARK_))){
cljs.core.reset_BANG_.call(null,called_QMARK_,true);

return x;
} else {
return null;
}
});
;})(called_QMARK_))
});

cljs.looperscript.vector_fns.once.cljs$lang$maxFixedArity = 2;

cljs.looperscript.vector_fns.rest_STAR_ = (function cljs$looperscript$vector_fns$rest_STAR_(x){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rest","rest",-1241696419),x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intact-for-sub-time","intact-for-sub-time",1903796476),new cljs.core.Keyword(null,"true","true",-1114210334)], null));
});
cljs.looperscript.vector_fns.chord = (function cljs$looperscript$vector_fns$chord(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37768 = arguments.length;
var i__28879__auto___37769 = (0);
while(true){
if((i__28879__auto___37769 < len__28878__auto___37768)){
args__28885__auto__.push((arguments[i__28879__auto___37769]));

var G__37770 = (i__28879__auto___37769 + (1));
i__28879__auto___37769 = G__37770;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.chord.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.vector_fns.chord.cljs$core$IFn$_invoke$arity$variadic = (function (v){
return cljs.core.with_meta.call(null,cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chord","chord",-696248342),v], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intact-for-sub-time","intact-for-sub-time",1903796476),new cljs.core.Keyword(null,"true","true",-1114210334)], null));
});

cljs.looperscript.vector_fns.chord.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.chord.cljs$lang$applyTo = (function (seq37767){
return cljs.looperscript.vector_fns.chord.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37767));
});

cljs.looperscript.vector_fns.chords = (function cljs$looperscript$vector_fns$chords(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37776 = arguments.length;
var i__28879__auto___37777 = (0);
while(true){
if((i__28879__auto___37777 < len__28878__auto___37776)){
args__28885__auto__.push((arguments[i__28879__auto___37777]));

var G__37778 = (i__28879__auto___37777 + (1));
i__28879__auto___37777 = G__37778;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.chords.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.vector_fns.chords.cljs$core$IFn$_invoke$arity$variadic = (function (v){
var iter__28517__auto__ = (function cljs$looperscript$vector_fns$iter__37772(s__37773){
return (new cljs.core.LazySeq(null,(function (){
var s__37773__$1 = s__37773;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37773__$1);
if(temp__4657__auto__){
var s__37773__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37773__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__37773__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__37775 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__37774 = (0);
while(true){
if((i__37774 < size__28516__auto__)){
var ch = cljs.core._nth.call(null,c__28515__auto__,i__37774);
cljs.core.chunk_append.call(null,b__37775,cljs.looperscript.vector_fns.chord.call(null,ch));

var G__37779 = (i__37774 + (1));
i__37774 = G__37779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37775),cljs$looperscript$vector_fns$iter__37772.call(null,cljs.core.chunk_rest.call(null,s__37773__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37775),null);
}
} else {
var ch = cljs.core.first.call(null,s__37773__$2);
return cljs.core.cons.call(null,cljs.looperscript.vector_fns.chord.call(null,ch),cljs$looperscript$vector_fns$iter__37772.call(null,cljs.core.rest.call(null,s__37773__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28517__auto__.call(null,v);
});

cljs.looperscript.vector_fns.chords.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.chords.cljs$lang$applyTo = (function (seq37771){
return cljs.looperscript.vector_fns.chords.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37771));
});

cljs.looperscript.vector_fns.chord_QMARK_ = (function cljs$looperscript$vector_fns$chord_QMARK_(x){
return (cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"chord","chord",-696248342)));
});
cljs.looperscript.vector_fns.odc = (function cljs$looperscript$vector_fns$odc(n){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifier-fn","modifier-fn",-1624543303),(function (x){
return (x + cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(0),(12)], null)));
})], null);
});
cljs.looperscript.vector_fns.odc1 = (function cljs$looperscript$vector_fns$odc1(_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifier-fn","modifier-fn",-1624543303),(function cljs$looperscript$vector_fns$odc1_$_f(n){
if(cljs.core.truth_(cljs.looperscript.vector_fns.chord_QMARK_.call(null,n))){
return cljs.looperscript.vector_fns.chord.call(null,cljs.core.map.call(null,cljs$looperscript$vector_fns$odc1_$_f,cljs.core.rest.call(null,n)));
} else {
return (cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-12),(0),(12)], null)) + cljs.core.mod.call(null,n,(12)));
}
})], null);
});
cljs.looperscript.vector_fns.chord_types = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"maj","maj",-2096718516),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(7)], null),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(7)], null),new cljs.core.Keyword(null,"7","7",993885869),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(7),(10)], null)], null);
cljs.looperscript.vector_fns.pos_in_vec = (function cljs$looperscript$vector_fns$pos_in_vec(p,v){
var max_pos = (cljs.core.count.call(null,v) - (1));
var pos = (0);
while(true){
if(cljs.core._EQ_.call(null,pos,max_pos)){
return pos;
} else {
if(((p >= cljs.core.nth.call(null,v,pos))) && ((p < cljs.core.nth.call(null,v,(pos + (1)))))){
return pos;
} else {
var G__37781 = (pos + (1));
pos = G__37781;
continue;
}
}
break;
}
});
cljs.looperscript.vector_fns.transpose1 = (function cljs$looperscript$vector_fns$transpose1(deg,v){
return cljs.core.map.call(null,(function (p1__37782_SHARP_){
return (deg + p1__37782_SHARP_);
}),v);
});
cljs.looperscript.vector_fns.chord_progression1 = (function cljs$looperscript$vector_fns$chord_progression1(chords_v,times){
var chords = cljs.core.map.call(null,cljs.looperscript.vector_fns.chord_types,cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,chords_v)));
var roots = cljs.core.take_nth.call(null,(2),chords_v);
var times__$1 = cljs.core.take.call(null,cljs.core.count.call(null,chords),cljs.core.cycle.call(null,times));
var chord_times = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),times__$1);
var form_len = cljs.core.last.call(null,chord_times);
var chord_times__$1 = cljs.core.drop_last.call(null,chord_times);
return ((function (chords,roots,times__$1,chord_times,form_len,chord_times__$1){
return (function (){
var pos = cljs.looperscript.vector_fns.pos_in_vec.call(null,cljs.core.mod.call(null,cljs.core.deref.call(null,cljs.looperscript.globals.current_time_hack),form_len),chord_times__$1);
return cljs.looperscript.vector_fns.chord.call(null,cljs.looperscript.vector_fns.transpose1.call(null,cljs.core.nth.call(null,roots,pos),cljs.core.nth.call(null,chords,pos)));
});
;})(chords,roots,times__$1,chord_times,form_len,chord_times__$1))
});
cljs.looperscript.vector_fns.chord_progression2 = (function cljs$looperscript$vector_fns$chord_progression2(chords_v,times){
var chords = cljs.core.map.call(null,cljs.looperscript.vector_fns.chord_types,cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,chords_v)));
var roots = cljs.core.take_nth.call(null,(2),chords_v);
var roots__$1 = cljs.core.reductions.call(null,((function (chords,roots){
return (function (p1__37783_SHARP_,p2__37784_SHARP_){
return cljs.core.mod.call(null,(p1__37783_SHARP_ + p2__37784_SHARP_),(12));
});})(chords,roots))
,roots);
var times__$1 = cljs.core.take.call(null,cljs.core.count.call(null,chords),cljs.core.cycle.call(null,times));
var chord_times = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),times__$1);
var form_len = cljs.core.last.call(null,chord_times);
var chord_times__$1 = cljs.core.drop_last.call(null,chord_times);
return ((function (chords,roots,roots__$1,times__$1,chord_times,form_len,chord_times__$1){
return (function (){
var pos = cljs.looperscript.vector_fns.pos_in_vec.call(null,cljs.core.mod.call(null,cljs.core.deref.call(null,cljs.looperscript.globals.current_time_hack),form_len),chord_times__$1);
return cljs.looperscript.vector_fns.chord.call(null,cljs.looperscript.vector_fns.transpose1.call(null,cljs.core.nth.call(null,roots__$1,pos),cljs.core.nth.call(null,chords,pos)));
});
;})(chords,roots,roots__$1,times__$1,chord_times,form_len,chord_times__$1))
});
cljs.looperscript.vector_fns.nth_STAR_ = cljs.core.nth;
cljs.looperscript.vector_fns.scale_nth = (function cljs$looperscript$vector_fns$scale_nth(scale,degree){
return (((12) * Math.floor((degree / cljs.core.count.call(null,scale)))) + cljs.core.nth.call(null,scale,cljs.core.mod.call(null,degree,cljs.core.count.call(null,scale))));
});
cljs.looperscript.vector_fns.scale_pattern = (function cljs$looperscript$vector_fns$scale_pattern(scale,pattern,degrees){
var iter__28517__auto__ = (function cljs$looperscript$vector_fns$scale_pattern_$_iter__37785(s__37786){
return (new cljs.core.LazySeq(null,(function (){
var s__37786__$1 = s__37786;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37786__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var d = cljs.core.first.call(null,xs__5205__auto__);
var iterys__28513__auto__ = ((function (s__37786__$1,d,xs__5205__auto__,temp__4657__auto__){
return (function cljs$looperscript$vector_fns$scale_pattern_$_iter__37785_$_iter__37787(s__37788){
return (new cljs.core.LazySeq(null,((function (s__37786__$1,d,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__37788__$1 = s__37788;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__37788__$1);
if(temp__4657__auto____$1){
var s__37788__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37788__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__37788__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__37790 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__37789 = (0);
while(true){
if((i__37789 < size__28516__auto__)){
var p = cljs.core._nth.call(null,c__28515__auto__,i__37789);
cljs.core.chunk_append.call(null,b__37790,cljs.looperscript.vector_fns.scale_nth.call(null,scale,(d + p)));

var G__37791 = (i__37789 + (1));
i__37789 = G__37791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37790),cljs$looperscript$vector_fns$scale_pattern_$_iter__37785_$_iter__37787.call(null,cljs.core.chunk_rest.call(null,s__37788__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37790),null);
}
} else {
var p = cljs.core.first.call(null,s__37788__$2);
return cljs.core.cons.call(null,cljs.looperscript.vector_fns.scale_nth.call(null,scale,(d + p)),cljs$looperscript$vector_fns$scale_pattern_$_iter__37785_$_iter__37787.call(null,cljs.core.rest.call(null,s__37788__$2)));
}
} else {
return null;
}
break;
}
});})(s__37786__$1,d,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__37786__$1,d,xs__5205__auto__,temp__4657__auto__))
;
var fs__28514__auto__ = cljs.core.seq.call(null,iterys__28513__auto__.call(null,pattern));
if(fs__28514__auto__){
return cljs.core.concat.call(null,fs__28514__auto__,cljs$looperscript$vector_fns$scale_pattern_$_iter__37785.call(null,cljs.core.rest.call(null,s__37786__$1)));
} else {
var G__37792 = cljs.core.rest.call(null,s__37786__$1);
s__37786__$1 = G__37792;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28517__auto__.call(null,degrees);
});
cljs.looperscript.vector_fns.transpose_scale = (function cljs$looperscript$vector_fns$transpose_scale(degree,scale){
return cljs.core.sort.call(null,cljs.core.map.call(null,(function (p1__37793_SHARP_){
return cljs.core.mod.call(null,(p1__37793_SHARP_ + degree),(12));
}),scale));
});
cljs.looperscript.vector_fns.scale_range = (function cljs$looperscript$vector_fns$scale_range(floor,ceil,scale){
var a = (((floor / (12)) | (0)) - (1));
var b = (((ceil / (12)) + (1)) + (1));
return cljs.core.filter.call(null,((function (a,b){
return (function (p1__37794_SHARP_){
return ((floor <= p1__37794_SHARP_)) && ((p1__37794_SHARP_ <= ceil));
});})(a,b))
,(function (){var iter__28517__auto__ = ((function (a,b){
return (function cljs$looperscript$vector_fns$scale_range_$_iter__37795(s__37796){
return (new cljs.core.LazySeq(null,((function (a,b){
return (function (){
var s__37796__$1 = s__37796;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37796__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var o = cljs.core.first.call(null,xs__5205__auto__);
var iterys__28513__auto__ = ((function (s__37796__$1,o,xs__5205__auto__,temp__4657__auto__,a,b){
return (function cljs$looperscript$vector_fns$scale_range_$_iter__37795_$_iter__37797(s__37798){
return (new cljs.core.LazySeq(null,((function (s__37796__$1,o,xs__5205__auto__,temp__4657__auto__,a,b){
return (function (){
var s__37798__$1 = s__37798;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__37798__$1);
if(temp__4657__auto____$1){
var s__37798__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37798__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__37798__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__37800 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__37799 = (0);
while(true){
if((i__37799 < size__28516__auto__)){
var s = cljs.core._nth.call(null,c__28515__auto__,i__37799);
cljs.core.chunk_append.call(null,b__37800,(((12) * o) + s));

var G__37801 = (i__37799 + (1));
i__37799 = G__37801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37800),cljs$looperscript$vector_fns$scale_range_$_iter__37795_$_iter__37797.call(null,cljs.core.chunk_rest.call(null,s__37798__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37800),null);
}
} else {
var s = cljs.core.first.call(null,s__37798__$2);
return cljs.core.cons.call(null,(((12) * o) + s),cljs$looperscript$vector_fns$scale_range_$_iter__37795_$_iter__37797.call(null,cljs.core.rest.call(null,s__37798__$2)));
}
} else {
return null;
}
break;
}
});})(s__37796__$1,o,xs__5205__auto__,temp__4657__auto__,a,b))
,null,null));
});})(s__37796__$1,o,xs__5205__auto__,temp__4657__auto__,a,b))
;
var fs__28514__auto__ = cljs.core.seq.call(null,iterys__28513__auto__.call(null,scale));
if(fs__28514__auto__){
return cljs.core.concat.call(null,fs__28514__auto__,cljs$looperscript$vector_fns$scale_range_$_iter__37795.call(null,cljs.core.rest.call(null,s__37796__$1)));
} else {
var G__37802 = cljs.core.rest.call(null,s__37796__$1);
s__37796__$1 = G__37802;
continue;
}
} else {
return null;
}
break;
}
});})(a,b))
,null,null));
});})(a,b))
;
return iter__28517__auto__.call(null,cljs.core.range.call(null,a,b));
})());
});
cljs.looperscript.vector_fns.scale_range_sweep = (function cljs$looperscript$vector_fns$scale_range_sweep(floor,ceil,scale){
var sr = cljs.core.vec.call(null,cljs.looperscript.vector_fns.scale_range.call(null,floor,ceil,scale));
return cljs.core.into.call(null,sr,cljs.core.drop_last.call(null,cljs.core.rest.call(null,cljs.core.reverse.call(null,sr))));
});
cljs.looperscript.vector_fns.mild_shuffle = (function cljs$looperscript$vector_fns$mild_shuffle(degree,col){
return cljs.core.map.call(null,cljs.core.second,cljs.core.sort.call(null,cljs.core.map_indexed.call(null,(function (idx,n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(idx + cljs.core.rand_int.call(null,(degree - (1)))),n], null);
}),col)));
});
cljs.looperscript.vector_fns.inversion = (function cljs$looperscript$vector_fns$inversion(scale,inv,degree){
return cljs.looperscript.vector_fns.chord.call(null,(function (){var iter__28517__auto__ = (function cljs$looperscript$vector_fns$inversion_$_iter__37803(s__37804){
return (new cljs.core.LazySeq(null,(function (){
var s__37804__$1 = s__37804;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37804__$1);
if(temp__4657__auto__){
var s__37804__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37804__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__37804__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__37806 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__37805 = (0);
while(true){
if((i__37805 < size__28516__auto__)){
var i = cljs.core._nth.call(null,c__28515__auto__,i__37805);
cljs.core.chunk_append.call(null,b__37806,cljs.looperscript.vector_fns.scale_nth.call(null,scale,(i + degree)));

var G__37807 = (i__37805 + (1));
i__37805 = G__37807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37806),cljs$looperscript$vector_fns$inversion_$_iter__37803.call(null,cljs.core.chunk_rest.call(null,s__37804__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37806),null);
}
} else {
var i = cljs.core.first.call(null,s__37804__$2);
return cljs.core.cons.call(null,cljs.looperscript.vector_fns.scale_nth.call(null,scale,(i + degree)),cljs$looperscript$vector_fns$inversion_$_iter__37803.call(null,cljs.core.rest.call(null,s__37804__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28517__auto__.call(null,inv);
})());
});
cljs.looperscript.vector_fns.chord_scale = (function cljs$looperscript$vector_fns$chord_scale(scale,inv,floor,degrees){
var iter__28517__auto__ = (function cljs$looperscript$vector_fns$chord_scale_$_iter__37808(s__37809){
return (new cljs.core.LazySeq(null,(function (){
var s__37809__$1 = s__37809;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37809__$1);
if(temp__4657__auto__){
var s__37809__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37809__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__37809__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__37811 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__37810 = (0);
while(true){
if((i__37810 < size__28516__auto__)){
var d = cljs.core._nth.call(null,c__28515__auto__,i__37810);
cljs.core.chunk_append.call(null,b__37811,cljs.looperscript.vector_fns.inversion.call(null,scale,inv,(floor + d)));

var G__37812 = (i__37810 + (1));
i__37810 = G__37812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37811),cljs$looperscript$vector_fns$chord_scale_$_iter__37808.call(null,cljs.core.chunk_rest.call(null,s__37809__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37811),null);
}
} else {
var d = cljs.core.first.call(null,s__37809__$2);
return cljs.core.cons.call(null,cljs.looperscript.vector_fns.inversion.call(null,scale,inv,(floor + d)),cljs$looperscript$vector_fns$chord_scale_$_iter__37808.call(null,cljs.core.rest.call(null,s__37809__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28517__auto__.call(null,degrees);
});
cljs.looperscript.vector_fns.pcs = (function cljs$looperscript$vector_fns$pcs(v){
return cljs.core.sort.call(null,cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__37813_SHARP_){
return cljs.core.mod.call(null,p1__37813_SHARP_,(12));
}),v))));
});
cljs.looperscript.vector_fns.log_STAR_ = (function cljs$looperscript$vector_fns$log_STAR_(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37815 = arguments.length;
var i__28879__auto___37816 = (0);
while(true){
if((i__28879__auto___37816 < len__28878__auto___37815)){
args__28885__auto__.push((arguments[i__28879__auto___37816]));

var G__37817 = (i__28879__auto___37816 + (1));
i__28879__auto___37816 = G__37817;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.log_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.vector_fns.log_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.apply.call(null,cljs.looperscript.logging.log,args);

return cljs.core.last.call(null,args);
});

cljs.looperscript.vector_fns.log_STAR_.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.log_STAR_.cljs$lang$applyTo = (function (seq37814){
return cljs.looperscript.vector_fns.log_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37814));
});

cljs.looperscript.vector_fns.say = (function cljs$looperscript$vector_fns$say(x){
(window["speechSynthesis"]).speak((new SpeechSynthesisUtterance(x)));

return x;
});
cljs.looperscript.vector_fns.memo_STAR_ = (function cljs$looperscript$vector_fns$memo_STAR_(id,f){
var memo_fn = (function (cnt){
return f.call(null);
});
var counts = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return null;
});
cljs.looperscript.vector_fns.bass_fret = (function cljs$looperscript$vector_fns$bass_fret(string,fret){
return (((-17) + fret) + ((-5) * (string - (1))));
});
cljs.looperscript.vector_fns.user_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.vector_fns.set_user_var = (function cljs$looperscript$vector_fns$set_user_var(k,v){
return cljs.core.swap_BANG_.call(null,cljs.looperscript.vector_fns.user_vars,cljs.core.assoc,k,v);
});
cljs.looperscript.vector_fns.user = (function cljs$looperscript$vector_fns$user(k,default$){
return (function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.looperscript.vector_fns.user_vars),k,default$);
});
});
cljs.looperscript.vector_fns.test_mod = (function cljs$looperscript$vector_fns$test_mod(n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifier-fn","modifier-fn",-1624543303),(function (x){
return (x * n);
})], null);
});
cljs.looperscript.vector_fns.nothing = (function cljs$looperscript$vector_fns$nothing(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37819 = arguments.length;
var i__28879__auto___37820 = (0);
while(true){
if((i__28879__auto___37820 < len__28878__auto___37819)){
args__28885__auto__.push((arguments[i__28879__auto___37820]));

var G__37821 = (i__28879__auto___37820 + (1));
i__28879__auto___37820 = G__37821;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.nothing.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.vector_fns.nothing.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return null;
});

cljs.looperscript.vector_fns.nothing.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.nothing.cljs$lang$applyTo = (function (seq37818){
return cljs.looperscript.vector_fns.nothing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37818));
});

cljs.looperscript.vector_fns.current_beat = (function cljs$looperscript$vector_fns$current_beat(x){
return cljs.core.deref.call(null,cljs.looperscript.globals.current_time_hack);
});
cljs.looperscript.vector_fns.over_mod = (function cljs$looperscript$vector_fns$over_mod(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37823 = arguments.length;
var i__28879__auto___37824 = (0);
while(true){
if((i__28879__auto___37824 < len__28878__auto___37823)){
args__28885__auto__.push((arguments[i__28879__auto___37824]));

var G__37825 = (i__28879__auto___37824 + (1));
i__28879__auto___37824 = G__37825;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.over_mod.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.vector_fns.over_mod.cljs$core$IFn$_invoke$arity$variadic = (function (layers){
var last_res = cljs.core.atom.call(null,(0));
var cum_time_in = cljs.core.atom.call(null,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifier-fn","modifier-fn",-1624543303),((function (last_res,cum_time_in){
return (function (time_in){
var new_res = cljs.looperscript.interp_rhythms.rhythms_interp.call(null,layers,cljs.core.swap_BANG_.call(null,cum_time_in,cljs.core._PLUS_,time_in));
var res_diff = (new_res - cljs.core.deref.call(null,last_res));
cljs.core.reset_BANG_.call(null,last_res,new_res);

return res_diff;
});})(last_res,cum_time_in))
], null);
});

cljs.looperscript.vector_fns.over_mod.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.over_mod.cljs$lang$applyTo = (function (seq37822){
return cljs.looperscript.vector_fns.over_mod.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37822));
});

cljs.looperscript.vector_fns.insert_randomly = (function cljs$looperscript$vector_fns$insert_randomly(v,x){
var pos = cljs.core.rand_int.call(null,(cljs.core.count.call(null,v) + (1)));
return cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,pos,v)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)),cljs.core.drop.call(null,pos,v));
});
cljs.looperscript.vector_fns.grow = (function cljs$looperscript$vector_fns$grow(odds,new_note_fn){
var accum = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return ((function (accum){
return (function (){
if((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,accum))) || ((cljs.core.rand.call(null) < odds))){
return cljs.core.swap_BANG_.call(null,accum,cljs.looperscript.vector_fns.insert_randomly,new_note_fn.call(null));
} else {
return cljs.core.deref.call(null,accum);
}
});
;})(accum))
});
cljs.looperscript.vector_fns.step = (function cljs$looperscript$vector_fns$step(start_val,increment){
var val = cljs.core.atom.call(null,start_val);
return ((function (val){
return (function (){
var res = cljs.core.deref.call(null,val);
cljs.core.swap_BANG_.call(null,val,cljs.core._PLUS_,increment);

return res;
});
;})(val))
});
cljs.looperscript.vector_fns.time_STAR_ = (function cljs$looperscript$vector_fns$time_STAR_(){
return (cljs.looperscript.start_time.now.call(null) - cljs.looperscript.start_time.get_current_start_time.call(null));
});
cljs.looperscript.vector_fns.add_dethunk_test = (function cljs$looperscript$vector_fns$add_dethunk_test(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37827 = arguments.length;
var i__28879__auto___37828 = (0);
while(true){
if((i__28879__auto___37828 < len__28878__auto___37827)){
args__28885__auto__.push((arguments[i__28879__auto___37828]));

var G__37829 = (i__28879__auto___37828 + (1));
i__28879__auto___37828 = G__37829;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.add_dethunk_test.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.vector_fns.add_dethunk_test.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var dethunk = (function cljs$looperscript$vector_fns$dethunk(x){
if(cljs.core.fn_QMARK_.call(null,x)){
return cljs$looperscript$vector_fns$dethunk.call(null,x.call(null));
} else {
return x;
}
});
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,dethunk,args));
});

cljs.looperscript.vector_fns.add_dethunk_test.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.add_dethunk_test.cljs$lang$applyTo = (function (seq37826){
return cljs.looperscript.vector_fns.add_dethunk_test.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37826));
});

cljs.looperscript.vector_fns.variable_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.vector_fns.reset_variables_BANG_ = (function cljs$looperscript$vector_fns$reset_variables_BANG_(){
return cljs.core.reset_BANG_.call(null,cljs.looperscript.vector_fns.variable_map,cljs.core.PersistentArrayMap.EMPTY);
});
cljs.looperscript.vector_fns.define_variable = (function cljs$looperscript$vector_fns$define_variable(s,x){
cljs.looperscript.logging.log.call(null,"defined ",s," as ",x);

cljs.looperscript.logging.log.call(null,new cljs.core.Keyword(null,"PRE","PRE",-28847473),cljs.core.deref.call(null,cljs.looperscript.vector_fns.variable_map),"\n");

cljs.core.swap_BANG_.call(null,cljs.looperscript.vector_fns.variable_map,cljs.core.assoc,s,x);

cljs.looperscript.logging.log.call(null,new cljs.core.Keyword(null,"POST","POST",110456857),cljs.core.deref.call(null,cljs.looperscript.vector_fns.variable_map),"\n");

return x;
});
cljs.looperscript.vector_fns.get_variable = (function cljs$looperscript$vector_fns$get_variable(s){
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.looperscript.vector_fns.variable_map),s);
});
cljs.looperscript.vector_fns.cache = (function cljs$looperscript$vector_fns$cache(f){
var output = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var output_pos = cljs.core.atom.call(null,(0));
var key_positions = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (output,output_pos,key_positions){
return (function (key){
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,key_positions),key))){
cljs.core.swap_BANG_.call(null,key_positions,cljs.core.assoc,key,(0));
} else {
}

var key_pos = cljs.core.get.call(null,cljs.core.deref.call(null,key_positions),key);
if(cljs.core._EQ_.call(null,key_pos,cljs.core.deref.call(null,output_pos))){
cljs.core.swap_BANG_.call(null,output,cljs.core.conj,f.call(null));

cljs.core.swap_BANG_.call(null,output_pos,cljs.core.inc);
} else {
}

var res = cljs.core.nth.call(null,cljs.core.deref.call(null,output),key_pos);
cljs.core.swap_BANG_.call(null,key_positions,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.inc);

return res;
});
;})(output,output_pos,key_positions))
});
cljs.looperscript.vector_fns.set_rand_seed = (function cljs$looperscript$vector_fns$set_rand_seed(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37831 = arguments.length;
var i__28879__auto___37832 = (0);
while(true){
if((i__28879__auto___37832 < len__28878__auto___37831)){
args__28885__auto__.push((arguments[i__28879__auto___37832]));

var G__37833 = (i__28879__auto___37832 + (1));
i__28879__auto___37832 = G__37833;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.set_rand_seed.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.vector_fns.set_rand_seed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var seed_37834 = (cljs.core.truth_(args)?cljs.core.first.call(null,args):cljs.looperscript.vector_fns.rand_int_STAR_.call(null,(10000),(99999)));
cljs.looperscript.logging.log.call(null,"seed: ",seed_37834);

Math.seedrandom(seed_37834);

return null;
});

cljs.looperscript.vector_fns.set_rand_seed.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.set_rand_seed.cljs$lang$applyTo = (function (seq37830){
return cljs.looperscript.vector_fns.set_rand_seed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37830));
});

cljs.looperscript.vector_fns.tuning = (function cljs$looperscript$vector_fns$tuning(scale){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifier-fn","modifier-fn",-1624543303),(function (){var octave_size = (cljs.core.last.call(null,scale) - cljs.core.first.call(null,scale));
var scale_len = (cljs.core.count.call(null,scale) - (1));
return ((function (octave_size,scale_len){
return (function (p){
var p__$1 = Math.floor(p);
var degree = cljs.core.mod.call(null,p__$1,scale_len);
var octave = Math.floor((p__$1 / scale_len));
return (cljs.core.nth.call(null,scale,degree) + (octave_size * octave));
});
;})(octave_size,scale_len))
})()], null);
});
cljs.looperscript.vector_fns.plus = (function cljs$looperscript$vector_fns$plus(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37836 = arguments.length;
var i__28879__auto___37837 = (0);
while(true){
if((i__28879__auto___37837 < len__28878__auto___37836)){
args__28885__auto__.push((arguments[i__28879__auto___37837]));

var G__37838 = (i__28879__auto___37837 + (1));
i__28879__auto___37837 = G__37838;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.plus.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.vector_fns.plus.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._PLUS_,args);
});

cljs.looperscript.vector_fns.plus.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.plus.cljs$lang$applyTo = (function (seq37835){
return cljs.looperscript.vector_fns.plus.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37835));
});

cljs.looperscript.vector_fns.sum = (function cljs$looperscript$vector_fns$sum(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37840 = arguments.length;
var i__28879__auto___37841 = (0);
while(true){
if((i__28879__auto___37841 < len__28878__auto___37840)){
args__28885__auto__.push((arguments[i__28879__auto___37841]));

var G__37842 = (i__28879__auto___37841 + (1));
i__28879__auto___37841 = G__37842;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.sum.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.vector_fns.sum.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.flatten.call(null,args));
});

cljs.looperscript.vector_fns.sum.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.sum.cljs$lang$applyTo = (function (seq37839){
return cljs.looperscript.vector_fns.sum.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37839));
});

cljs.looperscript.vector_fns.times = (function cljs$looperscript$vector_fns$times(var_args){
var args__28885__auto__ = [];
var len__28878__auto___37844 = arguments.length;
var i__28879__auto___37845 = (0);
while(true){
if((i__28879__auto___37845 < len__28878__auto___37844)){
args__28885__auto__.push((arguments[i__28879__auto___37845]));

var G__37846 = (i__28879__auto___37845 + (1));
i__28879__auto___37845 = G__37846;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.times.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.vector_fns.times.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._STAR_,args);
});

cljs.looperscript.vector_fns.times.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.times.cljs$lang$applyTo = (function (seq37843){
return cljs.looperscript.vector_fns.times.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37843));
});

cljs.looperscript.vector_fns.pow_STAR_ = (function cljs$looperscript$vector_fns$pow_STAR_(a,b){
return Math.pow(a,b);
});
cljs.looperscript.vector_fns.sin = (function cljs$looperscript$vector_fns$sin(n){
return Math.sin(n);
});
cljs.looperscript.vector_fns.cos = (function cljs$looperscript$vector_fns$cos(n){
return Math.cos(n);
});
cljs.looperscript.vector_fns.floor = (function cljs$looperscript$vector_fns$floor(n){
return Math.floor(n);
});
cljs.looperscript.vector_fns.intact = (function cljs$looperscript$vector_fns$intact(v){
return cljs.core.with_meta.call(null,v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intact-for-sub-time","intact-for-sub-time",1903796476),new cljs.core.Keyword(null,"true","true",-1114210334)], null));
});
cljs.looperscript.vector_fns.vec_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"nothing","nothing",-1022703296),new cljs.core.Keyword(null,"say","say",504378016),new cljs.core.Keyword(null,"shuffle","shuffle",1261412160),new cljs.core.Keyword(null,"repeatedly","repeatedly",-440567070),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"tuning","tuning",-48660925),new cljs.core.Keyword(null,"dethunk","dethunk",-54386077),new cljs.core.Keyword(null,"interleave","interleave",-1475043421),new cljs.core.Keyword(null,"cos","cos",1201758276),new cljs.core.Keyword(null,"cycle","cycle",710365284),new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"rand","rand",908504774),new cljs.core.Keyword(null,"mod","mod",-130487320),new cljs.core.Keyword(null,"memo-rand-nth","memo-rand-nth",-228329431),new cljs.core.Keyword(null,"odc","odc",-2046968759),new cljs.core.Keyword(null,"pow","pow",-1444004567),new cljs.core.Keyword(null,"weight1","weight1",584068617),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"prog2","prog2",1028229930),new cljs.core.Keyword(null,"abs-times","abs-times",-1890276438),new cljs.core.Keyword(null,"chord","chord",-696248342),new cljs.core.Keyword(null,"times","times",1671571467),new cljs.core.Keyword(null,"nth","nth",-111321973),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"walk2","walk2",1167361132),new cljs.core.Keyword(null,"scale-range-sweep","scale-range-sweep",255716877),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"odc1","odc1",1144546126),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"combine","combine",-1433083313),new cljs.core.Keyword(null,"intact","intact",-1755370897),new cljs.core.Keyword(null,"walk1","walk1",-824993744),new cljs.core.Keyword(null,"scale-range","scale-range",-910552944),new cljs.core.Keyword(null,"flatten","flatten",1212802416),new cljs.core.Keyword(null,"grow","grow",-524118895),new cljs.core.Keyword(null,"partial","partial",241141745),new cljs.core.Keyword(null,"rand-hold","rand-hold",1221211378),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"weight2","weight2",-1471744749),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"rand-range","rand-range",-1792793772),new cljs.core.Keyword(null,"time*","time*",-163169420),new cljs.core.Keyword(null,"once","once",-262568523),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.Keyword(null,"transpose-scale","transpose-scale",-213992459),new cljs.core.Keyword(null,"sin","sin",80907862),new cljs.core.Keyword(null,"prog1","prog1",-2000432905),new cljs.core.Keyword(null,"rand-exp-range","rand-exp-range",1927268695),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"chords","chords",234981817),new cljs.core.Keyword(null,"call1","call1",-617831655),new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.Keyword(null,"over","over",192553051),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"mild-shuffle","mild-shuffle",-1737984709),new cljs.core.Keyword(null,"bass-fret","bass-fret",-264582661),new cljs.core.Keyword(null,"pcs","pcs",-159224772),new cljs.core.Keyword(null,"rand-int","rand-int",-2135543684),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"take","take",-768884900),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"sweep-range","sweep-range",-1174235587),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"chord-scale","chord-scale",1640216638),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"current-beat","current-beat",-783864289),new cljs.core.Keyword(null,"eval","eval",-1103567905)],[cljs.looperscript.vector_fns.nothing,cljs.looperscript.vector_fns.say,cljs.core.shuffle,cljs.core.repeatedly,cljs.looperscript.vector_fns.get_variable,cljs.looperscript.vector_fns.tuning,cljs.looperscript.vector_fns.dethunk,cljs.core.interleave,cljs.looperscript.vector_fns.cos,cljs.looperscript.vector_fns.cycle_STAR_,cljs.looperscript.vector_fns.rand_walk,cljs.looperscript.vector_fns.dethunk,cljs.looperscript.vector_fns.rand_nth_STAR_,cljs.core.mod,cljs.looperscript.vector_fns.memo_rand_nth,cljs.looperscript.vector_fns.odc,cljs.looperscript.vector_fns.pow_STAR_,cljs.looperscript.vector_fns.rand_weighted_either_or,cljs.looperscript.vector_fns.fill_time,cljs.looperscript.vector_fns.chord_progression2,cljs.looperscript.vector_fns.abs_times,cljs.looperscript.vector_fns.chord,cljs.looperscript.vector_fns.times,cljs.looperscript.vector_fns.nth_STAR_,cljs.core.repeatedly,cljs.looperscript.vector_fns.rand_walk2,cljs.looperscript.vector_fns.scale_range_sweep,cljs.core.vector,cljs.looperscript.vector_fns.odc1,cljs.looperscript.vector_fns.set_rand_seed,cljs.looperscript.vector_fns.combine,cljs.looperscript.vector_fns.intact,cljs.looperscript.vector_fns.rand_walk1,cljs.looperscript.vector_fns.scale_range,cljs.looperscript.vector_fns.flatten_STAR_,cljs.looperscript.vector_fns.grow,cljs.core.partial,cljs.looperscript.vector_fns.rand_hold,cljs.looperscript.vector_fns.cache,cljs.looperscript.vector_fns.rand_weighted_zip,cljs.looperscript.vector_fns.rand_weighted,cljs.looperscript.vector_fns.rand_range,cljs.looperscript.vector_fns.time_STAR_,cljs.looperscript.vector_fns.once,cljs.core.count,cljs.looperscript.vector_fns.plus,cljs.core.apply,cljs.looperscript.vector_fns.transpose_scale,cljs.looperscript.vector_fns.sin,cljs.looperscript.vector_fns.chord_progression1,cljs.looperscript.vector_fns.rand_exp_range,cljs.looperscript.vector_fns.define_variable,cljs.core.repeat,cljs.looperscript.vector_fns.chords,cljs.looperscript.vector_fns.call1,cljs.looperscript.vector_fns.chord,cljs.looperscript.vector_fns.over_mod,cljs.looperscript.vector_fns.add_dethunk_test,cljs.looperscript.vector_fns.mild_shuffle,cljs.looperscript.vector_fns.bass_fret,cljs.looperscript.vector_fns.pcs,cljs.looperscript.vector_fns.rand_int_STAR_,cljs.looperscript.vector_fns.step,cljs.looperscript.vector_fns.take_STAR_,cljs.looperscript.vector_fns.log_STAR_,cljs.looperscript.vector_fns.user,cljs.looperscript.vector_fns.sweep_range,cljs.looperscript.vector_fns.floor,cljs.looperscript.vector_fns.rest_STAR_,cljs.looperscript.vector_fns.chord_scale,cljs.core.sort,cljs.looperscript.vector_fns.sum,cljs.looperscript.vector_fns.range_STAR_,cljs.looperscript.vector_fns.in$,cljs.looperscript.vector_fns.scale_pattern,cljs.looperscript.vector_fns.current_beat,cljs.looperscript.vector_fns.eval_str]);

//# sourceMappingURL=vector_fns.js.map?rel=1514752957215
