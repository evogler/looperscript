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
var G__10565 = (line + (1));
var G__10566 = (1);
var G__10567 = (counter + (1));
line = G__10565;
col = G__10566;
counter = G__10567;
continue;
}
} else
{{
var G__10568 = line;
var G__10569 = (col + (1));
var G__10570 = (counter + (1));
line = G__10568;
col = G__10569;
counter = G__10570;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__10571_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__10571_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__10572){var map__10582 = p__10572;var map__10582__$1 = ((cljs.core.seq_QMARK_.call(null,map__10582))?cljs.core.apply.call(null,cljs.core.hash_map,map__10582):map__10582);var reason = cljs.core.get.call(null,map__10582__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__10582__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__10582__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__10582__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__10583_10591 = cljs.core.seq.call(null,full_reasons);var chunk__10584_10592 = null;var count__10585_10593 = (0);var i__10586_10594 = (0);while(true){
if((i__10586_10594 < count__10585_10593))
{var r_10595 = cljs.core._nth.call(null,chunk__10584_10592,i__10586_10594);cljs.core.pr.call(null,r_10595);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__10596 = seq__10583_10591;
var G__10597 = chunk__10584_10592;
var G__10598 = count__10585_10593;
var G__10599 = (i__10586_10594 + (1));
seq__10583_10591 = G__10596;
chunk__10584_10592 = G__10597;
count__10585_10593 = G__10598;
i__10586_10594 = G__10599;
continue;
}
} else
{var temp__4126__auto___10600 = cljs.core.seq.call(null,seq__10583_10591);if(temp__4126__auto___10600)
{var seq__10583_10601__$1 = temp__4126__auto___10600;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10583_10601__$1))
{var c__4410__auto___10602 = cljs.core.chunk_first.call(null,seq__10583_10601__$1);{
var G__10603 = cljs.core.chunk_rest.call(null,seq__10583_10601__$1);
var G__10604 = c__4410__auto___10602;
var G__10605 = cljs.core.count.call(null,c__4410__auto___10602);
var G__10606 = (0);
seq__10583_10591 = G__10603;
chunk__10584_10592 = G__10604;
count__10585_10593 = G__10605;
i__10586_10594 = G__10606;
continue;
}
} else
{var r_10607 = cljs.core.first.call(null,seq__10583_10601__$1);cljs.core.pr.call(null,r_10607);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__10608 = cljs.core.next.call(null,seq__10583_10601__$1);
var G__10609 = null;
var G__10610 = (0);
var G__10611 = (0);
seq__10583_10591 = G__10608;
chunk__10584_10592 = G__10609;
count__10585_10593 = G__10610;
i__10586_10594 = G__10611;
continue;
}
}
} else
{}
}
break;
}
var seq__10587 = cljs.core.seq.call(null,partial_reasons);var chunk__10588 = null;var count__10589 = (0);var i__10590 = (0);while(true){
if((i__10590 < count__10589))
{var r = cljs.core._nth.call(null,chunk__10588,i__10590);instaparse.failure.print_reason.call(null,r);
{
var G__10612 = seq__10587;
var G__10613 = chunk__10588;
var G__10614 = count__10589;
var G__10615 = (i__10590 + (1));
seq__10587 = G__10612;
chunk__10588 = G__10613;
count__10589 = G__10614;
i__10590 = G__10615;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10587);if(temp__4126__auto__)
{var seq__10587__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10587__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__10587__$1);{
var G__10616 = cljs.core.chunk_rest.call(null,seq__10587__$1);
var G__10617 = c__4410__auto__;
var G__10618 = cljs.core.count.call(null,c__4410__auto__);
var G__10619 = (0);
seq__10587 = G__10616;
chunk__10588 = G__10617;
count__10589 = G__10618;
i__10590 = G__10619;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__10587__$1);instaparse.failure.print_reason.call(null,r);
{
var G__10620 = cljs.core.next.call(null,seq__10587__$1);
var G__10621 = null;
var G__10622 = (0);
var G__10623 = (0);
seq__10587 = G__10620;
chunk__10588 = G__10621;
count__10589 = G__10622;
i__10590 = G__10623;
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
