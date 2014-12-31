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
cljs.looperscript.iterator.vec_push_BANG_ = (function vec_push_BANG_(stack,v){var seq__26706 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));var chunk__26707 = null;var count__26708 = (0);var i__26709 = (0);while(true){
if((i__26709 < count__26708))
{var i = cljs.core._nth.call(null,chunk__26707,i__26709);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__26710 = seq__26706;
var G__26711 = chunk__26707;
var G__26712 = count__26708;
var G__26713 = (i__26709 + (1));
seq__26706 = G__26710;
chunk__26707 = G__26711;
count__26708 = G__26712;
i__26709 = G__26713;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26706);if(temp__4126__auto__)
{var seq__26706__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26706__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__26706__$1);{
var G__26714 = cljs.core.chunk_rest.call(null,seq__26706__$1);
var G__26715 = c__4410__auto__;
var G__26716 = cljs.core.count.call(null,c__4410__auto__);
var G__26717 = (0);
seq__26706 = G__26714;
chunk__26707 = G__26715;
count__26708 = G__26716;
i__26709 = G__26717;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__26706__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__26718 = cljs.core.next.call(null,seq__26706__$1);
var G__26719 = null;
var G__26720 = (0);
var G__26721 = (0);
seq__26706 = G__26718;
chunk__26707 = G__26719;
count__26708 = G__26720;
i__26709 = G__26721;
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
var G__26722 = r.call(null);
r = G__26722;
continue;
}
} else
{return r;
}
break;
}
});
cljs.looperscript.iterator.get_next_stack_val = (function get_next_stack_val(stack){var x = cljs.looperscript.iterator.dethunk.call(null,cljs.looperscript.iterator._pop_BANG_.call(null,stack));if(((cljs.core.seq_QMARK_.call(null,x)) || (cljs.core.vector_QMARK_.call(null,x))) && (!((cljs.core.first.call(null,x) instanceof cljs.core.Keyword))))
{var seq__26727_26731 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x));var chunk__26728_26732 = null;var count__26729_26733 = (0);var i__26730_26734 = (0);while(true){
if((i__26730_26734 < count__26729_26733))
{var i_26735 = cljs.core._nth.call(null,chunk__26728_26732,i__26730_26734);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_26735);
{
var G__26736 = seq__26727_26731;
var G__26737 = chunk__26728_26732;
var G__26738 = count__26729_26733;
var G__26739 = (i__26730_26734 + (1));
seq__26727_26731 = G__26736;
chunk__26728_26732 = G__26737;
count__26729_26733 = G__26738;
i__26730_26734 = G__26739;
continue;
}
} else
{var temp__4126__auto___26740 = cljs.core.seq.call(null,seq__26727_26731);if(temp__4126__auto___26740)
{var seq__26727_26741__$1 = temp__4126__auto___26740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26727_26741__$1))
{var c__4410__auto___26742 = cljs.core.chunk_first.call(null,seq__26727_26741__$1);{
var G__26743 = cljs.core.chunk_rest.call(null,seq__26727_26741__$1);
var G__26744 = c__4410__auto___26742;
var G__26745 = cljs.core.count.call(null,c__4410__auto___26742);
var G__26746 = (0);
seq__26727_26731 = G__26743;
chunk__26728_26732 = G__26744;
count__26729_26733 = G__26745;
i__26730_26734 = G__26746;
continue;
}
} else
{var i_26747 = cljs.core.first.call(null,seq__26727_26741__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_26747);
{
var G__26748 = cljs.core.next.call(null,seq__26727_26741__$1);
var G__26749 = null;
var G__26750 = (0);
var G__26751 = (0);
seq__26727_26731 = G__26748;
chunk__26728_26732 = G__26749;
count__26729_26733 = G__26750;
i__26730_26734 = G__26751;
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
cljs.looperscript.iterator.justify = (function justify(n){var p = cljs.core.mod.call(null,n,(12));var oct = (n - p);var vec__26753 = cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(11),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)]),p);var num = cljs.core.nth.call(null,vec__26753,(0),null);var den = cljs.core.nth.call(null,vec__26753,(1),null);if(cljs.core.not.call(null,num))
{return n;
} else
{return (oct + ((12) * (Math.log.call(null,(num / den)) / Math.log.call(null,(2)))));
}
});
cljs.looperscript.iterator.apply_modifiers = (function apply_modifiers(mods,x){return cljs.core.reduce.call(null,(function (n,m){if(cljs.core.fn_QMARK_.call(null,m))
{return m.call(null,n);
} else
{var pred__26757 = cljs.core._EQ_;var expr__26758 = cljs.core.keyword.call(null,cljs.core.first.call(null,m));if(cljs.core.truth_(pred__26757.call(null,new cljs.core.Keyword(null,"fraction","fraction",107940680),expr__26758)))
{return (n * cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__26757.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),expr__26758)))
{return (n + cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__26757.call(null,new cljs.core.Keyword(null,"just","just",466318146),expr__26758)))
{return cljs.looperscript.iterator.justify.call(null,n);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__26758))));
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
