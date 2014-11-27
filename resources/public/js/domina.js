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
var opt_wrapper_9771 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_9772 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_9773 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_9773,opt_wrapper_9771,table_section_wrapper_9772,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_9771,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_9772,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_9772,cell_wrapper_9773,table_section_wrapper_9772,table_section_wrapper_9772]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3628__auto__ = div.firstChild;if(cljs.core.truth_(and__3628__auto__))
{return div.firstChild.childNodes;
} else
{return and__3628__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__9778 = cljs.core.seq.call(null,tbody);var chunk__9779 = null;var count__9780 = (0);var i__9781 = (0);while(true){
if((i__9781 < count__9780))
{var child = cljs.core._nth.call(null,chunk__9779,i__9781);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__9782 = seq__9778;
var G__9783 = chunk__9779;
var G__9784 = count__9780;
var G__9785 = (i__9781 + (1));
seq__9778 = G__9782;
chunk__9779 = G__9783;
count__9780 = G__9784;
i__9781 = G__9785;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9778);if(temp__4126__auto__)
{var seq__9778__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9778__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__9778__$1);{
var G__9786 = cljs.core.chunk_rest.call(null,seq__9778__$1);
var G__9787 = c__4410__auto__;
var G__9788 = cljs.core.count.call(null,c__4410__auto__);
var G__9789 = (0);
seq__9778 = G__9786;
chunk__9779 = G__9787;
count__9780 = G__9788;
i__9781 = G__9789;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__9778__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__9790 = cljs.core.next.call(null,seq__9778__$1);
var G__9791 = null;
var G__9792 = (0);
var G__9793 = (0);
seq__9778 = G__9790;
chunk__9779 = G__9791;
count__9780 = G__9792;
i__9781 = G__9793;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__9795 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__9795,(0),null);var start_wrap = cljs.core.nth.call(null,vec__9795,(1),null);var end_wrap = cljs.core.nth.call(null,vec__9795,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__9796 = wrapper.lastChild;
var G__9797 = (level - (1));
wrapper = G__9796;
level = G__9797;
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
domina.DomContent = (function (){var obj9799 = {};return obj9799;
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
log_debug.cljs$lang$applyTo = (function (arglist__9800){
var mesg = cljs.core.seq(arglist__9800);
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
log.cljs$lang$applyTo = (function (arglist__9801){
var mesg = cljs.core.seq(arglist__9801);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__9802){
var contents = cljs.core.seq(arglist__9802);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__9803_SHARP_){return p1__9803_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__9804_SHARP_,p2__9805_SHARP_){return goog.dom.insertChildAt(p1__9804_SHARP_,p2__9805_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__9807_SHARP_,p2__9806_SHARP_){return goog.dom.insertSiblingBefore(p2__9806_SHARP_,p1__9807_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__9809_SHARP_,p2__9808_SHARP_){return goog.dom.insertSiblingAfter(p2__9808_SHARP_,p1__9809_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__9811_SHARP_,p2__9810_SHARP_){return goog.dom.replaceNode(p2__9810_SHARP_,p1__9811_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__9816_9820 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9817_9821 = null;var count__9818_9822 = (0);var i__9819_9823 = (0);while(true){
if((i__9819_9823 < count__9818_9822))
{var n_9824 = cljs.core._nth.call(null,chunk__9817_9821,i__9819_9823);goog.style.setStyle(n_9824,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__9825 = seq__9816_9820;
var G__9826 = chunk__9817_9821;
var G__9827 = count__9818_9822;
var G__9828 = (i__9819_9823 + (1));
seq__9816_9820 = G__9825;
chunk__9817_9821 = G__9826;
count__9818_9822 = G__9827;
i__9819_9823 = G__9828;
continue;
}
} else
{var temp__4126__auto___9829 = cljs.core.seq.call(null,seq__9816_9820);if(temp__4126__auto___9829)
{var seq__9816_9830__$1 = temp__4126__auto___9829;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9816_9830__$1))
{var c__4410__auto___9831 = cljs.core.chunk_first.call(null,seq__9816_9830__$1);{
var G__9832 = cljs.core.chunk_rest.call(null,seq__9816_9830__$1);
var G__9833 = c__4410__auto___9831;
var G__9834 = cljs.core.count.call(null,c__4410__auto___9831);
var G__9835 = (0);
seq__9816_9820 = G__9832;
chunk__9817_9821 = G__9833;
count__9818_9822 = G__9834;
i__9819_9823 = G__9835;
continue;
}
} else
{var n_9836 = cljs.core.first.call(null,seq__9816_9830__$1);goog.style.setStyle(n_9836,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__9837 = cljs.core.next.call(null,seq__9816_9830__$1);
var G__9838 = null;
var G__9839 = (0);
var G__9840 = (0);
seq__9816_9820 = G__9837;
chunk__9817_9821 = G__9838;
count__9818_9822 = G__9839;
i__9819_9823 = G__9840;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__9841){
var content = cljs.core.first(arglist__9841);
arglist__9841 = cljs.core.next(arglist__9841);
var name = cljs.core.first(arglist__9841);
var value = cljs.core.rest(arglist__9841);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__9846_9850 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9847_9851 = null;var count__9848_9852 = (0);var i__9849_9853 = (0);while(true){
if((i__9849_9853 < count__9848_9852))
{var n_9854 = cljs.core._nth.call(null,chunk__9847_9851,i__9849_9853);n_9854.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__9855 = seq__9846_9850;
var G__9856 = chunk__9847_9851;
var G__9857 = count__9848_9852;
var G__9858 = (i__9849_9853 + (1));
seq__9846_9850 = G__9855;
chunk__9847_9851 = G__9856;
count__9848_9852 = G__9857;
i__9849_9853 = G__9858;
continue;
}
} else
{var temp__4126__auto___9859 = cljs.core.seq.call(null,seq__9846_9850);if(temp__4126__auto___9859)
{var seq__9846_9860__$1 = temp__4126__auto___9859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9846_9860__$1))
{var c__4410__auto___9861 = cljs.core.chunk_first.call(null,seq__9846_9860__$1);{
var G__9862 = cljs.core.chunk_rest.call(null,seq__9846_9860__$1);
var G__9863 = c__4410__auto___9861;
var G__9864 = cljs.core.count.call(null,c__4410__auto___9861);
var G__9865 = (0);
seq__9846_9850 = G__9862;
chunk__9847_9851 = G__9863;
count__9848_9852 = G__9864;
i__9849_9853 = G__9865;
continue;
}
} else
{var n_9866 = cljs.core.first.call(null,seq__9846_9860__$1);n_9866.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__9867 = cljs.core.next.call(null,seq__9846_9860__$1);
var G__9868 = null;
var G__9869 = (0);
var G__9870 = (0);
seq__9846_9850 = G__9867;
chunk__9847_9851 = G__9868;
count__9848_9852 = G__9869;
i__9849_9853 = G__9870;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__9871){
var content = cljs.core.first(arglist__9871);
arglist__9871 = cljs.core.next(arglist__9871);
var name = cljs.core.first(arglist__9871);
var value = cljs.core.rest(arglist__9871);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__9876_9880 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9877_9881 = null;var count__9878_9882 = (0);var i__9879_9883 = (0);while(true){
if((i__9879_9883 < count__9878_9882))
{var n_9884 = cljs.core._nth.call(null,chunk__9877_9881,i__9879_9883);n_9884.removeAttribute(cljs.core.name.call(null,name));
{
var G__9885 = seq__9876_9880;
var G__9886 = chunk__9877_9881;
var G__9887 = count__9878_9882;
var G__9888 = (i__9879_9883 + (1));
seq__9876_9880 = G__9885;
chunk__9877_9881 = G__9886;
count__9878_9882 = G__9887;
i__9879_9883 = G__9888;
continue;
}
} else
{var temp__4126__auto___9889 = cljs.core.seq.call(null,seq__9876_9880);if(temp__4126__auto___9889)
{var seq__9876_9890__$1 = temp__4126__auto___9889;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9876_9890__$1))
{var c__4410__auto___9891 = cljs.core.chunk_first.call(null,seq__9876_9890__$1);{
var G__9892 = cljs.core.chunk_rest.call(null,seq__9876_9890__$1);
var G__9893 = c__4410__auto___9891;
var G__9894 = cljs.core.count.call(null,c__4410__auto___9891);
var G__9895 = (0);
seq__9876_9880 = G__9892;
chunk__9877_9881 = G__9893;
count__9878_9882 = G__9894;
i__9879_9883 = G__9895;
continue;
}
} else
{var n_9896 = cljs.core.first.call(null,seq__9876_9890__$1);n_9896.removeAttribute(cljs.core.name.call(null,name));
{
var G__9897 = cljs.core.next.call(null,seq__9876_9890__$1);
var G__9898 = null;
var G__9899 = (0);
var G__9900 = (0);
seq__9876_9880 = G__9897;
chunk__9877_9881 = G__9898;
count__9878_9882 = G__9899;
i__9879_9883 = G__9900;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__9902 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__9902,(0),null);var v = cljs.core.nth.call(null,vec__9902,(1),null);if(cljs.core.truth_((function (){var and__3628__auto__ = k;if(cljs.core.truth_(and__3628__auto__))
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
return (function (p1__9903_SHARP_){var attr = attrs__$1.item(p1__9903_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__9910_9916 = cljs.core.seq.call(null,styles);var chunk__9911_9917 = null;var count__9912_9918 = (0);var i__9913_9919 = (0);while(true){
if((i__9913_9919 < count__9912_9918))
{var vec__9914_9920 = cljs.core._nth.call(null,chunk__9911_9917,i__9913_9919);var name_9921 = cljs.core.nth.call(null,vec__9914_9920,(0),null);var value_9922 = cljs.core.nth.call(null,vec__9914_9920,(1),null);domina.set_style_BANG_.call(null,content,name_9921,value_9922);
{
var G__9923 = seq__9910_9916;
var G__9924 = chunk__9911_9917;
var G__9925 = count__9912_9918;
var G__9926 = (i__9913_9919 + (1));
seq__9910_9916 = G__9923;
chunk__9911_9917 = G__9924;
count__9912_9918 = G__9925;
i__9913_9919 = G__9926;
continue;
}
} else
{var temp__4126__auto___9927 = cljs.core.seq.call(null,seq__9910_9916);if(temp__4126__auto___9927)
{var seq__9910_9928__$1 = temp__4126__auto___9927;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9910_9928__$1))
{var c__4410__auto___9929 = cljs.core.chunk_first.call(null,seq__9910_9928__$1);{
var G__9930 = cljs.core.chunk_rest.call(null,seq__9910_9928__$1);
var G__9931 = c__4410__auto___9929;
var G__9932 = cljs.core.count.call(null,c__4410__auto___9929);
var G__9933 = (0);
seq__9910_9916 = G__9930;
chunk__9911_9917 = G__9931;
count__9912_9918 = G__9932;
i__9913_9919 = G__9933;
continue;
}
} else
{var vec__9915_9934 = cljs.core.first.call(null,seq__9910_9928__$1);var name_9935 = cljs.core.nth.call(null,vec__9915_9934,(0),null);var value_9936 = cljs.core.nth.call(null,vec__9915_9934,(1),null);domina.set_style_BANG_.call(null,content,name_9935,value_9936);
{
var G__9937 = cljs.core.next.call(null,seq__9910_9928__$1);
var G__9938 = null;
var G__9939 = (0);
var G__9940 = (0);
seq__9910_9916 = G__9937;
chunk__9911_9917 = G__9938;
count__9912_9918 = G__9939;
i__9913_9919 = G__9940;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__9947_9953 = cljs.core.seq.call(null,attrs);var chunk__9948_9954 = null;var count__9949_9955 = (0);var i__9950_9956 = (0);while(true){
if((i__9950_9956 < count__9949_9955))
{var vec__9951_9957 = cljs.core._nth.call(null,chunk__9948_9954,i__9950_9956);var name_9958 = cljs.core.nth.call(null,vec__9951_9957,(0),null);var value_9959 = cljs.core.nth.call(null,vec__9951_9957,(1),null);domina.set_attr_BANG_.call(null,content,name_9958,value_9959);
{
var G__9960 = seq__9947_9953;
var G__9961 = chunk__9948_9954;
var G__9962 = count__9949_9955;
var G__9963 = (i__9950_9956 + (1));
seq__9947_9953 = G__9960;
chunk__9948_9954 = G__9961;
count__9949_9955 = G__9962;
i__9950_9956 = G__9963;
continue;
}
} else
{var temp__4126__auto___9964 = cljs.core.seq.call(null,seq__9947_9953);if(temp__4126__auto___9964)
{var seq__9947_9965__$1 = temp__4126__auto___9964;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9947_9965__$1))
{var c__4410__auto___9966 = cljs.core.chunk_first.call(null,seq__9947_9965__$1);{
var G__9967 = cljs.core.chunk_rest.call(null,seq__9947_9965__$1);
var G__9968 = c__4410__auto___9966;
var G__9969 = cljs.core.count.call(null,c__4410__auto___9966);
var G__9970 = (0);
seq__9947_9953 = G__9967;
chunk__9948_9954 = G__9968;
count__9949_9955 = G__9969;
i__9950_9956 = G__9970;
continue;
}
} else
{var vec__9952_9971 = cljs.core.first.call(null,seq__9947_9965__$1);var name_9972 = cljs.core.nth.call(null,vec__9952_9971,(0),null);var value_9973 = cljs.core.nth.call(null,vec__9952_9971,(1),null);domina.set_attr_BANG_.call(null,content,name_9972,value_9973);
{
var G__9974 = cljs.core.next.call(null,seq__9947_9965__$1);
var G__9975 = null;
var G__9976 = (0);
var G__9977 = (0);
seq__9947_9953 = G__9974;
chunk__9948_9954 = G__9975;
count__9949_9955 = G__9976;
i__9950_9956 = G__9977;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__9982_9986 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__9983_9987 = null;var count__9984_9988 = (0);var i__9985_9989 = (0);while(true){
if((i__9985_9989 < count__9984_9988))
{var node_9990 = cljs.core._nth.call(null,chunk__9983_9987,i__9985_9989);goog.dom.classes.add(node_9990,class$);
{
var G__9991 = seq__9982_9986;
var G__9992 = chunk__9983_9987;
var G__9993 = count__9984_9988;
var G__9994 = (i__9985_9989 + (1));
seq__9982_9986 = G__9991;
chunk__9983_9987 = G__9992;
count__9984_9988 = G__9993;
i__9985_9989 = G__9994;
continue;
}
} else
{var temp__4126__auto___9995 = cljs.core.seq.call(null,seq__9982_9986);if(temp__4126__auto___9995)
{var seq__9982_9996__$1 = temp__4126__auto___9995;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9982_9996__$1))
{var c__4410__auto___9997 = cljs.core.chunk_first.call(null,seq__9982_9996__$1);{
var G__9998 = cljs.core.chunk_rest.call(null,seq__9982_9996__$1);
var G__9999 = c__4410__auto___9997;
var G__10000 = cljs.core.count.call(null,c__4410__auto___9997);
var G__10001 = (0);
seq__9982_9986 = G__9998;
chunk__9983_9987 = G__9999;
count__9984_9988 = G__10000;
i__9985_9989 = G__10001;
continue;
}
} else
{var node_10002 = cljs.core.first.call(null,seq__9982_9996__$1);goog.dom.classes.add(node_10002,class$);
{
var G__10003 = cljs.core.next.call(null,seq__9982_9996__$1);
var G__10004 = null;
var G__10005 = (0);
var G__10006 = (0);
seq__9982_9986 = G__10003;
chunk__9983_9987 = G__10004;
count__9984_9988 = G__10005;
i__9985_9989 = G__10006;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__10011_10015 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10012_10016 = null;var count__10013_10017 = (0);var i__10014_10018 = (0);while(true){
if((i__10014_10018 < count__10013_10017))
{var node_10019 = cljs.core._nth.call(null,chunk__10012_10016,i__10014_10018);goog.dom.classes.remove(node_10019,class$);
{
var G__10020 = seq__10011_10015;
var G__10021 = chunk__10012_10016;
var G__10022 = count__10013_10017;
var G__10023 = (i__10014_10018 + (1));
seq__10011_10015 = G__10020;
chunk__10012_10016 = G__10021;
count__10013_10017 = G__10022;
i__10014_10018 = G__10023;
continue;
}
} else
{var temp__4126__auto___10024 = cljs.core.seq.call(null,seq__10011_10015);if(temp__4126__auto___10024)
{var seq__10011_10025__$1 = temp__4126__auto___10024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10011_10025__$1))
{var c__4410__auto___10026 = cljs.core.chunk_first.call(null,seq__10011_10025__$1);{
var G__10027 = cljs.core.chunk_rest.call(null,seq__10011_10025__$1);
var G__10028 = c__4410__auto___10026;
var G__10029 = cljs.core.count.call(null,c__4410__auto___10026);
var G__10030 = (0);
seq__10011_10015 = G__10027;
chunk__10012_10016 = G__10028;
count__10013_10017 = G__10029;
i__10014_10018 = G__10030;
continue;
}
} else
{var node_10031 = cljs.core.first.call(null,seq__10011_10025__$1);goog.dom.classes.remove(node_10031,class$);
{
var G__10032 = cljs.core.next.call(null,seq__10011_10025__$1);
var G__10033 = null;
var G__10034 = (0);
var G__10035 = (0);
seq__10011_10015 = G__10032;
chunk__10012_10016 = G__10033;
count__10013_10017 = G__10034;
i__10014_10018 = G__10035;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__10040_10044 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10041_10045 = null;var count__10042_10046 = (0);var i__10043_10047 = (0);while(true){
if((i__10043_10047 < count__10042_10046))
{var node_10048 = cljs.core._nth.call(null,chunk__10041_10045,i__10043_10047);goog.dom.classes.toggle(node_10048,class$);
{
var G__10049 = seq__10040_10044;
var G__10050 = chunk__10041_10045;
var G__10051 = count__10042_10046;
var G__10052 = (i__10043_10047 + (1));
seq__10040_10044 = G__10049;
chunk__10041_10045 = G__10050;
count__10042_10046 = G__10051;
i__10043_10047 = G__10052;
continue;
}
} else
{var temp__4126__auto___10053 = cljs.core.seq.call(null,seq__10040_10044);if(temp__4126__auto___10053)
{var seq__10040_10054__$1 = temp__4126__auto___10053;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10040_10054__$1))
{var c__4410__auto___10055 = cljs.core.chunk_first.call(null,seq__10040_10054__$1);{
var G__10056 = cljs.core.chunk_rest.call(null,seq__10040_10054__$1);
var G__10057 = c__4410__auto___10055;
var G__10058 = cljs.core.count.call(null,c__4410__auto___10055);
var G__10059 = (0);
seq__10040_10044 = G__10056;
chunk__10041_10045 = G__10057;
count__10042_10046 = G__10058;
i__10043_10047 = G__10059;
continue;
}
} else
{var node_10060 = cljs.core.first.call(null,seq__10040_10054__$1);goog.dom.classes.toggle(node_10060,class$);
{
var G__10061 = cljs.core.next.call(null,seq__10040_10054__$1);
var G__10062 = null;
var G__10063 = (0);
var G__10064 = (0);
seq__10040_10044 = G__10061;
chunk__10041_10045 = G__10062;
count__10042_10046 = G__10063;
i__10043_10047 = G__10064;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_10073__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__10069_10074 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10070_10075 = null;var count__10071_10076 = (0);var i__10072_10077 = (0);while(true){
if((i__10072_10077 < count__10071_10076))
{var node_10078 = cljs.core._nth.call(null,chunk__10070_10075,i__10072_10077);goog.dom.classes.set(node_10078,classes_10073__$1);
{
var G__10079 = seq__10069_10074;
var G__10080 = chunk__10070_10075;
var G__10081 = count__10071_10076;
var G__10082 = (i__10072_10077 + (1));
seq__10069_10074 = G__10079;
chunk__10070_10075 = G__10080;
count__10071_10076 = G__10081;
i__10072_10077 = G__10082;
continue;
}
} else
{var temp__4126__auto___10083 = cljs.core.seq.call(null,seq__10069_10074);if(temp__4126__auto___10083)
{var seq__10069_10084__$1 = temp__4126__auto___10083;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10069_10084__$1))
{var c__4410__auto___10085 = cljs.core.chunk_first.call(null,seq__10069_10084__$1);{
var G__10086 = cljs.core.chunk_rest.call(null,seq__10069_10084__$1);
var G__10087 = c__4410__auto___10085;
var G__10088 = cljs.core.count.call(null,c__4410__auto___10085);
var G__10089 = (0);
seq__10069_10074 = G__10086;
chunk__10070_10075 = G__10087;
count__10071_10076 = G__10088;
i__10072_10077 = G__10089;
continue;
}
} else
{var node_10090 = cljs.core.first.call(null,seq__10069_10084__$1);goog.dom.classes.set(node_10090,classes_10073__$1);
{
var G__10091 = cljs.core.next.call(null,seq__10069_10084__$1);
var G__10092 = null;
var G__10093 = (0);
var G__10094 = (0);
seq__10069_10074 = G__10091;
chunk__10070_10075 = G__10092;
count__10071_10076 = G__10093;
i__10072_10077 = G__10094;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__10099_10103 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10100_10104 = null;var count__10101_10105 = (0);var i__10102_10106 = (0);while(true){
if((i__10102_10106 < count__10101_10105))
{var node_10107 = cljs.core._nth.call(null,chunk__10100_10104,i__10102_10106);goog.dom.setTextContent(node_10107,value);
{
var G__10108 = seq__10099_10103;
var G__10109 = chunk__10100_10104;
var G__10110 = count__10101_10105;
var G__10111 = (i__10102_10106 + (1));
seq__10099_10103 = G__10108;
chunk__10100_10104 = G__10109;
count__10101_10105 = G__10110;
i__10102_10106 = G__10111;
continue;
}
} else
{var temp__4126__auto___10112 = cljs.core.seq.call(null,seq__10099_10103);if(temp__4126__auto___10112)
{var seq__10099_10113__$1 = temp__4126__auto___10112;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10099_10113__$1))
{var c__4410__auto___10114 = cljs.core.chunk_first.call(null,seq__10099_10113__$1);{
var G__10115 = cljs.core.chunk_rest.call(null,seq__10099_10113__$1);
var G__10116 = c__4410__auto___10114;
var G__10117 = cljs.core.count.call(null,c__4410__auto___10114);
var G__10118 = (0);
seq__10099_10103 = G__10115;
chunk__10100_10104 = G__10116;
count__10101_10105 = G__10117;
i__10102_10106 = G__10118;
continue;
}
} else
{var node_10119 = cljs.core.first.call(null,seq__10099_10113__$1);goog.dom.setTextContent(node_10119,value);
{
var G__10120 = cljs.core.next.call(null,seq__10099_10113__$1);
var G__10121 = null;
var G__10122 = (0);
var G__10123 = (0);
seq__10099_10103 = G__10120;
chunk__10100_10104 = G__10121;
count__10101_10105 = G__10122;
i__10102_10106 = G__10123;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__10128_10132 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10129_10133 = null;var count__10130_10134 = (0);var i__10131_10135 = (0);while(true){
if((i__10131_10135 < count__10130_10134))
{var node_10136 = cljs.core._nth.call(null,chunk__10129_10133,i__10131_10135);goog.dom.forms.setValue(node_10136,value);
{
var G__10137 = seq__10128_10132;
var G__10138 = chunk__10129_10133;
var G__10139 = count__10130_10134;
var G__10140 = (i__10131_10135 + (1));
seq__10128_10132 = G__10137;
chunk__10129_10133 = G__10138;
count__10130_10134 = G__10139;
i__10131_10135 = G__10140;
continue;
}
} else
{var temp__4126__auto___10141 = cljs.core.seq.call(null,seq__10128_10132);if(temp__4126__auto___10141)
{var seq__10128_10142__$1 = temp__4126__auto___10141;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10128_10142__$1))
{var c__4410__auto___10143 = cljs.core.chunk_first.call(null,seq__10128_10142__$1);{
var G__10144 = cljs.core.chunk_rest.call(null,seq__10128_10142__$1);
var G__10145 = c__4410__auto___10143;
var G__10146 = cljs.core.count.call(null,c__4410__auto___10143);
var G__10147 = (0);
seq__10128_10132 = G__10144;
chunk__10129_10133 = G__10145;
count__10130_10134 = G__10146;
i__10131_10135 = G__10147;
continue;
}
} else
{var node_10148 = cljs.core.first.call(null,seq__10128_10142__$1);goog.dom.forms.setValue(node_10148,value);
{
var G__10149 = cljs.core.next.call(null,seq__10128_10142__$1);
var G__10150 = null;
var G__10151 = (0);
var G__10152 = (0);
seq__10128_10132 = G__10149;
chunk__10129_10133 = G__10150;
count__10130_10134 = G__10151;
i__10131_10135 = G__10152;
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
{var value_10163 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__10159_10164 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10160_10165 = null;var count__10161_10166 = (0);var i__10162_10167 = (0);while(true){
if((i__10162_10167 < count__10161_10166))
{var node_10168 = cljs.core._nth.call(null,chunk__10160_10165,i__10162_10167);node_10168.innerHTML = value_10163;
{
var G__10169 = seq__10159_10164;
var G__10170 = chunk__10160_10165;
var G__10171 = count__10161_10166;
var G__10172 = (i__10162_10167 + (1));
seq__10159_10164 = G__10169;
chunk__10160_10165 = G__10170;
count__10161_10166 = G__10171;
i__10162_10167 = G__10172;
continue;
}
} else
{var temp__4126__auto___10173 = cljs.core.seq.call(null,seq__10159_10164);if(temp__4126__auto___10173)
{var seq__10159_10174__$1 = temp__4126__auto___10173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10159_10174__$1))
{var c__4410__auto___10175 = cljs.core.chunk_first.call(null,seq__10159_10174__$1);{
var G__10176 = cljs.core.chunk_rest.call(null,seq__10159_10174__$1);
var G__10177 = c__4410__auto___10175;
var G__10178 = cljs.core.count.call(null,c__4410__auto___10175);
var G__10179 = (0);
seq__10159_10164 = G__10176;
chunk__10160_10165 = G__10177;
count__10161_10166 = G__10178;
i__10162_10167 = G__10179;
continue;
}
} else
{var node_10180 = cljs.core.first.call(null,seq__10159_10174__$1);node_10180.innerHTML = value_10163;
{
var G__10181 = cljs.core.next.call(null,seq__10159_10174__$1);
var G__10182 = null;
var G__10183 = (0);
var G__10184 = (0);
seq__10159_10164 = G__10181;
chunk__10160_10165 = G__10182;
count__10161_10166 = G__10183;
i__10162_10167 = G__10184;
continue;
}
}
} else
{}
}
break;
}
}catch (e10158){if((e10158 instanceof Error))
{var e_10185 = e10158;domina.replace_children_BANG_.call(null,content,value_10163);
} else
{throw e10158;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__10192_10196 = cljs.core.seq.call(null,children);var chunk__10193_10197 = null;var count__10194_10198 = (0);var i__10195_10199 = (0);while(true){
if((i__10195_10199 < count__10194_10198))
{var child_10200 = cljs.core._nth.call(null,chunk__10193_10197,i__10195_10199);frag.appendChild(child_10200);
{
var G__10201 = seq__10192_10196;
var G__10202 = chunk__10193_10197;
var G__10203 = count__10194_10198;
var G__10204 = (i__10195_10199 + (1));
seq__10192_10196 = G__10201;
chunk__10193_10197 = G__10202;
count__10194_10198 = G__10203;
i__10195_10199 = G__10204;
continue;
}
} else
{var temp__4126__auto___10205 = cljs.core.seq.call(null,seq__10192_10196);if(temp__4126__auto___10205)
{var seq__10192_10206__$1 = temp__4126__auto___10205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10192_10206__$1))
{var c__4410__auto___10207 = cljs.core.chunk_first.call(null,seq__10192_10206__$1);{
var G__10208 = cljs.core.chunk_rest.call(null,seq__10192_10206__$1);
var G__10209 = c__4410__auto___10207;
var G__10210 = cljs.core.count.call(null,c__4410__auto___10207);
var G__10211 = (0);
seq__10192_10196 = G__10208;
chunk__10193_10197 = G__10209;
count__10194_10198 = G__10210;
i__10195_10199 = G__10211;
continue;
}
} else
{var child_10212 = cljs.core.first.call(null,seq__10192_10206__$1);frag.appendChild(child_10212);
{
var G__10213 = cljs.core.next.call(null,seq__10192_10206__$1);
var G__10214 = null;
var G__10215 = (0);
var G__10216 = (0);
seq__10192_10196 = G__10213;
chunk__10193_10197 = G__10214;
count__10194_10198 = G__10215;
i__10195_10199 = G__10216;
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
return (function (p1__10186_SHARP_,p2__10187_SHARP_){return f.call(null,p1__10186_SHARP_,p2__10187_SHARP_);
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
{if((function (){var G__10218 = list_thing;if(G__10218)
{var bit__4304__auto__ = (G__10218.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__10218.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10218.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10218);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10218);
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
{if((function (){var G__10219 = content;if(G__10219)
{var bit__4304__auto__ = (G__10219.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__10219.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10219.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10219);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10219);
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
{if((function (){var G__10220 = content;if(G__10220)
{var bit__4304__auto__ = (G__10220.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__10220.cljs$core$ISeqable$))
{return true;
} else
{if((!G__10220.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10220);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__10220);
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
