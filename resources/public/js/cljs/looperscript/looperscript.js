// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.looperscript');
goog.require('cljs.core');
goog.require('cljs.looperscript.address_bar');
goog.require('domina');
goog.require('domina.events');
goog.require('instaparse.core');
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
cljs.looperscript.looperscript.aspect_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drum-code","drum-code",2081814302),"r"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sawtooth"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2500)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)]);
}
cljs.looperscript.looperscript.log_time = (function cljs$looperscript$looperscript$log_time(var_args){
var args__28885__auto__ = [];
var len__28878__auto___41514 = arguments.length;
var i__28879__auto___41515 = (0);
while(true){
if((i__28879__auto___41515 < len__28878__auto___41514)){
args__28885__auto__.push((arguments[i__28879__auto___41515]));

var G__41516 = (i__28879__auto___41515 + (1));
i__28879__auto___41515 = G__41516;
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

cljs.looperscript.looperscript.log_time.cljs$lang$applyTo = (function (seq41512){
var G__41513 = cljs.core.first.call(null,seq41512);
var seq41512__$1 = cljs.core.next.call(null,seq41512);
return cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic(G__41513,seq41512__$1);
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
cljs.looperscript.logging.log.call(null,"Parse time: (",parse_time,") ",transform_time);

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
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,p__41517){
var vec__41518 = p__41517;
var k = cljs.core.nth.call(null,vec__41518,(0),null);
var v = cljs.core.nth.call(null,vec__41518,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,k))){
return cljs.core.assoc.call(null,m,cljs.core.first.call(null,k),v);
} else {
return cljs.core.reduce.call(null,cljs.core.into,m,(function (){var iter__28517__auto__ = ((function (vec__41518,k,v){
return (function cljs$looperscript$looperscript$separate_multi_aspects_$_iter__41521(s__41522){
return (new cljs.core.LazySeq(null,((function (vec__41518,k,v){
return (function (){
var s__41522__$1 = s__41522;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41522__$1);
if(temp__4657__auto__){
var s__41522__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41522__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__41522__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__41524 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__41523 = (0);
while(true){
if((i__41523 < size__28516__auto__)){
var i = cljs.core._nth.call(null,c__28515__auto__,i__41523);
cljs.core.chunk_append.call(null,b__41524,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]));

var G__41525 = (i__41523 + (1));
i__41523 = G__41525;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41524),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__41521.call(null,cljs.core.chunk_rest.call(null,s__41522__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41524),null);
}
} else {
var i = cljs.core.first.call(null,s__41522__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__41521.call(null,cljs.core.rest.call(null,s__41522__$2)));
}
} else {
return null;
}
break;
}
});})(vec__41518,k,v))
,null,null));
});})(vec__41518,k,v))
;
return iter__28517__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,k)));
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,cljs.core.dissoc.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)));
});
cljs.looperscript.looperscript.make_iterators = (function cljs$looperscript$looperscript$make_iterators(part){
var part__$1 = cljs.looperscript.looperscript.separate_multi_aspects.call(null,part);
var part_keys = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,((function (part__$1){
return (function (p1__41526_SHARP_){
return cljs.core._EQ_.call(null,p1__41526_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(part__$1))
,cljs.core.keys.call(null,part__$1)));
var specified_aspects = cljs.core.set.call(null,part_keys);
var sub_aspects = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,part__$1)));
var non_specified_aspects = cljs.core.remove.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects){
return (function (p1__41527_SHARP_){
return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__41527_SHARP_);
});})(part__$1,part_keys,specified_aspects,sub_aspects))
,cljs.looperscript.looperscript.aspects);
return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__41528_SHARP_){
if(cljs.core.contains_QMARK_.call(null,sub_aspects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41528_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null))){
return cljs.looperscript.iterator.timed_iterator.call(null,cljs.core.get.call(null,part__$1,p1__41528_SHARP_),cljs.core.get.call(null,part__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41528_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)));
} else {
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part__$1,p1__41528_SHARP_));

}
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,non_specified_aspects,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__41529_SHARP_){
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__41529_SHARP_));
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.next_note_fn = (function cljs$looperscript$looperscript$next_note_fn(part,start_time){
var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);
var time_pos = cljs.core.atom.call(null,(start_time + (cljs.looperscript.looperscript.get_bpm.call(null) * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));
return ((function (iterators,time_pos){
return (function() {
var G__41540 = null;
var G__41540__0 = (function (){
while(true){
var adjusted_time_pos = (1.0E-7 + ((cljs.core.deref.call(null,time_pos) - start_time) / cljs.looperscript.looperscript.get_bpm.call(null)));
var res_v = (function (){var iter__28517__auto__ = ((function (adjusted_time_pos,iterators,time_pos){
return (function cljs$looperscript$looperscript$next_note_fn_$_iter__41530(s__41531){
return (new cljs.core.LazySeq(null,((function (adjusted_time_pos,iterators,time_pos){
return (function (){
var s__41531__$1 = s__41531;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41531__$1);
if(temp__4657__auto__){
var s__41531__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41531__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__41531__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__41533 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__41532 = (0);
while(true){
if((i__41532 < size__28516__auto__)){
var vec__41534 = cljs.core._nth.call(null,c__28515__auto__,i__41532);
var aspect = cljs.core.nth.call(null,vec__41534,(0),null);
var iter = cljs.core.nth.call(null,vec__41534,(1),null);
cljs.core.chunk_append.call(null,b__41533,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null));

var G__41541 = (i__41532 + (1));
i__41532 = G__41541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41533),cljs$looperscript$looperscript$next_note_fn_$_iter__41530.call(null,cljs.core.chunk_rest.call(null,s__41531__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41533),null);
}
} else {
var vec__41537 = cljs.core.first.call(null,s__41531__$2);
var aspect = cljs.core.nth.call(null,vec__41537,(0),null);
var iter = cljs.core.nth.call(null,vec__41537,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null),cljs$looperscript$looperscript$next_note_fn_$_iter__41530.call(null,cljs.core.rest.call(null,s__41531__$2)));
}
} else {
return null;
}
break;
}
});})(adjusted_time_pos,iterators,time_pos))
,null,null));
});})(adjusted_time_pos,iterators,time_pos))
;
return iter__28517__auto__.call(null,iterators);
})();
var res = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,res_v);
var res__$1 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"start-time","start-time",814801386),cljs.core.deref.call(null,time_pos)),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core._STAR_,cljs.looperscript.looperscript.get_bpm.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time+","time+",2008858809)], null),cljs.core._STAR_,cljs.looperscript.looperscript.get_bpm.call(null));
if(((0) >= res__$1.call(null,new cljs.core.Keyword(null,"skip","skip",602715391)))){
continue;
} else {
cljs.core.swap_BANG_.call(null,time_pos,cljs.core._PLUS_,res__$1.call(null,new cljs.core.Keyword(null,"time","time",1385887882)));

return res__$1;
}
break;
}
});
var G__41540__1 = (function (command){
if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))){
return cljs.core.deref.call(null,time_pos);
} else {
return null;
}
});
G__41540 = function(command){
switch(arguments.length){
case 0:
return G__41540__0.call(this);
case 1:
return G__41540__1.call(this,command);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__41540.cljs$core$IFn$_invoke$arity$0 = G__41540__0;
G__41540.cljs$core$IFn$_invoke$arity$1 = G__41540__1;
return G__41540;
})()
;})(iterators,time_pos))
});
cljs.looperscript.looperscript.schedule_note = (function cljs$looperscript$looperscript$schedule_note(n){
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
var seq__41542 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));
var chunk__41543 = null;
var count__41544 = (0);
var i__41545 = (0);
while(true){
if((i__41545 < count__41544)){
var i = cljs.core._nth.call(null,chunk__41543,i__41545);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),i,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time__$1], null));

var G__41546 = seq__41542;
var G__41547 = chunk__41543;
var G__41548 = count__41544;
var G__41549 = (i__41545 + (1));
seq__41542 = G__41546;
chunk__41543 = G__41547;
count__41544 = G__41548;
i__41545 = G__41549;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41542);
if(temp__4657__auto__){
var seq__41542__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41542__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__41542__$1);
var G__41550 = cljs.core.chunk_rest.call(null,seq__41542__$1);
var G__41551 = c__28548__auto__;
var G__41552 = cljs.core.count.call(null,c__28548__auto__);
var G__41553 = (0);
seq__41542 = G__41550;
chunk__41543 = G__41551;
count__41544 = G__41552;
i__41545 = G__41553;
continue;
} else {
var i = cljs.core.first.call(null,seq__41542__$1);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),i,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time__$1], null));

var G__41554 = cljs.core.next.call(null,seq__41542__$1);
var G__41555 = null;
var G__41556 = (0);
var G__41557 = (0);
seq__41542 = G__41554;
chunk__41543 = G__41555;
count__41544 = G__41556;
i__41545 = G__41557;
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
});
cljs.looperscript.looperscript.queue_notes = (function cljs$looperscript$looperscript$queue_notes(){
cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.last_queue_time,cljs.looperscript.start_time.now.call(null));

var end_time = ((cljs.looperscript.start_time.now.call(null) + cljs.looperscript.looperscript.queue_time_extra) + cljs.looperscript.looperscript.queue_time_interval);
var seq__41558 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));
var chunk__41559 = null;
var count__41560 = (0);
var i__41561 = (0);
while(true){
if((i__41561 < count__41560)){
var n_n_fn = cljs.core._nth.call(null,chunk__41559,i__41561);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_41562 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_41562))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_41562);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_41562) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__41563 = seq__41558;
var G__41564 = chunk__41559;
var G__41565 = count__41560;
var G__41566 = (i__41561 + (1));
seq__41558 = G__41563;
chunk__41559 = G__41564;
count__41560 = G__41565;
i__41561 = G__41566;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41558);
if(temp__4657__auto__){
var seq__41558__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41558__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__41558__$1);
var G__41567 = cljs.core.chunk_rest.call(null,seq__41558__$1);
var G__41568 = c__28548__auto__;
var G__41569 = cljs.core.count.call(null,c__28548__auto__);
var G__41570 = (0);
seq__41558 = G__41567;
chunk__41559 = G__41568;
count__41560 = G__41569;
i__41561 = G__41570;
continue;
} else {
var n_n_fn = cljs.core.first.call(null,seq__41558__$1);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_41571 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_41571))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_41571);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_41571) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__41572 = cljs.core.next.call(null,seq__41558__$1);
var G__41573 = null;
var G__41574 = (0);
var G__41575 = (0);
seq__41558 = G__41572;
chunk__41559 = G__41573;
count__41560 = G__41574;
i__41561 = G__41575;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.looperscript.looperscript.reset_button = (function cljs$looperscript$looperscript$reset_button(){
cljs.looperscript.looperscript.stop.call(null);

return cljs.looperscript.start_time.reset_clock_BANG_.call(null);
});
cljs.looperscript.looperscript.update_STAR_ = (function cljs$looperscript$looperscript$update_STAR_(var_args){
var G__41577 = arguments.length;
switch (G__41577) {
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
var new_nnfns = cljs.core.vec.call(null,(function (){var iter__28517__auto__ = (function cljs$looperscript$looperscript$iter__41578(s__41579){
return (new cljs.core.LazySeq(null,(function (){
var s__41579__$1 = s__41579;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41579__$1);
if(temp__4657__auto__){
var s__41579__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41579__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__41579__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__41581 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__41580 = (0);
while(true){
if((i__41580 < size__28516__auto__)){
var p = cljs.core._nth.call(null,c__28515__auto__,i__41580);
cljs.core.chunk_append.call(null,b__41581,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)));

var G__41587 = (i__41580 + (1));
i__41580 = G__41587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41581),cljs$looperscript$looperscript$iter__41578.call(null,cljs.core.chunk_rest.call(null,s__41579__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41581),null);
}
} else {
var p = cljs.core.first.call(null,s__41579__$2);
return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)),cljs$looperscript$looperscript$iter__41578.call(null,cljs.core.rest.call(null,s__41579__$2)));
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
var seq__41582_41588 = cljs.core.seq.call(null,new_nnfns);
var chunk__41583_41589 = null;
var count__41584_41590 = (0);
var i__41585_41591 = (0);
while(true){
if((i__41585_41591 < count__41584_41590)){
var nnfn_41592 = cljs.core._nth.call(null,chunk__41583_41589,i__41585_41591);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_41592.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_41592.call(null);

continue;
} else {
}
break;
}

var G__41593 = seq__41582_41588;
var G__41594 = chunk__41583_41589;
var G__41595 = count__41584_41590;
var G__41596 = (i__41585_41591 + (1));
seq__41582_41588 = G__41593;
chunk__41583_41589 = G__41594;
count__41584_41590 = G__41595;
i__41585_41591 = G__41596;
continue;
} else {
var temp__4657__auto___41597 = cljs.core.seq.call(null,seq__41582_41588);
if(temp__4657__auto___41597){
var seq__41582_41598__$1 = temp__4657__auto___41597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41582_41598__$1)){
var c__28548__auto___41599 = cljs.core.chunk_first.call(null,seq__41582_41598__$1);
var G__41600 = cljs.core.chunk_rest.call(null,seq__41582_41598__$1);
var G__41601 = c__28548__auto___41599;
var G__41602 = cljs.core.count.call(null,c__28548__auto___41599);
var G__41603 = (0);
seq__41582_41588 = G__41600;
chunk__41583_41589 = G__41601;
count__41584_41590 = G__41602;
i__41585_41591 = G__41603;
continue;
} else {
var nnfn_41604 = cljs.core.first.call(null,seq__41582_41598__$1);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_41604.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_41604.call(null);

continue;
} else {
}
break;
}

var G__41605 = cljs.core.next.call(null,seq__41582_41598__$1);
var G__41606 = null;
var G__41607 = (0);
var G__41608 = (0);
seq__41582_41588 = G__41605;
chunk__41583_41589 = G__41606;
count__41584_41590 = G__41607;
i__41585_41591 = G__41608;
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
var seq__41609_41613 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));
var chunk__41610_41614 = null;
var count__41611_41615 = (0);
var i__41612_41616 = (0);
while(true){
if((i__41612_41616 < count__41611_41615)){
var n_41617 = cljs.core._nth.call(null,chunk__41610_41614,i__41612_41616);
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_41617).stop();

var G__41618 = seq__41609_41613;
var G__41619 = chunk__41610_41614;
var G__41620 = count__41611_41615;
var G__41621 = (i__41612_41616 + (1));
seq__41609_41613 = G__41618;
chunk__41610_41614 = G__41619;
count__41611_41615 = G__41620;
i__41612_41616 = G__41621;
continue;
} else {
var temp__4657__auto___41622 = cljs.core.seq.call(null,seq__41609_41613);
if(temp__4657__auto___41622){
var seq__41609_41623__$1 = temp__4657__auto___41622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41609_41623__$1)){
var c__28548__auto___41624 = cljs.core.chunk_first.call(null,seq__41609_41623__$1);
var G__41625 = cljs.core.chunk_rest.call(null,seq__41609_41623__$1);
var G__41626 = c__28548__auto___41624;
var G__41627 = cljs.core.count.call(null,c__28548__auto___41624);
var G__41628 = (0);
seq__41609_41613 = G__41625;
chunk__41610_41614 = G__41626;
count__41611_41615 = G__41627;
i__41612_41616 = G__41628;
continue;
} else {
var n_41629 = cljs.core.first.call(null,seq__41609_41623__$1);
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_41629).stop();

var G__41630 = cljs.core.next.call(null,seq__41609_41623__$1);
var G__41631 = null;
var G__41632 = (0);
var G__41633 = (0);
seq__41609_41613 = G__41630;
chunk__41610_41614 = G__41631;
count__41611_41615 = G__41632;
i__41612_41616 = G__41633;
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
var seq__41634 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes));
var chunk__41635 = null;
var count__41636 = (0);
var i__41637 = (0);
while(true){
if((i__41637 < count__41636)){
var vec__41638 = cljs.core._nth.call(null,chunk__41635,i__41637);
var id = cljs.core.nth.call(null,vec__41638,(0),null);
var n = cljs.core.nth.call(null,vec__41638,(1),null);
if((cljs.looperscript.start_time.now.call(null) < new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n))){
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n).stop();

cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.dissoc,id);
} else {
}

var G__41644 = seq__41634;
var G__41645 = chunk__41635;
var G__41646 = count__41636;
var G__41647 = (i__41637 + (1));
seq__41634 = G__41644;
chunk__41635 = G__41645;
count__41636 = G__41646;
i__41637 = G__41647;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41634);
if(temp__4657__auto__){
var seq__41634__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41634__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__41634__$1);
var G__41648 = cljs.core.chunk_rest.call(null,seq__41634__$1);
var G__41649 = c__28548__auto__;
var G__41650 = cljs.core.count.call(null,c__28548__auto__);
var G__41651 = (0);
seq__41634 = G__41648;
chunk__41635 = G__41649;
count__41636 = G__41650;
i__41637 = G__41651;
continue;
} else {
var vec__41641 = cljs.core.first.call(null,seq__41634__$1);
var id = cljs.core.nth.call(null,vec__41641,(0),null);
var n = cljs.core.nth.call(null,vec__41641,(1),null);
if((cljs.looperscript.start_time.now.call(null) < new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n))){
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n).stop();

cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.dissoc,id);
} else {
}

var G__41652 = cljs.core.next.call(null,seq__41634__$1);
var G__41653 = null;
var G__41654 = (0);
var G__41655 = (0);
seq__41634 = G__41652;
chunk__41635 = G__41653;
count__41636 = G__41654;
i__41637 = G__41655;
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
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"play"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
return cljs.looperscript.looperscript.play.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"pause"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
return cljs.looperscript.looperscript.stop.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"update"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
return cljs.looperscript.looperscript.update_STAR_.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"stop"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
return cljs.looperscript.looperscript.reset_button.call(null);
}));
cljs.looperscript.looperscript.bind_key = (function cljs$looperscript$looperscript$bind_key(name,windows_key,mac_key,f){
return (editor["commands"]).addCommand((function (){var obj41657 = {"name":name,"bindKey":(function (){var obj41659 = {"win":windows_key,"mac":mac_key};
return obj41659;
})(),"exec":f};
return obj41657;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-Shift-u","Command-Shift-U",(function() { 
var G__41660__delegate = function (args){
return cljs.looperscript.looperscript.update_STAR_.call(null);
};
var G__41660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41661__i = 0, G__41661__a = new Array(arguments.length -  0);
while (G__41661__i < G__41661__a.length) {G__41661__a[G__41661__i] = arguments[G__41661__i + 0]; ++G__41661__i;}
  args = new cljs.core.IndexedSeq(G__41661__a,0,null);
} 
return G__41660__delegate.call(this,args);};
G__41660.cljs$lang$maxFixedArity = 0;
G__41660.cljs$lang$applyTo = (function (arglist__41662){
var args = cljs.core.seq(arglist__41662);
return G__41660__delegate(args);
});
G__41660.cljs$core$IFn$_invoke$arity$variadic = G__41660__delegate;
return G__41660;
})()
);
cljs.looperscript.looperscript.bind_key.call(null,"link","Ctrl-Shift-l","Command-Shift-L",(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);

//# sourceMappingURL=looperscript.js.map?rel=1511412196346
