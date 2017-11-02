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
cljs.looperscript.looperscript.aspects = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)], null);
cljs.looperscript.looperscript.aspect_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drum-code","drum-code",2081814302),"r"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sawtooth"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2500)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)]);
cljs.looperscript.looperscript.log_time = (function cljs$looperscript$looperscript$log_time(var_args){
var args__29165__auto__ = [];
var len__29158__auto___31268 = arguments.length;
var i__29159__auto___31269 = (0);
while(true){
if((i__29159__auto___31269 < len__29158__auto___31268)){
args__29165__auto__.push((arguments[i__29159__auto___31269]));

var G__31270 = (i__29159__auto___31269 + (1));
i__29159__auto___31269 = G__31270;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((1) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((1)),(0),null)):null);
return cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29166__auto__);
});

cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
var start_time = cljs.looperscript.start_time.now.call(null);
var res = f.call(null);
var run_time = (cljs.looperscript.start_time.now.call(null) - start_time);
cljs.looperscript.logging.log.call(null,run_time,args);

return res;
});

cljs.looperscript.looperscript.log_time.cljs$lang$maxFixedArity = (1);

cljs.looperscript.looperscript.log_time.cljs$lang$applyTo = (function (seq31266){
var G__31267 = cljs.core.first.call(null,seq31266);
var seq31266__$1 = cljs.core.next.call(null,seq31266);
return cljs.looperscript.looperscript.log_time.cljs$core$IFn$_invoke$arity$variadic(G__31267,seq31266__$1);
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
var _ = cljs.looperscript.logging.log.call(null,new cljs.core.Keyword(null,"tree","tree",-196312028),parse_tree,"\n");
var parse_time = (cljs.looperscript.start_time.now.call(null) - start_time);
var transformed_tree = cljs.looperscript.interpret.looper_transform.call(null,parse_tree);
var ___$1 = cljs.looperscript.logging.log.call(null,new cljs.core.Keyword(null,"transformed","transformed",1969289512),transformed_tree,"\n");
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
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,p__31271){
var vec__31272 = p__31271;
var k = cljs.core.nth.call(null,vec__31272,(0),null);
var v = cljs.core.nth.call(null,vec__31272,(1),null);
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,k))){
return cljs.core.assoc.call(null,m,cljs.core.first.call(null,k),v);
} else {
return cljs.core.reduce.call(null,cljs.core.into,m,(function (){var iter__28797__auto__ = ((function (vec__31272,k,v){
return (function cljs$looperscript$looperscript$separate_multi_aspects_$_iter__31275(s__31276){
return (new cljs.core.LazySeq(null,((function (vec__31272,k,v){
return (function (){
var s__31276__$1 = s__31276;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31276__$1);
if(temp__4657__auto__){
var s__31276__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31276__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__31276__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__31278 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__31277 = (0);
while(true){
if((i__31277 < size__28796__auto__)){
var i = cljs.core._nth.call(null,c__28795__auto__,i__31277);
cljs.core.chunk_append.call(null,b__31278,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]));

var G__31279 = (i__31277 + (1));
i__31277 = G__31279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31278),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__31275.call(null,cljs.core.chunk_rest.call(null,s__31276__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31278),null);
}
} else {
var i = cljs.core.first.call(null,s__31276__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))]),cljs$looperscript$looperscript$separate_multi_aspects_$_iter__31275.call(null,cljs.core.rest.call(null,s__31276__$2)));
}
} else {
return null;
}
break;
}
});})(vec__31272,k,v))
,null,null));
});})(vec__31272,k,v))
;
return iter__28797__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,k)));
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,cljs.core.dissoc.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)));
});
cljs.looperscript.looperscript.make_iterators = (function cljs$looperscript$looperscript$make_iterators(part){
var part__$1 = cljs.looperscript.looperscript.separate_multi_aspects.call(null,part);
var part_keys = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,((function (part__$1){
return (function (p1__31280_SHARP_){
return cljs.core._EQ_.call(null,p1__31280_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(part__$1))
,cljs.core.keys.call(null,part__$1)));
var specified_aspects = cljs.core.set.call(null,part_keys);
var sub_aspects = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,part__$1)));
var non_specified_aspects = cljs.core.remove.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects){
return (function (p1__31281_SHARP_){
return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__31281_SHARP_);
});})(part__$1,part_keys,specified_aspects,sub_aspects))
,cljs.looperscript.looperscript.aspects);
return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__31282_SHARP_){
if(cljs.core.contains_QMARK_.call(null,sub_aspects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31282_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null))){
return cljs.looperscript.iterator.timed_iterator.call(null,cljs.core.get.call(null,part__$1,p1__31282_SHARP_),cljs.core.get.call(null,part__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31282_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)));
} else {
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part__$1,p1__31282_SHARP_));

}
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,non_specified_aspects,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__31283_SHARP_){
return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__31283_SHARP_));
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.next_note_fn = (function cljs$looperscript$looperscript$next_note_fn(part,start_time){
var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);
var time_pos = cljs.core.atom.call(null,(start_time + (cljs.looperscript.looperscript.get_bpm.call(null) * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));
return ((function (iterators,time_pos){
return (function() {
var G__31294 = null;
var G__31294__0 = (function (){
while(true){
var adjusted_time_pos = (1.0E-7 + ((cljs.core.deref.call(null,time_pos) - start_time) / cljs.looperscript.looperscript.get_bpm.call(null)));
var res_v = (function (){var iter__28797__auto__ = ((function (adjusted_time_pos,iterators,time_pos){
return (function cljs$looperscript$looperscript$next_note_fn_$_iter__31284(s__31285){
return (new cljs.core.LazySeq(null,((function (adjusted_time_pos,iterators,time_pos){
return (function (){
var s__31285__$1 = s__31285;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31285__$1);
if(temp__4657__auto__){
var s__31285__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31285__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__31285__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__31287 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__31286 = (0);
while(true){
if((i__31286 < size__28796__auto__)){
var vec__31288 = cljs.core._nth.call(null,c__28795__auto__,i__31286);
var aspect = cljs.core.nth.call(null,vec__31288,(0),null);
var iter = cljs.core.nth.call(null,vec__31288,(1),null);
cljs.core.chunk_append.call(null,b__31287,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null));

var G__31295 = (i__31286 + (1));
i__31286 = G__31295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31287),cljs$looperscript$looperscript$next_note_fn_$_iter__31284.call(null,cljs.core.chunk_rest.call(null,s__31285__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31287),null);
}
} else {
var vec__31291 = cljs.core.first.call(null,s__31285__$2);
var aspect = cljs.core.nth.call(null,vec__31291,(0),null);
var iter = cljs.core.nth.call(null,vec__31291,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null),cljs$looperscript$looperscript$next_note_fn_$_iter__31284.call(null,cljs.core.rest.call(null,s__31285__$2)));
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
return iter__28797__auto__.call(null,iterators);
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
var G__31294__1 = (function (command){
if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))){
return cljs.core.deref.call(null,time_pos);
} else {
return null;
}
});
G__31294 = function(command){
switch(arguments.length){
case 0:
return G__31294__0.call(this);
case 1:
return G__31294__1.call(this,command);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__31294.cljs$core$IFn$_invoke$arity$0 = G__31294__0;
G__31294.cljs$core$IFn$_invoke$arity$1 = G__31294__1;
return G__31294;
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
var seq__31296 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));
var chunk__31297 = null;
var count__31298 = (0);
var i__31299 = (0);
while(true){
if((i__31299 < count__31298)){
var i = cljs.core._nth.call(null,chunk__31297,i__31299);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);

var G__31300 = seq__31296;
var G__31301 = chunk__31297;
var G__31302 = count__31298;
var G__31303 = (i__31299 + (1));
seq__31296 = G__31300;
chunk__31297 = G__31301;
count__31298 = G__31302;
i__31299 = G__31303;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31296);
if(temp__4657__auto__){
var seq__31296__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31296__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__31296__$1);
var G__31304 = cljs.core.chunk_rest.call(null,seq__31296__$1);
var G__31305 = c__28828__auto__;
var G__31306 = cljs.core.count.call(null,c__28828__auto__);
var G__31307 = (0);
seq__31296 = G__31304;
chunk__31297 = G__31305;
count__31298 = G__31306;
i__31299 = G__31307;
continue;
} else {
var i = cljs.core.first.call(null,seq__31296__$1);
cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);

var G__31308 = cljs.core.next.call(null,seq__31296__$1);
var G__31309 = null;
var G__31310 = (0);
var G__31311 = (0);
seq__31296 = G__31308;
chunk__31297 = G__31309;
count__31298 = G__31310;
i__31299 = G__31311;
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
var seq__31312 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));
var chunk__31313 = null;
var count__31314 = (0);
var i__31315 = (0);
while(true){
if((i__31315 < count__31314)){
var n_n_fn = cljs.core._nth.call(null,chunk__31313,i__31315);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_31316 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_31316))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_31316);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_31316) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__31317 = seq__31312;
var G__31318 = chunk__31313;
var G__31319 = count__31314;
var G__31320 = (i__31315 + (1));
seq__31312 = G__31317;
chunk__31313 = G__31318;
count__31314 = G__31319;
i__31315 = G__31320;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31312);
if(temp__4657__auto__){
var seq__31312__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31312__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__31312__$1);
var G__31321 = cljs.core.chunk_rest.call(null,seq__31312__$1);
var G__31322 = c__28828__auto__;
var G__31323 = cljs.core.count.call(null,c__28828__auto__);
var G__31324 = (0);
seq__31312 = G__31321;
chunk__31313 = G__31322;
count__31314 = G__31323;
i__31315 = G__31324;
continue;
} else {
var n_n_fn = cljs.core.first.call(null,seq__31312__$1);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_31325 = n_n_fn.call(null);
if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_31325))){
cljs.looperscript.looperscript.schedule_note.call(null,next_note_31325);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_31325) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__31326 = cljs.core.next.call(null,seq__31312__$1);
var G__31327 = null;
var G__31328 = (0);
var G__31329 = (0);
seq__31312 = G__31326;
chunk__31313 = G__31327;
count__31314 = G__31328;
i__31315 = G__31329;
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
cljs.looperscript.looperscript.update = (function cljs$looperscript$looperscript$update(var_args){
var G__31331 = arguments.length;
switch (G__31331) {
case 0:
return cljs.looperscript.looperscript.update.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.looperscript.looperscript.update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.looperscript.looperscript.update.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.looperscript.looperscript.update.call(null,cljs.looperscript.looperscript.get_parts.call(null));
});

cljs.looperscript.looperscript.update.cljs$core$IFn$_invoke$arity$1 = (function (parts){
if(cljs.core.truth_(instaparse.core.failure_QMARK_.call(null,parts))){
return cljs.looperscript.logging.log.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,parts))].join(''));
} else {
var new_nnfns = cljs.core.vec.call(null,(function (){var iter__28797__auto__ = (function cljs$looperscript$looperscript$iter__31332(s__31333){
return (new cljs.core.LazySeq(null,(function (){
var s__31333__$1 = s__31333;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31333__$1);
if(temp__4657__auto__){
var s__31333__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31333__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__31333__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__31335 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__31334 = (0);
while(true){
if((i__31334 < size__28796__auto__)){
var p = cljs.core._nth.call(null,c__28795__auto__,i__31334);
cljs.core.chunk_append.call(null,b__31335,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)));

var G__31341 = (i__31334 + (1));
i__31334 = G__31341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31335),cljs$looperscript$looperscript$iter__31332.call(null,cljs.core.chunk_rest.call(null,s__31333__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31335),null);
}
} else {
var p = cljs.core.first.call(null,s__31333__$2);
return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)),cljs$looperscript$looperscript$iter__31332.call(null,cljs.core.rest.call(null,s__31333__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28797__auto__.call(null,cljs.core.vals.call(null,parts));
})());
var seq__31336_31342 = cljs.core.seq.call(null,new_nnfns);
var chunk__31337_31343 = null;
var count__31338_31344 = (0);
var i__31339_31345 = (0);
while(true){
if((i__31339_31345 < count__31338_31344)){
var nnfn_31346 = cljs.core._nth.call(null,chunk__31337_31343,i__31339_31345);
while(true){
if(cljs.core.truth_((function (){var and__27977__auto__ = cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time);
if(cljs.core.truth_(and__27977__auto__)){
var and__27977__auto____$1 = cljs.core.deref.call(null,cljs.looperscript.looperscript.playing);
if(cljs.core.truth_(and__27977__auto____$1)){
var and__27977__auto____$2 = true;
if(and__27977__auto____$2){
return (cljs.looperscript.start_time.now.call(null) - cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time));
} else {
return and__27977__auto____$2;
}
} else {
return and__27977__auto____$1;
}
} else {
return and__27977__auto__;
}
})())){
cljs.looperscript.looperscript.queue_notes.call(null);
} else {
}

if((cljs.looperscript.start_time.now.call(null) > nnfn_31346.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_31346.call(null);

continue;
} else {
}
break;
}

var G__31347 = seq__31336_31342;
var G__31348 = chunk__31337_31343;
var G__31349 = count__31338_31344;
var G__31350 = (i__31339_31345 + (1));
seq__31336_31342 = G__31347;
chunk__31337_31343 = G__31348;
count__31338_31344 = G__31349;
i__31339_31345 = G__31350;
continue;
} else {
var temp__4657__auto___31351 = cljs.core.seq.call(null,seq__31336_31342);
if(temp__4657__auto___31351){
var seq__31336_31352__$1 = temp__4657__auto___31351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31336_31352__$1)){
var c__28828__auto___31353 = cljs.core.chunk_first.call(null,seq__31336_31352__$1);
var G__31354 = cljs.core.chunk_rest.call(null,seq__31336_31352__$1);
var G__31355 = c__28828__auto___31353;
var G__31356 = cljs.core.count.call(null,c__28828__auto___31353);
var G__31357 = (0);
seq__31336_31342 = G__31354;
chunk__31337_31343 = G__31355;
count__31338_31344 = G__31356;
i__31339_31345 = G__31357;
continue;
} else {
var nnfn_31358 = cljs.core.first.call(null,seq__31336_31352__$1);
while(true){
if(cljs.core.truth_((function (){var and__27977__auto__ = cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time);
if(cljs.core.truth_(and__27977__auto__)){
var and__27977__auto____$1 = cljs.core.deref.call(null,cljs.looperscript.looperscript.playing);
if(cljs.core.truth_(and__27977__auto____$1)){
var and__27977__auto____$2 = true;
if(and__27977__auto____$2){
return (cljs.looperscript.start_time.now.call(null) - cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time));
} else {
return and__27977__auto____$2;
}
} else {
return and__27977__auto____$1;
}
} else {
return and__27977__auto__;
}
})())){
cljs.looperscript.looperscript.queue_notes.call(null);
} else {
}

if((cljs.looperscript.start_time.now.call(null) > nnfn_31358.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_31358.call(null);

continue;
} else {
}
break;
}

var G__31359 = cljs.core.next.call(null,seq__31336_31352__$1);
var G__31360 = null;
var G__31361 = (0);
var G__31362 = (0);
seq__31336_31342 = G__31359;
chunk__31337_31343 = G__31360;
count__31338_31344 = G__31361;
i__31339_31345 = G__31362;
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

cljs.looperscript.looperscript.update.cljs$lang$maxFixedArity = 1;

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

cljs.looperscript.looperscript.update.call(null,parts);

cljs.looperscript.looperscript.queue_notes.call(null);

cljs.looperscript.looperscript.kill_playing_interval.call(null);

cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing_interval,setInterval(cljs.looperscript.looperscript.queue_notes,(cljs.looperscript.looperscript.queue_time_interval * (1000))));

return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing,true);
});
cljs.looperscript.looperscript.kill_sounds = (function cljs$looperscript$looperscript$kill_sounds(){
var seq__31363_31367 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));
var chunk__31364_31368 = null;
var count__31365_31369 = (0);
var i__31366_31370 = (0);
while(true){
if((i__31366_31370 < count__31365_31369)){
var n_31371 = cljs.core._nth.call(null,chunk__31364_31368,i__31366_31370);
n_31371.stop();

var G__31372 = seq__31363_31367;
var G__31373 = chunk__31364_31368;
var G__31374 = count__31365_31369;
var G__31375 = (i__31366_31370 + (1));
seq__31363_31367 = G__31372;
chunk__31364_31368 = G__31373;
count__31365_31369 = G__31374;
i__31366_31370 = G__31375;
continue;
} else {
var temp__4657__auto___31376 = cljs.core.seq.call(null,seq__31363_31367);
if(temp__4657__auto___31376){
var seq__31363_31377__$1 = temp__4657__auto___31376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31363_31377__$1)){
var c__28828__auto___31378 = cljs.core.chunk_first.call(null,seq__31363_31377__$1);
var G__31379 = cljs.core.chunk_rest.call(null,seq__31363_31377__$1);
var G__31380 = c__28828__auto___31378;
var G__31381 = cljs.core.count.call(null,c__28828__auto___31378);
var G__31382 = (0);
seq__31363_31367 = G__31379;
chunk__31364_31368 = G__31380;
count__31365_31369 = G__31381;
i__31366_31370 = G__31382;
continue;
} else {
var n_31383 = cljs.core.first.call(null,seq__31363_31377__$1);
n_31383.stop();

var G__31384 = cljs.core.next.call(null,seq__31363_31377__$1);
var G__31385 = null;
var G__31386 = (0);
var G__31387 = (0);
seq__31363_31367 = G__31384;
chunk__31364_31368 = G__31385;
count__31365_31369 = G__31386;
i__31366_31370 = G__31387;
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
return cljs.looperscript.looperscript.update.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"stop"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
return cljs.looperscript.looperscript.reset_button.call(null);
}));
cljs.looperscript.looperscript.bind_key = (function cljs$looperscript$looperscript$bind_key(name,windows_key,mac_key,f){
return (editor["commands"]).addCommand((function (){var obj31389 = {"name":name,"bindKey":(function (){var obj31391 = {"win":windows_key,"mac":mac_key};
return obj31391;
})(),"exec":f};
return obj31389;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-Shift-u","Command-Shift-U",(function() { 
var G__31392__delegate = function (args){
return cljs.looperscript.looperscript.update.call(null);
};
var G__31392 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31393__i = 0, G__31393__a = new Array(arguments.length -  0);
while (G__31393__i < G__31393__a.length) {G__31393__a[G__31393__i] = arguments[G__31393__i + 0]; ++G__31393__i;}
  args = new cljs.core.IndexedSeq(G__31393__a,0,null);
} 
return G__31392__delegate.call(this,args);};
G__31392.cljs$lang$maxFixedArity = 0;
G__31392.cljs$lang$applyTo = (function (arglist__31394){
var args = cljs.core.seq(arglist__31394);
return G__31392__delegate(args);
});
G__31392.cljs$core$IFn$_invoke$arity$variadic = G__31392__delegate;
return G__31392;
})()
);
cljs.looperscript.looperscript.bind_key.call(null,"link","Ctrl-Shift-l","Command-Shift-L",(function (e){
return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);

//# sourceMappingURL=looperscript.js.map
