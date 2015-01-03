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
log_time.cljs$lang$applyTo = (function (arglist__7980){
var f = cljs.core.first(arglist__7980);
var args = cljs.core.rest(arglist__7980);
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
cljs.looperscript.looperscript.separate_multi_aspects = (function separate_multi_aspects(part){return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,p__7987){var vec__7988 = p__7987;var k = cljs.core.nth.call(null,vec__7988,(0),null);var v = cljs.core.nth.call(null,vec__7988,(1),null);if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,k)))
{return cljs.core.assoc.call(null,m,cljs.core.first.call(null,k),v);
} else
{return cljs.core.reduce.call(null,cljs.core.into,m,(function (){var iter__4379__auto__ = ((function (vec__7988,k,v){
return (function iter__7989(s__7990){return (new cljs.core.LazySeq(null,((function (vec__7988,k,v){
return (function (){var s__7990__$1 = s__7990;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7990__$1);if(temp__4126__auto__)
{var s__7990__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7990__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__7990__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__7992 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__7991 = (0);while(true){
if((i__7991 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__7991);cljs.core.chunk_append.call(null,b__7992,new cljs.core.PersistentArrayMap.fromArray([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))], true, false));
{
var G__7993 = (i__7991 + (1));
i__7991 = G__7993;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7992),iter__7989.call(null,cljs.core.chunk_rest.call(null,s__7990__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7992),null);
}
} else
{var i = cljs.core.first.call(null,s__7990__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))], true, false),iter__7989.call(null,cljs.core.rest.call(null,s__7990__$2)));
}
} else
{return null;
}
break;
}
});})(vec__7988,k,v))
,null,null));
});})(vec__7988,k,v))
;return iter__4379__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,k)));
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,cljs.core.dissoc.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)));
});
cljs.looperscript.looperscript.make_iterators = (function make_iterators(part){var part__$1 = cljs.looperscript.looperscript.separate_multi_aspects.call(null,part);var part_keys = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,((function (part__$1){
return (function (p1__7994_SHARP_){return cljs.core._EQ_.call(null,p1__7994_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(part__$1))
,cljs.core.keys.call(null,part__$1)));var specified_aspects = cljs.core.set.call(null,part_keys);var sub_aspects = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,part__$1)));var non_specified_aspects = cljs.core.remove.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects){
return (function (p1__7995_SHARP_){return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__7995_SHARP_);
});})(part__$1,part_keys,specified_aspects,sub_aspects))
,cljs.looperscript.looperscript.aspects);return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__7996_SHARP_){if(cljs.core.contains_QMARK_.call(null,sub_aspects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7996_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)))
{return cljs.looperscript.iterator.timed_iterator.call(null,cljs.core.get.call(null,part__$1,p1__7996_SHARP_),cljs.core.get.call(null,part__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7996_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)));
} else
{return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part__$1,p1__7996_SHARP_));

}
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,non_specified_aspects,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__7997_SHARP_){return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__7997_SHARP_));
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.next_note_fn = (function next_note_fn(part,start_time){var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);var time_pos = cljs.core.atom.call(null,(start_time + (cljs.looperscript.looperscript.get_bpm.call(null) * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));return ((function (iterators,time_pos){
return (function() {
var G__8014 = null;
var G__8014__0 = (function (){while(true){
var adjusted_time_pos = (1.0E-7 + ((cljs.core.deref.call(null,time_pos) - start_time) / cljs.looperscript.looperscript.get_bpm.call(null)));var res_v = (function (){var iter__4379__auto__ = ((function (adjusted_time_pos,iterators,time_pos){
return (function iter__8006(s__8007){return (new cljs.core.LazySeq(null,((function (adjusted_time_pos,iterators,time_pos){
return (function (){var s__8007__$1 = s__8007;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8007__$1);if(temp__4126__auto__)
{var s__8007__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8007__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__8007__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__8009 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__8008 = (0);while(true){
if((i__8008 < size__4378__auto__))
{var vec__8012 = cljs.core._nth.call(null,c__4377__auto__,i__8008);var aspect = cljs.core.nth.call(null,vec__8012,(0),null);var iter = cljs.core.nth.call(null,vec__8012,(1),null);cljs.core.chunk_append.call(null,b__8009,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null));
{
var G__8015 = (i__8008 + (1));
i__8008 = G__8015;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8009),iter__8006.call(null,cljs.core.chunk_rest.call(null,s__8007__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8009),null);
}
} else
{var vec__8013 = cljs.core.first.call(null,s__8007__$2);var aspect = cljs.core.nth.call(null,vec__8013,(0),null);var iter = cljs.core.nth.call(null,vec__8013,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null),iter__8006.call(null,cljs.core.rest.call(null,s__8007__$2)));
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
var G__8014__1 = (function (command){if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))
{return cljs.core.deref.call(null,time_pos);
} else
{return null;
}
});
G__8014 = function(command){
switch(arguments.length){
case 0:
return G__8014__0.call(this);
case 1:
return G__8014__1.call(this,command);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8014.cljs$core$IFn$_invoke$arity$0 = G__8014__0;
G__8014.cljs$core$IFn$_invoke$arity$1 = G__8014__1;
return G__8014;
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
))));var dur = (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(n) - new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));var vol = new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(n);var filter = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(n);var pan = new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(n);var synth = new cljs.core.Keyword(null,"synth","synth",-862700847).cljs$core$IFn$_invoke$arity$1(n);var overtones = new cljs.core.Keyword(null,"overtones","overtones",-2065460921).cljs$core$IFn$_invoke$arity$1(n);var node = ((typeof sound__$1 === 'number')?(cljs.core.truth_(filter)?cljs.looperscript.audio.play_filtered_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,filter,synth,overtones):cljs.looperscript.audio.play_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,synth,overtones)):cljs.looperscript.audio.play_sound.call(null,sound__$1,start_time__$1,vol,rate));var seq__8020 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));var chunk__8021 = null;var count__8022 = (0);var i__8023 = (0);while(true){
if((i__8023 < count__8022))
{var i = cljs.core._nth.call(null,chunk__8021,i__8023);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__8024 = seq__8020;
var G__8025 = chunk__8021;
var G__8026 = count__8022;
var G__8027 = (i__8023 + (1));
seq__8020 = G__8024;
chunk__8021 = G__8025;
count__8022 = G__8026;
i__8023 = G__8027;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8020);if(temp__4126__auto__)
{var seq__8020__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8020__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__8020__$1);{
var G__8028 = cljs.core.chunk_rest.call(null,seq__8020__$1);
var G__8029 = c__4410__auto__;
var G__8030 = cljs.core.count.call(null,c__4410__auto__);
var G__8031 = (0);
seq__8020 = G__8028;
chunk__8021 = G__8029;
count__8022 = G__8030;
i__8023 = G__8031;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__8020__$1);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__8032 = cljs.core.next.call(null,seq__8020__$1);
var G__8033 = null;
var G__8034 = (0);
var G__8035 = (0);
seq__8020 = G__8032;
chunk__8021 = G__8033;
count__8022 = G__8034;
i__8023 = G__8035;
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
var end_time = ((cljs.looperscript.looperscript.now.call(null) + cljs.looperscript.looperscript.queue_time_extra) + cljs.looperscript.looperscript.queue_time_interval);var seq__8040 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));var chunk__8041 = null;var count__8042 = (0);var i__8043 = (0);while(true){
if((i__8043 < count__8042))
{var n_n_fn = cljs.core._nth.call(null,chunk__8041,i__8043);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_8044 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_8044)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_8044);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_8044) < end_time))
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
var G__8045 = seq__8040;
var G__8046 = chunk__8041;
var G__8047 = count__8042;
var G__8048 = (i__8043 + (1));
seq__8040 = G__8045;
chunk__8041 = G__8046;
count__8042 = G__8047;
i__8043 = G__8048;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8040);if(temp__4126__auto__)
{var seq__8040__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8040__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__8040__$1);{
var G__8049 = cljs.core.chunk_rest.call(null,seq__8040__$1);
var G__8050 = c__4410__auto__;
var G__8051 = cljs.core.count.call(null,c__4410__auto__);
var G__8052 = (0);
seq__8040 = G__8049;
chunk__8041 = G__8050;
count__8042 = G__8051;
i__8043 = G__8052;
continue;
}
} else
{var n_n_fn = cljs.core.first.call(null,seq__8040__$1);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_8053 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_8053)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_8053);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_8053) < end_time))
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
var G__8054 = cljs.core.next.call(null,seq__8040__$1);
var G__8055 = null;
var G__8056 = (0);
var G__8057 = (0);
seq__8040 = G__8054;
chunk__8041 = G__8055;
count__8042 = G__8056;
i__8043 = G__8057;
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
{var new_nnfns = cljs.core.vec.call(null,(function (){var iter__4379__auto__ = (function iter__8066(s__8067){return (new cljs.core.LazySeq(null,(function (){var s__8067__$1 = s__8067;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8067__$1);if(temp__4126__auto__)
{var s__8067__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8067__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__8067__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__8069 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__8068 = (0);while(true){
if((i__8068 < size__4378__auto__))
{var p = cljs.core._nth.call(null,c__4377__auto__,i__8068);cljs.core.chunk_append.call(null,b__8069,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_start_time)));
{
var G__8074 = (i__8068 + (1));
i__8068 = G__8074;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8069),iter__8066.call(null,cljs.core.chunk_rest.call(null,s__8067__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8069),null);
}
} else
{var p = cljs.core.first.call(null,s__8067__$2);return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_start_time)),iter__8066.call(null,cljs.core.rest.call(null,s__8067__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.vals.call(null,parts));
})());var seq__8070_8075 = cljs.core.seq.call(null,new_nnfns);var chunk__8071_8076 = null;var count__8072_8077 = (0);var i__8073_8078 = (0);while(true){
if((i__8073_8078 < count__8072_8077))
{var nnfn_8079 = cljs.core._nth.call(null,chunk__8071_8076,i__8073_8078);while(true){
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
if((cljs.looperscript.looperscript.now.call(null) > nnfn_8079.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))))
{nnfn_8079.call(null);
{
continue;
}
} else
{}
break;
}
{
var G__8080 = seq__8070_8075;
var G__8081 = chunk__8071_8076;
var G__8082 = count__8072_8077;
var G__8083 = (i__8073_8078 + (1));
seq__8070_8075 = G__8080;
chunk__8071_8076 = G__8081;
count__8072_8077 = G__8082;
i__8073_8078 = G__8083;
continue;
}
} else
{var temp__4126__auto___8084 = cljs.core.seq.call(null,seq__8070_8075);if(temp__4126__auto___8084)
{var seq__8070_8085__$1 = temp__4126__auto___8084;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8070_8085__$1))
{var c__4410__auto___8086 = cljs.core.chunk_first.call(null,seq__8070_8085__$1);{
var G__8087 = cljs.core.chunk_rest.call(null,seq__8070_8085__$1);
var G__8088 = c__4410__auto___8086;
var G__8089 = cljs.core.count.call(null,c__4410__auto___8086);
var G__8090 = (0);
seq__8070_8075 = G__8087;
chunk__8071_8076 = G__8088;
count__8072_8077 = G__8089;
i__8073_8078 = G__8090;
continue;
}
} else
{var nnfn_8091 = cljs.core.first.call(null,seq__8070_8085__$1);while(true){
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
if((cljs.looperscript.looperscript.now.call(null) > nnfn_8091.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))))
{nnfn_8091.call(null);
{
continue;
}
} else
{}
break;
}
{
var G__8092 = cljs.core.next.call(null,seq__8070_8085__$1);
var G__8093 = null;
var G__8094 = (0);
var G__8095 = (0);
seq__8070_8075 = G__8092;
chunk__8071_8076 = G__8093;
count__8072_8077 = G__8094;
i__8073_8078 = G__8095;
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
cljs.looperscript.looperscript.kill_sounds = (function kill_sounds(){var seq__8100_8104 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));var chunk__8101_8105 = null;var count__8102_8106 = (0);var i__8103_8107 = (0);while(true){
if((i__8103_8107 < count__8102_8106))
{var n_8108 = cljs.core._nth.call(null,chunk__8101_8105,i__8103_8107);n_8108.stop();
{
var G__8109 = seq__8100_8104;
var G__8110 = chunk__8101_8105;
var G__8111 = count__8102_8106;
var G__8112 = (i__8103_8107 + (1));
seq__8100_8104 = G__8109;
chunk__8101_8105 = G__8110;
count__8102_8106 = G__8111;
i__8103_8107 = G__8112;
continue;
}
} else
{var temp__4126__auto___8113 = cljs.core.seq.call(null,seq__8100_8104);if(temp__4126__auto___8113)
{var seq__8100_8114__$1 = temp__4126__auto___8113;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8100_8114__$1))
{var c__4410__auto___8115 = cljs.core.chunk_first.call(null,seq__8100_8114__$1);{
var G__8116 = cljs.core.chunk_rest.call(null,seq__8100_8114__$1);
var G__8117 = c__4410__auto___8115;
var G__8118 = cljs.core.count.call(null,c__4410__auto___8115);
var G__8119 = (0);
seq__8100_8104 = G__8116;
chunk__8101_8105 = G__8117;
count__8102_8106 = G__8118;
i__8103_8107 = G__8119;
continue;
}
} else
{var n_8120 = cljs.core.first.call(null,seq__8100_8114__$1);n_8120.stop();
{
var G__8121 = cljs.core.next.call(null,seq__8100_8114__$1);
var G__8122 = null;
var G__8123 = (0);
var G__8124 = (0);
seq__8100_8104 = G__8121;
chunk__8101_8105 = G__8122;
count__8102_8106 = G__8123;
i__8103_8107 = G__8124;
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
cljs.looperscript.looperscript.bind_key = (function bind_key(name,windows_key,mac_key,f){return (editor["commands"]).addCommand((function (){var obj8130 = {"name":name,"bindKey":(function (){var obj8132 = {"win":windows_key,"mac":mac_key};return obj8132;
})(),"exec":f};return obj8130;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-u","Command-U",cljs.looperscript.looperscript.update);
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);
