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
var G__13970 = (line + (1));
var G__13971 = (1);
var G__13972 = (counter + (1));
line = G__13970;
col = G__13971;
counter = G__13972;
continue;
}
} else
{{
var G__13973 = line;
var G__13974 = (col + (1));
var G__13975 = (counter + (1));
line = G__13973;
col = G__13974;
counter = G__13975;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__13976_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__13976_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__13977){var map__13987 = p__13977;var map__13987__$1 = ((cljs.core.seq_QMARK_.call(null,map__13987))?cljs.core.apply.call(null,cljs.core.hash_map,map__13987):map__13987);var reason = cljs.core.get.call(null,map__13987__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__13987__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__13987__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__13987__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__13988_13996 = cljs.core.seq.call(null,full_reasons);var chunk__13989_13997 = null;var count__13990_13998 = (0);var i__13991_13999 = (0);while(true){
if((i__13991_13999 < count__13990_13998))
{var r_14000 = cljs.core._nth.call(null,chunk__13989_13997,i__13991_13999);cljs.core.pr.call(null,r_14000);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__14001 = seq__13988_13996;
var G__14002 = chunk__13989_13997;
var G__14003 = count__13990_13998;
var G__14004 = (i__13991_13999 + (1));
seq__13988_13996 = G__14001;
chunk__13989_13997 = G__14002;
count__13990_13998 = G__14003;
i__13991_13999 = G__14004;
continue;
}
} else
{var temp__4126__auto___14005 = cljs.core.seq.call(null,seq__13988_13996);if(temp__4126__auto___14005)
{var seq__13988_14006__$1 = temp__4126__auto___14005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13988_14006__$1))
{var c__4410__auto___14007 = cljs.core.chunk_first.call(null,seq__13988_14006__$1);{
var G__14008 = cljs.core.chunk_rest.call(null,seq__13988_14006__$1);
var G__14009 = c__4410__auto___14007;
var G__14010 = cljs.core.count.call(null,c__4410__auto___14007);
var G__14011 = (0);
seq__13988_13996 = G__14008;
chunk__13989_13997 = G__14009;
count__13990_13998 = G__14010;
i__13991_13999 = G__14011;
continue;
}
} else
{var r_14012 = cljs.core.first.call(null,seq__13988_14006__$1);cljs.core.pr.call(null,r_14012);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__14013 = cljs.core.next.call(null,seq__13988_14006__$1);
var G__14014 = null;
var G__14015 = (0);
var G__14016 = (0);
seq__13988_13996 = G__14013;
chunk__13989_13997 = G__14014;
count__13990_13998 = G__14015;
i__13991_13999 = G__14016;
continue;
}
}
} else
{}
}
break;
}
var seq__13992 = cljs.core.seq.call(null,partial_reasons);var chunk__13993 = null;var count__13994 = (0);var i__13995 = (0);while(true){
if((i__13995 < count__13994))
{var r = cljs.core._nth.call(null,chunk__13993,i__13995);instaparse.failure.print_reason.call(null,r);
{
var G__14017 = seq__13992;
var G__14018 = chunk__13993;
var G__14019 = count__13994;
var G__14020 = (i__13995 + (1));
seq__13992 = G__14017;
chunk__13993 = G__14018;
count__13994 = G__14019;
i__13995 = G__14020;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13992);if(temp__4126__auto__)
{var seq__13992__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13992__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__13992__$1);{
var G__14021 = cljs.core.chunk_rest.call(null,seq__13992__$1);
var G__14022 = c__4410__auto__;
var G__14023 = cljs.core.count.call(null,c__4410__auto__);
var G__14024 = (0);
seq__13992 = G__14021;
chunk__13993 = G__14022;
count__13994 = G__14023;
i__13995 = G__14024;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__13992__$1);instaparse.failure.print_reason.call(null,r);
{
var G__14025 = cljs.core.next.call(null,seq__13992__$1);
var G__14026 = null;
var G__14027 = (0);
var G__14028 = (0);
seq__13992 = G__14025;
chunk__13993 = G__14026;
count__13994 = G__14027;
i__13995 = G__14028;
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
