// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.interpret');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('instaparse.core');
goog.require('cljs.looperscript.vector_fns');
cljs.looperscript.interpret.log = (function cljs$looperscript$interpret$log(var_args){
var args__28885__auto__ = [];
var len__28878__auto___67651 = arguments.length;
var i__28879__auto___67652 = (0);
while(true){
if((i__28879__auto___67652 < len__28878__auto___67651)){
args__28885__auto__.push((arguments[i__28879__auto___67652]));

var G__67653 = (i__28879__auto___67652 + (1));
i__28879__auto___67652 = G__67653;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.interpret.log.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.interpret.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(cljs.core.apply.call(null,cljs.core.str,args));
});

cljs.looperscript.interpret.log.cljs$lang$maxFixedArity = (0);

cljs.looperscript.interpret.log.cljs$lang$applyTo = (function (seq67650){
return cljs.looperscript.interpret.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67650));
});

cljs.looperscript.interpret.remove_comments = (function cljs$looperscript$interpret$remove_comments(s){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__67654_SHARP_){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/^([^;]+)/,p1__67654_SHARP_)));
}),clojure.string.split_lines.call(null,s)));
});
cljs.looperscript.interpret.string__GT_number = (function cljs$looperscript$interpret$string__GT_number(s){
return cljs.reader.read_string.call(null,(function (){var temp__4655__auto__ = cljs.core.re_find.call(null,/-0*(\.[0-9]+)/,s);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return ["-0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,n))].join('');
} else {
var temp__4655__auto____$1 = cljs.core.re_find.call(null,/(^\.[0-9]+)/,s);
if(cljs.core.truth_(temp__4655__auto____$1)){
var n = temp__4655__auto____$1;
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,n))].join('');
} else {
var temp__4655__auto____$2 = cljs.core.re_find.call(null,/^0+([0-9][0-9.]+)/,s);
if(cljs.core.truth_(temp__4655__auto____$2)){
var n = temp__4655__auto____$2;
return cljs.core.last.call(null,n);
} else {
var temp__4655__auto____$3 = cljs.core.re_find.call(null,/^-0+([0-9.]+)/,s);
if(cljs.core.truth_(temp__4655__auto____$3)){
var n = temp__4655__auto____$3;
return ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,n))].join('');
} else {
return s;
}
}
}
}
})());
});
cljs.looperscript.interpret.ratio__GT_note = (function cljs$looperscript$interpret$ratio__GT_note(r){
return ((Math.log(r) / Math.log((2))) * (12));
});
cljs.looperscript.interpret.splice = (function cljs$looperscript$interpret$splice(v){
return cljs.core.with_meta.call(null,(function (){var accum = cljs.core.PersistentVector.EMPTY;
var rem = v;
while(true){
if(cljs.core.empty_QMARK_.call(null,rem)){
return accum;
} else {
var n = cljs.core.first.call(null,rem);
if(cljs.core.vector_QMARK_.call(null,n)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"splice","splice",449588165).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,n)))){
var G__67655 = cljs.core.into.call(null,accum,cljs.looperscript.interpret.splice.call(null,n));
var G__67656 = cljs.core.rest.call(null,rem);
accum = G__67655;
rem = G__67656;
continue;
} else {
var G__67657 = cljs.core.conj.call(null,accum,cljs.looperscript.interpret.splice.call(null,n));
var G__67658 = cljs.core.rest.call(null,rem);
accum = G__67657;
rem = G__67658;
continue;
}
} else {
var G__67659 = cljs.core.conj.call(null,accum,n);
var G__67660 = cljs.core.rest.call(null,rem);
accum = G__67659;
rem = G__67660;
continue;
}
}
break;
}
})(),cljs.core.meta.call(null,v));
});
cljs.looperscript.interpret.maybe_process_vec = (function cljs$looperscript$interpret$maybe_process_vec(x,invade_carots_QMARK_){
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.looperscript.interpret._process_vec.call(null,x,invade_carots_QMARK_);
} else {
return x;

}
});
cljs.looperscript.interpret._process_vec = (function cljs$looperscript$interpret$_process_vec(v,invade_carots_QMARK_){
var caroted_QMARK_ = cljs.core._EQ_.call(null,cljs.core.first.call(null,v),"^");
var v__$1 = ((caroted_QMARK_)?cljs.core.rest.call(null,v):v);
var vec__67664 = v__$1;
var a = cljs.core.nth.call(null,vec__67664,(0),null);
var b = cljs.core.nth.call(null,vec__67664,(1),null);
var r = cljs.core.vec.call(null,cljs.core.rest.call(null,v__$1));
var r2 = cljs.core.vec.call(null,cljs.core.drop.call(null,(2),v__$1));
var vec__67667 = cljs.core.map.call(null,((function (caroted_QMARK_,v__$1,vec__67664,a,b,r,r2){
return (function (p1__67661_SHARP_){
return cljs.core.get.call(null,cljs.looperscript.vector_fns.vec_fns,p1__67661_SHARP_);
});})(caroted_QMARK_,v__$1,vec__67664,a,b,r,r2))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
var afn = cljs.core.nth.call(null,vec__67667,(0),null);
var bfn = cljs.core.nth.call(null,vec__67667,(1),null);
var delve = ((function (caroted_QMARK_,v__$1,vec__67664,a,b,r,r2,vec__67667,afn,bfn){
return (function (p1__67662_SHARP_){
return cljs.looperscript.interpret.splice.call(null,cljs.core.map.call(null,((function (caroted_QMARK_,v__$1,vec__67664,a,b,r,r2,vec__67667,afn,bfn){
return (function (x){
return cljs.looperscript.interpret.maybe_process_vec.call(null,x,invade_carots_QMARK_);
});})(caroted_QMARK_,v__$1,vec__67664,a,b,r,r2,vec__67667,afn,bfn))
,p1__67662_SHARP_));
});})(caroted_QMARK_,v__$1,vec__67664,a,b,r,r2,vec__67667,afn,bfn))
;
return ((function (caroted_QMARK_,v__$1,vec__67664,a,b,r,r2,vec__67667,afn,bfn,delve){
return (function (p1__67663_SHARP_){
if(caroted_QMARK_){
return cljs.core.with_meta.call(null,p1__67663_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intact-for-sub-time","intact-for-sub-time",1903796476),new cljs.core.Keyword(null,"true","true",-1114210334)], null));
} else {
return p1__67663_SHARP_;
}
});})(caroted_QMARK_,v__$1,vec__67664,a,b,r,r2,vec__67667,afn,bfn,delve))
.call(null,(cljs.core.truth_(afn)?cljs.core.apply.call(null,afn,delve.call(null,r)):(cljs.core.truth_((function (){var and__27697__auto__ = cljs.core._EQ_.call(null,a,"#");
if(and__27697__auto__){
return bfn;
} else {
return and__27697__auto__;
}
})())?((function (caroted_QMARK_,v__$1,vec__67664,a,b,r,r2,vec__67667,afn,bfn,delve){
return (function (){
return cljs.core.apply.call(null,bfn,delve.call(null,r2));
});})(caroted_QMARK_,v__$1,vec__67664,a,b,r,r2,vec__67667,afn,bfn,delve))
:((cljs.core.sequential_QMARK_.call(null,v__$1))?delve.call(null,v__$1):v__$1
))));
});
cljs.looperscript.interpret.pre_process_to_eval__BANG_s = (function cljs$looperscript$interpret$pre_process_to_eval__BANG_s(v,invade_carots_QMARK_){
var vec__67671 = v;
var a = cljs.core.nth.call(null,vec__67671,(0),null);
var b = cljs.core.nth.call(null,vec__67671,(1),null);
var r = cljs.core.vec.call(null,cljs.core.rest.call(null,v));
var r2 = cljs.core.vec.call(null,cljs.core.drop.call(null,(2),v));
if(cljs.core._EQ_.call(null,a,"!")){
return cljs.looperscript.interpret.process_vec.call(null,r,invade_carots_QMARK_);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.mapv.call(null,((function (vec__67671,a,b,r,r2){
return (function (p1__67670_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__67670_SHARP_)){
return cljs.looperscript.interpret.pre_process_to_eval__BANG_s.call(null,p1__67670_SHARP_,invade_carots_QMARK_);
} else {
return p1__67670_SHARP_;
}
});})(vec__67671,a,b,r,r2))
,v);
} else {
return v;

}
}
});
cljs.looperscript.interpret.process_vec = (function cljs$looperscript$interpret$process_vec(var_args){
var G__67675 = arguments.length;
switch (G__67675) {
case 1:
return cljs.looperscript.interpret.process_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.looperscript.interpret.process_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.looperscript.interpret.process_vec.cljs$core$IFn$_invoke$arity$1 = (function (args){
return cljs.looperscript.interpret.process_vec.call(null,args,false);
});

cljs.looperscript.interpret.process_vec.cljs$core$IFn$_invoke$arity$2 = (function (args,invade_carots_QMARK_){
if(!(cljs.core.sequential_QMARK_.call(null,args))){
return args;
} else {
return cljs.looperscript.interpret._process_vec.call(null,cljs.looperscript.interpret.pre_process_to_eval__BANG_s.call(null,args,invade_carots_QMARK_),invade_carots_QMARK_);
}
});

cljs.looperscript.interpret.process_vec.cljs$lang$maxFixedArity = 2;

cljs.looperscript.interpret.walk_map_applying_fn_to_vals = (function cljs$looperscript$interpret$walk_map_applying_fn_to_vals(f,m){
return cljs.core.reduce.call(null,(function (m__$1,p__67677){
var vec__67678 = p__67677;
var k = cljs.core.nth.call(null,vec__67678,(0),null);
var v = cljs.core.nth.call(null,vec__67678,(1),null);
var res = ((cljs.core.map_QMARK_.call(null,v))?cljs.looperscript.interpret.walk_map_applying_fn_to_vals.call(null,f,v):f.call(null,v));
return cljs.core.assoc.call(null,m__$1,k,res);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
cljs.looperscript.interpret.grammar = ["s = <sp*> params init? <sp*> parts\n  params = param*\n  parts = part*\n  <param> = (bpm | version) <sp*>\n  bpm = <'bpm'> <sp?> (number | fraction | vec)\n  version = <'version'> <sp?> #'[a-zA-Z0-9.]+'\n  vec = '^'? ('#' | '!')? <('[' | '(')> vec-code? (data-element | vec | sp |\n                                                  keyword | string | vec-code)* <(']' | ')')>\n  part = part-title <sp>* aspect*\n  init = <'init'> (<sp*> (vec | string))*\n  <part-title> = <'part'> sp (!aspect-keyword #'[a-zA-Z0-9_.-]+')\n  aspect = aspect-header data\n  aspect-header = full-aspect-name (sp* <'&'> sp* full-aspect-name)*\n  keyword = <':'> #'[a-zA-Z0-9_.-]+'\n  full-aspect-name = aspect-keyword (':' sub-aspect-keyword)*\n  aspect-keyword = ('time' | 'sound' | 'volume' | 'filter' | 'pan' | 'rate' | 'offset' |\n                               'synth' | 'overtones' | 'time+' | 'mute' | 'skip')\n  sub-aspect-keyword = ('time')\n  data = data-element+\n  <data-element> = (ratio | hz | modifier | number | sp | vec | drum-code |\n  data-shorthand | synth-code | string)\n  <synth-code> = ('sawtooth' | 'sine' | 'square' | 'triangle')\n  <data-shorthand> = v\n  v = number <'v'> number\n  drum-code = !vec-code #'[bcdhkrs]'\n  modifier = (plus-mod | fraction | mod-code)\n  mod-code = 'just'\n  plus-mod = <'+'> sp* (number | ratio | vec)\n  fraction = number <'/'> number\n  hz = (number | vec) sp* 'hz'\n  ratio = number <':'> number\n\n  vec-code = (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," | ",cljs.core.mapv.call(null,cljs.core.comp.call(null,(function (p1__67681_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,"'",p1__67681_SHARP_,"'");
}),cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.rest,cljs.core.str),cljs.core.keys.call(null,cljs.looperscript.vector_fns.vec_fns)))),") <sp>\n\n  string = <'\"'> #'([^\"]*)' <'\"'>\n  number = #'-?([0-9]*\\.[0-9]*|[0-9]+)'\n      <sp> = <#'[\\s,\\t]+'>"].join('');
cljs.looperscript.interpret.looper_parse = instaparse.core.parser.call(null,cljs.looperscript.interpret.grammar);
cljs.looperscript.interpret.looper_transform = (function cljs$looperscript$interpret$looper_transform(parse_tree){
return cljs.looperscript.interpret.walk_map_applying_fn_to_vals.call(null,cljs.looperscript.interpret.process_vec,instaparse.core.transform.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"aspect-header","aspect-header",-1942088854),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"mod-code","mod-code",-1364300459),new cljs.core.Keyword(null,"aspect-keyword","aspect-keyword",1878628821),new cljs.core.Keyword(null,"bpm","bpm",-1042376389),new cljs.core.Keyword(null,"vec-code","vec-code",652666651),new cljs.core.Keyword(null,"sub-aspect-keyword","sub-aspect-keyword",1179720699),new cljs.core.Keyword(null,"full-aspect-name","full-aspect-name",-1425455074),new cljs.core.Keyword(null,"data","data",-232669377)],[cljs.looperscript.vector_fns.handle_v_keyword,cljs.core.vector,(function() { 
var G__67691__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.vec.call(null,args)], null);
};
var G__67691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67692__i = 0, G__67692__a = new Array(arguments.length -  0);
while (G__67692__i < G__67692__a.length) {G__67692__a[G__67692__i] = arguments[G__67692__i + 0]; ++G__67692__i;}
  args = new cljs.core.IndexedSeq(G__67692__a,0,null);
} 
return G__67691__delegate.call(this,args);};
G__67691.cljs$lang$maxFixedArity = 0;
G__67691.cljs$lang$applyTo = (function (arglist__67693){
var args = cljs.core.seq(arglist__67693);
return G__67691__delegate(args);
});
G__67691.cljs$core$IFn$_invoke$arity$variadic = G__67691__delegate;
return G__67691;
})()
,cljs.looperscript.interpret.string__GT_number,(function (n,d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fraction","fraction",107940680),(n / d)], null);
}),(function() { 
var G__67694__delegate = function (part_name,aspects){
return cljs.core.reduce.call(null,(function (m,p__67683){
var vec__67684 = p__67683;
var _ = cljs.core.nth.call(null,vec__67684,(0),null);
var k = cljs.core.nth.call(null,vec__67684,(1),null);
var v = cljs.core.nth.call(null,vec__67684,(2),null);
return cljs.core.assoc.call(null,m,k,v);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),part_name], null),aspects);
};
var G__67694 = function (part_name,var_args){
var aspects = null;
if (arguments.length > 1) {
var G__67695__i = 0, G__67695__a = new Array(arguments.length -  1);
while (G__67695__i < G__67695__a.length) {G__67695__a[G__67695__i] = arguments[G__67695__i + 1]; ++G__67695__i;}
  aspects = new cljs.core.IndexedSeq(G__67695__a,0,null);
} 
return G__67694__delegate.call(this,part_name,aspects);};
G__67694.cljs$lang$maxFixedArity = 1;
G__67694.cljs$lang$applyTo = (function (arglist__67696){
var part_name = cljs.core.first(arglist__67696);
var aspects = cljs.core.rest(arglist__67696);
return G__67694__delegate(part_name,aspects);
});
G__67694.cljs$core$IFn$_invoke$arity$variadic = G__67694__delegate;
return G__67694;
})()
,cljs.core.vector,(function() { 
var G__67697__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parts","parts",849007691),cljs.core.reduce.call(null,(function (m,p){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p),p);
}),cljs.core.PersistentArrayMap.EMPTY,args)], null);
};
var G__67697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67698__i = 0, G__67698__a = new Array(arguments.length -  0);
while (G__67698__i < G__67698__a.length) {G__67698__a[G__67698__i] = arguments[G__67698__i + 0]; ++G__67698__i;}
  args = new cljs.core.IndexedSeq(G__67698__a,0,null);
} 
return G__67697__delegate.call(this,args);};
G__67697.cljs$lang$maxFixedArity = 0;
G__67697.cljs$lang$applyTo = (function (arglist__67699){
var args = cljs.core.seq(arglist__67699);
return G__67697__delegate(args);
});
G__67697.cljs$core$IFn$_invoke$arity$variadic = G__67697__delegate;
return G__67697;
})()
,(function() { 
var G__67700__delegate = function (p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.reduce.call(null,(function (m,p__67687){
var vec__67688 = p__67687;
var k = cljs.core.nth.call(null,vec__67688,(0),null);
var v = cljs.core.nth.call(null,vec__67688,(1),null);
return cljs.core.assoc.call(null,m,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,p)], null);
};
var G__67700 = function (var_args){
var p = null;
if (arguments.length > 0) {
var G__67701__i = 0, G__67701__a = new Array(arguments.length -  0);
while (G__67701__i < G__67701__a.length) {G__67701__a[G__67701__i] = arguments[G__67701__i + 0]; ++G__67701__i;}
  p = new cljs.core.IndexedSeq(G__67701__a,0,null);
} 
return G__67700__delegate.call(this,p);};
G__67700.cljs$lang$maxFixedArity = 0;
G__67700.cljs$lang$applyTo = (function (arglist__67702){
var p = cljs.core.seq(arglist__67702);
return G__67700__delegate(p);
});
G__67700.cljs$core$IFn$_invoke$arity$variadic = G__67700__delegate;
return G__67700;
})()
,cljs.looperscript.vector_fns.eval_str,(function() { 
var G__67703__delegate = function (args){
return cljs.core.reduce.call(null,(function (m,x){
return cljs.core.into.call(null,m,x);
}),cljs.core.PersistentArrayMap.EMPTY,args);
};
var G__67703 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67704__i = 0, G__67704__a = new Array(arguments.length -  0);
while (G__67704__i < G__67704__a.length) {G__67704__a[G__67704__i] = arguments[G__67704__i + 0]; ++G__67704__i;}
  args = new cljs.core.IndexedSeq(G__67704__a,0,null);
} 
return G__67703__delegate.call(this,args);};
G__67703.cljs$lang$maxFixedArity = 0;
G__67703.cljs$lang$applyTo = (function (arglist__67705){
var args = cljs.core.seq(arglist__67705);
return G__67703__delegate(args);
});
G__67703.cljs$core$IFn$_invoke$arity$variadic = G__67703__delegate;
return G__67703;
})()
,cljs.core.keyword,(function (n,d){
return cljs.looperscript.interpret.ratio__GT_note.call(null,(n / d));
}),cljs.core.comp.call(null,cljs.core.vector,cljs.core.keyword),cljs.core.keyword,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bpm","bpm",-1042376389),((60) / (((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"fraction","fraction",107940680))))?cljs.core.second.call(null,x):((cljs.core.vector_QMARK_.call(null,x))?cljs.looperscript.interpret.process_vec.call(null,x):x
)))], null);
}),cljs.core.keyword,cljs.core.keyword,(function() { 
var G__67706__delegate = function (args){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,args),(1))){
return cljs.core.first.call(null,args);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.nth.call(null,args,(2))], null);
}
};
var G__67706 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67707__i = 0, G__67707__a = new Array(arguments.length -  0);
while (G__67707__i < G__67707__a.length) {G__67707__a[G__67707__i] = arguments[G__67707__i + 0]; ++G__67707__i;}
  args = new cljs.core.IndexedSeq(G__67707__a,0,null);
} 
return G__67706__delegate.call(this,args);};
G__67706.cljs$lang$maxFixedArity = 0;
G__67706.cljs$lang$applyTo = (function (arglist__67708){
var args = cljs.core.seq(arglist__67708);
return G__67706__delegate(args);
});
G__67706.cljs$core$IFn$_invoke$arity$variadic = G__67706__delegate;
return G__67706;
})()
,(function() { 
var G__67709__delegate = function (rest__67682_SHARP_){
return cljs.looperscript.interpret.splice.call(null,rest__67682_SHARP_);
};
var G__67709 = function (var_args){
var rest__67682_SHARP_ = null;
if (arguments.length > 0) {
var G__67710__i = 0, G__67710__a = new Array(arguments.length -  0);
while (G__67710__i < G__67710__a.length) {G__67710__a[G__67710__i] = arguments[G__67710__i + 0]; ++G__67710__i;}
  rest__67682_SHARP_ = new cljs.core.IndexedSeq(G__67710__a,0,null);
} 
return G__67709__delegate.call(this,rest__67682_SHARP_);};
G__67709.cljs$lang$maxFixedArity = 0;
G__67709.cljs$lang$applyTo = (function (arglist__67711){
var rest__67682_SHARP_ = cljs.core.seq(arglist__67711);
return G__67709__delegate(rest__67682_SHARP_);
});
G__67709.cljs$core$IFn$_invoke$arity$variadic = G__67709__delegate;
return G__67709;
})()
]),parse_tree));
});
cljs.looperscript.interpret.quick_test = (12345);

//# sourceMappingURL=interpret.js.map?rel=1512869137338
