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
var G__34552 = (line + (1));
var G__34553 = (1);
var G__34554 = (counter + (1));
line = G__34552;
col = G__34553;
counter = G__34554;
continue;
}
} else
{{
var G__34555 = line;
var G__34556 = (col + (1));
var G__34557 = (counter + (1));
line = G__34555;
col = G__34556;
counter = G__34557;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__34558_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__34558_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__34559){var map__34569 = p__34559;var map__34569__$1 = ((cljs.core.seq_QMARK_.call(null,map__34569))?cljs.core.apply.call(null,cljs.core.hash_map,map__34569):map__34569);var reason = cljs.core.get.call(null,map__34569__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__34569__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__34569__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__34569__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__34570_34578 = cljs.core.seq.call(null,full_reasons);var chunk__34571_34579 = null;var count__34572_34580 = (0);var i__34573_34581 = (0);while(true){
if((i__34573_34581 < count__34572_34580))
{var r_34582 = cljs.core._nth.call(null,chunk__34571_34579,i__34573_34581);cljs.core.pr.call(null,r_34582);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__34583 = seq__34570_34578;
var G__34584 = chunk__34571_34579;
var G__34585 = count__34572_34580;
var G__34586 = (i__34573_34581 + (1));
seq__34570_34578 = G__34583;
chunk__34571_34579 = G__34584;
count__34572_34580 = G__34585;
i__34573_34581 = G__34586;
continue;
}
} else
{var temp__4126__auto___34587 = cljs.core.seq.call(null,seq__34570_34578);if(temp__4126__auto___34587)
{var seq__34570_34588__$1 = temp__4126__auto___34587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34570_34588__$1))
{var c__4410__auto___34589 = cljs.core.chunk_first.call(null,seq__34570_34588__$1);{
var G__34590 = cljs.core.chunk_rest.call(null,seq__34570_34588__$1);
var G__34591 = c__4410__auto___34589;
var G__34592 = cljs.core.count.call(null,c__4410__auto___34589);
var G__34593 = (0);
seq__34570_34578 = G__34590;
chunk__34571_34579 = G__34591;
count__34572_34580 = G__34592;
i__34573_34581 = G__34593;
continue;
}
} else
{var r_34594 = cljs.core.first.call(null,seq__34570_34588__$1);cljs.core.pr.call(null,r_34594);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__34595 = cljs.core.next.call(null,seq__34570_34588__$1);
var G__34596 = null;
var G__34597 = (0);
var G__34598 = (0);
seq__34570_34578 = G__34595;
chunk__34571_34579 = G__34596;
count__34572_34580 = G__34597;
i__34573_34581 = G__34598;
continue;
}
}
} else
{}
}
break;
}
var seq__34574 = cljs.core.seq.call(null,partial_reasons);var chunk__34575 = null;var count__34576 = (0);var i__34577 = (0);while(true){
if((i__34577 < count__34576))
{var r = cljs.core._nth.call(null,chunk__34575,i__34577);instaparse.failure.print_reason.call(null,r);
{
var G__34599 = seq__34574;
var G__34600 = chunk__34575;
var G__34601 = count__34576;
var G__34602 = (i__34577 + (1));
seq__34574 = G__34599;
chunk__34575 = G__34600;
count__34576 = G__34601;
i__34577 = G__34602;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__34574);if(temp__4126__auto__)
{var seq__34574__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34574__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__34574__$1);{
var G__34603 = cljs.core.chunk_rest.call(null,seq__34574__$1);
var G__34604 = c__4410__auto__;
var G__34605 = cljs.core.count.call(null,c__4410__auto__);
var G__34606 = (0);
seq__34574 = G__34603;
chunk__34575 = G__34604;
count__34576 = G__34605;
i__34577 = G__34606;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__34574__$1);instaparse.failure.print_reason.call(null,r);
{
var G__34607 = cljs.core.next.call(null,seq__34574__$1);
var G__34608 = null;
var G__34609 = (0);
var G__34610 = (0);
seq__34574 = G__34607;
chunk__34575 = G__34608;
count__34576 = G__34609;
i__34577 = G__34610;
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
