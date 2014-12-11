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
cljs.looperscript.looperscript.aspect_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drum-code","drum-code",2081814302),"r"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sine"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)]);
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
{var _ = cljs.looperscript.logging.log.call(null,new cljs.core.Keyword(null,"tree","tree",-196312028),parts,"\n");var parse_time = (cljs.looperscript.looperscript.now.call(null) - start_time);var parts__$1 = cljs.looperscript.interpret.looper_transform.call(null,parts);var ___$1 = cljs.looperscript.logging.log.call(null,new cljs.core.Keyword(null,"transformed","transformed",1969289512),parts__$1,"\n");var transform_time = (cljs.looperscript.looperscript.now.call(null) - start_time);var vec__27240 = cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,parts__$1);var new_params = cljs.core.nth.call(null,vec__27240,(0),null);var parts__$2 = cljs.core.nth.call(null,vec__27240,(1),null);cljs.looperscript.logging.log.call(null,"Parse time: (",parse_time,") ",transform_time);
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
cljs.looperscript.looperscript.kill_sounds = (function kill_sounds(){var seq__27245_27249 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));var chunk__27246_27250 = null;var count__27247_27251 = (0);var i__27248_27252 = (0);while(true){
if((i__27248_27252 < count__27247_27251))
{var n_27253 = cljs.core._nth.call(null,chunk__27246_27250,i__27248_27252);n_27253.stop();
{
var G__27254 = seq__27245_27249;
var G__27255 = chunk__27246_27250;
var G__27256 = count__27247_27251;
var G__27257 = (i__27248_27252 + (1));
seq__27245_27249 = G__27254;
chunk__27246_27250 = G__27255;
count__27247_27251 = G__27256;
i__27248_27252 = G__27257;
continue;
}
} else
{var temp__4126__auto___27258 = cljs.core.seq.call(null,seq__27245_27249);if(temp__4126__auto___27258)
{var seq__27245_27259__$1 = temp__4126__auto___27258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27245_27259__$1))
{var c__4410__auto___27260 = cljs.core.chunk_first.call(null,seq__27245_27259__$1);{
var G__27261 = cljs.core.chunk_rest.call(null,seq__27245_27259__$1);
var G__27262 = c__4410__auto___27260;
var G__27263 = cljs.core.count.call(null,c__4410__auto___27260);
var G__27264 = (0);
seq__27245_27249 = G__27261;
chunk__27246_27250 = G__27262;
count__27247_27251 = G__27263;
i__27248_27252 = G__27264;
continue;
}
} else
{var n_27265 = cljs.core.first.call(null,seq__27245_27259__$1);n_27265.stop();
{
var G__27266 = cljs.core.next.call(null,seq__27245_27259__$1);
var G__27267 = null;
var G__27268 = (0);
var G__27269 = (0);
seq__27245_27249 = G__27266;
chunk__27246_27250 = G__27267;
count__27247_27251 = G__27268;
i__27248_27252 = G__27269;
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
cljs.looperscript.looperscript.aspects = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"synth","synth",-862700847),new cljs.core.Keyword(null,"overtones","overtones",-2065460921),new cljs.core.Keyword(null,"time+","time+",2008858809),new cljs.core.Keyword(null,"mute","mute",1151223646),new cljs.core.Keyword(null,"skip","skip",602715391)], null);
cljs.looperscript.looperscript.make_iterators = (function make_iterators(part){var part_keys = cljs.core.remove.call(null,(function (p1__27270_SHARP_){return cljs.core._EQ_.call(null,p1__27270_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
}),cljs.core.keys.call(null,part));var specified_aspects = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,part_keys);var non_specified_aspects = cljs.core.remove.call(null,((function (part_keys,specified_aspects){
return (function (p1__27271_SHARP_){return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__27271_SHARP_);
});})(part_keys,specified_aspects))
,cljs.looperscript.looperscript.aspects);return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part_keys,specified_aspects,non_specified_aspects){
return (function (p1__27272_SHARP_){return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part,p1__27272_SHARP_));
});})(part_keys,specified_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.vector,non_specified_aspects),cljs.core.map.call(null,((function (part_keys,specified_aspects,non_specified_aspects){
return (function (p1__27273_SHARP_){return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__27273_SHARP_));
});})(part_keys,specified_aspects,non_specified_aspects))
,non_specified_aspects)));
});
cljs.looperscript.looperscript.next_note_fn = (function next_note_fn(part,start_time){var iterators = cljs.looperscript.looperscript.make_iterators.call(null,part);var time_pos = cljs.core.atom.call(null,(start_time + ((function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.looperscript.looperscript.params));if(cljs.core.truth_(temp__4124__auto__))
{var bpm = temp__4124__auto__;return bpm;
} else
{return (1);
}
})() * cljs.core.first.call(null,cljs.core.get.call(null,part,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));return ((function (iterators,time_pos){
return (function() {
var G__27290 = null;
var G__27290__0 = (function (){while(true){
var res_v = (function (){var iter__4379__auto__ = ((function (iterators,time_pos){
return (function iter__27282(s__27283){return (new cljs.core.LazySeq(null,((function (iterators,time_pos){
return (function (){var s__27283__$1 = s__27283;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27283__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__27289 = cljs.core.first.call(null,xs__4624__auto__);var k = cljs.core.nth.call(null,vec__27289,(0),null);var iter = cljs.core.nth.call(null,vec__27289,(1),null);var iterys__4375__auto__ = ((function (s__27283__$1,vec__27289,k,iter,xs__4624__auto__,temp__4126__auto__,iterators,time_pos){
return (function iter__27284(s__27285){return (new cljs.core.LazySeq(null,((function (s__27283__$1,vec__27289,k,iter,xs__4624__auto__,temp__4126__auto__,iterators,time_pos){
return (function (){var s__27285__$1 = s__27285;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27285__$1);if(temp__4126__auto____$1)
{var s__27285__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__27285__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__27285__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__27287 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__27286 = (0);while(true){
if((i__27286 < size__4378__auto__))
{var aspect = cljs.core._nth.call(null,c__4377__auto__,i__27286);cljs.core.chunk_append.call(null,b__27287,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null)], null));
{
var G__27291 = (i__27286 + (1));
i__27286 = G__27291;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27287),iter__27284.call(null,cljs.core.chunk_rest.call(null,s__27285__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27287),null);
}
} else
{var aspect = cljs.core.first.call(null,s__27285__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null)], null),iter__27284.call(null,cljs.core.rest.call(null,s__27285__$2)));
}
} else
{return null;
}
break;
}
});})(s__27283__$1,vec__27289,k,iter,xs__4624__auto__,temp__4126__auto__,iterators,time_pos))
,null,null));
});})(s__27283__$1,vec__27289,k,iter,xs__4624__auto__,temp__4126__auto__,iterators,time_pos))
;var fs__4376__auto__ = cljs.core.seq.call(null,iterys__4375__auto__.call(null,k));if(fs__4376__auto__)
{return cljs.core.concat.call(null,fs__4376__auto__,iter__27282.call(null,cljs.core.rest.call(null,s__27283__$1)));
} else
{{
var G__27292 = cljs.core.rest.call(null,s__27283__$1);
s__27283__$1 = G__27292;
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
var G__27290__1 = (function (command){if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))
{return cljs.core.deref.call(null,time_pos);
} else
{return null;
}
});
G__27290 = function(command){
switch(arguments.length){
case 0:
return G__27290__0.call(this);
case 1:
return G__27290__1.call(this,command);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27290.cljs$core$IFn$_invoke$arity$0 = G__27290__0;
G__27290.cljs$core$IFn$_invoke$arity$1 = G__27290__1;
return G__27290;
})()
;})(iterators,time_pos))
});
cljs.looperscript.looperscript.schedule_note = (function schedule_note(n){var sound = new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n);var sound__$1 = ((typeof sound === 'number')?cljs.looperscript.looperscript.note__GT_freq.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"ratio","ratio",-926560044))))?cljs.looperscript.looperscript.ratio__GT_freq.call(null,cljs.core.second.call(null,sound)):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"hz","hz",-1450739349))))?cljs.core.second.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"drum-code","drum-code",2081814302))))?cljs.looperscript.audio.drum_codes.call(null,cljs.core.second.call(null,sound)):sound
))));var dur = (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(n) - new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));var vol = new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(n);var filter = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(n);var start_time = (new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n) + new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));var pan = new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(n);var rate = new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(n);var synth = new cljs.core.Keyword(null,"synth","synth",-862700847).cljs$core$IFn$_invoke$arity$1(n);var overtones = new cljs.core.Keyword(null,"overtones","overtones",-2065460921).cljs$core$IFn$_invoke$arity$1(n);var start_time__$1 = (function (){var temp__4124__auto__ = cljs.core.get.call(null,cljs.looperscript.audio.sample_lags,sound__$1);if(cljs.core.truth_(temp__4124__auto__))
{var l = temp__4124__auto__;return (start_time - (l / rate));
} else
{return start_time;
}
})();var node = ((typeof sound__$1 === 'number')?(cljs.core.truth_(filter)?cljs.looperscript.audio.play_filtered_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,filter,synth,overtones):cljs.looperscript.audio.play_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,synth,overtones)):cljs.looperscript.audio.play_sound.call(null,sound__$1,start_time__$1,vol,rate));var seq__27297 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));var chunk__27298 = null;var count__27299 = (0);var i__27300 = (0);while(true){
if((i__27300 < count__27299))
{var i = cljs.core._nth.call(null,chunk__27298,i__27300);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__27301 = seq__27297;
var G__27302 = chunk__27298;
var G__27303 = count__27299;
var G__27304 = (i__27300 + (1));
seq__27297 = G__27301;
chunk__27298 = G__27302;
count__27299 = G__27303;
i__27300 = G__27304;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27297);if(temp__4126__auto__)
{var seq__27297__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27297__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__27297__$1);{
var G__27305 = cljs.core.chunk_rest.call(null,seq__27297__$1);
var G__27306 = c__4410__auto__;
var G__27307 = cljs.core.count.call(null,c__4410__auto__);
var G__27308 = (0);
seq__27297 = G__27305;
chunk__27298 = G__27306;
count__27299 = G__27307;
i__27300 = G__27308;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__27297__$1);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__27309 = cljs.core.next.call(null,seq__27297__$1);
var G__27310 = null;
var G__27311 = (0);
var G__27312 = (0);
seq__27297 = G__27309;
chunk__27298 = G__27310;
count__27299 = G__27311;
i__27300 = G__27312;
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
log_time.cljs$lang$applyTo = (function (arglist__27313){
var f = cljs.core.first(arglist__27313);
var args = cljs.core.rest(arglist__27313);
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
return (function iter__27322(s__27323){return (new cljs.core.LazySeq(null,((function (time_pos,parts){
return (function (){var s__27323__$1 = s__27323;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27323__$1);if(temp__4126__auto__)
{var s__27323__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27323__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__27323__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__27325 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__27324 = (0);while(true){
if((i__27324 < size__4378__auto__))
{var p = cljs.core._nth.call(null,c__4377__auto__,i__27324);cljs.core.chunk_append.call(null,b__27325,cljs.looperscript.looperscript.next_note_fn.call(null,p,time_pos));
{
var G__27330 = (i__27324 + (1));
i__27324 = G__27330;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27325),iter__27322.call(null,cljs.core.chunk_rest.call(null,s__27323__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27325),null);
}
} else
{var p = cljs.core.first.call(null,s__27323__$2);return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,time_pos),iter__27322.call(null,cljs.core.rest.call(null,s__27323__$2)));
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
return (function (){var end_time = ((cljs.looperscript.looperscript.now.call(null) + cljs.looperscript.looperscript.queue_time_extra) + cljs.looperscript.looperscript.queue_time_interval);var seq__27326 = cljs.core.seq.call(null,next_note_fns);var chunk__27327 = null;var count__27328 = (0);var i__27329 = (0);while(true){
if((i__27329 < count__27328))
{var n_n_fn = cljs.core._nth.call(null,chunk__27327,i__27329);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_27331 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_27331)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_27331);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_27331) < end_time))
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
var G__27332 = seq__27326;
var G__27333 = chunk__27327;
var G__27334 = count__27328;
var G__27335 = (i__27329 + (1));
seq__27326 = G__27332;
chunk__27327 = G__27333;
count__27328 = G__27334;
i__27329 = G__27335;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__27326);if(temp__4126__auto__)
{var seq__27326__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27326__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__27326__$1);{
var G__27336 = cljs.core.chunk_rest.call(null,seq__27326__$1);
var G__27337 = c__4410__auto__;
var G__27338 = cljs.core.count.call(null,c__4410__auto__);
var G__27339 = (0);
seq__27326 = G__27336;
chunk__27327 = G__27337;
count__27328 = G__27338;
i__27329 = G__27339;
continue;
}
} else
{var n_n_fn = cljs.core.first.call(null,seq__27326__$1);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_27340 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_27340)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_27340);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_27340) < end_time))
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
var G__27341 = cljs.core.next.call(null,seq__27326__$1);
var G__27342 = null;
var G__27343 = (0);
var G__27344 = (0);
seq__27326 = G__27341;
chunk__27327 = G__27342;
count__27328 = G__27343;
i__27329 = G__27344;
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
