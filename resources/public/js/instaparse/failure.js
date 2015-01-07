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
var G__21461 = (line + (1));
var G__21462 = (1);
var G__21463 = (counter + (1));
line = G__21461;
col = G__21462;
counter = G__21463;
continue;
}
} else
{{
var G__21464 = line;
var G__21465 = (col + (1));
var G__21466 = (counter + (1));
line = G__21464;
col = G__21465;
counter = G__21466;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__21467_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__21467_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__21468){var map__21478 = p__21468;var map__21478__$1 = ((cljs.core.seq_QMARK_.call(null,map__21478))?cljs.core.apply.call(null,cljs.core.hash_map,map__21478):map__21478);var reason = cljs.core.get.call(null,map__21478__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__21478__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__21478__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__21478__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__21479_21487 = cljs.core.seq.call(null,full_reasons);var chunk__21480_21488 = null;var count__21481_21489 = (0);var i__21482_21490 = (0);while(true){
if((i__21482_21490 < count__21481_21489))
{var r_21491 = cljs.core._nth.call(null,chunk__21480_21488,i__21482_21490);cljs.core.pr.call(null,r_21491);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__21492 = seq__21479_21487;
var G__21493 = chunk__21480_21488;
var G__21494 = count__21481_21489;
var G__21495 = (i__21482_21490 + (1));
seq__21479_21487 = G__21492;
chunk__21480_21488 = G__21493;
count__21481_21489 = G__21494;
i__21482_21490 = G__21495;
continue;
}
} else
{var temp__4126__auto___21496 = cljs.core.seq.call(null,seq__21479_21487);if(temp__4126__auto___21496)
{var seq__21479_21497__$1 = temp__4126__auto___21496;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21479_21497__$1))
{var c__4410__auto___21498 = cljs.core.chunk_first.call(null,seq__21479_21497__$1);{
var G__21499 = cljs.core.chunk_rest.call(null,seq__21479_21497__$1);
var G__21500 = c__4410__auto___21498;
var G__21501 = cljs.core.count.call(null,c__4410__auto___21498);
var G__21502 = (0);
seq__21479_21487 = G__21499;
chunk__21480_21488 = G__21500;
count__21481_21489 = G__21501;
i__21482_21490 = G__21502;
continue;
}
} else
{var r_21503 = cljs.core.first.call(null,seq__21479_21497__$1);cljs.core.pr.call(null,r_21503);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__21504 = cljs.core.next.call(null,seq__21479_21497__$1);
var G__21505 = null;
var G__21506 = (0);
var G__21507 = (0);
seq__21479_21487 = G__21504;
chunk__21480_21488 = G__21505;
count__21481_21489 = G__21506;
i__21482_21490 = G__21507;
continue;
}
}
} else
{}
}
break;
}
var seq__21483 = cljs.core.seq.call(null,partial_reasons);var chunk__21484 = null;var count__21485 = (0);var i__21486 = (0);while(true){
if((i__21486 < count__21485))
{var r = cljs.core._nth.call(null,chunk__21484,i__21486);instaparse.failure.print_reason.call(null,r);
{
var G__21508 = seq__21483;
var G__21509 = chunk__21484;
var G__21510 = count__21485;
var G__21511 = (i__21486 + (1));
seq__21483 = G__21508;
chunk__21484 = G__21509;
count__21485 = G__21510;
i__21486 = G__21511;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21483);if(temp__4126__auto__)
{var seq__21483__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21483__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__21483__$1);{
var G__21512 = cljs.core.chunk_rest.call(null,seq__21483__$1);
var G__21513 = c__4410__auto__;
var G__21514 = cljs.core.count.call(null,c__4410__auto__);
var G__21515 = (0);
seq__21483 = G__21512;
chunk__21484 = G__21513;
count__21485 = G__21514;
i__21486 = G__21515;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__21483__$1);instaparse.failure.print_reason.call(null,r);
{
var G__21516 = cljs.core.next.call(null,seq__21483__$1);
var G__21517 = null;
var G__21518 = (0);
var G__21519 = (0);
seq__21483 = G__21516;
chunk__21484 = G__21517;
count__21485 = G__21518;
i__21486 = G__21519;
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
