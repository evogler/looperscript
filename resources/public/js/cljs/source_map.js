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
return cljs.core.reduce.call(null,(function (m,p__39960){
var vec__39961 = p__39960;
var i = cljs.core.nth.call(null,vec__39961,(0),null);
var v = cljs.core.nth.call(null,vec__39961,(1),null);
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
var vec__39964 = seg;
var gcol = cljs.core.nth.call(null,vec__39964,(0),null);
var source = cljs.core.nth.call(null,vec__39964,(1),null);
var line = cljs.core.nth.call(null,vec__39964,(2),null);
var col = cljs.core.nth.call(null,vec__39964,(3),null);
var name = cljs.core.nth.call(null,vec__39964,(4),null);
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
var vec__39967 = seg;
var gcol = cljs.core.nth.call(null,vec__39967,(0),null);
var source = cljs.core.nth.call(null,vec__39967,(1),null);
var line = cljs.core.nth.call(null,vec__39967,(2),null);
var col = cljs.core.nth.call(null,vec__39967,(3),null);
var name = cljs.core.nth.call(null,vec__39967,(4),null);
var vec__39970 = relseg;
var rgcol = cljs.core.nth.call(null,vec__39970,(0),null);
var rsource = cljs.core.nth.call(null,vec__39970,(1),null);
var rline = cljs.core.nth.call(null,vec__39970,(2),null);
var rcol = cljs.core.nth.call(null,vec__39970,(3),null);
var rname = cljs.core.nth.call(null,vec__39970,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__27936__auto__ = source;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__27936__auto__ = line;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__27936__auto__ = col;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__27936__auto__ = name;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
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
var map__39973 = segmap;
var map__39973__$1 = ((((!((map__39973 == null)))?((((map__39973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39973):map__39973);
var gcol = cljs.core.get.call(null,map__39973__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__39973__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__39973__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__39973__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__39973__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__39973,map__39973__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__39973,map__39973__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__39973,map__39973__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__39973,map__39973__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__39973,map__39973__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__39973,map__39973__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__39976 = arguments.length;
switch (G__39976) {
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
var vec__39977 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__39981 = cljs.core.next.call(null,segs__$1);
var G__39982 = nrelseg;
var G__39983 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__39981;
relseg__$1 = G__39982;
result__$1 = G__39983;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__39977,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__39977,(1),null);
var G__39984 = (gline + (1));
var G__39985 = cljs.core.next.call(null,lines__$1);
var G__39986 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__39987 = result__$1;
gline = G__39984;
lines__$1 = G__39985;
relseg = G__39986;
result = G__39987;
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
var map__39989 = segmap;
var map__39989__$1 = ((((!((map__39989 == null)))?((((map__39989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39989):map__39989);
var gcol = cljs.core.get.call(null,map__39989__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__39989__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__39989__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__39989__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__39989__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__39989,map__39989__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__39989,map__39989__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__39988_SHARP_){
return cljs.core.conj.call(null,p1__39988_SHARP_,d__$1);
});})(map__39989,map__39989__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__39989,map__39989__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__39992 = arguments.length;
switch (G__39992) {
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
var vec__39993 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__39997 = cljs.core.next.call(null,segs__$1);
var G__39998 = nrelseg;
var G__39999 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__39997;
relseg__$1 = G__39998;
result__$1 = G__39999;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__39993,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__39993,(1),null);
var G__40000 = (gline + (1));
var G__40001 = cljs.core.next.call(null,lines__$1);
var G__40002 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__40003 = result__$1;
gline = G__40000;
lines__$1 = G__40001;
relseg = G__40002;
result = G__40003;
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
return (function (p__40004){
var vec__40005 = p__40004;
var _ = cljs.core.nth.call(null,vec__40005,(0),null);
var source = cljs.core.nth.call(null,vec__40005,(1),null);
var line = cljs.core.nth.call(null,vec__40005,(2),null);
var col = cljs.core.nth.call(null,vec__40005,(3),null);
var name = cljs.core.nth.call(null,vec__40005,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__40008){
var vec__40009 = p__40008;
var gcol = cljs.core.nth.call(null,vec__40009,(0),null);
var sidx = cljs.core.nth.call(null,vec__40009,(1),null);
var line = cljs.core.nth.call(null,vec__40009,(2),null);
var col = cljs.core.nth.call(null,vec__40009,(3),null);
var name = cljs.core.nth.call(null,vec__40009,(4),null);
var seg = vec__40009;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__40009,gcol,sidx,line,col,name,seg,relseg){
return (function (p__40012){
var vec__40013 = p__40012;
var _ = cljs.core.nth.call(null,vec__40013,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__40013,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__40013,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__40013,(3),null);
var lname = cljs.core.nth.call(null,vec__40013,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__27936__auto__ = name;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__40009,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__27936__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
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
var seq__40019 = cljs.core.seq.call(null,infos);
var chunk__40020 = null;
var count__40021 = (0);
var i__40022 = (0);
while(true){
if((i__40022 < count__40021)){
var info = cljs.core._nth.call(null,chunk__40020,i__40022);
var segv_40101 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_40102 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_40103 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_40102 > (lc_40103 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__40019,chunk__40020,count__40021,i__40022,segv_40101,gline_40102,lc_40103,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_40102 - (lc_40103 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_40101], null));
});})(seq__40019,chunk__40020,count__40021,i__40022,segv_40101,gline_40102,lc_40103,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__40019,chunk__40020,count__40021,i__40022,segv_40101,gline_40102,lc_40103,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40102], null),cljs.core.conj,segv_40101);
});})(seq__40019,chunk__40020,count__40021,i__40022,segv_40101,gline_40102,lc_40103,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__40104 = seq__40019;
var G__40105 = chunk__40020;
var G__40106 = count__40021;
var G__40107 = (i__40022 + (1));
seq__40019 = G__40104;
chunk__40020 = G__40105;
count__40021 = G__40106;
i__40022 = G__40107;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40019);
if(temp__4657__auto__){
var seq__40019__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40019__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__40019__$1);
var G__40108 = cljs.core.chunk_rest.call(null,seq__40019__$1);
var G__40109 = c__28775__auto__;
var G__40110 = cljs.core.count.call(null,c__28775__auto__);
var G__40111 = (0);
seq__40019 = G__40108;
chunk__40020 = G__40109;
count__40021 = G__40110;
i__40022 = G__40111;
continue;
} else {
var info = cljs.core.first.call(null,seq__40019__$1);
var segv_40112 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_40113 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_40114 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_40113 > (lc_40114 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__40019,chunk__40020,count__40021,i__40022,segv_40112,gline_40113,lc_40114,info,seq__40019__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_40113 - (lc_40114 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_40112], null));
});})(seq__40019,chunk__40020,count__40021,i__40022,segv_40112,gline_40113,lc_40114,info,seq__40019__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__40019,chunk__40020,count__40021,i__40022,segv_40112,gline_40113,lc_40114,info,seq__40019__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40113], null),cljs.core.conj,segv_40112);
});})(seq__40019,chunk__40020,count__40021,i__40022,segv_40112,gline_40113,lc_40114,info,seq__40019__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__40115 = cljs.core.next.call(null,seq__40019__$1);
var G__40116 = null;
var G__40117 = (0);
var G__40118 = (0);
seq__40019 = G__40115;
chunk__40020 = G__40116;
count__40021 = G__40117;
i__40022 = G__40118;
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
var seq__40023_40119 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__40024_40120 = null;
var count__40025_40121 = (0);
var i__40026_40122 = (0);
while(true){
if((i__40026_40122 < count__40025_40121)){
var vec__40027_40123 = cljs.core._nth.call(null,chunk__40024_40120,i__40026_40122);
var source_idx_40124 = cljs.core.nth.call(null,vec__40027_40123,(0),null);
var vec__40030_40125 = cljs.core.nth.call(null,vec__40027_40123,(1),null);
var __40126 = cljs.core.nth.call(null,vec__40030_40125,(0),null);
var lines_40127__$1 = cljs.core.nth.call(null,vec__40030_40125,(1),null);
var seq__40033_40128 = cljs.core.seq.call(null,lines_40127__$1);
var chunk__40034_40129 = null;
var count__40035_40130 = (0);
var i__40036_40131 = (0);
while(true){
if((i__40036_40131 < count__40035_40130)){
var vec__40037_40132 = cljs.core._nth.call(null,chunk__40034_40129,i__40036_40131);
var line_40133 = cljs.core.nth.call(null,vec__40037_40132,(0),null);
var cols_40134 = cljs.core.nth.call(null,vec__40037_40132,(1),null);
var seq__40040_40135 = cljs.core.seq.call(null,cols_40134);
var chunk__40041_40136 = null;
var count__40042_40137 = (0);
var i__40043_40138 = (0);
while(true){
if((i__40043_40138 < count__40042_40137)){
var vec__40044_40139 = cljs.core._nth.call(null,chunk__40041_40136,i__40043_40138);
var col_40140 = cljs.core.nth.call(null,vec__40044_40139,(0),null);
var infos_40141 = cljs.core.nth.call(null,vec__40044_40139,(1),null);
encode_cols.call(null,infos_40141,source_idx_40124,line_40133,col_40140);

var G__40142 = seq__40040_40135;
var G__40143 = chunk__40041_40136;
var G__40144 = count__40042_40137;
var G__40145 = (i__40043_40138 + (1));
seq__40040_40135 = G__40142;
chunk__40041_40136 = G__40143;
count__40042_40137 = G__40144;
i__40043_40138 = G__40145;
continue;
} else {
var temp__4657__auto___40146 = cljs.core.seq.call(null,seq__40040_40135);
if(temp__4657__auto___40146){
var seq__40040_40147__$1 = temp__4657__auto___40146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40040_40147__$1)){
var c__28775__auto___40148 = cljs.core.chunk_first.call(null,seq__40040_40147__$1);
var G__40149 = cljs.core.chunk_rest.call(null,seq__40040_40147__$1);
var G__40150 = c__28775__auto___40148;
var G__40151 = cljs.core.count.call(null,c__28775__auto___40148);
var G__40152 = (0);
seq__40040_40135 = G__40149;
chunk__40041_40136 = G__40150;
count__40042_40137 = G__40151;
i__40043_40138 = G__40152;
continue;
} else {
var vec__40047_40153 = cljs.core.first.call(null,seq__40040_40147__$1);
var col_40154 = cljs.core.nth.call(null,vec__40047_40153,(0),null);
var infos_40155 = cljs.core.nth.call(null,vec__40047_40153,(1),null);
encode_cols.call(null,infos_40155,source_idx_40124,line_40133,col_40154);

var G__40156 = cljs.core.next.call(null,seq__40040_40147__$1);
var G__40157 = null;
var G__40158 = (0);
var G__40159 = (0);
seq__40040_40135 = G__40156;
chunk__40041_40136 = G__40157;
count__40042_40137 = G__40158;
i__40043_40138 = G__40159;
continue;
}
} else {
}
}
break;
}

var G__40160 = seq__40033_40128;
var G__40161 = chunk__40034_40129;
var G__40162 = count__40035_40130;
var G__40163 = (i__40036_40131 + (1));
seq__40033_40128 = G__40160;
chunk__40034_40129 = G__40161;
count__40035_40130 = G__40162;
i__40036_40131 = G__40163;
continue;
} else {
var temp__4657__auto___40164 = cljs.core.seq.call(null,seq__40033_40128);
if(temp__4657__auto___40164){
var seq__40033_40165__$1 = temp__4657__auto___40164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40033_40165__$1)){
var c__28775__auto___40166 = cljs.core.chunk_first.call(null,seq__40033_40165__$1);
var G__40167 = cljs.core.chunk_rest.call(null,seq__40033_40165__$1);
var G__40168 = c__28775__auto___40166;
var G__40169 = cljs.core.count.call(null,c__28775__auto___40166);
var G__40170 = (0);
seq__40033_40128 = G__40167;
chunk__40034_40129 = G__40168;
count__40035_40130 = G__40169;
i__40036_40131 = G__40170;
continue;
} else {
var vec__40050_40171 = cljs.core.first.call(null,seq__40033_40165__$1);
var line_40172 = cljs.core.nth.call(null,vec__40050_40171,(0),null);
var cols_40173 = cljs.core.nth.call(null,vec__40050_40171,(1),null);
var seq__40053_40174 = cljs.core.seq.call(null,cols_40173);
var chunk__40054_40175 = null;
var count__40055_40176 = (0);
var i__40056_40177 = (0);
while(true){
if((i__40056_40177 < count__40055_40176)){
var vec__40057_40178 = cljs.core._nth.call(null,chunk__40054_40175,i__40056_40177);
var col_40179 = cljs.core.nth.call(null,vec__40057_40178,(0),null);
var infos_40180 = cljs.core.nth.call(null,vec__40057_40178,(1),null);
encode_cols.call(null,infos_40180,source_idx_40124,line_40172,col_40179);

var G__40181 = seq__40053_40174;
var G__40182 = chunk__40054_40175;
var G__40183 = count__40055_40176;
var G__40184 = (i__40056_40177 + (1));
seq__40053_40174 = G__40181;
chunk__40054_40175 = G__40182;
count__40055_40176 = G__40183;
i__40056_40177 = G__40184;
continue;
} else {
var temp__4657__auto___40185__$1 = cljs.core.seq.call(null,seq__40053_40174);
if(temp__4657__auto___40185__$1){
var seq__40053_40186__$1 = temp__4657__auto___40185__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40053_40186__$1)){
var c__28775__auto___40187 = cljs.core.chunk_first.call(null,seq__40053_40186__$1);
var G__40188 = cljs.core.chunk_rest.call(null,seq__40053_40186__$1);
var G__40189 = c__28775__auto___40187;
var G__40190 = cljs.core.count.call(null,c__28775__auto___40187);
var G__40191 = (0);
seq__40053_40174 = G__40188;
chunk__40054_40175 = G__40189;
count__40055_40176 = G__40190;
i__40056_40177 = G__40191;
continue;
} else {
var vec__40060_40192 = cljs.core.first.call(null,seq__40053_40186__$1);
var col_40193 = cljs.core.nth.call(null,vec__40060_40192,(0),null);
var infos_40194 = cljs.core.nth.call(null,vec__40060_40192,(1),null);
encode_cols.call(null,infos_40194,source_idx_40124,line_40172,col_40193);

var G__40195 = cljs.core.next.call(null,seq__40053_40186__$1);
var G__40196 = null;
var G__40197 = (0);
var G__40198 = (0);
seq__40053_40174 = G__40195;
chunk__40054_40175 = G__40196;
count__40055_40176 = G__40197;
i__40056_40177 = G__40198;
continue;
}
} else {
}
}
break;
}

var G__40199 = cljs.core.next.call(null,seq__40033_40165__$1);
var G__40200 = null;
var G__40201 = (0);
var G__40202 = (0);
seq__40033_40128 = G__40199;
chunk__40034_40129 = G__40200;
count__40035_40130 = G__40201;
i__40036_40131 = G__40202;
continue;
}
} else {
}
}
break;
}

var G__40203 = seq__40023_40119;
var G__40204 = chunk__40024_40120;
var G__40205 = count__40025_40121;
var G__40206 = (i__40026_40122 + (1));
seq__40023_40119 = G__40203;
chunk__40024_40120 = G__40204;
count__40025_40121 = G__40205;
i__40026_40122 = G__40206;
continue;
} else {
var temp__4657__auto___40207 = cljs.core.seq.call(null,seq__40023_40119);
if(temp__4657__auto___40207){
var seq__40023_40208__$1 = temp__4657__auto___40207;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40023_40208__$1)){
var c__28775__auto___40209 = cljs.core.chunk_first.call(null,seq__40023_40208__$1);
var G__40210 = cljs.core.chunk_rest.call(null,seq__40023_40208__$1);
var G__40211 = c__28775__auto___40209;
var G__40212 = cljs.core.count.call(null,c__28775__auto___40209);
var G__40213 = (0);
seq__40023_40119 = G__40210;
chunk__40024_40120 = G__40211;
count__40025_40121 = G__40212;
i__40026_40122 = G__40213;
continue;
} else {
var vec__40063_40214 = cljs.core.first.call(null,seq__40023_40208__$1);
var source_idx_40215 = cljs.core.nth.call(null,vec__40063_40214,(0),null);
var vec__40066_40216 = cljs.core.nth.call(null,vec__40063_40214,(1),null);
var __40217 = cljs.core.nth.call(null,vec__40066_40216,(0),null);
var lines_40218__$1 = cljs.core.nth.call(null,vec__40066_40216,(1),null);
var seq__40069_40219 = cljs.core.seq.call(null,lines_40218__$1);
var chunk__40070_40220 = null;
var count__40071_40221 = (0);
var i__40072_40222 = (0);
while(true){
if((i__40072_40222 < count__40071_40221)){
var vec__40073_40223 = cljs.core._nth.call(null,chunk__40070_40220,i__40072_40222);
var line_40224 = cljs.core.nth.call(null,vec__40073_40223,(0),null);
var cols_40225 = cljs.core.nth.call(null,vec__40073_40223,(1),null);
var seq__40076_40226 = cljs.core.seq.call(null,cols_40225);
var chunk__40077_40227 = null;
var count__40078_40228 = (0);
var i__40079_40229 = (0);
while(true){
if((i__40079_40229 < count__40078_40228)){
var vec__40080_40230 = cljs.core._nth.call(null,chunk__40077_40227,i__40079_40229);
var col_40231 = cljs.core.nth.call(null,vec__40080_40230,(0),null);
var infos_40232 = cljs.core.nth.call(null,vec__40080_40230,(1),null);
encode_cols.call(null,infos_40232,source_idx_40215,line_40224,col_40231);

var G__40233 = seq__40076_40226;
var G__40234 = chunk__40077_40227;
var G__40235 = count__40078_40228;
var G__40236 = (i__40079_40229 + (1));
seq__40076_40226 = G__40233;
chunk__40077_40227 = G__40234;
count__40078_40228 = G__40235;
i__40079_40229 = G__40236;
continue;
} else {
var temp__4657__auto___40237__$1 = cljs.core.seq.call(null,seq__40076_40226);
if(temp__4657__auto___40237__$1){
var seq__40076_40238__$1 = temp__4657__auto___40237__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40076_40238__$1)){
var c__28775__auto___40239 = cljs.core.chunk_first.call(null,seq__40076_40238__$1);
var G__40240 = cljs.core.chunk_rest.call(null,seq__40076_40238__$1);
var G__40241 = c__28775__auto___40239;
var G__40242 = cljs.core.count.call(null,c__28775__auto___40239);
var G__40243 = (0);
seq__40076_40226 = G__40240;
chunk__40077_40227 = G__40241;
count__40078_40228 = G__40242;
i__40079_40229 = G__40243;
continue;
} else {
var vec__40083_40244 = cljs.core.first.call(null,seq__40076_40238__$1);
var col_40245 = cljs.core.nth.call(null,vec__40083_40244,(0),null);
var infos_40246 = cljs.core.nth.call(null,vec__40083_40244,(1),null);
encode_cols.call(null,infos_40246,source_idx_40215,line_40224,col_40245);

var G__40247 = cljs.core.next.call(null,seq__40076_40238__$1);
var G__40248 = null;
var G__40249 = (0);
var G__40250 = (0);
seq__40076_40226 = G__40247;
chunk__40077_40227 = G__40248;
count__40078_40228 = G__40249;
i__40079_40229 = G__40250;
continue;
}
} else {
}
}
break;
}

var G__40251 = seq__40069_40219;
var G__40252 = chunk__40070_40220;
var G__40253 = count__40071_40221;
var G__40254 = (i__40072_40222 + (1));
seq__40069_40219 = G__40251;
chunk__40070_40220 = G__40252;
count__40071_40221 = G__40253;
i__40072_40222 = G__40254;
continue;
} else {
var temp__4657__auto___40255__$1 = cljs.core.seq.call(null,seq__40069_40219);
if(temp__4657__auto___40255__$1){
var seq__40069_40256__$1 = temp__4657__auto___40255__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40069_40256__$1)){
var c__28775__auto___40257 = cljs.core.chunk_first.call(null,seq__40069_40256__$1);
var G__40258 = cljs.core.chunk_rest.call(null,seq__40069_40256__$1);
var G__40259 = c__28775__auto___40257;
var G__40260 = cljs.core.count.call(null,c__28775__auto___40257);
var G__40261 = (0);
seq__40069_40219 = G__40258;
chunk__40070_40220 = G__40259;
count__40071_40221 = G__40260;
i__40072_40222 = G__40261;
continue;
} else {
var vec__40086_40262 = cljs.core.first.call(null,seq__40069_40256__$1);
var line_40263 = cljs.core.nth.call(null,vec__40086_40262,(0),null);
var cols_40264 = cljs.core.nth.call(null,vec__40086_40262,(1),null);
var seq__40089_40265 = cljs.core.seq.call(null,cols_40264);
var chunk__40090_40266 = null;
var count__40091_40267 = (0);
var i__40092_40268 = (0);
while(true){
if((i__40092_40268 < count__40091_40267)){
var vec__40093_40269 = cljs.core._nth.call(null,chunk__40090_40266,i__40092_40268);
var col_40270 = cljs.core.nth.call(null,vec__40093_40269,(0),null);
var infos_40271 = cljs.core.nth.call(null,vec__40093_40269,(1),null);
encode_cols.call(null,infos_40271,source_idx_40215,line_40263,col_40270);

var G__40272 = seq__40089_40265;
var G__40273 = chunk__40090_40266;
var G__40274 = count__40091_40267;
var G__40275 = (i__40092_40268 + (1));
seq__40089_40265 = G__40272;
chunk__40090_40266 = G__40273;
count__40091_40267 = G__40274;
i__40092_40268 = G__40275;
continue;
} else {
var temp__4657__auto___40276__$2 = cljs.core.seq.call(null,seq__40089_40265);
if(temp__4657__auto___40276__$2){
var seq__40089_40277__$1 = temp__4657__auto___40276__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40089_40277__$1)){
var c__28775__auto___40278 = cljs.core.chunk_first.call(null,seq__40089_40277__$1);
var G__40279 = cljs.core.chunk_rest.call(null,seq__40089_40277__$1);
var G__40280 = c__28775__auto___40278;
var G__40281 = cljs.core.count.call(null,c__28775__auto___40278);
var G__40282 = (0);
seq__40089_40265 = G__40279;
chunk__40090_40266 = G__40280;
count__40091_40267 = G__40281;
i__40092_40268 = G__40282;
continue;
} else {
var vec__40096_40283 = cljs.core.first.call(null,seq__40089_40277__$1);
var col_40284 = cljs.core.nth.call(null,vec__40096_40283,(0),null);
var infos_40285 = cljs.core.nth.call(null,vec__40096_40283,(1),null);
encode_cols.call(null,infos_40285,source_idx_40215,line_40263,col_40284);

var G__40286 = cljs.core.next.call(null,seq__40089_40277__$1);
var G__40287 = null;
var G__40288 = (0);
var G__40289 = (0);
seq__40089_40265 = G__40286;
chunk__40090_40266 = G__40287;
count__40091_40267 = G__40288;
i__40092_40268 = G__40289;
continue;
}
} else {
}
}
break;
}

var G__40290 = cljs.core.next.call(null,seq__40069_40256__$1);
var G__40291 = null;
var G__40292 = (0);
var G__40293 = (0);
seq__40069_40219 = G__40290;
chunk__40070_40220 = G__40291;
count__40071_40221 = G__40292;
i__40072_40222 = G__40293;
continue;
}
} else {
}
}
break;
}

var G__40294 = cljs.core.next.call(null,seq__40023_40208__$1);
var G__40295 = null;
var G__40296 = (0);
var G__40297 = (0);
seq__40023_40119 = G__40294;
chunk__40024_40120 = G__40295;
count__40025_40121 = G__40296;
i__40026_40122 = G__40297;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__40099 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__40016_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40016_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__40017_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__40017_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__40018_SHARP_){
return clojure.string.join.call(null,",",p1__40018_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__40100 = G__40099;
goog.object.set(G__40100,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__40100;
} else {
return G__40099;
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
var vec__40298 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__40298,(0),null);
var col_map = cljs.core.nth.call(null,vec__40298,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__40301 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__40301,(0),null);
var infos = cljs.core.nth.call(null,vec__40301,(1),null);
var G__40307 = cljs.core.next.call(null,col_map_seq);
var G__40308 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__40301,col,infos,vec__40298,line,col_map){
return (function (v,p__40304){
var map__40305 = p__40304;
var map__40305__$1 = ((((!((map__40305 == null)))?((((map__40305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40305):map__40305);
var gline = cljs.core.get.call(null,map__40305__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__40305__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__40301,col,infos,vec__40298,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__40307;
new_cols = G__40308;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__40309 = cljs.core.next.call(null,line_map_seq);
var G__40310 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__40309;
new_lines = G__40310;
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
var seq__40311_40373 = cljs.core.seq.call(null,reverse_map);
var chunk__40312_40374 = null;
var count__40313_40375 = (0);
var i__40314_40376 = (0);
while(true){
if((i__40314_40376 < count__40313_40375)){
var vec__40315_40377 = cljs.core._nth.call(null,chunk__40312_40374,i__40314_40376);
var line_40378 = cljs.core.nth.call(null,vec__40315_40377,(0),null);
var columns_40379 = cljs.core.nth.call(null,vec__40315_40377,(1),null);
var seq__40318_40380 = cljs.core.seq.call(null,columns_40379);
var chunk__40319_40381 = null;
var count__40320_40382 = (0);
var i__40321_40383 = (0);
while(true){
if((i__40321_40383 < count__40320_40382)){
var vec__40322_40384 = cljs.core._nth.call(null,chunk__40319_40381,i__40321_40383);
var column_40385 = cljs.core.nth.call(null,vec__40322_40384,(0),null);
var column_info_40386 = cljs.core.nth.call(null,vec__40322_40384,(1),null);
var seq__40325_40387 = cljs.core.seq.call(null,column_info_40386);
var chunk__40326_40388 = null;
var count__40327_40389 = (0);
var i__40328_40390 = (0);
while(true){
if((i__40328_40390 < count__40327_40389)){
var map__40329_40391 = cljs.core._nth.call(null,chunk__40326_40388,i__40328_40390);
var map__40329_40392__$1 = ((((!((map__40329_40391 == null)))?((((map__40329_40391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40329_40391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40329_40391):map__40329_40391);
var gline_40393 = cljs.core.get.call(null,map__40329_40392__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40394 = cljs.core.get.call(null,map__40329_40392__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40395 = cljs.core.get.call(null,map__40329_40392__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40393], null),cljs.core.fnil.call(null,((function (seq__40325_40387,chunk__40326_40388,count__40327_40389,i__40328_40390,seq__40318_40380,chunk__40319_40381,count__40320_40382,i__40321_40383,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40329_40391,map__40329_40392__$1,gline_40393,gcol_40394,name_40395,vec__40322_40384,column_40385,column_info_40386,vec__40315_40377,line_40378,columns_40379,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40394], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40378,new cljs.core.Keyword(null,"col","col",-1959363084),column_40385,new cljs.core.Keyword(null,"name","name",1843675177),name_40395], null));
});})(seq__40325_40387,chunk__40326_40388,count__40327_40389,i__40328_40390,seq__40318_40380,chunk__40319_40381,count__40320_40382,i__40321_40383,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40329_40391,map__40329_40392__$1,gline_40393,gcol_40394,name_40395,vec__40322_40384,column_40385,column_info_40386,vec__40315_40377,line_40378,columns_40379,inverted))
,cljs.core.sorted_map.call(null)));

var G__40396 = seq__40325_40387;
var G__40397 = chunk__40326_40388;
var G__40398 = count__40327_40389;
var G__40399 = (i__40328_40390 + (1));
seq__40325_40387 = G__40396;
chunk__40326_40388 = G__40397;
count__40327_40389 = G__40398;
i__40328_40390 = G__40399;
continue;
} else {
var temp__4657__auto___40400 = cljs.core.seq.call(null,seq__40325_40387);
if(temp__4657__auto___40400){
var seq__40325_40401__$1 = temp__4657__auto___40400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40325_40401__$1)){
var c__28775__auto___40402 = cljs.core.chunk_first.call(null,seq__40325_40401__$1);
var G__40403 = cljs.core.chunk_rest.call(null,seq__40325_40401__$1);
var G__40404 = c__28775__auto___40402;
var G__40405 = cljs.core.count.call(null,c__28775__auto___40402);
var G__40406 = (0);
seq__40325_40387 = G__40403;
chunk__40326_40388 = G__40404;
count__40327_40389 = G__40405;
i__40328_40390 = G__40406;
continue;
} else {
var map__40331_40407 = cljs.core.first.call(null,seq__40325_40401__$1);
var map__40331_40408__$1 = ((((!((map__40331_40407 == null)))?((((map__40331_40407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40331_40407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40331_40407):map__40331_40407);
var gline_40409 = cljs.core.get.call(null,map__40331_40408__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40410 = cljs.core.get.call(null,map__40331_40408__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40411 = cljs.core.get.call(null,map__40331_40408__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40409], null),cljs.core.fnil.call(null,((function (seq__40325_40387,chunk__40326_40388,count__40327_40389,i__40328_40390,seq__40318_40380,chunk__40319_40381,count__40320_40382,i__40321_40383,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40331_40407,map__40331_40408__$1,gline_40409,gcol_40410,name_40411,seq__40325_40401__$1,temp__4657__auto___40400,vec__40322_40384,column_40385,column_info_40386,vec__40315_40377,line_40378,columns_40379,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40410], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40378,new cljs.core.Keyword(null,"col","col",-1959363084),column_40385,new cljs.core.Keyword(null,"name","name",1843675177),name_40411], null));
});})(seq__40325_40387,chunk__40326_40388,count__40327_40389,i__40328_40390,seq__40318_40380,chunk__40319_40381,count__40320_40382,i__40321_40383,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40331_40407,map__40331_40408__$1,gline_40409,gcol_40410,name_40411,seq__40325_40401__$1,temp__4657__auto___40400,vec__40322_40384,column_40385,column_info_40386,vec__40315_40377,line_40378,columns_40379,inverted))
,cljs.core.sorted_map.call(null)));

var G__40412 = cljs.core.next.call(null,seq__40325_40401__$1);
var G__40413 = null;
var G__40414 = (0);
var G__40415 = (0);
seq__40325_40387 = G__40412;
chunk__40326_40388 = G__40413;
count__40327_40389 = G__40414;
i__40328_40390 = G__40415;
continue;
}
} else {
}
}
break;
}

var G__40416 = seq__40318_40380;
var G__40417 = chunk__40319_40381;
var G__40418 = count__40320_40382;
var G__40419 = (i__40321_40383 + (1));
seq__40318_40380 = G__40416;
chunk__40319_40381 = G__40417;
count__40320_40382 = G__40418;
i__40321_40383 = G__40419;
continue;
} else {
var temp__4657__auto___40420 = cljs.core.seq.call(null,seq__40318_40380);
if(temp__4657__auto___40420){
var seq__40318_40421__$1 = temp__4657__auto___40420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40318_40421__$1)){
var c__28775__auto___40422 = cljs.core.chunk_first.call(null,seq__40318_40421__$1);
var G__40423 = cljs.core.chunk_rest.call(null,seq__40318_40421__$1);
var G__40424 = c__28775__auto___40422;
var G__40425 = cljs.core.count.call(null,c__28775__auto___40422);
var G__40426 = (0);
seq__40318_40380 = G__40423;
chunk__40319_40381 = G__40424;
count__40320_40382 = G__40425;
i__40321_40383 = G__40426;
continue;
} else {
var vec__40333_40427 = cljs.core.first.call(null,seq__40318_40421__$1);
var column_40428 = cljs.core.nth.call(null,vec__40333_40427,(0),null);
var column_info_40429 = cljs.core.nth.call(null,vec__40333_40427,(1),null);
var seq__40336_40430 = cljs.core.seq.call(null,column_info_40429);
var chunk__40337_40431 = null;
var count__40338_40432 = (0);
var i__40339_40433 = (0);
while(true){
if((i__40339_40433 < count__40338_40432)){
var map__40340_40434 = cljs.core._nth.call(null,chunk__40337_40431,i__40339_40433);
var map__40340_40435__$1 = ((((!((map__40340_40434 == null)))?((((map__40340_40434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40340_40434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40340_40434):map__40340_40434);
var gline_40436 = cljs.core.get.call(null,map__40340_40435__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40437 = cljs.core.get.call(null,map__40340_40435__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40438 = cljs.core.get.call(null,map__40340_40435__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40436], null),cljs.core.fnil.call(null,((function (seq__40336_40430,chunk__40337_40431,count__40338_40432,i__40339_40433,seq__40318_40380,chunk__40319_40381,count__40320_40382,i__40321_40383,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40340_40434,map__40340_40435__$1,gline_40436,gcol_40437,name_40438,vec__40333_40427,column_40428,column_info_40429,seq__40318_40421__$1,temp__4657__auto___40420,vec__40315_40377,line_40378,columns_40379,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40437], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40378,new cljs.core.Keyword(null,"col","col",-1959363084),column_40428,new cljs.core.Keyword(null,"name","name",1843675177),name_40438], null));
});})(seq__40336_40430,chunk__40337_40431,count__40338_40432,i__40339_40433,seq__40318_40380,chunk__40319_40381,count__40320_40382,i__40321_40383,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40340_40434,map__40340_40435__$1,gline_40436,gcol_40437,name_40438,vec__40333_40427,column_40428,column_info_40429,seq__40318_40421__$1,temp__4657__auto___40420,vec__40315_40377,line_40378,columns_40379,inverted))
,cljs.core.sorted_map.call(null)));

var G__40439 = seq__40336_40430;
var G__40440 = chunk__40337_40431;
var G__40441 = count__40338_40432;
var G__40442 = (i__40339_40433 + (1));
seq__40336_40430 = G__40439;
chunk__40337_40431 = G__40440;
count__40338_40432 = G__40441;
i__40339_40433 = G__40442;
continue;
} else {
var temp__4657__auto___40443__$1 = cljs.core.seq.call(null,seq__40336_40430);
if(temp__4657__auto___40443__$1){
var seq__40336_40444__$1 = temp__4657__auto___40443__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40336_40444__$1)){
var c__28775__auto___40445 = cljs.core.chunk_first.call(null,seq__40336_40444__$1);
var G__40446 = cljs.core.chunk_rest.call(null,seq__40336_40444__$1);
var G__40447 = c__28775__auto___40445;
var G__40448 = cljs.core.count.call(null,c__28775__auto___40445);
var G__40449 = (0);
seq__40336_40430 = G__40446;
chunk__40337_40431 = G__40447;
count__40338_40432 = G__40448;
i__40339_40433 = G__40449;
continue;
} else {
var map__40342_40450 = cljs.core.first.call(null,seq__40336_40444__$1);
var map__40342_40451__$1 = ((((!((map__40342_40450 == null)))?((((map__40342_40450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40342_40450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40342_40450):map__40342_40450);
var gline_40452 = cljs.core.get.call(null,map__40342_40451__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40453 = cljs.core.get.call(null,map__40342_40451__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40454 = cljs.core.get.call(null,map__40342_40451__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40452], null),cljs.core.fnil.call(null,((function (seq__40336_40430,chunk__40337_40431,count__40338_40432,i__40339_40433,seq__40318_40380,chunk__40319_40381,count__40320_40382,i__40321_40383,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40342_40450,map__40342_40451__$1,gline_40452,gcol_40453,name_40454,seq__40336_40444__$1,temp__4657__auto___40443__$1,vec__40333_40427,column_40428,column_info_40429,seq__40318_40421__$1,temp__4657__auto___40420,vec__40315_40377,line_40378,columns_40379,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40453], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40378,new cljs.core.Keyword(null,"col","col",-1959363084),column_40428,new cljs.core.Keyword(null,"name","name",1843675177),name_40454], null));
});})(seq__40336_40430,chunk__40337_40431,count__40338_40432,i__40339_40433,seq__40318_40380,chunk__40319_40381,count__40320_40382,i__40321_40383,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40342_40450,map__40342_40451__$1,gline_40452,gcol_40453,name_40454,seq__40336_40444__$1,temp__4657__auto___40443__$1,vec__40333_40427,column_40428,column_info_40429,seq__40318_40421__$1,temp__4657__auto___40420,vec__40315_40377,line_40378,columns_40379,inverted))
,cljs.core.sorted_map.call(null)));

var G__40455 = cljs.core.next.call(null,seq__40336_40444__$1);
var G__40456 = null;
var G__40457 = (0);
var G__40458 = (0);
seq__40336_40430 = G__40455;
chunk__40337_40431 = G__40456;
count__40338_40432 = G__40457;
i__40339_40433 = G__40458;
continue;
}
} else {
}
}
break;
}

var G__40459 = cljs.core.next.call(null,seq__40318_40421__$1);
var G__40460 = null;
var G__40461 = (0);
var G__40462 = (0);
seq__40318_40380 = G__40459;
chunk__40319_40381 = G__40460;
count__40320_40382 = G__40461;
i__40321_40383 = G__40462;
continue;
}
} else {
}
}
break;
}

var G__40463 = seq__40311_40373;
var G__40464 = chunk__40312_40374;
var G__40465 = count__40313_40375;
var G__40466 = (i__40314_40376 + (1));
seq__40311_40373 = G__40463;
chunk__40312_40374 = G__40464;
count__40313_40375 = G__40465;
i__40314_40376 = G__40466;
continue;
} else {
var temp__4657__auto___40467 = cljs.core.seq.call(null,seq__40311_40373);
if(temp__4657__auto___40467){
var seq__40311_40468__$1 = temp__4657__auto___40467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40311_40468__$1)){
var c__28775__auto___40469 = cljs.core.chunk_first.call(null,seq__40311_40468__$1);
var G__40470 = cljs.core.chunk_rest.call(null,seq__40311_40468__$1);
var G__40471 = c__28775__auto___40469;
var G__40472 = cljs.core.count.call(null,c__28775__auto___40469);
var G__40473 = (0);
seq__40311_40373 = G__40470;
chunk__40312_40374 = G__40471;
count__40313_40375 = G__40472;
i__40314_40376 = G__40473;
continue;
} else {
var vec__40344_40474 = cljs.core.first.call(null,seq__40311_40468__$1);
var line_40475 = cljs.core.nth.call(null,vec__40344_40474,(0),null);
var columns_40476 = cljs.core.nth.call(null,vec__40344_40474,(1),null);
var seq__40347_40477 = cljs.core.seq.call(null,columns_40476);
var chunk__40348_40478 = null;
var count__40349_40479 = (0);
var i__40350_40480 = (0);
while(true){
if((i__40350_40480 < count__40349_40479)){
var vec__40351_40481 = cljs.core._nth.call(null,chunk__40348_40478,i__40350_40480);
var column_40482 = cljs.core.nth.call(null,vec__40351_40481,(0),null);
var column_info_40483 = cljs.core.nth.call(null,vec__40351_40481,(1),null);
var seq__40354_40484 = cljs.core.seq.call(null,column_info_40483);
var chunk__40355_40485 = null;
var count__40356_40486 = (0);
var i__40357_40487 = (0);
while(true){
if((i__40357_40487 < count__40356_40486)){
var map__40358_40488 = cljs.core._nth.call(null,chunk__40355_40485,i__40357_40487);
var map__40358_40489__$1 = ((((!((map__40358_40488 == null)))?((((map__40358_40488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40358_40488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40358_40488):map__40358_40488);
var gline_40490 = cljs.core.get.call(null,map__40358_40489__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40491 = cljs.core.get.call(null,map__40358_40489__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40492 = cljs.core.get.call(null,map__40358_40489__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40490], null),cljs.core.fnil.call(null,((function (seq__40354_40484,chunk__40355_40485,count__40356_40486,i__40357_40487,seq__40347_40477,chunk__40348_40478,count__40349_40479,i__40350_40480,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40358_40488,map__40358_40489__$1,gline_40490,gcol_40491,name_40492,vec__40351_40481,column_40482,column_info_40483,vec__40344_40474,line_40475,columns_40476,seq__40311_40468__$1,temp__4657__auto___40467,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40491], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40475,new cljs.core.Keyword(null,"col","col",-1959363084),column_40482,new cljs.core.Keyword(null,"name","name",1843675177),name_40492], null));
});})(seq__40354_40484,chunk__40355_40485,count__40356_40486,i__40357_40487,seq__40347_40477,chunk__40348_40478,count__40349_40479,i__40350_40480,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40358_40488,map__40358_40489__$1,gline_40490,gcol_40491,name_40492,vec__40351_40481,column_40482,column_info_40483,vec__40344_40474,line_40475,columns_40476,seq__40311_40468__$1,temp__4657__auto___40467,inverted))
,cljs.core.sorted_map.call(null)));

var G__40493 = seq__40354_40484;
var G__40494 = chunk__40355_40485;
var G__40495 = count__40356_40486;
var G__40496 = (i__40357_40487 + (1));
seq__40354_40484 = G__40493;
chunk__40355_40485 = G__40494;
count__40356_40486 = G__40495;
i__40357_40487 = G__40496;
continue;
} else {
var temp__4657__auto___40497__$1 = cljs.core.seq.call(null,seq__40354_40484);
if(temp__4657__auto___40497__$1){
var seq__40354_40498__$1 = temp__4657__auto___40497__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40354_40498__$1)){
var c__28775__auto___40499 = cljs.core.chunk_first.call(null,seq__40354_40498__$1);
var G__40500 = cljs.core.chunk_rest.call(null,seq__40354_40498__$1);
var G__40501 = c__28775__auto___40499;
var G__40502 = cljs.core.count.call(null,c__28775__auto___40499);
var G__40503 = (0);
seq__40354_40484 = G__40500;
chunk__40355_40485 = G__40501;
count__40356_40486 = G__40502;
i__40357_40487 = G__40503;
continue;
} else {
var map__40360_40504 = cljs.core.first.call(null,seq__40354_40498__$1);
var map__40360_40505__$1 = ((((!((map__40360_40504 == null)))?((((map__40360_40504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40360_40504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40360_40504):map__40360_40504);
var gline_40506 = cljs.core.get.call(null,map__40360_40505__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40507 = cljs.core.get.call(null,map__40360_40505__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40508 = cljs.core.get.call(null,map__40360_40505__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40506], null),cljs.core.fnil.call(null,((function (seq__40354_40484,chunk__40355_40485,count__40356_40486,i__40357_40487,seq__40347_40477,chunk__40348_40478,count__40349_40479,i__40350_40480,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40360_40504,map__40360_40505__$1,gline_40506,gcol_40507,name_40508,seq__40354_40498__$1,temp__4657__auto___40497__$1,vec__40351_40481,column_40482,column_info_40483,vec__40344_40474,line_40475,columns_40476,seq__40311_40468__$1,temp__4657__auto___40467,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40507], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40475,new cljs.core.Keyword(null,"col","col",-1959363084),column_40482,new cljs.core.Keyword(null,"name","name",1843675177),name_40508], null));
});})(seq__40354_40484,chunk__40355_40485,count__40356_40486,i__40357_40487,seq__40347_40477,chunk__40348_40478,count__40349_40479,i__40350_40480,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40360_40504,map__40360_40505__$1,gline_40506,gcol_40507,name_40508,seq__40354_40498__$1,temp__4657__auto___40497__$1,vec__40351_40481,column_40482,column_info_40483,vec__40344_40474,line_40475,columns_40476,seq__40311_40468__$1,temp__4657__auto___40467,inverted))
,cljs.core.sorted_map.call(null)));

var G__40509 = cljs.core.next.call(null,seq__40354_40498__$1);
var G__40510 = null;
var G__40511 = (0);
var G__40512 = (0);
seq__40354_40484 = G__40509;
chunk__40355_40485 = G__40510;
count__40356_40486 = G__40511;
i__40357_40487 = G__40512;
continue;
}
} else {
}
}
break;
}

var G__40513 = seq__40347_40477;
var G__40514 = chunk__40348_40478;
var G__40515 = count__40349_40479;
var G__40516 = (i__40350_40480 + (1));
seq__40347_40477 = G__40513;
chunk__40348_40478 = G__40514;
count__40349_40479 = G__40515;
i__40350_40480 = G__40516;
continue;
} else {
var temp__4657__auto___40517__$1 = cljs.core.seq.call(null,seq__40347_40477);
if(temp__4657__auto___40517__$1){
var seq__40347_40518__$1 = temp__4657__auto___40517__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40347_40518__$1)){
var c__28775__auto___40519 = cljs.core.chunk_first.call(null,seq__40347_40518__$1);
var G__40520 = cljs.core.chunk_rest.call(null,seq__40347_40518__$1);
var G__40521 = c__28775__auto___40519;
var G__40522 = cljs.core.count.call(null,c__28775__auto___40519);
var G__40523 = (0);
seq__40347_40477 = G__40520;
chunk__40348_40478 = G__40521;
count__40349_40479 = G__40522;
i__40350_40480 = G__40523;
continue;
} else {
var vec__40362_40524 = cljs.core.first.call(null,seq__40347_40518__$1);
var column_40525 = cljs.core.nth.call(null,vec__40362_40524,(0),null);
var column_info_40526 = cljs.core.nth.call(null,vec__40362_40524,(1),null);
var seq__40365_40527 = cljs.core.seq.call(null,column_info_40526);
var chunk__40366_40528 = null;
var count__40367_40529 = (0);
var i__40368_40530 = (0);
while(true){
if((i__40368_40530 < count__40367_40529)){
var map__40369_40531 = cljs.core._nth.call(null,chunk__40366_40528,i__40368_40530);
var map__40369_40532__$1 = ((((!((map__40369_40531 == null)))?((((map__40369_40531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40369_40531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40369_40531):map__40369_40531);
var gline_40533 = cljs.core.get.call(null,map__40369_40532__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40534 = cljs.core.get.call(null,map__40369_40532__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40535 = cljs.core.get.call(null,map__40369_40532__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40533], null),cljs.core.fnil.call(null,((function (seq__40365_40527,chunk__40366_40528,count__40367_40529,i__40368_40530,seq__40347_40477,chunk__40348_40478,count__40349_40479,i__40350_40480,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40369_40531,map__40369_40532__$1,gline_40533,gcol_40534,name_40535,vec__40362_40524,column_40525,column_info_40526,seq__40347_40518__$1,temp__4657__auto___40517__$1,vec__40344_40474,line_40475,columns_40476,seq__40311_40468__$1,temp__4657__auto___40467,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40534], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40475,new cljs.core.Keyword(null,"col","col",-1959363084),column_40525,new cljs.core.Keyword(null,"name","name",1843675177),name_40535], null));
});})(seq__40365_40527,chunk__40366_40528,count__40367_40529,i__40368_40530,seq__40347_40477,chunk__40348_40478,count__40349_40479,i__40350_40480,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40369_40531,map__40369_40532__$1,gline_40533,gcol_40534,name_40535,vec__40362_40524,column_40525,column_info_40526,seq__40347_40518__$1,temp__4657__auto___40517__$1,vec__40344_40474,line_40475,columns_40476,seq__40311_40468__$1,temp__4657__auto___40467,inverted))
,cljs.core.sorted_map.call(null)));

var G__40536 = seq__40365_40527;
var G__40537 = chunk__40366_40528;
var G__40538 = count__40367_40529;
var G__40539 = (i__40368_40530 + (1));
seq__40365_40527 = G__40536;
chunk__40366_40528 = G__40537;
count__40367_40529 = G__40538;
i__40368_40530 = G__40539;
continue;
} else {
var temp__4657__auto___40540__$2 = cljs.core.seq.call(null,seq__40365_40527);
if(temp__4657__auto___40540__$2){
var seq__40365_40541__$1 = temp__4657__auto___40540__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40365_40541__$1)){
var c__28775__auto___40542 = cljs.core.chunk_first.call(null,seq__40365_40541__$1);
var G__40543 = cljs.core.chunk_rest.call(null,seq__40365_40541__$1);
var G__40544 = c__28775__auto___40542;
var G__40545 = cljs.core.count.call(null,c__28775__auto___40542);
var G__40546 = (0);
seq__40365_40527 = G__40543;
chunk__40366_40528 = G__40544;
count__40367_40529 = G__40545;
i__40368_40530 = G__40546;
continue;
} else {
var map__40371_40547 = cljs.core.first.call(null,seq__40365_40541__$1);
var map__40371_40548__$1 = ((((!((map__40371_40547 == null)))?((((map__40371_40547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40371_40547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40371_40547):map__40371_40547);
var gline_40549 = cljs.core.get.call(null,map__40371_40548__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40550 = cljs.core.get.call(null,map__40371_40548__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40551 = cljs.core.get.call(null,map__40371_40548__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40549], null),cljs.core.fnil.call(null,((function (seq__40365_40527,chunk__40366_40528,count__40367_40529,i__40368_40530,seq__40347_40477,chunk__40348_40478,count__40349_40479,i__40350_40480,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40371_40547,map__40371_40548__$1,gline_40549,gcol_40550,name_40551,seq__40365_40541__$1,temp__4657__auto___40540__$2,vec__40362_40524,column_40525,column_info_40526,seq__40347_40518__$1,temp__4657__auto___40517__$1,vec__40344_40474,line_40475,columns_40476,seq__40311_40468__$1,temp__4657__auto___40467,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40550], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40475,new cljs.core.Keyword(null,"col","col",-1959363084),column_40525,new cljs.core.Keyword(null,"name","name",1843675177),name_40551], null));
});})(seq__40365_40527,chunk__40366_40528,count__40367_40529,i__40368_40530,seq__40347_40477,chunk__40348_40478,count__40349_40479,i__40350_40480,seq__40311_40373,chunk__40312_40374,count__40313_40375,i__40314_40376,map__40371_40547,map__40371_40548__$1,gline_40549,gcol_40550,name_40551,seq__40365_40541__$1,temp__4657__auto___40540__$2,vec__40362_40524,column_40525,column_info_40526,seq__40347_40518__$1,temp__4657__auto___40517__$1,vec__40344_40474,line_40475,columns_40476,seq__40311_40468__$1,temp__4657__auto___40467,inverted))
,cljs.core.sorted_map.call(null)));

var G__40552 = cljs.core.next.call(null,seq__40365_40541__$1);
var G__40553 = null;
var G__40554 = (0);
var G__40555 = (0);
seq__40365_40527 = G__40552;
chunk__40366_40528 = G__40553;
count__40367_40529 = G__40554;
i__40368_40530 = G__40555;
continue;
}
} else {
}
}
break;
}

var G__40556 = cljs.core.next.call(null,seq__40347_40518__$1);
var G__40557 = null;
var G__40558 = (0);
var G__40559 = (0);
seq__40347_40477 = G__40556;
chunk__40348_40478 = G__40557;
count__40349_40479 = G__40558;
i__40350_40480 = G__40559;
continue;
}
} else {
}
}
break;
}

var G__40560 = cljs.core.next.call(null,seq__40311_40468__$1);
var G__40561 = null;
var G__40562 = (0);
var G__40563 = (0);
seq__40311_40373 = G__40560;
chunk__40312_40374 = G__40561;
count__40313_40375 = G__40562;
i__40314_40376 = G__40563;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1510190968092
