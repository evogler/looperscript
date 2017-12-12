// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.scheduler');
goog.require('cljs.core');
goog.require('cljs.looperscript.audio');
goog.require('cljs.looperscript.start_time');
if(typeof cljs.looperscript.scheduler.sounding_notes !== 'undefined'){
} else {
cljs.looperscript.scheduler.sounding_notes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof cljs.looperscript.scheduler.playing_interval !== 'undefined'){
} else {
cljs.looperscript.scheduler.playing_interval = cljs.core.atom.call(null,null);
}
if(typeof cljs.looperscript.scheduler.last_queue_time !== 'undefined'){
} else {
cljs.looperscript.scheduler.last_queue_time = cljs.core.atom.call(null,null);
}
cljs.looperscript.scheduler.queue_time_interval = 0.05;
cljs.looperscript.scheduler.queue_time_extra = (2);
cljs.looperscript.scheduler.note__GT_freq = (function cljs$looperscript$scheduler$note__GT_freq(n){
return (261.625565 * Math.pow((2),(n / (12))));
});
cljs.looperscript.scheduler.ratio__GT_freq = (function cljs$looperscript$scheduler$ratio__GT_freq(r){
return (261.625565 * r);
});
cljs.looperscript.scheduler.add_note_to_sounding_notes = (function (){var sounding_counter = cljs.core.atom.call(null,(0));
return ((function (sounding_counter){
return (function (node_dic){
var id = cljs.core.swap_BANG_.call(null,sounding_counter,cljs.core.inc);
cljs.core.swap_BANG_.call(null,cljs.looperscript.scheduler.sounding_notes,cljs.core.assoc,id,node_dic);

return (new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(node_dic)["onended"] = ((function (id,sounding_counter){
return (function (){
return cljs.core.swap_BANG_.call(null,cljs.looperscript.scheduler.sounding_notes,cljs.core.dissoc,id);
});})(id,sounding_counter))
);
});
;})(sounding_counter))
})();
cljs.looperscript.scheduler.kill_sounds = (function cljs$looperscript$scheduler$kill_sounds(){
var seq__76196_76200 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.scheduler.sounding_notes)));
var chunk__76197_76201 = null;
var count__76198_76202 = (0);
var i__76199_76203 = (0);
while(true){
if((i__76199_76203 < count__76198_76202)){
var n_76204 = cljs.core._nth.call(null,chunk__76197_76201,i__76199_76203);
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_76204).stop();

var G__76205 = seq__76196_76200;
var G__76206 = chunk__76197_76201;
var G__76207 = count__76198_76202;
var G__76208 = (i__76199_76203 + (1));
seq__76196_76200 = G__76205;
chunk__76197_76201 = G__76206;
count__76198_76202 = G__76207;
i__76199_76203 = G__76208;
continue;
} else {
var temp__4657__auto___76209 = cljs.core.seq.call(null,seq__76196_76200);
if(temp__4657__auto___76209){
var seq__76196_76210__$1 = temp__4657__auto___76209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76196_76210__$1)){
var c__28548__auto___76211 = cljs.core.chunk_first.call(null,seq__76196_76210__$1);
var G__76212 = cljs.core.chunk_rest.call(null,seq__76196_76210__$1);
var G__76213 = c__28548__auto___76211;
var G__76214 = cljs.core.count.call(null,c__28548__auto___76211);
var G__76215 = (0);
seq__76196_76200 = G__76212;
chunk__76197_76201 = G__76213;
count__76198_76202 = G__76214;
i__76199_76203 = G__76215;
continue;
} else {
var n_76216 = cljs.core.first.call(null,seq__76196_76210__$1);
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_76216).stop();

var G__76217 = cljs.core.next.call(null,seq__76196_76210__$1);
var G__76218 = null;
var G__76219 = (0);
var G__76220 = (0);
seq__76196_76200 = G__76217;
chunk__76197_76201 = G__76218;
count__76198_76202 = G__76219;
i__76199_76203 = G__76220;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,cljs.looperscript.scheduler.sounding_notes,cljs.core.PersistentArrayMap.EMPTY);
});
cljs.looperscript.scheduler.kill_unstarted_sounds = (function cljs$looperscript$scheduler$kill_unstarted_sounds(){
var seq__76221 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.scheduler.sounding_notes));
var chunk__76222 = null;
var count__76223 = (0);
var i__76224 = (0);
while(true){
if((i__76224 < count__76223)){
var vec__76225 = cljs.core._nth.call(null,chunk__76222,i__76224);
var id = cljs.core.nth.call(null,vec__76225,(0),null);
var n = cljs.core.nth.call(null,vec__76225,(1),null);
if((cljs.looperscript.start_time.now.call(null) < new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n))){
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n).stop();

cljs.core.swap_BANG_.call(null,cljs.looperscript.scheduler.sounding_notes,cljs.core.dissoc,id);
} else {
}

var G__76231 = seq__76221;
var G__76232 = chunk__76222;
var G__76233 = count__76223;
var G__76234 = (i__76224 + (1));
seq__76221 = G__76231;
chunk__76222 = G__76232;
count__76223 = G__76233;
i__76224 = G__76234;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__76221);
if(temp__4657__auto__){
var seq__76221__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76221__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__76221__$1);
var G__76235 = cljs.core.chunk_rest.call(null,seq__76221__$1);
var G__76236 = c__28548__auto__;
var G__76237 = cljs.core.count.call(null,c__28548__auto__);
var G__76238 = (0);
seq__76221 = G__76235;
chunk__76222 = G__76236;
count__76223 = G__76237;
i__76224 = G__76238;
continue;
} else {
var vec__76228 = cljs.core.first.call(null,seq__76221__$1);
var id = cljs.core.nth.call(null,vec__76228,(0),null);
var n = cljs.core.nth.call(null,vec__76228,(1),null);
if((cljs.looperscript.start_time.now.call(null) < new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n))){
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n).stop();

cljs.core.swap_BANG_.call(null,cljs.looperscript.scheduler.sounding_notes,cljs.core.dissoc,id);
} else {
}

var G__76239 = cljs.core.next.call(null,seq__76221__$1);
var G__76240 = null;
var G__76241 = (0);
var G__76242 = (0);
seq__76221 = G__76239;
chunk__76222 = G__76240;
count__76223 = G__76241;
i__76224 = G__76242;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.looperscript.scheduler.set_playing_interval = (function cljs$looperscript$scheduler$set_playing_interval(f){
return cljs.core.reset_BANG_.call(null,cljs.looperscript.scheduler.playing_interval,setInterval(f,(cljs.looperscript.scheduler.queue_time_interval * (1000))));
});
cljs.looperscript.scheduler.kill_playing_interval = (function cljs$looperscript$scheduler$kill_playing_interval(){
if(cljs.core.truth_(cljs.core.deref.call(null,cljs.looperscript.scheduler.playing_interval))){
clearInterval(cljs.core.deref.call(null,cljs.looperscript.scheduler.playing_interval));

return cljs.core.reset_BANG_.call(null,cljs.looperscript.scheduler.playing_interval,null);
} else {
return null;
}
});
cljs.looperscript.scheduler.schedule_note = (function cljs$looperscript$scheduler$schedule_note(n){
if((cljs.core.sequential_QMARK_.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n)),new cljs.core.Keyword(null,"chord","chord",-696248342)))){
var seq__76243 = cljs.core.seq.call(null,cljs.core.flatten.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n))));
var chunk__76244 = null;
var count__76245 = (0);
var i__76246 = (0);
while(true){
if((i__76246 < count__76245)){
var note = cljs.core._nth.call(null,chunk__76244,i__76246);
cljs.looperscript.scheduler.schedule_note.call(null,cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"sound","sound",-2127407070),note));

var G__76251 = seq__76243;
var G__76252 = chunk__76244;
var G__76253 = count__76245;
var G__76254 = (i__76246 + (1));
seq__76243 = G__76251;
chunk__76244 = G__76252;
count__76245 = G__76253;
i__76246 = G__76254;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__76243);
if(temp__4657__auto__){
var seq__76243__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76243__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__76243__$1);
var G__76255 = cljs.core.chunk_rest.call(null,seq__76243__$1);
var G__76256 = c__28548__auto__;
var G__76257 = cljs.core.count.call(null,c__28548__auto__);
var G__76258 = (0);
seq__76243 = G__76255;
chunk__76244 = G__76256;
count__76245 = G__76257;
i__76246 = G__76258;
continue;
} else {
var note = cljs.core.first.call(null,seq__76243__$1);
cljs.looperscript.scheduler.schedule_note.call(null,cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"sound","sound",-2127407070),note));

var G__76259 = cljs.core.next.call(null,seq__76243__$1);
var G__76260 = null;
var G__76261 = (0);
var G__76262 = (0);
seq__76243 = G__76259;
chunk__76244 = G__76260;
count__76245 = G__76261;
i__76246 = G__76262;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var sound = new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n);
var rate = new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(n);
var start_time = (new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n) + new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));
var start_time__$1 = (((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"drum-code","drum-code",2081814302))))?(function (){var temp__4655__auto__ = cljs.core.get.call(null,cljs.looperscript.audio.sample_lags,cljs.core.get.call(null,cljs.looperscript.audio.drum_codes,cljs.core.second.call(null,sound)));
if(cljs.core.truth_(temp__4655__auto__)){
var l = temp__4655__auto__;
return (start_time - (l / rate));
} else {
return start_time;
}
})():start_time);
if((start_time__$1 >= cljs.looperscript.start_time.now.call(null))){
var sound__$1 = ((typeof sound === 'number')?cljs.looperscript.scheduler.note__GT_freq.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"ratio","ratio",-926560044))))?cljs.looperscript.scheduler.ratio__GT_freq.call(null,cljs.core.second.call(null,sound)):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"hz","hz",-1450739349))))?cljs.core.second.call(null,sound):(((cljs.core.vector_QMARK_.call(null,sound)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sound),new cljs.core.Keyword(null,"drum-code","drum-code",2081814302))))?cljs.looperscript.audio.drum_codes.call(null,cljs.core.second.call(null,sound)):sound
))));
var dur = (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(n) - new cljs.core.Keyword(null,"time+","time+",2008858809).cljs$core$IFn$_invoke$arity$1(n));
var vol = new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(n);
var filter = new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(n);
var pan = new cljs.core.Keyword(null,"pan","pan",-307712792).cljs$core$IFn$_invoke$arity$1(n);
var synth = new cljs.core.Keyword(null,"synth","synth",-862700847).cljs$core$IFn$_invoke$arity$1(n);
var overtones = new cljs.core.Keyword(null,"overtones","overtones",-2065460921).cljs$core$IFn$_invoke$arity$1(n);
var node = ((typeof sound__$1 === 'number')?(cljs.core.truth_(filter)?cljs.looperscript.audio.play_filtered_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,filter,synth,overtones):null):cljs.looperscript.audio.play_sound.call(null,sound__$1,start_time__$1,vol,rate));
var seq__76247 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));
var chunk__76248 = null;
var count__76249 = (0);
var i__76250 = (0);
while(true){
if((i__76250 < count__76249)){
var i = cljs.core._nth.call(null,chunk__76248,i__76250);
cljs.looperscript.scheduler.add_note_to_sounding_notes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),i,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time__$1], null));

var G__76263 = seq__76247;
var G__76264 = chunk__76248;
var G__76265 = count__76249;
var G__76266 = (i__76250 + (1));
seq__76247 = G__76263;
chunk__76248 = G__76264;
count__76249 = G__76265;
i__76250 = G__76266;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__76247);
if(temp__4657__auto__){
var seq__76247__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76247__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__76247__$1);
var G__76267 = cljs.core.chunk_rest.call(null,seq__76247__$1);
var G__76268 = c__28548__auto__;
var G__76269 = cljs.core.count.call(null,c__28548__auto__);
var G__76270 = (0);
seq__76247 = G__76267;
chunk__76248 = G__76268;
count__76249 = G__76269;
i__76250 = G__76270;
continue;
} else {
var i = cljs.core.first.call(null,seq__76247__$1);
cljs.looperscript.scheduler.add_note_to_sounding_notes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),i,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time__$1], null));

var G__76271 = cljs.core.next.call(null,seq__76247__$1);
var G__76272 = null;
var G__76273 = (0);
var G__76274 = (0);
seq__76247 = G__76271;
chunk__76248 = G__76272;
count__76249 = G__76273;
i__76250 = G__76274;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
cljs.looperscript.scheduler.queue_notes = (function (){var current_nnfns = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
return ((function (current_nnfns){
return (function() {
var cljs$looperscript$scheduler$_qn = null;
var cljs$looperscript$scheduler$_qn__0 = (function (){
cljs.core.reset_BANG_.call(null,cljs.looperscript.scheduler.last_queue_time,cljs.looperscript.start_time.now.call(null));

var end_time = ((cljs.looperscript.start_time.now.call(null) + cljs.looperscript.scheduler.queue_time_extra) + cljs.looperscript.scheduler.queue_time_interval);
var seq__76275 = cljs.core.seq.call(null,cljs.core.deref.call(null,current_nnfns));
var chunk__76276 = null;
var count__76277 = (0);
var i__76278 = (0);
while(true){
if((i__76278 < count__76277)){
var n_n_fn = cljs.core._nth.call(null,chunk__76276,i__76278);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_76279 = n_n_fn.call(null);
if((((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_76279))) && (!(cljs.core.contains_QMARK_.call(null,next_note_76279,new cljs.core.Keyword(null,"rest","rest",-1241696419))))){
cljs.looperscript.scheduler.schedule_note.call(null,next_note_76279);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_76279) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__76280 = seq__76275;
var G__76281 = chunk__76276;
var G__76282 = count__76277;
var G__76283 = (i__76278 + (1));
seq__76275 = G__76280;
chunk__76276 = G__76281;
count__76277 = G__76282;
i__76278 = G__76283;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__76275);
if(temp__4657__auto__){
var seq__76275__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76275__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__76275__$1);
var G__76284 = cljs.core.chunk_rest.call(null,seq__76275__$1);
var G__76285 = c__28548__auto__;
var G__76286 = cljs.core.count.call(null,c__28548__auto__);
var G__76287 = (0);
seq__76275 = G__76284;
chunk__76276 = G__76285;
count__76277 = G__76286;
i__76278 = G__76287;
continue;
} else {
var n_n_fn = cljs.core.first.call(null,seq__76275__$1);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_76288 = n_n_fn.call(null);
if((((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_76288))) && (!(cljs.core.contains_QMARK_.call(null,next_note_76288,new cljs.core.Keyword(null,"rest","rest",-1241696419))))){
cljs.looperscript.scheduler.schedule_note.call(null,next_note_76288);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_76288) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__76289 = cljs.core.next.call(null,seq__76275__$1);
var G__76290 = null;
var G__76291 = (0);
var G__76292 = (0);
seq__76275 = G__76289;
chunk__76276 = G__76290;
count__76277 = G__76291;
i__76278 = G__76292;
continue;
}
} else {
return null;
}
}
break;
}
});
var cljs$looperscript$scheduler$_qn__1 = (function (nnfns){
cljs.core.reset_BANG_.call(null,current_nnfns,nnfns);

return cljs$looperscript$scheduler$_qn.call(null);
});
cljs$looperscript$scheduler$_qn = function(nnfns){
switch(arguments.length){
case 0:
return cljs$looperscript$scheduler$_qn__0.call(this);
case 1:
return cljs$looperscript$scheduler$_qn__1.call(this,nnfns);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$looperscript$scheduler$_qn.cljs$core$IFn$_invoke$arity$0 = cljs$looperscript$scheduler$_qn__0;
cljs$looperscript$scheduler$_qn.cljs$core$IFn$_invoke$arity$1 = cljs$looperscript$scheduler$_qn__1;
return cljs$looperscript$scheduler$_qn;
})()
;})(current_nnfns))
})();

//# sourceMappingURL=scheduler.js.map?rel=1513047045481
