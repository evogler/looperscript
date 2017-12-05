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
var len__28878__auto___34193 = arguments.length;
var i__28879__auto___34194 = (0);
while(true){
if((i__28879__auto___34194 < len__28878__auto___34193)){
args__28885__auto__.push((arguments[i__28879__auto___34194]));

var G__34195 = (i__28879__auto___34194 + (1));
i__28879__auto___34194 = G__34195;
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

cljs.looperscript.looperscript.log_time.cljs$lang$applyTo = (function (seq34191){
var G__34192 = cljs.core.first.call(null,seq34191);
var seq34191__$1 = cljs.core.next.call(null,seq34191);
return cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic(G__34192,seq34191__$1);
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
cljs.looperscript.logging.log.call(null,"Parse time: ",parse_time,"; Transorm time: ",(transform_time - parse_time));

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
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,p__34196){
var vec__34197 = p__34196;
var k = cljs.core.nth.call(null,vec__34197,(0),null);
var v = cljs.core.nth.call(null,vec__34197,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,k))){
return cljs.core.assoc.call(null,m,cljs.core.first.call(null,k),v);
} else {
return cljs.core.reduce.call(null,cljs.core.into,m,(function (){var iter__28517__auto__ = ((function (vec__34197,k,v){
return (function cljs$looperscript$looperscript$separate_multi_aspects_$_iter__34200(s__34201){
return (new cljs.core.LazySeq(null,((function (vec__34197,k,v){
return (function (){
var s__34201__$1 = s__34201;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34201__$1);
if(temp__4657__auto__){
var s__34201__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34201__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__34201__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__34203 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__34202 = (0);
while(true){
if((i__34202 < size__28516__auto__)){
var i = cljs.core._nth.call(null,c__28515__auto__,i__34202);
cljs.core.chunk_append.call(null,b__34203,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]));

var G__34204 = (i__34202 + (1));
i__34202 = G__34204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34203),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__34200.call(null,cljs.core.chunk_rest.call(null,s__34201__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34203),null);
}
} else {
var i = cljs.core.first.call(null,s__34201__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__34200.call(null,cljs.core.rest.call(null,s__34201__$2)));
}
} else {
return null;
}
break;
}
});})(vec__34197,k,v))
,null,null));
});})(vec__34197,k,v))
;
return iter__28517__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,k)));
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,cljs.core.dissoc.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)));
});
cljs.looperscript.looperscript.make_iterators = (function cljs$looperscript$looperscript$make_iterators(part){
var part__$1 = cljs.looperscript.looperscript.separate_multi_aspects.call(null,part);
var part_keys = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,((function (part__$1){
return (function (p1__34205_SHARP_){
return cljs.core._EQ_.call(null,p1__34205_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(part__$1))
,cljs.core.keys.call(null,part__$1)));
var specified_aspects = cljs.core.set.call(null,part_keys);
var sub_aspects = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,part__$1)));
var non_specified_aspects = cljs.core.remove.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects){
return (function (p1__34206_SHARP_){
return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__34206_SHARP_);
});})(part__$1,part_keys,specified_aspects,sub_aspects))
,cljs.looperscript.looperscript.aspects);
return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__34207_SHARP_){
if(cljs.core.contains_QMARK_.call(null,sub_aspects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34207_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null))){
return cljs.looperscript.iterator.timed_iterator.call(null,cljs.core.get.call(null,part__$1,p1__34207_SHARP_),cljs.core.get.call(null,part__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34207_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)));
} else {
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part__$1,p1__34207_SHARP_));

}
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,non_specified_aspects,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__34208_SHARP_){
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__34208_SHARP_));
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.next_note_fn = (function cljs$looperscript$looperscript$next_note_fn(part,start_time){
var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);
var time_pos = cljs.core.atom.call(null,(start_time + (cljs.looperscript.looperscript.get_bpm.call(null) * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));
return ((function (iterators,time_pos){
return (function() {
var G__34219 = null;
var G__34219__0 = (function (){
while(true){
var adjusted_time_pos = (1.0E-7 + ((cljs.core.deref.call(null,time_pos) - start_time) / cljs.looperscript.looperscript.get_bpm.call(null)));
var res_v = (function (){var iter__28517__auto__ = ((function (adjusted_time_pos,iterators,time_pos){
return (function cljs$looperscript$looperscript$next_note_fn_$_iter__34209(s__34210){
return (new cljs.core.LazySeq(null,((function (adjusted_time_pos,iterators,time_pos){
return (function (){
var s__34210__$1 = s__34210;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34210__$1);
if(temp__4657__auto__){
var s__34210__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34210__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__34210__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__34212 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__34211 = (0);
while(true){
if((i__34211 < size__28516__auto__)){
var vec__34213 = cljs.core._nth.call(null,c__28515__auto__,i__34211);
var aspect = cljs.core.nth.call(null,vec__34213,(0),null);
var iter = cljs.core.nth.call(null,vec__34213,(1),null);
cljs.core.chunk_append.call(null,b__34212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null));

var G__34220 = (i__34211 + (1));
i__34211 = G__34220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34212),cljs$looperscript$looperscript$next_note_fn_$_iter__34209.call(null,cljs.core.chunk_rest.call(null,s__34210__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34212),null);
}
} else {
var vec__34216 = cljs.core.first.call(null,s__34210__$2);
var aspect = cljs.core.nth.call(null,vec__34216,(0),null);
var iter = cljs.core.nth.call(null,vec__34216,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null),cljs$looperscript$looperscript$next_note_fn_$_iter__34209.call(null,cljs.core.rest.call(null,s__34210__$2)));
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
var G__34219__1 = (function (command){
if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))){
return cljs.core.deref.call(null,time_pos);
} else {
return null;
}
});
G__34219 = function(command){
switch(arguments.length){
case 0:
return G__34219__0.call(this);
case 1:
return G__34219__1.call(this,command);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__34219.cljs$core$IFn$_invoke$arity$0 = G__34219__0;
G__34219.cljs$core$IFn$_invoke$arity$1 = G__34219__1;
return G__34219;
})()
;})(iterators,time_pos))
});
cljs.looperscript.looperscript.sched_log = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.looperscript.looperscript.schedule_note = (function cljs$looperscript$looperscript$schedule_note(n){
if((cljs.core.sequential_QMARK_.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.Keyword(null,"chord","chord",-696248342)))){
var seq__34221 = cljs.core.seq.call(null,cljs.core.flatten.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n))));
var chunk__34222 = null;
var count__34223 = (0);
var i__34224 = (0);
while(true){
if((i__34224 < count__34223)){
var note = cljs.core._nth.call(null,chunk__34222,i__34224);
cljs.looperscript.looperscript.schedule_note.call(null,cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"sound","sound",-2127407070),note));

var G__34229 = seq__34221;
var G__34230 = chunk__34222;
var G__34231 = count__34223;
var G__34232 = (i__34224 + (1));
seq__34221 = G__34229;
chunk__34222 = G__34230;
count__34223 = G__34231;
i__34224 = G__34232;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34221);
if(temp__4657__auto__){
var seq__34221__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34221__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__34221__$1);
var G__34233 = cljs.core.chunk_rest.call(null,seq__34221__$1);
var G__34234 = c__28548__auto__;
var G__34235 = cljs.core.count.call(null,c__28548__auto__);
var G__34236 = (0);
seq__34221 = G__34233;
chunk__34222 = G__34234;
count__34223 = G__34235;
i__34224 = G__34236;
continue;
} else {
var note = cljs.core.first.call(null,seq__34221__$1);
cljs.looperscript.looperscript.schedule_note.call(null,cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"sound","sound",-2127407070),note));

var G__34237 = cljs.core.next.call(null,seq__34221__$1);
var G__34238 = null;
var G__34239 = (0);
var G__34240 = (0);
seq__34221 = G__34237;
chunk__34222 = G__34238;
count__34223 = G__34239;
i__34224 = G__34240;
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
var seq__34225 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));
var chunk__34226 = null;
var count__34227 = (0);
var i__34228 = (0);
while(true){
if((i__34228 < count__34227)){
var i = cljs.core._nth.call(null,chunk__34226,i__34228);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),i,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time__$1], null));

var G__34241 = seq__34225;
var G__34242 = chunk__34226;
var G__34243 = count__34227;
var G__34244 = (i__34228 + (1));
seq__34225 = G__34241;
chunk__34226 = G__34242;
count__34227 = G__34243;
i__34228 = G__34244;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34225);
if(temp__4657__auto__){
var seq__34225__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34225__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__34225__$1);
var G__34245 = cljs.core.chunk_rest.call(null,seq__34225__$1);
var G__34246 = c__28548__auto__;
var G__34247 = cljs.core.count.call(null,c__28548__auto__);
var G__34248 = (0);
seq__34225 = G__34245;
chunk__34226 = G__34246;
count__34227 = G__34247;
i__34228 = G__34248;
continue;
} else {
var i = cljs.core.first.call(null,seq__34225__$1);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),i,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time__$1], null));

var G__34249 = cljs.core.next.call(null,seq__34225__$1);
var G__34250 = null;
var G__34251 = (0);
var G__34252 = (0);
seq__34225 = G__34249;
chunk__34226 = G__34250;
count__34227 = G__34251;
i__34228 = G__34252;
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
var seq__34253 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));
var chunk__34254 = null;
var count__34255 = (0);
var i__34256 = (0);
while(true){
if((i__34256 < count__34255)){
var n_n_fn = cljs.core._nth.call(null,chunk__34254,i__34256);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_34257 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_34257))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_34257);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_34257) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__34258 = seq__34253;
var G__34259 = chunk__34254;
var G__34260 = count__34255;
var G__34261 = (i__34256 + (1));
seq__34253 = G__34258;
chunk__34254 = G__34259;
count__34255 = G__34260;
i__34256 = G__34261;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34253);
if(temp__4657__auto__){
var seq__34253__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34253__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__34253__$1);
var G__34262 = cljs.core.chunk_rest.call(null,seq__34253__$1);
var G__34263 = c__28548__auto__;
var G__34264 = cljs.core.count.call(null,c__28548__auto__);
var G__34265 = (0);
seq__34253 = G__34262;
chunk__34254 = G__34263;
count__34255 = G__34264;
i__34256 = G__34265;
continue;
} else {
var n_n_fn = cljs.core.first.call(null,seq__34253__$1);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_34266 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_34266))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_34266);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_34266) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__34267 = cljs.core.next.call(null,seq__34253__$1);
var G__34268 = null;
var G__34269 = (0);
var G__34270 = (0);
seq__34253 = G__34267;
chunk__34254 = G__34268;
count__34255 = G__34269;
i__34256 = G__34270;
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
var G__34272 = arguments.length;
switch (G__34272) {
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
var new_nnfns = cljs.core.vec.call(null,(function (){var iter__28517__auto__ = (function cljs$looperscript$looperscript$iter__34273(s__34274){
return (new cljs.core.LazySeq(null,(function (){
var s__34274__$1 = s__34274;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34274__$1);
if(temp__4657__auto__){
var s__34274__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34274__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__34274__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__34276 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__34275 = (0);
while(true){
if((i__34275 < size__28516__auto__)){
var p = cljs.core._nth.call(null,c__28515__auto__,i__34275);
cljs.core.chunk_append.call(null,b__34276,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)));

var G__34282 = (i__34275 + (1));
i__34275 = G__34282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34276),cljs$looperscript$looperscript$iter__34273.call(null,cljs.core.chunk_rest.call(null,s__34274__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34276),null);
}
} else {
var p = cljs.core.first.call(null,s__34274__$2);
return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)),cljs$looperscript$looperscript$iter__34273.call(null,cljs.core.rest.call(null,s__34274__$2)));
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
var seq__34277_34283 = cljs.core.seq.call(null,new_nnfns);
var chunk__34278_34284 = null;
var count__34279_34285 = (0);
var i__34280_34286 = (0);
while(true){
if((i__34280_34286 < count__34279_34285)){
var nnfn_34287 = cljs.core._nth.call(null,chunk__34278_34284,i__34280_34286);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_34287.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_34287.call(null);

continue;
} else {
}
break;
}

var G__34288 = seq__34277_34283;
var G__34289 = chunk__34278_34284;
var G__34290 = count__34279_34285;
var G__34291 = (i__34280_34286 + (1));
seq__34277_34283 = G__34288;
chunk__34278_34284 = G__34289;
count__34279_34285 = G__34290;
i__34280_34286 = G__34291;
continue;
} else {
var temp__4657__auto___34292 = cljs.core.seq.call(null,seq__34277_34283);
if(temp__4657__auto___34292){
var seq__34277_34293__$1 = temp__4657__auto___34292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34277_34293__$1)){
var c__28548__auto___34294 = cljs.core.chunk_first.call(null,seq__34277_34293__$1);
var G__34295 = cljs.core.chunk_rest.call(null,seq__34277_34293__$1);
var G__34296 = c__28548__auto___34294;
var G__34297 = cljs.core.count.call(null,c__28548__auto___34294);
var G__34298 = (0);
seq__34277_34283 = G__34295;
chunk__34278_34284 = G__34296;
count__34279_34285 = G__34297;
i__34280_34286 = G__34298;
continue;
} else {
var nnfn_34299 = cljs.core.first.call(null,seq__34277_34293__$1);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_34299.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_34299.call(null);

continue;
} else {
}
break;
}

var G__34300 = cljs.core.next.call(null,seq__34277_34293__$1);
var G__34301 = null;
var G__34302 = (0);
var G__34303 = (0);
seq__34277_34283 = G__34300;
chunk__34278_34284 = G__34301;
count__34279_34285 = G__34302;
i__34280_34286 = G__34303;
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
var seq__34304_34308 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));
var chunk__34305_34309 = null;
var count__34306_34310 = (0);
var i__34307_34311 = (0);
while(true){
if((i__34307_34311 < count__34306_34310)){
var n_34312 = cljs.core._nth.call(null,chunk__34305_34309,i__34307_34311);
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_34312).stop();

var G__34313 = seq__34304_34308;
var G__34314 = chunk__34305_34309;
var G__34315 = count__34306_34310;
var G__34316 = (i__34307_34311 + (1));
seq__34304_34308 = G__34313;
chunk__34305_34309 = G__34314;
count__34306_34310 = G__34315;
i__34307_34311 = G__34316;
continue;
} else {
var temp__4657__auto___34317 = cljs.core.seq.call(null,seq__34304_34308);
if(temp__4657__auto___34317){
var seq__34304_34318__$1 = temp__4657__auto___34317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34304_34318__$1)){
var c__28548__auto___34319 = cljs.core.chunk_first.call(null,seq__34304_34318__$1);
var G__34320 = cljs.core.chunk_rest.call(null,seq__34304_34318__$1);
var G__34321 = c__28548__auto___34319;
var G__34322 = cljs.core.count.call(null,c__28548__auto___34319);
var G__34323 = (0);
seq__34304_34308 = G__34320;
chunk__34305_34309 = G__34321;
count__34306_34310 = G__34322;
i__34307_34311 = G__34323;
continue;
} else {
var n_34324 = cljs.core.first.call(null,seq__34304_34318__$1);
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_34324).stop();

var G__34325 = cljs.core.next.call(null,seq__34304_34318__$1);
var G__34326 = null;
var G__34327 = (0);
var G__34328 = (0);
seq__34304_34308 = G__34325;
chunk__34305_34309 = G__34326;
count__34306_34310 = G__34327;
i__34307_34311 = G__34328;
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
var seq__34329 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes));
var chunk__34330 = null;
var count__34331 = (0);
var i__34332 = (0);
while(true){
if((i__34332 < count__34331)){
var vec__34333 = cljs.core._nth.call(null,chunk__34330,i__34332);
var id = cljs.core.nth.call(null,vec__34333,(0),null);
var n = cljs.core.nth.call(null,vec__34333,(1),null);
if((cljs.looperscript.start_time.now.call(null) < new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n))){
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n).stop();

cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.dissoc,id);
} else {
}

var G__34339 = seq__34329;
var G__34340 = chunk__34330;
var G__34341 = count__34331;
var G__34342 = (i__34332 + (1));
seq__34329 = G__34339;
chunk__34330 = G__34340;
count__34331 = G__34341;
i__34332 = G__34342;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34329);
if(temp__4657__auto__){
var seq__34329__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34329__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__34329__$1);
var G__34343 = cljs.core.chunk_rest.call(null,seq__34329__$1);
var G__34344 = c__28548__auto__;
var G__34345 = cljs.core.count.call(null,c__28548__auto__);
var G__34346 = (0);
seq__34329 = G__34343;
chunk__34330 = G__34344;
count__34331 = G__34345;
i__34332 = G__34346;
continue;
} else {
var vec__34336 = cljs.core.first.call(null,seq__34329__$1);
var id = cljs.core.nth.call(null,vec__34336,(0),null);
var n = cljs.core.nth.call(null,vec__34336,(1),null);
if((cljs.looperscript.start_time.now.call(null) < new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n))){
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n).stop();

cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.dissoc,id);
} else {
}

var G__34347 = cljs.core.next.call(null,seq__34329__$1);
var G__34348 = null;
var G__34349 = (0);
var G__34350 = (0);
seq__34329 = G__34347;
chunk__34330 = G__34348;
count__34331 = G__34349;
i__34332 = G__34350;
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
return (editor["commands"]).addCommand((function (){var obj34352 = {"name":name,"bindKey":(function (){var obj34354 = {"win":windows_key,"mac":mac_key};
return obj34354;
})(),"exec":f};
return obj34352;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-Shift-u","Command-Enter",(function() { 
var G__34355__delegate = function (args){
return cljs.looperscript.looperscript.update_STAR_.call(null);
};
var G__34355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34356__i = 0, G__34356__a = new Array(arguments.length -  0);
while (G__34356__i < G__34356__a.length) {G__34356__a[G__34356__i] = arguments[G__34356__i + 0]; ++G__34356__i;}
  args = new cljs.core.IndexedSeq(G__34356__a,0,null);
} 
return G__34355__delegate.call(this,args);};
G__34355.cljs$lang$maxFixedArity = 0;
G__34355.cljs$lang$applyTo = (function (arglist__34357){
var args = cljs.core.seq(arglist__34357);
return G__34355__delegate(args);
});
G__34355.cljs$core$IFn$_invoke$arity$variadic = G__34355__delegate;
return G__34355;
})()
);
cljs.looperscript.looperscript.bind_key.call(null,"link","Ctrl-Shift-l","Command-Shift-L",(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);

//# sourceMappingURL=looperscript.js.map?rel=1512339485783
