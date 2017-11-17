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
if(typeof cljs.looperscript.looperscript.queue_time_interval !== 'undefined'){
} else {
cljs.looperscript.looperscript.queue_time_interval = (1);
}
if(typeof cljs.looperscript.looperscript.queue_time_extra !== 'undefined'){
} else {
cljs.looperscript.looperscript.queue_time_extra = (2);
}
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
var args__8594__auto__ = [];
var len__8587__auto___15819 = arguments.length;
var i__8588__auto___15820 = (0);
while(true){
if((i__8588__auto___15820 < len__8587__auto___15819)){
args__8594__auto__.push((arguments[i__8588__auto___15820]));

var G__15821 = (i__8588__auto___15820 + (1));
i__8588__auto___15820 = G__15821;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((1) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((1)),(0),null)):null);
return cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8595__auto__);
});

cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
var start_time = cljs.looperscript.start_time.now.call(null);
var res = f.call(null);
var run_time = (cljs.looperscript.start_time.now.call(null) - start_time);
cljs.looperscript.logging.log.call(null,run_time,args);

return res;
});

cljs.looperscript.looperscript.log_time.cljs$lang$maxFixedArity = (1);

cljs.looperscript.looperscript.log_time.cljs$lang$applyTo = (function (seq15817){
var G__15818 = cljs.core.first.call(null,seq15817);
var seq15817__$1 = cljs.core.next.call(null,seq15817);
return cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic(G__15818,seq15817__$1);
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
return (function (n,node){
var id = cljs.core.swap_BANG_.call(null,sounding_counter,cljs.core.inc);
cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.assoc,id,node);

return (node["onended"] = ((function (id,sounding_counter){
return (function (){
return cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.dissoc,id);
});})(id,sounding_counter))
);
});
;})(sounding_counter))
})();
cljs.looperscript.looperscript.separate_multi_aspects = (function cljs$looperscript$looperscript$separate_multi_aspects(part){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,p__15822){
var vec__15823 = p__15822;
var k = cljs.core.nth.call(null,vec__15823,(0),null);
var v = cljs.core.nth.call(null,vec__15823,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,k))){
return cljs.core.assoc.call(null,m,cljs.core.first.call(null,k),v);
} else {
return cljs.core.reduce.call(null,cljs.core.into,m,(function (){var iter__8226__auto__ = ((function (vec__15823,k,v){
return (function cljs$looperscript$looperscript$separate_multi_aspects_$_iter__15826(s__15827){
return (new cljs.core.LazySeq(null,((function (vec__15823,k,v){
return (function (){
var s__15827__$1 = s__15827;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15827__$1);
if(temp__4657__auto__){
var s__15827__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15827__$2)){
var c__8224__auto__ = cljs.core.chunk_first.call(null,s__15827__$2);
var size__8225__auto__ = cljs.core.count.call(null,c__8224__auto__);
var b__15829 = cljs.core.chunk_buffer.call(null,size__8225__auto__);
if((function (){var i__15828 = (0);
while(true){
if((i__15828 < size__8225__auto__)){
var i = cljs.core._nth.call(null,c__8224__auto__,i__15828);
cljs.core.chunk_append.call(null,b__15829,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]));

var G__15830 = (i__15828 + (1));
i__15828 = G__15830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15829),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__15826.call(null,cljs.core.chunk_rest.call(null,s__15827__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15829),null);
}
} else {
var i = cljs.core.first.call(null,s__15827__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__15826.call(null,cljs.core.rest.call(null,s__15827__$2)));
}
} else {
return null;
}
break;
}
});})(vec__15823,k,v))
,null,null));
});})(vec__15823,k,v))
;
return iter__8226__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,k)));
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,cljs.core.dissoc.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)));
});
cljs.looperscript.looperscript.make_iterators = (function cljs$looperscript$looperscript$make_iterators(part){
var part__$1 = cljs.looperscript.looperscript.separate_multi_aspects.call(null,part);
var part_keys = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,((function (part__$1){
return (function (p1__15831_SHARP_){
return cljs.core._EQ_.call(null,p1__15831_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(part__$1))
,cljs.core.keys.call(null,part__$1)));
var specified_aspects = cljs.core.set.call(null,part_keys);
var sub_aspects = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,part__$1)));
var non_specified_aspects = cljs.core.remove.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects){
return (function (p1__15832_SHARP_){
return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__15832_SHARP_);
});})(part__$1,part_keys,specified_aspects,sub_aspects))
,cljs.looperscript.looperscript.aspects);
return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__15833_SHARP_){
if(cljs.core.contains_QMARK_.call(null,sub_aspects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15833_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null))){
return cljs.looperscript.iterator.timed_iterator.call(null,cljs.core.get.call(null,part__$1,p1__15833_SHARP_),cljs.core.get.call(null,part__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15833_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)));
} else {
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part__$1,p1__15833_SHARP_));

}
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,non_specified_aspects,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__15834_SHARP_){
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__15834_SHARP_));
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.next_note_fn = (function cljs$looperscript$looperscript$next_note_fn(part,start_time){
var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);
var time_pos = cljs.core.atom.call(null,(start_time + (cljs.looperscript.looperscript.get_bpm.call(null) * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));
return ((function (iterators,time_pos){
return (function() {
var G__15845 = null;
var G__15845__0 = (function (){
while(true){
var adjusted_time_pos = (1.0E-7 + ((cljs.core.deref.call(null,time_pos) - start_time) / cljs.looperscript.looperscript.get_bpm.call(null)));
var res_v = (function (){var iter__8226__auto__ = ((function (adjusted_time_pos,iterators,time_pos){
return (function cljs$looperscript$looperscript$next_note_fn_$_iter__15835(s__15836){
return (new cljs.core.LazySeq(null,((function (adjusted_time_pos,iterators,time_pos){
return (function (){
var s__15836__$1 = s__15836;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15836__$1);
if(temp__4657__auto__){
var s__15836__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15836__$2)){
var c__8224__auto__ = cljs.core.chunk_first.call(null,s__15836__$2);
var size__8225__auto__ = cljs.core.count.call(null,c__8224__auto__);
var b__15838 = cljs.core.chunk_buffer.call(null,size__8225__auto__);
if((function (){var i__15837 = (0);
while(true){
if((i__15837 < size__8225__auto__)){
var vec__15839 = cljs.core._nth.call(null,c__8224__auto__,i__15837);
var aspect = cljs.core.nth.call(null,vec__15839,(0),null);
var iter = cljs.core.nth.call(null,vec__15839,(1),null);
cljs.core.chunk_append.call(null,b__15838,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null));

var G__15846 = (i__15837 + (1));
i__15837 = G__15846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15838),cljs$looperscript$looperscript$next_note_fn_$_iter__15835.call(null,cljs.core.chunk_rest.call(null,s__15836__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15838),null);
}
} else {
var vec__15842 = cljs.core.first.call(null,s__15836__$2);
var aspect = cljs.core.nth.call(null,vec__15842,(0),null);
var iter = cljs.core.nth.call(null,vec__15842,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null),cljs$looperscript$looperscript$next_note_fn_$_iter__15835.call(null,cljs.core.rest.call(null,s__15836__$2)));
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
return iter__8226__auto__.call(null,iterators);
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
var G__15845__1 = (function (command){
if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))){
return cljs.core.deref.call(null,time_pos);
} else {
return null;
}
});
G__15845 = function(command){
switch(arguments.length){
case 0:
return G__15845__0.call(this);
case 1:
return G__15845__1.call(this,command);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__15845.cljs$core$IFn$_invoke$arity$0 = G__15845__0;
G__15845.cljs$core$IFn$_invoke$arity$1 = G__15845__1;
return G__15845;
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
var seq__15847 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));
var chunk__15848 = null;
var count__15849 = (0);
var i__15850 = (0);
while(true){
if((i__15850 < count__15849)){
var i = cljs.core._nth.call(null,chunk__15848,i__15850);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);

var G__15851 = seq__15847;
var G__15852 = chunk__15848;
var G__15853 = count__15849;
var G__15854 = (i__15850 + (1));
seq__15847 = G__15851;
chunk__15848 = G__15852;
count__15849 = G__15853;
i__15850 = G__15854;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15847);
if(temp__4657__auto__){
var seq__15847__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15847__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__15847__$1);
var G__15855 = cljs.core.chunk_rest.call(null,seq__15847__$1);
var G__15856 = c__8257__auto__;
var G__15857 = cljs.core.count.call(null,c__8257__auto__);
var G__15858 = (0);
seq__15847 = G__15855;
chunk__15848 = G__15856;
count__15849 = G__15857;
i__15850 = G__15858;
continue;
} else {
var i = cljs.core.first.call(null,seq__15847__$1);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);

var G__15859 = cljs.core.next.call(null,seq__15847__$1);
var G__15860 = null;
var G__15861 = (0);
var G__15862 = (0);
seq__15847 = G__15859;
chunk__15848 = G__15860;
count__15849 = G__15861;
i__15850 = G__15862;
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
var seq__15863 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));
var chunk__15864 = null;
var count__15865 = (0);
var i__15866 = (0);
while(true){
if((i__15866 < count__15865)){
var n_n_fn = cljs.core._nth.call(null,chunk__15864,i__15866);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_15867 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_15867))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_15867);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_15867) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__15868 = seq__15863;
var G__15869 = chunk__15864;
var G__15870 = count__15865;
var G__15871 = (i__15866 + (1));
seq__15863 = G__15868;
chunk__15864 = G__15869;
count__15865 = G__15870;
i__15866 = G__15871;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15863);
if(temp__4657__auto__){
var seq__15863__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15863__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__15863__$1);
var G__15872 = cljs.core.chunk_rest.call(null,seq__15863__$1);
var G__15873 = c__8257__auto__;
var G__15874 = cljs.core.count.call(null,c__8257__auto__);
var G__15875 = (0);
seq__15863 = G__15872;
chunk__15864 = G__15873;
count__15865 = G__15874;
i__15866 = G__15875;
continue;
} else {
var n_n_fn = cljs.core.first.call(null,seq__15863__$1);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_15876 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_15876))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_15876);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_15876) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__15877 = cljs.core.next.call(null,seq__15863__$1);
var G__15878 = null;
var G__15879 = (0);
var G__15880 = (0);
seq__15863 = G__15877;
chunk__15864 = G__15878;
count__15865 = G__15879;
i__15866 = G__15880;
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
var G__15882 = arguments.length;
switch (G__15882) {
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
var new_nnfns = cljs.core.vec.call(null,(function (){var iter__8226__auto__ = (function cljs$looperscript$looperscript$iter__15883(s__15884){
return (new cljs.core.LazySeq(null,(function (){
var s__15884__$1 = s__15884;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15884__$1);
if(temp__4657__auto__){
var s__15884__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15884__$2)){
var c__8224__auto__ = cljs.core.chunk_first.call(null,s__15884__$2);
var size__8225__auto__ = cljs.core.count.call(null,c__8224__auto__);
var b__15886 = cljs.core.chunk_buffer.call(null,size__8225__auto__);
if((function (){var i__15885 = (0);
while(true){
if((i__15885 < size__8225__auto__)){
var p = cljs.core._nth.call(null,c__8224__auto__,i__15885);
cljs.core.chunk_append.call(null,b__15886,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)));

var G__15892 = (i__15885 + (1));
i__15885 = G__15892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15886),cljs$looperscript$looperscript$iter__15883.call(null,cljs.core.chunk_rest.call(null,s__15884__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15886),null);
}
} else {
var p = cljs.core.first.call(null,s__15884__$2);
return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)),cljs$looperscript$looperscript$iter__15883.call(null,cljs.core.rest.call(null,s__15884__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8226__auto__.call(null,cljs.core.vals.call(null,parts));
})());
var seq__15887_15893 = cljs.core.seq.call(null,new_nnfns);
var chunk__15888_15894 = null;
var count__15889_15895 = (0);
var i__15890_15896 = (0);
while(true){
if((i__15890_15896 < count__15889_15895)){
var nnfn_15897 = cljs.core._nth.call(null,chunk__15888_15894,i__15890_15896);
while(true){
if(cljs.core.truth_((function (){var and__7406__auto__ = cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time);
if(cljs.core.truth_(and__7406__auto__)){
var and__7406__auto____$1 = cljs.core.deref.call(null,cljs.looperscript.looperscript.playing);
if(cljs.core.truth_(and__7406__auto____$1)){
var and__7406__auto____$2 = true;
if(and__7406__auto____$2){
return (cljs.looperscript.start_time.now.call(null) - cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time));
} else {
return and__7406__auto____$2;
}
} else {
return and__7406__auto____$1;
}
} else {
return and__7406__auto__;
}
})())){
cljs.looperscript.looperscript.queue_notes.call(null);
} else {
}

if((cljs.looperscript.start_time.now.call(null) > nnfn_15897.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_15897.call(null);

continue;
} else {
}
break;
}

var G__15898 = seq__15887_15893;
var G__15899 = chunk__15888_15894;
var G__15900 = count__15889_15895;
var G__15901 = (i__15890_15896 + (1));
seq__15887_15893 = G__15898;
chunk__15888_15894 = G__15899;
count__15889_15895 = G__15900;
i__15890_15896 = G__15901;
continue;
} else {
var temp__4657__auto___15902 = cljs.core.seq.call(null,seq__15887_15893);
if(temp__4657__auto___15902){
var seq__15887_15903__$1 = temp__4657__auto___15902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15887_15903__$1)){
var c__8257__auto___15904 = cljs.core.chunk_first.call(null,seq__15887_15903__$1);
var G__15905 = cljs.core.chunk_rest.call(null,seq__15887_15903__$1);
var G__15906 = c__8257__auto___15904;
var G__15907 = cljs.core.count.call(null,c__8257__auto___15904);
var G__15908 = (0);
seq__15887_15893 = G__15905;
chunk__15888_15894 = G__15906;
count__15889_15895 = G__15907;
i__15890_15896 = G__15908;
continue;
} else {
var nnfn_15909 = cljs.core.first.call(null,seq__15887_15903__$1);
while(true){
if(cljs.core.truth_((function (){var and__7406__auto__ = cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time);
if(cljs.core.truth_(and__7406__auto__)){
var and__7406__auto____$1 = cljs.core.deref.call(null,cljs.looperscript.looperscript.playing);
if(cljs.core.truth_(and__7406__auto____$1)){
var and__7406__auto____$2 = true;
if(and__7406__auto____$2){
return (cljs.looperscript.start_time.now.call(null) - cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time));
} else {
return and__7406__auto____$2;
}
} else {
return and__7406__auto____$1;
}
} else {
return and__7406__auto__;
}
})())){
cljs.looperscript.looperscript.queue_notes.call(null);
} else {
}

if((cljs.looperscript.start_time.now.call(null) > nnfn_15909.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_15909.call(null);

continue;
} else {
}
break;
}

var G__15910 = cljs.core.next.call(null,seq__15887_15903__$1);
var G__15911 = null;
var G__15912 = (0);
var G__15913 = (0);
seq__15887_15893 = G__15910;
chunk__15888_15894 = G__15911;
count__15889_15895 = G__15912;
i__15890_15896 = G__15913;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.current_next_note_fns,new_nnfns);
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
cljs.looperscript.start_time.reset_clock_BANG_.call(null,(cljs.looperscript.start_time.now.call(null) + 2.5));
} else {
}

cljs.looperscript.looperscript.update_STAR_.call(null,parts);

cljs.looperscript.looperscript.queue_notes.call(null);

cljs.looperscript.looperscript.kill_playing_interval.call(null);

cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing_interval,setInterval(cljs.looperscript.looperscript.queue_notes,(cljs.looperscript.looperscript.queue_time_interval * (1000))));

return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing,true);
});
cljs.looperscript.looperscript.kill_sounds = (function cljs$looperscript$looperscript$kill_sounds(){
var seq__15914_15918 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));
var chunk__15915_15919 = null;
var count__15916_15920 = (0);
var i__15917_15921 = (0);
while(true){
if((i__15917_15921 < count__15916_15920)){
var n_15922 = cljs.core._nth.call(null,chunk__15915_15919,i__15917_15921);
n_15922.stop();

var G__15923 = seq__15914_15918;
var G__15924 = chunk__15915_15919;
var G__15925 = count__15916_15920;
var G__15926 = (i__15917_15921 + (1));
seq__15914_15918 = G__15923;
chunk__15915_15919 = G__15924;
count__15916_15920 = G__15925;
i__15917_15921 = G__15926;
continue;
} else {
var temp__4657__auto___15927 = cljs.core.seq.call(null,seq__15914_15918);
if(temp__4657__auto___15927){
var seq__15914_15928__$1 = temp__4657__auto___15927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15914_15928__$1)){
var c__8257__auto___15929 = cljs.core.chunk_first.call(null,seq__15914_15928__$1);
var G__15930 = cljs.core.chunk_rest.call(null,seq__15914_15928__$1);
var G__15931 = c__8257__auto___15929;
var G__15932 = cljs.core.count.call(null,c__8257__auto___15929);
var G__15933 = (0);
seq__15914_15918 = G__15930;
chunk__15915_15919 = G__15931;
count__15916_15920 = G__15932;
i__15917_15921 = G__15933;
continue;
} else {
var n_15934 = cljs.core.first.call(null,seq__15914_15928__$1);
n_15934.stop();

var G__15935 = cljs.core.next.call(null,seq__15914_15928__$1);
var G__15936 = null;
var G__15937 = (0);
var G__15938 = (0);
seq__15914_15918 = G__15935;
chunk__15915_15919 = G__15936;
count__15916_15920 = G__15937;
i__15917_15921 = G__15938;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.PersistentArrayMap.EMPTY);
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
return (editor["commands"]).addCommand((function (){var obj15940 = {"name":name,"bindKey":(function (){var obj15942 = {"win":windows_key,"mac":mac_key};
return obj15942;
})(),"exec":f};
return obj15940;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-Shift-u","Command-Shift-U",(function() { 
var G__15943__delegate = function (args){
return cljs.looperscript.looperscript.update_STAR_.call(null);
};
var G__15943 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15944__i = 0, G__15944__a = new Array(arguments.length -  0);
while (G__15944__i < G__15944__a.length) {G__15944__a[G__15944__i] = arguments[G__15944__i + 0]; ++G__15944__i;}
  args = new cljs.core.IndexedSeq(G__15944__a,0,null);
} 
return G__15943__delegate.call(this,args);};
G__15943.cljs$lang$maxFixedArity = 0;
G__15943.cljs$lang$applyTo = (function (arglist__15945){
var args = cljs.core.seq(arglist__15945);
return G__15943__delegate(args);
});
G__15943.cljs$core$IFn$_invoke$arity$variadic = G__15943__delegate;
return G__15943;
})()
);
cljs.looperscript.looperscript.bind_key.call(null,"link","Ctrl-Shift-l","Command-Shift-L",(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);

//# sourceMappingURL=looperscript.js.map
