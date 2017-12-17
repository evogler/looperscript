// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.audio');
goog.require('cljs.core');
cljs.looperscript.audio.log = (function cljs$looperscript$audio$log(var_args){
var args__28885__auto__ = [];
var len__28878__auto___35851 = arguments.length;
var i__28879__auto___35852 = (0);
while(true){
if((i__28879__auto___35852 < len__28878__auto___35851)){
args__28885__auto__.push((arguments[i__28879__auto___35852]));

var G__35853 = (i__28879__auto___35852 + (1));
i__28879__auto___35852 = G__35853;
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

cljs.looperscript.audio.log.cljs$lang$applyTo = (function (seq35850){
return cljs.looperscript.audio.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35850));
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
return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__35854_SHARP_){
return cljs.looperscript.audio.on_decode.call(null,p1__35854_SHARP_,fname);
}));
});
cljs.looperscript.audio.load_audio_file = (function cljs$looperscript$audio$load_audio_file(fname){
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
var seq__35855 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);
var chunk__35856 = null;
var count__35857 = (0);
var i__35858 = (0);
while(true){
if((i__35858 < count__35857)){
var d = cljs.core._nth.call(null,chunk__35856,i__35858);
cljs.looperscript.audio.load_audio_file.call(null,d);

var G__35859 = seq__35855;
var G__35860 = chunk__35856;
var G__35861 = count__35857;
var G__35862 = (i__35858 + (1));
seq__35855 = G__35859;
chunk__35856 = G__35860;
count__35857 = G__35861;
i__35858 = G__35862;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35855);
if(temp__4657__auto__){
var seq__35855__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35855__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__35855__$1);
var G__35863 = cljs.core.chunk_rest.call(null,seq__35855__$1);
var G__35864 = c__28548__auto__;
var G__35865 = cljs.core.count.call(null,c__28548__auto__);
var G__35866 = (0);
seq__35855 = G__35863;
chunk__35856 = G__35864;
count__35857 = G__35865;
i__35858 = G__35866;
continue;
} else {
var d = cljs.core.first.call(null,seq__35855__$1);
cljs.looperscript.audio.load_audio_file.call(null,d);

var G__35867 = cljs.core.next.call(null,seq__35855__$1);
var G__35868 = null;
var G__35869 = (0);
var G__35870 = (0);
seq__35855 = G__35867;
chunk__35856 = G__35868;
count__35857 = G__35869;
i__35858 = G__35870;
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
var overtones__$1 = cljs.core.filter.call(null,cljs.core.number_QMARK_,overtones);
var oscs = (function (){var iter__28517__auto__ = ((function (overtones__$1){
return (function cljs$looperscript$audio$play_filtered_tone_$_iter__35871(s__35872){
return (new cljs.core.LazySeq(null,((function (overtones__$1){
return (function (){
var s__35872__$1 = s__35872;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35872__$1);
if(temp__4657__auto__){
var s__35872__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35872__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__35872__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__35874 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__35873 = (0);
while(true){
if((i__35873 < size__28516__auto__)){
var i = cljs.core._nth.call(null,c__28515__auto__,i__35873);
cljs.core.chunk_append.call(null,b__35874,cljs.looperscript.audio.ctx.createOscillator());

var G__35885 = (i__35873 + (1));
i__35873 = G__35885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35874),cljs$looperscript$audio$play_filtered_tone_$_iter__35871.call(null,cljs.core.chunk_rest.call(null,s__35872__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35874),null);
}
} else {
var i = cljs.core.first.call(null,s__35872__$2);
return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),cljs$looperscript$audio$play_filtered_tone_$_iter__35871.call(null,cljs.core.rest.call(null,s__35872__$2)));
}
} else {
return null;
}
break;
}
});})(overtones__$1))
,null,null));
});})(overtones__$1))
;
return iter__28517__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,overtones__$1)));
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

var seq__35875_35886 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones__$1));
var chunk__35876_35887 = null;
var count__35877_35888 = (0);
var i__35878_35889 = (0);
while(true){
if((i__35878_35889 < count__35877_35888)){
var vec__35879_35890 = cljs.core._nth.call(null,chunk__35876_35887,i__35878_35889);
var osc_35891 = cljs.core.nth.call(null,vec__35879_35890,(0),null);
var o_35892 = cljs.core.nth.call(null,vec__35879_35890,(1),null);
(osc_35891["type"] = synth);

((osc_35891["frequency"])["value"] = (o_35892 * freq));

osc_35891.connect(gain);

osc_35891.start(start_time);

osc_35891.stop((start_time + dur));

var G__35893 = seq__35875_35886;
var G__35894 = chunk__35876_35887;
var G__35895 = count__35877_35888;
var G__35896 = (i__35878_35889 + (1));
seq__35875_35886 = G__35893;
chunk__35876_35887 = G__35894;
count__35877_35888 = G__35895;
i__35878_35889 = G__35896;
continue;
} else {
var temp__4657__auto___35897 = cljs.core.seq.call(null,seq__35875_35886);
if(temp__4657__auto___35897){
var seq__35875_35898__$1 = temp__4657__auto___35897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35875_35898__$1)){
var c__28548__auto___35899 = cljs.core.chunk_first.call(null,seq__35875_35898__$1);
var G__35900 = cljs.core.chunk_rest.call(null,seq__35875_35898__$1);
var G__35901 = c__28548__auto___35899;
var G__35902 = cljs.core.count.call(null,c__28548__auto___35899);
var G__35903 = (0);
seq__35875_35886 = G__35900;
chunk__35876_35887 = G__35901;
count__35877_35888 = G__35902;
i__35878_35889 = G__35903;
continue;
} else {
var vec__35882_35904 = cljs.core.first.call(null,seq__35875_35898__$1);
var osc_35905 = cljs.core.nth.call(null,vec__35882_35904,(0),null);
var o_35906 = cljs.core.nth.call(null,vec__35882_35904,(1),null);
(osc_35905["type"] = synth);

((osc_35905["frequency"])["value"] = (o_35906 * freq));

osc_35905.connect(gain);

osc_35905.start(start_time);

osc_35905.stop((start_time + dur));

var G__35907 = cljs.core.next.call(null,seq__35875_35898__$1);
var G__35908 = null;
var G__35909 = (0);
var G__35910 = (0);
seq__35875_35886 = G__35907;
chunk__35876_35887 = G__35908;
count__35877_35888 = G__35909;
i__35878_35889 = G__35910;
continue;
}
} else {
}
}
break;
}

return oscs;
});

//# sourceMappingURL=audio.js.map?rel=1513064070959
