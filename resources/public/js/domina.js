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
var opt_wrapper_10799 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_10800 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_10801 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_10801,opt_wrapper_10799,table_section_wrapper_10800,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_10799,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_10800,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_10800,cell_wrapper_10801,table_section_wrapper_10800,table_section_wrapper_10800]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3628__auto__ = div.firstChild;if(cljs.core.truth_(and__3628__auto__))
{return div.firstChild.childNodes;
} else
{return and__3628__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__10806 = cljs.core.seq.call(null,tbody);var chunk__10807 = null;var count__10808 = (0);var i__10809 = (0);while(true){
if((i__10809 < count__10808))
{var child = cljs.core._nth.call(null,chunk__10807,i__10809);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__10810 = seq__10806;
var G__10811 = chunk__10807;
var G__10812 = count__10808;
var G__10813 = (i__10809 + (1));
seq__10806 = G__10810;
chunk__10807 = G__10811;
count__10808 = G__10812;
i__10809 = G__10813;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10806);if(temp__4126__auto__)
{var seq__10806__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10806__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__10806__$1);{
var G__10814 = cljs.core.chunk_rest.call(null,seq__10806__$1);
var G__10815 = c__4410__auto__;
var G__10816 = cljs.core.count.call(null,c__4410__auto__);
var G__10817 = (0);
seq__10806 = G__10814;
chunk__10807 = G__10815;
count__10808 = G__10816;
i__10809 = G__10817;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__10806__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__10818 = cljs.core.next.call(null,seq__10806__$1);
var G__10819 = null;
var G__10820 = (0);
var G__10821 = (0);
seq__10806 = G__10818;
chunk__10807 = G__10819;
count__10808 = G__10820;
i__10809 = G__10821;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__10823 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__10823,(0),null);var start_wrap = cljs.core.nth.call(null,vec__10823,(1),null);var end_wrap = cljs.core.nth.call(null,vec__10823,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__10824 = wrapper.lastChild;
var G__10825 = (level - (1));
wrapper = G__10824;
level = G__10825;
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
domina.DomContent = (function (){var obj10827 = {};return obj10827;
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
log_debug.cljs$lang$applyTo = (function (arglist__10828){
var mesg = cljs.core.seq(arglist__10828);
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
log.cljs$lang$applyTo = (function (arglist__10829){
var mesg = cljs.core.seq(arglist__10829);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__10830){
var contents = cljs.core.seq(arglist__10830);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__10831_SHARP_){return p1__10831_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__10832_SHARP_,p2__10833_SHARP_){return goog.dom.insertChildAt(p1__10832_SHARP_,p2__10833_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__10835_SHARP_,p2__10834_SHARP_){return goog.dom.insertSiblingBefore(p2__10834_SHARP_,p1__10835_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__10837_SHARP_,p2__10836_SHARP_){return goog.dom.insertSiblingAfter(p2__10836_SHARP_,p1__10837_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__10839_SHARP_,p2__10838_SHARP_){return goog.dom.replaceNode(p2__10838_SHARP_,p1__10839_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__10844_10848 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10845_10849 = null;var count__10846_10850 = (0);var i__10847_10851 = (0);while(true){
if((i__10847_10851 < count__10846_10850))
{var n_10852 = cljs.core._nth.call(null,chunk__10845_10849,i__10847_10851);goog.style.setStyle(n_10852,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__10853 = seq__10844_10848;
var G__10854 = chunk__10845_10849;
var G__10855 = count__10846_10850;
var G__10856 = (i__10847_10851 + (1));
seq__10844_10848 = G__10853;
chunk__10845_10849 = G__10854;
count__10846_10850 = G__10855;
i__10847_10851 = G__10856;
continue;
}
} else
{var temp__4126__auto___10857 = cljs.core.seq.call(null,seq__10844_10848);if(temp__4126__auto___10857)
{var seq__10844_10858__$1 = temp__4126__auto___10857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10844_10858__$1))
{var c__4410__auto___10859 = cljs.core.chunk_first.call(null,seq__10844_10858__$1);{
var G__10860 = cljs.core.chunk_rest.call(null,seq__10844_10858__$1);
var G__10861 = c__4410__auto___10859;
var G__10862 = cljs.core.count.call(null,c__4410__auto___10859);
var G__10863 = (0);
seq__10844_10848 = G__10860;
chunk__10845_10849 = G__10861;
count__10846_10850 = G__10862;
i__10847_10851 = G__10863;
continue;
}
} else
{var n_10864 = cljs.core.first.call(null,seq__10844_10858__$1);goog.style.setStyle(n_10864,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__10865 = cljs.core.next.call(null,seq__10844_10858__$1);
var G__10866 = null;
var G__10867 = (0);
var G__10868 = (0);
seq__10844_10848 = G__10865;
chunk__10845_10849 = G__10866;
count__10846_10850 = G__10867;
i__10847_10851 = G__10868;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10869){
var content = cljs.core.first(arglist__10869);
arglist__10869 = cljs.core.next(arglist__10869);
var name = cljs.core.first(arglist__10869);
var value = cljs.core.rest(arglist__10869);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__10874_10878 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10875_10879 = null;var count__10876_10880 = (0);var i__10877_10881 = (0);while(true){
if((i__10877_10881 < count__10876_10880))
{var n_10882 = cljs.core._nth.call(null,chunk__10875_10879,i__10877_10881);n_10882.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__10883 = seq__10874_10878;
var G__10884 = chunk__10875_10879;
var G__10885 = count__10876_10880;
var G__10886 = (i__10877_10881 + (1));
seq__10874_10878 = G__10883;
chunk__10875_10879 = G__10884;
count__10876_10880 = G__10885;
i__10877_10881 = G__10886;
continue;
}
} else
{var temp__4126__auto___10887 = cljs.core.seq.call(null,seq__10874_10878);if(temp__4126__auto___10887)
{var seq__10874_10888__$1 = temp__4126__auto___10887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10874_10888__$1))
{var c__4410__auto___10889 = cljs.core.chunk_first.call(null,seq__10874_10888__$1);{
var G__10890 = cljs.core.chunk_rest.call(null,seq__10874_10888__$1);
var G__10891 = c__4410__auto___10889;
var G__10892 = cljs.core.count.call(null,c__4410__auto___10889);
var G__10893 = (0);
seq__10874_10878 = G__10890;
chunk__10875_10879 = G__10891;
count__10876_10880 = G__10892;
i__10877_10881 = G__10893;
continue;
}
} else
{var n_10894 = cljs.core.first.call(null,seq__10874_10888__$1);n_10894.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__10895 = cljs.core.next.call(null,seq__10874_10888__$1);
var G__10896 = null;
var G__10897 = (0);
var G__10898 = (0);
seq__10874_10878 = G__10895;
chunk__10875_10879 = G__10896;
count__10876_10880 = G__10897;
i__10877_10881 = G__10898;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__10899){
var content = cljs.core.first(arglist__10899);
arglist__10899 = cljs.core.next(arglist__10899);
var name = cljs.core.first(arglist__10899);
var value = cljs.core.rest(arglist__10899);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__10904_10908 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__10905_10909 = null;var count__10906_10910 = (0);var i__10907_10911 = (0);while(true){
if((i__10907_10911 < count__10906_10910))
{var n_10912 = cljs.core._nth.call(null,chunk__10905_10909,i__10907_10911);n_10912.removeAttribute(cljs.core.name.call(null,name));
{
var G__10913 = seq__10904_10908;
var G__10914 = chunk__10905_10909;
var G__10915 = count__10906_10910;
var G__10916 = (i__10907_10911 + (1));
seq__10904_10908 = G__10913;
chunk__10905_10909 = G__10914;
count__10906_10910 = G__10915;
i__10907_10911 = G__10916;
continue;
}
} else
{var temp__4126__auto___10917 = cljs.core.seq.call(null,seq__10904_10908);if(temp__4126__auto___10917)
{var seq__10904_10918__$1 = temp__4126__auto___10917;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10904_10918__$1))
{var c__4410__auto___10919 = cljs.core.chunk_first.call(null,seq__10904_10918__$1);{
var G__10920 = cljs.core.chunk_rest.call(null,seq__10904_10918__$1);
var G__10921 = c__4410__auto___10919;
var G__10922 = cljs.core.count.call(null,c__4410__auto___10919);
var G__10923 = (0);
seq__10904_10908 = G__10920;
chunk__10905_10909 = G__10921;
count__10906_10910 = G__10922;
i__10907_10911 = G__10923;
continue;
}
} else
{var n_10924 = cljs.core.first.call(null,seq__10904_10918__$1);n_10924.removeAttribute(cljs.core.name.call(null,name));
{
var G__10925 = cljs.core.next.call(null,seq__10904_10918__$1);
var G__10926 = null;
var G__10927 = (0);
var G__10928 = (0);
seq__10904_10908 = G__10925;
chunk__10905_10909 = G__10926;
count__10906_10910 = G__10927;
i__10907_10911 = G__10928;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__10930 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__10930,(0),null);var v = cljs.core.nth.call(null,vec__10930,(1),null);if(cljs.core.truth_((function (){var and__3628__auto__ = k;if(cljs.core.truth_(and__3628__auto__))
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
return (function (p1__10931_SHARP_){var attr = attrs__$1.item(p1__10931_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__10938_10944 = cljs.core.seq.call(null,styles);var chunk__10939_10945 = null;var count__10940_10946 = (0);var i__10941_10947 = (0);while(true){
if((i__10941_10947 < count__10940_10946))
{var vec__10942_10948 = cljs.core._nth.call(null,chunk__10939_10945,i__10941_10947);var name_10949 = cljs.core.nth.call(null,vec__10942_10948,(0),null);var value_10950 = cljs.core.nth.call(null,vec__10942_10948,(1),null);domina.set_style_BANG_.call(null,content,name_10949,value_10950);
{
var G__10951 = seq__10938_10944;
var G__10952 = chunk__10939_10945;
var G__10953 = count__10940_10946;
var G__10954 = (i__10941_10947 + (1));
seq__10938_10944 = G__10951;
chunk__10939_10945 = G__10952;
count__10940_10946 = G__10953;
i__10941_10947 = G__10954;
continue;
}
} else
{var temp__4126__auto___10955 = cljs.core.seq.call(null,seq__10938_10944);if(temp__4126__auto___10955)
{var seq__10938_10956__$1 = temp__4126__auto___10955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10938_10956__$1))
{var c__4410__auto___10957 = cljs.core.chunk_first.call(null,seq__10938_10956__$1);{
var G__10958 = cljs.core.chunk_rest.call(null,seq__10938_10956__$1);
var G__10959 = c__4410__auto___10957;
var G__10960 = cljs.core.count.call(null,c__4410__auto___10957);
var G__10961 = (0);
seq__10938_10944 = G__10958;
chunk__10939_10945 = G__10959;
count__10940_10946 = G__10960;
i__10941_10947 = G__10961;
continue;
}
} else
{var vec__10943_10962 = cljs.core.first.call(null,seq__10938_10956__$1);var name_10963 = cljs.core.nth.call(null,vec__10943_10962,(0),null);var value_10964 = cljs.core.nth.call(null,vec__10943_10962,(1),null);domina.set_style_BANG_.call(null,content,name_10963,value_10964);
{
var G__10965 = cljs.core.next.call(null,seq__10938_10956__$1);
var G__10966 = null;
var G__10967 = (0);
var G__10968 = (0);
seq__10938_10944 = G__10965;
chunk__10939_10945 = G__10966;
count__10940_10946 = G__10967;
i__10941_10947 = G__10968;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__10975_10981 = cljs.core.seq.call(null,attrs);var chunk__10976_10982 = null;var count__10977_10983 = (0);var i__10978_10984 = (0);while(true){
if((i__10978_10984 < count__10977_10983))
{var vec__10979_10985 = cljs.core._nth.call(null,chunk__10976_10982,i__10978_10984);var name_10986 = cljs.core.nth.call(null,vec__10979_10985,(0),null);var value_10987 = cljs.core.nth.call(null,vec__10979_10985,(1),null);domina.set_attr_BANG_.call(null,content,name_10986,value_10987);
{
var G__10988 = seq__10975_10981;
var G__10989 = chunk__10976_10982;
var G__10990 = count__10977_10983;
var G__10991 = (i__10978_10984 + (1));
seq__10975_10981 = G__10988;
chunk__10976_10982 = G__10989;
count__10977_10983 = G__10990;
i__10978_10984 = G__10991;
continue;
}
} else
{var temp__4126__auto___10992 = cljs.core.seq.call(null,seq__10975_10981);if(temp__4126__auto___10992)
{var seq__10975_10993__$1 = temp__4126__auto___10992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10975_10993__$1))
{var c__4410__auto___10994 = cljs.core.chunk_first.call(null,seq__10975_10993__$1);{
var G__10995 = cljs.core.chunk_rest.call(null,seq__10975_10993__$1);
var G__10996 = c__4410__auto___10994;
var G__10997 = cljs.core.count.call(null,c__4410__auto___10994);
var G__10998 = (0);
seq__10975_10981 = G__10995;
chunk__10976_10982 = G__10996;
count__10977_10983 = G__10997;
i__10978_10984 = G__10998;
continue;
}
} else
{var vec__10980_10999 = cljs.core.first.call(null,seq__10975_10993__$1);var name_11000 = cljs.core.nth.call(null,vec__10980_10999,(0),null);var value_11001 = cljs.core.nth.call(null,vec__10980_10999,(1),null);domina.set_attr_BANG_.call(null,content,name_11000,value_11001);
{
var G__11002 = cljs.core.next.call(null,seq__10975_10993__$1);
var G__11003 = null;
var G__11004 = (0);
var G__11005 = (0);
seq__10975_10981 = G__11002;
chunk__10976_10982 = G__11003;
count__10977_10983 = G__11004;
i__10978_10984 = G__11005;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__11010_11014 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__11011_11015 = null;var count__11012_11016 = (0);var i__11013_11017 = (0);while(true){
if((i__11013_11017 < count__11012_11016))
{var node_11018 = cljs.core._nth.call(null,chunk__11011_11015,i__11013_11017);goog.dom.classes.add(node_11018,class$);
{
var G__11019 = seq__11010_11014;
var G__11020 = chunk__11011_11015;
var G__11021 = count__11012_11016;
var G__11022 = (i__11013_11017 + (1));
seq__11010_11014 = G__11019;
chunk__11011_11015 = G__11020;
count__11012_11016 = G__11021;
i__11013_11017 = G__11022;
continue;
}
} else
{var temp__4126__auto___11023 = cljs.core.seq.call(null,seq__11010_11014);if(temp__4126__auto___11023)
{var seq__11010_11024__$1 = temp__4126__auto___11023;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11010_11024__$1))
{var c__4410__auto___11025 = cljs.core.chunk_first.call(null,seq__11010_11024__$1);{
var G__11026 = cljs.core.chunk_rest.call(null,seq__11010_11024__$1);
var G__11027 = c__4410__auto___11025;
var G__11028 = cljs.core.count.call(null,c__4410__auto___11025);
var G__11029 = (0);
seq__11010_11014 = G__11026;
chunk__11011_11015 = G__11027;
count__11012_11016 = G__11028;
i__11013_11017 = G__11029;
continue;
}
} else
{var node_11030 = cljs.core.first.call(null,seq__11010_11024__$1);goog.dom.classes.add(node_11030,class$);
{
var G__11031 = cljs.core.next.call(null,seq__11010_11024__$1);
var G__11032 = null;
var G__11033 = (0);
var G__11034 = (0);
seq__11010_11014 = G__11031;
chunk__11011_11015 = G__11032;
count__11012_11016 = G__11033;
i__11013_11017 = G__11034;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__11039_11043 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__11040_11044 = null;var count__11041_11045 = (0);var i__11042_11046 = (0);while(true){
if((i__11042_11046 < count__11041_11045))
{var node_11047 = cljs.core._nth.call(null,chunk__11040_11044,i__11042_11046);goog.dom.classes.remove(node_11047,class$);
{
var G__11048 = seq__11039_11043;
var G__11049 = chunk__11040_11044;
var G__11050 = count__11041_11045;
var G__11051 = (i__11042_11046 + (1));
seq__11039_11043 = G__11048;
chunk__11040_11044 = G__11049;
count__11041_11045 = G__11050;
i__11042_11046 = G__11051;
continue;
}
} else
{var temp__4126__auto___11052 = cljs.core.seq.call(null,seq__11039_11043);if(temp__4126__auto___11052)
{var seq__11039_11053__$1 = temp__4126__auto___11052;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11039_11053__$1))
{var c__4410__auto___11054 = cljs.core.chunk_first.call(null,seq__11039_11053__$1);{
var G__11055 = cljs.core.chunk_rest.call(null,seq__11039_11053__$1);
var G__11056 = c__4410__auto___11054;
var G__11057 = cljs.core.count.call(null,c__4410__auto___11054);
var G__11058 = (0);
seq__11039_11043 = G__11055;
chunk__11040_11044 = G__11056;
count__11041_11045 = G__11057;
i__11042_11046 = G__11058;
continue;
}
} else
{var node_11059 = cljs.core.first.call(null,seq__11039_11053__$1);goog.dom.classes.remove(node_11059,class$);
{
var G__11060 = cljs.core.next.call(null,seq__11039_11053__$1);
var G__11061 = null;
var G__11062 = (0);
var G__11063 = (0);
seq__11039_11043 = G__11060;
chunk__11040_11044 = G__11061;
count__11041_11045 = G__11062;
i__11042_11046 = G__11063;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__11068_11072 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__11069_11073 = null;var count__11070_11074 = (0);var i__11071_11075 = (0);while(true){
if((i__11071_11075 < count__11070_11074))
{var node_11076 = cljs.core._nth.call(null,chunk__11069_11073,i__11071_11075);goog.dom.classes.toggle(node_11076,class$);
{
var G__11077 = seq__11068_11072;
var G__11078 = chunk__11069_11073;
var G__11079 = count__11070_11074;
var G__11080 = (i__11071_11075 + (1));
seq__11068_11072 = G__11077;
chunk__11069_11073 = G__11078;
count__11070_11074 = G__11079;
i__11071_11075 = G__11080;
continue;
}
} else
{var temp__4126__auto___11081 = cljs.core.seq.call(null,seq__11068_11072);if(temp__4126__auto___11081)
{var seq__11068_11082__$1 = temp__4126__auto___11081;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11068_11082__$1))
{var c__4410__auto___11083 = cljs.core.chunk_first.call(null,seq__11068_11082__$1);{
var G__11084 = cljs.core.chunk_rest.call(null,seq__11068_11082__$1);
var G__11085 = c__4410__auto___11083;
var G__11086 = cljs.core.count.call(null,c__4410__auto___11083);
var G__11087 = (0);
seq__11068_11072 = G__11084;
chunk__11069_11073 = G__11085;
count__11070_11074 = G__11086;
i__11071_11075 = G__11087;
continue;
}
} else
{var node_11088 = cljs.core.first.call(null,seq__11068_11082__$1);goog.dom.classes.toggle(node_11088,class$);
{
var G__11089 = cljs.core.next.call(null,seq__11068_11082__$1);
var G__11090 = null;
var G__11091 = (0);
var G__11092 = (0);
seq__11068_11072 = G__11089;
chunk__11069_11073 = G__11090;
count__11070_11074 = G__11091;
i__11071_11075 = G__11092;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_11101__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__11097_11102 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__11098_11103 = null;var count__11099_11104 = (0);var i__11100_11105 = (0);while(true){
if((i__11100_11105 < count__11099_11104))
{var node_11106 = cljs.core._nth.call(null,chunk__11098_11103,i__11100_11105);goog.dom.classes.set(node_11106,classes_11101__$1);
{
var G__11107 = seq__11097_11102;
var G__11108 = chunk__11098_11103;
var G__11109 = count__11099_11104;
var G__11110 = (i__11100_11105 + (1));
seq__11097_11102 = G__11107;
chunk__11098_11103 = G__11108;
count__11099_11104 = G__11109;
i__11100_11105 = G__11110;
continue;
}
} else
{var temp__4126__auto___11111 = cljs.core.seq.call(null,seq__11097_11102);if(temp__4126__auto___11111)
{var seq__11097_11112__$1 = temp__4126__auto___11111;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11097_11112__$1))
{var c__4410__auto___11113 = cljs.core.chunk_first.call(null,seq__11097_11112__$1);{
var G__11114 = cljs.core.chunk_rest.call(null,seq__11097_11112__$1);
var G__11115 = c__4410__auto___11113;
var G__11116 = cljs.core.count.call(null,c__4410__auto___11113);
var G__11117 = (0);
seq__11097_11102 = G__11114;
chunk__11098_11103 = G__11115;
count__11099_11104 = G__11116;
i__11100_11105 = G__11117;
continue;
}
} else
{var node_11118 = cljs.core.first.call(null,seq__11097_11112__$1);goog.dom.classes.set(node_11118,classes_11101__$1);
{
var G__11119 = cljs.core.next.call(null,seq__11097_11112__$1);
var G__11120 = null;
var G__11121 = (0);
var G__11122 = (0);
seq__11097_11102 = G__11119;
chunk__11098_11103 = G__11120;
count__11099_11104 = G__11121;
i__11100_11105 = G__11122;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__11127_11131 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__11128_11132 = null;var count__11129_11133 = (0);var i__11130_11134 = (0);while(true){
if((i__11130_11134 < count__11129_11133))
{var node_11135 = cljs.core._nth.call(null,chunk__11128_11132,i__11130_11134);goog.dom.setTextContent(node_11135,value);
{
var G__11136 = seq__11127_11131;
var G__11137 = chunk__11128_11132;
var G__11138 = count__11129_11133;
var G__11139 = (i__11130_11134 + (1));
seq__11127_11131 = G__11136;
chunk__11128_11132 = G__11137;
count__11129_11133 = G__11138;
i__11130_11134 = G__11139;
continue;
}
} else
{var temp__4126__auto___11140 = cljs.core.seq.call(null,seq__11127_11131);if(temp__4126__auto___11140)
{var seq__11127_11141__$1 = temp__4126__auto___11140;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11127_11141__$1))
{var c__4410__auto___11142 = cljs.core.chunk_first.call(null,seq__11127_11141__$1);{
var G__11143 = cljs.core.chunk_rest.call(null,seq__11127_11141__$1);
var G__11144 = c__4410__auto___11142;
var G__11145 = cljs.core.count.call(null,c__4410__auto___11142);
var G__11146 = (0);
seq__11127_11131 = G__11143;
chunk__11128_11132 = G__11144;
count__11129_11133 = G__11145;
i__11130_11134 = G__11146;
continue;
}
} else
{var node_11147 = cljs.core.first.call(null,seq__11127_11141__$1);goog.dom.setTextContent(node_11147,value);
{
var G__11148 = cljs.core.next.call(null,seq__11127_11141__$1);
var G__11149 = null;
var G__11150 = (0);
var G__11151 = (0);
seq__11127_11131 = G__11148;
chunk__11128_11132 = G__11149;
count__11129_11133 = G__11150;
i__11130_11134 = G__11151;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__11156_11160 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__11157_11161 = null;var count__11158_11162 = (0);var i__11159_11163 = (0);while(true){
if((i__11159_11163 < count__11158_11162))
{var node_11164 = cljs.core._nth.call(null,chunk__11157_11161,i__11159_11163);goog.dom.forms.setValue(node_11164,value);
{
var G__11165 = seq__11156_11160;
var G__11166 = chunk__11157_11161;
var G__11167 = count__11158_11162;
var G__11168 = (i__11159_11163 + (1));
seq__11156_11160 = G__11165;
chunk__11157_11161 = G__11166;
count__11158_11162 = G__11167;
i__11159_11163 = G__11168;
continue;
}
} else
{var temp__4126__auto___11169 = cljs.core.seq.call(null,seq__11156_11160);if(temp__4126__auto___11169)
{var seq__11156_11170__$1 = temp__4126__auto___11169;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11156_11170__$1))
{var c__4410__auto___11171 = cljs.core.chunk_first.call(null,seq__11156_11170__$1);{
var G__11172 = cljs.core.chunk_rest.call(null,seq__11156_11170__$1);
var G__11173 = c__4410__auto___11171;
var G__11174 = cljs.core.count.call(null,c__4410__auto___11171);
var G__11175 = (0);
seq__11156_11160 = G__11172;
chunk__11157_11161 = G__11173;
count__11158_11162 = G__11174;
i__11159_11163 = G__11175;
continue;
}
} else
{var node_11176 = cljs.core.first.call(null,seq__11156_11170__$1);goog.dom.forms.setValue(node_11176,value);
{
var G__11177 = cljs.core.next.call(null,seq__11156_11170__$1);
var G__11178 = null;
var G__11179 = (0);
var G__11180 = (0);
seq__11156_11160 = G__11177;
chunk__11157_11161 = G__11178;
count__11158_11162 = G__11179;
i__11159_11163 = G__11180;
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
{var value_11191 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__11187_11192 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__11188_11193 = null;var count__11189_11194 = (0);var i__11190_11195 = (0);while(true){
if((i__11190_11195 < count__11189_11194))
{var node_11196 = cljs.core._nth.call(null,chunk__11188_11193,i__11190_11195);node_11196.innerHTML = value_11191;
{
var G__11197 = seq__11187_11192;
var G__11198 = chunk__11188_11193;
var G__11199 = count__11189_11194;
var G__11200 = (i__11190_11195 + (1));
seq__11187_11192 = G__11197;
chunk__11188_11193 = G__11198;
count__11189_11194 = G__11199;
i__11190_11195 = G__11200;
continue;
}
} else
{var temp__4126__auto___11201 = cljs.core.seq.call(null,seq__11187_11192);if(temp__4126__auto___11201)
{var seq__11187_11202__$1 = temp__4126__auto___11201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11187_11202__$1))
{var c__4410__auto___11203 = cljs.core.chunk_first.call(null,seq__11187_11202__$1);{
var G__11204 = cljs.core.chunk_rest.call(null,seq__11187_11202__$1);
var G__11205 = c__4410__auto___11203;
var G__11206 = cljs.core.count.call(null,c__4410__auto___11203);
var G__11207 = (0);
seq__11187_11192 = G__11204;
chunk__11188_11193 = G__11205;
count__11189_11194 = G__11206;
i__11190_11195 = G__11207;
continue;
}
} else
{var node_11208 = cljs.core.first.call(null,seq__11187_11202__$1);node_11208.innerHTML = value_11191;
{
var G__11209 = cljs.core.next.call(null,seq__11187_11202__$1);
var G__11210 = null;
var G__11211 = (0);
var G__11212 = (0);
seq__11187_11192 = G__11209;
chunk__11188_11193 = G__11210;
count__11189_11194 = G__11211;
i__11190_11195 = G__11212;
continue;
}
}
} else
{}
}
break;
}
}catch (e11186){if((e11186 instanceof Error))
{var e_11213 = e11186;domina.replace_children_BANG_.call(null,content,value_11191);
} else
{throw e11186;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__11220_11224 = cljs.core.seq.call(null,children);var chunk__11221_11225 = null;var count__11222_11226 = (0);var i__11223_11227 = (0);while(true){
if((i__11223_11227 < count__11222_11226))
{var child_11228 = cljs.core._nth.call(null,chunk__11221_11225,i__11223_11227);frag.appendChild(child_11228);
{
var G__11229 = seq__11220_11224;
var G__11230 = chunk__11221_11225;
var G__11231 = count__11222_11226;
var G__11232 = (i__11223_11227 + (1));
seq__11220_11224 = G__11229;
chunk__11221_11225 = G__11230;
count__11222_11226 = G__11231;
i__11223_11227 = G__11232;
continue;
}
} else
{var temp__4126__auto___11233 = cljs.core.seq.call(null,seq__11220_11224);if(temp__4126__auto___11233)
{var seq__11220_11234__$1 = temp__4126__auto___11233;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11220_11234__$1))
{var c__4410__auto___11235 = cljs.core.chunk_first.call(null,seq__11220_11234__$1);{
var G__11236 = cljs.core.chunk_rest.call(null,seq__11220_11234__$1);
var G__11237 = c__4410__auto___11235;
var G__11238 = cljs.core.count.call(null,c__4410__auto___11235);
var G__11239 = (0);
seq__11220_11224 = G__11236;
chunk__11221_11225 = G__11237;
count__11222_11226 = G__11238;
i__11223_11227 = G__11239;
continue;
}
} else
{var child_11240 = cljs.core.first.call(null,seq__11220_11234__$1);frag.appendChild(child_11240);
{
var G__11241 = cljs.core.next.call(null,seq__11220_11234__$1);
var G__11242 = null;
var G__11243 = (0);
var G__11244 = (0);
seq__11220_11224 = G__11241;
chunk__11221_11225 = G__11242;
count__11222_11226 = G__11243;
i__11223_11227 = G__11244;
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
return (function (p1__11214_SHARP_,p2__11215_SHARP_){return f.call(null,p1__11214_SHARP_,p2__11215_SHARP_);
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
{if((function (){var G__11246 = list_thing;if(G__11246)
{var bit__4304__auto__ = (G__11246.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__11246.cljs$core$ISeqable$))
{return true;
} else
{if((!G__11246.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__11246);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__11246);
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
{if((function (){var G__11247 = content;if(G__11247)
{var bit__4304__auto__ = (G__11247.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__11247.cljs$core$ISeqable$))
{return true;
} else
{if((!G__11247.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__11247);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__11247);
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
{if((function (){var G__11248 = content;if(G__11248)
{var bit__4304__auto__ = (G__11248.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__11248.cljs$core$ISeqable$))
{return true;
} else
{if((!G__11248.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__11248);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__11248);
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
