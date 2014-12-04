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
cljs.looperscript.iterator.vec_push_BANG_ = (function vec_push_BANG_(stack,v){var seq__10049 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));var chunk__10050 = null;var count__10051 = (0);var i__10052 = (0);while(true){
if((i__10052 < count__10051))
{var i = cljs.core._nth.call(null,chunk__10050,i__10052);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__10053 = seq__10049;
var G__10054 = chunk__10050;
var G__10055 = count__10051;
var G__10056 = (i__10052 + (1));
seq__10049 = G__10053;
chunk__10050 = G__10054;
count__10051 = G__10055;
i__10052 = G__10056;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10049);if(temp__4126__auto__)
{var seq__10049__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10049__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__10049__$1);{
var G__10057 = cljs.core.chunk_rest.call(null,seq__10049__$1);
var G__10058 = c__4410__auto__;
var G__10059 = cljs.core.count.call(null,c__4410__auto__);
var G__10060 = (0);
seq__10049 = G__10057;
chunk__10050 = G__10058;
count__10051 = G__10059;
i__10052 = G__10060;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__10049__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__10061 = cljs.core.next.call(null,seq__10049__$1);
var G__10062 = null;
var G__10063 = (0);
var G__10064 = (0);
seq__10049 = G__10061;
chunk__10050 = G__10062;
count__10051 = G__10063;
i__10052 = G__10064;
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
var G__10065 = r.call(null);
r = G__10065;
continue;
}
} else
{return r;
}
break;
}
});
cljs.looperscript.iterator.get_next_stack_val = (function get_next_stack_val(stack){var x = cljs.looperscript.iterator.dethunk.call(null,cljs.looperscript.iterator._pop_BANG_.call(null,stack));if(((cljs.core.seq_QMARK_.call(null,x)) || (cljs.core.vector_QMARK_.call(null,x))) && (!((cljs.core.first.call(null,x) instanceof cljs.core.Keyword))))
{var seq__10070_10074 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x));var chunk__10071_10075 = null;var count__10072_10076 = (0);var i__10073_10077 = (0);while(true){
if((i__10073_10077 < count__10072_10076))
{var i_10078 = cljs.core._nth.call(null,chunk__10071_10075,i__10073_10077);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_10078);
{
var G__10079 = seq__10070_10074;
var G__10080 = chunk__10071_10075;
var G__10081 = count__10072_10076;
var G__10082 = (i__10073_10077 + (1));
seq__10070_10074 = G__10079;
chunk__10071_10075 = G__10080;
count__10072_10076 = G__10081;
i__10073_10077 = G__10082;
continue;
}
} else
{var temp__4126__auto___10083 = cljs.core.seq.call(null,seq__10070_10074);if(temp__4126__auto___10083)
{var seq__10070_10084__$1 = temp__4126__auto___10083;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10070_10084__$1))
{var c__4410__auto___10085 = cljs.core.chunk_first.call(null,seq__10070_10084__$1);{
var G__10086 = cljs.core.chunk_rest.call(null,seq__10070_10084__$1);
var G__10087 = c__4410__auto___10085;
var G__10088 = cljs.core.count.call(null,c__4410__auto___10085);
var G__10089 = (0);
seq__10070_10074 = G__10086;
chunk__10071_10075 = G__10087;
count__10072_10076 = G__10088;
i__10073_10077 = G__10089;
continue;
}
} else
{var i_10090 = cljs.core.first.call(null,seq__10070_10084__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_10090);
{
var G__10091 = cljs.core.next.call(null,seq__10070_10084__$1);
var G__10092 = null;
var G__10093 = (0);
var G__10094 = (0);
seq__10070_10074 = G__10091;
chunk__10071_10075 = G__10092;
count__10072_10076 = G__10093;
i__10073_10077 = G__10094;
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
cljs.looperscript.iterator.apply_modifiers = (function apply_modifiers(mods,x){return cljs.core.reduce.call(null,(function (n,m){var pred__10098 = cljs.core._EQ_;var expr__10099 = cljs.core.first.call(null,m);if(cljs.core.truth_(pred__10098.call(null,new cljs.core.Keyword(null,"fraction","fraction",107940680),expr__10099)))
{return (n * cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__10098.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),expr__10099)))
{return (n + cljs.core.second.call(null,m));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10099))));
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
