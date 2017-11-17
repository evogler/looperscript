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
var G__14083 = (line + (1));
var G__14084 = (1);
var G__14085 = (counter + (1));
line = G__14083;
col = G__14084;
counter = G__14085;
continue;
} else {
var G__14086 = line;
var G__14087 = (col + (1));
var G__14088 = (counter + (1));
line = G__14086;
col = G__14087;
counter = G__14088;
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
var G__14089 = cljs.core.next.call(null,chars);
var G__14090 = (n__$1 - (1));
chars = G__14089;
n__$1 = G__14090;
continue;
} else {
var G__14091 = cljs.core.next.call(null,chars);
var G__14092 = n__$1;
chars = G__14091;
n__$1 = G__14092;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__14093){
var map__14094 = p__14093;
var map__14094__$1 = ((((!((map__14094 == null)))?((((map__14094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14094.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14094):map__14094);
var line = cljs.core.get.call(null,map__14094__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__14094__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__14094__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__14094__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__14096_14104 = cljs.core.seq.call(null,full_reasons);
var chunk__14097_14105 = null;
var count__14098_14106 = (0);
var i__14099_14107 = (0);
while(true){
if((i__14099_14107 < count__14098_14106)){
var r_14108 = cljs.core._nth.call(null,chunk__14097_14105,i__14099_14107);
instaparse.failure.print_reason.call(null,r_14108);

cljs.core.println.call(null," (followed by end-of-string)");

var G__14109 = seq__14096_14104;
var G__14110 = chunk__14097_14105;
var G__14111 = count__14098_14106;
var G__14112 = (i__14099_14107 + (1));
seq__14096_14104 = G__14109;
chunk__14097_14105 = G__14110;
count__14098_14106 = G__14111;
i__14099_14107 = G__14112;
continue;
} else {
var temp__4657__auto___14113 = cljs.core.seq.call(null,seq__14096_14104);
if(temp__4657__auto___14113){
var seq__14096_14114__$1 = temp__4657__auto___14113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14096_14114__$1)){
var c__8257__auto___14115 = cljs.core.chunk_first.call(null,seq__14096_14114__$1);
var G__14116 = cljs.core.chunk_rest.call(null,seq__14096_14114__$1);
var G__14117 = c__8257__auto___14115;
var G__14118 = cljs.core.count.call(null,c__8257__auto___14115);
var G__14119 = (0);
seq__14096_14104 = G__14116;
chunk__14097_14105 = G__14117;
count__14098_14106 = G__14118;
i__14099_14107 = G__14119;
continue;
} else {
var r_14120 = cljs.core.first.call(null,seq__14096_14114__$1);
instaparse.failure.print_reason.call(null,r_14120);

cljs.core.println.call(null," (followed by end-of-string)");

var G__14121 = cljs.core.next.call(null,seq__14096_14114__$1);
var G__14122 = null;
var G__14123 = (0);
var G__14124 = (0);
seq__14096_14104 = G__14121;
chunk__14097_14105 = G__14122;
count__14098_14106 = G__14123;
i__14099_14107 = G__14124;
continue;
}
} else {
}
}
break;
}

var seq__14100 = cljs.core.seq.call(null,partial_reasons);
var chunk__14101 = null;
var count__14102 = (0);
var i__14103 = (0);
while(true){
if((i__14103 < count__14102)){
var r = cljs.core._nth.call(null,chunk__14101,i__14103);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__14125 = seq__14100;
var G__14126 = chunk__14101;
var G__14127 = count__14102;
var G__14128 = (i__14103 + (1));
seq__14100 = G__14125;
chunk__14101 = G__14126;
count__14102 = G__14127;
i__14103 = G__14128;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14100);
if(temp__4657__auto__){
var seq__14100__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14100__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__14100__$1);
var G__14129 = cljs.core.chunk_rest.call(null,seq__14100__$1);
var G__14130 = c__8257__auto__;
var G__14131 = cljs.core.count.call(null,c__8257__auto__);
var G__14132 = (0);
seq__14100 = G__14129;
chunk__14101 = G__14130;
count__14102 = G__14131;
i__14103 = G__14132;
continue;
} else {
var r = cljs.core.first.call(null,seq__14100__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__14133 = cljs.core.next.call(null,seq__14100__$1);
var G__14134 = null;
var G__14135 = (0);
var G__14136 = (0);
seq__14100 = G__14133;
chunk__14101 = G__14134;
count__14102 = G__14135;
i__14103 = G__14136;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map
