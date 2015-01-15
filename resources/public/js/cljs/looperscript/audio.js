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
log.cljs$lang$applyTo = (function (arglist__29720){
var args = cljs.core.seq(arglist__29720);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
cljs.looperscript.audio.ctx = (new AudioContext());
cljs.looperscript.audio.drums = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["kick","snare","hat","sidestick","ride-bell","ride"], null);
cljs.looperscript.audio.sample_lags = new cljs.core.PersistentArrayMap(null, 6, ["kick",0.026,"snare",0.0293,"hat",0.0267,"sidestick",0.0245,"ride-bell",0.0395,"ride",0.0443], null);
cljs.looperscript.audio.drum_codes = new cljs.core.PersistentArrayMap(null, 6, ["k","kick","s","snare","h","hat","d","sidestick","b","ride-bell","r","ride"], null);
cljs.looperscript.audio.buffers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.audio.sample_folder = "/media/webaudio/sample/mp3s/";
cljs.looperscript.audio.on_decode = (function on_decode(buffer,fname){cljs.core.swap_BANG_.call(null,cljs.looperscript.audio.buffers,cljs.core.assoc,fname,buffer);
return console.log("loaded",fname,cljs.core.rand_int.call(null,(99)));
});
cljs.looperscript.audio.on_mp3_load = (function on_mp3_load(req,fname){return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__29721_SHARP_){return cljs.looperscript.audio.on_decode.call(null,p1__29721_SHARP_,fname);
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
cljs.looperscript.audio.load_some_drums = (function load_some_drums(){var seq__29726 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);var chunk__29727 = null;var count__29728 = (0);var i__29729 = (0);while(true){
if((i__29729 < count__29728))
{var d = cljs.core._nth.call(null,chunk__29727,i__29729);cljs.looperscript.audio.load_file.call(null,d);
{
var G__29730 = seq__29726;
var G__29731 = chunk__29727;
var G__29732 = count__29728;
var G__29733 = (i__29729 + (1));
seq__29726 = G__29730;
chunk__29727 = G__29731;
count__29728 = G__29732;
i__29729 = G__29733;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29726);if(temp__4126__auto__)
{var seq__29726__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29726__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__29726__$1);{
var G__29734 = cljs.core.chunk_rest.call(null,seq__29726__$1);
var G__29735 = c__4410__auto__;
var G__29736 = cljs.core.count.call(null,c__4410__auto__);
var G__29737 = (0);
seq__29726 = G__29734;
chunk__29727 = G__29735;
count__29728 = G__29736;
i__29729 = G__29737;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__29726__$1);cljs.looperscript.audio.load_file.call(null,d);
{
var G__29738 = cljs.core.next.call(null,seq__29726__$1);
var G__29739 = null;
var G__29740 = (0);
var G__29741 = (0);
seq__29726 = G__29738;
chunk__29727 = G__29739;
count__29728 = G__29740;
i__29729 = G__29741;
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
cljs.looperscript.audio.play_filtered_tone = (function play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq,synth,overtones){var oscs = (function (){var iter__4379__auto__ = (function iter__29752(s__29753){return (new cljs.core.LazySeq(null,(function (){var s__29753__$1 = s__29753;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29753__$1);if(temp__4126__auto__)
{var s__29753__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29753__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__29753__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__29755 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__29754 = (0);while(true){
if((i__29754 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__29754);cljs.core.chunk_append.call(null,b__29755,cljs.looperscript.audio.ctx.createOscillator());
{
var G__29762 = (i__29754 + (1));
i__29754 = G__29762;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29755),iter__29752.call(null,cljs.core.chunk_rest.call(null,s__29753__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29755),null);
}
} else
{var i = cljs.core.first.call(null,s__29753__$2);return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),iter__29752.call(null,cljs.core.rest.call(null,s__29753__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4379__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,overtones)));
})();var gain = cljs.looperscript.audio.ctx.createGain();var q = 0.25;var filter = cljs.looperscript.audio.ctx.createBiquadFilter();var panner = cljs.looperscript.audio.ctx.createPanner();((gain["gain"])["value"] = (0.1 * vol));
(gain["gain"]).linearRampToValueAtTime((0.1 * vol),start_time);
(gain["gain"]).exponentialRampToValueAtTime(((0.1 * 0.1) * vol),(start_time + (3)));
((filter["frequency"])["value"] = filt_freq);
((filter["Q"])["value"] = q);
(filter["frequency"]).exponentialRampToValueAtTime(filt_freq,start_time);
(filter["frequency"]).exponentialRampToValueAtTime((1000),(0.1 + start_time));
(filter["frequency"]).exponentialRampToValueAtTime((300),((1) + start_time));
(panner["panningModel"] = "equalpower");
panner.setPosition(pan,(0),(0));
gain.connect(filter);
filter.connect(panner);
panner.connect((cljs.looperscript.audio.ctx["destination"]));
var seq__29756_29763 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));var chunk__29757_29764 = null;var count__29758_29765 = (0);var i__29759_29766 = (0);while(true){
if((i__29759_29766 < count__29758_29765))
{var vec__29760_29767 = cljs.core._nth.call(null,chunk__29757_29764,i__29759_29766);var osc_29768 = cljs.core.nth.call(null,vec__29760_29767,(0),null);var o_29769 = cljs.core.nth.call(null,vec__29760_29767,(1),null);(osc_29768["type"] = synth);
((osc_29768["frequency"])["value"] = (o_29769 * freq));
osc_29768.connect(gain);
osc_29768.start(start_time);
osc_29768.stop((start_time + dur));
{
var G__29770 = seq__29756_29763;
var G__29771 = chunk__29757_29764;
var G__29772 = count__29758_29765;
var G__29773 = (i__29759_29766 + (1));
seq__29756_29763 = G__29770;
chunk__29757_29764 = G__29771;
count__29758_29765 = G__29772;
i__29759_29766 = G__29773;
continue;
}
} else
{var temp__4126__auto___29774 = cljs.core.seq.call(null,seq__29756_29763);if(temp__4126__auto___29774)
{var seq__29756_29775__$1 = temp__4126__auto___29774;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29756_29775__$1))
{var c__4410__auto___29776 = cljs.core.chunk_first.call(null,seq__29756_29775__$1);{
var G__29777 = cljs.core.chunk_rest.call(null,seq__29756_29775__$1);
var G__29778 = c__4410__auto___29776;
var G__29779 = cljs.core.count.call(null,c__4410__auto___29776);
var G__29780 = (0);
seq__29756_29763 = G__29777;
chunk__29757_29764 = G__29778;
count__29758_29765 = G__29779;
i__29759_29766 = G__29780;
continue;
}
} else
{var vec__29761_29781 = cljs.core.first.call(null,seq__29756_29775__$1);var osc_29782 = cljs.core.nth.call(null,vec__29761_29781,(0),null);var o_29783 = cljs.core.nth.call(null,vec__29761_29781,(1),null);(osc_29782["type"] = synth);
((osc_29782["frequency"])["value"] = (o_29783 * freq));
osc_29782.connect(gain);
osc_29782.start(start_time);
osc_29782.stop((start_time + dur));
{
var G__29784 = cljs.core.next.call(null,seq__29756_29775__$1);
var G__29785 = null;
var G__29786 = (0);
var G__29787 = (0);
seq__29756_29763 = G__29784;
chunk__29757_29764 = G__29785;
count__29758_29765 = G__29786;
i__29759_29766 = G__29787;
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
