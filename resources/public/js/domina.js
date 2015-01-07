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
var opt_wrapper_20667 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_20668 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_20669 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_20669,opt_wrapper_20667,table_section_wrapper_20668,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_20667,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_20668,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_20668,cell_wrapper_20669,table_section_wrapper_20668,table_section_wrapper_20668]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3628__auto__ = div.firstChild;if(cljs.core.truth_(and__3628__auto__))
{return div.firstChild.childNodes;
} else
{return and__3628__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__20674 = cljs.core.seq.call(null,tbody);var chunk__20675 = null;var count__20676 = (0);var i__20677 = (0);while(true){
if((i__20677 < count__20676))
{var child = cljs.core._nth.call(null,chunk__20675,i__20677);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20678 = seq__20674;
var G__20679 = chunk__20675;
var G__20680 = count__20676;
var G__20681 = (i__20677 + (1));
seq__20674 = G__20678;
chunk__20675 = G__20679;
count__20676 = G__20680;
i__20677 = G__20681;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__20674);if(temp__4126__auto__)
{var seq__20674__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20674__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__20674__$1);{
var G__20682 = cljs.core.chunk_rest.call(null,seq__20674__$1);
var G__20683 = c__4410__auto__;
var G__20684 = cljs.core.count.call(null,c__4410__auto__);
var G__20685 = (0);
seq__20674 = G__20682;
chunk__20675 = G__20683;
count__20676 = G__20684;
i__20677 = G__20685;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__20674__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__20686 = cljs.core.next.call(null,seq__20674__$1);
var G__20687 = null;
var G__20688 = (0);
var G__20689 = (0);
seq__20674 = G__20686;
chunk__20675 = G__20687;
count__20676 = G__20688;
i__20677 = G__20689;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__20691 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__20691,(0),null);var start_wrap = cljs.core.nth.call(null,vec__20691,(1),null);var end_wrap = cljs.core.nth.call(null,vec__20691,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__20692 = wrapper.lastChild;
var G__20693 = (level - (1));
wrapper = G__20692;
level = G__20693;
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
domina.DomContent = (function (){var obj20695 = {};return obj20695;
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
log_debug.cljs$lang$applyTo = (function (arglist__20696){
var mesg = cljs.core.seq(arglist__20696);
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
log.cljs$lang$applyTo = (function (arglist__20697){
var mesg = cljs.core.seq(arglist__20697);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__20698){
var contents = cljs.core.seq(arglist__20698);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__20699_SHARP_){return p1__20699_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__20700_SHARP_,p2__20701_SHARP_){return goog.dom.insertChildAt(p1__20700_SHARP_,p2__20701_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20703_SHARP_,p2__20702_SHARP_){return goog.dom.insertSiblingBefore(p2__20702_SHARP_,p1__20703_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__20705_SHARP_,p2__20704_SHARP_){return goog.dom.insertSiblingAfter(p2__20704_SHARP_,p1__20705_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__20707_SHARP_,p2__20706_SHARP_){return goog.dom.replaceNode(p2__20706_SHARP_,p1__20707_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__20712_20716 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20713_20717 = null;var count__20714_20718 = (0);var i__20715_20719 = (0);while(true){
if((i__20715_20719 < count__20714_20718))
{var n_20720 = cljs.core._nth.call(null,chunk__20713_20717,i__20715_20719);goog.style.setStyle(n_20720,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20721 = seq__20712_20716;
var G__20722 = chunk__20713_20717;
var G__20723 = count__20714_20718;
var G__20724 = (i__20715_20719 + (1));
seq__20712_20716 = G__20721;
chunk__20713_20717 = G__20722;
count__20714_20718 = G__20723;
i__20715_20719 = G__20724;
continue;
}
} else
{var temp__4126__auto___20725 = cljs.core.seq.call(null,seq__20712_20716);if(temp__4126__auto___20725)
{var seq__20712_20726__$1 = temp__4126__auto___20725;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20712_20726__$1))
{var c__4410__auto___20727 = cljs.core.chunk_first.call(null,seq__20712_20726__$1);{
var G__20728 = cljs.core.chunk_rest.call(null,seq__20712_20726__$1);
var G__20729 = c__4410__auto___20727;
var G__20730 = cljs.core.count.call(null,c__4410__auto___20727);
var G__20731 = (0);
seq__20712_20716 = G__20728;
chunk__20713_20717 = G__20729;
count__20714_20718 = G__20730;
i__20715_20719 = G__20731;
continue;
}
} else
{var n_20732 = cljs.core.first.call(null,seq__20712_20726__$1);goog.style.setStyle(n_20732,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20733 = cljs.core.next.call(null,seq__20712_20726__$1);
var G__20734 = null;
var G__20735 = (0);
var G__20736 = (0);
seq__20712_20716 = G__20733;
chunk__20713_20717 = G__20734;
count__20714_20718 = G__20735;
i__20715_20719 = G__20736;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20737){
var content = cljs.core.first(arglist__20737);
arglist__20737 = cljs.core.next(arglist__20737);
var name = cljs.core.first(arglist__20737);
var value = cljs.core.rest(arglist__20737);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__20742_20746 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20743_20747 = null;var count__20744_20748 = (0);var i__20745_20749 = (0);while(true){
if((i__20745_20749 < count__20744_20748))
{var n_20750 = cljs.core._nth.call(null,chunk__20743_20747,i__20745_20749);n_20750.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20751 = seq__20742_20746;
var G__20752 = chunk__20743_20747;
var G__20753 = count__20744_20748;
var G__20754 = (i__20745_20749 + (1));
seq__20742_20746 = G__20751;
chunk__20743_20747 = G__20752;
count__20744_20748 = G__20753;
i__20745_20749 = G__20754;
continue;
}
} else
{var temp__4126__auto___20755 = cljs.core.seq.call(null,seq__20742_20746);if(temp__4126__auto___20755)
{var seq__20742_20756__$1 = temp__4126__auto___20755;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20742_20756__$1))
{var c__4410__auto___20757 = cljs.core.chunk_first.call(null,seq__20742_20756__$1);{
var G__20758 = cljs.core.chunk_rest.call(null,seq__20742_20756__$1);
var G__20759 = c__4410__auto___20757;
var G__20760 = cljs.core.count.call(null,c__4410__auto___20757);
var G__20761 = (0);
seq__20742_20746 = G__20758;
chunk__20743_20747 = G__20759;
count__20744_20748 = G__20760;
i__20745_20749 = G__20761;
continue;
}
} else
{var n_20762 = cljs.core.first.call(null,seq__20742_20756__$1);n_20762.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__20763 = cljs.core.next.call(null,seq__20742_20756__$1);
var G__20764 = null;
var G__20765 = (0);
var G__20766 = (0);
seq__20742_20746 = G__20763;
chunk__20743_20747 = G__20764;
count__20744_20748 = G__20765;
i__20745_20749 = G__20766;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__20767){
var content = cljs.core.first(arglist__20767);
arglist__20767 = cljs.core.next(arglist__20767);
var name = cljs.core.first(arglist__20767);
var value = cljs.core.rest(arglist__20767);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__20772_20776 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20773_20777 = null;var count__20774_20778 = (0);var i__20775_20779 = (0);while(true){
if((i__20775_20779 < count__20774_20778))
{var n_20780 = cljs.core._nth.call(null,chunk__20773_20777,i__20775_20779);n_20780.removeAttribute(cljs.core.name.call(null,name));
{
var G__20781 = seq__20772_20776;
var G__20782 = chunk__20773_20777;
var G__20783 = count__20774_20778;
var G__20784 = (i__20775_20779 + (1));
seq__20772_20776 = G__20781;
chunk__20773_20777 = G__20782;
count__20774_20778 = G__20783;
i__20775_20779 = G__20784;
continue;
}
} else
{var temp__4126__auto___20785 = cljs.core.seq.call(null,seq__20772_20776);if(temp__4126__auto___20785)
{var seq__20772_20786__$1 = temp__4126__auto___20785;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20772_20786__$1))
{var c__4410__auto___20787 = cljs.core.chunk_first.call(null,seq__20772_20786__$1);{
var G__20788 = cljs.core.chunk_rest.call(null,seq__20772_20786__$1);
var G__20789 = c__4410__auto___20787;
var G__20790 = cljs.core.count.call(null,c__4410__auto___20787);
var G__20791 = (0);
seq__20772_20776 = G__20788;
chunk__20773_20777 = G__20789;
count__20774_20778 = G__20790;
i__20775_20779 = G__20791;
continue;
}
} else
{var n_20792 = cljs.core.first.call(null,seq__20772_20786__$1);n_20792.removeAttribute(cljs.core.name.call(null,name));
{
var G__20793 = cljs.core.next.call(null,seq__20772_20786__$1);
var G__20794 = null;
var G__20795 = (0);
var G__20796 = (0);
seq__20772_20776 = G__20793;
chunk__20773_20777 = G__20794;
count__20774_20778 = G__20795;
i__20775_20779 = G__20796;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__20798 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__20798,(0),null);var v = cljs.core.nth.call(null,vec__20798,(1),null);if(cljs.core.truth_((function (){var and__3628__auto__ = k;if(cljs.core.truth_(and__3628__auto__))
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
return (function (p1__20799_SHARP_){var attr = attrs__$1.item(p1__20799_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__20806_20812 = cljs.core.seq.call(null,styles);var chunk__20807_20813 = null;var count__20808_20814 = (0);var i__20809_20815 = (0);while(true){
if((i__20809_20815 < count__20808_20814))
{var vec__20810_20816 = cljs.core._nth.call(null,chunk__20807_20813,i__20809_20815);var name_20817 = cljs.core.nth.call(null,vec__20810_20816,(0),null);var value_20818 = cljs.core.nth.call(null,vec__20810_20816,(1),null);domina.set_style_BANG_.call(null,content,name_20817,value_20818);
{
var G__20819 = seq__20806_20812;
var G__20820 = chunk__20807_20813;
var G__20821 = count__20808_20814;
var G__20822 = (i__20809_20815 + (1));
seq__20806_20812 = G__20819;
chunk__20807_20813 = G__20820;
count__20808_20814 = G__20821;
i__20809_20815 = G__20822;
continue;
}
} else
{var temp__4126__auto___20823 = cljs.core.seq.call(null,seq__20806_20812);if(temp__4126__auto___20823)
{var seq__20806_20824__$1 = temp__4126__auto___20823;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20806_20824__$1))
{var c__4410__auto___20825 = cljs.core.chunk_first.call(null,seq__20806_20824__$1);{
var G__20826 = cljs.core.chunk_rest.call(null,seq__20806_20824__$1);
var G__20827 = c__4410__auto___20825;
var G__20828 = cljs.core.count.call(null,c__4410__auto___20825);
var G__20829 = (0);
seq__20806_20812 = G__20826;
chunk__20807_20813 = G__20827;
count__20808_20814 = G__20828;
i__20809_20815 = G__20829;
continue;
}
} else
{var vec__20811_20830 = cljs.core.first.call(null,seq__20806_20824__$1);var name_20831 = cljs.core.nth.call(null,vec__20811_20830,(0),null);var value_20832 = cljs.core.nth.call(null,vec__20811_20830,(1),null);domina.set_style_BANG_.call(null,content,name_20831,value_20832);
{
var G__20833 = cljs.core.next.call(null,seq__20806_20824__$1);
var G__20834 = null;
var G__20835 = (0);
var G__20836 = (0);
seq__20806_20812 = G__20833;
chunk__20807_20813 = G__20834;
count__20808_20814 = G__20835;
i__20809_20815 = G__20836;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__20843_20849 = cljs.core.seq.call(null,attrs);var chunk__20844_20850 = null;var count__20845_20851 = (0);var i__20846_20852 = (0);while(true){
if((i__20846_20852 < count__20845_20851))
{var vec__20847_20853 = cljs.core._nth.call(null,chunk__20844_20850,i__20846_20852);var name_20854 = cljs.core.nth.call(null,vec__20847_20853,(0),null);var value_20855 = cljs.core.nth.call(null,vec__20847_20853,(1),null);domina.set_attr_BANG_.call(null,content,name_20854,value_20855);
{
var G__20856 = seq__20843_20849;
var G__20857 = chunk__20844_20850;
var G__20858 = count__20845_20851;
var G__20859 = (i__20846_20852 + (1));
seq__20843_20849 = G__20856;
chunk__20844_20850 = G__20857;
count__20845_20851 = G__20858;
i__20846_20852 = G__20859;
continue;
}
} else
{var temp__4126__auto___20860 = cljs.core.seq.call(null,seq__20843_20849);if(temp__4126__auto___20860)
{var seq__20843_20861__$1 = temp__4126__auto___20860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20843_20861__$1))
{var c__4410__auto___20862 = cljs.core.chunk_first.call(null,seq__20843_20861__$1);{
var G__20863 = cljs.core.chunk_rest.call(null,seq__20843_20861__$1);
var G__20864 = c__4410__auto___20862;
var G__20865 = cljs.core.count.call(null,c__4410__auto___20862);
var G__20866 = (0);
seq__20843_20849 = G__20863;
chunk__20844_20850 = G__20864;
count__20845_20851 = G__20865;
i__20846_20852 = G__20866;
continue;
}
} else
{var vec__20848_20867 = cljs.core.first.call(null,seq__20843_20861__$1);var name_20868 = cljs.core.nth.call(null,vec__20848_20867,(0),null);var value_20869 = cljs.core.nth.call(null,vec__20848_20867,(1),null);domina.set_attr_BANG_.call(null,content,name_20868,value_20869);
{
var G__20870 = cljs.core.next.call(null,seq__20843_20861__$1);
var G__20871 = null;
var G__20872 = (0);
var G__20873 = (0);
seq__20843_20849 = G__20870;
chunk__20844_20850 = G__20871;
count__20845_20851 = G__20872;
i__20846_20852 = G__20873;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__20878_20882 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20879_20883 = null;var count__20880_20884 = (0);var i__20881_20885 = (0);while(true){
if((i__20881_20885 < count__20880_20884))
{var node_20886 = cljs.core._nth.call(null,chunk__20879_20883,i__20881_20885);goog.dom.classes.add(node_20886,class$);
{
var G__20887 = seq__20878_20882;
var G__20888 = chunk__20879_20883;
var G__20889 = count__20880_20884;
var G__20890 = (i__20881_20885 + (1));
seq__20878_20882 = G__20887;
chunk__20879_20883 = G__20888;
count__20880_20884 = G__20889;
i__20881_20885 = G__20890;
continue;
}
} else
{var temp__4126__auto___20891 = cljs.core.seq.call(null,seq__20878_20882);if(temp__4126__auto___20891)
{var seq__20878_20892__$1 = temp__4126__auto___20891;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20878_20892__$1))
{var c__4410__auto___20893 = cljs.core.chunk_first.call(null,seq__20878_20892__$1);{
var G__20894 = cljs.core.chunk_rest.call(null,seq__20878_20892__$1);
var G__20895 = c__4410__auto___20893;
var G__20896 = cljs.core.count.call(null,c__4410__auto___20893);
var G__20897 = (0);
seq__20878_20882 = G__20894;
chunk__20879_20883 = G__20895;
count__20880_20884 = G__20896;
i__20881_20885 = G__20897;
continue;
}
} else
{var node_20898 = cljs.core.first.call(null,seq__20878_20892__$1);goog.dom.classes.add(node_20898,class$);
{
var G__20899 = cljs.core.next.call(null,seq__20878_20892__$1);
var G__20900 = null;
var G__20901 = (0);
var G__20902 = (0);
seq__20878_20882 = G__20899;
chunk__20879_20883 = G__20900;
count__20880_20884 = G__20901;
i__20881_20885 = G__20902;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__20907_20911 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20908_20912 = null;var count__20909_20913 = (0);var i__20910_20914 = (0);while(true){
if((i__20910_20914 < count__20909_20913))
{var node_20915 = cljs.core._nth.call(null,chunk__20908_20912,i__20910_20914);goog.dom.classes.remove(node_20915,class$);
{
var G__20916 = seq__20907_20911;
var G__20917 = chunk__20908_20912;
var G__20918 = count__20909_20913;
var G__20919 = (i__20910_20914 + (1));
seq__20907_20911 = G__20916;
chunk__20908_20912 = G__20917;
count__20909_20913 = G__20918;
i__20910_20914 = G__20919;
continue;
}
} else
{var temp__4126__auto___20920 = cljs.core.seq.call(null,seq__20907_20911);if(temp__4126__auto___20920)
{var seq__20907_20921__$1 = temp__4126__auto___20920;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20907_20921__$1))
{var c__4410__auto___20922 = cljs.core.chunk_first.call(null,seq__20907_20921__$1);{
var G__20923 = cljs.core.chunk_rest.call(null,seq__20907_20921__$1);
var G__20924 = c__4410__auto___20922;
var G__20925 = cljs.core.count.call(null,c__4410__auto___20922);
var G__20926 = (0);
seq__20907_20911 = G__20923;
chunk__20908_20912 = G__20924;
count__20909_20913 = G__20925;
i__20910_20914 = G__20926;
continue;
}
} else
{var node_20927 = cljs.core.first.call(null,seq__20907_20921__$1);goog.dom.classes.remove(node_20927,class$);
{
var G__20928 = cljs.core.next.call(null,seq__20907_20921__$1);
var G__20929 = null;
var G__20930 = (0);
var G__20931 = (0);
seq__20907_20911 = G__20928;
chunk__20908_20912 = G__20929;
count__20909_20913 = G__20930;
i__20910_20914 = G__20931;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__20936_20940 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20937_20941 = null;var count__20938_20942 = (0);var i__20939_20943 = (0);while(true){
if((i__20939_20943 < count__20938_20942))
{var node_20944 = cljs.core._nth.call(null,chunk__20937_20941,i__20939_20943);goog.dom.classes.toggle(node_20944,class$);
{
var G__20945 = seq__20936_20940;
var G__20946 = chunk__20937_20941;
var G__20947 = count__20938_20942;
var G__20948 = (i__20939_20943 + (1));
seq__20936_20940 = G__20945;
chunk__20937_20941 = G__20946;
count__20938_20942 = G__20947;
i__20939_20943 = G__20948;
continue;
}
} else
{var temp__4126__auto___20949 = cljs.core.seq.call(null,seq__20936_20940);if(temp__4126__auto___20949)
{var seq__20936_20950__$1 = temp__4126__auto___20949;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20936_20950__$1))
{var c__4410__auto___20951 = cljs.core.chunk_first.call(null,seq__20936_20950__$1);{
var G__20952 = cljs.core.chunk_rest.call(null,seq__20936_20950__$1);
var G__20953 = c__4410__auto___20951;
var G__20954 = cljs.core.count.call(null,c__4410__auto___20951);
var G__20955 = (0);
seq__20936_20940 = G__20952;
chunk__20937_20941 = G__20953;
count__20938_20942 = G__20954;
i__20939_20943 = G__20955;
continue;
}
} else
{var node_20956 = cljs.core.first.call(null,seq__20936_20950__$1);goog.dom.classes.toggle(node_20956,class$);
{
var G__20957 = cljs.core.next.call(null,seq__20936_20950__$1);
var G__20958 = null;
var G__20959 = (0);
var G__20960 = (0);
seq__20936_20940 = G__20957;
chunk__20937_20941 = G__20958;
count__20938_20942 = G__20959;
i__20939_20943 = G__20960;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_20969__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__20965_20970 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20966_20971 = null;var count__20967_20972 = (0);var i__20968_20973 = (0);while(true){
if((i__20968_20973 < count__20967_20972))
{var node_20974 = cljs.core._nth.call(null,chunk__20966_20971,i__20968_20973);goog.dom.classes.set(node_20974,classes_20969__$1);
{
var G__20975 = seq__20965_20970;
var G__20976 = chunk__20966_20971;
var G__20977 = count__20967_20972;
var G__20978 = (i__20968_20973 + (1));
seq__20965_20970 = G__20975;
chunk__20966_20971 = G__20976;
count__20967_20972 = G__20977;
i__20968_20973 = G__20978;
continue;
}
} else
{var temp__4126__auto___20979 = cljs.core.seq.call(null,seq__20965_20970);if(temp__4126__auto___20979)
{var seq__20965_20980__$1 = temp__4126__auto___20979;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20965_20980__$1))
{var c__4410__auto___20981 = cljs.core.chunk_first.call(null,seq__20965_20980__$1);{
var G__20982 = cljs.core.chunk_rest.call(null,seq__20965_20980__$1);
var G__20983 = c__4410__auto___20981;
var G__20984 = cljs.core.count.call(null,c__4410__auto___20981);
var G__20985 = (0);
seq__20965_20970 = G__20982;
chunk__20966_20971 = G__20983;
count__20967_20972 = G__20984;
i__20968_20973 = G__20985;
continue;
}
} else
{var node_20986 = cljs.core.first.call(null,seq__20965_20980__$1);goog.dom.classes.set(node_20986,classes_20969__$1);
{
var G__20987 = cljs.core.next.call(null,seq__20965_20980__$1);
var G__20988 = null;
var G__20989 = (0);
var G__20990 = (0);
seq__20965_20970 = G__20987;
chunk__20966_20971 = G__20988;
count__20967_20972 = G__20989;
i__20968_20973 = G__20990;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__20995_20999 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20996_21000 = null;var count__20997_21001 = (0);var i__20998_21002 = (0);while(true){
if((i__20998_21002 < count__20997_21001))
{var node_21003 = cljs.core._nth.call(null,chunk__20996_21000,i__20998_21002);goog.dom.setTextContent(node_21003,value);
{
var G__21004 = seq__20995_20999;
var G__21005 = chunk__20996_21000;
var G__21006 = count__20997_21001;
var G__21007 = (i__20998_21002 + (1));
seq__20995_20999 = G__21004;
chunk__20996_21000 = G__21005;
count__20997_21001 = G__21006;
i__20998_21002 = G__21007;
continue;
}
} else
{var temp__4126__auto___21008 = cljs.core.seq.call(null,seq__20995_20999);if(temp__4126__auto___21008)
{var seq__20995_21009__$1 = temp__4126__auto___21008;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20995_21009__$1))
{var c__4410__auto___21010 = cljs.core.chunk_first.call(null,seq__20995_21009__$1);{
var G__21011 = cljs.core.chunk_rest.call(null,seq__20995_21009__$1);
var G__21012 = c__4410__auto___21010;
var G__21013 = cljs.core.count.call(null,c__4410__auto___21010);
var G__21014 = (0);
seq__20995_20999 = G__21011;
chunk__20996_21000 = G__21012;
count__20997_21001 = G__21013;
i__20998_21002 = G__21014;
continue;
}
} else
{var node_21015 = cljs.core.first.call(null,seq__20995_21009__$1);goog.dom.setTextContent(node_21015,value);
{
var G__21016 = cljs.core.next.call(null,seq__20995_21009__$1);
var G__21017 = null;
var G__21018 = (0);
var G__21019 = (0);
seq__20995_20999 = G__21016;
chunk__20996_21000 = G__21017;
count__20997_21001 = G__21018;
i__20998_21002 = G__21019;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__21024_21028 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21025_21029 = null;var count__21026_21030 = (0);var i__21027_21031 = (0);while(true){
if((i__21027_21031 < count__21026_21030))
{var node_21032 = cljs.core._nth.call(null,chunk__21025_21029,i__21027_21031);goog.dom.forms.setValue(node_21032,value);
{
var G__21033 = seq__21024_21028;
var G__21034 = chunk__21025_21029;
var G__21035 = count__21026_21030;
var G__21036 = (i__21027_21031 + (1));
seq__21024_21028 = G__21033;
chunk__21025_21029 = G__21034;
count__21026_21030 = G__21035;
i__21027_21031 = G__21036;
continue;
}
} else
{var temp__4126__auto___21037 = cljs.core.seq.call(null,seq__21024_21028);if(temp__4126__auto___21037)
{var seq__21024_21038__$1 = temp__4126__auto___21037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21024_21038__$1))
{var c__4410__auto___21039 = cljs.core.chunk_first.call(null,seq__21024_21038__$1);{
var G__21040 = cljs.core.chunk_rest.call(null,seq__21024_21038__$1);
var G__21041 = c__4410__auto___21039;
var G__21042 = cljs.core.count.call(null,c__4410__auto___21039);
var G__21043 = (0);
seq__21024_21028 = G__21040;
chunk__21025_21029 = G__21041;
count__21026_21030 = G__21042;
i__21027_21031 = G__21043;
continue;
}
} else
{var node_21044 = cljs.core.first.call(null,seq__21024_21038__$1);goog.dom.forms.setValue(node_21044,value);
{
var G__21045 = cljs.core.next.call(null,seq__21024_21038__$1);
var G__21046 = null;
var G__21047 = (0);
var G__21048 = (0);
seq__21024_21028 = G__21045;
chunk__21025_21029 = G__21046;
count__21026_21030 = G__21047;
i__21027_21031 = G__21048;
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
{var value_21059 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__21055_21060 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21056_21061 = null;var count__21057_21062 = (0);var i__21058_21063 = (0);while(true){
if((i__21058_21063 < count__21057_21062))
{var node_21064 = cljs.core._nth.call(null,chunk__21056_21061,i__21058_21063);node_21064.innerHTML = value_21059;
{
var G__21065 = seq__21055_21060;
var G__21066 = chunk__21056_21061;
var G__21067 = count__21057_21062;
var G__21068 = (i__21058_21063 + (1));
seq__21055_21060 = G__21065;
chunk__21056_21061 = G__21066;
count__21057_21062 = G__21067;
i__21058_21063 = G__21068;
continue;
}
} else
{var temp__4126__auto___21069 = cljs.core.seq.call(null,seq__21055_21060);if(temp__4126__auto___21069)
{var seq__21055_21070__$1 = temp__4126__auto___21069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21055_21070__$1))
{var c__4410__auto___21071 = cljs.core.chunk_first.call(null,seq__21055_21070__$1);{
var G__21072 = cljs.core.chunk_rest.call(null,seq__21055_21070__$1);
var G__21073 = c__4410__auto___21071;
var G__21074 = cljs.core.count.call(null,c__4410__auto___21071);
var G__21075 = (0);
seq__21055_21060 = G__21072;
chunk__21056_21061 = G__21073;
count__21057_21062 = G__21074;
i__21058_21063 = G__21075;
continue;
}
} else
{var node_21076 = cljs.core.first.call(null,seq__21055_21070__$1);node_21076.innerHTML = value_21059;
{
var G__21077 = cljs.core.next.call(null,seq__21055_21070__$1);
var G__21078 = null;
var G__21079 = (0);
var G__21080 = (0);
seq__21055_21060 = G__21077;
chunk__21056_21061 = G__21078;
count__21057_21062 = G__21079;
i__21058_21063 = G__21080;
continue;
}
}
} else
{}
}
break;
}
}catch (e21054){if((e21054 instanceof Error))
{var e_21081 = e21054;domina.replace_children_BANG_.call(null,content,value_21059);
} else
{throw e21054;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__21088_21092 = cljs.core.seq.call(null,children);var chunk__21089_21093 = null;var count__21090_21094 = (0);var i__21091_21095 = (0);while(true){
if((i__21091_21095 < count__21090_21094))
{var child_21096 = cljs.core._nth.call(null,chunk__21089_21093,i__21091_21095);frag.appendChild(child_21096);
{
var G__21097 = seq__21088_21092;
var G__21098 = chunk__21089_21093;
var G__21099 = count__21090_21094;
var G__21100 = (i__21091_21095 + (1));
seq__21088_21092 = G__21097;
chunk__21089_21093 = G__21098;
count__21090_21094 = G__21099;
i__21091_21095 = G__21100;
continue;
}
} else
{var temp__4126__auto___21101 = cljs.core.seq.call(null,seq__21088_21092);if(temp__4126__auto___21101)
{var seq__21088_21102__$1 = temp__4126__auto___21101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21088_21102__$1))
{var c__4410__auto___21103 = cljs.core.chunk_first.call(null,seq__21088_21102__$1);{
var G__21104 = cljs.core.chunk_rest.call(null,seq__21088_21102__$1);
var G__21105 = c__4410__auto___21103;
var G__21106 = cljs.core.count.call(null,c__4410__auto___21103);
var G__21107 = (0);
seq__21088_21092 = G__21104;
chunk__21089_21093 = G__21105;
count__21090_21094 = G__21106;
i__21091_21095 = G__21107;
continue;
}
} else
{var child_21108 = cljs.core.first.call(null,seq__21088_21102__$1);frag.appendChild(child_21108);
{
var G__21109 = cljs.core.next.call(null,seq__21088_21102__$1);
var G__21110 = null;
var G__21111 = (0);
var G__21112 = (0);
seq__21088_21092 = G__21109;
chunk__21089_21093 = G__21110;
count__21090_21094 = G__21111;
i__21091_21095 = G__21112;
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
return (function (p1__21082_SHARP_,p2__21083_SHARP_){return f.call(null,p1__21082_SHARP_,p2__21083_SHARP_);
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
{if((function (){var G__21114 = list_thing;if(G__21114)
{var bit__4304__auto__ = (G__21114.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__21114.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21114.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21114);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21114);
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
{if((function (){var G__21115 = content;if(G__21115)
{var bit__4304__auto__ = (G__21115.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__21115.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21115.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21115);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21115);
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
{if((function (){var G__21116 = content;if(G__21116)
{var bit__4304__auto__ = (G__21116.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__21116.cljs$core$ISeqable$))
{return true;
} else
{if((!G__21116.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21116);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__21116);
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
