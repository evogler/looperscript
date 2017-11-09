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
var args__29112__auto__ = [];
var len__29105__auto___30167 = arguments.length;
var i__29106__auto___30168 = (0);
while(true){
if((i__29106__auto___30168 < len__29105__auto___30167)){
args__29112__auto__.push((arguments[i__29106__auto___30168]));

var G__30169 = (i__29106__auto___30168 + (1));
i__29106__auto___30168 = G__30169;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
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

instaparse.combinators_source.alt.cljs$lang$applyTo = (function (seq30166){
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30166));
});

instaparse.combinators_source.ord2 = (function instaparse$combinators_source$ord2(parser1,parser2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ord","ord",1142548323),new cljs.core.Keyword(null,"parser1","parser1",-439601422),parser1,new cljs.core.Keyword(null,"parser2","parser2",1013754688),parser2], null);
});
/**
 * Ordered choice, i.e., parser1 / parser2
 */
instaparse.combinators_source.ord = (function instaparse$combinators_source$ord(var_args){
var G__30173 = arguments.length;
switch (G__30173) {
case 0:
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___30175 = arguments.length;
var i__29106__auto___30176 = (0);
while(true){
if((i__29106__auto___30176 < len__29105__auto___30175)){
args_arr__29124__auto__.push((arguments[i__29106__auto___30176]));

var G__30177 = (i__29106__auto___30176 + (1));
i__29106__auto___30176 = G__30177;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((1)),(0),null));
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29125__auto__);

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

instaparse.combinators_source.ord.cljs$lang$applyTo = (function (seq30171){
var G__30172 = cljs.core.first.call(null,seq30171);
var seq30171__$1 = cljs.core.next.call(null,seq30171);
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic(G__30172,seq30171__$1);
});

instaparse.combinators_source.ord.cljs$lang$maxFixedArity = (1);

/**
 * Concatenation, i.e., parser1 parser2 ...
 */
instaparse.combinators_source.cat = (function instaparse$combinators_source$cat(var_args){
var args__29112__auto__ = [];
var len__29105__auto___30179 = arguments.length;
var i__29106__auto___30180 = (0);
while(true){
if((i__29106__auto___30180 < len__29105__auto___30179)){
args__29112__auto__.push((arguments[i__29106__auto___30180]));

var G__30181 = (i__29106__auto___30180 + (1));
i__29106__auto___30180 = G__30181;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
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

instaparse.combinators_source.cat.cljs$lang$applyTo = (function (seq30178){
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30178));
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
var G__30183 = arguments.length;
switch (G__30183) {
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28744__auto__ = (function instaparse$combinators_source$unhide_all_content_$_iter__30185(s__30186){
return (new cljs.core.LazySeq(null,(function (){
var s__30186__$1 = s__30186;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30186__$1);
if(temp__4657__auto__){
var s__30186__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30186__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__30186__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__30188 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__30187 = (0);
while(true){
if((i__30187 < size__28743__auto__)){
var vec__30189 = cljs.core._nth.call(null,c__28742__auto__,i__30187);
var k = cljs.core.nth.call(null,vec__30189,(0),null);
var v = cljs.core.nth.call(null,vec__30189,(1),null);
cljs.core.chunk_append.call(null,b__30188,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content.call(null,v)], null));

var G__30195 = (i__30187 + (1));
i__30187 = G__30195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30188),instaparse$combinators_source$unhide_all_content_$_iter__30185.call(null,cljs.core.chunk_rest.call(null,s__30186__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30188),null);
}
} else {
var vec__30192 = cljs.core.first.call(null,s__30186__$2);
var k = cljs.core.nth.call(null,vec__30192,(0),null);
var v = cljs.core.nth.call(null,vec__30192,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content.call(null,v)], null),instaparse$combinators_source$unhide_all_content_$_iter__30185.call(null,cljs.core.rest.call(null,s__30186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28744__auto__.call(null,grammar);
})());
});
/**
 * Recursively undoes the effect of hide-tag
 */
instaparse.combinators_source.unhide_tags = (function instaparse$combinators_source$unhide_tags(reduction_type,grammar){
var temp__4655__auto__ = instaparse.reduction.reduction_types.call(null,reduction_type);
if(cljs.core.truth_(temp__4655__auto__)){
var reduction = temp__4655__auto__;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28744__auto__ = ((function (reduction,temp__4655__auto__){
return (function instaparse$combinators_source$unhide_tags_$_iter__30196(s__30197){
return (new cljs.core.LazySeq(null,((function (reduction,temp__4655__auto__){
return (function (){
var s__30197__$1 = s__30197;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30197__$1);
if(temp__4657__auto__){
var s__30197__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30197__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__30197__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__30199 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__30198 = (0);
while(true){
if((i__30198 < size__28743__auto__)){
var vec__30200 = cljs.core._nth.call(null,c__28742__auto__,i__30198);
var k = cljs.core.nth.call(null,vec__30200,(0),null);
var v = cljs.core.nth.call(null,vec__30200,(1),null);
cljs.core.chunk_append.call(null,b__30199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null));

var G__30206 = (i__30198 + (1));
i__30198 = G__30206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30199),instaparse$combinators_source$unhide_tags_$_iter__30196.call(null,cljs.core.chunk_rest.call(null,s__30197__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30199),null);
}
} else {
var vec__30203 = cljs.core.first.call(null,s__30197__$2);
var k = cljs.core.nth.call(null,vec__30203,(0),null);
var v = cljs.core.nth.call(null,vec__30203,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,v,new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null),instaparse$combinators_source$unhide_tags_$_iter__30196.call(null,cljs.core.rest.call(null,s__30197__$2)));
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
return iter__28744__auto__.call(null,grammar);
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28744__auto__ = ((function (reduction,temp__4655__auto__){
return (function instaparse$combinators_source$unhide_all_$_iter__30207(s__30208){
return (new cljs.core.LazySeq(null,((function (reduction,temp__4655__auto__){
return (function (){
var s__30208__$1 = s__30208;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30208__$1);
if(temp__4657__auto__){
var s__30208__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30208__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__30208__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__30210 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__30209 = (0);
while(true){
if((i__30209 < size__28743__auto__)){
var vec__30211 = cljs.core._nth.call(null,c__28742__auto__,i__30209);
var k = cljs.core.nth.call(null,vec__30211,(0),null);
var v = cljs.core.nth.call(null,vec__30211,(1),null);
cljs.core.chunk_append.call(null,b__30210,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,instaparse.combinators_source.unhide_content.call(null,v),new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null));

var G__30217 = (i__30209 + (1));
i__30209 = G__30217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30210),instaparse$combinators_source$unhide_all_$_iter__30207.call(null,cljs.core.chunk_rest.call(null,s__30208__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30210),null);
}
} else {
var vec__30214 = cljs.core.first.call(null,s__30208__$2);
var k = cljs.core.nth.call(null,vec__30214,(0),null);
var v = cljs.core.nth.call(null,vec__30214,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,instaparse.combinators_source.unhide_content.call(null,v),new cljs.core.Keyword(null,"red","red",-969428204),reduction.call(null,k))], null),instaparse$combinators_source$unhide_all_$_iter__30207.call(null,cljs.core.rest.call(null,s__30208__$2)));
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
return iter__28744__auto__.call(null,grammar);
})());
} else {
return instaparse.util.throw_illegal_argument_exception.call(null,"Invalid output format ",reduction_type,". Use :enlive or :hiccup.");
}
});
instaparse.combinators_source.auto_whitespace_parser = (function instaparse$combinators_source$auto_whitespace_parser(parser,ws_parser){
var G__30219 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__30219__$1 = (((G__30219 instanceof cljs.core.Keyword))?G__30219.fqn:null);
switch (G__30219__$1) {
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
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"parsers","parsers",-804353827),cljs.core.map.call(null,((function (G__30219,G__30219__$1){
return (function (p1__30218_SHARP_){
return instaparse.combinators_source.auto_whitespace_parser.call(null,p1__30218_SHARP_,ws_parser);
});})(G__30219,G__30219__$1))
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30219__$1)].join('')));

}
});
instaparse.combinators_source.auto_whitespace = (function instaparse$combinators_source$auto_whitespace(grammar,start,grammar_ws,start_ws){
var ws_parser = instaparse.combinators_source.hide.call(null,instaparse.combinators_source.opt.call(null,instaparse.combinators_source.nt.call(null,start_ws)));
var grammar_ws__$1 = cljs.core.assoc.call(null,grammar_ws,start_ws,instaparse.combinators_source.hide_tag.call(null,grammar_ws.call(null,start_ws)));
var modified_grammar = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28744__auto__ = ((function (ws_parser,grammar_ws__$1){
return (function instaparse$combinators_source$auto_whitespace_$_iter__30221(s__30222){
return (new cljs.core.LazySeq(null,((function (ws_parser,grammar_ws__$1){
return (function (){
var s__30222__$1 = s__30222;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__30222__$1);
if(temp__4657__auto__){
var s__30222__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30222__$2)){
var c__28742__auto__ = cljs.core.chunk_first.call(null,s__30222__$2);
var size__28743__auto__ = cljs.core.count.call(null,c__28742__auto__);
var b__30224 = cljs.core.chunk_buffer.call(null,size__28743__auto__);
if((function (){var i__30223 = (0);
while(true){
if((i__30223 < size__28743__auto__)){
var vec__30225 = cljs.core._nth.call(null,c__28742__auto__,i__30223);
var nt = cljs.core.nth.call(null,vec__30225,(0),null);
var parser = cljs.core.nth.call(null,vec__30225,(1),null);
cljs.core.chunk_append.call(null,b__30224,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser.call(null,parser,ws_parser)], null));

var G__30231 = (i__30223 + (1));
i__30223 = G__30231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30224),instaparse$combinators_source$auto_whitespace_$_iter__30221.call(null,cljs.core.chunk_rest.call(null,s__30222__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30224),null);
}
} else {
var vec__30228 = cljs.core.first.call(null,s__30222__$2);
var nt = cljs.core.nth.call(null,vec__30228,(0),null);
var parser = cljs.core.nth.call(null,vec__30228,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser.call(null,parser,ws_parser)], null),instaparse$combinators_source$auto_whitespace_$_iter__30221.call(null,cljs.core.rest.call(null,s__30222__$2)));
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
return iter__28744__auto__.call(null,grammar);
})());
var final_grammar = cljs.core.assoc.call(null,modified_grammar,start,cljs.core.assoc.call(null,instaparse.combinators_source.cat.call(null,cljs.core.dissoc.call(null,modified_grammar.call(null,start),new cljs.core.Keyword(null,"red","red",-969428204)),ws_parser),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(modified_grammar.call(null,start))));
return cljs.core.merge.call(null,final_grammar,grammar_ws__$1);
});

//# sourceMappingURL=combinators_source.js.map?rel=1509844999361
