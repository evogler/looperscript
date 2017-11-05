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
var args__29112__auto__ = [];
var len__29105__auto___34414 = arguments.length;
var i__29106__auto___34415 = (0);
while(true){
if((i__29106__auto___34415 < len__29105__auto___34414)){
args__29112__auto__.push((arguments[i__29106__auto___34415]));

var G__34416 = (i__29106__auto___34415 + (1));
i__29106__auto___34415 = G__34416;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((1) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((1)),(0),null)):null);
return cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29113__auto__);
});

cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
var start_time = cljs.looperscript.start_time.now.call(null);
var res = f.call(null);
var run_time = (cljs.looperscript.start_time.now.call(null) - start_time);
cljs.looperscript.logging.log.call(null,run_time,args);

return res;
});

cljs.looperscript.looperscript.log_time.cljs$lang$maxFixedArity = (1);

cljs.looperscript.looperscript.log_time.cljs$lang$applyTo = (function (seq34412){
var G__34413 = cljs.core.first.call(null,seq34412);
var seq34412__$1 = cljs.core.next.call(null,seq34412);
return cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic(G__34413,seq34412__$1);
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
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,p__34417){
var vec__34418 = p__34417;
var k = cljs.core.nth.call(null,vec__34418,(0),null);
var v = cljs.core.nth.call(null,vec__34418,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,k))){
return cljs.core.assoc.call(null,m,cljs.core.first.call(null,k),v);
} else {
return cljs.core.reduce.call(null,cljs.core.into,m,(function (){var iter__28744__auto__ = ((function (vec__34418,k,v){
return (function cljs$looperscript$looperscript$separate_multi_aspects_$_iter__34421(s__34422){
return (new cljs.core.LazySeq(null,((function (vec__34418,k,v){
return (function (){
var s__34422__$1 = s__34422;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34422__$1);
if(temp__4657__auto__){
var s__34422__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34422__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__34422__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__34424 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__34423 = (0);
while(true){
if((i__34423 < size__28743__auto__)){
var i = cljs.core._nth.call(null,c__28742__auto__,i__34423);
cljs.core.chunk_append.call(null,b__34424,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]));

var G__34425 = (i__34423 + (1));
i__34423 = G__34425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34424),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__34421.call(null,cljs.core.chunk_rest.call(null,s__34422__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34424),null);
}
} else {
var i = cljs.core.first.call(null,s__34422__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__34421.call(null,cljs.core.rest.call(null,s__34422__$2)));
}
} else {
return null;
}
break;
}
});})(vec__34418,k,v))
,null,null));
});})(vec__34418,k,v))
;
return iter__28744__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,k)));
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,cljs.core.dissoc.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)));
});
cljs.looperscript.looperscript.make_iterators = (function cljs$looperscript$looperscript$make_iterators(part){
var part__$1 = cljs.looperscript.looperscript.separate_multi_aspects.call(null,part);
var part_keys = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,((function (part__$1){
return (function (p1__34426_SHARP_){
return cljs.core._EQ_.call(null,p1__34426_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(part__$1))
,cljs.core.keys.call(null,part__$1)));
var specified_aspects = cljs.core.set.call(null,part_keys);
var sub_aspects = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,part__$1)));
var non_specified_aspects = cljs.core.remove.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects){
return (function (p1__34427_SHARP_){
return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__34427_SHARP_);
});})(part__$1,part_keys,specified_aspects,sub_aspects))
,cljs.looperscript.looperscript.aspects);
return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__34428_SHARP_){
if(cljs.core.contains_QMARK_.call(null,sub_aspects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34428_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null))){
return cljs.looperscript.iterator.timed_iterator.call(null,cljs.core.get.call(null,part__$1,p1__34428_SHARP_),cljs.core.get.call(null,part__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34428_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)));
} else {
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part__$1,p1__34428_SHARP_));

}
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,non_specified_aspects,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__34429_SHARP_){
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__34429_SHARP_));
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.next_note_fn = (function cljs$looperscript$looperscript$next_note_fn(part,start_time){
var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);
var time_pos = cljs.core.atom.call(null,(start_time + (cljs.looperscript.looperscript.get_bpm.call(null) * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));
return ((function (iterators,time_pos){
return (function() {
var G__34440 = null;
var G__34440__0 = (function (){
while(true){
var adjusted_time_pos = (1.0E-7 + ((cljs.core.deref.call(null,time_pos) - start_time) / cljs.looperscript.looperscript.get_bpm.call(null)));
var res_v = (function (){var iter__28744__auto__ = ((function (adjusted_time_pos,iterators,time_pos){
return (function cljs$looperscript$looperscript$next_note_fn_$_iter__34430(s__34431){
return (new cljs.core.LazySeq(null,((function (adjusted_time_pos,iterators,time_pos){
return (function (){
var s__34431__$1 = s__34431;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34431__$1);
if(temp__4657__auto__){
var s__34431__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34431__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__34431__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__34433 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__34432 = (0);
while(true){
if((i__34432 < size__28743__auto__)){
var vec__34434 = cljs.core._nth.call(null,c__28742__auto__,i__34432);
var aspect = cljs.core.nth.call(null,vec__34434,(0),null);
var iter = cljs.core.nth.call(null,vec__34434,(1),null);
cljs.core.chunk_append.call(null,b__34433,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null));

var G__34441 = (i__34432 + (1));
i__34432 = G__34441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34433),cljs$looperscript$looperscript$next_note_fn_$_iter__34430.call(null,cljs.core.chunk_rest.call(null,s__34431__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34433),null);
}
} else {
var vec__34437 = cljs.core.first.call(null,s__34431__$2);
var aspect = cljs.core.nth.call(null,vec__34437,(0),null);
var iter = cljs.core.nth.call(null,vec__34437,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null),cljs$looperscript$looperscript$next_note_fn_$_iter__34430.call(null,cljs.core.rest.call(null,s__34431__$2)));
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
return iter__28744__auto__.call(null,iterators);
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
var G__34440__1 = (function (command){
if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))){
return cljs.core.deref.call(null,time_pos);
} else {
return null;
}
});
G__34440 = function(command){
switch(arguments.length){
case 0:
return G__34440__0.call(this);
case 1:
return G__34440__1.call(this,command);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__34440.cljs$core$IFn$_invoke$arity$0 = G__34440__0;
G__34440.cljs$core$IFn$_invoke$arity$1 = G__34440__1;
return G__34440;
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
var seq__34442 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));
var chunk__34443 = null;
var count__34444 = (0);
var i__34445 = (0);
while(true){
if((i__34445 < count__34444)){
var i = cljs.core._nth.call(null,chunk__34443,i__34445);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);

var G__34446 = seq__34442;
var G__34447 = chunk__34443;
var G__34448 = count__34444;
var G__34449 = (i__34445 + (1));
seq__34442 = G__34446;
chunk__34443 = G__34447;
count__34444 = G__34448;
i__34445 = G__34449;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34442);
if(temp__4657__auto__){
var seq__34442__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34442__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__34442__$1);
var G__34450 = cljs.core.chunk_rest.call(null,seq__34442__$1);
var G__34451 = c__28775__auto__;
var G__34452 = cljs.core.count.call(null,c__28775__auto__);
var G__34453 = (0);
seq__34442 = G__34450;
chunk__34443 = G__34451;
count__34444 = G__34452;
i__34445 = G__34453;
continue;
} else {
var i = cljs.core.first.call(null,seq__34442__$1);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);

var G__34454 = cljs.core.next.call(null,seq__34442__$1);
var G__34455 = null;
var G__34456 = (0);
var G__34457 = (0);
seq__34442 = G__34454;
chunk__34443 = G__34455;
count__34444 = G__34456;
i__34445 = G__34457;
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
var seq__34458 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));
var chunk__34459 = null;
var count__34460 = (0);
var i__34461 = (0);
while(true){
if((i__34461 < count__34460)){
var n_n_fn = cljs.core._nth.call(null,chunk__34459,i__34461);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_34462 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_34462))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_34462);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_34462) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__34463 = seq__34458;
var G__34464 = chunk__34459;
var G__34465 = count__34460;
var G__34466 = (i__34461 + (1));
seq__34458 = G__34463;
chunk__34459 = G__34464;
count__34460 = G__34465;
i__34461 = G__34466;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34458);
if(temp__4657__auto__){
var seq__34458__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34458__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__34458__$1);
var G__34467 = cljs.core.chunk_rest.call(null,seq__34458__$1);
var G__34468 = c__28775__auto__;
var G__34469 = cljs.core.count.call(null,c__28775__auto__);
var G__34470 = (0);
seq__34458 = G__34467;
chunk__34459 = G__34468;
count__34460 = G__34469;
i__34461 = G__34470;
continue;
} else {
var n_n_fn = cljs.core.first.call(null,seq__34458__$1);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_34471 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_34471))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_34471);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_34471) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__34472 = cljs.core.next.call(null,seq__34458__$1);
var G__34473 = null;
var G__34474 = (0);
var G__34475 = (0);
seq__34458 = G__34472;
chunk__34459 = G__34473;
count__34460 = G__34474;
i__34461 = G__34475;
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
var G__34477 = arguments.length;
switch (G__34477) {
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
var new_nnfns = cljs.core.vec.call(null,(function (){var iter__28744__auto__ = (function cljs$looperscript$looperscript$iter__34478(s__34479){
return (new cljs.core.LazySeq(null,(function (){
var s__34479__$1 = s__34479;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34479__$1);
if(temp__4657__auto__){
var s__34479__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34479__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__34479__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__34481 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__34480 = (0);
while(true){
if((i__34480 < size__28743__auto__)){
var p = cljs.core._nth.call(null,c__28742__auto__,i__34480);
cljs.core.chunk_append.call(null,b__34481,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)));

var G__34487 = (i__34480 + (1));
i__34480 = G__34487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34481),cljs$looperscript$looperscript$iter__34478.call(null,cljs.core.chunk_rest.call(null,s__34479__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34481),null);
}
} else {
var p = cljs.core.first.call(null,s__34479__$2);
return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)),cljs$looperscript$looperscript$iter__34478.call(null,cljs.core.rest.call(null,s__34479__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28744__auto__.call(null,cljs.core.vals.call(null,parts));
})());
var seq__34482_34488 = cljs.core.seq.call(null,new_nnfns);
var chunk__34483_34489 = null;
var count__34484_34490 = (0);
var i__34485_34491 = (0);
while(true){
if((i__34485_34491 < count__34484_34490)){
var nnfn_34492 = cljs.core._nth.call(null,chunk__34483_34489,i__34485_34491);
while(true){
if(cljs.core.truth_((function (){var and__27924__auto__ = cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time);
if(cljs.core.truth_(and__27924__auto__)){
var and__27924__auto____$1 = cljs.core.deref.call(null,cljs.looperscript.looperscript.playing);
if(cljs.core.truth_(and__27924__auto____$1)){
var and__27924__auto____$2 = true;
if(and__27924__auto____$2){
return (cljs.looperscript.start_time.now.call(null) - cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time));
} else {
return and__27924__auto____$2;
}
} else {
return and__27924__auto____$1;
}
} else {
return and__27924__auto__;
}
})())){
cljs.looperscript.looperscript.queue_notes.call(null);
} else {
}

if((cljs.looperscript.start_time.now.call(null) > nnfn_34492.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_34492.call(null);

continue;
} else {
}
break;
}

var G__34493 = seq__34482_34488;
var G__34494 = chunk__34483_34489;
var G__34495 = count__34484_34490;
var G__34496 = (i__34485_34491 + (1));
seq__34482_34488 = G__34493;
chunk__34483_34489 = G__34494;
count__34484_34490 = G__34495;
i__34485_34491 = G__34496;
continue;
} else {
var temp__4657__auto___34497 = cljs.core.seq.call(null,seq__34482_34488);
if(temp__4657__auto___34497){
var seq__34482_34498__$1 = temp__4657__auto___34497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34482_34498__$1)){
var c__28775__auto___34499 = cljs.core.chunk_first.call(null,seq__34482_34498__$1);
var G__34500 = cljs.core.chunk_rest.call(null,seq__34482_34498__$1);
var G__34501 = c__28775__auto___34499;
var G__34502 = cljs.core.count.call(null,c__28775__auto___34499);
var G__34503 = (0);
seq__34482_34488 = G__34500;
chunk__34483_34489 = G__34501;
count__34484_34490 = G__34502;
i__34485_34491 = G__34503;
continue;
} else {
var nnfn_34504 = cljs.core.first.call(null,seq__34482_34498__$1);
while(true){
if(cljs.core.truth_((function (){var and__27924__auto__ = cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time);
if(cljs.core.truth_(and__27924__auto__)){
var and__27924__auto____$1 = cljs.core.deref.call(null,cljs.looperscript.looperscript.playing);
if(cljs.core.truth_(and__27924__auto____$1)){
var and__27924__auto____$2 = true;
if(and__27924__auto____$2){
return (cljs.looperscript.start_time.now.call(null) - cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time));
} else {
return and__27924__auto____$2;
}
} else {
return and__27924__auto____$1;
}
} else {
return and__27924__auto__;
}
})())){
cljs.looperscript.looperscript.queue_notes.call(null);
} else {
}

if((cljs.looperscript.start_time.now.call(null) > nnfn_34504.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_34504.call(null);

continue;
} else {
}
break;
}

var G__34505 = cljs.core.next.call(null,seq__34482_34498__$1);
var G__34506 = null;
var G__34507 = (0);
var G__34508 = (0);
seq__34482_34488 = G__34505;
chunk__34483_34489 = G__34506;
count__34484_34490 = G__34507;
i__34485_34491 = G__34508;
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
var seq__34509_34513 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));
var chunk__34510_34514 = null;
var count__34511_34515 = (0);
var i__34512_34516 = (0);
while(true){
if((i__34512_34516 < count__34511_34515)){
var n_34517 = cljs.core._nth.call(null,chunk__34510_34514,i__34512_34516);
n_34517.stop();

var G__34518 = seq__34509_34513;
var G__34519 = chunk__34510_34514;
var G__34520 = count__34511_34515;
var G__34521 = (i__34512_34516 + (1));
seq__34509_34513 = G__34518;
chunk__34510_34514 = G__34519;
count__34511_34515 = G__34520;
i__34512_34516 = G__34521;
continue;
} else {
var temp__4657__auto___34522 = cljs.core.seq.call(null,seq__34509_34513);
if(temp__4657__auto___34522){
var seq__34509_34523__$1 = temp__4657__auto___34522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34509_34523__$1)){
var c__28775__auto___34524 = cljs.core.chunk_first.call(null,seq__34509_34523__$1);
var G__34525 = cljs.core.chunk_rest.call(null,seq__34509_34523__$1);
var G__34526 = c__28775__auto___34524;
var G__34527 = cljs.core.count.call(null,c__28775__auto___34524);
var G__34528 = (0);
seq__34509_34513 = G__34525;
chunk__34510_34514 = G__34526;
count__34511_34515 = G__34527;
i__34512_34516 = G__34528;
continue;
} else {
var n_34529 = cljs.core.first.call(null,seq__34509_34523__$1);
n_34529.stop();

var G__34530 = cljs.core.next.call(null,seq__34509_34523__$1);
var G__34531 = null;
var G__34532 = (0);
var G__34533 = (0);
seq__34509_34513 = G__34530;
chunk__34510_34514 = G__34531;
count__34511_34515 = G__34532;
i__34512_34516 = G__34533;
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
return (editor["commands"]).addCommand((function (){var obj34535 = {"name":name,"bindKey":(function (){var obj34537 = {"win":windows_key,"mac":mac_key};
return obj34537;
})(),"exec":f};
return obj34535;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-Shift-u","Command-Shift-U",(function() { 
var G__34538__delegate = function (args){
return cljs.looperscript.looperscript.update_STAR_.call(null);
};
var G__34538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34539__i = 0, G__34539__a = new Array(arguments.length -  0);
while (G__34539__i < G__34539__a.length) {G__34539__a[G__34539__i] = arguments[G__34539__i + 0]; ++G__34539__i;}
  args = new cljs.core.IndexedSeq(G__34539__a,0,null);
} 
return G__34538__delegate.call(this,args);};
G__34538.cljs$lang$maxFixedArity = 0;
G__34538.cljs$lang$applyTo = (function (arglist__34540){
var args = cljs.core.seq(arglist__34540);
return G__34538__delegate(args);
});
G__34538.cljs$core$IFn$_invoke$arity$variadic = G__34538__delegate;
return G__34538;
})()
);
cljs.looperscript.looperscript.bind_key.call(null,"link","Ctrl-Shift-l","Command-Shift-L",(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);

//# sourceMappingURL=looperscript.js.map?rel=1509660221479
