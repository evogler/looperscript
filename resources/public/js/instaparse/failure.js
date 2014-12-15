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
var G__45075 = (line + (1));
var G__45076 = (1);
var G__45077 = (counter + (1));
line = G__45075;
col = G__45076;
counter = G__45077;
continue;
}
} else
{{
var G__45078 = line;
var G__45079 = (col + (1));
var G__45080 = (counter + (1));
line = G__45078;
col = G__45079;
counter = G__45080;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__45081_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__45081_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__45082){var map__45092 = p__45082;var map__45092__$1 = ((cljs.core.seq_QMARK_.call(null,map__45092))?cljs.core.apply.call(null,cljs.core.hash_map,map__45092):map__45092);var reason = cljs.core.get.call(null,map__45092__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__45092__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__45092__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__45092__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__45093_45101 = cljs.core.seq.call(null,full_reasons);var chunk__45094_45102 = null;var count__45095_45103 = (0);var i__45096_45104 = (0);while(true){
if((i__45096_45104 < count__45095_45103))
{var r_45105 = cljs.core._nth.call(null,chunk__45094_45102,i__45096_45104);cljs.core.pr.call(null,r_45105);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__45106 = seq__45093_45101;
var G__45107 = chunk__45094_45102;
var G__45108 = count__45095_45103;
var G__45109 = (i__45096_45104 + (1));
seq__45093_45101 = G__45106;
chunk__45094_45102 = G__45107;
count__45095_45103 = G__45108;
i__45096_45104 = G__45109;
continue;
}
} else
{var temp__4126__auto___45110 = cljs.core.seq.call(null,seq__45093_45101);if(temp__4126__auto___45110)
{var seq__45093_45111__$1 = temp__4126__auto___45110;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45093_45111__$1))
{var c__4410__auto___45112 = cljs.core.chunk_first.call(null,seq__45093_45111__$1);{
var G__45113 = cljs.core.chunk_rest.call(null,seq__45093_45111__$1);
var G__45114 = c__4410__auto___45112;
var G__45115 = cljs.core.count.call(null,c__4410__auto___45112);
var G__45116 = (0);
seq__45093_45101 = G__45113;
chunk__45094_45102 = G__45114;
count__45095_45103 = G__45115;
i__45096_45104 = G__45116;
continue;
}
} else
{var r_45117 = cljs.core.first.call(null,seq__45093_45111__$1);cljs.core.pr.call(null,r_45117);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__45118 = cljs.core.next.call(null,seq__45093_45111__$1);
var G__45119 = null;
var G__45120 = (0);
var G__45121 = (0);
seq__45093_45101 = G__45118;
chunk__45094_45102 = G__45119;
count__45095_45103 = G__45120;
i__45096_45104 = G__45121;
continue;
}
}
} else
{}
}
break;
}
var seq__45097 = cljs.core.seq.call(null,partial_reasons);var chunk__45098 = null;var count__45099 = (0);var i__45100 = (0);while(true){
if((i__45100 < count__45099))
{var r = cljs.core._nth.call(null,chunk__45098,i__45100);instaparse.failure.print_reason.call(null,r);
{
var G__45122 = seq__45097;
var G__45123 = chunk__45098;
var G__45124 = count__45099;
var G__45125 = (i__45100 + (1));
seq__45097 = G__45122;
chunk__45098 = G__45123;
count__45099 = G__45124;
i__45100 = G__45125;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__45097);if(temp__4126__auto__)
{var seq__45097__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45097__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__45097__$1);{
var G__45126 = cljs.core.chunk_rest.call(null,seq__45097__$1);
var G__45127 = c__4410__auto__;
var G__45128 = cljs.core.count.call(null,c__4410__auto__);
var G__45129 = (0);
seq__45097 = G__45126;
chunk__45098 = G__45127;
count__45099 = G__45128;
i__45100 = G__45129;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__45097__$1);instaparse.failure.print_reason.call(null,r);
{
var G__45130 = cljs.core.next.call(null,seq__45097__$1);
var G__45131 = null;
var G__45132 = (0);
var G__45133 = (0);
seq__45097 = G__45130;
chunk__45098 = G__45131;
count__45099 = G__45132;
i__45100 = G__45133;
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
