// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.reduction');
goog.require('cljs.core');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.auto_flatten_seq');
instaparse.reduction.singleton_QMARK_ = (function singleton_QMARK_(s){return (cljs.core.seq.call(null,s)) && (cljs.core.not.call(null,cljs.core.next.call(null,s)));
});
instaparse.reduction.red = (function red(parser,f){return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"red","red",-969428204),f);
});
instaparse.reduction.raw_non_terminal_reduction = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"raw","raw",1604651272)], null);
instaparse.reduction.HiccupNonTerminalReduction = (function HiccupNonTerminalReduction(key){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),new cljs.core.Keyword(null,"key","key",-1516042587),key], null);
});
instaparse.reduction.EnliveNonTerminalReduction = (function EnliveNonTerminalReduction(key){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450),new cljs.core.Keyword(null,"enlive","enlive",1679023921),new cljs.core.Keyword(null,"key","key",-1516042587),key], null);
});
instaparse.reduction.reduction_types = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),instaparse.reduction.HiccupNonTerminalReduction,new cljs.core.Keyword(null,"enlive","enlive",1679023921),instaparse.reduction.EnliveNonTerminalReduction], null);
instaparse.reduction.node_builders = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enlive","enlive",1679023921),(function (tag,item){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"content","content",15833224),cljs.core._conj.call(null,cljs.core.List.EMPTY,item)], null);
}),new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),(function (tag,item){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,item], null);
})], null);
instaparse.reduction.standard_non_terminal_reduction = new cljs.core.Keyword(null,"hiccup","hiccup",1218876238);
instaparse.reduction.apply_reduction = (function apply_reduction(f,result){var G__13785 = (((new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450).cljs$core$IFn$_invoke$arity$1(f).fqn:null);switch (G__13785) {
case "enlive":
var content = instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.EMPTY,result);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"content","content",15833224),(((cljs.core.count.call(null,content) === (0)))?null:content)], null);

break;
case "hiccup":
return instaparse.auto_flatten_seq.convert_afs_to_vec.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.auto_flatten_seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(f)], null)),result));

break;
case "raw":
return instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.EMPTY,result);

break;
default:
return f.call(null,result);

}
});
instaparse.reduction.apply_standard_reductions = (function() {
var apply_standard_reductions = null;
var apply_standard_reductions__1 = (function (grammar){return apply_standard_reductions.call(null,instaparse.reduction.standard_non_terminal_reduction,grammar);
});
var apply_standard_reductions__2 = (function (reduction_type,grammar){var temp__4124__auto__ = instaparse.reduction.reduction_types.call(null,reduction_type);if(cljs.core.truth_(temp__4124__auto__))
{var reduction = temp__4124__auto__;return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4379__auto__ = ((function (reduction,temp__4124__auto__){
return (function iter__13795(s__13796){return (new cljs.core.LazySeq(null,((function (reduction,temp__4124__auto__){
return (function (){var s__13796__$1 = s__13796;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13796__$1);if(temp__4126__auto__)
{var s__13796__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13796__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__13796__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__13798 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__13797 = (0);while(true){
if((i__13797 < size__4378__auto__))
{var vec__13801 = cljs.core._nth.call(null,c__4377__auto__,i__13797);var k = cljs.core.nth.call(null,vec__13801,(0),null);var v = cljs.core.nth.call(null,vec__13801,(1),null);cljs.core.chunk_append.call(null,b__13798,(cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null)));
{
var G__13803 = (i__13797 + (1));
i__13797 = G__13803;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13798),iter__13795.call(null,cljs.core.chunk_rest.call(null,s__13796__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13798),null);
}
} else
{var vec__13802 = cljs.core.first.call(null,s__13796__$2);var k = cljs.core.nth.call(null,vec__13802,(0),null);var v = cljs.core.nth.call(null,vec__13802,(1),null);return cljs.core.cons.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null)),iter__13795.call(null,cljs.core.rest.call(null,s__13796__$2)));
}
} else
{return null;
}
break;
}
});})(reduction,temp__4124__auto__))
,null,null));
});})(reduction,temp__4124__auto__))
;return iter__4379__auto__.call(null,grammar);
})());
} else
{throw ("Invalid output format"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(reduction_type)+". Use :enlive or :hiccup.");
}
});
apply_standard_reductions = function(reduction_type,grammar){
switch(arguments.length){
case 1:
return apply_standard_reductions__1.call(this,reduction_type);
case 2:
return apply_standard_reductions__2.call(this,reduction_type,grammar);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply_standard_reductions.cljs$core$IFn$_invoke$arity$1 = apply_standard_reductions__1;
apply_standard_reductions.cljs$core$IFn$_invoke$arity$2 = apply_standard_reductions__2;
return apply_standard_reductions;
})()
;
