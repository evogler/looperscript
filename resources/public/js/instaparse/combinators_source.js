// Compiled by ClojureScript 1.9.908 {}
goog.provide('instaparse.combinators_source');
goog.require('cljs.core');
goog.require('instaparse.reduction');
goog.require('instaparse.util');
instaparse.combinators_source.Epsilon = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"epsilon","epsilon",-730158570)], null);
/**
 * Optional, i.e., parser?
 */
instaparse.combinators_source.opt = (function instaparse$combinators_source$opt(parser){
if(cljs.core._EQ_.call(null,parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
}
});
/**
 * One or more, i.e., parser+
 */
instaparse.combinators_source.plus = (function instaparse$combinators_source$plus(parser){
if(cljs.core._EQ_.call(null,parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
}
});
/**
 * Zero or more, i.e., parser*
 */
instaparse.combinators_source.star = (function instaparse$combinators_source$star(parser){
if(cljs.core._EQ_.call(null,parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
}
});
/**
 * Between m and n repetitions
 */
instaparse.combinators_source.rep = (function instaparse$combinators_source$rep(m,n,parser){
if((m <= n)){
} else {
throw (new Error("Assert failed: (<= m n)"));
}

if(cljs.core._EQ_.call(null,parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"min","min",444991522),m,new cljs.core.Keyword(null,"max","max",61366548),n], null);
}
});
/**
 * Alternation, i.e., parser1 | parser2 | parser3 | ...
 */
instaparse.combinators_source.alt = (function instaparse$combinators_source$alt(var_args){
var args__8594__auto__ = [];
var len__8587__auto___13977 = arguments.length;
var i__8588__auto___13978 = (0);
while(true){
if((i__8588__auto___13978 < len__8587__auto___13977)){
args__8594__auto__.push((arguments[i__8588__auto___13978]));

var G__13979 = (i__8588__auto___13978 + (1));
i__8588__auto___13978 = G__13979;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((0) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((0)),(0),null)):null);
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(argseq__8595__auto__);
});

instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic = (function (parsers){
if(cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers)){
return instaparse.combinators_source.Epsilon;
} else {
if(cljs.core.truth_(instaparse.reduction.singleton_QMARK_.call(null,parsers))){
return cljs.core.first.call(null,parsers);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),parsers], null);

}
}
});

instaparse.combinators_source.alt.cljs$lang$maxFixedArity = (0);

instaparse.combinators_source.alt.cljs$lang$applyTo = (function (seq13976){
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13976));
});

instaparse.combinators_source.ord2 = (function instaparse$combinators_source$ord2(parser1,parser2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ord","ord",1142548323),new cljs.core.Keyword(null,"parser1","parser1",-439601422),parser1,new cljs.core.Keyword(null,"parser2","parser2",1013754688),parser2], null);
});
/**
 * Ordered choice, i.e., parser1 / parser2
 */
instaparse.combinators_source.ord = (function instaparse$combinators_source$ord(var_args){
var G__13983 = arguments.length;
switch (G__13983) {
case 0:
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___13985 = arguments.length;
var i__8588__auto___13986 = (0);
while(true){
if((i__8588__auto___13986 < len__8587__auto___13985)){
args_arr__8606__auto__.push((arguments[i__8588__auto___13986]));

var G__13987 = (i__8588__auto___13986 + (1));
i__8588__auto___13986 = G__13987;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((1)),(0),null));
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8607__auto__);

}
});

instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0 = (function (){
return instaparse.combinators_source.Epsilon;
});

instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic = (function (parser1,parsers){
var parsers__$1 = ((cljs.core._EQ_.call(null,parser1,instaparse.combinators_source.Epsilon))?cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([instaparse.combinators_source.Epsilon]),parsers):parsers);
if(cljs.core.seq.call(null,parsers__$1)){
return instaparse.combinators_source.ord2.call(null,parser1,cljs.core.apply.call(null,instaparse.combinators_source.ord,parsers__$1));
} else {
return parser1;
}
});

instaparse.combinators_source.ord.cljs$lang$applyTo = (function (seq13981){
var G__13982 = cljs.core.first.call(null,seq13981);
var seq13981__$1 = cljs.core.next.call(null,seq13981);
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic(G__13982,seq13981__$1);
});

instaparse.combinators_source.ord.cljs$lang$maxFixedArity = (1);

/**
 * Concatenation, i.e., parser1 parser2 ...
 */
instaparse.combinators_source.cat = (function instaparse$combinators_source$cat(var_args){
var args__8594__auto__ = [];
var len__8587__auto___13989 = arguments.length;
var i__8588__auto___13990 = (0);
while(true){
if((i__8588__auto___13990 < len__8587__auto___13989)){
args__8594__auto__.push((arguments[i__8588__auto___13990]));

var G__13991 = (i__8588__auto___13990 + (1));
i__8588__auto___13990 = G__13991;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((0) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((0)),(0),null)):null);
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8595__auto__);
});

instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic = (function (parsers){
if(cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers)){
return instaparse.combinators_source.Epsilon;
} else {
var parsers__$1 = cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([instaparse.combinators_source.Epsilon]),parsers);
if(cljs.core.truth_(instaparse.reduction.singleton_QMARK_.call(null,parsers__$1))){
return cljs.core.first.call(null,parsers__$1);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),parsers__$1], null);
}
}
});

instaparse.combinators_source.cat.cljs$lang$maxFixedArity = (0);

instaparse.combinators_source.cat.cljs$lang$applyTo = (function (seq13988){
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13988));
});

/**
 * Create a string terminal out of s
 */
instaparse.combinators_source.string = (function instaparse$combinators_source$string(s){
if(cljs.core._EQ_.call(null,s,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),s], null);
}
});
/**
 * Create a case-insensitive string terminal out of s
 */
instaparse.combinators_source.string_ci = (function instaparse$combinators_source$string_ci(s){
if(cljs.core._EQ_.call(null,s,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string-ci","string-ci",374631805),new cljs.core.Keyword(null,"string","string",-1989541586),s], null);
}
});
/**
 * Matches a Unicode code point or a range of code points
 */
instaparse.combinators_source.unicode_char = (function instaparse$combinators_source$unicode_char(var_args){
var G__13993 = arguments.length;
switch (G__13993) {
case 1:
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1 = (function (code_point){
return instaparse.combinators_source.unicode_char.call(null,code_point,code_point);
});

instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2 = (function (lo,hi){
if((lo <= hi)){
} else {
throw (new Error(["Assert failed: ","Character range minimum must be less than or equal the maximum","\n","(<= lo hi)"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null);
});

instaparse.combinators_source.unicode_char.cljs$lang$maxFixedArity = 2;

/**
 * JavaScript regexes have no .lookingAt method, so in cljs we just
 *   add a '^' character to the front of the regex.
 */
instaparse.combinators_source.add_beginning_constraint = (function instaparse$combinators_source$add_beginning_constraint(r){
if(cljs.core.regexp_QMARK_.call(null,r)){
return cljs.core.re_pattern.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r.source)].join(''));
} else {
return r;
}
});
/**
 * Create a regexp terminal out of regular expression r
 */
instaparse.combinators_source.regexp = (function instaparse$combinators_source$regexp(r){
if(cljs.core._EQ_.call(null,r,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"regexp","regexp",-541372782),instaparse.combinators_source.add_beginning_constraint.call(null,cljs.core.re_pattern.call(null,r))], null);
}
});
/**
 * Refers to a non-terminal defined by the grammar map
 */
instaparse.combinators_source.nt = (function instaparse$combinators_source$nt(s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),s], null);
});
/**
 * Lookahead, i.e., &parser
 */
instaparse.combinators_source.look = (function instaparse$combinators_source$look(parser){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"look","look",-539441433),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});
/**
 * Negative lookahead, i.e., !parser
 */
instaparse.combinators_source.neg = (function instaparse$combinators_source$neg(parser){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"neg","neg",1800032960),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});
/**
 * Hide the result of parser, i.e., <parser>
 */
instaparse.combinators_source.hide = (function instaparse$combinators_source$hide(parser){
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"hide","hide",-596913169),true);
});
/**
 * Hide the tag associated with this rule.  
 *   Wrap this combinator around the entire right-hand side.
 */
instaparse.combinators_source.hide_tag = (function instaparse$combinators_source$hide_tag(parser){
return instaparse.reduction.red.call(null,parser,instaparse.reduction.raw_non_terminal_reduction);
});
/**
 * Tests whether parser was created with hide-tag combinator
 */
instaparse.combinators_source.hidden_tag_QMARK_ = (function instaparse$combinators_source$hidden_tag_QMARK_(parser){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser),instaparse.reduction.raw_non_terminal_reduction);
});
/**
 * Recursively undoes the effect of hide on one parser
 */
instaparse.combinators_source.unhide_content = (function instaparse$combinators_source$unhide_content(parser){
var parser__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.dissoc.call(null,parser,new cljs.core.Keyword(null,"hide","hide",-596913169)):parser);
if(cljs.core.truth_(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser__$1))){
return cljs.core.assoc.call(null,parser__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310),instaparse.combinators_source.unhide_content.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser__$1))){
return cljs.core.assoc.call(null,parser__$1,new cljs.core.Keyword(null,"parsers","parsers",-804353827),cljs.core.map.call(null,instaparse.combinators_source.unhide_content,new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser__$1),new cljs.core.Keyword(null,"ord","ord",1142548323))){
return cljs.core.assoc.call(null,parser__$1,new cljs.core.Keyword(null,"parser1","parser1",-439601422),instaparse.combinators_source.unhide_content.call(null,new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(parser__$1)),new cljs.core.Keyword(null,"parser2","parser2",1013754688),instaparse.combinators_source.unhide_content.call(null,new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
return parser__$1;

}
}
}
});
/**
 * Recursively undoes the effect of hide on all parsers in the grammar
 */
instaparse.combinators_source.unhide_all_content = (function instaparse$combinators_source$unhide_all_content(grammar){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8226__auto__ = (function instaparse$combinators_source$unhide_all_content_$_iter__13995(s__13996){
return (new cljs.core.LazySeq(null,(function (){
var s__13996__$1 = s__13996;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13996__$1);
if(temp__4657__auto__){
var s__13996__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13996__$2)){
var c__8224__auto__ = cljs.core.chunk_first.call(null,s__13996__$2);
var size__8225__auto__ = cljs.core.count.call(null,c__8224__auto__);
var b__13998 = cljs.core.chunk_buffer.call(null,size__8225__auto__);
if((function (){var i__13997 = (0);
while(true){
if((i__13997 < size__8225__auto__)){
var vec__13999 = cljs.core._nth.call(null,c__8224__auto__,i__13997);
var k = cljs.core.nth.call(null,vec__13999,(0),null);
var v = cljs.core.nth.call(null,vec__13999,(1),null);
cljs.core.chunk_append.call(null,b__13998,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content.call(null,v)], null));

var G__14005 = (i__13997 + (1));
i__13997 = G__14005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13998),instaparse$combinators_source$unhide_all_content_$_iter__13995.call(null,cljs.core.chunk_rest.call(null,s__13996__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13998),null);
}
} else {
var vec__14002 = cljs.core.first.call(null,s__13996__$2);
var k = cljs.core.nth.call(null,vec__14002,(0),null);
var v = cljs.core.nth.call(null,vec__14002,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content.call(null,v)], null),instaparse$combinators_source$unhide_all_content_$_iter__13995.call(null,cljs.core.rest.call(null,s__13996__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8226__auto__.call(null,grammar);
})());
});
/**
 * Recursively undoes the effect of hide-tag
 */
instaparse.combinators_source.unhide_tags = (function instaparse$combinators_source$unhide_tags(reduction_type,grammar){
var temp__4655__auto__ = instaparse.reduction.reduction_types.call(null,reduction_type);
if(cljs.core.truth_(temp__4655__auto__)){
var reduction = temp__4655__auto__;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8226__auto__ = ((function (reduction,temp__4655__auto__){
return (function instaparse$combinators_source$unhide_tags_$_iter__14006(s__14007){
return (new cljs.core.LazySeq(null,((function (reduction,temp__4655__auto__){
return (function (){
var s__14007__$1 = s__14007;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14007__$1);
if(temp__4657__auto__){
var s__14007__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14007__$2)){
var c__8224__auto__ = cljs.core.chunk_first.call(null,s__14007__$2);
var size__8225__auto__ = cljs.core.count.call(null,c__8224__auto__);
var b__14009 = cljs.core.chunk_buffer.call(null,size__8225__auto__);
if((function (){var i__14008 = (0);
while(true){
if((i__14008 < size__8225__auto__)){
var vec__14010 = cljs.core._nth.call(null,c__8224__auto__,i__14008);
var k = cljs.core.nth.call(null,vec__14010,(0),null);
var v = cljs.core.nth.call(null,vec__14010,(1),null);
cljs.core.chunk_append.call(null,b__14009,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null));

var G__14016 = (i__14008 + (1));
i__14008 = G__14016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14009),instaparse$combinators_source$unhide_tags_$_iter__14006.call(null,cljs.core.chunk_rest.call(null,s__14007__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14009),null);
}
} else {
var vec__14013 = cljs.core.first.call(null,s__14007__$2);
var k = cljs.core.nth.call(null,vec__14013,(0),null);
var v = cljs.core.nth.call(null,vec__14013,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null),instaparse$combinators_source$unhide_tags_$_iter__14006.call(null,cljs.core.rest.call(null,s__14007__$2)));
}
} else {
return null;
}
break;
}
});})(reduction,temp__4655__auto__))
,null,null));
});})(reduction,temp__4655__auto__))
;
return iter__8226__auto__.call(null,grammar);
})());
} else {
return instaparse.util.throw_illegal_argument_exception.call(null,"Invalid output format ",reduction_type,". Use :enlive or :hiccup.");
}
});
/**
 * Recursively undoes the effect of both hide and hide-tag
 */
instaparse.combinators_source.unhide_all = (function instaparse$combinators_source$unhide_all(reduction_type,grammar){
var temp__4655__auto__ = instaparse.reduction.reduction_types.call(null,reduction_type);
if(cljs.core.truth_(temp__4655__auto__)){
var reduction = temp__4655__auto__;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8226__auto__ = ((function (reduction,temp__4655__auto__){
return (function instaparse$combinators_source$unhide_all_$_iter__14017(s__14018){
return (new cljs.core.LazySeq(null,((function (reduction,temp__4655__auto__){
return (function (){
var s__14018__$1 = s__14018;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14018__$1);
if(temp__4657__auto__){
var s__14018__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14018__$2)){
var c__8224__auto__ = cljs.core.chunk_first.call(null,s__14018__$2);
var size__8225__auto__ = cljs.core.count.call(null,c__8224__auto__);
var b__14020 = cljs.core.chunk_buffer.call(null,size__8225__auto__);
if((function (){var i__14019 = (0);
while(true){
if((i__14019 < size__8225__auto__)){
var vec__14021 = cljs.core._nth.call(null,c__8224__auto__,i__14019);
var k = cljs.core.nth.call(null,vec__14021,(0),null);
var v = cljs.core.nth.call(null,vec__14021,(1),null);
cljs.core.chunk_append.call(null,b__14020,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,instaparse.combinators_source.unhide_content.call(null,v),new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null));

var G__14027 = (i__14019 + (1));
i__14019 = G__14027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14020),instaparse$combinators_source$unhide_all_$_iter__14017.call(null,cljs.core.chunk_rest.call(null,s__14018__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14020),null);
}
} else {
var vec__14024 = cljs.core.first.call(null,s__14018__$2);
var k = cljs.core.nth.call(null,vec__14024,(0),null);
var v = cljs.core.nth.call(null,vec__14024,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,instaparse.combinators_source.unhide_content.call(null,v),new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null),instaparse$combinators_source$unhide_all_$_iter__14017.call(null,cljs.core.rest.call(null,s__14018__$2)));
}
} else {
return null;
}
break;
}
});})(reduction,temp__4655__auto__))
,null,null));
});})(reduction,temp__4655__auto__))
;
return iter__8226__auto__.call(null,grammar);
})());
} else {
return instaparse.util.throw_illegal_argument_exception.call(null,"Invalid output format ",reduction_type,". Use :enlive or :hiccup.");
}
});
instaparse.combinators_source.auto_whitespace_parser = (function instaparse$combinators_source$auto_whitespace_parser(parser,ws_parser){
var G__14029 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__14029__$1 = (((G__14029 instanceof cljs.core.Keyword))?G__14029.fqn:null);
switch (G__14029__$1) {
case "nt":
case "epsilon":
return parser;

break;
case "opt":
case "plus":
case "star":
case "rep":
case "look":
case "neg":
return cljs.core.update_in.call(null,parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),instaparse.combinators_source.auto_whitespace_parser,ws_parser);

break;
case "alt":
case "cat":
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"parsers","parsers",-804353827),cljs.core.map.call(null,((function (G__14029,G__14029__$1){
return (function (p1__14028_SHARP_){
return instaparse.combinators_source.auto_whitespace_parser.call(null,p1__14028_SHARP_,ws_parser);
});})(G__14029,G__14029__$1))
,new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser)));

break;
case "ord":
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"parser1","parser1",-439601422),instaparse.combinators_source.auto_whitespace_parser.call(null,new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(parser),ws_parser),new cljs.core.Keyword(null,"parser2","parser2",1013754688),instaparse.combinators_source.auto_whitespace_parser.call(null,new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(parser),ws_parser));

break;
case "string":
case "string-ci":
case "regexp":
if(cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser))){
return cljs.core.assoc.call(null,instaparse.combinators_source.cat.call(null,ws_parser,cljs.core.dissoc.call(null,parser,new cljs.core.Keyword(null,"red","red",-969428204))),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser));
} else {
return instaparse.combinators_source.cat.call(null,ws_parser,parser);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14029__$1)].join('')));

}
});
instaparse.combinators_source.auto_whitespace = (function instaparse$combinators_source$auto_whitespace(grammar,start,grammar_ws,start_ws){
var ws_parser = instaparse.combinators_source.hide.call(null,instaparse.combinators_source.opt.call(null,instaparse.combinators_source.nt.call(null,start_ws)));
var grammar_ws__$1 = cljs.core.assoc.call(null,grammar_ws,start_ws,instaparse.combinators_source.hide_tag.call(null,grammar_ws.call(null,start_ws)));
var modified_grammar = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8226__auto__ = ((function (ws_parser,grammar_ws__$1){
return (function instaparse$combinators_source$auto_whitespace_$_iter__14031(s__14032){
return (new cljs.core.LazySeq(null,((function (ws_parser,grammar_ws__$1){
return (function (){
var s__14032__$1 = s__14032;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__14032__$1);
if(temp__4657__auto__){
var s__14032__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14032__$2)){
var c__8224__auto__ = cljs.core.chunk_first.call(null,s__14032__$2);
var size__8225__auto__ = cljs.core.count.call(null,c__8224__auto__);
var b__14034 = cljs.core.chunk_buffer.call(null,size__8225__auto__);
if((function (){var i__14033 = (0);
while(true){
if((i__14033 < size__8225__auto__)){
var vec__14035 = cljs.core._nth.call(null,c__8224__auto__,i__14033);
var nt = cljs.core.nth.call(null,vec__14035,(0),null);
var parser = cljs.core.nth.call(null,vec__14035,(1),null);
cljs.core.chunk_append.call(null,b__14034,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser.call(null,parser,ws_parser)], null));

var G__14041 = (i__14033 + (1));
i__14033 = G__14041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14034),instaparse$combinators_source$auto_whitespace_$_iter__14031.call(null,cljs.core.chunk_rest.call(null,s__14032__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14034),null);
}
} else {
var vec__14038 = cljs.core.first.call(null,s__14032__$2);
var nt = cljs.core.nth.call(null,vec__14038,(0),null);
var parser = cljs.core.nth.call(null,vec__14038,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser.call(null,parser,ws_parser)], null),instaparse$combinators_source$auto_whitespace_$_iter__14031.call(null,cljs.core.rest.call(null,s__14032__$2)));
}
} else {
return null;
}
break;
}
});})(ws_parser,grammar_ws__$1))
,null,null));
});})(ws_parser,grammar_ws__$1))
;
return iter__8226__auto__.call(null,grammar);
})());
var final_grammar = cljs.core.assoc.call(null,modified_grammar,start,cljs.core.assoc.call(null,instaparse.combinators_source.cat.call(null,cljs.core.dissoc.call(null,modified_grammar.call(null,start),new cljs.core.Keyword(null,"red","red",-969428204)),ws_parser),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(modified_grammar.call(null,start))));
return cljs.core.merge.call(null,final_grammar,grammar_ws__$1);
});

//# sourceMappingURL=combinators_source.js.map
