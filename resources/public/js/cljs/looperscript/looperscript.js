// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.looperscript');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.looperscript.logging');
goog.require('cljs.looperscript.start_time');
goog.require('cljs.looperscript.audio');
goog.require('cljs.looperscript.start_time');
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
cljs.looperscript.looperscript.current_next_note_fns = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.looperscript.looperscript.queue_time_interval = (1);
cljs.looperscript.looperscript.queue_time_extra = 0.5;
cljs.looperscript.looperscript.last_queue_time = cljs.core.atom.call(null,null);
cljs.looperscript.looperscript.params = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.looperscript.sounding_notes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.looperscript.aspects = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)], null);
cljs.looperscript.looperscript.aspect_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drum-code","drum-code",2081814302),"r"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sawtooth"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2500)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)]);
/**
* @param {...*} var_args
*/
cljs.looperscript.looperscript.log_time = (function() { 
var log_time__delegate = function (f,args){var start_time = cljs.looperscript.start_time.now.call(null);var res = f.call(null);var run_time = (cljs.looperscript.start_time.now.call(null) - start_time);cljs.looperscript.logging.log.call(null,run_time,args);
return res;
};
var log_time = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_time__delegate.call(this,f,args);};
log_time.cljs$lang$maxFixedArity = 1;
log_time.cljs$lang$applyTo = (function (arglist__29904){
var f = cljs.core.first(arglist__29904);
var args = cljs.core.rest(arglist__29904);
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
cljs.looperscript.looperscript.get_parts = (function get_parts(){var text = cljs.looperscript.looperscript.get_looper_text.call(null);var start_time = cljs.looperscript.start_time.now.call(null);var parse_tree = cljs.looperscript.interpret.looper_parse.call(null,text);if(instaparse.core.failure_QMARK_.call(null,parse_tree))
{return parse_tree;
} else
{var _ = cljs.looperscript.logging.log.call(null,new cljs.core.Keyword(null,"tree","tree",-196312028),parse_tree,"\n");var parse_time = (cljs.looperscript.start_time.now.call(null) - start_time);var transformed_tree = cljs.looperscript.interpret.looper_transform.call(null,parse_tree);var ___$1 = cljs.looperscript.logging.log.call(null,new cljs.core.Keyword(null,"transformed","transformed",1969289512),transformed_tree,"\n");var transform_time = (cljs.looperscript.start_time.now.call(null) - start_time);var new_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(transformed_tree);var parts = new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(transformed_tree);cljs.looperscript.logging.log.call(null,"Parse time: (",parse_time,") ",transform_time);
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
cljs.looperscript.looperscript.separate_multi_aspects = (function separate_multi_aspects(part){return cljs.core.assoc.call(null,cljs.core.reduce.call(null,(function (m,p__29911){var vec__29912 = p__29911;var k = cljs.core.nth.call(null,vec__29912,(0),null);var v = cljs.core.nth.call(null,vec__29912,(1),null);if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,k)))
{return cljs.core.assoc.call(null,m,cljs.core.first.call(null,k),v);
} else
{return cljs.core.reduce.call(null,cljs.core.into,m,(function (){var iter__4379__auto__ = ((function (vec__29912,k,v){
return (function iter__29913(s__29914){return (new cljs.core.LazySeq(null,((function (vec__29912,k,v){
return (function (){var s__29914__$1 = s__29914;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29914__$1);if(temp__4126__auto__)
{var s__29914__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29914__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__29914__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__29916 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__29915 = (0);while(true){
if((i__29915 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__29915);cljs.core.chunk_append.call(null,b__29916,new cljs.core.PersistentArrayMap.fromArray([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))], true, false));
{
var G__29917 = (i__29915 + (1));
i__29915 = G__29917;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29916),iter__29913.call(null,cljs.core.chunk_rest.call(null,s__29914__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29916),null);
}
} else
{var i = cljs.core.first.call(null,s__29914__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap.fromArray([cljs.core.nth.call(null,k,i),cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.partition.call(null,(1),cljs.core.count.call(null,k),cljs.core.drop.call(null,i,v))))], true, false),iter__29913.call(null,cljs.core.rest.call(null,s__29914__$2)));
}
} else
{return null;
}
break;
}
});})(vec__29912,k,v))
,null,null));
});})(vec__29912,k,v))
;return iter__4379__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,k)));
})());
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.vec.call(null,cljs.core.dissoc.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)))),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,part,new cljs.core.Keyword(null,"name","name",1843675177)));
});
cljs.looperscript.looperscript.make_iterators = (function make_iterators(part){var part__$1 = cljs.looperscript.looperscript.separate_multi_aspects.call(null,part);var part_keys = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.remove.call(null,((function (part__$1){
return (function (p1__29918_SHARP_){return cljs.core._EQ_.call(null,p1__29918_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
});})(part__$1))
,cljs.core.keys.call(null,part__$1)));var specified_aspects = cljs.core.set.call(null,part_keys);var sub_aspects = cljs.core.set.call(null,cljs.core.filter.call(null,cljs.core.vector_QMARK_,cljs.core.keys.call(null,part__$1)));var non_specified_aspects = cljs.core.remove.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects){
return (function (p1__29919_SHARP_){return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__29919_SHARP_);
});})(part__$1,part_keys,specified_aspects,sub_aspects))
,cljs.looperscript.looperscript.aspects);return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__29920_SHARP_){if(cljs.core.contains_QMARK_.call(null,sub_aspects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29920_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)))
{return cljs.looperscript.iterator.timed_iterator.call(null,cljs.core.get.call(null,part__$1,p1__29920_SHARP_),cljs.core.get.call(null,part__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29920_SHARP_,new cljs.core.Keyword(null,"time","time",1385887882)], null)));
} else
{return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part__$1,p1__29920_SHARP_));

}
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,non_specified_aspects,cljs.core.map.call(null,((function (part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects){
return (function (p1__29921_SHARP_){return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__29921_SHARP_));
});})(part__$1,part_keys,specified_aspects,sub_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.next_note_fn = (function next_note_fn(part,start_time){var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);var time_pos = cljs.core.atom.call(null,(start_time + (cljs.looperscript.looperscript.get_bpm.call(null) * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));return ((function (iterators,time_pos){
return (function() {
var G__29938 = null;
var G__29938__0 = (function (){while(true){
var adjusted_time_pos = (1.0E-7 + ((cljs.core.deref.call(null,time_pos) - start_time) / cljs.looperscript.looperscript.get_bpm.call(null)));var res_v = (function (){var iter__4379__auto__ = ((function (adjusted_time_pos,iterators,time_pos){
return (function iter__29930(s__29931){return (new cljs.core.LazySeq(null,((function (adjusted_time_pos,iterators,time_pos){
return (function (){var s__29931__$1 = s__29931;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29931__$1);if(temp__4126__auto__)
{var s__29931__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29931__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__29931__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__29933 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__29932 = (0);while(true){
if((i__29932 < size__4378__auto__))
{var vec__29936 = cljs.core._nth.call(null,c__4377__auto__,i__29932);var aspect = cljs.core.nth.call(null,vec__29936,(0),null);var iter = cljs.core.nth.call(null,vec__29936,(1),null);cljs.core.chunk_append.call(null,b__29933,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null));
{
var G__29939 = (i__29932 + (1));
i__29932 = G__29939;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29933),iter__29930.call(null,cljs.core.chunk_rest.call(null,s__29931__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29933),null);
}
} else
{var vec__29937 = cljs.core.first.call(null,s__29931__$2);var aspect = cljs.core.nth.call(null,vec__29937,(0),null);var iter = cljs.core.nth.call(null,vec__29937,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null,adjusted_time_pos)], null),iter__29930.call(null,cljs.core.rest.call(null,s__29931__$2)));
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
var G__29938__1 = (function (command){if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))
{return cljs.core.deref.call(null,time_pos);
} else
{return null;
}
});
G__29938 = function(command){
switch(arguments.length){
case 0:
return G__29938__0.call(this);
case 1:
return G__29938__1.call(this,command);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29938.cljs$core$IFn$_invoke$arity$0 = G__29938__0;
G__29938.cljs$core$IFn$_invoke$arity$1 = G__29938__1;
return G__29938;
})()
;})(iterators,time_pos))
});
cljs.looperscript.looperscript.schedule_note = (function schedule_note(n){var sound = new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n);var rate = new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(n);var start_time = (new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n) + new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));var start_time__$1 = (((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"drum-code","drum-code",2081814302))))?(function (){var temp__4124__auto__ = cljs.core.get.call(null,cljs.looperscript.audio.sample_lags,cljs.core.get.call(null,cljs.looperscript.audio.drum_codes,cljs.core.second.call(null,sound)));if(cljs.core.truth_(temp__4124__auto__))
{var l = temp__4124__auto__;return (start_time - (l / rate));
} else
{return start_time;
}
})():start_time);if((start_time__$1 >= cljs.looperscript.start_time.now.call(null)))
{var sound__$1 = ((typeof sound === 'number')?cljs.looperscript.looperscript.note__GT_freq.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"ratio","ratio",-926560044))))?cljs.looperscript.looperscript.ratio__GT_freq.call(null,cljs.core.second.call(null,sound)):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"hz","hz",-1450739349))))?cljs.core.second.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"drum-code","drum-code",2081814302))))?cljs.looperscript.audio.drum_codes.call(null,cljs.core.second.call(null,sound)):sound
))));var dur = (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(n) - new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));var vol = new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(n);var filter = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(n);var pan = new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(n);var synth = new cljs.core.Keyword(null,"synth","synth",-862700847).cljs$core$IFn$_invoke$arity$1(n);var overtones = new cljs.core.Keyword(null,"overtones","overtones",-2065460921).cljs$core$IFn$_invoke$arity$1(n);var node = ((typeof sound__$1 === 'number')?(cljs.core.truth_(filter)?cljs.looperscript.audio.play_filtered_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,filter,synth,overtones):cljs.looperscript.audio.play_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,synth,overtones)):cljs.looperscript.audio.play_sound.call(null,sound__$1,start_time__$1,vol,rate));var seq__29944 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));var chunk__29945 = null;var count__29946 = (0);var i__29947 = (0);while(true){
if((i__29947 < count__29946))
{var i = cljs.core._nth.call(null,chunk__29945,i__29947);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__29948 = seq__29944;
var G__29949 = chunk__29945;
var G__29950 = count__29946;
var G__29951 = (i__29947 + (1));
seq__29944 = G__29948;
chunk__29945 = G__29949;
count__29946 = G__29950;
i__29947 = G__29951;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29944);if(temp__4126__auto__)
{var seq__29944__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29944__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__29944__$1);{
var G__29952 = cljs.core.chunk_rest.call(null,seq__29944__$1);
var G__29953 = c__4410__auto__;
var G__29954 = cljs.core.count.call(null,c__4410__auto__);
var G__29955 = (0);
seq__29944 = G__29952;
chunk__29945 = G__29953;
count__29946 = G__29954;
i__29947 = G__29955;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__29944__$1);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__29956 = cljs.core.next.call(null,seq__29944__$1);
var G__29957 = null;
var G__29958 = (0);
var G__29959 = (0);
seq__29944 = G__29956;
chunk__29945 = G__29957;
count__29946 = G__29958;
i__29947 = G__29959;
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
cljs.looperscript.looperscript.queue_notes = (function queue_notes(){cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.last_queue_time,cljs.looperscript.start_time.now.call(null));
var end_time = ((cljs.looperscript.start_time.now.call(null) + cljs.looperscript.looperscript.queue_time_extra) + cljs.looperscript.looperscript.queue_time_interval);var seq__29964 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));var chunk__29965 = null;var count__29966 = (0);var i__29967 = (0);while(true){
if((i__29967 < count__29966))
{var n_n_fn = cljs.core._nth.call(null,chunk__29965,i__29967);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_29968 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_29968)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_29968);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_29968) < end_time))
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
var G__29969 = seq__29964;
var G__29970 = chunk__29965;
var G__29971 = count__29966;
var G__29972 = (i__29967 + (1));
seq__29964 = G__29969;
chunk__29965 = G__29970;
count__29966 = G__29971;
i__29967 = G__29972;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29964);if(temp__4126__auto__)
{var seq__29964__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29964__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__29964__$1);{
var G__29973 = cljs.core.chunk_rest.call(null,seq__29964__$1);
var G__29974 = c__4410__auto__;
var G__29975 = cljs.core.count.call(null,c__4410__auto__);
var G__29976 = (0);
seq__29964 = G__29973;
chunk__29965 = G__29974;
count__29966 = G__29975;
i__29967 = G__29976;
continue;
}
} else
{var n_n_fn = cljs.core.first.call(null,seq__29964__$1);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_29977 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_29977)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_29977);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_29977) < end_time))
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
var G__29978 = cljs.core.next.call(null,seq__29964__$1);
var G__29979 = null;
var G__29980 = (0);
var G__29981 = (0);
seq__29964 = G__29978;
chunk__29965 = G__29979;
count__29966 = G__29980;
i__29967 = G__29981;
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
cljs.looperscript.looperscript.reset_button = (function reset_button(){cljs.looperscript.looperscript.stop.call(null);
return cljs.looperscript.start_time.reset_clock_BANG_.call(null);
});
cljs.looperscript.looperscript.update = (function() {
var update = null;
var update__0 = (function (){return update.call(null,cljs.looperscript.looperscript.get_parts.call(null));
});
var update__1 = (function (parts){if(instaparse.core.failure_QMARK_.call(null,parts))
{return cljs.looperscript.logging.log.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,parts))));
} else
{var new_nnfns = cljs.core.vec.call(null,(function (){var iter__4379__auto__ = (function iter__29990(s__29991){return (new cljs.core.LazySeq(null,(function (){var s__29991__$1 = s__29991;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29991__$1);if(temp__4126__auto__)
{var s__29991__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29991__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__29991__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__29993 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__29992 = (0);while(true){
if((i__29992 < size__4378__auto__))
{var p = cljs.core._nth.call(null,c__4377__auto__,i__29992);cljs.core.chunk_append.call(null,b__29993,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)));
{
var G__29998 = (i__29992 + (1));
i__29992 = G__29998;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29993),iter__29990.call(null,cljs.core.chunk_rest.call(null,s__29991__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29993),null);
}
} else
{var p = cljs.core.first.call(null,s__29991__$2);return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.looperscript.start_time.get_current_start_time.call(null)),iter__29990.call(null,cljs.core.rest.call(null,s__29991__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.vals.call(null,parts));
})());var seq__29994_29999 = cljs.core.seq.call(null,new_nnfns);var chunk__29995_30000 = null;var count__29996_30001 = (0);var i__29997_30002 = (0);while(true){
if((i__29997_30002 < count__29996_30001))
{var nnfn_30003 = cljs.core._nth.call(null,chunk__29995_30000,i__29997_30002);while(true){
if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time);if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = cljs.core.deref.call(null,cljs.looperscript.looperscript.playing);if(cljs.core.truth_(and__3628__auto____$1))
{var and__3628__auto____$2 = true;if(and__3628__auto____$2)
{return (cljs.looperscript.start_time.now.call(null) - cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time));
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
if((cljs.looperscript.start_time.now.call(null) > nnfn_30003.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))))
{nnfn_30003.call(null);
{
continue;
}
} else
{}
break;
}
{
var G__30004 = seq__29994_29999;
var G__30005 = chunk__29995_30000;
var G__30006 = count__29996_30001;
var G__30007 = (i__29997_30002 + (1));
seq__29994_29999 = G__30004;
chunk__29995_30000 = G__30005;
count__29996_30001 = G__30006;
i__29997_30002 = G__30007;
continue;
}
} else
{var temp__4126__auto___30008 = cljs.core.seq.call(null,seq__29994_29999);if(temp__4126__auto___30008)
{var seq__29994_30009__$1 = temp__4126__auto___30008;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29994_30009__$1))
{var c__4410__auto___30010 = cljs.core.chunk_first.call(null,seq__29994_30009__$1);{
var G__30011 = cljs.core.chunk_rest.call(null,seq__29994_30009__$1);
var G__30012 = c__4410__auto___30010;
var G__30013 = cljs.core.count.call(null,c__4410__auto___30010);
var G__30014 = (0);
seq__29994_29999 = G__30011;
chunk__29995_30000 = G__30012;
count__29996_30001 = G__30013;
i__29997_30002 = G__30014;
continue;
}
} else
{var nnfn_30015 = cljs.core.first.call(null,seq__29994_30009__$1);while(true){
if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time);if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = cljs.core.deref.call(null,cljs.looperscript.looperscript.playing);if(cljs.core.truth_(and__3628__auto____$1))
{var and__3628__auto____$2 = true;if(and__3628__auto____$2)
{return (cljs.looperscript.start_time.now.call(null) - cljs.core.deref.call(null,cljs.looperscript.looperscript.last_queue_time));
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
if((cljs.looperscript.start_time.now.call(null) > nnfn_30015.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))))
{nnfn_30015.call(null);
{
continue;
}
} else
{}
break;
}
{
var G__30016 = cljs.core.next.call(null,seq__29994_30009__$1);
var G__30017 = null;
var G__30018 = (0);
var G__30019 = (0);
seq__29994_29999 = G__30016;
chunk__29995_30000 = G__30017;
count__29996_30001 = G__30018;
i__29997_30002 = G__30019;
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
cljs.looperscript.looperscript.play = (function play(){var parts = cljs.looperscript.looperscript.get_parts.call(null);if((cljs.looperscript.start_time.get_current_start_time.call(null) == null))
{cljs.looperscript.start_time.reset_clock_BANG_.call(null,(cljs.looperscript.start_time.now.call(null) + 0.5));
} else
{}
cljs.looperscript.looperscript.update.call(null,parts);
cljs.looperscript.looperscript.queue_notes.call(null);
cljs.looperscript.looperscript.kill_playing_interval.call(null);
cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing_interval,setInterval(cljs.looperscript.looperscript.queue_notes,(cljs.looperscript.looperscript.queue_time_interval * (1000))));
return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing,true);
});
cljs.looperscript.looperscript.kill_sounds = (function kill_sounds(){var seq__30024_30028 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));var chunk__30025_30029 = null;var count__30026_30030 = (0);var i__30027_30031 = (0);while(true){
if((i__30027_30031 < count__30026_30030))
{var n_30032 = cljs.core._nth.call(null,chunk__30025_30029,i__30027_30031);n_30032.stop();
{
var G__30033 = seq__30024_30028;
var G__30034 = chunk__30025_30029;
var G__30035 = count__30026_30030;
var G__30036 = (i__30027_30031 + (1));
seq__30024_30028 = G__30033;
chunk__30025_30029 = G__30034;
count__30026_30030 = G__30035;
i__30027_30031 = G__30036;
continue;
}
} else
{var temp__4126__auto___30037 = cljs.core.seq.call(null,seq__30024_30028);if(temp__4126__auto___30037)
{var seq__30024_30038__$1 = temp__4126__auto___30037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30024_30038__$1))
{var c__4410__auto___30039 = cljs.core.chunk_first.call(null,seq__30024_30038__$1);{
var G__30040 = cljs.core.chunk_rest.call(null,seq__30024_30038__$1);
var G__30041 = c__4410__auto___30039;
var G__30042 = cljs.core.count.call(null,c__4410__auto___30039);
var G__30043 = (0);
seq__30024_30028 = G__30040;
chunk__30025_30029 = G__30041;
count__30026_30030 = G__30042;
i__30027_30031 = G__30043;
continue;
}
} else
{var n_30044 = cljs.core.first.call(null,seq__30024_30038__$1);n_30044.stop();
{
var G__30045 = cljs.core.next.call(null,seq__30024_30038__$1);
var G__30046 = null;
var G__30047 = (0);
var G__30048 = (0);
seq__30024_30028 = G__30045;
chunk__30025_30029 = G__30046;
count__30026_30030 = G__30047;
i__30027_30031 = G__30048;
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
cljs.looperscript.looperscript.bind_key = (function bind_key(name,windows_key,mac_key,f){return (editor["commands"]).addCommand((function (){var obj30054 = {"name":name,"bindKey":(function (){var obj30056 = {"win":windows_key,"mac":mac_key};return obj30056;
})(),"exec":f};return obj30054;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-Shift-u","Command-Shift-U",(function() { 
var G__30057__delegate = function (args){return cljs.looperscript.looperscript.update.call(null);
};
var G__30057 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__30057__delegate.call(this,args);};
G__30057.cljs$lang$maxFixedArity = 0;
G__30057.cljs$lang$applyTo = (function (arglist__30058){
var args = cljs.core.seq(arglist__30058);
return G__30057__delegate(args);
});
G__30057.cljs$core$IFn$_invoke$arity$variadic = G__30057__delegate;
return G__30057;
})()
);
cljs.looperscript.looperscript.bind_key.call(null,"link","Ctrl-Shift-l","Command-Shift-L",(function (e){return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);
