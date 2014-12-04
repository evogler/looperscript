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
var opt_wrapper_7247 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_7248 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_7249 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_7249,opt_wrapper_7247,table_section_wrapper_7248,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_7247,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_7248,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_7248,cell_wrapper_7249,table_section_wrapper_7248,table_section_wrapper_7248]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3628__auto__ = div.firstChild;if(cljs.core.truth_(and__3628__auto__))
{return div.firstChild.childNodes;
} else
{return and__3628__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__7254 = cljs.core.seq.call(null,tbody);var chunk__7255 = null;var count__7256 = (0);var i__7257 = (0);while(true){
if((i__7257 < count__7256))
{var child = cljs.core._nth.call(null,chunk__7255,i__7257);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7258 = seq__7254;
var G__7259 = chunk__7255;
var G__7260 = count__7256;
var G__7261 = (i__7257 + (1));
seq__7254 = G__7258;
chunk__7255 = G__7259;
count__7256 = G__7260;
i__7257 = G__7261;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7254);if(temp__4126__auto__)
{var seq__7254__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7254__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__7254__$1);{
var G__7262 = cljs.core.chunk_rest.call(null,seq__7254__$1);
var G__7263 = c__4410__auto__;
var G__7264 = cljs.core.count.call(null,c__4410__auto__);
var G__7265 = (0);
seq__7254 = G__7262;
chunk__7255 = G__7263;
count__7256 = G__7264;
i__7257 = G__7265;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__7254__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7266 = cljs.core.next.call(null,seq__7254__$1);
var G__7267 = null;
var G__7268 = (0);
var G__7269 = (0);
seq__7254 = G__7266;
chunk__7255 = G__7267;
count__7256 = G__7268;
i__7257 = G__7269;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__7271 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__7271,(0),null);var start_wrap = cljs.core.nth.call(null,vec__7271,(1),null);var end_wrap = cljs.core.nth.call(null,vec__7271,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__7272 = wrapper.lastChild;
var G__7273 = (level - (1));
wrapper = G__7272;
level = G__7273;
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
domina.DomContent = (function (){var obj7275 = {};return obj7275;
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
log_debug.cljs$lang$applyTo = (function (arglist__7276){
var mesg = cljs.core.seq(arglist__7276);
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
log.cljs$lang$applyTo = (function (arglist__7277){
var mesg = cljs.core.seq(arglist__7277);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__7278){
var contents = cljs.core.seq(arglist__7278);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__7279_SHARP_){return p1__7279_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__7280_SHARP_,p2__7281_SHARP_){return goog.dom.insertChildAt(p1__7280_SHARP_,p2__7281_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7283_SHARP_,p2__7282_SHARP_){return goog.dom.insertSiblingBefore(p2__7282_SHARP_,p1__7283_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7285_SHARP_,p2__7284_SHARP_){return goog.dom.insertSiblingAfter(p2__7284_SHARP_,p1__7285_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__7287_SHARP_,p2__7286_SHARP_){return goog.dom.replaceNode(p2__7286_SHARP_,p1__7287_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__7292_7296 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7293_7297 = null;var count__7294_7298 = (0);var i__7295_7299 = (0);while(true){
if((i__7295_7299 < count__7294_7298))
{var n_7300 = cljs.core._nth.call(null,chunk__7293_7297,i__7295_7299);goog.style.setStyle(n_7300,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7301 = seq__7292_7296;
var G__7302 = chunk__7293_7297;
var G__7303 = count__7294_7298;
var G__7304 = (i__7295_7299 + (1));
seq__7292_7296 = G__7301;
chunk__7293_7297 = G__7302;
count__7294_7298 = G__7303;
i__7295_7299 = G__7304;
continue;
}
} else
{var temp__4126__auto___7305 = cljs.core.seq.call(null,seq__7292_7296);if(temp__4126__auto___7305)
{var seq__7292_7306__$1 = temp__4126__auto___7305;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7292_7306__$1))
{var c__4410__auto___7307 = cljs.core.chunk_first.call(null,seq__7292_7306__$1);{
var G__7308 = cljs.core.chunk_rest.call(null,seq__7292_7306__$1);
var G__7309 = c__4410__auto___7307;
var G__7310 = cljs.core.count.call(null,c__4410__auto___7307);
var G__7311 = (0);
seq__7292_7296 = G__7308;
chunk__7293_7297 = G__7309;
count__7294_7298 = G__7310;
i__7295_7299 = G__7311;
continue;
}
} else
{var n_7312 = cljs.core.first.call(null,seq__7292_7306__$1);goog.style.setStyle(n_7312,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7313 = cljs.core.next.call(null,seq__7292_7306__$1);
var G__7314 = null;
var G__7315 = (0);
var G__7316 = (0);
seq__7292_7296 = G__7313;
chunk__7293_7297 = G__7314;
count__7294_7298 = G__7315;
i__7295_7299 = G__7316;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7317){
var content = cljs.core.first(arglist__7317);
arglist__7317 = cljs.core.next(arglist__7317);
var name = cljs.core.first(arglist__7317);
var value = cljs.core.rest(arglist__7317);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__7322_7326 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7323_7327 = null;var count__7324_7328 = (0);var i__7325_7329 = (0);while(true){
if((i__7325_7329 < count__7324_7328))
{var n_7330 = cljs.core._nth.call(null,chunk__7323_7327,i__7325_7329);n_7330.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7331 = seq__7322_7326;
var G__7332 = chunk__7323_7327;
var G__7333 = count__7324_7328;
var G__7334 = (i__7325_7329 + (1));
seq__7322_7326 = G__7331;
chunk__7323_7327 = G__7332;
count__7324_7328 = G__7333;
i__7325_7329 = G__7334;
continue;
}
} else
{var temp__4126__auto___7335 = cljs.core.seq.call(null,seq__7322_7326);if(temp__4126__auto___7335)
{var seq__7322_7336__$1 = temp__4126__auto___7335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7322_7336__$1))
{var c__4410__auto___7337 = cljs.core.chunk_first.call(null,seq__7322_7336__$1);{
var G__7338 = cljs.core.chunk_rest.call(null,seq__7322_7336__$1);
var G__7339 = c__4410__auto___7337;
var G__7340 = cljs.core.count.call(null,c__4410__auto___7337);
var G__7341 = (0);
seq__7322_7326 = G__7338;
chunk__7323_7327 = G__7339;
count__7324_7328 = G__7340;
i__7325_7329 = G__7341;
continue;
}
} else
{var n_7342 = cljs.core.first.call(null,seq__7322_7336__$1);n_7342.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7343 = cljs.core.next.call(null,seq__7322_7336__$1);
var G__7344 = null;
var G__7345 = (0);
var G__7346 = (0);
seq__7322_7326 = G__7343;
chunk__7323_7327 = G__7344;
count__7324_7328 = G__7345;
i__7325_7329 = G__7346;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__7347){
var content = cljs.core.first(arglist__7347);
arglist__7347 = cljs.core.next(arglist__7347);
var name = cljs.core.first(arglist__7347);
var value = cljs.core.rest(arglist__7347);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__7352_7356 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7353_7357 = null;var count__7354_7358 = (0);var i__7355_7359 = (0);while(true){
if((i__7355_7359 < count__7354_7358))
{var n_7360 = cljs.core._nth.call(null,chunk__7353_7357,i__7355_7359);n_7360.removeAttribute(cljs.core.name.call(null,name));
{
var G__7361 = seq__7352_7356;
var G__7362 = chunk__7353_7357;
var G__7363 = count__7354_7358;
var G__7364 = (i__7355_7359 + (1));
seq__7352_7356 = G__7361;
chunk__7353_7357 = G__7362;
count__7354_7358 = G__7363;
i__7355_7359 = G__7364;
continue;
}
} else
{var temp__4126__auto___7365 = cljs.core.seq.call(null,seq__7352_7356);if(temp__4126__auto___7365)
{var seq__7352_7366__$1 = temp__4126__auto___7365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7352_7366__$1))
{var c__4410__auto___7367 = cljs.core.chunk_first.call(null,seq__7352_7366__$1);{
var G__7368 = cljs.core.chunk_rest.call(null,seq__7352_7366__$1);
var G__7369 = c__4410__auto___7367;
var G__7370 = cljs.core.count.call(null,c__4410__auto___7367);
var G__7371 = (0);
seq__7352_7356 = G__7368;
chunk__7353_7357 = G__7369;
count__7354_7358 = G__7370;
i__7355_7359 = G__7371;
continue;
}
} else
{var n_7372 = cljs.core.first.call(null,seq__7352_7366__$1);n_7372.removeAttribute(cljs.core.name.call(null,name));
{
var G__7373 = cljs.core.next.call(null,seq__7352_7366__$1);
var G__7374 = null;
var G__7375 = (0);
var G__7376 = (0);
seq__7352_7356 = G__7373;
chunk__7353_7357 = G__7374;
count__7354_7358 = G__7375;
i__7355_7359 = G__7376;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__7378 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__7378,(0),null);var v = cljs.core.nth.call(null,vec__7378,(1),null);if(cljs.core.truth_((function (){var and__3628__auto__ = k;if(cljs.core.truth_(and__3628__auto__))
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
return (function (p1__7379_SHARP_){var attr = attrs__$1.item(p1__7379_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__7386_7392 = cljs.core.seq.call(null,styles);var chunk__7387_7393 = null;var count__7388_7394 = (0);var i__7389_7395 = (0);while(true){
if((i__7389_7395 < count__7388_7394))
{var vec__7390_7396 = cljs.core._nth.call(null,chunk__7387_7393,i__7389_7395);var name_7397 = cljs.core.nth.call(null,vec__7390_7396,(0),null);var value_7398 = cljs.core.nth.call(null,vec__7390_7396,(1),null);domina.set_style_BANG_.call(null,content,name_7397,value_7398);
{
var G__7399 = seq__7386_7392;
var G__7400 = chunk__7387_7393;
var G__7401 = count__7388_7394;
var G__7402 = (i__7389_7395 + (1));
seq__7386_7392 = G__7399;
chunk__7387_7393 = G__7400;
count__7388_7394 = G__7401;
i__7389_7395 = G__7402;
continue;
}
} else
{var temp__4126__auto___7403 = cljs.core.seq.call(null,seq__7386_7392);if(temp__4126__auto___7403)
{var seq__7386_7404__$1 = temp__4126__auto___7403;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7386_7404__$1))
{var c__4410__auto___7405 = cljs.core.chunk_first.call(null,seq__7386_7404__$1);{
var G__7406 = cljs.core.chunk_rest.call(null,seq__7386_7404__$1);
var G__7407 = c__4410__auto___7405;
var G__7408 = cljs.core.count.call(null,c__4410__auto___7405);
var G__7409 = (0);
seq__7386_7392 = G__7406;
chunk__7387_7393 = G__7407;
count__7388_7394 = G__7408;
i__7389_7395 = G__7409;
continue;
}
} else
{var vec__7391_7410 = cljs.core.first.call(null,seq__7386_7404__$1);var name_7411 = cljs.core.nth.call(null,vec__7391_7410,(0),null);var value_7412 = cljs.core.nth.call(null,vec__7391_7410,(1),null);domina.set_style_BANG_.call(null,content,name_7411,value_7412);
{
var G__7413 = cljs.core.next.call(null,seq__7386_7404__$1);
var G__7414 = null;
var G__7415 = (0);
var G__7416 = (0);
seq__7386_7392 = G__7413;
chunk__7387_7393 = G__7414;
count__7388_7394 = G__7415;
i__7389_7395 = G__7416;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__7423_7429 = cljs.core.seq.call(null,attrs);var chunk__7424_7430 = null;var count__7425_7431 = (0);var i__7426_7432 = (0);while(true){
if((i__7426_7432 < count__7425_7431))
{var vec__7427_7433 = cljs.core._nth.call(null,chunk__7424_7430,i__7426_7432);var name_7434 = cljs.core.nth.call(null,vec__7427_7433,(0),null);var value_7435 = cljs.core.nth.call(null,vec__7427_7433,(1),null);domina.set_attr_BANG_.call(null,content,name_7434,value_7435);
{
var G__7436 = seq__7423_7429;
var G__7437 = chunk__7424_7430;
var G__7438 = count__7425_7431;
var G__7439 = (i__7426_7432 + (1));
seq__7423_7429 = G__7436;
chunk__7424_7430 = G__7437;
count__7425_7431 = G__7438;
i__7426_7432 = G__7439;
continue;
}
} else
{var temp__4126__auto___7440 = cljs.core.seq.call(null,seq__7423_7429);if(temp__4126__auto___7440)
{var seq__7423_7441__$1 = temp__4126__auto___7440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7423_7441__$1))
{var c__4410__auto___7442 = cljs.core.chunk_first.call(null,seq__7423_7441__$1);{
var G__7443 = cljs.core.chunk_rest.call(null,seq__7423_7441__$1);
var G__7444 = c__4410__auto___7442;
var G__7445 = cljs.core.count.call(null,c__4410__auto___7442);
var G__7446 = (0);
seq__7423_7429 = G__7443;
chunk__7424_7430 = G__7444;
count__7425_7431 = G__7445;
i__7426_7432 = G__7446;
continue;
}
} else
{var vec__7428_7447 = cljs.core.first.call(null,seq__7423_7441__$1);var name_7448 = cljs.core.nth.call(null,vec__7428_7447,(0),null);var value_7449 = cljs.core.nth.call(null,vec__7428_7447,(1),null);domina.set_attr_BANG_.call(null,content,name_7448,value_7449);
{
var G__7450 = cljs.core.next.call(null,seq__7423_7441__$1);
var G__7451 = null;
var G__7452 = (0);
var G__7453 = (0);
seq__7423_7429 = G__7450;
chunk__7424_7430 = G__7451;
count__7425_7431 = G__7452;
i__7426_7432 = G__7453;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__7458_7462 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7459_7463 = null;var count__7460_7464 = (0);var i__7461_7465 = (0);while(true){
if((i__7461_7465 < count__7460_7464))
{var node_7466 = cljs.core._nth.call(null,chunk__7459_7463,i__7461_7465);goog.dom.classes.add(node_7466,class$);
{
var G__7467 = seq__7458_7462;
var G__7468 = chunk__7459_7463;
var G__7469 = count__7460_7464;
var G__7470 = (i__7461_7465 + (1));
seq__7458_7462 = G__7467;
chunk__7459_7463 = G__7468;
count__7460_7464 = G__7469;
i__7461_7465 = G__7470;
continue;
}
} else
{var temp__4126__auto___7471 = cljs.core.seq.call(null,seq__7458_7462);if(temp__4126__auto___7471)
{var seq__7458_7472__$1 = temp__4126__auto___7471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7458_7472__$1))
{var c__4410__auto___7473 = cljs.core.chunk_first.call(null,seq__7458_7472__$1);{
var G__7474 = cljs.core.chunk_rest.call(null,seq__7458_7472__$1);
var G__7475 = c__4410__auto___7473;
var G__7476 = cljs.core.count.call(null,c__4410__auto___7473);
var G__7477 = (0);
seq__7458_7462 = G__7474;
chunk__7459_7463 = G__7475;
count__7460_7464 = G__7476;
i__7461_7465 = G__7477;
continue;
}
} else
{var node_7478 = cljs.core.first.call(null,seq__7458_7472__$1);goog.dom.classes.add(node_7478,class$);
{
var G__7479 = cljs.core.next.call(null,seq__7458_7472__$1);
var G__7480 = null;
var G__7481 = (0);
var G__7482 = (0);
seq__7458_7462 = G__7479;
chunk__7459_7463 = G__7480;
count__7460_7464 = G__7481;
i__7461_7465 = G__7482;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__7487_7491 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7488_7492 = null;var count__7489_7493 = (0);var i__7490_7494 = (0);while(true){
if((i__7490_7494 < count__7489_7493))
{var node_7495 = cljs.core._nth.call(null,chunk__7488_7492,i__7490_7494);goog.dom.classes.remove(node_7495,class$);
{
var G__7496 = seq__7487_7491;
var G__7497 = chunk__7488_7492;
var G__7498 = count__7489_7493;
var G__7499 = (i__7490_7494 + (1));
seq__7487_7491 = G__7496;
chunk__7488_7492 = G__7497;
count__7489_7493 = G__7498;
i__7490_7494 = G__7499;
continue;
}
} else
{var temp__4126__auto___7500 = cljs.core.seq.call(null,seq__7487_7491);if(temp__4126__auto___7500)
{var seq__7487_7501__$1 = temp__4126__auto___7500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7487_7501__$1))
{var c__4410__auto___7502 = cljs.core.chunk_first.call(null,seq__7487_7501__$1);{
var G__7503 = cljs.core.chunk_rest.call(null,seq__7487_7501__$1);
var G__7504 = c__4410__auto___7502;
var G__7505 = cljs.core.count.call(null,c__4410__auto___7502);
var G__7506 = (0);
seq__7487_7491 = G__7503;
chunk__7488_7492 = G__7504;
count__7489_7493 = G__7505;
i__7490_7494 = G__7506;
continue;
}
} else
{var node_7507 = cljs.core.first.call(null,seq__7487_7501__$1);goog.dom.classes.remove(node_7507,class$);
{
var G__7508 = cljs.core.next.call(null,seq__7487_7501__$1);
var G__7509 = null;
var G__7510 = (0);
var G__7511 = (0);
seq__7487_7491 = G__7508;
chunk__7488_7492 = G__7509;
count__7489_7493 = G__7510;
i__7490_7494 = G__7511;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__7516_7520 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7517_7521 = null;var count__7518_7522 = (0);var i__7519_7523 = (0);while(true){
if((i__7519_7523 < count__7518_7522))
{var node_7524 = cljs.core._nth.call(null,chunk__7517_7521,i__7519_7523);goog.dom.classes.toggle(node_7524,class$);
{
var G__7525 = seq__7516_7520;
var G__7526 = chunk__7517_7521;
var G__7527 = count__7518_7522;
var G__7528 = (i__7519_7523 + (1));
seq__7516_7520 = G__7525;
chunk__7517_7521 = G__7526;
count__7518_7522 = G__7527;
i__7519_7523 = G__7528;
continue;
}
} else
{var temp__4126__auto___7529 = cljs.core.seq.call(null,seq__7516_7520);if(temp__4126__auto___7529)
{var seq__7516_7530__$1 = temp__4126__auto___7529;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7516_7530__$1))
{var c__4410__auto___7531 = cljs.core.chunk_first.call(null,seq__7516_7530__$1);{
var G__7532 = cljs.core.chunk_rest.call(null,seq__7516_7530__$1);
var G__7533 = c__4410__auto___7531;
var G__7534 = cljs.core.count.call(null,c__4410__auto___7531);
var G__7535 = (0);
seq__7516_7520 = G__7532;
chunk__7517_7521 = G__7533;
count__7518_7522 = G__7534;
i__7519_7523 = G__7535;
continue;
}
} else
{var node_7536 = cljs.core.first.call(null,seq__7516_7530__$1);goog.dom.classes.toggle(node_7536,class$);
{
var G__7537 = cljs.core.next.call(null,seq__7516_7530__$1);
var G__7538 = null;
var G__7539 = (0);
var G__7540 = (0);
seq__7516_7520 = G__7537;
chunk__7517_7521 = G__7538;
count__7518_7522 = G__7539;
i__7519_7523 = G__7540;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_7549__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__7545_7550 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7546_7551 = null;var count__7547_7552 = (0);var i__7548_7553 = (0);while(true){
if((i__7548_7553 < count__7547_7552))
{var node_7554 = cljs.core._nth.call(null,chunk__7546_7551,i__7548_7553);goog.dom.classes.set(node_7554,classes_7549__$1);
{
var G__7555 = seq__7545_7550;
var G__7556 = chunk__7546_7551;
var G__7557 = count__7547_7552;
var G__7558 = (i__7548_7553 + (1));
seq__7545_7550 = G__7555;
chunk__7546_7551 = G__7556;
count__7547_7552 = G__7557;
i__7548_7553 = G__7558;
continue;
}
} else
{var temp__4126__auto___7559 = cljs.core.seq.call(null,seq__7545_7550);if(temp__4126__auto___7559)
{var seq__7545_7560__$1 = temp__4126__auto___7559;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7545_7560__$1))
{var c__4410__auto___7561 = cljs.core.chunk_first.call(null,seq__7545_7560__$1);{
var G__7562 = cljs.core.chunk_rest.call(null,seq__7545_7560__$1);
var G__7563 = c__4410__auto___7561;
var G__7564 = cljs.core.count.call(null,c__4410__auto___7561);
var G__7565 = (0);
seq__7545_7550 = G__7562;
chunk__7546_7551 = G__7563;
count__7547_7552 = G__7564;
i__7548_7553 = G__7565;
continue;
}
} else
{var node_7566 = cljs.core.first.call(null,seq__7545_7560__$1);goog.dom.classes.set(node_7566,classes_7549__$1);
{
var G__7567 = cljs.core.next.call(null,seq__7545_7560__$1);
var G__7568 = null;
var G__7569 = (0);
var G__7570 = (0);
seq__7545_7550 = G__7567;
chunk__7546_7551 = G__7568;
count__7547_7552 = G__7569;
i__7548_7553 = G__7570;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__7575_7579 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7576_7580 = null;var count__7577_7581 = (0);var i__7578_7582 = (0);while(true){
if((i__7578_7582 < count__7577_7581))
{var node_7583 = cljs.core._nth.call(null,chunk__7576_7580,i__7578_7582);goog.dom.setTextContent(node_7583,value);
{
var G__7584 = seq__7575_7579;
var G__7585 = chunk__7576_7580;
var G__7586 = count__7577_7581;
var G__7587 = (i__7578_7582 + (1));
seq__7575_7579 = G__7584;
chunk__7576_7580 = G__7585;
count__7577_7581 = G__7586;
i__7578_7582 = G__7587;
continue;
}
} else
{var temp__4126__auto___7588 = cljs.core.seq.call(null,seq__7575_7579);if(temp__4126__auto___7588)
{var seq__7575_7589__$1 = temp__4126__auto___7588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7575_7589__$1))
{var c__4410__auto___7590 = cljs.core.chunk_first.call(null,seq__7575_7589__$1);{
var G__7591 = cljs.core.chunk_rest.call(null,seq__7575_7589__$1);
var G__7592 = c__4410__auto___7590;
var G__7593 = cljs.core.count.call(null,c__4410__auto___7590);
var G__7594 = (0);
seq__7575_7579 = G__7591;
chunk__7576_7580 = G__7592;
count__7577_7581 = G__7593;
i__7578_7582 = G__7594;
continue;
}
} else
{var node_7595 = cljs.core.first.call(null,seq__7575_7589__$1);goog.dom.setTextContent(node_7595,value);
{
var G__7596 = cljs.core.next.call(null,seq__7575_7589__$1);
var G__7597 = null;
var G__7598 = (0);
var G__7599 = (0);
seq__7575_7579 = G__7596;
chunk__7576_7580 = G__7597;
count__7577_7581 = G__7598;
i__7578_7582 = G__7599;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__7604_7608 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7605_7609 = null;var count__7606_7610 = (0);var i__7607_7611 = (0);while(true){
if((i__7607_7611 < count__7606_7610))
{var node_7612 = cljs.core._nth.call(null,chunk__7605_7609,i__7607_7611);goog.dom.forms.setValue(node_7612,value);
{
var G__7613 = seq__7604_7608;
var G__7614 = chunk__7605_7609;
var G__7615 = count__7606_7610;
var G__7616 = (i__7607_7611 + (1));
seq__7604_7608 = G__7613;
chunk__7605_7609 = G__7614;
count__7606_7610 = G__7615;
i__7607_7611 = G__7616;
continue;
}
} else
{var temp__4126__auto___7617 = cljs.core.seq.call(null,seq__7604_7608);if(temp__4126__auto___7617)
{var seq__7604_7618__$1 = temp__4126__auto___7617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7604_7618__$1))
{var c__4410__auto___7619 = cljs.core.chunk_first.call(null,seq__7604_7618__$1);{
var G__7620 = cljs.core.chunk_rest.call(null,seq__7604_7618__$1);
var G__7621 = c__4410__auto___7619;
var G__7622 = cljs.core.count.call(null,c__4410__auto___7619);
var G__7623 = (0);
seq__7604_7608 = G__7620;
chunk__7605_7609 = G__7621;
count__7606_7610 = G__7622;
i__7607_7611 = G__7623;
continue;
}
} else
{var node_7624 = cljs.core.first.call(null,seq__7604_7618__$1);goog.dom.forms.setValue(node_7624,value);
{
var G__7625 = cljs.core.next.call(null,seq__7604_7618__$1);
var G__7626 = null;
var G__7627 = (0);
var G__7628 = (0);
seq__7604_7608 = G__7625;
chunk__7605_7609 = G__7626;
count__7606_7610 = G__7627;
i__7607_7611 = G__7628;
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
{var value_7639 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__7635_7640 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7636_7641 = null;var count__7637_7642 = (0);var i__7638_7643 = (0);while(true){
if((i__7638_7643 < count__7637_7642))
{var node_7644 = cljs.core._nth.call(null,chunk__7636_7641,i__7638_7643);node_7644.innerHTML = value_7639;
{
var G__7645 = seq__7635_7640;
var G__7646 = chunk__7636_7641;
var G__7647 = count__7637_7642;
var G__7648 = (i__7638_7643 + (1));
seq__7635_7640 = G__7645;
chunk__7636_7641 = G__7646;
count__7637_7642 = G__7647;
i__7638_7643 = G__7648;
continue;
}
} else
{var temp__4126__auto___7649 = cljs.core.seq.call(null,seq__7635_7640);if(temp__4126__auto___7649)
{var seq__7635_7650__$1 = temp__4126__auto___7649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7635_7650__$1))
{var c__4410__auto___7651 = cljs.core.chunk_first.call(null,seq__7635_7650__$1);{
var G__7652 = cljs.core.chunk_rest.call(null,seq__7635_7650__$1);
var G__7653 = c__4410__auto___7651;
var G__7654 = cljs.core.count.call(null,c__4410__auto___7651);
var G__7655 = (0);
seq__7635_7640 = G__7652;
chunk__7636_7641 = G__7653;
count__7637_7642 = G__7654;
i__7638_7643 = G__7655;
continue;
}
} else
{var node_7656 = cljs.core.first.call(null,seq__7635_7650__$1);node_7656.innerHTML = value_7639;
{
var G__7657 = cljs.core.next.call(null,seq__7635_7650__$1);
var G__7658 = null;
var G__7659 = (0);
var G__7660 = (0);
seq__7635_7640 = G__7657;
chunk__7636_7641 = G__7658;
count__7637_7642 = G__7659;
i__7638_7643 = G__7660;
continue;
}
}
} else
{}
}
break;
}
}catch (e7634){if((e7634 instanceof Error))
{var e_7661 = e7634;domina.replace_children_BANG_.call(null,content,value_7639);
} else
{throw e7634;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__7668_7672 = cljs.core.seq.call(null,children);var chunk__7669_7673 = null;var count__7670_7674 = (0);var i__7671_7675 = (0);while(true){
if((i__7671_7675 < count__7670_7674))
{var child_7676 = cljs.core._nth.call(null,chunk__7669_7673,i__7671_7675);frag.appendChild(child_7676);
{
var G__7677 = seq__7668_7672;
var G__7678 = chunk__7669_7673;
var G__7679 = count__7670_7674;
var G__7680 = (i__7671_7675 + (1));
seq__7668_7672 = G__7677;
chunk__7669_7673 = G__7678;
count__7670_7674 = G__7679;
i__7671_7675 = G__7680;
continue;
}
} else
{var temp__4126__auto___7681 = cljs.core.seq.call(null,seq__7668_7672);if(temp__4126__auto___7681)
{var seq__7668_7682__$1 = temp__4126__auto___7681;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7668_7682__$1))
{var c__4410__auto___7683 = cljs.core.chunk_first.call(null,seq__7668_7682__$1);{
var G__7684 = cljs.core.chunk_rest.call(null,seq__7668_7682__$1);
var G__7685 = c__4410__auto___7683;
var G__7686 = cljs.core.count.call(null,c__4410__auto___7683);
var G__7687 = (0);
seq__7668_7672 = G__7684;
chunk__7669_7673 = G__7685;
count__7670_7674 = G__7686;
i__7671_7675 = G__7687;
continue;
}
} else
{var child_7688 = cljs.core.first.call(null,seq__7668_7682__$1);frag.appendChild(child_7688);
{
var G__7689 = cljs.core.next.call(null,seq__7668_7682__$1);
var G__7690 = null;
var G__7691 = (0);
var G__7692 = (0);
seq__7668_7672 = G__7689;
chunk__7669_7673 = G__7690;
count__7670_7674 = G__7691;
i__7671_7675 = G__7692;
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
return (function (p1__7662_SHARP_,p2__7663_SHARP_){return f.call(null,p1__7662_SHARP_,p2__7663_SHARP_);
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
{if((function (){var G__7694 = list_thing;if(G__7694)
{var bit__4304__auto__ = (G__7694.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__7694.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7694.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7694);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7694);
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
{if((function (){var G__7695 = content;if(G__7695)
{var bit__4304__auto__ = (G__7695.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__7695.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7695.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7695);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7695);
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
{if((function (){var G__7696 = content;if(G__7696)
{var bit__4304__auto__ = (G__7696.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__7696.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7696.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7696);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7696);
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
