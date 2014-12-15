// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.auto_flatten_seq');
goog.require('cljs.core');
instaparse.auto_flatten_seq.threshold = (32);
/**
* Returns the partially calculated hash code, still requires a call to mix-collection-hash
*/
instaparse.auto_flatten_seq.hash_ordered_coll_without_mix = (function() {
var hash_ordered_coll_without_mix = null;
var hash_ordered_coll_without_mix__1 = (function (coll){return hash_ordered_coll_without_mix.call(null,(1),coll);
});
var hash_ordered_coll_without_mix__2 = (function (existing_unmixed_hash,coll){var unmixed_hash = existing_unmixed_hash;var coll__$1 = cljs.core.seq.call(null,coll);while(true){
if(!((coll__$1 == null)))
{{
var G__34298 = ((cljs.core.imul.call(null,(31),unmixed_hash) + cljs.core.hash.call(null,cljs.core.first.call(null,coll__$1))) | (0));
var G__34299 = cljs.core.next.call(null,coll__$1);
unmixed_hash = G__34298;
coll__$1 = G__34299;
continue;
}
} else
{return unmixed_hash;
}
break;
}
});
hash_ordered_coll_without_mix = function(existing_unmixed_hash,coll){
switch(arguments.length){
case 1:
return hash_ordered_coll_without_mix__1.call(this,existing_unmixed_hash);
case 2:
return hash_ordered_coll_without_mix__2.call(this,existing_unmixed_hash,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_ordered_coll_without_mix.cljs$core$IFn$_invoke$arity$1 = hash_ordered_coll_without_mix__1;
hash_ordered_coll_without_mix.cljs$core$IFn$_invoke$arity$2 = hash_ordered_coll_without_mix__2;
return hash_ordered_coll_without_mix;
})()
;
/**
* Returns the hash code, consistent with =, for an external ordered
* collection implementing Iterable.
* See http://clojure.org/data_structures#hash for full algorithms.
*/
instaparse.auto_flatten_seq.hash_conj = (function hash_conj(unmixed_hash,item){return ((cljs.core.imul.call(null,(31),unmixed_hash) + cljs.core.hash.call(null,item)) | (0));
});
instaparse.auto_flatten_seq.expt = (function expt(base,pow){if((pow === (0)))
{return (1);
} else
{var n = (pow | (0));var y = ((1) | (0));var z = (base | (0));while(true){
var t = cljs.core.even_QMARK_.call(null,n);var n__$1 = cljs.core.quot.call(null,n,(2));if(t)
{{
var G__34300 = n__$1;
var G__34301 = y;
var G__34302 = cljs.core.imul.call(null,z,z);
n = G__34300;
y = G__34301;
z = G__34302;
continue;
}
} else
{if((n__$1 === (0)))
{return cljs.core.imul.call(null,z,y);
} else
{{
var G__34303 = n__$1;
var G__34304 = cljs.core.imul.call(null,z,y);
var G__34305 = cljs.core.imul.call(null,z,z);
n = G__34303;
y = G__34304;
z = G__34305;
continue;
}

}
}
break;
}
}
});
instaparse.auto_flatten_seq.hash_cat = (function hash_cat(v1,v2){var c = cljs.core.count.call(null,v2);var e = (instaparse.auto_flatten_seq.expt.call(null,(31),c) | (0));return ((cljs.core.imul.call(null,e,v1.premix_hashcode) | (0)) + (v2.premix_hashcode - e));
});
instaparse.auto_flatten_seq.delve = (function delve(v,index){var v__$1 = cljs.core.get_in.call(null,v,index);var index__$1 = index;while(true){
if(cljs.core.truth_(instaparse.auto_flatten_seq.afs_QMARK_.call(null,v__$1)))
{{
var G__34306 = cljs.core.get.call(null,v__$1,(0));
var G__34307 = cljs.core.conj.call(null,index__$1,(0));
v__$1 = G__34306;
index__$1 = G__34307;
continue;
}
} else
{return index__$1;
}
break;
}
});
instaparse.auto_flatten_seq.advance = (function advance(v,index){while(true){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,index),(1)))
{if((cljs.core.peek.call(null,index) < (instaparse.auto_flatten_seq.true_count.call(null,v) - (1))))
{return instaparse.auto_flatten_seq.delve.call(null,v,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.peek.call(null,index) + (1))], null));
} else
{return null;
}
} else
{if((cljs.core.peek.call(null,index) < (instaparse.auto_flatten_seq.true_count.call(null,cljs.core.get_in.call(null,v,cljs.core.pop.call(null,index))) - (1))))
{return instaparse.auto_flatten_seq.delve.call(null,v,cljs.core.conj.call(null,cljs.core.pop.call(null,index),(cljs.core.peek.call(null,index) + (1))));
} else
{{
var G__34308 = v;
var G__34309 = cljs.core.pop.call(null,index);
v = G__34308;
index = G__34309;
continue;
}

}
}
break;
}
});
instaparse.auto_flatten_seq.flat_seq = (function() {
var flat_seq = null;
var flat_seq__1 = (function (v){if((cljs.core.count.call(null,v) > (0)))
{return flat_seq.call(null,v,instaparse.auto_flatten_seq.delve.call(null,v,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else
{return null;
}
});
var flat_seq__2 = (function (v,index){return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,cljs.core.get_in.call(null,v,index),(function (){var temp__4126__auto__ = instaparse.auto_flatten_seq.advance.call(null,v,index);if(cljs.core.truth_(temp__4126__auto__))
{var next_index = temp__4126__auto__;return flat_seq.call(null,v,next_index);
} else
{return null;
}
})());
}),null,null));
});
flat_seq = function(v,index){
switch(arguments.length){
case 1:
return flat_seq__1.call(this,v);
case 2:
return flat_seq__2.call(this,v,index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
flat_seq.cljs$core$IFn$_invoke$arity$1 = flat_seq__1;
flat_seq.cljs$core$IFn$_invoke$arity$2 = flat_seq__2;
return flat_seq;
})()
;
instaparse.auto_flatten_seq.ConjFlat = (function (){var obj34311 = {};return obj34311;
})();
instaparse.auto_flatten_seq.conj_flat = (function conj_flat(self,obj){if((function (){var and__3628__auto__ = self;if(and__3628__auto__)
{return self.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2;
} else
{return and__3628__auto__;
}
})())
{return self.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(self,obj);
} else
{var x__4277__auto__ = (((self == null))?null:self);return (function (){var or__3640__auto__ = (instaparse.auto_flatten_seq.conj_flat[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (instaparse.auto_flatten_seq.conj_flat["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ConjFlat.conj-flat",self);
}
}
})().call(null,self,obj);
}
});
instaparse.auto_flatten_seq.cached_QMARK_ = (function cached_QMARK_(self){if((function (){var and__3628__auto__ = self;if(and__3628__auto__)
{return self.instaparse$auto_flatten_seq$ConjFlat$cached_QMARK_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return self.instaparse$auto_flatten_seq$ConjFlat$cached_QMARK_$arity$1(self);
} else
{var x__4277__auto__ = (((self == null))?null:self);return (function (){var or__3640__auto__ = (instaparse.auto_flatten_seq.cached_QMARK_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (instaparse.auto_flatten_seq.cached_QMARK_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ConjFlat.cached?",self);
}
}
})().call(null,self);
}
});

/**
* @constructor
*/
instaparse.auto_flatten_seq.AutoFlattenSeq = (function (v,premix_hashcode,hashcode,cnt,dirty,cached_seq){
this.v = v;
this.premix_hashcode = premix_hashcode;
this.hashcode = hashcode;
this.cnt = cnt;
this.dirty = dirty;
this.cached_seq = cached_seq;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850950;
})
instaparse.auto_flatten_seq.AutoFlattenSeq.cljs$lang$type = true;
instaparse.auto_flatten_seq.AutoFlattenSeq.cljs$lang$ctorStr = "instaparse.auto-flatten-seq/AutoFlattenSeq";
instaparse.auto_flatten_seq.AutoFlattenSeq.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"instaparse.auto-flatten-seq/AutoFlattenSeq");
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (self,key){var self__ = this;
var self__$1 = this;return self__.v.cljs$core$ILookup$_lookup$arity$2(null,key);
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (self,key,not_found){var self__ = this;
var self__$1 = this;return self__.v.cljs$core$ILookup$_lookup$arity$3(null,key,not_found);
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.meta.call(null,self__.v);
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$INext$_next$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.next.call(null,cljs.core.seq.call(null,self__$1));
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return self__.cnt;
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return self__.hashcode;
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (self,other){var self__ = this;
var self__$1 = this;return (cljs.core._EQ_.call(null,self__.hashcode,cljs.core.hash.call(null,other))) && (cljs.core._EQ_.call(null,self__.cnt,cljs.core.count.call(null,other))) && ((cljs.core._EQ_.call(null,self__.cnt,(0))) || (cljs.core._EQ_.call(null,cljs.core.seq.call(null,self__$1),other)));
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.with_meta.call(null,instaparse.auto_flatten_seq.EMPTY,cljs.core.meta.call(null,self__$1));
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.first.call(null,cljs.core.seq.call(null,self__$1));
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.rest.call(null,cljs.core.seq.call(null,self__$1));
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(self__.cached_seq))
{return self__.cached_seq;
} else
{self__.cached_seq = ((self__.dirty)?instaparse.auto_flatten_seq.flat_seq.call(null,self__.v):cljs.core.seq.call(null,self__.v));
return self__.cached_seq;
}
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (self,metamap){var self__ = this;
var self__$1 = this;return (new instaparse.auto_flatten_seq.AutoFlattenSeq(cljs.core.with_meta.call(null,self__.v,metamap),self__.premix_hashcode,self__.hashcode,self__.cnt,self__.dirty,null));
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.instaparse$auto_flatten_seq$ConjFlat$ = true;
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2 = (function (self,obj){var self__ = this;
var self__$1 = this;if((obj == null))
{return self__$1;
} else
{if(cljs.core.truth_(instaparse.auto_flatten_seq.afs_QMARK_.call(null,obj)))
{if((self__.cnt === (0)))
{return obj;
} else
{if((cljs.core.count.call(null,obj) <= instaparse.auto_flatten_seq.threshold))
{var phc = instaparse.auto_flatten_seq.hash_cat.call(null,self__$1,obj);var new_cnt = (self__.cnt + cljs.core.count.call(null,obj));return (new instaparse.auto_flatten_seq.AutoFlattenSeq(cljs.core.into.call(null,self__.v,obj),phc,cljs.core.mix_collection_hash.call(null,phc,new_cnt),new_cnt,(function (){var or__3640__auto__ = self__.dirty;if(or__3640__auto__)
{return or__3640__auto__;
} else
{return obj.dirty;
}
})(),null));
} else
{var phc = instaparse.auto_flatten_seq.hash_cat.call(null,self__$1,obj);var new_cnt = (self__.cnt + cljs.core.count.call(null,obj));return (new instaparse.auto_flatten_seq.AutoFlattenSeq(cljs.core.conj.call(null,self__.v,obj),phc,cljs.core.mix_collection_hash.call(null,phc,new_cnt),new_cnt,true,null));

}
}
} else
{var phc = instaparse.auto_flatten_seq.hash_conj.call(null,self__.premix_hashcode,obj);var new_cnt = (self__.cnt + (1));return (new instaparse.auto_flatten_seq.AutoFlattenSeq(cljs.core.conj.call(null,self__.v,obj),phc,cljs.core.mix_collection_hash.call(null,phc,new_cnt),new_cnt,self__.dirty,null));

}
}
});
instaparse.auto_flatten_seq.AutoFlattenSeq.prototype.instaparse$auto_flatten_seq$ConjFlat$cached_QMARK_$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return self__.cached_seq;
});
instaparse.auto_flatten_seq.__GT_AutoFlattenSeq = (function __GT_AutoFlattenSeq(v,premix_hashcode,hashcode,cnt,dirty,cached_seq){return (new instaparse.auto_flatten_seq.AutoFlattenSeq(v,premix_hashcode,hashcode,cnt,dirty,cached_seq));
});
instaparse.auto_flatten_seq.auto_flatten_seq = (function auto_flatten_seq(v){var v__$1 = cljs.core.vec.call(null,v);var c = cljs.core.count.call(null,v__$1);var unmixed_hash = instaparse.auto_flatten_seq.hash_ordered_coll_without_mix.call(null,v__$1);return (new instaparse.auto_flatten_seq.AutoFlattenSeq(v__$1,unmixed_hash,cljs.core.mix_collection_hash.call(null,unmixed_hash,c),c,false,null));
});
instaparse.auto_flatten_seq.EMPTY = instaparse.auto_flatten_seq.auto_flatten_seq.call(null,cljs.core.PersistentVector.EMPTY);
instaparse.auto_flatten_seq.afs_QMARK_ = (function afs_QMARK_(s){return (s instanceof instaparse.auto_flatten_seq.AutoFlattenSeq);
});
instaparse.auto_flatten_seq.true_count = (function true_count(v){if(instaparse.auto_flatten_seq.afs_QMARK_.call(null,v))
{return cljs.core.count.call(null,v.v);
} else
{return cljs.core.count.call(null,v);
}
});
instaparse.auto_flatten_seq.flat_vec_helper = (function flat_vec_helper(acc,v){while(true){
var temp__4124__auto__ = cljs.core.seq.call(null,v);if(temp__4124__auto__)
{var s = temp__4124__auto__;var fst = cljs.core.first.call(null,v);if(instaparse.auto_flatten_seq.afs_QMARK_.call(null,fst))
{{
var G__34312 = flat_vec_helper.call(null,acc,fst);
var G__34313 = cljs.core.next.call(null,v);
acc = G__34312;
v = G__34313;
continue;
}
} else
{{
var G__34314 = cljs.core.conj_BANG_.call(null,acc,fst);
var G__34315 = cljs.core.next.call(null,v);
acc = G__34314;
v = G__34315;
continue;
}
}
} else
{return acc;
}
break;
}
});
/**
* Turns deep vector (like the vector inside of FlattenOnDemandVector) into a flat vec
*/
instaparse.auto_flatten_seq.flat_vec = (function flat_vec(v){return cljs.core.persistent_BANG_.call(null,instaparse.auto_flatten_seq.flat_vec_helper.call(null,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),v));
});
instaparse.auto_flatten_seq.GetVec = (function (){var obj34317 = {};return obj34317;
})();
instaparse.auto_flatten_seq.get_vec = (function get_vec(self){if((function (){var and__3628__auto__ = self;if(and__3628__auto__)
{return self.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1;
} else
{return and__3628__auto__;
}
})())
{return self.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(self);
} else
{var x__4277__auto__ = (((self == null))?null:self);return (function (){var or__3640__auto__ = (instaparse.auto_flatten_seq.get_vec[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (instaparse.auto_flatten_seq.get_vec["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"GetVec.get-vec",self);
}
}
})().call(null,self);
}
});

/**
* @constructor
*/
instaparse.auto_flatten_seq.FlattenOnDemandVector = (function (v,hashcode,cnt,flat){
this.v = v;
this.hashcode = hashcode;
this.cnt = cnt;
this.flat = flat;
this.cljs$lang$protocol_mask$partition0$ = 150364959;
this.cljs$lang$protocol_mask$partition1$ = 2048;
})
instaparse.auto_flatten_seq.FlattenOnDemandVector.cljs$lang$type = true;
instaparse.auto_flatten_seq.FlattenOnDemandVector.cljs$lang$ctorStr = "instaparse.auto-flatten-seq/FlattenOnDemandVector";
instaparse.auto_flatten_seq.FlattenOnDemandVector.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"instaparse.auto-flatten-seq/FlattenOnDemandVector");
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.toString = (function (){var self__ = this;
var self = this;return cljs.core.pr_str_STAR_.call(null,self.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null));
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (self,key){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec.call(null,self__$1).cljs$core$ILookup$_lookup$arity$2(null,key);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (self,key,not_found){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec.call(null,self__$1).cljs$core$ILookup$_lookup$arity$3(null,key,not_found);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.instaparse$auto_flatten_seq$GetVec$ = true;
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.flat)))
{cljs.core.swap_BANG_.call(null,self__.flat,((function (self__$1){
return (function (_){return cljs.core.with_meta.call(null,instaparse.auto_flatten_seq.flat_vec.call(null,cljs.core.deref.call(null,self__.v)),cljs.core.meta.call(null,cljs.core.deref.call(null,self__.v)));
});})(self__$1))
);
cljs.core.swap_BANG_.call(null,self__.v,((function (self__$1){
return (function (_){return null;
});})(self__$1))
);
} else
{}
return cljs.core.deref.call(null,self__.flat);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (self,f,init){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec.call(null,self__$1).cljs$core$IKVReduce$_kv_reduce$arity$3(null,f,init);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (self,i){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec.call(null,self__$1).cljs$core$IIndexed$_nth$arity$2(null,i);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (self,i,not_found){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec.call(null,self__$1).cljs$core$IIndexed$_nth$arity$3(null,i,not_found);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (self,i,val){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec.call(null,self__$1).cljs$core$IVector$_assoc_n$arity$3(null,i,val);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(cljs.core.deref.call(null,self__.flat)))
{return cljs.core.meta.call(null,cljs.core.deref.call(null,self__.flat));
} else
{return cljs.core.meta.call(null,cljs.core.deref.call(null,self__.v));
}
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return self__.cnt;
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec.call(null,self__$1).cljs$core$IStack$_peek$arity$1(null);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec.call(null,self__$1).cljs$core$IStack$_pop$arity$1(null);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (self){var self__ = this;
var self__$1 = this;if((self__.cnt > (0)))
{return cljs.core.rseq.call(null,instaparse.auto_flatten_seq.get_vec.call(null,self__$1));
} else
{return null;
}
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return self__.hashcode;
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (self,other){var self__ = this;
var self__$1 = this;return (cljs.core._EQ_.call(null,self__.hashcode,cljs.core.hash.call(null,other))) && (cljs.core._EQ_.call(null,self__.cnt,cljs.core.count.call(null,other))) && (cljs.core._EQ_.call(null,instaparse.auto_flatten_seq.get_vec.call(null,self__$1),other));
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.with_meta.call(null,instaparse.auto_flatten_seq.EMPTY,cljs.core.meta.call(null,self__$1));
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (self,i,val){var self__ = this;
var self__$1 = this;return cljs.core.assoc.call(null,instaparse.auto_flatten_seq.get_vec.call(null,self__$1),i,val);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (self,k){var self__ = this;
var self__$1 = this;return instaparse.auto_flatten_seq.get_vec.call(null,self__$1).cljs$core$IAssociative$_contains_key_QMARK_$arity$2(null,k);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (self){var self__ = this;
var self__$1 = this;return cljs.core.seq.call(null,instaparse.auto_flatten_seq.get_vec.call(null,self__$1));
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (self,metamap){var self__ = this;
var self__$1 = this;if(cljs.core.truth_(cljs.core.deref.call(null,self__.flat)))
{return (new instaparse.auto_flatten_seq.FlattenOnDemandVector(cljs.core.atom.call(null,cljs.core.deref.call(null,self__.v)),self__.hashcode,self__.cnt,cljs.core.atom.call(null,cljs.core.with_meta.call(null,cljs.core.deref.call(null,self__.flat),metamap))));
} else
{return (new instaparse.auto_flatten_seq.FlattenOnDemandVector(cljs.core.atom.call(null,cljs.core.with_meta.call(null,cljs.core.deref.call(null,self__.v),metamap)),self__.hashcode,self__.cnt,cljs.core.atom.call(null,cljs.core.deref.call(null,self__.flat))));
}
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (self,obj){var self__ = this;
var self__$1 = this;return cljs.core.conj.call(null,instaparse.auto_flatten_seq.get_vec.call(null,self__$1),obj);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.call = (function() {
var G__34319 = null;
var G__34319__2 = (function (self__,arg){var self__ = this;
var self____$1 = this;var self = self____$1;return self.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IFn$_invoke$arity$2(null,arg);
});
var G__34319__3 = (function (self__,arg,not_found){var self__ = this;
var self____$1 = this;var self = self____$1;return self.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IFn$_invoke$arity$3(null,arg,not_found);
});
G__34319 = function(self__,arg,not_found){
switch(arguments.length){
case 2:
return G__34319__2.call(this,self__,arg);
case 3:
return G__34319__3.call(this,self__,arg,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34319.cljs$core$IFn$_invoke$arity$2 = G__34319__2;
G__34319.cljs$core$IFn$_invoke$arity$3 = G__34319__3;
return G__34319;
})()
;
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.apply = (function (self__,args34318){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args34318)));
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (arg){var self__ = this;
var self = this;return self.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IFn$_invoke$arity$2(null,arg);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (arg,not_found){var self__ = this;
var self = this;return self.instaparse$auto_flatten_seq$GetVec$get_vec$arity$1(null).cljs$core$IFn$_invoke$arity$3(null,arg,not_found);
});
instaparse.auto_flatten_seq.FlattenOnDemandVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (self,that){var self__ = this;
var self__$1 = this;return cljs.core._compare.call(null,instaparse.auto_flatten_seq.get_vec.call(null,self__$1),that);
});
instaparse.auto_flatten_seq.__GT_FlattenOnDemandVector = (function __GT_FlattenOnDemandVector(v,hashcode,cnt,flat){return (new instaparse.auto_flatten_seq.FlattenOnDemandVector(v,hashcode,cnt,flat));
});
instaparse.auto_flatten_seq.convert_afs_to_vec = (function convert_afs_to_vec(afs){if(cljs.core.truth_(afs.dirty))
{if(cljs.core.truth_(instaparse.auto_flatten_seq.cached_QMARK_.call(null,afs)))
{return cljs.core.vec.call(null,cljs.core.seq.call(null,afs));
} else
{return (new instaparse.auto_flatten_seq.FlattenOnDemandVector(cljs.core.atom.call(null,afs.v),afs.hashcode,afs.cnt,cljs.core.atom.call(null,null)));
}
} else
{return afs.v;

}
});
