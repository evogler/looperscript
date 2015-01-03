// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.looperscript');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.looperscript.logging');
goog.require('cljs.looperscript.audio');
goog.require('cljs.looperscript.iterator');
goog.require('cljs.looperscript.address_bar');
goog.require('domina');
goog.require('cljs.looperscript.interpret');
goog.require('cljs.looperscript.iterator');
goog.require('cljs.looperscript.logging');
goog.require('cljs.looperscript.address_bar');
goog.require('domina.events');
goog.require('domina');
goog.require('domina.events');
goog.require('instaparse.core');
goog.require('instaparse.core');
goog.require('cljs.looperscript.audio');
goog.require('cljs.looperscript.interpret');
goog.require('cljs.reader');
var L = cljs.looperscript.looperscript;
cljs.looperscript.looperscript.ctx = cljs.looperscript.audio.ctx;
cljs.looperscript.looperscript.playing = cljs.core.atom.call(null,false);
cljs.looperscript.looperscript.playing_interval = cljs.core.atom.call(null,null);
cljs.looperscript.looperscript.current_start_time = cljs.core.atom.call(null,null);
cljs.looperscript.looperscript.current_next_note_fns = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.looperscript.looperscript.queue_time_interval = (1);
cljs.looperscript.looperscript.queue_time_extra = 0.1;
cljs.looperscript.looperscript.last_queue_time = cljs.core.atom.call(null,null);
cljs.looperscript.looperscript.params = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.looperscript.sounding_notes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.looperscript.aspects = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)], null);
cljs.looperscript.looperscript.aspect_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drum-code","drum-code",2081814302),"r"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sawtooth"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2500)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)]);
cljs.looperscript.looperscript.now = (function now(){return (cljs.looperscript.audio.ctx["currentTime"]);
});
/**
* @param {...*} var_args
*/
cljs.looperscript.looperscript.log_time = (function() { 
var log_time__delegate = function (f,args){var start_time = cljs.looperscript.looperscript.now.call(null);var res = f.call(null);var run_time = (cljs.looperscript.looperscript.now.call(null) - start_time);cljs.looperscript.logging.log.call(null,run_time,args);
return res;
};
var log_time = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_time__delegate.call(this,f,args);};
log_time.cljs$lang$maxFixedArity = 1;
log_time.cljs$lang$applyTo = (function (arglist__11402){
var f = cljs.core.first(arglist__11402);
var args = cljs.core.rest(arglist__11402);
return log_time__delegate(f,args);
});
log_time.cljs$core$IFn$_invoke$arity$variadic = log_time__delegate;
return log_time;
})()
;
cljs.looperscript.looperscript.note__GT_freq = (function note__GT_freq(n){return (261.625565 * Math.pow.call(null,(2),(n / (12))));
});
cljs.looperscript.looperscript.ratio__GT_freq = (function ratio__GT_freq(r){return (261.625565 * r);
});
cljs.looperscript.looperscript.get_bpm = (function get_bpm(){var temp__4124__auto__ = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.looperscript.looperscript.params));if(cljs.core.truth_(temp__4124__auto__))
{var bpm = temp__4124__auto__;return bpm;
} else
{return (1);
}
});
cljs.looperscript.looperscript.dethunk = (function dethunk(x){if(cljs.core.fn_QMARK_.call(null,x))
{return x.call(null);
} else
{return x;
}
});
cljs.looperscript.looperscript.get_looper_text = (function get_looper_text(){return cljs.looperscript.interpret.remove_comments.call(null,editor.getValue());
});
cljs.looperscript.looperscript.get_parts = (function get_parts(){var text = cljs.looperscript.looperscript.get_looper_text.call(null);var start_time = cljs.looperscript.looperscript.now.call(null);var parse_tree = cljs.looperscript.interpret.looper_parse.call(null,text);if(instaparse.core.failure_QMARK_.call(null,parse_tree))
{return parse_tree;
} else
{var _ = cljs.looperscript.logging.log.call(null,new cljs.core.Keyword(null,"tree","tree",-196312028),parse_tree,"\n");var parse_time = (cljs.looperscript.looperscript.now.call(null) - start_time);var transformed_tree = cljs.looperscript.interpret.looper_transform.call(null,parse_tree);var ___$1 = cljs.looperscript.logging.log.call(null,new cljs.core.Keyword(null,"transformed","transformed",1969289512),transformed_tree,"\n");var transform_time = (cljs.looperscript.looperscript.now.call(null) - start_time);var new_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(transformed_tree);var parts = new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(transformed_tree);cljs.looperscript.logging.log.call(null,"Parse time: (",parse_time,") ",transform_time);
cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.params,new_params);
return parts;
}
});
cljs.looperscript.looperscript.add_note_to_sounding_notes = (function (){var sounding_counter = cljs.core.atom.call(null,(0));return ((function (sounding_counter){
return (function (n,node){var id = cljs.core.swap_BANG_.call(null,sounding_counter,cljs.core.inc);cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.assoc,id,node);
return (node["onended"] = ((function (id,sounding_counter){
return (function (){return cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.dissoc,id);
});})(id,sounding_counter))
);
});
;})(sounding_counter))
})();
cljs.looperscript.looperscript.separate_multi_aspects = (function separate_multi_aspects(part){return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,p__11409){var vec__11410 = p__11409;var k = cljs.core.nth.call(null,vec__11410,(0),null);var v = cljs.core.nth.call(null,vec__11410,(1),null);if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,k)))
{return cljs.core.assoc.call(null,m,cljs.core.first.call(null,k),v);
} else
{return cljs.core.reduce.call(null,cljs.core.into,m,(function (){var iter__4379__auto__ = ((function (vec__11410,k,v){
return (function iter__11411(s__11412){return (new cljs.core.LazySeq(null,((function (vec__11410,k,v){
return (function (){var s__11412__$1 = s__11412;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11412__$1);if(temp__4126__auto__)
{var s__11412__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11412__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__11412__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__11414 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__11413 = (0);while(true){
if((i__11413 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__11413);cljs.core.chunk_append.call(null,b__11414,new cljs.core.PersistentArrayMap.fromArray([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))], true, false));
{
var G__11415 = (i__11413 + (1));
i__11413 = G__11415;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11414),iter__11411.call(null,cljs.core.chunk_rest.call(null,s__11412__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11414),null);
}
} else
{var i = cljs.core.first.call(null,s__11412__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))], true, false),iter__11411.call(null,cljs.core.rest.call(null,s__11412__$2)));
}
} else
{return null;
}
break;
}
});})(vec__11410,k,v))
,null,null));
});})(vec__11410,k,v))
;return iter__4379__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,k)));
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,cljs.core.dissoc.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)));
});
cljs.looperscript.looperscript.make_iterators = (function make_iterators(part){var part__$1 = cljs.looperscript.looperscript.separate_multi_aspects.call(null,part);var part_keys = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,((function (part__$1){
return (function (p1__11416_SHARP_){return cljs.core._EQ_.call(null,p1__11416_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(part__$1))
,cljs.core.keys.call(null,part__$1)));var specified_aspects = cljs.core.set.call(null,part_keys);var sub_aspects = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,part__$1)));var non_specified_aspects = cljs.core.remove.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects){
return (function (p1__11417_SHARP_){return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__11417_SHARP_);
});})(part__$1,part_keys,specified_aspects,sub_aspects))
,cljs.looperscript.looperscript.aspects);return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__11418_SHARP_){if(cljs.core.contains_QMARK_.call(null,sub_aspects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11418_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)))
{return cljs.looperscript.iterator.timed_iterator.call(null,cljs.core.get.call(null,part__$1,p1__11418_SHARP_),cljs.core.get.call(null,part__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11418_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)));
} else
{return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part__$1,p1__11418_SHARP_));

}
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,non_specified_aspects,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__11419_SHARP_){return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__11419_SHARP_));
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.next_note_fn = (function next_note_fn(part,start_time){var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);var time_pos = cljs.core.atom.call(null,(start_time + (cljs.looperscript.looperscript.get_bpm.call(null) * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));return ((function (iterators,time_pos){
return (function() {
var G__11436 = null;
var G__11436__0 = (function (){while(true){
var adjusted_time_pos = (1.0E-7 + ((cljs.core.deref.call(null,time_pos) - start_time) / cljs.looperscript.looperscript.get_bpm.call(null)));var res_v = (function (){var iter__4379__auto__ = ((function (adjusted_time_pos,iterators,time_pos){
return (function iter__11428(s__11429){return (new cljs.core.LazySeq(null,((function (adjusted_time_pos,iterators,time_pos){
return (function (){var s__11429__$1 = s__11429;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11429__$1);if(temp__4126__auto__)
{var s__11429__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11429__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__11429__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__11431 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__11430 = (0);while(true){
if((i__11430 < size__4378__auto__))
{var vec__11434 = cljs.core._nth.call(null,c__4377__auto__,i__11430);var aspect = cljs.core.nth.call(null,vec__11434,(0),null);var iter = cljs.core.nth.call(null,vec__11434,(1),null);cljs.core.chunk_append.call(null,b__11431,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null));
{
var G__11437 = (i__11430 + (1));
i__11430 = G__11437;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11431),iter__11428.call(null,cljs.core.chunk_rest.call(null,s__11429__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11431),null);
}
} else
{var vec__11435 = cljs.core.first.call(null,s__11429__$2);var aspect = cljs.core.nth.call(null,vec__11435,(0),null);var iter = cljs.core.nth.call(null,vec__11435,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null),iter__11428.call(null,cljs.core.rest.call(null,s__11429__$2)));
}
} else
{return null;
}
break;
}
});})(adjusted_time_pos,iterators,time_pos))
,null,null));
});})(adjusted_time_pos,iterators,time_pos))
;return iter__4379__auto__.call(null,iterators);
})();var res = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,res_v);var res__$1 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"start-time","start-time",814801386),cljs.core.deref.call(null,time_pos)),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core._STAR_,cljs.looperscript.looperscript.get_bpm.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time+","time+",2008858809)], null),cljs.core._STAR_,cljs.looperscript.looperscript.get_bpm.call(null));if(((0) >= res__$1.call(null,new cljs.core.Keyword(null,"skip","skip",602715391))))
{{
continue;
}
} else
{cljs.core.swap_BANG_.call(null,time_pos,cljs.core._PLUS_,res__$1.call(null,new cljs.core.Keyword(null,"time","time",1385887882)));
return res__$1;
}
break;
}
});
var G__11436__1 = (function (command){if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))
{return cljs.core.deref.call(null,time_pos);
} else
{return null;
}
});
G__11436 = function(command){
switch(arguments.length){
case 0:
return G__11436__0.call(this);
case 1:
return G__11436__1.call(this,command);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11436.cljs$core$IFn$_invoke$arity$0 = G__11436__0;
G__11436.cljs$core$IFn$_invoke$arity$1 = G__11436__1;
return G__11436;
})()
;})(iterators,time_pos))
});
cljs.looperscript.looperscript.schedule_note = (function schedule_note(n){var sound = new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n);var rate = new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(n);var start_time = (new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n) + new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));var start_time__$1 = (((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"drum-code","drum-code",2081814302))))?(function (){var temp__4124__auto__ = cljs.core.get.call(null,cljs.looperscript.audio.sample_lags,cljs.core.get.call(null,cljs.looperscript.audio.drum_codes,cljs.core.second.call(null,sound)));if(cljs.core.truth_(temp__4124__auto__))
{var l = temp__4124__auto__;return (start_time - (l / rate));
} else
{return start_time;
}
})():start_time);if((start_time__$1 >= cljs.looperscript.looperscript.now.call(null)))
{var sound__$1 = ((typeof sound === 'number')?cljs.looperscript.looperscript.note__GT_freq.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"ratio","ratio",-926560044))))?cljs.looperscript.looperscript.ratio__GT_freq.call(null,cljs.core.second.call(null,sound)):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"hz","hz",-1450739349))))?cljs.core.second.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"drum-code","drum-code",2081814302))))?cljs.looperscript.audio.drum_codes.call(null,cljs.core.second.call(null,sound)):sound
))));var dur = (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(n) - new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));var vol = new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(n);var filter = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(n);var pan = new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(n);var synth = new cljs.core.Keyword(null,"synth","synth",-862700847).cljs$core$IFn$_invoke$arity$1(n);var overtones = new cljs.core.Keyword(null,"overtones","overtones",-2065460921).cljs$core$IFn$_invoke$arity$1(n);var node = ((typeof sound__$1 === 'number')?(cljs.core.truth_(filter)?cljs.looperscript.audio.play_filtered_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,filter,synth,overtones):cljs.looperscript.audio.play_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,synth,overtones)):cljs.looperscript.audio.play_sound.call(null,sound__$1,start_time__$1,vol,rate));var seq__11442 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));var chunk__11443 = null;var count__11444 = (0);var i__11445 = (0);while(true){
if((i__11445 < count__11444))
{var i = cljs.core._nth.call(null,chunk__11443,i__11445);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__11446 = seq__11442;
var G__11447 = chunk__11443;
var G__11448 = count__11444;
var G__11449 = (i__11445 + (1));
seq__11442 = G__11446;
chunk__11443 = G__11447;
count__11444 = G__11448;
i__11445 = G__11449;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11442);if(temp__4126__auto__)
{var seq__11442__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11442__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__11442__$1);{
var G__11450 = cljs.core.chunk_rest.call(null,seq__11442__$1);
var G__11451 = c__4410__auto__;
var G__11452 = cljs.core.count.call(null,c__4410__auto__);
var G__11453 = (0);
seq__11442 = G__11450;
chunk__11443 = G__11451;
count__11444 = G__11452;
i__11445 = G__11453;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__11442__$1);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__11454 = cljs.core.next.call(null,seq__11442__$1);
var G__11455 = null;
var G__11456 = (0);
var G__11457 = (0);
seq__11442 = G__11454;
chunk__11443 = G__11455;
count__11444 = G__11456;
i__11445 = G__11457;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.looperscript.looperscript.queue_notes = (function queue_notes(){cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.last_queue_time,cljs.looperscript.looperscript.now.call(null));
var end_time = ((cljs.looperscript.looperscript.now.call(null) + cljs.looperscript.looperscript.queue_time_extra) + cljs.looperscript.looperscript.queue_time_interval);var seq__11462 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));var chunk__11463 = null;var count__11464 = (0);var i__11465 = (0);while(true){
if((i__11465 < count__11464))
{var n_n_fn = cljs.core._nth.call(null,chunk__11463,i__11465);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_11466 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_11466)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_11466);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_11466) < end_time))
{{
continue;
}
} else
{}
break;
}
} else
{}
{
var G__11467 = seq__11462;
var G__11468 = chunk__11463;
var G__11469 = count__11464;
var G__11470 = (i__11465 + (1));
seq__11462 = G__11467;
chunk__11463 = G__11468;
count__11464 = G__11469;
i__11465 = G__11470;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11462);if(temp__4126__auto__)
{var seq__11462__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11462__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__11462__$1);{
var G__11471 = cljs.core.chunk_rest.call(null,seq__11462__$1);
var G__11472 = c__4410__auto__;
var G__11473 = cljs.core.count.call(null,c__4410__auto__);
var G__11474 = (0);
seq__11462 = G__11471;
chunk__11463 = G__11472;
count__11464 = G__11473;
i__11465 = G__11474;
continue;
}
} else
{var n_n_fn = cljs.core.first.call(null,seq__11462__$1);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_11475 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_11475)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_11475);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_11475) < end_time))
{{
continue;
}
} else
{}
break;
}
} else
{}
{
var G__11476 = cljs.core.next.call(null,seq__11462__$1);
var G__11477 = null;
var G__11478 = (0);
var G__11479 = (0);
seq__11462 = G__11476;
chunk__11463 = G__11477;
count__11464 = G__11478;
i__11465 = G__11479;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cljs.looperscript.looperscript.reset_clock_BANG_ = (function() {
var reset_clock_BANG_ = null;
var reset_clock_BANG___0 = (function (){return reset_clock_BANG_.call(null,null);
});
var reset_clock_BANG___1 = (function (time){return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.current_start_time,time);
});
reset_clock_BANG_ = function(time){
switch(arguments.length){
case 0:
return reset_clock_BANG___0.call(this);
case 1:
return reset_clock_BANG___1.call(this,time);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reset_clock_BANG_.cljs$core$IFn$_invoke$arity$0 = reset_clock_BANG___0;
reset_clock_BANG_.cljs$core$IFn$_invoke$arity$1 = reset_clock_BANG___1;
return reset_clock_BANG_;
})()
;
cljs.looperscript.looperscript.reset_button = (function reset_button(){cljs.looperscript.looperscript.stop.call(null);
return cljs.looperscript.looperscript.reset_clock_BANG_.call(null);
});
cljs.looperscript.looperscript.update = (function() {
var update = null;
var update__0 = (function (){return update.call(null,cljs.looperscript.looperscript.get_parts.call(null));
});
var update__1 = (function (parts){if(instaparse.core.failure_QMARK_.call(null,parts))
{return cljs.looperscript.logging.log.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,parts))));
} else
{var new_nnfns = cljs.core.vec.call(null,(function (){var iter__4379__auto__ = (function iter__11488(s__11489){return (new cljs.core.LazySeq(null,(function (){var s__11489__$1 = s__11489;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11489__$1);if(temp__4126__auto__)
{var s__11489__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11489__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__11489__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__11491 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__11490 = (0);while(true){
if((i__11490 < size__4378__auto__))
{var p = cljs.core._nth.call(null,c__4377__auto__,i__11490);cljs.core.chunk_append.call(null,b__11491,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_start_time)));
{
var G__11496 = (i__11490 + (1));
i__11490 = G__11496;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11491),iter__11488.call(null,cljs.core.chunk_rest.call(null,s__11489__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11491),null);
}
} else
{var p = cljs.core.first.call(null,s__11489__$2);return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_start_time)),iter__11488.call(null,cljs.core.rest.call(null,s__11489__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.vals.call(null,parts));
})());var seq__11492_11497 = cljs.core.seq.call(null,new_nnfns);var chunk__11493_11498 = null;var count__11494_11499 = (0);var i__11495_11500 = (0);while(true){
if((i__11495_11500 < count__11494_11499))
{var nnfn_11501 = cljs.core._nth.call(null,chunk__11493_11498,i__11495_11500);while(true){
if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time);if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = cljs.core.deref.call(null,cljs.looperscript.looperscript.playing);if(cljs.core.truth_(and__3628__auto____$1))
{var and__3628__auto____$2 = true;if(and__3628__auto____$2)
{return (cljs.looperscript.looperscript.now.call(null) - cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time));
} else
{return and__3628__auto____$2;
}
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
})()))
{cljs.looperscript.looperscript.queue_notes.call(null);
} else
{}
if((cljs.looperscript.looperscript.now.call(null) > nnfn_11501.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))))
{nnfn_11501.call(null);
{
continue;
}
} else
{}
break;
}
{
var G__11502 = seq__11492_11497;
var G__11503 = chunk__11493_11498;
var G__11504 = count__11494_11499;
var G__11505 = (i__11495_11500 + (1));
seq__11492_11497 = G__11502;
chunk__11493_11498 = G__11503;
count__11494_11499 = G__11504;
i__11495_11500 = G__11505;
continue;
}
} else
{var temp__4126__auto___11506 = cljs.core.seq.call(null,seq__11492_11497);if(temp__4126__auto___11506)
{var seq__11492_11507__$1 = temp__4126__auto___11506;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11492_11507__$1))
{var c__4410__auto___11508 = cljs.core.chunk_first.call(null,seq__11492_11507__$1);{
var G__11509 = cljs.core.chunk_rest.call(null,seq__11492_11507__$1);
var G__11510 = c__4410__auto___11508;
var G__11511 = cljs.core.count.call(null,c__4410__auto___11508);
var G__11512 = (0);
seq__11492_11497 = G__11509;
chunk__11493_11498 = G__11510;
count__11494_11499 = G__11511;
i__11495_11500 = G__11512;
continue;
}
} else
{var nnfn_11513 = cljs.core.first.call(null,seq__11492_11507__$1);while(true){
if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time);if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = cljs.core.deref.call(null,cljs.looperscript.looperscript.playing);if(cljs.core.truth_(and__3628__auto____$1))
{var and__3628__auto____$2 = true;if(and__3628__auto____$2)
{return (cljs.looperscript.looperscript.now.call(null) - cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time));
} else
{return and__3628__auto____$2;
}
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
})()))
{cljs.looperscript.looperscript.queue_notes.call(null);
} else
{}
if((cljs.looperscript.looperscript.now.call(null) > nnfn_11513.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))))
{nnfn_11513.call(null);
{
continue;
}
} else
{}
break;
}
{
var G__11514 = cljs.core.next.call(null,seq__11492_11507__$1);
var G__11515 = null;
var G__11516 = (0);
var G__11517 = (0);
seq__11492_11497 = G__11514;
chunk__11493_11498 = G__11515;
count__11494_11499 = G__11516;
i__11495_11500 = G__11517;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.current_next_note_fns,new_nnfns);
}
});
update = function(parts){
switch(arguments.length){
case 0:
return update__0.call(this);
case 1:
return update__1.call(this,parts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$core$IFn$_invoke$arity$0 = update__0;
update.cljs$core$IFn$_invoke$arity$1 = update__1;
return update;
})()
;
cljs.looperscript.looperscript.kill_playing_interval = (function kill_playing_interval(){if(cljs.core.truth_(cljs.core.deref.call(null,cljs.looperscript.looperscript.playing_interval)))
{clearInterval(cljs.core.deref.call(null,cljs.looperscript.looperscript.playing_interval));
return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing_interval,null);
} else
{return null;
}
});
cljs.looperscript.looperscript.play = (function play(){var parts = cljs.looperscript.looperscript.get_parts.call(null);if((cljs.core.deref.call(null,cljs.looperscript.looperscript.current_start_time) == null))
{cljs.looperscript.looperscript.reset_clock_BANG_.call(null,(cljs.looperscript.looperscript.now.call(null) + 0.25));
} else
{}
cljs.looperscript.looperscript.update.call(null,parts);
cljs.looperscript.looperscript.queue_notes.call(null);
cljs.looperscript.looperscript.kill_playing_interval.call(null);
cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing_interval,setInterval(cljs.looperscript.looperscript.queue_notes,(cljs.looperscript.looperscript.queue_time_interval * (1000))));
return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing,true);
});
cljs.looperscript.looperscript.kill_sounds = (function kill_sounds(){var seq__11522_11526 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));var chunk__11523_11527 = null;var count__11524_11528 = (0);var i__11525_11529 = (0);while(true){
if((i__11525_11529 < count__11524_11528))
{var n_11530 = cljs.core._nth.call(null,chunk__11523_11527,i__11525_11529);n_11530.stop();
{
var G__11531 = seq__11522_11526;
var G__11532 = chunk__11523_11527;
var G__11533 = count__11524_11528;
var G__11534 = (i__11525_11529 + (1));
seq__11522_11526 = G__11531;
chunk__11523_11527 = G__11532;
count__11524_11528 = G__11533;
i__11525_11529 = G__11534;
continue;
}
} else
{var temp__4126__auto___11535 = cljs.core.seq.call(null,seq__11522_11526);if(temp__4126__auto___11535)
{var seq__11522_11536__$1 = temp__4126__auto___11535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11522_11536__$1))
{var c__4410__auto___11537 = cljs.core.chunk_first.call(null,seq__11522_11536__$1);{
var G__11538 = cljs.core.chunk_rest.call(null,seq__11522_11536__$1);
var G__11539 = c__4410__auto___11537;
var G__11540 = cljs.core.count.call(null,c__4410__auto___11537);
var G__11541 = (0);
seq__11522_11526 = G__11538;
chunk__11523_11527 = G__11539;
count__11524_11528 = G__11540;
i__11525_11529 = G__11541;
continue;
}
} else
{var n_11542 = cljs.core.first.call(null,seq__11522_11536__$1);n_11542.stop();
{
var G__11543 = cljs.core.next.call(null,seq__11522_11536__$1);
var G__11544 = null;
var G__11545 = (0);
var G__11546 = (0);
seq__11522_11526 = G__11543;
chunk__11523_11527 = G__11544;
count__11524_11528 = G__11545;
i__11525_11529 = G__11546;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.PersistentArrayMap.EMPTY);
});
cljs.looperscript.looperscript.stop = (function stop(){cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing,false);
cljs.looperscript.looperscript.kill_playing_interval.call(null);
return cljs.looperscript.looperscript.kill_sounds.call(null);
});
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"play"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){return cljs.looperscript.looperscript.play.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"pause"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){return cljs.looperscript.looperscript.stop.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"update"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){return cljs.looperscript.looperscript.update.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"stop"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){return cljs.looperscript.looperscript.reset_button.call(null);
}));
cljs.looperscript.looperscript.bind_key = (function bind_key(name,windows_key,mac_key,f){return (editor["commands"]).addCommand((function (){var obj11552 = {"name":name,"bindKey":(function (){var obj11554 = {"win":windows_key,"mac":mac_key};return obj11554;
})(),"exec":f};return obj11552;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-u","Command-U",cljs.looperscript.looperscript.update);
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);
