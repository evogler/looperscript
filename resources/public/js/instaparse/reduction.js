// Compiled by ClojureScript 1.9.908 {}
goog.provide('instaparse.reduction');
goog.require('cljs.core');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.util');
instaparse.reduction.singleton_QMARK_ = (function instaparse$reduction$singleton_QMARK_(s){
return (cljs.core.seq.call(null,s)) && (cljs.core.not.call(null,cljs.core.next.call(null,s)));
});
instaparse.reduction.red = (function instaparse$reduction$red(parser,f){
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"red","red",-969428204),f);
});
instaparse.reduction.raw_non_terminal_reduction = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null);
instaparse.reduction.HiccupNonTerminalReduction = (function instaparse$reduction$HiccupNonTerminalReduction(key){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),key], null);
});
instaparse.reduction.EnliveNonTerminalReduction = (function instaparse$reduction$EnliveNonTerminalReduction(key){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"enlive","enlive",1679023921),new cljs.core.Keyword(null,"key","key",-1516042587),key], null);
});
instaparse.reduction.reduction_types = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),instaparse.reduction.HiccupNonTerminalReduction,new cljs.core.Keyword(null,"enlive","enlive",1679023921),instaparse.reduction.EnliveNonTerminalReduction], null);
instaparse.reduction.node_builders = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enlive","enlive",1679023921),(function (tag,item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"content","content",15833224),(function (){var x__28798__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()], null);
}),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (tag,item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,item], null);
})], null);
instaparse.reduction.standard_non_terminal_reduction = new cljs.core.Keyword(null,"hiccup","hiccup",1218876238);
instaparse.reduction.apply_reduction = (function instaparse$reduction$apply_reduction(f,result){
var G__30148 = new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450).cljs$core$IFn$_invoke$arity$1(f);
var G__30148__$1 = (((G__30148 instanceof cljs.core.Keyword))?G__30148.fqn:null);
switch (G__30148__$1) {
case "raw":
return instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.EMPTY,result);

break;
case "hiccup":
return instaparse.auto_flatten_seq.convert_afs_to_vec.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.auto_flatten_seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(f)], null)),result));

break;
case "enlive":
var content = instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.EMPTY,result);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"content","content",15833224),(((cljs.core.count.call(null,content) === (0)))?null:content)], null);

break;
default:
return f.call(null,result);

}
});
instaparse.reduction.apply_standard_reductions = (function instaparse$reduction$apply_standard_reductions(var_args){
var G__30151 = arguments.length;
switch (G__30151) {
case 1:
return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$1 = (function (grammar){
return instaparse.reduction.apply_standard_reductions.call(null,instaparse.reduction.standard_non_terminal_reduction,grammar);
});

instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2 = (function (reduction_type,grammar){
var temp__4655__auto__ = instaparse.reduction.reduction_types.call(null,reduction_type);
if(cljs.core.truth_(temp__4655__auto__)){
var reduction = temp__4655__auto__;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28744__auto__ = ((function (reduction,temp__4655__auto__){
return (function instaparse$reduction$iter__30152(s__30153){
return (new cljs.core.LazySeq(null,((function (reduction,temp__4655__auto__){
return (function (){
var s__30153__$1 = s__30153;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30153__$1);
if(temp__4657__auto__){
var s__30153__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30153__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__30153__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__30155 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__30154 = (0);
while(true){
if((i__30154 < size__28743__auto__)){
var vec__30156 = cljs.core._nth.call(null,c__28742__auto__,i__30154);
var k = cljs.core.nth.call(null,vec__30156,(0),null);
var v = cljs.core.nth.call(null,vec__30156,(1),null);
cljs.core.chunk_append.call(null,b__30155,(cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null)));

var G__30163 = (i__30154 + (1));
i__30154 = G__30163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30155),instaparse$reduction$iter__30152.call(null,cljs.core.chunk_rest.call(null,s__30153__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30155),null);
}
} else {
var vec__30159 = cljs.core.first.call(null,s__30153__$2);
var k = cljs.core.nth.call(null,vec__30159,(0),null);
var v = cljs.core.nth.call(null,vec__30159,(1),null);
return cljs.core.cons.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null)),instaparse$reduction$iter__30152.call(null,cljs.core.rest.call(null,s__30153__$2)));
}
} else {
return null;
}
break;
}
});})(reduction,temp__4655__auto__))
,null,null));
});})(reduction,temp__4655__auto__))
;
return iter__28744__auto__.call(null,grammar);
})());
} else {
return instaparse.util.throw_illegal_argument_exception.call(null,"Invalid output format ",reduction_type,". Use :enlive or :hiccup.");
}
});

instaparse.reduction.apply_standard_reductions.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=reduction.js.map?rel=1509844999078
