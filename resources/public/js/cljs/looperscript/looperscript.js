// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.looperscript');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.looperscript.audio');
goog.require('cljs.looperscript.address_bar');
goog.require('domina');
goog.require('cljs.looperscript.interpret');
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
/**
* @param {...*} var_args
*/
cljs.looperscript.looperscript.log = (function() { 
var log__delegate = function (args){var s = cljs.core.apply.call(null,cljs.core.str,cljs.core.conj.call(null,cljs.core.vec.call(null,args),"\n"));domina.append_BANG_.call(null,domina.by_id.call(null,"console"),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+"<p />"));
return console.log(s);
};
var log = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__7937){
var args = cljs.core.seq(arglist__7937);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* @param {...*} var_args
*/
cljs.looperscript.looperscript.log__GT_ = (function() { 
var log__GT___delegate = function (args){cljs.core.apply.call(null,cljs.looperscript.looperscript.log,args);
return cljs.core.first.call(null,args);
};
var log__GT_ = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__GT___delegate.call(this,args);};
log__GT_.cljs$lang$maxFixedArity = 0;
log__GT_.cljs$lang$applyTo = (function (arglist__7938){
var args = cljs.core.seq(arglist__7938);
return log__GT___delegate(args);
});
log__GT_.cljs$core$IFn$_invoke$arity$variadic = log__GT___delegate;
return log__GT_;
})()
;
cljs.looperscript.looperscript.ctx = cljs.looperscript.audio.ctx;
cljs.looperscript.looperscript.note_queue = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.looperscript.looperscript.playing_interval = cljs.core.atom.call(null,null);
cljs.looperscript.looperscript.queue_time_interval = (1);
cljs.looperscript.looperscript.queue_time_extra = 1.5;
cljs.looperscript.looperscript.params = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.looperscript.sounding_notes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.looperscript.now = (function now(){return (cljs.looperscript.audio.ctx["currentTime"]);
});
cljs.looperscript.looperscript.note__GT_freq = (function note__GT_freq(n){return (261.625565 * Math.pow.call(null,(2),(n / (12))));
});
cljs.looperscript.looperscript.ratio__GT_freq = (function ratio__GT_freq(r){return (261.625565 * r);
});
cljs.looperscript.looperscript.part_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drum-code","drum-code",2081814302),"r"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sine"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)]);
cljs.looperscript.looperscript.get_looper_text = (function get_looper_text(){return cljs.looperscript.interpret.remove_comments.call(null,domina.value.call(null,domina.by_id.call(null,"looper-text")));
});
cljs.looperscript.looperscript.get_parts = (function get_parts(){var parts_text = cljs.looperscript.looperscript.get_looper_text.call(null);var start_time = cljs.looperscript.looperscript.now.call(null);var parts = cljs.looperscript.interpret._looper_parse.call(null,parts_text);if(instaparse.core.failure_QMARK_.call(null,parts))
{return parts;
} else
{var _ = cljs.looperscript.looperscript.log.call(null,new cljs.core.Keyword(null,"tree","tree",-196312028),parts,"\n");var parse_time = (cljs.looperscript.looperscript.now.call(null) - start_time);var parts__$1 = cljs.looperscript.interpret.looper_transform.call(null,parts);var ___$1 = cljs.looperscript.looperscript.log.call(null,new cljs.core.Keyword(null,"transformed","transformed",1969289512),parts__$1,"\n");var transform_time = (cljs.looperscript.looperscript.now.call(null) - start_time);var vec__7940 = cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,parts__$1);var new_params = cljs.core.nth.call(null,vec__7940,(0),null);var parts__$2 = cljs.core.nth.call(null,vec__7940,(1),null);cljs.looperscript.looperscript.log.call(null,"Parse time: (",parse_time,") ",transform_time);
cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.params,new_params);
return parts__$2;
}
});
cljs.looperscript.looperscript.dethunk = (function dethunk(x){if(cljs.core.fn_QMARK_.call(null,x))
{return x.call(null);
} else
{return x;
}
});
cljs.looperscript.looperscript.next_note_fn = (function next_note_fn(part,start_time){var elements = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)], null);var _ = (function (){var seq__7948 = cljs.core.seq.call(null,elements);var chunk__7949 = null;var count__7950 = (0);var i__7951 = (0);while(true){
if((i__7951 < count__7950))
{var e = cljs.core._nth.call(null,chunk__7949,i__7951);{
var G__7952 = seq__7948;
var G__7953 = chunk__7949;
var G__7954 = count__7950;
var G__7955 = (i__7951 + (1));
seq__7948 = G__7952;
chunk__7949 = G__7953;
count__7950 = G__7954;
i__7951 = G__7955;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7948);if(temp__4126__auto__)
{var seq__7948__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7948__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__7948__$1);{
var G__7956 = cljs.core.chunk_rest.call(null,seq__7948__$1);
var G__7957 = c__4410__auto__;
var G__7958 = cljs.core.count.call(null,c__4410__auto__);
var G__7959 = (0);
seq__7948 = G__7956;
chunk__7949 = G__7957;
count__7950 = G__7958;
i__7951 = G__7959;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__7948__$1);{
var G__7960 = cljs.core.next.call(null,seq__7948__$1);
var G__7961 = null;
var G__7962 = (0);
var G__7963 = (0);
seq__7948 = G__7960;
chunk__7949 = G__7961;
count__7950 = G__7962;
i__7951 = G__7963;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var element_vecs = cljs.core.zipmap.call(null,elements,cljs.core.map.call(null,((function (elements,_){
return (function (p1__7941_SHARP_){var or__3640__auto__ = cljs.core.get.call(null,part,p1__7941_SHARP_);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.looperscript.looperscript.part_defaults,p1__7941_SHARP_);
}
});})(elements,_))
,elements));var lengths = cljs.core.zipmap.call(null,elements,cljs.core.map.call(null,((function (elements,_,element_vecs){
return (function (p1__7942_SHARP_){return cljs.core.count.call(null,element_vecs.call(null,p1__7942_SHARP_));
});})(elements,_,element_vecs))
,elements));var pos = cljs.core.atom.call(null,(0));var time_pos = cljs.core.atom.call(null,(start_time + ((function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.looperscript.looperscript.params));if(cljs.core.truth_(temp__4124__auto__))
{var bpm = temp__4124__auto__;return bpm;
} else
{return (1);
}
})() * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));return ((function (elements,_,element_vecs,lengths,pos,time_pos){
return (function() {
var G__7964 = null;
var G__7964__0 = (function (){while(true){
var res = cljs.core.zipmap.call(null,elements,cljs.core.map.call(null,((function (elements,_,element_vecs,lengths,pos,time_pos){
return (function (p1__7943_SHARP_){return cljs.looperscript.looperscript.dethunk.call(null,cljs.core.nth.call(null,cljs.core.get.call(null,element_vecs,p1__7943_SHARP_),cljs.core.mod.call(null,cljs.core.deref.call(null,pos),cljs.core.get.call(null,lengths,p1__7943_SHARP_))));
});})(elements,_,element_vecs,lengths,pos,time_pos))
,elements));var res__$1 = cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"start-time","start-time",814801386),cljs.core.deref.call(null,time_pos)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core._STAR_,(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.looperscript.looperscript.params));if(cljs.core.truth_(temp__4124__auto__))
{var bpm = temp__4124__auto__;return bpm;
} else
{return (1);
}
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time+","time+",2008858809)], null),cljs.core._STAR_,(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.looperscript.looperscript.params));if(cljs.core.truth_(temp__4124__auto__))
{var bpm = temp__4124__auto__;return bpm;
} else
{return (1);
}
})());cljs.core.swap_BANG_.call(null,pos,cljs.core.inc);
if(((0) >= res__$1.call(null,new cljs.core.Keyword(null,"skip","skip",602715391))))
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
var G__7964__1 = (function (command){if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))
{return cljs.core.deref.call(null,time_pos);
} else
{return null;
}
});
G__7964 = function(command){
switch(arguments.length){
case 0:
return G__7964__0.call(this);
case 1:
return G__7964__1.call(this,command);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7964.cljs$core$IFn$_invoke$arity$0 = G__7964__0;
G__7964.cljs$core$IFn$_invoke$arity$1 = G__7964__1;
return G__7964;
})()
;})(elements,_,element_vecs,lengths,pos,time_pos))
});
cljs.looperscript.looperscript.kill_playing_interval = (function kill_playing_interval(){if(cljs.core.truth_(cljs.core.deref.call(null,cljs.looperscript.looperscript.playing_interval)))
{clearInterval(cljs.core.deref.call(null,cljs.looperscript.looperscript.playing_interval));
return cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.playing_interval,null);
} else
{return null;
}
});
cljs.looperscript.looperscript.kill_sounds = (function kill_sounds(){var seq__7969_7973 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));var chunk__7970_7974 = null;var count__7971_7975 = (0);var i__7972_7976 = (0);while(true){
if((i__7972_7976 < count__7971_7975))
{var n_7977 = cljs.core._nth.call(null,chunk__7970_7974,i__7972_7976);n_7977.stop();
{
var G__7978 = seq__7969_7973;
var G__7979 = chunk__7970_7974;
var G__7980 = count__7971_7975;
var G__7981 = (i__7972_7976 + (1));
seq__7969_7973 = G__7978;
chunk__7970_7974 = G__7979;
count__7971_7975 = G__7980;
i__7972_7976 = G__7981;
continue;
}
} else
{var temp__4126__auto___7982 = cljs.core.seq.call(null,seq__7969_7973);if(temp__4126__auto___7982)
{var seq__7969_7983__$1 = temp__4126__auto___7982;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7969_7983__$1))
{var c__4410__auto___7984 = cljs.core.chunk_first.call(null,seq__7969_7983__$1);{
var G__7985 = cljs.core.chunk_rest.call(null,seq__7969_7983__$1);
var G__7986 = c__4410__auto___7984;
var G__7987 = cljs.core.count.call(null,c__4410__auto___7984);
var G__7988 = (0);
seq__7969_7973 = G__7985;
chunk__7970_7974 = G__7986;
count__7971_7975 = G__7987;
i__7972_7976 = G__7988;
continue;
}
} else
{var n_7989 = cljs.core.first.call(null,seq__7969_7983__$1);n_7989.stop();
{
var G__7990 = cljs.core.next.call(null,seq__7969_7983__$1);
var G__7991 = null;
var G__7992 = (0);
var G__7993 = (0);
seq__7969_7973 = G__7990;
chunk__7970_7974 = G__7991;
count__7971_7975 = G__7992;
i__7972_7976 = G__7993;
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
cljs.looperscript.looperscript.sounding_counter = cljs.core.atom.call(null,(0));
cljs.looperscript.looperscript.add_note_to_sounding_notes = (function add_note_to_sounding_notes(n,node){var id = cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_counter,cljs.core.inc);cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.assoc,id,node);
return (node["onended"] = ((function (id){
return (function (){return cljs.core.swap_BANG_.call(null,cljs.looperscript.looperscript.sounding_notes,cljs.core.dissoc,id);
});})(id))
);
});
cljs.looperscript.looperscript.schedule_note = (function schedule_note(n){var sound = new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n);var sound__$1 = ((typeof sound === 'number')?cljs.looperscript.looperscript.note__GT_freq.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"ratio","ratio",-926560044))))?cljs.looperscript.looperscript.ratio__GT_freq.call(null,cljs.core.second.call(null,sound)):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"drum-code","drum-code",2081814302))))?cljs.looperscript.audio.drum_codes.call(null,cljs.core.second.call(null,sound)):sound
)));var dur = (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(n) - new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));var vol = new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(n);var filter = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(n);var start_time = (new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n) + new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));var pan = new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(n);var rate = new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(n);var synth = new cljs.core.Keyword(null,"synth","synth",-862700847).cljs$core$IFn$_invoke$arity$1(n);var overtones = new cljs.core.Keyword(null,"overtones","overtones",-2065460921).cljs$core$IFn$_invoke$arity$1(n);var start_time__$1 = (function (){var temp__4124__auto__ = cljs.core.get.call(null,cljs.looperscript.audio.sample_lags,sound__$1);if(cljs.core.truth_(temp__4124__auto__))
{var l = temp__4124__auto__;return (start_time - (l / rate));
} else
{return start_time;
}
})();var node = ((typeof sound__$1 === 'number')?(cljs.core.truth_(filter)?cljs.looperscript.audio.play_filtered_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,filter,synth,overtones):cljs.looperscript.audio.play_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,synth,overtones)):cljs.looperscript.audio.play_sound.call(null,sound__$1,start_time__$1,vol,rate));var seq__7998 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));var chunk__7999 = null;var count__8000 = (0);var i__8001 = (0);while(true){
if((i__8001 < count__8000))
{var i = cljs.core._nth.call(null,chunk__7999,i__8001);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__8002 = seq__7998;
var G__8003 = chunk__7999;
var G__8004 = count__8000;
var G__8005 = (i__8001 + (1));
seq__7998 = G__8002;
chunk__7999 = G__8003;
count__8000 = G__8004;
i__8001 = G__8005;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7998);if(temp__4126__auto__)
{var seq__7998__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7998__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__7998__$1);{
var G__8006 = cljs.core.chunk_rest.call(null,seq__7998__$1);
var G__8007 = c__4410__auto__;
var G__8008 = cljs.core.count.call(null,c__4410__auto__);
var G__8009 = (0);
seq__7998 = G__8006;
chunk__7999 = G__8007;
count__8000 = G__8008;
i__8001 = G__8009;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__7998__$1);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__8010 = cljs.core.next.call(null,seq__7998__$1);
var G__8011 = null;
var G__8012 = (0);
var G__8013 = (0);
seq__7998 = G__8010;
chunk__7999 = G__8011;
count__8000 = G__8012;
i__8001 = G__8013;
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
var log_time__delegate = function (f,args){var start_time = cljs.looperscript.looperscript.now.call(null);var res = f.call(null);var run_time = (cljs.looperscript.looperscript.now.call(null) - start_time);cljs.looperscript.looperscript.log.call(null,run_time,args);
return res;
};
var log_time = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_time__delegate.call(this,f,args);};
log_time.cljs$lang$maxFixedArity = 1;
log_time.cljs$lang$applyTo = (function (arglist__8014){
var f = cljs.core.first(arglist__8014);
var args = cljs.core.rest(arglist__8014);
return log_time__delegate(f,args);
});
log_time.cljs$core$IFn$_invoke$arity$variadic = log_time__delegate;
return log_time;
})()
;
cljs.looperscript.looperscript.play = (function play(){cljs.looperscript.looperscript.stop.call(null);
var parts = cljs.looperscript.looperscript.get_parts.call(null);if(instaparse.core.failure_QMARK_.call(null,parts))
{return cljs.looperscript.looperscript.log.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,parts))));
} else
{var time_pos = (0.05 + cljs.looperscript.looperscript.now.call(null));var next_note_fns = (function (){var iter__4379__auto__ = ((function (time_pos,parts){
return (function iter__8023(s__8024){return (new cljs.core.LazySeq(null,((function (time_pos,parts){
return (function (){var s__8024__$1 = s__8024;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8024__$1);if(temp__4126__auto__)
{var s__8024__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8024__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__8024__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__8026 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__8025 = (0);while(true){
if((i__8025 < size__4378__auto__))
{var p = cljs.core._nth.call(null,c__4377__auto__,i__8025);cljs.core.chunk_append.call(null,b__8026,cljs.looperscript.looperscript.next_note_fn.call(null,p,time_pos));
{
var G__8031 = (i__8025 + (1));
i__8025 = G__8031;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8026),iter__8023.call(null,cljs.core.chunk_rest.call(null,s__8024__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8026),null);
}
} else
{var p = cljs.core.first.call(null,s__8024__$2);return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,time_pos),iter__8023.call(null,cljs.core.rest.call(null,s__8024__$2)));
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
return (function (){var end_time = ((cljs.looperscript.looperscript.now.call(null) + cljs.looperscript.looperscript.queue_time_extra) + cljs.looperscript.looperscript.queue_time_interval);var seq__8027 = cljs.core.seq.call(null,next_note_fns);var chunk__8028 = null;var count__8029 = (0);var i__8030 = (0);while(true){
if((i__8030 < count__8029))
{var n_n_fn = cljs.core._nth.call(null,chunk__8028,i__8030);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_8032 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_8032)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_8032);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_8032) < end_time))
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
var G__8033 = seq__8027;
var G__8034 = chunk__8028;
var G__8035 = count__8029;
var G__8036 = (i__8030 + (1));
seq__8027 = G__8033;
chunk__8028 = G__8034;
count__8029 = G__8035;
i__8030 = G__8036;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8027);if(temp__4126__auto__)
{var seq__8027__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8027__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__8027__$1);{
var G__8037 = cljs.core.chunk_rest.call(null,seq__8027__$1);
var G__8038 = c__4410__auto__;
var G__8039 = cljs.core.count.call(null,c__4410__auto__);
var G__8040 = (0);
seq__8027 = G__8037;
chunk__8028 = G__8038;
count__8029 = G__8039;
i__8030 = G__8040;
continue;
}
} else
{var n_n_fn = cljs.core.first.call(null,seq__8027__$1);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_8041 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_8041)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_8041);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_8041) < end_time))
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
var G__8042 = cljs.core.next.call(null,seq__8027__$1);
var G__8043 = null;
var G__8044 = (0);
var G__8045 = (0);
seq__8027 = G__8042;
chunk__8028 = G__8043;
count__8029 = G__8044;
i__8030 = G__8045;
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
