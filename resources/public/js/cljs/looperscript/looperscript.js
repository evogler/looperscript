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
log.cljs$lang$applyTo = (function (arglist__8447){
var args = cljs.core.seq(arglist__8447);
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
log__GT_.cljs$lang$applyTo = (function (arglist__8448){
var args = cljs.core.seq(arglist__8448);
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
{var _ = cljs.looperscript.looperscript.log.call(null,new cljs.core.Keyword(null,"tree","tree",-196312028),parts,"\n");var parse_time = (cljs.looperscript.looperscript.now.call(null) - start_time);var parts__$1 = cljs.looperscript.interpret.looper_transform.call(null,parts);var ___$1 = cljs.looperscript.looperscript.log.call(null,new cljs.core.Keyword(null,"transformed","transformed",1969289512),parts__$1,"\n");var transform_time = (cljs.looperscript.looperscript.now.call(null) - start_time);var vec__8450 = cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,parts__$1);var new_params = cljs.core.nth.call(null,vec__8450,(0),null);var parts__$2 = cljs.core.nth.call(null,vec__8450,(1),null);cljs.looperscript.looperscript.log.call(null,"Parse time: (",parse_time,") ",transform_time);
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
cljs.looperscript.looperscript.next_note_fn = (function next_note_fn(part,start_time){var elements = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)], null);var _ = (function (){var seq__8458 = cljs.core.seq.call(null,elements);var chunk__8459 = null;var count__8460 = (0);var i__8461 = (0);while(true){
if((i__8461 < count__8460))
{var e = cljs.core._nth.call(null,chunk__8459,i__8461);{
var G__8462 = seq__8458;
var G__8463 = chunk__8459;
var G__8464 = count__8460;
var G__8465 = (i__8461 + (1));
seq__8458 = G__8462;
chunk__8459 = G__8463;
count__8460 = G__8464;
i__8461 = G__8465;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8458);if(temp__4126__auto__)
{var seq__8458__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8458__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__8458__$1);{
var G__8466 = cljs.core.chunk_rest.call(null,seq__8458__$1);
var G__8467 = c__4410__auto__;
var G__8468 = cljs.core.count.call(null,c__4410__auto__);
var G__8469 = (0);
seq__8458 = G__8466;
chunk__8459 = G__8467;
count__8460 = G__8468;
i__8461 = G__8469;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__8458__$1);{
var G__8470 = cljs.core.next.call(null,seq__8458__$1);
var G__8471 = null;
var G__8472 = (0);
var G__8473 = (0);
seq__8458 = G__8470;
chunk__8459 = G__8471;
count__8460 = G__8472;
i__8461 = G__8473;
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
return (function (p1__8451_SHARP_){var or__3640__auto__ = cljs.core.get.call(null,part,p1__8451_SHARP_);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.looperscript.looperscript.part_defaults,p1__8451_SHARP_);
}
});})(elements,_))
,elements));var lengths = cljs.core.zipmap.call(null,elements,cljs.core.map.call(null,((function (elements,_,element_vecs){
return (function (p1__8452_SHARP_){return cljs.core.count.call(null,element_vecs.call(null,p1__8452_SHARP_));
});})(elements,_,element_vecs))
,elements));var pos = cljs.core.atom.call(null,(0));var time_pos = cljs.core.atom.call(null,(start_time + ((function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.looperscript.looperscript.params));if(cljs.core.truth_(temp__4124__auto__))
{var bpm = temp__4124__auto__;return bpm;
} else
{return (1);
}
})() * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));return ((function (elements,_,element_vecs,lengths,pos,time_pos){
return (function() {
var G__8474 = null;
var G__8474__0 = (function (){while(true){
var res = cljs.core.zipmap.call(null,elements,cljs.core.map.call(null,((function (elements,_,element_vecs,lengths,pos,time_pos){
return (function (p1__8453_SHARP_){return cljs.looperscript.looperscript.dethunk.call(null,cljs.core.nth.call(null,cljs.core.get.call(null,element_vecs,p1__8453_SHARP_),cljs.core.mod.call(null,cljs.core.deref.call(null,pos),cljs.core.get.call(null,lengths,p1__8453_SHARP_))));
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
var G__8474__1 = (function (command){if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))
{return cljs.core.deref.call(null,time_pos);
} else
{return null;
}
});
G__8474 = function(command){
switch(arguments.length){
case 0:
return G__8474__0.call(this);
case 1:
return G__8474__1.call(this,command);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8474.cljs$core$IFn$_invoke$arity$0 = G__8474__0;
G__8474.cljs$core$IFn$_invoke$arity$1 = G__8474__1;
return G__8474;
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
cljs.looperscript.looperscript.kill_sounds = (function kill_sounds(){var seq__8479_8483 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));var chunk__8480_8484 = null;var count__8481_8485 = (0);var i__8482_8486 = (0);while(true){
if((i__8482_8486 < count__8481_8485))
{var n_8487 = cljs.core._nth.call(null,chunk__8480_8484,i__8482_8486);n_8487.stop();
{
var G__8488 = seq__8479_8483;
var G__8489 = chunk__8480_8484;
var G__8490 = count__8481_8485;
var G__8491 = (i__8482_8486 + (1));
seq__8479_8483 = G__8488;
chunk__8480_8484 = G__8489;
count__8481_8485 = G__8490;
i__8482_8486 = G__8491;
continue;
}
} else
{var temp__4126__auto___8492 = cljs.core.seq.call(null,seq__8479_8483);if(temp__4126__auto___8492)
{var seq__8479_8493__$1 = temp__4126__auto___8492;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8479_8493__$1))
{var c__4410__auto___8494 = cljs.core.chunk_first.call(null,seq__8479_8493__$1);{
var G__8495 = cljs.core.chunk_rest.call(null,seq__8479_8493__$1);
var G__8496 = c__4410__auto___8494;
var G__8497 = cljs.core.count.call(null,c__4410__auto___8494);
var G__8498 = (0);
seq__8479_8483 = G__8495;
chunk__8480_8484 = G__8496;
count__8481_8485 = G__8497;
i__8482_8486 = G__8498;
continue;
}
} else
{var n_8499 = cljs.core.first.call(null,seq__8479_8493__$1);n_8499.stop();
{
var G__8500 = cljs.core.next.call(null,seq__8479_8493__$1);
var G__8501 = null;
var G__8502 = (0);
var G__8503 = (0);
seq__8479_8483 = G__8500;
chunk__8480_8484 = G__8501;
count__8481_8485 = G__8502;
i__8482_8486 = G__8503;
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
})();var node = ((typeof sound__$1 === 'number')?(cljs.core.truth_(filter)?cljs.looperscript.audio.play_filtered_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,filter,synth,overtones):cljs.looperscript.audio.play_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,synth,overtones)):cljs.looperscript.audio.play_sound.call(null,sound__$1,start_time__$1,vol,rate));var seq__8508 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));var chunk__8509 = null;var count__8510 = (0);var i__8511 = (0);while(true){
if((i__8511 < count__8510))
{var i = cljs.core._nth.call(null,chunk__8509,i__8511);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__8512 = seq__8508;
var G__8513 = chunk__8509;
var G__8514 = count__8510;
var G__8515 = (i__8511 + (1));
seq__8508 = G__8512;
chunk__8509 = G__8513;
count__8510 = G__8514;
i__8511 = G__8515;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8508);if(temp__4126__auto__)
{var seq__8508__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8508__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__8508__$1);{
var G__8516 = cljs.core.chunk_rest.call(null,seq__8508__$1);
var G__8517 = c__4410__auto__;
var G__8518 = cljs.core.count.call(null,c__4410__auto__);
var G__8519 = (0);
seq__8508 = G__8516;
chunk__8509 = G__8517;
count__8510 = G__8518;
i__8511 = G__8519;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__8508__$1);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__8520 = cljs.core.next.call(null,seq__8508__$1);
var G__8521 = null;
var G__8522 = (0);
var G__8523 = (0);
seq__8508 = G__8520;
chunk__8509 = G__8521;
count__8510 = G__8522;
i__8511 = G__8523;
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
log_time.cljs$lang$applyTo = (function (arglist__8524){
var f = cljs.core.first(arglist__8524);
var args = cljs.core.rest(arglist__8524);
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
return (function iter__8533(s__8534){return (new cljs.core.LazySeq(null,((function (time_pos,parts){
return (function (){var s__8534__$1 = s__8534;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8534__$1);if(temp__4126__auto__)
{var s__8534__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8534__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__8534__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__8536 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__8535 = (0);while(true){
if((i__8535 < size__4378__auto__))
{var p = cljs.core._nth.call(null,c__4377__auto__,i__8535);cljs.core.chunk_append.call(null,b__8536,cljs.looperscript.looperscript.next_note_fn.call(null,p,time_pos));
{
var G__8541 = (i__8535 + (1));
i__8535 = G__8541;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8536),iter__8533.call(null,cljs.core.chunk_rest.call(null,s__8534__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8536),null);
}
} else
{var p = cljs.core.first.call(null,s__8534__$2);return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,time_pos),iter__8533.call(null,cljs.core.rest.call(null,s__8534__$2)));
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
return (function (){var end_time = ((cljs.looperscript.looperscript.now.call(null) + cljs.looperscript.looperscript.queue_time_extra) + cljs.looperscript.looperscript.queue_time_interval);var seq__8537 = cljs.core.seq.call(null,next_note_fns);var chunk__8538 = null;var count__8539 = (0);var i__8540 = (0);while(true){
if((i__8540 < count__8539))
{var n_n_fn = cljs.core._nth.call(null,chunk__8538,i__8540);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_8542 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_8542)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_8542);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_8542) < end_time))
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
var G__8543 = seq__8537;
var G__8544 = chunk__8538;
var G__8545 = count__8539;
var G__8546 = (i__8540 + (1));
seq__8537 = G__8543;
chunk__8538 = G__8544;
count__8539 = G__8545;
i__8540 = G__8546;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8537);if(temp__4126__auto__)
{var seq__8537__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8537__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__8537__$1);{
var G__8547 = cljs.core.chunk_rest.call(null,seq__8537__$1);
var G__8548 = c__4410__auto__;
var G__8549 = cljs.core.count.call(null,c__4410__auto__);
var G__8550 = (0);
seq__8537 = G__8547;
chunk__8538 = G__8548;
count__8539 = G__8549;
i__8540 = G__8550;
continue;
}
} else
{var n_n_fn = cljs.core.first.call(null,seq__8537__$1);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_8551 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_8551)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_8551);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_8551) < end_time))
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
var G__8552 = cljs.core.next.call(null,seq__8537__$1);
var G__8553 = null;
var G__8554 = (0);
var G__8555 = (0);
seq__8537 = G__8552;
chunk__8538 = G__8553;
count__8539 = G__8554;
i__8540 = G__8555;
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
