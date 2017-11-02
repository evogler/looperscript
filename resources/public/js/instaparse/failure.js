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
var G__29692 = (line + (1));
var G__29693 = (1);
var G__29694 = (counter + (1));
line = G__29692;
col = G__29693;
counter = G__29694;
continue;
} else {
var G__29695 = line;
var G__29696 = (col + (1));
var G__29697 = (counter + (1));
line = G__29695;
col = G__29696;
counter = G__29697;
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
var G__29698 = cljs.core.next.call(null,chars);
var G__29699 = (n__$1 - (1));
chars = G__29698;
n__$1 = G__29699;
continue;
} else {
var G__29700 = cljs.core.next.call(null,chars);
var G__29701 = n__$1;
chars = G__29700;
n__$1 = G__29701;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__29702){
var map__29703 = p__29702;
var map__29703__$1 = ((((!((map__29703 == null)))?((((map__29703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29703):map__29703);
var line = cljs.core.get.call(null,map__29703__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29703__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__29703__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__29703__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__29705_29713 = cljs.core.seq.call(null,full_reasons);
var chunk__29706_29714 = null;
var count__29707_29715 = (0);
var i__29708_29716 = (0);
while(true){
if((i__29708_29716 < count__29707_29715)){
var r_29717 = cljs.core._nth.call(null,chunk__29706_29714,i__29708_29716);
instaparse.failure.print_reason.call(null,r_29717);

cljs.core.println.call(null," (followed by end-of-string)");

var G__29718 = seq__29705_29713;
var G__29719 = chunk__29706_29714;
var G__29720 = count__29707_29715;
var G__29721 = (i__29708_29716 + (1));
seq__29705_29713 = G__29718;
chunk__29706_29714 = G__29719;
count__29707_29715 = G__29720;
i__29708_29716 = G__29721;
continue;
} else {
var temp__4657__auto___29722 = cljs.core.seq.call(null,seq__29705_29713);
if(temp__4657__auto___29722){
var seq__29705_29723__$1 = temp__4657__auto___29722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29705_29723__$1)){
var c__28828__auto___29724 = cljs.core.chunk_first.call(null,seq__29705_29723__$1);
var G__29725 = cljs.core.chunk_rest.call(null,seq__29705_29723__$1);
var G__29726 = c__28828__auto___29724;
var G__29727 = cljs.core.count.call(null,c__28828__auto___29724);
var G__29728 = (0);
seq__29705_29713 = G__29725;
chunk__29706_29714 = G__29726;
count__29707_29715 = G__29727;
i__29708_29716 = G__29728;
continue;
} else {
var r_29729 = cljs.core.first.call(null,seq__29705_29723__$1);
instaparse.failure.print_reason.call(null,r_29729);

cljs.core.println.call(null," (followed by end-of-string)");

var G__29730 = cljs.core.next.call(null,seq__29705_29723__$1);
var G__29731 = null;
var G__29732 = (0);
var G__29733 = (0);
seq__29705_29713 = G__29730;
chunk__29706_29714 = G__29731;
count__29707_29715 = G__29732;
i__29708_29716 = G__29733;
continue;
}
} else {
}
}
break;
}

var seq__29709 = cljs.core.seq.call(null,partial_reasons);
var chunk__29710 = null;
var count__29711 = (0);
var i__29712 = (0);
while(true){
if((i__29712 < count__29711)){
var r = cljs.core._nth.call(null,chunk__29710,i__29712);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__29734 = seq__29709;
var G__29735 = chunk__29710;
var G__29736 = count__29711;
var G__29737 = (i__29712 + (1));
seq__29709 = G__29734;
chunk__29710 = G__29735;
count__29711 = G__29736;
i__29712 = G__29737;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29709);
if(temp__4657__auto__){
var seq__29709__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29709__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__29709__$1);
var G__29738 = cljs.core.chunk_rest.call(null,seq__29709__$1);
var G__29739 = c__28828__auto__;
var G__29740 = cljs.core.count.call(null,c__28828__auto__);
var G__29741 = (0);
seq__29709 = G__29738;
chunk__29710 = G__29739;
count__29711 = G__29740;
i__29712 = G__29741;
continue;
} else {
var r = cljs.core.first.call(null,seq__29709__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__29742 = cljs.core.next.call(null,seq__29709__$1);
var G__29743 = null;
var G__29744 = (0);
var G__29745 = (0);
seq__29709 = G__29742;
chunk__29710 = G__29743;
count__29711 = G__29744;
i__29712 = G__29745;
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
