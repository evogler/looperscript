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
log.cljs$lang$applyTo = (function (arglist__11218){
var args = cljs.core.seq(arglist__11218);
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
cljs.looperscript.audio.on_mp3_load = (function on_mp3_load(req,fname){return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__11219_SHARP_){return cljs.looperscript.audio.on_decode.call(null,p1__11219_SHARP_,fname);
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
cljs.looperscript.audio.load_some_drums = (function load_some_drums(){var seq__11224 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);var chunk__11225 = null;var count__11226 = (0);var i__11227 = (0);while(true){
if((i__11227 < count__11226))
{var d = cljs.core._nth.call(null,chunk__11225,i__11227);cljs.looperscript.audio.load_file.call(null,d);
{
var G__11228 = seq__11224;
var G__11229 = chunk__11225;
var G__11230 = count__11226;
var G__11231 = (i__11227 + (1));
seq__11224 = G__11228;
chunk__11225 = G__11229;
count__11226 = G__11230;
i__11227 = G__11231;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11224);if(temp__4126__auto__)
{var seq__11224__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11224__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__11224__$1);{
var G__11232 = cljs.core.chunk_rest.call(null,seq__11224__$1);
var G__11233 = c__4410__auto__;
var G__11234 = cljs.core.count.call(null,c__4410__auto__);
var G__11235 = (0);
seq__11224 = G__11232;
chunk__11225 = G__11233;
count__11226 = G__11234;
i__11227 = G__11235;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__11224__$1);cljs.looperscript.audio.load_file.call(null,d);
{
var G__11236 = cljs.core.next.call(null,seq__11224__$1);
var G__11237 = null;
var G__11238 = (0);
var G__11239 = (0);
seq__11224 = G__11236;
chunk__11225 = G__11237;
count__11226 = G__11238;
i__11227 = G__11239;
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
cljs.looperscript.audio.play_filtered_tone = (function play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq,synth,overtones){var oscs = (function (){var iter__4379__auto__ = (function iter__11250(s__11251){return (new cljs.core.LazySeq(null,(function (){var s__11251__$1 = s__11251;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11251__$1);if(temp__4126__auto__)
{var s__11251__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11251__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__11251__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__11253 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__11252 = (0);while(true){
if((i__11252 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__11252);cljs.core.chunk_append.call(null,b__11253,cljs.looperscript.audio.ctx.createOscillator());
{
var G__11260 = (i__11252 + (1));
i__11252 = G__11260;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11253),iter__11250.call(null,cljs.core.chunk_rest.call(null,s__11251__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11253),null);
}
} else
{var i = cljs.core.first.call(null,s__11251__$2);return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),iter__11250.call(null,cljs.core.rest.call(null,s__11251__$2)));
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
var seq__11254_11261 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));var chunk__11255_11262 = null;var count__11256_11263 = (0);var i__11257_11264 = (0);while(true){
if((i__11257_11264 < count__11256_11263))
{var vec__11258_11265 = cljs.core._nth.call(null,chunk__11255_11262,i__11257_11264);var osc_11266 = cljs.core.nth.call(null,vec__11258_11265,(0),null);var o_11267 = cljs.core.nth.call(null,vec__11258_11265,(1),null);(osc_11266["type"] = synth);
((osc_11266["frequency"])["value"] = (o_11267 * freq));
osc_11266.connect(gain);
osc_11266.start(start_time);
osc_11266.stop((start_time + dur));
{
var G__11268 = seq__11254_11261;
var G__11269 = chunk__11255_11262;
var G__11270 = count__11256_11263;
var G__11271 = (i__11257_11264 + (1));
seq__11254_11261 = G__11268;
chunk__11255_11262 = G__11269;
count__11256_11263 = G__11270;
i__11257_11264 = G__11271;
continue;
}
} else
{var temp__4126__auto___11272 = cljs.core.seq.call(null,seq__11254_11261);if(temp__4126__auto___11272)
{var seq__11254_11273__$1 = temp__4126__auto___11272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11254_11273__$1))
{var c__4410__auto___11274 = cljs.core.chunk_first.call(null,seq__11254_11273__$1);{
var G__11275 = cljs.core.chunk_rest.call(null,seq__11254_11273__$1);
var G__11276 = c__4410__auto___11274;
var G__11277 = cljs.core.count.call(null,c__4410__auto___11274);
var G__11278 = (0);
seq__11254_11261 = G__11275;
chunk__11255_11262 = G__11276;
count__11256_11263 = G__11277;
i__11257_11264 = G__11278;
continue;
}
} else
{var vec__11259_11279 = cljs.core.first.call(null,seq__11254_11273__$1);var osc_11280 = cljs.core.nth.call(null,vec__11259_11279,(0),null);var o_11281 = cljs.core.nth.call(null,vec__11259_11279,(1),null);(osc_11280["type"] = synth);
((osc_11280["frequency"])["value"] = (o_11281 * freq));
osc_11280.connect(gain);
osc_11280.start(start_time);
osc_11280.stop((start_time + dur));
{
var G__11282 = cljs.core.next.call(null,seq__11254_11273__$1);
var G__11283 = null;
var G__11284 = (0);
var G__11285 = (0);
seq__11254_11261 = G__11282;
chunk__11255_11262 = G__11283;
count__11256_11263 = G__11284;
i__11257_11264 = G__11285;
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
