// Compiled by ClojureScript 0.0-2371
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_14200 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_14201 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_14202 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_14202,opt_wrapper_14200,table_section_wrapper_14201,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_14200,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_14201,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_14201,cell_wrapper_14202,table_section_wrapper_14201,table_section_wrapper_14201]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3628__auto__ = div.firstChild;if(cljs.core.truth_(and__3628__auto__))
{return div.firstChild.childNodes;
} else
{return and__3628__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__14207 = cljs.core.seq.call(null,tbody);var chunk__14208 = null;var count__14209 = (0);var i__14210 = (0);while(true){
if((i__14210 < count__14209))
{var child = cljs.core._nth.call(null,chunk__14208,i__14210);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14211 = seq__14207;
var G__14212 = chunk__14208;
var G__14213 = count__14209;
var G__14214 = (i__14210 + (1));
seq__14207 = G__14211;
chunk__14208 = G__14212;
count__14209 = G__14213;
i__14210 = G__14214;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14207);if(temp__4126__auto__)
{var seq__14207__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14207__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__14207__$1);{
var G__14215 = cljs.core.chunk_rest.call(null,seq__14207__$1);
var G__14216 = c__4410__auto__;
var G__14217 = cljs.core.count.call(null,c__4410__auto__);
var G__14218 = (0);
seq__14207 = G__14215;
chunk__14208 = G__14216;
count__14209 = G__14217;
i__14210 = G__14218;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__14207__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14219 = cljs.core.next.call(null,seq__14207__$1);
var G__14220 = null;
var G__14221 = (0);
var G__14222 = (0);
seq__14207 = G__14219;
chunk__14208 = G__14220;
count__14209 = G__14221;
i__14210 = G__14222;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__14224 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__14224,(0),null);var start_wrap = cljs.core.nth.call(null,vec__14224,(1),null);var end_wrap = cljs.core.nth.call(null,vec__14224,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__14225 = wrapper.lastChild;
var G__14226 = (level - (1));
wrapper = G__14225;
level = G__14226;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3628__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3628__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3628__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj14228 = {};return obj14228;
})();
domina.nodes = (function nodes(content){if((function (){var and__3628__auto__ = content;if(and__3628__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3628__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4277__auto__ = (((content == null))?null:content);return (function (){var or__3640__auto__ = (domina.nodes[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (domina.nodes["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3628__auto__ = nodeseq;if(and__3628__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3628__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4277__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3640__auto__ = (domina.single_node[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (domina.single_node["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3628__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3628__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3628__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__14229){
var mesg = cljs.core.seq(arglist__14229);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__14230){
var mesg = cljs.core.seq(arglist__14230);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__14231){
var contents = cljs.core.seq(arglist__14231);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__14232_SHARP_){return p1__14232_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__14233_SHARP_,p2__14234_SHARP_){return goog.dom.insertChildAt(p1__14233_SHARP_,p2__14234_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__14236_SHARP_,p2__14235_SHARP_){return goog.dom.insertSiblingBefore(p2__14235_SHARP_,p1__14236_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__14238_SHARP_,p2__14237_SHARP_){return goog.dom.insertSiblingAfter(p2__14237_SHARP_,p1__14238_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__14240_SHARP_,p2__14239_SHARP_){return goog.dom.replaceNode(p2__14239_SHARP_,p1__14240_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__14245_14249 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14246_14250 = null;var count__14247_14251 = (0);var i__14248_14252 = (0);while(true){
if((i__14248_14252 < count__14247_14251))
{var n_14253 = cljs.core._nth.call(null,chunk__14246_14250,i__14248_14252);goog.style.setStyle(n_14253,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14254 = seq__14245_14249;
var G__14255 = chunk__14246_14250;
var G__14256 = count__14247_14251;
var G__14257 = (i__14248_14252 + (1));
seq__14245_14249 = G__14254;
chunk__14246_14250 = G__14255;
count__14247_14251 = G__14256;
i__14248_14252 = G__14257;
continue;
}
} else
{var temp__4126__auto___14258 = cljs.core.seq.call(null,seq__14245_14249);if(temp__4126__auto___14258)
{var seq__14245_14259__$1 = temp__4126__auto___14258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14245_14259__$1))
{var c__4410__auto___14260 = cljs.core.chunk_first.call(null,seq__14245_14259__$1);{
var G__14261 = cljs.core.chunk_rest.call(null,seq__14245_14259__$1);
var G__14262 = c__4410__auto___14260;
var G__14263 = cljs.core.count.call(null,c__4410__auto___14260);
var G__14264 = (0);
seq__14245_14249 = G__14261;
chunk__14246_14250 = G__14262;
count__14247_14251 = G__14263;
i__14248_14252 = G__14264;
continue;
}
} else
{var n_14265 = cljs.core.first.call(null,seq__14245_14259__$1);goog.style.setStyle(n_14265,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14266 = cljs.core.next.call(null,seq__14245_14259__$1);
var G__14267 = null;
var G__14268 = (0);
var G__14269 = (0);
seq__14245_14249 = G__14266;
chunk__14246_14250 = G__14267;
count__14247_14251 = G__14268;
i__14248_14252 = G__14269;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14270){
var content = cljs.core.first(arglist__14270);
arglist__14270 = cljs.core.next(arglist__14270);
var name = cljs.core.first(arglist__14270);
var value = cljs.core.rest(arglist__14270);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__14275_14279 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14276_14280 = null;var count__14277_14281 = (0);var i__14278_14282 = (0);while(true){
if((i__14278_14282 < count__14277_14281))
{var n_14283 = cljs.core._nth.call(null,chunk__14276_14280,i__14278_14282);n_14283.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14284 = seq__14275_14279;
var G__14285 = chunk__14276_14280;
var G__14286 = count__14277_14281;
var G__14287 = (i__14278_14282 + (1));
seq__14275_14279 = G__14284;
chunk__14276_14280 = G__14285;
count__14277_14281 = G__14286;
i__14278_14282 = G__14287;
continue;
}
} else
{var temp__4126__auto___14288 = cljs.core.seq.call(null,seq__14275_14279);if(temp__4126__auto___14288)
{var seq__14275_14289__$1 = temp__4126__auto___14288;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14275_14289__$1))
{var c__4410__auto___14290 = cljs.core.chunk_first.call(null,seq__14275_14289__$1);{
var G__14291 = cljs.core.chunk_rest.call(null,seq__14275_14289__$1);
var G__14292 = c__4410__auto___14290;
var G__14293 = cljs.core.count.call(null,c__4410__auto___14290);
var G__14294 = (0);
seq__14275_14279 = G__14291;
chunk__14276_14280 = G__14292;
count__14277_14281 = G__14293;
i__14278_14282 = G__14294;
continue;
}
} else
{var n_14295 = cljs.core.first.call(null,seq__14275_14289__$1);n_14295.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14296 = cljs.core.next.call(null,seq__14275_14289__$1);
var G__14297 = null;
var G__14298 = (0);
var G__14299 = (0);
seq__14275_14279 = G__14296;
chunk__14276_14280 = G__14297;
count__14277_14281 = G__14298;
i__14278_14282 = G__14299;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__14300){
var content = cljs.core.first(arglist__14300);
arglist__14300 = cljs.core.next(arglist__14300);
var name = cljs.core.first(arglist__14300);
var value = cljs.core.rest(arglist__14300);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__14305_14309 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14306_14310 = null;var count__14307_14311 = (0);var i__14308_14312 = (0);while(true){
if((i__14308_14312 < count__14307_14311))
{var n_14313 = cljs.core._nth.call(null,chunk__14306_14310,i__14308_14312);n_14313.removeAttribute(cljs.core.name.call(null,name));
{
var G__14314 = seq__14305_14309;
var G__14315 = chunk__14306_14310;
var G__14316 = count__14307_14311;
var G__14317 = (i__14308_14312 + (1));
seq__14305_14309 = G__14314;
chunk__14306_14310 = G__14315;
count__14307_14311 = G__14316;
i__14308_14312 = G__14317;
continue;
}
} else
{var temp__4126__auto___14318 = cljs.core.seq.call(null,seq__14305_14309);if(temp__4126__auto___14318)
{var seq__14305_14319__$1 = temp__4126__auto___14318;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14305_14319__$1))
{var c__4410__auto___14320 = cljs.core.chunk_first.call(null,seq__14305_14319__$1);{
var G__14321 = cljs.core.chunk_rest.call(null,seq__14305_14319__$1);
var G__14322 = c__4410__auto___14320;
var G__14323 = cljs.core.count.call(null,c__4410__auto___14320);
var G__14324 = (0);
seq__14305_14309 = G__14321;
chunk__14306_14310 = G__14322;
count__14307_14311 = G__14323;
i__14308_14312 = G__14324;
continue;
}
} else
{var n_14325 = cljs.core.first.call(null,seq__14305_14319__$1);n_14325.removeAttribute(cljs.core.name.call(null,name));
{
var G__14326 = cljs.core.next.call(null,seq__14305_14319__$1);
var G__14327 = null;
var G__14328 = (0);
var G__14329 = (0);
seq__14305_14309 = G__14326;
chunk__14306_14310 = G__14327;
count__14307_14311 = G__14328;
i__14308_14312 = G__14329;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__14331 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__14331,(0),null);var v = cljs.core.nth.call(null,vec__14331,(1),null);if(cljs.core.truth_((function (){var and__3628__auto__ = k;if(cljs.core.truth_(and__3628__auto__))
{return v;
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__14332_SHARP_){var attr = attrs__$1.item(p1__14332_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__14339_14345 = cljs.core.seq.call(null,styles);var chunk__14340_14346 = null;var count__14341_14347 = (0);var i__14342_14348 = (0);while(true){
if((i__14342_14348 < count__14341_14347))
{var vec__14343_14349 = cljs.core._nth.call(null,chunk__14340_14346,i__14342_14348);var name_14350 = cljs.core.nth.call(null,vec__14343_14349,(0),null);var value_14351 = cljs.core.nth.call(null,vec__14343_14349,(1),null);domina.set_style_BANG_.call(null,content,name_14350,value_14351);
{
var G__14352 = seq__14339_14345;
var G__14353 = chunk__14340_14346;
var G__14354 = count__14341_14347;
var G__14355 = (i__14342_14348 + (1));
seq__14339_14345 = G__14352;
chunk__14340_14346 = G__14353;
count__14341_14347 = G__14354;
i__14342_14348 = G__14355;
continue;
}
} else
{var temp__4126__auto___14356 = cljs.core.seq.call(null,seq__14339_14345);if(temp__4126__auto___14356)
{var seq__14339_14357__$1 = temp__4126__auto___14356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14339_14357__$1))
{var c__4410__auto___14358 = cljs.core.chunk_first.call(null,seq__14339_14357__$1);{
var G__14359 = cljs.core.chunk_rest.call(null,seq__14339_14357__$1);
var G__14360 = c__4410__auto___14358;
var G__14361 = cljs.core.count.call(null,c__4410__auto___14358);
var G__14362 = (0);
seq__14339_14345 = G__14359;
chunk__14340_14346 = G__14360;
count__14341_14347 = G__14361;
i__14342_14348 = G__14362;
continue;
}
} else
{var vec__14344_14363 = cljs.core.first.call(null,seq__14339_14357__$1);var name_14364 = cljs.core.nth.call(null,vec__14344_14363,(0),null);var value_14365 = cljs.core.nth.call(null,vec__14344_14363,(1),null);domina.set_style_BANG_.call(null,content,name_14364,value_14365);
{
var G__14366 = cljs.core.next.call(null,seq__14339_14357__$1);
var G__14367 = null;
var G__14368 = (0);
var G__14369 = (0);
seq__14339_14345 = G__14366;
chunk__14340_14346 = G__14367;
count__14341_14347 = G__14368;
i__14342_14348 = G__14369;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__14376_14382 = cljs.core.seq.call(null,attrs);var chunk__14377_14383 = null;var count__14378_14384 = (0);var i__14379_14385 = (0);while(true){
if((i__14379_14385 < count__14378_14384))
{var vec__14380_14386 = cljs.core._nth.call(null,chunk__14377_14383,i__14379_14385);var name_14387 = cljs.core.nth.call(null,vec__14380_14386,(0),null);var value_14388 = cljs.core.nth.call(null,vec__14380_14386,(1),null);domina.set_attr_BANG_.call(null,content,name_14387,value_14388);
{
var G__14389 = seq__14376_14382;
var G__14390 = chunk__14377_14383;
var G__14391 = count__14378_14384;
var G__14392 = (i__14379_14385 + (1));
seq__14376_14382 = G__14389;
chunk__14377_14383 = G__14390;
count__14378_14384 = G__14391;
i__14379_14385 = G__14392;
continue;
}
} else
{var temp__4126__auto___14393 = cljs.core.seq.call(null,seq__14376_14382);if(temp__4126__auto___14393)
{var seq__14376_14394__$1 = temp__4126__auto___14393;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14376_14394__$1))
{var c__4410__auto___14395 = cljs.core.chunk_first.call(null,seq__14376_14394__$1);{
var G__14396 = cljs.core.chunk_rest.call(null,seq__14376_14394__$1);
var G__14397 = c__4410__auto___14395;
var G__14398 = cljs.core.count.call(null,c__4410__auto___14395);
var G__14399 = (0);
seq__14376_14382 = G__14396;
chunk__14377_14383 = G__14397;
count__14378_14384 = G__14398;
i__14379_14385 = G__14399;
continue;
}
} else
{var vec__14381_14400 = cljs.core.first.call(null,seq__14376_14394__$1);var name_14401 = cljs.core.nth.call(null,vec__14381_14400,(0),null);var value_14402 = cljs.core.nth.call(null,vec__14381_14400,(1),null);domina.set_attr_BANG_.call(null,content,name_14401,value_14402);
{
var G__14403 = cljs.core.next.call(null,seq__14376_14394__$1);
var G__14404 = null;
var G__14405 = (0);
var G__14406 = (0);
seq__14376_14382 = G__14403;
chunk__14377_14383 = G__14404;
count__14378_14384 = G__14405;
i__14379_14385 = G__14406;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__14411_14415 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14412_14416 = null;var count__14413_14417 = (0);var i__14414_14418 = (0);while(true){
if((i__14414_14418 < count__14413_14417))
{var node_14419 = cljs.core._nth.call(null,chunk__14412_14416,i__14414_14418);goog.dom.classes.add(node_14419,class$);
{
var G__14420 = seq__14411_14415;
var G__14421 = chunk__14412_14416;
var G__14422 = count__14413_14417;
var G__14423 = (i__14414_14418 + (1));
seq__14411_14415 = G__14420;
chunk__14412_14416 = G__14421;
count__14413_14417 = G__14422;
i__14414_14418 = G__14423;
continue;
}
} else
{var temp__4126__auto___14424 = cljs.core.seq.call(null,seq__14411_14415);if(temp__4126__auto___14424)
{var seq__14411_14425__$1 = temp__4126__auto___14424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14411_14425__$1))
{var c__4410__auto___14426 = cljs.core.chunk_first.call(null,seq__14411_14425__$1);{
var G__14427 = cljs.core.chunk_rest.call(null,seq__14411_14425__$1);
var G__14428 = c__4410__auto___14426;
var G__14429 = cljs.core.count.call(null,c__4410__auto___14426);
var G__14430 = (0);
seq__14411_14415 = G__14427;
chunk__14412_14416 = G__14428;
count__14413_14417 = G__14429;
i__14414_14418 = G__14430;
continue;
}
} else
{var node_14431 = cljs.core.first.call(null,seq__14411_14425__$1);goog.dom.classes.add(node_14431,class$);
{
var G__14432 = cljs.core.next.call(null,seq__14411_14425__$1);
var G__14433 = null;
var G__14434 = (0);
var G__14435 = (0);
seq__14411_14415 = G__14432;
chunk__14412_14416 = G__14433;
count__14413_14417 = G__14434;
i__14414_14418 = G__14435;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__14440_14444 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14441_14445 = null;var count__14442_14446 = (0);var i__14443_14447 = (0);while(true){
if((i__14443_14447 < count__14442_14446))
{var node_14448 = cljs.core._nth.call(null,chunk__14441_14445,i__14443_14447);goog.dom.classes.remove(node_14448,class$);
{
var G__14449 = seq__14440_14444;
var G__14450 = chunk__14441_14445;
var G__14451 = count__14442_14446;
var G__14452 = (i__14443_14447 + (1));
seq__14440_14444 = G__14449;
chunk__14441_14445 = G__14450;
count__14442_14446 = G__14451;
i__14443_14447 = G__14452;
continue;
}
} else
{var temp__4126__auto___14453 = cljs.core.seq.call(null,seq__14440_14444);if(temp__4126__auto___14453)
{var seq__14440_14454__$1 = temp__4126__auto___14453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14440_14454__$1))
{var c__4410__auto___14455 = cljs.core.chunk_first.call(null,seq__14440_14454__$1);{
var G__14456 = cljs.core.chunk_rest.call(null,seq__14440_14454__$1);
var G__14457 = c__4410__auto___14455;
var G__14458 = cljs.core.count.call(null,c__4410__auto___14455);
var G__14459 = (0);
seq__14440_14444 = G__14456;
chunk__14441_14445 = G__14457;
count__14442_14446 = G__14458;
i__14443_14447 = G__14459;
continue;
}
} else
{var node_14460 = cljs.core.first.call(null,seq__14440_14454__$1);goog.dom.classes.remove(node_14460,class$);
{
var G__14461 = cljs.core.next.call(null,seq__14440_14454__$1);
var G__14462 = null;
var G__14463 = (0);
var G__14464 = (0);
seq__14440_14444 = G__14461;
chunk__14441_14445 = G__14462;
count__14442_14446 = G__14463;
i__14443_14447 = G__14464;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__14469_14473 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14470_14474 = null;var count__14471_14475 = (0);var i__14472_14476 = (0);while(true){
if((i__14472_14476 < count__14471_14475))
{var node_14477 = cljs.core._nth.call(null,chunk__14470_14474,i__14472_14476);goog.dom.classes.toggle(node_14477,class$);
{
var G__14478 = seq__14469_14473;
var G__14479 = chunk__14470_14474;
var G__14480 = count__14471_14475;
var G__14481 = (i__14472_14476 + (1));
seq__14469_14473 = G__14478;
chunk__14470_14474 = G__14479;
count__14471_14475 = G__14480;
i__14472_14476 = G__14481;
continue;
}
} else
{var temp__4126__auto___14482 = cljs.core.seq.call(null,seq__14469_14473);if(temp__4126__auto___14482)
{var seq__14469_14483__$1 = temp__4126__auto___14482;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14469_14483__$1))
{var c__4410__auto___14484 = cljs.core.chunk_first.call(null,seq__14469_14483__$1);{
var G__14485 = cljs.core.chunk_rest.call(null,seq__14469_14483__$1);
var G__14486 = c__4410__auto___14484;
var G__14487 = cljs.core.count.call(null,c__4410__auto___14484);
var G__14488 = (0);
seq__14469_14473 = G__14485;
chunk__14470_14474 = G__14486;
count__14471_14475 = G__14487;
i__14472_14476 = G__14488;
continue;
}
} else
{var node_14489 = cljs.core.first.call(null,seq__14469_14483__$1);goog.dom.classes.toggle(node_14489,class$);
{
var G__14490 = cljs.core.next.call(null,seq__14469_14483__$1);
var G__14491 = null;
var G__14492 = (0);
var G__14493 = (0);
seq__14469_14473 = G__14490;
chunk__14470_14474 = G__14491;
count__14471_14475 = G__14492;
i__14472_14476 = G__14493;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_14502__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__14498_14503 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14499_14504 = null;var count__14500_14505 = (0);var i__14501_14506 = (0);while(true){
if((i__14501_14506 < count__14500_14505))
{var node_14507 = cljs.core._nth.call(null,chunk__14499_14504,i__14501_14506);goog.dom.classes.set(node_14507,classes_14502__$1);
{
var G__14508 = seq__14498_14503;
var G__14509 = chunk__14499_14504;
var G__14510 = count__14500_14505;
var G__14511 = (i__14501_14506 + (1));
seq__14498_14503 = G__14508;
chunk__14499_14504 = G__14509;
count__14500_14505 = G__14510;
i__14501_14506 = G__14511;
continue;
}
} else
{var temp__4126__auto___14512 = cljs.core.seq.call(null,seq__14498_14503);if(temp__4126__auto___14512)
{var seq__14498_14513__$1 = temp__4126__auto___14512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14498_14513__$1))
{var c__4410__auto___14514 = cljs.core.chunk_first.call(null,seq__14498_14513__$1);{
var G__14515 = cljs.core.chunk_rest.call(null,seq__14498_14513__$1);
var G__14516 = c__4410__auto___14514;
var G__14517 = cljs.core.count.call(null,c__4410__auto___14514);
var G__14518 = (0);
seq__14498_14503 = G__14515;
chunk__14499_14504 = G__14516;
count__14500_14505 = G__14517;
i__14501_14506 = G__14518;
continue;
}
} else
{var node_14519 = cljs.core.first.call(null,seq__14498_14513__$1);goog.dom.classes.set(node_14519,classes_14502__$1);
{
var G__14520 = cljs.core.next.call(null,seq__14498_14513__$1);
var G__14521 = null;
var G__14522 = (0);
var G__14523 = (0);
seq__14498_14503 = G__14520;
chunk__14499_14504 = G__14521;
count__14500_14505 = G__14522;
i__14501_14506 = G__14523;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__14528_14532 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14529_14533 = null;var count__14530_14534 = (0);var i__14531_14535 = (0);while(true){
if((i__14531_14535 < count__14530_14534))
{var node_14536 = cljs.core._nth.call(null,chunk__14529_14533,i__14531_14535);goog.dom.setTextContent(node_14536,value);
{
var G__14537 = seq__14528_14532;
var G__14538 = chunk__14529_14533;
var G__14539 = count__14530_14534;
var G__14540 = (i__14531_14535 + (1));
seq__14528_14532 = G__14537;
chunk__14529_14533 = G__14538;
count__14530_14534 = G__14539;
i__14531_14535 = G__14540;
continue;
}
} else
{var temp__4126__auto___14541 = cljs.core.seq.call(null,seq__14528_14532);if(temp__4126__auto___14541)
{var seq__14528_14542__$1 = temp__4126__auto___14541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14528_14542__$1))
{var c__4410__auto___14543 = cljs.core.chunk_first.call(null,seq__14528_14542__$1);{
var G__14544 = cljs.core.chunk_rest.call(null,seq__14528_14542__$1);
var G__14545 = c__4410__auto___14543;
var G__14546 = cljs.core.count.call(null,c__4410__auto___14543);
var G__14547 = (0);
seq__14528_14532 = G__14544;
chunk__14529_14533 = G__14545;
count__14530_14534 = G__14546;
i__14531_14535 = G__14547;
continue;
}
} else
{var node_14548 = cljs.core.first.call(null,seq__14528_14542__$1);goog.dom.setTextContent(node_14548,value);
{
var G__14549 = cljs.core.next.call(null,seq__14528_14542__$1);
var G__14550 = null;
var G__14551 = (0);
var G__14552 = (0);
seq__14528_14532 = G__14549;
chunk__14529_14533 = G__14550;
count__14530_14534 = G__14551;
i__14531_14535 = G__14552;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__14557_14561 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14558_14562 = null;var count__14559_14563 = (0);var i__14560_14564 = (0);while(true){
if((i__14560_14564 < count__14559_14563))
{var node_14565 = cljs.core._nth.call(null,chunk__14558_14562,i__14560_14564);goog.dom.forms.setValue(node_14565,value);
{
var G__14566 = seq__14557_14561;
var G__14567 = chunk__14558_14562;
var G__14568 = count__14559_14563;
var G__14569 = (i__14560_14564 + (1));
seq__14557_14561 = G__14566;
chunk__14558_14562 = G__14567;
count__14559_14563 = G__14568;
i__14560_14564 = G__14569;
continue;
}
} else
{var temp__4126__auto___14570 = cljs.core.seq.call(null,seq__14557_14561);if(temp__4126__auto___14570)
{var seq__14557_14571__$1 = temp__4126__auto___14570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14557_14571__$1))
{var c__4410__auto___14572 = cljs.core.chunk_first.call(null,seq__14557_14571__$1);{
var G__14573 = cljs.core.chunk_rest.call(null,seq__14557_14571__$1);
var G__14574 = c__4410__auto___14572;
var G__14575 = cljs.core.count.call(null,c__4410__auto___14572);
var G__14576 = (0);
seq__14557_14561 = G__14573;
chunk__14558_14562 = G__14574;
count__14559_14563 = G__14575;
i__14560_14564 = G__14576;
continue;
}
} else
{var node_14577 = cljs.core.first.call(null,seq__14557_14571__$1);goog.dom.forms.setValue(node_14577,value);
{
var G__14578 = cljs.core.next.call(null,seq__14557_14571__$1);
var G__14579 = null;
var G__14580 = (0);
var G__14581 = (0);
seq__14557_14561 = G__14578;
chunk__14558_14562 = G__14579;
count__14559_14563 = G__14580;
i__14560_14564 = G__14581;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3628__auto__ = allows_inner_html_QMARK_;if(and__3628__auto__)
{var and__3628__auto____$1 = (function (){var or__3640__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3628__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
})()))
{var value_14592 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__14588_14593 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14589_14594 = null;var count__14590_14595 = (0);var i__14591_14596 = (0);while(true){
if((i__14591_14596 < count__14590_14595))
{var node_14597 = cljs.core._nth.call(null,chunk__14589_14594,i__14591_14596);node_14597.innerHTML = value_14592;
{
var G__14598 = seq__14588_14593;
var G__14599 = chunk__14589_14594;
var G__14600 = count__14590_14595;
var G__14601 = (i__14591_14596 + (1));
seq__14588_14593 = G__14598;
chunk__14589_14594 = G__14599;
count__14590_14595 = G__14600;
i__14591_14596 = G__14601;
continue;
}
} else
{var temp__4126__auto___14602 = cljs.core.seq.call(null,seq__14588_14593);if(temp__4126__auto___14602)
{var seq__14588_14603__$1 = temp__4126__auto___14602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14588_14603__$1))
{var c__4410__auto___14604 = cljs.core.chunk_first.call(null,seq__14588_14603__$1);{
var G__14605 = cljs.core.chunk_rest.call(null,seq__14588_14603__$1);
var G__14606 = c__4410__auto___14604;
var G__14607 = cljs.core.count.call(null,c__4410__auto___14604);
var G__14608 = (0);
seq__14588_14593 = G__14605;
chunk__14589_14594 = G__14606;
count__14590_14595 = G__14607;
i__14591_14596 = G__14608;
continue;
}
} else
{var node_14609 = cljs.core.first.call(null,seq__14588_14603__$1);node_14609.innerHTML = value_14592;
{
var G__14610 = cljs.core.next.call(null,seq__14588_14603__$1);
var G__14611 = null;
var G__14612 = (0);
var G__14613 = (0);
seq__14588_14593 = G__14610;
chunk__14589_14594 = G__14611;
count__14590_14595 = G__14612;
i__14591_14596 = G__14613;
continue;
}
}
} else
{}
}
break;
}
}catch (e14587){if((e14587 instanceof Error))
{var e_14614 = e14587;domina.replace_children_BANG_.call(null,content,value_14592);
} else
{throw e14587;

}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3628__auto__ = bubble;if(cljs.core.truth_(and__3628__auto__))
{return (value == null);
} else
{return and__3628__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3640__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__14621_14625 = cljs.core.seq.call(null,children);var chunk__14622_14626 = null;var count__14623_14627 = (0);var i__14624_14628 = (0);while(true){
if((i__14624_14628 < count__14623_14627))
{var child_14629 = cljs.core._nth.call(null,chunk__14622_14626,i__14624_14628);frag.appendChild(child_14629);
{
var G__14630 = seq__14621_14625;
var G__14631 = chunk__14622_14626;
var G__14632 = count__14623_14627;
var G__14633 = (i__14624_14628 + (1));
seq__14621_14625 = G__14630;
chunk__14622_14626 = G__14631;
count__14623_14627 = G__14632;
i__14624_14628 = G__14633;
continue;
}
} else
{var temp__4126__auto___14634 = cljs.core.seq.call(null,seq__14621_14625);if(temp__4126__auto___14634)
{var seq__14621_14635__$1 = temp__4126__auto___14634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14621_14635__$1))
{var c__4410__auto___14636 = cljs.core.chunk_first.call(null,seq__14621_14635__$1);{
var G__14637 = cljs.core.chunk_rest.call(null,seq__14621_14635__$1);
var G__14638 = c__4410__auto___14636;
var G__14639 = cljs.core.count.call(null,c__4410__auto___14636);
var G__14640 = (0);
seq__14621_14625 = G__14637;
chunk__14622_14626 = G__14638;
count__14623_14627 = G__14639;
i__14624_14628 = G__14640;
continue;
}
} else
{var child_14641 = cljs.core.first.call(null,seq__14621_14635__$1);frag.appendChild(child_14641);
{
var G__14642 = cljs.core.next.call(null,seq__14621_14635__$1);
var G__14643 = null;
var G__14644 = (0);
var G__14645 = (0);
seq__14621_14625 = G__14642;
chunk__14622_14626 = G__14643;
count__14623_14627 = G__14644;
i__14624_14628 = G__14645;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__14615_SHARP_,p2__14616_SHARP_){return f.call(null,p1__14615_SHARP_,p2__14616_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3628__auto__ = obj;if(cljs.core.truth_(and__3628__auto__))
{var and__3628__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3628__auto____$1)
{return obj.length;
} else
{return and__3628__auto____$1;
}
} else
{return and__3628__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__14647 = list_thing;if(G__14647)
{var bit__4304__auto__ = (G__14647.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__14647.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14647.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14647);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14647);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__14648 = content;if(G__14648)
{var bit__4304__auto__ = (G__14648.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__14648.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14648.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14648);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14648);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__14649 = content;if(G__14649)
{var bit__4304__auto__ = (G__14649.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__14649.cljs$core$ISeqable$))
{return true;
} else
{if((!G__14649.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14649);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14649);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
