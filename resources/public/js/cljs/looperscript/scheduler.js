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
var seq__35918_35922 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,cljs.looperscript.scheduler.sounding_notes)));
var chunk__35919_35923 = null;
var count__35920_35924 = (0);
var i__35921_35925 = (0);
while(true){
if((i__35921_35925 < count__35920_35924)){
var n_35926 = cljs.core._nth.call(null,chunk__35919_35923,i__35921_35925);
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_35926).stop();

var G__35927 = seq__35918_35922;
var G__35928 = chunk__35919_35923;
var G__35929 = count__35920_35924;
var G__35930 = (i__35921_35925 + (1));
seq__35918_35922 = G__35927;
chunk__35919_35923 = G__35928;
count__35920_35924 = G__35929;
i__35921_35925 = G__35930;
continue;
} else {
var temp__4657__auto___35931 = cljs.core.seq.call(null,seq__35918_35922);
if(temp__4657__auto___35931){
var seq__35918_35932__$1 = temp__4657__auto___35931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35918_35932__$1)){
var c__28548__auto___35933 = cljs.core.chunk_first.call(null,seq__35918_35932__$1);
var G__35934 = cljs.core.chunk_rest.call(null,seq__35918_35932__$1);
var G__35935 = c__28548__auto___35933;
var G__35936 = cljs.core.count.call(null,c__28548__auto___35933);
var G__35937 = (0);
seq__35918_35922 = G__35934;
chunk__35919_35923 = G__35935;
count__35920_35924 = G__35936;
i__35921_35925 = G__35937;
continue;
} else {
var n_35938 = cljs.core.first.call(null,seq__35918_35932__$1);
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n_35938).stop();

var G__35939 = cljs.core.next.call(null,seq__35918_35932__$1);
var G__35940 = null;
var G__35941 = (0);
var G__35942 = (0);
seq__35918_35922 = G__35939;
chunk__35919_35923 = G__35940;
count__35920_35924 = G__35941;
i__35921_35925 = G__35942;
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
var seq__35943 = cljs.core.seq.call(null,cljs.core.deref.call(null,cljs.looperscript.scheduler.sounding_notes));
var chunk__35944 = null;
var count__35945 = (0);
var i__35946 = (0);
while(true){
if((i__35946 < count__35945)){
var vec__35947 = cljs.core._nth.call(null,chunk__35944,i__35946);
var id = cljs.core.nth.call(null,vec__35947,(0),null);
var n = cljs.core.nth.call(null,vec__35947,(1),null);
if((cljs.looperscript.start_time.now.call(null) < new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n))){
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n).stop();

cljs.core.swap_BANG_.call(null,cljs.looperscript.scheduler.sounding_notes,cljs.core.dissoc,id);
} else {
}

var G__35953 = seq__35943;
var G__35954 = chunk__35944;
var G__35955 = count__35945;
var G__35956 = (i__35946 + (1));
seq__35943 = G__35953;
chunk__35944 = G__35954;
count__35945 = G__35955;
i__35946 = G__35956;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35943);
if(temp__4657__auto__){
var seq__35943__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35943__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__35943__$1);
var G__35957 = cljs.core.chunk_rest.call(null,seq__35943__$1);
var G__35958 = c__28548__auto__;
var G__35959 = cljs.core.count.call(null,c__28548__auto__);
var G__35960 = (0);
seq__35943 = G__35957;
chunk__35944 = G__35958;
count__35945 = G__35959;
i__35946 = G__35960;
continue;
} else {
var vec__35950 = cljs.core.first.call(null,seq__35943__$1);
var id = cljs.core.nth.call(null,vec__35950,(0),null);
var n = cljs.core.nth.call(null,vec__35950,(1),null);
if((cljs.looperscript.start_time.now.call(null) < new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(n))){
new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(n).stop();

cljs.core.swap_BANG_.call(null,cljs.looperscript.scheduler.sounding_notes,cljs.core.dissoc,id);
} else {
}

var G__35961 = cljs.core.next.call(null,seq__35943__$1);
var G__35962 = null;
var G__35963 = (0);
var G__35964 = (0);
seq__35943 = G__35961;
chunk__35944 = G__35962;
count__35945 = G__35963;
i__35946 = G__35964;
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
var seq__35965 = cljs.core.seq.call(null,cljs.core.flatten.call(null,cljs.core.rest.call(null,new cljs.core.Keyword(null,"sound","sound",-2127407070).cljs$core$IFn$_invoke$arity$1(n))));
var chunk__35966 = null;
var count__35967 = (0);
var i__35968 = (0);
while(true){
if((i__35968 < count__35967)){
var note = cljs.core._nth.call(null,chunk__35966,i__35968);
cljs.looperscript.scheduler.schedule_note.call(null,cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"sound","sound",-2127407070),note));

var G__35973 = seq__35965;
var G__35974 = chunk__35966;
var G__35975 = count__35967;
var G__35976 = (i__35968 + (1));
seq__35965 = G__35973;
chunk__35966 = G__35974;
count__35967 = G__35975;
i__35968 = G__35976;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35965);
if(temp__4657__auto__){
var seq__35965__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35965__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__35965__$1);
var G__35977 = cljs.core.chunk_rest.call(null,seq__35965__$1);
var G__35978 = c__28548__auto__;
var G__35979 = cljs.core.count.call(null,c__28548__auto__);
var G__35980 = (0);
seq__35965 = G__35977;
chunk__35966 = G__35978;
count__35967 = G__35979;
i__35968 = G__35980;
continue;
} else {
var note = cljs.core.first.call(null,seq__35965__$1);
cljs.looperscript.scheduler.schedule_note.call(null,cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"sound","sound",-2127407070),note));

var G__35981 = cljs.core.next.call(null,seq__35965__$1);
var G__35982 = null;
var G__35983 = (0);
var G__35984 = (0);
seq__35965 = G__35981;
chunk__35966 = G__35982;
count__35967 = G__35983;
i__35968 = G__35984;
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
var node = ((typeof sound__$1 === 'number')?cljs.looperscript.audio.play_filtered_tone.call(null,sound__$1,start_time__$1,dur,vol,pan,filter,synth,overtones):cljs.looperscript.audio.play_sound.call(null,sound__$1,start_time__$1,vol,rate));
var seq__35969 = cljs.core.seq.call(null,((cljs.core.coll_QMARK_.call(null,node))?node:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)));
var chunk__35970 = null;
var count__35971 = (0);
var i__35972 = (0);
while(true){
if((i__35972 < count__35971)){
var i = cljs.core._nth.call(null,chunk__35970,i__35972);
cljs.looperscript.scheduler.add_note_to_sounding_notes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),i,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time__$1], null));

var G__35985 = seq__35969;
var G__35986 = chunk__35970;
var G__35987 = count__35971;
var G__35988 = (i__35972 + (1));
seq__35969 = G__35985;
chunk__35970 = G__35986;
count__35971 = G__35987;
i__35972 = G__35988;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35969);
if(temp__4657__auto__){
var seq__35969__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35969__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__35969__$1);
var G__35989 = cljs.core.chunk_rest.call(null,seq__35969__$1);
var G__35990 = c__28548__auto__;
var G__35991 = cljs.core.count.call(null,c__28548__auto__);
var G__35992 = (0);
seq__35969 = G__35989;
chunk__35970 = G__35990;
count__35971 = G__35991;
i__35972 = G__35992;
continue;
} else {
var i = cljs.core.first.call(null,seq__35969__$1);
cljs.looperscript.scheduler.add_note_to_sounding_notes.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),i,new cljs.core.Keyword(null,"start-time","start-time",814801386),start_time__$1], null));

var G__35993 = cljs.core.next.call(null,seq__35969__$1);
var G__35994 = null;
var G__35995 = (0);
var G__35996 = (0);
seq__35969 = G__35993;
chunk__35970 = G__35994;
count__35971 = G__35995;
i__35972 = G__35996;
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
var seq__35997 = cljs.core.seq.call(null,cljs.core.deref.call(null,current_nnfns));
var chunk__35998 = null;
var count__35999 = (0);
var i__36000 = (0);
while(true){
if((i__36000 < count__35999)){
var n_n_fn = cljs.core._nth.call(null,chunk__35998,i__36000);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_36001 = n_n_fn.call(null);
if((((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_36001))) && (!(cljs.core.contains_QMARK_.call(null,next_note_36001,new cljs.core.Keyword(null,"rest","rest",-1241696419))))){
cljs.looperscript.scheduler.schedule_note.call(null,next_note_36001);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_36001) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__36002 = seq__35997;
var G__36003 = chunk__35998;
var G__36004 = count__35999;
var G__36005 = (i__36000 + (1));
seq__35997 = G__36002;
chunk__35998 = G__36003;
count__35999 = G__36004;
i__36000 = G__36005;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35997);
if(temp__4657__auto__){
var seq__35997__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35997__$1)){
var c__28548__auto__ = cljs.core.chunk_first.call(null,seq__35997__$1);
var G__36006 = cljs.core.chunk_rest.call(null,seq__35997__$1);
var G__36007 = c__28548__auto__;
var G__36008 = cljs.core.count.call(null,c__28548__auto__);
var G__36009 = (0);
seq__35997 = G__36006;
chunk__35998 = G__36007;
count__35999 = G__36008;
i__36000 = G__36009;
continue;
} else {
var n_n_fn = cljs.core.first.call(null,seq__35997__$1);
if((n_n_fn.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)) < end_time)){
while(true){
var next_note_36010 = n_n_fn.call(null);
if((((0) < new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(next_note_36010))) && (!(cljs.core.contains_QMARK_.call(null,next_note_36010,new cljs.core.Keyword(null,"rest","rest",-1241696419))))){
cljs.looperscript.scheduler.schedule_note.call(null,next_note_36010);
} else {
}

if((new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(next_note_36010) < end_time)){
continue;
} else {
}
break;
}
} else {
}

var G__36011 = cljs.core.next.call(null,seq__35997__$1);
var G__36012 = null;
var G__36013 = (0);
var G__36014 = (0);
seq__35997 = G__36011;
chunk__35998 = G__36012;
count__35999 = G__36013;
i__36000 = G__36014;
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

//# sourceMappingURL=scheduler.js.map?rel=1513064071296
