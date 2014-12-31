// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.interp_rhythms');
goog.require('cljs.core');
cljs.looperscript.interp_rhythms.cumulative = cljs.core.memoize.call(null,(function (v){return cljs.core.reductions.call(null,cljs.core._PLUS_,(0),v);
}));
cljs.looperscript.interp_rhythms.blend = (function blend(a,b,percent){return ((percent * b) + (((1) - percent) * a));
});
cljs.looperscript.interp_rhythms.whole_QMARK_ = (function whole_QMARK_(n){return (cljs.core.mod.call(null,n,(1)) === (0));
});
cljs.looperscript.interp_rhythms.ints_nth = cljs.core.memoize.call(null,(function (rhythm,n){var cums = cljs.looperscript.interp_rhythms.cumulative.call(null,rhythm);var rhythm_len = cljs.core.last.call(null,cums);var cnt = cljs.core.count.call(null,rhythm);var chorus = ((n / cnt) | (0));var chorus_start = (rhythm_len * chorus);var pos_in_chorus = cljs.core.mod.call(null,n,cnt);return (cljs.core.nth.call(null,cums,pos_in_chorus) + chorus_start);
}));
cljs.looperscript.interp_rhythms.rhythms_interp = (function rhythms_interp(rs,n){var r = cljs.core.last.call(null,rs);var vec__26652 = ((!(cljs.core.map_QMARK_.call(null,r)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,(0)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,r,new cljs.core.Keyword(null,"r","r",-471384190)),cljs.core.get.call(null,r,new cljs.core.Keyword(null,"offset","offset",296498311))], null));var r__$1 = cljs.core.nth.call(null,vec__26652,(0),null);var offset = cljs.core.nth.call(null,vec__26652,(1),null);var n__$1 = (n + offset);var rem_rs = cljs.core.drop_last.call(null,rs);var whole = cljs.looperscript.interp_rhythms.whole_QMARK_.call(null,n__$1);var res = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,rs),(1)))?((whole)?cljs.looperscript.interp_rhythms.ints_nth.call(null,r__$1,n__$1):cljs.looperscript.interp_rhythms.blend.call(null,cljs.looperscript.interp_rhythms.ints_nth.call(null,r__$1,(n__$1 | (0))),cljs.looperscript.interp_rhythms.ints_nth.call(null,r__$1,((n__$1 | (0)) + (1))),cljs.core.mod.call(null,n__$1,(1)))):((whole)?rhythms_interp.call(null,rem_rs,cljs.looperscript.interp_rhythms.ints_nth.call(null,r__$1,n__$1)):cljs.looperscript.interp_rhythms.blend.call(null,rhythms_interp.call(null,rem_rs,cljs.looperscript.interp_rhythms.ints_nth.call(null,r__$1,(n__$1 | (0)))),rhythms_interp.call(null,rem_rs,cljs.looperscript.interp_rhythms.ints_nth.call(null,r__$1,((n__$1 | (0)) + (1)))),cljs.core.mod.call(null,n__$1,(1)))));return res;
});
cljs.looperscript.interp_rhythms.upper_bound = (function upper_bound(f,n){var i = (1);while(true){
if((f.call(null,i) > n))
{return i;
} else
{{
var G__26653 = (i * (2));
i = G__26653;
continue;
}
}
break;
}
});
cljs.looperscript.interp_rhythms.binary_search = (function binary_search(f,n){var l_bound = (0);var u_bound = cljs.looperscript.interp_rhythms.upper_bound.call(null,f,n);while(true){
if(((1) >= (u_bound - l_bound)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_bound,u_bound], null);
} else
{var new_i = cljs.looperscript.interp_rhythms.blend.call(null,l_bound,u_bound,0.5);var new_n = f.call(null,new_i);var vec__26655 = (((new_n > n))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [l_bound,new_i], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_i,u_bound], null));var l_bound__$1 = cljs.core.nth.call(null,vec__26655,(0),null);var u_bound__$1 = cljs.core.nth.call(null,vec__26655,(1),null);{
var G__26656 = l_bound__$1;
var G__26657 = u_bound__$1;
l_bound = G__26656;
u_bound = G__26657;
continue;
}
}
break;
}
});
cljs.looperscript.interp_rhythms.pos_in_layered_rhythm = (function pos_in_layered_rhythm(rs,t){return cljs.looperscript.interp_rhythms.binary_search.call(null,cljs.core.partial.call(null,cljs.looperscript.interp_rhythms.rhythms_interp,rs),t);
});
cljs.looperscript.interp_rhythms.next_hit_of_layered_rhythm = (function next_hit_of_layered_rhythm(rs,t){return cljs.looperscript.interp_rhythms.rhythms_interp.call(null,rs,cljs.core.second.call(null,cljs.looperscript.interp_rhythms.pos_in_layered_rhythm.call(null,rs,t)));
});
