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
var opt_wrapper_28159 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_28160 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_28161 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_28161,opt_wrapper_28159,table_section_wrapper_28160,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_28159,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_28160,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_28160,cell_wrapper_28161,table_section_wrapper_28160,table_section_wrapper_28160]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3628__auto__ = div.firstChild;if(cljs.core.truth_(and__3628__auto__))
{return div.firstChild.childNodes;
} else
{return and__3628__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__28166 = cljs.core.seq.call(null,tbody);var chunk__28167 = null;var count__28168 = (0);var i__28169 = (0);while(true){
if((i__28169 < count__28168))
{var child = cljs.core._nth.call(null,chunk__28167,i__28169);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28170 = seq__28166;
var G__28171 = chunk__28167;
var G__28172 = count__28168;
var G__28173 = (i__28169 + (1));
seq__28166 = G__28170;
chunk__28167 = G__28171;
count__28168 = G__28172;
i__28169 = G__28173;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__28166);if(temp__4126__auto__)
{var seq__28166__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28166__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__28166__$1);{
var G__28174 = cljs.core.chunk_rest.call(null,seq__28166__$1);
var G__28175 = c__4410__auto__;
var G__28176 = cljs.core.count.call(null,c__4410__auto__);
var G__28177 = (0);
seq__28166 = G__28174;
chunk__28167 = G__28175;
count__28168 = G__28176;
i__28169 = G__28177;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__28166__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28178 = cljs.core.next.call(null,seq__28166__$1);
var G__28179 = null;
var G__28180 = (0);
var G__28181 = (0);
seq__28166 = G__28178;
chunk__28167 = G__28179;
count__28168 = G__28180;
i__28169 = G__28181;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__28183 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__28183,(0),null);var start_wrap = cljs.core.nth.call(null,vec__28183,(1),null);var end_wrap = cljs.core.nth.call(null,vec__28183,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__28184 = wrapper.lastChild;
var G__28185 = (level - (1));
wrapper = G__28184;
level = G__28185;
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
domina.DomContent = (function (){var obj28187 = {};return obj28187;
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
log_debug.cljs$lang$applyTo = (function (arglist__28188){
var mesg = cljs.core.seq(arglist__28188);
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
log.cljs$lang$applyTo = (function (arglist__28189){
var mesg = cljs.core.seq(arglist__28189);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__28190){
var contents = cljs.core.seq(arglist__28190);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__28191_SHARP_){return p1__28191_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__28192_SHARP_,p2__28193_SHARP_){return goog.dom.insertChildAt(p1__28192_SHARP_,p2__28193_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28195_SHARP_,p2__28194_SHARP_){return goog.dom.insertSiblingBefore(p2__28194_SHARP_,p1__28195_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28197_SHARP_,p2__28196_SHARP_){return goog.dom.insertSiblingAfter(p2__28196_SHARP_,p1__28197_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__28199_SHARP_,p2__28198_SHARP_){return goog.dom.replaceNode(p2__28198_SHARP_,p1__28199_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__28204_28208 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28205_28209 = null;var count__28206_28210 = (0);var i__28207_28211 = (0);while(true){
if((i__28207_28211 < count__28206_28210))
{var n_28212 = cljs.core._nth.call(null,chunk__28205_28209,i__28207_28211);goog.style.setStyle(n_28212,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28213 = seq__28204_28208;
var G__28214 = chunk__28205_28209;
var G__28215 = count__28206_28210;
var G__28216 = (i__28207_28211 + (1));
seq__28204_28208 = G__28213;
chunk__28205_28209 = G__28214;
count__28206_28210 = G__28215;
i__28207_28211 = G__28216;
continue;
}
} else
{var temp__4126__auto___28217 = cljs.core.seq.call(null,seq__28204_28208);if(temp__4126__auto___28217)
{var seq__28204_28218__$1 = temp__4126__auto___28217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28204_28218__$1))
{var c__4410__auto___28219 = cljs.core.chunk_first.call(null,seq__28204_28218__$1);{
var G__28220 = cljs.core.chunk_rest.call(null,seq__28204_28218__$1);
var G__28221 = c__4410__auto___28219;
var G__28222 = cljs.core.count.call(null,c__4410__auto___28219);
var G__28223 = (0);
seq__28204_28208 = G__28220;
chunk__28205_28209 = G__28221;
count__28206_28210 = G__28222;
i__28207_28211 = G__28223;
continue;
}
} else
{var n_28224 = cljs.core.first.call(null,seq__28204_28218__$1);goog.style.setStyle(n_28224,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28225 = cljs.core.next.call(null,seq__28204_28218__$1);
var G__28226 = null;
var G__28227 = (0);
var G__28228 = (0);
seq__28204_28208 = G__28225;
chunk__28205_28209 = G__28226;
count__28206_28210 = G__28227;
i__28207_28211 = G__28228;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__28229){
var content = cljs.core.first(arglist__28229);
arglist__28229 = cljs.core.next(arglist__28229);
var name = cljs.core.first(arglist__28229);
var value = cljs.core.rest(arglist__28229);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__28234_28238 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28235_28239 = null;var count__28236_28240 = (0);var i__28237_28241 = (0);while(true){
if((i__28237_28241 < count__28236_28240))
{var n_28242 = cljs.core._nth.call(null,chunk__28235_28239,i__28237_28241);n_28242.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28243 = seq__28234_28238;
var G__28244 = chunk__28235_28239;
var G__28245 = count__28236_28240;
var G__28246 = (i__28237_28241 + (1));
seq__28234_28238 = G__28243;
chunk__28235_28239 = G__28244;
count__28236_28240 = G__28245;
i__28237_28241 = G__28246;
continue;
}
} else
{var temp__4126__auto___28247 = cljs.core.seq.call(null,seq__28234_28238);if(temp__4126__auto___28247)
{var seq__28234_28248__$1 = temp__4126__auto___28247;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28234_28248__$1))
{var c__4410__auto___28249 = cljs.core.chunk_first.call(null,seq__28234_28248__$1);{
var G__28250 = cljs.core.chunk_rest.call(null,seq__28234_28248__$1);
var G__28251 = c__4410__auto___28249;
var G__28252 = cljs.core.count.call(null,c__4410__auto___28249);
var G__28253 = (0);
seq__28234_28238 = G__28250;
chunk__28235_28239 = G__28251;
count__28236_28240 = G__28252;
i__28237_28241 = G__28253;
continue;
}
} else
{var n_28254 = cljs.core.first.call(null,seq__28234_28248__$1);n_28254.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28255 = cljs.core.next.call(null,seq__28234_28248__$1);
var G__28256 = null;
var G__28257 = (0);
var G__28258 = (0);
seq__28234_28238 = G__28255;
chunk__28235_28239 = G__28256;
count__28236_28240 = G__28257;
i__28237_28241 = G__28258;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__28259){
var content = cljs.core.first(arglist__28259);
arglist__28259 = cljs.core.next(arglist__28259);
var name = cljs.core.first(arglist__28259);
var value = cljs.core.rest(arglist__28259);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__28264_28268 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28265_28269 = null;var count__28266_28270 = (0);var i__28267_28271 = (0);while(true){
if((i__28267_28271 < count__28266_28270))
{var n_28272 = cljs.core._nth.call(null,chunk__28265_28269,i__28267_28271);n_28272.removeAttribute(cljs.core.name.call(null,name));
{
var G__28273 = seq__28264_28268;
var G__28274 = chunk__28265_28269;
var G__28275 = count__28266_28270;
var G__28276 = (i__28267_28271 + (1));
seq__28264_28268 = G__28273;
chunk__28265_28269 = G__28274;
count__28266_28270 = G__28275;
i__28267_28271 = G__28276;
continue;
}
} else
{var temp__4126__auto___28277 = cljs.core.seq.call(null,seq__28264_28268);if(temp__4126__auto___28277)
{var seq__28264_28278__$1 = temp__4126__auto___28277;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28264_28278__$1))
{var c__4410__auto___28279 = cljs.core.chunk_first.call(null,seq__28264_28278__$1);{
var G__28280 = cljs.core.chunk_rest.call(null,seq__28264_28278__$1);
var G__28281 = c__4410__auto___28279;
var G__28282 = cljs.core.count.call(null,c__4410__auto___28279);
var G__28283 = (0);
seq__28264_28268 = G__28280;
chunk__28265_28269 = G__28281;
count__28266_28270 = G__28282;
i__28267_28271 = G__28283;
continue;
}
} else
{var n_28284 = cljs.core.first.call(null,seq__28264_28278__$1);n_28284.removeAttribute(cljs.core.name.call(null,name));
{
var G__28285 = cljs.core.next.call(null,seq__28264_28278__$1);
var G__28286 = null;
var G__28287 = (0);
var G__28288 = (0);
seq__28264_28268 = G__28285;
chunk__28265_28269 = G__28286;
count__28266_28270 = G__28287;
i__28267_28271 = G__28288;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__28290 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__28290,(0),null);var v = cljs.core.nth.call(null,vec__28290,(1),null);if(cljs.core.truth_((function (){var and__3628__auto__ = k;if(cljs.core.truth_(and__3628__auto__))
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
return (function (p1__28291_SHARP_){var attr = attrs__$1.item(p1__28291_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__28298_28304 = cljs.core.seq.call(null,styles);var chunk__28299_28305 = null;var count__28300_28306 = (0);var i__28301_28307 = (0);while(true){
if((i__28301_28307 < count__28300_28306))
{var vec__28302_28308 = cljs.core._nth.call(null,chunk__28299_28305,i__28301_28307);var name_28309 = cljs.core.nth.call(null,vec__28302_28308,(0),null);var value_28310 = cljs.core.nth.call(null,vec__28302_28308,(1),null);domina.set_style_BANG_.call(null,content,name_28309,value_28310);
{
var G__28311 = seq__28298_28304;
var G__28312 = chunk__28299_28305;
var G__28313 = count__28300_28306;
var G__28314 = (i__28301_28307 + (1));
seq__28298_28304 = G__28311;
chunk__28299_28305 = G__28312;
count__28300_28306 = G__28313;
i__28301_28307 = G__28314;
continue;
}
} else
{var temp__4126__auto___28315 = cljs.core.seq.call(null,seq__28298_28304);if(temp__4126__auto___28315)
{var seq__28298_28316__$1 = temp__4126__auto___28315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28298_28316__$1))
{var c__4410__auto___28317 = cljs.core.chunk_first.call(null,seq__28298_28316__$1);{
var G__28318 = cljs.core.chunk_rest.call(null,seq__28298_28316__$1);
var G__28319 = c__4410__auto___28317;
var G__28320 = cljs.core.count.call(null,c__4410__auto___28317);
var G__28321 = (0);
seq__28298_28304 = G__28318;
chunk__28299_28305 = G__28319;
count__28300_28306 = G__28320;
i__28301_28307 = G__28321;
continue;
}
} else
{var vec__28303_28322 = cljs.core.first.call(null,seq__28298_28316__$1);var name_28323 = cljs.core.nth.call(null,vec__28303_28322,(0),null);var value_28324 = cljs.core.nth.call(null,vec__28303_28322,(1),null);domina.set_style_BANG_.call(null,content,name_28323,value_28324);
{
var G__28325 = cljs.core.next.call(null,seq__28298_28316__$1);
var G__28326 = null;
var G__28327 = (0);
var G__28328 = (0);
seq__28298_28304 = G__28325;
chunk__28299_28305 = G__28326;
count__28300_28306 = G__28327;
i__28301_28307 = G__28328;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__28335_28341 = cljs.core.seq.call(null,attrs);var chunk__28336_28342 = null;var count__28337_28343 = (0);var i__28338_28344 = (0);while(true){
if((i__28338_28344 < count__28337_28343))
{var vec__28339_28345 = cljs.core._nth.call(null,chunk__28336_28342,i__28338_28344);var name_28346 = cljs.core.nth.call(null,vec__28339_28345,(0),null);var value_28347 = cljs.core.nth.call(null,vec__28339_28345,(1),null);domina.set_attr_BANG_.call(null,content,name_28346,value_28347);
{
var G__28348 = seq__28335_28341;
var G__28349 = chunk__28336_28342;
var G__28350 = count__28337_28343;
var G__28351 = (i__28338_28344 + (1));
seq__28335_28341 = G__28348;
chunk__28336_28342 = G__28349;
count__28337_28343 = G__28350;
i__28338_28344 = G__28351;
continue;
}
} else
{var temp__4126__auto___28352 = cljs.core.seq.call(null,seq__28335_28341);if(temp__4126__auto___28352)
{var seq__28335_28353__$1 = temp__4126__auto___28352;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28335_28353__$1))
{var c__4410__auto___28354 = cljs.core.chunk_first.call(null,seq__28335_28353__$1);{
var G__28355 = cljs.core.chunk_rest.call(null,seq__28335_28353__$1);
var G__28356 = c__4410__auto___28354;
var G__28357 = cljs.core.count.call(null,c__4410__auto___28354);
var G__28358 = (0);
seq__28335_28341 = G__28355;
chunk__28336_28342 = G__28356;
count__28337_28343 = G__28357;
i__28338_28344 = G__28358;
continue;
}
} else
{var vec__28340_28359 = cljs.core.first.call(null,seq__28335_28353__$1);var name_28360 = cljs.core.nth.call(null,vec__28340_28359,(0),null);var value_28361 = cljs.core.nth.call(null,vec__28340_28359,(1),null);domina.set_attr_BANG_.call(null,content,name_28360,value_28361);
{
var G__28362 = cljs.core.next.call(null,seq__28335_28353__$1);
var G__28363 = null;
var G__28364 = (0);
var G__28365 = (0);
seq__28335_28341 = G__28362;
chunk__28336_28342 = G__28363;
count__28337_28343 = G__28364;
i__28338_28344 = G__28365;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__28370_28374 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28371_28375 = null;var count__28372_28376 = (0);var i__28373_28377 = (0);while(true){
if((i__28373_28377 < count__28372_28376))
{var node_28378 = cljs.core._nth.call(null,chunk__28371_28375,i__28373_28377);goog.dom.classes.add(node_28378,class$);
{
var G__28379 = seq__28370_28374;
var G__28380 = chunk__28371_28375;
var G__28381 = count__28372_28376;
var G__28382 = (i__28373_28377 + (1));
seq__28370_28374 = G__28379;
chunk__28371_28375 = G__28380;
count__28372_28376 = G__28381;
i__28373_28377 = G__28382;
continue;
}
} else
{var temp__4126__auto___28383 = cljs.core.seq.call(null,seq__28370_28374);if(temp__4126__auto___28383)
{var seq__28370_28384__$1 = temp__4126__auto___28383;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28370_28384__$1))
{var c__4410__auto___28385 = cljs.core.chunk_first.call(null,seq__28370_28384__$1);{
var G__28386 = cljs.core.chunk_rest.call(null,seq__28370_28384__$1);
var G__28387 = c__4410__auto___28385;
var G__28388 = cljs.core.count.call(null,c__4410__auto___28385);
var G__28389 = (0);
seq__28370_28374 = G__28386;
chunk__28371_28375 = G__28387;
count__28372_28376 = G__28388;
i__28373_28377 = G__28389;
continue;
}
} else
{var node_28390 = cljs.core.first.call(null,seq__28370_28384__$1);goog.dom.classes.add(node_28390,class$);
{
var G__28391 = cljs.core.next.call(null,seq__28370_28384__$1);
var G__28392 = null;
var G__28393 = (0);
var G__28394 = (0);
seq__28370_28374 = G__28391;
chunk__28371_28375 = G__28392;
count__28372_28376 = G__28393;
i__28373_28377 = G__28394;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__28399_28403 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28400_28404 = null;var count__28401_28405 = (0);var i__28402_28406 = (0);while(true){
if((i__28402_28406 < count__28401_28405))
{var node_28407 = cljs.core._nth.call(null,chunk__28400_28404,i__28402_28406);goog.dom.classes.remove(node_28407,class$);
{
var G__28408 = seq__28399_28403;
var G__28409 = chunk__28400_28404;
var G__28410 = count__28401_28405;
var G__28411 = (i__28402_28406 + (1));
seq__28399_28403 = G__28408;
chunk__28400_28404 = G__28409;
count__28401_28405 = G__28410;
i__28402_28406 = G__28411;
continue;
}
} else
{var temp__4126__auto___28412 = cljs.core.seq.call(null,seq__28399_28403);if(temp__4126__auto___28412)
{var seq__28399_28413__$1 = temp__4126__auto___28412;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28399_28413__$1))
{var c__4410__auto___28414 = cljs.core.chunk_first.call(null,seq__28399_28413__$1);{
var G__28415 = cljs.core.chunk_rest.call(null,seq__28399_28413__$1);
var G__28416 = c__4410__auto___28414;
var G__28417 = cljs.core.count.call(null,c__4410__auto___28414);
var G__28418 = (0);
seq__28399_28403 = G__28415;
chunk__28400_28404 = G__28416;
count__28401_28405 = G__28417;
i__28402_28406 = G__28418;
continue;
}
} else
{var node_28419 = cljs.core.first.call(null,seq__28399_28413__$1);goog.dom.classes.remove(node_28419,class$);
{
var G__28420 = cljs.core.next.call(null,seq__28399_28413__$1);
var G__28421 = null;
var G__28422 = (0);
var G__28423 = (0);
seq__28399_28403 = G__28420;
chunk__28400_28404 = G__28421;
count__28401_28405 = G__28422;
i__28402_28406 = G__28423;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__28428_28432 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28429_28433 = null;var count__28430_28434 = (0);var i__28431_28435 = (0);while(true){
if((i__28431_28435 < count__28430_28434))
{var node_28436 = cljs.core._nth.call(null,chunk__28429_28433,i__28431_28435);goog.dom.classes.toggle(node_28436,class$);
{
var G__28437 = seq__28428_28432;
var G__28438 = chunk__28429_28433;
var G__28439 = count__28430_28434;
var G__28440 = (i__28431_28435 + (1));
seq__28428_28432 = G__28437;
chunk__28429_28433 = G__28438;
count__28430_28434 = G__28439;
i__28431_28435 = G__28440;
continue;
}
} else
{var temp__4126__auto___28441 = cljs.core.seq.call(null,seq__28428_28432);if(temp__4126__auto___28441)
{var seq__28428_28442__$1 = temp__4126__auto___28441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28428_28442__$1))
{var c__4410__auto___28443 = cljs.core.chunk_first.call(null,seq__28428_28442__$1);{
var G__28444 = cljs.core.chunk_rest.call(null,seq__28428_28442__$1);
var G__28445 = c__4410__auto___28443;
var G__28446 = cljs.core.count.call(null,c__4410__auto___28443);
var G__28447 = (0);
seq__28428_28432 = G__28444;
chunk__28429_28433 = G__28445;
count__28430_28434 = G__28446;
i__28431_28435 = G__28447;
continue;
}
} else
{var node_28448 = cljs.core.first.call(null,seq__28428_28442__$1);goog.dom.classes.toggle(node_28448,class$);
{
var G__28449 = cljs.core.next.call(null,seq__28428_28442__$1);
var G__28450 = null;
var G__28451 = (0);
var G__28452 = (0);
seq__28428_28432 = G__28449;
chunk__28429_28433 = G__28450;
count__28430_28434 = G__28451;
i__28431_28435 = G__28452;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28461__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__28457_28462 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28458_28463 = null;var count__28459_28464 = (0);var i__28460_28465 = (0);while(true){
if((i__28460_28465 < count__28459_28464))
{var node_28466 = cljs.core._nth.call(null,chunk__28458_28463,i__28460_28465);goog.dom.classes.set(node_28466,classes_28461__$1);
{
var G__28467 = seq__28457_28462;
var G__28468 = chunk__28458_28463;
var G__28469 = count__28459_28464;
var G__28470 = (i__28460_28465 + (1));
seq__28457_28462 = G__28467;
chunk__28458_28463 = G__28468;
count__28459_28464 = G__28469;
i__28460_28465 = G__28470;
continue;
}
} else
{var temp__4126__auto___28471 = cljs.core.seq.call(null,seq__28457_28462);if(temp__4126__auto___28471)
{var seq__28457_28472__$1 = temp__4126__auto___28471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28457_28472__$1))
{var c__4410__auto___28473 = cljs.core.chunk_first.call(null,seq__28457_28472__$1);{
var G__28474 = cljs.core.chunk_rest.call(null,seq__28457_28472__$1);
var G__28475 = c__4410__auto___28473;
var G__28476 = cljs.core.count.call(null,c__4410__auto___28473);
var G__28477 = (0);
seq__28457_28462 = G__28474;
chunk__28458_28463 = G__28475;
count__28459_28464 = G__28476;
i__28460_28465 = G__28477;
continue;
}
} else
{var node_28478 = cljs.core.first.call(null,seq__28457_28472__$1);goog.dom.classes.set(node_28478,classes_28461__$1);
{
var G__28479 = cljs.core.next.call(null,seq__28457_28472__$1);
var G__28480 = null;
var G__28481 = (0);
var G__28482 = (0);
seq__28457_28462 = G__28479;
chunk__28458_28463 = G__28480;
count__28459_28464 = G__28481;
i__28460_28465 = G__28482;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28487_28491 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28488_28492 = null;var count__28489_28493 = (0);var i__28490_28494 = (0);while(true){
if((i__28490_28494 < count__28489_28493))
{var node_28495 = cljs.core._nth.call(null,chunk__28488_28492,i__28490_28494);goog.dom.setTextContent(node_28495,value);
{
var G__28496 = seq__28487_28491;
var G__28497 = chunk__28488_28492;
var G__28498 = count__28489_28493;
var G__28499 = (i__28490_28494 + (1));
seq__28487_28491 = G__28496;
chunk__28488_28492 = G__28497;
count__28489_28493 = G__28498;
i__28490_28494 = G__28499;
continue;
}
} else
{var temp__4126__auto___28500 = cljs.core.seq.call(null,seq__28487_28491);if(temp__4126__auto___28500)
{var seq__28487_28501__$1 = temp__4126__auto___28500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28487_28501__$1))
{var c__4410__auto___28502 = cljs.core.chunk_first.call(null,seq__28487_28501__$1);{
var G__28503 = cljs.core.chunk_rest.call(null,seq__28487_28501__$1);
var G__28504 = c__4410__auto___28502;
var G__28505 = cljs.core.count.call(null,c__4410__auto___28502);
var G__28506 = (0);
seq__28487_28491 = G__28503;
chunk__28488_28492 = G__28504;
count__28489_28493 = G__28505;
i__28490_28494 = G__28506;
continue;
}
} else
{var node_28507 = cljs.core.first.call(null,seq__28487_28501__$1);goog.dom.setTextContent(node_28507,value);
{
var G__28508 = cljs.core.next.call(null,seq__28487_28501__$1);
var G__28509 = null;
var G__28510 = (0);
var G__28511 = (0);
seq__28487_28491 = G__28508;
chunk__28488_28492 = G__28509;
count__28489_28493 = G__28510;
i__28490_28494 = G__28511;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28516_28520 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28517_28521 = null;var count__28518_28522 = (0);var i__28519_28523 = (0);while(true){
if((i__28519_28523 < count__28518_28522))
{var node_28524 = cljs.core._nth.call(null,chunk__28517_28521,i__28519_28523);goog.dom.forms.setValue(node_28524,value);
{
var G__28525 = seq__28516_28520;
var G__28526 = chunk__28517_28521;
var G__28527 = count__28518_28522;
var G__28528 = (i__28519_28523 + (1));
seq__28516_28520 = G__28525;
chunk__28517_28521 = G__28526;
count__28518_28522 = G__28527;
i__28519_28523 = G__28528;
continue;
}
} else
{var temp__4126__auto___28529 = cljs.core.seq.call(null,seq__28516_28520);if(temp__4126__auto___28529)
{var seq__28516_28530__$1 = temp__4126__auto___28529;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28516_28530__$1))
{var c__4410__auto___28531 = cljs.core.chunk_first.call(null,seq__28516_28530__$1);{
var G__28532 = cljs.core.chunk_rest.call(null,seq__28516_28530__$1);
var G__28533 = c__4410__auto___28531;
var G__28534 = cljs.core.count.call(null,c__4410__auto___28531);
var G__28535 = (0);
seq__28516_28520 = G__28532;
chunk__28517_28521 = G__28533;
count__28518_28522 = G__28534;
i__28519_28523 = G__28535;
continue;
}
} else
{var node_28536 = cljs.core.first.call(null,seq__28516_28530__$1);goog.dom.forms.setValue(node_28536,value);
{
var G__28537 = cljs.core.next.call(null,seq__28516_28530__$1);
var G__28538 = null;
var G__28539 = (0);
var G__28540 = (0);
seq__28516_28520 = G__28537;
chunk__28517_28521 = G__28538;
count__28518_28522 = G__28539;
i__28519_28523 = G__28540;
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
{var value_28551 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28547_28552 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28548_28553 = null;var count__28549_28554 = (0);var i__28550_28555 = (0);while(true){
if((i__28550_28555 < count__28549_28554))
{var node_28556 = cljs.core._nth.call(null,chunk__28548_28553,i__28550_28555);node_28556.innerHTML = value_28551;
{
var G__28557 = seq__28547_28552;
var G__28558 = chunk__28548_28553;
var G__28559 = count__28549_28554;
var G__28560 = (i__28550_28555 + (1));
seq__28547_28552 = G__28557;
chunk__28548_28553 = G__28558;
count__28549_28554 = G__28559;
i__28550_28555 = G__28560;
continue;
}
} else
{var temp__4126__auto___28561 = cljs.core.seq.call(null,seq__28547_28552);if(temp__4126__auto___28561)
{var seq__28547_28562__$1 = temp__4126__auto___28561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28547_28562__$1))
{var c__4410__auto___28563 = cljs.core.chunk_first.call(null,seq__28547_28562__$1);{
var G__28564 = cljs.core.chunk_rest.call(null,seq__28547_28562__$1);
var G__28565 = c__4410__auto___28563;
var G__28566 = cljs.core.count.call(null,c__4410__auto___28563);
var G__28567 = (0);
seq__28547_28552 = G__28564;
chunk__28548_28553 = G__28565;
count__28549_28554 = G__28566;
i__28550_28555 = G__28567;
continue;
}
} else
{var node_28568 = cljs.core.first.call(null,seq__28547_28562__$1);node_28568.innerHTML = value_28551;
{
var G__28569 = cljs.core.next.call(null,seq__28547_28562__$1);
var G__28570 = null;
var G__28571 = (0);
var G__28572 = (0);
seq__28547_28552 = G__28569;
chunk__28548_28553 = G__28570;
count__28549_28554 = G__28571;
i__28550_28555 = G__28572;
continue;
}
}
} else
{}
}
break;
}
}catch (e28546){if((e28546 instanceof Error))
{var e_28573 = e28546;domina.replace_children_BANG_.call(null,content,value_28551);
} else
{throw e28546;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28580_28584 = cljs.core.seq.call(null,children);var chunk__28581_28585 = null;var count__28582_28586 = (0);var i__28583_28587 = (0);while(true){
if((i__28583_28587 < count__28582_28586))
{var child_28588 = cljs.core._nth.call(null,chunk__28581_28585,i__28583_28587);frag.appendChild(child_28588);
{
var G__28589 = seq__28580_28584;
var G__28590 = chunk__28581_28585;
var G__28591 = count__28582_28586;
var G__28592 = (i__28583_28587 + (1));
seq__28580_28584 = G__28589;
chunk__28581_28585 = G__28590;
count__28582_28586 = G__28591;
i__28583_28587 = G__28592;
continue;
}
} else
{var temp__4126__auto___28593 = cljs.core.seq.call(null,seq__28580_28584);if(temp__4126__auto___28593)
{var seq__28580_28594__$1 = temp__4126__auto___28593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28580_28594__$1))
{var c__4410__auto___28595 = cljs.core.chunk_first.call(null,seq__28580_28594__$1);{
var G__28596 = cljs.core.chunk_rest.call(null,seq__28580_28594__$1);
var G__28597 = c__4410__auto___28595;
var G__28598 = cljs.core.count.call(null,c__4410__auto___28595);
var G__28599 = (0);
seq__28580_28584 = G__28596;
chunk__28581_28585 = G__28597;
count__28582_28586 = G__28598;
i__28583_28587 = G__28599;
continue;
}
} else
{var child_28600 = cljs.core.first.call(null,seq__28580_28594__$1);frag.appendChild(child_28600);
{
var G__28601 = cljs.core.next.call(null,seq__28580_28594__$1);
var G__28602 = null;
var G__28603 = (0);
var G__28604 = (0);
seq__28580_28584 = G__28601;
chunk__28581_28585 = G__28602;
count__28582_28586 = G__28603;
i__28583_28587 = G__28604;
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
return (function (p1__28574_SHARP_,p2__28575_SHARP_){return f.call(null,p1__28574_SHARP_,p2__28575_SHARP_);
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
{if((function (){var G__28606 = list_thing;if(G__28606)
{var bit__4304__auto__ = (G__28606.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__28606.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28606.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28606);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28606);
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
{if((function (){var G__28607 = content;if(G__28607)
{var bit__4304__auto__ = (G__28607.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__28607.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28607.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28607);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28607);
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
{if((function (){var G__28608 = content;if(G__28608)
{var bit__4304__auto__ = (G__28608.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__28608.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28608.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28608);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28608);
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
