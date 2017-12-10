// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.audio');
goog.require('cljs.core');
cljs.looperscript.audio.log = (function cljs$looperscript$audio$log(var_args){
var args__28885__auto__ = [];
var len__28878__auto___52123 = arguments.length;
var i__28879__auto___52124 = (0);
while(true){
if((i__28879__auto___52124 < len__28878__auto___52123)){
args__28885__auto__.push((arguments[i__28879__auto___52124]));

var G__52125 = (i__28879__auto___52124 + (1));
i__28879__auto___52124 = G__52125;
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

cljs.looperscript.audio.log.cljs$lang$applyTo = (function (seq52122){
return cljs.looperscript.audio.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52122));
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
return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__52126_SHARP_){
return cljs.looperscript.audio.on_decode.call(null,p1__52126_SHARP_,fname);
}));
});
cljs.looperscript.audio.load_file_STAR_ = (function cljs$looperscript$audio$load_file_STAR_(fname){
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
var seq__52127 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);
var chunk__52128 = null;
var count__52129 = (0);
var i__52130 = (0);
while(true){
if((i__52130 < count__52129)){
var d = cljs.core._nth.call(null,chunk__52128,i__52130);
cljs.looperscript.audio.load_file_STAR_.call(null,d);

var G__52131 = seq__52127;
var G__52132 = chunk__52128;
var G__52133 = count__52129;
var G__52134 = (i__52130 + (1));
seq__52127 = G__52131;
chunk__52128 = G__52132;
count__52129 = G__52133;
i__52130 = G__52134;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52127);
if(temp__4657__auto__){
var seq__52127__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52127__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__52127__$1);
var G__52135 = cljs.core.chunk_rest.call(null,seq__52127__$1);
var G__52136 = c__28548__auto__;
var G__52137 = cljs.core.count.call(null,c__28548__auto__);
var G__52138 = (0);
seq__52127 = G__52135;
chunk__52128 = G__52136;
count__52129 = G__52137;
i__52130 = G__52138;
continue;
} else {
var d = cljs.core.first.call(null,seq__52127__$1);
cljs.looperscript.audio.load_file_STAR_.call(null,d);

var G__52139 = cljs.core.next.call(null,seq__52127__$1);
var G__52140 = null;
var G__52141 = (0);
var G__52142 = (0);
seq__52127 = G__52139;
chunk__52128 = G__52140;
count__52129 = G__52141;
i__52130 = G__52142;
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
cljs.looperscript.audio.play_filtered_tone = (function cljs$looperscript$audio$play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq,synth,overtones){
var oscs = (function (){var iter__28517__auto__ = (function cljs$looperscript$audio$play_filtered_tone_$_iter__52143(s__52144){
return (new cljs.core.LazySeq(null,(function (){
var s__52144__$1 = s__52144;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__52144__$1);
if(temp__4657__auto__){
var s__52144__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52144__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__52144__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__52146 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__52145 = (0);
while(true){
if((i__52145 < size__28516__auto__)){
var i = cljs.core._nth.call(null,c__28515__auto__,i__52145);
cljs.core.chunk_append.call(null,b__52146,cljs.looperscript.audio.ctx.createOscillator());

var G__52157 = (i__52145 + (1));
i__52145 = G__52157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52146),cljs$looperscript$audio$play_filtered_tone_$_iter__52143.call(null,cljs.core.chunk_rest.call(null,s__52144__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52146),null);
}
} else {
var i = cljs.core.first.call(null,s__52144__$2);
return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),cljs$looperscript$audio$play_filtered_tone_$_iter__52143.call(null,cljs.core.rest.call(null,s__52144__$2)));
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

var seq__52147_52158 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));
var chunk__52148_52159 = null;
var count__52149_52160 = (0);
var i__52150_52161 = (0);
while(true){
if((i__52150_52161 < count__52149_52160)){
var vec__52151_52162 = cljs.core._nth.call(null,chunk__52148_52159,i__52150_52161);
var osc_52163 = cljs.core.nth.call(null,vec__52151_52162,(0),null);
var o_52164 = cljs.core.nth.call(null,vec__52151_52162,(1),null);
(osc_52163["type"] = synth);

((osc_52163["frequency"])["value"] = (o_52164 * freq));

osc_52163.connect(gain);

osc_52163.start(start_time);

osc_52163.stop((start_time + dur));

var G__52165 = seq__52147_52158;
var G__52166 = chunk__52148_52159;
var G__52167 = count__52149_52160;
var G__52168 = (i__52150_52161 + (1));
seq__52147_52158 = G__52165;
chunk__52148_52159 = G__52166;
count__52149_52160 = G__52167;
i__52150_52161 = G__52168;
continue;
} else {
var temp__4657__auto___52169 = cljs.core.seq.call(null,seq__52147_52158);
if(temp__4657__auto___52169){
var seq__52147_52170__$1 = temp__4657__auto___52169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52147_52170__$1)){
var c__28548__auto___52171 = cljs.core.chunk_first.call(null,seq__52147_52170__$1);
var G__52172 = cljs.core.chunk_rest.call(null,seq__52147_52170__$1);
var G__52173 = c__28548__auto___52171;
var G__52174 = cljs.core.count.call(null,c__28548__auto___52171);
var G__52175 = (0);
seq__52147_52158 = G__52172;
chunk__52148_52159 = G__52173;
count__52149_52160 = G__52174;
i__52150_52161 = G__52175;
continue;
} else {
var vec__52154_52176 = cljs.core.first.call(null,seq__52147_52170__$1);
var osc_52177 = cljs.core.nth.call(null,vec__52154_52176,(0),null);
var o_52178 = cljs.core.nth.call(null,vec__52154_52176,(1),null);
(osc_52177["type"] = synth);

((osc_52177["frequency"])["value"] = (o_52178 * freq));

osc_52177.connect(gain);

osc_52177.start(start_time);

osc_52177.stop((start_time + dur));

var G__52179 = cljs.core.next.call(null,seq__52147_52170__$1);
var G__52180 = null;
var G__52181 = (0);
var G__52182 = (0);
seq__52147_52158 = G__52179;
chunk__52148_52159 = G__52180;
count__52149_52160 = G__52181;
i__52150_52161 = G__52182;
continue;
}
} else {
}
}
break;
}

return oscs;
});

//# sourceMappingURL=audio.js.map?rel=1512793809772
