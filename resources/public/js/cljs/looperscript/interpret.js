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
log.cljs$lang$applyTo = (function (arglist__7424){
var args = cljs.core.seq(arglist__7424);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
cljs.looperscript.interpret.remove_comments = (function remove_comments(s){return clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__7425_SHARP_){return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/^([^;]+)/,p1__7425_SHARP_)));
}),clojure.string.split_lines.call(null,s)));
});
cljs.looperscript.interpret.string__GT_number = (function string__GT_number(s){return cljs.reader.read_string.call(null,(function (){var temp__4124__auto__ = cljs.core.re_find.call(null,/-(^\.[0-9]+)/,s);if(cljs.core.truth_(temp__4124__auto__))
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
cljs.looperscript.interpret.apply_ops = (function apply_ops(n,ops){return cljs.core.reduce.call(null,(function (x,p__7428){var vec__7429 = p__7428;var op = cljs.core.nth.call(null,vec__7429,(0),null);var v = cljs.core.nth.call(null,vec__7429,(1),null);if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"*","*",-1294732318)))
{return (x * v);
} else
{if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"+","+",1913524883)))
{return (x + v);
} else
{return x;

}
}
}),n,ops);
});
cljs.looperscript.interpret.choose_random1s = (function choose_random1s(v){return cljs.core.map.call(null,(function (x){if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"random1","random1",2116694721))))
{return cljs.core.rand_nth.call(null,cljs.core.rest.call(null,x));
} else
{return x;
}
}),v);
});
cljs.looperscript.interpret.ratio__GT_note = (function ratio__GT_note(r){return ((Math.log.call(null,r) / Math.log.call(null,(2))) * (12));
});
cljs.looperscript.interpret.parse_data = (function() {
var parse_data = null;
var parse_data__1 = (function (v){return parse_data.call(null,v,cljs.core.PersistentVector.EMPTY);
});
var parse_data__2 = (function (v,pre_ops){var accum = cljs.core.PersistentVector.EMPTY;var rem = v;var ops = pre_ops;while(true){
if(cljs.core.empty_QMARK_.call(null,rem))
{return accum;
} else
{var x = cljs.core.first.call(null,rem);if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"fraction","fraction",107940680))))
{{
var G__7431 = accum;
var G__7432 = cljs.core.rest.call(null,rem);
var G__7433 = cljs.core.conj.call(null,ops,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),cljs.core.second.call(null,x)], null));
accum = G__7431;
rem = G__7432;
ops = G__7433;
continue;
}
} else
{if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"plus","plus",211540661))))
{{
var G__7434 = accum;
var G__7435 = cljs.core.rest.call(null,rem);
var G__7436 = cljs.core.conj.call(null,ops,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883),cljs.core.second.call(null,x)], null));
accum = G__7434;
rem = G__7435;
ops = G__7436;
continue;
}
} else
{if(typeof x === 'number')
{{
var G__7437 = cljs.core.conj.call(null,accum,cljs.looperscript.interpret.apply_ops.call(null,x,ops));
var G__7438 = cljs.core.rest.call(null,rem);
var G__7439 = ops;
accum = G__7437;
rem = G__7438;
ops = G__7439;
continue;
}
} else
{if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"random2","random2",-402442624))))
{{
var G__7440 = cljs.core.conj.call(null,accum,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random2","random2",-402442624)], null),cljs.core.map.call(null,((function (accum,rem,ops,x){
return (function (p1__7430_SHARP_){return cljs.looperscript.interpret.apply_ops.call(null,p1__7430_SHARP_,ops);
});})(accum,rem,ops,x))
,cljs.core.rest.call(null,x))));
var G__7441 = cljs.core.rest.call(null,rem);
var G__7442 = ops;
accum = G__7440;
rem = G__7441;
ops = G__7442;
continue;
}
} else
{{
var G__7443 = cljs.core.conj.call(null,accum,x);
var G__7444 = cljs.core.rest.call(null,rem);
var G__7445 = ops;
accum = G__7443;
rem = G__7444;
ops = G__7445;
continue;
}

}
}
}
}
}
break;
}
});
parse_data = function(v,pre_ops){
switch(arguments.length){
case 1:
return parse_data__1.call(this,v);
case 2:
return parse_data__2.call(this,v,pre_ops);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parse_data.cljs$core$IFn$_invoke$arity$1 = parse_data__1;
parse_data.cljs$core$IFn$_invoke$arity$2 = parse_data__2;
return parse_data;
})()
;
cljs.looperscript.interpret.splice = (function splice(v){return cljs.core.with_meta.call(null,(function (){var accum = cljs.core.PersistentVector.EMPTY;var rem = v;while(true){
if(cljs.core.empty_QMARK_.call(null,rem))
{return accum;
} else
{var n = cljs.core.first.call(null,rem);if(cljs.core.vector_QMARK_.call(null,n))
{if(cljs.core.truth_(new cljs.core.Keyword(null,"splice","splice",449588165).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,n))))
{{
var G__7446 = cljs.core.into.call(null,accum,splice.call(null,n));
var G__7447 = cljs.core.rest.call(null,rem);
accum = G__7446;
rem = G__7447;
continue;
}
} else
{{
var G__7448 = cljs.core.conj.call(null,accum,splice.call(null,n));
var G__7449 = cljs.core.rest.call(null,rem);
accum = G__7448;
rem = G__7449;
continue;
}
}
} else
{{
var G__7450 = cljs.core.conj.call(null,accum,n);
var G__7451 = cljs.core.rest.call(null,rem);
accum = G__7450;
rem = G__7451;
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
cljs.looperscript.interpret.rand_range = (function rand_range(v){var vec__7453 = v;var floor = cljs.core.nth.call(null,vec__7453,(0),null);var ceil = cljs.core.nth.call(null,vec__7453,(1),null);return ((cljs.core.rand.call(null) * (ceil - floor)) + floor);
});
cljs.looperscript.interpret.rand_nth_STAR_ = (function rand_nth_STAR_(v){return cljs.core.rand_nth.call(null,cljs.core.first.call(null,v));
});
cljs.looperscript.interpret.take_STAR_ = (function take_STAR_(v){var n = cljs.core.first.call(null,v);var v__$1 = cljs.core.second.call(null,v);return cljs.core.take.call(null,n,v__$1);
});
cljs.looperscript.interpret.rand_exp_range = (function rand_exp_range(v){var vec__7455 = v;var floor = cljs.core.nth.call(null,vec__7455,(0),null);var ceil = cljs.core.nth.call(null,vec__7455,(1),null);var exp = cljs.core.nth.call(null,vec__7455,(2),null);return ((Math.pow.call(null,cljs.core.rand.call(null),exp) * (ceil - floor)) + floor);
});
/**
* @param {...*} var_args
*/
cljs.looperscript.interpret.handle_v_keyword = (function() { 
var handle_v_keyword__delegate = function (v){return cljs.looperscript.interpret.mark_for_splice.call(null,(function (){var vec__7457 = v;var n = cljs.core.nth.call(null,vec__7457,(0),null);var d = cljs.core.nth.call(null,vec__7457,(1),null);return cljs.core.repeat.call(null,n,(d / n));
})());
};
var handle_v_keyword = function (var_args){
var v = null;if (arguments.length > 0) {
  v = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return handle_v_keyword__delegate.call(this,v);};
handle_v_keyword.cljs$lang$maxFixedArity = 0;
handle_v_keyword.cljs$lang$applyTo = (function (arglist__7458){
var v = cljs.core.seq(arglist__7458);
return handle_v_keyword__delegate(v);
});
handle_v_keyword.cljs$core$IFn$_invoke$arity$variadic = handle_v_keyword__delegate;
return handle_v_keyword;
})()
;
cljs.looperscript.interpret.rand_weighted = (function rand_weighted(v){var vec__7461 = cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.partition.call(null,(2),v));var vs = cljs.core.nth.call(null,vec__7461,(0),null);var ws = cljs.core.nth.call(null,vec__7461,(1),null);var cum_ws = cljs.core.reductions.call(null,cljs.core._PLUS_,(0),ws);var sum = cljs.core.last.call(null,cum_ws);var r = (cljs.core.rand.call(null) * sum);return cljs.core.some.call(null,((function (vec__7461,vs,ws,cum_ws,sum,r){
return (function (p1__7459_SHARP_){if((cljs.core.nth.call(null,cum_ws,p1__7459_SHARP_) < r))
{return cljs.core.nth.call(null,vs,p1__7459_SHARP_);
} else
{return null;
}
});})(vec__7461,vs,ws,cum_ws,sum,r))
,cljs.core.range.call(null,(cljs.core.count.call(null,vs) - (1)),(-1),(-1)));
});
cljs.looperscript.interpret.rand_weighted_zip = (function rand_weighted_zip(v){var vec__7463 = cljs.core.take.call(null,(2),v);var vs = cljs.core.nth.call(null,vec__7463,(0),null);var ws = cljs.core.nth.call(null,vec__7463,(1),null);return cljs.looperscript.interpret.rand_weighted.call(null,cljs.core.interleave.call(null,vs,ws));
});
cljs.looperscript.interpret.rand_hold = (function rand_hold(v){var vec__7466 = cljs.core.take.call(null,(2),v);var odds_of_change = cljs.core.nth.call(null,vec__7466,(0),null);var options = cljs.core.nth.call(null,vec__7466,(1),null);var current_choice = cljs.core.atom.call(null,((cljs.core.fn_QMARK_.call(null,options))?options.call(null):cljs.core.rand_nth.call(null,options)));return ((function (vec__7466,odds_of_change,options,current_choice){
return (function (){if((odds_of_change < cljs.core.rand.call(null)))
{return cljs.core.deref.call(null,current_choice);
} else
{return cljs.core.reset_BANG_.call(null,current_choice,((cljs.core.fn_QMARK_.call(null,options))?options.call(null):cljs.core.rand_nth.call(null,cljs.core.remove.call(null,((function (vec__7466,odds_of_change,options,current_choice){
return (function (p1__7464_SHARP_){return cljs.core._EQ_.call(null,cljs.core.deref.call(null,current_choice),p1__7464_SHARP_);
});})(vec__7466,odds_of_change,options,current_choice))
,options))));
}
});
;})(vec__7466,odds_of_change,options,current_choice))
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
return (function (p1__7467_SHARP_){return (factor * p1__7467_SHARP_);
});})(t,v__$1,factor))
,v__$1);
});
cljs.looperscript.interpret.repeat_STAR_ = (function repeat_STAR_(v){var n = cljs.core.first.call(null,v);var v__$1 = cljs.core.second.call(null,v);return cljs.core.repeat.call(null,n,v__$1);
});
cljs.looperscript.interpret.cycle_STAR_ = (function cycle_STAR_(v){var v__$1 = cljs.core.first.call(null,v);var pos = cljs.core.atom.call(null,(-1));var v_len = cljs.core.count.call(null,v__$1);return ((function (v__$1,pos,v_len){
return (function (){return cljs.core.nth.call(null,v__$1,cljs.core.swap_BANG_.call(null,pos,((function (v__$1,pos,v_len){
return (function (p1__7468_SHARP_){return cljs.core.mod.call(null,(p1__7468_SHARP_ + (1)),v_len);
});})(v__$1,pos,v_len))
));
});
;})(v__$1,pos,v_len))
});
cljs.looperscript.interpret.scale_nth = (function scale_nth(scale,degree){return (((12) * Math.floor.call(null,(degree / cljs.core.count.call(null,scale)))) + cljs.core.nth.call(null,scale,cljs.core.mod.call(null,degree,cljs.core.count.call(null,scale))));
});
cljs.looperscript.interpret.scale_pattern = (function scale_pattern(v){var vec__7476 = v;var scale = cljs.core.nth.call(null,vec__7476,(0),null);var pattern = cljs.core.nth.call(null,vec__7476,(1),null);var degrees = cljs.core.nth.call(null,vec__7476,(2),null);var res = (function (){var iter__4379__auto__ = ((function (vec__7476,scale,pattern,degrees){
return (function iter__7477(s__7478){return (new cljs.core.LazySeq(null,((function (vec__7476,scale,pattern,degrees){
return (function (){var s__7478__$1 = s__7478;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7478__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var d = cljs.core.first.call(null,xs__4624__auto__);var iterys__4375__auto__ = ((function (s__7478__$1,d,xs__4624__auto__,temp__4126__auto__,vec__7476,scale,pattern,degrees){
return (function iter__7479(s__7480){return (new cljs.core.LazySeq(null,((function (s__7478__$1,d,xs__4624__auto__,temp__4126__auto__,vec__7476,scale,pattern,degrees){
return (function (){var s__7480__$1 = s__7480;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__7480__$1);if(temp__4126__auto____$1)
{var s__7480__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7480__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__7480__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__7482 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__7481 = (0);while(true){
if((i__7481 < size__4378__auto__))
{var p = cljs.core._nth.call(null,c__4377__auto__,i__7481);cljs.core.chunk_append.call(null,b__7482,cljs.looperscript.interpret.scale_nth.call(null,scale,(d + p)));
{
var G__7483 = (i__7481 + (1));
i__7481 = G__7483;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7482),iter__7479.call(null,cljs.core.chunk_rest.call(null,s__7480__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7482),null);
}
} else
{var p = cljs.core.first.call(null,s__7480__$2);return cljs.core.cons.call(null,cljs.looperscript.interpret.scale_nth.call(null,scale,(d + p)),iter__7479.call(null,cljs.core.rest.call(null,s__7480__$2)));
}
} else
{return null;
}
break;
}
});})(s__7478__$1,d,xs__4624__auto__,temp__4126__auto__,vec__7476,scale,pattern,degrees))
,null,null));
});})(s__7478__$1,d,xs__4624__auto__,temp__4126__auto__,vec__7476,scale,pattern,degrees))
;var fs__4376__auto__ = cljs.core.seq.call(null,iterys__4375__auto__.call(null,pattern));if(fs__4376__auto__)
{return cljs.core.concat.call(null,fs__4376__auto__,iter__7477.call(null,cljs.core.rest.call(null,s__7478__$1)));
} else
{{
var G__7484 = cljs.core.rest.call(null,s__7478__$1);
s__7478__$1 = G__7484;
continue;
}
}
} else
{return null;
}
break;
}
});})(vec__7476,scale,pattern,degrees))
,null,null));
});})(vec__7476,scale,pattern,degrees))
;return iter__4379__auto__.call(null,degrees);
})();return res;
});
cljs.looperscript.interpret.vec_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"shuffle","shuffle",1261412160),new cljs.core.Keyword(null,"repeatedly","repeatedly",-440567070),new cljs.core.Keyword(null,"cycle","cycle",710365284),new cljs.core.Keyword(null,"walk","walk",32921637),new cljs.core.Keyword(null,"splice","splice",449588165),new cljs.core.Keyword(null,"rand","rand",908504774),new cljs.core.Keyword(null,"rand-hold","rand-hold",1221211378),new cljs.core.Keyword(null,"weight2","weight2",-1471744749),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"rand-range","rand-range",-1792793772),new cljs.core.Keyword(null,"rand-exp-range","rand-exp-range",1927268695),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"take","take",-768884900),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[cljs.core.partial.call(null,cljs.core.apply,cljs.core.shuffle),cljs.core.partial.call(null,cljs.core.apply,cljs.core.repeatedly),cljs.looperscript.interpret.cycle_STAR_,cljs.looperscript.interpret.rand_walk,cljs.looperscript.interpret.mark_for_splice,cljs.looperscript.interpret.rand_nth_STAR_,cljs.looperscript.interpret.rand_hold,cljs.looperscript.interpret.rand_weighted_zip,cljs.looperscript.interpret.rand_weighted,cljs.looperscript.interpret.rand_range,cljs.looperscript.interpret.rand_exp_range,cljs.looperscript.interpret.repeat_STAR_,cljs.looperscript.interpret.take_STAR_,cljs.looperscript.interpret.range_STAR_,cljs.looperscript.interpret.in$,cljs.looperscript.interpret.scale_pattern]);
/**
* @param {...*} var_args
*/
cljs.looperscript.interpret.process_vec = (function() { 
var process_vec__delegate = function (v){if(cljs.core.truth_(cljs.core.get.call(null,cljs.looperscript.interpret.vec_fns,cljs.core.first.call(null,v))))
{return cljs.core.get.call(null,cljs.looperscript.interpret.vec_fns,cljs.core.first.call(null,v)).call(null,cljs.core.rest.call(null,v));
} else
{if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,v),"#");if(and__3628__auto__)
{return cljs.core.get.call(null,cljs.looperscript.interpret.vec_fns,cljs.core.second.call(null,v));
} else
{return and__3628__auto__;
}
})()))
{return (function (){return cljs.core.get.call(null,cljs.looperscript.interpret.vec_fns,cljs.core.second.call(null,v)).call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,v)));
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
process_vec.cljs$lang$applyTo = (function (arglist__7485){
var v = cljs.core.seq(arglist__7485);
return process_vec__delegate(v);
});
process_vec.cljs$core$IFn$_invoke$arity$variadic = process_vec__delegate;
return process_vec;
})()
;
cljs.looperscript.interpret.grammar = "s = <sp*> params <sp*> part*\n      params = param*\n      <param> = (bpm | version) <sp*>\n      bpm = <'bpm'> <sp?> (number | fraction | vec)\n      version = <'version'> <sp?> #'[a-zA-Z0-9.]+'\n      vec = ('#' | '@')? <('[' | '(')> vec-code? (data-element | vec | sp)+ <(']' | ')')>\n      vec-code = ('rand' | 'shuffle' | 'range' | 'rand-range' | 'rand-exp-range' | 'take' |\n                  'in' | 'repeatedly' | 'x' | 'weight' | 'walk' | 'cycle' | 'log' | 'pattern' |\n                  'weight2' | 'rand-hold')\n      part = part-title <sp> aspect*\n      <part-title> = <'part'> sp (!aspect-keyword #'[a-zA-Z0-9_.-]+')\n      aspect = aspect-keyword data\n      aspect-keyword = ('time' | 'sound' | 'volume' | 'filter' | 'pan' | 'rate' | 'offset' |                              'synth' | 'overtones' | 'time+' | 'mute' | 'skip')\n      data = data-element+\n      <data-element> = (ratio | fraction | plus | number | sp | vec | drum-code |\n                        data-shorthand | synth-code)\n       <synth-code> = ('sawtooth' | 'sine' | 'square' | 'triangle')\n      <data-shorthand> = v\n      v = number <'v'> number\n      drum-code = #'[bcdhkrs]'\n      plus = <'+'> sp* (number | ratio)\n      fraction = number <'/'> number\n      ratio = number <':'> number\n      number = #'-?([0-9]*\\.[0-9]*|[0-9]+)'\n      <sp> = <#'[\\s,]+'>";
cljs.looperscript.interpret._looper_parse = instaparse.core.parser.call(null,cljs.looperscript.interpret.grammar);
cljs.looperscript.interpret.looper_parse = (function looper_parse(s){return cljs.looperscript.interpret._looper_parse.call(null,s);
});
cljs.looperscript.interpret.looper_transform = (function looper_transform(parse_tree){return instaparse.core.transform.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"aspect-keyword","aspect-keyword",1878628821),new cljs.core.Keyword(null,"bpm","bpm",-1042376389),new cljs.core.Keyword(null,"vec-code","vec-code",652666651),new cljs.core.Keyword(null,"data","data",-232669377)],[cljs.looperscript.interpret.handle_v_keyword,cljs.looperscript.interpret.process_vec,cljs.looperscript.interpret.string__GT_number,(function (n,d){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fraction","fraction",107940680),(n / d)], null);
}),(function() { 
var G__7495__delegate = function (part_name,aspects){return cljs.core.reduce.call(null,(function (m,p__7491){var vec__7492 = p__7491;var _ = cljs.core.nth.call(null,vec__7492,(0),null);var k = cljs.core.nth.call(null,vec__7492,(1),null);var v = cljs.core.nth.call(null,vec__7492,(2),null);return cljs.core.assoc.call(null,m,k,v);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),part_name], null),aspects);
};
var G__7495 = function (part_name,var_args){
var aspects = null;if (arguments.length > 1) {
  aspects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__7495__delegate.call(this,part_name,aspects);};
G__7495.cljs$lang$maxFixedArity = 1;
G__7495.cljs$lang$applyTo = (function (arglist__7496){
var part_name = cljs.core.first(arglist__7496);
var aspects = cljs.core.rest(arglist__7496);
return G__7495__delegate(part_name,aspects);
});
G__7495.cljs$core$IFn$_invoke$arity$variadic = G__7495__delegate;
return G__7495;
})()
,(function() { 
var G__7497__delegate = function (p){return cljs.core.reduce.call(null,(function (m,p__7493){var vec__7494 = p__7493;var k = cljs.core.nth.call(null,vec__7494,(0),null);var v = cljs.core.nth.call(null,vec__7494,(1),null);return cljs.core.assoc.call(null,m,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,p);
};
var G__7497 = function (var_args){
var p = null;if (arguments.length > 0) {
  p = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7497__delegate.call(this,p);};
G__7497.cljs$lang$maxFixedArity = 0;
G__7497.cljs$lang$applyTo = (function (arglist__7498){
var p = cljs.core.seq(arglist__7498);
return G__7497__delegate(p);
});
G__7497.cljs$core$IFn$_invoke$arity$variadic = G__7497__delegate;
return G__7497;
})()
,cljs.core.vector,(function (n,d){return cljs.looperscript.interpret.ratio__GT_note.call(null,(n / d));
}),cljs.core.keyword,(function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bpm","bpm",-1042376389),((60) / ((cljs.core.vector_QMARK_.call(null,x))?cljs.core.last.call(null,x):x))], null);
}),cljs.core.keyword,(function() { 
var G__7499__delegate = function (rest__7486_SHARP_){return cljs.looperscript.interpret.parse_data.call(null,cljs.looperscript.interpret.splice.call(null,rest__7486_SHARP_));
};
var G__7499 = function (var_args){
var rest__7486_SHARP_ = null;if (arguments.length > 0) {
  rest__7486_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7499__delegate.call(this,rest__7486_SHARP_);};
G__7499.cljs$lang$maxFixedArity = 0;
G__7499.cljs$lang$applyTo = (function (arglist__7500){
var rest__7486_SHARP_ = cljs.core.seq(arglist__7500);
return G__7499__delegate(rest__7486_SHARP_);
});
G__7499.cljs$core$IFn$_invoke$arity$variadic = G__7499__delegate;
return G__7499;
})()
]),parse_tree);
});
