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
cljs.looperscript.looperscript.aspect_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drum-code","drum-code",2081814302),"d"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sawtooth"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2500)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)]);
}
cljs.looperscript.looperscript.log_time = (function cljs$looperscript$looperscript$log_time(var_args){
var args__28885__auto__ = [];
var len__28878__auto___47026 = arguments.length;
var i__28879__auto___47027 = (0);
while(true){
if((i__28879__auto___47027 < len__28878__auto___47026)){
args__28885__auto__.push((arguments[i__28879__auto___47027]));

var G__47028 = (i__28879__auto___47027 + (1));
i__28879__auto___47027 = G__47028;
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

cljs.looperscript.looperscript.log_time.cljs$lang$applyTo = (function (seq47024){
var G__47025 = cljs.core.first.call(null,seq47024);
var seq47024__$1 = cljs.core.next.call(null,seq47024);
return cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic(G__47025,seq47024__$1);
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
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,p__47029){
var vec__47030 = p__47029;
var k = cljs.core.nth.call(null,vec__47030,(0),null);
var v = cljs.core.nth.call(null,vec__47030,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,k))){
return cljs.core.assoc.call(null,m,cljs.core.first.call(null,k),v);
} else {
return cljs.core.reduce.call(null,cljs.core.into,m,(function (){var iter__28517__auto__ = ((function (vec__47030,k,v){
return (function cljs$looperscript$looperscript$separate_multi_aspects_$_iter__47033(s__47034){
return (new cljs.core.LazySeq(null,((function (vec__47030,k,v){
return (function (){
var s__47034__$1 = s__47034;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__47034__$1);
if(temp__4657__auto__){
var s__47034__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47034__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__47034__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__47036 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__47035 = (0);
while(true){
if((i__47035 < size__28516__auto__)){
var i = cljs.core._nth.call(null,c__28515__auto__,i__47035);
cljs.core.chunk_append.call(null,b__47036,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]));

var G__47037 = (i__47035 + (1));
i__47035 = G__47037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47036),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__47033.call(null,cljs.core.chunk_rest.call(null,s__47034__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47036),null);
}
} else {
var i = cljs.core.first.call(null,s__47034__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__47033.call(null,cljs.core.rest.call(null,s__47034__$2)));
}
} else {
return null;
}
break;
}
});})(vec__47030,k,v))
,null,null));
});})(vec__47030,k,v))
;
return iter__28517__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,k)));
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,cljs.core.dissoc.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)));
});
cljs.looperscript.looperscript.make_iterators = (function cljs$looperscript$looperscript$make_iterators(part){
var part__$1 = cljs.looperscript.looperscript.separate_multi_aspects.call(null,part);
var part_keys = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,((function (part__$1){
return (function (p1__47038_SHARP_){
return cljs.core._EQ_.call(null,p1__47038_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(part__$1))
,cljs.core.keys.call(null,part__$1)));
var specified_aspects = cljs.core.set.call(null,part_keys);
var sub_aspects = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,part__$1)));
var non_specified_aspects = cljs.core.remove.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects){
return (function (p1__47039_SHARP_){
return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__47039_SHARP_);
});})(part__$1,part_keys,specified_aspects,sub_aspects))
,cljs.looperscript.looperscript.aspects);
return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__47040_SHARP_){
if(cljs.core.contains_QMARK_.call(null,sub_aspects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47040_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null))){
return cljs.looperscript.iterator.timed_iterator.call(null,cljs.core.get.call(null,part__$1,p1__47040_SHARP_),cljs.core.get.call(null,part__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47040_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)));
} else {
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part__$1,p1__47040_SHARP_));

}
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,non_specified_aspects,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__47041_SHARP_){
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__47041_SHARP_));
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.debz = cljs.core.atom.call(null,null);
cljs.looperscript.looperscript.next_note_fn = (function cljs$looperscript$looperscript$next_note_fn(part,start_time){
var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);
var time_pos = cljs.core.atom.call(null,(start_time + (cljs.looperscript.looperscript.get_bpm.call(null) * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));
return ((function (iterators,time_pos){
return (function() {
var G__47052 = null;
var G__47052__0 = (function (){
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
return (function cljs$looperscript$looperscript$next_note_fn_$_iter__47042(s__47043){
return (new cljs.core.LazySeq(null,((function (adjusted_time_pos,res_time,res,iterators,time_pos){
return (function (){
var s__47043__$1 = s__47043;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__47043__$1);
if(temp__4657__auto__){
var s__47043__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47043__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__47043__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__47045 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__47044 = (0);
while(true){
if((i__47044 < size__28516__auto__)){
var vec__47046 = cljs.core._nth.call(null,c__28515__auto__,i__47044);
var aspect = cljs.core.nth.call(null,vec__47046,(0),null);
var iter = cljs.core.nth.call(null,vec__47046,(1),null);
cljs.core.chunk_append.call(null,b__47045,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null));

var G__47053 = (i__47044 + (1));
i__47044 = G__47053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47045),cljs$looperscript$looperscript$next_note_fn_$_iter__47042.call(null,cljs.core.chunk_rest.call(null,s__47043__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47045),null);
}
} else {
var vec__47049 = cljs.core.first.call(null,s__47043__$2);
var aspect = cljs.core.nth.call(null,vec__47049,(0),null);
var iter = cljs.core.nth.call(null,vec__47049,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null),cljs$looperscript$looperscript$next_note_fn_$_iter__47042.call(null,cljs.core.rest.call(null,s__47043__$2)));
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
var res__$2 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,res__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386),cljs.core.deref.call(null,time_pos)),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core._STAR_,cljs.looperscript.looperscript.get_bpm.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time+","time+",2008858809)], null),cljs.core._STAR_,cljs.looperscript.looperscript.get_bpm.call(null));
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
var G__47052__1 = (function (command){
if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))){
return cljs.core.deref.call(null,time_pos);
} else {
return null;
}
});
G__47052 = function(command){
switch(arguments.length){
case 0:
return G__47052__0.call(this);
case 1:
return G__47052__1.call(this,command);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__47052.cljs$core$IFn$_invoke$arity$0 = G__47052__0;
G__47052.cljs$core$IFn$_invoke$arity$1 = G__47052__1;
return G__47052;
})()
;})(iterators,time_pos))
});
cljs.looperscript.looperscript.sched_log = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.looperscript.looperscript.schedule_note = (function cljs$looperscript$looperscript$schedule_note(n){
if((cljs.core.sequential_QMARK_.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.Keyword(null,"chord","chord",-696248342)))){
var seq__47054 = cljs.core.seq.call(null,cljs.core.flatten.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n))));
var chunk__47055 = null;
var count__47056 = (0);
var i__47057 = (0);
while(true){
if((i__47057 < count__47056)){
var note = cljs.core._nth.call(null,chunk__47055,i__47057);
cljs.looperscript.looperscript.schedule_note.call(null,cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"sound","sound",-2127407070),note));

var G__47062 = seq__47054;
var G__47063 = chunk__47055;
var G__47064 = count__47056;
var G__47065 = (i__47057 + (1));
seq__47054 = G__47062;
chunk__47055 = G__47063;
count__47056 = G__47064;
i__47057 = G__47065;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47054);
if(temp__4657__auto__){
var seq__47054__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47054__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__47054__$1);
var G__47066 = cljs.core.chunk_rest.call(null,seq__47054__$1);
var G__47067 = c__28548__auto__;
var G__47068 = cljs.core.count.call(null,c__28548__auto__);
var G__47069 = (0);
seq__47054 = G__47066;
chunk__47055 = G__47067;
count__47056 = G__47068;
i__47057 = G__47069;
continue;
} else {
var note = cljs.core.first.call(null,seq__47054__$1);
cljs.looperscript.looperscript.schedule_note.call(null,cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"sound","sound",-2127407070),note));

var G__47070 = cljs.core.next.call(null,seq__47054__$1);
var G__47071 = null;
var G__47072 = (0);
var G__47073 = (0);
seq__47054 = G__47070;
chunk__47055 = G__47071;
count__47056 = G__47072;
i__47057 = G__47073;
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
var node = ((typeof sound__$1 === 'number')?(cljs.core.truth_(filter)?cljs.looperscript.audio.play_filtered_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,filter,synth,overtones):cljs.looperscript.audio.play_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,synth,overtones)):cljs.looperscript.audio.play_sound.call(null,sound__$1,start_time__$1,vol,rate));
var seq__47058 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));
var chunk__47059 = null;
var count__47060 = (0);
var i__47061 = (0);
while(true){
if((i__47061 < count__47060)){
var i = cljs.core._nth.call(null,chunk__47059,i__47061);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),i,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time__$1], null));

var G__47074 = seq__47058;
var G__47075 = chunk__47059;
var G__47076 = count__47060;
var G__47077 = (i__47061 + (1));
seq__47058 = G__47074;
chunk__47059 = G__47075;
count__47060 = G__47076;
i__47061 = G__47077;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47058);
if(temp__4657__auto__){
var seq__47058__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47058__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__47058__$1);
var G__47078 = cljs.core.chunk_rest.call(null,seq__47058__$1);
var G__47079 = c__28548__auto__;
var G__47080 = cljs.core.count.call(null,c__28548__auto__);
var G__47081 = (0);
seq__47058 = G__47078;
chunk__47059 = G__47079;
count__47060 = G__47080;
i__47061 = G__47081;
continue;
} else {
var i = cljs.core.first.call(null,seq__47058__$1);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),i,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time__$1], null));

var G__47082 = cljs.core.next.call(null,seq__47058__$1);
var G__47083 = null;
var G__47084 = (0);
var G__47085 = (0);
seq__47058 = G__47082;
chunk__47059 = G__47083;
count__47060 = G__47084;
i__47061 = G__47085;
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
var seq__47086 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));
var chunk__47087 = null;
var count__47088 = (0);
var i__47089 = (0);
while(true){
if((i__47089 < count__47088)){
var n_n_fn = cljs.core._nth.call(null,chunk__47087,i__47089);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_47090 = n_n_fn.call(null);
if((((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_47090))) && (!(cljs.core.contains_QMARK_.call(null,next_note_47090,new cljs.core.Keyword(null,"rest","rest",-1241696419))))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_47090);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_47090) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__47091 = seq__47086;
var G__47092 = chunk__47087;
var G__47093 = count__47088;
var G__47094 = (i__47089 + (1));
seq__47086 = G__47091;
chunk__47087 = G__47092;
count__47088 = G__47093;
i__47089 = G__47094;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47086);
if(temp__4657__auto__){
var seq__47086__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47086__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__47086__$1);
var G__47095 = cljs.core.chunk_rest.call(null,seq__47086__$1);
var G__47096 = c__28548__auto__;
var G__47097 = cljs.core.count.call(null,c__28548__auto__);
var G__47098 = (0);
seq__47086 = G__47095;
chunk__47087 = G__47096;
count__47088 = G__47097;
i__47089 = G__47098;
continue;
} else {
var n_n_fn = cljs.core.first.call(null,seq__47086__$1);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_47099 = n_n_fn.call(null);
if((((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_47099))) && (!(cljs.core.contains_QMARK_.call(null,next_note_47099,new cljs.core.Keyword(null,"rest","rest",-1241696419))))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_47099);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_47099) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__47100 = cljs.core.next.call(null,seq__47086__$1);
var G__47101 = null;
var G__47102 = (0);
var G__47103 = (0);
seq__47086 = G__47100;
chunk__47087 = G__47101;
count__47088 = G__47102;
i__47089 = G__47103;
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
var G__47105 = arguments.length;
switch (G__47105) {
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
var new_nnfns = cljs.core.vec.call(null,(function (){var iter__28517__auto__ = (function cljs$looperscript$looperscript$iter__47106(s__47107){
return (new cljs.core.LazySeq(null,(function (){
var s__47107__$1 = s__47107;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__47107__$1);
if(temp__4657__auto__){
var s__47107__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47107__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__47107__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__47109 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__47108 = (0);
while(true){
if((i__47108 < size__28516__auto__)){
var p = cljs.core._nth.call(null,c__28515__auto__,i__47108);
cljs.core.chunk_append.call(null,b__47109,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)));

var G__47115 = (i__47108 + (1));
i__47108 = G__47115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47109),cljs$looperscript$looperscript$iter__47106.call(null,cljs.core.chunk_rest.call(null,s__47107__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47109),null);
}
} else {
var p = cljs.core.first.call(null,s__47107__$2);
return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)),cljs$looperscript$looperscript$iter__47106.call(null,cljs.core.rest.call(null,s__47107__$2)));
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
var seq__47110_47116 = cljs.core.seq.call(null,new_nnfns);
var chunk__47111_47117 = null;
var count__47112_47118 = (0);
var i__47113_47119 = (0);
while(true){
if((i__47113_47119 < count__47112_47118)){
var nnfn_47120 = cljs.core._nth.call(null,chunk__47111_47117,i__47113_47119);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_47120.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_47120.call(null);

continue;
} else {
}
break;
}

var G__47121 = seq__47110_47116;
var G__47122 = chunk__47111_47117;
var G__47123 = count__47112_47118;
var G__47124 = (i__47113_47119 + (1));
seq__47110_47116 = G__47121;
chunk__47111_47117 = G__47122;
count__47112_47118 = G__47123;
i__47113_47119 = G__47124;
continue;
} else {
var temp__4657__auto___47125 = cljs.core.seq.call(null,seq__47110_47116);
if(temp__4657__auto___47125){
var seq__47110_47126__$1 = temp__4657__auto___47125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47110_47126__$1)){
var c__28548__auto___47127 = cljs.core.chunk_first.call(null,seq__47110_47126__$1);
var G__47128 = cljs.core.chunk_rest.call(null,seq__47110_47126__$1);
var G__47129 = c__28548__auto___47127;
var G__47130 = cljs.core.count.call(null,c__28548__auto___47127);
var G__47131 = (0);
seq__47110_47116 = G__47128;
chunk__47111_47117 = G__47129;
count__47112_47118 = G__47130;
i__47113_47119 = G__47131;
continue;
} else {
var nnfn_47132 = cljs.core.first.call(null,seq__47110_47126__$1);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_47132.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_47132.call(null);

continue;
} else {
}
break;
}

var G__47133 = cljs.core.next.call(null,seq__47110_47126__$1);
var G__47134 = null;
var G__47135 = (0);
var G__47136 = (0);
seq__47110_47116 = G__47133;
chunk__47111_47117 = G__47134;
count__47112_47118 = G__47135;
i__47113_47119 = G__47136;
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
var seq__47137_47141 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));
var chunk__47138_47142 = null;
var count__47139_47143 = (0);
var i__47140_47144 = (0);
while(true){
if((i__47140_47144 < count__47139_47143)){
var n_47145 = cljs.core._nth.call(null,chunk__47138_47142,i__47140_47144);
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_47145).stop();

var G__47146 = seq__47137_47141;
var G__47147 = chunk__47138_47142;
var G__47148 = count__47139_47143;
var G__47149 = (i__47140_47144 + (1));
seq__47137_47141 = G__47146;
chunk__47138_47142 = G__47147;
count__47139_47143 = G__47148;
i__47140_47144 = G__47149;
continue;
} else {
var temp__4657__auto___47150 = cljs.core.seq.call(null,seq__47137_47141);
if(temp__4657__auto___47150){
var seq__47137_47151__$1 = temp__4657__auto___47150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47137_47151__$1)){
var c__28548__auto___47152 = cljs.core.chunk_first.call(null,seq__47137_47151__$1);
var G__47153 = cljs.core.chunk_rest.call(null,seq__47137_47151__$1);
var G__47154 = c__28548__auto___47152;
var G__47155 = cljs.core.count.call(null,c__28548__auto___47152);
var G__47156 = (0);
seq__47137_47141 = G__47153;
chunk__47138_47142 = G__47154;
count__47139_47143 = G__47155;
i__47140_47144 = G__47156;
continue;
} else {
var n_47157 = cljs.core.first.call(null,seq__47137_47151__$1);
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_47157).stop();

var G__47158 = cljs.core.next.call(null,seq__47137_47151__$1);
var G__47159 = null;
var G__47160 = (0);
var G__47161 = (0);
seq__47137_47141 = G__47158;
chunk__47138_47142 = G__47159;
count__47139_47143 = G__47160;
i__47140_47144 = G__47161;
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
var seq__47162 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes));
var chunk__47163 = null;
var count__47164 = (0);
var i__47165 = (0);
while(true){
if((i__47165 < count__47164)){
var vec__47166 = cljs.core._nth.call(null,chunk__47163,i__47165);
var id = cljs.core.nth.call(null,vec__47166,(0),null);
var n = cljs.core.nth.call(null,vec__47166,(1),null);
if((cljs.looperscript.start_time.now.call(null) < new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n))){
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n).stop();

cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.dissoc,id);
} else {
}

var G__47172 = seq__47162;
var G__47173 = chunk__47163;
var G__47174 = count__47164;
var G__47175 = (i__47165 + (1));
seq__47162 = G__47172;
chunk__47163 = G__47173;
count__47164 = G__47174;
i__47165 = G__47175;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47162);
if(temp__4657__auto__){
var seq__47162__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47162__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__47162__$1);
var G__47176 = cljs.core.chunk_rest.call(null,seq__47162__$1);
var G__47177 = c__28548__auto__;
var G__47178 = cljs.core.count.call(null,c__28548__auto__);
var G__47179 = (0);
seq__47162 = G__47176;
chunk__47163 = G__47177;
count__47164 = G__47178;
i__47165 = G__47179;
continue;
} else {
var vec__47169 = cljs.core.first.call(null,seq__47162__$1);
var id = cljs.core.nth.call(null,vec__47169,(0),null);
var n = cljs.core.nth.call(null,vec__47169,(1),null);
if((cljs.looperscript.start_time.now.call(null) < new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n))){
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n).stop();

cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.dissoc,id);
} else {
}

var G__47180 = cljs.core.next.call(null,seq__47162__$1);
var G__47181 = null;
var G__47182 = (0);
var G__47183 = (0);
seq__47162 = G__47180;
chunk__47163 = G__47181;
count__47164 = G__47182;
i__47165 = G__47183;
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
return (editor["commands"]).addCommand((function (){var obj47185 = {"name":name,"bindKey":(function (){var obj47187 = {"win":windows_key,"mac":mac_key};
return obj47187;
})(),"exec":f};
return obj47185;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-Shift-u","Command-Enter",(function() { 
var G__47188__delegate = function (args){
return cljs.looperscript.looperscript.update_STAR_.call(null);
};
var G__47188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47189__i = 0, G__47189__a = new Array(arguments.length -  0);
while (G__47189__i < G__47189__a.length) {G__47189__a[G__47189__i] = arguments[G__47189__i + 0]; ++G__47189__i;}
  args = new cljs.core.IndexedSeq(G__47189__a,0,null);
} 
return G__47188__delegate.call(this,args);};
G__47188.cljs$lang$maxFixedArity = 0;
G__47188.cljs$lang$applyTo = (function (arglist__47190){
var args = cljs.core.seq(arglist__47190);
return G__47188__delegate(args);
});
G__47188.cljs$core$IFn$_invoke$arity$variadic = G__47188__delegate;
return G__47188;
})()
);
cljs.looperscript.looperscript.bind_key.call(null,"link","Ctrl-Shift-l","Command-Shift-L",(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);

//# sourceMappingURL=looperscript.js.map?rel=1512752592665
