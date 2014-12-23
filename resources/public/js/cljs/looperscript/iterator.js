// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.iterator');
goog.require('cljs.core');
goog.require('cljs.looperscript.logging');
goog.require('cljs.looperscript.logging');
cljs.looperscript.iterator._pop_BANG_ = (function _pop_BANG_(stack){var res = cljs.core.last.call(null,cljs.core.deref.call(null,stack));cljs.core.swap_BANG_.call(null,stack,cljs.core.comp.call(null,cljs.core.vec,cljs.core.drop_last));
return res;
});
cljs.looperscript.iterator.push_BANG_ = (function push_BANG_(stack,x){if(!((x == null)))
{return cljs.core.swap_BANG_.call(null,stack,cljs.core.conj,x);
} else
{return null;
}
});
cljs.looperscript.iterator.vec_push_BANG_ = (function vec_push_BANG_(stack,v){var seq__6251 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));var chunk__6252 = null;var count__6253 = (0);var i__6254 = (0);while(true){
if((i__6254 < count__6253))
{var i = cljs.core._nth.call(null,chunk__6252,i__6254);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__6255 = seq__6251;
var G__6256 = chunk__6252;
var G__6257 = count__6253;
var G__6258 = (i__6254 + (1));
seq__6251 = G__6255;
chunk__6252 = G__6256;
count__6253 = G__6257;
i__6254 = G__6258;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6251);if(temp__4126__auto__)
{var seq__6251__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6251__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__6251__$1);{
var G__6259 = cljs.core.chunk_rest.call(null,seq__6251__$1);
var G__6260 = c__4410__auto__;
var G__6261 = cljs.core.count.call(null,c__4410__auto__);
var G__6262 = (0);
seq__6251 = G__6259;
chunk__6252 = G__6260;
count__6253 = G__6261;
i__6254 = G__6262;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__6251__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__6263 = cljs.core.next.call(null,seq__6251__$1);
var G__6264 = null;
var G__6265 = (0);
var G__6266 = (0);
seq__6251 = G__6263;
chunk__6252 = G__6264;
count__6253 = G__6265;
i__6254 = G__6266;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.looperscript.iterator.dethunk = (function dethunk(x){var r = x;while(true){
if(cljs.core.fn_QMARK_.call(null,r))
{{
var G__6267 = r.call(null);
r = G__6267;
continue;
}
} else
{return r;
}
break;
}
});
cljs.looperscript.iterator.get_next_stack_val = (function get_next_stack_val(stack){var x = cljs.looperscript.iterator.dethunk.call(null,cljs.looperscript.iterator._pop_BANG_.call(null,stack));if(((cljs.core.seq_QMARK_.call(null,x)) || (cljs.core.vector_QMARK_.call(null,x))) && (!((cljs.core.first.call(null,x) instanceof cljs.core.Keyword))))
{var seq__6272_6276 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x));var chunk__6273_6277 = null;var count__6274_6278 = (0);var i__6275_6279 = (0);while(true){
if((i__6275_6279 < count__6274_6278))
{var i_6280 = cljs.core._nth.call(null,chunk__6273_6277,i__6275_6279);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_6280);
{
var G__6281 = seq__6272_6276;
var G__6282 = chunk__6273_6277;
var G__6283 = count__6274_6278;
var G__6284 = (i__6275_6279 + (1));
seq__6272_6276 = G__6281;
chunk__6273_6277 = G__6282;
count__6274_6278 = G__6283;
i__6275_6279 = G__6284;
continue;
}
} else
{var temp__4126__auto___6285 = cljs.core.seq.call(null,seq__6272_6276);if(temp__4126__auto___6285)
{var seq__6272_6286__$1 = temp__4126__auto___6285;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6272_6286__$1))
{var c__4410__auto___6287 = cljs.core.chunk_first.call(null,seq__6272_6286__$1);{
var G__6288 = cljs.core.chunk_rest.call(null,seq__6272_6286__$1);
var G__6289 = c__4410__auto___6287;
var G__6290 = cljs.core.count.call(null,c__4410__auto___6287);
var G__6291 = (0);
seq__6272_6276 = G__6288;
chunk__6273_6277 = G__6289;
count__6274_6278 = G__6290;
i__6275_6279 = G__6291;
continue;
}
} else
{var i_6292 = cljs.core.first.call(null,seq__6272_6286__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_6292);
{
var G__6293 = cljs.core.next.call(null,seq__6272_6286__$1);
var G__6294 = null;
var G__6295 = (0);
var G__6296 = (0);
seq__6272_6276 = G__6293;
chunk__6273_6277 = G__6294;
count__6274_6278 = G__6295;
i__6275_6279 = G__6296;
continue;
}
}
} else
{}
}
break;
}
return get_next_stack_val.call(null,stack);
} else
{return x;
}
});
cljs.looperscript.iterator.modifier_QMARK_ = (function modifier_QMARK_(x){return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"modifier","modifier",1634442788)));
});
cljs.looperscript.iterator.modifier_fn_QMARK_ = (function modifier_fn_QMARK_(x){return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"modifier-fn","modifier-fn",-1624543303)));
});
cljs.looperscript.iterator.justify = (function justify(n){var p = cljs.core.mod.call(null,n,(12));var oct = (n - p);var vec__6298 = cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(11),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)]),p);var num = cljs.core.nth.call(null,vec__6298,(0),null);var den = cljs.core.nth.call(null,vec__6298,(1),null);if(cljs.core.not.call(null,num))
{return n;
} else
{return (oct + ((12) * (Math.log.call(null,(num / den)) / Math.log.call(null,(2)))));
}
});
cljs.looperscript.iterator.apply_modifiers = (function apply_modifiers(mods,x){return cljs.core.reduce.call(null,(function (n,m){if(cljs.core.fn_QMARK_.call(null,m))
{return m.call(null,n);
} else
{var pred__6302 = cljs.core._EQ_;var expr__6303 = cljs.core.keyword.call(null,cljs.core.first.call(null,m));if(cljs.core.truth_(pred__6302.call(null,new cljs.core.Keyword(null,"fraction","fraction",107940680),expr__6303)))
{return (n * cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__6302.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),expr__6303)))
{return (n + cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__6302.call(null,new cljs.core.Keyword(null,"just","just",466318146),expr__6303)))
{return cljs.looperscript.iterator.justify.call(null,n);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6303))));
}
}
}
}
}),x,mods);
});
cljs.looperscript.iterator.iterator = (function iterator(v){var stack = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var modifiers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);return ((function (stack,modifiers){
return (function (){while(true){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,stack)))
{cljs.core.reset_BANG_.call(null,modifiers,cljs.core.PersistentVector.EMPTY);
cljs.looperscript.iterator.vec_push_BANG_.call(null,stack,v);
} else
{}
var x = cljs.looperscript.iterator.get_next_stack_val.call(null,stack);if(((x == null)) || ((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.empty_QMARK_.call(null,x))))
{{
continue;
}
} else
{if(cljs.looperscript.iterator.modifier_fn_QMARK_.call(null,x))
{cljs.core.swap_BANG_.call(null,modifiers,cljs.core.conj,cljs.core.second.call(null,x));
{
continue;
}
} else
{if(cljs.looperscript.iterator.modifier_QMARK_.call(null,x))
{cljs.core.swap_BANG_.call(null,modifiers,cljs.core.conj,cljs.core.map.call(null,cljs.looperscript.iterator.dethunk,cljs.core.second.call(null,x)));
{
continue;
}
} else
{return cljs.looperscript.iterator.apply_modifiers.call(null,cljs.core.deref.call(null,modifiers),x);

}
}
}
break;
}
});
;})(stack,modifiers))
});
