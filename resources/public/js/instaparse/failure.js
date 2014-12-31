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
var G__28953 = (line + (1));
var G__28954 = (1);
var G__28955 = (counter + (1));
line = G__28953;
col = G__28954;
counter = G__28955;
continue;
}
} else
{{
var G__28956 = line;
var G__28957 = (col + (1));
var G__28958 = (counter + (1));
line = G__28956;
col = G__28957;
counter = G__28958;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__28959_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__28959_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__28960){var map__28970 = p__28960;var map__28970__$1 = ((cljs.core.seq_QMARK_.call(null,map__28970))?cljs.core.apply.call(null,cljs.core.hash_map,map__28970):map__28970);var reason = cljs.core.get.call(null,map__28970__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__28970__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__28970__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__28970__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__28971_28979 = cljs.core.seq.call(null,full_reasons);var chunk__28972_28980 = null;var count__28973_28981 = (0);var i__28974_28982 = (0);while(true){
if((i__28974_28982 < count__28973_28981))
{var r_28983 = cljs.core._nth.call(null,chunk__28972_28980,i__28974_28982);cljs.core.pr.call(null,r_28983);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__28984 = seq__28971_28979;
var G__28985 = chunk__28972_28980;
var G__28986 = count__28973_28981;
var G__28987 = (i__28974_28982 + (1));
seq__28971_28979 = G__28984;
chunk__28972_28980 = G__28985;
count__28973_28981 = G__28986;
i__28974_28982 = G__28987;
continue;
}
} else
{var temp__4126__auto___28988 = cljs.core.seq.call(null,seq__28971_28979);if(temp__4126__auto___28988)
{var seq__28971_28989__$1 = temp__4126__auto___28988;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28971_28989__$1))
{var c__4410__auto___28990 = cljs.core.chunk_first.call(null,seq__28971_28989__$1);{
var G__28991 = cljs.core.chunk_rest.call(null,seq__28971_28989__$1);
var G__28992 = c__4410__auto___28990;
var G__28993 = cljs.core.count.call(null,c__4410__auto___28990);
var G__28994 = (0);
seq__28971_28979 = G__28991;
chunk__28972_28980 = G__28992;
count__28973_28981 = G__28993;
i__28974_28982 = G__28994;
continue;
}
} else
{var r_28995 = cljs.core.first.call(null,seq__28971_28989__$1);cljs.core.pr.call(null,r_28995);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__28996 = cljs.core.next.call(null,seq__28971_28989__$1);
var G__28997 = null;
var G__28998 = (0);
var G__28999 = (0);
seq__28971_28979 = G__28996;
chunk__28972_28980 = G__28997;
count__28973_28981 = G__28998;
i__28974_28982 = G__28999;
continue;
}
}
} else
{}
}
break;
}
var seq__28975 = cljs.core.seq.call(null,partial_reasons);var chunk__28976 = null;var count__28977 = (0);var i__28978 = (0);while(true){
if((i__28978 < count__28977))
{var r = cljs.core._nth.call(null,chunk__28976,i__28978);instaparse.failure.print_reason.call(null,r);
{
var G__29000 = seq__28975;
var G__29001 = chunk__28976;
var G__29002 = count__28977;
var G__29003 = (i__28978 + (1));
seq__28975 = G__29000;
chunk__28976 = G__29001;
count__28977 = G__29002;
i__28978 = G__29003;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__28975);if(temp__4126__auto__)
{var seq__28975__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28975__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__28975__$1);{
var G__29004 = cljs.core.chunk_rest.call(null,seq__28975__$1);
var G__29005 = c__4410__auto__;
var G__29006 = cljs.core.count.call(null,c__4410__auto__);
var G__29007 = (0);
seq__28975 = G__29004;
chunk__28976 = G__29005;
count__28977 = G__29006;
i__28978 = G__29007;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__28975__$1);instaparse.failure.print_reason.call(null,r);
{
var G__29008 = cljs.core.next.call(null,seq__28975__$1);
var G__29009 = null;
var G__29010 = (0);
var G__29011 = (0);
seq__28975 = G__29008;
chunk__28976 = G__29009;
count__28977 = G__29010;
i__28978 = G__29011;
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
