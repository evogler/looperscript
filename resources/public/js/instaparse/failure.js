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
var G__32114 = (line + (1));
var G__32115 = (1);
var G__32116 = (counter + (1));
line = G__32114;
col = G__32115;
counter = G__32116;
continue;
}
} else
{{
var G__32117 = line;
var G__32118 = (col + (1));
var G__32119 = (counter + (1));
line = G__32117;
col = G__32118;
counter = G__32119;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__32120_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__32120_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__32121){var map__32131 = p__32121;var map__32131__$1 = ((cljs.core.seq_QMARK_.call(null,map__32131))?cljs.core.apply.call(null,cljs.core.hash_map,map__32131):map__32131);var reason = cljs.core.get.call(null,map__32131__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__32131__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__32131__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__32131__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__32132_32140 = cljs.core.seq.call(null,full_reasons);var chunk__32133_32141 = null;var count__32134_32142 = (0);var i__32135_32143 = (0);while(true){
if((i__32135_32143 < count__32134_32142))
{var r_32144 = cljs.core._nth.call(null,chunk__32133_32141,i__32135_32143);cljs.core.pr.call(null,r_32144);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__32145 = seq__32132_32140;
var G__32146 = chunk__32133_32141;
var G__32147 = count__32134_32142;
var G__32148 = (i__32135_32143 + (1));
seq__32132_32140 = G__32145;
chunk__32133_32141 = G__32146;
count__32134_32142 = G__32147;
i__32135_32143 = G__32148;
continue;
}
} else
{var temp__4126__auto___32149 = cljs.core.seq.call(null,seq__32132_32140);if(temp__4126__auto___32149)
{var seq__32132_32150__$1 = temp__4126__auto___32149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32132_32150__$1))
{var c__4410__auto___32151 = cljs.core.chunk_first.call(null,seq__32132_32150__$1);{
var G__32152 = cljs.core.chunk_rest.call(null,seq__32132_32150__$1);
var G__32153 = c__4410__auto___32151;
var G__32154 = cljs.core.count.call(null,c__4410__auto___32151);
var G__32155 = (0);
seq__32132_32140 = G__32152;
chunk__32133_32141 = G__32153;
count__32134_32142 = G__32154;
i__32135_32143 = G__32155;
continue;
}
} else
{var r_32156 = cljs.core.first.call(null,seq__32132_32150__$1);cljs.core.pr.call(null,r_32156);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__32157 = cljs.core.next.call(null,seq__32132_32150__$1);
var G__32158 = null;
var G__32159 = (0);
var G__32160 = (0);
seq__32132_32140 = G__32157;
chunk__32133_32141 = G__32158;
count__32134_32142 = G__32159;
i__32135_32143 = G__32160;
continue;
}
}
} else
{}
}
break;
}
var seq__32136 = cljs.core.seq.call(null,partial_reasons);var chunk__32137 = null;var count__32138 = (0);var i__32139 = (0);while(true){
if((i__32139 < count__32138))
{var r = cljs.core._nth.call(null,chunk__32137,i__32139);instaparse.failure.print_reason.call(null,r);
{
var G__32161 = seq__32136;
var G__32162 = chunk__32137;
var G__32163 = count__32138;
var G__32164 = (i__32139 + (1));
seq__32136 = G__32161;
chunk__32137 = G__32162;
count__32138 = G__32163;
i__32139 = G__32164;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32136);if(temp__4126__auto__)
{var seq__32136__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32136__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__32136__$1);{
var G__32165 = cljs.core.chunk_rest.call(null,seq__32136__$1);
var G__32166 = c__4410__auto__;
var G__32167 = cljs.core.count.call(null,c__4410__auto__);
var G__32168 = (0);
seq__32136 = G__32165;
chunk__32137 = G__32166;
count__32138 = G__32167;
i__32139 = G__32168;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__32136__$1);instaparse.failure.print_reason.call(null,r);
{
var G__32169 = cljs.core.next.call(null,seq__32136__$1);
var G__32170 = null;
var G__32171 = (0);
var G__32172 = (0);
seq__32136 = G__32169;
chunk__32137 = G__32170;
count__32138 = G__32171;
i__32139 = G__32172;
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
