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
var G__30272 = (line + (1));
var G__30273 = (1);
var G__30274 = (counter + (1));
line = G__30272;
col = G__30273;
counter = G__30274;
continue;
} else {
var G__30275 = line;
var G__30276 = (col + (1));
var G__30277 = (counter + (1));
line = G__30275;
col = G__30276;
counter = G__30277;
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
var G__30278 = cljs.core.next.call(null,chars);
var G__30279 = (n__$1 - (1));
chars = G__30278;
n__$1 = G__30279;
continue;
} else {
var G__30280 = cljs.core.next.call(null,chars);
var G__30281 = n__$1;
chars = G__30280;
n__$1 = G__30281;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__30282){
var map__30283 = p__30282;
var map__30283__$1 = ((((!((map__30283 == null)))?((((map__30283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30283):map__30283);
var line = cljs.core.get.call(null,map__30283__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30283__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__30283__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__30283__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__30285_30293 = cljs.core.seq.call(null,full_reasons);
var chunk__30286_30294 = null;
var count__30287_30295 = (0);
var i__30288_30296 = (0);
while(true){
if((i__30288_30296 < count__30287_30295)){
var r_30297 = cljs.core._nth.call(null,chunk__30286_30294,i__30288_30296);
instaparse.failure.print_reason.call(null,r_30297);

cljs.core.println.call(null," (followed by end-of-string)");

var G__30298 = seq__30285_30293;
var G__30299 = chunk__30286_30294;
var G__30300 = count__30287_30295;
var G__30301 = (i__30288_30296 + (1));
seq__30285_30293 = G__30298;
chunk__30286_30294 = G__30299;
count__30287_30295 = G__30300;
i__30288_30296 = G__30301;
continue;
} else {
var temp__4657__auto___30302 = cljs.core.seq.call(null,seq__30285_30293);
if(temp__4657__auto___30302){
var seq__30285_30303__$1 = temp__4657__auto___30302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30285_30303__$1)){
var c__28775__auto___30304 = cljs.core.chunk_first.call(null,seq__30285_30303__$1);
var G__30305 = cljs.core.chunk_rest.call(null,seq__30285_30303__$1);
var G__30306 = c__28775__auto___30304;
var G__30307 = cljs.core.count.call(null,c__28775__auto___30304);
var G__30308 = (0);
seq__30285_30293 = G__30305;
chunk__30286_30294 = G__30306;
count__30287_30295 = G__30307;
i__30288_30296 = G__30308;
continue;
} else {
var r_30309 = cljs.core.first.call(null,seq__30285_30303__$1);
instaparse.failure.print_reason.call(null,r_30309);

cljs.core.println.call(null," (followed by end-of-string)");

var G__30310 = cljs.core.next.call(null,seq__30285_30303__$1);
var G__30311 = null;
var G__30312 = (0);
var G__30313 = (0);
seq__30285_30293 = G__30310;
chunk__30286_30294 = G__30311;
count__30287_30295 = G__30312;
i__30288_30296 = G__30313;
continue;
}
} else {
}
}
break;
}

var seq__30289 = cljs.core.seq.call(null,partial_reasons);
var chunk__30290 = null;
var count__30291 = (0);
var i__30292 = (0);
while(true){
if((i__30292 < count__30291)){
var r = cljs.core._nth.call(null,chunk__30290,i__30292);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__30314 = seq__30289;
var G__30315 = chunk__30290;
var G__30316 = count__30291;
var G__30317 = (i__30292 + (1));
seq__30289 = G__30314;
chunk__30290 = G__30315;
count__30291 = G__30316;
i__30292 = G__30317;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30289);
if(temp__4657__auto__){
var seq__30289__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30289__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__30289__$1);
var G__30318 = cljs.core.chunk_rest.call(null,seq__30289__$1);
var G__30319 = c__28775__auto__;
var G__30320 = cljs.core.count.call(null,c__28775__auto__);
var G__30321 = (0);
seq__30289 = G__30318;
chunk__30290 = G__30319;
count__30291 = G__30320;
i__30292 = G__30321;
continue;
} else {
var r = cljs.core.first.call(null,seq__30289__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__30322 = cljs.core.next.call(null,seq__30289__$1);
var G__30323 = null;
var G__30324 = (0);
var G__30325 = (0);
seq__30289 = G__30322;
chunk__30290 = G__30323;
count__30291 = G__30324;
i__30292 = G__30325;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map?rel=1510190745756
