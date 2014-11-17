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
log.cljs$lang$applyTo = (function (arglist__17738){
var args = cljs.core.seq(arglist__17738);
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
log__GT_.cljs$lang$applyTo = (function (arglist__17739){
var args = cljs.core.seq(arglist__17739);
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
cljs.looperscript.looperscript.part_defaults = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drum-code","drum-code",2081814302),"r"], null)], null),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null)], null);
cljs.looperscript.looperscript.get_looper_text = (function get_looper_text(){return cljs.looperscript.interpret.remove_comments.call(null,domina.value.call(null,domina.by_id.call(null,"looper-text")));
});
cljs.looperscript.looperscript.get_parts = (function get_parts(){var parts_text = cljs.looperscript.looperscript.get_looper_text.call(null);var start_time = cljs.looperscript.looperscript.now.call(null);var parts = cljs.looperscript.interpret._looper_parse.call(null,parts_text);if(instaparse.core.failure_QMARK_.call(null,parts))
{return parts;
} else
{var _ = cljs.looperscript.looperscript.log.call(null,new cljs.core.Keyword(null,"tree","tree",-196312028),parts,"\n");var parse_time = (cljs.looperscript.looperscript.now.call(null) - start_time);var parts__$1 = cljs.looperscript.interpret.looper_transform.call(null,parts);var ___$1 = cljs.looperscript.looperscript.log.call(null,new cljs.core.Keyword(null,"transformed","transformed",1969289512),parts__$1,"\n");var transform_time = (cljs.looperscript.looperscript.now.call(null) - start_time);var vec__17741 = cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,parts__$1);var new_params = cljs.core.nth.call(null,vec__17741,(0),null);var parts__$2 = cljs.core.nth.call(null,vec__17741,(1),null);cljs.looperscript.looperscript.log.call(null,"Parse time: (",parse_time,") ",transform_time);
cljs.core.reset_BANG_.call(null,cljs.looperscript.looperscript.params,new_params);
return parts__$2;
}
});
cljs.looperscript.looperscript.maybe_random2 = (function maybe_random2(x){if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Keyword(null,"random2","random2",-402442624))))
{return cljs.core.rand_nth.call(null,cljs.core.rest.call(null,x));
} else
{return x;
}
});
cljs.looperscript.looperscript.next_note_fn = (function next_note_fn(part,start_time){var elements = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"pan","pan",-307712792),new cljs.core.Keyword(null,"rate","rate",-1428659698)], null);var _ = (function (){var seq__17749 = cljs.core.seq.call(null,elements);var chunk__17750 = null;var count__17751 = (0);var i__17752 = (0);while(true){
if((i__17752 < count__17751))
{var e = cljs.core._nth.call(null,chunk__17750,i__17752);{
var G__17753 = seq__17749;
var G__17754 = chunk__17750;
var G__17755 = count__17751;
var G__17756 = (i__17752 + (1));
seq__17749 = G__17753;
chunk__17750 = G__17754;
count__17751 = G__17755;
i__17752 = G__17756;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17749);if(temp__4126__auto__)
{var seq__17749__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17749__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__17749__$1);{
var G__17757 = cljs.core.chunk_rest.call(null,seq__17749__$1);
var G__17758 = c__4410__auto__;
var G__17759 = cljs.core.count.call(null,c__4410__auto__);
var G__17760 = (0);
seq__17749 = G__17757;
chunk__17750 = G__17758;
count__17751 = G__17759;
i__17752 = G__17760;
continue;
}
} else
{var e = cljs.core.first.call(null,seq__17749__$1);{
var G__17761 = cljs.core.next.call(null,seq__17749__$1);
var G__17762 = null;
var G__17763 = (0);
var G__17764 = (0);
seq__17749 = G__17761;
chunk__17750 = G__17762;
count__17751 = G__17763;
i__17752 = G__17764;
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
return (function (p1__17742_SHARP_){var or__3640__auto__ = cljs.core.get.call(null,part,p1__17742_SHARP_);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.looperscript.looperscript.part_defaults,p1__17742_SHARP_);
}
});})(elements,_))
,elements));var lengths = cljs.core.zipmap.call(null,elements,cljs.core.map.call(null,((function (elements,_,element_vecs){
return (function (p1__17743_SHARP_){return cljs.core.count.call(null,element_vecs.call(null,p1__17743_SHARP_));
});})(elements,_,element_vecs))
,elements));var pos = cljs.core.atom.call(null,(0));var time_pos = cljs.core.atom.call(null,start_time);return ((function (elements,_,element_vecs,lengths,pos,time_pos){
return (function() {
var G__17765 = null;
var G__17765__0 = (function (){var res = cljs.core.zipmap.call(null,elements,cljs.core.map.call(null,((function (elements,_,element_vecs,lengths,pos,time_pos){
return (function (p1__17744_SHARP_){return cljs.looperscript.looperscript.maybe_random2.call(null,cljs.core.nth.call(null,cljs.core.get.call(null,element_vecs,p1__17744_SHARP_),cljs.core.mod.call(null,cljs.core.deref.call(null,pos),cljs.core.get.call(null,lengths,p1__17744_SHARP_))));
});})(elements,_,element_vecs,lengths,pos,time_pos))
,elements));var res__$1 = cljs.core.update_in.call(null,cljs.core.assoc.call(null,res,new cljs.core.Keyword(null,"start-time","start-time",814801386),cljs.core.deref.call(null,time_pos)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core._STAR_,(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"bpm","bpm",-1042376389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.looperscript.looperscript.params));if(cljs.core.truth_(temp__4124__auto__))
{var bpm = temp__4124__auto__;return bpm;
} else
{return (1);
}
})());cljs.core.swap_BANG_.call(null,pos,cljs.core.inc);
cljs.core.swap_BANG_.call(null,time_pos,cljs.core._PLUS_,res__$1.call(null,new cljs.core.Keyword(null,"time","time",1385887882)));
return res__$1;
});
var G__17765__1 = (function (command){if(cljs.core._EQ_.call(null,command,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))
{return cljs.core.deref.call(null,time_pos);
} else
{return null;
}
});
G__17765 = function(command){
switch(arguments.length){
case 0:
return G__17765__0.call(this);
case 1:
return G__17765__1.call(this,command);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17765.cljs$core$IFn$_invoke$arity$0 = G__17765__0;
G__17765.cljs$core$IFn$_invoke$arity$1 = G__17765__1;
return G__17765;
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
cljs.looperscript.looperscript.kill_sounds = (function kill_sounds(){var seq__17770_17774 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.looperscript.sounding_notes)));var chunk__17771_17775 = null;var count__17772_17776 = (0);var i__17773_17777 = (0);while(true){
if((i__17773_17777 < count__17772_17776))
{var n_17778 = cljs.core._nth.call(null,chunk__17771_17775,i__17773_17777);n_17778.stop();
{
var G__17779 = seq__17770_17774;
var G__17780 = chunk__17771_17775;
var G__17781 = count__17772_17776;
var G__17782 = (i__17773_17777 + (1));
seq__17770_17774 = G__17779;
chunk__17771_17775 = G__17780;
count__17772_17776 = G__17781;
i__17773_17777 = G__17782;
continue;
}
} else
{var temp__4126__auto___17783 = cljs.core.seq.call(null,seq__17770_17774);if(temp__4126__auto___17783)
{var seq__17770_17784__$1 = temp__4126__auto___17783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17770_17784__$1))
{var c__4410__auto___17785 = cljs.core.chunk_first.call(null,seq__17770_17784__$1);{
var G__17786 = cljs.core.chunk_rest.call(null,seq__17770_17784__$1);
var G__17787 = c__4410__auto___17785;
var G__17788 = cljs.core.count.call(null,c__4410__auto___17785);
var G__17789 = (0);
seq__17770_17774 = G__17786;
chunk__17771_17775 = G__17787;
count__17772_17776 = G__17788;
i__17773_17777 = G__17789;
continue;
}
} else
{var n_17790 = cljs.core.first.call(null,seq__17770_17784__$1);n_17790.stop();
{
var G__17791 = cljs.core.next.call(null,seq__17770_17784__$1);
var G__17792 = null;
var G__17793 = (0);
var G__17794 = (0);
seq__17770_17774 = G__17791;
chunk__17771_17775 = G__17792;
count__17772_17776 = G__17793;
i__17773_17777 = G__17794;
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
)));var dur = new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(n);var vol = new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(n);var filter = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(n);var start_time = new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n);var pan = new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(n);var rate = new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(n);var start_time__$1 = (function (){var temp__4124__auto__ = cljs.core.get.call(null,cljs.looperscript.audio.sample_lags,sound__$1);if(cljs.core.truth_(temp__4124__auto__))
{var l = temp__4124__auto__;return (start_time - (l / rate));
} else
{return start_time;
}
})();var node = ((typeof sound__$1 === 'number')?(cljs.core.truth_(filter)?cljs.looperscript.audio.play_filtered_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,filter):cljs.looperscript.audio.play_tone.call(null,sound__$1,start_time__$1,dur,vol,pan)):cljs.looperscript.audio.play_sound.call(null,sound__$1,start_time__$1,vol,rate));return cljs.looperscript.looperscript.add_note_to_sounding_notes.call(null,n,node);
});
cljs.looperscript.looperscript.play = (function play(){cljs.looperscript.looperscript.stop.call(null);
var parts = cljs.looperscript.looperscript.get_parts.call(null);if(instaparse.core.failure_QMARK_.call(null,parts))
{return cljs.looperscript.looperscript.log.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,parts))));
} else
{var time_pos = (0.05 + cljs.looperscript.looperscript.now.call(null));var next_note_fns = (function (){var iter__4379__auto__ = ((function (time_pos,parts){
return (function iter__17803(s__17804){return (new cljs.core.LazySeq(null,((function (time_pos,parts){
return (function (){var s__17804__$1 = s__17804;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17804__$1);if(temp__4126__auto__)
{var s__17804__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17804__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__17804__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__17806 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__17805 = (0);while(true){
if((i__17805 < size__4378__auto__))
{var p = cljs.core._nth.call(null,c__4377__auto__,i__17805);cljs.core.chunk_append.call(null,b__17806,cljs.looperscript.looperscript.next_note_fn.call(null,p,time_pos));
{
var G__17811 = (i__17805 + (1));
i__17805 = G__17811;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17806),iter__17803.call(null,cljs.core.chunk_rest.call(null,s__17804__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17806),null);
}
} else
{var p = cljs.core.first.call(null,s__17804__$2);return cljs.core.cons.call(null,cljs.looperscript.looperscript.next_note_fn.call(null,p,time_pos),iter__17803.call(null,cljs.core.rest.call(null,s__17804__$2)));
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
return (function (){var end_time = ((cljs.looperscript.looperscript.now.call(null) + cljs.looperscript.looperscript.queue_time_extra) + cljs.looperscript.looperscript.queue_time_interval);var seq__17807 = cljs.core.seq.call(null,next_note_fns);var chunk__17808 = null;var count__17809 = (0);var i__17810 = (0);while(true){
if((i__17810 < count__17809))
{var n_n_fn = cljs.core._nth.call(null,chunk__17808,i__17810);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_17812 = n_n_fn.call(null);cljs.looperscript.looperscript.schedule_note.call(null,next_note_17812);
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_17812) < end_time))
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
var G__17813 = seq__17807;
var G__17814 = chunk__17808;
var G__17815 = count__17809;
var G__17816 = (i__17810 + (1));
seq__17807 = G__17813;
chunk__17808 = G__17814;
count__17809 = G__17815;
i__17810 = G__17816;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17807);if(temp__4126__auto__)
{var seq__17807__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17807__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__17807__$1);{
var G__17817 = cljs.core.chunk_rest.call(null,seq__17807__$1);
var G__17818 = c__4410__auto__;
var G__17819 = cljs.core.count.call(null,c__4410__auto__);
var G__17820 = (0);
seq__17807 = G__17817;
chunk__17808 = G__17818;
count__17809 = G__17819;
i__17810 = G__17820;
continue;
}
} else
{var n_n_fn = cljs.core.first.call(null,seq__17807__$1);if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time))
{while(true){
var next_note_17821 = n_n_fn.call(null);cljs.looperscript.looperscript.schedule_note.call(null,next_note_17821);
if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_17821) < end_time))
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
var G__17822 = cljs.core.next.call(null,seq__17807__$1);
var G__17823 = null;
var G__17824 = (0);
var G__17825 = (0);
seq__17807 = G__17822;
chunk__17808 = G__17823;
count__17809 = G__17824;
i__17810 = G__17825;
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
