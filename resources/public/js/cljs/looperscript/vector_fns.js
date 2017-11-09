// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.vector_fns');
goog.require('cljs.core');
goog.require('cljs.looperscript.interp_rhythms');
goog.require('cljs.looperscript.start_time');
cljs.looperscript.vector_fns.log = (function cljs$looperscript$vector_fns$log(var_args){
var args__29112__auto__ = [];
var len__29105__auto___30037 = arguments.length;
var i__29106__auto___30038 = (0);
while(true){
if((i__29106__auto___30038 < len__29105__auto___30037)){
args__29112__auto__.push((arguments[i__29106__auto___30038]));

var G__30039 = (i__29106__auto___30038 + (1));
i__29106__auto___30038 = G__30039;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.log.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

cljs.looperscript.vector_fns.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(cljs.core.apply.call(null,cljs.core.str,args));
});

cljs.looperscript.vector_fns.log.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.log.cljs$lang$applyTo = (function (seq30036){
return cljs.looperscript.vector_fns.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30036));
});

cljs.looperscript.vector_fns.shuffle_STAR_ = (function cljs$looperscript$vector_fns$shuffle_STAR_(v){
return cljs.core.shuffle;
});
cljs.looperscript.vector_fns.range_STAR_ = (function cljs$looperscript$vector_fns$range_STAR_(var_args){
var G__30041 = arguments.length;
switch (G__30041) {
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
var G__30044 = arguments.length;
switch (G__30044) {
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
var args__29112__auto__ = [];
var len__29105__auto___30051 = arguments.length;
var i__29106__auto___30052 = (0);
while(true){
if((i__29106__auto___30052 < len__29105__auto___30051)){
args__29112__auto__.push((arguments[i__29106__auto___30052]));

var G__30053 = (i__29106__auto___30052 + (1));
i__29106__auto___30052 = G__30053;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.rand_weighted.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

cljs.looperscript.vector_fns.rand_weighted.cljs$core$IFn$_invoke$arity$variadic = (function (v){
var vec__30048 = cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.partition.call(null,(2),v));
var vs = cljs.core.nth.call(null,vec__30048,(0),null);
var ws = cljs.core.nth.call(null,vec__30048,(1),null);
var cum_ws = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),ws);
var sum = cljs.core.last.call(null,cum_ws);
var r = (cljs.core.rand.call(null) * sum);
return cljs.core.some.call(null,((function (vec__30048,vs,ws,cum_ws,sum,r){
return (function (p1__30046_SHARP_){
if((cljs.core.nth.call(null,cum_ws,p1__30046_SHARP_) < r)){
return cljs.core.nth.call(null,vs,p1__30046_SHARP_);
} else {
return null;
}
});})(vec__30048,vs,ws,cum_ws,sum,r))
,cljs.core.range.call(null,(cljs.core.count.call(null,vs) - (1)),(-1),(-1)));
});

cljs.looperscript.vector_fns.rand_weighted.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.rand_weighted.cljs$lang$applyTo = (function (seq30047){
return cljs.looperscript.vector_fns.rand_weighted.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30047));
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
return (function (p1__30054_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_choice),p1__30054_SHARP_);
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
return cljs.core.nth.call(null,v,cljs.core.reset_BANG_.call(null,pos,rand_int_range.call(null,(function (){var x__28286__auto__ = (0);
var y__28287__auto__ = (cljs.core.deref.call(null,pos) - max_step);
return ((x__28286__auto__ > y__28287__auto__) ? x__28286__auto__ : y__28287__auto__);
})(),(function (){var x__28293__auto__ = max_v;
var y__28294__auto__ = (cljs.core.deref.call(null,pos) + max_step);
return ((x__28293__auto__ < y__28294__auto__) ? x__28293__auto__ : y__28294__auto__);
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
var new_pos = rand_int_range.call(null,(function (){var x__28286__auto__ = (0);
var y__28287__auto__ = (cljs.core.deref.call(null,pos) - max_step);
return ((x__28286__auto__ > y__28287__auto__) ? x__28286__auto__ : y__28287__auto__);
})(),(function (){var x__28293__auto__ = max_v;
var y__28294__auto__ = (cljs.core.deref.call(null,pos) + max_step);
return ((x__28293__auto__ < y__28294__auto__) ? x__28293__auto__ : y__28294__auto__);
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
return (function (p1__30056_SHARP_){
return (((0) <= p1__30056_SHARP_)) && ((p1__30056_SHARP_ <= max_v));
});})(max_v,pos))
,cljs.core.map.call(null,((function (max_v,pos){
return (function (p1__30055_SHARP_){
return (p1__30055_SHARP_ + cljs.core.deref.call(null,pos));
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
return (function (p1__30057_SHARP_){
return (factor * p1__30057_SHARP_);
});})(v__$1,factor))
,v__$1);
});
cljs.looperscript.vector_fns.cycle_STAR_ = (function cljs$looperscript$vector_fns$cycle_STAR_(v){
var pos = cljs.core.atom.call(null,(-1));
var v_len = cljs.core.count.call(null,v);
return ((function (pos,v_len){
return (function (){
return cljs.core.nth.call(null,v,cljs.core.swap_BANG_.call(null,pos,((function (pos,v_len){
return (function (p1__30058_SHARP_){
return cljs.core.mod.call(null,(p1__30058_SHARP_ + (1)),v_len);
});})(pos,v_len))
));
});
;})(pos,v_len))
});
cljs.looperscript.vector_fns.fill_time = (function cljs$looperscript$vector_fns$fill_time(t,v){
var previous_total = cljs.core.atom.call(null,null);
var total = cljs.core.atom.call(null,(0));
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.take_while.call(null,((function (previous_total,total){
return (function (p1__30059_SHARP_){
cljs.core.reset_BANG_.call(null,previous_total,cljs.core.deref.call(null,total));

return (cljs.core.swap_BANG_.call(null,total,cljs.core._PLUS_,p1__30059_SHARP_) < t);
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
var args__29112__auto__ = [];
var len__29105__auto___30061 = arguments.length;
var i__29106__auto___30062 = (0);
while(true){
if((i__29106__auto___30062 < len__29105__auto___30061)){
args__29112__auto__.push((arguments[i__29106__auto___30062]));

var G__30063 = (i__29106__auto___30062 + (1));
i__29106__auto___30062 = G__30063;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.flatten_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

cljs.looperscript.vector_fns.flatten_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.flatten.call(null,args);
});

cljs.looperscript.vector_fns.flatten_STAR_.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.flatten_STAR_.cljs$lang$applyTo = (function (seq30060){
return cljs.looperscript.vector_fns.flatten_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30060));
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
var iter__28744__auto__ = (function cljs$looperscript$vector_fns$scale_pattern_$_iter__30064(s__30065){
return (new cljs.core.LazySeq(null,(function (){
var s__30065__$1 = s__30065;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30065__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var d = cljs.core.first.call(null,xs__5205__auto__);
var iterys__28740__auto__ = ((function (s__30065__$1,d,xs__5205__auto__,temp__4657__auto__){
return (function cljs$looperscript$vector_fns$scale_pattern_$_iter__30064_$_iter__30066(s__30067){
return (new cljs.core.LazySeq(null,((function (s__30065__$1,d,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__30067__$1 = s__30067;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__30067__$1);
if(temp__4657__auto____$1){
var s__30067__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30067__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__30067__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__30069 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__30068 = (0);
while(true){
if((i__30068 < size__28743__auto__)){
var p = cljs.core._nth.call(null,c__28742__auto__,i__30068);
cljs.core.chunk_append.call(null,b__30069,cljs.looperscript.vector_fns.scale_nth.call(null,scale,(d + p)));

var G__30070 = (i__30068 + (1));
i__30068 = G__30070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30069),cljs$looperscript$vector_fns$scale_pattern_$_iter__30064_$_iter__30066.call(null,cljs.core.chunk_rest.call(null,s__30067__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30069),null);
}
} else {
var p = cljs.core.first.call(null,s__30067__$2);
return cljs.core.cons.call(null,cljs.looperscript.vector_fns.scale_nth.call(null,scale,(d + p)),cljs$looperscript$vector_fns$scale_pattern_$_iter__30064_$_iter__30066.call(null,cljs.core.rest.call(null,s__30067__$2)));
}
} else {
return null;
}
break;
}
});})(s__30065__$1,d,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__30065__$1,d,xs__5205__auto__,temp__4657__auto__))
;
var fs__28741__auto__ = cljs.core.seq.call(null,iterys__28740__auto__.call(null,pattern));
if(fs__28741__auto__){
return cljs.core.concat.call(null,fs__28741__auto__,cljs$looperscript$vector_fns$scale_pattern_$_iter__30064.call(null,cljs.core.rest.call(null,s__30065__$1)));
} else {
var G__30071 = cljs.core.rest.call(null,s__30065__$1);
s__30065__$1 = G__30071;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28744__auto__.call(null,degrees);
});
cljs.looperscript.vector_fns.transpose_scale = (function cljs$looperscript$vector_fns$transpose_scale(degree,scale){
return cljs.core.sort.call(null,cljs.core.map.call(null,(function (p1__30072_SHARP_){
return cljs.core.mod.call(null,(p1__30072_SHARP_ + degree),(12));
}),scale));
});
cljs.looperscript.vector_fns.scale_range = (function cljs$looperscript$vector_fns$scale_range(floor,ceil,scale){
var a = (((floor / (12)) | (0)) - (1));
var b = (((ceil / (12)) + (1)) + (1));
return cljs.core.filter.call(null,((function (a,b){
return (function (p1__30073_SHARP_){
return ((floor <= p1__30073_SHARP_)) && ((p1__30073_SHARP_ <= ceil));
});})(a,b))
,(function (){var iter__28744__auto__ = ((function (a,b){
return (function cljs$looperscript$vector_fns$scale_range_$_iter__30074(s__30075){
return (new cljs.core.LazySeq(null,((function (a,b){
return (function (){
var s__30075__$1 = s__30075;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30075__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var o = cljs.core.first.call(null,xs__5205__auto__);
var iterys__28740__auto__ = ((function (s__30075__$1,o,xs__5205__auto__,temp__4657__auto__,a,b){
return (function cljs$looperscript$vector_fns$scale_range_$_iter__30074_$_iter__30076(s__30077){
return (new cljs.core.LazySeq(null,((function (s__30075__$1,o,xs__5205__auto__,temp__4657__auto__,a,b){
return (function (){
var s__30077__$1 = s__30077;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__30077__$1);
if(temp__4657__auto____$1){
var s__30077__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30077__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__30077__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__30079 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__30078 = (0);
while(true){
if((i__30078 < size__28743__auto__)){
var s = cljs.core._nth.call(null,c__28742__auto__,i__30078);
cljs.core.chunk_append.call(null,b__30079,(((12) * o) + s));

var G__30080 = (i__30078 + (1));
i__30078 = G__30080;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30079),cljs$looperscript$vector_fns$scale_range_$_iter__30074_$_iter__30076.call(null,cljs.core.chunk_rest.call(null,s__30077__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30079),null);
}
} else {
var s = cljs.core.first.call(null,s__30077__$2);
return cljs.core.cons.call(null,(((12) * o) + s),cljs$looperscript$vector_fns$scale_range_$_iter__30074_$_iter__30076.call(null,cljs.core.rest.call(null,s__30077__$2)));
}
} else {
return null;
}
break;
}
});})(s__30075__$1,o,xs__5205__auto__,temp__4657__auto__,a,b))
,null,null));
});})(s__30075__$1,o,xs__5205__auto__,temp__4657__auto__,a,b))
;
var fs__28741__auto__ = cljs.core.seq.call(null,iterys__28740__auto__.call(null,scale));
if(fs__28741__auto__){
return cljs.core.concat.call(null,fs__28741__auto__,cljs$looperscript$vector_fns$scale_range_$_iter__30074.call(null,cljs.core.rest.call(null,s__30075__$1)));
} else {
var G__30081 = cljs.core.rest.call(null,s__30075__$1);
s__30075__$1 = G__30081;
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
return iter__28744__auto__.call(null,cljs.core.range.call(null,a,b));
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
var args__29112__auto__ = [];
var len__29105__auto___30083 = arguments.length;
var i__29106__auto___30084 = (0);
while(true){
if((i__29106__auto___30084 < len__29105__auto___30083)){
args__29112__auto__.push((arguments[i__29106__auto___30084]));

var G__30085 = (i__29106__auto___30084 + (1));
i__29106__auto___30084 = G__30085;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.log_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

cljs.looperscript.vector_fns.log_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.apply.call(null,cljs.looperscript.vector_fns.log,args);

return cljs.core.last.call(null,args);
});

cljs.looperscript.vector_fns.log_STAR_.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.log_STAR_.cljs$lang$applyTo = (function (seq30082){
return cljs.looperscript.vector_fns.log_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30082));
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
var args__29112__auto__ = [];
var len__29105__auto___30087 = arguments.length;
var i__29106__auto___30088 = (0);
while(true){
if((i__29106__auto___30088 < len__29105__auto___30087)){
args__29112__auto__.push((arguments[i__29106__auto___30088]));

var G__30089 = (i__29106__auto___30088 + (1));
i__29106__auto___30088 = G__30089;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.over_mod.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
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

cljs.looperscript.vector_fns.over_mod.cljs$lang$applyTo = (function (seq30086){
return cljs.looperscript.vector_fns.over_mod.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30086));
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
var args__29112__auto__ = [];
var len__29105__auto___30091 = arguments.length;
var i__29106__auto___30092 = (0);
while(true){
if((i__29106__auto___30092 < len__29105__auto___30091)){
args__29112__auto__.push((arguments[i__29106__auto___30092]));

var G__30093 = (i__29106__auto___30092 + (1));
i__29106__auto___30092 = G__30093;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.add_dethunk_test.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
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

cljs.looperscript.vector_fns.add_dethunk_test.cljs$lang$applyTo = (function (seq30090){
return cljs.looperscript.vector_fns.add_dethunk_test.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30090));
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
var args__29112__auto__ = [];
var len__29105__auto___30095 = arguments.length;
var i__29106__auto___30096 = (0);
while(true){
if((i__29106__auto___30096 < len__29105__auto___30095)){
args__29112__auto__.push((arguments[i__29106__auto___30096]));

var G__30097 = (i__29106__auto___30096 + (1));
i__29106__auto___30096 = G__30097;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.set_rand_seed.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
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

cljs.looperscript.vector_fns.set_rand_seed.cljs$lang$applyTo = (function (seq30094){
return cljs.looperscript.vector_fns.set_rand_seed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30094));
});

cljs.looperscript.vector_fns.plus = (function cljs$looperscript$vector_fns$plus(var_args){
var args__29112__auto__ = [];
var len__29105__auto___30099 = arguments.length;
var i__29106__auto___30100 = (0);
while(true){
if((i__29106__auto___30100 < len__29105__auto___30099)){
args__29112__auto__.push((arguments[i__29106__auto___30100]));

var G__30101 = (i__29106__auto___30100 + (1));
i__29106__auto___30100 = G__30101;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.plus.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

cljs.looperscript.vector_fns.plus.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._PLUS_,args);
});

cljs.looperscript.vector_fns.plus.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.plus.cljs$lang$applyTo = (function (seq30098){
return cljs.looperscript.vector_fns.plus.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30098));
});

cljs.looperscript.vector_fns.sum = (function cljs$looperscript$vector_fns$sum(var_args){
var args__29112__auto__ = [];
var len__29105__auto___30103 = arguments.length;
var i__29106__auto___30104 = (0);
while(true){
if((i__29106__auto___30104 < len__29105__auto___30103)){
args__29112__auto__.push((arguments[i__29106__auto___30104]));

var G__30105 = (i__29106__auto___30104 + (1));
i__29106__auto___30104 = G__30105;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.sum.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

cljs.looperscript.vector_fns.sum.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.flatten.call(null,args));
});

cljs.looperscript.vector_fns.sum.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.sum.cljs$lang$applyTo = (function (seq30102){
return cljs.looperscript.vector_fns.sum.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30102));
});

cljs.looperscript.vector_fns.times = (function cljs$looperscript$vector_fns$times(var_args){
var args__29112__auto__ = [];
var len__29105__auto___30107 = arguments.length;
var i__29106__auto___30108 = (0);
while(true){
if((i__29106__auto___30108 < len__29105__auto___30107)){
args__29112__auto__.push((arguments[i__29106__auto___30108]));

var G__30109 = (i__29106__auto___30108 + (1));
i__29106__auto___30108 = G__30109;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.vector_fns.times.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

cljs.looperscript.vector_fns.times.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._STAR_,args);
});

cljs.looperscript.vector_fns.times.cljs$lang$maxFixedArity = (0);

cljs.looperscript.vector_fns.times.cljs$lang$applyTo = (function (seq30106){
return cljs.looperscript.vector_fns.times.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30106));
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
cljs.looperscript.vector_fns.vec_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"say","say",504378016),new cljs.core.Keyword(null,"shuffle","shuffle",1261412160),new cljs.core.Keyword(null,"repeatedly","repeatedly",-440567070),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"dethunk","dethunk",-54386077),new cljs.core.Keyword(null,"interleave","interleave",-1475043421),new cljs.core.Keyword(null,"cos","cos",1201758276),new cljs.core.Keyword(null,"cycle","cycle",710365284),new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"rand","rand",908504774),new cljs.core.Keyword(null,"asdf","asdf",912885320),new cljs.core.Keyword(null,"mod","mod",-130487320),new cljs.core.Keyword(null,"pow","pow",-1444004567),new cljs.core.Keyword(null,"weight1","weight1",584068617),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"times","times",1671571467),new cljs.core.Keyword(null,"nth","nth",-111321973),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"walk2","walk2",1167361132),new cljs.core.Keyword(null,"scale-range-sweep","scale-range-sweep",255716877),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"walk1","walk1",-824993744),new cljs.core.Keyword(null,"scale-range","scale-range",-910552944),new cljs.core.Keyword(null,"flatten","flatten",1212802416),new cljs.core.Keyword(null,"grow","grow",-524118895),new cljs.core.Keyword(null,"rand-hold","rand-hold",1221211378),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"weight2","weight2",-1471744749),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"rand-range","rand-range",-1792793772),new cljs.core.Keyword(null,"once","once",-262568523),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"transpose-scale","transpose-scale",-213992459),new cljs.core.Keyword(null,"sin","sin",80907862),new cljs.core.Keyword(null,"rand-exp-range","rand-exp-range",1927268695),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"over","over",192553051),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"mild-shuffle","mild-shuffle",-1737984709),new cljs.core.Keyword(null,"bass-fret","bass-fret",-264582661),new cljs.core.Keyword(null,"rand-int","rand-int",-2135543684),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"take","take",-768884900),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[cljs.looperscript.vector_fns.say,cljs.core.shuffle,cljs.core.repeatedly,cljs.looperscript.vector_fns.get_variable,cljs.looperscript.vector_fns.dethunk,cljs.core.interleave,cljs.looperscript.vector_fns.cos,cljs.looperscript.vector_fns.cycle_STAR_,cljs.looperscript.vector_fns.rand_walk,cljs.looperscript.vector_fns.dethunk,cljs.looperscript.vector_fns.rand_nth_STAR_,cljs.looperscript.vector_fns.rand_nth_STAR_,cljs.core.mod,cljs.looperscript.vector_fns.pow_STAR_,cljs.looperscript.vector_fns.rand_weighted_either_or,cljs.looperscript.vector_fns.fill_time,cljs.looperscript.vector_fns.time_STAR_,cljs.looperscript.vector_fns.times,cljs.looperscript.vector_fns.nth_STAR_,cljs.core.repeatedly,cljs.looperscript.vector_fns.rand_walk2,cljs.looperscript.vector_fns.scale_range_sweep,cljs.core.vector,cljs.looperscript.vector_fns.set_rand_seed,cljs.looperscript.vector_fns.rand_walk1,cljs.looperscript.vector_fns.scale_range,cljs.looperscript.vector_fns.flatten_STAR_,cljs.looperscript.vector_fns.grow,cljs.looperscript.vector_fns.rand_hold,cljs.looperscript.vector_fns.cache,cljs.looperscript.vector_fns.rand_weighted_zip,cljs.looperscript.vector_fns.rand_weighted,cljs.looperscript.vector_fns.rand_range,cljs.looperscript.vector_fns.once,cljs.core.count,cljs.looperscript.vector_fns.plus,cljs.looperscript.vector_fns.transpose_scale,cljs.looperscript.vector_fns.sin,cljs.looperscript.vector_fns.rand_exp_range,cljs.looperscript.vector_fns.define_variable,cljs.core.repeat,cljs.looperscript.vector_fns.over_mod,cljs.looperscript.vector_fns.add_dethunk_test,cljs.looperscript.vector_fns.mild_shuffle,cljs.looperscript.vector_fns.bass_fret,cljs.looperscript.vector_fns.rand_int_STAR_,cljs.looperscript.vector_fns.step,cljs.looperscript.vector_fns.take_STAR_,cljs.looperscript.vector_fns.log_STAR_,cljs.looperscript.vector_fns.user,cljs.looperscript.vector_fns.floor,cljs.core.sort,cljs.looperscript.vector_fns.sum,cljs.looperscript.vector_fns.range_STAR_,cljs.looperscript.vector_fns.in$,cljs.looperscript.vector_fns.scale_pattern]);

//# sourceMappingURL=vector_fns.js.map?rel=1509844998528
