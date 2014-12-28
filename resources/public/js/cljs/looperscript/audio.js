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
log.cljs$lang$applyTo = (function (arglist__18465){
var args = cljs.core.seq(arglist__18465);
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
cljs.looperscript.audio.on_mp3_load = (function on_mp3_load(req,fname){return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__18466_SHARP_){return cljs.looperscript.audio.on_decode.call(null,p1__18466_SHARP_,fname);
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
cljs.looperscript.audio.load_some_drums = (function load_some_drums(){var seq__18471 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);var chunk__18472 = null;var count__18473 = (0);var i__18474 = (0);while(true){
if((i__18474 < count__18473))
{var d = cljs.core._nth.call(null,chunk__18472,i__18474);cljs.looperscript.audio.load_file.call(null,d);
{
var G__18475 = seq__18471;
var G__18476 = chunk__18472;
var G__18477 = count__18473;
var G__18478 = (i__18474 + (1));
seq__18471 = G__18475;
chunk__18472 = G__18476;
count__18473 = G__18477;
i__18474 = G__18478;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18471);if(temp__4126__auto__)
{var seq__18471__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18471__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__18471__$1);{
var G__18479 = cljs.core.chunk_rest.call(null,seq__18471__$1);
var G__18480 = c__4410__auto__;
var G__18481 = cljs.core.count.call(null,c__4410__auto__);
var G__18482 = (0);
seq__18471 = G__18479;
chunk__18472 = G__18480;
count__18473 = G__18481;
i__18474 = G__18482;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__18471__$1);cljs.looperscript.audio.load_file.call(null,d);
{
var G__18483 = cljs.core.next.call(null,seq__18471__$1);
var G__18484 = null;
var G__18485 = (0);
var G__18486 = (0);
seq__18471 = G__18483;
chunk__18472 = G__18484;
count__18473 = G__18485;
i__18474 = G__18486;
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
cljs.looperscript.audio.play_filtered_tone = (function play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq,synth,overtones){var oscs = (function (){var iter__4379__auto__ = (function iter__18497(s__18498){return (new cljs.core.LazySeq(null,(function (){var s__18498__$1 = s__18498;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18498__$1);if(temp__4126__auto__)
{var s__18498__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18498__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__18498__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__18500 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__18499 = (0);while(true){
if((i__18499 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__18499);cljs.core.chunk_append.call(null,b__18500,cljs.looperscript.audio.ctx.createOscillator());
{
var G__18507 = (i__18499 + (1));
i__18499 = G__18507;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18500),iter__18497.call(null,cljs.core.chunk_rest.call(null,s__18498__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18500),null);
}
} else
{var i = cljs.core.first.call(null,s__18498__$2);return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),iter__18497.call(null,cljs.core.rest.call(null,s__18498__$2)));
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
var seq__18501_18508 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));var chunk__18502_18509 = null;var count__18503_18510 = (0);var i__18504_18511 = (0);while(true){
if((i__18504_18511 < count__18503_18510))
{var vec__18505_18512 = cljs.core._nth.call(null,chunk__18502_18509,i__18504_18511);var osc_18513 = cljs.core.nth.call(null,vec__18505_18512,(0),null);var o_18514 = cljs.core.nth.call(null,vec__18505_18512,(1),null);(osc_18513["type"] = synth);
((osc_18513["frequency"])["value"] = (o_18514 * freq));
osc_18513.connect(gain);
osc_18513.start(start_time);
osc_18513.stop((start_time + dur));
{
var G__18515 = seq__18501_18508;
var G__18516 = chunk__18502_18509;
var G__18517 = count__18503_18510;
var G__18518 = (i__18504_18511 + (1));
seq__18501_18508 = G__18515;
chunk__18502_18509 = G__18516;
count__18503_18510 = G__18517;
i__18504_18511 = G__18518;
continue;
}
} else
{var temp__4126__auto___18519 = cljs.core.seq.call(null,seq__18501_18508);if(temp__4126__auto___18519)
{var seq__18501_18520__$1 = temp__4126__auto___18519;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18501_18520__$1))
{var c__4410__auto___18521 = cljs.core.chunk_first.call(null,seq__18501_18520__$1);{
var G__18522 = cljs.core.chunk_rest.call(null,seq__18501_18520__$1);
var G__18523 = c__4410__auto___18521;
var G__18524 = cljs.core.count.call(null,c__4410__auto___18521);
var G__18525 = (0);
seq__18501_18508 = G__18522;
chunk__18502_18509 = G__18523;
count__18503_18510 = G__18524;
i__18504_18511 = G__18525;
continue;
}
} else
{var vec__18506_18526 = cljs.core.first.call(null,seq__18501_18520__$1);var osc_18527 = cljs.core.nth.call(null,vec__18506_18526,(0),null);var o_18528 = cljs.core.nth.call(null,vec__18506_18526,(1),null);(osc_18527["type"] = synth);
((osc_18527["frequency"])["value"] = (o_18528 * freq));
osc_18527.connect(gain);
osc_18527.start(start_time);
osc_18527.stop((start_time + dur));
{
var G__18529 = cljs.core.next.call(null,seq__18501_18520__$1);
var G__18530 = null;
var G__18531 = (0);
var G__18532 = (0);
seq__18501_18508 = G__18529;
chunk__18502_18509 = G__18530;
count__18503_18510 = G__18531;
i__18504_18511 = G__18532;
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
