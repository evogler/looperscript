// Compiled by ClojureScript 1.9.908 {}
goog.provide('instaparse.gll');
goog.require('cljs.core');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.failure');
goog.require('instaparse.reduction');
goog.require('instaparse.combinators_source');
goog.require('instaparse.print');
goog.require('goog.i18n.uChar');
instaparse.gll._STAR_diagnostic_char_lookahead_STAR_ = (10);

instaparse.gll.get_parser = (function instaparse$gll$get_parser(grammar,p){
return cljs.core.get.call(null,grammar,p,p);
});














instaparse.gll._parse = (function instaparse$gll$_parse(parser,index,tramp){

var G__14882 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__14882__$1 = (((G__14882 instanceof cljs.core.Keyword))?G__14882.fqn:null);
switch (G__14882__$1) {
case "nt":
return instaparse.gll.non_terminal_parse.call(null,parser,index,tramp);

break;
case "alt":
return instaparse.gll.alt_parse.call(null,parser,index,tramp);

break;
case "cat":
return instaparse.gll.cat_parse.call(null,parser,index,tramp);

break;
case "string":
return instaparse.gll.string_parse.call(null,parser,index,tramp);

break;
case "string-ci":
return instaparse.gll.string_case_insensitive_parse.call(null,parser,index,tramp);

break;
case "char":
return instaparse.gll.char_range_parse.call(null,parser,index,tramp);

break;
case "epsilon":
return instaparse.gll.epsilon_parse.call(null,parser,index,tramp);

break;
case "opt":
return instaparse.gll.opt_parse.call(null,parser,index,tramp);

break;
case "plus":
return instaparse.gll.plus_parse.call(null,parser,index,tramp);

break;
case "rep":
return instaparse.gll.rep_parse.call(null,parser,index,tramp);

break;
case "star":
return instaparse.gll.star_parse.call(null,parser,index,tramp);

break;
case "regexp":
return instaparse.gll.regexp_parse.call(null,parser,index,tramp);

break;
case "look":
return instaparse.gll.lookahead_parse.call(null,parser,index,tramp);

break;
case "neg":
return instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp);

break;
case "ord":
return instaparse.gll.ordered_alt_parse.call(null,parser,index,tramp);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14882__$1)].join('')));

}
});













instaparse.gll._full_parse = (function instaparse$gll$_full_parse(parser,index,tramp){

var G__14884 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__14884__$1 = (((G__14884 instanceof cljs.core.Keyword))?G__14884.fqn:null);
switch (G__14884__$1) {
case "nt":
return instaparse.gll.non_terminal_full_parse.call(null,parser,index,tramp);

break;
case "alt":
return instaparse.gll.alt_full_parse.call(null,parser,index,tramp);

break;
case "cat":
return instaparse.gll.cat_full_parse.call(null,parser,index,tramp);

break;
case "string":
return instaparse.gll.string_full_parse.call(null,parser,index,tramp);

break;
case "string-ci":
return instaparse.gll.string_case_insensitive_full_parse.call(null,parser,index,tramp);

break;
case "char":
return instaparse.gll.char_range_full_parse.call(null,parser,index,tramp);

break;
case "epsilon":
return instaparse.gll.epsilon_full_parse.call(null,parser,index,tramp);

break;
case "opt":
return instaparse.gll.opt_full_parse.call(null,parser,index,tramp);

break;
case "plus":
return instaparse.gll.plus_full_parse.call(null,parser,index,tramp);

break;
case "rep":
return instaparse.gll.rep_full_parse.call(null,parser,index,tramp);

break;
case "star":
return instaparse.gll.star_full_parse.call(null,parser,index,tramp);

break;
case "regexp":
return instaparse.gll.regexp_full_parse.call(null,parser,index,tramp);

break;
case "look":
return instaparse.gll.lookahead_full_parse.call(null,parser,index,tramp);

break;
case "neg":
return instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp);

break;
case "ord":
return instaparse.gll.ordered_alt_full_parse.call(null,parser,index,tramp);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14884__$1)].join('')));

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
instaparse.gll.Failure = (function (index,reason,__meta,__extmap,__hash){
this.index = index;
this.reason = reason;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8058__auto__,k__8059__auto__){
var self__ = this;
var this__8058__auto____$1 = this;
return this__8058__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8059__auto__,null);
});

instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8060__auto__,k14887,else__8061__auto__){
var self__ = this;
var this__8060__auto____$1 = this;
var G__14891 = k14887;
var G__14891__$1 = (((G__14891 instanceof cljs.core.Keyword))?G__14891.fqn:null);
switch (G__14891__$1) {
case "index":
return self__.index;

break;
case "reason":
return self__.reason;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14887,else__8061__auto__);

}
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8072__auto__,writer__8073__auto__,opts__8074__auto__){
var self__ = this;
var this__8072__auto____$1 = this;
var pr_pair__8075__auto__ = ((function (this__8072__auto____$1){
return (function (keyval__8076__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8073__auto__,cljs.core.pr_writer,""," ","",opts__8074__auto__,keyval__8076__auto__);
});})(this__8072__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8073__auto__,pr_pair__8075__auto__,"#instaparse.gll.Failure{",", ","}",opts__8074__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason],null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14886){
var self__ = this;
var G__14886__$1 = this;
return (new cljs.core.RecordIter((0),G__14886__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"reason","reason",-2070751759)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

instaparse.gll.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8056__auto__){
var self__ = this;
var this__8056__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8062__auto__){
var self__ = this;
var this__8062__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7872__auto__ = self__.__hash;
if(!((h__7872__auto__ == null))){
return h__7872__auto__;
} else {
var h__7872__auto____$1 = ((function (h__7872__auto__,this__8054__auto____$1){
return (function (coll__8055__auto__){
return (-1140991288 ^ cljs.core.hash_unordered_coll.call(null,coll__8055__auto__));
});})(h__7872__auto__,this__8054__auto____$1))
.call(null,this__8054__auto____$1);
self__.__hash = h__7872__auto____$1;

return h__7872__auto____$1;
}
});

instaparse.gll.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14888,other14889){
var self__ = this;
var this14888__$1 = this;
return (!((other14889 == null))) && ((this14888__$1.constructor === other14889.constructor)) && (cljs.core._EQ_.call(null,this14888__$1.index,other14889.index)) && (cljs.core._EQ_.call(null,this14888__$1.reason,other14889.reason)) && (cljs.core._EQ_.call(null,this14888__$1.__extmap,other14889.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8067__auto__,k__8068__auto__){
var self__ = this;
var this__8067__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null], null), null),k__8068__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8067__auto____$1),self__.__meta),k__8068__auto__);
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8068__auto__)),null));
}
});

instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8065__auto__,k__8066__auto__,G__14886){
var self__ = this;
var this__8065__auto____$1 = this;
var pred__14892 = cljs.core.keyword_identical_QMARK_;
var expr__14893 = k__8066__auto__;
if(cljs.core.truth_(pred__14892.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__14893))){
return (new instaparse.gll.Failure(G__14886,self__.reason,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14892.call(null,new cljs.core.Keyword(null,"reason","reason",-2070751759),expr__14893))){
return (new instaparse.gll.Failure(self__.index,G__14886,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8066__auto__,G__14886),null));
}
}
});

instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8070__auto__){
var self__ = this;
var this__8070__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason],null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8057__auto__,G__14886){
var self__ = this;
var this__8057__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,G__14886,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8063__auto__,entry__8064__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8064__auto__)){
return this__8063__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8064__auto__,(0)),cljs.core._nth.call(null,entry__8064__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8063__auto____$1,entry__8064__auto__);
}
});

instaparse.gll.Failure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"reason","reason",-430220232,null)], null);
});

instaparse.gll.Failure.cljs$lang$type = true;

instaparse.gll.Failure.cljs$lang$ctorPrSeq = (function (this__8094__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Failure");
});

instaparse.gll.Failure.cljs$lang$ctorPrWriter = (function (this__8094__auto__,writer__8095__auto__){
return cljs.core._write.call(null,writer__8095__auto__,"instaparse.gll/Failure");
});

instaparse.gll.__GT_Failure = (function instaparse$gll$__GT_Failure(index,reason){
return (new instaparse.gll.Failure(index,reason,null,null,null));
});

instaparse.gll.map__GT_Failure = (function instaparse$gll$map__GT_Failure(G__14890){
return (new instaparse.gll.Failure(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__14890),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(G__14890),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__14890,new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"reason","reason",-2070751759))),null));
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (fail,writer,_){
var fail__$1 = this;
return cljs.core._write.call(null,writer,(function (){var sb__8445__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14896_14898 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14897_14899 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14896_14898,_STAR_print_fn_STAR_14897_14899,sb__8445__auto__,fail__$1){
return (function (x__8446__auto__){
return sb__8445__auto__.append(x__8446__auto__);
});})(_STAR_print_newline_STAR_14896_14898,_STAR_print_fn_STAR_14897_14899,sb__8445__auto__,fail__$1))
;

try{instaparse.failure.pprint_failure.call(null,fail__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14897_14899;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14896_14898;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8445__auto__)].join('');
})());
});
instaparse.gll.failure_type = cljs.core.type.call(null,(new instaparse.gll.Failure(null,null,null,null,null)));
instaparse.gll.text__GT_segment = (function instaparse$gll$text__GT_segment(text){
return text;
});
instaparse.gll.sub_sequence = cljs.core.subs;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
instaparse.gll.Tramp = (function (grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_,__meta,__extmap,__hash){
this.grammar = grammar;
this.text = text;
this.segment = segment;
this.fail_index = fail_index;
this.node_builder = node_builder;
this.stack = stack;
this.next_stack = next_stack;
this.generation = generation;
this.negative_listeners = negative_listeners;
this.msg_cache = msg_cache;
this.nodes = nodes;
this.success = success;
this.failure = failure;
this.trace_QMARK_ = trace_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8058__auto__,k__8059__auto__){
var self__ = this;
var this__8058__auto____$1 = this;
return this__8058__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8059__auto__,null);
});

instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8060__auto__,k14901,else__8061__auto__){
var self__ = this;
var this__8060__auto____$1 = this;
var G__14905 = k14901;
var G__14905__$1 = (((G__14905 instanceof cljs.core.Keyword))?G__14905.fqn:null);
switch (G__14905__$1) {
case "grammar":
return self__.grammar;

break;
case "text":
return self__.text;

break;
case "segment":
return self__.segment;

break;
case "fail-index":
return self__.fail_index;

break;
case "node-builder":
return self__.node_builder;

break;
case "stack":
return self__.stack;

break;
case "next-stack":
return self__.next_stack;

break;
case "generation":
return self__.generation;

break;
case "negative-listeners":
return self__.negative_listeners;

break;
case "msg-cache":
return self__.msg_cache;

break;
case "nodes":
return self__.nodes;

break;
case "success":
return self__.success;

break;
case "failure":
return self__.failure;

break;
case "trace?":
return self__.trace_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14901,else__8061__auto__);

}
});

instaparse.gll.Tramp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8072__auto__,writer__8073__auto__,opts__8074__auto__){
var self__ = this;
var this__8072__auto____$1 = this;
var pr_pair__8075__auto__ = ((function (this__8072__auto____$1){
return (function (keyval__8076__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8073__auto__,cljs.core.pr_writer,""," ","",opts__8074__auto__,keyval__8076__auto__);
});})(this__8072__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8073__auto__,pr_pair__8075__auto__,"#instaparse.gll.Tramp{",", ","}",opts__8074__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"success","success",1890645906),self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trace?","trace?",1730690679),self__.trace_QMARK_],null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14900){
var self__ = this;
var G__14900__$1 = this;
return (new cljs.core.RecordIter((0),G__14900__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"fail-index","fail-index",248726923),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"trace?","trace?",1730690679)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

instaparse.gll.Tramp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8056__auto__){
var self__ = this;
var this__8056__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Tramp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8062__auto__){
var self__ = this;
var this__8062__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7872__auto__ = self__.__hash;
if(!((h__7872__auto__ == null))){
return h__7872__auto__;
} else {
var h__7872__auto____$1 = ((function (h__7872__auto__,this__8054__auto____$1){
return (function (coll__8055__auto__){
return (166878148 ^ cljs.core.hash_unordered_coll.call(null,coll__8055__auto__));
});})(h__7872__auto__,this__8054__auto____$1))
.call(null,this__8054__auto____$1);
self__.__hash = h__7872__auto____$1;

return h__7872__auto____$1;
}
});

instaparse.gll.Tramp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14902,other14903){
var self__ = this;
var this14902__$1 = this;
return (!((other14903 == null))) && ((this14902__$1.constructor === other14903.constructor)) && (cljs.core._EQ_.call(null,this14902__$1.grammar,other14903.grammar)) && (cljs.core._EQ_.call(null,this14902__$1.text,other14903.text)) && (cljs.core._EQ_.call(null,this14902__$1.segment,other14903.segment)) && (cljs.core._EQ_.call(null,this14902__$1.fail_index,other14903.fail_index)) && (cljs.core._EQ_.call(null,this14902__$1.node_builder,other14903.node_builder)) && (cljs.core._EQ_.call(null,this14902__$1.stack,other14903.stack)) && (cljs.core._EQ_.call(null,this14902__$1.next_stack,other14903.next_stack)) && (cljs.core._EQ_.call(null,this14902__$1.generation,other14903.generation)) && (cljs.core._EQ_.call(null,this14902__$1.negative_listeners,other14903.negative_listeners)) && (cljs.core._EQ_.call(null,this14902__$1.msg_cache,other14903.msg_cache)) && (cljs.core._EQ_.call(null,this14902__$1.nodes,other14903.nodes)) && (cljs.core._EQ_.call(null,this14902__$1.success,other14903.success)) && (cljs.core._EQ_.call(null,this14902__$1.failure,other14903.failure)) && (cljs.core._EQ_.call(null,this14902__$1.trace_QMARK_,other14903.trace_QMARK_)) && (cljs.core._EQ_.call(null,this14902__$1.__extmap,other14903.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8067__auto__,k__8068__auto__){
var self__ = this;
var this__8067__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),null,new cljs.core.Keyword(null,"generation","generation",-2132542044),null,new cljs.core.Keyword(null,"failure","failure",720415879),null,new cljs.core.Keyword(null,"fail-index","fail-index",248726923),null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),null,new cljs.core.Keyword(null,"success","success",1890645906),null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),null,new cljs.core.Keyword(null,"segment","segment",-964921196),null,new cljs.core.Keyword(null,"stack","stack",-793405930),null,new cljs.core.Keyword(null,"trace?","trace?",1730690679),null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__8068__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8067__auto____$1),self__.__meta),k__8068__auto__);
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8068__auto__)),null));
}
});

instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8065__auto__,k__8066__auto__,G__14900){
var self__ = this;
var this__8065__auto____$1 = this;
var pred__14906 = cljs.core.keyword_identical_QMARK_;
var expr__14907 = k__8066__auto__;
if(cljs.core.truth_(pred__14906.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),expr__14907))){
return (new instaparse.gll.Tramp(G__14900,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14906.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__14907))){
return (new instaparse.gll.Tramp(self__.grammar,G__14900,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14906.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196),expr__14907))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__14900,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14906.call(null,new cljs.core.Keyword(null,"fail-index","fail-index",248726923),expr__14907))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__14900,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14906.call(null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),expr__14907))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__14900,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14906.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930),expr__14907))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__14900,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14906.call(null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),expr__14907))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__14900,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14906.call(null,new cljs.core.Keyword(null,"generation","generation",-2132542044),expr__14907))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__14900,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14906.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),expr__14907))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__14900,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14906.call(null,new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),expr__14907))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__14900,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14906.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),expr__14907))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__14900,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14906.call(null,new cljs.core.Keyword(null,"success","success",1890645906),expr__14907))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__14900,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14906.call(null,new cljs.core.Keyword(null,"failure","failure",720415879),expr__14907))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__14900,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14906.call(null,new cljs.core.Keyword(null,"trace?","trace?",1730690679),expr__14907))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__14900,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8066__auto__,G__14900),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

instaparse.gll.Tramp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8070__auto__){
var self__ = this;
var this__8070__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"success","success",1890645906),self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trace?","trace?",1730690679),self__.trace_QMARK_],null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8057__auto__,G__14900){
var self__ = this;
var this__8057__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,G__14900,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8063__auto__,entry__8064__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8064__auto__)){
return this__8063__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8064__auto__,(0)),cljs.core._nth.call(null,entry__8064__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8063__auto____$1,entry__8064__auto__);
}
});

instaparse.gll.Tramp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"grammar","grammar",-773107502,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"segment","segment",675610331,null),new cljs.core.Symbol(null,"fail-index","fail-index",1889258450,null),new cljs.core.Symbol(null,"node-builder","node-builder",-316031078,null),new cljs.core.Symbol(null,"stack","stack",847125597,null),new cljs.core.Symbol(null,"next-stack","next-stack",1158600799,null),new cljs.core.Symbol(null,"generation","generation",-492010517,null),new cljs.core.Symbol(null,"negative-listeners","negative-listeners",1695772619,null),new cljs.core.Symbol(null,"msg-cache","msg-cache",906756457,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"success","success",-763789863,null),new cljs.core.Symbol(null,"failure","failure",-1934019890,null),new cljs.core.Symbol(null,"trace?","trace?",-923745090,null)], null);
});

instaparse.gll.Tramp.cljs$lang$type = true;

instaparse.gll.Tramp.cljs$lang$ctorPrSeq = (function (this__8094__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Tramp");
});

instaparse.gll.Tramp.cljs$lang$ctorPrWriter = (function (this__8094__auto__,writer__8095__auto__){
return cljs.core._write.call(null,writer__8095__auto__,"instaparse.gll/Tramp");
});

instaparse.gll.__GT_Tramp = (function instaparse$gll$__GT_Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_,null,null,null));
});

instaparse.gll.map__GT_Tramp = (function instaparse$gll$map__GT_Tramp(G__14904){
return (new instaparse.gll.Tramp(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(G__14904),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__14904),new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(G__14904),new cljs.core.Keyword(null,"fail-index","fail-index",248726923).cljs$core$IFn$_invoke$arity$1(G__14904),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605).cljs$core$IFn$_invoke$arity$1(G__14904),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(G__14904),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(G__14904),new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(G__14904),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(G__14904),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070).cljs$core$IFn$_invoke$arity$1(G__14904),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(G__14904),new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(G__14904),new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(G__14904),new cljs.core.Keyword(null,"trace?","trace?",1730690679).cljs$core$IFn$_invoke$arity$1(G__14904),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__14904,new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"fail-index","fail-index",248726923),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"trace?","trace?",1730690679))),null));
});

instaparse.gll.make_tramp = (function instaparse$gll$make_tramp(var_args){
var G__14911 = arguments.length;
switch (G__14911) {
case 2:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$2 = (function (grammar,text){
return instaparse.gll.make_tramp.call(null,grammar,text,instaparse.gll.text__GT_segment.call(null,text),(-1),null);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$3 = (function (grammar,text,segment){
return instaparse.gll.make_tramp.call(null,grammar,text,segment,(-1),null);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$4 = (function (grammar,text,fail_index,node_builder){
return instaparse.gll.make_tramp.call(null,grammar,text,instaparse.gll.text__GT_segment.call(null,text),fail_index,node_builder);
});

instaparse.gll.make_tramp.cljs$core$IFn$_invoke$arity$5 = (function (grammar,text,segment,fail_index,node_builder){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,cljs.core.sorted_map_by.call(null,cljs.core._GT_)),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,(new instaparse.gll.Failure((0),cljs.core.PersistentVector.EMPTY,null,null,null))),false,null,null,null));
});

instaparse.gll.make_tramp.cljs$lang$maxFixedArity = 5;

instaparse.gll.make_success = (function instaparse$gll$make_success(result,index){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});
instaparse.gll.total_success_QMARK_ = (function instaparse$gll$total_success_QMARK_(tramp,s){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(s));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
instaparse.gll.Node = (function (listeners,full_listeners,results,full_results,__meta,__extmap,__hash){
this.listeners = listeners;
this.full_listeners = full_listeners;
this.results = results;
this.full_results = full_results;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8058__auto__,k__8059__auto__){
var self__ = this;
var this__8058__auto____$1 = this;
return this__8058__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8059__auto__,null);
});

instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8060__auto__,k14914,else__8061__auto__){
var self__ = this;
var this__8060__auto____$1 = this;
var G__14918 = k14914;
var G__14918__$1 = (((G__14918 instanceof cljs.core.Keyword))?G__14918.fqn:null);
switch (G__14918__$1) {
case "listeners":
return self__.listeners;

break;
case "full-listeners":
return self__.full_listeners;

break;
case "results":
return self__.results;

break;
case "full-results":
return self__.full_results;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k14914,else__8061__auto__);

}
});

instaparse.gll.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8072__auto__,writer__8073__auto__,opts__8074__auto__){
var self__ = this;
var this__8072__auto____$1 = this;
var pr_pair__8075__auto__ = ((function (this__8072__auto____$1){
return (function (keyval__8076__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8073__auto__,cljs.core.pr_writer,""," ","",opts__8074__auto__,keyval__8076__auto__);
});})(this__8072__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8073__auto__,pr_pair__8075__auto__,"#instaparse.gll.Node{",", ","}",opts__8074__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"results","results",-1134170113),self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results],null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14913){
var self__ = this;
var G__14913__$1 = this;
return (new cljs.core.RecordIter((0),G__14913__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"full-results","full-results",-1500225407)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

instaparse.gll.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8056__auto__){
var self__ = this;
var this__8056__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8053__auto__){
var self__ = this;
var this__8053__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8062__auto__){
var self__ = this;
var this__8062__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8054__auto__){
var self__ = this;
var this__8054__auto____$1 = this;
var h__7872__auto__ = self__.__hash;
if(!((h__7872__auto__ == null))){
return h__7872__auto__;
} else {
var h__7872__auto____$1 = ((function (h__7872__auto__,this__8054__auto____$1){
return (function (coll__8055__auto__){
return (-1610074144 ^ cljs.core.hash_unordered_coll.call(null,coll__8055__auto__));
});})(h__7872__auto__,this__8054__auto____$1))
.call(null,this__8054__auto____$1);
self__.__hash = h__7872__auto____$1;

return h__7872__auto____$1;
}
});

instaparse.gll.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14915,other14916){
var self__ = this;
var this14915__$1 = this;
return (!((other14916 == null))) && ((this14915__$1.constructor === other14916.constructor)) && (cljs.core._EQ_.call(null,this14915__$1.listeners,other14916.listeners)) && (cljs.core._EQ_.call(null,this14915__$1.full_listeners,other14916.full_listeners)) && (cljs.core._EQ_.call(null,this14915__$1.results,other14916.results)) && (cljs.core._EQ_.call(null,this14915__$1.full_results,other14916.full_results)) && (cljs.core._EQ_.call(null,this14915__$1.__extmap,other14916.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8067__auto__,k__8068__auto__){
var self__ = this;
var this__8067__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"full-results","full-results",-1500225407),null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),null,new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),k__8068__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8067__auto____$1),self__.__meta),k__8068__auto__);
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8068__auto__)),null));
}
});

instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8065__auto__,k__8066__auto__,G__14913){
var self__ = this;
var this__8065__auto____$1 = this;
var pred__14919 = cljs.core.keyword_identical_QMARK_;
var expr__14920 = k__8066__auto__;
if(cljs.core.truth_(pred__14919.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445),expr__14920))){
return (new instaparse.gll.Node(G__14913,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14919.call(null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),expr__14920))){
return (new instaparse.gll.Node(self__.listeners,G__14913,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14919.call(null,new cljs.core.Keyword(null,"results","results",-1134170113),expr__14920))){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__14913,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__14919.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407),expr__14920))){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__14913,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8066__auto__,G__14913),null));
}
}
}
}
});

instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8070__auto__){
var self__ = this;
var this__8070__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"results","results",-1134170113),self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results],null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8057__auto__,G__14913){
var self__ = this;
var this__8057__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__14913,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8063__auto__,entry__8064__auto__){
var self__ = this;
var this__8063__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8064__auto__)){
return this__8063__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8064__auto__,(0)),cljs.core._nth.call(null,entry__8064__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8063__auto____$1,entry__8064__auto__);
}
});

instaparse.gll.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.Symbol(null,"full-listeners","full-listeners",1691153354,null),new cljs.core.Symbol(null,"results","results",506361414,null),new cljs.core.Symbol(null,"full-results","full-results",140306120,null)], null);
});

instaparse.gll.Node.cljs$lang$type = true;

instaparse.gll.Node.cljs$lang$ctorPrSeq = (function (this__8094__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Node");
});

instaparse.gll.Node.cljs$lang$ctorPrWriter = (function (this__8094__auto__,writer__8095__auto__){
return cljs.core._write.call(null,writer__8095__auto__,"instaparse.gll/Node");
});

instaparse.gll.__GT_Node = (function instaparse$gll$__GT_Node(listeners,full_listeners,results,full_results){
return (new instaparse.gll.Node(listeners,full_listeners,results,full_results,null,null,null));
});

instaparse.gll.map__GT_Node = (function instaparse$gll$map__GT_Node(G__14917){
return (new instaparse.gll.Node(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(G__14917),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(G__14917),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(G__14917),new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(G__14917),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__14917,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"full-results","full-results",-1500225407))),null));
});

instaparse.gll.make_node = (function instaparse$gll$make_node(){
return (new instaparse.gll.Node(cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),null,null,null));
});
/**
 * Pushes an item onto the trampoline's stack
 */
instaparse.gll.push_stack = (function instaparse$gll$push_stack(tramp,item){

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,item);
});
/**
 * Pushes onto stack a message to a given listener about a result
 */
instaparse.gll.push_message = (function instaparse$gll$push_message(tramp,listener,result){
var cache = new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070).cljs$core$IFn$_invoke$arity$1(tramp);
var i = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result);
var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [listener,i], null);
var c = cljs.core.get.call(null,cljs.core.deref.call(null,cache),k,(0));
var f = ((function (cache,i,k,c){
return (function (){
return listener.call(null,result);
});})(cache,i,k,c))
;

if((c > cljs.core.deref.call(null,new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(tramp)))){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,f);
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.conj,f);
}

return cljs.core.swap_BANG_.call(null,cache,cljs.core.assoc,k,(c + (1)));
});
/**
 * Tests whether node already has a listener
 */
instaparse.gll.listener_exists_QMARK_ = (function instaparse$gll$listener_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4657__auto__ = cljs.core.deref.call(null,nodes).call(null,node_key);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node))) > (0));
} else {
return null;
}
});
/**
 * Tests whether node already has a listener or full-listener
 */
instaparse.gll.full_listener_exists_QMARK_ = (function instaparse$gll$full_listener_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4657__auto__ = cljs.core.deref.call(null,nodes).call(null,node_key);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ((cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(node))) > (0))) || ((cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node))) > (0)));
} else {
return null;
}
});
/**
 * Tests whether node has a result or full-result
 */
instaparse.gll.result_exists_QMARK_ = (function instaparse$gll$result_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4657__auto__ = cljs.core.deref.call(null,nodes).call(null,node_key);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ((cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node))) > (0))) || ((cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(node))) > (0)));
} else {
return null;
}
});
/**
 * Tests whether node has a full-result
 */
instaparse.gll.full_result_exists_QMARK_ = (function instaparse$gll$full_result_exists_QMARK_(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4657__auto__ = cljs.core.deref.call(null,nodes).call(null,node_key);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node))) > (0));
} else {
return null;
}
});
/**
 * Gets node if already exists, otherwise creates one
 */
instaparse.gll.node_get = (function instaparse$gll$node_get(tramp,node_key){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tramp);
var temp__4655__auto__ = cljs.core.deref.call(null,nodes).call(null,node_key);
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return node;
} else {
var node = instaparse.gll.make_node.call(null);

cljs.core.swap_BANG_.call(null,nodes,cljs.core.assoc,node_key,node);

return node;
}
});
instaparse.gll.safe_with_meta = (function instaparse$gll$safe_with_meta(obj,metamap){
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,obj))){
return cljs.core.with_meta.call(null,obj,metamap);
} else {
return obj;
}
});
/**
 * Pushes a result into the trampoline's node.
 * Categorizes as either result or full-result.
 * Schedules notification to all existing listeners of result
 * (Full listeners only get notified about full results)
 */
instaparse.gll.push_result = (function instaparse$gll$push_result(tramp,node_key,result){

var node = instaparse.gll.node_get.call(null,tramp,node_key);
var parser = node_key.call(null,(1));
var result__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"result","result",1415092211),null):result);
var result__$2 = (function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser);
if(cljs.core.truth_(temp__4655__auto__)){
var reduction_function = temp__4655__auto__;
return instaparse.gll.make_success.call(null,instaparse.gll.safe_with_meta.call(null,instaparse.reduction.apply_reduction.call(null,reduction_function,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),node_key.call(null,(0)),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result__$1)], null)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result__$1));
} else {
return result__$1;
}
})();
var total_QMARK_ = instaparse.gll.total_success_QMARK_.call(null,tramp,result__$2);
var results = (cljs.core.truth_(total_QMARK_)?new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node):new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.not.call(null,cljs.core.deref.call(null,results).call(null,result__$2))){

cljs.core.swap_BANG_.call(null,results,cljs.core.conj,result__$2);

var seq__14924_14932 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__14925_14933 = null;
var count__14926_14934 = (0);
var i__14927_14935 = (0);
while(true){
if((i__14927_14935 < count__14926_14934)){
var listener_14936 = cljs.core._nth.call(null,chunk__14925_14933,i__14927_14935);
instaparse.gll.push_message.call(null,tramp,listener_14936,result__$2);

var G__14937 = seq__14924_14932;
var G__14938 = chunk__14925_14933;
var G__14939 = count__14926_14934;
var G__14940 = (i__14927_14935 + (1));
seq__14924_14932 = G__14937;
chunk__14925_14933 = G__14938;
count__14926_14934 = G__14939;
i__14927_14935 = G__14940;
continue;
} else {
var temp__4657__auto___14941 = cljs.core.seq.call(null,seq__14924_14932);
if(temp__4657__auto___14941){
var seq__14924_14942__$1 = temp__4657__auto___14941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14924_14942__$1)){
var c__8257__auto___14943 = cljs.core.chunk_first.call(null,seq__14924_14942__$1);
var G__14944 = cljs.core.chunk_rest.call(null,seq__14924_14942__$1);
var G__14945 = c__8257__auto___14943;
var G__14946 = cljs.core.count.call(null,c__8257__auto___14943);
var G__14947 = (0);
seq__14924_14932 = G__14944;
chunk__14925_14933 = G__14945;
count__14926_14934 = G__14946;
i__14927_14935 = G__14947;
continue;
} else {
var listener_14948 = cljs.core.first.call(null,seq__14924_14942__$1);
instaparse.gll.push_message.call(null,tramp,listener_14948,result__$2);

var G__14949 = cljs.core.next.call(null,seq__14924_14942__$1);
var G__14950 = null;
var G__14951 = (0);
var G__14952 = (0);
seq__14924_14932 = G__14949;
chunk__14925_14933 = G__14950;
count__14926_14934 = G__14951;
i__14927_14935 = G__14952;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(total_QMARK_)){
var seq__14928 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__14929 = null;
var count__14930 = (0);
var i__14931 = (0);
while(true){
if((i__14931 < count__14930)){
var listener = cljs.core._nth.call(null,chunk__14929,i__14931);
instaparse.gll.push_message.call(null,tramp,listener,result__$2);

var G__14953 = seq__14928;
var G__14954 = chunk__14929;
var G__14955 = count__14930;
var G__14956 = (i__14931 + (1));
seq__14928 = G__14953;
chunk__14929 = G__14954;
count__14930 = G__14955;
i__14931 = G__14956;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__14928);
if(temp__4657__auto__){
var seq__14928__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14928__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__14928__$1);
var G__14957 = cljs.core.chunk_rest.call(null,seq__14928__$1);
var G__14958 = c__8257__auto__;
var G__14959 = cljs.core.count.call(null,c__8257__auto__);
var G__14960 = (0);
seq__14928 = G__14957;
chunk__14929 = G__14958;
count__14930 = G__14959;
i__14931 = G__14960;
continue;
} else {
var listener = cljs.core.first.call(null,seq__14928__$1);
instaparse.gll.push_message.call(null,tramp,listener,result__$2);

var G__14961 = cljs.core.next.call(null,seq__14928__$1);
var G__14962 = null;
var G__14963 = (0);
var G__14964 = (0);
seq__14928 = G__14961;
chunk__14929 = G__14962;
count__14930 = G__14963;
i__14931 = G__14964;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing results.
 * Initiates parse if necessary
 */
instaparse.gll.push_listener = (function instaparse$gll$push_listener(tramp,node_key,listener){
var listener_already_exists_QMARK_ = instaparse.gll.listener_exists_QMARK_.call(null,tramp,node_key);
var node = instaparse.gll.node_get.call(null,tramp,node_key);
var listeners = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node);

cljs.core.swap_BANG_.call(null,listeners,cljs.core.conj,listener);

var seq__14965_14973 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__14966_14974 = null;
var count__14967_14975 = (0);
var i__14968_14976 = (0);
while(true){
if((i__14968_14976 < count__14967_14975)){
var result_14977 = cljs.core._nth.call(null,chunk__14966_14974,i__14968_14976);
instaparse.gll.push_message.call(null,tramp,listener,result_14977);

var G__14978 = seq__14965_14973;
var G__14979 = chunk__14966_14974;
var G__14980 = count__14967_14975;
var G__14981 = (i__14968_14976 + (1));
seq__14965_14973 = G__14978;
chunk__14966_14974 = G__14979;
count__14967_14975 = G__14980;
i__14968_14976 = G__14981;
continue;
} else {
var temp__4657__auto___14982 = cljs.core.seq.call(null,seq__14965_14973);
if(temp__4657__auto___14982){
var seq__14965_14983__$1 = temp__4657__auto___14982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14965_14983__$1)){
var c__8257__auto___14984 = cljs.core.chunk_first.call(null,seq__14965_14983__$1);
var G__14985 = cljs.core.chunk_rest.call(null,seq__14965_14983__$1);
var G__14986 = c__8257__auto___14984;
var G__14987 = cljs.core.count.call(null,c__8257__auto___14984);
var G__14988 = (0);
seq__14965_14973 = G__14985;
chunk__14966_14974 = G__14986;
count__14967_14975 = G__14987;
i__14968_14976 = G__14988;
continue;
} else {
var result_14989 = cljs.core.first.call(null,seq__14965_14983__$1);
instaparse.gll.push_message.call(null,tramp,listener,result_14989);

var G__14990 = cljs.core.next.call(null,seq__14965_14983__$1);
var G__14991 = null;
var G__14992 = (0);
var G__14993 = (0);
seq__14965_14973 = G__14990;
chunk__14966_14974 = G__14991;
count__14967_14975 = G__14992;
i__14968_14976 = G__14993;
continue;
}
} else {
}
}
break;
}

var seq__14969_14994 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__14970_14995 = null;
var count__14971_14996 = (0);
var i__14972_14997 = (0);
while(true){
if((i__14972_14997 < count__14971_14996)){
var result_14998 = cljs.core._nth.call(null,chunk__14970_14995,i__14972_14997);
instaparse.gll.push_message.call(null,tramp,listener,result_14998);

var G__14999 = seq__14969_14994;
var G__15000 = chunk__14970_14995;
var G__15001 = count__14971_14996;
var G__15002 = (i__14972_14997 + (1));
seq__14969_14994 = G__14999;
chunk__14970_14995 = G__15000;
count__14971_14996 = G__15001;
i__14972_14997 = G__15002;
continue;
} else {
var temp__4657__auto___15003 = cljs.core.seq.call(null,seq__14969_14994);
if(temp__4657__auto___15003){
var seq__14969_15004__$1 = temp__4657__auto___15003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14969_15004__$1)){
var c__8257__auto___15005 = cljs.core.chunk_first.call(null,seq__14969_15004__$1);
var G__15006 = cljs.core.chunk_rest.call(null,seq__14969_15004__$1);
var G__15007 = c__8257__auto___15005;
var G__15008 = cljs.core.count.call(null,c__8257__auto___15005);
var G__15009 = (0);
seq__14969_14994 = G__15006;
chunk__14970_14995 = G__15007;
count__14971_14996 = G__15008;
i__14972_14997 = G__15009;
continue;
} else {
var result_15010 = cljs.core.first.call(null,seq__14969_15004__$1);
instaparse.gll.push_message.call(null,tramp,listener,result_15010);

var G__15011 = cljs.core.next.call(null,seq__14969_15004__$1);
var G__15012 = null;
var G__15013 = (0);
var G__15014 = (0);
seq__14969_14994 = G__15011;
chunk__14970_14995 = G__15012;
count__14971_14996 = G__15013;
i__14972_14997 = G__15014;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not.call(null,listener_already_exists_QMARK_)){
return instaparse.gll.push_stack.call(null,tramp,((function (listener_already_exists_QMARK_,node,listeners){
return (function (){
return instaparse.gll._parse.call(null,node_key.call(null,(1)),node_key.call(null,(0)),tramp);
});})(listener_already_exists_QMARK_,node,listeners))
);
} else {
return null;
}
});
/**
 * Pushes a listener into the trampoline's node.
 * Schedules notification to listener of all existing full results.
 */
instaparse.gll.push_full_listener = (function instaparse$gll$push_full_listener(tramp,node_key,listener){
var full_listener_already_exists_QMARK_ = instaparse.gll.full_listener_exists_QMARK_.call(null,tramp,node_key);
var node = instaparse.gll.node_get.call(null,tramp,node_key);
var listeners = new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(node);

cljs.core.swap_BANG_.call(null,listeners,cljs.core.conj,listener);

var seq__15015_15019 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__15016_15020 = null;
var count__15017_15021 = (0);
var i__15018_15022 = (0);
while(true){
if((i__15018_15022 < count__15017_15021)){
var result_15023 = cljs.core._nth.call(null,chunk__15016_15020,i__15018_15022);
instaparse.gll.push_message.call(null,tramp,listener,result_15023);

var G__15024 = seq__15015_15019;
var G__15025 = chunk__15016_15020;
var G__15026 = count__15017_15021;
var G__15027 = (i__15018_15022 + (1));
seq__15015_15019 = G__15024;
chunk__15016_15020 = G__15025;
count__15017_15021 = G__15026;
i__15018_15022 = G__15027;
continue;
} else {
var temp__4657__auto___15028 = cljs.core.seq.call(null,seq__15015_15019);
if(temp__4657__auto___15028){
var seq__15015_15029__$1 = temp__4657__auto___15028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15015_15029__$1)){
var c__8257__auto___15030 = cljs.core.chunk_first.call(null,seq__15015_15029__$1);
var G__15031 = cljs.core.chunk_rest.call(null,seq__15015_15029__$1);
var G__15032 = c__8257__auto___15030;
var G__15033 = cljs.core.count.call(null,c__8257__auto___15030);
var G__15034 = (0);
seq__15015_15019 = G__15031;
chunk__15016_15020 = G__15032;
count__15017_15021 = G__15033;
i__15018_15022 = G__15034;
continue;
} else {
var result_15035 = cljs.core.first.call(null,seq__15015_15029__$1);
instaparse.gll.push_message.call(null,tramp,listener,result_15035);

var G__15036 = cljs.core.next.call(null,seq__15015_15029__$1);
var G__15037 = null;
var G__15038 = (0);
var G__15039 = (0);
seq__15015_15019 = G__15036;
chunk__15016_15020 = G__15037;
count__15017_15021 = G__15038;
i__15018_15022 = G__15039;
continue;
}
} else {
}
}
break;
}

if(cljs.core.not.call(null,full_listener_already_exists_QMARK_)){
return instaparse.gll.push_stack.call(null,tramp,((function (full_listener_already_exists_QMARK_,node,listeners){
return (function (){
return instaparse.gll._full_parse.call(null,node_key.call(null,(1)),node_key.call(null,(0)),tramp);
});})(full_listener_already_exists_QMARK_,node,listeners))
);
} else {
return null;
}
});
instaparse.gll.merge_negative_listeners = cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.into);
/**
 * Pushes a thunk onto the trampoline's negative-listener stack.
 */
instaparse.gll.push_negative_listener = (function instaparse$gll$push_negative_listener(tramp,creator,negative_listener){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp),instaparse.gll.merge_negative_listeners,cljs.core.PersistentArrayMap.createAsIfByAssoc([creator.call(null,(0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negative_listener], null)]));
});
instaparse.gll.fail = (function instaparse$gll$fail(tramp,node_key,index,reason){

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(tramp),(function (failure){
var current_index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure);
var G__15040 = cljs.core.compare.call(null,index,current_index);
switch (G__15040) {
case (1):
return (new instaparse.gll.Failure(index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reason], null),null,null,null));

break;
case (0):
return (new instaparse.gll.Failure(index,cljs.core.conj.call(null,new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(failure),reason),null,null,null));

break;
case (-1):
return failure;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15040)].join('')));

}
}));

if(cljs.core._EQ_.call(null,index,new cljs.core.Keyword(null,"fail-index","fail-index",248726923).cljs$core$IFn$_invoke$arity$1(tramp))){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,instaparse.gll.build_node_with_meta.call(null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),instaparse.gll.sub_sequence.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp),index),index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))),cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))));
} else {
return null;
}
});
/**
 * Executes one thing on the stack (not threadsafe)
 */
instaparse.gll.step = (function instaparse$gll$step(stack){
var top = cljs.core.peek.call(null,cljs.core.deref.call(null,stack));
cljs.core.swap_BANG_.call(null,stack,cljs.core.pop);

return top.call(null);
});
/**
 * Executes the stack until exhausted
 */
instaparse.gll.run = (function instaparse$gll$run(var_args){
var G__15043 = arguments.length;
switch (G__15043) {
case 1:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.gll.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.gll.run.cljs$core$IFn$_invoke$arity$1 = (function (tramp){
return instaparse.gll.run.call(null,tramp,null);
});

instaparse.gll.run.cljs$core$IFn$_invoke$arity$2 = (function (tramp,found_result_QMARK_){
while(true){
var stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(tramp);
if(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp)))){

return cljs.core.cons.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp))),(new cljs.core.LazySeq(null,((function (tramp,found_result_QMARK_,stack){
return (function (){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp),null);

return instaparse.gll.run.call(null,tramp,true);
});})(tramp,found_result_QMARK_,stack))
,null,null)));
} else {
if((cljs.core.count.call(null,cljs.core.deref.call(null,stack)) > (0))){
instaparse.gll.step.call(null,stack);

var G__15048 = tramp;
var G__15049 = found_result_QMARK_;
tramp = G__15048;
found_result_QMARK_ = G__15049;
continue;
} else {
if((cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp))) > (0))){
var vec__15044 = cljs.core.first.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp)));
var index = cljs.core.nth.call(null,vec__15044,(0),null);
var listeners = cljs.core.nth.call(null,vec__15044,(1),null);
var listener = cljs.core.peek.call(null,listeners);

listener.call(null);

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,listeners),(1))){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.dissoc,index);
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null),cljs.core.pop);
}

var G__15050 = tramp;
var G__15051 = found_result_QMARK_;
tramp = G__15050;
found_result_QMARK_ = G__15051;
continue;
} else {
if(cljs.core.truth_(found_result_QMARK_)){
var next_stack = new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(tramp);
cljs.core.reset_BANG_.call(null,stack,cljs.core.deref.call(null,next_stack));

cljs.core.reset_BANG_.call(null,next_stack,cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.inc);

var G__15052 = tramp;
var G__15053 = null;
tramp = G__15052;
found_result_QMARK_ = G__15053;
continue;
} else {
return null;

}
}
}
}
break;
}
});

instaparse.gll.run.cljs$lang$maxFixedArity = 2;

instaparse.gll.NodeListener = (function instaparse$gll$NodeListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result.call(null,tramp,node_key,result);
});
});
instaparse.gll.LookListener = (function instaparse$gll$LookListener(node_key,tramp){
return (function (result){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,node_key.call(null,(0))));
});
});
instaparse.gll.CatListener = (function instaparse$gll$CatListener(results_so_far,parser_sequence,node_key,tramp){

return (function (result){
var map__15054 = result;
var map__15054__$1 = ((((!((map__15054 == null)))?((((map__15054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15054):map__15054);
var parsed_result = cljs.core.get.call(null,map__15054__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__15054__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
if(cljs.core.seq.call(null,parser_sequence)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),instaparse.gll.CatListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else {
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
}
});
});
instaparse.gll.CatFullListener = (function instaparse$gll$CatFullListener(results_so_far,parser_sequence,node_key,tramp){
return (function (result){
var map__15056 = result;
var map__15056__$1 = ((((!((map__15056 == null)))?((((map__15056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15056):map__15056);
var parsed_result = cljs.core.get.call(null,map__15056__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__15056__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
if(cljs.core.truth_(instaparse.reduction.singleton_QMARK_.call(null,parser_sequence))){
return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),instaparse.gll.CatFullListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else {
if(cljs.core.seq.call(null,parser_sequence)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),instaparse.gll.CatFullListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else {
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));

}
}
});
});
instaparse.gll.PlusListener = (function instaparse$gll$PlusListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__15058 = result;
var map__15058__$1 = ((((!((map__15058 == null)))?((((map__15058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15058):map__15058);
var parsed_result = cljs.core.get.call(null,map__15058__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__15058__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core._EQ_.call(null,continue_index,prev_index)){
if((cljs.core.count.call(null,results_so_far) === (0))){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse.gll.PlusListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp));

return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
}
});
});
instaparse.gll.PlusFullListener = (function instaparse$gll$PlusFullListener(results_so_far,parser,prev_index,node_key,tramp){
return (function (result){
var map__15060 = result;
var map__15060__$1 = ((((!((map__15060 == null)))?((((map__15060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15060):map__15060);
var parsed_result = cljs.core.get.call(null,map__15060__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__15060__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core._EQ_.call(null,continue_index,prev_index)){
if((cljs.core.count.call(null,results_so_far) === (0))){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,continue_index));
} else {
return null;
}
} else {
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
if(cljs.core._EQ_.call(null,continue_index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else {
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse.gll.PlusFullListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp));
}
}
});
});
instaparse.gll.RepListener = (function instaparse$gll$RepListener(results_so_far,n_results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__15062 = result;
var map__15062__$1 = ((((!((map__15062 == null)))?((((map__15062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15062):map__15062);
var parsed_result = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
var new_n_results_so_far = (n_results_so_far + (1));
if(((m <= new_n_results_so_far)) && ((new_n_results_so_far <= n))){
instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else {
}

if((new_n_results_so_far < n)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse.gll.RepListener.call(null,new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp));
} else {
return null;
}
});
});
instaparse.gll.RepFullListener = (function instaparse$gll$RepFullListener(results_so_far,n_results_so_far,parser,m,n,prev_index,node_key,tramp){
return (function (result){
var map__15064 = result;
var map__15064__$1 = ((((!((map__15064 == null)))?((((map__15064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15064):map__15064);
var parsed_result = cljs.core.get.call(null,map__15064__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__15064__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);
var new_n_results_so_far = (n_results_so_far + (1));
if(cljs.core._EQ_.call(null,continue_index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
if(((m <= new_n_results_so_far)) && ((new_n_results_so_far <= n))){
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else {
return null;
}
} else {
if((new_n_results_so_far < n)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),instaparse.gll.RepFullListener.call(null,new_results_so_far,new_n_results_so_far,parser,m,n,continue_index,node_key,tramp));
} else {
return null;
}
}
});
});
instaparse.gll.TopListener = (function instaparse$gll$TopListener(tramp){
return (function (result){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(tramp),result);
});
});
instaparse.gll.string_parse = (function instaparse$gll$string_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__7775__auto__ = cljs.core.count.call(null,text);
var y__7776__auto__ = (index + cljs.core.count.call(null,string));
return ((x__7775__auto__ < y__7776__auto__) ? x__7775__auto__ : y__7776__auto__);
})();
var head = instaparse.gll.sub_sequence.call(null,text,index,end);
if(cljs.core._EQ_.call(null,string,head)){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string], null));
}
});
instaparse.gll.string_full_parse = (function instaparse$gll$string_full_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__7775__auto__ = cljs.core.count.call(null,text);
var y__7776__auto__ = (index + cljs.core.count.call(null,string));
return ((x__7775__auto__ < y__7776__auto__) ? x__7775__auto__ : y__7776__auto__);
})();
var head = instaparse.gll.sub_sequence.call(null,text,index,end);
if((cljs.core._EQ_.call(null,end,cljs.core.count.call(null,text))) && (cljs.core._EQ_.call(null,string,head))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.equals_ignore_case = (function instaparse$gll$equals_ignore_case(s1,s2){
return cljs.core._EQ_.call(null,s1.toUpperCase(),s2.toUpperCase());
});
instaparse.gll.string_case_insensitive_parse = (function instaparse$gll$string_case_insensitive_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__7775__auto__ = cljs.core.count.call(null,text);
var y__7776__auto__ = (index + cljs.core.count.call(null,string));
return ((x__7775__auto__ < y__7776__auto__) ? x__7775__auto__ : y__7776__auto__);
})();
var head = instaparse.gll.sub_sequence.call(null,text,index,end);
if(cljs.core.truth_(instaparse.gll.equals_ignore_case.call(null,string,head))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string], null));
}
});
instaparse.gll.string_case_insensitive_full_parse = (function instaparse$gll$string_case_insensitive_full_parse(this$,index,tramp){
var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = (function (){var x__7775__auto__ = cljs.core.count.call(null,text);
var y__7776__auto__ = (index + cljs.core.count.call(null,string));
return ((x__7775__auto__ < y__7776__auto__) ? x__7775__auto__ : y__7776__auto__);
})();
var head = instaparse.gll.sub_sequence.call(null,text,index,end);
if(cljs.core.truth_((function (){var and__7406__auto__ = cljs.core._EQ_.call(null,end,cljs.core.count.call(null,text));
if(and__7406__auto__){
return instaparse.gll.equals_ignore_case.call(null,string,head);
} else {
return and__7406__auto__;
}
})())){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.single_char_code_at = (function instaparse$gll$single_char_code_at(text,index){
return text.charCodeAt(index);
});
instaparse.gll.unicode_code_point_at = (function instaparse$gll$unicode_code_point_at(text,index){
return goog.i18n.uChar.getCodePointAround(text,(index | (0)));
});
instaparse.gll.code_point__GT_chars = (function instaparse$gll$code_point__GT_chars(code_point){
return goog.i18n.uChar.fromCharCode(code_point);
});
instaparse.gll.char_range_parse = (function instaparse$gll$char_range_parse(this$,index,tramp){
var lo = new cljs.core.Keyword(null,"lo","lo",-931799889).cljs$core$IFn$_invoke$arity$1(this$);
var hi = new cljs.core.Keyword(null,"hi","hi",-1821422114).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
if((index >= cljs.core.count.call(null,text))){
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
} else {
if((hi <= (65535))){
var code = instaparse.gll.single_char_code_at.call(null,text,index);
if(((lo <= code)) && ((code <= hi))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,code))].join(''),(index + (1))));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
}
} else {
var code_point = instaparse.gll.unicode_code_point_at.call(null,text,index);
var char_string = instaparse.gll.code_point__GT_chars.call(null,code_point);
if(((lo <= code_point)) && ((code_point <= hi))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,char_string,(index + cljs.core.count.call(null,char_string))));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
}

}
}
});
instaparse.gll.char_range_full_parse = (function instaparse$gll$char_range_full_parse(this$,index,tramp){
var lo = new cljs.core.Keyword(null,"lo","lo",-931799889).cljs$core$IFn$_invoke$arity$1(this$);
var hi = new cljs.core.Keyword(null,"hi","hi",-1821422114).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp);
var end = cljs.core.count.call(null,text);
if((index >= cljs.core.count.call(null,text))){
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
} else {
if((hi <= (65535))){
var code = instaparse.gll.single_char_code_at.call(null,text,index);
if((cljs.core._EQ_.call(null,(index + (1)),end)) && (((lo <= code)) && ((code <= hi)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,code))].join(''),end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null)], null));
}
} else {
var code_point = instaparse.gll.unicode_code_point_at.call(null,text,index);
var char_string = instaparse.gll.code_point__GT_chars.call(null,code_point);
if((cljs.core._EQ_.call(null,(index + cljs.core.count.call(null,char_string)),end)) && (((lo <= code_point)) && ((code_point <= hi)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,char_string,end));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char-range","char-range",1443391389),true,new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null),new cljs.core.Keyword(null,"full","full",436801220),true], null));
}

}
}
});
instaparse.gll.re_match_at_front = (function instaparse$gll$re_match_at_front(regexp,text){
var re = (new RegExp(regexp.source,"g"));
var m = re.exec(text);
if(cljs.core.truth_((function (){var and__7406__auto__ = m;
if(cljs.core.truth_(and__7406__auto__)){
return (m.index === (0));
} else {
return and__7406__auto__;
}
})())){
return cljs.core.first.call(null,m);
} else {
return null;
}
});
instaparse.gll.regexp_parse = (function instaparse$gll$regexp_parse(this$,index,tramp){
var regexp = new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(tramp);
var substring = instaparse.gll.sub_sequence.call(null,text,index);
var match = instaparse.gll.re_match_at_front.call(null,regexp,substring);
if(cljs.core.truth_(match)){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,match,(index + cljs.core.count.call(null,match))));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"expecting","expecting",-57706705),regexp], null));
}
});
instaparse.gll.regexp_full_parse = (function instaparse$gll$regexp_full_parse(this$,index,tramp){
var regexp = new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(this$);
var text = new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(tramp);
var substring = instaparse.gll.sub_sequence.call(null,text,index);
var match = instaparse.gll.re_match_at_front.call(null,regexp,substring);
var desired_length = (cljs.core.count.call(null,text) - index);
if(cljs.core.truth_((function (){var and__7406__auto__ = match;
if(cljs.core.truth_(and__7406__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,match),desired_length);
} else {
return and__7406__auto__;
}
})())){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,match,cljs.core.count.call(null,text)));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"expecting","expecting",-57706705),regexp,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.cat_parse = (function instaparse$gll$cat_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first.call(null,parsers)], null),instaparse.gll.CatListener.call(null,instaparse.auto_flatten_seq.EMPTY,cljs.core.next.call(null,parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.cat_full_parse = (function instaparse$gll$cat_full_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first.call(null,parsers)], null),instaparse.gll.CatFullListener.call(null,instaparse.auto_flatten_seq.EMPTY,cljs.core.next.call(null,parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.plus_parse = (function instaparse$gll$plus_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener.call(null,instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.plus_full_parse = (function instaparse$gll$plus_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener.call(null,instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.rep_parse = (function instaparse$gll$rep_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var m = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this$);
var n = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));

if((n >= (1))){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener.call(null,instaparse.auto_flatten_seq.EMPTY,(0),parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener.call(null,instaparse.auto_flatten_seq.EMPTY,(0),parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.rep_full_parse = (function instaparse$gll$rep_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var m = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this$);
var n = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this$);
if((m === (0))){
instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));

if((n >= (1))){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener.call(null,instaparse.auto_flatten_seq.EMPTY,(0),parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else {
return null;
}
} else {
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener.call(null,instaparse.auto_flatten_seq.EMPTY,(0),parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.star_parse = (function instaparse$gll$star_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener.call(null,instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});
instaparse.gll.star_full_parse = (function instaparse$gll$star_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else {
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener.call(null,instaparse.auto_flatten_seq.EMPTY,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});
instaparse.gll.alt_parse = (function instaparse$gll$alt_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
var seq__15066 = cljs.core.seq.call(null,parsers);
var chunk__15067 = null;
var count__15068 = (0);
var i__15069 = (0);
while(true){
if((i__15069 < count__15068)){
var parser = cljs.core._nth.call(null,chunk__15067,i__15069);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__15070 = seq__15066;
var G__15071 = chunk__15067;
var G__15072 = count__15068;
var G__15073 = (i__15069 + (1));
seq__15066 = G__15070;
chunk__15067 = G__15071;
count__15068 = G__15072;
i__15069 = G__15073;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15066);
if(temp__4657__auto__){
var seq__15066__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15066__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__15066__$1);
var G__15074 = cljs.core.chunk_rest.call(null,seq__15066__$1);
var G__15075 = c__8257__auto__;
var G__15076 = cljs.core.count.call(null,c__8257__auto__);
var G__15077 = (0);
seq__15066 = G__15074;
chunk__15067 = G__15075;
count__15068 = G__15076;
i__15069 = G__15077;
continue;
} else {
var parser = cljs.core.first.call(null,seq__15066__$1);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__15078 = cljs.core.next.call(null,seq__15066__$1);
var G__15079 = null;
var G__15080 = (0);
var G__15081 = (0);
seq__15066 = G__15078;
chunk__15067 = G__15079;
count__15068 = G__15080;
i__15069 = G__15081;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.alt_full_parse = (function instaparse$gll$alt_full_parse(this$,index,tramp){
var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);
var seq__15082 = cljs.core.seq.call(null,parsers);
var chunk__15083 = null;
var count__15084 = (0);
var i__15085 = (0);
while(true){
if((i__15085 < count__15084)){
var parser = cljs.core._nth.call(null,chunk__15083,i__15085);
instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__15086 = seq__15082;
var G__15087 = chunk__15083;
var G__15088 = count__15084;
var G__15089 = (i__15085 + (1));
seq__15082 = G__15086;
chunk__15083 = G__15087;
count__15084 = G__15088;
i__15085 = G__15089;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15082);
if(temp__4657__auto__){
var seq__15082__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15082__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__15082__$1);
var G__15090 = cljs.core.chunk_rest.call(null,seq__15082__$1);
var G__15091 = c__8257__auto__;
var G__15092 = cljs.core.count.call(null,c__8257__auto__);
var G__15093 = (0);
seq__15082 = G__15090;
chunk__15083 = G__15091;
count__15084 = G__15092;
i__15085 = G__15093;
continue;
} else {
var parser = cljs.core.first.call(null,seq__15082__$1);
instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__15094 = cljs.core.next.call(null,seq__15082__$1);
var G__15095 = null;
var G__15096 = (0);
var G__15097 = (0);
seq__15082 = G__15094;
chunk__15083 = G__15095;
count__15084 = G__15096;
i__15085 = G__15097;
continue;
}
} else {
return null;
}
}
break;
}
});
instaparse.gll.ordered_alt_parse = (function instaparse$gll$ordered_alt_parse(this$,index,tramp){
var parser1 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_listener.call(null,tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener.call(null,tramp,node_key_parser1,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){
return instaparse.gll.push_listener.call(null,tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.ordered_alt_full_parse = (function instaparse$gll$ordered_alt_full_parse(this$,index,tramp){
var parser1 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(this$);
var parser2 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(this$);
var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);
var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);
var listener = instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);
instaparse.gll.push_full_listener.call(null,tramp,node_key_parser1,listener);

return instaparse.gll.push_negative_listener.call(null,tramp,node_key_parser1,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){
return instaparse.gll.push_full_listener.call(null,tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.opt_parse = (function instaparse$gll$opt_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});
instaparse.gll.opt_full_parse = (function instaparse$gll$opt_full_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.non_terminal_parse = (function instaparse$gll$non_terminal_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.non_terminal_full_parse = (function instaparse$gll$non_terminal_full_parse(this$,index,tramp){
var parser = instaparse.gll.get_parser.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(this$));
return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_parse = (function instaparse$gll$lookahead_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.LookListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_full_parse = (function instaparse$gll$lookahead_full_parse(this$,index,tramp){
if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.lookahead_parse.call(null,this$,index,tramp);
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"lookahead","lookahead",-400102393),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.negative_lookahead_parse = (function instaparse$gll$negative_lookahead_parse(this$,index,tramp){
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);
var node_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null);
if(cljs.core.truth_(instaparse.gll.result_exists_QMARK_.call(null,tramp,node_key))){
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387)], null));
} else {
instaparse.gll.push_listener.call(null,tramp,node_key,(function (){var fail_send = (new cljs.core.Delay(((function (parser,node_key){
return (function (){
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"NOT","NOT",-1689245341),instaparse.print.combinators__GT_str.call(null,parser)], null)], null));
});})(parser,node_key))
,null));
return ((function (fail_send,parser,node_key){
return (function (result){
return cljs.core.force.call(null,fail_send);
});
;})(fail_send,parser,node_key))
})());

return instaparse.gll.push_negative_listener.call(null,tramp,node_key,((function (parser,node_key){
return (function (){
if(cljs.core.not.call(null,instaparse.gll.result_exists_QMARK_.call(null,tramp,node_key))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else {
return null;
}
});})(parser,node_key))
);
}
});
instaparse.gll.epsilon_parse = (function instaparse$gll$epsilon_parse(this$,index,tramp){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});
instaparse.gll.epsilon_full_parse = (function instaparse$gll$epsilon_full_parse(this$,index,tramp){
if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp)))){
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else {
return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"Epsilon","Epsilon",133418452),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.start_parser = (function instaparse$gll$start_parser(tramp,parser,partial_QMARK_){
if(cljs.core.truth_(partial_QMARK_)){
return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener.call(null,tramp));
} else {
return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener.call(null,tramp));
}
});
instaparse.gll.parses = (function instaparse$gll$parses(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.call(null,grammar,text);
var parser = instaparse.combinators_source.nt.call(null,start);
instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.call(null,tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return all_parses;
} else {
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,instaparse.failure.augment_failure.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(tramp)),text));
}
});
instaparse.gll.parse = (function instaparse$gll$parse(grammar,start,text,partial_QMARK_){

var tramp = instaparse.gll.make_tramp.call(null,grammar,text);
var parser = instaparse.combinators_source.nt.call(null,start);
instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.call(null,tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return cljs.core.first.call(null,all_parses);
} else {
return instaparse.failure.augment_failure.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(tramp)),text);
}
});
instaparse.gll.build_node_with_meta = (function instaparse$gll$build_node_with_meta(node_builder,tag,content,start,end){
return cljs.core.with_meta.call(null,node_builder.call(null,tag,content),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),start,new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),end], null));
});
instaparse.gll.build_total_failure_node = (function instaparse$gll$build_total_failure_node(node_builder,start,text){
var build_failure_node = instaparse.gll.build_node_with_meta.call(null,node_builder,new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),text,(0),cljs.core.count.call(null,text));
var build_start_node = instaparse.gll.build_node_with_meta.call(null,node_builder,start,build_failure_node,(0),cljs.core.count.call(null,text));
return build_start_node;
});
instaparse.gll.parses_total_after_fail = (function instaparse$gll$parses_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){
var tramp = instaparse.gll.make_tramp.call(null,grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt.call(null,start);

instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.call(null,tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return all_parses;
} else {
var x__8280__auto__ = instaparse.gll.build_total_failure_node.call(null,node_builder,start,text);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
}
});
/**
 * A variation on with-meta that merges the existing metamap into the new metamap,
 * rather than overwriting the metamap entirely.
 */
instaparse.gll.merge_meta = (function instaparse$gll$merge_meta(obj,metamap){
return cljs.core.with_meta.call(null,obj,cljs.core.merge.call(null,metamap,cljs.core.meta.call(null,obj)));
});
instaparse.gll.parses_total = (function instaparse$gll$parses_total(grammar,start,text,partial_QMARK_,node_builder){

var all_parses = instaparse.gll.parses.call(null,grammar,start,text,partial_QMARK_);
if(cljs.core.seq.call(null,all_parses)){
return all_parses;
} else {
return instaparse.gll.merge_meta.call(null,instaparse.gll.parses_total_after_fail.call(null,grammar,start,text,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,all_parses)),partial_QMARK_,node_builder),cljs.core.meta.call(null,all_parses));
}
});
instaparse.gll.parse_total_after_fail = (function instaparse$gll$parse_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){
var tramp = instaparse.gll.make_tramp.call(null,grammar,text,fail_index,node_builder);
var parser = instaparse.combinators_source.nt.call(null,start);

instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);

var temp__4655__auto__ = instaparse.gll.run.call(null,tramp);
if(cljs.core.truth_(temp__4655__auto__)){
var all_parses = temp__4655__auto__;
return cljs.core.first.call(null,all_parses);
} else {
return instaparse.gll.build_total_failure_node.call(null,node_builder,start,text);
}
});
instaparse.gll.parse_total = (function instaparse$gll$parse_total(grammar,start,text,partial_QMARK_,node_builder){

var result = instaparse.gll.parse.call(null,grammar,start,text,partial_QMARK_);
if(!((result instanceof instaparse.gll.Failure))){
return result;
} else {
return instaparse.gll.merge_meta.call(null,instaparse.gll.parse_total_after_fail.call(null,grammar,start,text,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result),partial_QMARK_,node_builder),result);
}
});

//# sourceMappingURL=gll.js.map
