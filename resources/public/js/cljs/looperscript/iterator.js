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
cljs.looperscript.iterator.vec_push_BANG_ = (function vec_push_BANG_(stack,v){var seq__36482 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));var chunk__36483 = null;var count__36484 = (0);var i__36485 = (0);while(true){
if((i__36485 < count__36484))
{var i = cljs.core._nth.call(null,chunk__36483,i__36485);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__36486 = seq__36482;
var G__36487 = chunk__36483;
var G__36488 = count__36484;
var G__36489 = (i__36485 + (1));
seq__36482 = G__36486;
chunk__36483 = G__36487;
count__36484 = G__36488;
i__36485 = G__36489;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__36482);if(temp__4126__auto__)
{var seq__36482__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36482__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__36482__$1);{
var G__36490 = cljs.core.chunk_rest.call(null,seq__36482__$1);
var G__36491 = c__4410__auto__;
var G__36492 = cljs.core.count.call(null,c__4410__auto__);
var G__36493 = (0);
seq__36482 = G__36490;
chunk__36483 = G__36491;
count__36484 = G__36492;
i__36485 = G__36493;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__36482__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__36494 = cljs.core.next.call(null,seq__36482__$1);
var G__36495 = null;
var G__36496 = (0);
var G__36497 = (0);
seq__36482 = G__36494;
chunk__36483 = G__36495;
count__36484 = G__36496;
i__36485 = G__36497;
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
var G__36498 = r.call(null);
r = G__36498;
continue;
}
} else
{return r;
}
break;
}
});
cljs.looperscript.iterator.get_next_stack_val = (function get_next_stack_val(stack){var x = cljs.looperscript.iterator.dethunk.call(null,cljs.looperscript.iterator._pop_BANG_.call(null,stack));if(((cljs.core.seq_QMARK_.call(null,x)) || (cljs.core.vector_QMARK_.call(null,x))) && (!((cljs.core.first.call(null,x) instanceof cljs.core.Keyword))))
{var seq__36503_36507 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x));var chunk__36504_36508 = null;var count__36505_36509 = (0);var i__36506_36510 = (0);while(true){
if((i__36506_36510 < count__36505_36509))
{var i_36511 = cljs.core._nth.call(null,chunk__36504_36508,i__36506_36510);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_36511);
{
var G__36512 = seq__36503_36507;
var G__36513 = chunk__36504_36508;
var G__36514 = count__36505_36509;
var G__36515 = (i__36506_36510 + (1));
seq__36503_36507 = G__36512;
chunk__36504_36508 = G__36513;
count__36505_36509 = G__36514;
i__36506_36510 = G__36515;
continue;
}
} else
{var temp__4126__auto___36516 = cljs.core.seq.call(null,seq__36503_36507);if(temp__4126__auto___36516)
{var seq__36503_36517__$1 = temp__4126__auto___36516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36503_36517__$1))
{var c__4410__auto___36518 = cljs.core.chunk_first.call(null,seq__36503_36517__$1);{
var G__36519 = cljs.core.chunk_rest.call(null,seq__36503_36517__$1);
var G__36520 = c__4410__auto___36518;
var G__36521 = cljs.core.count.call(null,c__4410__auto___36518);
var G__36522 = (0);
seq__36503_36507 = G__36519;
chunk__36504_36508 = G__36520;
count__36505_36509 = G__36521;
i__36506_36510 = G__36522;
continue;
}
} else
{var i_36523 = cljs.core.first.call(null,seq__36503_36517__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_36523);
{
var G__36524 = cljs.core.next.call(null,seq__36503_36517__$1);
var G__36525 = null;
var G__36526 = (0);
var G__36527 = (0);
seq__36503_36507 = G__36524;
chunk__36504_36508 = G__36525;
count__36505_36509 = G__36526;
i__36506_36510 = G__36527;
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
cljs.looperscript.iterator.justify = (function justify(n){var p = cljs.core.mod.call(null,n,(12));var oct = (n - p);var vec__36529 = cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(11),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)]),p);var num = cljs.core.nth.call(null,vec__36529,(0),null);var den = cljs.core.nth.call(null,vec__36529,(1),null);if(cljs.core.not.call(null,num))
{return n;
} else
{return (oct + ((12) * (Math.log.call(null,(num / den)) / Math.log.call(null,(2)))));
}
});
cljs.looperscript.iterator.apply_modifiers = (function apply_modifiers(mods,x){return cljs.core.reduce.call(null,(function (n,m){if(cljs.core.fn_QMARK_.call(null,m))
{return m.call(null,n);
} else
{var pred__36533 = cljs.core._EQ_;var expr__36534 = cljs.core.keyword.call(null,cljs.core.first.call(null,m));if(cljs.core.truth_(pred__36533.call(null,new cljs.core.Keyword(null,"fraction","fraction",107940680),expr__36534)))
{return (n * cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__36533.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),expr__36534)))
{return (n + cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__36533.call(null,new cljs.core.Keyword(null,"just","just",466318146),expr__36534)))
{return cljs.looperscript.iterator.justify.call(null,n);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36534))));
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
var x = cljs.looperscript.iterator.get_next_stack_val.call(null,stack);if(cljs.looperscript.iterator.modifier_fn_QMARK_.call(null,x))
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
break;
}
});
;})(stack,modifiers))
});
