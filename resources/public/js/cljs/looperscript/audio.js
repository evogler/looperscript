// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.audio');
goog.require('cljs.core');
cljs.looperscript.audio.ctx = (new AudioContext());
cljs.looperscript.audio.drums = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["kick","snare","hat","sidestick","ride-bell","ride"], null);
cljs.looperscript.audio.sample_lags = new cljs.core.PersistentArrayMap(null, 6, ["kick",0.026,"snare",0.0293,"hat",0.0267,"sidestick",0.0245,"ride-bell",0.0395,"ride",0.0443], null);
cljs.looperscript.audio.drum_codes = new cljs.core.PersistentArrayMap(null, 6, ["k","kick","s","snare","h","hat","d","sidestick","b","ride-bell","r","ride"], null);
cljs.looperscript.audio.buffers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.audio.sample_folder = "/media/webaudio/sample/mp3s/";
cljs.looperscript.audio.on_decode = (function on_decode(buffer,fname){cljs.core.swap_BANG_.call(null,cljs.looperscript.audio.buffers,cljs.core.assoc,fname,buffer);
return console.log("loaded",fname,cljs.core.rand_int.call(null,(99)));
});
cljs.looperscript.audio.on_mp3_load = (function on_mp3_load(req,fname){return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__12829_SHARP_){return cljs.looperscript.audio.on_decode.call(null,p1__12829_SHARP_,fname);
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
cljs.looperscript.audio.load_some_drums = (function load_some_drums(){var seq__12834 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);var chunk__12835 = null;var count__12836 = (0);var i__12837 = (0);while(true){
if((i__12837 < count__12836))
{var d = cljs.core._nth.call(null,chunk__12835,i__12837);cljs.looperscript.audio.load_file.call(null,d);
{
var G__12838 = seq__12834;
var G__12839 = chunk__12835;
var G__12840 = count__12836;
var G__12841 = (i__12837 + (1));
seq__12834 = G__12838;
chunk__12835 = G__12839;
count__12836 = G__12840;
i__12837 = G__12841;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12834);if(temp__4126__auto__)
{var seq__12834__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12834__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__12834__$1);{
var G__12842 = cljs.core.chunk_rest.call(null,seq__12834__$1);
var G__12843 = c__4410__auto__;
var G__12844 = cljs.core.count.call(null,c__4410__auto__);
var G__12845 = (0);
seq__12834 = G__12842;
chunk__12835 = G__12843;
count__12836 = G__12844;
i__12837 = G__12845;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__12834__$1);cljs.looperscript.audio.load_file.call(null,d);
{
var G__12846 = cljs.core.next.call(null,seq__12834__$1);
var G__12847 = null;
var G__12848 = (0);
var G__12849 = (0);
seq__12834 = G__12846;
chunk__12835 = G__12847;
count__12836 = G__12848;
i__12837 = G__12849;
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
cljs.looperscript.audio.play_tone = (function play_tone(freq,start_time,dur,vol,pan){var osc = cljs.looperscript.audio.ctx.createOscillator();var gain = cljs.looperscript.audio.ctx.createGain();(osc["type"] = "sawtooth");
((osc["frequency"])["value"] = freq);
((gain["gain"])["value"] = (0.1 * vol));
osc.connect(gain);
gain.connect((cljs.looperscript.audio.ctx["destination"]));
osc.start(start_time);
osc.stop((start_time + dur));
return osc;
});
cljs.looperscript.audio.play_filtered_tone = (function play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq){var osc = cljs.looperscript.audio.ctx.createOscillator();var gain = cljs.looperscript.audio.ctx.createGain();var q = 0.25;var filter = cljs.looperscript.audio.ctx.createBiquadFilter();var panner = cljs.looperscript.audio.ctx.createPanner();(osc["type"] = "sawtooth");
((osc["frequency"])["value"] = freq);
((gain["gain"])["value"] = (0.1 * vol));
((filter["frequency"])["value"] = filt_freq);
((filter["Q"])["value"] = q);
(panner["panningModel"] = "equalpower");
panner.setPosition(pan,(0),(0));
osc.connect(gain);
gain.connect(filter);
filter.connect(panner);
panner.connect((cljs.looperscript.audio.ctx["destination"]));
osc.start(start_time);
osc.stop((start_time + dur));
return osc;
});
