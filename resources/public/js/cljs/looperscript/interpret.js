// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.interpret');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.looperscript.interp_rhythms');
goog.require('cljs.looperscript.interp_rhythms');
goog.require('instaparse.core');
goog.require('instaparse.core');
goog.require('cljs.reader');
/**
* @param {...*} var_args
*/
cljs.looperscript.interpret.log = (function() { 
var log__delegate = function (args){return console.log(cljs.core.apply.call(null,cljs.core.str,args));
};
var log = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__6168){
var args = cljs.core.seq(arglist__6168);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
cljs.looperscript.interpret.remove_comments = (function remove_comments(s){return clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__6169_SHARP_){return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/^([^;]+)/,p1__6169_SHARP_)));
}),clojure.string.split_lines.call(null,s)));
});
cljs.looperscript.interpret.string__GT_number = (function string__GT_number(s){return cljs.reader.read_string.call(null,(function (){var temp__4124__auto__ = cljs.core.re_find.call(null,/-0*(\.[0-9]+)/,s);if(cljs.core.truth_(temp__4124__auto__))
{var n = temp__4124__auto__;return ("-0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,n)));
} else
{var temp__4124__auto____$1 = cljs.core.re_find.call(null,/(^\.[0-9]+)/,s);if(cljs.core.truth_(temp__4124__auto____$1))
{var n = temp__4124__auto____$1;return ("0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,n)));
} else
{var temp__4124__auto____$2 = cljs.core.re_find.call(null,/^0+([0-9][0-9.]+)/,s);if(cljs.core.truth_(temp__4124__auto____$2))
{var n = temp__4124__auto____$2;return cljs.core.last.call(null,n);
} else
{var temp__4124__auto____$3 = cljs.core.re_find.call(null,/^-0+([0-9.]+)/,s);if(cljs.core.truth_(temp__4124__auto____$3))
{var n = temp__4124__auto____$3;return ("-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,n)));
} else
{return s;
}
}
}
}
})());
});
cljs.looperscript.interpret.ratio__GT_note = (function ratio__GT_note(r){return ((Math.log.call(null,r) / Math.log.call(null,(2))) * (12));
});
cljs.looperscript.interpret.splice = (function splice(v){return cljs.core.with_meta.call(null,(function (){var accum = cljs.core.PersistentVector.EMPTY;var rem = v;while(true){
if(cljs.core.empty_QMARK_.call(null,rem))
{return accum;
} else
{var n = cljs.core.first.call(null,rem);if(cljs.core.vector_QMARK_.call(null,n))
{if(cljs.core.truth_(new cljs.core.Keyword(null,"splice","splice",449588165).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,n))))
{{
var G__6170 = cljs.core.into.call(null,accum,splice.call(null,n));
var G__6171 = cljs.core.rest.call(null,rem);
accum = G__6170;
rem = G__6171;
continue;
}
} else
{{
var G__6172 = cljs.core.conj.call(null,accum,splice.call(null,n));
var G__6173 = cljs.core.rest.call(null,rem);
accum = G__6172;
rem = G__6173;
continue;
}
}
} else
{{
var G__6174 = cljs.core.conj.call(null,accum,n);
var G__6175 = cljs.core.rest.call(null,rem);
accum = G__6174;
rem = G__6175;
continue;
}
}
}
break;
}
})(),cljs.core.meta.call(null,v));
});
cljs.looperscript.interpret.mark_for_splice = (function mark_for_splice(col){return cljs.core.with_meta.call(null,cljs.core.vec.call(null,col),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"splice","splice",449588165),true], null));
});
cljs.looperscript.interpret.splice_fn = (function splice_fn(f){return (function (v){return cljs.looperscript.interpret.mark_for_splice.call(null,cljs.core.apply.call(null,f,v));
});
});
cljs.looperscript.interpret.shuffle_STAR_ = (function shuffle_STAR_(v){return cljs.core.shuffle;
});
cljs.looperscript.interpret.range_STAR_ = cljs.core.range;
cljs.looperscript.interpret.rand_range = (function rand_range(floor,ceil){return ((cljs.core.rand.call(null) * (ceil - floor)) + floor);
});
cljs.looperscript.interpret.rand_int_STAR_ = (function() {
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
cljs.looperscript.interpret.rand_nth_STAR_ = cljs.core.rand_nth;
cljs.looperscript.interpret.take_STAR_ = cljs.core.take;
cljs.looperscript.interpret.rand_exp_range = (function rand_exp_range(floor,ceil,exp){return ((Math.pow.call(null,cljs.core.rand.call(null),exp) * (ceil - floor)) + floor);
});
cljs.looperscript.interpret.handle_v_keyword = (function handle_v_keyword(n,d){return cljs.core.repeat.call(null,n,(d / n));
});
/**
* @param {...*} var_args
*/
cljs.looperscript.interpret.rand_weighted = (function() { 
var rand_weighted__delegate = function (v){var vec__6178 = cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.partition.call(null,(2),v));var vs = cljs.core.nth.call(null,vec__6178,(0),null);var ws = cljs.core.nth.call(null,vec__6178,(1),null);var cum_ws = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),ws);var sum = cljs.core.last.call(null,cum_ws);var r = (cljs.core.rand.call(null) * sum);return cljs.core.some.call(null,((function (vec__6178,vs,ws,cum_ws,sum,r){
return (function (p1__6176_SHARP_){if((cljs.core.nth.call(null,cum_ws,p1__6176_SHARP_) < r))
{return cljs.core.nth.call(null,vs,p1__6176_SHARP_);
} else
{return null;
}
});})(vec__6178,vs,ws,cum_ws,sum,r))
,cljs.core.range.call(null,(cljs.core.count.call(null,vs) - (1)),(-1),(-1)));
};
var rand_weighted = function (var_args){
var v = null;if (arguments.length > 0) {
  v = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rand_weighted__delegate.call(this,v);};
rand_weighted.cljs$lang$maxFixedArity = 0;
rand_weighted.cljs$lang$applyTo = (function (arglist__6179){
var v = cljs.core.seq(arglist__6179);
return rand_weighted__delegate(v);
});
rand_weighted.cljs$core$IFn$_invoke$arity$variadic = rand_weighted__delegate;
return rand_weighted;
})()
;
cljs.looperscript.interpret.rand_weighted_zip = (function rand_weighted_zip(vs,ws){return cljs.looperscript.interpret.rand_weighted.call(null,cljs.core.interleave.call(null,vs,ws));
});
cljs.looperscript.interpret.rand_hold = (function rand_hold(odds_of_change,options){var current_choice = cljs.core.atom.call(null,((cljs.core.fn_QMARK_.call(null,options))?options.call(null):cljs.core.rand_nth.call(null,options)));return ((function (current_choice){
return (function (){if((odds_of_change < cljs.core.rand.call(null)))
{return cljs.core.deref.call(null,current_choice);
} else
{return cljs.core.reset_BANG_.call(null,current_choice,((cljs.core.fn_QMARK_.call(null,options))?options.call(null):cljs.core.rand_nth.call(null,cljs.core.remove.call(null,((function (current_choice){
return (function (p1__6180_SHARP_){return cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_choice),p1__6180_SHARP_);
});})(current_choice))
,options))));
}
});
;})(current_choice))
});
cljs.looperscript.interpret.rand_walk = (function rand_walk(max_step,v){var rand_int_range = (function (a,b){return (a + cljs.core.rand_int.call(null,((b - a) + (1))));
});var max_v = (cljs.core.count.call(null,v) - (1));var pos = cljs.core.atom.call(null,cljs.core.rand_int.call(null,cljs.core.count.call(null,v)));return ((function (rand_int_range,max_v,pos){
return (function (){return cljs.core.nth.call(null,v,cljs.core.reset_BANG_.call(null,pos,rand_int_range.call(null,(function (){var x__3947__auto__ = (0);var y__3948__auto__ = (cljs.core.deref.call(null,pos) - max_step);return ((x__3947__auto__ > y__3948__auto__) ? x__3947__auto__ : y__3948__auto__);
})(),(function (){var x__3954__auto__ = max_v;var y__3955__auto__ = (cljs.core.deref.call(null,pos) + max_step);return ((x__3954__auto__ < y__3955__auto__) ? x__3954__auto__ : y__3955__auto__);
})())));
});
;})(rand_int_range,max_v,pos))
});
cljs.looperscript.interpret.in$ = (function in$(t,v){var factor = (t / cljs.core.reduce.call(null,cljs.core._PLUS_,v));return cljs.core.map.call(null,((function (factor){
return (function (p1__6181_SHARP_){return (factor * p1__6181_SHARP_);
});})(factor))
,v);
});
cljs.looperscript.interpret.cycle_STAR_ = (function cycle_STAR_(v){var pos = cljs.core.atom.call(null,(-1));var v_len = cljs.core.count.call(null,v);return ((function (pos,v_len){
return (function (){return cljs.core.nth.call(null,v,cljs.core.swap_BANG_.call(null,pos,((function (pos,v_len){
return (function (p1__6182_SHARP_){return cljs.core.mod.call(null,(p1__6182_SHARP_ + (1)),v_len);
});})(pos,v_len))
));
});
;})(pos,v_len))
});
cljs.looperscript.interpret.nth_STAR_ = cljs.core.nth;
cljs.looperscript.interpret.scale_nth = (function scale_nth(scale,degree){return (((12) * Math.floor.call(null,(degree / cljs.core.count.call(null,scale)))) + cljs.core.nth.call(null,scale,cljs.core.mod.call(null,degree,cljs.core.count.call(null,scale))));
});
cljs.looperscript.interpret.scale_pattern = (function scale_pattern(scale,pattern,degrees){var iter__4379__auto__ = (function iter__6189(s__6190){return (new cljs.core.LazySeq(null,(function (){var s__6190__$1 = s__6190;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6190__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var d = cljs.core.first.call(null,xs__4624__auto__);var iterys__4375__auto__ = ((function (s__6190__$1,d,xs__4624__auto__,temp__4126__auto__){
return (function iter__6191(s__6192){return (new cljs.core.LazySeq(null,((function (s__6190__$1,d,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__6192__$1 = s__6192;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__6192__$1);if(temp__4126__auto____$1)
{var s__6192__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__6192__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__6192__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__6194 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__6193 = (0);while(true){
if((i__6193 < size__4378__auto__))
{var p = cljs.core._nth.call(null,c__4377__auto__,i__6193);cljs.core.chunk_append.call(null,b__6194,cljs.looperscript.interpret.scale_nth.call(null,scale,(d + p)));
{
var G__6195 = (i__6193 + (1));
i__6193 = G__6195;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6194),iter__6191.call(null,cljs.core.chunk_rest.call(null,s__6192__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6194),null);
}
} else
{var p = cljs.core.first.call(null,s__6192__$2);return cljs.core.cons.call(null,cljs.looperscript.interpret.scale_nth.call(null,scale,(d + p)),iter__6191.call(null,cljs.core.rest.call(null,s__6192__$2)));
}
} else
{return null;
}
break;
}
});})(s__6190__$1,d,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__6190__$1,d,xs__4624__auto__,temp__4126__auto__))
;var fs__4376__auto__ = cljs.core.seq.call(null,iterys__4375__auto__.call(null,pattern));if(fs__4376__auto__)
{return cljs.core.concat.call(null,fs__4376__auto__,iter__6189.call(null,cljs.core.rest.call(null,s__6190__$1)));
} else
{{
var G__6196 = cljs.core.rest.call(null,s__6190__$1);
s__6190__$1 = G__6196;
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
cljs.looperscript.interpret.transpose_scale = (function transpose_scale(degree,scale){return cljs.core.sort.call(null,cljs.core.map.call(null,(function (p1__6197_SHARP_){return cljs.core.mod.call(null,(p1__6197_SHARP_ + degree),(12));
}),scale));
});
cljs.looperscript.interpret.scale_range = (function scale_range(floor,ceil,scale){var a = (((floor / (12)) | (0)) - (1));var b = (((ceil / (12)) + (1)) + (1));return cljs.core.filter.call(null,((function (a,b){
return (function (p1__6198_SHARP_){return ((floor <= p1__6198_SHARP_)) && ((p1__6198_SHARP_ <= ceil));
});})(a,b))
,(function (){var iter__4379__auto__ = ((function (a,b){
return (function iter__6205(s__6206){return (new cljs.core.LazySeq(null,((function (a,b){
return (function (){var s__6206__$1 = s__6206;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6206__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var o = cljs.core.first.call(null,xs__4624__auto__);var iterys__4375__auto__ = ((function (s__6206__$1,o,xs__4624__auto__,temp__4126__auto__,a,b){
return (function iter__6207(s__6208){return (new cljs.core.LazySeq(null,((function (s__6206__$1,o,xs__4624__auto__,temp__4126__auto__,a,b){
return (function (){var s__6208__$1 = s__6208;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__6208__$1);if(temp__4126__auto____$1)
{var s__6208__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__6208__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__6208__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__6210 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__6209 = (0);while(true){
if((i__6209 < size__4378__auto__))
{var s = cljs.core._nth.call(null,c__4377__auto__,i__6209);cljs.core.chunk_append.call(null,b__6210,(((12) * o) + s));
{
var G__6211 = (i__6209 + (1));
i__6209 = G__6211;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6210),iter__6207.call(null,cljs.core.chunk_rest.call(null,s__6208__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6210),null);
}
} else
{var s = cljs.core.first.call(null,s__6208__$2);return cljs.core.cons.call(null,(((12) * o) + s),iter__6207.call(null,cljs.core.rest.call(null,s__6208__$2)));
}
} else
{return null;
}
break;
}
});})(s__6206__$1,o,xs__4624__auto__,temp__4126__auto__,a,b))
,null,null));
});})(s__6206__$1,o,xs__4624__auto__,temp__4126__auto__,a,b))
;var fs__4376__auto__ = cljs.core.seq.call(null,iterys__4375__auto__.call(null,scale));if(fs__4376__auto__)
{return cljs.core.concat.call(null,fs__4376__auto__,iter__6205.call(null,cljs.core.rest.call(null,s__6206__$1)));
} else
{{
var G__6212 = cljs.core.rest.call(null,s__6206__$1);
s__6206__$1 = G__6212;
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
cljs.looperscript.interpret.scale_range_sweep = (function scale_range_sweep(floor,ceil,scale){var sr = cljs.core.vec.call(null,cljs.looperscript.interpret.scale_range.call(null,floor,ceil,scale));return cljs.core.into.call(null,sr,cljs.core.drop_last.call(null,cljs.core.rest.call(null,cljs.core.reverse.call(null,sr))));
});
cljs.looperscript.interpret.mild_shuffle = (function mild_shuffle(degree,col){return cljs.core.map.call(null,cljs.core.second,cljs.core.sort.call(null,cljs.core.map_indexed.call(null,(function (idx,n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(idx + cljs.core.rand_int.call(null,(degree - (1)))),n], null);
}),col)));
});
cljs.looperscript.interpret.log_STAR_ = (function log_STAR_(v){cljs.looperscript.interpret.log.call(null,v);
return v;
});
cljs.looperscript.interpret.memo_STAR_ = (function memo_STAR_(id,f){var memo_fn = (function (cnt){return f.call(null);
});var counts = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return null;
});
cljs.looperscript.interpret.bass_fret = (function bass_fret(string,fret){return (((-17) + fret) + ((-5) * (string - (1))));
});
cljs.looperscript.interpret.user_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.interpret.set_user_var = (function set_user_var(k,v){return cljs.core.swap_BANG_.call(null,cljs.looperscript.interpret.user_vars,cljs.core.assoc,k,v);
});
cljs.looperscript.interpret.user = (function user(k,default$){return (function (){return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.looperscript.interpret.user_vars),k,default$);
});
});
cljs.looperscript.interpret.test_mod = (function test_mod(n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifier-fn","modifier-fn",-1624543303),(function (x){return (x * n);
})], null);
});
/**
* @param {...*} var_args
*/
cljs.looperscript.interpret.over_mod = (function() { 
var over_mod__delegate = function (layers){cljs.looperscript.interpret.log.call(null,new cljs.core.Keyword(null,"over-mod","over-mod",-523435366),layers);
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
over_mod.cljs$lang$applyTo = (function (arglist__6213){
var layers = cljs.core.seq(arglist__6213);
return over_mod__delegate(layers);
});
over_mod.cljs$core$IFn$_invoke$arity$variadic = over_mod__delegate;
return over_mod;
})()
;
cljs.looperscript.interpret.insert_randomly = (function insert_randomly(v,x){var pos = cljs.core.rand_int.call(null,(cljs.core.count.call(null,v) + (1)));return cljs.core.into.call(null,cljs.core.into.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,pos,v)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)),cljs.core.drop.call(null,pos,v));
});
cljs.looperscript.interpret.grow = (function grow(odds,new_note_fn){var accum = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);return ((function (accum){
return (function (){if((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,accum))) || ((cljs.core.rand.call(null) < odds)))
{return cljs.core.swap_BANG_.call(null,accum,cljs.looperscript.interpret.insert_randomly,new_note_fn.call(null));
} else
{return cljs.core.deref.call(null,accum);
}
});
;})(accum))
});
/**
* @param {...*} var_args
*/
cljs.looperscript.interpret.add_dethunk_test = (function() { 
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
add_dethunk_test.cljs$lang$applyTo = (function (arglist__6214){
var args = cljs.core.seq(arglist__6214);
return add_dethunk_test__delegate(args);
});
add_dethunk_test.cljs$core$IFn$_invoke$arity$variadic = add_dethunk_test__delegate;
return add_dethunk_test;
})()
;
/**
* @param {...*} var_args
*/
cljs.looperscript.interpret.nil_fn_test = (function() { 
var nil_fn_test__delegate = function (args){return cljs.core.PersistentVector.EMPTY;
};
var nil_fn_test = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nil_fn_test__delegate.call(this,args);};
nil_fn_test.cljs$lang$maxFixedArity = 0;
nil_fn_test.cljs$lang$applyTo = (function (arglist__6215){
var args = cljs.core.seq(arglist__6215);
return nil_fn_test__delegate(args);
});
nil_fn_test.cljs$core$IFn$_invoke$arity$variadic = nil_fn_test__delegate;
return nil_fn_test;
})()
;
cljs.looperscript.interpret.vec_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shuffle","shuffle",1261412160),new cljs.core.Keyword(null,"repeatedly","repeatedly",-440567070),new cljs.core.Keyword(null,"interleave","interleave",-1475043421),new cljs.core.Keyword(null,"cycle","cycle",710365284),new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.Keyword(null,"splice","splice",449588165),new cljs.core.Keyword(null,"rand","rand",908504774),new cljs.core.Keyword(null,"nth","nth",-111321973),new cljs.core.Keyword(null,"scale-range-sweep","scale-range-sweep",255716877),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"scale-range","scale-range",-910552944),new cljs.core.Keyword(null,"flatten","flatten",1212802416),new cljs.core.Keyword(null,"grow","grow",-524118895),new cljs.core.Keyword(null,"rand-hold","rand-hold",1221211378),new cljs.core.Keyword(null,"nil-fn","nil-fn",1502518834),new cljs.core.Keyword(null,"weight2","weight2",-1471744749),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"rand-range","rand-range",-1792793772),new cljs.core.Keyword(null,"transpose-scale","transpose-scale",-213992459),new cljs.core.Keyword(null,"rand-exp-range","rand-exp-range",1927268695),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"over","over",192553051),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"mild-shuffle","mild-shuffle",-1737984709),new cljs.core.Keyword(null,"bass-fret","bass-fret",-264582661),new cljs.core.Keyword(null,"rand-int","rand-int",-2135543684),new cljs.core.Keyword(null,"take","take",-768884900),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[cljs.core.shuffle,cljs.core.repeatedly,cljs.core.interleave,cljs.looperscript.interpret.cycle_STAR_,cljs.looperscript.interpret.rand_walk,cljs.looperscript.interpret.mark_for_splice,cljs.looperscript.interpret.rand_nth_STAR_,cljs.looperscript.interpret.nth_STAR_,cljs.looperscript.interpret.scale_range_sweep,cljs.core.vector,cljs.looperscript.interpret.scale_range,cljs.core.flatten,cljs.looperscript.interpret.grow,cljs.looperscript.interpret.rand_hold,cljs.looperscript.interpret.nil_fn_test,cljs.looperscript.interpret.rand_weighted_zip,cljs.looperscript.interpret.rand_weighted,cljs.looperscript.interpret.rand_range,cljs.looperscript.interpret.transpose_scale,cljs.looperscript.interpret.rand_exp_range,cljs.core.repeat,cljs.looperscript.interpret.over_mod,cljs.looperscript.interpret.add_dethunk_test,cljs.looperscript.interpret.mild_shuffle,cljs.looperscript.interpret.bass_fret,cljs.looperscript.interpret.rand_int_STAR_,cljs.looperscript.interpret.take_STAR_,cljs.looperscript.interpret.log_STAR_,cljs.looperscript.interpret.user,cljs.looperscript.interpret.range_STAR_,cljs.looperscript.interpret.in$,cljs.looperscript.interpret.scale_pattern]);
cljs.looperscript.interpret.maybe_process_vec = (function maybe_process_vec(x){if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.looperscript.interpret._process_vec.call(null,x);
} else
{return x;

}
});
cljs.looperscript.interpret._process_vec = (function _process_vec(v){var vec__6220 = v;var a = cljs.core.nth.call(null,vec__6220,(0),null);var b = cljs.core.nth.call(null,vec__6220,(1),null);var r = cljs.core.vec.call(null,cljs.core.rest.call(null,v));var r2 = cljs.core.vec.call(null,cljs.core.drop.call(null,(2),v));var vec__6221 = cljs.core.map.call(null,((function (vec__6220,a,b,r,r2){
return (function (p1__6216_SHARP_){return cljs.core.get.call(null,cljs.looperscript.interpret.vec_fns,p1__6216_SHARP_);
});})(vec__6220,a,b,r,r2))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));var afn = cljs.core.nth.call(null,vec__6221,(0),null);var bfn = cljs.core.nth.call(null,vec__6221,(1),null);var delve = ((function (vec__6220,a,b,r,r2,vec__6221,afn,bfn){
return (function (p1__6217_SHARP_){return cljs.looperscript.interpret.splice.call(null,cljs.core.map.call(null,cljs.looperscript.interpret.maybe_process_vec,p1__6217_SHARP_));
});})(vec__6220,a,b,r,r2,vec__6221,afn,bfn))
;if(cljs.core.truth_(afn))
{return cljs.core.apply.call(null,afn,delve.call(null,r));
} else
{if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core._EQ_.call(null,a,"#");if(and__3628__auto__)
{return bfn;
} else
{return and__3628__auto__;
}
})()))
{return ((function (vec__6220,a,b,r,r2,vec__6221,afn,bfn,delve){
return (function (){return cljs.core.apply.call(null,bfn,delve.call(null,r2));
});
;})(vec__6220,a,b,r,r2,vec__6221,afn,bfn,delve))
} else
{if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core._EQ_.call(null,a,"@");if(and__3628__auto__)
{return bfn;
} else
{return and__3628__auto__;
}
})()))
{return cljs.looperscript.interpret.mark_for_splice.call(null,cljs.core.apply.call(null,bfn,delve.call(null,r2)));
} else
{if(cljs.core._EQ_.call(null,a,"@"))
{return cljs.looperscript.interpret.mark_for_splice.call(null,delve.call(null,r));
} else
{if(cljs.core.sequential_QMARK_.call(null,v))
{return delve.call(null,v);
} else
{return v;

}
}
}
}
}
});
cljs.looperscript.interpret.pre_process_to_eval__BANG_s = (function pre_process_to_eval__BANG_s(v){var vec__6225 = v;var a = cljs.core.nth.call(null,vec__6225,(0),null);var b = cljs.core.nth.call(null,vec__6225,(1),null);var r = cljs.core.vec.call(null,cljs.core.rest.call(null,v));var r2 = cljs.core.vec.call(null,cljs.core.drop.call(null,(2),v));var delve = ((function (vec__6225,a,b,r,r2){
return (function (p1__6222_SHARP_){return cljs.looperscript.interpret.splice.call(null,cljs.core.map.call(null,cljs.looperscript.interpret.maybe_process_vec,p1__6222_SHARP_));
});})(vec__6225,a,b,r,r2))
;if(cljs.core._EQ_.call(null,a,"!"))
{return cljs.looperscript.interpret._process_vec.call(null,r);
} else
{if(cljs.core.sequential_QMARK_.call(null,v))
{return cljs.core.mapv.call(null,((function (vec__6225,a,b,r,r2,delve){
return (function (p1__6223_SHARP_){if(cljs.core.sequential_QMARK_.call(null,p1__6223_SHARP_))
{return pre_process_to_eval__BANG_s.call(null,p1__6223_SHARP_);
} else
{return p1__6223_SHARP_;
}
});})(vec__6225,a,b,r,r2,delve))
,v);
} else
{return v;

}
}
});
cljs.looperscript.interpret.process_vec = (function process_vec(args){if(!(cljs.core.sequential_QMARK_.call(null,args)))
{return args;
} else
{return cljs.looperscript.interpret._process_vec.call(null,cljs.looperscript.interpret.pre_process_to_eval__BANG_s.call(null,args));
}
});
cljs.looperscript.interpret.map_fn_on_hashmap_vals = (function map_fn_on_hashmap_vals(f,m){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6228){var vec__6229 = p__6228;var k = cljs.core.nth.call(null,vec__6229,(0),null);var v = cljs.core.nth.call(null,vec__6229,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
}),cljs.core.vec.call(null,m)));
});
cljs.looperscript.interpret.grammar = ("s = <sp*> params <sp*> part*\n  params = param*\n  <param> = (bpm | version) <sp*>\n  bpm = <'bpm'> <sp?> (number | fraction | vec)\n  version = <'version'> <sp?> #'[a-zA-Z0-9.]+'\n  vec = ('#' | '@' | '!')? <('[' | '(')> vec-code? (data-element | vec | sp | vec-code)* <(']' | ')')>\n  vec-code = ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," | ",cljs.core.mapv.call(null,cljs.core.comp.call(null,(function (p1__6230_SHARP_){return cljs.core.apply.call(null,cljs.core.str,"'",p1__6230_SHARP_,"'");
}),cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.rest,cljs.core.str),cljs.core.keys.call(null,cljs.looperscript.interpret.vec_fns))))+")\n  part = part-title <sp> aspect*\n  <part-title> = <'part'> sp (!aspect-keyword #'[a-zA-Z0-9_.-]+')\n  aspect = aspect-header data\n  aspect-header = aspect-keyword (sp* <'&'> sp* aspect-keyword)*\n  aspect-keyword = ('time' | 'sound' | 'volume' | 'filter' | 'pan' | 'rate' | 'offset' |                              'synth' | 'overtones' | 'time+' | 'mute' | 'skip')\n  data = data-element+\n  <data-element> = (ratio | hz | modifier | number | sp | vec | drum-code |\n  data-shorthand | synth-code)\n  <synth-code> = ('sawtooth' | 'sine' | 'square' | 'triangle')\n  <data-shorthand> = v\n  v = number <'v'> number\n  drum-code = #'[bcdhkrs]'\n  modifier = (plus | fraction | mod-code)\n  mod-code = 'just'\n  plus = <'+'> sp* (number | ratio | vec)\n  fraction = number <'/'> number\n  hz = (number | vec) sp* 'hz'\n  ratio = number <':'> number\n  number = #'-?([0-9]*\\.[0-9]*|[0-9]+)'\n      <sp> = <#'[\\s,]+'>");
cljs.looperscript.interpret.looper_parse = instaparse.core.parser.call(null,cljs.looperscript.interpret.grammar);
cljs.looperscript.interpret.looper_transform = (function looper_transform(parse_tree){return cljs.core.map.call(null,(function (p1__6232_SHARP_){return cljs.looperscript.interpret.map_fn_on_hashmap_vals.call(null,cljs.looperscript.interpret.process_vec,p1__6232_SHARP_);
}),instaparse.core.transform.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"aspect-header","aspect-header",-1942088854),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"mod-code","mod-code",-1364300459),new cljs.core.Keyword(null,"aspect-keyword","aspect-keyword",1878628821),new cljs.core.Keyword(null,"bpm","bpm",-1042376389),new cljs.core.Keyword(null,"vec-code","vec-code",652666651),new cljs.core.Keyword(null,"data","data",-232669377)],[cljs.looperscript.interpret.handle_v_keyword,cljs.core.vector,cljs.looperscript.interpret.string__GT_number,(function (n,d){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fraction","fraction",107940680),(n / d)], null);
}),(function() { 
var G__6241__delegate = function (part_name,aspects){return cljs.core.reduce.call(null,(function (m,p__6237){var vec__6238 = p__6237;var _ = cljs.core.nth.call(null,vec__6238,(0),null);var k = cljs.core.nth.call(null,vec__6238,(1),null);var v = cljs.core.nth.call(null,vec__6238,(2),null);return cljs.core.assoc.call(null,m,k,v);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),part_name], null),aspects);
};
var G__6241 = function (part_name,var_args){
var aspects = null;if (arguments.length > 1) {
  aspects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__6241__delegate.call(this,part_name,aspects);};
G__6241.cljs$lang$maxFixedArity = 1;
G__6241.cljs$lang$applyTo = (function (arglist__6242){
var part_name = cljs.core.first(arglist__6242);
var aspects = cljs.core.rest(arglist__6242);
return G__6241__delegate(part_name,aspects);
});
G__6241.cljs$core$IFn$_invoke$arity$variadic = G__6241__delegate;
return G__6241;
})()
,cljs.core.vector,(function() { 
var G__6243__delegate = function (p){return cljs.core.reduce.call(null,(function (m,p__6239){var vec__6240 = p__6239;var k = cljs.core.nth.call(null,vec__6240,(0),null);var v = cljs.core.nth.call(null,vec__6240,(1),null);return cljs.core.assoc.call(null,m,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,p);
};
var G__6243 = function (var_args){
var p = null;if (arguments.length > 0) {
  p = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6243__delegate.call(this,p);};
G__6243.cljs$lang$maxFixedArity = 0;
G__6243.cljs$lang$applyTo = (function (arglist__6244){
var p = cljs.core.seq(arglist__6244);
return G__6243__delegate(p);
});
G__6243.cljs$core$IFn$_invoke$arity$variadic = G__6243__delegate;
return G__6243;
})()
,cljs.core.vector,(function (n,d){return cljs.looperscript.interpret.ratio__GT_note.call(null,(n / d));
}),cljs.core.comp.call(null,cljs.core.vector,cljs.core.keyword),cljs.core.keyword,(function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bpm","bpm",-1042376389),((60) / (((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"fraction","fraction",107940680))))?cljs.core.second.call(null,x):((cljs.core.vector_QMARK_.call(null,x))?cljs.looperscript.interpret.process_vec.call(null,x):x
)))], null);
}),cljs.core.keyword,(function() { 
var G__6245__delegate = function (rest__6231_SHARP_){return cljs.looperscript.interpret.splice.call(null,rest__6231_SHARP_);
};
var G__6245 = function (var_args){
var rest__6231_SHARP_ = null;if (arguments.length > 0) {
  rest__6231_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6245__delegate.call(this,rest__6231_SHARP_);};
G__6245.cljs$lang$maxFixedArity = 0;
G__6245.cljs$lang$applyTo = (function (arglist__6246){
var rest__6231_SHARP_ = cljs.core.seq(arglist__6246);
return G__6245__delegate(rest__6231_SHARP_);
});
G__6245.cljs$core$IFn$_invoke$arity$variadic = G__6245__delegate;
return G__6245;
})()
]),parse_tree));
});
