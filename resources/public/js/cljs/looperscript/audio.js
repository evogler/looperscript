// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.audio');
goog.require('cljs.core');
cljs.looperscript.audio.log = (function cljs$looperscript$audio$log(var_args){
var args__8594__auto__ = [];
var len__8587__auto___9018 = arguments.length;
var i__8588__auto___9019 = (0);
while(true){
if((i__8588__auto___9019 < len__8587__auto___9018)){
args__8594__auto__.push((arguments[i__8588__auto___9019]));

var G__9020 = (i__8588__auto___9019 + (1));
i__8588__auto___9019 = G__9020;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((0) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.audio.log.cljs$core$IFn$_invoke$arity$variadic(argseq__8595__auto__);
});

cljs.looperscript.audio.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(cljs.core.apply.call(null,cljs.core.str,args));
});

cljs.looperscript.audio.log.cljs$lang$maxFixedArity = (0);

cljs.looperscript.audio.log.cljs$lang$applyTo = (function (seq9017){
return cljs.looperscript.audio.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9017));
});

cljs.looperscript.audio.ctx = (new AudioContext());
cljs.looperscript.audio.drums = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["kick","snare","hat","sidestick","ride-bell","ride"], null);
cljs.looperscript.audio.sample_lags = new cljs.core.PersistentArrayMap(null, 6, ["kick",0.026,"snare",0.0293,"hat",0.0267,"sidestick",0.0245,"ride-bell",0.0395,"ride",0.0443], null);
cljs.looperscript.audio.drum_codes = new cljs.core.PersistentArrayMap(null, 6, ["k","kick","s","snare","h","hat","d","sidestick","b","ride-bell","r","ride"], null);
cljs.looperscript.audio.buffers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.looperscript.audio.sample_folder = "/media/webaudio/sample/mp3s/";
cljs.looperscript.audio.on_decode = (function cljs$looperscript$audio$on_decode(buffer,fname){
cljs.core.swap_BANG_.call(null,cljs.looperscript.audio.buffers,cljs.core.assoc,fname,buffer);

return console.log("loaded",fname,cljs.core.rand_int.call(null,(99)));
});
cljs.looperscript.audio.on_mp3_load = (function cljs$looperscript$audio$on_mp3_load(req,fname){
return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__9021_SHARP_){
return cljs.looperscript.audio.on_decode.call(null,p1__9021_SHARP_,fname);
}));
});
cljs.looperscript.audio.load_file = (function cljs$looperscript$audio$load_file(fname){
var req = (new XMLHttpRequest());
var full_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.looperscript.audio.sample_folder),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname),".mp3"].join('');
req.open("GET",full_name);

(req["responseType"] = "arraybuffer");

(req["onload"] = ((function (req,full_name){
return (function (){
return cljs.looperscript.audio.on_mp3_load.call(null,req,fname);
});})(req,full_name))
);

return req.send();
});
cljs.looperscript.audio.load_some_drums = (function cljs$looperscript$audio$load_some_drums(){
var seq__9022 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);
var chunk__9023 = null;
var count__9024 = (0);
var i__9025 = (0);
while(true){
if((i__9025 < count__9024)){
var d = cljs.core._nth.call(null,chunk__9023,i__9025);
cljs.looperscript.audio.load_file.call(null,d);

var G__9026 = seq__9022;
var G__9027 = chunk__9023;
var G__9028 = count__9024;
var G__9029 = (i__9025 + (1));
seq__9022 = G__9026;
chunk__9023 = G__9027;
count__9024 = G__9028;
i__9025 = G__9029;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9022);
if(temp__4657__auto__){
var seq__9022__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9022__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__9022__$1);
var G__9030 = cljs.core.chunk_rest.call(null,seq__9022__$1);
var G__9031 = c__8257__auto__;
var G__9032 = cljs.core.count.call(null,c__8257__auto__);
var G__9033 = (0);
seq__9022 = G__9030;
chunk__9023 = G__9031;
count__9024 = G__9032;
i__9025 = G__9033;
continue;
} else {
var d = cljs.core.first.call(null,seq__9022__$1);
cljs.looperscript.audio.load_file.call(null,d);

var G__9034 = cljs.core.next.call(null,seq__9022__$1);
var G__9035 = null;
var G__9036 = (0);
var G__9037 = (0);
seq__9022 = G__9034;
chunk__9023 = G__9035;
count__9024 = G__9036;
i__9025 = G__9037;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.looperscript.audio.play_sound = (function cljs$looperscript$audio$play_sound(fname,start_time,vol,rate){
var buf_s = cljs.looperscript.audio.ctx.createBufferSource();
var gain = cljs.looperscript.audio.ctx.createGain();
(buf_s["buffer"] = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.looperscript.audio.buffers),fname));

((buf_s["playbackRate"])["value"] = rate);

((gain["gain"])["value"] = vol);

buf_s.connect(gain);

gain.connect((cljs.looperscript.audio.ctx["destination"]));

buf_s.start(start_time);

return buf_s;
});
cljs.looperscript.audio.play_tone = (function cljs$looperscript$audio$play_tone(freq,start_time,dur,vol,pan,synth,overtones){
var osc = cljs.looperscript.audio.ctx.createOscillator();
var gain = cljs.looperscript.audio.ctx.createGain();
(osc["type"] = synth);

((osc["frequency"])["value"] = freq);

((gain["gain"])["value"] = (0.1 * vol));

osc.connect(gain);

gain.connect((cljs.looperscript.audio.ctx["destination"]));

osc.start(start_time);

osc.stop((start_time + dur));

return osc;
});
cljs.looperscript.audio.play_filtered_tone = (function cljs$looperscript$audio$play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq,synth,overtones){
var oscs = (function (){var iter__8226__auto__ = (function cljs$looperscript$audio$play_filtered_tone_$_iter__9038(s__9039){
return (new cljs.core.LazySeq(null,(function (){
var s__9039__$1 = s__9039;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9039__$1);
if(temp__4657__auto__){
var s__9039__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9039__$2)){
var c__8224__auto__ = cljs.core.chunk_first.call(null,s__9039__$2);
var size__8225__auto__ = cljs.core.count.call(null,c__8224__auto__);
var b__9041 = cljs.core.chunk_buffer.call(null,size__8225__auto__);
if((function (){var i__9040 = (0);
while(true){
if((i__9040 < size__8225__auto__)){
var i = cljs.core._nth.call(null,c__8224__auto__,i__9040);
cljs.core.chunk_append.call(null,b__9041,cljs.looperscript.audio.ctx.createOscillator());

var G__9052 = (i__9040 + (1));
i__9040 = G__9052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9041),cljs$looperscript$audio$play_filtered_tone_$_iter__9038.call(null,cljs.core.chunk_rest.call(null,s__9039__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9041),null);
}
} else {
var i = cljs.core.first.call(null,s__9039__$2);
return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),cljs$looperscript$audio$play_filtered_tone_$_iter__9038.call(null,cljs.core.rest.call(null,s__9039__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8226__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,overtones)));
})();
var gain = cljs.looperscript.audio.ctx.createGain();
var q = 0.25;
var filter = cljs.looperscript.audio.ctx.createBiquadFilter();
var panner = cljs.looperscript.audio.ctx.createPanner();
((gain["gain"])["value"] = (0.1 * vol));

(gain["gain"]).linearRampToValueAtTime((0.1 * vol),start_time);

(gain["gain"]).exponentialRampToValueAtTime(((0.1 * 0.3) * vol),(start_time + 0.5));

((filter["frequency"])["value"] = filt_freq);

((filter["Q"])["value"] = q);

(filter["frequency"]).exponentialRampToValueAtTime(filt_freq,start_time);

(filter["frequency"]).exponentialRampToValueAtTime((1000),(0.3 + start_time));

(panner["panningModel"] = "equalpower");

panner.setPosition(pan,(0),(0));

gain.connect(filter);

filter.connect(panner);

panner.connect((cljs.looperscript.audio.ctx["destination"]));

var seq__9042_9053 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));
var chunk__9043_9054 = null;
var count__9044_9055 = (0);
var i__9045_9056 = (0);
while(true){
if((i__9045_9056 < count__9044_9055)){
var vec__9046_9057 = cljs.core._nth.call(null,chunk__9043_9054,i__9045_9056);
var osc_9058 = cljs.core.nth.call(null,vec__9046_9057,(0),null);
var o_9059 = cljs.core.nth.call(null,vec__9046_9057,(1),null);
(osc_9058["type"] = synth);

((osc_9058["frequency"])["value"] = (o_9059 * freq));

osc_9058.connect(gain);

osc_9058.start(start_time);

osc_9058.stop((start_time + dur));

var G__9060 = seq__9042_9053;
var G__9061 = chunk__9043_9054;
var G__9062 = count__9044_9055;
var G__9063 = (i__9045_9056 + (1));
seq__9042_9053 = G__9060;
chunk__9043_9054 = G__9061;
count__9044_9055 = G__9062;
i__9045_9056 = G__9063;
continue;
} else {
var temp__4657__auto___9064 = cljs.core.seq.call(null,seq__9042_9053);
if(temp__4657__auto___9064){
var seq__9042_9065__$1 = temp__4657__auto___9064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9042_9065__$1)){
var c__8257__auto___9066 = cljs.core.chunk_first.call(null,seq__9042_9065__$1);
var G__9067 = cljs.core.chunk_rest.call(null,seq__9042_9065__$1);
var G__9068 = c__8257__auto___9066;
var G__9069 = cljs.core.count.call(null,c__8257__auto___9066);
var G__9070 = (0);
seq__9042_9053 = G__9067;
chunk__9043_9054 = G__9068;
count__9044_9055 = G__9069;
i__9045_9056 = G__9070;
continue;
} else {
var vec__9049_9071 = cljs.core.first.call(null,seq__9042_9065__$1);
var osc_9072 = cljs.core.nth.call(null,vec__9049_9071,(0),null);
var o_9073 = cljs.core.nth.call(null,vec__9049_9071,(1),null);
(osc_9072["type"] = synth);

((osc_9072["frequency"])["value"] = (o_9073 * freq));

osc_9072.connect(gain);

osc_9072.start(start_time);

osc_9072.stop((start_time + dur));

var G__9074 = cljs.core.next.call(null,seq__9042_9065__$1);
var G__9075 = null;
var G__9076 = (0);
var G__9077 = (0);
seq__9042_9053 = G__9074;
chunk__9043_9054 = G__9075;
count__9044_9055 = G__9076;
i__9045_9056 = G__9077;
continue;
}
} else {
}
}
break;
}

return oscs;
});

//# sourceMappingURL=audio.js.map
