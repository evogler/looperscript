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
cljs.looperscript.looperscript.queue_time_interval = 0.01;
cljs.looperscript.looperscript.queue_time_extra = 0.01;
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
log_time.cljs$lang$applyTo = (function (arglist__18684){
var f = cljs.core.first(arglist__18684);
var args = cljs.core.rest(arglist__18684);
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
cljs.looperscript.looperscript.make_iterators = (function make_iterators(part){var part_keys = cljs.core.remove.call(null,(function (p1__18685_SHARP_){return cljs.core._EQ_.call(null,p1__18685_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
}),cljs.core.keys.call(null,part));var specified_aspects = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,part_keys);var non_specified_aspects = cljs.core.remove.call(null,((function (part_keys,specified_aspects){
return (function (p1__18686_SHARP_){return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__18686_SHARP_);
});})(part_keys,specified_aspects))
,cljs.looperscript.looperscript.aspects);return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part_keys,specified_aspects,non_specified_aspects){
return (function (p1__18687_SHARP_){return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part,p1__18687_SHARP_));
});})(part_keys,specified_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.vector,non_specified_aspects),cljs.core.map.call(null,((function (part_keys,specified_aspects,non_specified_aspects){
return (function (p1__18688_SHARP_){return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__18688_SHARP_));
});})(part_keys,specified_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.next_note_fn = (function next_note_fn(part,start_time){var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);var time_pos = cljs.core.atom.call(null,(start_time + ((function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.looperscript.looperscript.params));if(cljs.core.truth_(temp__4124__auto__))
{var bpm = temp__4124__auto__;return bpm;
} else
{return (1);
}
})() * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));return ((function (iterators,time_pos){
return (function() {
var G__18705 = null;
var G__18705__0 = (function (){while(true){
var res_v = (function (){var iter__4379__auto__ = ((function (iterators,time_pos){
return (function iter__18697(s__18698){return (new cljs.core.LazySeq(null,((function (iterators,time_pos){
return (function (){var s__18698__$1 = s__18698;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18698__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__18704 = cljs.core.first.call(null,xs__4624__auto__);var k = cljs.core.nth.call(null,vec__18704,(0),null);var iter = cljs.core.nth.call(null,vec__18704,(1),null);var iterys__4375__auto__ = ((function (s__18698__$1,vec__18704,k,iter,xs__4624__auto__,temp__4126__auto__,iterators,time_pos){
return (function iter__18699(s__18700){return (new cljs.core.LazySeq(null,((function (s__18698__$1,vec__18704,k,iter,xs__4624__auto__,temp__4126__auto__,iterators,time_pos){
return (function (){var s__18700__$1 = s__18700;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__18700__$1);if(temp__4126__auto____$1)
{var s__18700__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18700__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__18700__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__18702 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__18701 = (0);while(true){
if((i__18701 < size__4378__auto__))
{var aspect = cljs.core._nth.call(null,c__4377__auto__,i__18701);cljs.core.chunk_append.call(null,b__18702,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null)], null));
{
var G__18706 = (i__18701 + (1));
i__18701 = G__18706;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18702),iter__18699.call(null,cljs.core.chunk_rest.call(null,s__18700__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18702),null);
}
} else
{var aspect = cljs.core.first.call(null,s__18700__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null)], null),iter__18699.call(null,cljs.core.rest.call(null,s__18700__$2)));
}
} else
{return null;
}
break;
}
});})(s__18698__$1,vec__18704,k,iter,xs__4624__auto__,temp__4126__auto__,iterators,time_pos))
,null,null));
});})(s__18698__$1,vec__18704,k,iter,xs__4624__auto__,temp__4126__auto__,iterators,time_pos))
;var fs__4376__auto__ = cljs.core.seq.call(null,iterys__4375__auto__.call(null,k));if(fs__4376__auto__)
{return cljs.core.concat.call(null,fs__4376__auto__,iter__18697.call(null,cljs.core.rest.call(null,s__18698__$1)));
} else
{{
var G__18707 = cljs.core.rest.call(null,s__18698__$1);
s__18698__$1 = G__18707;
continue;
}
}
} else
{return null;
}
break;
}
});})(iterators,time_pos))
,null,null));
});})(iterators,time_pos))
;return iter__4379__auto__.call(null,iterators);
})();var res = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,res_v);var res__$1 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"start-time","start-time",814801386),cljs.core.deref.call(null,time_pos)),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core._STAR_,(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.looperscript.looperscript.params));if(cljs.core.truth_(temp__4124__auto__))
{var bpm = temp__4124__auto__;return bpm;
} else
{return (1);
}
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time+","time+",2008858809)], null),cljs.core._STAR_,(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.looperscript.looperscript.params));if(cljs.core.truth_(temp__4124__auto__))
{var bpm = temp__4124__auto__;return bpm;
} else
{return (1);
}
})());if(((0) >= res__$1.call(null,new cljs.core.Keyword(null,"skip","skip",602715391))))
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
var G__18705__1 = (function (command){if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))
{return cljs.core.deref.call(null,time_pos);
} else
{return null;
}
});
G__18705 = function(command){
switch(arguments.length){
case 0:
return G__18705__0.call(this);
case 1:
return G__18705__1.call(this,command);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18705.cljs$core$IFn$_invoke$arity$0 = G__18705__0;
G__18705.cljs$core$IFn$_invoke$arity$1 = G__18705__1;
return G__18705;
})()
;})(iterators,time_pos))
});
cljs.looperscript.looperscript.schedule_note = (function schedule_note(n){var sound = new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n);var rate = new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(n);var start_time = (new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n) + new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));var start_time__$1 = (function (){var temp__4124__auto__ = cljs.core.get.call(null,cljs.looperscript.audio.sample_lags,sound);if(cljs.core.truth_(temp__4124__auto__))
{var l = temp__4124__auto__;return (start_time - (l / rate));
} else
{return start_time;
}
})();if((start_time__$1 >= cljs.looperscript.looperscript.now.call(null)))
{var sound__$1 = ((typeof sound === 'number')?cljs.looperscript.looperscript.note__GT_freq.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"ratio","ratio",-926560044))))?cljs.looperscript.looperscript.ratio__GT_freq.call(null,cljs.core.second.call(null,sound)):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"hz","hz",-1450739349))))?cljs.core.second.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"drum-code","drum-code",2081814302))))?cljs.looperscript.audio.drum_codes.call(null,cljs.core.second.call(null,sound)):sound
))));var dur = (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(n) - new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));var vol = new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(n);var filter = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(n);var pan = new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(n);var synth = new cljs.core.Keyword(null,"synth","synth",-862700847).cljs$core$IFn$_invoke$arity$1(n);var overtones = new cljs.core.Keyword(null,"overtones","overtones",-2065460921).cljs$core$IFn$_invoke$arity$1(n);var node = ((typeof sound__$1 === 'number')?(cljs.core.truth_(filter)?cljs.looperscript.audio.play_filtered_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,filter,synth,overtones):cljs.looperscript.audio.play_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,synth,overtones)):cljs.looperscript.audio.play_sound.call(null,sound__$1,start_time__$1,vol,rate));var seq__18712 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));var chunk__18713 = null;var count__18714 = (0);var i__18715 = (0);while(true){
if((i__18715 < count__18714))
{var i = cljs.core._nth.call(null,chunk__18713,i__18715);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__18716 = seq__18712;
var G__18717 = chunk__18713;
var G__18718 = count__18714;
var G__18719 = (i__18715 + (1));
seq__18712 = G__18716;
chunk__18713 = G__18717;
count__18714 = G__18718;
i__18715 = G__18719;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18712);if(temp__4126__auto__)
{var seq__18712__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18712__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__18712__$1);{
var G__18720 = cljs.core.chunk_rest.call(null,seq__18712__$1);
var G__18721 = c__4410__auto__;
var G__18722 = cljs.core.count.call(null,c__4410__auto__);
var G__18723 = (0);
seq__18712 = G__18720;
chunk__18713 = G__18721;
count__18714 = G__18722;
i__18715 = G__18723;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__18712__$1);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__18724 = cljs.core.next.call(null,seq__18712__$1);
var G__18725 = null;
var G__18726 = (0);
var G__18727 = (0);
seq__18712 = G__18724;
chunk__18713 = G__18725;
count__18714 = G__18726;
i__18715 = G__18727;
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
var end_time = ((cljs.looperscript.looperscript.now.call(null) + cljs.looperscript.looperscript.queue_time_extra) + cljs.looperscript.looperscript.queue_time_interval);var seq__18732 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));var chunk__18733 = null;var count__18734 = (0);var i__18735 = (0);while(true){
if((i__18735 < count__18734))
{var n_n_fn = cljs.core._nth.call(null,chunk__18733,i__18735);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_18736 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_18736)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_18736);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_18736) < end_time))
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
var G__18737 = seq__18732;
var G__18738 = chunk__18733;
var G__18739 = count__18734;
var G__18740 = (i__18735 + (1));
seq__18732 = G__18737;
chunk__18733 = G__18738;
count__18734 = G__18739;
i__18735 = G__18740;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18732);if(temp__4126__auto__)
{var seq__18732__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18732__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__18732__$1);{
var G__18741 = cljs.core.chunk_rest.call(null,seq__18732__$1);
var G__18742 = c__4410__auto__;
var G__18743 = cljs.core.count.call(null,c__4410__auto__);
var G__18744 = (0);
seq__18732 = G__18741;
chunk__18733 = G__18742;
count__18734 = G__18743;
i__18735 = G__18744;
continue;
}
} else
{var n_n_fn = cljs.core.first.call(null,seq__18732__$1);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_18745 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_18745)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_18745);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_18745) < end_time))
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
var G__18746 = cljs.core.next.call(null,seq__18732__$1);
var G__18747 = null;
var G__18748 = (0);
var G__18749 = (0);
seq__18732 = G__18746;
chunk__18733 = G__18747;
count__18734 = G__18748;
i__18735 = G__18749;
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
{var new_nnfns = cljs.core.vec.call(null,(function (){var iter__4379__auto__ = (function iter__18758(s__18759){return (new cljs.core.LazySeq(null,(function (){var s__18759__$1 = s__18759;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18759__$1);if(temp__4126__auto__)
{var s__18759__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18759__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__18759__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__18761 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__18760 = (0);while(true){
if((i__18760 < size__4378__auto__))
{var p = cljs.core._nth.call(null,c__4377__auto__,i__18760);cljs.core.chunk_append.call(null,b__18761,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_start_time)));
{
var G__18766 = (i__18760 + (1));
i__18760 = G__18766;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18761),iter__18758.call(null,cljs.core.chunk_rest.call(null,s__18759__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18761),null);
}
} else
{var p = cljs.core.first.call(null,s__18759__$2);return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_start_time)),iter__18758.call(null,cljs.core.rest.call(null,s__18759__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.vals.call(null,parts));
})());var seq__18762_18767 = cljs.core.seq.call(null,new_nnfns);var chunk__18763_18768 = null;var count__18764_18769 = (0);var i__18765_18770 = (0);while(true){
if((i__18765_18770 < count__18764_18769))
{var nnfn_18771 = cljs.core._nth.call(null,chunk__18763_18768,i__18765_18770);while(true){
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
if((cljs.looperscript.looperscript.now.call(null) > nnfn_18771.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))))
{nnfn_18771.call(null);
{
continue;
}
} else
{}
break;
}
{
var G__18772 = seq__18762_18767;
var G__18773 = chunk__18763_18768;
var G__18774 = count__18764_18769;
var G__18775 = (i__18765_18770 + (1));
seq__18762_18767 = G__18772;
chunk__18763_18768 = G__18773;
count__18764_18769 = G__18774;
i__18765_18770 = G__18775;
continue;
}
} else
{var temp__4126__auto___18776 = cljs.core.seq.call(null,seq__18762_18767);if(temp__4126__auto___18776)
{var seq__18762_18777__$1 = temp__4126__auto___18776;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18762_18777__$1))
{var c__4410__auto___18778 = cljs.core.chunk_first.call(null,seq__18762_18777__$1);{
var G__18779 = cljs.core.chunk_rest.call(null,seq__18762_18777__$1);
var G__18780 = c__4410__auto___18778;
var G__18781 = cljs.core.count.call(null,c__4410__auto___18778);
var G__18782 = (0);
seq__18762_18767 = G__18779;
chunk__18763_18768 = G__18780;
count__18764_18769 = G__18781;
i__18765_18770 = G__18782;
continue;
}
} else
{var nnfn_18783 = cljs.core.first.call(null,seq__18762_18777__$1);while(true){
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
if((cljs.looperscript.looperscript.now.call(null) > nnfn_18783.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))))
{nnfn_18783.call(null);
{
continue;
}
} else
{}
break;
}
{
var G__18784 = cljs.core.next.call(null,seq__18762_18777__$1);
var G__18785 = null;
var G__18786 = (0);
var G__18787 = (0);
seq__18762_18767 = G__18784;
chunk__18763_18768 = G__18785;
count__18764_18769 = G__18786;
i__18765_18770 = G__18787;
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
cljs.looperscript.looperscript.kill_sounds = (function kill_sounds(){var seq__18792_18796 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));var chunk__18793_18797 = null;var count__18794_18798 = (0);var i__18795_18799 = (0);while(true){
if((i__18795_18799 < count__18794_18798))
{var n_18800 = cljs.core._nth.call(null,chunk__18793_18797,i__18795_18799);n_18800.stop();
{
var G__18801 = seq__18792_18796;
var G__18802 = chunk__18793_18797;
var G__18803 = count__18794_18798;
var G__18804 = (i__18795_18799 + (1));
seq__18792_18796 = G__18801;
chunk__18793_18797 = G__18802;
count__18794_18798 = G__18803;
i__18795_18799 = G__18804;
continue;
}
} else
{var temp__4126__auto___18805 = cljs.core.seq.call(null,seq__18792_18796);if(temp__4126__auto___18805)
{var seq__18792_18806__$1 = temp__4126__auto___18805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18792_18806__$1))
{var c__4410__auto___18807 = cljs.core.chunk_first.call(null,seq__18792_18806__$1);{
var G__18808 = cljs.core.chunk_rest.call(null,seq__18792_18806__$1);
var G__18809 = c__4410__auto___18807;
var G__18810 = cljs.core.count.call(null,c__4410__auto___18807);
var G__18811 = (0);
seq__18792_18796 = G__18808;
chunk__18793_18797 = G__18809;
count__18794_18798 = G__18810;
i__18795_18799 = G__18811;
continue;
}
} else
{var n_18812 = cljs.core.first.call(null,seq__18792_18806__$1);n_18812.stop();
{
var G__18813 = cljs.core.next.call(null,seq__18792_18806__$1);
var G__18814 = null;
var G__18815 = (0);
var G__18816 = (0);
seq__18792_18796 = G__18813;
chunk__18793_18797 = G__18814;
count__18794_18798 = G__18815;
i__18795_18799 = G__18816;
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
cljs.looperscript.looperscript.bind_key = (function bind_key(name,windows_key,mac_key,f){return (editor["commands"]).addCommand((function (){var obj18822 = {"name":name,"bindKey":(function (){var obj18824 = {"win":windows_key,"mac":mac_key};return obj18824;
})(),"exec":f};return obj18822;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-u","Command-U",cljs.looperscript.looperscript.update);
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);
