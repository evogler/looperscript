// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__10953){
var vec__10954 = p__10953;
var i = cljs.core.nth.call(null,vec__10954,(0),null);
var v = cljs.core.nth.call(null,vec__10954,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__10957 = seg;
var gcol = cljs.core.nth.call(null,vec__10957,(0),null);
var source = cljs.core.nth.call(null,vec__10957,(1),null);
var line = cljs.core.nth.call(null,vec__10957,(2),null);
var col = cljs.core.nth.call(null,vec__10957,(3),null);
var name = cljs.core.nth.call(null,vec__10957,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__10960 = seg;
var gcol = cljs.core.nth.call(null,vec__10960,(0),null);
var source = cljs.core.nth.call(null,vec__10960,(1),null);
var line = cljs.core.nth.call(null,vec__10960,(2),null);
var col = cljs.core.nth.call(null,vec__10960,(3),null);
var name = cljs.core.nth.call(null,vec__10960,(4),null);
var vec__10963 = relseg;
var rgcol = cljs.core.nth.call(null,vec__10963,(0),null);
var rsource = cljs.core.nth.call(null,vec__10963,(1),null);
var rline = cljs.core.nth.call(null,vec__10963,(2),null);
var rcol = cljs.core.nth.call(null,vec__10963,(3),null);
var rname = cljs.core.nth.call(null,vec__10963,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__7418__auto__ = source;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__7418__auto__ = line;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__7418__auto__ = col;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__7418__auto__ = name;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__10966 = segmap;
var map__10966__$1 = ((((!((map__10966 == null)))?((((map__10966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10966):map__10966);
var gcol = cljs.core.get.call(null,map__10966__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__10966__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__10966__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__10966__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__10966__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__10966,map__10966__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__10966,map__10966__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__10966,map__10966__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__10966,map__10966__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__10966,map__10966__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__10966,map__10966__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__10969 = arguments.length;
switch (G__10969) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__10970 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__10974 = cljs.core.next.call(null,segs__$1);
var G__10975 = nrelseg;
var G__10976 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__10974;
relseg__$1 = G__10975;
result__$1 = G__10976;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__10970,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__10970,(1),null);
var G__10977 = (gline + (1));
var G__10978 = cljs.core.next.call(null,lines__$1);
var G__10979 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__10980 = result__$1;
gline = G__10977;
lines__$1 = G__10978;
relseg = G__10979;
result = G__10980;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__10982 = segmap;
var map__10982__$1 = ((((!((map__10982 == null)))?((((map__10982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10982):map__10982);
var gcol = cljs.core.get.call(null,map__10982__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__10982__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__10982__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__10982__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__10982__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__10982,map__10982__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__10982,map__10982__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__10981_SHARP_){
return cljs.core.conj.call(null,p1__10981_SHARP_,d__$1);
});})(map__10982,map__10982__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__10982,map__10982__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__10985 = arguments.length;
switch (G__10985) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__10986 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__10990 = cljs.core.next.call(null,segs__$1);
var G__10991 = nrelseg;
var G__10992 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__10990;
relseg__$1 = G__10991;
result__$1 = G__10992;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__10986,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__10986,(1),null);
var G__10993 = (gline + (1));
var G__10994 = cljs.core.next.call(null,lines__$1);
var G__10995 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__10996 = result__$1;
gline = G__10993;
lines__$1 = G__10994;
relseg = G__10995;
result = G__10996;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__10997){
var vec__10998 = p__10997;
var _ = cljs.core.nth.call(null,vec__10998,(0),null);
var source = cljs.core.nth.call(null,vec__10998,(1),null);
var line = cljs.core.nth.call(null,vec__10998,(2),null);
var col = cljs.core.nth.call(null,vec__10998,(3),null);
var name = cljs.core.nth.call(null,vec__10998,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__11001){
var vec__11002 = p__11001;
var gcol = cljs.core.nth.call(null,vec__11002,(0),null);
var sidx = cljs.core.nth.call(null,vec__11002,(1),null);
var line = cljs.core.nth.call(null,vec__11002,(2),null);
var col = cljs.core.nth.call(null,vec__11002,(3),null);
var name = cljs.core.nth.call(null,vec__11002,(4),null);
var seg = vec__11002;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__11002,gcol,sidx,line,col,name,seg,relseg){
return (function (p__11005){
var vec__11006 = p__11005;
var _ = cljs.core.nth.call(null,vec__11006,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__11006,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__11006,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__11006,(3),null);
var lname = cljs.core.nth.call(null,vec__11006,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__7418__auto__ = name;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__11002,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__7418__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__11012 = cljs.core.seq.call(null,infos);
var chunk__11013 = null;
var count__11014 = (0);
var i__11015 = (0);
while(true){
if((i__11015 < count__11014)){
var info = cljs.core._nth.call(null,chunk__11013,i__11015);
var segv_11094 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_11095 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11096 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_11095 > (lc_11096 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11012,chunk__11013,count__11014,i__11015,segv_11094,gline_11095,lc_11096,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_11095 - (lc_11096 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11094], null));
});})(seq__11012,chunk__11013,count__11014,i__11015,segv_11094,gline_11095,lc_11096,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11012,chunk__11013,count__11014,i__11015,segv_11094,gline_11095,lc_11096,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11095], null),cljs.core.conj,segv_11094);
});})(seq__11012,chunk__11013,count__11014,i__11015,segv_11094,gline_11095,lc_11096,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__11097 = seq__11012;
var G__11098 = chunk__11013;
var G__11099 = count__11014;
var G__11100 = (i__11015 + (1));
seq__11012 = G__11097;
chunk__11013 = G__11098;
count__11014 = G__11099;
i__11015 = G__11100;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11012);
if(temp__4657__auto__){
var seq__11012__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11012__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__11012__$1);
var G__11101 = cljs.core.chunk_rest.call(null,seq__11012__$1);
var G__11102 = c__8257__auto__;
var G__11103 = cljs.core.count.call(null,c__8257__auto__);
var G__11104 = (0);
seq__11012 = G__11101;
chunk__11013 = G__11102;
count__11014 = G__11103;
i__11015 = G__11104;
continue;
} else {
var info = cljs.core.first.call(null,seq__11012__$1);
var segv_11105 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_11106 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11107 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_11106 > (lc_11107 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__11012,chunk__11013,count__11014,i__11015,segv_11105,gline_11106,lc_11107,info,seq__11012__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_11106 - (lc_11107 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11105], null));
});})(seq__11012,chunk__11013,count__11014,i__11015,segv_11105,gline_11106,lc_11107,info,seq__11012__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__11012,chunk__11013,count__11014,i__11015,segv_11105,gline_11106,lc_11107,info,seq__11012__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11106], null),cljs.core.conj,segv_11105);
});})(seq__11012,chunk__11013,count__11014,i__11015,segv_11105,gline_11106,lc_11107,info,seq__11012__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__11108 = cljs.core.next.call(null,seq__11012__$1);
var G__11109 = null;
var G__11110 = (0);
var G__11111 = (0);
seq__11012 = G__11108;
chunk__11013 = G__11109;
count__11014 = G__11110;
i__11015 = G__11111;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__11016_11112 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__11017_11113 = null;
var count__11018_11114 = (0);
var i__11019_11115 = (0);
while(true){
if((i__11019_11115 < count__11018_11114)){
var vec__11020_11116 = cljs.core._nth.call(null,chunk__11017_11113,i__11019_11115);
var source_idx_11117 = cljs.core.nth.call(null,vec__11020_11116,(0),null);
var vec__11023_11118 = cljs.core.nth.call(null,vec__11020_11116,(1),null);
var __11119 = cljs.core.nth.call(null,vec__11023_11118,(0),null);
var lines_11120__$1 = cljs.core.nth.call(null,vec__11023_11118,(1),null);
var seq__11026_11121 = cljs.core.seq.call(null,lines_11120__$1);
var chunk__11027_11122 = null;
var count__11028_11123 = (0);
var i__11029_11124 = (0);
while(true){
if((i__11029_11124 < count__11028_11123)){
var vec__11030_11125 = cljs.core._nth.call(null,chunk__11027_11122,i__11029_11124);
var line_11126 = cljs.core.nth.call(null,vec__11030_11125,(0),null);
var cols_11127 = cljs.core.nth.call(null,vec__11030_11125,(1),null);
var seq__11033_11128 = cljs.core.seq.call(null,cols_11127);
var chunk__11034_11129 = null;
var count__11035_11130 = (0);
var i__11036_11131 = (0);
while(true){
if((i__11036_11131 < count__11035_11130)){
var vec__11037_11132 = cljs.core._nth.call(null,chunk__11034_11129,i__11036_11131);
var col_11133 = cljs.core.nth.call(null,vec__11037_11132,(0),null);
var infos_11134 = cljs.core.nth.call(null,vec__11037_11132,(1),null);
encode_cols.call(null,infos_11134,source_idx_11117,line_11126,col_11133);

var G__11135 = seq__11033_11128;
var G__11136 = chunk__11034_11129;
var G__11137 = count__11035_11130;
var G__11138 = (i__11036_11131 + (1));
seq__11033_11128 = G__11135;
chunk__11034_11129 = G__11136;
count__11035_11130 = G__11137;
i__11036_11131 = G__11138;
continue;
} else {
var temp__4657__auto___11139 = cljs.core.seq.call(null,seq__11033_11128);
if(temp__4657__auto___11139){
var seq__11033_11140__$1 = temp__4657__auto___11139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11033_11140__$1)){
var c__8257__auto___11141 = cljs.core.chunk_first.call(null,seq__11033_11140__$1);
var G__11142 = cljs.core.chunk_rest.call(null,seq__11033_11140__$1);
var G__11143 = c__8257__auto___11141;
var G__11144 = cljs.core.count.call(null,c__8257__auto___11141);
var G__11145 = (0);
seq__11033_11128 = G__11142;
chunk__11034_11129 = G__11143;
count__11035_11130 = G__11144;
i__11036_11131 = G__11145;
continue;
} else {
var vec__11040_11146 = cljs.core.first.call(null,seq__11033_11140__$1);
var col_11147 = cljs.core.nth.call(null,vec__11040_11146,(0),null);
var infos_11148 = cljs.core.nth.call(null,vec__11040_11146,(1),null);
encode_cols.call(null,infos_11148,source_idx_11117,line_11126,col_11147);

var G__11149 = cljs.core.next.call(null,seq__11033_11140__$1);
var G__11150 = null;
var G__11151 = (0);
var G__11152 = (0);
seq__11033_11128 = G__11149;
chunk__11034_11129 = G__11150;
count__11035_11130 = G__11151;
i__11036_11131 = G__11152;
continue;
}
} else {
}
}
break;
}

var G__11153 = seq__11026_11121;
var G__11154 = chunk__11027_11122;
var G__11155 = count__11028_11123;
var G__11156 = (i__11029_11124 + (1));
seq__11026_11121 = G__11153;
chunk__11027_11122 = G__11154;
count__11028_11123 = G__11155;
i__11029_11124 = G__11156;
continue;
} else {
var temp__4657__auto___11157 = cljs.core.seq.call(null,seq__11026_11121);
if(temp__4657__auto___11157){
var seq__11026_11158__$1 = temp__4657__auto___11157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11026_11158__$1)){
var c__8257__auto___11159 = cljs.core.chunk_first.call(null,seq__11026_11158__$1);
var G__11160 = cljs.core.chunk_rest.call(null,seq__11026_11158__$1);
var G__11161 = c__8257__auto___11159;
var G__11162 = cljs.core.count.call(null,c__8257__auto___11159);
var G__11163 = (0);
seq__11026_11121 = G__11160;
chunk__11027_11122 = G__11161;
count__11028_11123 = G__11162;
i__11029_11124 = G__11163;
continue;
} else {
var vec__11043_11164 = cljs.core.first.call(null,seq__11026_11158__$1);
var line_11165 = cljs.core.nth.call(null,vec__11043_11164,(0),null);
var cols_11166 = cljs.core.nth.call(null,vec__11043_11164,(1),null);
var seq__11046_11167 = cljs.core.seq.call(null,cols_11166);
var chunk__11047_11168 = null;
var count__11048_11169 = (0);
var i__11049_11170 = (0);
while(true){
if((i__11049_11170 < count__11048_11169)){
var vec__11050_11171 = cljs.core._nth.call(null,chunk__11047_11168,i__11049_11170);
var col_11172 = cljs.core.nth.call(null,vec__11050_11171,(0),null);
var infos_11173 = cljs.core.nth.call(null,vec__11050_11171,(1),null);
encode_cols.call(null,infos_11173,source_idx_11117,line_11165,col_11172);

var G__11174 = seq__11046_11167;
var G__11175 = chunk__11047_11168;
var G__11176 = count__11048_11169;
var G__11177 = (i__11049_11170 + (1));
seq__11046_11167 = G__11174;
chunk__11047_11168 = G__11175;
count__11048_11169 = G__11176;
i__11049_11170 = G__11177;
continue;
} else {
var temp__4657__auto___11178__$1 = cljs.core.seq.call(null,seq__11046_11167);
if(temp__4657__auto___11178__$1){
var seq__11046_11179__$1 = temp__4657__auto___11178__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11046_11179__$1)){
var c__8257__auto___11180 = cljs.core.chunk_first.call(null,seq__11046_11179__$1);
var G__11181 = cljs.core.chunk_rest.call(null,seq__11046_11179__$1);
var G__11182 = c__8257__auto___11180;
var G__11183 = cljs.core.count.call(null,c__8257__auto___11180);
var G__11184 = (0);
seq__11046_11167 = G__11181;
chunk__11047_11168 = G__11182;
count__11048_11169 = G__11183;
i__11049_11170 = G__11184;
continue;
} else {
var vec__11053_11185 = cljs.core.first.call(null,seq__11046_11179__$1);
var col_11186 = cljs.core.nth.call(null,vec__11053_11185,(0),null);
var infos_11187 = cljs.core.nth.call(null,vec__11053_11185,(1),null);
encode_cols.call(null,infos_11187,source_idx_11117,line_11165,col_11186);

var G__11188 = cljs.core.next.call(null,seq__11046_11179__$1);
var G__11189 = null;
var G__11190 = (0);
var G__11191 = (0);
seq__11046_11167 = G__11188;
chunk__11047_11168 = G__11189;
count__11048_11169 = G__11190;
i__11049_11170 = G__11191;
continue;
}
} else {
}
}
break;
}

var G__11192 = cljs.core.next.call(null,seq__11026_11158__$1);
var G__11193 = null;
var G__11194 = (0);
var G__11195 = (0);
seq__11026_11121 = G__11192;
chunk__11027_11122 = G__11193;
count__11028_11123 = G__11194;
i__11029_11124 = G__11195;
continue;
}
} else {
}
}
break;
}

var G__11196 = seq__11016_11112;
var G__11197 = chunk__11017_11113;
var G__11198 = count__11018_11114;
var G__11199 = (i__11019_11115 + (1));
seq__11016_11112 = G__11196;
chunk__11017_11113 = G__11197;
count__11018_11114 = G__11198;
i__11019_11115 = G__11199;
continue;
} else {
var temp__4657__auto___11200 = cljs.core.seq.call(null,seq__11016_11112);
if(temp__4657__auto___11200){
var seq__11016_11201__$1 = temp__4657__auto___11200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11016_11201__$1)){
var c__8257__auto___11202 = cljs.core.chunk_first.call(null,seq__11016_11201__$1);
var G__11203 = cljs.core.chunk_rest.call(null,seq__11016_11201__$1);
var G__11204 = c__8257__auto___11202;
var G__11205 = cljs.core.count.call(null,c__8257__auto___11202);
var G__11206 = (0);
seq__11016_11112 = G__11203;
chunk__11017_11113 = G__11204;
count__11018_11114 = G__11205;
i__11019_11115 = G__11206;
continue;
} else {
var vec__11056_11207 = cljs.core.first.call(null,seq__11016_11201__$1);
var source_idx_11208 = cljs.core.nth.call(null,vec__11056_11207,(0),null);
var vec__11059_11209 = cljs.core.nth.call(null,vec__11056_11207,(1),null);
var __11210 = cljs.core.nth.call(null,vec__11059_11209,(0),null);
var lines_11211__$1 = cljs.core.nth.call(null,vec__11059_11209,(1),null);
var seq__11062_11212 = cljs.core.seq.call(null,lines_11211__$1);
var chunk__11063_11213 = null;
var count__11064_11214 = (0);
var i__11065_11215 = (0);
while(true){
if((i__11065_11215 < count__11064_11214)){
var vec__11066_11216 = cljs.core._nth.call(null,chunk__11063_11213,i__11065_11215);
var line_11217 = cljs.core.nth.call(null,vec__11066_11216,(0),null);
var cols_11218 = cljs.core.nth.call(null,vec__11066_11216,(1),null);
var seq__11069_11219 = cljs.core.seq.call(null,cols_11218);
var chunk__11070_11220 = null;
var count__11071_11221 = (0);
var i__11072_11222 = (0);
while(true){
if((i__11072_11222 < count__11071_11221)){
var vec__11073_11223 = cljs.core._nth.call(null,chunk__11070_11220,i__11072_11222);
var col_11224 = cljs.core.nth.call(null,vec__11073_11223,(0),null);
var infos_11225 = cljs.core.nth.call(null,vec__11073_11223,(1),null);
encode_cols.call(null,infos_11225,source_idx_11208,line_11217,col_11224);

var G__11226 = seq__11069_11219;
var G__11227 = chunk__11070_11220;
var G__11228 = count__11071_11221;
var G__11229 = (i__11072_11222 + (1));
seq__11069_11219 = G__11226;
chunk__11070_11220 = G__11227;
count__11071_11221 = G__11228;
i__11072_11222 = G__11229;
continue;
} else {
var temp__4657__auto___11230__$1 = cljs.core.seq.call(null,seq__11069_11219);
if(temp__4657__auto___11230__$1){
var seq__11069_11231__$1 = temp__4657__auto___11230__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11069_11231__$1)){
var c__8257__auto___11232 = cljs.core.chunk_first.call(null,seq__11069_11231__$1);
var G__11233 = cljs.core.chunk_rest.call(null,seq__11069_11231__$1);
var G__11234 = c__8257__auto___11232;
var G__11235 = cljs.core.count.call(null,c__8257__auto___11232);
var G__11236 = (0);
seq__11069_11219 = G__11233;
chunk__11070_11220 = G__11234;
count__11071_11221 = G__11235;
i__11072_11222 = G__11236;
continue;
} else {
var vec__11076_11237 = cljs.core.first.call(null,seq__11069_11231__$1);
var col_11238 = cljs.core.nth.call(null,vec__11076_11237,(0),null);
var infos_11239 = cljs.core.nth.call(null,vec__11076_11237,(1),null);
encode_cols.call(null,infos_11239,source_idx_11208,line_11217,col_11238);

var G__11240 = cljs.core.next.call(null,seq__11069_11231__$1);
var G__11241 = null;
var G__11242 = (0);
var G__11243 = (0);
seq__11069_11219 = G__11240;
chunk__11070_11220 = G__11241;
count__11071_11221 = G__11242;
i__11072_11222 = G__11243;
continue;
}
} else {
}
}
break;
}

var G__11244 = seq__11062_11212;
var G__11245 = chunk__11063_11213;
var G__11246 = count__11064_11214;
var G__11247 = (i__11065_11215 + (1));
seq__11062_11212 = G__11244;
chunk__11063_11213 = G__11245;
count__11064_11214 = G__11246;
i__11065_11215 = G__11247;
continue;
} else {
var temp__4657__auto___11248__$1 = cljs.core.seq.call(null,seq__11062_11212);
if(temp__4657__auto___11248__$1){
var seq__11062_11249__$1 = temp__4657__auto___11248__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11062_11249__$1)){
var c__8257__auto___11250 = cljs.core.chunk_first.call(null,seq__11062_11249__$1);
var G__11251 = cljs.core.chunk_rest.call(null,seq__11062_11249__$1);
var G__11252 = c__8257__auto___11250;
var G__11253 = cljs.core.count.call(null,c__8257__auto___11250);
var G__11254 = (0);
seq__11062_11212 = G__11251;
chunk__11063_11213 = G__11252;
count__11064_11214 = G__11253;
i__11065_11215 = G__11254;
continue;
} else {
var vec__11079_11255 = cljs.core.first.call(null,seq__11062_11249__$1);
var line_11256 = cljs.core.nth.call(null,vec__11079_11255,(0),null);
var cols_11257 = cljs.core.nth.call(null,vec__11079_11255,(1),null);
var seq__11082_11258 = cljs.core.seq.call(null,cols_11257);
var chunk__11083_11259 = null;
var count__11084_11260 = (0);
var i__11085_11261 = (0);
while(true){
if((i__11085_11261 < count__11084_11260)){
var vec__11086_11262 = cljs.core._nth.call(null,chunk__11083_11259,i__11085_11261);
var col_11263 = cljs.core.nth.call(null,vec__11086_11262,(0),null);
var infos_11264 = cljs.core.nth.call(null,vec__11086_11262,(1),null);
encode_cols.call(null,infos_11264,source_idx_11208,line_11256,col_11263);

var G__11265 = seq__11082_11258;
var G__11266 = chunk__11083_11259;
var G__11267 = count__11084_11260;
var G__11268 = (i__11085_11261 + (1));
seq__11082_11258 = G__11265;
chunk__11083_11259 = G__11266;
count__11084_11260 = G__11267;
i__11085_11261 = G__11268;
continue;
} else {
var temp__4657__auto___11269__$2 = cljs.core.seq.call(null,seq__11082_11258);
if(temp__4657__auto___11269__$2){
var seq__11082_11270__$1 = temp__4657__auto___11269__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11082_11270__$1)){
var c__8257__auto___11271 = cljs.core.chunk_first.call(null,seq__11082_11270__$1);
var G__11272 = cljs.core.chunk_rest.call(null,seq__11082_11270__$1);
var G__11273 = c__8257__auto___11271;
var G__11274 = cljs.core.count.call(null,c__8257__auto___11271);
var G__11275 = (0);
seq__11082_11258 = G__11272;
chunk__11083_11259 = G__11273;
count__11084_11260 = G__11274;
i__11085_11261 = G__11275;
continue;
} else {
var vec__11089_11276 = cljs.core.first.call(null,seq__11082_11270__$1);
var col_11277 = cljs.core.nth.call(null,vec__11089_11276,(0),null);
var infos_11278 = cljs.core.nth.call(null,vec__11089_11276,(1),null);
encode_cols.call(null,infos_11278,source_idx_11208,line_11256,col_11277);

var G__11279 = cljs.core.next.call(null,seq__11082_11270__$1);
var G__11280 = null;
var G__11281 = (0);
var G__11282 = (0);
seq__11082_11258 = G__11279;
chunk__11083_11259 = G__11280;
count__11084_11260 = G__11281;
i__11085_11261 = G__11282;
continue;
}
} else {
}
}
break;
}

var G__11283 = cljs.core.next.call(null,seq__11062_11249__$1);
var G__11284 = null;
var G__11285 = (0);
var G__11286 = (0);
seq__11062_11212 = G__11283;
chunk__11063_11213 = G__11284;
count__11064_11214 = G__11285;
i__11065_11215 = G__11286;
continue;
}
} else {
}
}
break;
}

var G__11287 = cljs.core.next.call(null,seq__11016_11201__$1);
var G__11288 = null;
var G__11289 = (0);
var G__11290 = (0);
seq__11016_11112 = G__11287;
chunk__11017_11113 = G__11288;
count__11018_11114 = G__11289;
i__11019_11115 = G__11290;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__11092 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11009_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11009_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11010_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__11010_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__11011_SHARP_){
return clojure.string.join.call(null,",",p1__11011_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__11093 = G__11092;
goog.object.set(G__11093,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__11093;
} else {
return G__11092;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__11291 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__11291,(0),null);
var col_map = cljs.core.nth.call(null,vec__11291,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__11294 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__11294,(0),null);
var infos = cljs.core.nth.call(null,vec__11294,(1),null);
var G__11300 = cljs.core.next.call(null,col_map_seq);
var G__11301 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__11294,col,infos,vec__11291,line,col_map){
return (function (v,p__11297){
var map__11298 = p__11297;
var map__11298__$1 = ((((!((map__11298 == null)))?((((map__11298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11298):map__11298);
var gline = cljs.core.get.call(null,map__11298__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__11298__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__11294,col,infos,vec__11291,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__11300;
new_cols = G__11301;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__11302 = cljs.core.next.call(null,line_map_seq);
var G__11303 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__11302;
new_lines = G__11303;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__11304_11366 = cljs.core.seq.call(null,reverse_map);
var chunk__11305_11367 = null;
var count__11306_11368 = (0);
var i__11307_11369 = (0);
while(true){
if((i__11307_11369 < count__11306_11368)){
var vec__11308_11370 = cljs.core._nth.call(null,chunk__11305_11367,i__11307_11369);
var line_11371 = cljs.core.nth.call(null,vec__11308_11370,(0),null);
var columns_11372 = cljs.core.nth.call(null,vec__11308_11370,(1),null);
var seq__11311_11373 = cljs.core.seq.call(null,columns_11372);
var chunk__11312_11374 = null;
var count__11313_11375 = (0);
var i__11314_11376 = (0);
while(true){
if((i__11314_11376 < count__11313_11375)){
var vec__11315_11377 = cljs.core._nth.call(null,chunk__11312_11374,i__11314_11376);
var column_11378 = cljs.core.nth.call(null,vec__11315_11377,(0),null);
var column_info_11379 = cljs.core.nth.call(null,vec__11315_11377,(1),null);
var seq__11318_11380 = cljs.core.seq.call(null,column_info_11379);
var chunk__11319_11381 = null;
var count__11320_11382 = (0);
var i__11321_11383 = (0);
while(true){
if((i__11321_11383 < count__11320_11382)){
var map__11322_11384 = cljs.core._nth.call(null,chunk__11319_11381,i__11321_11383);
var map__11322_11385__$1 = ((((!((map__11322_11384 == null)))?((((map__11322_11384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11322_11384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11322_11384):map__11322_11384);
var gline_11386 = cljs.core.get.call(null,map__11322_11385__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11387 = cljs.core.get.call(null,map__11322_11385__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11388 = cljs.core.get.call(null,map__11322_11385__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11386], null),cljs.core.fnil.call(null,((function (seq__11318_11380,chunk__11319_11381,count__11320_11382,i__11321_11383,seq__11311_11373,chunk__11312_11374,count__11313_11375,i__11314_11376,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11322_11384,map__11322_11385__$1,gline_11386,gcol_11387,name_11388,vec__11315_11377,column_11378,column_info_11379,vec__11308_11370,line_11371,columns_11372,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11387], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11371,new cljs.core.Keyword(null,"col","col",-1959363084),column_11378,new cljs.core.Keyword(null,"name","name",1843675177),name_11388], null));
});})(seq__11318_11380,chunk__11319_11381,count__11320_11382,i__11321_11383,seq__11311_11373,chunk__11312_11374,count__11313_11375,i__11314_11376,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11322_11384,map__11322_11385__$1,gline_11386,gcol_11387,name_11388,vec__11315_11377,column_11378,column_info_11379,vec__11308_11370,line_11371,columns_11372,inverted))
,cljs.core.sorted_map.call(null)));

var G__11389 = seq__11318_11380;
var G__11390 = chunk__11319_11381;
var G__11391 = count__11320_11382;
var G__11392 = (i__11321_11383 + (1));
seq__11318_11380 = G__11389;
chunk__11319_11381 = G__11390;
count__11320_11382 = G__11391;
i__11321_11383 = G__11392;
continue;
} else {
var temp__4657__auto___11393 = cljs.core.seq.call(null,seq__11318_11380);
if(temp__4657__auto___11393){
var seq__11318_11394__$1 = temp__4657__auto___11393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11318_11394__$1)){
var c__8257__auto___11395 = cljs.core.chunk_first.call(null,seq__11318_11394__$1);
var G__11396 = cljs.core.chunk_rest.call(null,seq__11318_11394__$1);
var G__11397 = c__8257__auto___11395;
var G__11398 = cljs.core.count.call(null,c__8257__auto___11395);
var G__11399 = (0);
seq__11318_11380 = G__11396;
chunk__11319_11381 = G__11397;
count__11320_11382 = G__11398;
i__11321_11383 = G__11399;
continue;
} else {
var map__11324_11400 = cljs.core.first.call(null,seq__11318_11394__$1);
var map__11324_11401__$1 = ((((!((map__11324_11400 == null)))?((((map__11324_11400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11324_11400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11324_11400):map__11324_11400);
var gline_11402 = cljs.core.get.call(null,map__11324_11401__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11403 = cljs.core.get.call(null,map__11324_11401__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11404 = cljs.core.get.call(null,map__11324_11401__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11402], null),cljs.core.fnil.call(null,((function (seq__11318_11380,chunk__11319_11381,count__11320_11382,i__11321_11383,seq__11311_11373,chunk__11312_11374,count__11313_11375,i__11314_11376,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11324_11400,map__11324_11401__$1,gline_11402,gcol_11403,name_11404,seq__11318_11394__$1,temp__4657__auto___11393,vec__11315_11377,column_11378,column_info_11379,vec__11308_11370,line_11371,columns_11372,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11403], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11371,new cljs.core.Keyword(null,"col","col",-1959363084),column_11378,new cljs.core.Keyword(null,"name","name",1843675177),name_11404], null));
});})(seq__11318_11380,chunk__11319_11381,count__11320_11382,i__11321_11383,seq__11311_11373,chunk__11312_11374,count__11313_11375,i__11314_11376,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11324_11400,map__11324_11401__$1,gline_11402,gcol_11403,name_11404,seq__11318_11394__$1,temp__4657__auto___11393,vec__11315_11377,column_11378,column_info_11379,vec__11308_11370,line_11371,columns_11372,inverted))
,cljs.core.sorted_map.call(null)));

var G__11405 = cljs.core.next.call(null,seq__11318_11394__$1);
var G__11406 = null;
var G__11407 = (0);
var G__11408 = (0);
seq__11318_11380 = G__11405;
chunk__11319_11381 = G__11406;
count__11320_11382 = G__11407;
i__11321_11383 = G__11408;
continue;
}
} else {
}
}
break;
}

var G__11409 = seq__11311_11373;
var G__11410 = chunk__11312_11374;
var G__11411 = count__11313_11375;
var G__11412 = (i__11314_11376 + (1));
seq__11311_11373 = G__11409;
chunk__11312_11374 = G__11410;
count__11313_11375 = G__11411;
i__11314_11376 = G__11412;
continue;
} else {
var temp__4657__auto___11413 = cljs.core.seq.call(null,seq__11311_11373);
if(temp__4657__auto___11413){
var seq__11311_11414__$1 = temp__4657__auto___11413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11311_11414__$1)){
var c__8257__auto___11415 = cljs.core.chunk_first.call(null,seq__11311_11414__$1);
var G__11416 = cljs.core.chunk_rest.call(null,seq__11311_11414__$1);
var G__11417 = c__8257__auto___11415;
var G__11418 = cljs.core.count.call(null,c__8257__auto___11415);
var G__11419 = (0);
seq__11311_11373 = G__11416;
chunk__11312_11374 = G__11417;
count__11313_11375 = G__11418;
i__11314_11376 = G__11419;
continue;
} else {
var vec__11326_11420 = cljs.core.first.call(null,seq__11311_11414__$1);
var column_11421 = cljs.core.nth.call(null,vec__11326_11420,(0),null);
var column_info_11422 = cljs.core.nth.call(null,vec__11326_11420,(1),null);
var seq__11329_11423 = cljs.core.seq.call(null,column_info_11422);
var chunk__11330_11424 = null;
var count__11331_11425 = (0);
var i__11332_11426 = (0);
while(true){
if((i__11332_11426 < count__11331_11425)){
var map__11333_11427 = cljs.core._nth.call(null,chunk__11330_11424,i__11332_11426);
var map__11333_11428__$1 = ((((!((map__11333_11427 == null)))?((((map__11333_11427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11333_11427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11333_11427):map__11333_11427);
var gline_11429 = cljs.core.get.call(null,map__11333_11428__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11430 = cljs.core.get.call(null,map__11333_11428__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11431 = cljs.core.get.call(null,map__11333_11428__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11429], null),cljs.core.fnil.call(null,((function (seq__11329_11423,chunk__11330_11424,count__11331_11425,i__11332_11426,seq__11311_11373,chunk__11312_11374,count__11313_11375,i__11314_11376,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11333_11427,map__11333_11428__$1,gline_11429,gcol_11430,name_11431,vec__11326_11420,column_11421,column_info_11422,seq__11311_11414__$1,temp__4657__auto___11413,vec__11308_11370,line_11371,columns_11372,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11430], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11371,new cljs.core.Keyword(null,"col","col",-1959363084),column_11421,new cljs.core.Keyword(null,"name","name",1843675177),name_11431], null));
});})(seq__11329_11423,chunk__11330_11424,count__11331_11425,i__11332_11426,seq__11311_11373,chunk__11312_11374,count__11313_11375,i__11314_11376,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11333_11427,map__11333_11428__$1,gline_11429,gcol_11430,name_11431,vec__11326_11420,column_11421,column_info_11422,seq__11311_11414__$1,temp__4657__auto___11413,vec__11308_11370,line_11371,columns_11372,inverted))
,cljs.core.sorted_map.call(null)));

var G__11432 = seq__11329_11423;
var G__11433 = chunk__11330_11424;
var G__11434 = count__11331_11425;
var G__11435 = (i__11332_11426 + (1));
seq__11329_11423 = G__11432;
chunk__11330_11424 = G__11433;
count__11331_11425 = G__11434;
i__11332_11426 = G__11435;
continue;
} else {
var temp__4657__auto___11436__$1 = cljs.core.seq.call(null,seq__11329_11423);
if(temp__4657__auto___11436__$1){
var seq__11329_11437__$1 = temp__4657__auto___11436__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11329_11437__$1)){
var c__8257__auto___11438 = cljs.core.chunk_first.call(null,seq__11329_11437__$1);
var G__11439 = cljs.core.chunk_rest.call(null,seq__11329_11437__$1);
var G__11440 = c__8257__auto___11438;
var G__11441 = cljs.core.count.call(null,c__8257__auto___11438);
var G__11442 = (0);
seq__11329_11423 = G__11439;
chunk__11330_11424 = G__11440;
count__11331_11425 = G__11441;
i__11332_11426 = G__11442;
continue;
} else {
var map__11335_11443 = cljs.core.first.call(null,seq__11329_11437__$1);
var map__11335_11444__$1 = ((((!((map__11335_11443 == null)))?((((map__11335_11443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11335_11443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11335_11443):map__11335_11443);
var gline_11445 = cljs.core.get.call(null,map__11335_11444__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11446 = cljs.core.get.call(null,map__11335_11444__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11447 = cljs.core.get.call(null,map__11335_11444__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11445], null),cljs.core.fnil.call(null,((function (seq__11329_11423,chunk__11330_11424,count__11331_11425,i__11332_11426,seq__11311_11373,chunk__11312_11374,count__11313_11375,i__11314_11376,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11335_11443,map__11335_11444__$1,gline_11445,gcol_11446,name_11447,seq__11329_11437__$1,temp__4657__auto___11436__$1,vec__11326_11420,column_11421,column_info_11422,seq__11311_11414__$1,temp__4657__auto___11413,vec__11308_11370,line_11371,columns_11372,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11446], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11371,new cljs.core.Keyword(null,"col","col",-1959363084),column_11421,new cljs.core.Keyword(null,"name","name",1843675177),name_11447], null));
});})(seq__11329_11423,chunk__11330_11424,count__11331_11425,i__11332_11426,seq__11311_11373,chunk__11312_11374,count__11313_11375,i__11314_11376,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11335_11443,map__11335_11444__$1,gline_11445,gcol_11446,name_11447,seq__11329_11437__$1,temp__4657__auto___11436__$1,vec__11326_11420,column_11421,column_info_11422,seq__11311_11414__$1,temp__4657__auto___11413,vec__11308_11370,line_11371,columns_11372,inverted))
,cljs.core.sorted_map.call(null)));

var G__11448 = cljs.core.next.call(null,seq__11329_11437__$1);
var G__11449 = null;
var G__11450 = (0);
var G__11451 = (0);
seq__11329_11423 = G__11448;
chunk__11330_11424 = G__11449;
count__11331_11425 = G__11450;
i__11332_11426 = G__11451;
continue;
}
} else {
}
}
break;
}

var G__11452 = cljs.core.next.call(null,seq__11311_11414__$1);
var G__11453 = null;
var G__11454 = (0);
var G__11455 = (0);
seq__11311_11373 = G__11452;
chunk__11312_11374 = G__11453;
count__11313_11375 = G__11454;
i__11314_11376 = G__11455;
continue;
}
} else {
}
}
break;
}

var G__11456 = seq__11304_11366;
var G__11457 = chunk__11305_11367;
var G__11458 = count__11306_11368;
var G__11459 = (i__11307_11369 + (1));
seq__11304_11366 = G__11456;
chunk__11305_11367 = G__11457;
count__11306_11368 = G__11458;
i__11307_11369 = G__11459;
continue;
} else {
var temp__4657__auto___11460 = cljs.core.seq.call(null,seq__11304_11366);
if(temp__4657__auto___11460){
var seq__11304_11461__$1 = temp__4657__auto___11460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11304_11461__$1)){
var c__8257__auto___11462 = cljs.core.chunk_first.call(null,seq__11304_11461__$1);
var G__11463 = cljs.core.chunk_rest.call(null,seq__11304_11461__$1);
var G__11464 = c__8257__auto___11462;
var G__11465 = cljs.core.count.call(null,c__8257__auto___11462);
var G__11466 = (0);
seq__11304_11366 = G__11463;
chunk__11305_11367 = G__11464;
count__11306_11368 = G__11465;
i__11307_11369 = G__11466;
continue;
} else {
var vec__11337_11467 = cljs.core.first.call(null,seq__11304_11461__$1);
var line_11468 = cljs.core.nth.call(null,vec__11337_11467,(0),null);
var columns_11469 = cljs.core.nth.call(null,vec__11337_11467,(1),null);
var seq__11340_11470 = cljs.core.seq.call(null,columns_11469);
var chunk__11341_11471 = null;
var count__11342_11472 = (0);
var i__11343_11473 = (0);
while(true){
if((i__11343_11473 < count__11342_11472)){
var vec__11344_11474 = cljs.core._nth.call(null,chunk__11341_11471,i__11343_11473);
var column_11475 = cljs.core.nth.call(null,vec__11344_11474,(0),null);
var column_info_11476 = cljs.core.nth.call(null,vec__11344_11474,(1),null);
var seq__11347_11477 = cljs.core.seq.call(null,column_info_11476);
var chunk__11348_11478 = null;
var count__11349_11479 = (0);
var i__11350_11480 = (0);
while(true){
if((i__11350_11480 < count__11349_11479)){
var map__11351_11481 = cljs.core._nth.call(null,chunk__11348_11478,i__11350_11480);
var map__11351_11482__$1 = ((((!((map__11351_11481 == null)))?((((map__11351_11481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11351_11481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11351_11481):map__11351_11481);
var gline_11483 = cljs.core.get.call(null,map__11351_11482__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11484 = cljs.core.get.call(null,map__11351_11482__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11485 = cljs.core.get.call(null,map__11351_11482__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11483], null),cljs.core.fnil.call(null,((function (seq__11347_11477,chunk__11348_11478,count__11349_11479,i__11350_11480,seq__11340_11470,chunk__11341_11471,count__11342_11472,i__11343_11473,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11351_11481,map__11351_11482__$1,gline_11483,gcol_11484,name_11485,vec__11344_11474,column_11475,column_info_11476,vec__11337_11467,line_11468,columns_11469,seq__11304_11461__$1,temp__4657__auto___11460,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11484], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11468,new cljs.core.Keyword(null,"col","col",-1959363084),column_11475,new cljs.core.Keyword(null,"name","name",1843675177),name_11485], null));
});})(seq__11347_11477,chunk__11348_11478,count__11349_11479,i__11350_11480,seq__11340_11470,chunk__11341_11471,count__11342_11472,i__11343_11473,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11351_11481,map__11351_11482__$1,gline_11483,gcol_11484,name_11485,vec__11344_11474,column_11475,column_info_11476,vec__11337_11467,line_11468,columns_11469,seq__11304_11461__$1,temp__4657__auto___11460,inverted))
,cljs.core.sorted_map.call(null)));

var G__11486 = seq__11347_11477;
var G__11487 = chunk__11348_11478;
var G__11488 = count__11349_11479;
var G__11489 = (i__11350_11480 + (1));
seq__11347_11477 = G__11486;
chunk__11348_11478 = G__11487;
count__11349_11479 = G__11488;
i__11350_11480 = G__11489;
continue;
} else {
var temp__4657__auto___11490__$1 = cljs.core.seq.call(null,seq__11347_11477);
if(temp__4657__auto___11490__$1){
var seq__11347_11491__$1 = temp__4657__auto___11490__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11347_11491__$1)){
var c__8257__auto___11492 = cljs.core.chunk_first.call(null,seq__11347_11491__$1);
var G__11493 = cljs.core.chunk_rest.call(null,seq__11347_11491__$1);
var G__11494 = c__8257__auto___11492;
var G__11495 = cljs.core.count.call(null,c__8257__auto___11492);
var G__11496 = (0);
seq__11347_11477 = G__11493;
chunk__11348_11478 = G__11494;
count__11349_11479 = G__11495;
i__11350_11480 = G__11496;
continue;
} else {
var map__11353_11497 = cljs.core.first.call(null,seq__11347_11491__$1);
var map__11353_11498__$1 = ((((!((map__11353_11497 == null)))?((((map__11353_11497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11353_11497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11353_11497):map__11353_11497);
var gline_11499 = cljs.core.get.call(null,map__11353_11498__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11500 = cljs.core.get.call(null,map__11353_11498__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11501 = cljs.core.get.call(null,map__11353_11498__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11499], null),cljs.core.fnil.call(null,((function (seq__11347_11477,chunk__11348_11478,count__11349_11479,i__11350_11480,seq__11340_11470,chunk__11341_11471,count__11342_11472,i__11343_11473,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11353_11497,map__11353_11498__$1,gline_11499,gcol_11500,name_11501,seq__11347_11491__$1,temp__4657__auto___11490__$1,vec__11344_11474,column_11475,column_info_11476,vec__11337_11467,line_11468,columns_11469,seq__11304_11461__$1,temp__4657__auto___11460,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11500], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11468,new cljs.core.Keyword(null,"col","col",-1959363084),column_11475,new cljs.core.Keyword(null,"name","name",1843675177),name_11501], null));
});})(seq__11347_11477,chunk__11348_11478,count__11349_11479,i__11350_11480,seq__11340_11470,chunk__11341_11471,count__11342_11472,i__11343_11473,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11353_11497,map__11353_11498__$1,gline_11499,gcol_11500,name_11501,seq__11347_11491__$1,temp__4657__auto___11490__$1,vec__11344_11474,column_11475,column_info_11476,vec__11337_11467,line_11468,columns_11469,seq__11304_11461__$1,temp__4657__auto___11460,inverted))
,cljs.core.sorted_map.call(null)));

var G__11502 = cljs.core.next.call(null,seq__11347_11491__$1);
var G__11503 = null;
var G__11504 = (0);
var G__11505 = (0);
seq__11347_11477 = G__11502;
chunk__11348_11478 = G__11503;
count__11349_11479 = G__11504;
i__11350_11480 = G__11505;
continue;
}
} else {
}
}
break;
}

var G__11506 = seq__11340_11470;
var G__11507 = chunk__11341_11471;
var G__11508 = count__11342_11472;
var G__11509 = (i__11343_11473 + (1));
seq__11340_11470 = G__11506;
chunk__11341_11471 = G__11507;
count__11342_11472 = G__11508;
i__11343_11473 = G__11509;
continue;
} else {
var temp__4657__auto___11510__$1 = cljs.core.seq.call(null,seq__11340_11470);
if(temp__4657__auto___11510__$1){
var seq__11340_11511__$1 = temp__4657__auto___11510__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11340_11511__$1)){
var c__8257__auto___11512 = cljs.core.chunk_first.call(null,seq__11340_11511__$1);
var G__11513 = cljs.core.chunk_rest.call(null,seq__11340_11511__$1);
var G__11514 = c__8257__auto___11512;
var G__11515 = cljs.core.count.call(null,c__8257__auto___11512);
var G__11516 = (0);
seq__11340_11470 = G__11513;
chunk__11341_11471 = G__11514;
count__11342_11472 = G__11515;
i__11343_11473 = G__11516;
continue;
} else {
var vec__11355_11517 = cljs.core.first.call(null,seq__11340_11511__$1);
var column_11518 = cljs.core.nth.call(null,vec__11355_11517,(0),null);
var column_info_11519 = cljs.core.nth.call(null,vec__11355_11517,(1),null);
var seq__11358_11520 = cljs.core.seq.call(null,column_info_11519);
var chunk__11359_11521 = null;
var count__11360_11522 = (0);
var i__11361_11523 = (0);
while(true){
if((i__11361_11523 < count__11360_11522)){
var map__11362_11524 = cljs.core._nth.call(null,chunk__11359_11521,i__11361_11523);
var map__11362_11525__$1 = ((((!((map__11362_11524 == null)))?((((map__11362_11524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11362_11524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11362_11524):map__11362_11524);
var gline_11526 = cljs.core.get.call(null,map__11362_11525__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11527 = cljs.core.get.call(null,map__11362_11525__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11528 = cljs.core.get.call(null,map__11362_11525__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11526], null),cljs.core.fnil.call(null,((function (seq__11358_11520,chunk__11359_11521,count__11360_11522,i__11361_11523,seq__11340_11470,chunk__11341_11471,count__11342_11472,i__11343_11473,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11362_11524,map__11362_11525__$1,gline_11526,gcol_11527,name_11528,vec__11355_11517,column_11518,column_info_11519,seq__11340_11511__$1,temp__4657__auto___11510__$1,vec__11337_11467,line_11468,columns_11469,seq__11304_11461__$1,temp__4657__auto___11460,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11527], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11468,new cljs.core.Keyword(null,"col","col",-1959363084),column_11518,new cljs.core.Keyword(null,"name","name",1843675177),name_11528], null));
});})(seq__11358_11520,chunk__11359_11521,count__11360_11522,i__11361_11523,seq__11340_11470,chunk__11341_11471,count__11342_11472,i__11343_11473,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11362_11524,map__11362_11525__$1,gline_11526,gcol_11527,name_11528,vec__11355_11517,column_11518,column_info_11519,seq__11340_11511__$1,temp__4657__auto___11510__$1,vec__11337_11467,line_11468,columns_11469,seq__11304_11461__$1,temp__4657__auto___11460,inverted))
,cljs.core.sorted_map.call(null)));

var G__11529 = seq__11358_11520;
var G__11530 = chunk__11359_11521;
var G__11531 = count__11360_11522;
var G__11532 = (i__11361_11523 + (1));
seq__11358_11520 = G__11529;
chunk__11359_11521 = G__11530;
count__11360_11522 = G__11531;
i__11361_11523 = G__11532;
continue;
} else {
var temp__4657__auto___11533__$2 = cljs.core.seq.call(null,seq__11358_11520);
if(temp__4657__auto___11533__$2){
var seq__11358_11534__$1 = temp__4657__auto___11533__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11358_11534__$1)){
var c__8257__auto___11535 = cljs.core.chunk_first.call(null,seq__11358_11534__$1);
var G__11536 = cljs.core.chunk_rest.call(null,seq__11358_11534__$1);
var G__11537 = c__8257__auto___11535;
var G__11538 = cljs.core.count.call(null,c__8257__auto___11535);
var G__11539 = (0);
seq__11358_11520 = G__11536;
chunk__11359_11521 = G__11537;
count__11360_11522 = G__11538;
i__11361_11523 = G__11539;
continue;
} else {
var map__11364_11540 = cljs.core.first.call(null,seq__11358_11534__$1);
var map__11364_11541__$1 = ((((!((map__11364_11540 == null)))?((((map__11364_11540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11364_11540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11364_11540):map__11364_11540);
var gline_11542 = cljs.core.get.call(null,map__11364_11541__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11543 = cljs.core.get.call(null,map__11364_11541__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11544 = cljs.core.get.call(null,map__11364_11541__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11542], null),cljs.core.fnil.call(null,((function (seq__11358_11520,chunk__11359_11521,count__11360_11522,i__11361_11523,seq__11340_11470,chunk__11341_11471,count__11342_11472,i__11343_11473,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11364_11540,map__11364_11541__$1,gline_11542,gcol_11543,name_11544,seq__11358_11534__$1,temp__4657__auto___11533__$2,vec__11355_11517,column_11518,column_info_11519,seq__11340_11511__$1,temp__4657__auto___11510__$1,vec__11337_11467,line_11468,columns_11469,seq__11304_11461__$1,temp__4657__auto___11460,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11543], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11468,new cljs.core.Keyword(null,"col","col",-1959363084),column_11518,new cljs.core.Keyword(null,"name","name",1843675177),name_11544], null));
});})(seq__11358_11520,chunk__11359_11521,count__11360_11522,i__11361_11523,seq__11340_11470,chunk__11341_11471,count__11342_11472,i__11343_11473,seq__11304_11366,chunk__11305_11367,count__11306_11368,i__11307_11369,map__11364_11540,map__11364_11541__$1,gline_11542,gcol_11543,name_11544,seq__11358_11534__$1,temp__4657__auto___11533__$2,vec__11355_11517,column_11518,column_info_11519,seq__11340_11511__$1,temp__4657__auto___11510__$1,vec__11337_11467,line_11468,columns_11469,seq__11304_11461__$1,temp__4657__auto___11460,inverted))
,cljs.core.sorted_map.call(null)));

var G__11545 = cljs.core.next.call(null,seq__11358_11534__$1);
var G__11546 = null;
var G__11547 = (0);
var G__11548 = (0);
seq__11358_11520 = G__11545;
chunk__11359_11521 = G__11546;
count__11360_11522 = G__11547;
i__11361_11523 = G__11548;
continue;
}
} else {
}
}
break;
}

var G__11549 = cljs.core.next.call(null,seq__11340_11511__$1);
var G__11550 = null;
var G__11551 = (0);
var G__11552 = (0);
seq__11340_11470 = G__11549;
chunk__11341_11471 = G__11550;
count__11342_11472 = G__11551;
i__11343_11473 = G__11552;
continue;
}
} else {
}
}
break;
}

var G__11553 = cljs.core.next.call(null,seq__11304_11461__$1);
var G__11554 = null;
var G__11555 = (0);
var G__11556 = (0);
seq__11304_11366 = G__11553;
chunk__11305_11367 = G__11554;
count__11306_11368 = G__11555;
i__11307_11369 = G__11556;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
