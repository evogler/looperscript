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
cljs.looperscript.iterator.vec_push_BANG_ = (function vec_push_BANG_(stack,v){var seq__29846 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));var chunk__29847 = null;var count__29848 = (0);var i__29849 = (0);while(true){
if((i__29849 < count__29848))
{var i = cljs.core._nth.call(null,chunk__29847,i__29849);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__29850 = seq__29846;
var G__29851 = chunk__29847;
var G__29852 = count__29848;
var G__29853 = (i__29849 + (1));
seq__29846 = G__29850;
chunk__29847 = G__29851;
count__29848 = G__29852;
i__29849 = G__29853;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29846);if(temp__4126__auto__)
{var seq__29846__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29846__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__29846__$1);{
var G__29854 = cljs.core.chunk_rest.call(null,seq__29846__$1);
var G__29855 = c__4410__auto__;
var G__29856 = cljs.core.count.call(null,c__4410__auto__);
var G__29857 = (0);
seq__29846 = G__29854;
chunk__29847 = G__29855;
count__29848 = G__29856;
i__29849 = G__29857;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__29846__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i);
{
var G__29858 = cljs.core.next.call(null,seq__29846__$1);
var G__29859 = null;
var G__29860 = (0);
var G__29861 = (0);
seq__29846 = G__29858;
chunk__29847 = G__29859;
count__29848 = G__29860;
i__29849 = G__29861;
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
var G__29862 = r.call(null);
r = G__29862;
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
{var seq__29867_29871 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x__$1));var chunk__29868_29872 = null;var count__29869_29873 = (0);var i__29870_29874 = (0);while(true){
if((i__29870_29874 < count__29869_29873))
{var i_29875 = cljs.core._nth.call(null,chunk__29868_29872,i__29870_29874);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_29875);
{
var G__29876 = seq__29867_29871;
var G__29877 = chunk__29868_29872;
var G__29878 = count__29869_29873;
var G__29879 = (i__29870_29874 + (1));
seq__29867_29871 = G__29876;
chunk__29868_29872 = G__29877;
count__29869_29873 = G__29878;
i__29870_29874 = G__29879;
continue;
}
} else
{var temp__4126__auto___29880 = cljs.core.seq.call(null,seq__29867_29871);if(temp__4126__auto___29880)
{var seq__29867_29881__$1 = temp__4126__auto___29880;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29867_29881__$1))
{var c__4410__auto___29882 = cljs.core.chunk_first.call(null,seq__29867_29881__$1);{
var G__29883 = cljs.core.chunk_rest.call(null,seq__29867_29881__$1);
var G__29884 = c__4410__auto___29882;
var G__29885 = cljs.core.count.call(null,c__4410__auto___29882);
var G__29886 = (0);
seq__29867_29871 = G__29883;
chunk__29868_29872 = G__29884;
count__29869_29873 = G__29885;
i__29870_29874 = G__29886;
continue;
}
} else
{var i_29887 = cljs.core.first.call(null,seq__29867_29881__$1);cljs.looperscript.iterator.push_BANG_.call(null,stack,i_29887);
{
var G__29888 = cljs.core.next.call(null,seq__29867_29881__$1);
var G__29889 = null;
var G__29890 = (0);
var G__29891 = (0);
seq__29867_29871 = G__29888;
chunk__29868_29872 = G__29889;
count__29869_29873 = G__29890;
i__29870_29874 = G__29891;
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
cljs.looperscript.iterator.justify = (function justify(n){var p = cljs.core.mod.call(null,n,(12));var oct = (n - p);var vec__29893 = cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(11),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)]),p);var num = cljs.core.nth.call(null,vec__29893,(0),null);var den = cljs.core.nth.call(null,vec__29893,(1),null);if(cljs.core.not.call(null,num))
{return n;
} else
{return (oct + ((12) * (Math.log.call(null,(num / den)) / Math.log.call(null,(2)))));
}
});
cljs.looperscript.iterator.apply_modifiers = (function apply_modifiers(mods,x){return cljs.core.reduce.call(null,(function (n,m){if(cljs.core.fn_QMARK_.call(null,m))
{return m.call(null,n);
} else
{var pred__29897 = cljs.core._EQ_;var expr__29898 = cljs.core.keyword.call(null,cljs.core.first.call(null,m));if(cljs.core.truth_(pred__29897.call(null,new cljs.core.Keyword(null,"fraction","fraction",107940680),expr__29898)))
{return (n * cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__29897.call(null,new cljs.core.Keyword(null,"plus-mod","plus-mod",248204419),expr__29898)))
{return (n + cljs.core.second.call(null,m));
} else
{if(cljs.core.truth_(pred__29897.call(null,new cljs.core.Keyword(null,"just","just",466318146),expr__29898)))
{return cljs.looperscript.iterator.justify.call(null,n);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29898))));
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
var G__29900__delegate = function (args){while(true){
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
var G__29900 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29900__delegate.call(this,args);};
G__29900.cljs$lang$maxFixedArity = 0;
G__29900.cljs$lang$applyTo = (function (arglist__29901){
var args = cljs.core.seq(arglist__29901);
return G__29900__delegate(args);
});
G__29900.cljs$core$IFn$_invoke$arity$variadic = G__29900__delegate;
return G__29900;
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
