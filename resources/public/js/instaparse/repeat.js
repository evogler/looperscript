// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.repeat');
goog.require('cljs.core');
goog.require('instaparse.combinators_source');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.viz');
goog.require('instaparse.gll');
goog.require('instaparse.reduction');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.failure');
goog.require('instaparse.combinators_source');
goog.require('instaparse.gll');
goog.require('instaparse.failure');
goog.require('instaparse.reduction');
goog.require('instaparse.viz');
instaparse.repeat.empty_result_QMARK_ = (function empty_result_QMARK_(result){return ((cljs.core.vector_QMARK_.call(null,result)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,result),(1)))) || ((cljs.core.map_QMARK_.call(null,result)) && (cljs.core.contains_QMARK_.call(null,result,new cljs.core.Keyword(null,"tag","tag",-1290361223))) && (cljs.core.empty_QMARK_.call(null,cljs.core.get.call(null,result,new cljs.core.Keyword(null,"content","content",15833224))))) || (cljs.core.empty_QMARK_.call(null,result));
});
instaparse.repeat.failure_signal = instaparse.gll.__GT_Failure.call(null,null,null);
instaparse.repeat.get_end = (function() {
var get_end = null;
var get_end__1 = (function (parse){var vec__48154 = instaparse.viz.span.call(null,parse);var start = cljs.core.nth.call(null,vec__48154,(0),null);var end = cljs.core.nth.call(null,vec__48154,(1),null);if(cljs.core.truth_(end))
{return cljs.core.long$.call(null,end);
} else
{return cljs.core.count.call(null,parse);
}
});
var get_end__2 = (function (parse,index){var vec__48155 = instaparse.viz.span.call(null,parse);var start = cljs.core.nth.call(null,vec__48155,(0),null);var end = cljs.core.nth.call(null,vec__48155,(1),null);if(cljs.core.truth_(end))
{return cljs.core.long$.call(null,end);
} else
{return (index + cljs.core.count.call(null,parse));
}
});
get_end = function(parse,index){
switch(arguments.length){
case 1:
return get_end__1.call(this,parse);
case 2:
return get_end__2.call(this,parse,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_end.cljs$core$IFn$_invoke$arity$1 = get_end__1;
get_end.cljs$core$IFn$_invoke$arity$2 = get_end__2;
return get_end;
})()
;
instaparse.repeat.parse_from_index = (function parse_from_index(grammar,initial_parser,text,segment,index){var tramp = instaparse.gll.make_tramp.call(null,grammar,text,segment);instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,initial_parser], null),instaparse.gll.TopListener.call(null,tramp));
return instaparse.gll.run.call(null,tramp);
});
/**
* Returns either:
* [a-parse end-index a-list-of-valid-follow-up-parses]
* [a-parse end-index nil] (successfully reached end of text)
* nil (hit a dead-end with this strategy)
*/
instaparse.repeat.select_parse = (function select_parse(grammar,initial_parser,text,segment,index,parses){var length = cljs.core.count.call(null,text);var parses__$1 = cljs.core.seq.call(null,parses);while(true){
if(parses__$1)
{var parse = cljs.core.first.call(null,parses__$1);var vec__48157 = instaparse.viz.span.call(null,parse);var start = cljs.core.nth.call(null,vec__48157,(0),null);var end = cljs.core.nth.call(null,vec__48157,(1),null);var end__$1 = (cljs.core.truth_(end)?end:(index + cljs.core.count.call(null,parse)));if(cljs.core._EQ_.call(null,end__$1,length))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse,end__$1,null], null);
} else
{var temp__4124__auto__ = cljs.core.seq.call(null,instaparse.repeat.parse_from_index.call(null,grammar,initial_parser,text,segment,end__$1));if(temp__4124__auto__)
{var follow_ups = temp__4124__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse,end__$1,follow_ups], null);
} else
{{
var G__48158 = cljs.core.next.call(null,parses__$1);
parses__$1 = G__48158;
continue;
}
}

}
} else
{return null;
}
break;
}
});
instaparse.repeat.repeat_parse_hiccup = (function() {
var repeat_parse_hiccup = null;
var repeat_parse_hiccup__5 = (function (grammar,initial_parser,root_tag,text,segment){return repeat_parse_hiccup.call(null,grammar,initial_parser,root_tag,text,segment,(0));
});
var repeat_parse_hiccup__6 = (function (grammar,initial_parser,root_tag,text,segment,index){var length = cljs.core.count.call(null,text);var first_result = instaparse.repeat.parse_from_index.call(null,grammar,initial_parser,text,segment,index);var index__$1 = cljs.core.long$.call(null,index);var parses = instaparse.auto_flatten_seq.auto_flatten_seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_tag], null));var G__48164 = instaparse.repeat.select_parse.call(null,grammar,initial_parser,text,segment,index__$1,first_result);var vec__48165 = G__48164;var parse = cljs.core.nth.call(null,vec__48165,(0),null);var end = cljs.core.nth.call(null,vec__48165,(1),null);var follow_ups = cljs.core.nth.call(null,vec__48165,(2),null);var selection = vec__48165;var index__$2 = index__$1;var parses__$1 = parses;var G__48164__$1 = G__48164;while(true){
var index__$3 = index__$2;var parses__$2 = parses__$1;var vec__48166 = G__48164__$1;var parse__$1 = cljs.core.nth.call(null,vec__48166,(0),null);var end__$1 = cljs.core.nth.call(null,vec__48166,(1),null);var follow_ups__$1 = cljs.core.nth.call(null,vec__48166,(2),null);var selection__$1 = vec__48166;if((selection__$1 == null))
{return instaparse.repeat.failure_signal;
} else
{if(cljs.core._EQ_.call(null,index__$3,end__$1))
{return instaparse.repeat.failure_signal;
} else
{if((follow_ups__$1 == null))
{return instaparse.gll.safe_with_meta.call(null,instaparse.auto_flatten_seq.convert_afs_to_vec.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,parses__$2,parse__$1)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null));
} else
{{
var G__48167 = cljs.core.long$.call(null,end__$1);
var G__48168 = instaparse.auto_flatten_seq.conj_flat.call(null,parses__$2,parse__$1);
var G__48169 = instaparse.repeat.select_parse.call(null,grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__48167;
parses__$1 = G__48168;
G__48164__$1 = G__48169;
continue;
}

}
}
}
break;
}
});
repeat_parse_hiccup = function(grammar,initial_parser,root_tag,text,segment,index){
switch(arguments.length){
case 5:
return repeat_parse_hiccup__5.call(this,grammar,initial_parser,root_tag,text,segment);
case 6:
return repeat_parse_hiccup__6.call(this,grammar,initial_parser,root_tag,text,segment,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$5 = repeat_parse_hiccup__5;
repeat_parse_hiccup.cljs$core$IFn$_invoke$arity$6 = repeat_parse_hiccup__6;
return repeat_parse_hiccup;
})()
;
instaparse.repeat.repeat_parse_enlive = (function() {
var repeat_parse_enlive = null;
var repeat_parse_enlive__5 = (function (grammar,initial_parser,root_tag,text,segment){return repeat_parse_enlive.call(null,grammar,initial_parser,root_tag,text,segment,(0));
});
var repeat_parse_enlive__6 = (function (grammar,initial_parser,root_tag,text,segment,index){var length = cljs.core.count.call(null,text);var first_result = instaparse.repeat.parse_from_index.call(null,grammar,initial_parser,text,segment,index);var index__$1 = cljs.core.long$.call(null,index);var parses = instaparse.auto_flatten_seq.EMPTY;var G__48175 = instaparse.repeat.select_parse.call(null,grammar,initial_parser,text,segment,index__$1,first_result);var vec__48176 = G__48175;var parse = cljs.core.nth.call(null,vec__48176,(0),null);var end = cljs.core.nth.call(null,vec__48176,(1),null);var follow_ups = cljs.core.nth.call(null,vec__48176,(2),null);var selection = vec__48176;var index__$2 = index__$1;var parses__$1 = parses;var G__48175__$1 = G__48175;while(true){
var index__$3 = index__$2;var parses__$2 = parses__$1;var vec__48177 = G__48175__$1;var parse__$1 = cljs.core.nth.call(null,vec__48177,(0),null);var end__$1 = cljs.core.nth.call(null,vec__48177,(1),null);var follow_ups__$1 = cljs.core.nth.call(null,vec__48177,(2),null);var selection__$1 = vec__48177;if((selection__$1 == null))
{return instaparse.repeat.failure_signal;
} else
{if(cljs.core._EQ_.call(null,index__$3,end__$1))
{return instaparse.repeat.failure_signal;
} else
{if((follow_ups__$1 == null))
{return instaparse.gll.safe_with_meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),root_tag,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.seq.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,parses__$2,parse__$1))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null));
} else
{{
var G__48178 = cljs.core.long$.call(null,end__$1);
var G__48179 = instaparse.auto_flatten_seq.conj_flat.call(null,parses__$2,parse__$1);
var G__48180 = instaparse.repeat.select_parse.call(null,grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__48178;
parses__$1 = G__48179;
G__48175__$1 = G__48180;
continue;
}

}
}
}
break;
}
});
repeat_parse_enlive = function(grammar,initial_parser,root_tag,text,segment,index){
switch(arguments.length){
case 5:
return repeat_parse_enlive__5.call(this,grammar,initial_parser,root_tag,text,segment);
case 6:
return repeat_parse_enlive__6.call(this,grammar,initial_parser,root_tag,text,segment,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat_parse_enlive.cljs$core$IFn$_invoke$arity$5 = repeat_parse_enlive__5;
repeat_parse_enlive.cljs$core$IFn$_invoke$arity$6 = repeat_parse_enlive__6;
return repeat_parse_enlive;
})()
;
instaparse.repeat.repeat_parse_no_tag = (function() {
var repeat_parse_no_tag = null;
var repeat_parse_no_tag__4 = (function (grammar,initial_parser,text,segment){return repeat_parse_no_tag.call(null,grammar,initial_parser,text,segment,(0));
});
var repeat_parse_no_tag__5 = (function (grammar,initial_parser,text,segment,index){var length = cljs.core.count.call(null,text);var first_result = instaparse.repeat.parse_from_index.call(null,grammar,initial_parser,text,segment,index);var index__$1 = cljs.core.long$.call(null,index);var parses = instaparse.auto_flatten_seq.EMPTY;var G__48186 = instaparse.repeat.select_parse.call(null,grammar,initial_parser,text,segment,index__$1,first_result);var vec__48187 = G__48186;var parse = cljs.core.nth.call(null,vec__48187,(0),null);var end = cljs.core.nth.call(null,vec__48187,(1),null);var follow_ups = cljs.core.nth.call(null,vec__48187,(2),null);var selection = vec__48187;var index__$2 = index__$1;var parses__$1 = parses;var G__48186__$1 = G__48186;while(true){
var index__$3 = index__$2;var parses__$2 = parses__$1;var vec__48188 = G__48186__$1;var parse__$1 = cljs.core.nth.call(null,vec__48188,(0),null);var end__$1 = cljs.core.nth.call(null,vec__48188,(1),null);var follow_ups__$1 = cljs.core.nth.call(null,vec__48188,(2),null);var selection__$1 = vec__48188;if((selection__$1 == null))
{return instaparse.repeat.failure_signal;
} else
{if(cljs.core._EQ_.call(null,index__$3,end__$1))
{return instaparse.repeat.failure_signal;
} else
{if((follow_ups__$1 == null))
{return instaparse.gll.safe_with_meta.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,parses__$2,parse__$1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null));
} else
{{
var G__48189 = cljs.core.long$.call(null,end__$1);
var G__48190 = instaparse.auto_flatten_seq.conj_flat.call(null,parses__$2,parse__$1);
var G__48191 = instaparse.repeat.select_parse.call(null,grammar,initial_parser,text,segment,end__$1,follow_ups__$1);
index__$2 = G__48189;
parses__$1 = G__48190;
G__48186__$1 = G__48191;
continue;
}

}
}
}
break;
}
});
repeat_parse_no_tag = function(grammar,initial_parser,text,segment,index){
switch(arguments.length){
case 4:
return repeat_parse_no_tag__4.call(this,grammar,initial_parser,text,segment);
case 5:
return repeat_parse_no_tag__5.call(this,grammar,initial_parser,text,segment,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$4 = repeat_parse_no_tag__4;
repeat_parse_no_tag.cljs$core$IFn$_invoke$arity$5 = repeat_parse_no_tag__5;
return repeat_parse_no_tag;
})()
;
instaparse.repeat.repeat_parse = (function() {
var repeat_parse = null;
var repeat_parse__4 = (function (grammar,initial_parser,output_format,text){return instaparse.repeat.repeat_parse_no_tag.call(null,grammar,initial_parser,text,instaparse.gll.string__GT_segment.call(null,text));
});
var repeat_parse__5 = (function (grammar,initial_parser,output_format,root_tag,text){if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null).call(null,output_format)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null),new cljs.core.Symbol(null,"output-format","output-format",-185851149,null)))))));
}
if(cljs.core._EQ_.call(null,output_format,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238)))
{return instaparse.repeat.repeat_parse_hiccup.call(null,grammar,initial_parser,root_tag,text,instaparse.gll.string__GT_segment.call(null,text));
} else
{if(cljs.core._EQ_.call(null,output_format,new cljs.core.Keyword(null,"enlive","enlive",1679023921)))
{return instaparse.repeat.repeat_parse_enlive.call(null,grammar,initial_parser,root_tag,text,instaparse.gll.string__GT_segment.call(null,text));
} else
{return null;
}
}
});
repeat_parse = function(grammar,initial_parser,output_format,root_tag,text){
switch(arguments.length){
case 4:
return repeat_parse__4.call(this,grammar,initial_parser,output_format,root_tag);
case 5:
return repeat_parse__5.call(this,grammar,initial_parser,output_format,root_tag,text);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat_parse.cljs$core$IFn$_invoke$arity$4 = repeat_parse__4;
repeat_parse.cljs$core$IFn$_invoke$arity$5 = repeat_parse__5;
return repeat_parse;
})()
;
instaparse.repeat.repeat_parse_with_header = (function repeat_parse_with_header(grammar,header_parser,repeating_parser,output_format,root_tag,text){var segment = instaparse.gll.string__GT_segment.call(null,text);var length = cljs.core.count.call(null,text);var header_results = instaparse.repeat.parse_from_index.call(null,grammar,header_parser,text,segment,(0));if(cljs.core.truth_((function (){var or__3640__auto__ = cljs.core.empty_QMARK_.call(null,header_results);if(or__3640__auto__)
{return or__3640__auto__;
} else
{return new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(header_parser);
}
})()))
{return instaparse.repeat.failure_signal;
} else
{var header_result = cljs.core.apply.call(null,cljs.core.max_key,instaparse.repeat.get_end,header_results);var end = instaparse.repeat.get_end.call(null,header_result);var repeat_result = instaparse.repeat.repeat_parse_no_tag.call(null,grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(repeating_parser),text,segment,end);var span_meta = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),(0),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),length], null);if(((repeat_result instanceof instaparse.gll.Failure)) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(repeating_parser),new cljs.core.Keyword(null,"star","star",279424429))) && (instaparse.repeat.empty_result_QMARK_.call(null,repeat_result))))
{return instaparse.repeat.failure_signal;
} else
{var G__48193 = (((output_format instanceof cljs.core.Keyword))?output_format.fqn:null);switch (G__48193) {
case "hiccup":
return instaparse.gll.safe_with_meta.call(null,instaparse.auto_flatten_seq.convert_afs_to_vec.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.auto_flatten_seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_tag], null)),header_result),repeat_result)),span_meta);

break;
case "enlive":
return instaparse.gll.safe_with_meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),root_tag,new cljs.core.Keyword(null,"content","content",15833224),instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.EMPTY,header_result),repeat_result)], null),span_meta);

break;
default:
return instaparse.gll.safe_with_meta.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.conj_flat.call(null,instaparse.auto_flatten_seq.EMPTY,header_result),repeat_result),span_meta);

}
}
}
});
instaparse.repeat.try_repeating_parse_strategy_with_header = (function try_repeating_parse_strategy_with_header(grammar,text,start_production,start_rule,output_format){var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(start_rule);var repeating_parser = cljs.core.last.call(null,parsers);if(cljs.core.not.call(null,(function (){var and__3628__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"cat","cat",-1457810207));if(and__3628__auto__)
{var and__3628__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"star","star",279424429),null,new cljs.core.Keyword(null,"plus","plus",211540661),null], null), null).call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(repeating_parser));if(cljs.core.truth_(and__3628__auto____$1))
{return (cljs.core.not.call(null,new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(repeating_parser))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(repeating_parser))));
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
})()))
{return instaparse.repeat.failure_signal;
} else
{var header_parser = cljs.core.apply.call(null,instaparse.combinators_source.cat,cljs.core.butlast.call(null,parsers));if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(start_rule),instaparse.reduction.raw_non_terminal_reduction))
{return instaparse.repeat.repeat_parse_with_header.call(null,grammar,header_parser,repeating_parser,null,start_production,text);
} else
{return instaparse.repeat.repeat_parse_with_header.call(null,grammar,header_parser,repeating_parser,output_format,start_production,text);
}
}
});
instaparse.repeat.try_repeating_parse_strategy = (function try_repeating_parse_strategy(parser,text,start_production){var grammar = new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser);var output_format = new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser);var start_rule = cljs.core.get.call(null,grammar,start_production);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(start_rule),true))
{return instaparse.repeat.failure_signal;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(start_rule),instaparse.reduction.raw_non_terminal_reduction))
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"star","star",279424429)))
{return instaparse.repeat.repeat_parse.call(null,grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,text);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"plus","plus",211540661)))
{var result = instaparse.repeat.repeat_parse.call(null,grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,text);if(instaparse.repeat.empty_result_QMARK_.call(null,result))
{return instaparse.repeat.failure_signal;
} else
{return result;
}
} else
{return instaparse.repeat.try_repeating_parse_strategy_with_header.call(null,grammar,text,start_production,start_rule,output_format);

}
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"star","star",279424429)))
{return instaparse.repeat.repeat_parse.call(null,grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,start_production,text);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(start_rule),new cljs.core.Keyword(null,"plus","plus",211540661)))
{var result = instaparse.repeat.repeat_parse.call(null,grammar,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(start_rule),output_format,start_production,text);if(instaparse.repeat.empty_result_QMARK_.call(null,result))
{return instaparse.repeat.failure_signal;
} else
{return result;
}
} else
{return instaparse.repeat.try_repeating_parse_strategy_with_header.call(null,grammar,text,start_production,start_rule,output_format);

}
}
}
}
});
instaparse.repeat.used_memory_optimization_QMARK_ = (function used_memory_optimization_QMARK_(tree){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tree)));
});
