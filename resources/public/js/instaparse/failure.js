// Compiled by ClojureScript 1.9.908 {}
goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.call(null,index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.call(null,"\n",cljs.core.get.call(null,text,counter))){
var G__30273 = (line + (1));
var G__30274 = (1);
var G__30275 = (counter + (1));
line = G__30273;
col = G__30274;
counter = G__30275;
continue;
} else {
var G__30276 = line;
var G__30277 = (col + (1));
var G__30278 = (counter + (1));
line = G__30276;
col = G__30277;
counter = G__30278;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq.call(null,clojure.string.replace.call(null,text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_.call(null,chars)){
return "";
} else {
if(cljs.core._EQ_.call(null,n__$1,(1))){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_while.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.call(null,"\n",cljs.core.first.call(null,chars))){
var G__30279 = cljs.core.next.call(null,chars);
var G__30280 = (n__$1 - (1));
chars = G__30279;
n__$1 = G__30280;
continue;
} else {
var G__30281 = cljs.core.next.call(null,chars);
var G__30282 = n__$1;
chars = G__30281;
n__$1 = G__30282;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.repeat.call(null,(n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.call(null,failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line.call(null,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.call(null,"NOT ");

return cljs.core.print.call(null,new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.call(null,instaparse.print.char_range__GT_str.call(null,r));
} else {
if((r instanceof RegExp)){
return cljs.core.print.call(null,instaparse.print.regexp__GT_str.call(null,r));
} else {
return cljs.core.pr.call(null,r);

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__30283){
var map__30284 = p__30283;
var map__30284__$1 = ((((!((map__30284 == null)))?((((map__30284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30284):map__30284);
var line = cljs.core.get.call(null,map__30284__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30284__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__30284__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__30284__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.call(null,["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join(''));

cljs.core.println.call(null,text);

cljs.core.println.call(null,instaparse.failure.marker.call(null,column));

var full_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count.call(null,full_reasons) + cljs.core.count.call(null,partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.call(null,(1),total)){
cljs.core.println.call(null,"Expected:");
} else {
cljs.core.println.call(null,"Expected one of:");

}
}

var seq__30286_30294 = cljs.core.seq.call(null,full_reasons);
var chunk__30287_30295 = null;
var count__30288_30296 = (0);
var i__30289_30297 = (0);
while(true){
if((i__30289_30297 < count__30288_30296)){
var r_30298 = cljs.core._nth.call(null,chunk__30287_30295,i__30289_30297);
instaparse.failure.print_reason.call(null,r_30298);

cljs.core.println.call(null," (followed by end-of-string)");

var G__30299 = seq__30286_30294;
var G__30300 = chunk__30287_30295;
var G__30301 = count__30288_30296;
var G__30302 = (i__30289_30297 + (1));
seq__30286_30294 = G__30299;
chunk__30287_30295 = G__30300;
count__30288_30296 = G__30301;
i__30289_30297 = G__30302;
continue;
} else {
var temp__4657__auto___30303 = cljs.core.seq.call(null,seq__30286_30294);
if(temp__4657__auto___30303){
var seq__30286_30304__$1 = temp__4657__auto___30303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30286_30304__$1)){
var c__28775__auto___30305 = cljs.core.chunk_first.call(null,seq__30286_30304__$1);
var G__30306 = cljs.core.chunk_rest.call(null,seq__30286_30304__$1);
var G__30307 = c__28775__auto___30305;
var G__30308 = cljs.core.count.call(null,c__28775__auto___30305);
var G__30309 = (0);
seq__30286_30294 = G__30306;
chunk__30287_30295 = G__30307;
count__30288_30296 = G__30308;
i__30289_30297 = G__30309;
continue;
} else {
var r_30310 = cljs.core.first.call(null,seq__30286_30304__$1);
instaparse.failure.print_reason.call(null,r_30310);

cljs.core.println.call(null," (followed by end-of-string)");

var G__30311 = cljs.core.next.call(null,seq__30286_30304__$1);
var G__30312 = null;
var G__30313 = (0);
var G__30314 = (0);
seq__30286_30294 = G__30311;
chunk__30287_30295 = G__30312;
count__30288_30296 = G__30313;
i__30289_30297 = G__30314;
continue;
}
} else {
}
}
break;
}

var seq__30290 = cljs.core.seq.call(null,partial_reasons);
var chunk__30291 = null;
var count__30292 = (0);
var i__30293 = (0);
while(true){
if((i__30293 < count__30292)){
var r = cljs.core._nth.call(null,chunk__30291,i__30293);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__30315 = seq__30290;
var G__30316 = chunk__30291;
var G__30317 = count__30292;
var G__30318 = (i__30293 + (1));
seq__30290 = G__30315;
chunk__30291 = G__30316;
count__30292 = G__30317;
i__30293 = G__30318;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30290);
if(temp__4657__auto__){
var seq__30290__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30290__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__30290__$1);
var G__30319 = cljs.core.chunk_rest.call(null,seq__30290__$1);
var G__30320 = c__28775__auto__;
var G__30321 = cljs.core.count.call(null,c__28775__auto__);
var G__30322 = (0);
seq__30290 = G__30319;
chunk__30291 = G__30320;
count__30292 = G__30321;
i__30293 = G__30322;
continue;
} else {
var r = cljs.core.first.call(null,seq__30290__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__30323 = cljs.core.next.call(null,seq__30290__$1);
var G__30324 = null;
var G__30325 = (0);
var G__30326 = (0);
seq__30290 = G__30323;
chunk__30291 = G__30324;
count__30292 = G__30325;
i__30293 = G__30326;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map?rel=1509844999775
