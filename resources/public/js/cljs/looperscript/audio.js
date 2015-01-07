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
log.cljs$lang$applyTo = (function (arglist__19071){
var args = cljs.core.seq(arglist__19071);
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
cljs.looperscript.audio.on_mp3_load = (function on_mp3_load(req,fname){return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__19072_SHARP_){return cljs.looperscript.audio.on_decode.call(null,p1__19072_SHARP_,fname);
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
cljs.looperscript.audio.load_some_drums = (function load_some_drums(){var seq__19077 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);var chunk__19078 = null;var count__19079 = (0);var i__19080 = (0);while(true){
if((i__19080 < count__19079))
{var d = cljs.core._nth.call(null,chunk__19078,i__19080);cljs.looperscript.audio.load_file.call(null,d);
{
var G__19081 = seq__19077;
var G__19082 = chunk__19078;
var G__19083 = count__19079;
var G__19084 = (i__19080 + (1));
seq__19077 = G__19081;
chunk__19078 = G__19082;
count__19079 = G__19083;
i__19080 = G__19084;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19077);if(temp__4126__auto__)
{var seq__19077__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19077__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__19077__$1);{
var G__19085 = cljs.core.chunk_rest.call(null,seq__19077__$1);
var G__19086 = c__4410__auto__;
var G__19087 = cljs.core.count.call(null,c__4410__auto__);
var G__19088 = (0);
seq__19077 = G__19085;
chunk__19078 = G__19086;
count__19079 = G__19087;
i__19080 = G__19088;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__19077__$1);cljs.looperscript.audio.load_file.call(null,d);
{
var G__19089 = cljs.core.next.call(null,seq__19077__$1);
var G__19090 = null;
var G__19091 = (0);
var G__19092 = (0);
seq__19077 = G__19089;
chunk__19078 = G__19090;
count__19079 = G__19091;
i__19080 = G__19092;
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
cljs.looperscript.audio.play_filtered_tone = (function play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq,synth,overtones){var oscs = (function (){var iter__4379__auto__ = (function iter__19103(s__19104){return (new cljs.core.LazySeq(null,(function (){var s__19104__$1 = s__19104;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19104__$1);if(temp__4126__auto__)
{var s__19104__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19104__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__19104__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__19106 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__19105 = (0);while(true){
if((i__19105 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__19105);cljs.core.chunk_append.call(null,b__19106,cljs.looperscript.audio.ctx.createOscillator());
{
var G__19113 = (i__19105 + (1));
i__19105 = G__19113;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19106),iter__19103.call(null,cljs.core.chunk_rest.call(null,s__19104__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19106),null);
}
} else
{var i = cljs.core.first.call(null,s__19104__$2);return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),iter__19103.call(null,cljs.core.rest.call(null,s__19104__$2)));
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
var seq__19107_19114 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));var chunk__19108_19115 = null;var count__19109_19116 = (0);var i__19110_19117 = (0);while(true){
if((i__19110_19117 < count__19109_19116))
{var vec__19111_19118 = cljs.core._nth.call(null,chunk__19108_19115,i__19110_19117);var osc_19119 = cljs.core.nth.call(null,vec__19111_19118,(0),null);var o_19120 = cljs.core.nth.call(null,vec__19111_19118,(1),null);(osc_19119["type"] = synth);
((osc_19119["frequency"])["value"] = (o_19120 * freq));
osc_19119.connect(gain);
osc_19119.start(start_time);
osc_19119.stop((start_time + dur));
{
var G__19121 = seq__19107_19114;
var G__19122 = chunk__19108_19115;
var G__19123 = count__19109_19116;
var G__19124 = (i__19110_19117 + (1));
seq__19107_19114 = G__19121;
chunk__19108_19115 = G__19122;
count__19109_19116 = G__19123;
i__19110_19117 = G__19124;
continue;
}
} else
{var temp__4126__auto___19125 = cljs.core.seq.call(null,seq__19107_19114);if(temp__4126__auto___19125)
{var seq__19107_19126__$1 = temp__4126__auto___19125;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19107_19126__$1))
{var c__4410__auto___19127 = cljs.core.chunk_first.call(null,seq__19107_19126__$1);{
var G__19128 = cljs.core.chunk_rest.call(null,seq__19107_19126__$1);
var G__19129 = c__4410__auto___19127;
var G__19130 = cljs.core.count.call(null,c__4410__auto___19127);
var G__19131 = (0);
seq__19107_19114 = G__19128;
chunk__19108_19115 = G__19129;
count__19109_19116 = G__19130;
i__19110_19117 = G__19131;
continue;
}
} else
{var vec__19112_19132 = cljs.core.first.call(null,seq__19107_19126__$1);var osc_19133 = cljs.core.nth.call(null,vec__19112_19132,(0),null);var o_19134 = cljs.core.nth.call(null,vec__19112_19132,(1),null);(osc_19133["type"] = synth);
((osc_19133["frequency"])["value"] = (o_19134 * freq));
osc_19133.connect(gain);
osc_19133.start(start_time);
osc_19133.stop((start_time + dur));
{
var G__19135 = cljs.core.next.call(null,seq__19107_19126__$1);
var G__19136 = null;
var G__19137 = (0);
var G__19138 = (0);
seq__19107_19114 = G__19135;
chunk__19108_19115 = G__19136;
count__19109_19116 = G__19137;
i__19110_19117 = G__19138;
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
