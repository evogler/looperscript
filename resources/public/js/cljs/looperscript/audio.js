// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.audio');
goog.require('cljs.core');
cljs.looperscript.audio.log = (function cljs$looperscript$audio$log(var_args){
var args__28885__auto__ = [];
var len__28878__auto___40490 = arguments.length;
var i__28879__auto___40491 = (0);
while(true){
if((i__28879__auto___40491 < len__28878__auto___40490)){
args__28885__auto__.push((arguments[i__28879__auto___40491]));

var G__40492 = (i__28879__auto___40491 + (1));
i__28879__auto___40491 = G__40492;
continue;
} else {
}
break;
}

var argseq__28886__auto__ = ((((0) < args__28885__auto__.length))?(new cljs.core.IndexedSeq(args__28885__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.audio.log.cljs$core$IFn$_invoke$arity$variadic(argseq__28886__auto__);
});

cljs.looperscript.audio.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(cljs.core.apply.call(null,cljs.core.str,args));
});

cljs.looperscript.audio.log.cljs$lang$maxFixedArity = (0);

cljs.looperscript.audio.log.cljs$lang$applyTo = (function (seq40489){
return cljs.looperscript.audio.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40489));
});

if(typeof cljs.looperscript.audio.ctx !== 'undefined'){
} else {
cljs.looperscript.audio.ctx = (new AudioContext());
}
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
return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__40493_SHARP_){
return cljs.looperscript.audio.on_decode.call(null,p1__40493_SHARP_,fname);
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
var seq__40494 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);
var chunk__40495 = null;
var count__40496 = (0);
var i__40497 = (0);
while(true){
if((i__40497 < count__40496)){
var d = cljs.core._nth.call(null,chunk__40495,i__40497);
cljs.looperscript.audio.load_file.call(null,d);

var G__40498 = seq__40494;
var G__40499 = chunk__40495;
var G__40500 = count__40496;
var G__40501 = (i__40497 + (1));
seq__40494 = G__40498;
chunk__40495 = G__40499;
count__40496 = G__40500;
i__40497 = G__40501;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40494);
if(temp__4657__auto__){
var seq__40494__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40494__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__40494__$1);
var G__40502 = cljs.core.chunk_rest.call(null,seq__40494__$1);
var G__40503 = c__28548__auto__;
var G__40504 = cljs.core.count.call(null,c__28548__auto__);
var G__40505 = (0);
seq__40494 = G__40502;
chunk__40495 = G__40503;
count__40496 = G__40504;
i__40497 = G__40505;
continue;
} else {
var d = cljs.core.first.call(null,seq__40494__$1);
cljs.looperscript.audio.load_file.call(null,d);

var G__40506 = cljs.core.next.call(null,seq__40494__$1);
var G__40507 = null;
var G__40508 = (0);
var G__40509 = (0);
seq__40494 = G__40506;
chunk__40495 = G__40507;
count__40496 = G__40508;
i__40497 = G__40509;
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
var oscs = (function (){var iter__28517__auto__ = (function cljs$looperscript$audio$play_filtered_tone_$_iter__40510(s__40511){
return (new cljs.core.LazySeq(null,(function (){
var s__40511__$1 = s__40511;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40511__$1);
if(temp__4657__auto__){
var s__40511__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40511__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__40511__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__40513 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__40512 = (0);
while(true){
if((i__40512 < size__28516__auto__)){
var i = cljs.core._nth.call(null,c__28515__auto__,i__40512);
cljs.core.chunk_append.call(null,b__40513,cljs.looperscript.audio.ctx.createOscillator());

var G__40524 = (i__40512 + (1));
i__40512 = G__40524;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40513),cljs$looperscript$audio$play_filtered_tone_$_iter__40510.call(null,cljs.core.chunk_rest.call(null,s__40511__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40513),null);
}
} else {
var i = cljs.core.first.call(null,s__40511__$2);
return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),cljs$looperscript$audio$play_filtered_tone_$_iter__40510.call(null,cljs.core.rest.call(null,s__40511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28517__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,overtones)));
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

var seq__40514_40525 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));
var chunk__40515_40526 = null;
var count__40516_40527 = (0);
var i__40517_40528 = (0);
while(true){
if((i__40517_40528 < count__40516_40527)){
var vec__40518_40529 = cljs.core._nth.call(null,chunk__40515_40526,i__40517_40528);
var osc_40530 = cljs.core.nth.call(null,vec__40518_40529,(0),null);
var o_40531 = cljs.core.nth.call(null,vec__40518_40529,(1),null);
(osc_40530["type"] = synth);

((osc_40530["frequency"])["value"] = (o_40531 * freq));

osc_40530.connect(gain);

osc_40530.start(start_time);

osc_40530.stop((start_time + dur));

var G__40532 = seq__40514_40525;
var G__40533 = chunk__40515_40526;
var G__40534 = count__40516_40527;
var G__40535 = (i__40517_40528 + (1));
seq__40514_40525 = G__40532;
chunk__40515_40526 = G__40533;
count__40516_40527 = G__40534;
i__40517_40528 = G__40535;
continue;
} else {
var temp__4657__auto___40536 = cljs.core.seq.call(null,seq__40514_40525);
if(temp__4657__auto___40536){
var seq__40514_40537__$1 = temp__4657__auto___40536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40514_40537__$1)){
var c__28548__auto___40538 = cljs.core.chunk_first.call(null,seq__40514_40537__$1);
var G__40539 = cljs.core.chunk_rest.call(null,seq__40514_40537__$1);
var G__40540 = c__28548__auto___40538;
var G__40541 = cljs.core.count.call(null,c__28548__auto___40538);
var G__40542 = (0);
seq__40514_40525 = G__40539;
chunk__40515_40526 = G__40540;
count__40516_40527 = G__40541;
i__40517_40528 = G__40542;
continue;
} else {
var vec__40521_40543 = cljs.core.first.call(null,seq__40514_40537__$1);
var osc_40544 = cljs.core.nth.call(null,vec__40521_40543,(0),null);
var o_40545 = cljs.core.nth.call(null,vec__40521_40543,(1),null);
(osc_40544["type"] = synth);

((osc_40544["frequency"])["value"] = (o_40545 * freq));

osc_40544.connect(gain);

osc_40544.start(start_time);

osc_40544.stop((start_time + dur));

var G__40546 = cljs.core.next.call(null,seq__40514_40537__$1);
var G__40547 = null;
var G__40548 = (0);
var G__40549 = (0);
seq__40514_40525 = G__40546;
chunk__40515_40526 = G__40547;
count__40516_40527 = G__40548;
i__40517_40528 = G__40549;
continue;
}
} else {
}
}
break;
}

return oscs;
});

//# sourceMappingURL=audio.js.map?rel=1511400155225
