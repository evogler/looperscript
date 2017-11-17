// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.iterator');
goog.require('cljs.core');
goog.require('cljs.looperscript.logging');
cljs.looperscript.iterator._pop_BANG_ = (function cljs$looperscript$iterator$_pop_BANG_(stack){
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
var seq__15607 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));
var chunk__15608 = null;
var count__15609 = (0);
var i__15610 = (0);
while(true){
if((i__15610 < count__15609)){
var i = cljs.core._nth.call(null,chunk__15608,i__15610);
cljs.looperscript.iterator.push_BANG_.call(null,stack,i);

var G__15611 = seq__15607;
var G__15612 = chunk__15608;
var G__15613 = count__15609;
var G__15614 = (i__15610 + (1));
seq__15607 = G__15611;
chunk__15608 = G__15612;
count__15609 = G__15613;
i__15610 = G__15614;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15607);
if(temp__4657__auto__){
var seq__15607__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15607__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__15607__$1);
var G__15615 = cljs.core.chunk_rest.call(null,seq__15607__$1);
var G__15616 = c__8257__auto__;
var G__15617 = cljs.core.count.call(null,c__8257__auto__);
var G__15618 = (0);
seq__15607 = G__15615;
chunk__15608 = G__15616;
count__15609 = G__15617;
i__15610 = G__15618;
continue;
} else {
var i = cljs.core.first.call(null,seq__15607__$1);
cljs.looperscript.iterator.push_BANG_.call(null,stack,i);

var G__15619 = cljs.core.next.call(null,seq__15607__$1);
var G__15620 = null;
var G__15621 = (0);
var G__15622 = (0);
seq__15607 = G__15619;
chunk__15608 = G__15620;
count__15609 = G__15621;
i__15610 = G__15622;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.looperscript.iterator.dethunk = (function cljs$looperscript$iterator$dethunk(x){
var r = x;
while(true){
if(cljs.core.fn_QMARK_.call(null,r)){
var G__15623 = r.call(null);
r = G__15623;
continue;
} else {
return r;
}
break;
}
});
cljs.looperscript.iterator.get_next_stack_val = (function cljs$looperscript$iterator$get_next_stack_val(var_args){
var G__15625 = arguments.length;
switch (G__15625) {
case 1:
return cljs.looperscript.iterator.get_next_stack_val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.looperscript.iterator.get_next_stack_val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.looperscript.iterator.get_next_stack_val.cljs$core$IFn$_invoke$arity$1 = (function (stack){
return cljs.looperscript.iterator.get_next_stack_val.call(null,stack,true);
});

cljs.looperscript.iterator.get_next_stack_val.cljs$core$IFn$_invoke$arity$2 = (function (stack,preserve_carots_QMARK_){
var x = cljs.looperscript.iterator._pop_BANG_.call(null,stack);
var preserve_QMARK_ = (function (){var and__7406__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,x),new cljs.core.Keyword(null,"intact-for-sub-time","intact-for-sub-time",1903796476));
if(cljs.core.truth_(and__7406__auto__)){
return preserve_carots_QMARK_;
} else {
return and__7406__auto__;
}
})();
var x__$1 = ((cljs.core.not.call(null,preserve_QMARK_))?cljs.looperscript.iterator.dethunk.call(null,x):x);
if(((cljs.core.seq_QMARK_.call(null,x__$1)) || (cljs.core.vector_QMARK_.call(null,x__$1))) && (cljs.core.not.call(null,preserve_QMARK_)) && (!((cljs.core.first.call(null,x__$1) instanceof cljs.core.Keyword)))){
var seq__15626_15631 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x__$1));
var chunk__15627_15632 = null;
var count__15628_15633 = (0);
var i__15629_15634 = (0);
while(true){
if((i__15629_15634 < count__15628_15633)){
var i_15635 = cljs.core._nth.call(null,chunk__15627_15632,i__15629_15634);
cljs.looperscript.iterator.push_BANG_.call(null,stack,i_15635);

var G__15636 = seq__15626_15631;
var G__15637 = chunk__15627_15632;
var G__15638 = count__15628_15633;
var G__15639 = (i__15629_15634 + (1));
seq__15626_15631 = G__15636;
chunk__15627_15632 = G__15637;
count__15628_15633 = G__15638;
i__15629_15634 = G__15639;
continue;
} else {
var temp__4657__auto___15640 = cljs.core.seq.call(null,seq__15626_15631);
if(temp__4657__auto___15640){
var seq__15626_15641__$1 = temp__4657__auto___15640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15626_15641__$1)){
var c__8257__auto___15642 = cljs.core.chunk_first.call(null,seq__15626_15641__$1);
var G__15643 = cljs.core.chunk_rest.call(null,seq__15626_15641__$1);
var G__15644 = c__8257__auto___15642;
var G__15645 = cljs.core.count.call(null,c__8257__auto___15642);
var G__15646 = (0);
seq__15626_15631 = G__15643;
chunk__15627_15632 = G__15644;
count__15628_15633 = G__15645;
i__15629_15634 = G__15646;
continue;
} else {
var i_15647 = cljs.core.first.call(null,seq__15626_15641__$1);
cljs.looperscript.iterator.push_BANG_.call(null,stack,i_15647);

var G__15648 = cljs.core.next.call(null,seq__15626_15641__$1);
var G__15649 = null;
var G__15650 = (0);
var G__15651 = (0);
seq__15626_15631 = G__15648;
chunk__15627_15632 = G__15649;
count__15628_15633 = G__15650;
i__15629_15634 = G__15651;
continue;
}
} else {
}
}
break;
}

return cljs.looperscript.iterator.get_next_stack_val.call(null,stack);
} else {
return x__$1;
}
});

cljs.looperscript.iterator.get_next_stack_val.cljs$lang$maxFixedArity = 2;

cljs.looperscript.iterator.modifier_QMARK_ = (function cljs$looperscript$iterator$modifier_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"modifier","modifier",1634442788)));
});
cljs.looperscript.iterator.modifier_fn_QMARK_ = (function cljs$looperscript$iterator$modifier_fn_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"modifier-fn","modifier-fn",-1624543303)));
});
cljs.looperscript.iterator.justify = (function cljs$looperscript$iterator$justify(n){
var p = cljs.core.mod.call(null,n,(12));
var oct = (n - p);
var vec__15652 = cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(11),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)]),p);
var num = cljs.core.nth.call(null,vec__15652,(0),null);
var den = cljs.core.nth.call(null,vec__15652,(1),null);
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
var pred__15655 = cljs.core._EQ_;
var expr__15656 = cljs.core.keyword.call(null,cljs.core.first.call(null,m));
if(cljs.core.truth_(pred__15655.call(null,new cljs.core.Keyword(null,"fraction","fraction",107940680),expr__15656))){
return (n * cljs.core.second.call(null,m));
} else {
if(cljs.core.truth_(pred__15655.call(null,new cljs.core.Keyword(null,"plus-mod","plus-mod",248204419),expr__15656))){
return (n + cljs.core.second.call(null,m));
} else {
if(cljs.core.truth_(pred__15655.call(null,new cljs.core.Keyword(null,"just","just",466318146),expr__15656))){
return cljs.looperscript.iterator.justify.call(null,n);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15656)].join('')));
}
}
}
}
}),x,mods);
});
cljs.looperscript.iterator.iterator = (function cljs$looperscript$iterator$iterator(var_args){
var G__15659 = arguments.length;
switch (G__15659) {
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
return (function() { 
var G__15661__delegate = function (args){
while(true){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,stack))){
cljs.core.reset_BANG_.call(null,modifiers,cljs.core.PersistentVector.EMPTY);

cljs.looperscript.iterator.vec_push_BANG_.call(null,stack,v);
} else {
}

var x = cljs.looperscript.iterator.get_next_stack_val.call(null,stack,preserve_carots_QMARK_);
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
return cljs.looperscript.iterator.apply_modifiers.call(null,cljs.core.deref.call(null,modifiers),x);

}
}
}
break;
}
};
var G__15661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15662__i = 0, G__15662__a = new Array(arguments.length -  0);
while (G__15662__i < G__15662__a.length) {G__15662__a[G__15662__i] = arguments[G__15662__i + 0]; ++G__15662__i;}
  args = new cljs.core.IndexedSeq(G__15662__a,0,null);
} 
return G__15661__delegate.call(this,args);};
G__15661.cljs$lang$maxFixedArity = 0;
G__15661.cljs$lang$applyTo = (function (arglist__15663){
var args = cljs.core.seq(arglist__15663);
return G__15661__delegate(args);
});
G__15661.cljs$core$IFn$_invoke$arity$variadic = G__15661__delegate;
return G__15661;
})()
;
;})(stack,modifiers))
});

cljs.looperscript.iterator.iterator.cljs$lang$maxFixedArity = 2;

cljs.looperscript.iterator.timed_iterator = (function cljs$looperscript$iterator$timed_iterator(v,time_v){
var v_iterator = cljs.looperscript.iterator.iterator.call(null,v,true);
var time_iterator = cljs.looperscript.iterator.iterator.call(null,time_v);
var get_next_v = ((function (v_iterator,time_iterator){
return (function (){
var next_v = v_iterator.call(null);
if((cljs.core.vector_QMARK_.call(null,next_v)) && (!((cljs.core.first.call(null,next_v) instanceof cljs.core.Keyword)))){
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

//# sourceMappingURL=iterator.js.map
