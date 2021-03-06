// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.iterator');
goog.require('cljs.core');
goog.require('cljs.looperscript.logging');
goog.require('cljs.looperscript.globals');
cljs.looperscript.iterator.intact_QMARK_ = (function cljs$looperscript$iterator$intact_QMARK_(v){
return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,v),new cljs.core.Keyword(null,"intact-for-sub-time","intact-for-sub-time",1903796476));
});
cljs.looperscript.iterator.pop_BANG__STAR_ = (function cljs$looperscript$iterator$pop_BANG__STAR_(stack){
var res = cljs.core.last.call(null,cljs.core.deref.call(null,stack));
cljs.core.swap_BANG_.call(null,stack,cljs.core.comp.call(null,cljs.core.vec,cljs.core.drop_last));

return res;
});
cljs.looperscript.iterator.push_BANG_ = (function cljs$looperscript$iterator$push_BANG_(stack,x){
if(!((x == null))){
return cljs.core.swap_BANG_.call(null,stack,cljs.core.conj,x);
} else {
return null;
}
});
cljs.looperscript.iterator.vec_push_BANG_ = (function cljs$looperscript$iterator$vec_push_BANG_(stack,v){
if(cljs.core.truth_(cljs.looperscript.iterator.intact_QMARK_.call(null,v))){
return cljs.looperscript.iterator.push_BANG_.call(null,stack,v);
} else {
var seq__80709 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));
var chunk__80710 = null;
var count__80711 = (0);
var i__80712 = (0);
while(true){
if((i__80712 < count__80711)){
var i = cljs.core._nth.call(null,chunk__80710,i__80712);
cljs.looperscript.iterator.push_BANG_.call(null,stack,i);

var G__80713 = seq__80709;
var G__80714 = chunk__80710;
var G__80715 = count__80711;
var G__80716 = (i__80712 + (1));
seq__80709 = G__80713;
chunk__80710 = G__80714;
count__80711 = G__80715;
i__80712 = G__80716;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__80709);
if(temp__4657__auto__){
var seq__80709__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80709__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__80709__$1);
var G__80717 = cljs.core.chunk_rest.call(null,seq__80709__$1);
var G__80718 = c__28548__auto__;
var G__80719 = cljs.core.count.call(null,c__28548__auto__);
var G__80720 = (0);
seq__80709 = G__80717;
chunk__80710 = G__80718;
count__80711 = G__80719;
i__80712 = G__80720;
continue;
} else {
var i = cljs.core.first.call(null,seq__80709__$1);
cljs.looperscript.iterator.push_BANG_.call(null,stack,i);

var G__80721 = cljs.core.next.call(null,seq__80709__$1);
var G__80722 = null;
var G__80723 = (0);
var G__80724 = (0);
seq__80709 = G__80721;
chunk__80710 = G__80722;
count__80711 = G__80723;
i__80712 = G__80724;
continue;
}
} else {
return null;
}
}
break;
}
}
});
cljs.looperscript.iterator.dethunk = (function cljs$looperscript$iterator$dethunk(x){
var r = x;
while(true){
if(cljs.core.fn_QMARK_.call(null,r)){
var G__80725 = r.call(null);
r = G__80725;
continue;
} else {
return r;
}
break;
}
});
cljs.looperscript.iterator.takes_current_time_QMARK_ = (function cljs$looperscript$iterator$takes_current_time_QMARK_(x){
return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,x),new cljs.core.Keyword(null,"takes-current-time","takes-current-time",-2104302207));
});
cljs.looperscript.iterator.get_next_stack_val = (function cljs$looperscript$iterator$get_next_stack_val(var_args){
var G__80727 = arguments.length;
switch (G__80727) {
case 2:
return cljs.looperscript.iterator.get_next_stack_val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.looperscript.iterator.get_next_stack_val.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.looperscript.iterator.get_next_stack_val.cljs$core$IFn$_invoke$arity$2 = (function (stack,current_time){
return cljs.looperscript.iterator.get_next_stack_val.call(null,stack,true,current_time);
});

cljs.looperscript.iterator.get_next_stack_val.cljs$core$IFn$_invoke$arity$3 = (function (stack,preserve_carots_QMARK_,current_time){
var x = cljs.looperscript.iterator.pop_BANG__STAR_.call(null,stack);
var preserve_QMARK_ = (function (){var and__27697__auto__ = cljs.looperscript.iterator.intact_QMARK_.call(null,x);
if(cljs.core.truth_(and__27697__auto__)){
return preserve_carots_QMARK_;
} else {
return and__27697__auto__;
}
})();
var x__$1 = ((cljs.core.not.call(null,preserve_QMARK_))?cljs.looperscript.iterator.dethunk.call(null,x):x);
if(((cljs.core.seq_QMARK_.call(null,x__$1)) || (cljs.core.vector_QMARK_.call(null,x__$1))) && (cljs.core.not.call(null,preserve_QMARK_)) && (!((cljs.core.first.call(null,x__$1) instanceof cljs.core.Keyword)))){
var seq__80728_80733 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x__$1));
var chunk__80729_80734 = null;
var count__80730_80735 = (0);
var i__80731_80736 = (0);
while(true){
if((i__80731_80736 < count__80730_80735)){
var i_80737 = cljs.core._nth.call(null,chunk__80729_80734,i__80731_80736);
cljs.looperscript.iterator.push_BANG_.call(null,stack,i_80737);

var G__80738 = seq__80728_80733;
var G__80739 = chunk__80729_80734;
var G__80740 = count__80730_80735;
var G__80741 = (i__80731_80736 + (1));
seq__80728_80733 = G__80738;
chunk__80729_80734 = G__80739;
count__80730_80735 = G__80740;
i__80731_80736 = G__80741;
continue;
} else {
var temp__4657__auto___80742 = cljs.core.seq.call(null,seq__80728_80733);
if(temp__4657__auto___80742){
var seq__80728_80743__$1 = temp__4657__auto___80742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__80728_80743__$1)){
var c__28548__auto___80744 = cljs.core.chunk_first.call(null,seq__80728_80743__$1);
var G__80745 = cljs.core.chunk_rest.call(null,seq__80728_80743__$1);
var G__80746 = c__28548__auto___80744;
var G__80747 = cljs.core.count.call(null,c__28548__auto___80744);
var G__80748 = (0);
seq__80728_80733 = G__80745;
chunk__80729_80734 = G__80746;
count__80730_80735 = G__80747;
i__80731_80736 = G__80748;
continue;
} else {
var i_80749 = cljs.core.first.call(null,seq__80728_80743__$1);
cljs.looperscript.iterator.push_BANG_.call(null,stack,i_80749);

var G__80750 = cljs.core.next.call(null,seq__80728_80743__$1);
var G__80751 = null;
var G__80752 = (0);
var G__80753 = (0);
seq__80728_80733 = G__80750;
chunk__80729_80734 = G__80751;
count__80730_80735 = G__80752;
i__80731_80736 = G__80753;
continue;
}
} else {
}
}
break;
}

return cljs.looperscript.iterator.get_next_stack_val.call(null,stack,current_time);
} else {
return x__$1;
}
});

cljs.looperscript.iterator.get_next_stack_val.cljs$lang$maxFixedArity = 3;

cljs.looperscript.iterator.modifier_QMARK_ = (function cljs$looperscript$iterator$modifier_QMARK_(x){
return (cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"modifier","modifier",1634442788)));
});
cljs.looperscript.iterator.modifier_fn_QMARK_ = (function cljs$looperscript$iterator$modifier_fn_QMARK_(x){
return (cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"modifier-fn","modifier-fn",-1624543303)));
});
cljs.looperscript.iterator.justify = (function cljs$looperscript$iterator$justify(n){
var p = cljs.core.mod.call(null,n,(12));
var oct = (n - p);
var vec__80754 = cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(11),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)]),p);
var num = cljs.core.nth.call(null,vec__80754,(0),null);
var den = cljs.core.nth.call(null,vec__80754,(1),null);
if(cljs.core.not.call(null,num)){
return n;
} else {
return (oct + ((12) * (Math.log((num / den)) / Math.log((2)))));
}
});
cljs.looperscript.iterator.apply_modifiers = (function cljs$looperscript$iterator$apply_modifiers(mods,x){
return cljs.core.reduce.call(null,(function (n,m){
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,n);
} else {
var pred__80757 = cljs.core._EQ_;
var expr__80758 = cljs.core.keyword.call(null,cljs.core.first.call(null,m));
if(cljs.core.truth_(pred__80757.call(null,new cljs.core.Keyword(null,"fraction","fraction",107940680),expr__80758))){
return (n * cljs.core.second.call(null,m));
} else {
if(cljs.core.truth_(pred__80757.call(null,new cljs.core.Keyword(null,"plus-mod","plus-mod",248204419),expr__80758))){
return (n + cljs.core.second.call(null,m));
} else {
if(cljs.core.truth_(pred__80757.call(null,new cljs.core.Keyword(null,"just","just",466318146),expr__80758))){
return cljs.looperscript.iterator.justify.call(null,n);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__80758)].join('')));
}
}
}
}
}),x,mods);
});
cljs.looperscript.iterator.iterator = (function cljs$looperscript$iterator$iterator(var_args){
var G__80761 = arguments.length;
switch (G__80761) {
case 1:
return cljs.looperscript.iterator.iterator.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.looperscript.iterator.iterator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.looperscript.iterator.iterator.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cljs.looperscript.iterator.iterator.call(null,v,true);
});

cljs.looperscript.iterator.iterator.cljs$core$IFn$_invoke$arity$2 = (function (v,preserve_carots_QMARK_){
var stack = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var modifiers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return ((function (stack,modifiers){
return (function (current_time){
while(true){
var empties_80763 = (0);
while(true){
if((empties_80763 > (100))){
(function(){throw (new Error("Error: empty aspect"))})().call(null);
} else {
}

if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,stack))){
cljs.core.reset_BANG_.call(null,modifiers,cljs.core.PersistentVector.EMPTY);

cljs.looperscript.iterator.vec_push_BANG_.call(null,stack,v);

var G__80764 = (empties_80763 + (1));
empties_80763 = G__80764;
continue;
} else {
}
break;
}

cljs.core.reset_BANG_.call(null,cljs.looperscript.globals.current_time_hack,current_time);

var x = cljs.looperscript.iterator.get_next_stack_val.call(null,stack,preserve_carots_QMARK_,current_time);
if(((x == null)) || ((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.empty_QMARK_.call(null,x)))){
continue;
} else {
if(cljs.core.truth_(cljs.looperscript.iterator.modifier_fn_QMARK_.call(null,x))){
cljs.core.swap_BANG_.call(null,modifiers,cljs.core.conj,cljs.core.second.call(null,x));

continue;
} else {
if(cljs.core.truth_(cljs.looperscript.iterator.modifier_QMARK_.call(null,x))){
cljs.core.swap_BANG_.call(null,modifiers,cljs.core.conj,cljs.core.map.call(null,cljs.looperscript.iterator.dethunk,cljs.core.second.call(null,x)));

continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,x)], null),cljs.core.meta.call(null,x)),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.looperscript.iterator.apply_modifiers,cljs.core.deref.call(null,modifiers)),cljs.core.rest.call(null,x)));
} else {
return cljs.looperscript.iterator.apply_modifiers.call(null,cljs.core.deref.call(null,modifiers),x);

}
}
}
}
break;
}
});
;})(stack,modifiers))
});

cljs.looperscript.iterator.iterator.cljs$lang$maxFixedArity = 2;

cljs.looperscript.iterator.timed_iterator = (function cljs$looperscript$iterator$timed_iterator(v,time_v){
var v_iterator = cljs.looperscript.iterator.iterator.call(null,v,true);
var time_iterator = cljs.looperscript.iterator.iterator.call(null,time_v);
var get_next_v = ((function (v_iterator,time_iterator){
return (function (){
var next_v = v_iterator.call(null);
if((cljs.core.vector_QMARK_.call(null,next_v)) && (!((cljs.core.first.call(null,next_v) instanceof cljs.core.Keyword))) && (cljs.core.not.call(null,cljs.looperscript.iterator.intact_QMARK_.call(null,next_v)))){
return cljs.looperscript.iterator.iterator.call(null,next_v,false);
} else {
if(cljs.core.fn_QMARK_.call(null,next_v)){
return cljs.looperscript.iterator.iterator.call(null,next_v.call(null),false);
} else {
return next_v;

}
}
});})(v_iterator,time_iterator))
;
var current_val = cljs.core.atom.call(null,get_next_v.call(null));
var current_val_expiration_time = cljs.core.atom.call(null,time_iterator.call(null));
return ((function (v_iterator,time_iterator,get_next_v,current_val,current_val_expiration_time){
return (function (note_time){
while(true){
if((note_time >= cljs.core.deref.call(null,current_val_expiration_time))){
cljs.core.swap_BANG_.call(null,current_val_expiration_time,cljs.core._PLUS_,time_iterator.call(null));

cljs.core.reset_BANG_.call(null,current_val,get_next_v.call(null));

continue;
} else {
}
break;
}

return cljs.looperscript.iterator.dethunk.call(null,cljs.core.deref.call(null,current_val));
});
;})(v_iterator,time_iterator,get_next_v,current_val,current_val_expiration_time))
});

//# sourceMappingURL=iterator.js.map?rel=1513050407916
