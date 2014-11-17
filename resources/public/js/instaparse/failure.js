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
var G__14994 = (line + (1));
var G__14995 = (1);
var G__14996 = (counter + (1));
line = G__14994;
col = G__14995;
counter = G__14996;
continue;
}
} else
{{
var G__14997 = line;
var G__14998 = (col + (1));
var G__14999 = (counter + (1));
line = G__14997;
col = G__14998;
counter = G__14999;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__15000_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__15000_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__15001){var map__15011 = p__15001;var map__15011__$1 = ((cljs.core.seq_QMARK_.call(null,map__15011))?cljs.core.apply.call(null,cljs.core.hash_map,map__15011):map__15011);var reason = cljs.core.get.call(null,map__15011__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__15011__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__15011__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__15011__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__15012_15020 = cljs.core.seq.call(null,full_reasons);var chunk__15013_15021 = null;var count__15014_15022 = (0);var i__15015_15023 = (0);while(true){
if((i__15015_15023 < count__15014_15022))
{var r_15024 = cljs.core._nth.call(null,chunk__15013_15021,i__15015_15023);cljs.core.pr.call(null,r_15024);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__15025 = seq__15012_15020;
var G__15026 = chunk__15013_15021;
var G__15027 = count__15014_15022;
var G__15028 = (i__15015_15023 + (1));
seq__15012_15020 = G__15025;
chunk__15013_15021 = G__15026;
count__15014_15022 = G__15027;
i__15015_15023 = G__15028;
continue;
}
} else
{var temp__4126__auto___15029 = cljs.core.seq.call(null,seq__15012_15020);if(temp__4126__auto___15029)
{var seq__15012_15030__$1 = temp__4126__auto___15029;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15012_15030__$1))
{var c__4410__auto___15031 = cljs.core.chunk_first.call(null,seq__15012_15030__$1);{
var G__15032 = cljs.core.chunk_rest.call(null,seq__15012_15030__$1);
var G__15033 = c__4410__auto___15031;
var G__15034 = cljs.core.count.call(null,c__4410__auto___15031);
var G__15035 = (0);
seq__15012_15020 = G__15032;
chunk__15013_15021 = G__15033;
count__15014_15022 = G__15034;
i__15015_15023 = G__15035;
continue;
}
} else
{var r_15036 = cljs.core.first.call(null,seq__15012_15030__$1);cljs.core.pr.call(null,r_15036);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__15037 = cljs.core.next.call(null,seq__15012_15030__$1);
var G__15038 = null;
var G__15039 = (0);
var G__15040 = (0);
seq__15012_15020 = G__15037;
chunk__15013_15021 = G__15038;
count__15014_15022 = G__15039;
i__15015_15023 = G__15040;
continue;
}
}
} else
{}
}
break;
}
var seq__15016 = cljs.core.seq.call(null,partial_reasons);var chunk__15017 = null;var count__15018 = (0);var i__15019 = (0);while(true){
if((i__15019 < count__15018))
{var r = cljs.core._nth.call(null,chunk__15017,i__15019);instaparse.failure.print_reason.call(null,r);
{
var G__15041 = seq__15016;
var G__15042 = chunk__15017;
var G__15043 = count__15018;
var G__15044 = (i__15019 + (1));
seq__15016 = G__15041;
chunk__15017 = G__15042;
count__15018 = G__15043;
i__15019 = G__15044;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__15016);if(temp__4126__auto__)
{var seq__15016__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15016__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__15016__$1);{
var G__15045 = cljs.core.chunk_rest.call(null,seq__15016__$1);
var G__15046 = c__4410__auto__;
var G__15047 = cljs.core.count.call(null,c__4410__auto__);
var G__15048 = (0);
seq__15016 = G__15045;
chunk__15017 = G__15046;
count__15018 = G__15047;
i__15019 = G__15048;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__15016__$1);instaparse.failure.print_reason.call(null,r);
{
var G__15049 = cljs.core.next.call(null,seq__15016__$1);
var G__15050 = null;
var G__15051 = (0);
var G__15052 = (0);
seq__15016 = G__15049;
chunk__15017 = G__15050;
count__15018 = G__15051;
i__15019 = G__15052;
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
