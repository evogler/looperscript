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
cljs.looperscript.iterator.vec_push_BANG_ = (function vec_push_BANG_(stack,v){var seq__11169 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));var chunk__11170 = null;var count__11171 = (0);var i__11172 = (0);while(true){
if((i__11172 < count__11171))
{var i = cljs.core._nth.call(null,chunk__11170,i__11172);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__11173 = seq__11169;
var G__11174 = chunk__11170;
var G__11175 = count__11171;
var G__11176 = (i__11172 + (1));
seq__11169 = G__11173;
chunk__11170 = G__11174;
count__11171 = G__11175;
i__11172 = G__11176;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11169);if(temp__4126__auto__)
{var seq__11169__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11169__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__11169__$1);{
var G__11177 = cljs.core.chunk_rest.call(null,seq__11169__$1);
var G__11178 = c__4410__auto__;
var G__11179 = cljs.core.count.call(null,c__4410__auto__);
var G__11180 = (0);
seq__11169 = G__11177;
chunk__11170 = G__11178;
count__11171 = G__11179;
i__11172 = G__11180;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__11169__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__11181 = cljs.core.next.call(null,seq__11169__$1);
var G__11182 = null;
var G__11183 = (0);
var G__11184 = (0);
seq__11169 = G__11181;
chunk__11170 = G__11182;
count__11171 = G__11183;
i__11172 = G__11184;
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
var G__11185 = r.call(null);
r = G__11185;
continue;
}
} else
{return r;
}
break;
}
});
cljs.looperscript.iterator.get_next_stack_val = (function get_next_stack_val(stack){var x = cljs.looperscript.iterator.dethunk.call(null,cljs.looperscript.iterator._pop_BANG_.call(null,stack));if(((cljs.core.seq_QMARK_.call(null,x)) || (cljs.core.vector_QMARK_.call(null,x))) && (!((cljs.core.first.call(null,x) instanceof cljs.core.Keyword))))
{var seq__11190_11194 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x));var chunk__11191_11195 = null;var count__11192_11196 = (0);var i__11193_11197 = (0);while(true){
if((i__11193_11197 < count__11192_11196))
{var i_11198 = cljs.core._nth.call(null,chunk__11191_11195,i__11193_11197);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_11198);
{
var G__11199 = seq__11190_11194;
var G__11200 = chunk__11191_11195;
var G__11201 = count__11192_11196;
var G__11202 = (i__11193_11197 + (1));
seq__11190_11194 = G__11199;
chunk__11191_11195 = G__11200;
count__11192_11196 = G__11201;
i__11193_11197 = G__11202;
continue;
}
} else
{var temp__4126__auto___11203 = cljs.core.seq.call(null,seq__11190_11194);if(temp__4126__auto___11203)
{var seq__11190_11204__$1 = temp__4126__auto___11203;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11190_11204__$1))
{var c__4410__auto___11205 = cljs.core.chunk_first.call(null,seq__11190_11204__$1);{
var G__11206 = cljs.core.chunk_rest.call(null,seq__11190_11204__$1);
var G__11207 = c__4410__auto___11205;
var G__11208 = cljs.core.count.call(null,c__4410__auto___11205);
var G__11209 = (0);
seq__11190_11194 = G__11206;
chunk__11191_11195 = G__11207;
count__11192_11196 = G__11208;
i__11193_11197 = G__11209;
continue;
}
} else
{var i_11210 = cljs.core.first.call(null,seq__11190_11204__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_11210);
{
var G__11211 = cljs.core.next.call(null,seq__11190_11204__$1);
var G__11212 = null;
var G__11213 = (0);
var G__11214 = (0);
seq__11190_11194 = G__11211;
chunk__11191_11195 = G__11212;
count__11192_11196 = G__11213;
i__11193_11197 = G__11214;
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
cljs.looperscript.iterator.justify = (function justify(n){var p = cljs.core.mod.call(null,n,(12));var oct = (n - p);var vec__11216 = cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(11),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)]),p);var num = cljs.core.nth.call(null,vec__11216,(0),null);var den = cljs.core.nth.call(null,vec__11216,(1),null);if(cljs.core.not.call(null,num))
{return n;
} else
{return (oct + ((12) * (Math.log.call(null,(num / den)) / Math.log.call(null,(2)))));
}
});
cljs.looperscript.iterator.apply_modifiers = (function apply_modifiers(mods,x){return cljs.core.reduce.call(null,(function (n,m){var pred__11220 = cljs.core._EQ_;var expr__11221 = cljs.core.keyword.call(null,cljs.core.first.call(null,m));if(cljs.core.truth_(pred__11220.call(null,new cljs.core.Keyword(null,"fraction","fraction",107940680),expr__11221)))
{return (n * cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__11220.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),expr__11221)))
{return (n + cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__11220.call(null,new cljs.core.Keyword(null,"just","just",466318146),expr__11221)))
{return cljs.looperscript.iterator.justify.call(null,n);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__11221))));
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
