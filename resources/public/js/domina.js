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
var opt_wrapper_13176 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_13177 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_13178 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_13178,opt_wrapper_13176,table_section_wrapper_13177,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_13176,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_13177,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_13177,cell_wrapper_13178,table_section_wrapper_13177,table_section_wrapper_13177]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3628__auto__ = div.firstChild;if(cljs.core.truth_(and__3628__auto__))
{return div.firstChild.childNodes;
} else
{return and__3628__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__13183 = cljs.core.seq.call(null,tbody);var chunk__13184 = null;var count__13185 = (0);var i__13186 = (0);while(true){
if((i__13186 < count__13185))
{var child = cljs.core._nth.call(null,chunk__13184,i__13186);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__13187 = seq__13183;
var G__13188 = chunk__13184;
var G__13189 = count__13185;
var G__13190 = (i__13186 + (1));
seq__13183 = G__13187;
chunk__13184 = G__13188;
count__13185 = G__13189;
i__13186 = G__13190;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13183);if(temp__4126__auto__)
{var seq__13183__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13183__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__13183__$1);{
var G__13191 = cljs.core.chunk_rest.call(null,seq__13183__$1);
var G__13192 = c__4410__auto__;
var G__13193 = cljs.core.count.call(null,c__4410__auto__);
var G__13194 = (0);
seq__13183 = G__13191;
chunk__13184 = G__13192;
count__13185 = G__13193;
i__13186 = G__13194;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__13183__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__13195 = cljs.core.next.call(null,seq__13183__$1);
var G__13196 = null;
var G__13197 = (0);
var G__13198 = (0);
seq__13183 = G__13195;
chunk__13184 = G__13196;
count__13185 = G__13197;
i__13186 = G__13198;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__13200 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__13200,(0),null);var start_wrap = cljs.core.nth.call(null,vec__13200,(1),null);var end_wrap = cljs.core.nth.call(null,vec__13200,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__13201 = wrapper.lastChild;
var G__13202 = (level - (1));
wrapper = G__13201;
level = G__13202;
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
domina.DomContent = (function (){var obj13204 = {};return obj13204;
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
log_debug.cljs$lang$applyTo = (function (arglist__13205){
var mesg = cljs.core.seq(arglist__13205);
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
log.cljs$lang$applyTo = (function (arglist__13206){
var mesg = cljs.core.seq(arglist__13206);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__13207){
var contents = cljs.core.seq(arglist__13207);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__13208_SHARP_){return p1__13208_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__13209_SHARP_,p2__13210_SHARP_){return goog.dom.insertChildAt(p1__13209_SHARP_,p2__13210_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__13212_SHARP_,p2__13211_SHARP_){return goog.dom.insertSiblingBefore(p2__13211_SHARP_,p1__13212_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__13214_SHARP_,p2__13213_SHARP_){return goog.dom.insertSiblingAfter(p2__13213_SHARP_,p1__13214_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__13216_SHARP_,p2__13215_SHARP_){return goog.dom.replaceNode(p2__13215_SHARP_,p1__13216_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__13221_13225 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13222_13226 = null;var count__13223_13227 = (0);var i__13224_13228 = (0);while(true){
if((i__13224_13228 < count__13223_13227))
{var n_13229 = cljs.core._nth.call(null,chunk__13222_13226,i__13224_13228);goog.style.setStyle(n_13229,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13230 = seq__13221_13225;
var G__13231 = chunk__13222_13226;
var G__13232 = count__13223_13227;
var G__13233 = (i__13224_13228 + (1));
seq__13221_13225 = G__13230;
chunk__13222_13226 = G__13231;
count__13223_13227 = G__13232;
i__13224_13228 = G__13233;
continue;
}
} else
{var temp__4126__auto___13234 = cljs.core.seq.call(null,seq__13221_13225);if(temp__4126__auto___13234)
{var seq__13221_13235__$1 = temp__4126__auto___13234;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13221_13235__$1))
{var c__4410__auto___13236 = cljs.core.chunk_first.call(null,seq__13221_13235__$1);{
var G__13237 = cljs.core.chunk_rest.call(null,seq__13221_13235__$1);
var G__13238 = c__4410__auto___13236;
var G__13239 = cljs.core.count.call(null,c__4410__auto___13236);
var G__13240 = (0);
seq__13221_13225 = G__13237;
chunk__13222_13226 = G__13238;
count__13223_13227 = G__13239;
i__13224_13228 = G__13240;
continue;
}
} else
{var n_13241 = cljs.core.first.call(null,seq__13221_13235__$1);goog.style.setStyle(n_13241,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13242 = cljs.core.next.call(null,seq__13221_13235__$1);
var G__13243 = null;
var G__13244 = (0);
var G__13245 = (0);
seq__13221_13225 = G__13242;
chunk__13222_13226 = G__13243;
count__13223_13227 = G__13244;
i__13224_13228 = G__13245;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13246){
var content = cljs.core.first(arglist__13246);
arglist__13246 = cljs.core.next(arglist__13246);
var name = cljs.core.first(arglist__13246);
var value = cljs.core.rest(arglist__13246);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__13251_13255 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13252_13256 = null;var count__13253_13257 = (0);var i__13254_13258 = (0);while(true){
if((i__13254_13258 < count__13253_13257))
{var n_13259 = cljs.core._nth.call(null,chunk__13252_13256,i__13254_13258);n_13259.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13260 = seq__13251_13255;
var G__13261 = chunk__13252_13256;
var G__13262 = count__13253_13257;
var G__13263 = (i__13254_13258 + (1));
seq__13251_13255 = G__13260;
chunk__13252_13256 = G__13261;
count__13253_13257 = G__13262;
i__13254_13258 = G__13263;
continue;
}
} else
{var temp__4126__auto___13264 = cljs.core.seq.call(null,seq__13251_13255);if(temp__4126__auto___13264)
{var seq__13251_13265__$1 = temp__4126__auto___13264;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13251_13265__$1))
{var c__4410__auto___13266 = cljs.core.chunk_first.call(null,seq__13251_13265__$1);{
var G__13267 = cljs.core.chunk_rest.call(null,seq__13251_13265__$1);
var G__13268 = c__4410__auto___13266;
var G__13269 = cljs.core.count.call(null,c__4410__auto___13266);
var G__13270 = (0);
seq__13251_13255 = G__13267;
chunk__13252_13256 = G__13268;
count__13253_13257 = G__13269;
i__13254_13258 = G__13270;
continue;
}
} else
{var n_13271 = cljs.core.first.call(null,seq__13251_13265__$1);n_13271.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__13272 = cljs.core.next.call(null,seq__13251_13265__$1);
var G__13273 = null;
var G__13274 = (0);
var G__13275 = (0);
seq__13251_13255 = G__13272;
chunk__13252_13256 = G__13273;
count__13253_13257 = G__13274;
i__13254_13258 = G__13275;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__13276){
var content = cljs.core.first(arglist__13276);
arglist__13276 = cljs.core.next(arglist__13276);
var name = cljs.core.first(arglist__13276);
var value = cljs.core.rest(arglist__13276);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__13281_13285 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13282_13286 = null;var count__13283_13287 = (0);var i__13284_13288 = (0);while(true){
if((i__13284_13288 < count__13283_13287))
{var n_13289 = cljs.core._nth.call(null,chunk__13282_13286,i__13284_13288);n_13289.removeAttribute(cljs.core.name.call(null,name));
{
var G__13290 = seq__13281_13285;
var G__13291 = chunk__13282_13286;
var G__13292 = count__13283_13287;
var G__13293 = (i__13284_13288 + (1));
seq__13281_13285 = G__13290;
chunk__13282_13286 = G__13291;
count__13283_13287 = G__13292;
i__13284_13288 = G__13293;
continue;
}
} else
{var temp__4126__auto___13294 = cljs.core.seq.call(null,seq__13281_13285);if(temp__4126__auto___13294)
{var seq__13281_13295__$1 = temp__4126__auto___13294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13281_13295__$1))
{var c__4410__auto___13296 = cljs.core.chunk_first.call(null,seq__13281_13295__$1);{
var G__13297 = cljs.core.chunk_rest.call(null,seq__13281_13295__$1);
var G__13298 = c__4410__auto___13296;
var G__13299 = cljs.core.count.call(null,c__4410__auto___13296);
var G__13300 = (0);
seq__13281_13285 = G__13297;
chunk__13282_13286 = G__13298;
count__13283_13287 = G__13299;
i__13284_13288 = G__13300;
continue;
}
} else
{var n_13301 = cljs.core.first.call(null,seq__13281_13295__$1);n_13301.removeAttribute(cljs.core.name.call(null,name));
{
var G__13302 = cljs.core.next.call(null,seq__13281_13295__$1);
var G__13303 = null;
var G__13304 = (0);
var G__13305 = (0);
seq__13281_13285 = G__13302;
chunk__13282_13286 = G__13303;
count__13283_13287 = G__13304;
i__13284_13288 = G__13305;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__13307 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__13307,(0),null);var v = cljs.core.nth.call(null,vec__13307,(1),null);if(cljs.core.truth_((function (){var and__3628__auto__ = k;if(cljs.core.truth_(and__3628__auto__))
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
return (function (p1__13308_SHARP_){var attr = attrs__$1.item(p1__13308_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__13315_13321 = cljs.core.seq.call(null,styles);var chunk__13316_13322 = null;var count__13317_13323 = (0);var i__13318_13324 = (0);while(true){
if((i__13318_13324 < count__13317_13323))
{var vec__13319_13325 = cljs.core._nth.call(null,chunk__13316_13322,i__13318_13324);var name_13326 = cljs.core.nth.call(null,vec__13319_13325,(0),null);var value_13327 = cljs.core.nth.call(null,vec__13319_13325,(1),null);domina.set_style_BANG_.call(null,content,name_13326,value_13327);
{
var G__13328 = seq__13315_13321;
var G__13329 = chunk__13316_13322;
var G__13330 = count__13317_13323;
var G__13331 = (i__13318_13324 + (1));
seq__13315_13321 = G__13328;
chunk__13316_13322 = G__13329;
count__13317_13323 = G__13330;
i__13318_13324 = G__13331;
continue;
}
} else
{var temp__4126__auto___13332 = cljs.core.seq.call(null,seq__13315_13321);if(temp__4126__auto___13332)
{var seq__13315_13333__$1 = temp__4126__auto___13332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13315_13333__$1))
{var c__4410__auto___13334 = cljs.core.chunk_first.call(null,seq__13315_13333__$1);{
var G__13335 = cljs.core.chunk_rest.call(null,seq__13315_13333__$1);
var G__13336 = c__4410__auto___13334;
var G__13337 = cljs.core.count.call(null,c__4410__auto___13334);
var G__13338 = (0);
seq__13315_13321 = G__13335;
chunk__13316_13322 = G__13336;
count__13317_13323 = G__13337;
i__13318_13324 = G__13338;
continue;
}
} else
{var vec__13320_13339 = cljs.core.first.call(null,seq__13315_13333__$1);var name_13340 = cljs.core.nth.call(null,vec__13320_13339,(0),null);var value_13341 = cljs.core.nth.call(null,vec__13320_13339,(1),null);domina.set_style_BANG_.call(null,content,name_13340,value_13341);
{
var G__13342 = cljs.core.next.call(null,seq__13315_13333__$1);
var G__13343 = null;
var G__13344 = (0);
var G__13345 = (0);
seq__13315_13321 = G__13342;
chunk__13316_13322 = G__13343;
count__13317_13323 = G__13344;
i__13318_13324 = G__13345;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__13352_13358 = cljs.core.seq.call(null,attrs);var chunk__13353_13359 = null;var count__13354_13360 = (0);var i__13355_13361 = (0);while(true){
if((i__13355_13361 < count__13354_13360))
{var vec__13356_13362 = cljs.core._nth.call(null,chunk__13353_13359,i__13355_13361);var name_13363 = cljs.core.nth.call(null,vec__13356_13362,(0),null);var value_13364 = cljs.core.nth.call(null,vec__13356_13362,(1),null);domina.set_attr_BANG_.call(null,content,name_13363,value_13364);
{
var G__13365 = seq__13352_13358;
var G__13366 = chunk__13353_13359;
var G__13367 = count__13354_13360;
var G__13368 = (i__13355_13361 + (1));
seq__13352_13358 = G__13365;
chunk__13353_13359 = G__13366;
count__13354_13360 = G__13367;
i__13355_13361 = G__13368;
continue;
}
} else
{var temp__4126__auto___13369 = cljs.core.seq.call(null,seq__13352_13358);if(temp__4126__auto___13369)
{var seq__13352_13370__$1 = temp__4126__auto___13369;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13352_13370__$1))
{var c__4410__auto___13371 = cljs.core.chunk_first.call(null,seq__13352_13370__$1);{
var G__13372 = cljs.core.chunk_rest.call(null,seq__13352_13370__$1);
var G__13373 = c__4410__auto___13371;
var G__13374 = cljs.core.count.call(null,c__4410__auto___13371);
var G__13375 = (0);
seq__13352_13358 = G__13372;
chunk__13353_13359 = G__13373;
count__13354_13360 = G__13374;
i__13355_13361 = G__13375;
continue;
}
} else
{var vec__13357_13376 = cljs.core.first.call(null,seq__13352_13370__$1);var name_13377 = cljs.core.nth.call(null,vec__13357_13376,(0),null);var value_13378 = cljs.core.nth.call(null,vec__13357_13376,(1),null);domina.set_attr_BANG_.call(null,content,name_13377,value_13378);
{
var G__13379 = cljs.core.next.call(null,seq__13352_13370__$1);
var G__13380 = null;
var G__13381 = (0);
var G__13382 = (0);
seq__13352_13358 = G__13379;
chunk__13353_13359 = G__13380;
count__13354_13360 = G__13381;
i__13355_13361 = G__13382;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__13387_13391 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13388_13392 = null;var count__13389_13393 = (0);var i__13390_13394 = (0);while(true){
if((i__13390_13394 < count__13389_13393))
{var node_13395 = cljs.core._nth.call(null,chunk__13388_13392,i__13390_13394);goog.dom.classes.add(node_13395,class$);
{
var G__13396 = seq__13387_13391;
var G__13397 = chunk__13388_13392;
var G__13398 = count__13389_13393;
var G__13399 = (i__13390_13394 + (1));
seq__13387_13391 = G__13396;
chunk__13388_13392 = G__13397;
count__13389_13393 = G__13398;
i__13390_13394 = G__13399;
continue;
}
} else
{var temp__4126__auto___13400 = cljs.core.seq.call(null,seq__13387_13391);if(temp__4126__auto___13400)
{var seq__13387_13401__$1 = temp__4126__auto___13400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13387_13401__$1))
{var c__4410__auto___13402 = cljs.core.chunk_first.call(null,seq__13387_13401__$1);{
var G__13403 = cljs.core.chunk_rest.call(null,seq__13387_13401__$1);
var G__13404 = c__4410__auto___13402;
var G__13405 = cljs.core.count.call(null,c__4410__auto___13402);
var G__13406 = (0);
seq__13387_13391 = G__13403;
chunk__13388_13392 = G__13404;
count__13389_13393 = G__13405;
i__13390_13394 = G__13406;
continue;
}
} else
{var node_13407 = cljs.core.first.call(null,seq__13387_13401__$1);goog.dom.classes.add(node_13407,class$);
{
var G__13408 = cljs.core.next.call(null,seq__13387_13401__$1);
var G__13409 = null;
var G__13410 = (0);
var G__13411 = (0);
seq__13387_13391 = G__13408;
chunk__13388_13392 = G__13409;
count__13389_13393 = G__13410;
i__13390_13394 = G__13411;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__13416_13420 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13417_13421 = null;var count__13418_13422 = (0);var i__13419_13423 = (0);while(true){
if((i__13419_13423 < count__13418_13422))
{var node_13424 = cljs.core._nth.call(null,chunk__13417_13421,i__13419_13423);goog.dom.classes.remove(node_13424,class$);
{
var G__13425 = seq__13416_13420;
var G__13426 = chunk__13417_13421;
var G__13427 = count__13418_13422;
var G__13428 = (i__13419_13423 + (1));
seq__13416_13420 = G__13425;
chunk__13417_13421 = G__13426;
count__13418_13422 = G__13427;
i__13419_13423 = G__13428;
continue;
}
} else
{var temp__4126__auto___13429 = cljs.core.seq.call(null,seq__13416_13420);if(temp__4126__auto___13429)
{var seq__13416_13430__$1 = temp__4126__auto___13429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13416_13430__$1))
{var c__4410__auto___13431 = cljs.core.chunk_first.call(null,seq__13416_13430__$1);{
var G__13432 = cljs.core.chunk_rest.call(null,seq__13416_13430__$1);
var G__13433 = c__4410__auto___13431;
var G__13434 = cljs.core.count.call(null,c__4410__auto___13431);
var G__13435 = (0);
seq__13416_13420 = G__13432;
chunk__13417_13421 = G__13433;
count__13418_13422 = G__13434;
i__13419_13423 = G__13435;
continue;
}
} else
{var node_13436 = cljs.core.first.call(null,seq__13416_13430__$1);goog.dom.classes.remove(node_13436,class$);
{
var G__13437 = cljs.core.next.call(null,seq__13416_13430__$1);
var G__13438 = null;
var G__13439 = (0);
var G__13440 = (0);
seq__13416_13420 = G__13437;
chunk__13417_13421 = G__13438;
count__13418_13422 = G__13439;
i__13419_13423 = G__13440;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__13445_13449 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13446_13450 = null;var count__13447_13451 = (0);var i__13448_13452 = (0);while(true){
if((i__13448_13452 < count__13447_13451))
{var node_13453 = cljs.core._nth.call(null,chunk__13446_13450,i__13448_13452);goog.dom.classes.toggle(node_13453,class$);
{
var G__13454 = seq__13445_13449;
var G__13455 = chunk__13446_13450;
var G__13456 = count__13447_13451;
var G__13457 = (i__13448_13452 + (1));
seq__13445_13449 = G__13454;
chunk__13446_13450 = G__13455;
count__13447_13451 = G__13456;
i__13448_13452 = G__13457;
continue;
}
} else
{var temp__4126__auto___13458 = cljs.core.seq.call(null,seq__13445_13449);if(temp__4126__auto___13458)
{var seq__13445_13459__$1 = temp__4126__auto___13458;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13445_13459__$1))
{var c__4410__auto___13460 = cljs.core.chunk_first.call(null,seq__13445_13459__$1);{
var G__13461 = cljs.core.chunk_rest.call(null,seq__13445_13459__$1);
var G__13462 = c__4410__auto___13460;
var G__13463 = cljs.core.count.call(null,c__4410__auto___13460);
var G__13464 = (0);
seq__13445_13449 = G__13461;
chunk__13446_13450 = G__13462;
count__13447_13451 = G__13463;
i__13448_13452 = G__13464;
continue;
}
} else
{var node_13465 = cljs.core.first.call(null,seq__13445_13459__$1);goog.dom.classes.toggle(node_13465,class$);
{
var G__13466 = cljs.core.next.call(null,seq__13445_13459__$1);
var G__13467 = null;
var G__13468 = (0);
var G__13469 = (0);
seq__13445_13449 = G__13466;
chunk__13446_13450 = G__13467;
count__13447_13451 = G__13468;
i__13448_13452 = G__13469;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_13478__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__13474_13479 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13475_13480 = null;var count__13476_13481 = (0);var i__13477_13482 = (0);while(true){
if((i__13477_13482 < count__13476_13481))
{var node_13483 = cljs.core._nth.call(null,chunk__13475_13480,i__13477_13482);goog.dom.classes.set(node_13483,classes_13478__$1);
{
var G__13484 = seq__13474_13479;
var G__13485 = chunk__13475_13480;
var G__13486 = count__13476_13481;
var G__13487 = (i__13477_13482 + (1));
seq__13474_13479 = G__13484;
chunk__13475_13480 = G__13485;
count__13476_13481 = G__13486;
i__13477_13482 = G__13487;
continue;
}
} else
{var temp__4126__auto___13488 = cljs.core.seq.call(null,seq__13474_13479);if(temp__4126__auto___13488)
{var seq__13474_13489__$1 = temp__4126__auto___13488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13474_13489__$1))
{var c__4410__auto___13490 = cljs.core.chunk_first.call(null,seq__13474_13489__$1);{
var G__13491 = cljs.core.chunk_rest.call(null,seq__13474_13489__$1);
var G__13492 = c__4410__auto___13490;
var G__13493 = cljs.core.count.call(null,c__4410__auto___13490);
var G__13494 = (0);
seq__13474_13479 = G__13491;
chunk__13475_13480 = G__13492;
count__13476_13481 = G__13493;
i__13477_13482 = G__13494;
continue;
}
} else
{var node_13495 = cljs.core.first.call(null,seq__13474_13489__$1);goog.dom.classes.set(node_13495,classes_13478__$1);
{
var G__13496 = cljs.core.next.call(null,seq__13474_13489__$1);
var G__13497 = null;
var G__13498 = (0);
var G__13499 = (0);
seq__13474_13479 = G__13496;
chunk__13475_13480 = G__13497;
count__13476_13481 = G__13498;
i__13477_13482 = G__13499;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__13504_13508 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13505_13509 = null;var count__13506_13510 = (0);var i__13507_13511 = (0);while(true){
if((i__13507_13511 < count__13506_13510))
{var node_13512 = cljs.core._nth.call(null,chunk__13505_13509,i__13507_13511);goog.dom.setTextContent(node_13512,value);
{
var G__13513 = seq__13504_13508;
var G__13514 = chunk__13505_13509;
var G__13515 = count__13506_13510;
var G__13516 = (i__13507_13511 + (1));
seq__13504_13508 = G__13513;
chunk__13505_13509 = G__13514;
count__13506_13510 = G__13515;
i__13507_13511 = G__13516;
continue;
}
} else
{var temp__4126__auto___13517 = cljs.core.seq.call(null,seq__13504_13508);if(temp__4126__auto___13517)
{var seq__13504_13518__$1 = temp__4126__auto___13517;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13504_13518__$1))
{var c__4410__auto___13519 = cljs.core.chunk_first.call(null,seq__13504_13518__$1);{
var G__13520 = cljs.core.chunk_rest.call(null,seq__13504_13518__$1);
var G__13521 = c__4410__auto___13519;
var G__13522 = cljs.core.count.call(null,c__4410__auto___13519);
var G__13523 = (0);
seq__13504_13508 = G__13520;
chunk__13505_13509 = G__13521;
count__13506_13510 = G__13522;
i__13507_13511 = G__13523;
continue;
}
} else
{var node_13524 = cljs.core.first.call(null,seq__13504_13518__$1);goog.dom.setTextContent(node_13524,value);
{
var G__13525 = cljs.core.next.call(null,seq__13504_13518__$1);
var G__13526 = null;
var G__13527 = (0);
var G__13528 = (0);
seq__13504_13508 = G__13525;
chunk__13505_13509 = G__13526;
count__13506_13510 = G__13527;
i__13507_13511 = G__13528;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__13533_13537 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13534_13538 = null;var count__13535_13539 = (0);var i__13536_13540 = (0);while(true){
if((i__13536_13540 < count__13535_13539))
{var node_13541 = cljs.core._nth.call(null,chunk__13534_13538,i__13536_13540);goog.dom.forms.setValue(node_13541,value);
{
var G__13542 = seq__13533_13537;
var G__13543 = chunk__13534_13538;
var G__13544 = count__13535_13539;
var G__13545 = (i__13536_13540 + (1));
seq__13533_13537 = G__13542;
chunk__13534_13538 = G__13543;
count__13535_13539 = G__13544;
i__13536_13540 = G__13545;
continue;
}
} else
{var temp__4126__auto___13546 = cljs.core.seq.call(null,seq__13533_13537);if(temp__4126__auto___13546)
{var seq__13533_13547__$1 = temp__4126__auto___13546;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13533_13547__$1))
{var c__4410__auto___13548 = cljs.core.chunk_first.call(null,seq__13533_13547__$1);{
var G__13549 = cljs.core.chunk_rest.call(null,seq__13533_13547__$1);
var G__13550 = c__4410__auto___13548;
var G__13551 = cljs.core.count.call(null,c__4410__auto___13548);
var G__13552 = (0);
seq__13533_13537 = G__13549;
chunk__13534_13538 = G__13550;
count__13535_13539 = G__13551;
i__13536_13540 = G__13552;
continue;
}
} else
{var node_13553 = cljs.core.first.call(null,seq__13533_13547__$1);goog.dom.forms.setValue(node_13553,value);
{
var G__13554 = cljs.core.next.call(null,seq__13533_13547__$1);
var G__13555 = null;
var G__13556 = (0);
var G__13557 = (0);
seq__13533_13537 = G__13554;
chunk__13534_13538 = G__13555;
count__13535_13539 = G__13556;
i__13536_13540 = G__13557;
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
{var value_13568 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__13564_13569 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13565_13570 = null;var count__13566_13571 = (0);var i__13567_13572 = (0);while(true){
if((i__13567_13572 < count__13566_13571))
{var node_13573 = cljs.core._nth.call(null,chunk__13565_13570,i__13567_13572);node_13573.innerHTML = value_13568;
{
var G__13574 = seq__13564_13569;
var G__13575 = chunk__13565_13570;
var G__13576 = count__13566_13571;
var G__13577 = (i__13567_13572 + (1));
seq__13564_13569 = G__13574;
chunk__13565_13570 = G__13575;
count__13566_13571 = G__13576;
i__13567_13572 = G__13577;
continue;
}
} else
{var temp__4126__auto___13578 = cljs.core.seq.call(null,seq__13564_13569);if(temp__4126__auto___13578)
{var seq__13564_13579__$1 = temp__4126__auto___13578;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13564_13579__$1))
{var c__4410__auto___13580 = cljs.core.chunk_first.call(null,seq__13564_13579__$1);{
var G__13581 = cljs.core.chunk_rest.call(null,seq__13564_13579__$1);
var G__13582 = c__4410__auto___13580;
var G__13583 = cljs.core.count.call(null,c__4410__auto___13580);
var G__13584 = (0);
seq__13564_13569 = G__13581;
chunk__13565_13570 = G__13582;
count__13566_13571 = G__13583;
i__13567_13572 = G__13584;
continue;
}
} else
{var node_13585 = cljs.core.first.call(null,seq__13564_13579__$1);node_13585.innerHTML = value_13568;
{
var G__13586 = cljs.core.next.call(null,seq__13564_13579__$1);
var G__13587 = null;
var G__13588 = (0);
var G__13589 = (0);
seq__13564_13569 = G__13586;
chunk__13565_13570 = G__13587;
count__13566_13571 = G__13588;
i__13567_13572 = G__13589;
continue;
}
}
} else
{}
}
break;
}
}catch (e13563){if((e13563 instanceof Error))
{var e_13590 = e13563;domina.replace_children_BANG_.call(null,content,value_13568);
} else
{throw e13563;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__13597_13601 = cljs.core.seq.call(null,children);var chunk__13598_13602 = null;var count__13599_13603 = (0);var i__13600_13604 = (0);while(true){
if((i__13600_13604 < count__13599_13603))
{var child_13605 = cljs.core._nth.call(null,chunk__13598_13602,i__13600_13604);frag.appendChild(child_13605);
{
var G__13606 = seq__13597_13601;
var G__13607 = chunk__13598_13602;
var G__13608 = count__13599_13603;
var G__13609 = (i__13600_13604 + (1));
seq__13597_13601 = G__13606;
chunk__13598_13602 = G__13607;
count__13599_13603 = G__13608;
i__13600_13604 = G__13609;
continue;
}
} else
{var temp__4126__auto___13610 = cljs.core.seq.call(null,seq__13597_13601);if(temp__4126__auto___13610)
{var seq__13597_13611__$1 = temp__4126__auto___13610;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13597_13611__$1))
{var c__4410__auto___13612 = cljs.core.chunk_first.call(null,seq__13597_13611__$1);{
var G__13613 = cljs.core.chunk_rest.call(null,seq__13597_13611__$1);
var G__13614 = c__4410__auto___13612;
var G__13615 = cljs.core.count.call(null,c__4410__auto___13612);
var G__13616 = (0);
seq__13597_13601 = G__13613;
chunk__13598_13602 = G__13614;
count__13599_13603 = G__13615;
i__13600_13604 = G__13616;
continue;
}
} else
{var child_13617 = cljs.core.first.call(null,seq__13597_13611__$1);frag.appendChild(child_13617);
{
var G__13618 = cljs.core.next.call(null,seq__13597_13611__$1);
var G__13619 = null;
var G__13620 = (0);
var G__13621 = (0);
seq__13597_13601 = G__13618;
chunk__13598_13602 = G__13619;
count__13599_13603 = G__13620;
i__13600_13604 = G__13621;
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
return (function (p1__13591_SHARP_,p2__13592_SHARP_){return f.call(null,p1__13591_SHARP_,p2__13592_SHARP_);
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
{if((function (){var G__13623 = list_thing;if(G__13623)
{var bit__4304__auto__ = (G__13623.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__13623.cljs$core$ISeqable$))
{return true;
} else
{if((!G__13623.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13623);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13623);
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
{if((function (){var G__13624 = content;if(G__13624)
{var bit__4304__auto__ = (G__13624.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__13624.cljs$core$ISeqable$))
{return true;
} else
{if((!G__13624.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13624);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13624);
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
{if((function (){var G__13625 = content;if(G__13625)
{var bit__4304__auto__ = (G__13625.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__13625.cljs$core$ISeqable$))
{return true;
} else
{if((!G__13625.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13625);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13625);
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
