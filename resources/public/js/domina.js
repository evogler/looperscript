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
var opt_wrapper_12811 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_12812 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_12813 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_12813,opt_wrapper_12811,table_section_wrapper_12812,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_12811,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_12812,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_12812,cell_wrapper_12813,table_section_wrapper_12812,table_section_wrapper_12812]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3628__auto__ = div.firstChild;if(cljs.core.truth_(and__3628__auto__))
{return div.firstChild.childNodes;
} else
{return and__3628__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__12818 = cljs.core.seq.call(null,tbody);var chunk__12819 = null;var count__12820 = (0);var i__12821 = (0);while(true){
if((i__12821 < count__12820))
{var child = cljs.core._nth.call(null,chunk__12819,i__12821);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__12822 = seq__12818;
var G__12823 = chunk__12819;
var G__12824 = count__12820;
var G__12825 = (i__12821 + (1));
seq__12818 = G__12822;
chunk__12819 = G__12823;
count__12820 = G__12824;
i__12821 = G__12825;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12818);if(temp__4126__auto__)
{var seq__12818__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12818__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__12818__$1);{
var G__12826 = cljs.core.chunk_rest.call(null,seq__12818__$1);
var G__12827 = c__4410__auto__;
var G__12828 = cljs.core.count.call(null,c__4410__auto__);
var G__12829 = (0);
seq__12818 = G__12826;
chunk__12819 = G__12827;
count__12820 = G__12828;
i__12821 = G__12829;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__12818__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__12830 = cljs.core.next.call(null,seq__12818__$1);
var G__12831 = null;
var G__12832 = (0);
var G__12833 = (0);
seq__12818 = G__12830;
chunk__12819 = G__12831;
count__12820 = G__12832;
i__12821 = G__12833;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__12835 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__12835,(0),null);var start_wrap = cljs.core.nth.call(null,vec__12835,(1),null);var end_wrap = cljs.core.nth.call(null,vec__12835,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__12836 = wrapper.lastChild;
var G__12837 = (level - (1));
wrapper = G__12836;
level = G__12837;
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
domina.DomContent = (function (){var obj12839 = {};return obj12839;
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
log_debug.cljs$lang$applyTo = (function (arglist__12840){
var mesg = cljs.core.seq(arglist__12840);
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
log.cljs$lang$applyTo = (function (arglist__12841){
var mesg = cljs.core.seq(arglist__12841);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__12842){
var contents = cljs.core.seq(arglist__12842);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__12843_SHARP_){return p1__12843_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__12844_SHARP_,p2__12845_SHARP_){return goog.dom.insertChildAt(p1__12844_SHARP_,p2__12845_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__12847_SHARP_,p2__12846_SHARP_){return goog.dom.insertSiblingBefore(p2__12846_SHARP_,p1__12847_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__12849_SHARP_,p2__12848_SHARP_){return goog.dom.insertSiblingAfter(p2__12848_SHARP_,p1__12849_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__12851_SHARP_,p2__12850_SHARP_){return goog.dom.replaceNode(p2__12850_SHARP_,p1__12851_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__12856_12860 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__12857_12861 = null;var count__12858_12862 = (0);var i__12859_12863 = (0);while(true){
if((i__12859_12863 < count__12858_12862))
{var n_12864 = cljs.core._nth.call(null,chunk__12857_12861,i__12859_12863);goog.style.setStyle(n_12864,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__12865 = seq__12856_12860;
var G__12866 = chunk__12857_12861;
var G__12867 = count__12858_12862;
var G__12868 = (i__12859_12863 + (1));
seq__12856_12860 = G__12865;
chunk__12857_12861 = G__12866;
count__12858_12862 = G__12867;
i__12859_12863 = G__12868;
continue;
}
} else
{var temp__4126__auto___12869 = cljs.core.seq.call(null,seq__12856_12860);if(temp__4126__auto___12869)
{var seq__12856_12870__$1 = temp__4126__auto___12869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12856_12870__$1))
{var c__4410__auto___12871 = cljs.core.chunk_first.call(null,seq__12856_12870__$1);{
var G__12872 = cljs.core.chunk_rest.call(null,seq__12856_12870__$1);
var G__12873 = c__4410__auto___12871;
var G__12874 = cljs.core.count.call(null,c__4410__auto___12871);
var G__12875 = (0);
seq__12856_12860 = G__12872;
chunk__12857_12861 = G__12873;
count__12858_12862 = G__12874;
i__12859_12863 = G__12875;
continue;
}
} else
{var n_12876 = cljs.core.first.call(null,seq__12856_12870__$1);goog.style.setStyle(n_12876,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__12877 = cljs.core.next.call(null,seq__12856_12870__$1);
var G__12878 = null;
var G__12879 = (0);
var G__12880 = (0);
seq__12856_12860 = G__12877;
chunk__12857_12861 = G__12878;
count__12858_12862 = G__12879;
i__12859_12863 = G__12880;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__12881){
var content = cljs.core.first(arglist__12881);
arglist__12881 = cljs.core.next(arglist__12881);
var name = cljs.core.first(arglist__12881);
var value = cljs.core.rest(arglist__12881);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__12886_12890 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__12887_12891 = null;var count__12888_12892 = (0);var i__12889_12893 = (0);while(true){
if((i__12889_12893 < count__12888_12892))
{var n_12894 = cljs.core._nth.call(null,chunk__12887_12891,i__12889_12893);n_12894.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__12895 = seq__12886_12890;
var G__12896 = chunk__12887_12891;
var G__12897 = count__12888_12892;
var G__12898 = (i__12889_12893 + (1));
seq__12886_12890 = G__12895;
chunk__12887_12891 = G__12896;
count__12888_12892 = G__12897;
i__12889_12893 = G__12898;
continue;
}
} else
{var temp__4126__auto___12899 = cljs.core.seq.call(null,seq__12886_12890);if(temp__4126__auto___12899)
{var seq__12886_12900__$1 = temp__4126__auto___12899;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12886_12900__$1))
{var c__4410__auto___12901 = cljs.core.chunk_first.call(null,seq__12886_12900__$1);{
var G__12902 = cljs.core.chunk_rest.call(null,seq__12886_12900__$1);
var G__12903 = c__4410__auto___12901;
var G__12904 = cljs.core.count.call(null,c__4410__auto___12901);
var G__12905 = (0);
seq__12886_12890 = G__12902;
chunk__12887_12891 = G__12903;
count__12888_12892 = G__12904;
i__12889_12893 = G__12905;
continue;
}
} else
{var n_12906 = cljs.core.first.call(null,seq__12886_12900__$1);n_12906.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__12907 = cljs.core.next.call(null,seq__12886_12900__$1);
var G__12908 = null;
var G__12909 = (0);
var G__12910 = (0);
seq__12886_12890 = G__12907;
chunk__12887_12891 = G__12908;
count__12888_12892 = G__12909;
i__12889_12893 = G__12910;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__12911){
var content = cljs.core.first(arglist__12911);
arglist__12911 = cljs.core.next(arglist__12911);
var name = cljs.core.first(arglist__12911);
var value = cljs.core.rest(arglist__12911);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__12916_12920 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__12917_12921 = null;var count__12918_12922 = (0);var i__12919_12923 = (0);while(true){
if((i__12919_12923 < count__12918_12922))
{var n_12924 = cljs.core._nth.call(null,chunk__12917_12921,i__12919_12923);n_12924.removeAttribute(cljs.core.name.call(null,name));
{
var G__12925 = seq__12916_12920;
var G__12926 = chunk__12917_12921;
var G__12927 = count__12918_12922;
var G__12928 = (i__12919_12923 + (1));
seq__12916_12920 = G__12925;
chunk__12917_12921 = G__12926;
count__12918_12922 = G__12927;
i__12919_12923 = G__12928;
continue;
}
} else
{var temp__4126__auto___12929 = cljs.core.seq.call(null,seq__12916_12920);if(temp__4126__auto___12929)
{var seq__12916_12930__$1 = temp__4126__auto___12929;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12916_12930__$1))
{var c__4410__auto___12931 = cljs.core.chunk_first.call(null,seq__12916_12930__$1);{
var G__12932 = cljs.core.chunk_rest.call(null,seq__12916_12930__$1);
var G__12933 = c__4410__auto___12931;
var G__12934 = cljs.core.count.call(null,c__4410__auto___12931);
var G__12935 = (0);
seq__12916_12920 = G__12932;
chunk__12917_12921 = G__12933;
count__12918_12922 = G__12934;
i__12919_12923 = G__12935;
continue;
}
} else
{var n_12936 = cljs.core.first.call(null,seq__12916_12930__$1);n_12936.removeAttribute(cljs.core.name.call(null,name));
{
var G__12937 = cljs.core.next.call(null,seq__12916_12930__$1);
var G__12938 = null;
var G__12939 = (0);
var G__12940 = (0);
seq__12916_12920 = G__12937;
chunk__12917_12921 = G__12938;
count__12918_12922 = G__12939;
i__12919_12923 = G__12940;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__12942 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__12942,(0),null);var v = cljs.core.nth.call(null,vec__12942,(1),null);if(cljs.core.truth_((function (){var and__3628__auto__ = k;if(cljs.core.truth_(and__3628__auto__))
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
return (function (p1__12943_SHARP_){var attr = attrs__$1.item(p1__12943_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__12950_12956 = cljs.core.seq.call(null,styles);var chunk__12951_12957 = null;var count__12952_12958 = (0);var i__12953_12959 = (0);while(true){
if((i__12953_12959 < count__12952_12958))
{var vec__12954_12960 = cljs.core._nth.call(null,chunk__12951_12957,i__12953_12959);var name_12961 = cljs.core.nth.call(null,vec__12954_12960,(0),null);var value_12962 = cljs.core.nth.call(null,vec__12954_12960,(1),null);domina.set_style_BANG_.call(null,content,name_12961,value_12962);
{
var G__12963 = seq__12950_12956;
var G__12964 = chunk__12951_12957;
var G__12965 = count__12952_12958;
var G__12966 = (i__12953_12959 + (1));
seq__12950_12956 = G__12963;
chunk__12951_12957 = G__12964;
count__12952_12958 = G__12965;
i__12953_12959 = G__12966;
continue;
}
} else
{var temp__4126__auto___12967 = cljs.core.seq.call(null,seq__12950_12956);if(temp__4126__auto___12967)
{var seq__12950_12968__$1 = temp__4126__auto___12967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12950_12968__$1))
{var c__4410__auto___12969 = cljs.core.chunk_first.call(null,seq__12950_12968__$1);{
var G__12970 = cljs.core.chunk_rest.call(null,seq__12950_12968__$1);
var G__12971 = c__4410__auto___12969;
var G__12972 = cljs.core.count.call(null,c__4410__auto___12969);
var G__12973 = (0);
seq__12950_12956 = G__12970;
chunk__12951_12957 = G__12971;
count__12952_12958 = G__12972;
i__12953_12959 = G__12973;
continue;
}
} else
{var vec__12955_12974 = cljs.core.first.call(null,seq__12950_12968__$1);var name_12975 = cljs.core.nth.call(null,vec__12955_12974,(0),null);var value_12976 = cljs.core.nth.call(null,vec__12955_12974,(1),null);domina.set_style_BANG_.call(null,content,name_12975,value_12976);
{
var G__12977 = cljs.core.next.call(null,seq__12950_12968__$1);
var G__12978 = null;
var G__12979 = (0);
var G__12980 = (0);
seq__12950_12956 = G__12977;
chunk__12951_12957 = G__12978;
count__12952_12958 = G__12979;
i__12953_12959 = G__12980;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__12987_12993 = cljs.core.seq.call(null,attrs);var chunk__12988_12994 = null;var count__12989_12995 = (0);var i__12990_12996 = (0);while(true){
if((i__12990_12996 < count__12989_12995))
{var vec__12991_12997 = cljs.core._nth.call(null,chunk__12988_12994,i__12990_12996);var name_12998 = cljs.core.nth.call(null,vec__12991_12997,(0),null);var value_12999 = cljs.core.nth.call(null,vec__12991_12997,(1),null);domina.set_attr_BANG_.call(null,content,name_12998,value_12999);
{
var G__13000 = seq__12987_12993;
var G__13001 = chunk__12988_12994;
var G__13002 = count__12989_12995;
var G__13003 = (i__12990_12996 + (1));
seq__12987_12993 = G__13000;
chunk__12988_12994 = G__13001;
count__12989_12995 = G__13002;
i__12990_12996 = G__13003;
continue;
}
} else
{var temp__4126__auto___13004 = cljs.core.seq.call(null,seq__12987_12993);if(temp__4126__auto___13004)
{var seq__12987_13005__$1 = temp__4126__auto___13004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12987_13005__$1))
{var c__4410__auto___13006 = cljs.core.chunk_first.call(null,seq__12987_13005__$1);{
var G__13007 = cljs.core.chunk_rest.call(null,seq__12987_13005__$1);
var G__13008 = c__4410__auto___13006;
var G__13009 = cljs.core.count.call(null,c__4410__auto___13006);
var G__13010 = (0);
seq__12987_12993 = G__13007;
chunk__12988_12994 = G__13008;
count__12989_12995 = G__13009;
i__12990_12996 = G__13010;
continue;
}
} else
{var vec__12992_13011 = cljs.core.first.call(null,seq__12987_13005__$1);var name_13012 = cljs.core.nth.call(null,vec__12992_13011,(0),null);var value_13013 = cljs.core.nth.call(null,vec__12992_13011,(1),null);domina.set_attr_BANG_.call(null,content,name_13012,value_13013);
{
var G__13014 = cljs.core.next.call(null,seq__12987_13005__$1);
var G__13015 = null;
var G__13016 = (0);
var G__13017 = (0);
seq__12987_12993 = G__13014;
chunk__12988_12994 = G__13015;
count__12989_12995 = G__13016;
i__12990_12996 = G__13017;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__13022_13026 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13023_13027 = null;var count__13024_13028 = (0);var i__13025_13029 = (0);while(true){
if((i__13025_13029 < count__13024_13028))
{var node_13030 = cljs.core._nth.call(null,chunk__13023_13027,i__13025_13029);goog.dom.classes.add(node_13030,class$);
{
var G__13031 = seq__13022_13026;
var G__13032 = chunk__13023_13027;
var G__13033 = count__13024_13028;
var G__13034 = (i__13025_13029 + (1));
seq__13022_13026 = G__13031;
chunk__13023_13027 = G__13032;
count__13024_13028 = G__13033;
i__13025_13029 = G__13034;
continue;
}
} else
{var temp__4126__auto___13035 = cljs.core.seq.call(null,seq__13022_13026);if(temp__4126__auto___13035)
{var seq__13022_13036__$1 = temp__4126__auto___13035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13022_13036__$1))
{var c__4410__auto___13037 = cljs.core.chunk_first.call(null,seq__13022_13036__$1);{
var G__13038 = cljs.core.chunk_rest.call(null,seq__13022_13036__$1);
var G__13039 = c__4410__auto___13037;
var G__13040 = cljs.core.count.call(null,c__4410__auto___13037);
var G__13041 = (0);
seq__13022_13026 = G__13038;
chunk__13023_13027 = G__13039;
count__13024_13028 = G__13040;
i__13025_13029 = G__13041;
continue;
}
} else
{var node_13042 = cljs.core.first.call(null,seq__13022_13036__$1);goog.dom.classes.add(node_13042,class$);
{
var G__13043 = cljs.core.next.call(null,seq__13022_13036__$1);
var G__13044 = null;
var G__13045 = (0);
var G__13046 = (0);
seq__13022_13026 = G__13043;
chunk__13023_13027 = G__13044;
count__13024_13028 = G__13045;
i__13025_13029 = G__13046;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__13051_13055 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13052_13056 = null;var count__13053_13057 = (0);var i__13054_13058 = (0);while(true){
if((i__13054_13058 < count__13053_13057))
{var node_13059 = cljs.core._nth.call(null,chunk__13052_13056,i__13054_13058);goog.dom.classes.remove(node_13059,class$);
{
var G__13060 = seq__13051_13055;
var G__13061 = chunk__13052_13056;
var G__13062 = count__13053_13057;
var G__13063 = (i__13054_13058 + (1));
seq__13051_13055 = G__13060;
chunk__13052_13056 = G__13061;
count__13053_13057 = G__13062;
i__13054_13058 = G__13063;
continue;
}
} else
{var temp__4126__auto___13064 = cljs.core.seq.call(null,seq__13051_13055);if(temp__4126__auto___13064)
{var seq__13051_13065__$1 = temp__4126__auto___13064;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13051_13065__$1))
{var c__4410__auto___13066 = cljs.core.chunk_first.call(null,seq__13051_13065__$1);{
var G__13067 = cljs.core.chunk_rest.call(null,seq__13051_13065__$1);
var G__13068 = c__4410__auto___13066;
var G__13069 = cljs.core.count.call(null,c__4410__auto___13066);
var G__13070 = (0);
seq__13051_13055 = G__13067;
chunk__13052_13056 = G__13068;
count__13053_13057 = G__13069;
i__13054_13058 = G__13070;
continue;
}
} else
{var node_13071 = cljs.core.first.call(null,seq__13051_13065__$1);goog.dom.classes.remove(node_13071,class$);
{
var G__13072 = cljs.core.next.call(null,seq__13051_13065__$1);
var G__13073 = null;
var G__13074 = (0);
var G__13075 = (0);
seq__13051_13055 = G__13072;
chunk__13052_13056 = G__13073;
count__13053_13057 = G__13074;
i__13054_13058 = G__13075;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__13080_13084 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13081_13085 = null;var count__13082_13086 = (0);var i__13083_13087 = (0);while(true){
if((i__13083_13087 < count__13082_13086))
{var node_13088 = cljs.core._nth.call(null,chunk__13081_13085,i__13083_13087);goog.dom.classes.toggle(node_13088,class$);
{
var G__13089 = seq__13080_13084;
var G__13090 = chunk__13081_13085;
var G__13091 = count__13082_13086;
var G__13092 = (i__13083_13087 + (1));
seq__13080_13084 = G__13089;
chunk__13081_13085 = G__13090;
count__13082_13086 = G__13091;
i__13083_13087 = G__13092;
continue;
}
} else
{var temp__4126__auto___13093 = cljs.core.seq.call(null,seq__13080_13084);if(temp__4126__auto___13093)
{var seq__13080_13094__$1 = temp__4126__auto___13093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13080_13094__$1))
{var c__4410__auto___13095 = cljs.core.chunk_first.call(null,seq__13080_13094__$1);{
var G__13096 = cljs.core.chunk_rest.call(null,seq__13080_13094__$1);
var G__13097 = c__4410__auto___13095;
var G__13098 = cljs.core.count.call(null,c__4410__auto___13095);
var G__13099 = (0);
seq__13080_13084 = G__13096;
chunk__13081_13085 = G__13097;
count__13082_13086 = G__13098;
i__13083_13087 = G__13099;
continue;
}
} else
{var node_13100 = cljs.core.first.call(null,seq__13080_13094__$1);goog.dom.classes.toggle(node_13100,class$);
{
var G__13101 = cljs.core.next.call(null,seq__13080_13094__$1);
var G__13102 = null;
var G__13103 = (0);
var G__13104 = (0);
seq__13080_13084 = G__13101;
chunk__13081_13085 = G__13102;
count__13082_13086 = G__13103;
i__13083_13087 = G__13104;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_13113__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__13109_13114 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13110_13115 = null;var count__13111_13116 = (0);var i__13112_13117 = (0);while(true){
if((i__13112_13117 < count__13111_13116))
{var node_13118 = cljs.core._nth.call(null,chunk__13110_13115,i__13112_13117);goog.dom.classes.set(node_13118,classes_13113__$1);
{
var G__13119 = seq__13109_13114;
var G__13120 = chunk__13110_13115;
var G__13121 = count__13111_13116;
var G__13122 = (i__13112_13117 + (1));
seq__13109_13114 = G__13119;
chunk__13110_13115 = G__13120;
count__13111_13116 = G__13121;
i__13112_13117 = G__13122;
continue;
}
} else
{var temp__4126__auto___13123 = cljs.core.seq.call(null,seq__13109_13114);if(temp__4126__auto___13123)
{var seq__13109_13124__$1 = temp__4126__auto___13123;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13109_13124__$1))
{var c__4410__auto___13125 = cljs.core.chunk_first.call(null,seq__13109_13124__$1);{
var G__13126 = cljs.core.chunk_rest.call(null,seq__13109_13124__$1);
var G__13127 = c__4410__auto___13125;
var G__13128 = cljs.core.count.call(null,c__4410__auto___13125);
var G__13129 = (0);
seq__13109_13114 = G__13126;
chunk__13110_13115 = G__13127;
count__13111_13116 = G__13128;
i__13112_13117 = G__13129;
continue;
}
} else
{var node_13130 = cljs.core.first.call(null,seq__13109_13124__$1);goog.dom.classes.set(node_13130,classes_13113__$1);
{
var G__13131 = cljs.core.next.call(null,seq__13109_13124__$1);
var G__13132 = null;
var G__13133 = (0);
var G__13134 = (0);
seq__13109_13114 = G__13131;
chunk__13110_13115 = G__13132;
count__13111_13116 = G__13133;
i__13112_13117 = G__13134;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__13139_13143 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13140_13144 = null;var count__13141_13145 = (0);var i__13142_13146 = (0);while(true){
if((i__13142_13146 < count__13141_13145))
{var node_13147 = cljs.core._nth.call(null,chunk__13140_13144,i__13142_13146);goog.dom.setTextContent(node_13147,value);
{
var G__13148 = seq__13139_13143;
var G__13149 = chunk__13140_13144;
var G__13150 = count__13141_13145;
var G__13151 = (i__13142_13146 + (1));
seq__13139_13143 = G__13148;
chunk__13140_13144 = G__13149;
count__13141_13145 = G__13150;
i__13142_13146 = G__13151;
continue;
}
} else
{var temp__4126__auto___13152 = cljs.core.seq.call(null,seq__13139_13143);if(temp__4126__auto___13152)
{var seq__13139_13153__$1 = temp__4126__auto___13152;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13139_13153__$1))
{var c__4410__auto___13154 = cljs.core.chunk_first.call(null,seq__13139_13153__$1);{
var G__13155 = cljs.core.chunk_rest.call(null,seq__13139_13153__$1);
var G__13156 = c__4410__auto___13154;
var G__13157 = cljs.core.count.call(null,c__4410__auto___13154);
var G__13158 = (0);
seq__13139_13143 = G__13155;
chunk__13140_13144 = G__13156;
count__13141_13145 = G__13157;
i__13142_13146 = G__13158;
continue;
}
} else
{var node_13159 = cljs.core.first.call(null,seq__13139_13153__$1);goog.dom.setTextContent(node_13159,value);
{
var G__13160 = cljs.core.next.call(null,seq__13139_13153__$1);
var G__13161 = null;
var G__13162 = (0);
var G__13163 = (0);
seq__13139_13143 = G__13160;
chunk__13140_13144 = G__13161;
count__13141_13145 = G__13162;
i__13142_13146 = G__13163;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__13168_13172 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13169_13173 = null;var count__13170_13174 = (0);var i__13171_13175 = (0);while(true){
if((i__13171_13175 < count__13170_13174))
{var node_13176 = cljs.core._nth.call(null,chunk__13169_13173,i__13171_13175);goog.dom.forms.setValue(node_13176,value);
{
var G__13177 = seq__13168_13172;
var G__13178 = chunk__13169_13173;
var G__13179 = count__13170_13174;
var G__13180 = (i__13171_13175 + (1));
seq__13168_13172 = G__13177;
chunk__13169_13173 = G__13178;
count__13170_13174 = G__13179;
i__13171_13175 = G__13180;
continue;
}
} else
{var temp__4126__auto___13181 = cljs.core.seq.call(null,seq__13168_13172);if(temp__4126__auto___13181)
{var seq__13168_13182__$1 = temp__4126__auto___13181;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13168_13182__$1))
{var c__4410__auto___13183 = cljs.core.chunk_first.call(null,seq__13168_13182__$1);{
var G__13184 = cljs.core.chunk_rest.call(null,seq__13168_13182__$1);
var G__13185 = c__4410__auto___13183;
var G__13186 = cljs.core.count.call(null,c__4410__auto___13183);
var G__13187 = (0);
seq__13168_13172 = G__13184;
chunk__13169_13173 = G__13185;
count__13170_13174 = G__13186;
i__13171_13175 = G__13187;
continue;
}
} else
{var node_13188 = cljs.core.first.call(null,seq__13168_13182__$1);goog.dom.forms.setValue(node_13188,value);
{
var G__13189 = cljs.core.next.call(null,seq__13168_13182__$1);
var G__13190 = null;
var G__13191 = (0);
var G__13192 = (0);
seq__13168_13172 = G__13189;
chunk__13169_13173 = G__13190;
count__13170_13174 = G__13191;
i__13171_13175 = G__13192;
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
{var value_13203 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__13199_13204 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__13200_13205 = null;var count__13201_13206 = (0);var i__13202_13207 = (0);while(true){
if((i__13202_13207 < count__13201_13206))
{var node_13208 = cljs.core._nth.call(null,chunk__13200_13205,i__13202_13207);node_13208.innerHTML = value_13203;
{
var G__13209 = seq__13199_13204;
var G__13210 = chunk__13200_13205;
var G__13211 = count__13201_13206;
var G__13212 = (i__13202_13207 + (1));
seq__13199_13204 = G__13209;
chunk__13200_13205 = G__13210;
count__13201_13206 = G__13211;
i__13202_13207 = G__13212;
continue;
}
} else
{var temp__4126__auto___13213 = cljs.core.seq.call(null,seq__13199_13204);if(temp__4126__auto___13213)
{var seq__13199_13214__$1 = temp__4126__auto___13213;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13199_13214__$1))
{var c__4410__auto___13215 = cljs.core.chunk_first.call(null,seq__13199_13214__$1);{
var G__13216 = cljs.core.chunk_rest.call(null,seq__13199_13214__$1);
var G__13217 = c__4410__auto___13215;
var G__13218 = cljs.core.count.call(null,c__4410__auto___13215);
var G__13219 = (0);
seq__13199_13204 = G__13216;
chunk__13200_13205 = G__13217;
count__13201_13206 = G__13218;
i__13202_13207 = G__13219;
continue;
}
} else
{var node_13220 = cljs.core.first.call(null,seq__13199_13214__$1);node_13220.innerHTML = value_13203;
{
var G__13221 = cljs.core.next.call(null,seq__13199_13214__$1);
var G__13222 = null;
var G__13223 = (0);
var G__13224 = (0);
seq__13199_13204 = G__13221;
chunk__13200_13205 = G__13222;
count__13201_13206 = G__13223;
i__13202_13207 = G__13224;
continue;
}
}
} else
{}
}
break;
}
}catch (e13198){if((e13198 instanceof Error))
{var e_13225 = e13198;domina.replace_children_BANG_.call(null,content,value_13203);
} else
{throw e13198;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__13232_13236 = cljs.core.seq.call(null,children);var chunk__13233_13237 = null;var count__13234_13238 = (0);var i__13235_13239 = (0);while(true){
if((i__13235_13239 < count__13234_13238))
{var child_13240 = cljs.core._nth.call(null,chunk__13233_13237,i__13235_13239);frag.appendChild(child_13240);
{
var G__13241 = seq__13232_13236;
var G__13242 = chunk__13233_13237;
var G__13243 = count__13234_13238;
var G__13244 = (i__13235_13239 + (1));
seq__13232_13236 = G__13241;
chunk__13233_13237 = G__13242;
count__13234_13238 = G__13243;
i__13235_13239 = G__13244;
continue;
}
} else
{var temp__4126__auto___13245 = cljs.core.seq.call(null,seq__13232_13236);if(temp__4126__auto___13245)
{var seq__13232_13246__$1 = temp__4126__auto___13245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13232_13246__$1))
{var c__4410__auto___13247 = cljs.core.chunk_first.call(null,seq__13232_13246__$1);{
var G__13248 = cljs.core.chunk_rest.call(null,seq__13232_13246__$1);
var G__13249 = c__4410__auto___13247;
var G__13250 = cljs.core.count.call(null,c__4410__auto___13247);
var G__13251 = (0);
seq__13232_13236 = G__13248;
chunk__13233_13237 = G__13249;
count__13234_13238 = G__13250;
i__13235_13239 = G__13251;
continue;
}
} else
{var child_13252 = cljs.core.first.call(null,seq__13232_13246__$1);frag.appendChild(child_13252);
{
var G__13253 = cljs.core.next.call(null,seq__13232_13246__$1);
var G__13254 = null;
var G__13255 = (0);
var G__13256 = (0);
seq__13232_13236 = G__13253;
chunk__13233_13237 = G__13254;
count__13234_13238 = G__13255;
i__13235_13239 = G__13256;
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
return (function (p1__13226_SHARP_,p2__13227_SHARP_){return f.call(null,p1__13226_SHARP_,p2__13227_SHARP_);
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
{if((function (){var G__13258 = list_thing;if(G__13258)
{var bit__4304__auto__ = (G__13258.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__13258.cljs$core$ISeqable$))
{return true;
} else
{if((!G__13258.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13258);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13258);
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
{if((function (){var G__13259 = content;if(G__13259)
{var bit__4304__auto__ = (G__13259.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__13259.cljs$core$ISeqable$))
{return true;
} else
{if((!G__13259.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13259);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13259);
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
{if((function (){var G__13260 = content;if(G__13260)
{var bit__4304__auto__ = (G__13260.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__13260.cljs$core$ISeqable$))
{return true;
} else
{if((!G__13260.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13260);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13260);
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
