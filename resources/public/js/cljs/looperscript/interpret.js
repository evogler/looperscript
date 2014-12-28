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
log.cljs$lang$applyTo = (function (arglist__21758){
var args = cljs.core.seq(arglist__21758);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
cljs.looperscript.interpret.remove_comments = (function remove_comments(s){return clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__21759_SHARP_){return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/^([^;]+)/,p1__21759_SHARP_)));
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
var G__21760 = cljs.core.into.call(null,accum,splice.call(null,n));
var G__21761 = cljs.core.rest.call(null,rem);
accum = G__21760;
rem = G__21761;
continue;
}
} else
{{
var G__21762 = cljs.core.conj.call(null,accum,splice.call(null,n));
var G__21763 = cljs.core.rest.call(null,rem);
accum = G__21762;
rem = G__21763;
continue;
}
}
} else
{{
var G__21764 = cljs.core.conj.call(null,accum,n);
var G__21765 = cljs.core.rest.call(null,rem);
accum = G__21764;
rem = G__21765;
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
cljs.looperscript.interpret.maybe_process_vec = (function maybe_process_vec(x){if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.looperscript.interpret._process_vec.call(null,x);
} else
{return x;

}
});
cljs.looperscript.interpret._process_vec = (function _process_vec(v){var vec__21770 = v;var a = cljs.core.nth.call(null,vec__21770,(0),null);var b = cljs.core.nth.call(null,vec__21770,(1),null);var r = cljs.core.vec.call(null,cljs.core.rest.call(null,v));var r2 = cljs.core.vec.call(null,cljs.core.drop.call(null,(2),v));var vec__21771 = cljs.core.map.call(null,((function (vec__21770,a,b,r,r2){
return (function (p1__21766_SHARP_){return cljs.core.get.call(null,cljs.looperscript.vector_fns.vec_fns,p1__21766_SHARP_);
});})(vec__21770,a,b,r,r2))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));var afn = cljs.core.nth.call(null,vec__21771,(0),null);var bfn = cljs.core.nth.call(null,vec__21771,(1),null);var delve = ((function (vec__21770,a,b,r,r2,vec__21771,afn,bfn){
return (function (p1__21767_SHARP_){return cljs.looperscript.interpret.splice.call(null,cljs.core.map.call(null,cljs.looperscript.interpret.maybe_process_vec,p1__21767_SHARP_));
});})(vec__21770,a,b,r,r2,vec__21771,afn,bfn))
;if(cljs.core.truth_(afn))
{return cljs.core.apply.call(null,afn,delve.call(null,r));
} else
{if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core._EQ_.call(null,a,"#");if(and__3628__auto__)
{return bfn;
} else
{return and__3628__auto__;
}
})()))
{return ((function (vec__21770,a,b,r,r2,vec__21771,afn,bfn,delve){
return (function (){return cljs.core.apply.call(null,bfn,delve.call(null,r2));
});
;})(vec__21770,a,b,r,r2,vec__21771,afn,bfn,delve))
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
cljs.looperscript.interpret.pre_process_to_eval__BANG_s = (function pre_process_to_eval__BANG_s(v){var vec__21775 = v;var a = cljs.core.nth.call(null,vec__21775,(0),null);var b = cljs.core.nth.call(null,vec__21775,(1),null);var r = cljs.core.vec.call(null,cljs.core.rest.call(null,v));var r2 = cljs.core.vec.call(null,cljs.core.drop.call(null,(2),v));var delve = ((function (vec__21775,a,b,r,r2){
return (function (p1__21772_SHARP_){return cljs.looperscript.interpret.splice.call(null,cljs.core.map.call(null,cljs.looperscript.interpret.maybe_process_vec,p1__21772_SHARP_));
});})(vec__21775,a,b,r,r2))
;if(cljs.core._EQ_.call(null,a,"!"))
{return cljs.looperscript.interpret._process_vec.call(null,r);
} else
{if(cljs.core.sequential_QMARK_.call(null,v))
{return cljs.core.mapv.call(null,((function (vec__21775,a,b,r,r2,delve){
return (function (p1__21773_SHARP_){if(cljs.core.sequential_QMARK_.call(null,p1__21773_SHARP_))
{return pre_process_to_eval__BANG_s.call(null,p1__21773_SHARP_);
} else
{return p1__21773_SHARP_;
}
});})(vec__21775,a,b,r,r2,delve))
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
cljs.looperscript.interpret.walk_map_applying_fn_to_vals = (function walk_map_applying_fn_to_vals(f,m){return cljs.core.reduce.call(null,(function (m__$1,p__21778){var vec__21779 = p__21778;var k = cljs.core.nth.call(null,vec__21779,(0),null);var v = cljs.core.nth.call(null,vec__21779,(1),null);var res = ((cljs.core.map_QMARK_.call(null,v))?walk_map_applying_fn_to_vals.call(null,f,v):f.call(null,v));return cljs.core.assoc.call(null,m__$1,k,res);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
cljs.looperscript.interpret.grammar = ("s = <sp*> params init? <sp*> parts\n  params = param*\n  parts = part*\n  <param> = (bpm | version) <sp*>\n  bpm = <'bpm'> <sp?> (number | fraction | vec)\n  version = <'version'> <sp?> #'[a-zA-Z0-9.]+'\n  vec = ('#' | '@' | '!')? <('[' | '(')> vec-code? (data-element | vec | sp |\n                                                    string | vec-code)* <(']' | ')')>\n  vec-code = ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," | ",cljs.core.mapv.call(null,cljs.core.comp.call(null,(function (p1__21780_SHARP_){return cljs.core.apply.call(null,cljs.core.str,"'",p1__21780_SHARP_,"'");
}),cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.rest,cljs.core.str),cljs.core.keys.call(null,cljs.looperscript.vector_fns.vec_fns))))+") <sp>\n  part = part-title <sp>* aspect*\n  init = <'init'> (<sp*> vec)*\n  <part-title> = <'part'> sp (!aspect-keyword #'[a-zA-Z0-9_.-]+')\n  aspect = aspect-header data\n  aspect-header = aspect-keyword (sp* <'&'> sp* aspect-keyword)*\n  aspect-keyword = ('time' | 'sound' | 'volume' | 'filter' | 'pan' | 'rate' | 'offset' |                              'synth' | 'overtones' | 'time+' | 'mute' | 'skip')\n  data = data-element+\n  <data-element> = (ratio | hz | modifier | number | sp | vec | drum-code |\n  data-shorthand | synth-code)\n  <synth-code> = ('sawtooth' | 'sine' | 'square' | 'triangle')\n  <data-shorthand> = v\n  v = number <'v'> number\n  drum-code = #'[bcdhkrs]'\n  modifier = (plus | fraction | mod-code)\n  mod-code = 'just'\n  plus = <'+'> sp* (number | ratio | vec)\n  fraction = number <'/'> number\n  hz = (number | vec) sp* 'hz'\n  ratio = number <':'> number\n  string = <'\"'> #'([^\"]*)' <'\"'>\n  number = #'-?([0-9]*\\.[0-9]*|[0-9]+)'\n      <sp> = <#'[\\s,]+'>");
cljs.looperscript.interpret.looper_parse = instaparse.core.parser.call(null,cljs.looperscript.interpret.grammar);
cljs.looperscript.interpret.looper_transform = (function looper_transform(parse_tree){return cljs.looperscript.interpret.walk_map_applying_fn_to_vals.call(null,cljs.looperscript.interpret.process_vec,instaparse.core.transform.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"aspect-header","aspect-header",-1942088854),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"mod-code","mod-code",-1364300459),new cljs.core.Keyword(null,"aspect-keyword","aspect-keyword",1878628821),new cljs.core.Keyword(null,"bpm","bpm",-1042376389),new cljs.core.Keyword(null,"vec-code","vec-code",652666651),new cljs.core.Keyword(null,"data","data",-232669377)],[cljs.looperscript.vector_fns.handle_v_keyword,cljs.core.vector,(function() { 
var G__21790__delegate = function (args){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.vec.call(null,args)], null);
};
var G__21790 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21790__delegate.call(this,args);};
G__21790.cljs$lang$maxFixedArity = 0;
G__21790.cljs$lang$applyTo = (function (arglist__21791){
var args = cljs.core.seq(arglist__21791);
return G__21790__delegate(args);
});
G__21790.cljs$core$IFn$_invoke$arity$variadic = G__21790__delegate;
return G__21790;
})()
,cljs.looperscript.interpret.string__GT_number,(function (n,d){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fraction","fraction",107940680),(n / d)], null);
}),(function() { 
var G__21792__delegate = function (part_name,aspects){return cljs.core.reduce.call(null,(function (m,p__21786){var vec__21787 = p__21786;var _ = cljs.core.nth.call(null,vec__21787,(0),null);var k = cljs.core.nth.call(null,vec__21787,(1),null);var v = cljs.core.nth.call(null,vec__21787,(2),null);return cljs.core.assoc.call(null,m,k,v);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),part_name], null),aspects);
};
var G__21792 = function (part_name,var_args){
var aspects = null;if (arguments.length > 1) {
  aspects = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__21792__delegate.call(this,part_name,aspects);};
G__21792.cljs$lang$maxFixedArity = 1;
G__21792.cljs$lang$applyTo = (function (arglist__21793){
var part_name = cljs.core.first(arglist__21793);
var aspects = cljs.core.rest(arglist__21793);
return G__21792__delegate(part_name,aspects);
});
G__21792.cljs$core$IFn$_invoke$arity$variadic = G__21792__delegate;
return G__21792;
})()
,cljs.core.vector,(function() { 
var G__21794__delegate = function (args){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parts","parts",849007691),cljs.core.reduce.call(null,(function (m,p){return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p),p);
}),cljs.core.PersistentArrayMap.EMPTY,args)], null);
};
var G__21794 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21794__delegate.call(this,args);};
G__21794.cljs$lang$maxFixedArity = 0;
G__21794.cljs$lang$applyTo = (function (arglist__21795){
var args = cljs.core.seq(arglist__21795);
return G__21794__delegate(args);
});
G__21794.cljs$core$IFn$_invoke$arity$variadic = G__21794__delegate;
return G__21794;
})()
,(function() { 
var G__21796__delegate = function (p){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.reduce.call(null,(function (m,p__21788){var vec__21789 = p__21788;var k = cljs.core.nth.call(null,vec__21789,(0),null);var v = cljs.core.nth.call(null,vec__21789,(1),null);return cljs.core.assoc.call(null,m,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,p)], null);
};
var G__21796 = function (var_args){
var p = null;if (arguments.length > 0) {
  p = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21796__delegate.call(this,p);};
G__21796.cljs$lang$maxFixedArity = 0;
G__21796.cljs$lang$applyTo = (function (arglist__21797){
var p = cljs.core.seq(arglist__21797);
return G__21796__delegate(p);
});
G__21796.cljs$core$IFn$_invoke$arity$variadic = G__21796__delegate;
return G__21796;
})()
,cljs.core.str,(function() { 
var G__21798__delegate = function (args){return cljs.core.reduce.call(null,(function (m,x){return cljs.core.into.call(null,m,x);
}),cljs.core.PersistentArrayMap.EMPTY,args);
};
var G__21798 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21798__delegate.call(this,args);};
G__21798.cljs$lang$maxFixedArity = 0;
G__21798.cljs$lang$applyTo = (function (arglist__21799){
var args = cljs.core.seq(arglist__21799);
return G__21798__delegate(args);
});
G__21798.cljs$core$IFn$_invoke$arity$variadic = G__21798__delegate;
return G__21798;
})()
,(function (n,d){return cljs.looperscript.interpret.ratio__GT_note.call(null,(n / d));
}),cljs.core.comp.call(null,cljs.core.vector,cljs.core.keyword),cljs.core.keyword,(function (x){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bpm","bpm",-1042376389),((60) / (((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"fraction","fraction",107940680))))?cljs.core.second.call(null,x):((cljs.core.vector_QMARK_.call(null,x))?cljs.looperscript.interpret.process_vec.call(null,x):x
)))], null);
}),cljs.core.keyword,(function() { 
var G__21800__delegate = function (rest__21781_SHARP_){return cljs.looperscript.interpret.splice.call(null,rest__21781_SHARP_);
};
var G__21800 = function (var_args){
var rest__21781_SHARP_ = null;if (arguments.length > 0) {
  rest__21781_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21800__delegate.call(this,rest__21781_SHARP_);};
G__21800.cljs$lang$maxFixedArity = 0;
G__21800.cljs$lang$applyTo = (function (arglist__21801){
var rest__21781_SHARP_ = cljs.core.seq(arglist__21801);
return G__21800__delegate(rest__21781_SHARP_);
});
G__21800.cljs$core$IFn$_invoke$arity$variadic = G__21800__delegate;
return G__21800;
})()
]),parse_tree));
});
