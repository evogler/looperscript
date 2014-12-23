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
var G__48449 = (line + (1));
var G__48450 = (1);
var G__48451 = (counter + (1));
line = G__48449;
col = G__48450;
counter = G__48451;
continue;
}
} else
{{
var G__48452 = line;
var G__48453 = (col + (1));
var G__48454 = (counter + (1));
line = G__48452;
col = G__48453;
counter = G__48454;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__48455_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__48455_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__48456){var map__48466 = p__48456;var map__48466__$1 = ((cljs.core.seq_QMARK_.call(null,map__48466))?cljs.core.apply.call(null,cljs.core.hash_map,map__48466):map__48466);var reason = cljs.core.get.call(null,map__48466__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__48466__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__48466__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__48466__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__48467_48475 = cljs.core.seq.call(null,full_reasons);var chunk__48468_48476 = null;var count__48469_48477 = (0);var i__48470_48478 = (0);while(true){
if((i__48470_48478 < count__48469_48477))
{var r_48479 = cljs.core._nth.call(null,chunk__48468_48476,i__48470_48478);cljs.core.pr.call(null,r_48479);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__48480 = seq__48467_48475;
var G__48481 = chunk__48468_48476;
var G__48482 = count__48469_48477;
var G__48483 = (i__48470_48478 + (1));
seq__48467_48475 = G__48480;
chunk__48468_48476 = G__48481;
count__48469_48477 = G__48482;
i__48470_48478 = G__48483;
continue;
}
} else
{var temp__4126__auto___48484 = cljs.core.seq.call(null,seq__48467_48475);if(temp__4126__auto___48484)
{var seq__48467_48485__$1 = temp__4126__auto___48484;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48467_48485__$1))
{var c__4410__auto___48486 = cljs.core.chunk_first.call(null,seq__48467_48485__$1);{
var G__48487 = cljs.core.chunk_rest.call(null,seq__48467_48485__$1);
var G__48488 = c__4410__auto___48486;
var G__48489 = cljs.core.count.call(null,c__4410__auto___48486);
var G__48490 = (0);
seq__48467_48475 = G__48487;
chunk__48468_48476 = G__48488;
count__48469_48477 = G__48489;
i__48470_48478 = G__48490;
continue;
}
} else
{var r_48491 = cljs.core.first.call(null,seq__48467_48485__$1);cljs.core.pr.call(null,r_48491);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__48492 = cljs.core.next.call(null,seq__48467_48485__$1);
var G__48493 = null;
var G__48494 = (0);
var G__48495 = (0);
seq__48467_48475 = G__48492;
chunk__48468_48476 = G__48493;
count__48469_48477 = G__48494;
i__48470_48478 = G__48495;
continue;
}
}
} else
{}
}
break;
}
var seq__48471 = cljs.core.seq.call(null,partial_reasons);var chunk__48472 = null;var count__48473 = (0);var i__48474 = (0);while(true){
if((i__48474 < count__48473))
{var r = cljs.core._nth.call(null,chunk__48472,i__48474);instaparse.failure.print_reason.call(null,r);
{
var G__48496 = seq__48471;
var G__48497 = chunk__48472;
var G__48498 = count__48473;
var G__48499 = (i__48474 + (1));
seq__48471 = G__48496;
chunk__48472 = G__48497;
count__48473 = G__48498;
i__48474 = G__48499;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__48471);if(temp__4126__auto__)
{var seq__48471__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48471__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__48471__$1);{
var G__48500 = cljs.core.chunk_rest.call(null,seq__48471__$1);
var G__48501 = c__4410__auto__;
var G__48502 = cljs.core.count.call(null,c__4410__auto__);
var G__48503 = (0);
seq__48471 = G__48500;
chunk__48472 = G__48501;
count__48473 = G__48502;
i__48474 = G__48503;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__48471__$1);instaparse.failure.print_reason.call(null,r);
{
var G__48504 = cljs.core.next.call(null,seq__48471__$1);
var G__48505 = null;
var G__48506 = (0);
var G__48507 = (0);
seq__48471 = G__48504;
chunk__48472 = G__48505;
count__48473 = G__48506;
i__48474 = G__48507;
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
