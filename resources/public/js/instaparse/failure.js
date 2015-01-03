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
var G__13605 = (line + (1));
var G__13606 = (1);
var G__13607 = (counter + (1));
line = G__13605;
col = G__13606;
counter = G__13607;
continue;
}
} else
{{
var G__13608 = line;
var G__13609 = (col + (1));
var G__13610 = (counter + (1));
line = G__13608;
col = G__13609;
counter = G__13610;
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
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.filter.call(null,(function (p1__13611_SHARP_){return cljs.core.not.call(null,instaparse.failure.newline_chars.call(null,cljs.core.first.call(null,p1__13611_SHARP_)));
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
instaparse.failure.pprint_failure = (function pprint_failure(p__13612){var map__13622 = p__13612;var map__13622__$1 = ((cljs.core.seq_QMARK_.call(null,map__13622))?cljs.core.apply.call(null,cljs.core.hash_map,map__13622):map__13622);var reason = cljs.core.get.call(null,map__13622__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));var text = cljs.core.get.call(null,map__13622__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var column = cljs.core.get.call(null,map__13622__$1,new cljs.core.Keyword(null,"column","column",2078222095));var line = cljs.core.get.call(null,map__13622__$1,new cljs.core.Keyword(null,"line","line",212345235));cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");
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
var seq__13623_13631 = cljs.core.seq.call(null,full_reasons);var chunk__13624_13632 = null;var count__13625_13633 = (0);var i__13626_13634 = (0);while(true){
if((i__13626_13634 < count__13625_13633))
{var r_13635 = cljs.core._nth.call(null,chunk__13624_13632,i__13626_13634);cljs.core.pr.call(null,r_13635);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__13636 = seq__13623_13631;
var G__13637 = chunk__13624_13632;
var G__13638 = count__13625_13633;
var G__13639 = (i__13626_13634 + (1));
seq__13623_13631 = G__13636;
chunk__13624_13632 = G__13637;
count__13625_13633 = G__13638;
i__13626_13634 = G__13639;
continue;
}
} else
{var temp__4126__auto___13640 = cljs.core.seq.call(null,seq__13623_13631);if(temp__4126__auto___13640)
{var seq__13623_13641__$1 = temp__4126__auto___13640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13623_13641__$1))
{var c__4410__auto___13642 = cljs.core.chunk_first.call(null,seq__13623_13641__$1);{
var G__13643 = cljs.core.chunk_rest.call(null,seq__13623_13641__$1);
var G__13644 = c__4410__auto___13642;
var G__13645 = cljs.core.count.call(null,c__4410__auto___13642);
var G__13646 = (0);
seq__13623_13631 = G__13643;
chunk__13624_13632 = G__13644;
count__13625_13633 = G__13645;
i__13626_13634 = G__13646;
continue;
}
} else
{var r_13647 = cljs.core.first.call(null,seq__13623_13641__$1);cljs.core.pr.call(null,r_13647);
cljs.core.println.call(null," (followed by end-of-string)");
{
var G__13648 = cljs.core.next.call(null,seq__13623_13641__$1);
var G__13649 = null;
var G__13650 = (0);
var G__13651 = (0);
seq__13623_13631 = G__13648;
chunk__13624_13632 = G__13649;
count__13625_13633 = G__13650;
i__13626_13634 = G__13651;
continue;
}
}
} else
{}
}
break;
}
var seq__13627 = cljs.core.seq.call(null,partial_reasons);var chunk__13628 = null;var count__13629 = (0);var i__13630 = (0);while(true){
if((i__13630 < count__13629))
{var r = cljs.core._nth.call(null,chunk__13628,i__13630);instaparse.failure.print_reason.call(null,r);
{
var G__13652 = seq__13627;
var G__13653 = chunk__13628;
var G__13654 = count__13629;
var G__13655 = (i__13630 + (1));
seq__13627 = G__13652;
chunk__13628 = G__13653;
count__13629 = G__13654;
i__13630 = G__13655;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13627);if(temp__4126__auto__)
{var seq__13627__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13627__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__13627__$1);{
var G__13656 = cljs.core.chunk_rest.call(null,seq__13627__$1);
var G__13657 = c__4410__auto__;
var G__13658 = cljs.core.count.call(null,c__4410__auto__);
var G__13659 = (0);
seq__13627 = G__13656;
chunk__13628 = G__13657;
count__13629 = G__13658;
i__13630 = G__13659;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__13627__$1);instaparse.failure.print_reason.call(null,r);
{
var G__13660 = cljs.core.next.call(null,seq__13627__$1);
var G__13661 = null;
var G__13662 = (0);
var G__13663 = (0);
seq__13627 = G__13660;
chunk__13628 = G__13661;
count__13629 = G__13662;
i__13630 = G__13663;
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
