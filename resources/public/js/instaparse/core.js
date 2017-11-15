// Compiled by ClojureScript 1.9.908 {}
goog.provide('instaparse.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('instaparse.gll');
goog.require('instaparse.cfg');
goog.require('instaparse.failure');
goog.require('instaparse.print');
goog.require('instaparse.reduction');
goog.require('instaparse.transform');
goog.require('instaparse.abnf');
goog.require('instaparse.repeat');
goog.require('instaparse.combinators_source');
goog.require('instaparse.line_col');
goog.require('instaparse.viz');
goog.require('instaparse.util');
instaparse.core._STAR_default_output_format_STAR_ = new cljs.core.Keyword(null,"hiccup","hiccup",1218876238);
/**
 * Changes the default output format.  Input should be :hiccup or :enlive
 */
instaparse.core.set_default_output_format_BANG_ = (function instaparse$core$set_default_output_format_BANG_(type){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null).call(null,type))){
} else {
throw (new Error("Assert failed: (#{:hiccup :enlive} type)"));
}

return instaparse.core._STAR_default_output_format_STAR_ = type;
});
instaparse.core._STAR_default_input_format_STAR_ = new cljs.core.Keyword(null,"ebnf","ebnf",31967825);
/**
 * Changes the default input format.  Input should be :abnf or :ebnf
 */
instaparse.core.set_default_input_format_BANG_ = (function instaparse$core$set_default_input_format_BANG_(type){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ebnf","ebnf",31967825),null,new cljs.core.Keyword(null,"abnf","abnf",-152462052),null], null), null).call(null,type))){
} else {
throw (new Error("Assert failed: (#{:ebnf :abnf} type)"));
}

return instaparse.core._STAR_default_input_format_STAR_ = type;
});


instaparse.core.unhide_parser = (function instaparse$core$unhide_parser(parser,unhide){
var G__31935 = unhide;
if(cljs.core._EQ_.call(null,null,G__31935)){
return parser;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"content","content",15833224),G__31935)){
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_all_content.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977),G__31935)){
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_tags.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"all","all",892129742),G__31935)){
return cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.unhide_all.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser),new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31935)].join('')));

}
}
}
}
});
/**
 * Use parser to parse the text.  Returns first parse tree found
 * that completely parses the text.  If no parse tree is possible, returns
 * a Failure object.
 * 
 * Optional keyword arguments:
 * :start :keyword  (where :keyword is name of starting production rule)
 * :partial true    (parses that don't consume the whole string are okay)
 * :total true      (if parse fails, embed failure node in tree)
 * :unhide <:tags or :content or :all> (for this parse, disable hiding)
 * :optimize :memory   (when possible, employ strategy to use less memory)
 * 
 * Clj only:
 * :trace true      (print diagnostic trace while parsing)
 */
instaparse.core.parse = (function instaparse$core$parse(var_args){
var args__29112__auto__ = [];
var len__29105__auto___31942 = arguments.length;
var i__29106__auto___31943 = (0);
while(true){
if((i__29106__auto___31943 < len__29105__auto___31942)){
args__29112__auto__.push((arguments[i__29106__auto___31943]));

var G__31944 = (i__29106__auto___31943 + (1));
i__29106__auto___31943 = G__31944;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__31939){
var map__31940 = p__31939;
var map__31940__$1 = ((((!((map__31940 == null)))?((((map__31940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31940):map__31940);
var options = map__31940__$1;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword(null,"memory","memory",-1449401430),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"optimize","optimize",-1912349448)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :memory} (get options :optimize))"));
}

var start_production = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"partial","partial",241141745),false);
var optimize_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),false);
var unhide = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695));
var trace_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
var parser__$1 = instaparse.core.unhide_parser.call(null,parser,unhide);
if(cljs.core.truth_(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parse_total.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,instaparse.reduction.node_builders.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
if(cljs.core.truth_((function (){var and__27924__auto__ = optimize_QMARK_;
if(cljs.core.truth_(and__27924__auto__)){
return cljs.core.not.call(null,partial_QMARK_);
} else {
return and__27924__auto__;
}
})())){
var result = instaparse.repeat.try_repeating_parse_strategy.call(null,parser__$1,text,start_production);
if(cljs.core.truth_(instaparse.core.failure_QMARK_.call(null,result))){
return instaparse.gll.parse.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);
} else {
return result;
}
} else {
return instaparse.gll.parse.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
}
});

instaparse.core.parse.cljs$lang$maxFixedArity = (2);

instaparse.core.parse.cljs$lang$applyTo = (function (seq31936){
var G__31937 = cljs.core.first.call(null,seq31936);
var seq31936__$1 = cljs.core.next.call(null,seq31936);
var G__31938 = cljs.core.first.call(null,seq31936__$1);
var seq31936__$2 = cljs.core.next.call(null,seq31936__$1);
return instaparse.core.parse.cljs$core$IFn$_invoke$arity$variadic(G__31937,G__31938,seq31936__$2);
});

/**
 * Use parser to parse the text.  Returns lazy seq of all parse trees
 * that completely parse the text.  If no parse tree is possible, returns
 * () with a Failure object attached as metadata.
 * 
 * Optional keyword arguments:
 * :start :keyword  (where :keyword is name of starting production rule)
 * :partial true    (parses that don't consume the whole string are okay)
 * :total true      (if parse fails, embed failure node in tree)
 * :unhide <:tags or :content or :all> (for this parse, disable hiding)
 * 
 * Clj only:
 * :trace true      (print diagnostic trace while parsing)
 */
instaparse.core.parses = (function instaparse$core$parses(var_args){
var args__29112__auto__ = [];
var len__29105__auto___31951 = arguments.length;
var i__29106__auto___31952 = (0);
while(true){
if((i__29106__auto___31952 < len__29105__auto___31951)){
args__29112__auto__.push((arguments[i__29106__auto___31952]));

var G__31953 = (i__29106__auto___31952 + (1));
i__29106__auto___31952 = G__31953;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic = (function (parser,text,p__31948){
var map__31949 = p__31948;
var map__31949__$1 = ((((!((map__31949 == null)))?((((map__31949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31949):map__31949);
var options = map__31949__$1;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [null,null,new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"all","all",892129742),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :tags :content :all} (get options :unhide))"));
}

var start_production = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(parser));
var partial_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"partial","partial",241141745),false);
var unhide = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"unhide","unhide",-413983695));
var trace_QMARK_ = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
var parser__$1 = instaparse.core.unhide_parser.call(null,parser,unhide);
if(cljs.core.truth_(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(options))){
return instaparse.gll.parses_total.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_,instaparse.reduction.node_builders.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
return instaparse.gll.parses.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(parser__$1),start_production,text,partial_QMARK_);

}
});

instaparse.core.parses.cljs$lang$maxFixedArity = (2);

instaparse.core.parses.cljs$lang$applyTo = (function (seq31945){
var G__31946 = cljs.core.first.call(null,seq31945);
var seq31945__$1 = cljs.core.next.call(null,seq31945);
var G__31947 = cljs.core.first.call(null,seq31945__$1);
var seq31945__$2 = cljs.core.next.call(null,seq31945__$1);
return instaparse.core.parses.cljs$core$IFn$_invoke$arity$variadic(G__31946,G__31947,seq31945__$2);
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.core.Parser = (function (grammar,start_production,output_format,__meta,__extmap,__hash){
this.grammar = grammar;
this.start_production = start_production;
this.output_format = output_format;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28576__auto__,k__28577__auto__){
var self__ = this;
var this__28576__auto____$1 = this;
return this__28576__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28577__auto__,null);
});

instaparse.core.Parser.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28578__auto__,k31955,else__28579__auto__){
var self__ = this;
var this__28578__auto____$1 = this;
var G__31960 = k31955;
var G__31960__$1 = (((G__31960 instanceof cljs.core.Keyword))?G__31960.fqn:null);
switch (G__31960__$1) {
case "grammar":
return self__.grammar;

break;
case "start-production":
return self__.start_production;

break;
case "output-format":
return self__.output_format;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31955,else__28579__auto__);

}
});

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28590__auto__,writer__28591__auto__,opts__28592__auto__){
var self__ = this;
var this__28590__auto____$1 = this;
var pr_pair__28593__auto__ = ((function (this__28590__auto____$1){
return (function (keyval__28594__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28591__auto__,cljs.core.pr_writer,""," ","",opts__28592__auto__,keyval__28594__auto__);
});})(this__28590__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28591__auto__,pr_pair__28593__auto__,"#instaparse.core.Parser{",", ","}",opts__28592__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-production","start-production",687546537),self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-format","output-format",-1826382676),self__.output_format],null))], null),self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31954){
var self__ = this;
var G__31954__$1 = this;
return (new cljs.core.RecordIter((0),G__31954__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"start-production","start-production",687546537),new cljs.core.Keyword(null,"output-format","output-format",-1826382676)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

instaparse.core.Parser.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28574__auto__){
var self__ = this;
var this__28574__auto____$1 = this;
return self__.__meta;
});

instaparse.core.Parser.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28571__auto__){
var self__ = this;
var this__28571__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.core.Parser.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28580__auto__){
var self__ = this;
var this__28580__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28572__auto__){
var self__ = this;
var this__28572__auto____$1 = this;
var h__28390__auto__ = self__.__hash;
if(!((h__28390__auto__ == null))){
return h__28390__auto__;
} else {
var h__28390__auto____$1 = ((function (h__28390__auto__,this__28572__auto____$1){
return (function (coll__28573__auto__){
return (-360509877 ^ cljs.core.hash_unordered_coll.call(null,coll__28573__auto__));
});})(h__28390__auto__,this__28572__auto____$1))
.call(null,this__28572__auto____$1);
self__.__hash = h__28390__auto____$1;

return h__28390__auto____$1;
}
});

instaparse.core.Parser.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31956,other31957){
var self__ = this;
var this31956__$1 = this;
return (!((other31957 == null))) && ((this31956__$1.constructor === other31957.constructor)) && (cljs.core._EQ_.call(null,this31956__$1.grammar,other31957.grammar)) && (cljs.core._EQ_.call(null,this31956__$1.start_production,other31957.start_production)) && (cljs.core._EQ_.call(null,this31956__$1.output_format,other31957.output_format)) && (cljs.core._EQ_.call(null,this31956__$1.__extmap,other31957.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28585__auto__,k__28586__auto__){
var self__ = this;
var this__28585__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-production","start-production",687546537),null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),null], null), null),k__28586__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28585__auto____$1),self__.__meta),k__28586__auto__);
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28586__auto__)),null));
}
});

instaparse.core.Parser.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28583__auto__,k__28584__auto__,G__31954){
var self__ = this;
var this__28583__auto____$1 = this;
var pred__31961 = cljs.core.keyword_identical_QMARK_;
var expr__31962 = k__28584__auto__;
if(cljs.core.truth_(pred__31961.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),expr__31962))){
return (new instaparse.core.Parser(G__31954,self__.start_production,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31961.call(null,new cljs.core.Keyword(null,"start-production","start-production",687546537),expr__31962))){
return (new instaparse.core.Parser(self__.grammar,G__31954,self__.output_format,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31961.call(null,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),expr__31962))){
return (new instaparse.core.Parser(self__.grammar,self__.start_production,G__31954,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28584__auto__,G__31954),null));
}
}
}
});

instaparse.core.Parser.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28588__auto__){
var self__ = this;
var this__28588__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-production","start-production",687546537),self__.start_production],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-format","output-format",-1826382676),self__.output_format],null))], null),self__.__extmap));
});

instaparse.core.Parser.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28575__auto__,G__31954){
var self__ = this;
var this__28575__auto____$1 = this;
return (new instaparse.core.Parser(self__.grammar,self__.start_production,self__.output_format,G__31954,self__.__extmap,self__.__hash));
});

instaparse.core.Parser.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28581__auto__,entry__28582__auto__){
var self__ = this;
var this__28581__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28582__auto__)){
return this__28581__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28582__auto__,(0)),cljs.core._nth.call(null,entry__28582__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28581__auto____$1,entry__28582__auto__);
}
});

instaparse.core.Parser.prototype.call = (function() {
var G__31965 = null;
var G__31965__2 = (function (self__,text){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text);
});
var G__31965__4 = (function (self__,text,key1,val1){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,key1,val1);
});
var G__31965__6 = (function (self__,text,key1,val1,key2,val2){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2);
});
var G__31965__8 = (function (self__,text,key1,val1,key2,val2,key3,val3){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2,key3,val3);
});
var G__31965__10 = (function (self__,text,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h);
});
var G__31965__12 = (function (self__,text,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j);
});
var G__31965__14 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l);
});
var G__31965__16 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});
var G__31965__18 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
var G__31965__20 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
var G__31965__22 = (function (self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more){
var self__ = this;
var self____$1 = this;
var parser = self____$1;
return cljs.core.apply.call(null,instaparse.core.parse,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more);
});
G__31965 = function(self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more){
switch(arguments.length){
case 2:
return G__31965__2.call(this,self__,text);
case 4:
return G__31965__4.call(this,self__,text,a,b);
case 6:
return G__31965__6.call(this,self__,text,a,b,c,d);
case 8:
return G__31965__8.call(this,self__,text,a,b,c,d,e,f);
case 10:
return G__31965__10.call(this,self__,text,a,b,c,d,e,f,g,h);
case 12:
return G__31965__12.call(this,self__,text,a,b,c,d,e,f,g,h,i,j);
case 14:
return G__31965__14.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l);
case 16:
return G__31965__16.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 18:
return G__31965__18.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 20:
return G__31965__20.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 22:
return G__31965__22.call(this,self__,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__31965.cljs$core$IFn$_invoke$arity$2 = G__31965__2;
G__31965.cljs$core$IFn$_invoke$arity$4 = G__31965__4;
G__31965.cljs$core$IFn$_invoke$arity$6 = G__31965__6;
G__31965.cljs$core$IFn$_invoke$arity$8 = G__31965__8;
G__31965.cljs$core$IFn$_invoke$arity$10 = G__31965__10;
G__31965.cljs$core$IFn$_invoke$arity$12 = G__31965__12;
G__31965.cljs$core$IFn$_invoke$arity$14 = G__31965__14;
G__31965.cljs$core$IFn$_invoke$arity$16 = G__31965__16;
G__31965.cljs$core$IFn$_invoke$arity$18 = G__31965__18;
G__31965.cljs$core$IFn$_invoke$arity$20 = G__31965__20;
G__31965.cljs$core$IFn$_invoke$arity$22 = G__31965__22;
return G__31965;
})()
;

instaparse.core.Parser.prototype.apply = (function (self__,args31959){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31959)));
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$1 = (function (text){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$3 = (function (text,key1,val1){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,key1,val1);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$5 = (function (text,key1,val1,key2,val2){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$7 = (function (text,key1,val1,key2,val2,key3,val3){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,key1,val1,key2,val2,key3,val3);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$9 = (function (text,a,b,c,d,e,f,g,h){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$11 = (function (text,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$13 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$15 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$17 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$19 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var parser = this;
return instaparse.core.parse.call(null,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});

instaparse.core.Parser.prototype.cljs$core$IFn$_invoke$arity$21 = (function (text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more){
var self__ = this;
var parser = this;
return cljs.core.apply.call(null,instaparse.core.parse,parser,text,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,more);
});

instaparse.core.Parser.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"grammar","grammar",-773107502,null),new cljs.core.Symbol(null,"start-production","start-production",-1966889232,null),new cljs.core.Symbol(null,"output-format","output-format",-185851149,null)], null);
});

instaparse.core.Parser.cljs$lang$type = true;

instaparse.core.Parser.cljs$lang$ctorPrSeq = (function (this__28612__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.core/Parser");
});

instaparse.core.Parser.cljs$lang$ctorPrWriter = (function (this__28612__auto__,writer__28613__auto__){
return cljs.core._write.call(null,writer__28613__auto__,"instaparse.core/Parser");
});

instaparse.core.__GT_Parser = (function instaparse$core$__GT_Parser(grammar,start_production,output_format){
return (new instaparse.core.Parser(grammar,start_production,output_format,null,null,null));
});

instaparse.core.map__GT_Parser = (function instaparse$core$map__GT_Parser(G__31958){
return (new instaparse.core.Parser(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(G__31958),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(G__31958),new cljs.core.Keyword(null,"output-format","output-format",-1826382676).cljs$core$IFn$_invoke$arity$1(G__31958),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31958,new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"start-production","start-production",687546537),new cljs.core.Keyword(null,"output-format","output-format",-1826382676))),null));
});

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

instaparse.core.Parser.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (parser,writer,_){
var parser__$1 = this;
return cljs.core._write.call(null,writer,instaparse.print.Parser__GT_str.call(null,parser__$1));
});
/**
 * Takes a string specification of a context-free grammar,
 *   or a URI for a text file containing such a specification (Clj only),
 *   or a map of parser combinators and returns a parser for that grammar.
 * 
 *   Optional keyword arguments:
 *   :input-format :ebnf
 *   or
 *   :input-format :abnf
 * 
 *   :output-format :enlive
 *   or
 *   :output-format :hiccup
 * 
 *   :start :keyword (where :keyword is name of starting production rule)
 * 
 *   :string-ci true (treat all string literals as case insensitive)
 * 
 *   :auto-whitespace (:standard or :comma)
 *   or
 *   :auto-whitespace custom-whitespace-parser
 * 
 *   Clj only:
 *   :no-slurp true (disables use of slurp to auto-detect whether
 *                input is a URI.  When using this option, input
 *                must be a grammar string or grammar map.  Useful
 *                for platforms where slurp is slow or not available.)
 */
instaparse.core.parser = (function instaparse$core$parser(var_args){
var args__29112__auto__ = [];
var len__29105__auto___31975 = arguments.length;
var i__29106__auto___31976 = (0);
while(true){
if((i__29106__auto___31976 < len__29105__auto___31975)){
args__29112__auto__.push((arguments[i__29106__auto___31976]));

var G__31977 = (i__29106__auto___31976 + (1));
i__29106__auto___31976 = G__31977;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((1) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((1)),(0),null)):null);
return instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29113__auto__);
});

instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic = (function (grammar_specification,p__31968){
var map__31969 = p__31968;
var map__31969__$1 = ((((!((map__31969 == null)))?((((map__31969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31969):map__31969);
var options = map__31969__$1;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"ebnf","ebnf",31967825),null,new cljs.core.Keyword(null,"abnf","abnf",-152462052),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"input-format","input-format",-422703481)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :ebnf :abnf} (get options :input-format))"));
}

if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [null,null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),null,new cljs.core.Keyword(null,"enlive","enlive",1679023921),null], null), null),cljs.core.get.call(null,options,new cljs.core.Keyword(null,"output-format","output-format",-1826382676)))){
} else {
throw (new Error("Assert failed: (contains? #{nil :hiccup :enlive} (get options :output-format))"));
}

if((function (){var ws_parser = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317));
return ((ws_parser == null)) || (cljs.core.contains_QMARK_.call(null,instaparse.core.standard_whitespace_parsers,ws_parser)) || ((cljs.core.map_QMARK_.call(null,ws_parser)) && (cljs.core.contains_QMARK_.call(null,ws_parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267))) && (cljs.core.contains_QMARK_.call(null,ws_parser,new cljs.core.Keyword(null,"start-production","start-production",687546537))));
})()){
} else {
throw (new Error("Assert failed: (let [ws-parser (get options :auto-whitespace)] (or (nil? ws-parser) (contains? standard-whitespace-parsers ws-parser) (and (map? ws-parser) (contains? ws-parser :grammar) (contains? ws-parser :start-production))))"));
}

var input_format = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"input-format","input-format",-422703481),instaparse.core._STAR_default_input_format_STAR_);
var build_parser = (function (){var G__31971 = input_format;
var G__31971__$1 = (((G__31971 instanceof cljs.core.Keyword))?G__31971.fqn:null);
switch (G__31971__$1) {
case "abnf":
return instaparse.abnf.build_parser;

break;
case "ebnf":
if(cljs.core.truth_(cljs.core.get.call(null,options,new cljs.core.Keyword(null,"string-ci","string-ci",374631805)))){
return ((function (G__31971,G__31971__$1,input_format,map__31969,map__31969__$1,options){
return (function (spec,output_format){
var _STAR_case_insensitive_literals_STAR_31972 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = true;

try{return instaparse.cfg.build_parser.call(null,spec,output_format);
}finally {instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR_31972;
}});
;})(G__31971,G__31971__$1,input_format,map__31969,map__31969__$1,options))
} else {
return instaparse.cfg.build_parser;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31971__$1)].join('')));

}
})();
var output_format = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),instaparse.core._STAR_default_output_format_STAR_);
var start = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"start","start",-355208981),null);
var built_parser = ((typeof grammar_specification === 'string')?(function (){var parser = build_parser.call(null,grammar_specification,output_format);
if(cljs.core.truth_(start)){
return instaparse.core.map__GT_Parser.call(null,cljs.core.assoc.call(null,parser,new cljs.core.Keyword(null,"start-production","start-production",687546537),start));
} else {
return instaparse.core.map__GT_Parser.call(null,parser);
}
})():((cljs.core.map_QMARK_.call(null,grammar_specification))?(function (){var parser = instaparse.cfg.build_parser_from_combinators.call(null,grammar_specification,output_format,start);
return instaparse.core.map__GT_Parser.call(null,parser);
})():((cljs.core.vector_QMARK_.call(null,grammar_specification))?(function (){var start__$1 = (cljs.core.truth_(start)?start:grammar_specification.call(null,(0)));
var parser = instaparse.cfg.build_parser_from_combinators.call(null,cljs.core.apply.call(null,cljs.core.hash_map,grammar_specification),output_format,start__$1);
return instaparse.core.map__GT_Parser.call(null,parser);
})():instaparse.util.throw_illegal_argument_exception.call(null,"Expected string, map, or vector as grammar specification, got ",cljs.core.pr_str.call(null,grammar_specification))
)));
var auto_whitespace = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317));
var whitespace_parser = (((auto_whitespace instanceof cljs.core.Keyword))?cljs.core.get.call(null,instaparse.core.standard_whitespace_parsers,auto_whitespace):auto_whitespace);
var temp__4655__auto__ = whitespace_parser;
if(cljs.core.truth_(temp__4655__auto__)){
var map__31973 = temp__4655__auto__;
var map__31973__$1 = ((((!((map__31973 == null)))?((((map__31973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31973):map__31973);
var ws_grammar = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"grammar","grammar",1881328267));
var ws_start = cljs.core.get.call(null,map__31973__$1,new cljs.core.Keyword(null,"start-production","start-production",687546537));
return cljs.core.assoc.call(null,built_parser,new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.combinators_source.auto_whitespace.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(built_parser),new cljs.core.Keyword(null,"start-production","start-production",687546537).cljs$core$IFn$_invoke$arity$1(built_parser),ws_grammar,ws_start));
} else {
return built_parser;
}
});

instaparse.core.parser.cljs$lang$maxFixedArity = (1);

instaparse.core.parser.cljs$lang$applyTo = (function (seq31966){
var G__31967 = cljs.core.first.call(null,seq31966);
var seq31966__$1 = cljs.core.next.call(null,seq31966);
return instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(G__31967,seq31966__$1);
});

/**
 * Tests whether a parse result is a failure.
 */
instaparse.core.failure_QMARK_ = (function instaparse$core$failure_QMARK_(result){
return ((result instanceof instaparse.gll.failure_type)) || ((cljs.core.meta.call(null,result) instanceof instaparse.gll.failure_type));
});
/**
 * Extracts failure object from failed parse result.
 */
instaparse.core.get_failure = (function instaparse$core$get_failure(result){
if((result instanceof instaparse.gll.failure_type)){
return result;
} else {
if((cljs.core.meta.call(null,result) instanceof instaparse.gll.failure_type)){
return cljs.core.meta.call(null,result);
} else {
return null;

}
}
});
instaparse.core.standard_whitespace_parsers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"standard","standard",-1769206695),instaparse.core.parser.call(null,"whitespace = #'\\s+'"),new cljs.core.Keyword(null,"comma","comma",1699024745),instaparse.core.parser.call(null,"whitespace = #'[,\\s]+'")], null);
instaparse.core.transform = instaparse.transform.transform;
instaparse.core.add_line_and_column_info_to_metadata = instaparse.line_col.add_line_col_spans;
instaparse.core.span = instaparse.viz.span;

//# sourceMappingURL=core.js.map?rel=1510190749675
