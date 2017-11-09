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
var seq__32214 = cljs.core.seq.call(null,cljs.core.reverse.call(null,v));
var chunk__32215 = null;
var count__32216 = (0);
var i__32217 = (0);
while(true){
if((i__32217 < count__32216)){
var i = cljs.core._nth.call(null,chunk__32215,i__32217);
cljs.looperscript.iterator.push_BANG_.call(null,stack,i);

var G__32218 = seq__32214;
var G__32219 = chunk__32215;
var G__32220 = count__32216;
var G__32221 = (i__32217 + (1));
seq__32214 = G__32218;
chunk__32215 = G__32219;
count__32216 = G__32220;
i__32217 = G__32221;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32214);
if(temp__4657__auto__){
var seq__32214__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32214__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__32214__$1);
var G__32222 = cljs.core.chunk_rest.call(null,seq__32214__$1);
var G__32223 = c__28775__auto__;
var G__32224 = cljs.core.count.call(null,c__28775__auto__);
var G__32225 = (0);
seq__32214 = G__32222;
chunk__32215 = G__32223;
count__32216 = G__32224;
i__32217 = G__32225;
continue;
} else {
var i = cljs.core.first.call(null,seq__32214__$1);
cljs.looperscript.iterator.push_BANG_.call(null,stack,i);

var G__32226 = cljs.core.next.call(null,seq__32214__$1);
var G__32227 = null;
var G__32228 = (0);
var G__32229 = (0);
seq__32214 = G__32226;
chunk__32215 = G__32227;
count__32216 = G__32228;
i__32217 = G__32229;
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
var G__32230 = r.call(null);
r = G__32230;
continue;
} else {
return r;
}
break;
}
});
cljs.looperscript.iterator.get_next_stack_val = (function cljs$looperscript$iterator$get_next_stack_val(var_args){
var G__32232 = arguments.length;
switch (G__32232) {
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
var preserve_QMARK_ = (function (){var and__27924__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,x),new cljs.core.Keyword(null,"intact-for-sub-time","intact-for-sub-time",1903796476));
if(cljs.core.truth_(and__27924__auto__)){
return preserve_carots_QMARK_;
} else {
return and__27924__auto__;
}
})();
var x__$1 = ((cljs.core.not.call(null,preserve_QMARK_))?cljs.looperscript.iterator.dethunk.call(null,x):x);
if(((cljs.core.seq_QMARK_.call(null,x__$1)) || (cljs.core.vector_QMARK_.call(null,x__$1))) && (cljs.core.not.call(null,preserve_QMARK_)) && (!((cljs.core.first.call(null,x__$1) instanceof cljs.core.Keyword)))){
var seq__32233_32238 = cljs.core.seq.call(null,cljs.core.reverse.call(null,x__$1));
var chunk__32234_32239 = null;
var count__32235_32240 = (0);
var i__32236_32241 = (0);
while(true){
if((i__32236_32241 < count__32235_32240)){
var i_32242 = cljs.core._nth.call(null,chunk__32234_32239,i__32236_32241);
cljs.looperscript.iterator.push_BANG_.call(null,stack,i_32242);

var G__32243 = seq__32233_32238;
var G__32244 = chunk__32234_32239;
var G__32245 = count__32235_32240;
var G__32246 = (i__32236_32241 + (1));
seq__32233_32238 = G__32243;
chunk__32234_32239 = G__32244;
count__32235_32240 = G__32245;
i__32236_32241 = G__32246;
continue;
} else {
var temp__4657__auto___32247 = cljs.core.seq.call(null,seq__32233_32238);
if(temp__4657__auto___32247){
var seq__32233_32248__$1 = temp__4657__auto___32247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32233_32248__$1)){
var c__28775__auto___32249 = cljs.core.chunk_first.call(null,seq__32233_32248__$1);
var G__32250 = cljs.core.chunk_rest.call(null,seq__32233_32248__$1);
var G__32251 = c__28775__auto___32249;
var G__32252 = cljs.core.count.call(null,c__28775__auto___32249);
var G__32253 = (0);
seq__32233_32238 = G__32250;
chunk__32234_32239 = G__32251;
count__32235_32240 = G__32252;
i__32236_32241 = G__32253;
continue;
} else {
var i_32254 = cljs.core.first.call(null,seq__32233_32248__$1);
cljs.looperscript.iterator.push_BANG_.call(null,stack,i_32254);

var G__32255 = cljs.core.next.call(null,seq__32233_32248__$1);
var G__32256 = null;
var G__32257 = (0);
var G__32258 = (0);
seq__32233_32238 = G__32255;
chunk__32234_32239 = G__32256;
count__32235_32240 = G__32257;
i__32236_32241 = G__32258;
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
var vec__32259 = cljs.core.get.call(null,cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(11),(9),(5),(10),(8)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(32)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5)], null)]),p);
var num = cljs.core.nth.call(null,vec__32259,(0),null);
var den = cljs.core.nth.call(null,vec__32259,(1),null);
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
var pred__32262 = cljs.core._EQ_;
var expr__32263 = cljs.core.keyword.call(null,cljs.core.first.call(null,m));
if(cljs.core.truth_(pred__32262.call(null,new cljs.core.Keyword(null,"fraction","fraction",107940680),expr__32263))){
return (n * cljs.core.second.call(null,m));
} else {
if(cljs.core.truth_(pred__32262.call(null,new cljs.core.Keyword(null,"plus-mod","plus-mod",248204419),expr__32263))){
return (n + cljs.core.second.call(null,m));
} else {
if(cljs.core.truth_(pred__32262.call(null,new cljs.core.Keyword(null,"just","just",466318146),expr__32263))){
return cljs.looperscript.iterator.justify.call(null,n);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__32263)].join('')));
}
}
}
}
}),x,mods);
});
cljs.looperscript.iterator.iterator = (function cljs$looperscript$iterator$iterator(var_args){
var G__32266 = arguments.length;
switch (G__32266) {
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
var G__32268__delegate = function (args){
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
var G__32268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32269__i = 0, G__32269__a = new Array(arguments.length -  0);
while (G__32269__i < G__32269__a.length) {G__32269__a[G__32269__i] = arguments[G__32269__i + 0]; ++G__32269__i;}
  args = new cljs.core.IndexedSeq(G__32269__a,0,null);
} 
return G__32268__delegate.call(this,args);};
G__32268.cljs$lang$maxFixedArity = 0;
G__32268.cljs$lang$applyTo = (function (arglist__32270){
var args = cljs.core.seq(arglist__32270);
return G__32268__delegate(args);
});
G__32268.cljs$core$IFn$_invoke$arity$variadic = G__32268__delegate;
return G__32268;
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

//# sourceMappingURL=iterator.js.map?rel=1509845005793
