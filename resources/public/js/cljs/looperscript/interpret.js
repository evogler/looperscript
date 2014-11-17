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
log.cljs$lang$applyTo = (function (arglist__17598){
var args = cljs.core.seq(arglist__17598);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
cljs.looperscript.interpret.remove_comments = (function remove_comments(s){return clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__17599_SHARP_){return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/^([^;]+)/,p1__17599_SHARP_)));
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
cljs.looperscript.interpret.apply_ops = (function apply_ops(n,ops){return cljs.core.reduce.call(null,(function (x,p__17602){var vec__17603 = p__17602;var op = cljs.core.nth.call(null,vec__17603,(0),null);var v = cljs.core.nth.call(null,vec__17603,(1),null);if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"*","*",-1294732318)))
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
var G__17605 = accum;
var G__17606 = cljs.core.rest.call(null,rem);
var G__17607 = cljs.core.conj.call(null,ops,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),cljs.core.second.call(null,x)], null));
accum = G__17605;
rem = G__17606;
ops = G__17607;
continue;
}
} else
{if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"plus","plus",211540661))))
{{
var G__17608 = accum;
var G__17609 = cljs.core.rest.call(null,rem);
var G__17610 = cljs.core.conj.call(null,ops,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883),cljs.core.second.call(null,x)], null));
accum = G__17608;
rem = G__17609;
ops = G__17610;
continue;
}
} else
{if(typeof x === 'number')
{{
var G__17611 = cljs.core.conj.call(null,accum,cljs.looperscript.interpret.apply_ops.call(null,x,ops));
var G__17612 = cljs.core.rest.call(null,rem);
var G__17613 = ops;
accum = G__17611;
rem = G__17612;
ops = G__17613;
continue;
}
} else
{if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"random2","random2",-402442624))))
{{
var G__17614 = cljs.core.conj.call(null,accum,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random2","random2",-402442624)], null),cljs.core.map.call(null,((function (accum,rem,ops,x){
return (function (p1__17604_SHARP_){return cljs.looperscript.interpret.apply_ops.call(null,p1__17604_SHARP_,ops);
});})(accum,rem,ops,x))
,cljs.core.rest.call(null,x))));
var G__17615 = cljs.core.rest.call(null,rem);
var G__17616 = ops;
accum = G__17614;
rem = G__17615;
ops = G__17616;
continue;
}
} else
{{
var G__17617 = cljs.core.conj.call(null,accum,x);
var G__17618 = cljs.core.rest.call(null,rem);
var G__17619 = ops;
accum = G__17617;
rem = G__17618;
ops = G__17619;
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
var G__17620 = cljs.core.into.call(null,accum,splice.call(null,n));
var G__17621 = cljs.core.rest.call(null,rem);
accum = G__17620;
rem = G__17621;
continue;
}
} else
{{
var G__17622 = cljs.core.conj.call(null,accum,splice.call(null,n));
var G__17623 = cljs.core.rest.call(null,rem);
accum = G__17622;
rem = G__17623;
continue;
}
}
} else
{{
var G__17624 = cljs.core.conj.call(null,accum,n);
var G__17625 = cljs.core.rest.call(null,rem);
accum = G__17624;
rem = G__17625;
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
cljs.looperscript.interpret.shuffle_STAR_ = (function shuffle_STAR_(v){return cljs.looperscript.interpret.mark_for_splice.call(null,cljs.core.shuffle.call(null,v));
});
cljs.looperscript.interpret.splice_fn = (function splice_fn(f){return (function (v){return cljs.looperscript.interpret.mark_for_splice.call(null,cljs.core.apply.call(null,f,v));
});
});
cljs.looperscript.interpret.range_STAR_ = (function range_STAR_(v){return cljs.looperscript.interpret.mark_for_splice.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.range).call(null,v));
});
cljs.looperscript.interpret.rand_range = (function rand_range(v){var vec__17627 = v;var floor = cljs.core.nth.call(null,vec__17627,(0),null);var ceil = cljs.core.nth.call(null,vec__17627,(1),null);return ((cljs.core.rand.call(null) * (ceil - floor)) + floor);
});
cljs.looperscript.interpret.rand_exp_range = (function rand_exp_range(v){var vec__17629 = v;var floor = cljs.core.nth.call(null,vec__17629,(0),null);var ceil = cljs.core.nth.call(null,vec__17629,(1),null);var exp = cljs.core.nth.call(null,vec__17629,(2),null);return ((Math.pow.call(null,cljs.core.rand.call(null),exp) * (ceil - floor)) + floor);
});
/**
* @param {...*} var_args
*/
cljs.looperscript.interpret.handle_v_keyword = (function() { 
var handle_v_keyword__delegate = function (v){return cljs.looperscript.interpret.mark_for_splice.call(null,(function (){var vec__17631 = v;var n = cljs.core.nth.call(null,vec__17631,(0),null);var d = cljs.core.nth.call(null,vec__17631,(1),null);return cljs.core.repeat.call(null,n,(d / n));
})());
};
var handle_v_keyword = function (var_args){
var v = null;if (arguments.length > 0) {
  v = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return handle_v_keyword__delegate.call(this,v);};
handle_v_keyword.cljs$lang$maxFixedArity = 0;
handle_v_keyword.cljs$lang$applyTo = (function (arglist__17632){
var v = cljs.core.seq(arglist__17632);
return handle_v_keyword__delegate(v);
});
handle_v_keyword.cljs$core$IFn$_invoke$arity$variadic = handle_v_keyword__delegate;
return handle_v_keyword;
})()
;
cljs.looperscript.interpret.vec_fns = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shuffle","shuffle",1261412160),cljs.looperscript.interpret.splice_fn.call(null,cljs.core.shuffle),new cljs.core.Keyword(null,"rand-range","rand-range",-1792793772),cljs.looperscript.interpret.rand_range,new cljs.core.Keyword(null,"rand-exp-range","rand-exp-range",1927268695),cljs.looperscript.interpret.rand_exp_range,new cljs.core.Keyword(null,"range","range",1639692286),cljs.looperscript.interpret.range_STAR_], null);
/**
* @param {...*} var_args
*/
cljs.looperscript.interpret.process_vec = (function() { 
var process_vec__delegate = function (v){cljs.looperscript.interpret.log.call(null,new cljs.core.Keyword(null,"process-vec","process-vec",1717764344),v);
return (function (p1__17633_SHARP_){var temp__4124__auto__ = cljs.core.get.call(null,cljs.looperscript.interpret.vec_fns,cljs.core.first.call(null,p1__17633_SHARP_));if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return f.call(null,cljs.core.rest.call(null,p1__17633_SHARP_));
} else
{return p1__17633_SHARP_;
}
}).call(null,cljs.looperscript.interpret.splice.call(null,v));
};
var process_vec = function (var_args){
var v = null;if (arguments.length > 0) {
  v = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return process_vec__delegate.call(this,v);};
process_vec.cljs$lang$maxFixedArity = 0;
process_vec.cljs$lang$applyTo = (function (arglist__17634){
var v = cljs.core.seq(arglist__17634);
return process_vec__delegate(v);
});
process_vec.cljs$core$IFn$_invoke$arity$variadic = process_vec__delegate;
return process_vec;
})()
;
cljs.looperscript.interpret._looper_parse = instaparse.core.parser.call(null,"s = <sp*> params <sp*> part*\n      params = param*\n      <param> = (bpm | version) <sp*>\n      bpm = <'bpm'> <sp?> (number | fraction)\n      version = <'version'> <sp?> #'[a-zA-Z0-9.]+'\n      vec = <'['> vec-code? (data-element | vec | sp)+ <']'>\n      vec-code = ('random1' | 'random2' | 'shuffle' | 'range' | 'rand-range' | 'rand-exp-range')\n      part = part-title <sp> aspect*\n      <part-title> = <'part'> sp (!aspect-keyword #'[a-zA-Z0-9_.-]+')\n      aspect = aspect-keyword data\n      aspect-keyword = ('time' | 'sound' | 'volume' | 'filter' | 'pan' | 'rate')\n      data = data-element+\n      <data-element> = (ratio | fraction | plus | number | sp | vec | drum-code | data-shorthand)\n      <data-shorthand> = v\n      v = number <'v'> number\n      drum-code = #'[bcdhkrs]'\n      plus = <'+'> sp* (number | ratio)\n      fraction = number <'/'> number\n      ratio = number <':'> number\n      number = #'-?([0-9]*\\.[0-9]*|[0-9]+)'\n      <sp> = <#'[\\s,]+'>");
cljs.looperscript.interpret.looper_parse = (function looper_parse(s){return cljs.looperscript.interpret._looper_parse.call(null,s);
});
cljs.looperscript.interpret.looper_transform = (function looper_transform(parse_tree){return instaparse.core.transform.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"aspect-keyword","aspect-keyword",1878628821),new cljs.core.Keyword(null,"bpm","bpm",-1042376389),new cljs.core.Keyword(null,"vec-code","vec-code",652666651),new cljs.core.Keyword(null,"data","data",-232669377)],[cljs.looperscript.interpret.handle_v_keyword,cljs.looperscript.interpret.process_vec,cljs.looperscript.interpret.string__GT_number,(function (n,d){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fraction","fraction",107940680),(n / d)], null);
}),(function() { 
var G__17644__delegate = function (part_name,aspects){return cljs.core.reduce.call(null,(function (m,p__17640){var vec__17641 = p__17640;var _ = cljs.core.nth.call(null,vec__17641,(0),null);var k = cljs.core.nth.call(null,vec__17641,(1),null);var v = cljs.core.nth.call(null,vec__17641,(2),null);return cljs.core.assoc.call(null,m,k,v);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),part_name], null),aspects);
};
var G__17644 = function (part_name,var_args){
var aspects = null;if (arguments.length > 1) {
  aspects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__17644__delegate.call(this,part_name,aspects);};
G__17644.cljs$lang$maxFixedArity = 1;
G__17644.cljs$lang$applyTo = (function (arglist__17645){
var part_name = cljs.core.first(arglist__17645);
var aspects = cljs.core.rest(arglist__17645);
return G__17644__delegate(part_name,aspects);
});
G__17644.cljs$core$IFn$_invoke$arity$variadic = G__17644__delegate;
return G__17644;
})()
,(function() { 
var G__17646__delegate = function (p){return cljs.core.reduce.call(null,(function (m,p__17642){var vec__17643 = p__17642;var k = cljs.core.nth.call(null,vec__17643,(0),null);var v = cljs.core.nth.call(null,vec__17643,(1),null);return cljs.core.assoc.call(null,m,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,p);
};
var G__17646 = function (var_args){
var p = null;if (arguments.length > 0) {
  p = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17646__delegate.call(this,p);};
G__17646.cljs$lang$maxFixedArity = 0;
G__17646.cljs$lang$applyTo = (function (arglist__17647){
var p = cljs.core.seq(arglist__17647);
return G__17646__delegate(p);
});
G__17646.cljs$core$IFn$_invoke$arity$variadic = G__17646__delegate;
return G__17646;
})()
,cljs.core.vector,(function (n,d){return cljs.looperscript.interpret.ratio__GT_note.call(null,(n / d));
}),cljs.core.keyword,(function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bpm","bpm",-1042376389),((60) / ((cljs.core.vector_QMARK_.call(null,x))?cljs.core.last.call(null,x):x))], null);
}),cljs.core.keyword,(function() { 
var G__17648__delegate = function (rest__17635_SHARP_){return cljs.looperscript.interpret.parse_data.call(null,cljs.looperscript.interpret.splice.call(null,rest__17635_SHARP_));
};
var G__17648 = function (var_args){
var rest__17635_SHARP_ = null;if (arguments.length > 0) {
  rest__17635_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17648__delegate.call(this,rest__17635_SHARP_);};
G__17648.cljs$lang$maxFixedArity = 0;
G__17648.cljs$lang$applyTo = (function (arglist__17649){
var rest__17635_SHARP_ = cljs.core.seq(arglist__17649);
return G__17648__delegate(rest__17635_SHARP_);
});
G__17648.cljs$core$IFn$_invoke$arity$variadic = G__17648__delegate;
return G__17648;
})()
]),parse_tree);
});
