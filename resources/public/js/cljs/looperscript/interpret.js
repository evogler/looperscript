// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.interpret');
goog.require('cljs.core');
goog.require('cljs.reader');
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
log.cljs$lang$applyTo = (function (arglist__24032){
var args = cljs.core.seq(arglist__24032);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
cljs.looperscript.interpret.remove_comments = (function remove_comments(s){return clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__24033_SHARP_){return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/^([^;]+)/,p1__24033_SHARP_)));
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
var G__24034 = cljs.core.into.call(null,accum,splice.call(null,n));
var G__24035 = cljs.core.rest.call(null,rem);
accum = G__24034;
rem = G__24035;
continue;
}
} else
{{
var G__24036 = cljs.core.conj.call(null,accum,splice.call(null,n));
var G__24037 = cljs.core.rest.call(null,rem);
accum = G__24036;
rem = G__24037;
continue;
}
}
} else
{{
var G__24038 = cljs.core.conj.call(null,accum,n);
var G__24039 = cljs.core.rest.call(null,rem);
accum = G__24038;
rem = G__24039;
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
cljs.looperscript.interpret.shuffle_STAR_ = (function shuffle_STAR_(v){return cljs.core.shuffle.call(null,cljs.core.first.call(null,v));
});
cljs.looperscript.interpret.range_STAR_ = (function range_STAR_(v){return cljs.core.partial.call(null,cljs.core.apply,cljs.core.range).call(null,v);
});
cljs.looperscript.interpret.rand_range = (function rand_range(v){var vec__24041 = v;var floor = cljs.core.nth.call(null,vec__24041,(0),null);var ceil = cljs.core.nth.call(null,vec__24041,(1),null);return ((cljs.core.rand.call(null) * (ceil - floor)) + floor);
});
cljs.looperscript.interpret.rand_nth_STAR_ = (function rand_nth_STAR_(v){return cljs.core.rand_nth.call(null,cljs.core.first.call(null,v));
});
cljs.looperscript.interpret.take_STAR_ = (function take_STAR_(v){var n = cljs.core.first.call(null,v);var v__$1 = cljs.core.second.call(null,v);return cljs.core.take.call(null,n,v__$1);
});
cljs.looperscript.interpret.rand_exp_range = (function rand_exp_range(v){var vec__24043 = v;var floor = cljs.core.nth.call(null,vec__24043,(0),null);var ceil = cljs.core.nth.call(null,vec__24043,(1),null);var exp = cljs.core.nth.call(null,vec__24043,(2),null);return ((Math.pow.call(null,cljs.core.rand.call(null),exp) * (ceil - floor)) + floor);
});
/**
* @param {...*} var_args
*/
cljs.looperscript.interpret.handle_v_keyword = (function() { 
var handle_v_keyword__delegate = function (v){var vec__24045 = v;var n = cljs.core.nth.call(null,vec__24045,(0),null);var d = cljs.core.nth.call(null,vec__24045,(1),null);return cljs.core.repeat.call(null,n,(d / n));
};
var handle_v_keyword = function (var_args){
var v = null;if (arguments.length > 0) {
  v = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return handle_v_keyword__delegate.call(this,v);};
handle_v_keyword.cljs$lang$maxFixedArity = 0;
handle_v_keyword.cljs$lang$applyTo = (function (arglist__24046){
var v = cljs.core.seq(arglist__24046);
return handle_v_keyword__delegate(v);
});
handle_v_keyword.cljs$core$IFn$_invoke$arity$variadic = handle_v_keyword__delegate;
return handle_v_keyword;
})()
;
cljs.looperscript.interpret.rand_weighted = (function rand_weighted(v){var vec__24049 = cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.partition.call(null,(2),v));var vs = cljs.core.nth.call(null,vec__24049,(0),null);var ws = cljs.core.nth.call(null,vec__24049,(1),null);var cum_ws = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),ws);var sum = cljs.core.last.call(null,cum_ws);var r = (cljs.core.rand.call(null) * sum);return cljs.core.some.call(null,((function (vec__24049,vs,ws,cum_ws,sum,r){
return (function (p1__24047_SHARP_){if((cljs.core.nth.call(null,cum_ws,p1__24047_SHARP_) < r))
{return cljs.core.nth.call(null,vs,p1__24047_SHARP_);
} else
{return null;
}
});})(vec__24049,vs,ws,cum_ws,sum,r))
,cljs.core.range.call(null,(cljs.core.count.call(null,vs) - (1)),(-1),(-1)));
});
cljs.looperscript.interpret.rand_weighted_zip = (function rand_weighted_zip(v){var vec__24051 = cljs.core.take.call(null,(2),v);var vs = cljs.core.nth.call(null,vec__24051,(0),null);var ws = cljs.core.nth.call(null,vec__24051,(1),null);return cljs.looperscript.interpret.rand_weighted.call(null,cljs.core.interleave.call(null,vs,ws));
});
cljs.looperscript.interpret.rand_hold = (function rand_hold(v){var vec__24054 = cljs.core.take.call(null,(2),v);var odds_of_change = cljs.core.nth.call(null,vec__24054,(0),null);var options = cljs.core.nth.call(null,vec__24054,(1),null);var current_choice = cljs.core.atom.call(null,((cljs.core.fn_QMARK_.call(null,options))?options.call(null):cljs.core.rand_nth.call(null,options)));return ((function (vec__24054,odds_of_change,options,current_choice){
return (function (){if((odds_of_change < cljs.core.rand.call(null)))
{return cljs.core.deref.call(null,current_choice);
} else
{return cljs.core.reset_BANG_.call(null,current_choice,((cljs.core.fn_QMARK_.call(null,options))?options.call(null):cljs.core.rand_nth.call(null,cljs.core.remove.call(null,((function (vec__24054,odds_of_change,options,current_choice){
return (function (p1__24052_SHARP_){return cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_choice),p1__24052_SHARP_);
});})(vec__24054,odds_of_change,options,current_choice))
,options))));
}
});
;})(vec__24054,odds_of_change,options,current_choice))
});
cljs.looperscript.interpret.rand_walk = (function rand_walk(v){var rand_int_range = (function (a,b){return (a + cljs.core.rand_int.call(null,((b - a) + (1))));
});var max_step = cljs.core.first.call(null,v);var v__$1 = cljs.core.second.call(null,v);var max_v = (cljs.core.count.call(null,v__$1) - (1));var pos = cljs.core.atom.call(null,cljs.core.rand_int.call(null,cljs.core.count.call(null,v__$1)));return ((function (rand_int_range,max_step,v__$1,max_v,pos){
return (function (){return cljs.core.nth.call(null,v__$1,cljs.core.reset_BANG_.call(null,pos,rand_int_range.call(null,(function (){var x__3947__auto__ = (0);var y__3948__auto__ = (cljs.core.deref.call(null,pos) - max_step);return ((x__3947__auto__ > y__3948__auto__) ? x__3947__auto__ : y__3948__auto__);
})(),(function (){var x__3954__auto__ = max_v;var y__3955__auto__ = (cljs.core.deref.call(null,pos) + max_step);return ((x__3954__auto__ < y__3955__auto__) ? x__3954__auto__ : y__3955__auto__);
})())));
});
;})(rand_int_range,max_step,v__$1,max_v,pos))
});
cljs.looperscript.interpret.in$ = (function in$(v){var t = cljs.core.first.call(null,v);var v__$1 = cljs.core.second.call(null,v);var factor = (t / cljs.core.reduce.call(null,cljs.core._PLUS_,v__$1));return cljs.core.map.call(null,((function (t,v__$1,factor){
return (function (p1__24055_SHARP_){return (factor * p1__24055_SHARP_);
});})(t,v__$1,factor))
,v__$1);
});
cljs.looperscript.interpret.repeat_STAR_ = (function repeat_STAR_(v){var n = cljs.core.first.call(null,v);var v__$1 = cljs.core.second.call(null,v);return cljs.core.repeat.call(null,n,v__$1);
});
cljs.looperscript.interpret.cycle_STAR_ = (function cycle_STAR_(v){var v__$1 = cljs.core.first.call(null,v);var pos = cljs.core.atom.call(null,(-1));var v_len = cljs.core.count.call(null,v__$1);return ((function (v__$1,pos,v_len){
return (function (){return cljs.core.nth.call(null,v__$1,cljs.core.swap_BANG_.call(null,pos,((function (v__$1,pos,v_len){
return (function (p1__24056_SHARP_){return cljs.core.mod.call(null,(p1__24056_SHARP_ + (1)),v_len);
});})(v__$1,pos,v_len))
));
});
;})(v__$1,pos,v_len))
});
cljs.looperscript.interpret.nth_STAR_ = (function nth_STAR_(p__24057){var vec__24059 = p__24057;var idx = cljs.core.nth.call(null,vec__24059,(0),null);var v = cljs.core.nth.call(null,vec__24059,(1),null);return cljs.core.nth.call(null,v,idx);
});
cljs.looperscript.interpret.scale_nth = (function scale_nth(scale,degree){return (((12) * Math.floor.call(null,(degree / cljs.core.count.call(null,scale)))) + cljs.core.nth.call(null,scale,cljs.core.mod.call(null,degree,cljs.core.count.call(null,scale))));
});
cljs.looperscript.interpret.scale_pattern = (function scale_pattern(v){var vec__24067 = v;var scale = cljs.core.nth.call(null,vec__24067,(0),null);var pattern = cljs.core.nth.call(null,vec__24067,(1),null);var degrees = cljs.core.nth.call(null,vec__24067,(2),null);var res = (function (){var iter__4379__auto__ = ((function (vec__24067,scale,pattern,degrees){
return (function iter__24068(s__24069){return (new cljs.core.LazySeq(null,((function (vec__24067,scale,pattern,degrees){
return (function (){var s__24069__$1 = s__24069;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24069__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var d = cljs.core.first.call(null,xs__4624__auto__);var iterys__4375__auto__ = ((function (s__24069__$1,d,xs__4624__auto__,temp__4126__auto__,vec__24067,scale,pattern,degrees){
return (function iter__24070(s__24071){return (new cljs.core.LazySeq(null,((function (s__24069__$1,d,xs__4624__auto__,temp__4126__auto__,vec__24067,scale,pattern,degrees){
return (function (){var s__24071__$1 = s__24071;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__24071__$1);if(temp__4126__auto____$1)
{var s__24071__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__24071__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__24071__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__24073 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__24072 = (0);while(true){
if((i__24072 < size__4378__auto__))
{var p = cljs.core._nth.call(null,c__4377__auto__,i__24072);cljs.core.chunk_append.call(null,b__24073,cljs.looperscript.interpret.scale_nth.call(null,scale,(d + p)));
{
var G__24074 = (i__24072 + (1));
i__24072 = G__24074;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24073),iter__24070.call(null,cljs.core.chunk_rest.call(null,s__24071__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24073),null);
}
} else
{var p = cljs.core.first.call(null,s__24071__$2);return cljs.core.cons.call(null,cljs.looperscript.interpret.scale_nth.call(null,scale,(d + p)),iter__24070.call(null,cljs.core.rest.call(null,s__24071__$2)));
}
} else
{return null;
}
break;
}
});})(s__24069__$1,d,xs__4624__auto__,temp__4126__auto__,vec__24067,scale,pattern,degrees))
,null,null));
});})(s__24069__$1,d,xs__4624__auto__,temp__4126__auto__,vec__24067,scale,pattern,degrees))
;var fs__4376__auto__ = cljs.core.seq.call(null,iterys__4375__auto__.call(null,pattern));if(fs__4376__auto__)
{return cljs.core.concat.call(null,fs__4376__auto__,iter__24068.call(null,cljs.core.rest.call(null,s__24069__$1)));
} else
{{
var G__24075 = cljs.core.rest.call(null,s__24069__$1);
s__24069__$1 = G__24075;
continue;
}
}
} else
{return null;
}
break;
}
});})(vec__24067,scale,pattern,degrees))
,null,null));
});})(vec__24067,scale,pattern,degrees))
;return iter__4379__auto__.call(null,degrees);
})();return res;
});
cljs.looperscript.interpret.scale_range = (function scale_range(p__24077){var vec__24085 = p__24077;var floor = cljs.core.nth.call(null,vec__24085,(0),null);var ceil = cljs.core.nth.call(null,vec__24085,(1),null);var scale = cljs.core.nth.call(null,vec__24085,(2),null);var a = (((floor / (12)) | (0)) - (1));var b = (((ceil / (12)) + (1)) + (1));return cljs.core.filter.call(null,((function (a,b,vec__24085,floor,ceil,scale){
return (function (p1__24076_SHARP_){return ((floor <= p1__24076_SHARP_)) && ((p1__24076_SHARP_ <= ceil));
});})(a,b,vec__24085,floor,ceil,scale))
,(function (){var iter__4379__auto__ = ((function (a,b,vec__24085,floor,ceil,scale){
return (function iter__24086(s__24087){return (new cljs.core.LazySeq(null,((function (a,b,vec__24085,floor,ceil,scale){
return (function (){var s__24087__$1 = s__24087;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24087__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var o = cljs.core.first.call(null,xs__4624__auto__);var iterys__4375__auto__ = ((function (s__24087__$1,o,xs__4624__auto__,temp__4126__auto__,a,b,vec__24085,floor,ceil,scale){
return (function iter__24088(s__24089){return (new cljs.core.LazySeq(null,((function (s__24087__$1,o,xs__4624__auto__,temp__4126__auto__,a,b,vec__24085,floor,ceil,scale){
return (function (){var s__24089__$1 = s__24089;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__24089__$1);if(temp__4126__auto____$1)
{var s__24089__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__24089__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__24089__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__24091 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__24090 = (0);while(true){
if((i__24090 < size__4378__auto__))
{var s = cljs.core._nth.call(null,c__4377__auto__,i__24090);cljs.core.chunk_append.call(null,b__24091,(((12) * o) + s));
{
var G__24092 = (i__24090 + (1));
i__24090 = G__24092;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24091),iter__24088.call(null,cljs.core.chunk_rest.call(null,s__24089__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24091),null);
}
} else
{var s = cljs.core.first.call(null,s__24089__$2);return cljs.core.cons.call(null,(((12) * o) + s),iter__24088.call(null,cljs.core.rest.call(null,s__24089__$2)));
}
} else
{return null;
}
break;
}
});})(s__24087__$1,o,xs__4624__auto__,temp__4126__auto__,a,b,vec__24085,floor,ceil,scale))
,null,null));
});})(s__24087__$1,o,xs__4624__auto__,temp__4126__auto__,a,b,vec__24085,floor,ceil,scale))
;var fs__4376__auto__ = cljs.core.seq.call(null,iterys__4375__auto__.call(null,scale));if(fs__4376__auto__)
{return cljs.core.concat.call(null,fs__4376__auto__,iter__24086.call(null,cljs.core.rest.call(null,s__24087__$1)));
} else
{{
var G__24093 = cljs.core.rest.call(null,s__24087__$1);
s__24087__$1 = G__24093;
continue;
}
}
} else
{return null;
}
break;
}
});})(a,b,vec__24085,floor,ceil,scale))
,null,null));
});})(a,b,vec__24085,floor,ceil,scale))
;return iter__4379__auto__.call(null,cljs.core.range.call(null,a,b));
})());
});
cljs.looperscript.interpret.scale_range_sweep = (function scale_range_sweep(p__24094){var vec__24096 = p__24094;var floor = cljs.core.nth.call(null,vec__24096,(0),null);var ceil = cljs.core.nth.call(null,vec__24096,(1),null);var scale = cljs.core.nth.call(null,vec__24096,(2),null);var sr = cljs.core.vec.call(null,cljs.looperscript.interpret.scale_range.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [floor,ceil,scale], null)));return cljs.core.into.call(null,sr,cljs.core.drop_last.call(null,cljs.core.rest.call(null,cljs.core.reverse.call(null,sr))));
});
cljs.looperscript.interpret.mild_shuffle = (function mild_shuffle(v){var vec__24098 = v;var degree = cljs.core.nth.call(null,vec__24098,(0),null);var col = cljs.core.nth.call(null,vec__24098,(1),null);return cljs.core.map.call(null,cljs.core.second,cljs.core.sort.call(null,cljs.core.map_indexed.call(null,((function (vec__24098,degree,col){
return (function (idx,n){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(idx + cljs.core.rand_int.call(null,(degree - (1)))),n], null);
});})(vec__24098,degree,col))
,col)));
});
cljs.looperscript.interpret.log_STAR_ = (function log_STAR_(v){cljs.looperscript.interpret.log.call(null,v);
return v;
});
cljs.looperscript.interpret.memo = (function memo(p__24099){var vec__24101 = p__24099;var id = cljs.core.nth.call(null,vec__24101,(0),null);var fn = cljs.core.nth.call(null,vec__24101,(1),null);var memo_f = cljs.core.memoize.call(null,fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.looperscript.interpret.cnt], null),fn.call(null)));var counts = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);return fn.call(null,cljs.core.PersistentVector.EMPTY);
});
cljs.looperscript.interpret.bass_fret = (function bass_fret(p__24102){var vec__24104 = p__24102;var string = cljs.core.nth.call(null,vec__24104,(0),null);var fret = cljs.core.nth.call(null,vec__24104,(1),null);return (((-17) + fret) + ((-5) * (string - (1))));
});
cljs.looperscript.interpret.user_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.interpret.set_user_var = (function set_user_var(k,v){return cljs.core.swap_BANG_.call(null,cljs.looperscript.interpret.user_vars,cljs.core.assoc,k,v);
});
cljs.looperscript.interpret.user = (function user(p__24105){var vec__24107 = p__24105;var k = cljs.core.nth.call(null,vec__24107,(0),null);var default$ = cljs.core.nth.call(null,vec__24107,(1),null);return ((function (vec__24107,k,default$){
return (function (){return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.looperscript.interpret.user_vars),k,default$);
});
;})(vec__24107,k,default$))
});
cljs.looperscript.interpret.vec_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shuffle","shuffle",1261412160),new cljs.core.Keyword(null,"repeatedly","repeatedly",-440567070),new cljs.core.Keyword(null,"cycle","cycle",710365284),new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.Keyword(null,"splice","splice",449588165),new cljs.core.Keyword(null,"rand","rand",908504774),new cljs.core.Keyword(null,"nth","nth",-111321973),new cljs.core.Keyword(null,"scale-range-sweep","scale-range-sweep",255716877),new cljs.core.Keyword(null,"scale-range","scale-range",-910552944),new cljs.core.Keyword(null,"flatten","flatten",1212802416),new cljs.core.Keyword(null,"rand-hold","rand-hold",1221211378),new cljs.core.Keyword(null,"weight2","weight2",-1471744749),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"rand-range","rand-range",-1792793772),new cljs.core.Keyword(null,"rand-exp-range","rand-exp-range",1927268695),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"mild-shuffle","mild-shuffle",-1737984709),new cljs.core.Keyword(null,"bass-fret","bass-fret",-264582661),new cljs.core.Keyword(null,"take","take",-768884900),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[cljs.core.partial.call(null,cljs.core.apply,cljs.core.shuffle),cljs.core.partial.call(null,cljs.core.apply,cljs.core.repeatedly),cljs.looperscript.interpret.cycle_STAR_,cljs.looperscript.interpret.rand_walk,cljs.looperscript.interpret.mark_for_splice,cljs.looperscript.interpret.rand_nth_STAR_,cljs.looperscript.interpret.nth_STAR_,cljs.looperscript.interpret.scale_range_sweep,cljs.looperscript.interpret.scale_range,cljs.core.flatten,cljs.looperscript.interpret.rand_hold,cljs.looperscript.interpret.rand_weighted_zip,cljs.looperscript.interpret.rand_weighted,cljs.looperscript.interpret.rand_range,cljs.looperscript.interpret.rand_exp_range,cljs.looperscript.interpret.repeat_STAR_,cljs.looperscript.interpret.mild_shuffle,cljs.looperscript.interpret.bass_fret,cljs.looperscript.interpret.take_STAR_,cljs.looperscript.interpret.log_STAR_,cljs.looperscript.interpret.user,cljs.looperscript.interpret.range_STAR_,cljs.looperscript.interpret.in$,cljs.looperscript.interpret.scale_pattern]);
cljs.looperscript.interpret.maybe_process_vec = (function maybe_process_vec(x){if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.looperscript.interpret.process_vec.call(null,x);
} else
{if(cljs.core.fn_QMARK_.call(null,x))
{return x.call(null);
} else
{return x;

}
}
});
/**
* @param {...*} var_args
*/
cljs.looperscript.interpret.process_vec = (function() { 
var process_vec__delegate = function (v){cljs.looperscript.interpret.log.call(null,v);
if(cljs.core.truth_(cljs.core.get.call(null,cljs.looperscript.interpret.vec_fns,cljs.core.first.call(null,v))))
{return cljs.core.get.call(null,cljs.looperscript.interpret.vec_fns,cljs.core.first.call(null,v)).call(null,cljs.core.rest.call(null,v));
} else
{if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,v),"#");if(and__3628__auto__)
{return cljs.core.get.call(null,cljs.looperscript.interpret.vec_fns,cljs.core.second.call(null,v));
} else
{return and__3628__auto__;
}
})()))
{return (function (){return cljs.core.get.call(null,cljs.looperscript.interpret.vec_fns,cljs.core.second.call(null,v)).call(null,cljs.core.map.call(null,cljs.looperscript.interpret.maybe_process_vec,cljs.core.rest.call(null,cljs.core.rest.call(null,v))));
});
} else
{if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,v),"@");if(and__3628__auto__)
{return cljs.core.get.call(null,cljs.looperscript.interpret.vec_fns,cljs.core.second.call(null,v));
} else
{return and__3628__auto__;
}
})()))
{return cljs.looperscript.interpret.mark_for_splice.call(null,cljs.core.get.call(null,cljs.looperscript.interpret.vec_fns,cljs.core.second.call(null,v)).call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,v))));
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,v),"@"))
{return cljs.looperscript.interpret.mark_for_splice.call(null,cljs.core.rest.call(null,v));
} else
{return v;

}
}
}
}
};
var process_vec = function (var_args){
var v = null;if (arguments.length > 0) {
  v = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return process_vec__delegate.call(this,v);};
process_vec.cljs$lang$maxFixedArity = 0;
process_vec.cljs$lang$applyTo = (function (arglist__24108){
var v = cljs.core.seq(arglist__24108);
return process_vec__delegate(v);
});
process_vec.cljs$core$IFn$_invoke$arity$variadic = process_vec__delegate;
return process_vec;
})()
;
cljs.looperscript.interpret.grammar = "s = <sp*> params <sp*> part*\n      params = param*\n      <param> = (bpm | version) <sp*>\n      bpm = <'bpm'> <sp?> (number | fraction | vec)\n      version = <'version'> <sp?> #'[a-zA-Z0-9.]+'\n      vec = ('#' | '@' | '!')? <('[' | '(')> vec-code? (data-element | vec | sp)+ <(']' | ')')>\n      vec-code = ('rand' | 'shuffle' | 'range' | 'rand-range' | 'rand-exp-range' | 'take' |\n                  'in' | 'repeatedly' | 'x' | 'weight' | 'walk' | 'cycle' | 'log' | 'pattern' |\n                  'weight2' | 'rand-hold' | 'mild-shuffle' | 'flatten' | 'log' |\n                  'scale-range' | 'scale-range-sweep' | 'user' | 'bass-fret' | 'nth')\n      part = part-title <sp> aspect*\n      <part-title> = <'part'> sp (!aspect-keyword #'[a-zA-Z0-9_.-]+')\n      aspect = aspect-header data\n      aspect-header = aspect-keyword (sp* <'&'> sp* aspect-keyword)*\n      aspect-keyword = ('time' | 'sound' | 'volume' | 'filter' | 'pan' | 'rate' | 'offset' |                              'synth' | 'overtones' | 'time+' | 'mute' | 'skip')\n      data = data-element+\n      <data-element> = (ratio | hz | modifier | number | sp | vec | drum-code |\n                        data-shorthand | synth-code)\n      <synth-code> = ('sawtooth' | 'sine' | 'square' | 'triangle')\n      <data-shorthand> = v\n      v = number <'v'> number\n      drum-code = #'[bcdhkrs]'\n      modifier = (plus | fraction | mod-code)\n      mod-code = 'just'\n      plus = <'+'> sp* (number | ratio | vec)\n      fraction = number <'/'> number\n      hz = (number | vec) sp* 'hz'\n      ratio = number <':'> number\n      number = #'-?([0-9]*\\.[0-9]*|[0-9]+)'\n      <sp> = <#'[\\s,]+'>";
cljs.looperscript.interpret.looper_parse = instaparse.core.parser.call(null,cljs.looperscript.interpret.grammar);
cljs.looperscript.interpret.looper_transform = (function looper_transform(parse_tree){return instaparse.core.transform.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"aspect-header","aspect-header",-1942088854),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"mod-code","mod-code",-1364300459),new cljs.core.Keyword(null,"aspect-keyword","aspect-keyword",1878628821),new cljs.core.Keyword(null,"bpm","bpm",-1042376389),new cljs.core.Keyword(null,"vec-code","vec-code",652666651),new cljs.core.Keyword(null,"data","data",-232669377)],[cljs.looperscript.interpret.handle_v_keyword,cljs.looperscript.interpret.process_vec,cljs.looperscript.interpret.string__GT_number,(function (n,d){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fraction","fraction",107940680),(n / d)], null);
}),(function() { 
var G__24118__delegate = function (part_name,aspects){return cljs.core.reduce.call(null,(function (m,p__24114){var vec__24115 = p__24114;var _ = cljs.core.nth.call(null,vec__24115,(0),null);var k = cljs.core.nth.call(null,vec__24115,(1),null);var v = cljs.core.nth.call(null,vec__24115,(2),null);return cljs.core.assoc.call(null,m,k,v);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),part_name], null),aspects);
};
var G__24118 = function (part_name,var_args){
var aspects = null;if (arguments.length > 1) {
  aspects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__24118__delegate.call(this,part_name,aspects);};
G__24118.cljs$lang$maxFixedArity = 1;
G__24118.cljs$lang$applyTo = (function (arglist__24119){
var part_name = cljs.core.first(arglist__24119);
var aspects = cljs.core.rest(arglist__24119);
return G__24118__delegate(part_name,aspects);
});
G__24118.cljs$core$IFn$_invoke$arity$variadic = G__24118__delegate;
return G__24118;
})()
,cljs.core.vector,(function() { 
var G__24120__delegate = function (p){return cljs.core.reduce.call(null,(function (m,p__24116){var vec__24117 = p__24116;var k = cljs.core.nth.call(null,vec__24117,(0),null);var v = cljs.core.nth.call(null,vec__24117,(1),null);return cljs.core.assoc.call(null,m,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,p);
};
var G__24120 = function (var_args){
var p = null;if (arguments.length > 0) {
  p = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24120__delegate.call(this,p);};
G__24120.cljs$lang$maxFixedArity = 0;
G__24120.cljs$lang$applyTo = (function (arglist__24121){
var p = cljs.core.seq(arglist__24121);
return G__24120__delegate(p);
});
G__24120.cljs$core$IFn$_invoke$arity$variadic = G__24120__delegate;
return G__24120;
})()
,cljs.core.vector,(function (n,d){return cljs.looperscript.interpret.ratio__GT_note.call(null,(n / d));
}),cljs.core.comp.call(null,cljs.core.vector,cljs.core.keyword),cljs.core.keyword,(function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bpm","bpm",-1042376389),((60) / ((cljs.core.vector_QMARK_.call(null,x))?cljs.core.last.call(null,x):x))], null);
}),cljs.core.keyword,(function() { 
var G__24122__delegate = function (rest__24109_SHARP_){return cljs.looperscript.interpret.splice.call(null,rest__24109_SHARP_);
};
var G__24122 = function (var_args){
var rest__24109_SHARP_ = null;if (arguments.length > 0) {
  rest__24109_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24122__delegate.call(this,rest__24109_SHARP_);};
G__24122.cljs$lang$maxFixedArity = 0;
G__24122.cljs$lang$applyTo = (function (arglist__24123){
var rest__24109_SHARP_ = cljs.core.seq(arglist__24123);
return G__24122__delegate(rest__24109_SHARP_);
});
G__24122.cljs$core$IFn$_invoke$arity$variadic = G__24122__delegate;
return G__24122;
})()
]),parse_tree);
});
