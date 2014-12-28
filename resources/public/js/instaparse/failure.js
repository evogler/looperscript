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
var G__20875 = (line + (1));
var G__20876 = (1);
var G__20877 = (counter + (1));
line = G__20875;
col = G__20876;
counter = G__20877;
continue;
}
} else
{{
var G__20878 = line;
var G__20879 = (col + (1));
var G__20880 = (counter + (1));
line = G__20878;
col = G__20879;
counter = G__20880;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__20881_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__20881_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__20882){var map__20892 = p__20882;var map__20892__$1 = ((cljs.core.seq_QMARK_.call(null,map__20892))?cljs.core.apply.call(null,cljs.core.hash_map,map__20892):map__20892);var reason = cljs.core.get.call(null,map__20892__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__20892__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__20892__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__20892__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__20893_20901 = cljs.core.seq.call(null,full_reasons);var chunk__20894_20902 = null;var count__20895_20903 = (0);var i__20896_20904 = (0);while(true){
if((i__20896_20904 < count__20895_20903))
{var r_20905 = cljs.core._nth.call(null,chunk__20894_20902,i__20896_20904);cljs.core.pr.call(null,r_20905);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__20906 = seq__20893_20901;
var G__20907 = chunk__20894_20902;
var G__20908 = count__20895_20903;
var G__20909 = (i__20896_20904 + (1));
seq__20893_20901 = G__20906;
chunk__20894_20902 = G__20907;
count__20895_20903 = G__20908;
i__20896_20904 = G__20909;
continue;
}
} else
{var temp__4126__auto___20910 = cljs.core.seq.call(null,seq__20893_20901);if(temp__4126__auto___20910)
{var seq__20893_20911__$1 = temp__4126__auto___20910;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20893_20911__$1))
{var c__4410__auto___20912 = cljs.core.chunk_first.call(null,seq__20893_20911__$1);{
var G__20913 = cljs.core.chunk_rest.call(null,seq__20893_20911__$1);
var G__20914 = c__4410__auto___20912;
var G__20915 = cljs.core.count.call(null,c__4410__auto___20912);
var G__20916 = (0);
seq__20893_20901 = G__20913;
chunk__20894_20902 = G__20914;
count__20895_20903 = G__20915;
i__20896_20904 = G__20916;
continue;
}
} else
{var r_20917 = cljs.core.first.call(null,seq__20893_20911__$1);cljs.core.pr.call(null,r_20917);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__20918 = cljs.core.next.call(null,seq__20893_20911__$1);
var G__20919 = null;
var G__20920 = (0);
var G__20921 = (0);
seq__20893_20901 = G__20918;
chunk__20894_20902 = G__20919;
count__20895_20903 = G__20920;
i__20896_20904 = G__20921;
continue;
}
}
} else
{}
}
break;
}
var seq__20897 = cljs.core.seq.call(null,partial_reasons);var chunk__20898 = null;var count__20899 = (0);var i__20900 = (0);while(true){
if((i__20900 < count__20899))
{var r = cljs.core._nth.call(null,chunk__20898,i__20900);instaparse.failure.print_reason.call(null,r);
{
var G__20922 = seq__20897;
var G__20923 = chunk__20898;
var G__20924 = count__20899;
var G__20925 = (i__20900 + (1));
seq__20897 = G__20922;
chunk__20898 = G__20923;
count__20899 = G__20924;
i__20900 = G__20925;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20897);if(temp__4126__auto__)
{var seq__20897__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20897__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__20897__$1);{
var G__20926 = cljs.core.chunk_rest.call(null,seq__20897__$1);
var G__20927 = c__4410__auto__;
var G__20928 = cljs.core.count.call(null,c__4410__auto__);
var G__20929 = (0);
seq__20897 = G__20926;
chunk__20898 = G__20927;
count__20899 = G__20928;
i__20900 = G__20929;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__20897__$1);instaparse.failure.print_reason.call(null,r);
{
var G__20930 = cljs.core.next.call(null,seq__20897__$1);
var G__20931 = null;
var G__20932 = (0);
var G__20933 = (0);
seq__20897 = G__20930;
chunk__20898 = G__20931;
count__20899 = G__20932;
i__20900 = G__20933;
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
