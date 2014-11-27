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
var G__7984 = (line + (1));
var G__7985 = (1);
var G__7986 = (counter + (1));
line = G__7984;
col = G__7985;
counter = G__7986;
continue;
}
} else
{{
var G__7987 = line;
var G__7988 = (col + (1));
var G__7989 = (counter + (1));
line = G__7987;
col = G__7988;
counter = G__7989;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__7990_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__7990_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__7991){var map__8001 = p__7991;var map__8001__$1 = ((cljs.core.seq_QMARK_.call(null,map__8001))?cljs.core.apply.call(null,cljs.core.hash_map,map__8001):map__8001);var reason = cljs.core.get.call(null,map__8001__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__8001__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__8001__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__8001__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__8002_8010 = cljs.core.seq.call(null,full_reasons);var chunk__8003_8011 = null;var count__8004_8012 = (0);var i__8005_8013 = (0);while(true){
if((i__8005_8013 < count__8004_8012))
{var r_8014 = cljs.core._nth.call(null,chunk__8003_8011,i__8005_8013);cljs.core.pr.call(null,r_8014);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__8015 = seq__8002_8010;
var G__8016 = chunk__8003_8011;
var G__8017 = count__8004_8012;
var G__8018 = (i__8005_8013 + (1));
seq__8002_8010 = G__8015;
chunk__8003_8011 = G__8016;
count__8004_8012 = G__8017;
i__8005_8013 = G__8018;
continue;
}
} else
{var temp__4126__auto___8019 = cljs.core.seq.call(null,seq__8002_8010);if(temp__4126__auto___8019)
{var seq__8002_8020__$1 = temp__4126__auto___8019;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8002_8020__$1))
{var c__4410__auto___8021 = cljs.core.chunk_first.call(null,seq__8002_8020__$1);{
var G__8022 = cljs.core.chunk_rest.call(null,seq__8002_8020__$1);
var G__8023 = c__4410__auto___8021;
var G__8024 = cljs.core.count.call(null,c__4410__auto___8021);
var G__8025 = (0);
seq__8002_8010 = G__8022;
chunk__8003_8011 = G__8023;
count__8004_8012 = G__8024;
i__8005_8013 = G__8025;
continue;
}
} else
{var r_8026 = cljs.core.first.call(null,seq__8002_8020__$1);cljs.core.pr.call(null,r_8026);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__8027 = cljs.core.next.call(null,seq__8002_8020__$1);
var G__8028 = null;
var G__8029 = (0);
var G__8030 = (0);
seq__8002_8010 = G__8027;
chunk__8003_8011 = G__8028;
count__8004_8012 = G__8029;
i__8005_8013 = G__8030;
continue;
}
}
} else
{}
}
break;
}
var seq__8006 = cljs.core.seq.call(null,partial_reasons);var chunk__8007 = null;var count__8008 = (0);var i__8009 = (0);while(true){
if((i__8009 < count__8008))
{var r = cljs.core._nth.call(null,chunk__8007,i__8009);instaparse.failure.print_reason.call(null,r);
{
var G__8031 = seq__8006;
var G__8032 = chunk__8007;
var G__8033 = count__8008;
var G__8034 = (i__8009 + (1));
seq__8006 = G__8031;
chunk__8007 = G__8032;
count__8008 = G__8033;
i__8009 = G__8034;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8006);if(temp__4126__auto__)
{var seq__8006__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8006__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__8006__$1);{
var G__8035 = cljs.core.chunk_rest.call(null,seq__8006__$1);
var G__8036 = c__4410__auto__;
var G__8037 = cljs.core.count.call(null,c__4410__auto__);
var G__8038 = (0);
seq__8006 = G__8035;
chunk__8007 = G__8036;
count__8008 = G__8037;
i__8009 = G__8038;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8006__$1);instaparse.failure.print_reason.call(null,r);
{
var G__8039 = cljs.core.next.call(null,seq__8006__$1);
var G__8040 = null;
var G__8041 = (0);
var G__8042 = (0);
seq__8006 = G__8039;
chunk__8007 = G__8040;
count__8008 = G__8041;
i__8009 = G__8042;
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
