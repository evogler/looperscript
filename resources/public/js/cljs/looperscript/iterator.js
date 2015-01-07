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
cljs.looperscript.iterator.vec_push_BANG_ = (function vec_push_BANG_(stack,v){var seq__22936 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));var chunk__22937 = null;var count__22938 = (0);var i__22939 = (0);while(true){
if((i__22939 < count__22938))
{var i = cljs.core._nth.call(null,chunk__22937,i__22939);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__22940 = seq__22936;
var G__22941 = chunk__22937;
var G__22942 = count__22938;
var G__22943 = (i__22939 + (1));
seq__22936 = G__22940;
chunk__22937 = G__22941;
count__22938 = G__22942;
i__22939 = G__22943;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__22936);if(temp__4126__auto__)
{var seq__22936__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22936__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__22936__$1);{
var G__22944 = cljs.core.chunk_rest.call(null,seq__22936__$1);
var G__22945 = c__4410__auto__;
var G__22946 = cljs.core.count.call(null,c__4410__auto__);
var G__22947 = (0);
seq__22936 = G__22944;
chunk__22937 = G__22945;
count__22938 = G__22946;
i__22939 = G__22947;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__22936__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__22948 = cljs.core.next.call(null,seq__22936__$1);
var G__22949 = null;
var G__22950 = (0);
var G__22951 = (0);
seq__22936 = G__22948;
chunk__22937 = G__22949;
count__22938 = G__22950;
i__22939 = G__22951;
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
var G__22952 = r.call(null);
r = G__22952;
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
{var seq__22957_22961 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x__$1));var chunk__22958_22962 = null;var count__22959_22963 = (0);var i__22960_22964 = (0);while(true){
if((i__22960_22964 < count__22959_22963))
{var i_22965 = cljs.core._nth.call(null,chunk__22958_22962,i__22960_22964);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_22965);
{
var G__22966 = seq__22957_22961;
var G__22967 = chunk__22958_22962;
var G__22968 = count__22959_22963;
var G__22969 = (i__22960_22964 + (1));
seq__22957_22961 = G__22966;
chunk__22958_22962 = G__22967;
count__22959_22963 = G__22968;
i__22960_22964 = G__22969;
continue;
}
} else
{var temp__4126__auto___22970 = cljs.core.seq.call(null,seq__22957_22961);if(temp__4126__auto___22970)
{var seq__22957_22971__$1 = temp__4126__auto___22970;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22957_22971__$1))
{var c__4410__auto___22972 = cljs.core.chunk_first.call(null,seq__22957_22971__$1);{
var G__22973 = cljs.core.chunk_rest.call(null,seq__22957_22971__$1);
var G__22974 = c__4410__auto___22972;
var G__22975 = cljs.core.count.call(null,c__4410__auto___22972);
var G__22976 = (0);
seq__22957_22961 = G__22973;
chunk__22958_22962 = G__22974;
count__22959_22963 = G__22975;
i__22960_22964 = G__22976;
continue;
}
} else
{var i_22977 = cljs.core.first.call(null,seq__22957_22971__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_22977);
{
var G__22978 = cljs.core.next.call(null,seq__22957_22971__$1);
var G__22979 = null;
var G__22980 = (0);
var G__22981 = (0);
seq__22957_22961 = G__22978;
chunk__22958_22962 = G__22979;
count__22959_22963 = G__22980;
i__22960_22964 = G__22981;
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
cljs.looperscript.iterator.justify = (function justify(n){var p = cljs.core.mod.call(null,n,(12));var oct = (n - p);var vec__22983 = cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(11),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)]),p);var num = cljs.core.nth.call(null,vec__22983,(0),null);var den = cljs.core.nth.call(null,vec__22983,(1),null);if(cljs.core.not.call(null,num))
{return n;
} else
{return (oct + ((12) * (Math.log.call(null,(num / den)) / Math.log.call(null,(2)))));
}
});
cljs.looperscript.iterator.apply_modifiers = (function apply_modifiers(mods,x){return cljs.core.reduce.call(null,(function (n,m){if(cljs.core.fn_QMARK_.call(null,m))
{return m.call(null,n);
} else
{var pred__22987 = cljs.core._EQ_;var expr__22988 = cljs.core.keyword.call(null,cljs.core.first.call(null,m));if(cljs.core.truth_(pred__22987.call(null,new cljs.core.Keyword(null,"fraction","fraction",107940680),expr__22988)))
{return (n * cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__22987.call(null,new cljs.core.Keyword(null,"plus","plus",211540661),expr__22988)))
{return (n + cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__22987.call(null,new cljs.core.Keyword(null,"just","just",466318146),expr__22988)))
{return cljs.looperscript.iterator.justify.call(null,n);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__22988))));
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
var G__22990__delegate = function (args){while(true){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,stack)))
{cljs.core.reset_BANG_.call(null,modifiers,cljs.core.PersistentVector.EMPTY);
cljs.looperscript.iterator.vec_push_BANG_.call(null,stack,v);
} else
{}
var x = cljs.looperscript.iterator.get_next_stack_val.call(null,stack,preserve_carots_QMARK_);var _ = (((cljs.core.sequential_QMARK_.call(null,v)) && (cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,v))))?cljs.looperscript.logging.log.call(null,"iterator v, x: ",v,x):null);if(((x == null)) || ((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.empty_QMARK_.call(null,x))))
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
var G__22990 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22990__delegate.call(this,args);};
G__22990.cljs$lang$maxFixedArity = 0;
G__22990.cljs$lang$applyTo = (function (arglist__22991){
var args = cljs.core.seq(arglist__22991);
return G__22990__delegate(args);
});
G__22990.cljs$core$IFn$_invoke$arity$variadic = G__22990__delegate;
return G__22990;
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
