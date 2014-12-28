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
var opt_wrapper_20081 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_20082 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_20083 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20083,opt_wrapper_20081,table_section_wrapper_20082,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20081,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20082,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20082,cell_wrapper_20083,table_section_wrapper_20082,table_section_wrapper_20082]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3628__auto__ = div.firstChild;if(cljs.core.truth_(and__3628__auto__))
{return div.firstChild.childNodes;
} else
{return and__3628__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__20088 = cljs.core.seq.call(null,tbody);var chunk__20089 = null;var count__20090 = (0);var i__20091 = (0);while(true){
if((i__20091 < count__20090))
{var child = cljs.core._nth.call(null,chunk__20089,i__20091);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20092 = seq__20088;
var G__20093 = chunk__20089;
var G__20094 = count__20090;
var G__20095 = (i__20091 + (1));
seq__20088 = G__20092;
chunk__20089 = G__20093;
count__20090 = G__20094;
i__20091 = G__20095;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20088);if(temp__4126__auto__)
{var seq__20088__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20088__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__20088__$1);{
var G__20096 = cljs.core.chunk_rest.call(null,seq__20088__$1);
var G__20097 = c__4410__auto__;
var G__20098 = cljs.core.count.call(null,c__4410__auto__);
var G__20099 = (0);
seq__20088 = G__20096;
chunk__20089 = G__20097;
count__20090 = G__20098;
i__20091 = G__20099;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__20088__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20100 = cljs.core.next.call(null,seq__20088__$1);
var G__20101 = null;
var G__20102 = (0);
var G__20103 = (0);
seq__20088 = G__20100;
chunk__20089 = G__20101;
count__20090 = G__20102;
i__20091 = G__20103;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__20105 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__20105,(0),null);var start_wrap = cljs.core.nth.call(null,vec__20105,(1),null);var end_wrap = cljs.core.nth.call(null,vec__20105,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__20106 = wrapper.lastChild;
var G__20107 = (level - (1));
wrapper = G__20106;
level = G__20107;
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
domina.DomContent = (function (){var obj20109 = {};return obj20109;
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
log_debug.cljs$lang$applyTo = (function (arglist__20110){
var mesg = cljs.core.seq(arglist__20110);
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
log.cljs$lang$applyTo = (function (arglist__20111){
var mesg = cljs.core.seq(arglist__20111);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__20112){
var contents = cljs.core.seq(arglist__20112);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__20113_SHARP_){return p1__20113_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__20114_SHARP_,p2__20115_SHARP_){return goog.dom.insertChildAt(p1__20114_SHARP_,p2__20115_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20117_SHARP_,p2__20116_SHARP_){return goog.dom.insertSiblingBefore(p2__20116_SHARP_,p1__20117_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20119_SHARP_,p2__20118_SHARP_){return goog.dom.insertSiblingAfter(p2__20118_SHARP_,p1__20119_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__20121_SHARP_,p2__20120_SHARP_){return goog.dom.replaceNode(p2__20120_SHARP_,p1__20121_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__20126_20130 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20127_20131 = null;var count__20128_20132 = (0);var i__20129_20133 = (0);while(true){
if((i__20129_20133 < count__20128_20132))
{var n_20134 = cljs.core._nth.call(null,chunk__20127_20131,i__20129_20133);goog.style.setStyle(n_20134,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20135 = seq__20126_20130;
var G__20136 = chunk__20127_20131;
var G__20137 = count__20128_20132;
var G__20138 = (i__20129_20133 + (1));
seq__20126_20130 = G__20135;
chunk__20127_20131 = G__20136;
count__20128_20132 = G__20137;
i__20129_20133 = G__20138;
continue;
}
} else
{var temp__4126__auto___20139 = cljs.core.seq.call(null,seq__20126_20130);if(temp__4126__auto___20139)
{var seq__20126_20140__$1 = temp__4126__auto___20139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20126_20140__$1))
{var c__4410__auto___20141 = cljs.core.chunk_first.call(null,seq__20126_20140__$1);{
var G__20142 = cljs.core.chunk_rest.call(null,seq__20126_20140__$1);
var G__20143 = c__4410__auto___20141;
var G__20144 = cljs.core.count.call(null,c__4410__auto___20141);
var G__20145 = (0);
seq__20126_20130 = G__20142;
chunk__20127_20131 = G__20143;
count__20128_20132 = G__20144;
i__20129_20133 = G__20145;
continue;
}
} else
{var n_20146 = cljs.core.first.call(null,seq__20126_20140__$1);goog.style.setStyle(n_20146,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20147 = cljs.core.next.call(null,seq__20126_20140__$1);
var G__20148 = null;
var G__20149 = (0);
var G__20150 = (0);
seq__20126_20130 = G__20147;
chunk__20127_20131 = G__20148;
count__20128_20132 = G__20149;
i__20129_20133 = G__20150;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20151){
var content = cljs.core.first(arglist__20151);
arglist__20151 = cljs.core.next(arglist__20151);
var name = cljs.core.first(arglist__20151);
var value = cljs.core.rest(arglist__20151);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__20156_20160 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20157_20161 = null;var count__20158_20162 = (0);var i__20159_20163 = (0);while(true){
if((i__20159_20163 < count__20158_20162))
{var n_20164 = cljs.core._nth.call(null,chunk__20157_20161,i__20159_20163);n_20164.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20165 = seq__20156_20160;
var G__20166 = chunk__20157_20161;
var G__20167 = count__20158_20162;
var G__20168 = (i__20159_20163 + (1));
seq__20156_20160 = G__20165;
chunk__20157_20161 = G__20166;
count__20158_20162 = G__20167;
i__20159_20163 = G__20168;
continue;
}
} else
{var temp__4126__auto___20169 = cljs.core.seq.call(null,seq__20156_20160);if(temp__4126__auto___20169)
{var seq__20156_20170__$1 = temp__4126__auto___20169;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20156_20170__$1))
{var c__4410__auto___20171 = cljs.core.chunk_first.call(null,seq__20156_20170__$1);{
var G__20172 = cljs.core.chunk_rest.call(null,seq__20156_20170__$1);
var G__20173 = c__4410__auto___20171;
var G__20174 = cljs.core.count.call(null,c__4410__auto___20171);
var G__20175 = (0);
seq__20156_20160 = G__20172;
chunk__20157_20161 = G__20173;
count__20158_20162 = G__20174;
i__20159_20163 = G__20175;
continue;
}
} else
{var n_20176 = cljs.core.first.call(null,seq__20156_20170__$1);n_20176.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20177 = cljs.core.next.call(null,seq__20156_20170__$1);
var G__20178 = null;
var G__20179 = (0);
var G__20180 = (0);
seq__20156_20160 = G__20177;
chunk__20157_20161 = G__20178;
count__20158_20162 = G__20179;
i__20159_20163 = G__20180;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20181){
var content = cljs.core.first(arglist__20181);
arglist__20181 = cljs.core.next(arglist__20181);
var name = cljs.core.first(arglist__20181);
var value = cljs.core.rest(arglist__20181);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__20186_20190 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20187_20191 = null;var count__20188_20192 = (0);var i__20189_20193 = (0);while(true){
if((i__20189_20193 < count__20188_20192))
{var n_20194 = cljs.core._nth.call(null,chunk__20187_20191,i__20189_20193);n_20194.removeAttribute(cljs.core.name.call(null,name));
{
var G__20195 = seq__20186_20190;
var G__20196 = chunk__20187_20191;
var G__20197 = count__20188_20192;
var G__20198 = (i__20189_20193 + (1));
seq__20186_20190 = G__20195;
chunk__20187_20191 = G__20196;
count__20188_20192 = G__20197;
i__20189_20193 = G__20198;
continue;
}
} else
{var temp__4126__auto___20199 = cljs.core.seq.call(null,seq__20186_20190);if(temp__4126__auto___20199)
{var seq__20186_20200__$1 = temp__4126__auto___20199;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20186_20200__$1))
{var c__4410__auto___20201 = cljs.core.chunk_first.call(null,seq__20186_20200__$1);{
var G__20202 = cljs.core.chunk_rest.call(null,seq__20186_20200__$1);
var G__20203 = c__4410__auto___20201;
var G__20204 = cljs.core.count.call(null,c__4410__auto___20201);
var G__20205 = (0);
seq__20186_20190 = G__20202;
chunk__20187_20191 = G__20203;
count__20188_20192 = G__20204;
i__20189_20193 = G__20205;
continue;
}
} else
{var n_20206 = cljs.core.first.call(null,seq__20186_20200__$1);n_20206.removeAttribute(cljs.core.name.call(null,name));
{
var G__20207 = cljs.core.next.call(null,seq__20186_20200__$1);
var G__20208 = null;
var G__20209 = (0);
var G__20210 = (0);
seq__20186_20190 = G__20207;
chunk__20187_20191 = G__20208;
count__20188_20192 = G__20209;
i__20189_20193 = G__20210;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__20212 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__20212,(0),null);var v = cljs.core.nth.call(null,vec__20212,(1),null);if(cljs.core.truth_((function (){var and__3628__auto__ = k;if(cljs.core.truth_(and__3628__auto__))
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
return (function (p1__20213_SHARP_){var attr = attrs__$1.item(p1__20213_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__20220_20226 = cljs.core.seq.call(null,styles);var chunk__20221_20227 = null;var count__20222_20228 = (0);var i__20223_20229 = (0);while(true){
if((i__20223_20229 < count__20222_20228))
{var vec__20224_20230 = cljs.core._nth.call(null,chunk__20221_20227,i__20223_20229);var name_20231 = cljs.core.nth.call(null,vec__20224_20230,(0),null);var value_20232 = cljs.core.nth.call(null,vec__20224_20230,(1),null);domina.set_style_BANG_.call(null,content,name_20231,value_20232);
{
var G__20233 = seq__20220_20226;
var G__20234 = chunk__20221_20227;
var G__20235 = count__20222_20228;
var G__20236 = (i__20223_20229 + (1));
seq__20220_20226 = G__20233;
chunk__20221_20227 = G__20234;
count__20222_20228 = G__20235;
i__20223_20229 = G__20236;
continue;
}
} else
{var temp__4126__auto___20237 = cljs.core.seq.call(null,seq__20220_20226);if(temp__4126__auto___20237)
{var seq__20220_20238__$1 = temp__4126__auto___20237;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20220_20238__$1))
{var c__4410__auto___20239 = cljs.core.chunk_first.call(null,seq__20220_20238__$1);{
var G__20240 = cljs.core.chunk_rest.call(null,seq__20220_20238__$1);
var G__20241 = c__4410__auto___20239;
var G__20242 = cljs.core.count.call(null,c__4410__auto___20239);
var G__20243 = (0);
seq__20220_20226 = G__20240;
chunk__20221_20227 = G__20241;
count__20222_20228 = G__20242;
i__20223_20229 = G__20243;
continue;
}
} else
{var vec__20225_20244 = cljs.core.first.call(null,seq__20220_20238__$1);var name_20245 = cljs.core.nth.call(null,vec__20225_20244,(0),null);var value_20246 = cljs.core.nth.call(null,vec__20225_20244,(1),null);domina.set_style_BANG_.call(null,content,name_20245,value_20246);
{
var G__20247 = cljs.core.next.call(null,seq__20220_20238__$1);
var G__20248 = null;
var G__20249 = (0);
var G__20250 = (0);
seq__20220_20226 = G__20247;
chunk__20221_20227 = G__20248;
count__20222_20228 = G__20249;
i__20223_20229 = G__20250;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__20257_20263 = cljs.core.seq.call(null,attrs);var chunk__20258_20264 = null;var count__20259_20265 = (0);var i__20260_20266 = (0);while(true){
if((i__20260_20266 < count__20259_20265))
{var vec__20261_20267 = cljs.core._nth.call(null,chunk__20258_20264,i__20260_20266);var name_20268 = cljs.core.nth.call(null,vec__20261_20267,(0),null);var value_20269 = cljs.core.nth.call(null,vec__20261_20267,(1),null);domina.set_attr_BANG_.call(null,content,name_20268,value_20269);
{
var G__20270 = seq__20257_20263;
var G__20271 = chunk__20258_20264;
var G__20272 = count__20259_20265;
var G__20273 = (i__20260_20266 + (1));
seq__20257_20263 = G__20270;
chunk__20258_20264 = G__20271;
count__20259_20265 = G__20272;
i__20260_20266 = G__20273;
continue;
}
} else
{var temp__4126__auto___20274 = cljs.core.seq.call(null,seq__20257_20263);if(temp__4126__auto___20274)
{var seq__20257_20275__$1 = temp__4126__auto___20274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20257_20275__$1))
{var c__4410__auto___20276 = cljs.core.chunk_first.call(null,seq__20257_20275__$1);{
var G__20277 = cljs.core.chunk_rest.call(null,seq__20257_20275__$1);
var G__20278 = c__4410__auto___20276;
var G__20279 = cljs.core.count.call(null,c__4410__auto___20276);
var G__20280 = (0);
seq__20257_20263 = G__20277;
chunk__20258_20264 = G__20278;
count__20259_20265 = G__20279;
i__20260_20266 = G__20280;
continue;
}
} else
{var vec__20262_20281 = cljs.core.first.call(null,seq__20257_20275__$1);var name_20282 = cljs.core.nth.call(null,vec__20262_20281,(0),null);var value_20283 = cljs.core.nth.call(null,vec__20262_20281,(1),null);domina.set_attr_BANG_.call(null,content,name_20282,value_20283);
{
var G__20284 = cljs.core.next.call(null,seq__20257_20275__$1);
var G__20285 = null;
var G__20286 = (0);
var G__20287 = (0);
seq__20257_20263 = G__20284;
chunk__20258_20264 = G__20285;
count__20259_20265 = G__20286;
i__20260_20266 = G__20287;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20292_20296 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20293_20297 = null;var count__20294_20298 = (0);var i__20295_20299 = (0);while(true){
if((i__20295_20299 < count__20294_20298))
{var node_20300 = cljs.core._nth.call(null,chunk__20293_20297,i__20295_20299);goog.dom.classes.add(node_20300,class$);
{
var G__20301 = seq__20292_20296;
var G__20302 = chunk__20293_20297;
var G__20303 = count__20294_20298;
var G__20304 = (i__20295_20299 + (1));
seq__20292_20296 = G__20301;
chunk__20293_20297 = G__20302;
count__20294_20298 = G__20303;
i__20295_20299 = G__20304;
continue;
}
} else
{var temp__4126__auto___20305 = cljs.core.seq.call(null,seq__20292_20296);if(temp__4126__auto___20305)
{var seq__20292_20306__$1 = temp__4126__auto___20305;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20292_20306__$1))
{var c__4410__auto___20307 = cljs.core.chunk_first.call(null,seq__20292_20306__$1);{
var G__20308 = cljs.core.chunk_rest.call(null,seq__20292_20306__$1);
var G__20309 = c__4410__auto___20307;
var G__20310 = cljs.core.count.call(null,c__4410__auto___20307);
var G__20311 = (0);
seq__20292_20296 = G__20308;
chunk__20293_20297 = G__20309;
count__20294_20298 = G__20310;
i__20295_20299 = G__20311;
continue;
}
} else
{var node_20312 = cljs.core.first.call(null,seq__20292_20306__$1);goog.dom.classes.add(node_20312,class$);
{
var G__20313 = cljs.core.next.call(null,seq__20292_20306__$1);
var G__20314 = null;
var G__20315 = (0);
var G__20316 = (0);
seq__20292_20296 = G__20313;
chunk__20293_20297 = G__20314;
count__20294_20298 = G__20315;
i__20295_20299 = G__20316;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20321_20325 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20322_20326 = null;var count__20323_20327 = (0);var i__20324_20328 = (0);while(true){
if((i__20324_20328 < count__20323_20327))
{var node_20329 = cljs.core._nth.call(null,chunk__20322_20326,i__20324_20328);goog.dom.classes.remove(node_20329,class$);
{
var G__20330 = seq__20321_20325;
var G__20331 = chunk__20322_20326;
var G__20332 = count__20323_20327;
var G__20333 = (i__20324_20328 + (1));
seq__20321_20325 = G__20330;
chunk__20322_20326 = G__20331;
count__20323_20327 = G__20332;
i__20324_20328 = G__20333;
continue;
}
} else
{var temp__4126__auto___20334 = cljs.core.seq.call(null,seq__20321_20325);if(temp__4126__auto___20334)
{var seq__20321_20335__$1 = temp__4126__auto___20334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20321_20335__$1))
{var c__4410__auto___20336 = cljs.core.chunk_first.call(null,seq__20321_20335__$1);{
var G__20337 = cljs.core.chunk_rest.call(null,seq__20321_20335__$1);
var G__20338 = c__4410__auto___20336;
var G__20339 = cljs.core.count.call(null,c__4410__auto___20336);
var G__20340 = (0);
seq__20321_20325 = G__20337;
chunk__20322_20326 = G__20338;
count__20323_20327 = G__20339;
i__20324_20328 = G__20340;
continue;
}
} else
{var node_20341 = cljs.core.first.call(null,seq__20321_20335__$1);goog.dom.classes.remove(node_20341,class$);
{
var G__20342 = cljs.core.next.call(null,seq__20321_20335__$1);
var G__20343 = null;
var G__20344 = (0);
var G__20345 = (0);
seq__20321_20325 = G__20342;
chunk__20322_20326 = G__20343;
count__20323_20327 = G__20344;
i__20324_20328 = G__20345;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20350_20354 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20351_20355 = null;var count__20352_20356 = (0);var i__20353_20357 = (0);while(true){
if((i__20353_20357 < count__20352_20356))
{var node_20358 = cljs.core._nth.call(null,chunk__20351_20355,i__20353_20357);goog.dom.classes.toggle(node_20358,class$);
{
var G__20359 = seq__20350_20354;
var G__20360 = chunk__20351_20355;
var G__20361 = count__20352_20356;
var G__20362 = (i__20353_20357 + (1));
seq__20350_20354 = G__20359;
chunk__20351_20355 = G__20360;
count__20352_20356 = G__20361;
i__20353_20357 = G__20362;
continue;
}
} else
{var temp__4126__auto___20363 = cljs.core.seq.call(null,seq__20350_20354);if(temp__4126__auto___20363)
{var seq__20350_20364__$1 = temp__4126__auto___20363;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20350_20364__$1))
{var c__4410__auto___20365 = cljs.core.chunk_first.call(null,seq__20350_20364__$1);{
var G__20366 = cljs.core.chunk_rest.call(null,seq__20350_20364__$1);
var G__20367 = c__4410__auto___20365;
var G__20368 = cljs.core.count.call(null,c__4410__auto___20365);
var G__20369 = (0);
seq__20350_20354 = G__20366;
chunk__20351_20355 = G__20367;
count__20352_20356 = G__20368;
i__20353_20357 = G__20369;
continue;
}
} else
{var node_20370 = cljs.core.first.call(null,seq__20350_20364__$1);goog.dom.classes.toggle(node_20370,class$);
{
var G__20371 = cljs.core.next.call(null,seq__20350_20364__$1);
var G__20372 = null;
var G__20373 = (0);
var G__20374 = (0);
seq__20350_20354 = G__20371;
chunk__20351_20355 = G__20372;
count__20352_20356 = G__20373;
i__20353_20357 = G__20374;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_20383__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__20379_20384 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20380_20385 = null;var count__20381_20386 = (0);var i__20382_20387 = (0);while(true){
if((i__20382_20387 < count__20381_20386))
{var node_20388 = cljs.core._nth.call(null,chunk__20380_20385,i__20382_20387);goog.dom.classes.set(node_20388,classes_20383__$1);
{
var G__20389 = seq__20379_20384;
var G__20390 = chunk__20380_20385;
var G__20391 = count__20381_20386;
var G__20392 = (i__20382_20387 + (1));
seq__20379_20384 = G__20389;
chunk__20380_20385 = G__20390;
count__20381_20386 = G__20391;
i__20382_20387 = G__20392;
continue;
}
} else
{var temp__4126__auto___20393 = cljs.core.seq.call(null,seq__20379_20384);if(temp__4126__auto___20393)
{var seq__20379_20394__$1 = temp__4126__auto___20393;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20379_20394__$1))
{var c__4410__auto___20395 = cljs.core.chunk_first.call(null,seq__20379_20394__$1);{
var G__20396 = cljs.core.chunk_rest.call(null,seq__20379_20394__$1);
var G__20397 = c__4410__auto___20395;
var G__20398 = cljs.core.count.call(null,c__4410__auto___20395);
var G__20399 = (0);
seq__20379_20384 = G__20396;
chunk__20380_20385 = G__20397;
count__20381_20386 = G__20398;
i__20382_20387 = G__20399;
continue;
}
} else
{var node_20400 = cljs.core.first.call(null,seq__20379_20394__$1);goog.dom.classes.set(node_20400,classes_20383__$1);
{
var G__20401 = cljs.core.next.call(null,seq__20379_20394__$1);
var G__20402 = null;
var G__20403 = (0);
var G__20404 = (0);
seq__20379_20384 = G__20401;
chunk__20380_20385 = G__20402;
count__20381_20386 = G__20403;
i__20382_20387 = G__20404;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__20409_20413 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20410_20414 = null;var count__20411_20415 = (0);var i__20412_20416 = (0);while(true){
if((i__20412_20416 < count__20411_20415))
{var node_20417 = cljs.core._nth.call(null,chunk__20410_20414,i__20412_20416);goog.dom.setTextContent(node_20417,value);
{
var G__20418 = seq__20409_20413;
var G__20419 = chunk__20410_20414;
var G__20420 = count__20411_20415;
var G__20421 = (i__20412_20416 + (1));
seq__20409_20413 = G__20418;
chunk__20410_20414 = G__20419;
count__20411_20415 = G__20420;
i__20412_20416 = G__20421;
continue;
}
} else
{var temp__4126__auto___20422 = cljs.core.seq.call(null,seq__20409_20413);if(temp__4126__auto___20422)
{var seq__20409_20423__$1 = temp__4126__auto___20422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20409_20423__$1))
{var c__4410__auto___20424 = cljs.core.chunk_first.call(null,seq__20409_20423__$1);{
var G__20425 = cljs.core.chunk_rest.call(null,seq__20409_20423__$1);
var G__20426 = c__4410__auto___20424;
var G__20427 = cljs.core.count.call(null,c__4410__auto___20424);
var G__20428 = (0);
seq__20409_20413 = G__20425;
chunk__20410_20414 = G__20426;
count__20411_20415 = G__20427;
i__20412_20416 = G__20428;
continue;
}
} else
{var node_20429 = cljs.core.first.call(null,seq__20409_20423__$1);goog.dom.setTextContent(node_20429,value);
{
var G__20430 = cljs.core.next.call(null,seq__20409_20423__$1);
var G__20431 = null;
var G__20432 = (0);
var G__20433 = (0);
seq__20409_20413 = G__20430;
chunk__20410_20414 = G__20431;
count__20411_20415 = G__20432;
i__20412_20416 = G__20433;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__20438_20442 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20439_20443 = null;var count__20440_20444 = (0);var i__20441_20445 = (0);while(true){
if((i__20441_20445 < count__20440_20444))
{var node_20446 = cljs.core._nth.call(null,chunk__20439_20443,i__20441_20445);goog.dom.forms.setValue(node_20446,value);
{
var G__20447 = seq__20438_20442;
var G__20448 = chunk__20439_20443;
var G__20449 = count__20440_20444;
var G__20450 = (i__20441_20445 + (1));
seq__20438_20442 = G__20447;
chunk__20439_20443 = G__20448;
count__20440_20444 = G__20449;
i__20441_20445 = G__20450;
continue;
}
} else
{var temp__4126__auto___20451 = cljs.core.seq.call(null,seq__20438_20442);if(temp__4126__auto___20451)
{var seq__20438_20452__$1 = temp__4126__auto___20451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20438_20452__$1))
{var c__4410__auto___20453 = cljs.core.chunk_first.call(null,seq__20438_20452__$1);{
var G__20454 = cljs.core.chunk_rest.call(null,seq__20438_20452__$1);
var G__20455 = c__4410__auto___20453;
var G__20456 = cljs.core.count.call(null,c__4410__auto___20453);
var G__20457 = (0);
seq__20438_20442 = G__20454;
chunk__20439_20443 = G__20455;
count__20440_20444 = G__20456;
i__20441_20445 = G__20457;
continue;
}
} else
{var node_20458 = cljs.core.first.call(null,seq__20438_20452__$1);goog.dom.forms.setValue(node_20458,value);
{
var G__20459 = cljs.core.next.call(null,seq__20438_20452__$1);
var G__20460 = null;
var G__20461 = (0);
var G__20462 = (0);
seq__20438_20442 = G__20459;
chunk__20439_20443 = G__20460;
count__20440_20444 = G__20461;
i__20441_20445 = G__20462;
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
{var value_20473 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20469_20474 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20470_20475 = null;var count__20471_20476 = (0);var i__20472_20477 = (0);while(true){
if((i__20472_20477 < count__20471_20476))
{var node_20478 = cljs.core._nth.call(null,chunk__20470_20475,i__20472_20477);node_20478.innerHTML = value_20473;
{
var G__20479 = seq__20469_20474;
var G__20480 = chunk__20470_20475;
var G__20481 = count__20471_20476;
var G__20482 = (i__20472_20477 + (1));
seq__20469_20474 = G__20479;
chunk__20470_20475 = G__20480;
count__20471_20476 = G__20481;
i__20472_20477 = G__20482;
continue;
}
} else
{var temp__4126__auto___20483 = cljs.core.seq.call(null,seq__20469_20474);if(temp__4126__auto___20483)
{var seq__20469_20484__$1 = temp__4126__auto___20483;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20469_20484__$1))
{var c__4410__auto___20485 = cljs.core.chunk_first.call(null,seq__20469_20484__$1);{
var G__20486 = cljs.core.chunk_rest.call(null,seq__20469_20484__$1);
var G__20487 = c__4410__auto___20485;
var G__20488 = cljs.core.count.call(null,c__4410__auto___20485);
var G__20489 = (0);
seq__20469_20474 = G__20486;
chunk__20470_20475 = G__20487;
count__20471_20476 = G__20488;
i__20472_20477 = G__20489;
continue;
}
} else
{var node_20490 = cljs.core.first.call(null,seq__20469_20484__$1);node_20490.innerHTML = value_20473;
{
var G__20491 = cljs.core.next.call(null,seq__20469_20484__$1);
var G__20492 = null;
var G__20493 = (0);
var G__20494 = (0);
seq__20469_20474 = G__20491;
chunk__20470_20475 = G__20492;
count__20471_20476 = G__20493;
i__20472_20477 = G__20494;
continue;
}
}
} else
{}
}
break;
}
}catch (e20468){if((e20468 instanceof Error))
{var e_20495 = e20468;domina.replace_children_BANG_.call(null,content,value_20473);
} else
{throw e20468;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20502_20506 = cljs.core.seq.call(null,children);var chunk__20503_20507 = null;var count__20504_20508 = (0);var i__20505_20509 = (0);while(true){
if((i__20505_20509 < count__20504_20508))
{var child_20510 = cljs.core._nth.call(null,chunk__20503_20507,i__20505_20509);frag.appendChild(child_20510);
{
var G__20511 = seq__20502_20506;
var G__20512 = chunk__20503_20507;
var G__20513 = count__20504_20508;
var G__20514 = (i__20505_20509 + (1));
seq__20502_20506 = G__20511;
chunk__20503_20507 = G__20512;
count__20504_20508 = G__20513;
i__20505_20509 = G__20514;
continue;
}
} else
{var temp__4126__auto___20515 = cljs.core.seq.call(null,seq__20502_20506);if(temp__4126__auto___20515)
{var seq__20502_20516__$1 = temp__4126__auto___20515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20502_20516__$1))
{var c__4410__auto___20517 = cljs.core.chunk_first.call(null,seq__20502_20516__$1);{
var G__20518 = cljs.core.chunk_rest.call(null,seq__20502_20516__$1);
var G__20519 = c__4410__auto___20517;
var G__20520 = cljs.core.count.call(null,c__4410__auto___20517);
var G__20521 = (0);
seq__20502_20506 = G__20518;
chunk__20503_20507 = G__20519;
count__20504_20508 = G__20520;
i__20505_20509 = G__20521;
continue;
}
} else
{var child_20522 = cljs.core.first.call(null,seq__20502_20516__$1);frag.appendChild(child_20522);
{
var G__20523 = cljs.core.next.call(null,seq__20502_20516__$1);
var G__20524 = null;
var G__20525 = (0);
var G__20526 = (0);
seq__20502_20506 = G__20523;
chunk__20503_20507 = G__20524;
count__20504_20508 = G__20525;
i__20505_20509 = G__20526;
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
return (function (p1__20496_SHARP_,p2__20497_SHARP_){return f.call(null,p1__20496_SHARP_,p2__20497_SHARP_);
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
{if((function (){var G__20528 = list_thing;if(G__20528)
{var bit__4304__auto__ = (G__20528.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__20528.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20528.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20528);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20528);
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
{if((function (){var G__20529 = content;if(G__20529)
{var bit__4304__auto__ = (G__20529.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__20529.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20529.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20529);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20529);
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
{if((function (){var G__20530 = content;if(G__20530)
{var bit__4304__auto__ = (G__20530.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__20530.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20530.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20530);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20530);
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
