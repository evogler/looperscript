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
log.cljs$lang$applyTo = (function (arglist__46124){
var args = cljs.core.seq(arglist__46124);
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
cljs.looperscript.audio.on_mp3_load = (function on_mp3_load(req,fname){return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__46125_SHARP_){return cljs.looperscript.audio.on_decode.call(null,p1__46125_SHARP_,fname);
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
cljs.looperscript.audio.load_some_drums = (function load_some_drums(){var seq__46130 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);var chunk__46131 = null;var count__46132 = (0);var i__46133 = (0);while(true){
if((i__46133 < count__46132))
{var d = cljs.core._nth.call(null,chunk__46131,i__46133);cljs.looperscript.audio.load_file.call(null,d);
{
var G__46134 = seq__46130;
var G__46135 = chunk__46131;
var G__46136 = count__46132;
var G__46137 = (i__46133 + (1));
seq__46130 = G__46134;
chunk__46131 = G__46135;
count__46132 = G__46136;
i__46133 = G__46137;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__46130);if(temp__4126__auto__)
{var seq__46130__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46130__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__46130__$1);{
var G__46138 = cljs.core.chunk_rest.call(null,seq__46130__$1);
var G__46139 = c__4410__auto__;
var G__46140 = cljs.core.count.call(null,c__4410__auto__);
var G__46141 = (0);
seq__46130 = G__46138;
chunk__46131 = G__46139;
count__46132 = G__46140;
i__46133 = G__46141;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__46130__$1);cljs.looperscript.audio.load_file.call(null,d);
{
var G__46142 = cljs.core.next.call(null,seq__46130__$1);
var G__46143 = null;
var G__46144 = (0);
var G__46145 = (0);
seq__46130 = G__46142;
chunk__46131 = G__46143;
count__46132 = G__46144;
i__46133 = G__46145;
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
cljs.looperscript.audio.play_filtered_tone = (function play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq,synth,overtones){var oscs = (function (){var iter__4379__auto__ = (function iter__46156(s__46157){return (new cljs.core.LazySeq(null,(function (){var s__46157__$1 = s__46157;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__46157__$1);if(temp__4126__auto__)
{var s__46157__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46157__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__46157__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__46159 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__46158 = (0);while(true){
if((i__46158 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__46158);cljs.core.chunk_append.call(null,b__46159,cljs.looperscript.audio.ctx.createOscillator());
{
var G__46166 = (i__46158 + (1));
i__46158 = G__46166;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46159),iter__46156.call(null,cljs.core.chunk_rest.call(null,s__46157__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46159),null);
}
} else
{var i = cljs.core.first.call(null,s__46157__$2);return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),iter__46156.call(null,cljs.core.rest.call(null,s__46157__$2)));
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
var seq__46160_46167 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));var chunk__46161_46168 = null;var count__46162_46169 = (0);var i__46163_46170 = (0);while(true){
if((i__46163_46170 < count__46162_46169))
{var vec__46164_46171 = cljs.core._nth.call(null,chunk__46161_46168,i__46163_46170);var osc_46172 = cljs.core.nth.call(null,vec__46164_46171,(0),null);var o_46173 = cljs.core.nth.call(null,vec__46164_46171,(1),null);(osc_46172["type"] = synth);
((osc_46172["frequency"])["value"] = (o_46173 * freq));
osc_46172.connect(gain);
osc_46172.start(start_time);
osc_46172.stop((start_time + dur));
{
var G__46174 = seq__46160_46167;
var G__46175 = chunk__46161_46168;
var G__46176 = count__46162_46169;
var G__46177 = (i__46163_46170 + (1));
seq__46160_46167 = G__46174;
chunk__46161_46168 = G__46175;
count__46162_46169 = G__46176;
i__46163_46170 = G__46177;
continue;
}
} else
{var temp__4126__auto___46178 = cljs.core.seq.call(null,seq__46160_46167);if(temp__4126__auto___46178)
{var seq__46160_46179__$1 = temp__4126__auto___46178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46160_46179__$1))
{var c__4410__auto___46180 = cljs.core.chunk_first.call(null,seq__46160_46179__$1);{
var G__46181 = cljs.core.chunk_rest.call(null,seq__46160_46179__$1);
var G__46182 = c__4410__auto___46180;
var G__46183 = cljs.core.count.call(null,c__4410__auto___46180);
var G__46184 = (0);
seq__46160_46167 = G__46181;
chunk__46161_46168 = G__46182;
count__46162_46169 = G__46183;
i__46163_46170 = G__46184;
continue;
}
} else
{var vec__46165_46185 = cljs.core.first.call(null,seq__46160_46179__$1);var osc_46186 = cljs.core.nth.call(null,vec__46165_46185,(0),null);var o_46187 = cljs.core.nth.call(null,vec__46165_46185,(1),null);(osc_46186["type"] = synth);
((osc_46186["frequency"])["value"] = (o_46187 * freq));
osc_46186.connect(gain);
osc_46186.start(start_time);
osc_46186.stop((start_time + dur));
{
var G__46188 = cljs.core.next.call(null,seq__46160_46179__$1);
var G__46189 = null;
var G__46190 = (0);
var G__46191 = (0);
seq__46160_46167 = G__46188;
chunk__46161_46168 = G__46189;
count__46162_46169 = G__46190;
i__46163_46170 = G__46191;
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
