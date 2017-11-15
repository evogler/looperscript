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

var G__31071 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__31071__$1 = (((G__31071 instanceof cljs.core.Keyword))?G__31071.fqn:null);
switch (G__31071__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31071__$1)].join('')));

}
});













instaparse.gll._full_parse = (function instaparse$gll$_full_parse(parser,index,tramp){

var G__31073 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__31073__$1 = (((G__31073 instanceof cljs.core.Keyword))?G__31073.fqn:null);
switch (G__31073__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31073__$1)].join('')));

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
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28576__auto__,k__28577__auto__){
var self__ = this;
var this__28576__auto____$1 = this;
return this__28576__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28577__auto__,null);
});

instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28578__auto__,k31076,else__28579__auto__){
var self__ = this;
var this__28578__auto____$1 = this;
var G__31080 = k31076;
var G__31080__$1 = (((G__31080 instanceof cljs.core.Keyword))?G__31080.fqn:null);
switch (G__31080__$1) {
case "index":
return self__.index;

break;
case "reason":
return self__.reason;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31076,else__28579__auto__);

}
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28590__auto__,writer__28591__auto__,opts__28592__auto__){
var self__ = this;
var this__28590__auto____$1 = this;
var pr_pair__28593__auto__ = ((function (this__28590__auto____$1){
return (function (keyval__28594__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28591__auto__,cljs.core.pr_writer,""," ","",opts__28592__auto__,keyval__28594__auto__);
});})(this__28590__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28591__auto__,pr_pair__28593__auto__,"#instaparse.gll.Failure{",", ","}",opts__28592__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason],null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31075){
var self__ = this;
var G__31075__$1 = this;
return (new cljs.core.RecordIter((0),G__31075__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"reason","reason",-2070751759)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

instaparse.gll.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28574__auto__){
var self__ = this;
var this__28574__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28571__auto__){
var self__ = this;
var this__28571__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28580__auto__){
var self__ = this;
var this__28580__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28572__auto__){
var self__ = this;
var this__28572__auto____$1 = this;
var h__28390__auto__ = self__.__hash;
if(!((h__28390__auto__ == null))){
return h__28390__auto__;
} else {
var h__28390__auto____$1 = ((function (h__28390__auto__,this__28572__auto____$1){
return (function (coll__28573__auto__){
return (-1140991288 ^ cljs.core.hash_unordered_coll.call(null,coll__28573__auto__));
});})(h__28390__auto__,this__28572__auto____$1))
.call(null,this__28572__auto____$1);
self__.__hash = h__28390__auto____$1;

return h__28390__auto____$1;
}
});

instaparse.gll.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31077,other31078){
var self__ = this;
var this31077__$1 = this;
return (!((other31078 == null))) && ((this31077__$1.constructor === other31078.constructor)) && (cljs.core._EQ_.call(null,this31077__$1.index,other31078.index)) && (cljs.core._EQ_.call(null,this31077__$1.reason,other31078.reason)) && (cljs.core._EQ_.call(null,this31077__$1.__extmap,other31078.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28585__auto__,k__28586__auto__){
var self__ = this;
var this__28585__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null], null), null),k__28586__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28585__auto____$1),self__.__meta),k__28586__auto__);
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28586__auto__)),null));
}
});

instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28583__auto__,k__28584__auto__,G__31075){
var self__ = this;
var this__28583__auto____$1 = this;
var pred__31081 = cljs.core.keyword_identical_QMARK_;
var expr__31082 = k__28584__auto__;
if(cljs.core.truth_(pred__31081.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__31082))){
return (new instaparse.gll.Failure(G__31075,self__.reason,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31081.call(null,new cljs.core.Keyword(null,"reason","reason",-2070751759),expr__31082))){
return (new instaparse.gll.Failure(self__.index,G__31075,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28584__auto__,G__31075),null));
}
}
});

instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28588__auto__){
var self__ = this;
var this__28588__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason],null))], null),self__.__extmap));
});

instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28575__auto__,G__31075){
var self__ = this;
var this__28575__auto____$1 = this;
return (new instaparse.gll.Failure(self__.index,self__.reason,G__31075,self__.__extmap,self__.__hash));
});

instaparse.gll.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28581__auto__,entry__28582__auto__){
var self__ = this;
var this__28581__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28582__auto__)){
return this__28581__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28582__auto__,(0)),cljs.core._nth.call(null,entry__28582__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28581__auto____$1,entry__28582__auto__);
}
});

instaparse.gll.Failure.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"reason","reason",-430220232,null)], null);
});

instaparse.gll.Failure.cljs$lang$type = true;

instaparse.gll.Failure.cljs$lang$ctorPrSeq = (function (this__28612__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Failure");
});

instaparse.gll.Failure.cljs$lang$ctorPrWriter = (function (this__28612__auto__,writer__28613__auto__){
return cljs.core._write.call(null,writer__28613__auto__,"instaparse.gll/Failure");
});

instaparse.gll.__GT_Failure = (function instaparse$gll$__GT_Failure(index,reason){
return (new instaparse.gll.Failure(index,reason,null,null,null));
});

instaparse.gll.map__GT_Failure = (function instaparse$gll$map__GT_Failure(G__31079){
return (new instaparse.gll.Failure(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__31079),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(G__31079),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31079,new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"reason","reason",-2070751759))),null));
});

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (fail,writer,_){
var fail__$1 = this;
return cljs.core._write.call(null,writer,(function (){var sb__28963__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31085_31087 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31086_31088 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31085_31087,_STAR_print_fn_STAR_31086_31088,sb__28963__auto__,fail__$1){
return (function (x__28964__auto__){
return sb__28963__auto__.append(x__28964__auto__);
});})(_STAR_print_newline_STAR_31085_31087,_STAR_print_fn_STAR_31086_31088,sb__28963__auto__,fail__$1))
;

try{instaparse.failure.pprint_failure.call(null,fail__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31086_31088;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31085_31087;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__28963__auto__)].join('');
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
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28576__auto__,k__28577__auto__){
var self__ = this;
var this__28576__auto____$1 = this;
return this__28576__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28577__auto__,null);
});

instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28578__auto__,k31090,else__28579__auto__){
var self__ = this;
var this__28578__auto____$1 = this;
var G__31094 = k31090;
var G__31094__$1 = (((G__31094 instanceof cljs.core.Keyword))?G__31094.fqn:null);
switch (G__31094__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k31090,else__28579__auto__);

}
});

instaparse.gll.Tramp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28590__auto__,writer__28591__auto__,opts__28592__auto__){
var self__ = this;
var this__28590__auto____$1 = this;
var pr_pair__28593__auto__ = ((function (this__28590__auto____$1){
return (function (keyval__28594__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28591__auto__,cljs.core.pr_writer,""," ","",opts__28592__auto__,keyval__28594__auto__);
});})(this__28590__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28591__auto__,pr_pair__28593__auto__,"#instaparse.gll.Tramp{",", ","}",opts__28592__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"success","success",1890645906),self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trace?","trace?",1730690679),self__.trace_QMARK_],null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31089){
var self__ = this;
var G__31089__$1 = this;
return (new cljs.core.RecordIter((0),G__31089__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"fail-index","fail-index",248726923),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"trace?","trace?",1730690679)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

instaparse.gll.Tramp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28574__auto__){
var self__ = this;
var this__28574__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Tramp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28571__auto__){
var self__ = this;
var this__28571__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28580__auto__){
var self__ = this;
var this__28580__auto____$1 = this;
return (14 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28572__auto__){
var self__ = this;
var this__28572__auto____$1 = this;
var h__28390__auto__ = self__.__hash;
if(!((h__28390__auto__ == null))){
return h__28390__auto__;
} else {
var h__28390__auto____$1 = ((function (h__28390__auto__,this__28572__auto____$1){
return (function (coll__28573__auto__){
return (166878148 ^ cljs.core.hash_unordered_coll.call(null,coll__28573__auto__));
});})(h__28390__auto__,this__28572__auto____$1))
.call(null,this__28572__auto____$1);
self__.__hash = h__28390__auto____$1;

return h__28390__auto____$1;
}
});

instaparse.gll.Tramp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31091,other31092){
var self__ = this;
var this31091__$1 = this;
return (!((other31092 == null))) && ((this31091__$1.constructor === other31092.constructor)) && (cljs.core._EQ_.call(null,this31091__$1.grammar,other31092.grammar)) && (cljs.core._EQ_.call(null,this31091__$1.text,other31092.text)) && (cljs.core._EQ_.call(null,this31091__$1.segment,other31092.segment)) && (cljs.core._EQ_.call(null,this31091__$1.fail_index,other31092.fail_index)) && (cljs.core._EQ_.call(null,this31091__$1.node_builder,other31092.node_builder)) && (cljs.core._EQ_.call(null,this31091__$1.stack,other31092.stack)) && (cljs.core._EQ_.call(null,this31091__$1.next_stack,other31092.next_stack)) && (cljs.core._EQ_.call(null,this31091__$1.generation,other31092.generation)) && (cljs.core._EQ_.call(null,this31091__$1.negative_listeners,other31092.negative_listeners)) && (cljs.core._EQ_.call(null,this31091__$1.msg_cache,other31092.msg_cache)) && (cljs.core._EQ_.call(null,this31091__$1.nodes,other31092.nodes)) && (cljs.core._EQ_.call(null,this31091__$1.success,other31092.success)) && (cljs.core._EQ_.call(null,this31091__$1.failure,other31092.failure)) && (cljs.core._EQ_.call(null,this31091__$1.trace_QMARK_,other31092.trace_QMARK_)) && (cljs.core._EQ_.call(null,this31091__$1.__extmap,other31092.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28585__auto__,k__28586__auto__){
var self__ = this;
var this__28585__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),null,new cljs.core.Keyword(null,"generation","generation",-2132542044),null,new cljs.core.Keyword(null,"failure","failure",720415879),null,new cljs.core.Keyword(null,"fail-index","fail-index",248726923),null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),null,new cljs.core.Keyword(null,"success","success",1890645906),null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),null,new cljs.core.Keyword(null,"segment","segment",-964921196),null,new cljs.core.Keyword(null,"stack","stack",-793405930),null,new cljs.core.Keyword(null,"trace?","trace?",1730690679),null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__28586__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28585__auto____$1),self__.__meta),k__28586__auto__);
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28586__auto__)),null));
}
});

instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28583__auto__,k__28584__auto__,G__31089){
var self__ = this;
var this__28583__auto____$1 = this;
var pred__31095 = cljs.core.keyword_identical_QMARK_;
var expr__31096 = k__28584__auto__;
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),expr__31096))){
return (new instaparse.gll.Tramp(G__31089,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__31096))){
return (new instaparse.gll.Tramp(self__.grammar,G__31089,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196),expr__31096))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__31089,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"fail-index","fail-index",248726923),expr__31096))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__31089,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),expr__31096))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__31089,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930),expr__31096))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__31089,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),expr__31096))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__31089,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"generation","generation",-2132542044),expr__31096))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__31089,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),expr__31096))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__31089,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),expr__31096))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__31089,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),expr__31096))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__31089,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"success","success",1890645906),expr__31096))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__31089,self__.failure,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"failure","failure",720415879),expr__31096))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__31089,self__.trace_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31095.call(null,new cljs.core.Keyword(null,"trace?","trace?",1730690679),expr__31096))){
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__31089,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28584__auto__,G__31089),null));
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

instaparse.gll.Tramp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28588__auto__){
var self__ = this;
var this__28588__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"success","success",1890645906),self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trace?","trace?",1730690679),self__.trace_QMARK_],null))], null),self__.__extmap));
});

instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28575__auto__,G__31089){
var self__ = this;
var this__28575__auto____$1 = this;
return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.trace_QMARK_,G__31089,self__.__extmap,self__.__hash));
});

instaparse.gll.Tramp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28581__auto__,entry__28582__auto__){
var self__ = this;
var this__28581__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28582__auto__)){
return this__28581__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28582__auto__,(0)),cljs.core._nth.call(null,entry__28582__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28581__auto____$1,entry__28582__auto__);
}
});

instaparse.gll.Tramp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"grammar","grammar",-773107502,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"segment","segment",675610331,null),new cljs.core.Symbol(null,"fail-index","fail-index",1889258450,null),new cljs.core.Symbol(null,"node-builder","node-builder",-316031078,null),new cljs.core.Symbol(null,"stack","stack",847125597,null),new cljs.core.Symbol(null,"next-stack","next-stack",1158600799,null),new cljs.core.Symbol(null,"generation","generation",-492010517,null),new cljs.core.Symbol(null,"negative-listeners","negative-listeners",1695772619,null),new cljs.core.Symbol(null,"msg-cache","msg-cache",906756457,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),new cljs.core.Symbol(null,"success","success",-763789863,null),new cljs.core.Symbol(null,"failure","failure",-1934019890,null),new cljs.core.Symbol(null,"trace?","trace?",-923745090,null)], null);
});

instaparse.gll.Tramp.cljs$lang$type = true;

instaparse.gll.Tramp.cljs$lang$ctorPrSeq = (function (this__28612__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Tramp");
});

instaparse.gll.Tramp.cljs$lang$ctorPrWriter = (function (this__28612__auto__,writer__28613__auto__){
return cljs.core._write.call(null,writer__28613__auto__,"instaparse.gll/Tramp");
});

instaparse.gll.__GT_Tramp = (function instaparse$gll$__GT_Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_){
return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,trace_QMARK_,null,null,null));
});

instaparse.gll.map__GT_Tramp = (function instaparse$gll$map__GT_Tramp(G__31093){
return (new instaparse.gll.Tramp(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(G__31093),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__31093),new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(G__31093),new cljs.core.Keyword(null,"fail-index","fail-index",248726923).cljs$core$IFn$_invoke$arity$1(G__31093),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605).cljs$core$IFn$_invoke$arity$1(G__31093),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(G__31093),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(G__31093),new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(G__31093),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(G__31093),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070).cljs$core$IFn$_invoke$arity$1(G__31093),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(G__31093),new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(G__31093),new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(G__31093),new cljs.core.Keyword(null,"trace?","trace?",1730690679).cljs$core$IFn$_invoke$arity$1(G__31093),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31093,new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"fail-index","fail-index",248726923),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"trace?","trace?",1730690679))),null));
});

instaparse.gll.make_tramp = (function instaparse$gll$make_tramp(var_args){
var G__31100 = arguments.length;
switch (G__31100) {
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
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28576__auto__,k__28577__auto__){
var self__ = this;
var this__28576__auto____$1 = this;
return this__28576__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28577__auto__,null);
});

instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28578__auto__,k31103,else__28579__auto__){
var self__ = this;
var this__28578__auto____$1 = this;
var G__31107 = k31103;
var G__31107__$1 = (((G__31107 instanceof cljs.core.Keyword))?G__31107.fqn:null);
switch (G__31107__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k31103,else__28579__auto__);

}
});

instaparse.gll.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28590__auto__,writer__28591__auto__,opts__28592__auto__){
var self__ = this;
var this__28590__auto____$1 = this;
var pr_pair__28593__auto__ = ((function (this__28590__auto____$1){
return (function (keyval__28594__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28591__auto__,cljs.core.pr_writer,""," ","",opts__28592__auto__,keyval__28594__auto__);
});})(this__28590__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28591__auto__,pr_pair__28593__auto__,"#instaparse.gll.Node{",", ","}",opts__28592__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"results","results",-1134170113),self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results],null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31102){
var self__ = this;
var G__31102__$1 = this;
return (new cljs.core.RecordIter((0),G__31102__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"full-results","full-results",-1500225407)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

instaparse.gll.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28574__auto__){
var self__ = this;
var this__28574__auto____$1 = this;
return self__.__meta;
});

instaparse.gll.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28571__auto__){
var self__ = this;
var this__28571__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28580__auto__){
var self__ = this;
var this__28580__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28572__auto__){
var self__ = this;
var this__28572__auto____$1 = this;
var h__28390__auto__ = self__.__hash;
if(!((h__28390__auto__ == null))){
return h__28390__auto__;
} else {
var h__28390__auto____$1 = ((function (h__28390__auto__,this__28572__auto____$1){
return (function (coll__28573__auto__){
return (-1610074144 ^ cljs.core.hash_unordered_coll.call(null,coll__28573__auto__));
});})(h__28390__auto__,this__28572__auto____$1))
.call(null,this__28572__auto____$1);
self__.__hash = h__28390__auto____$1;

return h__28390__auto____$1;
}
});

instaparse.gll.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31104,other31105){
var self__ = this;
var this31104__$1 = this;
return (!((other31105 == null))) && ((this31104__$1.constructor === other31105.constructor)) && (cljs.core._EQ_.call(null,this31104__$1.listeners,other31105.listeners)) && (cljs.core._EQ_.call(null,this31104__$1.full_listeners,other31105.full_listeners)) && (cljs.core._EQ_.call(null,this31104__$1.results,other31105.results)) && (cljs.core._EQ_.call(null,this31104__$1.full_results,other31105.full_results)) && (cljs.core._EQ_.call(null,this31104__$1.__extmap,other31105.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28585__auto__,k__28586__auto__){
var self__ = this;
var this__28585__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"full-results","full-results",-1500225407),null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),null,new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),k__28586__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28585__auto____$1),self__.__meta),k__28586__auto__);
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28586__auto__)),null));
}
});

instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28583__auto__,k__28584__auto__,G__31102){
var self__ = this;
var this__28583__auto____$1 = this;
var pred__31108 = cljs.core.keyword_identical_QMARK_;
var expr__31109 = k__28584__auto__;
if(cljs.core.truth_(pred__31108.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445),expr__31109))){
return (new instaparse.gll.Node(G__31102,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31108.call(null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),expr__31109))){
return (new instaparse.gll.Node(self__.listeners,G__31102,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31108.call(null,new cljs.core.Keyword(null,"results","results",-1134170113),expr__31109))){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__31102,self__.full_results,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31108.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407),expr__31109))){
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__31102,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28584__auto__,G__31102),null));
}
}
}
}
});

instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28588__auto__){
var self__ = this;
var this__28588__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"results","results",-1134170113),self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results],null))], null),self__.__extmap));
});

instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28575__auto__,G__31102){
var self__ = this;
var this__28575__auto____$1 = this;
return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__31102,self__.__extmap,self__.__hash));
});

instaparse.gll.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28581__auto__,entry__28582__auto__){
var self__ = this;
var this__28581__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28582__auto__)){
return this__28581__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28582__auto__,(0)),cljs.core._nth.call(null,entry__28582__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28581__auto____$1,entry__28582__auto__);
}
});

instaparse.gll.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"listeners","listeners",2035075972,null),new cljs.core.Symbol(null,"full-listeners","full-listeners",1691153354,null),new cljs.core.Symbol(null,"results","results",506361414,null),new cljs.core.Symbol(null,"full-results","full-results",140306120,null)], null);
});

instaparse.gll.Node.cljs$lang$type = true;

instaparse.gll.Node.cljs$lang$ctorPrSeq = (function (this__28612__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Node");
});

instaparse.gll.Node.cljs$lang$ctorPrWriter = (function (this__28612__auto__,writer__28613__auto__){
return cljs.core._write.call(null,writer__28613__auto__,"instaparse.gll/Node");
});

instaparse.gll.__GT_Node = (function instaparse$gll$__GT_Node(listeners,full_listeners,results,full_results){
return (new instaparse.gll.Node(listeners,full_listeners,results,full_results,null,null,null));
});

instaparse.gll.map__GT_Node = (function instaparse$gll$map__GT_Node(G__31106){
return (new instaparse.gll.Node(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(G__31106),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(G__31106),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(G__31106),new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(G__31106),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__31106,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"full-results","full-results",-1500225407))),null));
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

var seq__31113_31121 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__31114_31122 = null;
var count__31115_31123 = (0);
var i__31116_31124 = (0);
while(true){
if((i__31116_31124 < count__31115_31123)){
var listener_31125 = cljs.core._nth.call(null,chunk__31114_31122,i__31116_31124);
instaparse.gll.push_message.call(null,tramp,listener_31125,result__$2);

var G__31126 = seq__31113_31121;
var G__31127 = chunk__31114_31122;
var G__31128 = count__31115_31123;
var G__31129 = (i__31116_31124 + (1));
seq__31113_31121 = G__31126;
chunk__31114_31122 = G__31127;
count__31115_31123 = G__31128;
i__31116_31124 = G__31129;
continue;
} else {
var temp__4657__auto___31130 = cljs.core.seq.call(null,seq__31113_31121);
if(temp__4657__auto___31130){
var seq__31113_31131__$1 = temp__4657__auto___31130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31113_31131__$1)){
var c__28775__auto___31132 = cljs.core.chunk_first.call(null,seq__31113_31131__$1);
var G__31133 = cljs.core.chunk_rest.call(null,seq__31113_31131__$1);
var G__31134 = c__28775__auto___31132;
var G__31135 = cljs.core.count.call(null,c__28775__auto___31132);
var G__31136 = (0);
seq__31113_31121 = G__31133;
chunk__31114_31122 = G__31134;
count__31115_31123 = G__31135;
i__31116_31124 = G__31136;
continue;
} else {
var listener_31137 = cljs.core.first.call(null,seq__31113_31131__$1);
instaparse.gll.push_message.call(null,tramp,listener_31137,result__$2);

var G__31138 = cljs.core.next.call(null,seq__31113_31131__$1);
var G__31139 = null;
var G__31140 = (0);
var G__31141 = (0);
seq__31113_31121 = G__31138;
chunk__31114_31122 = G__31139;
count__31115_31123 = G__31140;
i__31116_31124 = G__31141;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(total_QMARK_)){
var seq__31117 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__31118 = null;
var count__31119 = (0);
var i__31120 = (0);
while(true){
if((i__31120 < count__31119)){
var listener = cljs.core._nth.call(null,chunk__31118,i__31120);
instaparse.gll.push_message.call(null,tramp,listener,result__$2);

var G__31142 = seq__31117;
var G__31143 = chunk__31118;
var G__31144 = count__31119;
var G__31145 = (i__31120 + (1));
seq__31117 = G__31142;
chunk__31118 = G__31143;
count__31119 = G__31144;
i__31120 = G__31145;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31117);
if(temp__4657__auto__){
var seq__31117__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31117__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__31117__$1);
var G__31146 = cljs.core.chunk_rest.call(null,seq__31117__$1);
var G__31147 = c__28775__auto__;
var G__31148 = cljs.core.count.call(null,c__28775__auto__);
var G__31149 = (0);
seq__31117 = G__31146;
chunk__31118 = G__31147;
count__31119 = G__31148;
i__31120 = G__31149;
continue;
} else {
var listener = cljs.core.first.call(null,seq__31117__$1);
instaparse.gll.push_message.call(null,tramp,listener,result__$2);

var G__31150 = cljs.core.next.call(null,seq__31117__$1);
var G__31151 = null;
var G__31152 = (0);
var G__31153 = (0);
seq__31117 = G__31150;
chunk__31118 = G__31151;
count__31119 = G__31152;
i__31120 = G__31153;
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

var seq__31154_31162 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__31155_31163 = null;
var count__31156_31164 = (0);
var i__31157_31165 = (0);
while(true){
if((i__31157_31165 < count__31156_31164)){
var result_31166 = cljs.core._nth.call(null,chunk__31155_31163,i__31157_31165);
instaparse.gll.push_message.call(null,tramp,listener,result_31166);

var G__31167 = seq__31154_31162;
var G__31168 = chunk__31155_31163;
var G__31169 = count__31156_31164;
var G__31170 = (i__31157_31165 + (1));
seq__31154_31162 = G__31167;
chunk__31155_31163 = G__31168;
count__31156_31164 = G__31169;
i__31157_31165 = G__31170;
continue;
} else {
var temp__4657__auto___31171 = cljs.core.seq.call(null,seq__31154_31162);
if(temp__4657__auto___31171){
var seq__31154_31172__$1 = temp__4657__auto___31171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31154_31172__$1)){
var c__28775__auto___31173 = cljs.core.chunk_first.call(null,seq__31154_31172__$1);
var G__31174 = cljs.core.chunk_rest.call(null,seq__31154_31172__$1);
var G__31175 = c__28775__auto___31173;
var G__31176 = cljs.core.count.call(null,c__28775__auto___31173);
var G__31177 = (0);
seq__31154_31162 = G__31174;
chunk__31155_31163 = G__31175;
count__31156_31164 = G__31176;
i__31157_31165 = G__31177;
continue;
} else {
var result_31178 = cljs.core.first.call(null,seq__31154_31172__$1);
instaparse.gll.push_message.call(null,tramp,listener,result_31178);

var G__31179 = cljs.core.next.call(null,seq__31154_31172__$1);
var G__31180 = null;
var G__31181 = (0);
var G__31182 = (0);
seq__31154_31162 = G__31179;
chunk__31155_31163 = G__31180;
count__31156_31164 = G__31181;
i__31157_31165 = G__31182;
continue;
}
} else {
}
}
break;
}

var seq__31158_31183 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__31159_31184 = null;
var count__31160_31185 = (0);
var i__31161_31186 = (0);
while(true){
if((i__31161_31186 < count__31160_31185)){
var result_31187 = cljs.core._nth.call(null,chunk__31159_31184,i__31161_31186);
instaparse.gll.push_message.call(null,tramp,listener,result_31187);

var G__31188 = seq__31158_31183;
var G__31189 = chunk__31159_31184;
var G__31190 = count__31160_31185;
var G__31191 = (i__31161_31186 + (1));
seq__31158_31183 = G__31188;
chunk__31159_31184 = G__31189;
count__31160_31185 = G__31190;
i__31161_31186 = G__31191;
continue;
} else {
var temp__4657__auto___31192 = cljs.core.seq.call(null,seq__31158_31183);
if(temp__4657__auto___31192){
var seq__31158_31193__$1 = temp__4657__auto___31192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31158_31193__$1)){
var c__28775__auto___31194 = cljs.core.chunk_first.call(null,seq__31158_31193__$1);
var G__31195 = cljs.core.chunk_rest.call(null,seq__31158_31193__$1);
var G__31196 = c__28775__auto___31194;
var G__31197 = cljs.core.count.call(null,c__28775__auto___31194);
var G__31198 = (0);
seq__31158_31183 = G__31195;
chunk__31159_31184 = G__31196;
count__31160_31185 = G__31197;
i__31161_31186 = G__31198;
continue;
} else {
var result_31199 = cljs.core.first.call(null,seq__31158_31193__$1);
instaparse.gll.push_message.call(null,tramp,listener,result_31199);

var G__31200 = cljs.core.next.call(null,seq__31158_31193__$1);
var G__31201 = null;
var G__31202 = (0);
var G__31203 = (0);
seq__31158_31183 = G__31200;
chunk__31159_31184 = G__31201;
count__31160_31185 = G__31202;
i__31161_31186 = G__31203;
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

var seq__31204_31208 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(node)));
var chunk__31205_31209 = null;
var count__31206_31210 = (0);
var i__31207_31211 = (0);
while(true){
if((i__31207_31211 < count__31206_31210)){
var result_31212 = cljs.core._nth.call(null,chunk__31205_31209,i__31207_31211);
instaparse.gll.push_message.call(null,tramp,listener,result_31212);

var G__31213 = seq__31204_31208;
var G__31214 = chunk__31205_31209;
var G__31215 = count__31206_31210;
var G__31216 = (i__31207_31211 + (1));
seq__31204_31208 = G__31213;
chunk__31205_31209 = G__31214;
count__31206_31210 = G__31215;
i__31207_31211 = G__31216;
continue;
} else {
var temp__4657__auto___31217 = cljs.core.seq.call(null,seq__31204_31208);
if(temp__4657__auto___31217){
var seq__31204_31218__$1 = temp__4657__auto___31217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31204_31218__$1)){
var c__28775__auto___31219 = cljs.core.chunk_first.call(null,seq__31204_31218__$1);
var G__31220 = cljs.core.chunk_rest.call(null,seq__31204_31218__$1);
var G__31221 = c__28775__auto___31219;
var G__31222 = cljs.core.count.call(null,c__28775__auto___31219);
var G__31223 = (0);
seq__31204_31208 = G__31220;
chunk__31205_31209 = G__31221;
count__31206_31210 = G__31222;
i__31207_31211 = G__31223;
continue;
} else {
var result_31224 = cljs.core.first.call(null,seq__31204_31218__$1);
instaparse.gll.push_message.call(null,tramp,listener,result_31224);

var G__31225 = cljs.core.next.call(null,seq__31204_31218__$1);
var G__31226 = null;
var G__31227 = (0);
var G__31228 = (0);
seq__31204_31208 = G__31225;
chunk__31205_31209 = G__31226;
count__31206_31210 = G__31227;
i__31207_31211 = G__31228;
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
var G__31229 = cljs.core.compare.call(null,index,current_index);
switch (G__31229) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31229)].join('')));

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
var G__31232 = arguments.length;
switch (G__31232) {
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

var G__31237 = tramp;
var G__31238 = found_result_QMARK_;
tramp = G__31237;
found_result_QMARK_ = G__31238;
continue;
} else {
if((cljs.core.count.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp))) > (0))){
var vec__31233 = cljs.core.first.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp)));
var index = cljs.core.nth.call(null,vec__31233,(0),null);
var listeners = cljs.core.nth.call(null,vec__31233,(1),null);
var listener = cljs.core.peek.call(null,listeners);

listener.call(null);

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,listeners),(1))){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.dissoc,index);
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null),cljs.core.pop);
}

var G__31239 = tramp;
var G__31240 = found_result_QMARK_;
tramp = G__31239;
found_result_QMARK_ = G__31240;
continue;
} else {
if(cljs.core.truth_(found_result_QMARK_)){
var next_stack = new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(tramp);
cljs.core.reset_BANG_.call(null,stack,cljs.core.deref.call(null,next_stack));

cljs.core.reset_BANG_.call(null,next_stack,cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(tramp),cljs.core.inc);

var G__31241 = tramp;
var G__31242 = null;
tramp = G__31241;
found_result_QMARK_ = G__31242;
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
var map__31243 = result;
var map__31243__$1 = ((((!((map__31243 == null)))?((((map__31243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31243):map__31243);
var parsed_result = cljs.core.get.call(null,map__31243__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__31243__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
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
var map__31245 = result;
var map__31245__$1 = ((((!((map__31245 == null)))?((((map__31245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31245):map__31245);
var parsed_result = cljs.core.get.call(null,map__31245__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__31245__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
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
var map__31247 = result;
var map__31247__$1 = ((((!((map__31247 == null)))?((((map__31247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31247):map__31247);
var parsed_result = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
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
var map__31249 = result;
var map__31249__$1 = ((((!((map__31249 == null)))?((((map__31249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31249):map__31249);
var parsed_result = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__31249__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
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
var map__31251 = result;
var map__31251__$1 = ((((!((map__31251 == null)))?((((map__31251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31251):map__31251);
var parsed_result = cljs.core.get.call(null,map__31251__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__31251__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
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
var map__31253 = result;
var map__31253__$1 = ((((!((map__31253 == null)))?((((map__31253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31253):map__31253);
var parsed_result = cljs.core.get.call(null,map__31253__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var continue_index = cljs.core.get.call(null,map__31253__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
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
var end = (function (){var x__28293__auto__ = cljs.core.count.call(null,text);
var y__28294__auto__ = (index + cljs.core.count.call(null,string));
return ((x__28293__auto__ < y__28294__auto__) ? x__28293__auto__ : y__28294__auto__);
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
var end = (function (){var x__28293__auto__ = cljs.core.count.call(null,text);
var y__28294__auto__ = (index + cljs.core.count.call(null,string));
return ((x__28293__auto__ < y__28294__auto__) ? x__28293__auto__ : y__28294__auto__);
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
var end = (function (){var x__28293__auto__ = cljs.core.count.call(null,text);
var y__28294__auto__ = (index + cljs.core.count.call(null,string));
return ((x__28293__auto__ < y__28294__auto__) ? x__28293__auto__ : y__28294__auto__);
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
var end = (function (){var x__28293__auto__ = cljs.core.count.call(null,text);
var y__28294__auto__ = (index + cljs.core.count.call(null,string));
return ((x__28293__auto__ < y__28294__auto__) ? x__28293__auto__ : y__28294__auto__);
})();
var head = instaparse.gll.sub_sequence.call(null,text,index,end);
if(cljs.core.truth_((function (){var and__27924__auto__ = cljs.core._EQ_.call(null,end,cljs.core.count.call(null,text));
if(and__27924__auto__){
return instaparse.gll.equals_ignore_case.call(null,string,head);
} else {
return and__27924__auto__;
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
if(cljs.core.truth_((function (){var and__27924__auto__ = m;
if(cljs.core.truth_(and__27924__auto__)){
return (m.index === (0));
} else {
return and__27924__auto__;
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
if(cljs.core.truth_((function (){var and__27924__auto__ = match;
if(cljs.core.truth_(and__27924__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,match),desired_length);
} else {
return and__27924__auto__;
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
var seq__31255 = cljs.core.seq.call(null,parsers);
var chunk__31256 = null;
var count__31257 = (0);
var i__31258 = (0);
while(true){
if((i__31258 < count__31257)){
var parser = cljs.core._nth.call(null,chunk__31256,i__31258);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__31259 = seq__31255;
var G__31260 = chunk__31256;
var G__31261 = count__31257;
var G__31262 = (i__31258 + (1));
seq__31255 = G__31259;
chunk__31256 = G__31260;
count__31257 = G__31261;
i__31258 = G__31262;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31255);
if(temp__4657__auto__){
var seq__31255__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31255__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__31255__$1);
var G__31263 = cljs.core.chunk_rest.call(null,seq__31255__$1);
var G__31264 = c__28775__auto__;
var G__31265 = cljs.core.count.call(null,c__28775__auto__);
var G__31266 = (0);
seq__31255 = G__31263;
chunk__31256 = G__31264;
count__31257 = G__31265;
i__31258 = G__31266;
continue;
} else {
var parser = cljs.core.first.call(null,seq__31255__$1);
instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__31267 = cljs.core.next.call(null,seq__31255__$1);
var G__31268 = null;
var G__31269 = (0);
var G__31270 = (0);
seq__31255 = G__31267;
chunk__31256 = G__31268;
count__31257 = G__31269;
i__31258 = G__31270;
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
var seq__31271 = cljs.core.seq.call(null,parsers);
var chunk__31272 = null;
var count__31273 = (0);
var i__31274 = (0);
while(true){
if((i__31274 < count__31273)){
var parser = cljs.core._nth.call(null,chunk__31272,i__31274);
instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__31275 = seq__31271;
var G__31276 = chunk__31272;
var G__31277 = count__31273;
var G__31278 = (i__31274 + (1));
seq__31271 = G__31275;
chunk__31272 = G__31276;
count__31273 = G__31277;
i__31274 = G__31278;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31271);
if(temp__4657__auto__){
var seq__31271__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31271__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__31271__$1);
var G__31279 = cljs.core.chunk_rest.call(null,seq__31271__$1);
var G__31280 = c__28775__auto__;
var G__31281 = cljs.core.count.call(null,c__28775__auto__);
var G__31282 = (0);
seq__31271 = G__31279;
chunk__31272 = G__31280;
count__31273 = G__31281;
i__31274 = G__31282;
continue;
} else {
var parser = cljs.core.first.call(null,seq__31271__$1);
instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));

var G__31283 = cljs.core.next.call(null,seq__31271__$1);
var G__31284 = null;
var G__31285 = (0);
var G__31286 = (0);
seq__31271 = G__31283;
chunk__31272 = G__31284;
count__31273 = G__31285;
i__31274 = G__31286;
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
var x__28798__auto__ = instaparse.gll.build_total_failure_node.call(null,node_builder,start,text);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
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

//# sourceMappingURL=gll.js.map?rel=1510190746796
