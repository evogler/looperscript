// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.vector_fns');
goog.require('cljs.core');
goog.require('cljs.looperscript.interp_rhythms');
goog.require('cljs.looperscript.start_time');
cljs.looperscript.vector_fns.log = (function cljs$looperscript$vector_fns$log(var_args){
var args__29165__auto__ = [];
var len__29158__auto___30090 = arguments.length;
var i__29159__auto___30091 = (0);
while(true){
if((i__29159__auto___30091 < len__29158__auto___30090)){
args__29165__auto__.push((arguments[i__29159__auto___30091]));

var G__30092 = (i__29159__auto___30091 + (1));
i__29159__auto___30091 = G__30092;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.log.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.looperscript.vector_fns.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(cljs.core.apply.call(null,cljs.core.str,args));
});

cljs.looperscript.vector_fns.log.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.log.cljs$lang$applyTo = (function (seq30089){
return cljs.looperscript.vector_fns.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30089));
});

cljs.looperscript.vector_fns.shuffle_STAR_ = (function cljs$looperscript$vector_fns$shuffle_STAR_(v){
return cljs.core.shuffle;
});
cljs.looperscript.vector_fns.range_STAR_ = (function cljs$looperscript$vector_fns$range_STAR_(var_args){
var G__30094 = arguments.length;
switch (G__30094) {
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

cljs.looperscript.vector_fns.rand_range = (function cljs$looperscript$vector_fns$rand_range(floor,ceil){
return ((cljs.core.rand.call(null) * (ceil - floor)) + floor);
});
cljs.looperscript.vector_fns.rand_int_STAR_ = (function cljs$looperscript$vector_fns$rand_int_STAR_(var_args){
var G__30097 = arguments.length;
switch (G__30097) {
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

cljs.looperscript.vector_fns.rand_nth_STAR_ = cljs.core.rand_nth;
cljs.looperscript.vector_fns.take_STAR_ = cljs.core.take;
cljs.looperscript.vector_fns.rand_exp_range = (function cljs$looperscript$vector_fns$rand_exp_range(floor,ceil,exp){
return ((Math.pow(cljs.core.rand.call(null),exp) * (ceil - floor)) + floor);
});
cljs.looperscript.vector_fns.handle_v_keyword = (function cljs$looperscript$vector_fns$handle_v_keyword(n,d){
return cljs.core.repeat.call(null,n,(d / n));
});
cljs.looperscript.vector_fns.rand_weighted = (function cljs$looperscript$vector_fns$rand_weighted(var_args){
var args__29165__auto__ = [];
var len__29158__auto___30104 = arguments.length;
var i__29159__auto___30105 = (0);
while(true){
if((i__29159__auto___30105 < len__29158__auto___30104)){
args__29165__auto__.push((arguments[i__29159__auto___30105]));

var G__30106 = (i__29159__auto___30105 + (1));
i__29159__auto___30105 = G__30106;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.rand_weighted.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.looperscript.vector_fns.rand_weighted.cljs$core$IFn$_invoke$arity$variadic = (function (v){
var vec__30101 = cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.partition.call(null,(2),v));
var vs = cljs.core.nth.call(null,vec__30101,(0),null);
var ws = cljs.core.nth.call(null,vec__30101,(1),null);
var cum_ws = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),ws);
var sum = cljs.core.last.call(null,cum_ws);
var r = (cljs.core.rand.call(null) * sum);
return cljs.core.some.call(null,((function (vec__30101,vs,ws,cum_ws,sum,r){
return (function (p1__30099_SHARP_){
if((cljs.core.nth.call(null,cum_ws,p1__30099_SHARP_) < r)){
return cljs.core.nth.call(null,vs,p1__30099_SHARP_);
} else {
return null;
}
});})(vec__30101,vs,ws,cum_ws,sum,r))
,cljs.core.range.call(null,(cljs.core.count.call(null,vs) - (1)),(-1),(-1)));
});

cljs.looperscript.vector_fns.rand_weighted.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.rand_weighted.cljs$lang$applyTo = (function (seq30100){
return cljs.looperscript.vector_fns.rand_weighted.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30100));
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
return (function (p1__30107_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_choice),p1__30107_SHARP_);
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
return cljs.core.nth.call(null,v,cljs.core.reset_BANG_.call(null,pos,rand_int_range.call(null,(function (){var x__28339__auto__ = (0);
var y__28340__auto__ = (cljs.core.deref.call(null,pos) - max_step);
return ((x__28339__auto__ > y__28340__auto__) ? x__28339__auto__ : y__28340__auto__);
})(),(function (){var x__28346__auto__ = max_v;
var y__28347__auto__ = (cljs.core.deref.call(null,pos) + max_step);
return ((x__28346__auto__ < y__28347__auto__) ? x__28346__auto__ : y__28347__auto__);
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
var new_pos = rand_int_range.call(null,(function (){var x__28339__auto__ = (0);
var y__28340__auto__ = (cljs.core.deref.call(null,pos) - max_step);
return ((x__28339__auto__ > y__28340__auto__) ? x__28339__auto__ : y__28340__auto__);
})(),(function (){var x__28346__auto__ = max_v;
var y__28347__auto__ = (cljs.core.deref.call(null,pos) + max_step);
return ((x__28346__auto__ < y__28347__auto__) ? x__28346__auto__ : y__28347__auto__);
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
return (function (p1__30109_SHARP_){
return (((0) <= p1__30109_SHARP_)) && ((p1__30109_SHARP_ <= max_v));
});})(max_v,pos))
,cljs.core.map.call(null,((function (max_v,pos){
return (function (p1__30108_SHARP_){
return (p1__30108_SHARP_ + cljs.core.deref.call(null,pos));
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
cljs.looperscript.vector_fns.in$ = (function cljs$looperscript$vector_fns$in(t,v){
var v__$1 = cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
var factor = (t / cljs.core.reduce.call(null,cljs.core._PLUS_,v__$1));
return cljs.core.map.call(null,((function (v__$1,factor){
return (function (p1__30110_SHARP_){
return (factor * p1__30110_SHARP_);
});})(v__$1,factor))
,v__$1);
});
cljs.looperscript.vector_fns.cycle_STAR_ = (function cljs$looperscript$vector_fns$cycle_STAR_(v){
var pos = cljs.core.atom.call(null,(-1));
var v_len = cljs.core.count.call(null,v);
return ((function (pos,v_len){
return (function (){
return cljs.core.nth.call(null,v,cljs.core.swap_BANG_.call(null,pos,((function (pos,v_len){
return (function (p1__30111_SHARP_){
return cljs.core.mod.call(null,(p1__30111_SHARP_ + (1)),v_len);
});})(pos,v_len))
));
});
;})(pos,v_len))
});
cljs.looperscript.vector_fns.fill_time = (function cljs$looperscript$vector_fns$fill_time(t,v){
var previous_total = cljs.core.atom.call(null,null);
var total = cljs.core.atom.call(null,(0));
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.take_while.call(null,((function (previous_total,total){
return (function (p1__30112_SHARP_){
cljs.core.reset_BANG_.call(null,previous_total,cljs.core.deref.call(null,total));

return (cljs.core.swap_BANG_.call(null,total,cljs.core._PLUS_,p1__30112_SHARP_) < t);
});})(previous_total,total))
,((cljs.core.fn_QMARK_.call(null,v))?cljs.core.repeatedly.call(null,v):cljs.core.cycle.call(null,cljs.core.flatten.call(null,v))))),(t - cljs.core.deref.call(null,previous_total)));
});
cljs.looperscript.vector_fns.once = (function cljs$looperscript$vector_fns$once(x){
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
cljs.looperscript.vector_fns.flatten_STAR_ = (function cljs$looperscript$vector_fns$flatten_STAR_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___30114 = arguments.length;
var i__29159__auto___30115 = (0);
while(true){
if((i__29159__auto___30115 < len__29158__auto___30114)){
args__29165__auto__.push((arguments[i__29159__auto___30115]));

var G__30116 = (i__29159__auto___30115 + (1));
i__29159__auto___30115 = G__30116;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.flatten_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.looperscript.vector_fns.flatten_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.flatten.call(null,args);
});

cljs.looperscript.vector_fns.flatten_STAR_.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.flatten_STAR_.cljs$lang$applyTo = (function (seq30113){
return cljs.looperscript.vector_fns.flatten_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30113));
});

cljs.looperscript.vector_fns.dethunk = (function cljs$looperscript$vector_fns$dethunk(x){
if(cljs.core.fn_QMARK_.call(null,x)){
return cljs.looperscript.vector_fns.dethunk.call(null,x.call(null));
} else {
return x;
}
});
cljs.looperscript.vector_fns.nth_STAR_ = cljs.core.nth;
cljs.looperscript.vector_fns.scale_nth = (function cljs$looperscript$vector_fns$scale_nth(scale,degree){
return (((12) * Math.floor((degree / cljs.core.count.call(null,scale)))) + cljs.core.nth.call(null,scale,cljs.core.mod.call(null,degree,cljs.core.count.call(null,scale))));
});
cljs.looperscript.vector_fns.scale_pattern = (function cljs$looperscript$vector_fns$scale_pattern(scale,pattern,degrees){
var iter__28797__auto__ = (function cljs$looperscript$vector_fns$scale_pattern_$_iter__30117(s__30118){
return (new cljs.core.LazySeq(null,(function (){
var s__30118__$1 = s__30118;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30118__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var d = cljs.core.first.call(null,xs__5205__auto__);
var iterys__28793__auto__ = ((function (s__30118__$1,d,xs__5205__auto__,temp__4657__auto__){
return (function cljs$looperscript$vector_fns$scale_pattern_$_iter__30117_$_iter__30119(s__30120){
return (new cljs.core.LazySeq(null,((function (s__30118__$1,d,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__30120__$1 = s__30120;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__30120__$1);
if(temp__4657__auto____$1){
var s__30120__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30120__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__30120__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__30122 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__30121 = (0);
while(true){
if((i__30121 < size__28796__auto__)){
var p = cljs.core._nth.call(null,c__28795__auto__,i__30121);
cljs.core.chunk_append.call(null,b__30122,cljs.looperscript.vector_fns.scale_nth.call(null,scale,(d + p)));

var G__30123 = (i__30121 + (1));
i__30121 = G__30123;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30122),cljs$looperscript$vector_fns$scale_pattern_$_iter__30117_$_iter__30119.call(null,cljs.core.chunk_rest.call(null,s__30120__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30122),null);
}
} else {
var p = cljs.core.first.call(null,s__30120__$2);
return cljs.core.cons.call(null,cljs.looperscript.vector_fns.scale_nth.call(null,scale,(d + p)),cljs$looperscript$vector_fns$scale_pattern_$_iter__30117_$_iter__30119.call(null,cljs.core.rest.call(null,s__30120__$2)));
}
} else {
return null;
}
break;
}
});})(s__30118__$1,d,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__30118__$1,d,xs__5205__auto__,temp__4657__auto__))
;
var fs__28794__auto__ = cljs.core.seq.call(null,iterys__28793__auto__.call(null,pattern));
if(fs__28794__auto__){
return cljs.core.concat.call(null,fs__28794__auto__,cljs$looperscript$vector_fns$scale_pattern_$_iter__30117.call(null,cljs.core.rest.call(null,s__30118__$1)));
} else {
var G__30124 = cljs.core.rest.call(null,s__30118__$1);
s__30118__$1 = G__30124;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28797__auto__.call(null,degrees);
});
cljs.looperscript.vector_fns.transpose_scale = (function cljs$looperscript$vector_fns$transpose_scale(degree,scale){
return cljs.core.sort.call(null,cljs.core.map.call(null,(function (p1__30125_SHARP_){
return cljs.core.mod.call(null,(p1__30125_SHARP_ + degree),(12));
}),scale));
});
cljs.looperscript.vector_fns.scale_range = (function cljs$looperscript$vector_fns$scale_range(floor,ceil,scale){
var a = (((floor / (12)) | (0)) - (1));
var b = (((ceil / (12)) + (1)) + (1));
return cljs.core.filter.call(null,((function (a,b){
return (function (p1__30126_SHARP_){
return ((floor <= p1__30126_SHARP_)) && ((p1__30126_SHARP_ <= ceil));
});})(a,b))
,(function (){var iter__28797__auto__ = ((function (a,b){
return (function cljs$looperscript$vector_fns$scale_range_$_iter__30127(s__30128){
return (new cljs.core.LazySeq(null,((function (a,b){
return (function (){
var s__30128__$1 = s__30128;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30128__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var o = cljs.core.first.call(null,xs__5205__auto__);
var iterys__28793__auto__ = ((function (s__30128__$1,o,xs__5205__auto__,temp__4657__auto__,a,b){
return (function cljs$looperscript$vector_fns$scale_range_$_iter__30127_$_iter__30129(s__30130){
return (new cljs.core.LazySeq(null,((function (s__30128__$1,o,xs__5205__auto__,temp__4657__auto__,a,b){
return (function (){
var s__30130__$1 = s__30130;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__30130__$1);
if(temp__4657__auto____$1){
var s__30130__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30130__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__30130__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__30132 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__30131 = (0);
while(true){
if((i__30131 < size__28796__auto__)){
var s = cljs.core._nth.call(null,c__28795__auto__,i__30131);
cljs.core.chunk_append.call(null,b__30132,(((12) * o) + s));

var G__30133 = (i__30131 + (1));
i__30131 = G__30133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30132),cljs$looperscript$vector_fns$scale_range_$_iter__30127_$_iter__30129.call(null,cljs.core.chunk_rest.call(null,s__30130__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30132),null);
}
} else {
var s = cljs.core.first.call(null,s__30130__$2);
return cljs.core.cons.call(null,(((12) * o) + s),cljs$looperscript$vector_fns$scale_range_$_iter__30127_$_iter__30129.call(null,cljs.core.rest.call(null,s__30130__$2)));
}
} else {
return null;
}
break;
}
});})(s__30128__$1,o,xs__5205__auto__,temp__4657__auto__,a,b))
,null,null));
});})(s__30128__$1,o,xs__5205__auto__,temp__4657__auto__,a,b))
;
var fs__28794__auto__ = cljs.core.seq.call(null,iterys__28793__auto__.call(null,scale));
if(fs__28794__auto__){
return cljs.core.concat.call(null,fs__28794__auto__,cljs$looperscript$vector_fns$scale_range_$_iter__30127.call(null,cljs.core.rest.call(null,s__30128__$1)));
} else {
var G__30134 = cljs.core.rest.call(null,s__30128__$1);
s__30128__$1 = G__30134;
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
return iter__28797__auto__.call(null,cljs.core.range.call(null,a,b));
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
cljs.looperscript.vector_fns.log_STAR_ = (function cljs$looperscript$vector_fns$log_STAR_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___30136 = arguments.length;
var i__29159__auto___30137 = (0);
while(true){
if((i__29159__auto___30137 < len__29158__auto___30136)){
args__29165__auto__.push((arguments[i__29159__auto___30137]));

var G__30138 = (i__29159__auto___30137 + (1));
i__29159__auto___30137 = G__30138;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.log_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.looperscript.vector_fns.log_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.apply.call(null,cljs.looperscript.vector_fns.log,args);

return cljs.core.last.call(null,args);
});

cljs.looperscript.vector_fns.log_STAR_.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.log_STAR_.cljs$lang$applyTo = (function (seq30135){
return cljs.looperscript.vector_fns.log_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30135));
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
cljs.looperscript.vector_fns.over_mod = (function cljs$looperscript$vector_fns$over_mod(var_args){
var args__29165__auto__ = [];
var len__29158__auto___30140 = arguments.length;
var i__29159__auto___30141 = (0);
while(true){
if((i__29159__auto___30141 < len__29158__auto___30140)){
args__29165__auto__.push((arguments[i__29159__auto___30141]));

var G__30142 = (i__29159__auto___30141 + (1));
i__29159__auto___30141 = G__30142;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.over_mod.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.looperscript.vector_fns.over_mod.cljs$core$IFn$_invoke$arity$variadic = (function (layers){
cljs.looperscript.vector_fns.log.call(null,new cljs.core.Keyword(null,"over-mod","over-mod",-523435366),layers);

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

cljs.looperscript.vector_fns.over_mod.cljs$lang$applyTo = (function (seq30139){
return cljs.looperscript.vector_fns.over_mod.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30139));
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
cljs.looperscript.vector_fns.time = (function cljs$looperscript$vector_fns$time(){
return (cljs.looperscript.start_time.now.call(null) - cljs.looperscript.start_time.get_current_start_time.call(null));
});
cljs.looperscript.vector_fns.add_dethunk_test = (function cljs$looperscript$vector_fns$add_dethunk_test(var_args){
var args__29165__auto__ = [];
var len__29158__auto___30144 = arguments.length;
var i__29159__auto___30145 = (0);
while(true){
if((i__29159__auto___30145 < len__29158__auto___30144)){
args__29165__auto__.push((arguments[i__29159__auto___30145]));

var G__30146 = (i__29159__auto___30145 + (1));
i__29159__auto___30145 = G__30146;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.add_dethunk_test.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
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

cljs.looperscript.vector_fns.add_dethunk_test.cljs$lang$applyTo = (function (seq30143){
return cljs.looperscript.vector_fns.add_dethunk_test.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30143));
});

cljs.looperscript.vector_fns.variable_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.vector_fns.reset_variables_BANG_ = (function cljs$looperscript$vector_fns$reset_variables_BANG_(){
return cljs.core.reset_BANG_.call(null,cljs.looperscript.vector_fns.variable_map,cljs.core.PersistentArrayMap.EMPTY);
});
cljs.looperscript.vector_fns.define_variable = (function cljs$looperscript$vector_fns$define_variable(s,x){
cljs.looperscript.vector_fns.log.call(null,"defined ",s," as ",x);

cljs.core.swap_BANG_.call(null,cljs.looperscript.vector_fns.variable_map,cljs.core.assoc,s,x);

return null;
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
var args__29165__auto__ = [];
var len__29158__auto___30148 = arguments.length;
var i__29159__auto___30149 = (0);
while(true){
if((i__29159__auto___30149 < len__29158__auto___30148)){
args__29165__auto__.push((arguments[i__29159__auto___30149]));

var G__30150 = (i__29159__auto___30149 + (1));
i__29159__auto___30149 = G__30150;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.set_rand_seed.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.looperscript.vector_fns.set_rand_seed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.empty_QMARK_.call(null,args)){
Math.seedrandom();
} else {
Math.seedrandom(args);
}

return null;
});

cljs.looperscript.vector_fns.set_rand_seed.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.set_rand_seed.cljs$lang$applyTo = (function (seq30147){
return cljs.looperscript.vector_fns.set_rand_seed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30147));
});

cljs.looperscript.vector_fns.plus = (function cljs$looperscript$vector_fns$plus(var_args){
var args__29165__auto__ = [];
var len__29158__auto___30152 = arguments.length;
var i__29159__auto___30153 = (0);
while(true){
if((i__29159__auto___30153 < len__29158__auto___30152)){
args__29165__auto__.push((arguments[i__29159__auto___30153]));

var G__30154 = (i__29159__auto___30153 + (1));
i__29159__auto___30153 = G__30154;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.plus.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.looperscript.vector_fns.plus.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._PLUS_,args);
});

cljs.looperscript.vector_fns.plus.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.plus.cljs$lang$applyTo = (function (seq30151){
return cljs.looperscript.vector_fns.plus.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30151));
});

cljs.looperscript.vector_fns.sum = (function cljs$looperscript$vector_fns$sum(var_args){
var args__29165__auto__ = [];
var len__29158__auto___30156 = arguments.length;
var i__29159__auto___30157 = (0);
while(true){
if((i__29159__auto___30157 < len__29158__auto___30156)){
args__29165__auto__.push((arguments[i__29159__auto___30157]));

var G__30158 = (i__29159__auto___30157 + (1));
i__29159__auto___30157 = G__30158;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.sum.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.looperscript.vector_fns.sum.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.flatten.call(null,args));
});

cljs.looperscript.vector_fns.sum.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.sum.cljs$lang$applyTo = (function (seq30155){
return cljs.looperscript.vector_fns.sum.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30155));
});

cljs.looperscript.vector_fns.times = (function cljs$looperscript$vector_fns$times(var_args){
var args__29165__auto__ = [];
var len__29158__auto___30160 = arguments.length;
var i__29159__auto___30161 = (0);
while(true){
if((i__29159__auto___30161 < len__29158__auto___30160)){
args__29165__auto__.push((arguments[i__29159__auto___30161]));

var G__30162 = (i__29159__auto___30161 + (1));
i__29159__auto___30161 = G__30162;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.times.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.looperscript.vector_fns.times.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._STAR_,args);
});

cljs.looperscript.vector_fns.times.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.times.cljs$lang$applyTo = (function (seq30159){
return cljs.looperscript.vector_fns.times.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30159));
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
cljs.looperscript.vector_fns.vec_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"say","say",504378016),new cljs.core.Keyword(null,"shuffle","shuffle",1261412160),new cljs.core.Keyword(null,"repeatedly","repeatedly",-440567070),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"dethunk","dethunk",-54386077),new cljs.core.Keyword(null,"interleave","interleave",-1475043421),new cljs.core.Keyword(null,"cos","cos",1201758276),new cljs.core.Keyword(null,"cycle","cycle",710365284),new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"rand","rand",908504774),new cljs.core.Keyword(null,"mod","mod",-130487320),new cljs.core.Keyword(null,"pow","pow",-1444004567),new cljs.core.Keyword(null,"weight1","weight1",584068617),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"times","times",1671571467),new cljs.core.Keyword(null,"nth","nth",-111321973),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"walk2","walk2",1167361132),new cljs.core.Keyword(null,"scale-range-sweep","scale-range-sweep",255716877),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"walk1","walk1",-824993744),new cljs.core.Keyword(null,"scale-range","scale-range",-910552944),new cljs.core.Keyword(null,"flatten","flatten",1212802416),new cljs.core.Keyword(null,"grow","grow",-524118895),new cljs.core.Keyword(null,"rand-hold","rand-hold",1221211378),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"weight2","weight2",-1471744749),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"rand-range","rand-range",-1792793772),new cljs.core.Keyword(null,"once","once",-262568523),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"transpose-scale","transpose-scale",-213992459),new cljs.core.Keyword(null,"sin","sin",80907862),new cljs.core.Keyword(null,"rand-exp-range","rand-exp-range",1927268695),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"over","over",192553051),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"mild-shuffle","mild-shuffle",-1737984709),new cljs.core.Keyword(null,"bass-fret","bass-fret",-264582661),new cljs.core.Keyword(null,"rand-int","rand-int",-2135543684),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"take","take",-768884900),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[cljs.looperscript.vector_fns.say,cljs.core.shuffle,cljs.core.repeatedly,cljs.looperscript.vector_fns.get_variable,cljs.looperscript.vector_fns.dethunk,cljs.core.interleave,cljs.looperscript.vector_fns.cos,cljs.looperscript.vector_fns.cycle_STAR_,cljs.looperscript.vector_fns.rand_walk,cljs.looperscript.vector_fns.dethunk,cljs.looperscript.vector_fns.rand_nth_STAR_,cljs.core.mod,cljs.looperscript.vector_fns.pow_STAR_,cljs.looperscript.vector_fns.rand_weighted_either_or,cljs.looperscript.vector_fns.fill_time,cljs.looperscript.vector_fns.time,cljs.looperscript.vector_fns.times,cljs.looperscript.vector_fns.nth_STAR_,cljs.core.repeatedly,cljs.looperscript.vector_fns.rand_walk2,cljs.looperscript.vector_fns.scale_range_sweep,cljs.core.vector,cljs.looperscript.vector_fns.set_rand_seed,cljs.looperscript.vector_fns.rand_walk1,cljs.looperscript.vector_fns.scale_range,cljs.looperscript.vector_fns.flatten_STAR_,cljs.looperscript.vector_fns.grow,cljs.looperscript.vector_fns.rand_hold,cljs.looperscript.vector_fns.cache,cljs.looperscript.vector_fns.rand_weighted_zip,cljs.looperscript.vector_fns.rand_weighted,cljs.looperscript.vector_fns.rand_range,cljs.looperscript.vector_fns.once,cljs.core.count,cljs.looperscript.vector_fns.plus,cljs.looperscript.vector_fns.transpose_scale,cljs.looperscript.vector_fns.sin,cljs.looperscript.vector_fns.rand_exp_range,cljs.looperscript.vector_fns.define_variable,cljs.core.repeat,cljs.looperscript.vector_fns.over_mod,cljs.looperscript.vector_fns.add_dethunk_test,cljs.looperscript.vector_fns.mild_shuffle,cljs.looperscript.vector_fns.bass_fret,cljs.looperscript.vector_fns.rand_int_STAR_,cljs.looperscript.vector_fns.step,cljs.looperscript.vector_fns.take_STAR_,cljs.looperscript.vector_fns.log_STAR_,cljs.looperscript.vector_fns.user,cljs.looperscript.vector_fns.floor,cljs.core.sort,cljs.looperscript.vector_fns.sum,cljs.looperscript.vector_fns.range_STAR_,cljs.looperscript.vector_fns.in$,cljs.looperscript.vector_fns.scale_pattern]);

//# sourceMappingURL=vector_fns.js.map
