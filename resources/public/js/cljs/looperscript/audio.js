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
log.cljs$lang$applyTo = (function (arglist__7356){
var args = cljs.core.seq(arglist__7356);
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
cljs.looperscript.audio.on_mp3_load = (function on_mp3_load(req,fname){return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__7357_SHARP_){return cljs.looperscript.audio.on_decode.call(null,p1__7357_SHARP_,fname);
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
cljs.looperscript.audio.load_some_drums = (function load_some_drums(){var seq__7362 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);var chunk__7363 = null;var count__7364 = (0);var i__7365 = (0);while(true){
if((i__7365 < count__7364))
{var d = cljs.core._nth.call(null,chunk__7363,i__7365);cljs.looperscript.audio.load_file.call(null,d);
{
var G__7366 = seq__7362;
var G__7367 = chunk__7363;
var G__7368 = count__7364;
var G__7369 = (i__7365 + (1));
seq__7362 = G__7366;
chunk__7363 = G__7367;
count__7364 = G__7368;
i__7365 = G__7369;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7362);if(temp__4126__auto__)
{var seq__7362__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7362__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__7362__$1);{
var G__7370 = cljs.core.chunk_rest.call(null,seq__7362__$1);
var G__7371 = c__4410__auto__;
var G__7372 = cljs.core.count.call(null,c__4410__auto__);
var G__7373 = (0);
seq__7362 = G__7370;
chunk__7363 = G__7371;
count__7364 = G__7372;
i__7365 = G__7373;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__7362__$1);cljs.looperscript.audio.load_file.call(null,d);
{
var G__7374 = cljs.core.next.call(null,seq__7362__$1);
var G__7375 = null;
var G__7376 = (0);
var G__7377 = (0);
seq__7362 = G__7374;
chunk__7363 = G__7375;
count__7364 = G__7376;
i__7365 = G__7377;
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
cljs.looperscript.audio.play_filtered_tone = (function play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq,synth,overtones){var oscs = (function (){var iter__4379__auto__ = (function iter__7388(s__7389){return (new cljs.core.LazySeq(null,(function (){var s__7389__$1 = s__7389;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7389__$1);if(temp__4126__auto__)
{var s__7389__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7389__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__7389__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__7391 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__7390 = (0);while(true){
if((i__7390 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__7390);cljs.core.chunk_append.call(null,b__7391,cljs.looperscript.audio.ctx.createOscillator());
{
var G__7398 = (i__7390 + (1));
i__7390 = G__7398;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7391),iter__7388.call(null,cljs.core.chunk_rest.call(null,s__7389__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7391),null);
}
} else
{var i = cljs.core.first.call(null,s__7389__$2);return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),iter__7388.call(null,cljs.core.rest.call(null,s__7389__$2)));
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
var seq__7392_7399 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));var chunk__7393_7400 = null;var count__7394_7401 = (0);var i__7395_7402 = (0);while(true){
if((i__7395_7402 < count__7394_7401))
{var vec__7396_7403 = cljs.core._nth.call(null,chunk__7393_7400,i__7395_7402);var osc_7404 = cljs.core.nth.call(null,vec__7396_7403,(0),null);var o_7405 = cljs.core.nth.call(null,vec__7396_7403,(1),null);(osc_7404["type"] = synth);
((osc_7404["frequency"])["value"] = (o_7405 * freq));
osc_7404.connect(gain);
osc_7404.start(start_time);
osc_7404.stop((start_time + dur));
{
var G__7406 = seq__7392_7399;
var G__7407 = chunk__7393_7400;
var G__7408 = count__7394_7401;
var G__7409 = (i__7395_7402 + (1));
seq__7392_7399 = G__7406;
chunk__7393_7400 = G__7407;
count__7394_7401 = G__7408;
i__7395_7402 = G__7409;
continue;
}
} else
{var temp__4126__auto___7410 = cljs.core.seq.call(null,seq__7392_7399);if(temp__4126__auto___7410)
{var seq__7392_7411__$1 = temp__4126__auto___7410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7392_7411__$1))
{var c__4410__auto___7412 = cljs.core.chunk_first.call(null,seq__7392_7411__$1);{
var G__7413 = cljs.core.chunk_rest.call(null,seq__7392_7411__$1);
var G__7414 = c__4410__auto___7412;
var G__7415 = cljs.core.count.call(null,c__4410__auto___7412);
var G__7416 = (0);
seq__7392_7399 = G__7413;
chunk__7393_7400 = G__7414;
count__7394_7401 = G__7415;
i__7395_7402 = G__7416;
continue;
}
} else
{var vec__7397_7417 = cljs.core.first.call(null,seq__7392_7411__$1);var osc_7418 = cljs.core.nth.call(null,vec__7397_7417,(0),null);var o_7419 = cljs.core.nth.call(null,vec__7397_7417,(1),null);(osc_7418["type"] = synth);
((osc_7418["frequency"])["value"] = (o_7419 * freq));
osc_7418.connect(gain);
osc_7418.start(start_time);
osc_7418.stop((start_time + dur));
{
var G__7420 = cljs.core.next.call(null,seq__7392_7411__$1);
var G__7421 = null;
var G__7422 = (0);
var G__7423 = (0);
seq__7392_7399 = G__7420;
chunk__7393_7400 = G__7421;
count__7394_7401 = G__7422;
i__7395_7402 = G__7423;
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
