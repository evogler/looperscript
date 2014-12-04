// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.print');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
instaparse.print.paren_for_tags = (function paren_for_tags(tag_set,hidden_QMARK_,parser){if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core.not.call(null,hidden_QMARK_);if(and__3628__auto__)
{return tag_set.call(null,parser.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223)));
} else
{return and__3628__auto__;
}
})()))
{return ("("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.call(null,parser,false))+")");
} else
{return instaparse.print.combinators__GT_str.call(null,parser,false);
}
});
instaparse.print.paren_for_compound = cljs.core.partial.call(null,instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cat","cat",-1457810207),null,new cljs.core.Keyword(null,"ord","ord",1142548323),null,new cljs.core.Keyword(null,"alt","alt",-3214426),null], null), null));
/**
* Replaces whitespace characters with escape sequences for better printing
*/
instaparse.print.regexp_replace = (function regexp_replace(s){var G__8241 = s;switch (G__8241) {
case "\n":
return "\\n";

break;
case "\b":
return "\\b";

break;
case "\f":
return "\\f";

break;
case "\r":
return "\\r";

break;
case "\t":
return "\\t";

break;
default:
return s;

}
});
instaparse.print.regexp__GT_str = (function regexp__GT_str(r){return clojure.string.replace.call(null,("#\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,r.source,(1)))+"\""),/[\s]/,instaparse.print.regexp_replace);
});
/**
* Stringifies a parser built from combinators
*/
instaparse.print.combinators__GT_str = (function() {
var combinators__GT_str = null;
var combinators__GT_str__1 = (function (p){return combinators__GT_str.call(null,p,false);
});
var combinators__GT_str__2 = (function (p__8243,hidden_QMARK_){var map__8248 = p__8243;var map__8248__$1 = ((cljs.core.seq_QMARK_.call(null,map__8248))?cljs.core.apply.call(null,cljs.core.hash_map,map__8248):map__8248);var p = map__8248__$1;var tag = cljs.core.get.call(null,map__8248__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));var parsers = cljs.core.get.call(null,map__8248__$1,new cljs.core.Keyword(null,"parsers","parsers",-804353827));var parser2 = cljs.core.get.call(null,map__8248__$1,new cljs.core.Keyword(null,"parser2","parser2",1013754688));var parser1 = cljs.core.get.call(null,map__8248__$1,new cljs.core.Keyword(null,"parser1","parser1",-439601422));var parser = cljs.core.get.call(null,map__8248__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core.not.call(null,hidden_QMARK_);if(and__3628__auto__)
{return new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(p);
} else
{return and__3628__auto__;
}
})()))
{return ("<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(combinators__GT_str.call(null,p,true))+">");
} else
{var G__8249 = (((tag instanceof cljs.core.Keyword))?tag.fqn:null);switch (G__8249) {
case "neg":
return ("!"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser)));

break;
case "cat":
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.partial.call(null,instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ord","ord",1142548323),null,new cljs.core.Keyword(null,"alt","alt",-3214426),null], null), null),hidden_QMARK_),parsers));

break;
case "ord":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_tags.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt","alt",-3214426),null], null), null),hidden_QMARK_,parser1))+" / "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_tags.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt","alt",-3214426),null], null), null),hidden_QMARK_,parser2)));

break;
case "alt":
return clojure.string.join.call(null," | ",cljs.core.map.call(null,cljs.core.partial.call(null,instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ord","ord",1142548323),null], null), null),hidden_QMARK_),parsers));

break;
case "look":
return ("&"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser)));

break;
case "nt":
return cljs.core.subs.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(p))),(1));

break;
case "rep":
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(p)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(p))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(p))+"}");
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))+"{"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(p))+"}");
}

break;
case "star":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))+"*");

break;
case "string":
var sb__4581__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_8250_8253 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_8250_8253,sb__4581__auto__,G__8249,map__8248,map__8248__$1,p,tag,parsers,parser2,parser1,parser){
return (function (x__4582__auto__){return sb__4581__auto__.append(x__4582__auto__);
});})(_STAR_print_fn_STAR_8250_8253,sb__4581__auto__,G__8249,map__8248,map__8248__$1,p,tag,parsers,parser2,parser1,parser))
;
cljs.core.pr.call(null,new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(p));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_8250_8253;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4581__auto__));

break;
case "regexp":
return instaparse.print.regexp__GT_str.call(null,new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(p));

break;
case "plus":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))+"+");

break;
case "epsilon":
return "\u03B5";

break;
case "string-ci":
var sb__4581__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_8251_8254 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_8251_8254,sb__4581__auto__,G__8249,map__8248,map__8248__$1,p,tag,parsers,parser2,parser1,parser){
return (function (x__4582__auto__){return sb__4581__auto__.append(x__4582__auto__);
});})(_STAR_print_fn_STAR_8251_8254,sb__4581__auto__,G__8249,map__8248,map__8248__$1,p,tag,parsers,parser2,parser1,parser))
;
cljs.core.pr.call(null,new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(p));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_8251_8254;
}return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4581__auto__));

break;
case "opt":
return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))+"?");

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag))));

}
}
});
combinators__GT_str = function(p__8243,hidden_QMARK_){
switch(arguments.length){
case 1:
return combinators__GT_str__1.call(this,p__8243);
case 2:
return combinators__GT_str__2.call(this,p__8243,hidden_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
combinators__GT_str.cljs$core$IFn$_invoke$arity$1 = combinators__GT_str__1;
combinators__GT_str.cljs$core$IFn$_invoke$arity$2 = combinators__GT_str__2;
return combinators__GT_str;
})()
;
/**
* Takes a terminal symbol and a parser built from combinators,
* and returns a string for the rule.
*/
instaparse.print.rule__GT_str = (function rule__GT_str(terminal,parser){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reduction-type","reduction-type",-488293450).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser)),new cljs.core.Keyword(null,"raw","raw",1604651272)))
{return ("<"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,terminal))+"> = "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.call(null,parser)));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,terminal))+" = "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.call(null,parser)));
}
});
/**
* Takes a Parser object, i.e., something with a grammar map and a start
* production keyword, and stringifies it.
*/
instaparse.print.Parser__GT_str = (function Parser__GT_str(p__8255){var map__8265 = p__8255;var map__8265__$1 = ((cljs.core.seq_QMARK_.call(null,map__8265))?cljs.core.apply.call(null,cljs.core.hash_map,map__8265):map__8265);var grammar = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"grammar","grammar",1881328267));var start = cljs.core.get.call(null,map__8265__$1,new cljs.core.Keyword(null,"start-production","start-production",687546537));return clojure.string.join.call(null,"\n",cljs.core.cons.call(null,instaparse.print.rule__GT_str.call(null,start,grammar.call(null,start)),(function (){var iter__4379__auto__ = ((function (map__8265,map__8265__$1,grammar,start){
return (function iter__8266(s__8267){return (new cljs.core.LazySeq(null,((function (map__8265,map__8265__$1,grammar,start){
return (function (){var s__8267__$1 = s__8267;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8267__$1);if(temp__4126__auto__)
{var s__8267__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8267__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__8267__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__8269 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__8268 = (0);while(true){
if((i__8268 < size__4378__auto__))
{var vec__8272 = cljs.core._nth.call(null,c__4377__auto__,i__8268);var terminal = cljs.core.nth.call(null,vec__8272,(0),null);var parser = cljs.core.nth.call(null,vec__8272,(1),null);if(cljs.core.not_EQ_.call(null,terminal,start))
{cljs.core.chunk_append.call(null,b__8269,instaparse.print.rule__GT_str.call(null,terminal,parser));
{
var G__8274 = (i__8268 + (1));
i__8268 = G__8274;
continue;
}
} else
{{
var G__8275 = (i__8268 + (1));
i__8268 = G__8275;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8269),iter__8266.call(null,cljs.core.chunk_rest.call(null,s__8267__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8269),null);
}
} else
{var vec__8273 = cljs.core.first.call(null,s__8267__$2);var terminal = cljs.core.nth.call(null,vec__8273,(0),null);var parser = cljs.core.nth.call(null,vec__8273,(1),null);if(cljs.core.not_EQ_.call(null,terminal,start))
{return cljs.core.cons.call(null,instaparse.print.rule__GT_str.call(null,terminal,parser),iter__8266.call(null,cljs.core.rest.call(null,s__8267__$2)));
} else
{{
var G__8276 = cljs.core.rest.call(null,s__8267__$2);
s__8267__$1 = G__8276;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(map__8265,map__8265__$1,grammar,start))
,null,null));
});})(map__8265,map__8265__$1,grammar,start))
;return iter__4379__auto__.call(null,grammar);
})()));
});
