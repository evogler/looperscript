// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.next_note_fn');
goog.require('cljs.core');
goog.require('cljs.looperscript.logging');
goog.require('cljs.looperscript.globals');
goog.require('cljs.looperscript.iterator');
if(typeof cljs.looperscript.next_note_fn.aspects !== 'undefined'){
} else {
cljs.looperscript.next_note_fn.aspects = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)], null);
}
if(typeof cljs.looperscript.next_note_fn.aspect_defaults !== 'undefined'){
} else {
cljs.looperscript.next_note_fn.aspect_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drum-code","drum-code",2081814302),"d"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intact-for-sub-time","intact-for-sub-time",1903796476),new cljs.core.Keyword(null,"true","true",-1114210334)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sawtooth"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2500)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)]);
}
if(typeof cljs.looperscript.next_note_fn.params !== 'undefined'){
} else {
cljs.looperscript.next_note_fn.params = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.looperscript.next_note_fn.separate_multi_aspects = (function cljs$looperscript$next_note_fn$separate_multi_aspects(part){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,p__70086){
var vec__70087 = p__70086;
var k = cljs.core.nth.call(null,vec__70087,(0),null);
var v = cljs.core.nth.call(null,vec__70087,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,k))){
return cljs.core.assoc.call(null,m,cljs.core.first.call(null,k),v);
} else {
return cljs.core.reduce.call(null,cljs.core.into,m,(function (){var iter__28517__auto__ = ((function (vec__70087,k,v){
return (function cljs$looperscript$next_note_fn$separate_multi_aspects_$_iter__70090(s__70091){
return (new cljs.core.LazySeq(null,((function (vec__70087,k,v){
return (function (){
var s__70091__$1 = s__70091;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__70091__$1);
if(temp__4657__auto__){
var s__70091__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70091__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__70091__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__70093 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__70092 = (0);
while(true){
if((i__70092 < size__28516__auto__)){
var i = cljs.core._nth.call(null,c__28515__auto__,i__70092);
cljs.core.chunk_append.call(null,b__70093,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]));

var G__70094 = (i__70092 + (1));
i__70092 = G__70094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70093),cljs$looperscript$next_note_fn$separate_multi_aspects_$_iter__70090.call(null,cljs.core.chunk_rest.call(null,s__70091__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70093),null);
}
} else {
var i = cljs.core.first.call(null,s__70091__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]),cljs$looperscript$next_note_fn$separate_multi_aspects_$_iter__70090.call(null,cljs.core.rest.call(null,s__70091__$2)));
}
} else {
return null;
}
break;
}
});})(vec__70087,k,v))
,null,null));
});})(vec__70087,k,v))
;
return iter__28517__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,k)));
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,cljs.core.dissoc.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)));
});
cljs.looperscript.next_note_fn.make_iterators = (function cljs$looperscript$next_note_fn$make_iterators(part){
var part__$1 = cljs.looperscript.next_note_fn.separate_multi_aspects.call(null,part);
var part_keys = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,((function (part__$1){
return (function (p1__70095_SHARP_){
return cljs.core._EQ_.call(null,p1__70095_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(part__$1))
,cljs.core.keys.call(null,part__$1)));
var specified_aspects = cljs.core.set.call(null,part_keys);
var sub_aspects = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,part__$1)));
var non_specified_aspects = cljs.core.remove.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects){
return (function (p1__70096_SHARP_){
return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__70096_SHARP_);
});})(part__$1,part_keys,specified_aspects,sub_aspects))
,cljs.looperscript.next_note_fn.aspects);
return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__70097_SHARP_){
if(cljs.core.contains_QMARK_.call(null,sub_aspects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__70097_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null))){
return cljs.looperscript.iterator.timed_iterator.call(null,cljs.core.get.call(null,part__$1,p1__70097_SHARP_),cljs.core.get.call(null,part__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__70097_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)));
} else {
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part__$1,p1__70097_SHARP_));

}
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,non_specified_aspects,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__70098_SHARP_){
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.next_note_fn.aspect_defaults,p1__70098_SHARP_));
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.next_note_fn.next_note_fn = (function cljs$looperscript$next_note_fn$next_note_fn(part,start_time,params){
var iterators = cljs.looperscript.next_note_fn.make_iterators.call(null,part);
var bpm = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(params);
var _ = cljs.core.println.call(null,"YOOO",bpm);
var time_pos = cljs.core.atom.call(null,(start_time + (bpm * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));
return ((function (iterators,bpm,_,time_pos){
return (function() {
var G__70109 = null;
var G__70109__0 = (function (){
while(true){
var adjusted_time_pos = (1.0E-7 + ((cljs.core.deref.call(null,time_pos) - start_time) / bpm));
var res_time = new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(iterators).call(null,adjusted_time_pos);
var res = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1385887882),res_time], null);
if((cljs.core.sequential_QMARK_.call(null,res_time)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,res_time),new cljs.core.Keyword(null,"rest","rest",-1241696419)))){
var res__$1 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"rest","rest",-1241696419),true),new cljs.core.Keyword(null,"start-time","start-time",814801386),cljs.core.deref.call(null,time_pos)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core.second),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core._STAR_,bpm);
cljs.core.swap_BANG_.call(null,time_pos,cljs.core._PLUS_,res__$1.call(null,new cljs.core.Keyword(null,"time","time",1385887882)));

return res__$1;
} else {
var res_v = (function (){var iter__28517__auto__ = ((function (adjusted_time_pos,res_time,res,iterators,bpm,_,time_pos){
return (function cljs$looperscript$next_note_fn$next_note_fn_$_iter__70099(s__70100){
return (new cljs.core.LazySeq(null,((function (adjusted_time_pos,res_time,res,iterators,bpm,_,time_pos){
return (function (){
var s__70100__$1 = s__70100;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__70100__$1);
if(temp__4657__auto__){
var s__70100__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70100__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__70100__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__70102 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__70101 = (0);
while(true){
if((i__70101 < size__28516__auto__)){
var vec__70103 = cljs.core._nth.call(null,c__28515__auto__,i__70101);
var aspect = cljs.core.nth.call(null,vec__70103,(0),null);
var iter = cljs.core.nth.call(null,vec__70103,(1),null);
cljs.core.chunk_append.call(null,b__70102,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null));

var G__70110 = (i__70101 + (1));
i__70101 = G__70110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70102),cljs$looperscript$next_note_fn$next_note_fn_$_iter__70099.call(null,cljs.core.chunk_rest.call(null,s__70100__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70102),null);
}
} else {
var vec__70106 = cljs.core.first.call(null,s__70100__$2);
var aspect = cljs.core.nth.call(null,vec__70106,(0),null);
var iter = cljs.core.nth.call(null,vec__70106,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null),cljs$looperscript$next_note_fn$next_note_fn_$_iter__70099.call(null,cljs.core.rest.call(null,s__70100__$2)));
}
} else {
return null;
}
break;
}
});})(adjusted_time_pos,res_time,res,iterators,bpm,_,time_pos))
,null,null));
});})(adjusted_time_pos,res_time,res,iterators,bpm,_,time_pos))
;
return iter__28517__auto__.call(null,cljs.core.dissoc.call(null,iterators,new cljs.core.Keyword(null,"time","time",1385887882)));
})();
var res__$1 = cljs.core.into.call(null,res,res_v);
var res__$2 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,res__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386),cljs.core.deref.call(null,time_pos)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core._STAR_,bpm),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time+","time+",2008858809)], null),cljs.core._STAR_,bpm);
if(((0) >= res__$2.call(null,new cljs.core.Keyword(null,"skip","skip",602715391)))){
continue;
} else {
cljs.core.swap_BANG_.call(null,time_pos,cljs.core._PLUS_,res__$2.call(null,new cljs.core.Keyword(null,"time","time",1385887882)));

return res__$2;
}
}
break;
}
});
var G__70109__1 = (function (command){
if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))){
return cljs.core.deref.call(null,time_pos);
} else {
return null;
}
});
G__70109 = function(command){
switch(arguments.length){
case 0:
return G__70109__0.call(this);
case 1:
return G__70109__1.call(this,command);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__70109.cljs$core$IFn$_invoke$arity$0 = G__70109__0;
G__70109.cljs$core$IFn$_invoke$arity$1 = G__70109__1;
return G__70109;
})()
;})(iterators,bpm,_,time_pos))
});

//# sourceMappingURL=next_note_fn.js.map?rel=1512951907965
