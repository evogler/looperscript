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
var len__29105__auto___32426 = arguments.length;
var i__29106__auto___32427 = (0);
while(true){
if((i__29106__auto___32427 < len__29105__auto___32426)){
args__29112__auto__.push((arguments[i__29106__auto___32427]));

var G__32428 = (i__29106__auto___32427 + (1));
i__29106__auto___32427 = G__32428;
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

cljs.looperscript.looperscript.log_time.cljs$lang$applyTo = (function (seq32424){
var G__32425 = cljs.core.first.call(null,seq32424);
var seq32424__$1 = cljs.core.next.call(null,seq32424);
return cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic(G__32425,seq32424__$1);
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
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,p__32429){
var vec__32430 = p__32429;
var k = cljs.core.nth.call(null,vec__32430,(0),null);
var v = cljs.core.nth.call(null,vec__32430,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,k))){
return cljs.core.assoc.call(null,m,cljs.core.first.call(null,k),v);
} else {
return cljs.core.reduce.call(null,cljs.core.into,m,(function (){var iter__28744__auto__ = ((function (vec__32430,k,v){
return (function cljs$looperscript$looperscript$separate_multi_aspects_$_iter__32433(s__32434){
return (new cljs.core.LazySeq(null,((function (vec__32430,k,v){
return (function (){
var s__32434__$1 = s__32434;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32434__$1);
if(temp__4657__auto__){
var s__32434__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32434__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__32434__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__32436 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__32435 = (0);
while(true){
if((i__32435 < size__28743__auto__)){
var i = cljs.core._nth.call(null,c__28742__auto__,i__32435);
cljs.core.chunk_append.call(null,b__32436,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]));

var G__32437 = (i__32435 + (1));
i__32435 = G__32437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32436),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__32433.call(null,cljs.core.chunk_rest.call(null,s__32434__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32436),null);
}
} else {
var i = cljs.core.first.call(null,s__32434__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__32433.call(null,cljs.core.rest.call(null,s__32434__$2)));
}
} else {
return null;
}
break;
}
});})(vec__32430,k,v))
,null,null));
});})(vec__32430,k,v))
;
return iter__28744__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,k)));
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,cljs.core.dissoc.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)));
});
cljs.looperscript.looperscript.make_iterators = (function cljs$looperscript$looperscript$make_iterators(part){
var part__$1 = cljs.looperscript.looperscript.separate_multi_aspects.call(null,part);
var part_keys = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,((function (part__$1){
return (function (p1__32438_SHARP_){
return cljs.core._EQ_.call(null,p1__32438_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(part__$1))
,cljs.core.keys.call(null,part__$1)));
var specified_aspects = cljs.core.set.call(null,part_keys);
var sub_aspects = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,part__$1)));
var non_specified_aspects = cljs.core.remove.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects){
return (function (p1__32439_SHARP_){
return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__32439_SHARP_);
});})(part__$1,part_keys,specified_aspects,sub_aspects))
,cljs.looperscript.looperscript.aspects);
return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__32440_SHARP_){
if(cljs.core.contains_QMARK_.call(null,sub_aspects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32440_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null))){
return cljs.looperscript.iterator.timed_iterator.call(null,cljs.core.get.call(null,part__$1,p1__32440_SHARP_),cljs.core.get.call(null,part__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32440_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)));
} else {
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part__$1,p1__32440_SHARP_));

}
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,non_specified_aspects,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__32441_SHARP_){
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__32441_SHARP_));
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.next_note_fn = (function cljs$looperscript$looperscript$next_note_fn(part,start_time){
var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);
var time_pos = cljs.core.atom.call(null,(start_time + (cljs.looperscript.looperscript.get_bpm.call(null) * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));
return ((function (iterators,time_pos){
return (function() {
var G__32452 = null;
var G__32452__0 = (function (){
while(true){
var adjusted_time_pos = (1.0E-7 + ((cljs.core.deref.call(null,time_pos) - start_time) / cljs.looperscript.looperscript.get_bpm.call(null)));
var res_v = (function (){var iter__28744__auto__ = ((function (adjusted_time_pos,iterators,time_pos){
return (function cljs$looperscript$looperscript$next_note_fn_$_iter__32442(s__32443){
return (new cljs.core.LazySeq(null,((function (adjusted_time_pos,iterators,time_pos){
return (function (){
var s__32443__$1 = s__32443;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32443__$1);
if(temp__4657__auto__){
var s__32443__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32443__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__32443__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__32445 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__32444 = (0);
while(true){
if((i__32444 < size__28743__auto__)){
var vec__32446 = cljs.core._nth.call(null,c__28742__auto__,i__32444);
var aspect = cljs.core.nth.call(null,vec__32446,(0),null);
var iter = cljs.core.nth.call(null,vec__32446,(1),null);
cljs.core.chunk_append.call(null,b__32445,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null));

var G__32453 = (i__32444 + (1));
i__32444 = G__32453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32445),cljs$looperscript$looperscript$next_note_fn_$_iter__32442.call(null,cljs.core.chunk_rest.call(null,s__32443__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32445),null);
}
} else {
var vec__32449 = cljs.core.first.call(null,s__32443__$2);
var aspect = cljs.core.nth.call(null,vec__32449,(0),null);
var iter = cljs.core.nth.call(null,vec__32449,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null),cljs$looperscript$looperscript$next_note_fn_$_iter__32442.call(null,cljs.core.rest.call(null,s__32443__$2)));
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
var G__32452__1 = (function (command){
if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))){
return cljs.core.deref.call(null,time_pos);
} else {
return null;
}
});
G__32452 = function(command){
switch(arguments.length){
case 0:
return G__32452__0.call(this);
case 1:
return G__32452__1.call(this,command);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32452.cljs$core$IFn$_invoke$arity$0 = G__32452__0;
G__32452.cljs$core$IFn$_invoke$arity$1 = G__32452__1;
return G__32452;
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
var seq__32454 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));
var chunk__32455 = null;
var count__32456 = (0);
var i__32457 = (0);
while(true){
if((i__32457 < count__32456)){
var i = cljs.core._nth.call(null,chunk__32455,i__32457);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);

var G__32458 = seq__32454;
var G__32459 = chunk__32455;
var G__32460 = count__32456;
var G__32461 = (i__32457 + (1));
seq__32454 = G__32458;
chunk__32455 = G__32459;
count__32456 = G__32460;
i__32457 = G__32461;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32454);
if(temp__4657__auto__){
var seq__32454__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32454__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__32454__$1);
var G__32462 = cljs.core.chunk_rest.call(null,seq__32454__$1);
var G__32463 = c__28775__auto__;
var G__32464 = cljs.core.count.call(null,c__28775__auto__);
var G__32465 = (0);
seq__32454 = G__32462;
chunk__32455 = G__32463;
count__32456 = G__32464;
i__32457 = G__32465;
continue;
} else {
var i = cljs.core.first.call(null,seq__32454__$1);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);

var G__32466 = cljs.core.next.call(null,seq__32454__$1);
var G__32467 = null;
var G__32468 = (0);
var G__32469 = (0);
seq__32454 = G__32466;
chunk__32455 = G__32467;
count__32456 = G__32468;
i__32457 = G__32469;
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
var seq__32470 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));
var chunk__32471 = null;
var count__32472 = (0);
var i__32473 = (0);
while(true){
if((i__32473 < count__32472)){
var n_n_fn = cljs.core._nth.call(null,chunk__32471,i__32473);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_32474 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_32474))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_32474);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_32474) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__32475 = seq__32470;
var G__32476 = chunk__32471;
var G__32477 = count__32472;
var G__32478 = (i__32473 + (1));
seq__32470 = G__32475;
chunk__32471 = G__32476;
count__32472 = G__32477;
i__32473 = G__32478;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32470);
if(temp__4657__auto__){
var seq__32470__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32470__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__32470__$1);
var G__32479 = cljs.core.chunk_rest.call(null,seq__32470__$1);
var G__32480 = c__28775__auto__;
var G__32481 = cljs.core.count.call(null,c__28775__auto__);
var G__32482 = (0);
seq__32470 = G__32479;
chunk__32471 = G__32480;
count__32472 = G__32481;
i__32473 = G__32482;
continue;
} else {
var n_n_fn = cljs.core.first.call(null,seq__32470__$1);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_32483 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_32483))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_32483);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_32483) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__32484 = cljs.core.next.call(null,seq__32470__$1);
var G__32485 = null;
var G__32486 = (0);
var G__32487 = (0);
seq__32470 = G__32484;
chunk__32471 = G__32485;
count__32472 = G__32486;
i__32473 = G__32487;
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
var G__32489 = arguments.length;
switch (G__32489) {
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
var new_nnfns = cljs.core.vec.call(null,(function (){var iter__28744__auto__ = (function cljs$looperscript$looperscript$iter__32490(s__32491){
return (new cljs.core.LazySeq(null,(function (){
var s__32491__$1 = s__32491;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32491__$1);
if(temp__4657__auto__){
var s__32491__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32491__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__32491__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__32493 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__32492 = (0);
while(true){
if((i__32492 < size__28743__auto__)){
var p = cljs.core._nth.call(null,c__28742__auto__,i__32492);
cljs.core.chunk_append.call(null,b__32493,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)));

var G__32499 = (i__32492 + (1));
i__32492 = G__32499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32493),cljs$looperscript$looperscript$iter__32490.call(null,cljs.core.chunk_rest.call(null,s__32491__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32493),null);
}
} else {
var p = cljs.core.first.call(null,s__32491__$2);
return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)),cljs$looperscript$looperscript$iter__32490.call(null,cljs.core.rest.call(null,s__32491__$2)));
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
var seq__32494_32500 = cljs.core.seq.call(null,new_nnfns);
var chunk__32495_32501 = null;
var count__32496_32502 = (0);
var i__32497_32503 = (0);
while(true){
if((i__32497_32503 < count__32496_32502)){
var nnfn_32504 = cljs.core._nth.call(null,chunk__32495_32501,i__32497_32503);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_32504.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_32504.call(null);

continue;
} else {
}
break;
}

var G__32505 = seq__32494_32500;
var G__32506 = chunk__32495_32501;
var G__32507 = count__32496_32502;
var G__32508 = (i__32497_32503 + (1));
seq__32494_32500 = G__32505;
chunk__32495_32501 = G__32506;
count__32496_32502 = G__32507;
i__32497_32503 = G__32508;
continue;
} else {
var temp__4657__auto___32509 = cljs.core.seq.call(null,seq__32494_32500);
if(temp__4657__auto___32509){
var seq__32494_32510__$1 = temp__4657__auto___32509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32494_32510__$1)){
var c__28775__auto___32511 = cljs.core.chunk_first.call(null,seq__32494_32510__$1);
var G__32512 = cljs.core.chunk_rest.call(null,seq__32494_32510__$1);
var G__32513 = c__28775__auto___32511;
var G__32514 = cljs.core.count.call(null,c__28775__auto___32511);
var G__32515 = (0);
seq__32494_32500 = G__32512;
chunk__32495_32501 = G__32513;
count__32496_32502 = G__32514;
i__32497_32503 = G__32515;
continue;
} else {
var nnfn_32516 = cljs.core.first.call(null,seq__32494_32510__$1);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_32516.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_32516.call(null);

continue;
} else {
}
break;
}

var G__32517 = cljs.core.next.call(null,seq__32494_32510__$1);
var G__32518 = null;
var G__32519 = (0);
var G__32520 = (0);
seq__32494_32500 = G__32517;
chunk__32495_32501 = G__32518;
count__32496_32502 = G__32519;
i__32497_32503 = G__32520;
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
var seq__32521_32525 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));
var chunk__32522_32526 = null;
var count__32523_32527 = (0);
var i__32524_32528 = (0);
while(true){
if((i__32524_32528 < count__32523_32527)){
var n_32529 = cljs.core._nth.call(null,chunk__32522_32526,i__32524_32528);
n_32529.stop();

var G__32530 = seq__32521_32525;
var G__32531 = chunk__32522_32526;
var G__32532 = count__32523_32527;
var G__32533 = (i__32524_32528 + (1));
seq__32521_32525 = G__32530;
chunk__32522_32526 = G__32531;
count__32523_32527 = G__32532;
i__32524_32528 = G__32533;
continue;
} else {
var temp__4657__auto___32534 = cljs.core.seq.call(null,seq__32521_32525);
if(temp__4657__auto___32534){
var seq__32521_32535__$1 = temp__4657__auto___32534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32521_32535__$1)){
var c__28775__auto___32536 = cljs.core.chunk_first.call(null,seq__32521_32535__$1);
var G__32537 = cljs.core.chunk_rest.call(null,seq__32521_32535__$1);
var G__32538 = c__28775__auto___32536;
var G__32539 = cljs.core.count.call(null,c__28775__auto___32536);
var G__32540 = (0);
seq__32521_32525 = G__32537;
chunk__32522_32526 = G__32538;
count__32523_32527 = G__32539;
i__32524_32528 = G__32540;
continue;
} else {
var n_32541 = cljs.core.first.call(null,seq__32521_32535__$1);
n_32541.stop();

var G__32542 = cljs.core.next.call(null,seq__32521_32535__$1);
var G__32543 = null;
var G__32544 = (0);
var G__32545 = (0);
seq__32521_32525 = G__32542;
chunk__32522_32526 = G__32543;
count__32523_32527 = G__32544;
i__32524_32528 = G__32545;
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
return (editor["commands"]).addCommand((function (){var obj32547 = {"name":name,"bindKey":(function (){var obj32549 = {"win":windows_key,"mac":mac_key};
return obj32549;
})(),"exec":f};
return obj32547;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-Shift-u","Command-Shift-U",(function() { 
var G__32550__delegate = function (args){
return cljs.looperscript.looperscript.update_STAR_.call(null);
};
var G__32550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32551__i = 0, G__32551__a = new Array(arguments.length -  0);
while (G__32551__i < G__32551__a.length) {G__32551__a[G__32551__i] = arguments[G__32551__i + 0]; ++G__32551__i;}
  args = new cljs.core.IndexedSeq(G__32551__a,0,null);
} 
return G__32550__delegate.call(this,args);};
G__32550.cljs$lang$maxFixedArity = 0;
G__32550.cljs$lang$applyTo = (function (arglist__32552){
var args = cljs.core.seq(arglist__32552);
return G__32550__delegate(args);
});
G__32550.cljs$core$IFn$_invoke$arity$variadic = G__32550__delegate;
return G__32550;
})()
);
cljs.looperscript.looperscript.bind_key.call(null,"link","Ctrl-Shift-l","Command-Shift-L",(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);

//# sourceMappingURL=looperscript.js.map?rel=1509845006414
