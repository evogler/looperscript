// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.player');
goog.require('cljs.core');
goog.require('instaparse.core');
goog.require('cljs.looperscript.logging');
goog.require('cljs.looperscript.next_note_fn');
goog.require('cljs.looperscript.get_parts');
goog.require('cljs.looperscript.start_time');
goog.require('cljs.looperscript.scheduler');
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
return (function cljs$looperscript$player$update_STAR__$_iter__79723(s__79724){
return (new cljs.core.LazySeq(null,((function (params,parts__$1){
return (function (){
var s__79724__$1 = s__79724;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__79724__$1);
if(temp__4657__auto__){
var s__79724__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__79724__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__79724__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__79726 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__79725 = (0);
while(true){
if((i__79725 < size__28516__auto__)){
var part = cljs.core._nth.call(null,c__28515__auto__,i__79725);
cljs.core.chunk_append.call(null,b__79726,cljs.looperscript.next_note_fn.next_note_fn.call(null,part,cljs.looperscript.start_time.get_current_start_time.call(null),params));

var G__79731 = (i__79725 + (1));
i__79725 = G__79731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79726),cljs$looperscript$player$update_STAR__$_iter__79723.call(null,cljs.core.chunk_rest.call(null,s__79724__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79726),null);
}
} else {
var part = cljs.core.first.call(null,s__79724__$2);
return cljs.core.cons.call(null,cljs.looperscript.next_note_fn.next_note_fn.call(null,part,cljs.looperscript.start_time.get_current_start_time.call(null),params),cljs$looperscript$player$update_STAR__$_iter__79723.call(null,cljs.core.rest.call(null,s__79724__$2)));
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
var seq__79727_79732 = cljs.core.seq.call(null,new_nnfns);
var chunk__79728_79733 = null;
var count__79729_79734 = (0);
var i__79730_79735 = (0);
while(true){
if((i__79730_79735 < count__79729_79734)){
var nnfn_79736 = cljs.core._nth.call(null,chunk__79728_79733,i__79730_79735);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_79736.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_79736.call(null);

continue;
} else {
}
break;
}

var G__79737 = seq__79727_79732;
var G__79738 = chunk__79728_79733;
var G__79739 = count__79729_79734;
var G__79740 = (i__79730_79735 + (1));
seq__79727_79732 = G__79737;
chunk__79728_79733 = G__79738;
count__79729_79734 = G__79739;
i__79730_79735 = G__79740;
continue;
} else {
var temp__4657__auto___79741 = cljs.core.seq.call(null,seq__79727_79732);
if(temp__4657__auto___79741){
var seq__79727_79742__$1 = temp__4657__auto___79741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__79727_79742__$1)){
var c__28548__auto___79743 = cljs.core.chunk_first.call(null,seq__79727_79742__$1);
var G__79744 = cljs.core.chunk_rest.call(null,seq__79727_79742__$1);
var G__79745 = c__28548__auto___79743;
var G__79746 = cljs.core.count.call(null,c__28548__auto___79743);
var G__79747 = (0);
seq__79727_79732 = G__79744;
chunk__79728_79733 = G__79745;
count__79729_79734 = G__79746;
i__79730_79735 = G__79747;
continue;
} else {
var nnfn_79748 = cljs.core.first.call(null,seq__79727_79742__$1);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_79748.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_79748.call(null);

continue;
} else {
}
break;
}

var G__79749 = cljs.core.next.call(null,seq__79727_79742__$1);
var G__79750 = null;
var G__79751 = (0);
var G__79752 = (0);
seq__79727_79732 = G__79749;
chunk__79728_79733 = G__79750;
count__79729_79734 = G__79751;
i__79730_79735 = G__79752;
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

//# sourceMappingURL=player.js.map?rel=1513049392472
