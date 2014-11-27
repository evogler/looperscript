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
var opt_wrapper_7190 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_7191 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_7192 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_7192,opt_wrapper_7190,table_section_wrapper_7191,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_7190,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_7191,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_7191,cell_wrapper_7192,table_section_wrapper_7191,table_section_wrapper_7191]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3628__auto__ = div.firstChild;if(cljs.core.truth_(and__3628__auto__))
{return div.firstChild.childNodes;
} else
{return and__3628__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__7197 = cljs.core.seq.call(null,tbody);var chunk__7198 = null;var count__7199 = (0);var i__7200 = (0);while(true){
if((i__7200 < count__7199))
{var child = cljs.core._nth.call(null,chunk__7198,i__7200);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7201 = seq__7197;
var G__7202 = chunk__7198;
var G__7203 = count__7199;
var G__7204 = (i__7200 + (1));
seq__7197 = G__7201;
chunk__7198 = G__7202;
count__7199 = G__7203;
i__7200 = G__7204;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7197);if(temp__4126__auto__)
{var seq__7197__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7197__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__7197__$1);{
var G__7205 = cljs.core.chunk_rest.call(null,seq__7197__$1);
var G__7206 = c__4410__auto__;
var G__7207 = cljs.core.count.call(null,c__4410__auto__);
var G__7208 = (0);
seq__7197 = G__7205;
chunk__7198 = G__7206;
count__7199 = G__7207;
i__7200 = G__7208;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__7197__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7209 = cljs.core.next.call(null,seq__7197__$1);
var G__7210 = null;
var G__7211 = (0);
var G__7212 = (0);
seq__7197 = G__7209;
chunk__7198 = G__7210;
count__7199 = G__7211;
i__7200 = G__7212;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__7214 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__7214,(0),null);var start_wrap = cljs.core.nth.call(null,vec__7214,(1),null);var end_wrap = cljs.core.nth.call(null,vec__7214,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__7215 = wrapper.lastChild;
var G__7216 = (level - (1));
wrapper = G__7215;
level = G__7216;
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
domina.DomContent = (function (){var obj7218 = {};return obj7218;
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
log_debug.cljs$lang$applyTo = (function (arglist__7219){
var mesg = cljs.core.seq(arglist__7219);
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
log.cljs$lang$applyTo = (function (arglist__7220){
var mesg = cljs.core.seq(arglist__7220);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__7221){
var contents = cljs.core.seq(arglist__7221);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__7222_SHARP_){return p1__7222_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__7223_SHARP_,p2__7224_SHARP_){return goog.dom.insertChildAt(p1__7223_SHARP_,p2__7224_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7226_SHARP_,p2__7225_SHARP_){return goog.dom.insertSiblingBefore(p2__7225_SHARP_,p1__7226_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7228_SHARP_,p2__7227_SHARP_){return goog.dom.insertSiblingAfter(p2__7227_SHARP_,p1__7228_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__7230_SHARP_,p2__7229_SHARP_){return goog.dom.replaceNode(p2__7229_SHARP_,p1__7230_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__7235_7239 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7236_7240 = null;var count__7237_7241 = (0);var i__7238_7242 = (0);while(true){
if((i__7238_7242 < count__7237_7241))
{var n_7243 = cljs.core._nth.call(null,chunk__7236_7240,i__7238_7242);goog.style.setStyle(n_7243,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7244 = seq__7235_7239;
var G__7245 = chunk__7236_7240;
var G__7246 = count__7237_7241;
var G__7247 = (i__7238_7242 + (1));
seq__7235_7239 = G__7244;
chunk__7236_7240 = G__7245;
count__7237_7241 = G__7246;
i__7238_7242 = G__7247;
continue;
}
} else
{var temp__4126__auto___7248 = cljs.core.seq.call(null,seq__7235_7239);if(temp__4126__auto___7248)
{var seq__7235_7249__$1 = temp__4126__auto___7248;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7235_7249__$1))
{var c__4410__auto___7250 = cljs.core.chunk_first.call(null,seq__7235_7249__$1);{
var G__7251 = cljs.core.chunk_rest.call(null,seq__7235_7249__$1);
var G__7252 = c__4410__auto___7250;
var G__7253 = cljs.core.count.call(null,c__4410__auto___7250);
var G__7254 = (0);
seq__7235_7239 = G__7251;
chunk__7236_7240 = G__7252;
count__7237_7241 = G__7253;
i__7238_7242 = G__7254;
continue;
}
} else
{var n_7255 = cljs.core.first.call(null,seq__7235_7249__$1);goog.style.setStyle(n_7255,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7256 = cljs.core.next.call(null,seq__7235_7249__$1);
var G__7257 = null;
var G__7258 = (0);
var G__7259 = (0);
seq__7235_7239 = G__7256;
chunk__7236_7240 = G__7257;
count__7237_7241 = G__7258;
i__7238_7242 = G__7259;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7260){
var content = cljs.core.first(arglist__7260);
arglist__7260 = cljs.core.next(arglist__7260);
var name = cljs.core.first(arglist__7260);
var value = cljs.core.rest(arglist__7260);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__7265_7269 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7266_7270 = null;var count__7267_7271 = (0);var i__7268_7272 = (0);while(true){
if((i__7268_7272 < count__7267_7271))
{var n_7273 = cljs.core._nth.call(null,chunk__7266_7270,i__7268_7272);n_7273.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7274 = seq__7265_7269;
var G__7275 = chunk__7266_7270;
var G__7276 = count__7267_7271;
var G__7277 = (i__7268_7272 + (1));
seq__7265_7269 = G__7274;
chunk__7266_7270 = G__7275;
count__7267_7271 = G__7276;
i__7268_7272 = G__7277;
continue;
}
} else
{var temp__4126__auto___7278 = cljs.core.seq.call(null,seq__7265_7269);if(temp__4126__auto___7278)
{var seq__7265_7279__$1 = temp__4126__auto___7278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7265_7279__$1))
{var c__4410__auto___7280 = cljs.core.chunk_first.call(null,seq__7265_7279__$1);{
var G__7281 = cljs.core.chunk_rest.call(null,seq__7265_7279__$1);
var G__7282 = c__4410__auto___7280;
var G__7283 = cljs.core.count.call(null,c__4410__auto___7280);
var G__7284 = (0);
seq__7265_7269 = G__7281;
chunk__7266_7270 = G__7282;
count__7267_7271 = G__7283;
i__7268_7272 = G__7284;
continue;
}
} else
{var n_7285 = cljs.core.first.call(null,seq__7265_7279__$1);n_7285.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7286 = cljs.core.next.call(null,seq__7265_7279__$1);
var G__7287 = null;
var G__7288 = (0);
var G__7289 = (0);
seq__7265_7269 = G__7286;
chunk__7266_7270 = G__7287;
count__7267_7271 = G__7288;
i__7268_7272 = G__7289;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__7290){
var content = cljs.core.first(arglist__7290);
arglist__7290 = cljs.core.next(arglist__7290);
var name = cljs.core.first(arglist__7290);
var value = cljs.core.rest(arglist__7290);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__7295_7299 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7296_7300 = null;var count__7297_7301 = (0);var i__7298_7302 = (0);while(true){
if((i__7298_7302 < count__7297_7301))
{var n_7303 = cljs.core._nth.call(null,chunk__7296_7300,i__7298_7302);n_7303.removeAttribute(cljs.core.name.call(null,name));
{
var G__7304 = seq__7295_7299;
var G__7305 = chunk__7296_7300;
var G__7306 = count__7297_7301;
var G__7307 = (i__7298_7302 + (1));
seq__7295_7299 = G__7304;
chunk__7296_7300 = G__7305;
count__7297_7301 = G__7306;
i__7298_7302 = G__7307;
continue;
}
} else
{var temp__4126__auto___7308 = cljs.core.seq.call(null,seq__7295_7299);if(temp__4126__auto___7308)
{var seq__7295_7309__$1 = temp__4126__auto___7308;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7295_7309__$1))
{var c__4410__auto___7310 = cljs.core.chunk_first.call(null,seq__7295_7309__$1);{
var G__7311 = cljs.core.chunk_rest.call(null,seq__7295_7309__$1);
var G__7312 = c__4410__auto___7310;
var G__7313 = cljs.core.count.call(null,c__4410__auto___7310);
var G__7314 = (0);
seq__7295_7299 = G__7311;
chunk__7296_7300 = G__7312;
count__7297_7301 = G__7313;
i__7298_7302 = G__7314;
continue;
}
} else
{var n_7315 = cljs.core.first.call(null,seq__7295_7309__$1);n_7315.removeAttribute(cljs.core.name.call(null,name));
{
var G__7316 = cljs.core.next.call(null,seq__7295_7309__$1);
var G__7317 = null;
var G__7318 = (0);
var G__7319 = (0);
seq__7295_7299 = G__7316;
chunk__7296_7300 = G__7317;
count__7297_7301 = G__7318;
i__7298_7302 = G__7319;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__7321 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__7321,(0),null);var v = cljs.core.nth.call(null,vec__7321,(1),null);if(cljs.core.truth_((function (){var and__3628__auto__ = k;if(cljs.core.truth_(and__3628__auto__))
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
return (function (p1__7322_SHARP_){var attr = attrs__$1.item(p1__7322_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__7329_7335 = cljs.core.seq.call(null,styles);var chunk__7330_7336 = null;var count__7331_7337 = (0);var i__7332_7338 = (0);while(true){
if((i__7332_7338 < count__7331_7337))
{var vec__7333_7339 = cljs.core._nth.call(null,chunk__7330_7336,i__7332_7338);var name_7340 = cljs.core.nth.call(null,vec__7333_7339,(0),null);var value_7341 = cljs.core.nth.call(null,vec__7333_7339,(1),null);domina.set_style_BANG_.call(null,content,name_7340,value_7341);
{
var G__7342 = seq__7329_7335;
var G__7343 = chunk__7330_7336;
var G__7344 = count__7331_7337;
var G__7345 = (i__7332_7338 + (1));
seq__7329_7335 = G__7342;
chunk__7330_7336 = G__7343;
count__7331_7337 = G__7344;
i__7332_7338 = G__7345;
continue;
}
} else
{var temp__4126__auto___7346 = cljs.core.seq.call(null,seq__7329_7335);if(temp__4126__auto___7346)
{var seq__7329_7347__$1 = temp__4126__auto___7346;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7329_7347__$1))
{var c__4410__auto___7348 = cljs.core.chunk_first.call(null,seq__7329_7347__$1);{
var G__7349 = cljs.core.chunk_rest.call(null,seq__7329_7347__$1);
var G__7350 = c__4410__auto___7348;
var G__7351 = cljs.core.count.call(null,c__4410__auto___7348);
var G__7352 = (0);
seq__7329_7335 = G__7349;
chunk__7330_7336 = G__7350;
count__7331_7337 = G__7351;
i__7332_7338 = G__7352;
continue;
}
} else
{var vec__7334_7353 = cljs.core.first.call(null,seq__7329_7347__$1);var name_7354 = cljs.core.nth.call(null,vec__7334_7353,(0),null);var value_7355 = cljs.core.nth.call(null,vec__7334_7353,(1),null);domina.set_style_BANG_.call(null,content,name_7354,value_7355);
{
var G__7356 = cljs.core.next.call(null,seq__7329_7347__$1);
var G__7357 = null;
var G__7358 = (0);
var G__7359 = (0);
seq__7329_7335 = G__7356;
chunk__7330_7336 = G__7357;
count__7331_7337 = G__7358;
i__7332_7338 = G__7359;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__7366_7372 = cljs.core.seq.call(null,attrs);var chunk__7367_7373 = null;var count__7368_7374 = (0);var i__7369_7375 = (0);while(true){
if((i__7369_7375 < count__7368_7374))
{var vec__7370_7376 = cljs.core._nth.call(null,chunk__7367_7373,i__7369_7375);var name_7377 = cljs.core.nth.call(null,vec__7370_7376,(0),null);var value_7378 = cljs.core.nth.call(null,vec__7370_7376,(1),null);domina.set_attr_BANG_.call(null,content,name_7377,value_7378);
{
var G__7379 = seq__7366_7372;
var G__7380 = chunk__7367_7373;
var G__7381 = count__7368_7374;
var G__7382 = (i__7369_7375 + (1));
seq__7366_7372 = G__7379;
chunk__7367_7373 = G__7380;
count__7368_7374 = G__7381;
i__7369_7375 = G__7382;
continue;
}
} else
{var temp__4126__auto___7383 = cljs.core.seq.call(null,seq__7366_7372);if(temp__4126__auto___7383)
{var seq__7366_7384__$1 = temp__4126__auto___7383;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7366_7384__$1))
{var c__4410__auto___7385 = cljs.core.chunk_first.call(null,seq__7366_7384__$1);{
var G__7386 = cljs.core.chunk_rest.call(null,seq__7366_7384__$1);
var G__7387 = c__4410__auto___7385;
var G__7388 = cljs.core.count.call(null,c__4410__auto___7385);
var G__7389 = (0);
seq__7366_7372 = G__7386;
chunk__7367_7373 = G__7387;
count__7368_7374 = G__7388;
i__7369_7375 = G__7389;
continue;
}
} else
{var vec__7371_7390 = cljs.core.first.call(null,seq__7366_7384__$1);var name_7391 = cljs.core.nth.call(null,vec__7371_7390,(0),null);var value_7392 = cljs.core.nth.call(null,vec__7371_7390,(1),null);domina.set_attr_BANG_.call(null,content,name_7391,value_7392);
{
var G__7393 = cljs.core.next.call(null,seq__7366_7384__$1);
var G__7394 = null;
var G__7395 = (0);
var G__7396 = (0);
seq__7366_7372 = G__7393;
chunk__7367_7373 = G__7394;
count__7368_7374 = G__7395;
i__7369_7375 = G__7396;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__7401_7405 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7402_7406 = null;var count__7403_7407 = (0);var i__7404_7408 = (0);while(true){
if((i__7404_7408 < count__7403_7407))
{var node_7409 = cljs.core._nth.call(null,chunk__7402_7406,i__7404_7408);goog.dom.classes.add(node_7409,class$);
{
var G__7410 = seq__7401_7405;
var G__7411 = chunk__7402_7406;
var G__7412 = count__7403_7407;
var G__7413 = (i__7404_7408 + (1));
seq__7401_7405 = G__7410;
chunk__7402_7406 = G__7411;
count__7403_7407 = G__7412;
i__7404_7408 = G__7413;
continue;
}
} else
{var temp__4126__auto___7414 = cljs.core.seq.call(null,seq__7401_7405);if(temp__4126__auto___7414)
{var seq__7401_7415__$1 = temp__4126__auto___7414;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7401_7415__$1))
{var c__4410__auto___7416 = cljs.core.chunk_first.call(null,seq__7401_7415__$1);{
var G__7417 = cljs.core.chunk_rest.call(null,seq__7401_7415__$1);
var G__7418 = c__4410__auto___7416;
var G__7419 = cljs.core.count.call(null,c__4410__auto___7416);
var G__7420 = (0);
seq__7401_7405 = G__7417;
chunk__7402_7406 = G__7418;
count__7403_7407 = G__7419;
i__7404_7408 = G__7420;
continue;
}
} else
{var node_7421 = cljs.core.first.call(null,seq__7401_7415__$1);goog.dom.classes.add(node_7421,class$);
{
var G__7422 = cljs.core.next.call(null,seq__7401_7415__$1);
var G__7423 = null;
var G__7424 = (0);
var G__7425 = (0);
seq__7401_7405 = G__7422;
chunk__7402_7406 = G__7423;
count__7403_7407 = G__7424;
i__7404_7408 = G__7425;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__7430_7434 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7431_7435 = null;var count__7432_7436 = (0);var i__7433_7437 = (0);while(true){
if((i__7433_7437 < count__7432_7436))
{var node_7438 = cljs.core._nth.call(null,chunk__7431_7435,i__7433_7437);goog.dom.classes.remove(node_7438,class$);
{
var G__7439 = seq__7430_7434;
var G__7440 = chunk__7431_7435;
var G__7441 = count__7432_7436;
var G__7442 = (i__7433_7437 + (1));
seq__7430_7434 = G__7439;
chunk__7431_7435 = G__7440;
count__7432_7436 = G__7441;
i__7433_7437 = G__7442;
continue;
}
} else
{var temp__4126__auto___7443 = cljs.core.seq.call(null,seq__7430_7434);if(temp__4126__auto___7443)
{var seq__7430_7444__$1 = temp__4126__auto___7443;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7430_7444__$1))
{var c__4410__auto___7445 = cljs.core.chunk_first.call(null,seq__7430_7444__$1);{
var G__7446 = cljs.core.chunk_rest.call(null,seq__7430_7444__$1);
var G__7447 = c__4410__auto___7445;
var G__7448 = cljs.core.count.call(null,c__4410__auto___7445);
var G__7449 = (0);
seq__7430_7434 = G__7446;
chunk__7431_7435 = G__7447;
count__7432_7436 = G__7448;
i__7433_7437 = G__7449;
continue;
}
} else
{var node_7450 = cljs.core.first.call(null,seq__7430_7444__$1);goog.dom.classes.remove(node_7450,class$);
{
var G__7451 = cljs.core.next.call(null,seq__7430_7444__$1);
var G__7452 = null;
var G__7453 = (0);
var G__7454 = (0);
seq__7430_7434 = G__7451;
chunk__7431_7435 = G__7452;
count__7432_7436 = G__7453;
i__7433_7437 = G__7454;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__7459_7463 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7460_7464 = null;var count__7461_7465 = (0);var i__7462_7466 = (0);while(true){
if((i__7462_7466 < count__7461_7465))
{var node_7467 = cljs.core._nth.call(null,chunk__7460_7464,i__7462_7466);goog.dom.classes.toggle(node_7467,class$);
{
var G__7468 = seq__7459_7463;
var G__7469 = chunk__7460_7464;
var G__7470 = count__7461_7465;
var G__7471 = (i__7462_7466 + (1));
seq__7459_7463 = G__7468;
chunk__7460_7464 = G__7469;
count__7461_7465 = G__7470;
i__7462_7466 = G__7471;
continue;
}
} else
{var temp__4126__auto___7472 = cljs.core.seq.call(null,seq__7459_7463);if(temp__4126__auto___7472)
{var seq__7459_7473__$1 = temp__4126__auto___7472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7459_7473__$1))
{var c__4410__auto___7474 = cljs.core.chunk_first.call(null,seq__7459_7473__$1);{
var G__7475 = cljs.core.chunk_rest.call(null,seq__7459_7473__$1);
var G__7476 = c__4410__auto___7474;
var G__7477 = cljs.core.count.call(null,c__4410__auto___7474);
var G__7478 = (0);
seq__7459_7463 = G__7475;
chunk__7460_7464 = G__7476;
count__7461_7465 = G__7477;
i__7462_7466 = G__7478;
continue;
}
} else
{var node_7479 = cljs.core.first.call(null,seq__7459_7473__$1);goog.dom.classes.toggle(node_7479,class$);
{
var G__7480 = cljs.core.next.call(null,seq__7459_7473__$1);
var G__7481 = null;
var G__7482 = (0);
var G__7483 = (0);
seq__7459_7463 = G__7480;
chunk__7460_7464 = G__7481;
count__7461_7465 = G__7482;
i__7462_7466 = G__7483;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_7492__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__7488_7493 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7489_7494 = null;var count__7490_7495 = (0);var i__7491_7496 = (0);while(true){
if((i__7491_7496 < count__7490_7495))
{var node_7497 = cljs.core._nth.call(null,chunk__7489_7494,i__7491_7496);goog.dom.classes.set(node_7497,classes_7492__$1);
{
var G__7498 = seq__7488_7493;
var G__7499 = chunk__7489_7494;
var G__7500 = count__7490_7495;
var G__7501 = (i__7491_7496 + (1));
seq__7488_7493 = G__7498;
chunk__7489_7494 = G__7499;
count__7490_7495 = G__7500;
i__7491_7496 = G__7501;
continue;
}
} else
{var temp__4126__auto___7502 = cljs.core.seq.call(null,seq__7488_7493);if(temp__4126__auto___7502)
{var seq__7488_7503__$1 = temp__4126__auto___7502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7488_7503__$1))
{var c__4410__auto___7504 = cljs.core.chunk_first.call(null,seq__7488_7503__$1);{
var G__7505 = cljs.core.chunk_rest.call(null,seq__7488_7503__$1);
var G__7506 = c__4410__auto___7504;
var G__7507 = cljs.core.count.call(null,c__4410__auto___7504);
var G__7508 = (0);
seq__7488_7493 = G__7505;
chunk__7489_7494 = G__7506;
count__7490_7495 = G__7507;
i__7491_7496 = G__7508;
continue;
}
} else
{var node_7509 = cljs.core.first.call(null,seq__7488_7503__$1);goog.dom.classes.set(node_7509,classes_7492__$1);
{
var G__7510 = cljs.core.next.call(null,seq__7488_7503__$1);
var G__7511 = null;
var G__7512 = (0);
var G__7513 = (0);
seq__7488_7493 = G__7510;
chunk__7489_7494 = G__7511;
count__7490_7495 = G__7512;
i__7491_7496 = G__7513;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__7518_7522 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7519_7523 = null;var count__7520_7524 = (0);var i__7521_7525 = (0);while(true){
if((i__7521_7525 < count__7520_7524))
{var node_7526 = cljs.core._nth.call(null,chunk__7519_7523,i__7521_7525);goog.dom.setTextContent(node_7526,value);
{
var G__7527 = seq__7518_7522;
var G__7528 = chunk__7519_7523;
var G__7529 = count__7520_7524;
var G__7530 = (i__7521_7525 + (1));
seq__7518_7522 = G__7527;
chunk__7519_7523 = G__7528;
count__7520_7524 = G__7529;
i__7521_7525 = G__7530;
continue;
}
} else
{var temp__4126__auto___7531 = cljs.core.seq.call(null,seq__7518_7522);if(temp__4126__auto___7531)
{var seq__7518_7532__$1 = temp__4126__auto___7531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7518_7532__$1))
{var c__4410__auto___7533 = cljs.core.chunk_first.call(null,seq__7518_7532__$1);{
var G__7534 = cljs.core.chunk_rest.call(null,seq__7518_7532__$1);
var G__7535 = c__4410__auto___7533;
var G__7536 = cljs.core.count.call(null,c__4410__auto___7533);
var G__7537 = (0);
seq__7518_7522 = G__7534;
chunk__7519_7523 = G__7535;
count__7520_7524 = G__7536;
i__7521_7525 = G__7537;
continue;
}
} else
{var node_7538 = cljs.core.first.call(null,seq__7518_7532__$1);goog.dom.setTextContent(node_7538,value);
{
var G__7539 = cljs.core.next.call(null,seq__7518_7532__$1);
var G__7540 = null;
var G__7541 = (0);
var G__7542 = (0);
seq__7518_7522 = G__7539;
chunk__7519_7523 = G__7540;
count__7520_7524 = G__7541;
i__7521_7525 = G__7542;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__7547_7551 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7548_7552 = null;var count__7549_7553 = (0);var i__7550_7554 = (0);while(true){
if((i__7550_7554 < count__7549_7553))
{var node_7555 = cljs.core._nth.call(null,chunk__7548_7552,i__7550_7554);goog.dom.forms.setValue(node_7555,value);
{
var G__7556 = seq__7547_7551;
var G__7557 = chunk__7548_7552;
var G__7558 = count__7549_7553;
var G__7559 = (i__7550_7554 + (1));
seq__7547_7551 = G__7556;
chunk__7548_7552 = G__7557;
count__7549_7553 = G__7558;
i__7550_7554 = G__7559;
continue;
}
} else
{var temp__4126__auto___7560 = cljs.core.seq.call(null,seq__7547_7551);if(temp__4126__auto___7560)
{var seq__7547_7561__$1 = temp__4126__auto___7560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7547_7561__$1))
{var c__4410__auto___7562 = cljs.core.chunk_first.call(null,seq__7547_7561__$1);{
var G__7563 = cljs.core.chunk_rest.call(null,seq__7547_7561__$1);
var G__7564 = c__4410__auto___7562;
var G__7565 = cljs.core.count.call(null,c__4410__auto___7562);
var G__7566 = (0);
seq__7547_7551 = G__7563;
chunk__7548_7552 = G__7564;
count__7549_7553 = G__7565;
i__7550_7554 = G__7566;
continue;
}
} else
{var node_7567 = cljs.core.first.call(null,seq__7547_7561__$1);goog.dom.forms.setValue(node_7567,value);
{
var G__7568 = cljs.core.next.call(null,seq__7547_7561__$1);
var G__7569 = null;
var G__7570 = (0);
var G__7571 = (0);
seq__7547_7551 = G__7568;
chunk__7548_7552 = G__7569;
count__7549_7553 = G__7570;
i__7550_7554 = G__7571;
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
{var value_7582 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__7578_7583 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7579_7584 = null;var count__7580_7585 = (0);var i__7581_7586 = (0);while(true){
if((i__7581_7586 < count__7580_7585))
{var node_7587 = cljs.core._nth.call(null,chunk__7579_7584,i__7581_7586);node_7587.innerHTML = value_7582;
{
var G__7588 = seq__7578_7583;
var G__7589 = chunk__7579_7584;
var G__7590 = count__7580_7585;
var G__7591 = (i__7581_7586 + (1));
seq__7578_7583 = G__7588;
chunk__7579_7584 = G__7589;
count__7580_7585 = G__7590;
i__7581_7586 = G__7591;
continue;
}
} else
{var temp__4126__auto___7592 = cljs.core.seq.call(null,seq__7578_7583);if(temp__4126__auto___7592)
{var seq__7578_7593__$1 = temp__4126__auto___7592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7578_7593__$1))
{var c__4410__auto___7594 = cljs.core.chunk_first.call(null,seq__7578_7593__$1);{
var G__7595 = cljs.core.chunk_rest.call(null,seq__7578_7593__$1);
var G__7596 = c__4410__auto___7594;
var G__7597 = cljs.core.count.call(null,c__4410__auto___7594);
var G__7598 = (0);
seq__7578_7583 = G__7595;
chunk__7579_7584 = G__7596;
count__7580_7585 = G__7597;
i__7581_7586 = G__7598;
continue;
}
} else
{var node_7599 = cljs.core.first.call(null,seq__7578_7593__$1);node_7599.innerHTML = value_7582;
{
var G__7600 = cljs.core.next.call(null,seq__7578_7593__$1);
var G__7601 = null;
var G__7602 = (0);
var G__7603 = (0);
seq__7578_7583 = G__7600;
chunk__7579_7584 = G__7601;
count__7580_7585 = G__7602;
i__7581_7586 = G__7603;
continue;
}
}
} else
{}
}
break;
}
}catch (e7577){if((e7577 instanceof Error))
{var e_7604 = e7577;domina.replace_children_BANG_.call(null,content,value_7582);
} else
{throw e7577;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__7611_7615 = cljs.core.seq.call(null,children);var chunk__7612_7616 = null;var count__7613_7617 = (0);var i__7614_7618 = (0);while(true){
if((i__7614_7618 < count__7613_7617))
{var child_7619 = cljs.core._nth.call(null,chunk__7612_7616,i__7614_7618);frag.appendChild(child_7619);
{
var G__7620 = seq__7611_7615;
var G__7621 = chunk__7612_7616;
var G__7622 = count__7613_7617;
var G__7623 = (i__7614_7618 + (1));
seq__7611_7615 = G__7620;
chunk__7612_7616 = G__7621;
count__7613_7617 = G__7622;
i__7614_7618 = G__7623;
continue;
}
} else
{var temp__4126__auto___7624 = cljs.core.seq.call(null,seq__7611_7615);if(temp__4126__auto___7624)
{var seq__7611_7625__$1 = temp__4126__auto___7624;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7611_7625__$1))
{var c__4410__auto___7626 = cljs.core.chunk_first.call(null,seq__7611_7625__$1);{
var G__7627 = cljs.core.chunk_rest.call(null,seq__7611_7625__$1);
var G__7628 = c__4410__auto___7626;
var G__7629 = cljs.core.count.call(null,c__4410__auto___7626);
var G__7630 = (0);
seq__7611_7615 = G__7627;
chunk__7612_7616 = G__7628;
count__7613_7617 = G__7629;
i__7614_7618 = G__7630;
continue;
}
} else
{var child_7631 = cljs.core.first.call(null,seq__7611_7625__$1);frag.appendChild(child_7631);
{
var G__7632 = cljs.core.next.call(null,seq__7611_7625__$1);
var G__7633 = null;
var G__7634 = (0);
var G__7635 = (0);
seq__7611_7615 = G__7632;
chunk__7612_7616 = G__7633;
count__7613_7617 = G__7634;
i__7614_7618 = G__7635;
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
return (function (p1__7605_SHARP_,p2__7606_SHARP_){return f.call(null,p1__7605_SHARP_,p2__7606_SHARP_);
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
{if((function (){var G__7637 = list_thing;if(G__7637)
{var bit__4304__auto__ = (G__7637.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__7637.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7637.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7637);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7637);
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
{if((function (){var G__7638 = content;if(G__7638)
{var bit__4304__auto__ = (G__7638.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__7638.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7638.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7638);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7638);
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
{if((function (){var G__7639 = content;if(G__7639)
{var bit__4304__auto__ = (G__7639.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__7639.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7639.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7639);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7639);
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
