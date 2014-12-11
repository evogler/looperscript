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
cljs.looperscript.looperscript.playing_interval = cljs.core.atom.call(null,null);
cljs.looperscript.looperscript.queue_time_interval = 0.1;
cljs.looperscript.looperscript.queue_time_extra = 0.1;
cljs.looperscript.looperscript.params = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.looperscript.sounding_notes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.looperscript.part_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drum-code","drum-code",2081814302),"r"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sine"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)]);
cljs.looperscript.looperscript.now = (function now(){return (cljs.looperscript.audio.ctx["currentTime"]);
});
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
cljs.looperscript.looperscript.get_looper_text = (function get_looper_text(){return cljs.looperscript.interpret.remove_comments.call(null,domina.value.call(null,domina.by_id.call(null,"looper-text")));
});
cljs.looperscript.looperscript.get_parts = (function get_parts(){var parts_text = cljs.looperscript.looperscript.get_looper_text.call(null);var start_time = cljs.looperscript.looperscript.now.call(null);var parts = cljs.looperscript.interpret.looper_parse.call(null,parts_text);if(instaparse.core.failure_QMARK_.call(null,parts))
{return parts;
} else
{var _ = cljs.looperscript.logging.log.call(null,new cljs.core.Keyword(null,"tree","tree",-196312028),parts,"\n");var parse_time = (cljs.looperscript.looperscript.now.call(null) - start_time);var parts__$1 = cljs.looperscript.interpret.looper_transform.call(null,parts);var ___$1 = cljs.looperscript.logging.log.call(null,new cljs.core.Keyword(null,"transformed","transformed",1969289512),parts__$1,"\n");var transform_time = (cljs.looperscript.looperscript.now.call(null) - start_time);var vec__23947 = cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,parts__$1);var new_params = cljs.core.nth.call(null,vec__23947,(0),null);var parts__$2 = cljs.core.nth.call(null,vec__23947,(1),null);cljs.looperscript.logging.log.call(null,"Parse time: (",parse_time,") ",transform_time);
cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.params,new_params);
return parts__$2;
}
});
cljs.looperscript.looperscript.kill_playing_interval = (function kill_playing_interval(){if(cljs.core.truth_(cljs.core.deref.call(null,cljs.looperscript.looperscript.playing_interval)))
{clearInterval(cljs.core.deref.call(null,cljs.looperscript.looperscript.playing_interval));
return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing_interval,null);
} else
{return null;
}
});
cljs.looperscript.looperscript.kill_sounds = (function kill_sounds(){var seq__23952_23956 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));var chunk__23953_23957 = null;var count__23954_23958 = (0);var i__23955_23959 = (0);while(true){
if((i__23955_23959 < count__23954_23958))
{var n_23960 = cljs.core._nth.call(null,chunk__23953_23957,i__23955_23959);n_23960.stop();
{
var G__23961 = seq__23952_23956;
var G__23962 = chunk__23953_23957;
var G__23963 = count__23954_23958;
var G__23964 = (i__23955_23959 + (1));
seq__23952_23956 = G__23961;
chunk__23953_23957 = G__23962;
count__23954_23958 = G__23963;
i__23955_23959 = G__23964;
continue;
}
} else
{var temp__4126__auto___23965 = cljs.core.seq.call(null,seq__23952_23956);if(temp__4126__auto___23965)
{var seq__23952_23966__$1 = temp__4126__auto___23965;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23952_23966__$1))
{var c__4410__auto___23967 = cljs.core.chunk_first.call(null,seq__23952_23966__$1);{
var G__23968 = cljs.core.chunk_rest.call(null,seq__23952_23966__$1);
var G__23969 = c__4410__auto___23967;
var G__23970 = cljs.core.count.call(null,c__4410__auto___23967);
var G__23971 = (0);
seq__23952_23956 = G__23968;
chunk__23953_23957 = G__23969;
count__23954_23958 = G__23970;
i__23955_23959 = G__23971;
continue;
}
} else
{var n_23972 = cljs.core.first.call(null,seq__23952_23966__$1);n_23972.stop();
{
var G__23973 = cljs.core.next.call(null,seq__23952_23966__$1);
var G__23974 = null;
var G__23975 = (0);
var G__23976 = (0);
seq__23952_23956 = G__23973;
chunk__23953_23957 = G__23974;
count__23954_23958 = G__23975;
i__23955_23959 = G__23976;
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
cljs.looperscript.looperscript.stop = (function stop(){cljs.looperscript.looperscript.kill_playing_interval.call(null);
return cljs.looperscript.looperscript.kill_sounds.call(null);
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
cljs.looperscript.looperscript.next_note_fn = (function next_note_fn(part,start_time){var elements = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)], null);var iterators = cljs.core.zipmap.call(null,elements,cljs.core.map.call(null,((function (elements){
return (function (p1__23977_SHARP_){return cljs.looperscript.iterator.iterator.call(null,(function (){var or__3640__auto__ = cljs.core.get.call(null,part,p1__23977_SHARP_);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.looperscript.looperscript.part_defaults,p1__23977_SHARP_);
}
})());
});})(elements))
,elements));var time_pos = cljs.core.atom.call(null,(start_time + ((function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.looperscript.looperscript.params));if(cljs.core.truth_(temp__4124__auto__))
{var bpm = temp__4124__auto__;return bpm;
} else
{return (1);
}
})() * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));return ((function (elements,iterators,time_pos){
return (function() {
var G__23979 = null;
var G__23979__0 = (function (){while(true){
var res = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.zipmap.call(null,elements,cljs.core.map.call(null,((function (elements,iterators,time_pos){
return (function (p1__23978_SHARP_){return cljs.core.get.call(null,iterators,p1__23978_SHARP_).call(null);
});})(elements,iterators,time_pos))
,elements)),new cljs.core.Keyword(null,"start-time","start-time",814801386),cljs.core.deref.call(null,time_pos)),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core._STAR_,(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.looperscript.looperscript.params));if(cljs.core.truth_(temp__4124__auto__))
{var bpm = temp__4124__auto__;return bpm;
} else
{return (1);
}
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time+","time+",2008858809)], null),cljs.core._STAR_,(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.looperscript.looperscript.params));if(cljs.core.truth_(temp__4124__auto__))
{var bpm = temp__4124__auto__;return bpm;
} else
{return (1);
}
})());if(((0) >= res.call(null,new cljs.core.Keyword(null,"skip","skip",602715391))))
{{
continue;
}
} else
{cljs.core.swap_BANG_.call(null,time_pos,cljs.core._PLUS_,res.call(null,new cljs.core.Keyword(null,"time","time",1385887882)));
return res;
}
break;
}
});
var G__23979__1 = (function (command){if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))
{return cljs.core.deref.call(null,time_pos);
} else
{return null;
}
});
G__23979 = function(command){
switch(arguments.length){
case 0:
return G__23979__0.call(this);
case 1:
return G__23979__1.call(this,command);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23979.cljs$core$IFn$_invoke$arity$0 = G__23979__0;
G__23979.cljs$core$IFn$_invoke$arity$1 = G__23979__1;
return G__23979;
})()
;})(elements,iterators,time_pos))
});
cljs.looperscript.looperscript.schedule_note = (function schedule_note(n){var sound = new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n);var sound__$1 = ((typeof sound === 'number')?cljs.looperscript.looperscript.note__GT_freq.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"ratio","ratio",-926560044))))?cljs.looperscript.looperscript.ratio__GT_freq.call(null,cljs.core.second.call(null,sound)):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"hz","hz",-1450739349))))?cljs.core.second.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"drum-code","drum-code",2081814302))))?cljs.looperscript.audio.drum_codes.call(null,cljs.core.second.call(null,sound)):sound
))));var dur = (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(n) - new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));var vol = new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(n);var filter = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(n);var start_time = (new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n) + new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));var pan = new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(n);var rate = new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(n);var synth = new cljs.core.Keyword(null,"synth","synth",-862700847).cljs$core$IFn$_invoke$arity$1(n);var overtones = new cljs.core.Keyword(null,"overtones","overtones",-2065460921).cljs$core$IFn$_invoke$arity$1(n);var start_time__$1 = (function (){var temp__4124__auto__ = cljs.core.get.call(null,cljs.looperscript.audio.sample_lags,sound__$1);if(cljs.core.truth_(temp__4124__auto__))
{var l = temp__4124__auto__;return (start_time - (l / rate));
} else
{return start_time;
}
})();var node = ((typeof sound__$1 === 'number')?(cljs.core.truth_(filter)?cljs.looperscript.audio.play_filtered_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,filter,synth,overtones):cljs.looperscript.audio.play_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,synth,overtones)):cljs.looperscript.audio.play_sound.call(null,sound__$1,start_time__$1,vol,rate));var seq__23984 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));var chunk__23985 = null;var count__23986 = (0);var i__23987 = (0);while(true){
if((i__23987 < count__23986))
{var i = cljs.core._nth.call(null,chunk__23985,i__23987);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__23988 = seq__23984;
var G__23989 = chunk__23985;
var G__23990 = count__23986;
var G__23991 = (i__23987 + (1));
seq__23984 = G__23988;
chunk__23985 = G__23989;
count__23986 = G__23990;
i__23987 = G__23991;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__23984);if(temp__4126__auto__)
{var seq__23984__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23984__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__23984__$1);{
var G__23992 = cljs.core.chunk_rest.call(null,seq__23984__$1);
var G__23993 = c__4410__auto__;
var G__23994 = cljs.core.count.call(null,c__4410__auto__);
var G__23995 = (0);
seq__23984 = G__23992;
chunk__23985 = G__23993;
count__23986 = G__23994;
i__23987 = G__23995;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__23984__$1);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__23996 = cljs.core.next.call(null,seq__23984__$1);
var G__23997 = null;
var G__23998 = (0);
var G__23999 = (0);
seq__23984 = G__23996;
chunk__23985 = G__23997;
count__23986 = G__23998;
i__23987 = G__23999;
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
log_time.cljs$lang$applyTo = (function (arglist__24000){
var f = cljs.core.first(arglist__24000);
var args = cljs.core.rest(arglist__24000);
return log_time__delegate(f,args);
});
log_time.cljs$core$IFn$_invoke$arity$variadic = log_time__delegate;
return log_time;
})()
;
cljs.looperscript.looperscript.play = (function play(){cljs.looperscript.looperscript.stop.call(null);
var parts = cljs.looperscript.looperscript.get_parts.call(null);if(instaparse.core.failure_QMARK_.call(null,parts))
{return cljs.looperscript.logging.log.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,parts))));
} else
{var time_pos = (0.05 + cljs.looperscript.looperscript.now.call(null));var next_note_fns = (function (){var iter__4379__auto__ = ((function (time_pos,parts){
return (function iter__24009(s__24010){return (new cljs.core.LazySeq(null,((function (time_pos,parts){
return (function (){var s__24010__$1 = s__24010;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24010__$1);if(temp__4126__auto__)
{var s__24010__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24010__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__24010__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__24012 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__24011 = (0);while(true){
if((i__24011 < size__4378__auto__))
{var p = cljs.core._nth.call(null,c__4377__auto__,i__24011);cljs.core.chunk_append.call(null,b__24012,cljs.looperscript.looperscript.next_note_fn.call(null,p,time_pos));
{
var G__24017 = (i__24011 + (1));
i__24011 = G__24017;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24012),iter__24009.call(null,cljs.core.chunk_rest.call(null,s__24010__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24012),null);
}
} else
{var p = cljs.core.first.call(null,s__24010__$2);return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,time_pos),iter__24009.call(null,cljs.core.rest.call(null,s__24010__$2)));
}
} else
{return null;
}
break;
}
});})(time_pos,parts))
,null,null));
});})(time_pos,parts))
;return iter__4379__auto__.call(null,parts);
})();var queue_notes = ((function (time_pos,next_note_fns,parts){
return (function (){var end_time = ((cljs.looperscript.looperscript.now.call(null) + cljs.looperscript.looperscript.queue_time_extra) + cljs.looperscript.looperscript.queue_time_interval);var seq__24013 = cljs.core.seq.call(null,next_note_fns);var chunk__24014 = null;var count__24015 = (0);var i__24016 = (0);while(true){
if((i__24016 < count__24015))
{var n_n_fn = cljs.core._nth.call(null,chunk__24014,i__24016);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_24018 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_24018)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_24018);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_24018) < end_time))
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
var G__24019 = seq__24013;
var G__24020 = chunk__24014;
var G__24021 = count__24015;
var G__24022 = (i__24016 + (1));
seq__24013 = G__24019;
chunk__24014 = G__24020;
count__24015 = G__24021;
i__24016 = G__24022;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24013);if(temp__4126__auto__)
{var seq__24013__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24013__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__24013__$1);{
var G__24023 = cljs.core.chunk_rest.call(null,seq__24013__$1);
var G__24024 = c__4410__auto__;
var G__24025 = cljs.core.count.call(null,c__4410__auto__);
var G__24026 = (0);
seq__24013 = G__24023;
chunk__24014 = G__24024;
count__24015 = G__24025;
i__24016 = G__24026;
continue;
}
} else
{var n_n_fn = cljs.core.first.call(null,seq__24013__$1);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_24027 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_24027)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_24027);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_24027) < end_time))
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
var G__24028 = cljs.core.next.call(null,seq__24013__$1);
var G__24029 = null;
var G__24030 = (0);
var G__24031 = (0);
seq__24013 = G__24028;
chunk__24014 = G__24029;
count__24015 = G__24030;
i__24016 = G__24031;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(time_pos,next_note_fns,parts))
;queue_notes.call(null);
return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing_interval,setInterval(queue_notes,(cljs.looperscript.looperscript.queue_time_interval * (1000))));
}
});
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"play"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){return cljs.looperscript.looperscript.play.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"stop"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){return cljs.looperscript.looperscript.stop.call(null);
}));
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"link"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){return cljs.looperscript.address_bar.text__GT_link.call(null);
}));
cljs.looperscript.audio.load_some_drums.call(null);
