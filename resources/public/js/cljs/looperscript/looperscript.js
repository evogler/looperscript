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
cljs.looperscript.looperscript.ctx = cljs.looperscript.audio.ctx;
cljs.looperscript.looperscript.playing = cljs.core.atom.call(null,false);
cljs.looperscript.looperscript.playing_interval = cljs.core.atom.call(null,null);
cljs.looperscript.looperscript.current_next_note_fns = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.looperscript.looperscript.queue_time_interval = (1);
cljs.looperscript.looperscript.queue_time_extra = (2);
cljs.looperscript.looperscript.last_queue_time = cljs.core.atom.call(null,null);
cljs.looperscript.looperscript.params = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.looperscript.sounding_notes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.looperscript.last_transformed_tree = cljs.core.atom.call(null,null);
cljs.looperscript.looperscript.aspects = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)], null);
cljs.looperscript.looperscript.aspect_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drum-code","drum-code",2081814302),"r"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sawtooth"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2500)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)]);
cljs.looperscript.looperscript.log_time = (function cljs$looperscript$looperscript$log_time(var_args){
var args__29112__auto__ = [];
var len__29105__auto___32465 = arguments.length;
var i__29106__auto___32466 = (0);
while(true){
if((i__29106__auto___32466 < len__29105__auto___32465)){
args__29112__auto__.push((arguments[i__29106__auto___32466]));

var G__32467 = (i__29106__auto___32466 + (1));
i__29106__auto___32466 = G__32467;
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

cljs.looperscript.looperscript.log_time.cljs$lang$applyTo = (function (seq32463){
var G__32464 = cljs.core.first.call(null,seq32463);
var seq32463__$1 = cljs.core.next.call(null,seq32463);
return cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic(G__32464,seq32463__$1);
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
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,p__32468){
var vec__32469 = p__32468;
var k = cljs.core.nth.call(null,vec__32469,(0),null);
var v = cljs.core.nth.call(null,vec__32469,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,k))){
return cljs.core.assoc.call(null,m,cljs.core.first.call(null,k),v);
} else {
return cljs.core.reduce.call(null,cljs.core.into,m,(function (){var iter__28744__auto__ = ((function (vec__32469,k,v){
return (function cljs$looperscript$looperscript$separate_multi_aspects_$_iter__32472(s__32473){
return (new cljs.core.LazySeq(null,((function (vec__32469,k,v){
return (function (){
var s__32473__$1 = s__32473;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32473__$1);
if(temp__4657__auto__){
var s__32473__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32473__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__32473__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__32475 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__32474 = (0);
while(true){
if((i__32474 < size__28743__auto__)){
var i = cljs.core._nth.call(null,c__28742__auto__,i__32474);
cljs.core.chunk_append.call(null,b__32475,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]));

var G__32476 = (i__32474 + (1));
i__32474 = G__32476;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32475),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__32472.call(null,cljs.core.chunk_rest.call(null,s__32473__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32475),null);
}
} else {
var i = cljs.core.first.call(null,s__32473__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__32472.call(null,cljs.core.rest.call(null,s__32473__$2)));
}
} else {
return null;
}
break;
}
});})(vec__32469,k,v))
,null,null));
});})(vec__32469,k,v))
;
return iter__28744__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,k)));
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,cljs.core.dissoc.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)));
});
cljs.looperscript.looperscript.make_iterators = (function cljs$looperscript$looperscript$make_iterators(part){
var part__$1 = cljs.looperscript.looperscript.separate_multi_aspects.call(null,part);
var part_keys = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,((function (part__$1){
return (function (p1__32477_SHARP_){
return cljs.core._EQ_.call(null,p1__32477_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(part__$1))
,cljs.core.keys.call(null,part__$1)));
var specified_aspects = cljs.core.set.call(null,part_keys);
var sub_aspects = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,part__$1)));
var non_specified_aspects = cljs.core.remove.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects){
return (function (p1__32478_SHARP_){
return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__32478_SHARP_);
});})(part__$1,part_keys,specified_aspects,sub_aspects))
,cljs.looperscript.looperscript.aspects);
return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__32479_SHARP_){
if(cljs.core.contains_QMARK_.call(null,sub_aspects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32479_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null))){
return cljs.looperscript.iterator.timed_iterator.call(null,cljs.core.get.call(null,part__$1,p1__32479_SHARP_),cljs.core.get.call(null,part__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32479_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)));
} else {
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part__$1,p1__32479_SHARP_));

}
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,non_specified_aspects,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__32480_SHARP_){
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__32480_SHARP_));
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.next_note_fn = (function cljs$looperscript$looperscript$next_note_fn(part,start_time){
var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);
var time_pos = cljs.core.atom.call(null,(start_time + (cljs.looperscript.looperscript.get_bpm.call(null) * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));
return ((function (iterators,time_pos){
return (function() {
var G__32491 = null;
var G__32491__0 = (function (){
while(true){
var adjusted_time_pos = (1.0E-7 + ((cljs.core.deref.call(null,time_pos) - start_time) / cljs.looperscript.looperscript.get_bpm.call(null)));
var res_v = (function (){var iter__28744__auto__ = ((function (adjusted_time_pos,iterators,time_pos){
return (function cljs$looperscript$looperscript$next_note_fn_$_iter__32481(s__32482){
return (new cljs.core.LazySeq(null,((function (adjusted_time_pos,iterators,time_pos){
return (function (){
var s__32482__$1 = s__32482;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32482__$1);
if(temp__4657__auto__){
var s__32482__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32482__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__32482__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__32484 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__32483 = (0);
while(true){
if((i__32483 < size__28743__auto__)){
var vec__32485 = cljs.core._nth.call(null,c__28742__auto__,i__32483);
var aspect = cljs.core.nth.call(null,vec__32485,(0),null);
var iter = cljs.core.nth.call(null,vec__32485,(1),null);
cljs.core.chunk_append.call(null,b__32484,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null));

var G__32492 = (i__32483 + (1));
i__32483 = G__32492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32484),cljs$looperscript$looperscript$next_note_fn_$_iter__32481.call(null,cljs.core.chunk_rest.call(null,s__32482__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32484),null);
}
} else {
var vec__32488 = cljs.core.first.call(null,s__32482__$2);
var aspect = cljs.core.nth.call(null,vec__32488,(0),null);
var iter = cljs.core.nth.call(null,vec__32488,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null),cljs$looperscript$looperscript$next_note_fn_$_iter__32481.call(null,cljs.core.rest.call(null,s__32482__$2)));
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
var G__32491__1 = (function (command){
if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))){
return cljs.core.deref.call(null,time_pos);
} else {
return null;
}
});
G__32491 = function(command){
switch(arguments.length){
case 0:
return G__32491__0.call(this);
case 1:
return G__32491__1.call(this,command);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32491.cljs$core$IFn$_invoke$arity$0 = G__32491__0;
G__32491.cljs$core$IFn$_invoke$arity$1 = G__32491__1;
return G__32491;
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
var seq__32493 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));
var chunk__32494 = null;
var count__32495 = (0);
var i__32496 = (0);
while(true){
if((i__32496 < count__32495)){
var i = cljs.core._nth.call(null,chunk__32494,i__32496);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);

var G__32497 = seq__32493;
var G__32498 = chunk__32494;
var G__32499 = count__32495;
var G__32500 = (i__32496 + (1));
seq__32493 = G__32497;
chunk__32494 = G__32498;
count__32495 = G__32499;
i__32496 = G__32500;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32493);
if(temp__4657__auto__){
var seq__32493__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32493__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__32493__$1);
var G__32501 = cljs.core.chunk_rest.call(null,seq__32493__$1);
var G__32502 = c__28775__auto__;
var G__32503 = cljs.core.count.call(null,c__28775__auto__);
var G__32504 = (0);
seq__32493 = G__32501;
chunk__32494 = G__32502;
count__32495 = G__32503;
i__32496 = G__32504;
continue;
} else {
var i = cljs.core.first.call(null,seq__32493__$1);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);

var G__32505 = cljs.core.next.call(null,seq__32493__$1);
var G__32506 = null;
var G__32507 = (0);
var G__32508 = (0);
seq__32493 = G__32505;
chunk__32494 = G__32506;
count__32495 = G__32507;
i__32496 = G__32508;
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
var seq__32509 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));
var chunk__32510 = null;
var count__32511 = (0);
var i__32512 = (0);
while(true){
if((i__32512 < count__32511)){
var n_n_fn = cljs.core._nth.call(null,chunk__32510,i__32512);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_32513 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_32513))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_32513);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_32513) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__32514 = seq__32509;
var G__32515 = chunk__32510;
var G__32516 = count__32511;
var G__32517 = (i__32512 + (1));
seq__32509 = G__32514;
chunk__32510 = G__32515;
count__32511 = G__32516;
i__32512 = G__32517;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32509);
if(temp__4657__auto__){
var seq__32509__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32509__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__32509__$1);
var G__32518 = cljs.core.chunk_rest.call(null,seq__32509__$1);
var G__32519 = c__28775__auto__;
var G__32520 = cljs.core.count.call(null,c__28775__auto__);
var G__32521 = (0);
seq__32509 = G__32518;
chunk__32510 = G__32519;
count__32511 = G__32520;
i__32512 = G__32521;
continue;
} else {
var n_n_fn = cljs.core.first.call(null,seq__32509__$1);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_32522 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_32522))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_32522);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_32522) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__32523 = cljs.core.next.call(null,seq__32509__$1);
var G__32524 = null;
var G__32525 = (0);
var G__32526 = (0);
seq__32509 = G__32523;
chunk__32510 = G__32524;
count__32511 = G__32525;
i__32512 = G__32526;
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
var G__32528 = arguments.length;
switch (G__32528) {
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
var new_nnfns = cljs.core.vec.call(null,(function (){var iter__28744__auto__ = (function cljs$looperscript$looperscript$iter__32529(s__32530){
return (new cljs.core.LazySeq(null,(function (){
var s__32530__$1 = s__32530;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32530__$1);
if(temp__4657__auto__){
var s__32530__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32530__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__32530__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__32532 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__32531 = (0);
while(true){
if((i__32531 < size__28743__auto__)){
var p = cljs.core._nth.call(null,c__28742__auto__,i__32531);
cljs.core.chunk_append.call(null,b__32532,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)));

var G__32538 = (i__32531 + (1));
i__32531 = G__32538;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32532),cljs$looperscript$looperscript$iter__32529.call(null,cljs.core.chunk_rest.call(null,s__32530__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32532),null);
}
} else {
var p = cljs.core.first.call(null,s__32530__$2);
return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)),cljs$looperscript$looperscript$iter__32529.call(null,cljs.core.rest.call(null,s__32530__$2)));
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
var seq__32533_32539 = cljs.core.seq.call(null,new_nnfns);
var chunk__32534_32540 = null;
var count__32535_32541 = (0);
var i__32536_32542 = (0);
while(true){
if((i__32536_32542 < count__32535_32541)){
var nnfn_32543 = cljs.core._nth.call(null,chunk__32534_32540,i__32536_32542);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_32543.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_32543.call(null);

continue;
} else {
}
break;
}

var G__32544 = seq__32533_32539;
var G__32545 = chunk__32534_32540;
var G__32546 = count__32535_32541;
var G__32547 = (i__32536_32542 + (1));
seq__32533_32539 = G__32544;
chunk__32534_32540 = G__32545;
count__32535_32541 = G__32546;
i__32536_32542 = G__32547;
continue;
} else {
var temp__4657__auto___32548 = cljs.core.seq.call(null,seq__32533_32539);
if(temp__4657__auto___32548){
var seq__32533_32549__$1 = temp__4657__auto___32548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32533_32549__$1)){
var c__28775__auto___32550 = cljs.core.chunk_first.call(null,seq__32533_32549__$1);
var G__32551 = cljs.core.chunk_rest.call(null,seq__32533_32549__$1);
var G__32552 = c__28775__auto___32550;
var G__32553 = cljs.core.count.call(null,c__28775__auto___32550);
var G__32554 = (0);
seq__32533_32539 = G__32551;
chunk__32534_32540 = G__32552;
count__32535_32541 = G__32553;
i__32536_32542 = G__32554;
continue;
} else {
var nnfn_32555 = cljs.core.first.call(null,seq__32533_32549__$1);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_32555.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_32555.call(null);

continue;
} else {
}
break;
}

var G__32556 = cljs.core.next.call(null,seq__32533_32549__$1);
var G__32557 = null;
var G__32558 = (0);
var G__32559 = (0);
seq__32533_32539 = G__32556;
chunk__32534_32540 = G__32557;
count__32535_32541 = G__32558;
i__32536_32542 = G__32559;
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
var seq__32560_32564 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));
var chunk__32561_32565 = null;
var count__32562_32566 = (0);
var i__32563_32567 = (0);
while(true){
if((i__32563_32567 < count__32562_32566)){
var n_32568 = cljs.core._nth.call(null,chunk__32561_32565,i__32563_32567);
n_32568.stop();

var G__32569 = seq__32560_32564;
var G__32570 = chunk__32561_32565;
var G__32571 = count__32562_32566;
var G__32572 = (i__32563_32567 + (1));
seq__32560_32564 = G__32569;
chunk__32561_32565 = G__32570;
count__32562_32566 = G__32571;
i__32563_32567 = G__32572;
continue;
} else {
var temp__4657__auto___32573 = cljs.core.seq.call(null,seq__32560_32564);
if(temp__4657__auto___32573){
var seq__32560_32574__$1 = temp__4657__auto___32573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32560_32574__$1)){
var c__28775__auto___32575 = cljs.core.chunk_first.call(null,seq__32560_32574__$1);
var G__32576 = cljs.core.chunk_rest.call(null,seq__32560_32574__$1);
var G__32577 = c__28775__auto___32575;
var G__32578 = cljs.core.count.call(null,c__28775__auto___32575);
var G__32579 = (0);
seq__32560_32564 = G__32576;
chunk__32561_32565 = G__32577;
count__32562_32566 = G__32578;
i__32563_32567 = G__32579;
continue;
} else {
var n_32580 = cljs.core.first.call(null,seq__32560_32574__$1);
n_32580.stop();

var G__32581 = cljs.core.next.call(null,seq__32560_32574__$1);
var G__32582 = null;
var G__32583 = (0);
var G__32584 = (0);
seq__32560_32564 = G__32581;
chunk__32561_32565 = G__32582;
count__32562_32566 = G__32583;
i__32563_32567 = G__32584;
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
return (editor["commands"]).addCommand((function (){var obj32586 = {"name":name,"bindKey":(function (){var obj32588 = {"win":windows_key,"mac":mac_key};
return obj32588;
})(),"exec":f};
return obj32586;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-Shift-u","Command-Shift-U",(function() { 
var G__32589__delegate = function (args){
return cljs.looperscript.looperscript.update_STAR_.call(null);
};
var G__32589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32590__i = 0, G__32590__a = new Array(arguments.length -  0);
while (G__32590__i < G__32590__a.length) {G__32590__a[G__32590__i] = arguments[G__32590__i + 0]; ++G__32590__i;}
  args = new cljs.core.IndexedSeq(G__32590__a,0,null);
} 
return G__32589__delegate.call(this,args);};
G__32589.cljs$lang$maxFixedArity = 0;
G__32589.cljs$lang$applyTo = (function (arglist__32591){
var args = cljs.core.seq(arglist__32591);
return G__32589__delegate(args);
});
G__32589.cljs$core$IFn$_invoke$arity$variadic = G__32589__delegate;
return G__32589;
})()
);
cljs.looperscript.looperscript.bind_key.call(null,"link","Ctrl-Shift-l","Command-Shift-L",(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);

//# sourceMappingURL=looperscript.js.map?rel=1509596249572
