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
cljs.looperscript.iterator.vec_push_BANG_ = (function vec_push_BANG_(stack,v){var seq__15596 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));var chunk__15597 = null;var count__15598 = (0);var i__15599 = (0);while(true){
if((i__15599 < count__15598))
{var i = cljs.core._nth.call(null,chunk__15597,i__15599);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__15600 = seq__15596;
var G__15601 = chunk__15597;
var G__15602 = count__15598;
var G__15603 = (i__15599 + (1));
seq__15596 = G__15600;
chunk__15597 = G__15601;
count__15598 = G__15602;
i__15599 = G__15603;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15596);if(temp__4126__auto__)
{var seq__15596__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15596__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__15596__$1);{
var G__15604 = cljs.core.chunk_rest.call(null,seq__15596__$1);
var G__15605 = c__4410__auto__;
var G__15606 = cljs.core.count.call(null,c__4410__auto__);
var G__15607 = (0);
seq__15596 = G__15604;
chunk__15597 = G__15605;
count__15598 = G__15606;
i__15599 = G__15607;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__15596__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__15608 = cljs.core.next.call(null,seq__15596__$1);
var G__15609 = null;
var G__15610 = (0);
var G__15611 = (0);
seq__15596 = G__15608;
chunk__15597 = G__15609;
count__15598 = G__15610;
i__15599 = G__15611;
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
var G__15612 = r.call(null);
r = G__15612;
continue;
}
} else
{return r;
}
break;
}
});
cljs.looperscript.iterator.get_next_stack_val = (function get_next_stack_val(stack){var x = cljs.looperscript.iterator.dethunk.call(null,cljs.looperscript.iterator._pop_BANG_.call(null,stack));if(((cljs.core.seq_QMARK_.call(null,x)) || (cljs.core.vector_QMARK_.call(null,x))) && (!((cljs.core.first.call(null,x) instanceof cljs.core.Keyword))))
{var seq__15617_15621 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x));var chunk__15618_15622 = null;var count__15619_15623 = (0);var i__15620_15624 = (0);while(true){
if((i__15620_15624 < count__15619_15623))
{var i_15625 = cljs.core._nth.call(null,chunk__15618_15622,i__15620_15624);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_15625);
{
var G__15626 = seq__15617_15621;
var G__15627 = chunk__15618_15622;
var G__15628 = count__15619_15623;
var G__15629 = (i__15620_15624 + (1));
seq__15617_15621 = G__15626;
chunk__15618_15622 = G__15627;
count__15619_15623 = G__15628;
i__15620_15624 = G__15629;
continue;
}
} else
{var temp__4126__auto___15630 = cljs.core.seq.call(null,seq__15617_15621);if(temp__4126__auto___15630)
{var seq__15617_15631__$1 = temp__4126__auto___15630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15617_15631__$1))
{var c__4410__auto___15632 = cljs.core.chunk_first.call(null,seq__15617_15631__$1);{
var G__15633 = cljs.core.chunk_rest.call(null,seq__15617_15631__$1);
var G__15634 = c__4410__auto___15632;
var G__15635 = cljs.core.count.call(null,c__4410__auto___15632);
var G__15636 = (0);
seq__15617_15621 = G__15633;
chunk__15618_15622 = G__15634;
count__15619_15623 = G__15635;
i__15620_15624 = G__15636;
continue;
}
} else
{var i_15637 = cljs.core.first.call(null,seq__15617_15631__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_15637);
{
var G__15638 = cljs.core.next.call(null,seq__15617_15631__$1);
var G__15639 = null;
var G__15640 = (0);
var G__15641 = (0);
seq__15617_15621 = G__15638;
chunk__15618_15622 = G__15639;
count__15619_15623 = G__15640;
i__15620_15624 = G__15641;
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
cljs.looperscript.iterator.justify = (function justify(n){var p = cljs.core.mod.call(null,n,(12));var oct = (n - p);var vec__15643 = cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(11),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)]),p);var num = cljs.core.nth.call(null,vec__15643,(0),null);var den = cljs.core.nth.call(null,vec__15643,(1),null);if(cljs.core.not.call(null,num))
{return n;
} else
{return (oct + ((12) * (Math.log.call(null,(num / den)) / Math.log.call(null,(2)))));
}
});
cljs.looperscript.iterator.apply_modifiers = (function apply_modifiers(mods,x){return cljs.core.reduce.call(null,(function (n,m){var pred__15647 = cljs.core._EQ_;var expr__15648 = cljs.core.keyword.call(null,cljs.core.first.call(null,m));if(cljs.core.truth_(pred__15647.call(null,new cljs.core.Keyword(null,"fraction","fraction",107940680),expr__15648)))
{return (n * cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__15647.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),expr__15648)))
{return (n + cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__15647.call(null,new cljs.core.Keyword(null,"just","just",466318146),expr__15648)))
{return cljs.looperscript.iterator.justify.call(null,n);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15648))));
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
var x = cljs.looperscript.iterator.get_next_stack_val.call(null,stack);if(cljs.looperscript.iterator.modifier_QMARK_.call(null,x))
{cljs.core.swap_BANG_.call(null,modifiers,cljs.core.conj,cljs.core.map.call(null,cljs.looperscript.iterator.dethunk,cljs.core.second.call(null,x)));
{
continue;
}
} else
{return cljs.looperscript.iterator.apply_modifiers.call(null,cljs.core.deref.call(null,modifiers),x);
}
break;
}
});
;})(stack,modifiers))
});
