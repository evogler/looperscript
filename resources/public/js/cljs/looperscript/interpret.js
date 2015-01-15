// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.interpret');
goog.require('cljs.core');
goog.require('cljs.looperscript.vector_fns');
goog.require('cljs.reader');
goog.require('cljs.looperscript.vector_fns');
goog.require('cljs.looperscript.vector_fns');
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
log.cljs$lang$applyTo = (function (arglist__29795){
var args = cljs.core.seq(arglist__29795);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
cljs.looperscript.interpret.remove_comments = (function remove_comments(s){return clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__29796_SHARP_){return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/^([^;]+)/,p1__29796_SHARP_)));
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
var G__29797 = cljs.core.into.call(null,accum,splice.call(null,n));
var G__29798 = cljs.core.rest.call(null,rem);
accum = G__29797;
rem = G__29798;
continue;
}
} else
{{
var G__29799 = cljs.core.conj.call(null,accum,splice.call(null,n));
var G__29800 = cljs.core.rest.call(null,rem);
accum = G__29799;
rem = G__29800;
continue;
}
}
} else
{{
var G__29801 = cljs.core.conj.call(null,accum,n);
var G__29802 = cljs.core.rest.call(null,rem);
accum = G__29801;
rem = G__29802;
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
cljs.looperscript.interpret.maybe_process_vec = (function maybe_process_vec(x,invade_carots_QMARK_){if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.looperscript.interpret._process_vec.call(null,x,invade_carots_QMARK_);
} else
{return x;

}
});
cljs.looperscript.interpret._process_vec = (function _process_vec(v,invade_carots_QMARK_){var caroted_QMARK_ = cljs.core._EQ_.call(null,cljs.core.first.call(null,v),"^");var v__$1 = ((caroted_QMARK_)?cljs.core.rest.call(null,v):v);var vec__29808 = v__$1;var a = cljs.core.nth.call(null,vec__29808,(0),null);var b = cljs.core.nth.call(null,vec__29808,(1),null);var r = cljs.core.vec.call(null,cljs.core.rest.call(null,v__$1));var r2 = cljs.core.vec.call(null,cljs.core.drop.call(null,(2),v__$1));var vec__29809 = cljs.core.map.call(null,((function (caroted_QMARK_,v__$1,vec__29808,a,b,r,r2){
return (function (p1__29803_SHARP_){return cljs.core.get.call(null,cljs.looperscript.vector_fns.vec_fns,p1__29803_SHARP_);
});})(caroted_QMARK_,v__$1,vec__29808,a,b,r,r2))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));var afn = cljs.core.nth.call(null,vec__29809,(0),null);var bfn = cljs.core.nth.call(null,vec__29809,(1),null);var delve = ((function (caroted_QMARK_,v__$1,vec__29808,a,b,r,r2,vec__29809,afn,bfn){
return (function (p1__29804_SHARP_){return cljs.looperscript.interpret.splice.call(null,cljs.core.map.call(null,((function (caroted_QMARK_,v__$1,vec__29808,a,b,r,r2,vec__29809,afn,bfn){
return (function (x){return cljs.looperscript.interpret.maybe_process_vec.call(null,x,invade_carots_QMARK_);
});})(caroted_QMARK_,v__$1,vec__29808,a,b,r,r2,vec__29809,afn,bfn))
,p1__29804_SHARP_));
});})(caroted_QMARK_,v__$1,vec__29808,a,b,r,r2,vec__29809,afn,bfn))
;return ((function (caroted_QMARK_,v__$1,vec__29808,a,b,r,r2,vec__29809,afn,bfn,delve){
return (function (p1__29805_SHARP_){if(caroted_QMARK_)
{return cljs.core.with_meta.call(null,p1__29805_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intact-for-sub-time","intact-for-sub-time",1903796476),new cljs.core.Keyword(null,"true","true",-1114210334)], null));
} else
{return p1__29805_SHARP_;
}
});})(caroted_QMARK_,v__$1,vec__29808,a,b,r,r2,vec__29809,afn,bfn,delve))
.call(null,(cljs.core.truth_(afn)?cljs.core.apply.call(null,afn,delve.call(null,r)):(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core._EQ_.call(null,a,"#");if(and__3628__auto__)
{return bfn;
} else
{return and__3628__auto__;
}
})())?((function (caroted_QMARK_,v__$1,vec__29808,a,b,r,r2,vec__29809,afn,bfn,delve){
return (function (){return cljs.core.apply.call(null,bfn,delve.call(null,r2));
});})(caroted_QMARK_,v__$1,vec__29808,a,b,r,r2,vec__29809,afn,bfn,delve))
:((cljs.core.sequential_QMARK_.call(null,v__$1))?delve.call(null,v__$1):v__$1
))));
});
cljs.looperscript.interpret.pre_process_to_eval__BANG_s = (function pre_process_to_eval__BANG_s(v,invade_carots_QMARK_){var vec__29813 = v;var a = cljs.core.nth.call(null,vec__29813,(0),null);var b = cljs.core.nth.call(null,vec__29813,(1),null);var r = cljs.core.vec.call(null,cljs.core.rest.call(null,v));var r2 = cljs.core.vec.call(null,cljs.core.drop.call(null,(2),v));var delve = ((function (vec__29813,a,b,r,r2){
return (function (p1__29810_SHARP_){return cljs.looperscript.interpret.splice.call(null,cljs.core.map.call(null,cljs.looperscript.interpret.maybe_process_vec,p1__29810_SHARP_));
});})(vec__29813,a,b,r,r2))
;if(cljs.core._EQ_.call(null,a,"!"))
{return cljs.looperscript.interpret.process_vec.call(null,r,invade_carots_QMARK_);
} else
{if(cljs.core.sequential_QMARK_.call(null,v))
{return cljs.core.mapv.call(null,((function (vec__29813,a,b,r,r2,delve){
return (function (p1__29811_SHARP_){if(cljs.core.sequential_QMARK_.call(null,p1__29811_SHARP_))
{return pre_process_to_eval__BANG_s.call(null,p1__29811_SHARP_,invade_carots_QMARK_);
} else
{return p1__29811_SHARP_;
}
});})(vec__29813,a,b,r,r2,delve))
,v);
} else
{return v;

}
}
});
cljs.looperscript.interpret.process_vec = (function() {
var process_vec = null;
var process_vec__1 = (function (args){return process_vec.call(null,args,false);
});
var process_vec__2 = (function (args,invade_carots_QMARK_){if(!(cljs.core.sequential_QMARK_.call(null,args)))
{return args;
} else
{return cljs.looperscript.interpret._process_vec.call(null,cljs.looperscript.interpret.pre_process_to_eval__BANG_s.call(null,args,invade_carots_QMARK_),invade_carots_QMARK_);
}
});
process_vec = function(args,invade_carots_QMARK_){
switch(arguments.length){
case 1:
return process_vec__1.call(this,args);
case 2:
return process_vec__2.call(this,args,invade_carots_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
process_vec.cljs$core$IFn$_invoke$arity$1 = process_vec__1;
process_vec.cljs$core$IFn$_invoke$arity$2 = process_vec__2;
return process_vec;
})()
;
cljs.looperscript.interpret.walk_map_applying_fn_to_vals = (function walk_map_applying_fn_to_vals(f,m){return cljs.core.reduce.call(null,(function (m__$1,p__29816){var vec__29817 = p__29816;var k = cljs.core.nth.call(null,vec__29817,(0),null);var v = cljs.core.nth.call(null,vec__29817,(1),null);var res = ((cljs.core.map_QMARK_.call(null,v))?walk_map_applying_fn_to_vals.call(null,f,v):f.call(null,v));return cljs.core.assoc.call(null,m__$1,k,res);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
cljs.looperscript.interpret.grammar = ("s = <sp*> params init? <sp*> parts\n  params = param*\n  parts = part*\n  <param> = (bpm | version) <sp*>\n  bpm = <'bpm'> <sp?> (number | fraction | vec)\n  version = <'version'> <sp?> #'[a-zA-Z0-9.]+'\n  vec = '^'? ('#' | '!')? <('[' | '(')> vec-code? (data-element | vec | sp |\n                                                    string | vec-code)* <(']' | ')')>\n  part = part-title <sp>* aspect*\n  init = <'init'> (<sp*> vec)*\n  <part-title> = <'part'> sp (!aspect-keyword #'[a-zA-Z0-9_.-]+')\n  aspect = aspect-header data\n  aspect-header = full-aspect-name (sp* <'&'> sp* full-aspect-name)*\n  full-aspect-name = aspect-keyword (':' sub-aspect-keyword)*\n  aspect-keyword = ('time' | 'sound' | 'volume' | 'filter' | 'pan' | 'rate' | 'offset' |                              'synth' | 'overtones' | 'time+' | 'mute' | 'skip')\n  sub-aspect-keyword = ('time')\n  data = data-element+\n  <data-element> = (ratio | hz | modifier | number | sp | vec | drum-code |\n  data-shorthand | synth-code)\n  <synth-code> = ('sawtooth' | 'sine' | 'square' | 'triangle')\n  <data-shorthand> = v\n  v = number <'v'> number\n  drum-code = !vec-code #'[bcdhkrs]'\n  modifier = (plus-mod | fraction | mod-code)\n  mod-code = 'just'\n  plus-mod = <'+'> sp* (number | ratio | vec)\n  fraction = number <'/'> number\n  hz = (number | vec) sp* 'hz'\n  ratio = number <':'> number\n\n  vec-code = ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," | ",cljs.core.mapv.call(null,cljs.core.comp.call(null,(function (p1__29818_SHARP_){return cljs.core.apply.call(null,cljs.core.str,"'",p1__29818_SHARP_,"'");
}),cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.rest,cljs.core.str),cljs.core.keys.call(null,cljs.looperscript.vector_fns.vec_fns))))+") <sp>\n\n\n  string = <'\"'> #'([^\"]*)' <'\"'>\n  number = #'-?([0-9]*\\.[0-9]*|[0-9]+)'\n      <sp> = <#'[\\s,]+'>");
cljs.looperscript.interpret.looper_parse = instaparse.core.parser.call(null,cljs.looperscript.interpret.grammar);
cljs.looperscript.interpret.looper_transform = (function looper_transform(parse_tree){return cljs.looperscript.interpret.walk_map_applying_fn_to_vals.call(null,cljs.looperscript.interpret.process_vec,instaparse.core.transform.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"aspect-header","aspect-header",-1942088854),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"mod-code","mod-code",-1364300459),new cljs.core.Keyword(null,"aspect-keyword","aspect-keyword",1878628821),new cljs.core.Keyword(null,"bpm","bpm",-1042376389),new cljs.core.Keyword(null,"vec-code","vec-code",652666651),new cljs.core.Keyword(null,"sub-aspect-keyword","sub-aspect-keyword",1179720699),new cljs.core.Keyword(null,"full-aspect-name","full-aspect-name",-1425455074),new cljs.core.Keyword(null,"data","data",-232669377)],[cljs.looperscript.vector_fns.handle_v_keyword,cljs.core.vector,(function() { 
var G__29828__delegate = function (args){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.vec.call(null,args)], null);
};
var G__29828 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29828__delegate.call(this,args);};
G__29828.cljs$lang$maxFixedArity = 0;
G__29828.cljs$lang$applyTo = (function (arglist__29829){
var args = cljs.core.seq(arglist__29829);
return G__29828__delegate(args);
});
G__29828.cljs$core$IFn$_invoke$arity$variadic = G__29828__delegate;
return G__29828;
})()
,cljs.looperscript.interpret.string__GT_number,(function (n,d){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fraction","fraction",107940680),(n / d)], null);
}),(function() { 
var G__29830__delegate = function (part_name,aspects){return cljs.core.reduce.call(null,(function (m,p__29824){var vec__29825 = p__29824;var _ = cljs.core.nth.call(null,vec__29825,(0),null);var k = cljs.core.nth.call(null,vec__29825,(1),null);var v = cljs.core.nth.call(null,vec__29825,(2),null);return cljs.core.assoc.call(null,m,k,v);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),part_name], null),aspects);
};
var G__29830 = function (part_name,var_args){
var aspects = null;if (arguments.length > 1) {
  aspects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__29830__delegate.call(this,part_name,aspects);};
G__29830.cljs$lang$maxFixedArity = 1;
G__29830.cljs$lang$applyTo = (function (arglist__29831){
var part_name = cljs.core.first(arglist__29831);
var aspects = cljs.core.rest(arglist__29831);
return G__29830__delegate(part_name,aspects);
});
G__29830.cljs$core$IFn$_invoke$arity$variadic = G__29830__delegate;
return G__29830;
})()
,cljs.core.vector,(function() { 
var G__29832__delegate = function (args){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parts","parts",849007691),cljs.core.reduce.call(null,(function (m,p){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p),p);
}),cljs.core.PersistentArrayMap.EMPTY,args)], null);
};
var G__29832 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29832__delegate.call(this,args);};
G__29832.cljs$lang$maxFixedArity = 0;
G__29832.cljs$lang$applyTo = (function (arglist__29833){
var args = cljs.core.seq(arglist__29833);
return G__29832__delegate(args);
});
G__29832.cljs$core$IFn$_invoke$arity$variadic = G__29832__delegate;
return G__29832;
})()
,(function() { 
var G__29834__delegate = function (p){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.reduce.call(null,(function (m,p__29826){var vec__29827 = p__29826;var k = cljs.core.nth.call(null,vec__29827,(0),null);var v = cljs.core.nth.call(null,vec__29827,(1),null);return cljs.core.assoc.call(null,m,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,p)], null);
};
var G__29834 = function (var_args){
var p = null;if (arguments.length > 0) {
  p = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29834__delegate.call(this,p);};
G__29834.cljs$lang$maxFixedArity = 0;
G__29834.cljs$lang$applyTo = (function (arglist__29835){
var p = cljs.core.seq(arglist__29835);
return G__29834__delegate(p);
});
G__29834.cljs$core$IFn$_invoke$arity$variadic = G__29834__delegate;
return G__29834;
})()
,cljs.core.str,(function() { 
var G__29836__delegate = function (args){return cljs.core.reduce.call(null,(function (m,x){return cljs.core.into.call(null,m,x);
}),cljs.core.PersistentArrayMap.EMPTY,args);
};
var G__29836 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29836__delegate.call(this,args);};
G__29836.cljs$lang$maxFixedArity = 0;
G__29836.cljs$lang$applyTo = (function (arglist__29837){
var args = cljs.core.seq(arglist__29837);
return G__29836__delegate(args);
});
G__29836.cljs$core$IFn$_invoke$arity$variadic = G__29836__delegate;
return G__29836;
})()
,(function (n,d){return cljs.looperscript.interpret.ratio__GT_note.call(null,(n / d));
}),cljs.core.comp.call(null,cljs.core.vector,cljs.core.keyword),cljs.core.keyword,(function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bpm","bpm",-1042376389),((60) / (((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"fraction","fraction",107940680))))?cljs.core.second.call(null,x):((cljs.core.vector_QMARK_.call(null,x))?cljs.looperscript.interpret.process_vec.call(null,x):x
)))], null);
}),cljs.core.keyword,cljs.core.keyword,(function() { 
var G__29838__delegate = function (args){if(cljs.core._EQ_.call(null,cljs.core.count.call(null,args),(1)))
{return cljs.core.first.call(null,args);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.nth.call(null,args,(2))], null);
}
};
var G__29838 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29838__delegate.call(this,args);};
G__29838.cljs$lang$maxFixedArity = 0;
G__29838.cljs$lang$applyTo = (function (arglist__29839){
var args = cljs.core.seq(arglist__29839);
return G__29838__delegate(args);
});
G__29838.cljs$core$IFn$_invoke$arity$variadic = G__29838__delegate;
return G__29838;
})()
,(function() { 
var G__29840__delegate = function (rest__29819_SHARP_){return cljs.looperscript.interpret.splice.call(null,rest__29819_SHARP_);
};
var G__29840 = function (var_args){
var rest__29819_SHARP_ = null;if (arguments.length > 0) {
  rest__29819_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29840__delegate.call(this,rest__29819_SHARP_);};
G__29840.cljs$lang$maxFixedArity = 0;
G__29840.cljs$lang$applyTo = (function (arglist__29841){
var rest__29819_SHARP_ = cljs.core.seq(arglist__29841);
return G__29840__delegate(rest__29819_SHARP_);
});
G__29840.cljs$core$IFn$_invoke$arity$variadic = G__29840__delegate;
return G__29840;
})()
]),parse_tree));
});
