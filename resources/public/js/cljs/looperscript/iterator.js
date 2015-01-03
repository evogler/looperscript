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
cljs.looperscript.iterator.vec_push_BANG_ = (function vec_push_BANG_(stack,v){var seq__14948 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));var chunk__14949 = null;var count__14950 = (0);var i__14951 = (0);while(true){
if((i__14951 < count__14950))
{var i = cljs.core._nth.call(null,chunk__14949,i__14951);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__14952 = seq__14948;
var G__14953 = chunk__14949;
var G__14954 = count__14950;
var G__14955 = (i__14951 + (1));
seq__14948 = G__14952;
chunk__14949 = G__14953;
count__14950 = G__14954;
i__14951 = G__14955;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14948);if(temp__4126__auto__)
{var seq__14948__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14948__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__14948__$1);{
var G__14956 = cljs.core.chunk_rest.call(null,seq__14948__$1);
var G__14957 = c__4410__auto__;
var G__14958 = cljs.core.count.call(null,c__4410__auto__);
var G__14959 = (0);
seq__14948 = G__14956;
chunk__14949 = G__14957;
count__14950 = G__14958;
i__14951 = G__14959;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__14948__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__14960 = cljs.core.next.call(null,seq__14948__$1);
var G__14961 = null;
var G__14962 = (0);
var G__14963 = (0);
seq__14948 = G__14960;
chunk__14949 = G__14961;
count__14950 = G__14962;
i__14951 = G__14963;
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
var G__14964 = r.call(null);
r = G__14964;
continue;
}
} else
{return r;
}
break;
}
});
cljs.looperscript.iterator.get_next_stack_val = (function() {
var get_next_stack_val = null;
var get_next_stack_val__1 = (function (stack){return get_next_stack_val.call(null,stack,true);
});
var get_next_stack_val__2 = (function (stack,preserve_carots_QMARK_){var x = cljs.looperscript.iterator._pop_BANG_.call(null,stack);var preserve_QMARK_ = (function (){var and__3628__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,x),new cljs.core.Keyword(null,"intact-for-sub-time","intact-for-sub-time",1903796476));if(cljs.core.truth_(and__3628__auto__))
{return preserve_carots_QMARK_;
} else
{return and__3628__auto__;
}
})();var x__$1 = ((cljs.core.not.call(null,preserve_QMARK_))?cljs.looperscript.iterator.dethunk.call(null,x):x);if(((cljs.core.seq_QMARK_.call(null,x__$1)) || (cljs.core.vector_QMARK_.call(null,x__$1))) && (cljs.core.not.call(null,preserve_QMARK_)) && (!((cljs.core.first.call(null,x__$1) instanceof cljs.core.Keyword))))
{var seq__14969_14973 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x__$1));var chunk__14970_14974 = null;var count__14971_14975 = (0);var i__14972_14976 = (0);while(true){
if((i__14972_14976 < count__14971_14975))
{var i_14977 = cljs.core._nth.call(null,chunk__14970_14974,i__14972_14976);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_14977);
{
var G__14978 = seq__14969_14973;
var G__14979 = chunk__14970_14974;
var G__14980 = count__14971_14975;
var G__14981 = (i__14972_14976 + (1));
seq__14969_14973 = G__14978;
chunk__14970_14974 = G__14979;
count__14971_14975 = G__14980;
i__14972_14976 = G__14981;
continue;
}
} else
{var temp__4126__auto___14982 = cljs.core.seq.call(null,seq__14969_14973);if(temp__4126__auto___14982)
{var seq__14969_14983__$1 = temp__4126__auto___14982;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14969_14983__$1))
{var c__4410__auto___14984 = cljs.core.chunk_first.call(null,seq__14969_14983__$1);{
var G__14985 = cljs.core.chunk_rest.call(null,seq__14969_14983__$1);
var G__14986 = c__4410__auto___14984;
var G__14987 = cljs.core.count.call(null,c__4410__auto___14984);
var G__14988 = (0);
seq__14969_14973 = G__14985;
chunk__14970_14974 = G__14986;
count__14971_14975 = G__14987;
i__14972_14976 = G__14988;
continue;
}
} else
{var i_14989 = cljs.core.first.call(null,seq__14969_14983__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_14989);
{
var G__14990 = cljs.core.next.call(null,seq__14969_14983__$1);
var G__14991 = null;
var G__14992 = (0);
var G__14993 = (0);
seq__14969_14973 = G__14990;
chunk__14970_14974 = G__14991;
count__14971_14975 = G__14992;
i__14972_14976 = G__14993;
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
{return x__$1;
}
});
get_next_stack_val = function(stack,preserve_carots_QMARK_){
switch(arguments.length){
case 1:
return get_next_stack_val__1.call(this,stack);
case 2:
return get_next_stack_val__2.call(this,stack,preserve_carots_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_next_stack_val.cljs$core$IFn$_invoke$arity$1 = get_next_stack_val__1;
get_next_stack_val.cljs$core$IFn$_invoke$arity$2 = get_next_stack_val__2;
return get_next_stack_val;
})()
;
cljs.looperscript.iterator.modifier_QMARK_ = (function modifier_QMARK_(x){return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"modifier","modifier",1634442788)));
});
cljs.looperscript.iterator.modifier_fn_QMARK_ = (function modifier_fn_QMARK_(x){return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"modifier-fn","modifier-fn",-1624543303)));
});
cljs.looperscript.iterator.justify = (function justify(n){var p = cljs.core.mod.call(null,n,(12));var oct = (n - p);var vec__14995 = cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(11),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)]),p);var num = cljs.core.nth.call(null,vec__14995,(0),null);var den = cljs.core.nth.call(null,vec__14995,(1),null);if(cljs.core.not.call(null,num))
{return n;
} else
{return (oct + ((12) * (Math.log.call(null,(num / den)) / Math.log.call(null,(2)))));
}
});
cljs.looperscript.iterator.apply_modifiers = (function apply_modifiers(mods,x){return cljs.core.reduce.call(null,(function (n,m){if(cljs.core.fn_QMARK_.call(null,m))
{return m.call(null,n);
} else
{var pred__14999 = cljs.core._EQ_;var expr__15000 = cljs.core.keyword.call(null,cljs.core.first.call(null,m));if(cljs.core.truth_(pred__14999.call(null,new cljs.core.Keyword(null,"fraction","fraction",107940680),expr__15000)))
{return (n * cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__14999.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),expr__15000)))
{return (n + cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__14999.call(null,new cljs.core.Keyword(null,"just","just",466318146),expr__15000)))
{return cljs.looperscript.iterator.justify.call(null,n);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15000))));
}
}
}
}
}),x,mods);
});
cljs.looperscript.iterator.iterator = (function() {
var iterator = null;
var iterator__1 = (function (v){return iterator.call(null,v,true);
});
var iterator__2 = (function (v,preserve_carots_QMARK_){var stack = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var modifiers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);return ((function (stack,modifiers){
return (function() { 
var G__15002__delegate = function (args){while(true){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,stack)))
{cljs.core.reset_BANG_.call(null,modifiers,cljs.core.PersistentVector.EMPTY);
cljs.looperscript.iterator.vec_push_BANG_.call(null,stack,v);
} else
{}
var x = cljs.looperscript.iterator.get_next_stack_val.call(null,stack,preserve_carots_QMARK_);if(((x == null)) || ((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.empty_QMARK_.call(null,x))))
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
};
var G__15002 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15002__delegate.call(this,args);};
G__15002.cljs$lang$maxFixedArity = 0;
G__15002.cljs$lang$applyTo = (function (arglist__15003){
var args = cljs.core.seq(arglist__15003);
return G__15002__delegate(args);
});
G__15002.cljs$core$IFn$_invoke$arity$variadic = G__15002__delegate;
return G__15002;
})()
;
;})(stack,modifiers))
});
iterator = function(v,preserve_carots_QMARK_){
switch(arguments.length){
case 1:
return iterator__1.call(this,v);
case 2:
return iterator__2.call(this,v,preserve_carots_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
iterator.cljs$core$IFn$_invoke$arity$1 = iterator__1;
iterator.cljs$core$IFn$_invoke$arity$2 = iterator__2;
return iterator;
})()
;
cljs.looperscript.iterator.timed_iterator = (function timed_iterator(v,time_v){var v_iterator = cljs.looperscript.iterator.iterator.call(null,v,true);var time_iterator = cljs.looperscript.iterator.iterator.call(null,time_v);var get_next_v = ((function (v_iterator,time_iterator){
return (function (){var next_v = v_iterator.call(null);if((cljs.core.vector_QMARK_.call(null,next_v)) && (!((cljs.core.first.call(null,next_v) instanceof cljs.core.Keyword))))
{return cljs.looperscript.iterator.iterator.call(null,next_v,false);
} else
{if(cljs.core.fn_QMARK_.call(null,next_v))
{return cljs.looperscript.iterator.iterator.call(null,next_v.call(null),false);
} else
{return next_v;

}
}
});})(v_iterator,time_iterator))
;var current_val = cljs.core.atom.call(null,get_next_v.call(null));var current_val_expiration_time = cljs.core.atom.call(null,time_iterator.call(null));return ((function (v_iterator,time_iterator,get_next_v,current_val,current_val_expiration_time){
return (function (note_time){while(true){
if((note_time >= cljs.core.deref.call(null,current_val_expiration_time)))
{cljs.core.swap_BANG_.call(null,current_val_expiration_time,cljs.core._PLUS_,time_iterator.call(null));
cljs.core.reset_BANG_.call(null,current_val,get_next_v.call(null));
{
continue;
}
} else
{}
break;
}
return cljs.looperscript.iterator.dethunk.call(null,cljs.core.deref.call(null,current_val));
});
;})(v_iterator,time_iterator,get_next_v,current_val,current_val_expiration_time))
});
