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
cljs.looperscript.player.play_delay_time = 2.5;
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
var init = new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(parts);
var parts__$1 = cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,parts,new cljs.core.Keyword(null,"params","params",710516235)),new cljs.core.Keyword(null,"init","init",-1875481434));
if(cljs.core.truth_(instaparse.core.failure_QMARK_.call(null,parts__$1))){
return cljs.looperscript.logging.log.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,parts__$1))].join(''));
} else {
var new_nnfns = cljs.core.vec.call(null,(function (){var iter__28517__auto__ = ((function (params,init,parts__$1){
return (function cljs$looperscript$player$update_STAR__$_iter__37909(s__37910){
return (new cljs.core.LazySeq(null,((function (params,init,parts__$1){
return (function (){
var s__37910__$1 = s__37910;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37910__$1);
if(temp__4657__auto__){
var s__37910__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37910__$2)){
var c__28515__auto__ = cljs.core.chunk_first.call(null,s__37910__$2);
var size__28516__auto__ = cljs.core.count.call(null,c__28515__auto__);
var b__37912 = cljs.core.chunk_buffer.call(null,size__28516__auto__);
if((function (){var i__37911 = (0);
while(true){
if((i__37911 < size__28516__auto__)){
var part = cljs.core._nth.call(null,c__28515__auto__,i__37911);
cljs.core.chunk_append.call(null,b__37912,cljs.looperscript.next_note_fn.next_note_fn.call(null,part,cljs.looperscript.start_time.get_current_start_time.call(null),params));

var G__37917 = (i__37911 + (1));
i__37911 = G__37917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37912),cljs$looperscript$player$update_STAR__$_iter__37909.call(null,cljs.core.chunk_rest.call(null,s__37910__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37912),null);
}
} else {
var part = cljs.core.first.call(null,s__37910__$2);
return cljs.core.cons.call(null,cljs.looperscript.next_note_fn.next_note_fn.call(null,part,cljs.looperscript.start_time.get_current_start_time.call(null),params),cljs$looperscript$player$update_STAR__$_iter__37909.call(null,cljs.core.rest.call(null,s__37910__$2)));
}
} else {
return null;
}
break;
}
});})(params,init,parts__$1))
,null,null));
});})(params,init,parts__$1))
;
return iter__28517__auto__.call(null,cljs.core.vals.call(null,parts__$1));
})());
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT","INIT",-581100519),init);

var seq__37913_37918 = cljs.core.seq.call(null,new_nnfns);
var chunk__37914_37919 = null;
var count__37915_37920 = (0);
var i__37916_37921 = (0);
while(true){
if((i__37916_37921 < count__37915_37920)){
var nnfn_37922 = cljs.core._nth.call(null,chunk__37914_37919,i__37916_37921);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_37922.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_37922.call(null);

continue;
} else {
}
break;
}

var G__37923 = seq__37913_37918;
var G__37924 = chunk__37914_37919;
var G__37925 = count__37915_37920;
var G__37926 = (i__37916_37921 + (1));
seq__37913_37918 = G__37923;
chunk__37914_37919 = G__37924;
count__37915_37920 = G__37925;
i__37916_37921 = G__37926;
continue;
} else {
var temp__4657__auto___37927 = cljs.core.seq.call(null,seq__37913_37918);
if(temp__4657__auto___37927){
var seq__37913_37928__$1 = temp__4657__auto___37927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37913_37928__$1)){
var c__28548__auto___37929 = cljs.core.chunk_first.call(null,seq__37913_37928__$1);
var G__37930 = cljs.core.chunk_rest.call(null,seq__37913_37928__$1);
var G__37931 = c__28548__auto___37929;
var G__37932 = cljs.core.count.call(null,c__28548__auto___37929);
var G__37933 = (0);
seq__37913_37918 = G__37930;
chunk__37914_37919 = G__37931;
count__37915_37920 = G__37932;
i__37916_37921 = G__37933;
continue;
} else {
var nnfn_37934 = cljs.core.first.call(null,seq__37913_37928__$1);
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

if((cljs.looperscript.start_time.now.call(null) > nnfn_37934.call(null,new cljs.core.Keyword(null,"time-pos","time-pos",-106363383)))){
nnfn_37934.call(null);

continue;
} else {
}
break;
}

var G__37935 = cljs.core.next.call(null,seq__37913_37928__$1);
var G__37936 = null;
var G__37937 = (0);
var G__37938 = (0);
seq__37913_37918 = G__37935;
chunk__37914_37919 = G__37936;
count__37915_37920 = G__37937;
i__37916_37921 = G__37938;
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
cljs.looperscript.start_time.reset_clock_BANG_.call(null,(cljs.looperscript.start_time.now.call(null) + cljs.looperscript.player.play_delay_time));
} else {
}

cljs.looperscript.player.update_STAR_.call(null,cljs.looperscript.get_parts.get_parts.call(null));

cljs.looperscript.scheduler.kill_playing_interval.call(null);

cljs.looperscript.scheduler.set_playing_interval.call(null,cljs.looperscript.scheduler.queue_notes);

return cljs.core.reset_BANG_.call(null,cljs.looperscript.player.playing,true);
});

//# sourceMappingURL=player.js.map?rel=1514752957487
