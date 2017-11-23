// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.interpret');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('instaparse.core');
goog.require('cljs.looperscript.vector_fns');
cljs.looperscript.interpret.log = (function cljs$looperscript$interpret$log(var_args){
var args__28885__auto__ = [];
var len__28878__auto___41448 = arguments.length;
var i__28879__auto___41449 = (0);
while(true){
if((i__28879__auto___41449 < len__28878__auto___41448)){
args__28885__auto__.push((arguments[i__28879__auto___41449]));

var G__41450 = (i__28879__auto___41449 + (1));
i__28879__auto___41449 = G__41450;
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

cljs.looperscript.interpret.log.cljs$lang$applyTo = (function (seq41447){
return cljs.looperscript.interpret.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41447));
});

cljs.looperscript.interpret.remove_comments = (function cljs$looperscript$interpret$remove_comments(s){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__41451_SHARP_){
return cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/^([^;]+)/,p1__41451_SHARP_)));
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
var G__41452 = cljs.core.into.call(null,accum,cljs.looperscript.interpret.splice.call(null,n));
var G__41453 = cljs.core.rest.call(null,rem);
accum = G__41452;
rem = G__41453;
continue;
} else {
var G__41454 = cljs.core.conj.call(null,accum,cljs.looperscript.interpret.splice.call(null,n));
var G__41455 = cljs.core.rest.call(null,rem);
accum = G__41454;
rem = G__41455;
continue;
}
} else {
var G__41456 = cljs.core.conj.call(null,accum,n);
var G__41457 = cljs.core.rest.call(null,rem);
accum = G__41456;
rem = G__41457;
continue;
}
}
break;
}
})(),cljs.core.meta.call(null,v));
});
cljs.looperscript.interpret.mark_for_splice = (function cljs$looperscript$interpret$mark_for_splice(col){
return cljs.core.with_meta.call(null,cljs.core.vec.call(null,col),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"splice","splice",449588165),true], null));
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
var vec__41461 = v__$1;
var a = cljs.core.nth.call(null,vec__41461,(0),null);
var b = cljs.core.nth.call(null,vec__41461,(1),null);
var r = cljs.core.vec.call(null,cljs.core.rest.call(null,v__$1));
var r2 = cljs.core.vec.call(null,cljs.core.drop.call(null,(2),v__$1));
var vec__41464 = cljs.core.map.call(null,((function (caroted_QMARK_,v__$1,vec__41461,a,b,r,r2){
return (function (p1__41458_SHARP_){
return cljs.core.get.call(null,cljs.looperscript.vector_fns.vec_fns,p1__41458_SHARP_);
});})(caroted_QMARK_,v__$1,vec__41461,a,b,r,r2))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
var afn = cljs.core.nth.call(null,vec__41464,(0),null);
var bfn = cljs.core.nth.call(null,vec__41464,(1),null);
var delve = ((function (caroted_QMARK_,v__$1,vec__41461,a,b,r,r2,vec__41464,afn,bfn){
return (function (p1__41459_SHARP_){
return cljs.looperscript.interpret.splice.call(null,cljs.core.map.call(null,((function (caroted_QMARK_,v__$1,vec__41461,a,b,r,r2,vec__41464,afn,bfn){
return (function (x){
return cljs.looperscript.interpret.maybe_process_vec.call(null,x,invade_carots_QMARK_);
});})(caroted_QMARK_,v__$1,vec__41461,a,b,r,r2,vec__41464,afn,bfn))
,p1__41459_SHARP_));
});})(caroted_QMARK_,v__$1,vec__41461,a,b,r,r2,vec__41464,afn,bfn))
;
return ((function (caroted_QMARK_,v__$1,vec__41461,a,b,r,r2,vec__41464,afn,bfn,delve){
return (function (p1__41460_SHARP_){
if(caroted_QMARK_){
return cljs.core.with_meta.call(null,p1__41460_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intact-for-sub-time","intact-for-sub-time",1903796476),new cljs.core.Keyword(null,"true","true",-1114210334)], null));
} else {
return p1__41460_SHARP_;
}
});})(caroted_QMARK_,v__$1,vec__41461,a,b,r,r2,vec__41464,afn,bfn,delve))
.call(null,(cljs.core.truth_(afn)?cljs.core.apply.call(null,afn,delve.call(null,r)):(cljs.core.truth_((function (){var and__27697__auto__ = cljs.core._EQ_.call(null,a,"#");
if(and__27697__auto__){
return bfn;
} else {
return and__27697__auto__;
}
})())?((function (caroted_QMARK_,v__$1,vec__41461,a,b,r,r2,vec__41464,afn,bfn,delve){
return (function (){
return cljs.core.apply.call(null,bfn,delve.call(null,r2));
});})(caroted_QMARK_,v__$1,vec__41461,a,b,r,r2,vec__41464,afn,bfn,delve))
:((cljs.core.sequential_QMARK_.call(null,v__$1))?delve.call(null,v__$1):v__$1
))));
});
cljs.looperscript.interpret.pre_process_to_eval__BANG_s = (function cljs$looperscript$interpret$pre_process_to_eval__BANG_s(v,invade_carots_QMARK_){
var vec__41469 = v;
var a = cljs.core.nth.call(null,vec__41469,(0),null);
var b = cljs.core.nth.call(null,vec__41469,(1),null);
var r = cljs.core.vec.call(null,cljs.core.rest.call(null,v));
var r2 = cljs.core.vec.call(null,cljs.core.drop.call(null,(2),v));
var delve = ((function (vec__41469,a,b,r,r2){
return (function (p1__41467_SHARP_){
return cljs.looperscript.interpret.splice.call(null,cljs.core.map.call(null,cljs.looperscript.interpret.maybe_process_vec,p1__41467_SHARP_));
});})(vec__41469,a,b,r,r2))
;
if(cljs.core._EQ_.call(null,a,"!")){
return cljs.looperscript.interpret.process_vec.call(null,r,invade_carots_QMARK_);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.mapv.call(null,((function (vec__41469,a,b,r,r2,delve){
return (function (p1__41468_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__41468_SHARP_)){
return cljs.looperscript.interpret.pre_process_to_eval__BANG_s.call(null,p1__41468_SHARP_,invade_carots_QMARK_);
} else {
return p1__41468_SHARP_;
}
});})(vec__41469,a,b,r,r2,delve))
,v);
} else {
return v;

}
}
});
cljs.looperscript.interpret.process_vec = (function cljs$looperscript$interpret$process_vec(var_args){
var G__41473 = arguments.length;
switch (G__41473) {
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
return cljs.core.reduce.call(null,(function (m__$1,p__41475){
var vec__41476 = p__41475;
var k = cljs.core.nth.call(null,vec__41476,(0),null);
var v = cljs.core.nth.call(null,vec__41476,(1),null);
var res = ((cljs.core.map_QMARK_.call(null,v))?cljs.looperscript.interpret.walk_map_applying_fn_to_vals.call(null,f,v):f.call(null,v));
return cljs.core.assoc.call(null,m__$1,k,res);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
cljs.looperscript.interpret.grammar = ["s = <sp*> params init? <sp*> parts\n  params = param*\n  parts = part*\n  <param> = (bpm | version) <sp*>\n  bpm = <'bpm'> <sp?> (number | fraction | vec)\n  version = <'version'> <sp?> #'[a-zA-Z0-9.]+'\n  vec = '^'? ('#' | '!')? <('[' | '(')> vec-code? (data-element | vec | sp |\n                                                    string | vec-code)* <(']' | ')')>\n  part = part-title <sp>* aspect*\n  init = <'init'> (<sp*> (vec | string))*\n  <part-title> = <'part'> sp (!aspect-keyword #'[a-zA-Z0-9_.-]+')\n  aspect = aspect-header data\n  aspect-header = full-aspect-name (sp* <'&'> sp* full-aspect-name)*\n  full-aspect-name = aspect-keyword (':' sub-aspect-keyword)*\n  aspect-keyword = ('time' | 'sound' | 'volume' | 'filter' | 'pan' | 'rate' | 'offset' |\n                               'synth' | 'overtones' | 'time+' | 'mute' | 'skip')\n  sub-aspect-keyword = ('time')\n  data = data-element+\n  <data-element> = (ratio | hz | modifier | number | sp | vec | drum-code |\n  data-shorthand | synth-code | string)\n  <synth-code> = ('sawtooth' | 'sine' | 'square' | 'triangle')\n  <data-shorthand> = v\n  v = number <'v'> number\n  drum-code = !vec-code #'[bcdhkrs]'\n  modifier = (plus-mod | fraction | mod-code)\n  mod-code = 'just'\n  plus-mod = <'+'> sp* (number | ratio | vec)\n  fraction = number <'/'> number\n  hz = (number | vec) sp* 'hz'\n  ratio = number <':'> number\n\n  vec-code = (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," | ",cljs.core.mapv.call(null,cljs.core.comp.call(null,(function (p1__41479_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,"'",p1__41479_SHARP_,"'");
}),cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.rest,cljs.core.str),cljs.core.keys.call(null,cljs.looperscript.vector_fns.vec_fns)))),") <sp>\n\n  string = <'\"'> #'([^\"]*)' <'\"'>\n  number = #'-?([0-9]*\\.[0-9]*|[0-9]+)'\n      <sp> = <#'[\\s,]+'>"].join('');
cljs.looperscript.interpret.looper_parse = instaparse.core.parser.call(null,cljs.looperscript.interpret.grammar);
cljs.looperscript.interpret.looper_transform = (function cljs$looperscript$interpret$looper_transform(parse_tree){
return cljs.looperscript.interpret.walk_map_applying_fn_to_vals.call(null,cljs.looperscript.interpret.process_vec,instaparse.core.transform.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"fraction","fraction",107940680),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"aspect-header","aspect-header",-1942088854),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"mod-code","mod-code",-1364300459),new cljs.core.Keyword(null,"aspect-keyword","aspect-keyword",1878628821),new cljs.core.Keyword(null,"bpm","bpm",-1042376389),new cljs.core.Keyword(null,"vec-code","vec-code",652666651),new cljs.core.Keyword(null,"sub-aspect-keyword","sub-aspect-keyword",1179720699),new cljs.core.Keyword(null,"full-aspect-name","full-aspect-name",-1425455074),new cljs.core.Keyword(null,"data","data",-232669377)],[cljs.looperscript.vector_fns.handle_v_keyword,cljs.core.vector,(function() { 
var G__41489__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),cljs.core.vec.call(null,args)], null);
};
var G__41489 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41490__i = 0, G__41490__a = new Array(arguments.length -  0);
while (G__41490__i < G__41490__a.length) {G__41490__a[G__41490__i] = arguments[G__41490__i + 0]; ++G__41490__i;}
  args = new cljs.core.IndexedSeq(G__41490__a,0,null);
} 
return G__41489__delegate.call(this,args);};
G__41489.cljs$lang$maxFixedArity = 0;
G__41489.cljs$lang$applyTo = (function (arglist__41491){
var args = cljs.core.seq(arglist__41491);
return G__41489__delegate(args);
});
G__41489.cljs$core$IFn$_invoke$arity$variadic = G__41489__delegate;
return G__41489;
})()
,cljs.looperscript.interpret.string__GT_number,(function (n,d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fraction","fraction",107940680),(n / d)], null);
}),(function() { 
var G__41492__delegate = function (part_name,aspects){
return cljs.core.reduce.call(null,(function (m,p__41481){
var vec__41482 = p__41481;
var _ = cljs.core.nth.call(null,vec__41482,(0),null);
var k = cljs.core.nth.call(null,vec__41482,(1),null);
var v = cljs.core.nth.call(null,vec__41482,(2),null);
return cljs.core.assoc.call(null,m,k,v);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),part_name], null),aspects);
};
var G__41492 = function (part_name,var_args){
var aspects = null;
if (arguments.length > 1) {
var G__41493__i = 0, G__41493__a = new Array(arguments.length -  1);
while (G__41493__i < G__41493__a.length) {G__41493__a[G__41493__i] = arguments[G__41493__i + 1]; ++G__41493__i;}
  aspects = new cljs.core.IndexedSeq(G__41493__a,0,null);
} 
return G__41492__delegate.call(this,part_name,aspects);};
G__41492.cljs$lang$maxFixedArity = 1;
G__41492.cljs$lang$applyTo = (function (arglist__41494){
var part_name = cljs.core.first(arglist__41494);
var aspects = cljs.core.rest(arglist__41494);
return G__41492__delegate(part_name,aspects);
});
G__41492.cljs$core$IFn$_invoke$arity$variadic = G__41492__delegate;
return G__41492;
})()
,cljs.core.vector,(function() { 
var G__41495__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parts","parts",849007691),cljs.core.reduce.call(null,(function (m,p){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p),p);
}),cljs.core.PersistentArrayMap.EMPTY,args)], null);
};
var G__41495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41496__i = 0, G__41496__a = new Array(arguments.length -  0);
while (G__41496__i < G__41496__a.length) {G__41496__a[G__41496__i] = arguments[G__41496__i + 0]; ++G__41496__i;}
  args = new cljs.core.IndexedSeq(G__41496__a,0,null);
} 
return G__41495__delegate.call(this,args);};
G__41495.cljs$lang$maxFixedArity = 0;
G__41495.cljs$lang$applyTo = (function (arglist__41497){
var args = cljs.core.seq(arglist__41497);
return G__41495__delegate(args);
});
G__41495.cljs$core$IFn$_invoke$arity$variadic = G__41495__delegate;
return G__41495;
})()
,(function() { 
var G__41498__delegate = function (p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.reduce.call(null,(function (m,p__41485){
var vec__41486 = p__41485;
var k = cljs.core.nth.call(null,vec__41486,(0),null);
var v = cljs.core.nth.call(null,vec__41486,(1),null);
return cljs.core.assoc.call(null,m,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,p)], null);
};
var G__41498 = function (var_args){
var p = null;
if (arguments.length > 0) {
var G__41499__i = 0, G__41499__a = new Array(arguments.length -  0);
while (G__41499__i < G__41499__a.length) {G__41499__a[G__41499__i] = arguments[G__41499__i + 0]; ++G__41499__i;}
  p = new cljs.core.IndexedSeq(G__41499__a,0,null);
} 
return G__41498__delegate.call(this,p);};
G__41498.cljs$lang$maxFixedArity = 0;
G__41498.cljs$lang$applyTo = (function (arglist__41500){
var p = cljs.core.seq(arglist__41500);
return G__41498__delegate(p);
});
G__41498.cljs$core$IFn$_invoke$arity$variadic = G__41498__delegate;
return G__41498;
})()
,cljs.looperscript.vector_fns.eval_str,(function() { 
var G__41501__delegate = function (args){
return cljs.core.reduce.call(null,(function (m,x){
return cljs.core.into.call(null,m,x);
}),cljs.core.PersistentArrayMap.EMPTY,args);
};
var G__41501 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41502__i = 0, G__41502__a = new Array(arguments.length -  0);
while (G__41502__i < G__41502__a.length) {G__41502__a[G__41502__i] = arguments[G__41502__i + 0]; ++G__41502__i;}
  args = new cljs.core.IndexedSeq(G__41502__a,0,null);
} 
return G__41501__delegate.call(this,args);};
G__41501.cljs$lang$maxFixedArity = 0;
G__41501.cljs$lang$applyTo = (function (arglist__41503){
var args = cljs.core.seq(arglist__41503);
return G__41501__delegate(args);
});
G__41501.cljs$core$IFn$_invoke$arity$variadic = G__41501__delegate;
return G__41501;
})()
,(function (n,d){
return cljs.looperscript.interpret.ratio__GT_note.call(null,(n / d));
}),cljs.core.comp.call(null,cljs.core.vector,cljs.core.keyword),cljs.core.keyword,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bpm","bpm",-1042376389),((60) / (((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"fraction","fraction",107940680))))?cljs.core.second.call(null,x):((cljs.core.vector_QMARK_.call(null,x))?cljs.looperscript.interpret.process_vec.call(null,x):x
)))], null);
}),cljs.core.keyword,cljs.core.keyword,(function() { 
var G__41504__delegate = function (args){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,args),(1))){
return cljs.core.first.call(null,args);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.nth.call(null,args,(2))], null);
}
};
var G__41504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41505__i = 0, G__41505__a = new Array(arguments.length -  0);
while (G__41505__i < G__41505__a.length) {G__41505__a[G__41505__i] = arguments[G__41505__i + 0]; ++G__41505__i;}
  args = new cljs.core.IndexedSeq(G__41505__a,0,null);
} 
return G__41504__delegate.call(this,args);};
G__41504.cljs$lang$maxFixedArity = 0;
G__41504.cljs$lang$applyTo = (function (arglist__41506){
var args = cljs.core.seq(arglist__41506);
return G__41504__delegate(args);
});
G__41504.cljs$core$IFn$_invoke$arity$variadic = G__41504__delegate;
return G__41504;
})()
,(function() { 
var G__41507__delegate = function (rest__41480_SHARP_){
return cljs.looperscript.interpret.splice.call(null,rest__41480_SHARP_);
};
var G__41507 = function (var_args){
var rest__41480_SHARP_ = null;
if (arguments.length > 0) {
var G__41508__i = 0, G__41508__a = new Array(arguments.length -  0);
while (G__41508__i < G__41508__a.length) {G__41508__a[G__41508__i] = arguments[G__41508__i + 0]; ++G__41508__i;}
  rest__41480_SHARP_ = new cljs.core.IndexedSeq(G__41508__a,0,null);
} 
return G__41507__delegate.call(this,rest__41480_SHARP_);};
G__41507.cljs$lang$maxFixedArity = 0;
G__41507.cljs$lang$applyTo = (function (arglist__41509){
var rest__41480_SHARP_ = cljs.core.seq(arglist__41509);
return G__41507__delegate(rest__41480_SHARP_);
});
G__41507.cljs$core$IFn$_invoke$arity$variadic = G__41507__delegate;
return G__41507;
})()
]),parse_tree));
});
cljs.looperscript.interpret.quick_test = (12345);

//# sourceMappingURL=interpret.js.map?rel=1511412196110
