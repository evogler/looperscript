// Compiled by ClojureScript 1.9.908 {}
goog.provide('instaparse.cfg');
goog.require('cljs.core');
goog.require('instaparse.combinators_source');
goog.require('instaparse.reduction');
goog.require('instaparse.gll');
goog.require('instaparse.util');
goog.require('clojure.string');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
/**
 * When true all string literal terminals in built grammar will be treated as case insensitive
 */
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = false;
/**
 * Adds a comment to a Clojure regex, or no-op in ClojureScript
 */
instaparse.cfg.regex_doc = (function instaparse$cfg$regex_doc(pattern_str,comment){
return cljs.core.re_pattern.call(null,pattern_str);
});
instaparse.cfg.single_quoted_string = instaparse.cfg.regex_doc.call(null,/'[^'\\]*(?:\\.[^'\\]*)*'/,"Single-quoted string");
instaparse.cfg.single_quoted_regexp = instaparse.cfg.regex_doc.call(null,/#'[^'\\]*(?:\\.[^'\\]*)*'/,"Single-quoted regexp");
instaparse.cfg.double_quoted_string = instaparse.cfg.regex_doc.call(null,/\"[^\"\\]*(?:\\.[^\"\\]*)*\"/,"Double-quoted string");
instaparse.cfg.double_quoted_regexp = instaparse.cfg.regex_doc.call(null,/#\"[^\"\\]*(?:\\.[^\"\\]*)*\"/,"Double-quoted regexp");
instaparse.cfg.inside_comment = /(?:(?!(?:\(\*|\*\)))[\s\S])*/;
instaparse.cfg.ws = instaparse.cfg.regex_doc.call(null,"[,\\s]*","optional whitespace");
instaparse.cfg.opt_whitespace = instaparse.combinators_source.hide.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)));
instaparse.cfg.cfg = instaparse.reduction.apply_standard_reductions.call(null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"neg","neg",1800032960),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"ord","ord",1142548323),new cljs.core.Keyword(null,"rule-separator","rule-separator",1539322213),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"look","look",-539441433),new cljs.core.Keyword(null,"rule","rule",729973257),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"hide-nt","hide-nt",-228813845),new cljs.core.Keyword(null,"inside-comment","inside-comment",1258069708),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"factor","factor",-2103172748),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"epsilon","epsilon",-730158570),new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927),new cljs.core.Keyword(null,"rules-or-parser","rules-or-parser",-314380386),new cljs.core.Keyword(null,"opt","opt",-794706369)],[instaparse.combinators_source.cat.call(null,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"!")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"factor","factor",-2103172748))),instaparse.combinators_source.plus.call(null,instaparse.combinators_source.cat.call(null,instaparse.cfg.opt_whitespace,instaparse.combinators_source.alt.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"factor","factor",-2103172748)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"look","look",-539441433)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"neg","neg",1800032960))),instaparse.cfg.opt_whitespace)),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"cat","cat",-1457810207)),instaparse.combinators_source.plus.call(null,instaparse.combinators_source.cat.call(null,instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"/")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"cat","cat",-1457810207))))),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.string.call(null,":"),instaparse.combinators_source.string.call(null,":="),instaparse.combinators_source.string.call(null,"::="),instaparse.combinators_source.string.call(null,"=")),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"cat","cat",-1457810207)),instaparse.combinators_source.star.call(null,instaparse.combinators_source.cat.call(null,instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"|")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"cat","cat",-1457810207))))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"&")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"factor","factor",-2103172748))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.alt.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"nt","nt",-835425781)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"hide-nt","hide-nt",-228813845))),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"rule-separator","rule-separator",1539322213))),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.combinators_source.hide.call(null,instaparse.combinators_source.alt.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.string.call(null,";"),instaparse.combinators_source.string.call(null,".")),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"opt-whitespace","opt-whitespace",1115207927)))))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.neg.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"epsilon","epsilon",-730158570))),instaparse.combinators_source.regexp.call(null,instaparse.cfg.regex_doc.call(null,"[^, \\r\\t\\n<>(){}\\[\\]+*?:=|'\"#&!;./]+","Non-terminal"))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"<")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"nt","nt",-835425781)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,">"))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.regexp.call(null,instaparse.cfg.inside_comment),instaparse.combinators_source.star.call(null,instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"comment","comment",532206069)),instaparse.combinators_source.regexp.call(null,instaparse.cfg.inside_comment)))),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.cat.call(null,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"{")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"}"))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"factor","factor",-2103172748)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"*")))),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.regexp.call(null,instaparse.cfg.single_quoted_string),instaparse.combinators_source.regexp.call(null,instaparse.cfg.double_quoted_string)),instaparse.combinators_source.hide_tag.call(null,instaparse.combinators_source.cat.call(null,instaparse.cfg.opt_whitespace,instaparse.combinators_source.plus.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"rule","rule",729973257))))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"<")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,">"))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"(")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,")"))),instaparse.combinators_source.hide_tag.call(null,instaparse.combinators_source.alt.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"alt","alt",-3214426)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"ord","ord",1142548323)))),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.regexp.call(null,instaparse.cfg.single_quoted_regexp),instaparse.combinators_source.regexp.call(null,instaparse.cfg.double_quoted_regexp)),instaparse.combinators_source.hide_tag.call(null,instaparse.combinators_source.alt.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"nt","nt",-835425781)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"string","string",-1989541586)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"regexp","regexp",-541372782)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"opt","opt",-794706369)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"star","star",279424429)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"plus","plus",211540661)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"paren","paren",-294107600)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"hide","hide",-596913169)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"epsilon","epsilon",-730158570)))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.string.call(null,"(*"),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"inside-comment","inside-comment",1258069708)),instaparse.combinators_source.string.call(null,"*)")),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"factor","factor",-2103172748)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"+"))),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.string.call(null,"Epsilon"),instaparse.combinators_source.string.call(null,"epsilon"),instaparse.combinators_source.string.call(null,"EPSILON"),instaparse.combinators_source.string.call(null,"eps"),instaparse.combinators_source.string.call(null,"\u03B5")),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.regexp.call(null,instaparse.cfg.ws),instaparse.combinators_source.star.call(null,instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"comment","comment",532206069)),instaparse.combinators_source.regexp.call(null,instaparse.cfg.ws)))),instaparse.combinators_source.hide_tag.call(null,instaparse.combinators_source.alt.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366)),instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)))),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.cat.call(null,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"[")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"alt-or-ord","alt-or-ord",310249425)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"]"))),instaparse.combinators_source.cat.call(null,instaparse.combinators_source.nt.call(null,new cljs.core.Keyword(null,"factor","factor",-2103172748)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide.call(null,instaparse.combinators_source.string.call(null,"?"))))]));
instaparse.cfg.tag = cljs.core.first;
instaparse.cfg.contents = cljs.core.next;
instaparse.cfg.content = cljs.core.fnext;
/**
 * Converts escaped single-quotes to unescaped, and unescaped double-quotes to escaped
 */
instaparse.cfg.escape = (function instaparse$cfg$escape(s){
var sq = cljs.core.seq.call(null,s);
var v = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,sq);
if(cljs.core.truth_(temp__4655__auto__)){
var c = temp__4655__auto__;
var G__30745 = c;
switch (G__30745) {
case "\\":
var temp__4655__auto____$1 = cljs.core.second.call(null,sq);
if(cljs.core.truth_(temp__4655__auto____$1)){
var c2 = temp__4655__auto____$1;
if(cljs.core._EQ_.call(null,c2,"'")){
var G__30747 = cljs.core.drop.call(null,(2),sq);
var G__30748 = cljs.core.conj.call(null,v,c2);
sq = G__30747;
v = G__30748;
continue;
} else {
var G__30749 = cljs.core.drop.call(null,(2),sq);
var G__30750 = cljs.core.conj.call(null,v,c,c2);
sq = G__30749;
v = G__30750;
continue;
}
} else {
return instaparse.util.throw_runtime_exception.call(null,"Encountered backslash character at end of string: ",s);
}

break;
case "\"":
var G__30751 = cljs.core.next.call(null,sq);
var G__30752 = cljs.core.conj.call(null,v,"\\","\"");
sq = G__30751;
v = G__30752;
continue;

break;
default:
var G__30753 = cljs.core.next.call(null,sq);
var G__30754 = cljs.core.conj.call(null,v,c);
sq = G__30753;
v = G__30754;
continue;

}
} else {
return cljs.core.apply.call(null,cljs.core.str,v);
}
break;
}
});
instaparse.cfg.safe_read_string = (function instaparse$cfg$safe_read_string(s){
return cljs.tools.reader.read_string_STAR_.call(null,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s),null,null,null);
});
/**
 * Converts single quoted string to double-quoted
 */
instaparse.cfg.process_string = (function instaparse$cfg$process_string(s){
var stripped = cljs.core.subs.call(null,s,(1),(cljs.core.count.call(null,s) - (1)));
var remove_escaped_single_quotes = instaparse.cfg.escape.call(null,stripped);
var final_string = instaparse.cfg.safe_read_string.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(remove_escaped_single_quotes),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''));
return final_string;
});
/**
 * Converts single quoted regexp to double-quoted
 */
instaparse.cfg.process_regexp = (function instaparse$cfg$process_regexp(s){
var stripped = cljs.core.subs.call(null,s,(2),(cljs.core.count.call(null,s) - (1)));
var remove_escaped_single_quotes = instaparse.cfg.escape.call(null,stripped);
var final_string = cljs.core.re_pattern.call(null,remove_escaped_single_quotes);
return final_string;
});
/**
 * Convert one parsed rule from the grammar into combinators
 */
instaparse.cfg.build_rule = (function instaparse$cfg$build_rule(tree){
while(true){
var G__30755 = instaparse.cfg.tag.call(null,tree);
var G__30755__$1 = (((G__30755 instanceof cljs.core.Keyword))?G__30755.fqn:null);
switch (G__30755__$1) {
case "rule":
var vec__30756 = instaparse.cfg.contents.call(null,tree);
var nt = cljs.core.nth.call(null,vec__30756,(0),null);
var alt_or_ord = cljs.core.nth.call(null,vec__30756,(1),null);
if(cljs.core._EQ_.call(null,instaparse.cfg.tag.call(null,nt),new cljs.core.Keyword(null,"hide-nt","hide-nt",-228813845))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,instaparse.cfg.content.call(null,instaparse.cfg.content.call(null,nt))),instaparse.combinators_source.hide_tag.call(null,instaparse.cfg.build_rule.call(null,alt_or_ord))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,instaparse.cfg.content.call(null,nt)),instaparse.cfg.build_rule.call(null,alt_or_ord)], null);
}

break;
case "nt":
return instaparse.combinators_source.nt.call(null,cljs.core.keyword.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "alt":
return cljs.core.apply.call(null,instaparse.combinators_source.alt,cljs.core.map.call(null,instaparse.cfg.build_rule,instaparse.cfg.contents.call(null,tree)));

break;
case "ord":
return cljs.core.apply.call(null,instaparse.combinators_source.ord,cljs.core.map.call(null,instaparse.cfg.build_rule,instaparse.cfg.contents.call(null,tree)));

break;
case "paren":
var G__30760 = instaparse.cfg.content.call(null,tree);
tree = G__30760;
continue;

break;
case "hide":
return instaparse.combinators_source.hide.call(null,instaparse.cfg.build_rule.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "cat":
return cljs.core.apply.call(null,instaparse.combinators_source.cat,cljs.core.map.call(null,instaparse.cfg.build_rule,instaparse.cfg.contents.call(null,tree)));

break;
case "string":
return ((instaparse.cfg._STAR_case_insensitive_literals_STAR_)?instaparse.combinators_source.string_ci:instaparse.combinators_source.string).call(null,instaparse.cfg.process_string.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "regexp":
return instaparse.combinators_source.regexp.call(null,instaparse.cfg.process_regexp.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "opt":
return instaparse.combinators_source.opt.call(null,instaparse.cfg.build_rule.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "star":
return instaparse.combinators_source.star.call(null,instaparse.cfg.build_rule.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "plus":
return instaparse.combinators_source.plus.call(null,instaparse.cfg.build_rule.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "look":
return instaparse.combinators_source.look.call(null,instaparse.cfg.build_rule.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "neg":
return instaparse.combinators_source.neg.call(null,instaparse.cfg.build_rule.call(null,instaparse.cfg.content.call(null,tree)));

break;
case "epsilon":
return instaparse.combinators_source.Epsilon;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30755__$1)].join('')));

}
break;
}
});
/**
 * Returns a sequence of all non-terminals in a parser built from combinators.
 */
instaparse.cfg.seq_nt = (function instaparse$cfg$seq_nt(parser){
while(true){
var G__30761 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__30761__$1 = (((G__30761 instanceof cljs.core.Keyword))?G__30761.fqn:null);
switch (G__30761__$1) {
case "nt":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(parser)], null);

break;
case "string":
case "string-ci":
case "char":
case "regexp":
case "epsilon":
return cljs.core.PersistentVector.EMPTY;

break;
case "opt":
case "plus":
case "star":
case "look":
case "neg":
case "rep":
var G__30763 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser);
parser = G__30763;
continue;

break;
case "alt":
case "cat":
return cljs.core.mapcat.call(null,instaparse.cfg.seq_nt,new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser));

break;
case "ord":
return cljs.core.mapcat.call(null,instaparse.cfg.seq_nt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(parser)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30761__$1)].join('')));

}
break;
}
});
/**
 * Throw error if grammar uses any invalid non-terminals in its productions
 */
instaparse.cfg.check_grammar = (function instaparse$cfg$check_grammar(grammar_map){
var valid_nts_30768 = cljs.core.set.call(null,cljs.core.keys.call(null,grammar_map));
var seq__30764_30769 = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.mapcat.call(null,instaparse.cfg.seq_nt,cljs.core.vals.call(null,grammar_map))));
var chunk__30765_30770 = null;
var count__30766_30771 = (0);
var i__30767_30772 = (0);
while(true){
if((i__30767_30772 < count__30766_30771)){
var nt_30773 = cljs.core._nth.call(null,chunk__30765_30770,i__30767_30772);
if(cljs.core.truth_(valid_nts_30768.call(null,nt_30773))){
} else {
instaparse.util.throw_runtime_exception.call(null,cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nt_30773)].join(''),(1))," occurs on the right-hand side of your grammar, but not on the left");
}

var G__30774 = seq__30764_30769;
var G__30775 = chunk__30765_30770;
var G__30776 = count__30766_30771;
var G__30777 = (i__30767_30772 + (1));
seq__30764_30769 = G__30774;
chunk__30765_30770 = G__30775;
count__30766_30771 = G__30776;
i__30767_30772 = G__30777;
continue;
} else {
var temp__4657__auto___30778 = cljs.core.seq.call(null,seq__30764_30769);
if(temp__4657__auto___30778){
var seq__30764_30779__$1 = temp__4657__auto___30778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30764_30779__$1)){
var c__28828__auto___30780 = cljs.core.chunk_first.call(null,seq__30764_30779__$1);
var G__30781 = cljs.core.chunk_rest.call(null,seq__30764_30779__$1);
var G__30782 = c__28828__auto___30780;
var G__30783 = cljs.core.count.call(null,c__28828__auto___30780);
var G__30784 = (0);
seq__30764_30769 = G__30781;
chunk__30765_30770 = G__30782;
count__30766_30771 = G__30783;
i__30767_30772 = G__30784;
continue;
} else {
var nt_30785 = cljs.core.first.call(null,seq__30764_30779__$1);
if(cljs.core.truth_(valid_nts_30768.call(null,nt_30785))){
} else {
instaparse.util.throw_runtime_exception.call(null,cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nt_30785)].join(''),(1))," occurs on the right-hand side of your grammar, but not on the left");
}

var G__30786 = cljs.core.next.call(null,seq__30764_30779__$1);
var G__30787 = null;
var G__30788 = (0);
var G__30789 = (0);
seq__30764_30769 = G__30786;
chunk__30765_30770 = G__30787;
count__30766_30771 = G__30788;
i__30767_30772 = G__30789;
continue;
}
} else {
}
}
break;
}

return grammar_map;
});
instaparse.cfg.build_parser = (function instaparse$cfg$build_parser(spec,output_format){
var rules = instaparse.gll.parse.call(null,instaparse.cfg.cfg,new cljs.core.Keyword(null,"rules","rules",1198912366),spec,false);
if((rules instanceof instaparse.gll.Failure)){
return instaparse.util.throw_runtime_exception.call(null,"Error parsing grammar specification:\n",(function (){var sb__29016__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30790_30792 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30791_30793 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30790_30792,_STAR_print_fn_STAR_30791_30793,sb__29016__auto__,rules){
return (function (x__29017__auto__){
return sb__29016__auto__.append(x__29017__auto__);
});})(_STAR_print_newline_STAR_30790_30792,_STAR_print_fn_STAR_30791_30793,sb__29016__auto__,rules))
;

try{cljs.core.println.call(null,rules);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30791_30793;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30790_30792;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29016__auto__)].join('');
})());
} else {
var productions = cljs.core.map.call(null,instaparse.cfg.build_rule,rules);
var start_production = cljs.core.first.call(null,cljs.core.first.call(null,productions));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.cfg.check_grammar.call(null,instaparse.reduction.apply_standard_reductions.call(null,output_format,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,productions))),new cljs.core.Keyword(null,"start-production","start-production",687546537),start_production,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),output_format], null);
}
});
instaparse.cfg.build_parser_from_combinators = (function instaparse$cfg$build_parser_from_combinators(grammar_map,output_format,start_production){
if((start_production == null)){
return instaparse.util.throw_illegal_argument_exception.call(null,"When you build a parser from a map of parser combinators, you must provide a start production using the :start keyword argument.");
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.cfg.check_grammar.call(null,instaparse.reduction.apply_standard_reductions.call(null,output_format,grammar_map)),new cljs.core.Keyword(null,"start-production","start-production",687546537),start_production,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),output_format], null);
}
});
/**
 * Takes an EBNF grammar specification string and returns the combinator version.
 * If you give it the right-hand side of a rule, it will return the combinator equivalent.
 * If you give it a series of rules, it will give you back a grammar map.   
 * Useful for combining with other combinators.
 */
instaparse.cfg.ebnf = (function instaparse$cfg$ebnf(spec){
var rules = instaparse.gll.parse.call(null,instaparse.cfg.cfg,new cljs.core.Keyword(null,"rules-or-parser","rules-or-parser",-314380386),spec,false);
if((rules instanceof instaparse.gll.Failure)){
return instaparse.util.throw_runtime_exception.call(null,"Error parsing grammar specification:\n",(function (){var sb__29016__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30794_30796 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30795_30797 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30794_30796,_STAR_print_fn_STAR_30795_30797,sb__29016__auto__,rules){
return (function (x__29017__auto__){
return sb__29016__auto__.append(x__29017__auto__);
});})(_STAR_print_newline_STAR_30794_30796,_STAR_print_fn_STAR_30795_30797,sb__29016__auto__,rules))
;

try{cljs.core.println.call(null,rules);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30795_30797;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30794_30796;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29016__auto__)].join('');
})());
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rule","rule",729973257),cljs.core.ffirst.call(null,rules))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,instaparse.cfg.build_rule,rules));
} else {
return instaparse.cfg.build_rule.call(null,cljs.core.first.call(null,rules));

}
}
});

//# sourceMappingURL=cfg.js.map
