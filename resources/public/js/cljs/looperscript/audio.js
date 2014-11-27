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
log.cljs$lang$applyTo = (function (arglist__8300){
var args = cljs.core.seq(arglist__8300);
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
cljs.looperscript.audio.on_mp3_load = (function on_mp3_load(req,fname){return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__8301_SHARP_){return cljs.looperscript.audio.on_decode.call(null,p1__8301_SHARP_,fname);
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
cljs.looperscript.audio.load_some_drums = (function load_some_drums(){var seq__8306 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);var chunk__8307 = null;var count__8308 = (0);var i__8309 = (0);while(true){
if((i__8309 < count__8308))
{var d = cljs.core._nth.call(null,chunk__8307,i__8309);cljs.looperscript.audio.load_file.call(null,d);
{
var G__8310 = seq__8306;
var G__8311 = chunk__8307;
var G__8312 = count__8308;
var G__8313 = (i__8309 + (1));
seq__8306 = G__8310;
chunk__8307 = G__8311;
count__8308 = G__8312;
i__8309 = G__8313;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8306);if(temp__4126__auto__)
{var seq__8306__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8306__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__8306__$1);{
var G__8314 = cljs.core.chunk_rest.call(null,seq__8306__$1);
var G__8315 = c__4410__auto__;
var G__8316 = cljs.core.count.call(null,c__4410__auto__);
var G__8317 = (0);
seq__8306 = G__8314;
chunk__8307 = G__8315;
count__8308 = G__8316;
i__8309 = G__8317;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__8306__$1);cljs.looperscript.audio.load_file.call(null,d);
{
var G__8318 = cljs.core.next.call(null,seq__8306__$1);
var G__8319 = null;
var G__8320 = (0);
var G__8321 = (0);
seq__8306 = G__8318;
chunk__8307 = G__8319;
count__8308 = G__8320;
i__8309 = G__8321;
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
cljs.looperscript.audio.play_filtered_tone = (function play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq,synth,overtones){var oscs = (function (){var iter__4379__auto__ = (function iter__8332(s__8333){return (new cljs.core.LazySeq(null,(function (){var s__8333__$1 = s__8333;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8333__$1);if(temp__4126__auto__)
{var s__8333__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8333__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__8333__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__8335 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__8334 = (0);while(true){
if((i__8334 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__8334);cljs.core.chunk_append.call(null,b__8335,cljs.looperscript.audio.ctx.createOscillator());
{
var G__8342 = (i__8334 + (1));
i__8334 = G__8342;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8335),iter__8332.call(null,cljs.core.chunk_rest.call(null,s__8333__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8335),null);
}
} else
{var i = cljs.core.first.call(null,s__8333__$2);return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),iter__8332.call(null,cljs.core.rest.call(null,s__8333__$2)));
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
var seq__8336_8343 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));var chunk__8337_8344 = null;var count__8338_8345 = (0);var i__8339_8346 = (0);while(true){
if((i__8339_8346 < count__8338_8345))
{var vec__8340_8347 = cljs.core._nth.call(null,chunk__8337_8344,i__8339_8346);var osc_8348 = cljs.core.nth.call(null,vec__8340_8347,(0),null);var o_8349 = cljs.core.nth.call(null,vec__8340_8347,(1),null);(osc_8348["type"] = synth);
((osc_8348["frequency"])["value"] = (o_8349 * freq));
osc_8348.connect(gain);
osc_8348.start(start_time);
osc_8348.stop((start_time + dur));
{
var G__8350 = seq__8336_8343;
var G__8351 = chunk__8337_8344;
var G__8352 = count__8338_8345;
var G__8353 = (i__8339_8346 + (1));
seq__8336_8343 = G__8350;
chunk__8337_8344 = G__8351;
count__8338_8345 = G__8352;
i__8339_8346 = G__8353;
continue;
}
} else
{var temp__4126__auto___8354 = cljs.core.seq.call(null,seq__8336_8343);if(temp__4126__auto___8354)
{var seq__8336_8355__$1 = temp__4126__auto___8354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8336_8355__$1))
{var c__4410__auto___8356 = cljs.core.chunk_first.call(null,seq__8336_8355__$1);{
var G__8357 = cljs.core.chunk_rest.call(null,seq__8336_8355__$1);
var G__8358 = c__4410__auto___8356;
var G__8359 = cljs.core.count.call(null,c__4410__auto___8356);
var G__8360 = (0);
seq__8336_8343 = G__8357;
chunk__8337_8344 = G__8358;
count__8338_8345 = G__8359;
i__8339_8346 = G__8360;
continue;
}
} else
{var vec__8341_8361 = cljs.core.first.call(null,seq__8336_8355__$1);var osc_8362 = cljs.core.nth.call(null,vec__8341_8361,(0),null);var o_8363 = cljs.core.nth.call(null,vec__8341_8361,(1),null);(osc_8362["type"] = synth);
((osc_8362["frequency"])["value"] = (o_8363 * freq));
osc_8362.connect(gain);
osc_8362.start(start_time);
osc_8362.stop((start_time + dur));
{
var G__8364 = cljs.core.next.call(null,seq__8336_8355__$1);
var G__8365 = null;
var G__8366 = (0);
var G__8367 = (0);
seq__8336_8343 = G__8364;
chunk__8337_8344 = G__8365;
count__8338_8345 = G__8366;
i__8339_8346 = G__8367;
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
