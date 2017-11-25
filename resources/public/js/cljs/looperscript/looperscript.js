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
cljs.looperscript.looperscript.aspect_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drum-code","drum-code",2081814302),"d"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sawtooth"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2500)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)]);
}
cljs.looperscript.looperscript.log_time = (function cljs$looperscript$looperscript$log_time(var_args){
var args__28885__auto__ = [];
var len__28878__auto___42923 = arguments.length;
var i__28879__auto___42924 = (0);
while(true){
if((i__28879__auto___42924 < len__28878__auto___42923)){
args__28885__auto__.push((arguments[i__28879__auto___42924]));

var G__42925 = (i__28879__auto___42924 + (1));
i__28879__auto___42924 = G__42925;
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

cljs.looperscript.looperscript.log_time.cljs$lang$applyTo = (function (seq42921){
var G__42922 = cljs.core.first.call(null,seq42921);
var seq42921__$1 = cljs.core.next.call(null,seq42921);
return cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic(G__42922,seq42921__$1);
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
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,p__42926){
var vec__42927 = p__42926;
var k = cljs.core.nth.call(null,vec__42927,(0),null);
var v = cljs.core.nth.call(null,vec__42927,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,k))){
return cljs.core.assoc.call(null,m,cljs.core.first.call(null,k),v);
} else {
return cljs.core.reduce.call(null,cljs.core.into,m,(function (){var iter__28517__auto__ = ((function (vec__42927,k,v){
return (function cljs$looperscript$looperscript$separate_multi_aspects_$_iter__42930(s__42931){
return (new cljs.core.LazySeq(null,((function (vec__42927,k,v){
return (function (){
var s__42931__$1 = s__42931;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42931__$1);
if(temp__4657__auto__){
var s__42931__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42931__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__42931__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__42933 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__42932 = (0);
while(true){
if((i__42932 < size__28516__auto__)){
var i = cljs.core._nth.call(null,c__28515__auto__,i__42932);
cljs.core.chunk_append.call(null,b__42933,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]));

var G__42934 = (i__42932 + (1));
i__42932 = G__42934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42933),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__42930.call(null,cljs.core.chunk_rest.call(null,s__42931__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42933),null);
}
} else {
var i = cljs.core.first.call(null,s__42931__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__42930.call(null,cljs.core.rest.call(null,s__42931__$2)));
}
} else {
return null;
}
break;
}
});})(vec__42927,k,v))
,null,null));
});})(vec__42927,k,v))
;
return iter__28517__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,k)));
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,cljs.core.dissoc.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)));
});
cljs.looperscript.looperscript.make_iterators = (function cljs$looperscript$looperscript$make_iterators(part){
var part__$1 = cljs.looperscript.looperscript.separate_multi_aspects.call(null,part);
var part_keys = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,((function (part__$1){
return (function (p1__42935_SHARP_){
return cljs.core._EQ_.call(null,p1__42935_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(part__$1))
,cljs.core.keys.call(null,part__$1)));
var specified_aspects = cljs.core.set.call(null,part_keys);
var sub_aspects = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,part__$1)));
var non_specified_aspects = cljs.core.remove.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects){
return (function (p1__42936_SHARP_){
return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__42936_SHARP_);
});})(part__$1,part_keys,specified_aspects,sub_aspects))
,cljs.looperscript.looperscript.aspects);
return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__42937_SHARP_){
if(cljs.core.contains_QMARK_.call(null,sub_aspects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42937_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null))){
return cljs.looperscript.iterator.timed_iterator.call(null,cljs.core.get.call(null,part__$1,p1__42937_SHARP_),cljs.core.get.call(null,part__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42937_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)));
} else {
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part__$1,p1__42937_SHARP_));

}
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,non_specified_aspects,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__42938_SHARP_){
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__42938_SHARP_));
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.next_note_fn = (function cljs$looperscript$looperscript$next_note_fn(part,start_time){
var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);
var time_pos = cljs.core.atom.call(null,(start_time + (cljs.looperscript.looperscript.get_bpm.call(null) * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));
return ((function (iterators,time_pos){
return (function() {
var G__42949 = null;
var G__42949__0 = (function (){
while(true){
var adjusted_time_pos = (1.0E-7 + ((cljs.core.deref.call(null,time_pos) - start_time) / cljs.looperscript.looperscript.get_bpm.call(null)));
var res_v = (function (){var iter__28517__auto__ = ((function (adjusted_time_pos,iterators,time_pos){
return (function cljs$looperscript$looperscript$next_note_fn_$_iter__42939(s__42940){
return (new cljs.core.LazySeq(null,((function (adjusted_time_pos,iterators,time_pos){
return (function (){
var s__42940__$1 = s__42940;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42940__$1);
if(temp__4657__auto__){
var s__42940__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42940__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__42940__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__42942 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__42941 = (0);
while(true){
if((i__42941 < size__28516__auto__)){
var vec__42943 = cljs.core._nth.call(null,c__28515__auto__,i__42941);
var aspect = cljs.core.nth.call(null,vec__42943,(0),null);
var iter = cljs.core.nth.call(null,vec__42943,(1),null);
cljs.core.chunk_append.call(null,b__42942,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null));

var G__42950 = (i__42941 + (1));
i__42941 = G__42950;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42942),cljs$looperscript$looperscript$next_note_fn_$_iter__42939.call(null,cljs.core.chunk_rest.call(null,s__42940__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42942),null);
}
} else {
var vec__42946 = cljs.core.first.call(null,s__42940__$2);
var aspect = cljs.core.nth.call(null,vec__42946,(0),null);
var iter = cljs.core.nth.call(null,vec__42946,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null),cljs$looperscript$looperscript$next_note_fn_$_iter__42939.call(null,cljs.core.rest.call(null,s__42940__$2)));
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
var G__42949__1 = (function (command){
if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))){
return cljs.core.deref.call(null,time_pos);
} else {
return null;
}
});
G__42949 = function(command){
switch(arguments.length){
case 0:
return G__42949__0.call(this);
case 1:
return G__42949__1.call(this,command);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__42949.cljs$core$IFn$_invoke$arity$0 = G__42949__0;
G__42949.cljs$core$IFn$_invoke$arity$1 = G__42949__1;
return G__42949;
})()
;})(iterators,time_pos))
});
cljs.looperscript.looperscript.sched_log = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.looperscript.looperscript.schedule_note = (function cljs$looperscript$looperscript$schedule_note(n){
if((cljs.core.sequential_QMARK_.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.Keyword(null,"chord","chord",-696248342)))){
var seq__42951 = cljs.core.seq.call(null,cljs.core.flatten.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n))));
var chunk__42952 = null;
var count__42953 = (0);
var i__42954 = (0);
while(true){
if((i__42954 < count__42953)){
var note = cljs.core._nth.call(null,chunk__42952,i__42954);
cljs.looperscript.looperscript.schedule_note.call(null,cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"sound","sound",-2127407070),note));

var G__42959 = seq__42951;
var G__42960 = chunk__42952;
var G__42961 = count__42953;
var G__42962 = (i__42954 + (1));
seq__42951 = G__42959;
chunk__42952 = G__42960;
count__42953 = G__42961;
i__42954 = G__42962;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42951);
if(temp__4657__auto__){
var seq__42951__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42951__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__42951__$1);
var G__42963 = cljs.core.chunk_rest.call(null,seq__42951__$1);
var G__42964 = c__28548__auto__;
var G__42965 = cljs.core.count.call(null,c__28548__auto__);
var G__42966 = (0);
seq__42951 = G__42963;
chunk__42952 = G__42964;
count__42953 = G__42965;
i__42954 = G__42966;
continue;
} else {
var note = cljs.core.first.call(null,seq__42951__$1);
cljs.looperscript.looperscript.schedule_note.call(null,cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"sound","sound",-2127407070),note));

var G__42967 = cljs.core.next.call(null,seq__42951__$1);
var G__42968 = null;
var G__42969 = (0);
var G__42970 = (0);
seq__42951 = G__42967;
chunk__42952 = G__42968;
count__42953 = G__42969;
i__42954 = G__42970;
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
var seq__42955 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));
var chunk__42956 = null;
var count__42957 = (0);
var i__42958 = (0);
while(true){
if((i__42958 < count__42957)){
var i = cljs.core._nth.call(null,chunk__42956,i__42958);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),i,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time__$1], null));

var G__42971 = seq__42955;
var G__42972 = chunk__42956;
var G__42973 = count__42957;
var G__42974 = (i__42958 + (1));
seq__42955 = G__42971;
chunk__42956 = G__42972;
count__42957 = G__42973;
i__42958 = G__42974;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42955);
if(temp__4657__auto__){
var seq__42955__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42955__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__42955__$1);
var G__42975 = cljs.core.chunk_rest.call(null,seq__42955__$1);
var G__42976 = c__28548__auto__;
var G__42977 = cljs.core.count.call(null,c__28548__auto__);
var G__42978 = (0);
seq__42955 = G__42975;
chunk__42956 = G__42976;
count__42957 = G__42977;
i__42958 = G__42978;
continue;
} else {
var i = cljs.core.first.call(null,seq__42955__$1);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),i,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time__$1], null));

var G__42979 = cljs.core.next.call(null,seq__42955__$1);
var G__42980 = null;
var G__42981 = (0);
var G__42982 = (0);
seq__42955 = G__42979;
chunk__42956 = G__42980;
count__42957 = G__42981;
i__42958 = G__42982;
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
cljs.looperscript.looperscript.queue_notes = (function cljs$looperscript$looperscript$queue_notes(){
cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.last_queue_time,cljs.looperscript.start_time.now.call(null));

var end_time = ((cljs.looperscript.start_time.now.call(null) + cljs.looperscript.looperscript.queue_time_extra) + cljs.looperscript.looperscript.queue_time_interval);
var seq__42983 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));
var chunk__42984 = null;
var count__42985 = (0);
var i__42986 = (0);
while(true){
if((i__42986 < count__42985)){
var n_n_fn = cljs.core._nth.call(null,chunk__42984,i__42986);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_42987 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_42987))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_42987);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_42987) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__42988 = seq__42983;
var G__42989 = chunk__42984;
var G__42990 = count__42985;
var G__42991 = (i__42986 + (1));
seq__42983 = G__42988;
chunk__42984 = G__42989;
count__42985 = G__42990;
i__42986 = G__42991;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42983);
if(temp__4657__auto__){
var seq__42983__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42983__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__42983__$1);
var G__42992 = cljs.core.chunk_rest.call(null,seq__42983__$1);
var G__42993 = c__28548__auto__;
var G__42994 = cljs.core.count.call(null,c__28548__auto__);
var G__42995 = (0);
seq__42983 = G__42992;
chunk__42984 = G__42993;
count__42985 = G__42994;
i__42986 = G__42995;
continue;
} else {
var n_n_fn = cljs.core.first.call(null,seq__42983__$1);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_42996 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_42996))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_42996);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_42996) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__42997 = cljs.core.next.call(null,seq__42983__$1);
var G__42998 = null;
var G__42999 = (0);
var G__43000 = (0);
seq__42983 = G__42997;
chunk__42984 = G__42998;
count__42985 = G__42999;
i__42986 = G__43000;
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
var G__43002 = arguments.length;
switch (G__43002) {
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
var new_nnfns = cljs.core.vec.call(null,(function (){var iter__28517__auto__ = (function cljs$looperscript$looperscript$iter__43003(s__43004){
return (new cljs.core.LazySeq(null,(function (){
var s__43004__$1 = s__43004;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43004__$1);
if(temp__4657__auto__){
var s__43004__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43004__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__43004__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__43006 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__43005 = (0);
while(true){
if((i__43005 < size__28516__auto__)){
var p = cljs.core._nth.call(null,c__28515__auto__,i__43005);
cljs.core.chunk_append.call(null,b__43006,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)));

var G__43012 = (i__43005 + (1));
i__43005 = G__43012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43006),cljs$looperscript$looperscript$iter__43003.call(null,cljs.core.chunk_rest.call(null,s__43004__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43006),null);
}
} else {
var p = cljs.core.first.call(null,s__43004__$2);
return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)),cljs$looperscript$looperscript$iter__43003.call(null,cljs.core.rest.call(null,s__43004__$2)));
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
var seq__43007_43013 = cljs.core.seq.call(null,new_nnfns);
var chunk__43008_43014 = null;
var count__43009_43015 = (0);
var i__43010_43016 = (0);
while(true){
if((i__43010_43016 < count__43009_43015)){
var nnfn_43017 = cljs.core._nth.call(null,chunk__43008_43014,i__43010_43016);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_43017.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_43017.call(null);

continue;
} else {
}
break;
}

var G__43018 = seq__43007_43013;
var G__43019 = chunk__43008_43014;
var G__43020 = count__43009_43015;
var G__43021 = (i__43010_43016 + (1));
seq__43007_43013 = G__43018;
chunk__43008_43014 = G__43019;
count__43009_43015 = G__43020;
i__43010_43016 = G__43021;
continue;
} else {
var temp__4657__auto___43022 = cljs.core.seq.call(null,seq__43007_43013);
if(temp__4657__auto___43022){
var seq__43007_43023__$1 = temp__4657__auto___43022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43007_43023__$1)){
var c__28548__auto___43024 = cljs.core.chunk_first.call(null,seq__43007_43023__$1);
var G__43025 = cljs.core.chunk_rest.call(null,seq__43007_43023__$1);
var G__43026 = c__28548__auto___43024;
var G__43027 = cljs.core.count.call(null,c__28548__auto___43024);
var G__43028 = (0);
seq__43007_43013 = G__43025;
chunk__43008_43014 = G__43026;
count__43009_43015 = G__43027;
i__43010_43016 = G__43028;
continue;
} else {
var nnfn_43029 = cljs.core.first.call(null,seq__43007_43023__$1);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_43029.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_43029.call(null);

continue;
} else {
}
break;
}

var G__43030 = cljs.core.next.call(null,seq__43007_43023__$1);
var G__43031 = null;
var G__43032 = (0);
var G__43033 = (0);
seq__43007_43013 = G__43030;
chunk__43008_43014 = G__43031;
count__43009_43015 = G__43032;
i__43010_43016 = G__43033;
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
var seq__43034_43038 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));
var chunk__43035_43039 = null;
var count__43036_43040 = (0);
var i__43037_43041 = (0);
while(true){
if((i__43037_43041 < count__43036_43040)){
var n_43042 = cljs.core._nth.call(null,chunk__43035_43039,i__43037_43041);
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_43042).stop();

var G__43043 = seq__43034_43038;
var G__43044 = chunk__43035_43039;
var G__43045 = count__43036_43040;
var G__43046 = (i__43037_43041 + (1));
seq__43034_43038 = G__43043;
chunk__43035_43039 = G__43044;
count__43036_43040 = G__43045;
i__43037_43041 = G__43046;
continue;
} else {
var temp__4657__auto___43047 = cljs.core.seq.call(null,seq__43034_43038);
if(temp__4657__auto___43047){
var seq__43034_43048__$1 = temp__4657__auto___43047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43034_43048__$1)){
var c__28548__auto___43049 = cljs.core.chunk_first.call(null,seq__43034_43048__$1);
var G__43050 = cljs.core.chunk_rest.call(null,seq__43034_43048__$1);
var G__43051 = c__28548__auto___43049;
var G__43052 = cljs.core.count.call(null,c__28548__auto___43049);
var G__43053 = (0);
seq__43034_43038 = G__43050;
chunk__43035_43039 = G__43051;
count__43036_43040 = G__43052;
i__43037_43041 = G__43053;
continue;
} else {
var n_43054 = cljs.core.first.call(null,seq__43034_43048__$1);
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_43054).stop();

var G__43055 = cljs.core.next.call(null,seq__43034_43048__$1);
var G__43056 = null;
var G__43057 = (0);
var G__43058 = (0);
seq__43034_43038 = G__43055;
chunk__43035_43039 = G__43056;
count__43036_43040 = G__43057;
i__43037_43041 = G__43058;
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
var seq__43059 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes));
var chunk__43060 = null;
var count__43061 = (0);
var i__43062 = (0);
while(true){
if((i__43062 < count__43061)){
var vec__43063 = cljs.core._nth.call(null,chunk__43060,i__43062);
var id = cljs.core.nth.call(null,vec__43063,(0),null);
var n = cljs.core.nth.call(null,vec__43063,(1),null);
if((cljs.looperscript.start_time.now.call(null) < new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n))){
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n).stop();

cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.dissoc,id);
} else {
}

var G__43069 = seq__43059;
var G__43070 = chunk__43060;
var G__43071 = count__43061;
var G__43072 = (i__43062 + (1));
seq__43059 = G__43069;
chunk__43060 = G__43070;
count__43061 = G__43071;
i__43062 = G__43072;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43059);
if(temp__4657__auto__){
var seq__43059__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43059__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__43059__$1);
var G__43073 = cljs.core.chunk_rest.call(null,seq__43059__$1);
var G__43074 = c__28548__auto__;
var G__43075 = cljs.core.count.call(null,c__28548__auto__);
var G__43076 = (0);
seq__43059 = G__43073;
chunk__43060 = G__43074;
count__43061 = G__43075;
i__43062 = G__43076;
continue;
} else {
var vec__43066 = cljs.core.first.call(null,seq__43059__$1);
var id = cljs.core.nth.call(null,vec__43066,(0),null);
var n = cljs.core.nth.call(null,vec__43066,(1),null);
if((cljs.looperscript.start_time.now.call(null) < new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n))){
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n).stop();

cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.dissoc,id);
} else {
}

var G__43077 = cljs.core.next.call(null,seq__43059__$1);
var G__43078 = null;
var G__43079 = (0);
var G__43080 = (0);
seq__43059 = G__43077;
chunk__43060 = G__43078;
count__43061 = G__43079;
i__43062 = G__43080;
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
return (editor["commands"]).addCommand((function (){var obj43082 = {"name":name,"bindKey":(function (){var obj43084 = {"win":windows_key,"mac":mac_key};
return obj43084;
})(),"exec":f};
return obj43082;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-Shift-u","Command-Enter",(function() { 
var G__43085__delegate = function (args){
return cljs.looperscript.looperscript.update_STAR_.call(null);
};
var G__43085 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43086__i = 0, G__43086__a = new Array(arguments.length -  0);
while (G__43086__i < G__43086__a.length) {G__43086__a[G__43086__i] = arguments[G__43086__i + 0]; ++G__43086__i;}
  args = new cljs.core.IndexedSeq(G__43086__a,0,null);
} 
return G__43085__delegate.call(this,args);};
G__43085.cljs$lang$maxFixedArity = 0;
G__43085.cljs$lang$applyTo = (function (arglist__43087){
var args = cljs.core.seq(arglist__43087);
return G__43085__delegate(args);
});
G__43085.cljs$core$IFn$_invoke$arity$variadic = G__43085__delegate;
return G__43085;
})()
);
cljs.looperscript.looperscript.bind_key.call(null,"link","Ctrl-Shift-l","Command-Shift-L",(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);

//# sourceMappingURL=looperscript.js.map?rel=1511651186284
