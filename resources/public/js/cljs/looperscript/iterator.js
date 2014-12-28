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
cljs.looperscript.iterator.vec_push_BANG_ = (function vec_push_BANG_(stack,v){var seq__18628 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));var chunk__18629 = null;var count__18630 = (0);var i__18631 = (0);while(true){
if((i__18631 < count__18630))
{var i = cljs.core._nth.call(null,chunk__18629,i__18631);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__18632 = seq__18628;
var G__18633 = chunk__18629;
var G__18634 = count__18630;
var G__18635 = (i__18631 + (1));
seq__18628 = G__18632;
chunk__18629 = G__18633;
count__18630 = G__18634;
i__18631 = G__18635;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18628);if(temp__4126__auto__)
{var seq__18628__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18628__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__18628__$1);{
var G__18636 = cljs.core.chunk_rest.call(null,seq__18628__$1);
var G__18637 = c__4410__auto__;
var G__18638 = cljs.core.count.call(null,c__4410__auto__);
var G__18639 = (0);
seq__18628 = G__18636;
chunk__18629 = G__18637;
count__18630 = G__18638;
i__18631 = G__18639;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__18628__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__18640 = cljs.core.next.call(null,seq__18628__$1);
var G__18641 = null;
var G__18642 = (0);
var G__18643 = (0);
seq__18628 = G__18640;
chunk__18629 = G__18641;
count__18630 = G__18642;
i__18631 = G__18643;
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
var G__18644 = r.call(null);
r = G__18644;
continue;
}
} else
{return r;
}
break;
}
});
cljs.looperscript.iterator.get_next_stack_val = (function get_next_stack_val(stack){var x = cljs.looperscript.iterator.dethunk.call(null,cljs.looperscript.iterator._pop_BANG_.call(null,stack));if(((cljs.core.seq_QMARK_.call(null,x)) || (cljs.core.vector_QMARK_.call(null,x))) && (!((cljs.core.first.call(null,x) instanceof cljs.core.Keyword))))
{var seq__18649_18653 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x));var chunk__18650_18654 = null;var count__18651_18655 = (0);var i__18652_18656 = (0);while(true){
if((i__18652_18656 < count__18651_18655))
{var i_18657 = cljs.core._nth.call(null,chunk__18650_18654,i__18652_18656);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_18657);
{
var G__18658 = seq__18649_18653;
var G__18659 = chunk__18650_18654;
var G__18660 = count__18651_18655;
var G__18661 = (i__18652_18656 + (1));
seq__18649_18653 = G__18658;
chunk__18650_18654 = G__18659;
count__18651_18655 = G__18660;
i__18652_18656 = G__18661;
continue;
}
} else
{var temp__4126__auto___18662 = cljs.core.seq.call(null,seq__18649_18653);if(temp__4126__auto___18662)
{var seq__18649_18663__$1 = temp__4126__auto___18662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18649_18663__$1))
{var c__4410__auto___18664 = cljs.core.chunk_first.call(null,seq__18649_18663__$1);{
var G__18665 = cljs.core.chunk_rest.call(null,seq__18649_18663__$1);
var G__18666 = c__4410__auto___18664;
var G__18667 = cljs.core.count.call(null,c__4410__auto___18664);
var G__18668 = (0);
seq__18649_18653 = G__18665;
chunk__18650_18654 = G__18666;
count__18651_18655 = G__18667;
i__18652_18656 = G__18668;
continue;
}
} else
{var i_18669 = cljs.core.first.call(null,seq__18649_18663__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_18669);
{
var G__18670 = cljs.core.next.call(null,seq__18649_18663__$1);
var G__18671 = null;
var G__18672 = (0);
var G__18673 = (0);
seq__18649_18653 = G__18670;
chunk__18650_18654 = G__18671;
count__18651_18655 = G__18672;
i__18652_18656 = G__18673;
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
cljs.looperscript.iterator.justify = (function justify(n){var p = cljs.core.mod.call(null,n,(12));var oct = (n - p);var vec__18675 = cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(11),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)]),p);var num = cljs.core.nth.call(null,vec__18675,(0),null);var den = cljs.core.nth.call(null,vec__18675,(1),null);if(cljs.core.not.call(null,num))
{return n;
} else
{return (oct + ((12) * (Math.log.call(null,(num / den)) / Math.log.call(null,(2)))));
}
});
cljs.looperscript.iterator.apply_modifiers = (function apply_modifiers(mods,x){return cljs.core.reduce.call(null,(function (n,m){if(cljs.core.fn_QMARK_.call(null,m))
{return m.call(null,n);
} else
{var pred__18679 = cljs.core._EQ_;var expr__18680 = cljs.core.keyword.call(null,cljs.core.first.call(null,m));if(cljs.core.truth_(pred__18679.call(null,new cljs.core.Keyword(null,"fraction","fraction",107940680),expr__18680)))
{return (n * cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__18679.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),expr__18680)))
{return (n + cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__18679.call(null,new cljs.core.Keyword(null,"just","just",466318146),expr__18680)))
{return cljs.looperscript.iterator.justify.call(null,n);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__18680))));
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
