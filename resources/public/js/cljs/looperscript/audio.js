// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.audio');
goog.require('cljs.core');
cljs.looperscript.audio.log = (function cljs$looperscript$audio$log(var_args){
var args__29165__auto__ = [];
var len__29158__auto___29533 = arguments.length;
var i__29159__auto___29534 = (0);
while(true){
if((i__29159__auto___29534 < len__29158__auto___29533)){
args__29165__auto__.push((arguments[i__29159__auto___29534]));

var G__29535 = (i__29159__auto___29534 + (1));
i__29159__auto___29534 = G__29535;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return cljs.looperscript.audio.log.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

cljs.looperscript.audio.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(cljs.core.apply.call(null,cljs.core.str,args));
});

cljs.looperscript.audio.log.cljs$lang$maxFixedArity = (0);

cljs.looperscript.audio.log.cljs$lang$applyTo = (function (seq29532){
return cljs.looperscript.audio.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29532));
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
return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__29536_SHARP_){
return cljs.looperscript.audio.on_decode.call(null,p1__29536_SHARP_,fname);
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
var seq__29537 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);
var chunk__29538 = null;
var count__29539 = (0);
var i__29540 = (0);
while(true){
if((i__29540 < count__29539)){
var d = cljs.core._nth.call(null,chunk__29538,i__29540);
cljs.looperscript.audio.load_file.call(null,d);

var G__29541 = seq__29537;
var G__29542 = chunk__29538;
var G__29543 = count__29539;
var G__29544 = (i__29540 + (1));
seq__29537 = G__29541;
chunk__29538 = G__29542;
count__29539 = G__29543;
i__29540 = G__29544;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29537);
if(temp__4657__auto__){
var seq__29537__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29537__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__29537__$1);
var G__29545 = cljs.core.chunk_rest.call(null,seq__29537__$1);
var G__29546 = c__28828__auto__;
var G__29547 = cljs.core.count.call(null,c__28828__auto__);
var G__29548 = (0);
seq__29537 = G__29545;
chunk__29538 = G__29546;
count__29539 = G__29547;
i__29540 = G__29548;
continue;
} else {
var d = cljs.core.first.call(null,seq__29537__$1);
cljs.looperscript.audio.load_file.call(null,d);

var G__29549 = cljs.core.next.call(null,seq__29537__$1);
var G__29550 = null;
var G__29551 = (0);
var G__29552 = (0);
seq__29537 = G__29549;
chunk__29538 = G__29550;
count__29539 = G__29551;
i__29540 = G__29552;
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
var oscs = (function (){var iter__28797__auto__ = (function cljs$looperscript$audio$play_filtered_tone_$_iter__29553(s__29554){
return (new cljs.core.LazySeq(null,(function (){
var s__29554__$1 = s__29554;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29554__$1);
if(temp__4657__auto__){
var s__29554__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29554__$2)){
var c__28795__auto__ = cljs.core.chunk_first.call(null,s__29554__$2);
var size__28796__auto__ = cljs.core.count.call(null,c__28795__auto__);
var b__29556 = cljs.core.chunk_buffer.call(null,size__28796__auto__);
if((function (){var i__29555 = (0);
while(true){
if((i__29555 < size__28796__auto__)){
var i = cljs.core._nth.call(null,c__28795__auto__,i__29555);
cljs.core.chunk_append.call(null,b__29556,cljs.looperscript.audio.ctx.createOscillator());

var G__29567 = (i__29555 + (1));
i__29555 = G__29567;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29556),cljs$looperscript$audio$play_filtered_tone_$_iter__29553.call(null,cljs.core.chunk_rest.call(null,s__29554__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29556),null);
}
} else {
var i = cljs.core.first.call(null,s__29554__$2);
return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),cljs$looperscript$audio$play_filtered_tone_$_iter__29553.call(null,cljs.core.rest.call(null,s__29554__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28797__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,overtones)));
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

var seq__29557_29568 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));
var chunk__29558_29569 = null;
var count__29559_29570 = (0);
var i__29560_29571 = (0);
while(true){
if((i__29560_29571 < count__29559_29570)){
var vec__29561_29572 = cljs.core._nth.call(null,chunk__29558_29569,i__29560_29571);
var osc_29573 = cljs.core.nth.call(null,vec__29561_29572,(0),null);
var o_29574 = cljs.core.nth.call(null,vec__29561_29572,(1),null);
(osc_29573["type"] = synth);

((osc_29573["frequency"])["value"] = (o_29574 * freq));

osc_29573.connect(gain);

osc_29573.start(start_time);

osc_29573.stop((start_time + dur));

var G__29575 = seq__29557_29568;
var G__29576 = chunk__29558_29569;
var G__29577 = count__29559_29570;
var G__29578 = (i__29560_29571 + (1));
seq__29557_29568 = G__29575;
chunk__29558_29569 = G__29576;
count__29559_29570 = G__29577;
i__29560_29571 = G__29578;
continue;
} else {
var temp__4657__auto___29579 = cljs.core.seq.call(null,seq__29557_29568);
if(temp__4657__auto___29579){
var seq__29557_29580__$1 = temp__4657__auto___29579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29557_29580__$1)){
var c__28828__auto___29581 = cljs.core.chunk_first.call(null,seq__29557_29580__$1);
var G__29582 = cljs.core.chunk_rest.call(null,seq__29557_29580__$1);
var G__29583 = c__28828__auto___29581;
var G__29584 = cljs.core.count.call(null,c__28828__auto___29581);
var G__29585 = (0);
seq__29557_29568 = G__29582;
chunk__29558_29569 = G__29583;
count__29559_29570 = G__29584;
i__29560_29571 = G__29585;
continue;
} else {
var vec__29564_29586 = cljs.core.first.call(null,seq__29557_29580__$1);
var osc_29587 = cljs.core.nth.call(null,vec__29564_29586,(0),null);
var o_29588 = cljs.core.nth.call(null,vec__29564_29586,(1),null);
(osc_29587["type"] = synth);

((osc_29587["frequency"])["value"] = (o_29588 * freq));

osc_29587.connect(gain);

osc_29587.start(start_time);

osc_29587.stop((start_time + dur));

var G__29589 = cljs.core.next.call(null,seq__29557_29580__$1);
var G__29590 = null;
var G__29591 = (0);
var G__29592 = (0);
seq__29557_29568 = G__29589;
chunk__29558_29569 = G__29590;
count__29559_29570 = G__29591;
i__29560_29571 = G__29592;
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
