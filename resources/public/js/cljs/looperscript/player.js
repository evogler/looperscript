// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.player');
goog.require('cljs.core');
goog.require('instaparse.core');
goog.require('cljs.looperscript.audio');
goog.require('cljs.looperscript.logging');
goog.require('cljs.looperscript.next_note_fn');
goog.require('cljs.looperscript.get_parts');
goog.require('cljs.looperscript.start_time');
goog.require('cljs.looperscript.scheduler');
cljs.looperscript.audio.load_some_drums.call(null);
if(typeof cljs.looperscript.player.playing !== 'undefined'){
} else {
cljs.looperscript.player.playing = cljs.core.atom.call(null,false);
}
cljs.looperscript.player.stop = (function cljs$looperscript$player$stop(){
cljs.core.reset_BANG_.call(null,cljs.looperscript.player.playing,false);

cljs.looperscript.scheduler.kill_playing_interval.call(null);

return cljs.looperscript.scheduler.kill_sounds.call(null);
});
cljs.looperscript.player.reset_button = (function cljs$looperscript$player$reset_button(){
cljs.looperscript.player.stop.call(null);

return cljs.looperscript.start_time.reset_clock_BANG_.call(null);
});
cljs.looperscript.player.update_STAR_ = (function cljs$looperscript$player$update_STAR_(parts){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(parts);
var parts__$1 = cljs.core.dissoc.call(null,parts,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.truth_(instaparse.core.failure_QMARK_.call(null,parts__$1))){
return cljs.looperscript.logging.log.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,parts__$1))].join(''));
} else {
var new_nnfns = cljs.core.vec.call(null,(function (){var iter__28517__auto__ = ((function (params,parts__$1){
return (function cljs$looperscript$player$update_STAR__$_iter__33399(s__33400){
return (new cljs.core.LazySeq(null,((function (params,parts__$1){
return (function (){
var s__33400__$1 = s__33400;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33400__$1);
if(temp__4657__auto__){
var s__33400__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33400__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__33400__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__33402 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__33401 = (0);
while(true){
if((i__33401 < size__28516__auto__)){
var part = cljs.core._nth.call(null,c__28515__auto__,i__33401);
cljs.core.chunk_append.call(null,b__33402,cljs.looperscript.next_note_fn.next_note_fn.call(null,part,cljs.looperscript.start_time.get_current_start_time.call(null),params));

var G__33407 = (i__33401 + (1));
i__33401 = G__33407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33402),cljs$looperscript$player$update_STAR__$_iter__33399.call(null,cljs.core.chunk_rest.call(null,s__33400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33402),null);
}
} else {
var part = cljs.core.first.call(null,s__33400__$2);
return cljs.core.cons.call(null,cljs.looperscript.next_note_fn.next_note_fn.call(null,part,cljs.looperscript.start_time.get_current_start_time.call(null),params),cljs$looperscript$player$update_STAR__$_iter__33399.call(null,cljs.core.rest.call(null,s__33400__$2)));
}
} else {
return null;
}
break;
}
});})(params,parts__$1))
,null,null));
});})(params,parts__$1))
;
return iter__28517__auto__.call(null,cljs.core.vals.call(null,parts__$1));
})());
var seq__33403_33408 = cljs.core.seq.call(null,new_nnfns);
var chunk__33404_33409 = null;
var count__33405_33410 = (0);
var i__33406_33411 = (0);
while(true){
if((i__33406_33411 < count__33405_33410)){
var nnfn_33412 = cljs.core._nth.call(null,chunk__33404_33409,i__33406_33411);
while(true){
if(cljs.core.truth_((function (){var and__27697__auto__ = cljs.core.deref.call(null,cljs.looperscript.scheduler.last_queue_time);
if(cljs.core.truth_(and__27697__auto__)){
var and__27697__auto____$1 = cljs.core.deref.call(null,cljs.looperscript.player.playing);
if(cljs.core.truth_(and__27697__auto____$1)){
return (cljs.looperscript.scheduler.queue_time_interval < (cljs.looperscript.start_time.now.call(null) - cljs.core.deref.call(null,cljs.looperscript.scheduler.last_queue_time)));
} else {
return and__27697__auto____$1;
}
} else {
return and__27697__auto__;
}
})())){
} else {
}

if((cljs.looperscript.start_time.now.call(null) > nnfn_33412.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_33412.call(null);

continue;
} else {
}
break;
}

var G__33413 = seq__33403_33408;
var G__33414 = chunk__33404_33409;
var G__33415 = count__33405_33410;
var G__33416 = (i__33406_33411 + (1));
seq__33403_33408 = G__33413;
chunk__33404_33409 = G__33414;
count__33405_33410 = G__33415;
i__33406_33411 = G__33416;
continue;
} else {
var temp__4657__auto___33417 = cljs.core.seq.call(null,seq__33403_33408);
if(temp__4657__auto___33417){
var seq__33403_33418__$1 = temp__4657__auto___33417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33403_33418__$1)){
var c__28548__auto___33419 = cljs.core.chunk_first.call(null,seq__33403_33418__$1);
var G__33420 = cljs.core.chunk_rest.call(null,seq__33403_33418__$1);
var G__33421 = c__28548__auto___33419;
var G__33422 = cljs.core.count.call(null,c__28548__auto___33419);
var G__33423 = (0);
seq__33403_33408 = G__33420;
chunk__33404_33409 = G__33421;
count__33405_33410 = G__33422;
i__33406_33411 = G__33423;
continue;
} else {
var nnfn_33424 = cljs.core.first.call(null,seq__33403_33418__$1);
while(true){
if(cljs.core.truth_((function (){var and__27697__auto__ = cljs.core.deref.call(null,cljs.looperscript.scheduler.last_queue_time);
if(cljs.core.truth_(and__27697__auto__)){
var and__27697__auto____$1 = cljs.core.deref.call(null,cljs.looperscript.player.playing);
if(cljs.core.truth_(and__27697__auto____$1)){
return (cljs.looperscript.scheduler.queue_time_interval < (cljs.looperscript.start_time.now.call(null) - cljs.core.deref.call(null,cljs.looperscript.scheduler.last_queue_time)));
} else {
return and__27697__auto____$1;
}
} else {
return and__27697__auto__;
}
})())){
} else {
}

if((cljs.looperscript.start_time.now.call(null) > nnfn_33424.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_33424.call(null);

continue;
} else {
}
break;
}

var G__33425 = cljs.core.next.call(null,seq__33403_33418__$1);
var G__33426 = null;
var G__33427 = (0);
var G__33428 = (0);
seq__33403_33408 = G__33425;
chunk__33404_33409 = G__33426;
count__33405_33410 = G__33427;
i__33406_33411 = G__33428;
continue;
}
} else {
}
}
break;
}

cljs.looperscript.scheduler.kill_unstarted_sounds.call(null);

return cljs.looperscript.scheduler.queue_notes.call(null,new_nnfns);
}
});
cljs.looperscript.player.play = (function cljs$looperscript$player$play(){
if((cljs.looperscript.start_time.get_current_start_time.call(null) == null)){
cljs.looperscript.start_time.reset_clock_BANG_.call(null,(cljs.looperscript.start_time.now.call(null) + 0.5));
} else {
}

cljs.looperscript.player.update_STAR_.call(null,cljs.looperscript.get_parts.get_parts.call(null));

cljs.looperscript.scheduler.kill_playing_interval.call(null);

cljs.looperscript.scheduler.set_playing_interval.call(null,cljs.looperscript.scheduler.queue_notes);

return cljs.core.reset_BANG_.call(null,cljs.looperscript.player.playing,true);
});

//# sourceMappingURL=player.js.map?rel=1513452437670
