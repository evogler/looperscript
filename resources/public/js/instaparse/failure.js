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
var G__8041 = (line + (1));
var G__8042 = (1);
var G__8043 = (counter + (1));
line = G__8041;
col = G__8042;
counter = G__8043;
continue;
}
} else
{{
var G__8044 = line;
var G__8045 = (col + (1));
var G__8046 = (counter + (1));
line = G__8044;
col = G__8045;
counter = G__8046;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__8047_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__8047_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__8048){var map__8058 = p__8048;var map__8058__$1 = ((cljs.core.seq_QMARK_.call(null,map__8058))?cljs.core.apply.call(null,cljs.core.hash_map,map__8058):map__8058);var reason = cljs.core.get.call(null,map__8058__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__8058__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__8058__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__8058__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__8059_8067 = cljs.core.seq.call(null,full_reasons);var chunk__8060_8068 = null;var count__8061_8069 = (0);var i__8062_8070 = (0);while(true){
if((i__8062_8070 < count__8061_8069))
{var r_8071 = cljs.core._nth.call(null,chunk__8060_8068,i__8062_8070);cljs.core.pr.call(null,r_8071);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__8072 = seq__8059_8067;
var G__8073 = chunk__8060_8068;
var G__8074 = count__8061_8069;
var G__8075 = (i__8062_8070 + (1));
seq__8059_8067 = G__8072;
chunk__8060_8068 = G__8073;
count__8061_8069 = G__8074;
i__8062_8070 = G__8075;
continue;
}
} else
{var temp__4126__auto___8076 = cljs.core.seq.call(null,seq__8059_8067);if(temp__4126__auto___8076)
{var seq__8059_8077__$1 = temp__4126__auto___8076;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8059_8077__$1))
{var c__4410__auto___8078 = cljs.core.chunk_first.call(null,seq__8059_8077__$1);{
var G__8079 = cljs.core.chunk_rest.call(null,seq__8059_8077__$1);
var G__8080 = c__4410__auto___8078;
var G__8081 = cljs.core.count.call(null,c__4410__auto___8078);
var G__8082 = (0);
seq__8059_8067 = G__8079;
chunk__8060_8068 = G__8080;
count__8061_8069 = G__8081;
i__8062_8070 = G__8082;
continue;
}
} else
{var r_8083 = cljs.core.first.call(null,seq__8059_8077__$1);cljs.core.pr.call(null,r_8083);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__8084 = cljs.core.next.call(null,seq__8059_8077__$1);
var G__8085 = null;
var G__8086 = (0);
var G__8087 = (0);
seq__8059_8067 = G__8084;
chunk__8060_8068 = G__8085;
count__8061_8069 = G__8086;
i__8062_8070 = G__8087;
continue;
}
}
} else
{}
}
break;
}
var seq__8063 = cljs.core.seq.call(null,partial_reasons);var chunk__8064 = null;var count__8065 = (0);var i__8066 = (0);while(true){
if((i__8066 < count__8065))
{var r = cljs.core._nth.call(null,chunk__8064,i__8066);instaparse.failure.print_reason.call(null,r);
{
var G__8088 = seq__8063;
var G__8089 = chunk__8064;
var G__8090 = count__8065;
var G__8091 = (i__8066 + (1));
seq__8063 = G__8088;
chunk__8064 = G__8089;
count__8065 = G__8090;
i__8066 = G__8091;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8063);if(temp__4126__auto__)
{var seq__8063__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8063__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__8063__$1);{
var G__8092 = cljs.core.chunk_rest.call(null,seq__8063__$1);
var G__8093 = c__4410__auto__;
var G__8094 = cljs.core.count.call(null,c__4410__auto__);
var G__8095 = (0);
seq__8063 = G__8092;
chunk__8064 = G__8093;
count__8065 = G__8094;
i__8066 = G__8095;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__8063__$1);instaparse.failure.print_reason.call(null,r);
{
var G__8096 = cljs.core.next.call(null,seq__8063__$1);
var G__8097 = null;
var G__8098 = (0);
var G__8099 = (0);
seq__8063 = G__8096;
chunk__8064 = G__8097;
count__8065 = G__8098;
i__8066 = G__8099;
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
