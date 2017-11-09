// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.audio');
goog.require('cljs.core');
cljs.looperscript.audio.log = (function cljs$looperscript$audio$log(var_args){
var args__29112__auto__ = [];
var len__29105__auto___29480 = arguments.length;
var i__29106__auto___29481 = (0);
while(true){
if((i__29106__auto___29481 < len__29105__auto___29480)){
args__29112__auto__.push((arguments[i__29106__auto___29481]));

var G__29482 = (i__29106__auto___29481 + (1));
i__29106__auto___29481 = G__29482;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.audio.log.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

cljs.looperscript.audio.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(cljs.core.apply.call(null,cljs.core.str,args));
});

cljs.looperscript.audio.log.cljs$lang$maxFixedArity = (0);

cljs.looperscript.audio.log.cljs$lang$applyTo = (function (seq29479){
return cljs.looperscript.audio.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29479));
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
return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__29483_SHARP_){
return cljs.looperscript.audio.on_decode.call(null,p1__29483_SHARP_,fname);
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
var seq__29484 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);
var chunk__29485 = null;
var count__29486 = (0);
var i__29487 = (0);
while(true){
if((i__29487 < count__29486)){
var d = cljs.core._nth.call(null,chunk__29485,i__29487);
cljs.looperscript.audio.load_file.call(null,d);

var G__29488 = seq__29484;
var G__29489 = chunk__29485;
var G__29490 = count__29486;
var G__29491 = (i__29487 + (1));
seq__29484 = G__29488;
chunk__29485 = G__29489;
count__29486 = G__29490;
i__29487 = G__29491;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29484);
if(temp__4657__auto__){
var seq__29484__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29484__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__29484__$1);
var G__29492 = cljs.core.chunk_rest.call(null,seq__29484__$1);
var G__29493 = c__28775__auto__;
var G__29494 = cljs.core.count.call(null,c__28775__auto__);
var G__29495 = (0);
seq__29484 = G__29492;
chunk__29485 = G__29493;
count__29486 = G__29494;
i__29487 = G__29495;
continue;
} else {
var d = cljs.core.first.call(null,seq__29484__$1);
cljs.looperscript.audio.load_file.call(null,d);

var G__29496 = cljs.core.next.call(null,seq__29484__$1);
var G__29497 = null;
var G__29498 = (0);
var G__29499 = (0);
seq__29484 = G__29496;
chunk__29485 = G__29497;
count__29486 = G__29498;
i__29487 = G__29499;
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
var oscs = (function (){var iter__28744__auto__ = (function cljs$looperscript$audio$play_filtered_tone_$_iter__29500(s__29501){
return (new cljs.core.LazySeq(null,(function (){
var s__29501__$1 = s__29501;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29501__$1);
if(temp__4657__auto__){
var s__29501__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29501__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__29501__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__29503 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__29502 = (0);
while(true){
if((i__29502 < size__28743__auto__)){
var i = cljs.core._nth.call(null,c__28742__auto__,i__29502);
cljs.core.chunk_append.call(null,b__29503,cljs.looperscript.audio.ctx.createOscillator());

var G__29514 = (i__29502 + (1));
i__29502 = G__29514;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29503),cljs$looperscript$audio$play_filtered_tone_$_iter__29500.call(null,cljs.core.chunk_rest.call(null,s__29501__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29503),null);
}
} else {
var i = cljs.core.first.call(null,s__29501__$2);
return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),cljs$looperscript$audio$play_filtered_tone_$_iter__29500.call(null,cljs.core.rest.call(null,s__29501__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28744__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,overtones)));
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

var seq__29504_29515 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));
var chunk__29505_29516 = null;
var count__29506_29517 = (0);
var i__29507_29518 = (0);
while(true){
if((i__29507_29518 < count__29506_29517)){
var vec__29508_29519 = cljs.core._nth.call(null,chunk__29505_29516,i__29507_29518);
var osc_29520 = cljs.core.nth.call(null,vec__29508_29519,(0),null);
var o_29521 = cljs.core.nth.call(null,vec__29508_29519,(1),null);
(osc_29520["type"] = synth);

((osc_29520["frequency"])["value"] = (o_29521 * freq));

osc_29520.connect(gain);

osc_29520.start(start_time);

osc_29520.stop((start_time + dur));

var G__29522 = seq__29504_29515;
var G__29523 = chunk__29505_29516;
var G__29524 = count__29506_29517;
var G__29525 = (i__29507_29518 + (1));
seq__29504_29515 = G__29522;
chunk__29505_29516 = G__29523;
count__29506_29517 = G__29524;
i__29507_29518 = G__29525;
continue;
} else {
var temp__4657__auto___29526 = cljs.core.seq.call(null,seq__29504_29515);
if(temp__4657__auto___29526){
var seq__29504_29527__$1 = temp__4657__auto___29526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29504_29527__$1)){
var c__28775__auto___29528 = cljs.core.chunk_first.call(null,seq__29504_29527__$1);
var G__29529 = cljs.core.chunk_rest.call(null,seq__29504_29527__$1);
var G__29530 = c__28775__auto___29528;
var G__29531 = cljs.core.count.call(null,c__28775__auto___29528);
var G__29532 = (0);
seq__29504_29515 = G__29529;
chunk__29505_29516 = G__29530;
count__29506_29517 = G__29531;
i__29507_29518 = G__29532;
continue;
} else {
var vec__29511_29533 = cljs.core.first.call(null,seq__29504_29527__$1);
var osc_29534 = cljs.core.nth.call(null,vec__29511_29533,(0),null);
var o_29535 = cljs.core.nth.call(null,vec__29511_29533,(1),null);
(osc_29534["type"] = synth);

((osc_29534["frequency"])["value"] = (o_29535 * freq));

osc_29534.connect(gain);

osc_29534.start(start_time);

osc_29534.stop((start_time + dur));

var G__29536 = cljs.core.next.call(null,seq__29504_29527__$1);
var G__29537 = null;
var G__29538 = (0);
var G__29539 = (0);
seq__29504_29515 = G__29536;
chunk__29505_29516 = G__29537;
count__29506_29517 = G__29538;
i__29507_29518 = G__29539;
continue;
}
} else {
}
}
break;
}

return oscs;
});

//# sourceMappingURL=audio.js.map?rel=1509844996631
