// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.gll');
goog.require('cljs.core');
goog.require('instaparse.combinators_source');
goog.require('instaparse.print');
goog.require('instaparse.print');
goog.require('instaparse.combinators_source');
goog.require('instaparse.reduction');
goog.require('instaparse.reduction');
goog.require('instaparse.failure');
goog.require('instaparse.failure');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.auto_flatten_seq');
instaparse.gll.ISegment = (function (){var obj20644 = {};return obj20644;
})();
instaparse.gll.subsegment = (function subsegment(this$,start_index,end_index_minus_one){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.instaparse$gll$ISegment$subsegment$arity$3;
} else
{return and__3628__auto__;
}
})())
{return this$.instaparse$gll$ISegment$subsegment$arity$3(this$,start_index,end_index_minus_one);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (instaparse.gll.subsegment[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (instaparse.gll.subsegment["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISegment.subsegment",this$);
}
}
})().call(null,this$,start_index,end_index_minus_one);
}
});
instaparse.gll.toString = (function toString(this$){if((function (){var and__3628__auto__ = this$;if(and__3628__auto__)
{return this$.instaparse$gll$ISegment$toString$arity$1;
} else
{return and__3628__auto__;
}
})())
{return this$.instaparse$gll$ISegment$toString$arity$1(this$);
} else
{var x__4277__auto__ = (((this$ == null))?null:this$);return (function (){var or__3640__auto__ = (instaparse.gll.toString[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (instaparse.gll.toString["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISegment.toString",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
instaparse.gll.Segment = (function (text,offset,count){
this.text = text;
this.offset = offset;
this.count = count;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
instaparse.gll.Segment.cljs$lang$type = true;
instaparse.gll.Segment.cljs$lang$ctorStr = "instaparse.gll/Segment";
instaparse.gll.Segment.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"instaparse.gll/Segment");
});
instaparse.gll.Segment.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.count;
});
instaparse.gll.Segment.prototype.instaparse$gll$ISegment$ = true;
instaparse.gll.Segment.prototype.instaparse$gll$ISegment$subsegment$arity$3 = (function (this$,start,end){var self__ = this;
var this$__$1 = this;return (new instaparse.gll.Segment(self__.text,(self__.offset + start),(end - start)));
});
instaparse.gll.Segment.prototype.instaparse$gll$ISegment$toString$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.subs.call(null,self__.text,self__.offset,(self__.offset + self__.count));
});
instaparse.gll.__GT_Segment = (function __GT_Segment(text,offset,count){return (new instaparse.gll.Segment(text,offset,count));
});
instaparse.gll.get_parser = (function get_parser(grammar,p){return cljs.core.get.call(null,grammar,p,p);
});
instaparse.gll._parse = (function _parse(parser,index,tramp){var G__20646 = (((new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser).fqn:null);switch (G__20646) {
case "neg":
return instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp);

break;
case "cat":
return instaparse.gll.cat_parse.call(null,parser,index,tramp);

break;
case "ord":
return instaparse.gll.ordered_alt_parse.call(null,parser,index,tramp);

break;
case "alt":
return instaparse.gll.alt_parse.call(null,parser,index,tramp);

break;
case "look":
return instaparse.gll.lookahead_parse.call(null,parser,index,tramp);

break;
case "nt":
return instaparse.gll.non_terminal_parse.call(null,parser,index,tramp);

break;
case "rep":
return instaparse.gll.rep_parse.call(null,parser,index,tramp);

break;
case "star":
return instaparse.gll.star_parse.call(null,parser,index,tramp);

break;
case "string":
return instaparse.gll.string_parse.call(null,parser,index,tramp);

break;
case "regexp":
return instaparse.gll.regexp_parse.call(null,parser,index,tramp);

break;
case "plus":
return instaparse.gll.plus_parse.call(null,parser,index,tramp);

break;
case "epsilon":
return instaparse.gll.epsilon_parse.call(null,parser,index,tramp);

break;
case "string-ci":
return instaparse.gll.string_case_insensitive_parse.call(null,parser,index,tramp);

break;
case "opt":
return instaparse.gll.opt_parse.call(null,parser,index,tramp);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser)))));

}
});
instaparse.gll._full_parse = (function _full_parse(parser,index,tramp){var G__20649 = (((new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser).fqn:null);switch (G__20649) {
case "neg":
return instaparse.gll.negative_lookahead_parse.call(null,parser,index,tramp);

break;
case "cat":
return instaparse.gll.cat_full_parse.call(null,parser,index,tramp);

break;
case "ord":
return instaparse.gll.ordered_alt_full_parse.call(null,parser,index,tramp);

break;
case "alt":
return instaparse.gll.alt_full_parse.call(null,parser,index,tramp);

break;
case "look":
return instaparse.gll.lookahead_full_parse.call(null,parser,index,tramp);

break;
case "nt":
return instaparse.gll.non_terminal_full_parse.call(null,parser,index,tramp);

break;
case "rep":
return instaparse.gll.rep_full_parse.call(null,parser,index,tramp);

break;
case "star":
return instaparse.gll.star_full_parse.call(null,parser,index,tramp);

break;
case "string":
return instaparse.gll.string_full_parse.call(null,parser,index,tramp);

break;
case "regexp":
return instaparse.gll.regexp_full_parse.call(null,parser,index,tramp);

break;
case "plus":
return instaparse.gll.plus_full_parse.call(null,parser,index,tramp);

break;
case "epsilon":
return instaparse.gll.epsilon_full_parse.call(null,parser,index,tramp);

break;
case "string-ci":
return instaparse.gll.string_case_insensitive_full_parse.call(null,parser,index,tramp);

break;
case "opt":
return instaparse.gll.opt_full_parse.call(null,parser,index,tramp);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser)))));

}
});

/**
* @constructor
* @param {*} index
* @param {*} reason
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
instaparse.gll.Failure = (function (index,reason,__meta,__extmap){
this.index = index;
this.reason = reason;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4236__auto__,k__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;return cljs.core._lookup.call(null,this__4236__auto____$1,k__4237__auto__,null);
});
instaparse.gll.Failure.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4238__auto__,k20652,else__4239__auto__){var self__ = this;
var this__4238__auto____$1 = this;var G__20654 = (((k20652 instanceof cljs.core.Keyword))?k20652.fqn:null);switch (G__20654) {
case "reason":
return self__.reason;

break;
case "index":
return self__.index;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20652,else__4239__auto__);

}
});
instaparse.gll.Failure.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4250__auto__,writer__4251__auto__,opts__4252__auto__){var self__ = this;
var this__4250__auto____$1 = this;var pr_pair__4253__auto__ = ((function (this__4250__auto____$1){
return (function (keyval__4254__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4251__auto__,cljs.core.pr_writer,""," ","",opts__4252__auto__,keyval__4254__auto__);
});})(this__4250__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4251__auto__,pr_pair__4253__auto__,"#instaparse.gll.Failure{",", ","}",opts__4252__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason],null))], null),self__.__extmap));
});
instaparse.gll.Failure.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4234__auto__){var self__ = this;
var this__4234__auto____$1 = this;return self__.__meta;
});
instaparse.gll.Failure.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,self__.__extmap,self__.__hash));
});
instaparse.gll.Failure.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4240__auto__){var self__ = this;
var this__4240__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
instaparse.gll.Failure.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4231__auto__){var self__ = this;
var this__4231__auto____$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_imap.call(null,this__4231__auto____$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
instaparse.gll.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4232__auto__,other__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;if(cljs.core.truth_((function (){var and__3628__auto__ = other__4233__auto__;if(cljs.core.truth_(and__3628__auto__))
{return ((this__4232__auto____$1.constructor === other__4233__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4232__auto____$1,other__4233__auto__));
} else
{return and__3628__auto__;
}
})()))
{return true;
} else
{return false;
}
});
instaparse.gll.Failure.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4245__auto__,k__4246__auto__){var self__ = this;
var this__4245__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null], null), null),k__4246__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4245__auto____$1),self__.__meta),k__4246__auto__);
} else
{return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4246__auto__)),null));
}
});
instaparse.gll.Failure.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4243__auto__,k__4244__auto__,G__20651){var self__ = this;
var this__4243__auto____$1 = this;var pred__20655 = cljs.core.keyword_identical_QMARK_;var expr__20656 = k__4244__auto__;if(cljs.core.truth_(pred__20655.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__20656)))
{return (new instaparse.gll.Failure(G__20651,self__.reason,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20655.call(null,new cljs.core.Keyword(null,"reason","reason",-2070751759),expr__20656)))
{return (new instaparse.gll.Failure(self__.index,G__20651,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Failure(self__.index,self__.reason,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4244__auto__,G__20651),null));
}
}
});
instaparse.gll.Failure.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4248__auto__){var self__ = this;
var this__4248__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reason","reason",-2070751759),self__.reason],null))], null),self__.__extmap));
});
instaparse.gll.Failure.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4235__auto__,G__20651){var self__ = this;
var this__4235__auto____$1 = this;return (new instaparse.gll.Failure(self__.index,self__.reason,G__20651,self__.__extmap,self__.__hash));
});
instaparse.gll.Failure.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4241__auto__,entry__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4242__auto__))
{return cljs.core._assoc.call(null,this__4241__auto____$1,cljs.core._nth.call(null,entry__4242__auto__,(0)),cljs.core._nth.call(null,entry__4242__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4241__auto____$1,entry__4242__auto__);
}
});
instaparse.gll.Failure.cljs$lang$type = true;
instaparse.gll.Failure.cljs$lang$ctorPrSeq = (function (this__4270__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Failure");
});
instaparse.gll.Failure.cljs$lang$ctorPrWriter = (function (this__4270__auto__,writer__4271__auto__){return cljs.core._write.call(null,writer__4271__auto__,"instaparse.gll/Failure");
});
instaparse.gll.__GT_Failure = (function __GT_Failure(index,reason){return (new instaparse.gll.Failure(index,reason));
});
instaparse.gll.map__GT_Failure = (function map__GT_Failure(G__20653){return (new instaparse.gll.Failure(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__20653),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(G__20653),null,cljs.core.dissoc.call(null,G__20653,new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"reason","reason",-2070751759))));
});
/**
* Converts a string to a Segment, which has fast subsequencing
*/
instaparse.gll.string__GT_segment = (function string__GT_segment(s){return (new instaparse.gll.Segment(s,(0),cljs.core.count.call(null,s)));
});

/**
* @constructor
* @param {*} grammar
* @param {*} text
* @param {*} segment
* @param {*} fail_index
* @param {*} node_builder
* @param {*} stack
* @param {*} next_stack
* @param {*} generation
* @param {*} negative_listeners
* @param {*} msg_cache
* @param {*} nodes
* @param {*} success
* @param {*} failure
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
instaparse.gll.Tramp = (function (grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure,__meta,__extmap){
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
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>13){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4236__auto__,k__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;return cljs.core._lookup.call(null,this__4236__auto____$1,k__4237__auto__,null);
});
instaparse.gll.Tramp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4238__auto__,k20660,else__4239__auto__){var self__ = this;
var this__4238__auto____$1 = this;var G__20662 = (((k20660 instanceof cljs.core.Keyword))?k20660.fqn:null);switch (G__20662) {
case "msg-cache":
return self__.msg_cache;

break;
case "negative-listeners":
return self__.negative_listeners;

break;
case "generation":
return self__.generation;

break;
case "failure":
return self__.failure;

break;
case "fail-index":
return self__.fail_index;

break;
case "grammar":
return self__.grammar;

break;
case "success":
return self__.success;

break;
case "nodes":
return self__.nodes;

break;
case "node-builder":
return self__.node_builder;

break;
case "segment":
return self__.segment;

break;
case "stack":
return self__.stack;

break;
case "next-stack":
return self__.next_stack;

break;
case "text":
return self__.text;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20660,else__4239__auto__);

}
});
instaparse.gll.Tramp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4250__auto__,writer__4251__auto__,opts__4252__auto__){var self__ = this;
var this__4250__auto____$1 = this;var pr_pair__4253__auto__ = ((function (this__4250__auto____$1){
return (function (keyval__4254__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4251__auto__,cljs.core.pr_writer,""," ","",opts__4252__auto__,keyval__4254__auto__);
});})(this__4250__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4251__auto__,pr_pair__4253__auto__,"#instaparse.gll.Tramp{",", ","}",opts__4252__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"success","success",1890645906),self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure],null))], null),self__.__extmap));
});
instaparse.gll.Tramp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4234__auto__){var self__ = this;
var this__4234__auto____$1 = this;return self__.__meta;
});
instaparse.gll.Tramp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,self__.__hash));
});
instaparse.gll.Tramp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4240__auto__){var self__ = this;
var this__4240__auto____$1 = this;return (13 + cljs.core.count.call(null,self__.__extmap));
});
instaparse.gll.Tramp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4231__auto__){var self__ = this;
var this__4231__auto____$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_imap.call(null,this__4231__auto____$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
instaparse.gll.Tramp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4232__auto__,other__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;if(cljs.core.truth_((function (){var and__3628__auto__ = other__4233__auto__;if(cljs.core.truth_(and__3628__auto__))
{return ((this__4232__auto____$1.constructor === other__4233__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4232__auto____$1,other__4233__auto__));
} else
{return and__3628__auto__;
}
})()))
{return true;
} else
{return false;
}
});
instaparse.gll.Tramp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4245__auto__,k__4246__auto__){var self__ = this;
var this__4245__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),null,new cljs.core.Keyword(null,"generation","generation",-2132542044),null,new cljs.core.Keyword(null,"failure","failure",720415879),null,new cljs.core.Keyword(null,"fail-index","fail-index",248726923),null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),null,new cljs.core.Keyword(null,"success","success",1890645906),null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),null,new cljs.core.Keyword(null,"segment","segment",-964921196),null,new cljs.core.Keyword(null,"stack","stack",-793405930),null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__4246__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4245__auto____$1),self__.__meta),k__4246__auto__);
} else
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4246__auto__)),null));
}
});
instaparse.gll.Tramp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4243__auto__,k__4244__auto__,G__20659){var self__ = this;
var this__4243__auto____$1 = this;var pred__20663 = cljs.core.keyword_identical_QMARK_;var expr__20664 = k__4244__auto__;if(cljs.core.truth_(pred__20663.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267),expr__20664)))
{return (new instaparse.gll.Tramp(G__20659,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20663.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__20664)))
{return (new instaparse.gll.Tramp(self__.grammar,G__20659,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20663.call(null,new cljs.core.Keyword(null,"segment","segment",-964921196),expr__20664)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,G__20659,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20663.call(null,new cljs.core.Keyword(null,"fail-index","fail-index",248726923),expr__20664)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,G__20659,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20663.call(null,new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),expr__20664)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,G__20659,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20663.call(null,new cljs.core.Keyword(null,"stack","stack",-793405930),expr__20664)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,G__20659,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20663.call(null,new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),expr__20664)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,G__20659,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20663.call(null,new cljs.core.Keyword(null,"generation","generation",-2132542044),expr__20664)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,G__20659,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20663.call(null,new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),expr__20664)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,G__20659,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20663.call(null,new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),expr__20664)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,G__20659,self__.nodes,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20663.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),expr__20664)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,G__20659,self__.success,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20663.call(null,new cljs.core.Keyword(null,"success","success",1890645906),expr__20664)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,G__20659,self__.failure,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20663.call(null,new cljs.core.Keyword(null,"failure","failure",720415879),expr__20664)))
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,G__20659,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4244__auto__,G__20659),null));
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
instaparse.gll.Tramp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4248__auto__){var self__ = this;
var this__4248__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"grammar","grammar",1881328267),self__.grammar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segment","segment",-964921196),self__.segment],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fail-index","fail-index",248726923),self__.fail_index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),self__.node_builder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stack","stack",-793405930),self__.stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),self__.next_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"generation","generation",-2132542044),self__.generation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),self__.negative_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),self__.msg_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodes","nodes",-2099585805),self__.nodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"success","success",1890645906),self__.success],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"failure","failure",720415879),self__.failure],null))], null),self__.__extmap));
});
instaparse.gll.Tramp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4235__auto__,G__20659){var self__ = this;
var this__4235__auto____$1 = this;return (new instaparse.gll.Tramp(self__.grammar,self__.text,self__.segment,self__.fail_index,self__.node_builder,self__.stack,self__.next_stack,self__.generation,self__.negative_listeners,self__.msg_cache,self__.nodes,self__.success,self__.failure,G__20659,self__.__extmap,self__.__hash));
});
instaparse.gll.Tramp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4241__auto__,entry__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4242__auto__))
{return cljs.core._assoc.call(null,this__4241__auto____$1,cljs.core._nth.call(null,entry__4242__auto__,(0)),cljs.core._nth.call(null,entry__4242__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4241__auto____$1,entry__4242__auto__);
}
});
instaparse.gll.Tramp.cljs$lang$type = true;
instaparse.gll.Tramp.cljs$lang$ctorPrSeq = (function (this__4270__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Tramp");
});
instaparse.gll.Tramp.cljs$lang$ctorPrWriter = (function (this__4270__auto__,writer__4271__auto__){return cljs.core._write.call(null,writer__4271__auto__,"instaparse.gll/Tramp");
});
instaparse.gll.__GT_Tramp = (function __GT_Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure){return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,stack,next_stack,generation,negative_listeners,msg_cache,nodes,success,failure));
});
instaparse.gll.map__GT_Tramp = (function map__GT_Tramp(G__20661){return (new instaparse.gll.Tramp(new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(G__20661),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__20661),new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(G__20661),new cljs.core.Keyword(null,"fail-index","fail-index",248726923).cljs$core$IFn$_invoke$arity$1(G__20661),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605).cljs$core$IFn$_invoke$arity$1(G__20661),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(G__20661),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728).cljs$core$IFn$_invoke$arity$1(G__20661),new cljs.core.Keyword(null,"generation","generation",-2132542044).cljs$core$IFn$_invoke$arity$1(G__20661),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092).cljs$core$IFn$_invoke$arity$1(G__20661),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070).cljs$core$IFn$_invoke$arity$1(G__20661),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(G__20661),new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(G__20661),new cljs.core.Keyword(null,"failure","failure",720415879).cljs$core$IFn$_invoke$arity$1(G__20661),null,cljs.core.dissoc.call(null,G__20661,new cljs.core.Keyword(null,"grammar","grammar",1881328267),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword(null,"fail-index","fail-index",248726923),new cljs.core.Keyword(null,"node-builder","node-builder",-1956562605),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"next-stack","next-stack",-481930728),new cljs.core.Keyword(null,"generation","generation",-2132542044),new cljs.core.Keyword(null,"negative-listeners","negative-listeners",55241092),new cljs.core.Keyword(null,"msg-cache","msg-cache",-733775070),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"failure","failure",720415879))));
});
instaparse.gll.make_tramp = (function() {
var make_tramp = null;
var make_tramp__2 = (function (grammar,text){return make_tramp.call(null,grammar,text,instaparse.gll.string__GT_segment.call(null,text),(-1),null);
});
var make_tramp__3 = (function (grammar,text,segment){return make_tramp.call(null,grammar,text,segment,(-1),null);
});
var make_tramp__4 = (function (grammar,text,fail_index,node_builder){return make_tramp.call(null,grammar,text,instaparse.gll.string__GT_segment.call(null,text),fail_index,node_builder);
});
var make_tramp__5 = (function (grammar,text,segment,fail_index,node_builder){return (new instaparse.gll.Tramp(grammar,text,segment,fail_index,node_builder,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,(new instaparse.gll.Failure((0),cljs.core.PersistentVector.EMPTY))));
});
make_tramp = function(grammar,text,segment,fail_index,node_builder){
switch(arguments.length){
case 2:
return make_tramp__2.call(this,grammar,text);
case 3:
return make_tramp__3.call(this,grammar,text,segment);
case 4:
return make_tramp__4.call(this,grammar,text,segment,fail_index);
case 5:
return make_tramp__5.call(this,grammar,text,segment,fail_index,node_builder);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_tramp.cljs$core$IFn$_invoke$arity$2 = make_tramp__2;
make_tramp.cljs$core$IFn$_invoke$arity$3 = make_tramp__3;
make_tramp.cljs$core$IFn$_invoke$arity$4 = make_tramp__4;
make_tramp.cljs$core$IFn$_invoke$arity$5 = make_tramp__5;
return make_tramp;
})()
;
instaparse.gll.make_success = (function make_success(result,index){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"index","index",-1531685915),index], null);
});
instaparse.gll.total_success_QMARK_ = (function total_success_QMARK_(tramp,s){return cljs.core._EQ_.call(null,cljs.core.count.call(null,tramp.text),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(s));
});

/**
* @constructor
* @param {*} listeners
* @param {*} full_listeners
* @param {*} results
* @param {*} full_results
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
instaparse.gll.Node = (function (listeners,full_listeners,results,full_results,__meta,__extmap){
this.listeners = listeners;
this.full_listeners = full_listeners;
this.results = results;
this.full_results = full_results;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4236__auto__,k__4237__auto__){var self__ = this;
var this__4236__auto____$1 = this;return cljs.core._lookup.call(null,this__4236__auto____$1,k__4237__auto__,null);
});
instaparse.gll.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4238__auto__,k20668,else__4239__auto__){var self__ = this;
var this__4238__auto____$1 = this;var G__20670 = (((k20668 instanceof cljs.core.Keyword))?k20668.fqn:null);switch (G__20670) {
case "full-results":
return self__.full_results;

break;
case "results":
return self__.results;

break;
case "full-listeners":
return self__.full_listeners;

break;
case "listeners":
return self__.listeners;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20668,else__4239__auto__);

}
});
instaparse.gll.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4250__auto__,writer__4251__auto__,opts__4252__auto__){var self__ = this;
var this__4250__auto____$1 = this;var pr_pair__4253__auto__ = ((function (this__4250__auto____$1){
return (function (keyval__4254__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4251__auto__,cljs.core.pr_writer,""," ","",opts__4252__auto__,keyval__4254__auto__);
});})(this__4250__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4251__auto__,pr_pair__4253__auto__,"#instaparse.gll.Node{",", ","}",opts__4252__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"results","results",-1134170113),self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results],null))], null),self__.__extmap));
});
instaparse.gll.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4234__auto__){var self__ = this;
var this__4234__auto____$1 = this;return self__.__meta;
});
instaparse.gll.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,self__.__hash));
});
instaparse.gll.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4240__auto__){var self__ = this;
var this__4240__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
instaparse.gll.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4231__auto__){var self__ = this;
var this__4231__auto____$1 = this;var h__4051__auto__ = self__.__hash;if(!((h__4051__auto__ == null)))
{return h__4051__auto__;
} else
{var h__4051__auto____$1 = cljs.core.hash_imap.call(null,this__4231__auto____$1);self__.__hash = h__4051__auto____$1;
return h__4051__auto____$1;
}
});
instaparse.gll.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4232__auto__,other__4233__auto__){var self__ = this;
var this__4232__auto____$1 = this;if(cljs.core.truth_((function (){var and__3628__auto__ = other__4233__auto__;if(cljs.core.truth_(and__3628__auto__))
{return ((this__4232__auto____$1.constructor === other__4233__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4232__auto____$1,other__4233__auto__));
} else
{return and__3628__auto__;
}
})()))
{return true;
} else
{return false;
}
});
instaparse.gll.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4245__auto__,k__4246__auto__){var self__ = this;
var this__4245__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"full-results","full-results",-1500225407),null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),null,new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),k__4246__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4245__auto____$1),self__.__meta),k__4246__auto__);
} else
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4246__auto__)),null));
}
});
instaparse.gll.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4243__auto__,k__4244__auto__,G__20667){var self__ = this;
var this__4243__auto____$1 = this;var pred__20671 = cljs.core.keyword_identical_QMARK_;var expr__20672 = k__4244__auto__;if(cljs.core.truth_(pred__20671.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445),expr__20672)))
{return (new instaparse.gll.Node(G__20667,self__.full_listeners,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20671.call(null,new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),expr__20672)))
{return (new instaparse.gll.Node(self__.listeners,G__20667,self__.results,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20671.call(null,new cljs.core.Keyword(null,"results","results",-1134170113),expr__20672)))
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,G__20667,self__.full_results,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__20671.call(null,new cljs.core.Keyword(null,"full-results","full-results",-1500225407),expr__20672)))
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,G__20667,self__.__meta,self__.__extmap,null));
} else
{return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4244__auto__,G__20667),null));
}
}
}
}
});
instaparse.gll.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4248__auto__){var self__ = this;
var this__4248__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listeners","listeners",394544445),self__.listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),self__.full_listeners],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"results","results",-1134170113),self__.results],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-results","full-results",-1500225407),self__.full_results],null))], null),self__.__extmap));
});
instaparse.gll.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4235__auto__,G__20667){var self__ = this;
var this__4235__auto____$1 = this;return (new instaparse.gll.Node(self__.listeners,self__.full_listeners,self__.results,self__.full_results,G__20667,self__.__extmap,self__.__hash));
});
instaparse.gll.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4241__auto__,entry__4242__auto__){var self__ = this;
var this__4241__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4242__auto__))
{return cljs.core._assoc.call(null,this__4241__auto____$1,cljs.core._nth.call(null,entry__4242__auto__,(0)),cljs.core._nth.call(null,entry__4242__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4241__auto____$1,entry__4242__auto__);
}
});
instaparse.gll.Node.cljs$lang$type = true;
instaparse.gll.Node.cljs$lang$ctorPrSeq = (function (this__4270__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"instaparse.gll/Node");
});
instaparse.gll.Node.cljs$lang$ctorPrWriter = (function (this__4270__auto__,writer__4271__auto__){return cljs.core._write.call(null,writer__4271__auto__,"instaparse.gll/Node");
});
instaparse.gll.__GT_Node = (function __GT_Node(listeners,full_listeners,results,full_results){return (new instaparse.gll.Node(listeners,full_listeners,results,full_results));
});
instaparse.gll.map__GT_Node = (function map__GT_Node(G__20669){return (new instaparse.gll.Node(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(G__20669),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827).cljs$core$IFn$_invoke$arity$1(G__20669),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(G__20669),new cljs.core.Keyword(null,"full-results","full-results",-1500225407).cljs$core$IFn$_invoke$arity$1(G__20669),null,cljs.core.dissoc.call(null,G__20669,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.Keyword(null,"full-listeners","full-listeners",50621827),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"full-results","full-results",-1500225407))));
});
instaparse.gll.make_node = (function make_node(){return (new instaparse.gll.Node(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY));
});
/**
* Pushes an item onto the trampoline's stack
*/
instaparse.gll.push_stack = (function push_stack(tramp,item){return tramp.stack = cljs.core.conj.call(null,tramp.stack,item);
});
/**
* Pushes onto stack a message to a given listener about a result
*/
instaparse.gll.push_message = (function push_message(tramp,listener,result){var cache = tramp.msg_cache;var i = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result);var k = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [listener,i], null);var c = cljs.core.get.call(null,cache,k,(0));var f = ((function (cache,i,k,c){
return (function (){return listener.call(null,result);
});})(cache,i,k,c))
;if((c > tramp.generation))
{tramp.next_stack = cljs.core.conj.call(null,tramp.next_stack,f);
} else
{tramp.stack = cljs.core.conj.call(null,tramp.stack,f);
}
return tramp.msg_cache = cljs.core.assoc.call(null,tramp.msg_cache,k,(c + (1)));
});
/**
* Tests whether node already has a listener
*/
instaparse.gll.listener_exists_QMARK_ = (function listener_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = nodes.call(null,node_key);if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return (cljs.core.count.call(null,node.listeners) > (0));
} else
{return null;
}
});
/**
* Tests whether node already has a listener or full-listener
*/
instaparse.gll.full_listener_exists_QMARK_ = (function full_listener_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = nodes.call(null,node_key);if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return ((cljs.core.count.call(null,node.full_listeners) > (0))) || ((cljs.core.count.call(null,node.listeners) > (0)));
} else
{return null;
}
});
/**
* Tests whether node has a result or full-result
*/
instaparse.gll.result_exists_QMARK_ = (function result_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = nodes.call(null,node_key);if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return ((cljs.core.count.call(null,node.full_results) > (0))) || ((cljs.core.count.call(null,node.results) > (0)));
} else
{return null;
}
});
/**
* Tests whether node has a full-result
*/
instaparse.gll.full_result_exists_QMARK_ = (function full_result_exists_QMARK_(tramp,node_key){var nodes = tramp.nodes;var temp__4126__auto__ = nodes.call(null,node_key);if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return (cljs.core.count.call(null,node.full_results) > (0));
} else
{return null;
}
});
/**
* Gets node if already exists, otherwise creates one
*/
instaparse.gll.node_get = (function node_get(tramp,node_key){var nodes = tramp.nodes;var temp__4124__auto__ = nodes.call(null,node_key);if(cljs.core.truth_(temp__4124__auto__))
{var node = temp__4124__auto__;return node;
} else
{var node = instaparse.gll.make_node.call(null);tramp.nodes = cljs.core.assoc.call(null,tramp.nodes,node_key,node);
return node;
}
});
instaparse.gll.safe_with_meta = (function safe_with_meta(obj,metamap){if((function (){var G__20676 = obj;if(G__20676)
{var bit__4304__auto__ = (G__20676.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__4304__auto__) || (G__20676.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__20676.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__20676);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__20676);
}
})())
{return cljs.core.with_meta.call(null,obj,metamap);
} else
{return obj;
}
});
/**
* Pushes a result into the trampoline's node.
* Categorizes as either result or full-result.
* Schedules notification to all existing listeners of result
* (Full listeners only get notified about full results)
*/
instaparse.gll.push_result = (function push_result(tramp,node_key,result){var node = instaparse.gll.node_get.call(null,tramp,node_key);var parser = node_key.call(null,(1));var result__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.assoc.call(null,result,new cljs.core.Keyword(null,"result","result",1415092211),null):result);var result__$2 = (function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser);if(cljs.core.truth_(temp__4124__auto__))
{var reduction_function = temp__4124__auto__;return instaparse.gll.make_success.call(null,instaparse.gll.safe_with_meta.call(null,instaparse.reduction.apply_reduction.call(null,reduction_function,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result__$1)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),node_key.call(null,(0)),new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result__$1)], null)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result__$1));
} else
{return result__$1;
}
})();var total_QMARK_ = instaparse.gll.total_success_QMARK_.call(null,tramp,result__$2);var results = ((total_QMARK_)?node.full_results:node.results);if(cljs.core.not.call(null,results.call(null,result__$2)))
{if(total_QMARK_)
{node.full_results = cljs.core.conj.call(null,node.full_results,result__$2);
} else
{node.results = cljs.core.conj.call(null,node.results,result__$2);
}
var seq__20685_20693 = cljs.core.seq.call(null,node.listeners);var chunk__20686_20694 = null;var count__20687_20695 = (0);var i__20688_20696 = (0);while(true){
if((i__20688_20696 < count__20687_20695))
{var listener_20697 = cljs.core._nth.call(null,chunk__20686_20694,i__20688_20696);instaparse.gll.push_message.call(null,tramp,listener_20697,result__$2);
{
var G__20698 = seq__20685_20693;
var G__20699 = chunk__20686_20694;
var G__20700 = count__20687_20695;
var G__20701 = (i__20688_20696 + (1));
seq__20685_20693 = G__20698;
chunk__20686_20694 = G__20699;
count__20687_20695 = G__20700;
i__20688_20696 = G__20701;
continue;
}
} else
{var temp__4126__auto___20702 = cljs.core.seq.call(null,seq__20685_20693);if(temp__4126__auto___20702)
{var seq__20685_20703__$1 = temp__4126__auto___20702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20685_20703__$1))
{var c__4410__auto___20704 = cljs.core.chunk_first.call(null,seq__20685_20703__$1);{
var G__20705 = cljs.core.chunk_rest.call(null,seq__20685_20703__$1);
var G__20706 = c__4410__auto___20704;
var G__20707 = cljs.core.count.call(null,c__4410__auto___20704);
var G__20708 = (0);
seq__20685_20693 = G__20705;
chunk__20686_20694 = G__20706;
count__20687_20695 = G__20707;
i__20688_20696 = G__20708;
continue;
}
} else
{var listener_20709 = cljs.core.first.call(null,seq__20685_20703__$1);instaparse.gll.push_message.call(null,tramp,listener_20709,result__$2);
{
var G__20710 = cljs.core.next.call(null,seq__20685_20703__$1);
var G__20711 = null;
var G__20712 = (0);
var G__20713 = (0);
seq__20685_20693 = G__20710;
chunk__20686_20694 = G__20711;
count__20687_20695 = G__20712;
i__20688_20696 = G__20713;
continue;
}
}
} else
{}
}
break;
}
if(total_QMARK_)
{var seq__20689 = cljs.core.seq.call(null,node.full_listeners);var chunk__20690 = null;var count__20691 = (0);var i__20692 = (0);while(true){
if((i__20692 < count__20691))
{var listener = cljs.core._nth.call(null,chunk__20690,i__20692);instaparse.gll.push_message.call(null,tramp,listener,result__$2);
{
var G__20714 = seq__20689;
var G__20715 = chunk__20690;
var G__20716 = count__20691;
var G__20717 = (i__20692 + (1));
seq__20689 = G__20714;
chunk__20690 = G__20715;
count__20691 = G__20716;
i__20692 = G__20717;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20689);if(temp__4126__auto__)
{var seq__20689__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20689__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__20689__$1);{
var G__20718 = cljs.core.chunk_rest.call(null,seq__20689__$1);
var G__20719 = c__4410__auto__;
var G__20720 = cljs.core.count.call(null,c__4410__auto__);
var G__20721 = (0);
seq__20689 = G__20718;
chunk__20690 = G__20719;
count__20691 = G__20720;
i__20692 = G__20721;
continue;
}
} else
{var listener = cljs.core.first.call(null,seq__20689__$1);instaparse.gll.push_message.call(null,tramp,listener,result__$2);
{
var G__20722 = cljs.core.next.call(null,seq__20689__$1);
var G__20723 = null;
var G__20724 = (0);
var G__20725 = (0);
seq__20689 = G__20722;
chunk__20690 = G__20723;
count__20691 = G__20724;
i__20692 = G__20725;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
} else
{return null;
}
});
/**
* Pushes a listener into the trampoline's node.
* Schedules notification to listener of all existing results.
* Initiates parse if necessary
*/
instaparse.gll.push_listener = (function push_listener(tramp,node_key,listener){var listener_already_exists_QMARK_ = instaparse.gll.listener_exists_QMARK_.call(null,tramp,node_key);var node = instaparse.gll.node_get.call(null,tramp,node_key);node.listeners = cljs.core.conj.call(null,node.listeners,listener);
var seq__20734_20742 = cljs.core.seq.call(null,node.results);var chunk__20735_20743 = null;var count__20736_20744 = (0);var i__20737_20745 = (0);while(true){
if((i__20737_20745 < count__20736_20744))
{var result_20746 = cljs.core._nth.call(null,chunk__20735_20743,i__20737_20745);instaparse.gll.push_message.call(null,tramp,listener,result_20746);
{
var G__20747 = seq__20734_20742;
var G__20748 = chunk__20735_20743;
var G__20749 = count__20736_20744;
var G__20750 = (i__20737_20745 + (1));
seq__20734_20742 = G__20747;
chunk__20735_20743 = G__20748;
count__20736_20744 = G__20749;
i__20737_20745 = G__20750;
continue;
}
} else
{var temp__4126__auto___20751 = cljs.core.seq.call(null,seq__20734_20742);if(temp__4126__auto___20751)
{var seq__20734_20752__$1 = temp__4126__auto___20751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20734_20752__$1))
{var c__4410__auto___20753 = cljs.core.chunk_first.call(null,seq__20734_20752__$1);{
var G__20754 = cljs.core.chunk_rest.call(null,seq__20734_20752__$1);
var G__20755 = c__4410__auto___20753;
var G__20756 = cljs.core.count.call(null,c__4410__auto___20753);
var G__20757 = (0);
seq__20734_20742 = G__20754;
chunk__20735_20743 = G__20755;
count__20736_20744 = G__20756;
i__20737_20745 = G__20757;
continue;
}
} else
{var result_20758 = cljs.core.first.call(null,seq__20734_20752__$1);instaparse.gll.push_message.call(null,tramp,listener,result_20758);
{
var G__20759 = cljs.core.next.call(null,seq__20734_20752__$1);
var G__20760 = null;
var G__20761 = (0);
var G__20762 = (0);
seq__20734_20742 = G__20759;
chunk__20735_20743 = G__20760;
count__20736_20744 = G__20761;
i__20737_20745 = G__20762;
continue;
}
}
} else
{}
}
break;
}
var seq__20738_20763 = cljs.core.seq.call(null,node.full_results);var chunk__20739_20764 = null;var count__20740_20765 = (0);var i__20741_20766 = (0);while(true){
if((i__20741_20766 < count__20740_20765))
{var result_20767 = cljs.core._nth.call(null,chunk__20739_20764,i__20741_20766);instaparse.gll.push_message.call(null,tramp,listener,result_20767);
{
var G__20768 = seq__20738_20763;
var G__20769 = chunk__20739_20764;
var G__20770 = count__20740_20765;
var G__20771 = (i__20741_20766 + (1));
seq__20738_20763 = G__20768;
chunk__20739_20764 = G__20769;
count__20740_20765 = G__20770;
i__20741_20766 = G__20771;
continue;
}
} else
{var temp__4126__auto___20772 = cljs.core.seq.call(null,seq__20738_20763);if(temp__4126__auto___20772)
{var seq__20738_20773__$1 = temp__4126__auto___20772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20738_20773__$1))
{var c__4410__auto___20774 = cljs.core.chunk_first.call(null,seq__20738_20773__$1);{
var G__20775 = cljs.core.chunk_rest.call(null,seq__20738_20773__$1);
var G__20776 = c__4410__auto___20774;
var G__20777 = cljs.core.count.call(null,c__4410__auto___20774);
var G__20778 = (0);
seq__20738_20763 = G__20775;
chunk__20739_20764 = G__20776;
count__20740_20765 = G__20777;
i__20741_20766 = G__20778;
continue;
}
} else
{var result_20779 = cljs.core.first.call(null,seq__20738_20773__$1);instaparse.gll.push_message.call(null,tramp,listener,result_20779);
{
var G__20780 = cljs.core.next.call(null,seq__20738_20773__$1);
var G__20781 = null;
var G__20782 = (0);
var G__20783 = (0);
seq__20738_20763 = G__20780;
chunk__20739_20764 = G__20781;
count__20740_20765 = G__20782;
i__20741_20766 = G__20783;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.not.call(null,listener_already_exists_QMARK_))
{return instaparse.gll.push_stack.call(null,tramp,((function (listener_already_exists_QMARK_,node){
return (function (){return instaparse.gll._parse.call(null,node_key.call(null,(1)),node_key.call(null,(0)),tramp);
});})(listener_already_exists_QMARK_,node))
);
} else
{return null;
}
});
/**
* Pushes a listener into the trampoline's node.
* Schedules notification to listener of all existing full results.
*/
instaparse.gll.push_full_listener = (function push_full_listener(tramp,node_key,listener){var full_listener_already_exists_QMARK_ = instaparse.gll.full_listener_exists_QMARK_.call(null,tramp,node_key);var node = instaparse.gll.node_get.call(null,tramp,node_key);node.full_listeners = cljs.core.conj.call(null,node.full_listeners,listener);
var seq__20788_20792 = cljs.core.seq.call(null,node.full_results);var chunk__20789_20793 = null;var count__20790_20794 = (0);var i__20791_20795 = (0);while(true){
if((i__20791_20795 < count__20790_20794))
{var result_20796 = cljs.core._nth.call(null,chunk__20789_20793,i__20791_20795);instaparse.gll.push_message.call(null,tramp,listener,result_20796);
{
var G__20797 = seq__20788_20792;
var G__20798 = chunk__20789_20793;
var G__20799 = count__20790_20794;
var G__20800 = (i__20791_20795 + (1));
seq__20788_20792 = G__20797;
chunk__20789_20793 = G__20798;
count__20790_20794 = G__20799;
i__20791_20795 = G__20800;
continue;
}
} else
{var temp__4126__auto___20801 = cljs.core.seq.call(null,seq__20788_20792);if(temp__4126__auto___20801)
{var seq__20788_20802__$1 = temp__4126__auto___20801;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20788_20802__$1))
{var c__4410__auto___20803 = cljs.core.chunk_first.call(null,seq__20788_20802__$1);{
var G__20804 = cljs.core.chunk_rest.call(null,seq__20788_20802__$1);
var G__20805 = c__4410__auto___20803;
var G__20806 = cljs.core.count.call(null,c__4410__auto___20803);
var G__20807 = (0);
seq__20788_20792 = G__20804;
chunk__20789_20793 = G__20805;
count__20790_20794 = G__20806;
i__20791_20795 = G__20807;
continue;
}
} else
{var result_20808 = cljs.core.first.call(null,seq__20788_20802__$1);instaparse.gll.push_message.call(null,tramp,listener,result_20808);
{
var G__20809 = cljs.core.next.call(null,seq__20788_20802__$1);
var G__20810 = null;
var G__20811 = (0);
var G__20812 = (0);
seq__20788_20792 = G__20809;
chunk__20789_20793 = G__20810;
count__20790_20794 = G__20811;
i__20791_20795 = G__20812;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.not.call(null,full_listener_already_exists_QMARK_))
{return instaparse.gll.push_stack.call(null,tramp,((function (full_listener_already_exists_QMARK_,node){
return (function (){return instaparse.gll._full_parse.call(null,node_key.call(null,(1)),node_key.call(null,(0)),tramp);
});})(full_listener_already_exists_QMARK_,node))
);
} else
{return null;
}
});
/**
* Pushes a thunk onto the trampoline's negative-listener stack.
*/
instaparse.gll.push_negative_listener = (function push_negative_listener(tramp,negative_listener){return tramp.negative_listeners = cljs.core.conj.call(null,tramp.negative_listeners,negative_listener);
});
instaparse.gll.fail = (function fail(tramp,node_key,index,reason){tramp.failure = (function (failure){var current_index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure);var G__20814 = cljs.core.compare.call(null,index,current_index);switch (G__20814) {
case (1):
return (new instaparse.gll.Failure(index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reason], null)));

break;
case (0):
return (new instaparse.gll.Failure(index,cljs.core.conj.call(null,new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(failure),reason)));

break;
case (-1):
return failure;

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.compare.call(null,index,current_index)))));

}
}).call(null,tramp.failure);
if(cljs.core._EQ_.call(null,index,tramp.fail_index))
{return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,instaparse.gll.build_node_with_meta.call(null,tramp.node_builder,new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),cljs.core.subs.call(null,tramp.text,index),index,cljs.core.count.call(null,tramp.text)),cljs.core.count.call(null,tramp.text)));
} else
{return null;
}
});
/**
* Executes one thing on the stack (not threadsafe)
*/
instaparse.gll.step = (function step(tramp){var top = cljs.core.peek.call(null,tramp.stack);tramp.stack = cljs.core.pop.call(null,tramp.stack);
return top.call(null);
});
/**
* Executes the stack until exhausted
*/
instaparse.gll.run = (function() {
var run = null;
var run__1 = (function (tramp){return run.call(null,tramp,null);
});
var run__2 = (function (tramp,found_result_QMARK_){while(true){
var stack = tramp.stack;if(cljs.core.truth_(tramp.success))
{return (new cljs.core.LazySeq(null,((function (tramp,found_result_QMARK_,stack){
return (function (){return cljs.core.cons.call(null,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(tramp.success),(function (){tramp.success = null;
return run.call(null,tramp,true);
})());
});})(tramp,found_result_QMARK_,stack))
,null,null));
} else
{if((cljs.core.count.call(null,stack) > (0)))
{instaparse.gll.step.call(null,tramp);
{
var G__20816 = tramp;
var G__20817 = found_result_QMARK_;
tramp = G__20816;
found_result_QMARK_ = G__20817;
continue;
}
} else
{if((cljs.core.count.call(null,tramp.negative_listeners) > (0)))
{var listener = cljs.core.peek.call(null,tramp.negative_listeners);listener.call(null);
tramp.negative_listeners = cljs.core.pop.call(null,tramp.negative_listeners);
{
var G__20818 = tramp;
var G__20819 = found_result_QMARK_;
tramp = G__20818;
found_result_QMARK_ = G__20819;
continue;
}
} else
{if(cljs.core.truth_(found_result_QMARK_))
{var next_stack = tramp.next_stack;tramp.stack = next_stack;
tramp.next_stack = cljs.core.PersistentVector.EMPTY;
tramp.generation = (tramp.generation + (1));
{
var G__20820 = tramp;
var G__20821 = null;
tramp = G__20820;
found_result_QMARK_ = G__20821;
continue;
}
} else
{return null;

}
}
}
}
break;
}
});
run = function(tramp,found_result_QMARK_){
switch(arguments.length){
case 1:
return run__1.call(this,tramp);
case 2:
return run__2.call(this,tramp,found_result_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
run.cljs$core$IFn$_invoke$arity$1 = run__1;
run.cljs$core$IFn$_invoke$arity$2 = run__2;
return run;
})()
;
instaparse.gll.NodeListener = (function NodeListener(node_key,tramp){return (function (result){return instaparse.gll.push_result.call(null,tramp,node_key,result);
});
});
instaparse.gll.LookListener = (function LookListener(node_key,tramp){return (function (result){return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,node_key.call(null,(0))));
});
});
instaparse.gll.CatListener = (function CatListener(results_so_far,parser_sequence,node_key,tramp){return (function (result){var map__20823 = result;var map__20823__$1 = ((cljs.core.seq_QMARK_.call(null,map__20823))?cljs.core.apply.call(null,cljs.core.hash_map,map__20823):map__20823);var parsed_result = cljs.core.get.call(null,map__20823__$1,new cljs.core.Keyword(null,"result","result",1415092211));var continue_index = cljs.core.get.call(null,map__20823__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);if(cljs.core.seq.call(null,parser_sequence))
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),CatListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else
{return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
}
});
});
instaparse.gll.CatFullListener = (function CatFullListener(results_so_far,parser_sequence,node_key,tramp){return (function (result){var map__20825 = result;var map__20825__$1 = ((cljs.core.seq_QMARK_.call(null,map__20825))?cljs.core.apply.call(null,cljs.core.hash_map,map__20825):map__20825);var parsed_result = cljs.core.get.call(null,map__20825__$1,new cljs.core.Keyword(null,"result","result",1415092211));var continue_index = cljs.core.get.call(null,map__20825__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);if(instaparse.reduction.singleton_QMARK_.call(null,parser_sequence))
{return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),CatFullListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else
{if(cljs.core.seq.call(null,parser_sequence))
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,cljs.core.first.call(null,parser_sequence)], null),CatFullListener.call(null,new_results_so_far,cljs.core.next.call(null,parser_sequence),node_key,tramp));
} else
{return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));

}
}
});
});
instaparse.gll.PlusListener = (function PlusListener(results_so_far,parser,prev_index,node_key,tramp){return (function (result){var map__20827 = result;var map__20827__$1 = ((cljs.core.seq_QMARK_.call(null,map__20827))?cljs.core.apply.call(null,cljs.core.hash_map,map__20827):map__20827);var parsed_result = cljs.core.get.call(null,map__20827__$1,new cljs.core.Keyword(null,"result","result",1415092211));var continue_index = cljs.core.get.call(null,map__20827__$1,new cljs.core.Keyword(null,"index","index",-1531685915));if(cljs.core._EQ_.call(null,continue_index,prev_index))
{if((cljs.core.count.call(null,results_so_far) === (0)))
{return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,continue_index));
} else
{return null;
}
} else
{var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),PlusListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp));
return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
}
});
});
instaparse.gll.PlusFullListener = (function PlusFullListener(results_so_far,parser,prev_index,node_key,tramp){return (function (result){var map__20829 = result;var map__20829__$1 = ((cljs.core.seq_QMARK_.call(null,map__20829))?cljs.core.apply.call(null,cljs.core.hash_map,map__20829):map__20829);var parsed_result = cljs.core.get.call(null,map__20829__$1,new cljs.core.Keyword(null,"result","result",1415092211));var continue_index = cljs.core.get.call(null,map__20829__$1,new cljs.core.Keyword(null,"index","index",-1531685915));if(cljs.core._EQ_.call(null,continue_index,prev_index))
{if((cljs.core.count.call(null,results_so_far) === (0)))
{return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,null,continue_index));
} else
{return null;
}
} else
{var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);if(cljs.core._EQ_.call(null,continue_index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),PlusFullListener.call(null,new_results_so_far,parser,continue_index,node_key,tramp));
}
}
});
});
instaparse.gll.RepListener = (function RepListener(results_so_far,parser,m,n,prev_index,node_key,tramp){return (function (result){var map__20831 = result;var map__20831__$1 = ((cljs.core.seq_QMARK_.call(null,map__20831))?cljs.core.apply.call(null,cljs.core.hash_map,map__20831):map__20831);var parsed_result = cljs.core.get.call(null,map__20831__$1,new cljs.core.Keyword(null,"result","result",1415092211));var continue_index = cljs.core.get.call(null,map__20831__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);if(((m <= cljs.core.count.call(null,new_results_so_far))) && ((cljs.core.count.call(null,new_results_so_far) <= n)))
{instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else
{}
if((cljs.core.count.call(null,new_results_so_far) < n))
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),RepListener.call(null,new_results_so_far,parser,m,n,continue_index,node_key,tramp));
} else
{return null;
}
});
});
instaparse.gll.RepFullListener = (function RepFullListener(results_so_far,parser,m,n,prev_index,node_key,tramp){return (function (result){var map__20833 = result;var map__20833__$1 = ((cljs.core.seq_QMARK_.call(null,map__20833))?cljs.core.apply.call(null,cljs.core.hash_map,map__20833):map__20833);var parsed_result = cljs.core.get.call(null,map__20833__$1,new cljs.core.Keyword(null,"result","result",1415092211));var continue_index = cljs.core.get.call(null,map__20833__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var new_results_so_far = instaparse.auto_flatten_seq.conj_flat.call(null,results_so_far,parsed_result);if(cljs.core._EQ_.call(null,continue_index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))))
{if(((m <= cljs.core.count.call(null,new_results_so_far))) && ((cljs.core.count.call(null,new_results_so_far) <= n)))
{return instaparse.gll.push_result.call(null,tramp,node_key,instaparse.gll.make_success.call(null,new_results_so_far,continue_index));
} else
{return null;
}
} else
{if((cljs.core.count.call(null,new_results_so_far) < n))
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [continue_index,parser], null),RepFullListener.call(null,new_results_so_far,parser,m,n,continue_index,node_key,tramp));
} else
{return null;
}
}
});
});
instaparse.gll.TopListener = (function TopListener(tramp){return (function (result){return tramp.success = result;
});
});
instaparse.gll.string_parse = (function string_parse(this$,index,tramp){var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.text;var end = (function (){var x__3954__auto__ = cljs.core.count.call(null,text);var y__3955__auto__ = (index + cljs.core.count.call(null,string));return ((x__3954__auto__ < y__3955__auto__) ? x__3954__auto__ : y__3955__auto__);
})();var head = cljs.core.subs.call(null,text,index,end);if(cljs.core._EQ_.call(null,string,head))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string], null));
}
});
instaparse.gll.string_full_parse = (function string_full_parse(this$,index,tramp){var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.text;var end = (function (){var x__3954__auto__ = cljs.core.count.call(null,text);var y__3955__auto__ = (index + cljs.core.count.call(null,string));return ((x__3954__auto__ < y__3955__auto__) ? x__3954__auto__ : y__3955__auto__);
})();var head = cljs.core.subs.call(null,text,index,end);if((cljs.core._EQ_.call(null,end,cljs.core.count.call(null,text))) && (cljs.core._EQ_.call(null,string,head)))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.equals_ignore_case = (function equals_ignore_case(s1,s2){return cljs.core._EQ_.call(null,s1.toUpperCase(),s2.toUpperCase());
});
instaparse.gll.string_case_insensitive_parse = (function string_case_insensitive_parse(this$,index,tramp){var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.text;var end = (function (){var x__3954__auto__ = cljs.core.count.call(null,text);var y__3955__auto__ = (index + cljs.core.count.call(null,string));return ((x__3954__auto__ < y__3955__auto__) ? x__3954__auto__ : y__3955__auto__);
})();var head = cljs.core.subs.call(null,text,index,end);if(instaparse.gll.equals_ignore_case.call(null,string,head))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string], null));
}
});
instaparse.gll.string_case_insensitive_full_parse = (function string_case_insensitive_full_parse(this$,index,tramp){var string = new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.text;var end = (function (){var x__3954__auto__ = cljs.core.count.call(null,text);var y__3955__auto__ = (index + cljs.core.count.call(null,string));return ((x__3954__auto__ < y__3955__auto__) ? x__3954__auto__ : y__3955__auto__);
})();var head = cljs.core.subs.call(null,text,index,end);if((cljs.core._EQ_.call(null,end,cljs.core.count.call(null,text))) && (instaparse.gll.equals_ignore_case.call(null,string,head)))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,string,end));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"expecting","expecting",-57706705),string,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
instaparse.gll.re_match_at_front = (function re_match_at_front(regexp,text){var re = (new RegExp(regexp.source,"g"));var m = re.exec(text);if(cljs.core.truth_((function (){var and__3628__auto__ = m;if(cljs.core.truth_(and__3628__auto__))
{return (m.index === (0));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.first.call(null,m);
} else
{return null;
}
});
instaparse.gll.regexp_parse = (function regexp_parse(this$,index,tramp){var regexp = new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(this$);var text = tramp.segment;var substring = instaparse.gll.toString.call(null,instaparse.gll.subsegment.call(null,text,index,cljs.core.count.call(null,text)));var match = instaparse.gll.re_match_at_front.call(null,regexp,substring);if(cljs.core.truth_(match))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,match,(index + cljs.core.count.call(null,match))));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"expecting","expecting",-57706705),regexp], null));
}
});
instaparse.gll.regexp_full_parse = (function regexp_full_parse(this$,index,tramp){var regexp = new cljs.core.Keyword(null,"regexp","regexp",-541372782).cljs$core$IFn$_invoke$arity$1(this$);var text = new cljs.core.Keyword(null,"segment","segment",-964921196).cljs$core$IFn$_invoke$arity$1(tramp);var substring = instaparse.gll.toString.call(null,instaparse.gll.subsegment.call(null,text,index,cljs.core.count.call(null,text)));var match = instaparse.gll.re_match_at_front.call(null,regexp,substring);var desired_length = (cljs.core.count.call(null,text) - index);if(cljs.core.truth_((function (){var and__3628__auto__ = match;if(cljs.core.truth_(and__3628__auto__))
{return cljs.core._EQ_.call(null,cljs.core.count.call(null,match),desired_length);
} else
{return and__3628__auto__;
}
})()))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,match,cljs.core.count.call(null,text)));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"expecting","expecting",-57706705),regexp,new cljs.core.Keyword(null,"full","full",436801220),true], null));
}
});
var empty_cat_result_20834 = instaparse.auto_flatten_seq.EMPTY;instaparse.gll.cat_parse = ((function (empty_cat_result_20834){
return (function cat_parse(this$,index,tramp){var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first.call(null,parsers)], null),instaparse.gll.CatListener.call(null,empty_cat_result_20834,cljs.core.next.call(null,parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_20834))
;
instaparse.gll.cat_full_parse = ((function (empty_cat_result_20834){
return (function cat_full_parse(this$,index,tramp){var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,cljs.core.first.call(null,parsers)], null),instaparse.gll.CatFullListener.call(null,empty_cat_result_20834,cljs.core.next.call(null,parsers),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_20834))
;
instaparse.gll.plus_parse = ((function (empty_cat_result_20834){
return (function plus_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener.call(null,empty_cat_result_20834,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_20834))
;
instaparse.gll.plus_full_parse = ((function (empty_cat_result_20834){
return (function plus_full_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener.call(null,empty_cat_result_20834,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});})(empty_cat_result_20834))
;
instaparse.gll.rep_parse = ((function (empty_cat_result_20834){
return (function rep_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);var m = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this$);var n = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this$);if((m === (0)))
{instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
if((n >= (1)))
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener.call(null,empty_cat_result_20834,parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else
{return null;
}
} else
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepListener.call(null,empty_cat_result_20834,parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_20834))
;
instaparse.gll.rep_full_parse = ((function (empty_cat_result_20834){
return (function rep_full_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);var m = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(this$);var n = new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(this$);if((m === (0)))
{instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
if((n >= (1)))
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener.call(null,empty_cat_result_20834,parser,(1),n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
} else
{return null;
}
} else
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.RepFullListener.call(null,empty_cat_result_20834,parser,m,n,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_20834))
;
instaparse.gll.star_parse = ((function (empty_cat_result_20834){
return (function star_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusListener.call(null,empty_cat_result_20834,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});})(empty_cat_result_20834))
;
instaparse.gll.star_full_parse = ((function (empty_cat_result_20834){
return (function star_full_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.PlusFullListener.call(null,empty_cat_result_20834,parser,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
}
});})(empty_cat_result_20834))
;
instaparse.gll.alt_parse = (function alt_parse(this$,index,tramp){var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);var seq__20839 = cljs.core.seq.call(null,parsers);var chunk__20840 = null;var count__20841 = (0);var i__20842 = (0);while(true){
if((i__20842 < count__20841))
{var parser = cljs.core._nth.call(null,chunk__20840,i__20842);instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__20843 = seq__20839;
var G__20844 = chunk__20840;
var G__20845 = count__20841;
var G__20846 = (i__20842 + (1));
seq__20839 = G__20843;
chunk__20840 = G__20844;
count__20841 = G__20845;
i__20842 = G__20846;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20839);if(temp__4126__auto__)
{var seq__20839__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20839__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__20839__$1);{
var G__20847 = cljs.core.chunk_rest.call(null,seq__20839__$1);
var G__20848 = c__4410__auto__;
var G__20849 = cljs.core.count.call(null,c__4410__auto__);
var G__20850 = (0);
seq__20839 = G__20847;
chunk__20840 = G__20848;
count__20841 = G__20849;
i__20842 = G__20850;
continue;
}
} else
{var parser = cljs.core.first.call(null,seq__20839__$1);instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__20851 = cljs.core.next.call(null,seq__20839__$1);
var G__20852 = null;
var G__20853 = (0);
var G__20854 = (0);
seq__20839 = G__20851;
chunk__20840 = G__20852;
count__20841 = G__20853;
i__20842 = G__20854;
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
instaparse.gll.alt_full_parse = (function alt_full_parse(this$,index,tramp){var parsers = new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(this$);var seq__20859 = cljs.core.seq.call(null,parsers);var chunk__20860 = null;var count__20861 = (0);var i__20862 = (0);while(true){
if((i__20862 < count__20861))
{var parser = cljs.core._nth.call(null,chunk__20860,i__20862);instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__20863 = seq__20859;
var G__20864 = chunk__20860;
var G__20865 = count__20861;
var G__20866 = (i__20862 + (1));
seq__20859 = G__20863;
chunk__20860 = G__20864;
count__20861 = G__20865;
i__20862 = G__20866;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20859);if(temp__4126__auto__)
{var seq__20859__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20859__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__20859__$1);{
var G__20867 = cljs.core.chunk_rest.call(null,seq__20859__$1);
var G__20868 = c__4410__auto__;
var G__20869 = cljs.core.count.call(null,c__4410__auto__);
var G__20870 = (0);
seq__20859 = G__20867;
chunk__20860 = G__20868;
count__20861 = G__20869;
i__20862 = G__20870;
continue;
}
} else
{var parser = cljs.core.first.call(null,seq__20859__$1);instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
{
var G__20871 = cljs.core.next.call(null,seq__20859__$1);
var G__20872 = null;
var G__20873 = (0);
var G__20874 = (0);
seq__20859 = G__20871;
chunk__20860 = G__20872;
count__20861 = G__20873;
i__20862 = G__20874;
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
instaparse.gll.ordered_alt_parse = (function ordered_alt_parse(this$,index,tramp){var parser1 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(this$);var parser2 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(this$);var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);var listener = instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);instaparse.gll.push_listener.call(null,tramp,node_key_parser1,listener);
return instaparse.gll.push_negative_listener.call(null,tramp,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){return instaparse.gll.push_listener.call(null,tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.ordered_alt_full_parse = (function ordered_alt_full_parse(this$,index,tramp){var parser1 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(this$);var parser2 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(this$);var node_key_parser1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser1], null);var node_key_parser2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser2], null);var listener = instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp);instaparse.gll.push_full_listener.call(null,tramp,node_key_parser1,listener);
return instaparse.gll.push_negative_listener.call(null,tramp,((function (parser1,parser2,node_key_parser1,node_key_parser2,listener){
return (function (){return instaparse.gll.push_full_listener.call(null,tramp,node_key_parser2,listener);
});})(parser1,parser2,node_key_parser1,node_key_parser2,listener))
);
});
instaparse.gll.opt_parse = (function opt_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});
instaparse.gll.opt_full_parse = (function opt_full_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"optional","optional",2053951509),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.non_terminal_parse = (function non_terminal_parse(this$,index,tramp){var parser = instaparse.gll.get_parser.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(this$));return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.non_terminal_full_parse = (function non_terminal_full_parse(this$,index,tramp){var parser = instaparse.gll.get_parser.call(null,new cljs.core.Keyword(null,"grammar","grammar",1881328267).cljs$core$IFn$_invoke$arity$1(tramp),new cljs.core.Keyword(null,"keyword","keyword",811389747).cljs$core$IFn$_invoke$arity$1(this$));return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.NodeListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_parse = (function lookahead_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null),instaparse.gll.LookListener.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),tramp));
});
instaparse.gll.lookahead_full_parse = (function lookahead_full_parse(this$,index,tramp){if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.lookahead_parse.call(null,this$,index,tramp);
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"lookahead","lookahead",-400102393),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.negative_lookahead_parse = (function negative_lookahead_parse(this$,index,tramp){var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(this$);var node_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,parser], null);if(cljs.core.truth_(instaparse.gll.result_exists_QMARK_.call(null,tramp,node_key)))
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387)], null));
} else
{instaparse.gll.push_listener.call(null,tramp,node_key,(function (){var fail_send = (new cljs.core.Delay(((function (parser,node_key){
return (function (){return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"negative-lookahead","negative-lookahead",874382387),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"NOT","NOT",-1689245341),instaparse.print.combinators__GT_str.call(null,parser)], null)], null));
});})(parser,node_key))
,null));return ((function (fail_send,parser,node_key){
return (function (result){return cljs.core.force.call(null,fail_send);
});
;})(fail_send,parser,node_key))
})());
return instaparse.gll.push_negative_listener.call(null,tramp,((function (parser,node_key){
return (function (){if(cljs.core.not.call(null,instaparse.gll.result_exists_QMARK_.call(null,tramp,node_key)))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else
{return null;
}
});})(parser,node_key))
);
}
});
instaparse.gll.epsilon_parse = (function epsilon_parse(this$,index,tramp){return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
});
instaparse.gll.epsilon_full_parse = (function epsilon_full_parse(this$,index,tramp){if(cljs.core._EQ_.call(null,index,cljs.core.count.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(tramp))))
{return instaparse.gll.push_result.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),instaparse.gll.make_success.call(null,null,index));
} else
{return instaparse.gll.fail.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,this$], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"Epsilon","Epsilon",133418452),new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"end-of-string","end-of-string",1567354241)], null));
}
});
instaparse.gll.start_parser = (function start_parser(tramp,parser,partial_QMARK_){if(cljs.core.truth_(partial_QMARK_))
{return instaparse.gll.push_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener.call(null,tramp));
} else
{return instaparse.gll.push_full_listener.call(null,tramp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),parser], null),instaparse.gll.TopListener.call(null,tramp));
}
});
instaparse.gll.parses = (function parses(grammar,start,text,partial_QMARK_){var tramp = instaparse.gll.make_tramp.call(null,grammar,text);var parser = instaparse.combinators_source.nt.call(null,start);instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);
var temp__4124__auto__ = instaparse.gll.run.call(null,tramp);if(cljs.core.truth_(temp__4124__auto__))
{var all_parses = temp__4124__auto__;return all_parses;
} else
{return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,instaparse.failure.augment_failure.call(null,tramp.failure,text));
}
});
instaparse.gll.parse = (function parse(grammar,start,text,partial_QMARK_){var tramp = instaparse.gll.make_tramp.call(null,grammar,text);var parser = instaparse.combinators_source.nt.call(null,start);instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);
var temp__4124__auto__ = instaparse.gll.run.call(null,tramp);if(cljs.core.truth_(temp__4124__auto__))
{var all_parses = temp__4124__auto__;return cljs.core.first.call(null,all_parses);
} else
{return instaparse.failure.augment_failure.call(null,tramp.failure,text);
}
});
instaparse.gll.build_node_with_meta = (function build_node_with_meta(node_builder,tag,content,start,end){return cljs.core.with_meta.call(null,node_builder.call(null,tag,content),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("instaparse.gll","start-index","instaparse.gll/start-index",404653620),start,new cljs.core.Keyword("instaparse.gll","end-index","instaparse.gll/end-index",-1851404441),end], null));
});
instaparse.gll.build_total_failure_node = (function build_total_failure_node(node_builder,start,text){var build_failure_node = instaparse.gll.build_node_with_meta.call(null,node_builder,new cljs.core.Keyword("instaparse","failure","instaparse/failure",1422918607),text,(0),cljs.core.count.call(null,text));var build_start_node = instaparse.gll.build_node_with_meta.call(null,node_builder,start,build_failure_node,(0),cljs.core.count.call(null,text));return build_start_node;
});
instaparse.gll.parses_total_after_fail = (function parses_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){var tramp = instaparse.gll.make_tramp.call(null,grammar,text,fail_index,node_builder);var parser = instaparse.combinators_source.nt.call(null,start);instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);
var temp__4124__auto__ = instaparse.gll.run.call(null,tramp);if(cljs.core.truth_(temp__4124__auto__))
{var all_parses = temp__4124__auto__;return all_parses;
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,instaparse.gll.build_total_failure_node.call(null,node_builder,start,text));
}
});
/**
* A variation on with-meta that merges the existing metamap into the new metamap,
* rather than overwriting the metamap entirely.
*/
instaparse.gll.merge_meta = (function merge_meta(obj,metamap){return cljs.core.with_meta.call(null,obj,cljs.core.merge.call(null,metamap,cljs.core.meta.call(null,obj)));
});
instaparse.gll.parses_total = (function parses_total(grammar,start,text,partial_QMARK_,node_builder){var all_parses = instaparse.gll.parses.call(null,grammar,start,text,partial_QMARK_);if(cljs.core.seq.call(null,all_parses))
{return all_parses;
} else
{return instaparse.gll.merge_meta.call(null,instaparse.gll.parses_total_after_fail.call(null,grammar,start,text,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,all_parses)),partial_QMARK_,node_builder),cljs.core.meta.call(null,all_parses));
}
});
instaparse.gll.parse_total_after_fail = (function parse_total_after_fail(grammar,start,text,fail_index,partial_QMARK_,node_builder){var tramp = instaparse.gll.make_tramp.call(null,grammar,text,fail_index,node_builder);var parser = instaparse.combinators_source.nt.call(null,start);instaparse.gll.start_parser.call(null,tramp,parser,partial_QMARK_);
var temp__4124__auto__ = instaparse.gll.run.call(null,tramp);if(cljs.core.truth_(temp__4124__auto__))
{var all_parses = temp__4124__auto__;return cljs.core.first.call(null,all_parses);
} else
{return instaparse.gll.build_total_failure_node.call(null,node_builder,start,text);
}
});
instaparse.gll.parse_total = (function parse_total(grammar,start,text,partial_QMARK_,node_builder){var result = instaparse.gll.parse.call(null,grammar,start,text,partial_QMARK_);if(!((result instanceof instaparse.gll.Failure)))
{return result;
} else
{return instaparse.gll.merge_meta.call(null,instaparse.gll.parse_total_after_fail.call(null,grammar,start,text,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result),partial_QMARK_,node_builder),result);
}
});
