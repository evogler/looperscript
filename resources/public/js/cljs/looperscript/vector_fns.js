// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.vector_fns');
goog.require('cljs.core');
goog.require('cljs.looperscript.interp_rhythms');
goog.require('cljs.looperscript.interp_rhythms');
/**
* @param {...*} var_args
*/
cljs.looperscript.vector_fns.log = (function() { 
var log__delegate = function (args){return console.log(cljs.core.apply.call(null,cljs.core.str,args));
};
var log = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__14543){
var args = cljs.core.seq(arglist__14543);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
cljs.looperscript.vector_fns.shuffle_STAR_ = (function shuffle_STAR_(v){return cljs.core.shuffle;
});
cljs.looperscript.vector_fns.range_STAR_ = cljs.core.range;
cljs.looperscript.vector_fns.rand_range = (function rand_range(floor,ceil){return ((cljs.core.rand.call(null) * (ceil - floor)) + floor);
});
cljs.looperscript.vector_fns.rand_int_STAR_ = (function() {
var rand_int_STAR_ = null;
var rand_int_STAR___1 = (function (b){return cljs.core.rand_int.call(null,(b + (1)));
});
var rand_int_STAR___2 = (function (a,b){return (a + cljs.core.rand_int.call(null,((b - a) + (1))));
});
rand_int_STAR_ = function(a,b){
switch(arguments.length){
case 1:
return rand_int_STAR___1.call(this,a);
case 2:
return rand_int_STAR___2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand_int_STAR_.cljs$core$IFn$_invoke$arity$1 = rand_int_STAR___1;
rand_int_STAR_.cljs$core$IFn$_invoke$arity$2 = rand_int_STAR___2;
return rand_int_STAR_;
})()
;
cljs.looperscript.vector_fns.rand_nth_STAR_ = cljs.core.rand_nth;
cljs.looperscript.vector_fns.take_STAR_ = cljs.core.take;
cljs.looperscript.vector_fns.rand_exp_range = (function rand_exp_range(floor,ceil,exp){return ((Math.pow.call(null,cljs.core.rand.call(null),exp) * (ceil - floor)) + floor);
});
cljs.looperscript.vector_fns.handle_v_keyword = (function handle_v_keyword(n,d){return cljs.core.repeat.call(null,n,(d / n));
});
/**
* @param {...*} var_args
*/
cljs.looperscript.vector_fns.rand_weighted = (function() { 
var rand_weighted__delegate = function (v){var vec__14546 = cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.partition.call(null,(2),v));var vs = cljs.core.nth.call(null,vec__14546,(0),null);var ws = cljs.core.nth.call(null,vec__14546,(1),null);var cum_ws = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),ws);var sum = cljs.core.last.call(null,cum_ws);var r = (cljs.core.rand.call(null) * sum);return cljs.core.some.call(null,((function (vec__14546,vs,ws,cum_ws,sum,r){
return (function (p1__14544_SHARP_){if((cljs.core.nth.call(null,cum_ws,p1__14544_SHARP_) < r))
{return cljs.core.nth.call(null,vs,p1__14544_SHARP_);
} else
{return null;
}
});})(vec__14546,vs,ws,cum_ws,sum,r))
,cljs.core.range.call(null,(cljs.core.count.call(null,vs) - (1)),(-1),(-1)));
};
var rand_weighted = function (var_args){
var v = null;if (arguments.length > 0) {
  v = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rand_weighted__delegate.call(this,v);};
rand_weighted.cljs$lang$maxFixedArity = 0;
rand_weighted.cljs$lang$applyTo = (function (arglist__14547){
var v = cljs.core.seq(arglist__14547);
return rand_weighted__delegate(v);
});
rand_weighted.cljs$core$IFn$_invoke$arity$variadic = rand_weighted__delegate;
return rand_weighted;
})()
;
cljs.looperscript.vector_fns.rand_weighted_either_or = (function rand_weighted_either_or(odds,a,b){if((cljs.core.rand.call(null) < odds))
{return a;
} else
{return b;
}
});
cljs.looperscript.vector_fns.rand_weighted_zip = (function rand_weighted_zip(vs,ws){return cljs.looperscript.vector_fns.rand_weighted.call(null,cljs.core.interleave.call(null,vs,ws));
});
cljs.looperscript.vector_fns.rand_hold = (function rand_hold(odds_of_change,options){var current_choice = cljs.core.atom.call(null,((cljs.core.fn_QMARK_.call(null,options))?options.call(null):cljs.core.rand_nth.call(null,options)));return ((function (current_choice){
return (function (){if((odds_of_change < cljs.core.rand.call(null)))
{return cljs.core.deref.call(null,current_choice);
} else
{return cljs.core.reset_BANG_.call(null,current_choice,((cljs.core.fn_QMARK_.call(null,options))?options.call(null):cljs.core.rand_nth.call(null,cljs.core.remove.call(null,((function (current_choice){
return (function (p1__14548_SHARP_){return cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_choice),p1__14548_SHARP_);
});})(current_choice))
,options))));
}
});
;})(current_choice))
});
cljs.looperscript.vector_fns.rand_walk = (function rand_walk(max_step,v){var rand_int_range = (function (a,b){return (a + cljs.core.rand_int.call(null,((b - a) + (1))));
});var max_v = (cljs.core.count.call(null,v) - (1));var pos = cljs.core.atom.call(null,cljs.core.rand_int.call(null,cljs.core.count.call(null,v)));return ((function (rand_int_range,max_v,pos){
return (function (){return cljs.core.nth.call(null,v,cljs.core.reset_BANG_.call(null,pos,rand_int_range.call(null,(function (){var x__3947__auto__ = (0);var y__3948__auto__ = (cljs.core.deref.call(null,pos) - max_step);return ((x__3947__auto__ > y__3948__auto__) ? x__3947__auto__ : y__3948__auto__);
})(),(function (){var x__3954__auto__ = max_v;var y__3955__auto__ = (cljs.core.deref.call(null,pos) + max_step);return ((x__3954__auto__ < y__3955__auto__) ? x__3954__auto__ : y__3955__auto__);
})())));
});
;})(rand_int_range,max_v,pos))
});
cljs.looperscript.vector_fns.rand_walk1 = (function rand_walk1(max_step,v){var rand_int_range = (function (a,b){return (a + cljs.core.rand_int.call(null,((b - a) + (1))));
});var max_v = (cljs.core.count.call(null,v) - (1));var pos = cljs.core.atom.call(null,cljs.core.rand_int.call(null,cljs.core.count.call(null,v)));return ((function (rand_int_range,max_v,pos){
return (function (){return cljs.core.nth.call(null,v,cljs.core.reset_BANG_.call(null,pos,(function (){while(true){
var new_pos = rand_int_range.call(null,(function (){var x__3947__auto__ = (0);var y__3948__auto__ = (cljs.core.deref.call(null,pos) - max_step);return ((x__3947__auto__ > y__3948__auto__) ? x__3947__auto__ : y__3948__auto__);
})(),(function (){var x__3954__auto__ = max_v;var y__3955__auto__ = (cljs.core.deref.call(null,pos) + max_step);return ((x__3954__auto__ < y__3955__auto__) ? x__3954__auto__ : y__3955__auto__);
})());if(cljs.core._EQ_.call(null,new_pos,cljs.core.deref.call(null,pos)))
{{
continue;
}
} else
{return new_pos;
}
break;
}
})()));
});
;})(rand_int_range,max_v,pos))
});
cljs.looperscript.vector_fns.in$ = (function in$(t,v){var factor = (t / cljs.core.reduce.call(null,cljs.core._PLUS_,v));return cljs.core.map.call(null,((function (factor){
return (function (p1__14549_SHARP_){return (factor * p1__14549_SHARP_);
});})(factor))
,v);
});
cljs.looperscript.vector_fns.cycle_STAR_ = (function cycle_STAR_(v){var pos = cljs.core.atom.call(null,(-1));var v_len = cljs.core.count.call(null,v);return ((function (pos,v_len){
return (function (){return cljs.core.nth.call(null,v,cljs.core.swap_BANG_.call(null,pos,((function (pos,v_len){
return (function (p1__14550_SHARP_){return cljs.core.mod.call(null,(p1__14550_SHARP_ + (1)),v_len);
});})(pos,v_len))
));
});
;})(pos,v_len))
});
/**
* @param {...*} var_args
*/
cljs.looperscript.vector_fns.flatten_STAR_ = (function() { 
var flatten_STAR___delegate = function (args){return cljs.core.flatten.call(null,args);
};
var flatten_STAR_ = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return flatten_STAR___delegate.call(this,args);};
flatten_STAR_.cljs$lang$maxFixedArity = 0;
flatten_STAR_.cljs$lang$applyTo = (function (arglist__14551){
var args = cljs.core.seq(arglist__14551);
return flatten_STAR___delegate(args);
});
flatten_STAR_.cljs$core$IFn$_invoke$arity$variadic = flatten_STAR___delegate;
return flatten_STAR_;
})()
;
cljs.looperscript.vector_fns.nth_STAR_ = cljs.core.nth;
cljs.looperscript.vector_fns.scale_nth = (function scale_nth(scale,degree){return (((12) * Math.floor.call(null,(degree / cljs.core.count.call(null,scale)))) + cljs.core.nth.call(null,scale,cljs.core.mod.call(null,degree,cljs.core.count.call(null,scale))));
});
cljs.looperscript.vector_fns.scale_pattern = (function scale_pattern(scale,pattern,degrees){var iter__4379__auto__ = (function iter__14558(s__14559){return (new cljs.core.LazySeq(null,(function (){var s__14559__$1 = s__14559;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14559__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var d = cljs.core.first.call(null,xs__4624__auto__);var iterys__4375__auto__ = ((function (s__14559__$1,d,xs__4624__auto__,temp__4126__auto__){
return (function iter__14560(s__14561){return (new cljs.core.LazySeq(null,((function (s__14559__$1,d,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__14561__$1 = s__14561;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14561__$1);if(temp__4126__auto____$1)
{var s__14561__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14561__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__14561__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__14563 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__14562 = (0);while(true){
if((i__14562 < size__4378__auto__))
{var p = cljs.core._nth.call(null,c__4377__auto__,i__14562);cljs.core.chunk_append.call(null,b__14563,cljs.looperscript.vector_fns.scale_nth.call(null,scale,(d + p)));
{
var G__14564 = (i__14562 + (1));
i__14562 = G__14564;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14563),iter__14560.call(null,cljs.core.chunk_rest.call(null,s__14561__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14563),null);
}
} else
{var p = cljs.core.first.call(null,s__14561__$2);return cljs.core.cons.call(null,cljs.looperscript.vector_fns.scale_nth.call(null,scale,(d + p)),iter__14560.call(null,cljs.core.rest.call(null,s__14561__$2)));
}
} else
{return null;
}
break;
}
});})(s__14559__$1,d,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__14559__$1,d,xs__4624__auto__,temp__4126__auto__))
;var fs__4376__auto__ = cljs.core.seq.call(null,iterys__4375__auto__.call(null,pattern));if(fs__4376__auto__)
{return cljs.core.concat.call(null,fs__4376__auto__,iter__14558.call(null,cljs.core.rest.call(null,s__14559__$1)));
} else
{{
var G__14565 = cljs.core.rest.call(null,s__14559__$1);
s__14559__$1 = G__14565;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,degrees);
});
cljs.looperscript.vector_fns.transpose_scale = (function transpose_scale(degree,scale){return cljs.core.sort.call(null,cljs.core.map.call(null,(function (p1__14566_SHARP_){return cljs.core.mod.call(null,(p1__14566_SHARP_ + degree),(12));
}),scale));
});
cljs.looperscript.vector_fns.scale_range = (function scale_range(floor,ceil,scale){var a = (((floor / (12)) | (0)) - (1));var b = (((ceil / (12)) + (1)) + (1));return cljs.core.filter.call(null,((function (a,b){
return (function (p1__14567_SHARP_){return ((floor <= p1__14567_SHARP_)) && ((p1__14567_SHARP_ <= ceil));
});})(a,b))
,(function (){var iter__4379__auto__ = ((function (a,b){
return (function iter__14574(s__14575){return (new cljs.core.LazySeq(null,((function (a,b){
return (function (){var s__14575__$1 = s__14575;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14575__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var o = cljs.core.first.call(null,xs__4624__auto__);var iterys__4375__auto__ = ((function (s__14575__$1,o,xs__4624__auto__,temp__4126__auto__,a,b){
return (function iter__14576(s__14577){return (new cljs.core.LazySeq(null,((function (s__14575__$1,o,xs__4624__auto__,temp__4126__auto__,a,b){
return (function (){var s__14577__$1 = s__14577;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14577__$1);if(temp__4126__auto____$1)
{var s__14577__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14577__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__14577__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__14579 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__14578 = (0);while(true){
if((i__14578 < size__4378__auto__))
{var s = cljs.core._nth.call(null,c__4377__auto__,i__14578);cljs.core.chunk_append.call(null,b__14579,(((12) * o) + s));
{
var G__14580 = (i__14578 + (1));
i__14578 = G__14580;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14579),iter__14576.call(null,cljs.core.chunk_rest.call(null,s__14577__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14579),null);
}
} else
{var s = cljs.core.first.call(null,s__14577__$2);return cljs.core.cons.call(null,(((12) * o) + s),iter__14576.call(null,cljs.core.rest.call(null,s__14577__$2)));
}
} else
{return null;
}
break;
}
});})(s__14575__$1,o,xs__4624__auto__,temp__4126__auto__,a,b))
,null,null));
});})(s__14575__$1,o,xs__4624__auto__,temp__4126__auto__,a,b))
;var fs__4376__auto__ = cljs.core.seq.call(null,iterys__4375__auto__.call(null,scale));if(fs__4376__auto__)
{return cljs.core.concat.call(null,fs__4376__auto__,iter__14574.call(null,cljs.core.rest.call(null,s__14575__$1)));
} else
{{
var G__14581 = cljs.core.rest.call(null,s__14575__$1);
s__14575__$1 = G__14581;
continue;
}
}
} else
{return null;
}
break;
}
});})(a,b))
,null,null));
});})(a,b))
;return iter__4379__auto__.call(null,cljs.core.range.call(null,a,b));
})());
});
cljs.looperscript.vector_fns.scale_range_sweep = (function scale_range_sweep(floor,ceil,scale){var sr = cljs.core.vec.call(null,cljs.looperscript.vector_fns.scale_range.call(null,floor,ceil,scale));return cljs.core.into.call(null,sr,cljs.core.drop_last.call(null,cljs.core.rest.call(null,cljs.core.reverse.call(null,sr))));
});
cljs.looperscript.vector_fns.mild_shuffle = (function mild_shuffle(degree,col){return cljs.core.map.call(null,cljs.core.second,cljs.core.sort.call(null,cljs.core.map_indexed.call(null,(function (idx,n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(idx + cljs.core.rand_int.call(null,(degree - (1)))),n], null);
}),col)));
});
cljs.looperscript.vector_fns.log_STAR_ = (function log_STAR_(v){cljs.looperscript.vector_fns.log.call(null,v);
return v;
});
cljs.looperscript.vector_fns.memo_STAR_ = (function memo_STAR_(id,f){var memo_fn = (function (cnt){return f.call(null);
});var counts = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return null;
});
cljs.looperscript.vector_fns.bass_fret = (function bass_fret(string,fret){return (((-17) + fret) + ((-5) * (string - (1))));
});
cljs.looperscript.vector_fns.user_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.vector_fns.set_user_var = (function set_user_var(k,v){return cljs.core.swap_BANG_.call(null,cljs.looperscript.vector_fns.user_vars,cljs.core.assoc,k,v);
});
cljs.looperscript.vector_fns.user = (function user(k,default$){return (function (){return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.looperscript.vector_fns.user_vars),k,default$);
});
});
cljs.looperscript.vector_fns.test_mod = (function test_mod(n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifier-fn","modifier-fn",-1624543303),(function (x){return (x * n);
})], null);
});
/**
* @param {...*} var_args
*/
cljs.looperscript.vector_fns.over_mod = (function() { 
var over_mod__delegate = function (layers){cljs.looperscript.vector_fns.log.call(null,new cljs.core.Keyword(null,"over-mod","over-mod",-523435366),layers);
var last_res = cljs.core.atom.call(null,(0));var cum_time_in = cljs.core.atom.call(null,(0));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifier-fn","modifier-fn",-1624543303),((function (last_res,cum_time_in){
return (function (time_in){var new_res = cljs.looperscript.interp_rhythms.rhythms_interp.call(null,layers,cljs.core.swap_BANG_.call(null,cum_time_in,cljs.core._PLUS_,time_in));var res_diff = (new_res - cljs.core.deref.call(null,last_res));cljs.core.reset_BANG_.call(null,last_res,new_res);
return res_diff;
});})(last_res,cum_time_in))
], null);
};
var over_mod = function (var_args){
var layers = null;if (arguments.length > 0) {
  layers = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return over_mod__delegate.call(this,layers);};
over_mod.cljs$lang$maxFixedArity = 0;
over_mod.cljs$lang$applyTo = (function (arglist__14582){
var layers = cljs.core.seq(arglist__14582);
return over_mod__delegate(layers);
});
over_mod.cljs$core$IFn$_invoke$arity$variadic = over_mod__delegate;
return over_mod;
})()
;
cljs.looperscript.vector_fns.insert_randomly = (function insert_randomly(v,x){var pos = cljs.core.rand_int.call(null,(cljs.core.count.call(null,v) + (1)));return cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,pos,v)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)),cljs.core.drop.call(null,pos,v));
});
cljs.looperscript.vector_fns.grow = (function grow(odds,new_note_fn){var accum = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);return ((function (accum){
return (function (){if((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,accum))) || ((cljs.core.rand.call(null) < odds)))
{return cljs.core.swap_BANG_.call(null,accum,cljs.looperscript.vector_fns.insert_randomly,new_note_fn.call(null));
} else
{return cljs.core.deref.call(null,accum);
}
});
;})(accum))
});
/**
* @param {...*} var_args
*/
cljs.looperscript.vector_fns.add_dethunk_test = (function() { 
var add_dethunk_test__delegate = function (args){var dethunk = (function dethunk(x){if(cljs.core.fn_QMARK_.call(null,x))
{return dethunk.call(null,x.call(null));
} else
{return x;
}
});return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,dethunk,args));
};
var add_dethunk_test = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return add_dethunk_test__delegate.call(this,args);};
add_dethunk_test.cljs$lang$maxFixedArity = 0;
add_dethunk_test.cljs$lang$applyTo = (function (arglist__14583){
var args = cljs.core.seq(arglist__14583);
return add_dethunk_test__delegate(args);
});
add_dethunk_test.cljs$core$IFn$_invoke$arity$variadic = add_dethunk_test__delegate;
return add_dethunk_test;
})()
;
cljs.looperscript.vector_fns.variable_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.vector_fns.reset_variables_BANG_ = (function reset_variables_BANG_(){return cljs.core.reset_BANG_.call(null,cljs.looperscript.vector_fns.variable_map,cljs.core.PersistentArrayMap.EMPTY);
});
cljs.looperscript.vector_fns.define_variable = (function define_variable(s,x){cljs.core.swap_BANG_.call(null,cljs.looperscript.vector_fns.variable_map,cljs.core.assoc,s,x);
return null;
});
cljs.looperscript.vector_fns.get_variable = (function get_variable(s){return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.looperscript.vector_fns.variable_map),s);
});
cljs.looperscript.vector_fns.vec_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shuffle","shuffle",1261412160),new cljs.core.Keyword(null,"repeatedly","repeatedly",-440567070),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"interleave","interleave",-1475043421),new cljs.core.Keyword(null,"cycle","cycle",710365284),new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.Keyword(null,"rand","rand",908504774),new cljs.core.Keyword(null,"weight1","weight1",584068617),new cljs.core.Keyword(null,"nth","nth",-111321973),new cljs.core.Keyword(null,"scale-range-sweep","scale-range-sweep",255716877),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"walk1","walk1",-824993744),new cljs.core.Keyword(null,"scale-range","scale-range",-910552944),new cljs.core.Keyword(null,"flatten","flatten",1212802416),new cljs.core.Keyword(null,"grow","grow",-524118895),new cljs.core.Keyword(null,"rand-hold","rand-hold",1221211378),new cljs.core.Keyword(null,"weight2","weight2",-1471744749),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"rand-range","rand-range",-1792793772),new cljs.core.Keyword(null,"transpose-scale","transpose-scale",-213992459),new cljs.core.Keyword(null,"rand-exp-range","rand-exp-range",1927268695),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"over","over",192553051),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"mild-shuffle","mild-shuffle",-1737984709),new cljs.core.Keyword(null,"bass-fret","bass-fret",-264582661),new cljs.core.Keyword(null,"rand-int","rand-int",-2135543684),new cljs.core.Keyword(null,"take","take",-768884900),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[cljs.core.shuffle,cljs.core.repeatedly,cljs.looperscript.vector_fns.get_variable,cljs.core.interleave,cljs.looperscript.vector_fns.cycle_STAR_,cljs.looperscript.vector_fns.rand_walk,cljs.looperscript.vector_fns.rand_nth_STAR_,cljs.looperscript.vector_fns.rand_weighted_either_or,cljs.looperscript.vector_fns.nth_STAR_,cljs.looperscript.vector_fns.scale_range_sweep,cljs.core.vector,cljs.looperscript.vector_fns.rand_walk1,cljs.looperscript.vector_fns.scale_range,cljs.looperscript.vector_fns.flatten_STAR_,cljs.looperscript.vector_fns.grow,cljs.looperscript.vector_fns.rand_hold,cljs.looperscript.vector_fns.rand_weighted_zip,cljs.looperscript.vector_fns.rand_weighted,cljs.looperscript.vector_fns.rand_range,cljs.looperscript.vector_fns.transpose_scale,cljs.looperscript.vector_fns.rand_exp_range,cljs.looperscript.vector_fns.define_variable,cljs.core.repeat,cljs.looperscript.vector_fns.over_mod,cljs.looperscript.vector_fns.add_dethunk_test,cljs.looperscript.vector_fns.mild_shuffle,cljs.looperscript.vector_fns.bass_fret,cljs.looperscript.vector_fns.rand_int_STAR_,cljs.looperscript.vector_fns.take_STAR_,cljs.looperscript.vector_fns.log_STAR_,cljs.looperscript.vector_fns.user,cljs.core.sort,cljs.looperscript.vector_fns.range_STAR_,cljs.looperscript.vector_fns.in$,cljs.looperscript.vector_fns.scale_pattern]);
