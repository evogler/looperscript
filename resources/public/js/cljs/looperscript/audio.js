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
log.cljs$lang$applyTo = (function (arglist__26583){
var args = cljs.core.seq(arglist__26583);
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
cljs.looperscript.audio.on_mp3_load = (function on_mp3_load(req,fname){return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__26584_SHARP_){return cljs.looperscript.audio.on_decode.call(null,p1__26584_SHARP_,fname);
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
cljs.looperscript.audio.load_some_drums = (function load_some_drums(){var seq__26589 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);var chunk__26590 = null;var count__26591 = (0);var i__26592 = (0);while(true){
if((i__26592 < count__26591))
{var d = cljs.core._nth.call(null,chunk__26590,i__26592);cljs.looperscript.audio.load_file.call(null,d);
{
var G__26593 = seq__26589;
var G__26594 = chunk__26590;
var G__26595 = count__26591;
var G__26596 = (i__26592 + (1));
seq__26589 = G__26593;
chunk__26590 = G__26594;
count__26591 = G__26595;
i__26592 = G__26596;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26589);if(temp__4126__auto__)
{var seq__26589__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26589__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__26589__$1);{
var G__26597 = cljs.core.chunk_rest.call(null,seq__26589__$1);
var G__26598 = c__4410__auto__;
var G__26599 = cljs.core.count.call(null,c__4410__auto__);
var G__26600 = (0);
seq__26589 = G__26597;
chunk__26590 = G__26598;
count__26591 = G__26599;
i__26592 = G__26600;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__26589__$1);cljs.looperscript.audio.load_file.call(null,d);
{
var G__26601 = cljs.core.next.call(null,seq__26589__$1);
var G__26602 = null;
var G__26603 = (0);
var G__26604 = (0);
seq__26589 = G__26601;
chunk__26590 = G__26602;
count__26591 = G__26603;
i__26592 = G__26604;
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
cljs.looperscript.audio.play_filtered_tone = (function play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq,synth,overtones){var oscs = (function (){var iter__4379__auto__ = (function iter__26615(s__26616){return (new cljs.core.LazySeq(null,(function (){var s__26616__$1 = s__26616;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26616__$1);if(temp__4126__auto__)
{var s__26616__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26616__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__26616__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__26618 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__26617 = (0);while(true){
if((i__26617 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__26617);cljs.core.chunk_append.call(null,b__26618,cljs.looperscript.audio.ctx.createOscillator());
{
var G__26625 = (i__26617 + (1));
i__26617 = G__26625;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26618),iter__26615.call(null,cljs.core.chunk_rest.call(null,s__26616__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26618),null);
}
} else
{var i = cljs.core.first.call(null,s__26616__$2);return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),iter__26615.call(null,cljs.core.rest.call(null,s__26616__$2)));
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
var seq__26619_26626 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));var chunk__26620_26627 = null;var count__26621_26628 = (0);var i__26622_26629 = (0);while(true){
if((i__26622_26629 < count__26621_26628))
{var vec__26623_26630 = cljs.core._nth.call(null,chunk__26620_26627,i__26622_26629);var osc_26631 = cljs.core.nth.call(null,vec__26623_26630,(0),null);var o_26632 = cljs.core.nth.call(null,vec__26623_26630,(1),null);(osc_26631["type"] = synth);
((osc_26631["frequency"])["value"] = (o_26632 * freq));
osc_26631.connect(gain);
osc_26631.start(start_time);
osc_26631.stop((start_time + dur));
{
var G__26633 = seq__26619_26626;
var G__26634 = chunk__26620_26627;
var G__26635 = count__26621_26628;
var G__26636 = (i__26622_26629 + (1));
seq__26619_26626 = G__26633;
chunk__26620_26627 = G__26634;
count__26621_26628 = G__26635;
i__26622_26629 = G__26636;
continue;
}
} else
{var temp__4126__auto___26637 = cljs.core.seq.call(null,seq__26619_26626);if(temp__4126__auto___26637)
{var seq__26619_26638__$1 = temp__4126__auto___26637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26619_26638__$1))
{var c__4410__auto___26639 = cljs.core.chunk_first.call(null,seq__26619_26638__$1);{
var G__26640 = cljs.core.chunk_rest.call(null,seq__26619_26638__$1);
var G__26641 = c__4410__auto___26639;
var G__26642 = cljs.core.count.call(null,c__4410__auto___26639);
var G__26643 = (0);
seq__26619_26626 = G__26640;
chunk__26620_26627 = G__26641;
count__26621_26628 = G__26642;
i__26622_26629 = G__26643;
continue;
}
} else
{var vec__26624_26644 = cljs.core.first.call(null,seq__26619_26638__$1);var osc_26645 = cljs.core.nth.call(null,vec__26624_26644,(0),null);var o_26646 = cljs.core.nth.call(null,vec__26624_26644,(1),null);(osc_26645["type"] = synth);
((osc_26645["frequency"])["value"] = (o_26646 * freq));
osc_26645.connect(gain);
osc_26645.start(start_time);
osc_26645.stop((start_time + dur));
{
var G__26647 = cljs.core.next.call(null,seq__26619_26638__$1);
var G__26648 = null;
var G__26649 = (0);
var G__26650 = (0);
seq__26619_26626 = G__26647;
chunk__26620_26627 = G__26648;
count__26621_26628 = G__26649;
i__26622_26629 = G__26650;
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
