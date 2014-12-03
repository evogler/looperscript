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
log.cljs$lang$applyTo = (function (arglist__5248){
var args = cljs.core.seq(arglist__5248);
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
cljs.looperscript.audio.on_mp3_load = (function on_mp3_load(req,fname){return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__5249_SHARP_){return cljs.looperscript.audio.on_decode.call(null,p1__5249_SHARP_,fname);
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
cljs.looperscript.audio.load_some_drums = (function load_some_drums(){var seq__5254 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);var chunk__5255 = null;var count__5256 = (0);var i__5257 = (0);while(true){
if((i__5257 < count__5256))
{var d = cljs.core._nth.call(null,chunk__5255,i__5257);cljs.looperscript.audio.load_file.call(null,d);
{
var G__5258 = seq__5254;
var G__5259 = chunk__5255;
var G__5260 = count__5256;
var G__5261 = (i__5257 + (1));
seq__5254 = G__5258;
chunk__5255 = G__5259;
count__5256 = G__5260;
i__5257 = G__5261;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5254);if(temp__4126__auto__)
{var seq__5254__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5254__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__5254__$1);{
var G__5262 = cljs.core.chunk_rest.call(null,seq__5254__$1);
var G__5263 = c__4410__auto__;
var G__5264 = cljs.core.count.call(null,c__4410__auto__);
var G__5265 = (0);
seq__5254 = G__5262;
chunk__5255 = G__5263;
count__5256 = G__5264;
i__5257 = G__5265;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__5254__$1);cljs.looperscript.audio.load_file.call(null,d);
{
var G__5266 = cljs.core.next.call(null,seq__5254__$1);
var G__5267 = null;
var G__5268 = (0);
var G__5269 = (0);
seq__5254 = G__5266;
chunk__5255 = G__5267;
count__5256 = G__5268;
i__5257 = G__5269;
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
cljs.looperscript.audio.play_filtered_tone = (function play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq,synth,overtones){var oscs = (function (){var iter__4379__auto__ = (function iter__5280(s__5281){return (new cljs.core.LazySeq(null,(function (){var s__5281__$1 = s__5281;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5281__$1);if(temp__4126__auto__)
{var s__5281__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5281__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__5281__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__5283 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__5282 = (0);while(true){
if((i__5282 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__5282);cljs.core.chunk_append.call(null,b__5283,cljs.looperscript.audio.ctx.createOscillator());
{
var G__5290 = (i__5282 + (1));
i__5282 = G__5290;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5283),iter__5280.call(null,cljs.core.chunk_rest.call(null,s__5281__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5283),null);
}
} else
{var i = cljs.core.first.call(null,s__5281__$2);return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),iter__5280.call(null,cljs.core.rest.call(null,s__5281__$2)));
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
var seq__5284_5291 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));var chunk__5285_5292 = null;var count__5286_5293 = (0);var i__5287_5294 = (0);while(true){
if((i__5287_5294 < count__5286_5293))
{var vec__5288_5295 = cljs.core._nth.call(null,chunk__5285_5292,i__5287_5294);var osc_5296 = cljs.core.nth.call(null,vec__5288_5295,(0),null);var o_5297 = cljs.core.nth.call(null,vec__5288_5295,(1),null);(osc_5296["type"] = synth);
((osc_5296["frequency"])["value"] = (o_5297 * freq));
osc_5296.connect(gain);
osc_5296.start(start_time);
osc_5296.stop((start_time + dur));
{
var G__5298 = seq__5284_5291;
var G__5299 = chunk__5285_5292;
var G__5300 = count__5286_5293;
var G__5301 = (i__5287_5294 + (1));
seq__5284_5291 = G__5298;
chunk__5285_5292 = G__5299;
count__5286_5293 = G__5300;
i__5287_5294 = G__5301;
continue;
}
} else
{var temp__4126__auto___5302 = cljs.core.seq.call(null,seq__5284_5291);if(temp__4126__auto___5302)
{var seq__5284_5303__$1 = temp__4126__auto___5302;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5284_5303__$1))
{var c__4410__auto___5304 = cljs.core.chunk_first.call(null,seq__5284_5303__$1);{
var G__5305 = cljs.core.chunk_rest.call(null,seq__5284_5303__$1);
var G__5306 = c__4410__auto___5304;
var G__5307 = cljs.core.count.call(null,c__4410__auto___5304);
var G__5308 = (0);
seq__5284_5291 = G__5305;
chunk__5285_5292 = G__5306;
count__5286_5293 = G__5307;
i__5287_5294 = G__5308;
continue;
}
} else
{var vec__5289_5309 = cljs.core.first.call(null,seq__5284_5303__$1);var osc_5310 = cljs.core.nth.call(null,vec__5289_5309,(0),null);var o_5311 = cljs.core.nth.call(null,vec__5289_5309,(1),null);(osc_5310["type"] = synth);
((osc_5310["frequency"])["value"] = (o_5311 * freq));
osc_5310.connect(gain);
osc_5310.start(start_time);
osc_5310.stop((start_time + dur));
{
var G__5312 = cljs.core.next.call(null,seq__5284_5303__$1);
var G__5313 = null;
var G__5314 = (0);
var G__5315 = (0);
seq__5284_5291 = G__5312;
chunk__5285_5292 = G__5313;
count__5286_5293 = G__5314;
i__5287_5294 = G__5315;
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
