// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
goog.require('instaparse.print');
/**
* Takes an index into text, and determines the line and column info
*/
instaparse.failure.index__GT_line_column = (function index__GT_line_column(index,text){var line = (1);var col = (1);var counter = (0);while(true){
if(cljs.core._EQ_.call(null,index,counter))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else
{if(cljs.core._EQ_.call(null,"\n",cljs.core.get.call(null,text,counter)))
{{
var G__11593 = (line + (1));
var G__11594 = (1);
var G__11595 = (counter + (1));
line = G__11593;
col = G__11594;
counter = G__11595;
continue;
}
} else
{{
var G__11596 = line;
var G__11597 = (col + (1));
var G__11598 = (counter + (1));
line = G__11596;
col = G__11597;
counter = G__11598;
continue;
}

}
}
break;
}
});
instaparse.failure.newline_chars = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\n",null,"\r",null], null), null);
/**
* Like the line-seq that comes with clojure, but operates directly on
* a string instead of a BufferedReader. Probably slow.
*/
instaparse.failure.line_seq = (function line_seq(s){if(cljs.core.empty_QMARK_.call(null,s))
{return null;
} else
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__11599_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__11599_SHARP_)));
}),cljs.core.partition_by.call(null,instaparse.failure.newline_chars,s)));
}
});
/**
* Returns nth line of text, 1-based
*/
instaparse.failure.get_line = (function get_line(n,text){return cljs.core.nth.call(null,instaparse.failure.line_seq.call(null,text),(n - (1)));
});
/**
* Creates string with caret at nth position, 1-based
*/
instaparse.failure.marker = (function marker(n){if(cljs.core.integer_QMARK_.call(null,n))
{if((n <= (1)))
{return "^";
} else
{return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.repeat.call(null,(n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else
{return null;
}
});
/**
* Adds text, line, and column info to failure object.
*/
instaparse.failure.augment_failure = (function augment_failure(failure,text){var lc = instaparse.failure.index__GT_line_column.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);return cljs.core.merge.call(null,failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line.call(null,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null));
});
/**
* Provides special case for printing negative lookahead reasons
*/
instaparse.failure.print_reason = (function print_reason(r){if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)))
{cljs.core.print.call(null,"NOT ");
return cljs.core.println.call(null,new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r));
} else
{if((r instanceof java.util.regex.Pattern))
{return cljs.core.println.call(null,instaparse.print.regexp__GT_str.call(null,r));
} else
{return cljs.core.prn.call(null,r);

}
}
});
/**
* Takes an augmented failure object and prints the error message
*/
instaparse.failure.pprint_failure = (function pprint_failure(p__11600){var map__11610 = p__11600;var map__11610__$1 = ((cljs.core.seq_QMARK_.call(null,map__11610))?cljs.core.apply.call(null,cljs.core.hash_map,map__11610):map__11610);var reason = cljs.core.get.call(null,map__11610__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__11610__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__11610__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__11610__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
cljs.core.println.call(null,text);
cljs.core.println.call(null,instaparse.failure.marker.call(null,column));
var full_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,new cljs.core.Keyword(null,"full","full",436801220),reason)));var partial_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"full","full",436801220)),reason)));var total = (cljs.core.count.call(null,full_reasons) + cljs.core.count.call(null,partial_reasons));if((total === (0)))
{} else
{if(cljs.core._EQ_.call(null,(1),total))
{cljs.core.println.call(null,"Expected:");
} else
{cljs.core.println.call(null,"Expected one of:");

}
}
var seq__11611_11619 = cljs.core.seq.call(null,full_reasons);var chunk__11612_11620 = null;var count__11613_11621 = (0);var i__11614_11622 = (0);while(true){
if((i__11614_11622 < count__11613_11621))
{var r_11623 = cljs.core._nth.call(null,chunk__11612_11620,i__11614_11622);cljs.core.pr.call(null,r_11623);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__11624 = seq__11611_11619;
var G__11625 = chunk__11612_11620;
var G__11626 = count__11613_11621;
var G__11627 = (i__11614_11622 + (1));
seq__11611_11619 = G__11624;
chunk__11612_11620 = G__11625;
count__11613_11621 = G__11626;
i__11614_11622 = G__11627;
continue;
}
} else
{var temp__4126__auto___11628 = cljs.core.seq.call(null,seq__11611_11619);if(temp__4126__auto___11628)
{var seq__11611_11629__$1 = temp__4126__auto___11628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11611_11629__$1))
{var c__4410__auto___11630 = cljs.core.chunk_first.call(null,seq__11611_11629__$1);{
var G__11631 = cljs.core.chunk_rest.call(null,seq__11611_11629__$1);
var G__11632 = c__4410__auto___11630;
var G__11633 = cljs.core.count.call(null,c__4410__auto___11630);
var G__11634 = (0);
seq__11611_11619 = G__11631;
chunk__11612_11620 = G__11632;
count__11613_11621 = G__11633;
i__11614_11622 = G__11634;
continue;
}
} else
{var r_11635 = cljs.core.first.call(null,seq__11611_11629__$1);cljs.core.pr.call(null,r_11635);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__11636 = cljs.core.next.call(null,seq__11611_11629__$1);
var G__11637 = null;
var G__11638 = (0);
var G__11639 = (0);
seq__11611_11619 = G__11636;
chunk__11612_11620 = G__11637;
count__11613_11621 = G__11638;
i__11614_11622 = G__11639;
continue;
}
}
} else
{}
}
break;
}
var seq__11615 = cljs.core.seq.call(null,partial_reasons);var chunk__11616 = null;var count__11617 = (0);var i__11618 = (0);while(true){
if((i__11618 < count__11617))
{var r = cljs.core._nth.call(null,chunk__11616,i__11618);instaparse.failure.print_reason.call(null,r);
{
var G__11640 = seq__11615;
var G__11641 = chunk__11616;
var G__11642 = count__11617;
var G__11643 = (i__11618 + (1));
seq__11615 = G__11640;
chunk__11616 = G__11641;
count__11617 = G__11642;
i__11618 = G__11643;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11615);if(temp__4126__auto__)
{var seq__11615__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11615__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__11615__$1);{
var G__11644 = cljs.core.chunk_rest.call(null,seq__11615__$1);
var G__11645 = c__4410__auto__;
var G__11646 = cljs.core.count.call(null,c__4410__auto__);
var G__11647 = (0);
seq__11615 = G__11644;
chunk__11616 = G__11645;
count__11617 = G__11646;
i__11618 = G__11647;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__11615__$1);instaparse.failure.print_reason.call(null,r);
{
var G__11648 = cljs.core.next.call(null,seq__11615__$1);
var G__11649 = null;
var G__11650 = (0);
var G__11651 = (0);
seq__11615 = G__11648;
chunk__11616 = G__11649;
count__11617 = G__11650;
i__11618 = G__11651;
continue;
}
}
} else
{return null;
}
}
break;
}
});
