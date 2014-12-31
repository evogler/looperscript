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
log_time.cljs$lang$applyTo = (function (arglist__26762){
var f = cljs.core.first(arglist__26762);
var args = cljs.core.rest(arglist__26762);
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
cljs.looperscript.looperscript.make_iterators = (function make_iterators(part){var part_keys = cljs.core.remove.call(null,(function (p1__26763_SHARP_){return cljs.core._EQ_.call(null,p1__26763_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177));
}),cljs.core.keys.call(null,part));var specified_aspects = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY,part_keys);var non_specified_aspects = cljs.core.remove.call(null,((function (part_keys,specified_aspects){
return (function (p1__26764_SHARP_){return cljs.core.contains_QMARK_.call(null,specified_aspects,p1__26764_SHARP_);
});})(part_keys,specified_aspects))
,cljs.looperscript.looperscript.aspects);return cljs.core.into.call(null,cljs.core.zipmap.call(null,part_keys,cljs.core.map.call(null,((function (part_keys,specified_aspects,non_specified_aspects){
return (function (p1__26765_SHARP_){return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,part,p1__26765_SHARP_));
});})(part_keys,specified_aspects,non_specified_aspects))
,part_keys)),cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.vector,non_specified_aspects),cljs.core.map.call(null,((function (part_keys,specified_aspects,non_specified_aspects){
return (function (p1__26766_SHARP_){return cljs.looperscript.iterator.iterator.call(null,cljs.core.get.call(null,cljs.looperscript.looperscript.aspect_defaults,p1__26766_SHARP_));
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
var G__26783 = null;
var G__26783__0 = (function (){while(true){
var res_v = (function (){var iter__4379__auto__ = ((function (iterators,time_pos){
return (function iter__26775(s__26776){return (new cljs.core.LazySeq(null,((function (iterators,time_pos){
return (function (){var s__26776__$1 = s__26776;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26776__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__26782 = cljs.core.first.call(null,xs__4624__auto__);var k = cljs.core.nth.call(null,vec__26782,(0),null);var iter = cljs.core.nth.call(null,vec__26782,(1),null);var iterys__4375__auto__ = ((function (s__26776__$1,vec__26782,k,iter,xs__4624__auto__,temp__4126__auto__,iterators,time_pos){
return (function iter__26777(s__26778){return (new cljs.core.LazySeq(null,((function (s__26776__$1,vec__26782,k,iter,xs__4624__auto__,temp__4126__auto__,iterators,time_pos){
return (function (){var s__26778__$1 = s__26778;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__26778__$1);if(temp__4126__auto____$1)
{var s__26778__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__26778__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__26778__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__26780 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__26779 = (0);while(true){
if((i__26779 < size__4378__auto__))
{var aspect = cljs.core._nth.call(null,c__4377__auto__,i__26779);cljs.core.chunk_append.call(null,b__26780,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null)], null));
{
var G__26784 = (i__26779 + (1));
i__26779 = G__26784;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26780),iter__26777.call(null,cljs.core.chunk_rest.call(null,s__26778__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26780),null);
}
} else
{var aspect = cljs.core.first.call(null,s__26778__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [aspect,iter.call(null)], null),iter__26777.call(null,cljs.core.rest.call(null,s__26778__$2)));
}
} else
{return null;
}
break;
}
});})(s__26776__$1,vec__26782,k,iter,xs__4624__auto__,temp__4126__auto__,iterators,time_pos))
,null,null));
});})(s__26776__$1,vec__26782,k,iter,xs__4624__auto__,temp__4126__auto__,iterators,time_pos))
;var fs__4376__auto__ = cljs.core.seq.call(null,iterys__4375__auto__.call(null,k));if(fs__4376__auto__)
{return cljs.core.concat.call(null,fs__4376__auto__,iter__26775.call(null,cljs.core.rest.call(null,s__26776__$1)));
} else
{{
var G__26785 = cljs.core.rest.call(null,s__26776__$1);
s__26776__$1 = G__26785;
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
var G__26783__1 = (function (command){if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))
{return cljs.core.deref.call(null,time_pos);
} else
{return null;
}
});
G__26783 = function(command){
switch(arguments.length){
case 0:
return G__26783__0.call(this);
case 1:
return G__26783__1.call(this,command);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26783.cljs$core$IFn$_invoke$arity$0 = G__26783__0;
G__26783.cljs$core$IFn$_invoke$arity$1 = G__26783__1;
return G__26783;
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
))));var dur = (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(n) - new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));var vol = new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(n);var filter = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(n);var pan = new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(n);var synth = new cljs.core.Keyword(null,"synth","synth",-862700847).cljs$core$IFn$_invoke$arity$1(n);var overtones = new cljs.core.Keyword(null,"overtones","overtones",-2065460921).cljs$core$IFn$_invoke$arity$1(n);var node = ((typeof sound__$1 === 'number')?(cljs.core.truth_(filter)?cljs.looperscript.audio.play_filtered_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,filter,synth,overtones):cljs.looperscript.audio.play_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,synth,overtones)):cljs.looperscript.audio.play_sound.call(null,sound__$1,start_time__$1,vol,rate));var seq__26790 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));var chunk__26791 = null;var count__26792 = (0);var i__26793 = (0);while(true){
if((i__26793 < count__26792))
{var i = cljs.core._nth.call(null,chunk__26791,i__26793);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__26794 = seq__26790;
var G__26795 = chunk__26791;
var G__26796 = count__26792;
var G__26797 = (i__26793 + (1));
seq__26790 = G__26794;
chunk__26791 = G__26795;
count__26792 = G__26796;
i__26793 = G__26797;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26790);if(temp__4126__auto__)
{var seq__26790__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26790__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__26790__$1);{
var G__26798 = cljs.core.chunk_rest.call(null,seq__26790__$1);
var G__26799 = c__4410__auto__;
var G__26800 = cljs.core.count.call(null,c__4410__auto__);
var G__26801 = (0);
seq__26790 = G__26798;
chunk__26791 = G__26799;
count__26792 = G__26800;
i__26793 = G__26801;
continue;
}
} else
{var i = cljs.core.first.call(null,seq__26790__$1);cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.rand.call(null)], null),i);
{
var G__26802 = cljs.core.next.call(null,seq__26790__$1);
var G__26803 = null;
var G__26804 = (0);
var G__26805 = (0);
seq__26790 = G__26802;
chunk__26791 = G__26803;
count__26792 = G__26804;
i__26793 = G__26805;
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
var end_time = ((cljs.looperscript.looperscript.now.call(null) + cljs.looperscript.looperscript.queue_time_extra) + cljs.looperscript.looperscript.queue_time_interval);var seq__26810 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_next_note_fns));var chunk__26811 = null;var count__26812 = (0);var i__26813 = (0);while(true){
if((i__26813 < count__26812))
{var n_n_fn = cljs.core._nth.call(null,chunk__26811,i__26813);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_26814 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_26814)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_26814);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_26814) < end_time))
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
var G__26815 = seq__26810;
var G__26816 = chunk__26811;
var G__26817 = count__26812;
var G__26818 = (i__26813 + (1));
seq__26810 = G__26815;
chunk__26811 = G__26816;
count__26812 = G__26817;
i__26813 = G__26818;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26810);if(temp__4126__auto__)
{var seq__26810__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26810__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__26810__$1);{
var G__26819 = cljs.core.chunk_rest.call(null,seq__26810__$1);
var G__26820 = c__4410__auto__;
var G__26821 = cljs.core.count.call(null,c__4410__auto__);
var G__26822 = (0);
seq__26810 = G__26819;
chunk__26811 = G__26820;
count__26812 = G__26821;
i__26813 = G__26822;
continue;
}
} else
{var n_n_fn = cljs.core.first.call(null,seq__26810__$1);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_26823 = n_n_fn.call(null);if(((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_26823)))
{cljs.looperscript.looperscript.schedule_note.call(null,next_note_26823);
} else
{}
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_26823) < end_time))
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
var G__26824 = cljs.core.next.call(null,seq__26810__$1);
var G__26825 = null;
var G__26826 = (0);
var G__26827 = (0);
seq__26810 = G__26824;
chunk__26811 = G__26825;
count__26812 = G__26826;
i__26813 = G__26827;
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
{var new_nnfns = cljs.core.vec.call(null,(function (){var iter__4379__auto__ = (function iter__26836(s__26837){return (new cljs.core.LazySeq(null,(function (){var s__26837__$1 = s__26837;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26837__$1);if(temp__4126__auto__)
{var s__26837__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26837__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__26837__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__26839 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__26838 = (0);while(true){
if((i__26838 < size__4378__auto__))
{var p = cljs.core._nth.call(null,c__4377__auto__,i__26838);cljs.core.chunk_append.call(null,b__26839,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_start_time)));
{
var G__26844 = (i__26838 + (1));
i__26838 = G__26844;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26839),iter__26836.call(null,cljs.core.chunk_rest.call(null,s__26837__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26839),null);
}
} else
{var p = cljs.core.first.call(null,s__26837__$2);return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,cljs.core.deref.call(null,cljs.looperscript.looperscript.current_start_time)),iter__26836.call(null,cljs.core.rest.call(null,s__26837__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.vals.call(null,parts));
})());var seq__26840_26845 = cljs.core.seq.call(null,new_nnfns);var chunk__26841_26846 = null;var count__26842_26847 = (0);var i__26843_26848 = (0);while(true){
if((i__26843_26848 < count__26842_26847))
{var nnfn_26849 = cljs.core._nth.call(null,chunk__26841_26846,i__26843_26848);while(true){
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
if((cljs.looperscript.looperscript.now.call(null) > nnfn_26849.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))))
{nnfn_26849.call(null);
{
continue;
}
} else
{}
break;
}
{
var G__26850 = seq__26840_26845;
var G__26851 = chunk__26841_26846;
var G__26852 = count__26842_26847;
var G__26853 = (i__26843_26848 + (1));
seq__26840_26845 = G__26850;
chunk__26841_26846 = G__26851;
count__26842_26847 = G__26852;
i__26843_26848 = G__26853;
continue;
}
} else
{var temp__4126__auto___26854 = cljs.core.seq.call(null,seq__26840_26845);if(temp__4126__auto___26854)
{var seq__26840_26855__$1 = temp__4126__auto___26854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26840_26855__$1))
{var c__4410__auto___26856 = cljs.core.chunk_first.call(null,seq__26840_26855__$1);{
var G__26857 = cljs.core.chunk_rest.call(null,seq__26840_26855__$1);
var G__26858 = c__4410__auto___26856;
var G__26859 = cljs.core.count.call(null,c__4410__auto___26856);
var G__26860 = (0);
seq__26840_26845 = G__26857;
chunk__26841_26846 = G__26858;
count__26842_26847 = G__26859;
i__26843_26848 = G__26860;
continue;
}
} else
{var nnfn_26861 = cljs.core.first.call(null,seq__26840_26855__$1);while(true){
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
if((cljs.looperscript.looperscript.now.call(null) > nnfn_26861.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383))))
{nnfn_26861.call(null);
{
continue;
}
} else
{}
break;
}
{
var G__26862 = cljs.core.next.call(null,seq__26840_26855__$1);
var G__26863 = null;
var G__26864 = (0);
var G__26865 = (0);
seq__26840_26845 = G__26862;
chunk__26841_26846 = G__26863;
count__26842_26847 = G__26864;
i__26843_26848 = G__26865;
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
cljs.looperscript.looperscript.kill_sounds = (function kill_sounds(){var seq__26870_26874 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));var chunk__26871_26875 = null;var count__26872_26876 = (0);var i__26873_26877 = (0);while(true){
if((i__26873_26877 < count__26872_26876))
{var n_26878 = cljs.core._nth.call(null,chunk__26871_26875,i__26873_26877);n_26878.stop();
{
var G__26879 = seq__26870_26874;
var G__26880 = chunk__26871_26875;
var G__26881 = count__26872_26876;
var G__26882 = (i__26873_26877 + (1));
seq__26870_26874 = G__26879;
chunk__26871_26875 = G__26880;
count__26872_26876 = G__26881;
i__26873_26877 = G__26882;
continue;
}
} else
{var temp__4126__auto___26883 = cljs.core.seq.call(null,seq__26870_26874);if(temp__4126__auto___26883)
{var seq__26870_26884__$1 = temp__4126__auto___26883;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26870_26884__$1))
{var c__4410__auto___26885 = cljs.core.chunk_first.call(null,seq__26870_26884__$1);{
var G__26886 = cljs.core.chunk_rest.call(null,seq__26870_26884__$1);
var G__26887 = c__4410__auto___26885;
var G__26888 = cljs.core.count.call(null,c__4410__auto___26885);
var G__26889 = (0);
seq__26870_26874 = G__26886;
chunk__26871_26875 = G__26887;
count__26872_26876 = G__26888;
i__26873_26877 = G__26889;
continue;
}
} else
{var n_26890 = cljs.core.first.call(null,seq__26870_26884__$1);n_26890.stop();
{
var G__26891 = cljs.core.next.call(null,seq__26870_26884__$1);
var G__26892 = null;
var G__26893 = (0);
var G__26894 = (0);
seq__26870_26874 = G__26891;
chunk__26871_26875 = G__26892;
count__26872_26876 = G__26893;
i__26873_26877 = G__26894;
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
cljs.looperscript.looperscript.bind_key = (function bind_key(name,windows_key,mac_key,f){return (editor["commands"]).addCommand((function (){var obj26900 = {"name":name,"bindKey":(function (){var obj26902 = {"win":windows_key,"mac":mac_key};return obj26902;
})(),"exec":f};return obj26900;
})());
});
cljs.looperscript.looperscript.bind_key.call(null,"update","Ctrl-u","Command-U",cljs.looperscript.looperscript.update);
cljs.looperscript.looperscript.bind_key.call(null,"stop","Ctrl-Shift-S","Command-Shift-S",cljs.looperscript.looperscript.reset_button);
cljs.looperscript.looperscript.bind_key.call(null,"play","Ctrol-Shift-P","Command-Shift-P",cljs.looperscript.looperscript.play);
cljs.looperscript.audio.load_some_drums.call(null);
