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
cljs.looperscript.iterator.vec_push_BANG_ = (function vec_push_BANG_(stack,v){var seq__42904 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));var chunk__42905 = null;var count__42906 = (0);var i__42907 = (0);while(true){
if((i__42907 < count__42906))
{var i = cljs.core._nth.call(null,chunk__42905,i__42907);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__42908 = seq__42904;
var G__42909 = chunk__42905;
var G__42910 = count__42906;
var G__42911 = (i__42907 + (1));
seq__42904 = G__42908;
chunk__42905 = G__42909;
count__42906 = G__42910;
i__42907 = G__42911;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__42904);if(temp__4126__auto__)
{var seq__42904__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42904__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__42904__$1);{
var G__42912 = cljs.core.chunk_rest.call(null,seq__42904__$1);
var G__42913 = c__4410__auto__;
var G__42914 = cljs.core.count.call(null,c__4410__auto__);
var G__42915 = (0);
seq__42904 = G__42912;
chunk__42905 = G__42913;
count__42906 = G__42914;
i__42907 = G__42915;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__42904__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__42916 = cljs.core.next.call(null,seq__42904__$1);
var G__42917 = null;
var G__42918 = (0);
var G__42919 = (0);
seq__42904 = G__42916;
chunk__42905 = G__42917;
count__42906 = G__42918;
i__42907 = G__42919;
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
var G__42920 = r.call(null);
r = G__42920;
continue;
}
} else
{return r;
}
break;
}
});
cljs.looperscript.iterator.get_next_stack_val = (function get_next_stack_val(stack){var x = cljs.looperscript.iterator.dethunk.call(null,cljs.looperscript.iterator._pop_BANG_.call(null,stack));if(((cljs.core.seq_QMARK_.call(null,x)) || (cljs.core.vector_QMARK_.call(null,x))) && (!((cljs.core.first.call(null,x) instanceof cljs.core.Keyword))))
{var seq__42925_42929 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x));var chunk__42926_42930 = null;var count__42927_42931 = (0);var i__42928_42932 = (0);while(true){
if((i__42928_42932 < count__42927_42931))
{var i_42933 = cljs.core._nth.call(null,chunk__42926_42930,i__42928_42932);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_42933);
{
var G__42934 = seq__42925_42929;
var G__42935 = chunk__42926_42930;
var G__42936 = count__42927_42931;
var G__42937 = (i__42928_42932 + (1));
seq__42925_42929 = G__42934;
chunk__42926_42930 = G__42935;
count__42927_42931 = G__42936;
i__42928_42932 = G__42937;
continue;
}
} else
{var temp__4126__auto___42938 = cljs.core.seq.call(null,seq__42925_42929);if(temp__4126__auto___42938)
{var seq__42925_42939__$1 = temp__4126__auto___42938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42925_42939__$1))
{var c__4410__auto___42940 = cljs.core.chunk_first.call(null,seq__42925_42939__$1);{
var G__42941 = cljs.core.chunk_rest.call(null,seq__42925_42939__$1);
var G__42942 = c__4410__auto___42940;
var G__42943 = cljs.core.count.call(null,c__4410__auto___42940);
var G__42944 = (0);
seq__42925_42929 = G__42941;
chunk__42926_42930 = G__42942;
count__42927_42931 = G__42943;
i__42928_42932 = G__42944;
continue;
}
} else
{var i_42945 = cljs.core.first.call(null,seq__42925_42939__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_42945);
{
var G__42946 = cljs.core.next.call(null,seq__42925_42939__$1);
var G__42947 = null;
var G__42948 = (0);
var G__42949 = (0);
seq__42925_42929 = G__42946;
chunk__42926_42930 = G__42947;
count__42927_42931 = G__42948;
i__42928_42932 = G__42949;
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
cljs.looperscript.iterator.justify = (function justify(n){var p = cljs.core.mod.call(null,n,(12));var oct = (n - p);var vec__42951 = cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(11),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)]),p);var num = cljs.core.nth.call(null,vec__42951,(0),null);var den = cljs.core.nth.call(null,vec__42951,(1),null);if(cljs.core.not.call(null,num))
{return n;
} else
{return (oct + ((12) * (Math.log.call(null,(num / den)) / Math.log.call(null,(2)))));
}
});
cljs.looperscript.iterator.apply_modifiers = (function apply_modifiers(mods,x){return cljs.core.reduce.call(null,(function (n,m){if(cljs.core.fn_QMARK_.call(null,m))
{return m.call(null,n);
} else
{var pred__42955 = cljs.core._EQ_;var expr__42956 = cljs.core.keyword.call(null,cljs.core.first.call(null,m));if(cljs.core.truth_(pred__42955.call(null,new cljs.core.Keyword(null,"fraction","fraction",107940680),expr__42956)))
{return (n * cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__42955.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),expr__42956)))
{return (n + cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__42955.call(null,new cljs.core.Keyword(null,"just","just",466318146),expr__42956)))
{return cljs.looperscript.iterator.justify.call(null,n);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__42956))));
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
