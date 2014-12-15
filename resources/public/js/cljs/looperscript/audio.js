// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.audio');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
cljs.looperscript.audio.log = (function() { 
var log__delegate = function (args){return console.log(cljs.core.apply.call(null,cljs.core.str,args));
};
var log = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__42750){
var args = cljs.core.seq(arglist__42750);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
cljs.looperscript.audio.ctx = (new webkitAudioContext());
if((cljs.looperscript.audio.ctx == null))
{cljs.looperscript.audio.ctx = (new AudioContext());
} else
{}
cljs.looperscript.audio.drums = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["kick","snare","hat","sidestick","ride-bell","ride"], null);
cljs.looperscript.audio.sample_lags = new cljs.core.PersistentArrayMap(null, 6, ["kick",0.026,"snare",0.0293,"hat",0.0267,"sidestick",0.0245,"ride-bell",0.0395,"ride",0.0443], null);
cljs.looperscript.audio.drum_codes = new cljs.core.PersistentArrayMap(null, 6, ["k","kick","s","snare","h","hat","d","sidestick","b","ride-bell","r","ride"], null);
cljs.looperscript.audio.buffers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.audio.sample_folder = "/media/webaudio/sample/mp3s/";
cljs.looperscript.audio.on_decode = (function on_decode(buffer,fname){cljs.core.swap_BANG_.call(null,cljs.looperscript.audio.buffers,cljs.core.assoc,fname,buffer);
return console.log("loaded",fname,cljs.core.rand_int.call(null,(99)));
});
cljs.looperscript.audio.on_mp3_load = (function on_mp3_load(req,fname){return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__42751_SHARP_){return cljs.looperscript.audio.on_decode.call(null,p1__42751_SHARP_,fname);
}));
});
cljs.looperscript.audio.load_file = (function load_file(fname){var req = (new XMLHttpRequest());var full_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.looperscript.audio.sample_folder)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)+".mp3");req.open("GET",full_name);
(req["responseType"] = "arraybuffer");
(req["onload"] = ((function (req,full_name){
return (function (){return cljs.looperscript.audio.on_mp3_load.call(null,req,fname);
});})(req,full_name))
);
return req.send();
});
cljs.looperscript.audio.load_some_drums = (function load_some_drums(){var seq__42756 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);var chunk__42757 = null;var count__42758 = (0);var i__42759 = (0);while(true){
if((i__42759 < count__42758))
{var d = cljs.core._nth.call(null,chunk__42757,i__42759);cljs.looperscript.audio.load_file.call(null,d);
{
var G__42760 = seq__42756;
var G__42761 = chunk__42757;
var G__42762 = count__42758;
var G__42763 = (i__42759 + (1));
seq__42756 = G__42760;
chunk__42757 = G__42761;
count__42758 = G__42762;
i__42759 = G__42763;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__42756);if(temp__4126__auto__)
{var seq__42756__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42756__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__42756__$1);{
var G__42764 = cljs.core.chunk_rest.call(null,seq__42756__$1);
var G__42765 = c__4410__auto__;
var G__42766 = cljs.core.count.call(null,c__4410__auto__);
var G__42767 = (0);
seq__42756 = G__42764;
chunk__42757 = G__42765;
count__42758 = G__42766;
i__42759 = G__42767;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__42756__$1);cljs.looperscript.audio.load_file.call(null,d);
{
var G__42768 = cljs.core.next.call(null,seq__42756__$1);
var G__42769 = null;
var G__42770 = (0);
var G__42771 = (0);
seq__42756 = G__42768;
chunk__42757 = G__42769;
count__42758 = G__42770;
i__42759 = G__42771;
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
cljs.looperscript.audio.play_sound = (function play_sound(fname,start_time,vol,rate){var buf_s = cljs.looperscript.audio.ctx.createBufferSource();var gain = cljs.looperscript.audio.ctx.createGain();(buf_s["buffer"] = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.looperscript.audio.buffers),fname));
((buf_s["playbackRate"])["value"] = rate);
((gain["gain"])["value"] = vol);
buf_s.connect(gain);
gain.connect((cljs.looperscript.audio.ctx["destination"]));
buf_s.start(start_time);
return buf_s;
});
cljs.looperscript.audio.play_tone = (function play_tone(freq,start_time,dur,vol,pan,synth,overtones){var osc = cljs.looperscript.audio.ctx.createOscillator();var gain = cljs.looperscript.audio.ctx.createGain();(osc["type"] = synth);
((osc["frequency"])["value"] = freq);
((gain["gain"])["value"] = (0.1 * vol));
osc.connect(gain);
gain.connect((cljs.looperscript.audio.ctx["destination"]));
osc.start(start_time);
osc.stop((start_time + dur));
return osc;
});
cljs.looperscript.audio.play_filtered_tone = (function play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq,synth,overtones){var oscs = (function (){var iter__4379__auto__ = (function iter__42782(s__42783){return (new cljs.core.LazySeq(null,(function (){var s__42783__$1 = s__42783;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__42783__$1);if(temp__4126__auto__)
{var s__42783__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__42783__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__42783__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__42785 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__42784 = (0);while(true){
if((i__42784 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__42784);cljs.core.chunk_append.call(null,b__42785,cljs.looperscript.audio.ctx.createOscillator());
{
var G__42792 = (i__42784 + (1));
i__42784 = G__42792;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42785),iter__42782.call(null,cljs.core.chunk_rest.call(null,s__42783__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42785),null);
}
} else
{var i = cljs.core.first.call(null,s__42783__$2);return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),iter__42782.call(null,cljs.core.rest.call(null,s__42783__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,overtones)));
})();var gain = cljs.looperscript.audio.ctx.createGain();var q = 0.25;var filter = cljs.looperscript.audio.ctx.createBiquadFilter();var panner = cljs.looperscript.audio.ctx.createPanner();((gain["gain"])["value"] = (0.1 * vol));
((filter["frequency"])["value"] = filt_freq);
((filter["Q"])["value"] = q);
(panner["panningModel"] = "equalpower");
panner.setPosition(pan,(0),(0));
gain.connect(filter);
filter.connect(panner);
panner.connect((cljs.looperscript.audio.ctx["destination"]));
var seq__42786_42793 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));var chunk__42787_42794 = null;var count__42788_42795 = (0);var i__42789_42796 = (0);while(true){
if((i__42789_42796 < count__42788_42795))
{var vec__42790_42797 = cljs.core._nth.call(null,chunk__42787_42794,i__42789_42796);var osc_42798 = cljs.core.nth.call(null,vec__42790_42797,(0),null);var o_42799 = cljs.core.nth.call(null,vec__42790_42797,(1),null);(osc_42798["type"] = synth);
((osc_42798["frequency"])["value"] = (o_42799 * freq));
osc_42798.connect(gain);
osc_42798.start(start_time);
osc_42798.stop((start_time + dur));
{
var G__42800 = seq__42786_42793;
var G__42801 = chunk__42787_42794;
var G__42802 = count__42788_42795;
var G__42803 = (i__42789_42796 + (1));
seq__42786_42793 = G__42800;
chunk__42787_42794 = G__42801;
count__42788_42795 = G__42802;
i__42789_42796 = G__42803;
continue;
}
} else
{var temp__4126__auto___42804 = cljs.core.seq.call(null,seq__42786_42793);if(temp__4126__auto___42804)
{var seq__42786_42805__$1 = temp__4126__auto___42804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42786_42805__$1))
{var c__4410__auto___42806 = cljs.core.chunk_first.call(null,seq__42786_42805__$1);{
var G__42807 = cljs.core.chunk_rest.call(null,seq__42786_42805__$1);
var G__42808 = c__4410__auto___42806;
var G__42809 = cljs.core.count.call(null,c__4410__auto___42806);
var G__42810 = (0);
seq__42786_42793 = G__42807;
chunk__42787_42794 = G__42808;
count__42788_42795 = G__42809;
i__42789_42796 = G__42810;
continue;
}
} else
{var vec__42791_42811 = cljs.core.first.call(null,seq__42786_42805__$1);var osc_42812 = cljs.core.nth.call(null,vec__42791_42811,(0),null);var o_42813 = cljs.core.nth.call(null,vec__42791_42811,(1),null);(osc_42812["type"] = synth);
((osc_42812["frequency"])["value"] = (o_42813 * freq));
osc_42812.connect(gain);
osc_42812.start(start_time);
osc_42812.stop((start_time + dur));
{
var G__42814 = cljs.core.next.call(null,seq__42786_42805__$1);
var G__42815 = null;
var G__42816 = (0);
var G__42817 = (0);
seq__42786_42793 = G__42814;
chunk__42787_42794 = G__42815;
count__42788_42795 = G__42816;
i__42789_42796 = G__42817;
continue;
}
}
} else
{}
}
break;
}
return oscs;
});
