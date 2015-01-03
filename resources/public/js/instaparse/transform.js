// Compiled by ClojureScript 0.0-2371
goog.provide('instaparse.transform');
goog.require('cljs.core');
goog.require('instaparse.gll');
instaparse.transform.map_preserving_meta = (function map_preserving_meta(f,l){return cljs.core.with_meta.call(null,cljs.core.map.call(null,f,l),cljs.core.meta.call(null,l));
});
/**
* This variation of the merge-meta in gll does nothing if obj is not
* something that can have a metamap attached.
*/
instaparse.transform.merge_meta = (function merge_meta(obj,metamap){if((function (){var G__13783 = obj;if(G__13783)
{var bit__4304__auto__ = (G__13783.cljs$lang$protocol_mask$partition0$ & (262144));if((bit__4304__auto__) || (G__13783.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__13783.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__13783);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__13783);
}
})())
{return instaparse.gll.merge_meta.call(null,obj,metamap);
} else
{return obj;
}
});
instaparse.transform.enlive_transform = (function enlive_transform(transform_map,parse_tree){var transform = transform_map.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parse_tree));if(cljs.core.truth_(transform))
{return instaparse.transform.merge_meta.call(null,cljs.core.apply.call(null,transform,cljs.core.map.call(null,cljs.core.partial.call(null,enlive_transform,transform_map),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(parse_tree))),cljs.core.meta.call(null,parse_tree));
} else
{if(cljs.core.truth_(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parse_tree)))
{return cljs.core.assoc.call(null,parse_tree,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.map.call(null,cljs.core.partial.call(null,enlive_transform,transform_map),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(parse_tree)));
} else
{return parse_tree;

}
}
});
instaparse.transform.hiccup_transform = (function hiccup_transform(transform_map,parse_tree){var transform = transform_map.call(null,cljs.core.first.call(null,parse_tree));if(cljs.core.truth_(transform))
{return instaparse.transform.merge_meta.call(null,cljs.core.apply.call(null,transform,cljs.core.map.call(null,cljs.core.partial.call(null,hiccup_transform,transform_map),cljs.core.next.call(null,parse_tree))),cljs.core.meta.call(null,parse_tree));
} else
{if((cljs.core.sequential_QMARK_.call(null,parse_tree)) && (cljs.core.seq.call(null,parse_tree)))
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parse_tree)], null),cljs.core.map.call(null,cljs.core.partial.call(null,hiccup_transform,transform_map),cljs.core.next.call(null,parse_tree))),cljs.core.meta.call(null,parse_tree));
} else
{return parse_tree;

}
}
});
/**
* Takes a transform map and a parse tree (or seq of parse-trees).
* A transform map is a mapping from tags to
* functions that take a node's contents and return
* a replacement for the node, i.e.,
* {:node-tag (fn [child1 child2 ...] node-replacement),
* :another-node-tag (fn [child1 child2 ...] node-replacement)}
*/
instaparse.transform.transform = (function transform(transform_map,parse_tree){if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core.map_QMARK_.call(null,parse_tree);if(and__3628__auto__)
{return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parse_tree);
} else
{return and__3628__auto__;
}
})()))
{return instaparse.transform.enlive_transform.call(null,transform_map,parse_tree);
} else
{if((cljs.core.vector_QMARK_.call(null,parse_tree)) && ((cljs.core.first.call(null,parse_tree) instanceof cljs.core.Keyword)))
{return instaparse.transform.hiccup_transform.call(null,transform_map,parse_tree);
} else
{if(cljs.core.sequential_QMARK_.call(null,parse_tree))
{return instaparse.transform.map_preserving_meta.call(null,cljs.core.partial.call(null,transform,transform_map),parse_tree);
} else
{if((parse_tree instanceof instaparse.gll.Failure))
{return parse_tree;
} else
{throw "Invalid parse-tree, not recognized as either enlive or hiccup format.";

}
}
}
}
});
