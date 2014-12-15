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
log.cljs$lang$applyTo = (function (arglist__32228){
var args = cljs.core.seq(arglist__32228);
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
cljs.looperscript.audio.on_mp3_load = (function on_mp3_load(req,fname){return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__32229_SHARP_){return cljs.looperscript.audio.on_decode.call(null,p1__32229_SHARP_,fname);
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
cljs.looperscript.audio.load_some_drums = (function load_some_drums(){var seq__32234 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);var chunk__32235 = null;var count__32236 = (0);var i__32237 = (0);while(true){
if((i__32237 < count__32236))
{var d = cljs.core._nth.call(null,chunk__32235,i__32237);cljs.looperscript.audio.load_file.call(null,d);
{
var G__32238 = seq__32234;
var G__32239 = chunk__32235;
var G__32240 = count__32236;
var G__32241 = (i__32237 + (1));
seq__32234 = G__32238;
chunk__32235 = G__32239;
count__32236 = G__32240;
i__32237 = G__32241;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32234);if(temp__4126__auto__)
{var seq__32234__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32234__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__32234__$1);{
var G__32242 = cljs.core.chunk_rest.call(null,seq__32234__$1);
var G__32243 = c__4410__auto__;
var G__32244 = cljs.core.count.call(null,c__4410__auto__);
var G__32245 = (0);
seq__32234 = G__32242;
chunk__32235 = G__32243;
count__32236 = G__32244;
i__32237 = G__32245;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__32234__$1);cljs.looperscript.audio.load_file.call(null,d);
{
var G__32246 = cljs.core.next.call(null,seq__32234__$1);
var G__32247 = null;
var G__32248 = (0);
var G__32249 = (0);
seq__32234 = G__32246;
chunk__32235 = G__32247;
count__32236 = G__32248;
i__32237 = G__32249;
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
cljs.looperscript.audio.play_filtered_tone = (function play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq,synth,overtones){var oscs = (function (){var iter__4379__auto__ = (function iter__32260(s__32261){return (new cljs.core.LazySeq(null,(function (){var s__32261__$1 = s__32261;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32261__$1);if(temp__4126__auto__)
{var s__32261__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32261__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__32261__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__32263 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__32262 = (0);while(true){
if((i__32262 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__32262);cljs.core.chunk_append.call(null,b__32263,cljs.looperscript.audio.ctx.createOscillator());
{
var G__32270 = (i__32262 + (1));
i__32262 = G__32270;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32263),iter__32260.call(null,cljs.core.chunk_rest.call(null,s__32261__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32263),null);
}
} else
{var i = cljs.core.first.call(null,s__32261__$2);return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),iter__32260.call(null,cljs.core.rest.call(null,s__32261__$2)));
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
var seq__32264_32271 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));var chunk__32265_32272 = null;var count__32266_32273 = (0);var i__32267_32274 = (0);while(true){
if((i__32267_32274 < count__32266_32273))
{var vec__32268_32275 = cljs.core._nth.call(null,chunk__32265_32272,i__32267_32274);var osc_32276 = cljs.core.nth.call(null,vec__32268_32275,(0),null);var o_32277 = cljs.core.nth.call(null,vec__32268_32275,(1),null);(osc_32276["type"] = synth);
((osc_32276["frequency"])["value"] = (o_32277 * freq));
osc_32276.connect(gain);
osc_32276.start(start_time);
osc_32276.stop((start_time + dur));
{
var G__32278 = seq__32264_32271;
var G__32279 = chunk__32265_32272;
var G__32280 = count__32266_32273;
var G__32281 = (i__32267_32274 + (1));
seq__32264_32271 = G__32278;
chunk__32265_32272 = G__32279;
count__32266_32273 = G__32280;
i__32267_32274 = G__32281;
continue;
}
} else
{var temp__4126__auto___32282 = cljs.core.seq.call(null,seq__32264_32271);if(temp__4126__auto___32282)
{var seq__32264_32283__$1 = temp__4126__auto___32282;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32264_32283__$1))
{var c__4410__auto___32284 = cljs.core.chunk_first.call(null,seq__32264_32283__$1);{
var G__32285 = cljs.core.chunk_rest.call(null,seq__32264_32283__$1);
var G__32286 = c__4410__auto___32284;
var G__32287 = cljs.core.count.call(null,c__4410__auto___32284);
var G__32288 = (0);
seq__32264_32271 = G__32285;
chunk__32265_32272 = G__32286;
count__32266_32273 = G__32287;
i__32267_32274 = G__32288;
continue;
}
} else
{var vec__32269_32289 = cljs.core.first.call(null,seq__32264_32283__$1);var osc_32290 = cljs.core.nth.call(null,vec__32269_32289,(0),null);var o_32291 = cljs.core.nth.call(null,vec__32269_32289,(1),null);(osc_32290["type"] = synth);
((osc_32290["frequency"])["value"] = (o_32291 * freq));
osc_32290.connect(gain);
osc_32290.start(start_time);
osc_32290.stop((start_time + dur));
{
var G__32292 = cljs.core.next.call(null,seq__32264_32283__$1);
var G__32293 = null;
var G__32294 = (0);
var G__32295 = (0);
seq__32264_32271 = G__32292;
chunk__32265_32272 = G__32293;
count__32266_32273 = G__32294;
i__32267_32274 = G__32295;
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
