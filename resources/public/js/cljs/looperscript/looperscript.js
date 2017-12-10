// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.looperscript');
goog.require('cljs.core');
goog.require('cljs.looperscript.address_bar');
goog.require('domina');
goog.require('domina.events');
goog.require('instaparse.core');
goog.require('taoensso.tufte');
goog.require('cljs.reader');
goog.require('cljs.looperscript.audio');
goog.require('cljs.looperscript.interpret');
goog.require('cljs.looperscript.iterator');
goog.require('cljs.looperscript.logging');
goog.require('cljs.looperscript.start_time');
var L = cljs.looperscript.looperscript;
if(typeof cljs.looperscript.looperscript.ctx !== 'undefined'){
} else {
cljs.looperscript.looperscript.ctx = cljs.looperscript.audio.ctx;
}
if(typeof cljs.looperscript.looperscript.playing !== 'undefined'){
} else {
cljs.looperscript.looperscript.playing = cljs.core.atom.call(null,false);
}
if(typeof cljs.looperscript.looperscript.playing_interval !== 'undefined'){
} else {
cljs.looperscript.looperscript.playing_interval = cljs.core.atom.call(null,null);
}
if(typeof cljs.looperscript.looperscript.current_next_note_fns !== 'undefined'){
} else {
cljs.looperscript.looperscript.current_next_note_fns = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
cljs.looperscript.looperscript.queue_time_interval = 0.05;
cljs.looperscript.looperscript.queue_time_extra = (2);
if(typeof cljs.looperscript.looperscript.last_queue_time !== 'undefined'){
} else {
cljs.looperscript.looperscript.last_queue_time = cljs.core.atom.call(null,null);
}
if(typeof cljs.looperscript.looperscript.params !== 'undefined'){
} else {
cljs.looperscript.looperscript.params = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof cljs.looperscript.looperscript.sounding_notes !== 'undefined'){
} else {
cljs.looperscript.looperscript.sounding_notes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof cljs.looperscript.looperscript.last_transformed_tree !== 'undefined'){
} else {
cljs.looperscript.looperscript.last_transformed_tree = cljs.core.atom.call(null,null);
}
if(typeof cljs.looperscript.looperscript.aspects !== 'undefined'){
} else {
cljs.looperscript.looperscript.aspects = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)], null);
}
if(typeof cljs.looperscript.looperscript.aspect_defaults !== 'undefined'){
} else {
cljs.looperscript.looperscript.aspect_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drum-code","drum-code",2081814302),"d"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"intact-for-sub-time","intact-for-sub-time",1903796476),new cljs.core.Keyword(null,"true","true",-1114210334)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sawtooth"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2500)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)]);
}
cljs.looperscript.looperscript.log_time = (function cljs$looperscript$looperscript$log_time(var_args){
var args__28885__auto__ = [];
var len__28878__auto___67716 = arguments.length;
var i__28879__auto___67717 = (0);
while(true){
if((i__28879__auto___67717 < len__28878__auto___67716)){
args__28885__auto__.push((arguments[i__28879__auto___67717]));

var G__67718 = (i__28879__auto___67717 + (1));
i__28879__auto___67717 = G__67718;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((1) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((1)),(0),null)):null);
return cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28886__auto__);
});

cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
var start_time = cljs.looperscript.start_time.now.call(null);
var res = f.call(null);
var run_time = (cljs.looperscript.start_time.now.call(null) - start_time);
cljs.looperscript.logging.log.call(null,run_time,args);

return res;
});

cljs.looperscript.looperscript.log_time.cljs$lang$maxFixedArity = (1);

cljs.looperscript.looperscript.log_time.cljs$lang$applyTo = (function (seq67714){
var G__67715 = cljs.core.first.call(null,seq67714);
var seq67714__$1 = cljs.core.next.call(null,seq67714);
return cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic(G__67715,seq67714__$1);
});

cljs.looperscript.looperscript.note__GT_freq = (function cljs$looperscript$looperscript$note__GT_freq(n){
return (261.625565 * Math.pow((2),(n / (12))));
});
cljs.looperscript.looperscript.ratio__GT_freq = (function cljs$looperscript$looperscript$ratio__GT_freq(r){
return (261.625565 * r);
});
cljs.looperscript.looperscript.get_bpm = (function cljs$looperscript$looperscript$get_bpm(){
var temp__4655__auto__ = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.looperscript.looperscript.params));
if(cljs.core.truth_(temp__4655__auto__)){
var bpm = temp__4655__auto__;
return bpm;
} else {
return (1);
}
});
cljs.looperscript.looperscript.dethunk = (function cljs$looperscript$looperscript$dethunk(x){
if(cljs.core.fn_QMARK_.call(null,x)){
return x.call(null);
} else {
return x;
}
});
cljs.looperscript.looperscript.get_looper_text = (function cljs$looperscript$looperscript$get_looper_text(){
return cljs.looperscript.interpret.remove_comments.call(null,editor.getValue());
});
cljs.looperscript.looperscript.get_parts = (function cljs$looperscript$looperscript$get_parts(){
var text = cljs.looperscript.looperscript.get_looper_text.call(null);
var start_time = cljs.looperscript.start_time.now.call(null);
var parse_tree = cljs.looperscript.interpret.looper_parse.call(null,text);
if(cljs.core.truth_(instaparse.core.failure_QMARK_.call(null,parse_tree))){
return parse_tree;
} else {
var parse_time = (cljs.looperscript.start_time.now.call(null) - start_time);
var transformed_tree = cljs.looperscript.interpret.looper_transform.call(null,parse_tree);
var _ = cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.last_transformed_tree,transformed_tree);
var transform_time = (cljs.looperscript.start_time.now.call(null) - start_time);
var new_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(transformed_tree);
var parts = new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(transformed_tree);
cljs.looperscript.logging.log.call(null,"Parse time: ",parse_time,"; Transform time: ",(transform_time - parse_time));

cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.params,new_params);

return parts;
}
});
cljs.looperscript.looperscript.add_note_to_sounding_notes = (function (){var sounding_counter = cljs.core.atom.call(null,(0));
return ((function (sounding_counter){
return (function (node_dic){
var id = cljs.core.swap_BANG_.call(null,sounding_counter,cljs.core.inc);
cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.assoc,id,node_dic);

return (new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(node_dic)["onended"] = ((function (id,sounding_counter){
return (function (){
return cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.dissoc,id);
});})(id,sounding_counter))
);
});
;})(sounding_counter))
})();
cljs.looperscript.looperscript.separate_multi_aspects = (function cljs$looperscript$looperscript$separate_multi_aspects(part){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,p__67719){
var vec__67720 = p__67719;
var k = cljs.core.nth.call(null,vec__67720,(0),null);
var v = cljs.core.nth.call(null,vec__67720,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,k))){
return cljs.core.assoc.call(null,m,cljs.core.first.call(null,k),v);
} else {
return cljs.core.reduce.call(null,cljs.core.into,m,(function (){var iter__28517__auto__ = ((function (vec__67720,k,v){
return (function cljs$looperscript$looperscript$separate_multi_aspects_$_iter__67723(s__67724){
return (new cljs.core.LazySeq(null,((function (vec__67720,k,v){
return (function (){
var s__67724__$1 = s__67724;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67724__$1);
if(temp__4657__auto__){
var s__67724__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67724__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__67724__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__67726 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__67725 = (0);
while(true){
if((i__67725 < size__28516__auto__)){
var i = cljs.core._nth.call(null,c__28515__auto__,i__67725);
cljs.core.chunk_append.call(null,b__67726,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]));

var G__67727 = (i__67725 + (1));
i__67725 = G__67727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67726),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__67723.call(null,cljs.core.chunk_rest.call(null,s__67724__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67726),null);
}
} else {
var i = cljs.core.first.call(null,s__67724__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__67723.call(null,cljs.core.rest.call(null,s__67724__$2)));
}
} else {
return null;
}
break;
}
});})(vec__67720,k,v))
,null,null));
});})(vec__67720,k,v))
;
return iter__28517__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,k)));
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,cljs.core.dissoc.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)));
});
cljs.looperscript.looperscript.make_iterators = (function cljs$looperscript$looperscript$make_iterators(part){
var part__$1 = cljs.looperscript.looperscript.separate_multi_aspects.call(null,part);
var part_keys = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,((function (part__$1){
return (function (p1__67728_SHARP_){
return cljs.core._EQ_.call(null,p1__67728_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(part__$1))
,cljs.core.keys.call(null,part__$1)));
var specified_aspects = cljs.core.set.call(null,part_keys);
var sub_aspects = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,part__$1)));
var non_specified_aspects = cljs.core.remove.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects){
return (function (p1__67729_SHARP_){
return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__67729_SHARP_);
});})(part__$1,part_keys,specified_aspects,sub_aspects))
,cljs.looperscript.looperscript.aspects);
return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__67730_SHARP_){
if(cljs.core.contains_QMARK_.call(null,sub_aspects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67730_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null))){
return cljs.looperscript.iterator.timed_iterator.call(null,cljs.core.get.call(null,part__$1,p1__67730_SHARP_),cljs.core.get.call(null,part__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67730_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)));
} else {
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part__$1,p1__67730_SHARP_));

}
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,non_specified_aspects,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__67731_SHARP_){
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__67731_SHARP_));
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.next_note_fn = (function cljs$looperscript$looperscript$next_note_fn(part,start_time){
var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);
var time_pos = cljs.core.atom.call(null,(start_time + (cljs.looperscript.looperscript.get_bpm.call(null) * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));
return ((function (iterators,time_pos){
return (function() {
var G__67742 = null;
var G__67742__0 = (function (){
while(true){
var adjusted_time_pos = (1.0E-7 + ((cljs.core.deref.call(null,time_pos) - start_time) / cljs.looperscript.looperscript.get_bpm.call(null)));
var res_time = new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(iterators).call(null,adjusted_time_pos);
var res = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1385887882),res_time], null);
if((cljs.core.sequential_QMARK_.call(null,res_time)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,res_time),new cljs.core.Keyword(null,"rest","rest",-1241696419)))){
var res__$1 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"rest","rest",-1241696419),true),new cljs.core.Keyword(null,"start-time","start-time",814801386),cljs.core.deref.call(null,time_pos)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core.second),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core._STAR_,cljs.looperscript.looperscript.get_bpm.call(null));
cljs.core.swap_BANG_.call(null,time_pos,cljs.core._PLUS_,res__$1.call(null,new cljs.core.Keyword(null,"time","time",1385887882)));

return res__$1;
} else {
var res_v = (function (){var iter__28517__auto__ = ((function (adjusted_time_pos,res_time,res,iterators,time_pos){
return (function cljs$looperscript$looperscript$next_note_fn_$_iter__67732(s__67733){
return (new cljs.core.LazySeq(null,((function (adjusted_time_pos,res_time,res,iterators,time_pos){
return (function (){
var s__67733__$1 = s__67733;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67733__$1);
if(temp__4657__auto__){
var s__67733__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67733__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__67733__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__67735 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__67734 = (0);
while(true){
if((i__67734 < size__28516__auto__)){
var vec__67736 = cljs.core._nth.call(null,c__28515__auto__,i__67734);
var aspect = cljs.core.nth.call(null,vec__67736,(0),null);
var iter = cljs.core.nth.call(null,vec__67736,(1),null);
cljs.core.chunk_append.call(null,b__67735,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null));

var G__67743 = (i__67734 + (1));
i__67734 = G__67743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67735),cljs$looperscript$looperscript$next_note_fn_$_iter__67732.call(null,cljs.core.chunk_rest.call(null,s__67733__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67735),null);
}
} else {
var vec__67739 = cljs.core.first.call(null,s__67733__$2);
var aspect = cljs.core.nth.call(null,vec__67739,(0),null);
var iter = cljs.core.nth.call(null,vec__67739,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null),cljs$looperscript$looperscript$next_note_fn_$_iter__67732.call(null,cljs.core.rest.call(null,s__67733__$2)));
}
} else {
return null;
}
break;
}
});})(adjusted_time_pos,res_time,res,iterators,time_pos))
,null,null));
});})(adjusted_time_pos,res_time,res,iterators,time_pos))
;
return iter__28517__auto__.call(null,cljs.core.dissoc.call(null,iterators,new cljs.core.Keyword(null,"time","time",1385887882)));
})();
var res__$1 = cljs.core.into.call(null,res,res_v);
var res__$2 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,res__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386),cljs.core.deref.call(null,time_pos)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core._STAR_,cljs.looperscript.looperscript.get_bpm.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time+","time+",2008858809)], null),cljs.core._STAR_,cljs.looperscript.looperscript.get_bpm.call(null));
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
var G__67742__1 = (function (command){
if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))){
return cljs.core.deref.call(null,time_pos);
} else {
return null;
}
});
G__67742 = function(command){
switch(arguments.length){
case 0:
return G__67742__0.call(this);
case 1:
return G__67742__1.call(this,command);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__67742.cljs$core$IFn$_invoke$arity$0 = G__67742__0;
G__67742.cljs$core$IFn$_invoke$arity$1 = G__67742__1;
return G__67742;
})()
;})(iterators,time_pos))
});
cljs.looperscript.looperscript.sched_log = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.looperscript.looperscript.schedule_note = (function cljs$looperscript$looperscript$schedule_note(n){
if((cljs.core.sequential_QMARK_.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.Keyword(null,"chord","chord",-696248342)))){
var seq__67744 = cljs.core.seq.call(null,cljs.core.flatten.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n))));
var chunk__67745 = null;
var count__67746 = (0);
var i__67747 = (0);
while(true){
if((i__67747 < count__67746)){
var note = cljs.core._nth.call(null,chunk__67745,i__67747);
cljs.looperscript.looperscript.schedule_note.call(null,cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"sound","sound",-2127407070),note));

var G__67752 = seq__67744;
var G__67753 = chunk__67745;
var G__67754 = count__67746;
var G__67755 = (i__67747 + (1));
seq__67744 = G__67752;
chunk__67745 = G__67753;
count__67746 = G__67754;
i__67747 = G__67755;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__67744);
if(temp__4657__auto__){
var seq__67744__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67744__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__67744__$1);
var G__67756 = cljs.core.chunk_rest.call(null,seq__67744__$1);
var G__67757 = c__28548__auto__;
var G__67758 = cljs.core.count.call(null,c__28548__auto__);
var G__67759 = (0);
seq__67744 = G__67756;
chunk__67745 = G__67757;
count__67746 = G__67758;
i__67747 = G__67759;
continue;
} else {
var note = cljs.core.first.call(null,seq__67744__$1);
cljs.looperscript.looperscript.schedule_note.call(null,cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"sound","sound",-2127407070),note));

var G__67760 = cljs.core.next.call(null,seq__67744__$1);
var G__67761 = null;
var G__67762 = (0);
var G__67763 = (0);
seq__67744 = G__67760;
chunk__67745 = G__67761;
count__67746 = G__67762;
i__67747 = G__67763;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var sound = new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n);
var rate = new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(n);
var start_time = (new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n) + new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));
var start_time__$1 = (((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"drum-code","drum-code",2081814302))))?(function (){var temp__4655__auto__ = cljs.core.get.call(null,cljs.looperscript.audio.sample_lags,cljs.core.get.call(null,cljs.looperscript.audio.drum_codes,cljs.core.second.call(null,sound)));
if(cljs.core.truth_(temp__4655__auto__)){
var l = temp__4655__auto__;
return (start_time - (l / rate));
} else {
return start_time;
}
})():start_time);
if((start_time__$1 >= cljs.looperscript.start_time.now.call(null))){
var sound__$1 = ((typeof sound === 'number')?cljs.looperscript.looperscript.note__GT_freq.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"ratio","ratio",-926560044))))?cljs.looperscript.looperscript.ratio__GT_freq.call(null,cljs.core.second.call(null,sound)):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"hz","hz",-1450739349))))?cljs.core.second.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"drum-code","drum-code",2081814302))))?cljs.looperscript.audio.drum_codes.call(null,cljs.core.second.call(null,sound)):sound
))));
var dur = (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(n) - new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));
var vol = new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(n);
var filter = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(n);
var pan = new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(n);
var synth = new cljs.core.Keyword(null,"synth","synth",-862700847).cljs$core$IFn$_invoke$arity$1(n);
var overtones = new cljs.core.Keyword(null,"overtones","overtones",-2065460921).cljs$core$IFn$_invoke$arity$1(n);
var node = ((typeof sound__$1 === 'number')?(cljs.core.truth_(filter)?cljs.looperscript.audio.play_filtered_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,filter,synth,overtones):null):cljs.looperscript.audio.play_sound.call(null,sound__$1,start_time__$1,vol,rate));
var seq__67748 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));
var chunk__67749 = null;
var count__67750 = (0);
var i__67751 = (0);
while(true){
if((i__67751 < count__67750)){
var i = cljs.core._nth.call(null,chunk__67749,i__67751);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),i,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time__$1], null));

var G__67764 = seq__67748;
var G__67765 = chunk__67749;
var G__67766 = count__67750;
var G__67767 = (i__67751 + (1));
seq__67748 = G__67764;
chunk__67749 = G__67765;
count__67750 = G__67766;
i__67751 = G__67767;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__67748);
if(temp__4657__auto__){
var seq__67748__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67748__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__67748__$1);
var G__67768 = cljs.core.chunk_rest.call(null,seq__67748__$1);
var G__67769 = c__28548__auto__;
var G__67770 = cljs.core.count.call(null,c__28548__auto__);
var G__67771 = (0);
seq__67748 = G__67768;
chunk__67749 = G__67769;
count__67750 = G__67770;
i__67751 = G__67771;
continue;
} else {
var i = cljs.core.first.call(null,seq__67748__$1);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),i,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time__$1], null));

var G__67772 = cljs.core.next.call(null,seq__67748__$1);
var G__67773 = null;
var G__67774 = (0);
var G__67775 = (0);
seq__67748 = G__67772;
chunk__67749 = G__67773;
count__67750 = G__67774;
i__67751 = G__67775;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
cljs.looperscript.looperscript._time = cljs.core.identity;
cljs.looperscript.looperscript.queue_notes = (function cljs$looperscript$looperscript$queue_notes(){
return cljs.looperscript.looperscript._time.call(null,(function (){
cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.last_queue_time,cljs.looperscript.start_time.now.call(null));

var end_time = ((cljs.looperscript.start_time.now.call(null) + cljs.looperscript.looperscript.queue_time_extra) + cljs.looperscript.looperscript.queue_time_interval);
var seq__67776 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));
var chunk__67777 = null;
var count__67778 = (0);
var i__67779 = (0);
while(true){
if((i__67779 < count__67778)){
var n_n_fn = cljs.core._nth.call(null,chunk__67777,i__67779);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_67780 = n_n_fn.call(null);
if((((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_67780))) && (!(cljs.core.contains_QMARK_.call(null,next_note_67780,new cljs.core.Keyword(null,"rest","rest",-1241696419))))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_67780);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_67780) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__67781 = seq__67776;
var G__67782 = chunk__67777;
var G__67783 = count__67778;
var G__67784 = (i__67779 + (1));
seq__67776 = G__67781;
chunk__67777 = G__67782;
count__67778 = G__67783;
i__67779 = G__67784;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__67776);
if(temp__4657__auto__){
var seq__67776__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67776__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__67776__$1);
var G__67785 = cljs.core.chunk_rest.call(null,seq__67776__$1);
var G__67786 = c__28548__auto__;
var G__67787 = cljs.core.count.call(null,c__28548__auto__);
var G__67788 = (0);
seq__67776 = G__67785;
chunk__67777 = G__67786;
count__67778 = G__67787;
i__67779 = G__67788;
continue;
} else {
var n_n_fn = cljs.core.first.call(null,seq__67776__$1);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_67789 = n_n_fn.call(null);
if((((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_67789))) && (!(cljs.core.contains_QMARK_.call(null,next_note_67789,new cljs.core.Keyword(null,"rest","rest",-1241696419))))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_67789);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_67789) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__67790 = cljs.core.next.call(null,seq__67776__$1);
var G__67791 = null;
var G__67792 = (0);
var G__67793 = (0);
seq__67776 = G__67790;
chunk__67777 = G__67791;
count__67778 = G__67792;
i__67779 = G__67793;
continue;
}
} else {
return null;
}
}
break;
}
})()
);
});
cljs.looperscript.looperscript.reset_button = (function cljs$looperscript$looperscript$reset_button(){
cljs.looperscript.looperscript.stop.call(null);

return cljs.looperscript.start_time.reset_clock_BANG_.call(null);
});
cljs.looperscript.looperscript.update_STAR_ = (function cljs$looperscript$looperscript$update_STAR_(var_args){
var G__67795 = arguments.length;
switch (G__67795) {
case 0:
return cljs.looperscript.looperscript.update_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.looperscript.looperscript.update_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.looperscript.looperscript.update_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.looperscript.looperscript.update_STAR_.call(null,cljs.looperscript.looperscript.get_parts.call(null));
});

cljs.looperscript.looperscript.update_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (parts){
if(cljs.core.truth_(instaparse.core.failure_QMARK_.call(null,parts))){
return cljs.looperscript.logging.log.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,parts))].join(''));
} else {
var new_nnfns = cljs.core.vec.call(null,(function (){var iter__28517__auto__ = (function cljs$looperscript$looperscript$iter__67796(s__67797){
return (new cljs.core.LazySeq(null,(function (){
var s__67797__$1 = s__67797;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__67797__$1);
if(temp__4657__auto__){
var s__67797__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67797__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__67797__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__67799 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__67798 = (0);
while(true){
if((i__67798 < size__28516__auto__)){
var p = cljs.core._nth.call(null,c__28515__auto__,i__67798);
cljs.core.chunk_append.call(null,b__67799,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)));

var G__67805 = (i__67798 + (1));
i__67798 = G__67805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67799),cljs$looperscript$looperscript$iter__67796.call(null,cljs.core.chunk_rest.call(null,s__67797__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67799),null);
}
} else {
var p = cljs.core.first.call(null,s__67797__$2);
return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)),cljs$looperscript$looperscript$iter__67796.call(null,cljs.core.rest.call(null,s__67797__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28517__auto__.call(null,cljs.core.vals.call(null,parts));
})());
var seq__67800_67806 = cljs.core.seq.call(null,new_nnfns);
var chunk__67801_67807 = null;
var count__67802_67808 = (0);
var i__67803_67809 = (0);
while(true){
if((i__67803_67809 < count__67802_67808)){
var nnfn_67810 = cljs.core._nth.call(null,chunk__67801_67807,i__67803_67809);
while(true){
if(cljs.core.truth_((function (){var and__27697__auto__ = cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time);
if(cljs.core.truth_(and__27697__auto__)){
var and__27697__auto____$1 = cljs.core.deref.call(null,cljs.looperscript.looperscript.playing);
if(cljs.core.truth_(and__27697__auto____$1)){
var and__27697__auto____$2 = true;
if(and__27697__auto____$2){
return (cljs.looperscript.start_time.now.call(null) - cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time));
} else {
return and__27697__auto____$2;
}
} else {
return and__27697__auto____$1;
}
} else {
return and__27697__auto__;
}
})())){
} else {
}

if((cljs.looperscript.start_time.now.call(null) > nnfn_67810.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_67810.call(null);

continue;
} else {
}
break;
}

var G__67811 = seq__67800_67806;
var G__67812 = chunk__67801_67807;
var G__67813 = count__67802_67808;
var G__67814 = (i__67803_67809 + (1));
seq__67800_67806 = G__67811;
chunk__67801_67807 = G__67812;
count__67802_67808 = G__67813;
i__67803_67809 = G__67814;
continue;
} else {
var temp__4657__auto___67815 = cljs.core.seq.call(null,seq__67800_67806);
if(temp__4657__auto___67815){
var seq__67800_67816__$1 = temp__4657__auto___67815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67800_67816__$1)){
var c__28548__auto___67817 = cljs.core.chunk_first.call(null,seq__67800_67816__$1);
var G__67818 = cljs.core.chunk_rest.call(null,seq__67800_67816__$1);
var G__67819 = c__28548__auto___67817;
var G__67820 = cljs.core.count.call(null,c__28548__auto___67817);
var G__67821 = (0);
seq__67800_67806 = G__67818;
chunk__67801_67807 = G__67819;
count__67802_67808 = G__67820;
i__67803_67809 = G__67821;
continue;
} else {
var nnfn_67822 = cljs.core.first.call(null,seq__67800_67816__$1);
while(true){
if(cljs.core.truth_((function (){var and__27697__auto__ = cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time);
if(cljs.core.truth_(and__27697__auto__)){
var and__27697__auto____$1 = cljs.core.deref.call(null,cljs.looperscript.looperscript.playing);
if(cljs.core.truth_(and__27697__auto____$1)){
var and__27697__auto____$2 = true;
if(and__27697__auto____$2){
return (cljs.looperscript.start_time.now.call(null) - cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time));
} else {
return and__27697__auto____$2;
}
} else {
return and__27697__auto____$1;
}
} else {
return and__27697__auto__;
}
})())){
} else {
}

if((cljs.looperscript.start_time.now.call(null) > nnfn_67822.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_67822.call(null);

continue;
} else {
}
break;
}

var G__67823 = cljs.core.next.call(null,seq__67800_67816__$1);
var G__67824 = null;
var G__67825 = (0);
var G__67826 = (0);
seq__67800_67806 = G__67823;
chunk__67801_67807 = G__67824;
count__67802_67808 = G__67825;
i__67803_67809 = G__67826;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.current_next_note_fns,new_nnfns);

cljs.looperscript.looperscript.kill_unstarted_sounds.call(null);

return cljs.looperscript.looperscript.queue_notes.call(null);
}
});

cljs.looperscript.looperscript.update_STAR_.cljs$lang$maxFixedArity = 1;

cljs.looperscript.looperscript.kill_playing_interval = (function cljs$looperscript$looperscript$kill_playing_interval(){
if(cljs.core.truth_(cljs.core.deref.call(null,cljs.looperscript.looperscript.playing_interval))){
clearInterval(cljs.core.deref.call(null,cljs.looperscript.looperscript.playing_interval));

return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing_interval,null);
} else {
return null;
}
});
cljs.looperscript.looperscript.play = (function cljs$looperscript$looperscript$play(){
var parts = cljs.looperscript.looperscript.get_parts.call(null);
if((cljs.looperscript.start_time.get_current_start_time.call(null) == null)){
cljs.looperscript.start_time.reset_clock_BANG_.call(null,(cljs.looperscript.start_time.now.call(null) + 0.5));
} else {
}

cljs.looperscript.looperscript.update_STAR_.call(null,parts);

cljs.looperscript.looperscript.queue_notes.call(null);

cljs.looperscript.looperscript.kill_playing_interval.call(null);

cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing_interval,setInterval(cljs.looperscript.looperscript.queue_notes,(cljs.looperscript.looperscript.queue_time_interval * (1000))));

return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing,true);
});
cljs.looperscript.looperscript.kill_sounds = (function cljs$looperscript$looperscript$kill_sounds(){
var seq__67827_67831 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));
var chunk__67828_67832 = null;
var count__67829_67833 = (0);
var i__67830_67834 = (0);
while(true){
if((i__67830_67834 < count__67829_67833)){
var n_67835 = cljs.core._nth.call(null,chunk__67828_67832,i__67830_67834);
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_67835).stop();

var G__67836 = seq__67827_67831;
var G__67837 = chunk__67828_67832;
var G__67838 = count__67829_67833;
var G__67839 = (i__67830_67834 + (1));
seq__67827_67831 = G__67836;
chunk__67828_67832 = G__67837;
count__67829_67833 = G__67838;
i__67830_67834 = G__67839;
continue;
} else {
var temp__4657__auto___67840 = cljs.core.seq.call(null,seq__67827_67831);
if(temp__4657__auto___67840){
var seq__67827_67841__$1 = temp__4657__auto___67840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67827_67841__$1)){
var c__28548__auto___67842 = cljs.core.chunk_first.call(null,seq__67827_67841__$1);
var G__67843 = cljs.core.chunk_rest.call(null,seq__67827_67841__$1);
var G__67844 = c__28548__auto___67842;
var G__67845 = cljs.core.count.call(null,c__28548__auto___67842);
var G__67846 = (0);
seq__67827_67831 = G__67843;
chunk__67828_67832 = G__67844;
count__67829_67833 = G__67845;
i__67830_67834 = G__67846;
continue;
} else {
var n_67847 = cljs.core.first.call(null,seq__67827_67841__$1);
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_67847).stop();

var G__67848 = cljs.core.next.call(null,seq__67827_67841__$1);
var G__67849 = null;
var G__67850 = (0);
var G__67851 = (0);
seq__67827_67831 = G__67848;
chunk__67828_67832 = G__67849;
count__67829_67833 = G__67850;
i__67830_67834 = G__67851;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.PersistentArrayMap.EMPTY);
});
cljs.looperscript.looperscript.kill_unstarted_sounds = (function cljs$looperscript$looperscript$kill_unstarted_sounds(){
var seq__67852 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes));
var chunk__67853 = null;
var count__67854 = (0);
var i__67855 = (0);
while(true){
if((i__67855 < count__67854)){
var vec__67856 = cljs.core._nth.call(null,chunk__67853,i__67855);
var id = cljs.core.nth.call(null,vec__67856,(0),null);
var n = cljs.core.nth.call(null,vec__67856,(1),null);
if((cljs.looperscript.start_time.now.call(null) < new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n))){
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n).stop();

cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.dissoc,id);
} else {
}

var G__67862 = seq__67852;
var G__67863 = chunk__67853;
var G__67864 = count__67854;
var G__67865 = (i__67855 + (1));
seq__67852 = G__67862;
chunk__67853 = G__67863;
count__67854 = G__67864;
i__67855 = G__67865;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__67852);
if(temp__4657__auto__){
var seq__67852__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67852__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__67852__$1);
var G__67866 = cljs.core.chunk_rest.call(null,seq__67852__$1);
var G__67867 = c__28548__auto__;
var G__67868 = cljs.core.count.call(null,c__28548__auto__);
var G__67869 = (0);
seq__67852 = G__67866;
chunk__67853 = G__67867;
count__67854 = G__67868;
i__67855 = G__67869;
continue;
} else {
var vec__67859 = cljs.core.first.call(null,seq__67852__$1);
var id = cljs.core.nth.call(null,vec__67859,(0),null);
var n = cljs.core.nth.call(null,vec__67859,(1),null);
if((cljs.looperscript.start_time.now.call(null) < new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n))){
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n).stop();

cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.dissoc,id);
} else {
}

var G__67870 = cljs.core.next.call(null,seq__67852__$1);
var G__67871 = null;
var G__67872 = (0);
var G__67873 = (0);
seq__67852 = G__67870;
chunk__67853 = G__67871;
count__67854 = G__67872;
i__67855 = G__67873;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.looperscript.looperscript.stop = (function cljs$looperscript$looperscript$stop(){
cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing,false);

cljs.looperscript.looperscript.kill_playing_interval.call(null);

return cljs.looperscript.looperscript.kill_sounds.call(null);
});
cljs.looperscript.looperscript.relisten_BANG_ = (function cljs$looperscript$looperscript$relisten_BANG_(id,f){
domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,id),new cljs.core.Keyword(null,"click","click",1912301393));

return domina.events.listen_BANG_.call(null,domina.by_id.call(null,id),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
return f.call(null);
}));
});
cljs.looperscript.looperscript.relisten_BANG_.call(null,"play",cljs.looperscript.looperscript.play);
cljs.looperscript.looperscript.relisten_BANG_.call(null,"pause",cljs.looperscript.looperscript.stop);
cljs.looperscript.looperscript.relisten_BANG_.call(null,"update",cljs.looperscript.looperscript.update_STAR_);
cljs.looperscript.looperscript.relisten_BANG_.call(null,"link",cljs.looperscript.address_bar.text__GT_link);
cljs.looperscript.looperscript.relisten_BANG_.call(null,"load",cljs.core.partial.call(null,cljs.looperscript.address_bar.load_link__GT_text,""));
cljs.looperscript.looperscript.relisten_BANG_.call(null,"stop",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key = (function cljs$looperscript$looperscript$bind_key(name,windows_key,mac_key,f){
return (editor["commands"]).addCommand((function (){var obj67875 = {"name":name,"bindKey":(function (){var obj67877 = {"win":windows_key,"mac":mac_key};
return obj67877;
})(),"exec":f};
return obj67875;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-Shift-u","Command-Enter",(function() { 
var G__67878__delegate = function (args){
return cljs.looperscript.looperscript.update_STAR_.call(null);
};
var G__67878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67879__i = 0, G__67879__a = new Array(arguments.length -  0);
while (G__67879__i < G__67879__a.length) {G__67879__a[G__67879__i] = arguments[G__67879__i + 0]; ++G__67879__i;}
  args = new cljs.core.IndexedSeq(G__67879__a,0,null);
} 
return G__67878__delegate.call(this,args);};
G__67878.cljs$lang$maxFixedArity = 0;
G__67878.cljs$lang$applyTo = (function (arglist__67880){
var args = cljs.core.seq(arglist__67880);
return G__67878__delegate(args);
});
G__67878.cljs$core$IFn$_invoke$arity$variadic = G__67878__delegate;
return G__67878;
})()
);
cljs.looperscript.looperscript.bind_key.call(null,"link","Ctrl-Shift-l","Command-Shift-L",(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);

//# sourceMappingURL=looperscript.js.map?rel=1512869137559
