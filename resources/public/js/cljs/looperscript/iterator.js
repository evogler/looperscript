// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.iterator');
goog.require('cljs.core');
cljs.looperscript.iterator._pop_BANG_ = (function _pop_BANG_(stack){var res = cljs.core.last.call(null,cljs.core.deref.call(null,stack));cljs.core.swap_BANG_.call(null,stack,cljs.core.comp.call(null,cljs.core.vec,cljs.core.drop_last));
return res;
});
cljs.looperscript.iterator.push_BANG_ = (function push_BANG_(stack,x){if(!((x == null)))
{return cljs.core.swap_BANG_.call(null,stack,cljs.core.conj,x);
} else
{return null;
}
});
cljs.looperscript.iterator.vec_push_BANG_ = (function vec_push_BANG_(stack,v){var seq__8077 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));var chunk__8078 = null;var count__8079 = (0);var i__8080 = (0);while(true){
if((i__8080 < count__8079))
{var i = cljs.core._nth.call(null,chunk__8078,i__8080);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__8081 = seq__8077;
var G__8082 = chunk__8078;
var G__8083 = count__8079;
var G__8084 = (i__8080 + (1));
seq__8077 = G__8081;
chunk__8078 = G__8082;
count__8079 = G__8083;
i__8080 = G__8084;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8077);if(temp__4126__auto__)
{var seq__8077__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8077__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__8077__$1);{
var G__8085 = cljs.core.chunk_rest.call(null,seq__8077__$1);
var G__8086 = c__4410__auto__;
var G__8087 = cljs.core.count.call(null,c__4410__auto__);
var G__8088 = (0);
seq__8077 = G__8085;
chunk__8078 = G__8086;
count__8079 = G__8087;
i__8080 = G__8088;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__8077__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__8089 = cljs.core.next.call(null,seq__8077__$1);
var G__8090 = null;
var G__8091 = (0);
var G__8092 = (0);
seq__8077 = G__8089;
chunk__8078 = G__8090;
count__8079 = G__8091;
i__8080 = G__8092;
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
cljs.looperscript.iterator.get_next_stack_val = (function get_next_stack_val(stack){var x = (function (){var y = cljs.looperscript.iterator._pop_BANG_.call(null,stack);while(true){
if(cljs.core.fn_QMARK_.call(null,y))
{{
var G__8101 = y.call(null);
y = G__8101;
continue;
}
} else
{return y;
}
break;
}
})();if(((cljs.core.seq_QMARK_.call(null,x)) || (cljs.core.vector_QMARK_.call(null,x))) && (!((cljs.core.first.call(null,x) instanceof cljs.core.Keyword))))
{var seq__8097_8102 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x));var chunk__8098_8103 = null;var count__8099_8104 = (0);var i__8100_8105 = (0);while(true){
if((i__8100_8105 < count__8099_8104))
{var i_8106 = cljs.core._nth.call(null,chunk__8098_8103,i__8100_8105);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_8106);
{
var G__8107 = seq__8097_8102;
var G__8108 = chunk__8098_8103;
var G__8109 = count__8099_8104;
var G__8110 = (i__8100_8105 + (1));
seq__8097_8102 = G__8107;
chunk__8098_8103 = G__8108;
count__8099_8104 = G__8109;
i__8100_8105 = G__8110;
continue;
}
} else
{var temp__4126__auto___8111 = cljs.core.seq.call(null,seq__8097_8102);if(temp__4126__auto___8111)
{var seq__8097_8112__$1 = temp__4126__auto___8111;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8097_8112__$1))
{var c__4410__auto___8113 = cljs.core.chunk_first.call(null,seq__8097_8112__$1);{
var G__8114 = cljs.core.chunk_rest.call(null,seq__8097_8112__$1);
var G__8115 = c__4410__auto___8113;
var G__8116 = cljs.core.count.call(null,c__4410__auto___8113);
var G__8117 = (0);
seq__8097_8102 = G__8114;
chunk__8098_8103 = G__8115;
count__8099_8104 = G__8116;
i__8100_8105 = G__8117;
continue;
}
} else
{var i_8118 = cljs.core.first.call(null,seq__8097_8112__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_8118);
{
var G__8119 = cljs.core.next.call(null,seq__8097_8112__$1);
var G__8120 = null;
var G__8121 = (0);
var G__8122 = (0);
seq__8097_8102 = G__8119;
chunk__8098_8103 = G__8120;
count__8099_8104 = G__8121;
i__8100_8105 = G__8122;
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
cljs.looperscript.iterator.iterator = (function iterator(v){var stack = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);return ((function (stack){
return (function (){if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,stack)))
{cljs.looperscript.iterator.vec_push_BANG_.call(null,stack,v);
} else
{}
return cljs.looperscript.iterator.get_next_stack_val.call(null,stack);
});
;})(stack))
});
