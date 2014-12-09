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
log.cljs$lang$applyTo = (function (arglist__11642){
var args = cljs.core.seq(arglist__11642);
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
cljs.looperscript.audio.on_mp3_load = (function on_mp3_load(req,fname){return cljs.looperscript.audio.ctx.decodeAudioData(req.response,(function (p1__11643_SHARP_){return cljs.looperscript.audio.on_decode.call(null,p1__11643_SHARP_,fname);
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
cljs.looperscript.audio.load_some_drums = (function load_some_drums(){var seq__11648 = cljs.core.seq.call(null,cljs.looperscript.audio.drums);var chunk__11649 = null;var count__11650 = (0);var i__11651 = (0);while(true){
if((i__11651 < count__11650))
{var d = cljs.core._nth.call(null,chunk__11649,i__11651);cljs.looperscript.audio.load_file.call(null,d);
{
var G__11652 = seq__11648;
var G__11653 = chunk__11649;
var G__11654 = count__11650;
var G__11655 = (i__11651 + (1));
seq__11648 = G__11652;
chunk__11649 = G__11653;
count__11650 = G__11654;
i__11651 = G__11655;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11648);if(temp__4126__auto__)
{var seq__11648__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11648__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__11648__$1);{
var G__11656 = cljs.core.chunk_rest.call(null,seq__11648__$1);
var G__11657 = c__4410__auto__;
var G__11658 = cljs.core.count.call(null,c__4410__auto__);
var G__11659 = (0);
seq__11648 = G__11656;
chunk__11649 = G__11657;
count__11650 = G__11658;
i__11651 = G__11659;
continue;
}
} else
{var d = cljs.core.first.call(null,seq__11648__$1);cljs.looperscript.audio.load_file.call(null,d);
{
var G__11660 = cljs.core.next.call(null,seq__11648__$1);
var G__11661 = null;
var G__11662 = (0);
var G__11663 = (0);
seq__11648 = G__11660;
chunk__11649 = G__11661;
count__11650 = G__11662;
i__11651 = G__11663;
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
cljs.looperscript.audio.play_filtered_tone = (function play_filtered_tone(freq,start_time,dur,vol,pan,filt_freq,synth,overtones){var oscs = (function (){var iter__4379__auto__ = (function iter__11674(s__11675){return (new cljs.core.LazySeq(null,(function (){var s__11675__$1 = s__11675;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11675__$1);if(temp__4126__auto__)
{var s__11675__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11675__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__11675__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__11677 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__11676 = (0);while(true){
if((i__11676 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__11676);cljs.core.chunk_append.call(null,b__11677,cljs.looperscript.audio.ctx.createOscillator());
{
var G__11684 = (i__11676 + (1));
i__11676 = G__11684;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11677),iter__11674.call(null,cljs.core.chunk_rest.call(null,s__11675__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11677),null);
}
} else
{var i = cljs.core.first.call(null,s__11675__$2);return cljs.core.cons.call(null,cljs.looperscript.audio.ctx.createOscillator(),iter__11674.call(null,cljs.core.rest.call(null,s__11675__$2)));
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
var seq__11678_11685 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,oscs,overtones));var chunk__11679_11686 = null;var count__11680_11687 = (0);var i__11681_11688 = (0);while(true){
if((i__11681_11688 < count__11680_11687))
{var vec__11682_11689 = cljs.core._nth.call(null,chunk__11679_11686,i__11681_11688);var osc_11690 = cljs.core.nth.call(null,vec__11682_11689,(0),null);var o_11691 = cljs.core.nth.call(null,vec__11682_11689,(1),null);(osc_11690["type"] = synth);
((osc_11690["frequency"])["value"] = (o_11691 * freq));
osc_11690.connect(gain);
osc_11690.start(start_time);
osc_11690.stop((start_time + dur));
{
var G__11692 = seq__11678_11685;
var G__11693 = chunk__11679_11686;
var G__11694 = count__11680_11687;
var G__11695 = (i__11681_11688 + (1));
seq__11678_11685 = G__11692;
chunk__11679_11686 = G__11693;
count__11680_11687 = G__11694;
i__11681_11688 = G__11695;
continue;
}
} else
{var temp__4126__auto___11696 = cljs.core.seq.call(null,seq__11678_11685);if(temp__4126__auto___11696)
{var seq__11678_11697__$1 = temp__4126__auto___11696;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11678_11697__$1))
{var c__4410__auto___11698 = cljs.core.chunk_first.call(null,seq__11678_11697__$1);{
var G__11699 = cljs.core.chunk_rest.call(null,seq__11678_11697__$1);
var G__11700 = c__4410__auto___11698;
var G__11701 = cljs.core.count.call(null,c__4410__auto___11698);
var G__11702 = (0);
seq__11678_11685 = G__11699;
chunk__11679_11686 = G__11700;
count__11680_11687 = G__11701;
i__11681_11688 = G__11702;
continue;
}
} else
{var vec__11683_11703 = cljs.core.first.call(null,seq__11678_11697__$1);var osc_11704 = cljs.core.nth.call(null,vec__11683_11703,(0),null);var o_11705 = cljs.core.nth.call(null,vec__11683_11703,(1),null);(osc_11704["type"] = synth);
((osc_11704["frequency"])["value"] = (o_11705 * freq));
osc_11704.connect(gain);
osc_11704.start(start_time);
osc_11704.stop((start_time + dur));
{
var G__11706 = cljs.core.next.call(null,seq__11678_11697__$1);
var G__11707 = null;
var G__11708 = (0);
var G__11709 = (0);
seq__11678_11685 = G__11706;
chunk__11679_11686 = G__11707;
count__11680_11687 = G__11708;
i__11681_11688 = G__11709;
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
