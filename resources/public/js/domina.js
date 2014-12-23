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
var opt_wrapper_47655 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_47656 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_47657 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_47657,opt_wrapper_47655,table_section_wrapper_47656,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_47655,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_47656,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_47656,cell_wrapper_47657,table_section_wrapper_47656,table_section_wrapper_47656]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3628__auto__ = div.firstChild;if(cljs.core.truth_(and__3628__auto__))
{return div.firstChild.childNodes;
} else
{return and__3628__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__47662 = cljs.core.seq.call(null,tbody);var chunk__47663 = null;var count__47664 = (0);var i__47665 = (0);while(true){
if((i__47665 < count__47664))
{var child = cljs.core._nth.call(null,chunk__47663,i__47665);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__47666 = seq__47662;
var G__47667 = chunk__47663;
var G__47668 = count__47664;
var G__47669 = (i__47665 + (1));
seq__47662 = G__47666;
chunk__47663 = G__47667;
count__47664 = G__47668;
i__47665 = G__47669;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__47662);if(temp__4126__auto__)
{var seq__47662__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47662__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__47662__$1);{
var G__47670 = cljs.core.chunk_rest.call(null,seq__47662__$1);
var G__47671 = c__4410__auto__;
var G__47672 = cljs.core.count.call(null,c__4410__auto__);
var G__47673 = (0);
seq__47662 = G__47670;
chunk__47663 = G__47671;
count__47664 = G__47672;
i__47665 = G__47673;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__47662__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__47674 = cljs.core.next.call(null,seq__47662__$1);
var G__47675 = null;
var G__47676 = (0);
var G__47677 = (0);
seq__47662 = G__47674;
chunk__47663 = G__47675;
count__47664 = G__47676;
i__47665 = G__47677;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__47679 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__47679,(0),null);var start_wrap = cljs.core.nth.call(null,vec__47679,(1),null);var end_wrap = cljs.core.nth.call(null,vec__47679,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__47680 = wrapper.lastChild;
var G__47681 = (level - (1));
wrapper = G__47680;
level = G__47681;
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
domina.DomContent = (function (){var obj47683 = {};return obj47683;
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
log_debug.cljs$lang$applyTo = (function (arglist__47684){
var mesg = cljs.core.seq(arglist__47684);
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
log.cljs$lang$applyTo = (function (arglist__47685){
var mesg = cljs.core.seq(arglist__47685);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__47686){
var contents = cljs.core.seq(arglist__47686);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__47687_SHARP_){return p1__47687_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__47688_SHARP_,p2__47689_SHARP_){return goog.dom.insertChildAt(p1__47688_SHARP_,p2__47689_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__47691_SHARP_,p2__47690_SHARP_){return goog.dom.insertSiblingBefore(p2__47690_SHARP_,p1__47691_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__47693_SHARP_,p2__47692_SHARP_){return goog.dom.insertSiblingAfter(p2__47692_SHARP_,p1__47693_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__47695_SHARP_,p2__47694_SHARP_){return goog.dom.replaceNode(p2__47694_SHARP_,p1__47695_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__47700_47704 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47701_47705 = null;var count__47702_47706 = (0);var i__47703_47707 = (0);while(true){
if((i__47703_47707 < count__47702_47706))
{var n_47708 = cljs.core._nth.call(null,chunk__47701_47705,i__47703_47707);goog.style.setStyle(n_47708,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__47709 = seq__47700_47704;
var G__47710 = chunk__47701_47705;
var G__47711 = count__47702_47706;
var G__47712 = (i__47703_47707 + (1));
seq__47700_47704 = G__47709;
chunk__47701_47705 = G__47710;
count__47702_47706 = G__47711;
i__47703_47707 = G__47712;
continue;
}
} else
{var temp__4126__auto___47713 = cljs.core.seq.call(null,seq__47700_47704);if(temp__4126__auto___47713)
{var seq__47700_47714__$1 = temp__4126__auto___47713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47700_47714__$1))
{var c__4410__auto___47715 = cljs.core.chunk_first.call(null,seq__47700_47714__$1);{
var G__47716 = cljs.core.chunk_rest.call(null,seq__47700_47714__$1);
var G__47717 = c__4410__auto___47715;
var G__47718 = cljs.core.count.call(null,c__4410__auto___47715);
var G__47719 = (0);
seq__47700_47704 = G__47716;
chunk__47701_47705 = G__47717;
count__47702_47706 = G__47718;
i__47703_47707 = G__47719;
continue;
}
} else
{var n_47720 = cljs.core.first.call(null,seq__47700_47714__$1);goog.style.setStyle(n_47720,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__47721 = cljs.core.next.call(null,seq__47700_47714__$1);
var G__47722 = null;
var G__47723 = (0);
var G__47724 = (0);
seq__47700_47704 = G__47721;
chunk__47701_47705 = G__47722;
count__47702_47706 = G__47723;
i__47703_47707 = G__47724;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__47725){
var content = cljs.core.first(arglist__47725);
arglist__47725 = cljs.core.next(arglist__47725);
var name = cljs.core.first(arglist__47725);
var value = cljs.core.rest(arglist__47725);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__47730_47734 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47731_47735 = null;var count__47732_47736 = (0);var i__47733_47737 = (0);while(true){
if((i__47733_47737 < count__47732_47736))
{var n_47738 = cljs.core._nth.call(null,chunk__47731_47735,i__47733_47737);n_47738.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__47739 = seq__47730_47734;
var G__47740 = chunk__47731_47735;
var G__47741 = count__47732_47736;
var G__47742 = (i__47733_47737 + (1));
seq__47730_47734 = G__47739;
chunk__47731_47735 = G__47740;
count__47732_47736 = G__47741;
i__47733_47737 = G__47742;
continue;
}
} else
{var temp__4126__auto___47743 = cljs.core.seq.call(null,seq__47730_47734);if(temp__4126__auto___47743)
{var seq__47730_47744__$1 = temp__4126__auto___47743;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47730_47744__$1))
{var c__4410__auto___47745 = cljs.core.chunk_first.call(null,seq__47730_47744__$1);{
var G__47746 = cljs.core.chunk_rest.call(null,seq__47730_47744__$1);
var G__47747 = c__4410__auto___47745;
var G__47748 = cljs.core.count.call(null,c__4410__auto___47745);
var G__47749 = (0);
seq__47730_47734 = G__47746;
chunk__47731_47735 = G__47747;
count__47732_47736 = G__47748;
i__47733_47737 = G__47749;
continue;
}
} else
{var n_47750 = cljs.core.first.call(null,seq__47730_47744__$1);n_47750.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__47751 = cljs.core.next.call(null,seq__47730_47744__$1);
var G__47752 = null;
var G__47753 = (0);
var G__47754 = (0);
seq__47730_47734 = G__47751;
chunk__47731_47735 = G__47752;
count__47732_47736 = G__47753;
i__47733_47737 = G__47754;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__47755){
var content = cljs.core.first(arglist__47755);
arglist__47755 = cljs.core.next(arglist__47755);
var name = cljs.core.first(arglist__47755);
var value = cljs.core.rest(arglist__47755);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__47760_47764 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47761_47765 = null;var count__47762_47766 = (0);var i__47763_47767 = (0);while(true){
if((i__47763_47767 < count__47762_47766))
{var n_47768 = cljs.core._nth.call(null,chunk__47761_47765,i__47763_47767);n_47768.removeAttribute(cljs.core.name.call(null,name));
{
var G__47769 = seq__47760_47764;
var G__47770 = chunk__47761_47765;
var G__47771 = count__47762_47766;
var G__47772 = (i__47763_47767 + (1));
seq__47760_47764 = G__47769;
chunk__47761_47765 = G__47770;
count__47762_47766 = G__47771;
i__47763_47767 = G__47772;
continue;
}
} else
{var temp__4126__auto___47773 = cljs.core.seq.call(null,seq__47760_47764);if(temp__4126__auto___47773)
{var seq__47760_47774__$1 = temp__4126__auto___47773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47760_47774__$1))
{var c__4410__auto___47775 = cljs.core.chunk_first.call(null,seq__47760_47774__$1);{
var G__47776 = cljs.core.chunk_rest.call(null,seq__47760_47774__$1);
var G__47777 = c__4410__auto___47775;
var G__47778 = cljs.core.count.call(null,c__4410__auto___47775);
var G__47779 = (0);
seq__47760_47764 = G__47776;
chunk__47761_47765 = G__47777;
count__47762_47766 = G__47778;
i__47763_47767 = G__47779;
continue;
}
} else
{var n_47780 = cljs.core.first.call(null,seq__47760_47774__$1);n_47780.removeAttribute(cljs.core.name.call(null,name));
{
var G__47781 = cljs.core.next.call(null,seq__47760_47774__$1);
var G__47782 = null;
var G__47783 = (0);
var G__47784 = (0);
seq__47760_47764 = G__47781;
chunk__47761_47765 = G__47782;
count__47762_47766 = G__47783;
i__47763_47767 = G__47784;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__47786 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__47786,(0),null);var v = cljs.core.nth.call(null,vec__47786,(1),null);if(cljs.core.truth_((function (){var and__3628__auto__ = k;if(cljs.core.truth_(and__3628__auto__))
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
return (function (p1__47787_SHARP_){var attr = attrs__$1.item(p1__47787_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__47794_47800 = cljs.core.seq.call(null,styles);var chunk__47795_47801 = null;var count__47796_47802 = (0);var i__47797_47803 = (0);while(true){
if((i__47797_47803 < count__47796_47802))
{var vec__47798_47804 = cljs.core._nth.call(null,chunk__47795_47801,i__47797_47803);var name_47805 = cljs.core.nth.call(null,vec__47798_47804,(0),null);var value_47806 = cljs.core.nth.call(null,vec__47798_47804,(1),null);domina.set_style_BANG_.call(null,content,name_47805,value_47806);
{
var G__47807 = seq__47794_47800;
var G__47808 = chunk__47795_47801;
var G__47809 = count__47796_47802;
var G__47810 = (i__47797_47803 + (1));
seq__47794_47800 = G__47807;
chunk__47795_47801 = G__47808;
count__47796_47802 = G__47809;
i__47797_47803 = G__47810;
continue;
}
} else
{var temp__4126__auto___47811 = cljs.core.seq.call(null,seq__47794_47800);if(temp__4126__auto___47811)
{var seq__47794_47812__$1 = temp__4126__auto___47811;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47794_47812__$1))
{var c__4410__auto___47813 = cljs.core.chunk_first.call(null,seq__47794_47812__$1);{
var G__47814 = cljs.core.chunk_rest.call(null,seq__47794_47812__$1);
var G__47815 = c__4410__auto___47813;
var G__47816 = cljs.core.count.call(null,c__4410__auto___47813);
var G__47817 = (0);
seq__47794_47800 = G__47814;
chunk__47795_47801 = G__47815;
count__47796_47802 = G__47816;
i__47797_47803 = G__47817;
continue;
}
} else
{var vec__47799_47818 = cljs.core.first.call(null,seq__47794_47812__$1);var name_47819 = cljs.core.nth.call(null,vec__47799_47818,(0),null);var value_47820 = cljs.core.nth.call(null,vec__47799_47818,(1),null);domina.set_style_BANG_.call(null,content,name_47819,value_47820);
{
var G__47821 = cljs.core.next.call(null,seq__47794_47812__$1);
var G__47822 = null;
var G__47823 = (0);
var G__47824 = (0);
seq__47794_47800 = G__47821;
chunk__47795_47801 = G__47822;
count__47796_47802 = G__47823;
i__47797_47803 = G__47824;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__47831_47837 = cljs.core.seq.call(null,attrs);var chunk__47832_47838 = null;var count__47833_47839 = (0);var i__47834_47840 = (0);while(true){
if((i__47834_47840 < count__47833_47839))
{var vec__47835_47841 = cljs.core._nth.call(null,chunk__47832_47838,i__47834_47840);var name_47842 = cljs.core.nth.call(null,vec__47835_47841,(0),null);var value_47843 = cljs.core.nth.call(null,vec__47835_47841,(1),null);domina.set_attr_BANG_.call(null,content,name_47842,value_47843);
{
var G__47844 = seq__47831_47837;
var G__47845 = chunk__47832_47838;
var G__47846 = count__47833_47839;
var G__47847 = (i__47834_47840 + (1));
seq__47831_47837 = G__47844;
chunk__47832_47838 = G__47845;
count__47833_47839 = G__47846;
i__47834_47840 = G__47847;
continue;
}
} else
{var temp__4126__auto___47848 = cljs.core.seq.call(null,seq__47831_47837);if(temp__4126__auto___47848)
{var seq__47831_47849__$1 = temp__4126__auto___47848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47831_47849__$1))
{var c__4410__auto___47850 = cljs.core.chunk_first.call(null,seq__47831_47849__$1);{
var G__47851 = cljs.core.chunk_rest.call(null,seq__47831_47849__$1);
var G__47852 = c__4410__auto___47850;
var G__47853 = cljs.core.count.call(null,c__4410__auto___47850);
var G__47854 = (0);
seq__47831_47837 = G__47851;
chunk__47832_47838 = G__47852;
count__47833_47839 = G__47853;
i__47834_47840 = G__47854;
continue;
}
} else
{var vec__47836_47855 = cljs.core.first.call(null,seq__47831_47849__$1);var name_47856 = cljs.core.nth.call(null,vec__47836_47855,(0),null);var value_47857 = cljs.core.nth.call(null,vec__47836_47855,(1),null);domina.set_attr_BANG_.call(null,content,name_47856,value_47857);
{
var G__47858 = cljs.core.next.call(null,seq__47831_47849__$1);
var G__47859 = null;
var G__47860 = (0);
var G__47861 = (0);
seq__47831_47837 = G__47858;
chunk__47832_47838 = G__47859;
count__47833_47839 = G__47860;
i__47834_47840 = G__47861;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__47866_47870 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47867_47871 = null;var count__47868_47872 = (0);var i__47869_47873 = (0);while(true){
if((i__47869_47873 < count__47868_47872))
{var node_47874 = cljs.core._nth.call(null,chunk__47867_47871,i__47869_47873);goog.dom.classes.add(node_47874,class$);
{
var G__47875 = seq__47866_47870;
var G__47876 = chunk__47867_47871;
var G__47877 = count__47868_47872;
var G__47878 = (i__47869_47873 + (1));
seq__47866_47870 = G__47875;
chunk__47867_47871 = G__47876;
count__47868_47872 = G__47877;
i__47869_47873 = G__47878;
continue;
}
} else
{var temp__4126__auto___47879 = cljs.core.seq.call(null,seq__47866_47870);if(temp__4126__auto___47879)
{var seq__47866_47880__$1 = temp__4126__auto___47879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47866_47880__$1))
{var c__4410__auto___47881 = cljs.core.chunk_first.call(null,seq__47866_47880__$1);{
var G__47882 = cljs.core.chunk_rest.call(null,seq__47866_47880__$1);
var G__47883 = c__4410__auto___47881;
var G__47884 = cljs.core.count.call(null,c__4410__auto___47881);
var G__47885 = (0);
seq__47866_47870 = G__47882;
chunk__47867_47871 = G__47883;
count__47868_47872 = G__47884;
i__47869_47873 = G__47885;
continue;
}
} else
{var node_47886 = cljs.core.first.call(null,seq__47866_47880__$1);goog.dom.classes.add(node_47886,class$);
{
var G__47887 = cljs.core.next.call(null,seq__47866_47880__$1);
var G__47888 = null;
var G__47889 = (0);
var G__47890 = (0);
seq__47866_47870 = G__47887;
chunk__47867_47871 = G__47888;
count__47868_47872 = G__47889;
i__47869_47873 = G__47890;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__47895_47899 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47896_47900 = null;var count__47897_47901 = (0);var i__47898_47902 = (0);while(true){
if((i__47898_47902 < count__47897_47901))
{var node_47903 = cljs.core._nth.call(null,chunk__47896_47900,i__47898_47902);goog.dom.classes.remove(node_47903,class$);
{
var G__47904 = seq__47895_47899;
var G__47905 = chunk__47896_47900;
var G__47906 = count__47897_47901;
var G__47907 = (i__47898_47902 + (1));
seq__47895_47899 = G__47904;
chunk__47896_47900 = G__47905;
count__47897_47901 = G__47906;
i__47898_47902 = G__47907;
continue;
}
} else
{var temp__4126__auto___47908 = cljs.core.seq.call(null,seq__47895_47899);if(temp__4126__auto___47908)
{var seq__47895_47909__$1 = temp__4126__auto___47908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47895_47909__$1))
{var c__4410__auto___47910 = cljs.core.chunk_first.call(null,seq__47895_47909__$1);{
var G__47911 = cljs.core.chunk_rest.call(null,seq__47895_47909__$1);
var G__47912 = c__4410__auto___47910;
var G__47913 = cljs.core.count.call(null,c__4410__auto___47910);
var G__47914 = (0);
seq__47895_47899 = G__47911;
chunk__47896_47900 = G__47912;
count__47897_47901 = G__47913;
i__47898_47902 = G__47914;
continue;
}
} else
{var node_47915 = cljs.core.first.call(null,seq__47895_47909__$1);goog.dom.classes.remove(node_47915,class$);
{
var G__47916 = cljs.core.next.call(null,seq__47895_47909__$1);
var G__47917 = null;
var G__47918 = (0);
var G__47919 = (0);
seq__47895_47899 = G__47916;
chunk__47896_47900 = G__47917;
count__47897_47901 = G__47918;
i__47898_47902 = G__47919;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__47924_47928 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47925_47929 = null;var count__47926_47930 = (0);var i__47927_47931 = (0);while(true){
if((i__47927_47931 < count__47926_47930))
{var node_47932 = cljs.core._nth.call(null,chunk__47925_47929,i__47927_47931);goog.dom.classes.toggle(node_47932,class$);
{
var G__47933 = seq__47924_47928;
var G__47934 = chunk__47925_47929;
var G__47935 = count__47926_47930;
var G__47936 = (i__47927_47931 + (1));
seq__47924_47928 = G__47933;
chunk__47925_47929 = G__47934;
count__47926_47930 = G__47935;
i__47927_47931 = G__47936;
continue;
}
} else
{var temp__4126__auto___47937 = cljs.core.seq.call(null,seq__47924_47928);if(temp__4126__auto___47937)
{var seq__47924_47938__$1 = temp__4126__auto___47937;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47924_47938__$1))
{var c__4410__auto___47939 = cljs.core.chunk_first.call(null,seq__47924_47938__$1);{
var G__47940 = cljs.core.chunk_rest.call(null,seq__47924_47938__$1);
var G__47941 = c__4410__auto___47939;
var G__47942 = cljs.core.count.call(null,c__4410__auto___47939);
var G__47943 = (0);
seq__47924_47928 = G__47940;
chunk__47925_47929 = G__47941;
count__47926_47930 = G__47942;
i__47927_47931 = G__47943;
continue;
}
} else
{var node_47944 = cljs.core.first.call(null,seq__47924_47938__$1);goog.dom.classes.toggle(node_47944,class$);
{
var G__47945 = cljs.core.next.call(null,seq__47924_47938__$1);
var G__47946 = null;
var G__47947 = (0);
var G__47948 = (0);
seq__47924_47928 = G__47945;
chunk__47925_47929 = G__47946;
count__47926_47930 = G__47947;
i__47927_47931 = G__47948;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_47957__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__47953_47958 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47954_47959 = null;var count__47955_47960 = (0);var i__47956_47961 = (0);while(true){
if((i__47956_47961 < count__47955_47960))
{var node_47962 = cljs.core._nth.call(null,chunk__47954_47959,i__47956_47961);goog.dom.classes.set(node_47962,classes_47957__$1);
{
var G__47963 = seq__47953_47958;
var G__47964 = chunk__47954_47959;
var G__47965 = count__47955_47960;
var G__47966 = (i__47956_47961 + (1));
seq__47953_47958 = G__47963;
chunk__47954_47959 = G__47964;
count__47955_47960 = G__47965;
i__47956_47961 = G__47966;
continue;
}
} else
{var temp__4126__auto___47967 = cljs.core.seq.call(null,seq__47953_47958);if(temp__4126__auto___47967)
{var seq__47953_47968__$1 = temp__4126__auto___47967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47953_47968__$1))
{var c__4410__auto___47969 = cljs.core.chunk_first.call(null,seq__47953_47968__$1);{
var G__47970 = cljs.core.chunk_rest.call(null,seq__47953_47968__$1);
var G__47971 = c__4410__auto___47969;
var G__47972 = cljs.core.count.call(null,c__4410__auto___47969);
var G__47973 = (0);
seq__47953_47958 = G__47970;
chunk__47954_47959 = G__47971;
count__47955_47960 = G__47972;
i__47956_47961 = G__47973;
continue;
}
} else
{var node_47974 = cljs.core.first.call(null,seq__47953_47968__$1);goog.dom.classes.set(node_47974,classes_47957__$1);
{
var G__47975 = cljs.core.next.call(null,seq__47953_47968__$1);
var G__47976 = null;
var G__47977 = (0);
var G__47978 = (0);
seq__47953_47958 = G__47975;
chunk__47954_47959 = G__47976;
count__47955_47960 = G__47977;
i__47956_47961 = G__47978;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__47983_47987 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47984_47988 = null;var count__47985_47989 = (0);var i__47986_47990 = (0);while(true){
if((i__47986_47990 < count__47985_47989))
{var node_47991 = cljs.core._nth.call(null,chunk__47984_47988,i__47986_47990);goog.dom.setTextContent(node_47991,value);
{
var G__47992 = seq__47983_47987;
var G__47993 = chunk__47984_47988;
var G__47994 = count__47985_47989;
var G__47995 = (i__47986_47990 + (1));
seq__47983_47987 = G__47992;
chunk__47984_47988 = G__47993;
count__47985_47989 = G__47994;
i__47986_47990 = G__47995;
continue;
}
} else
{var temp__4126__auto___47996 = cljs.core.seq.call(null,seq__47983_47987);if(temp__4126__auto___47996)
{var seq__47983_47997__$1 = temp__4126__auto___47996;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47983_47997__$1))
{var c__4410__auto___47998 = cljs.core.chunk_first.call(null,seq__47983_47997__$1);{
var G__47999 = cljs.core.chunk_rest.call(null,seq__47983_47997__$1);
var G__48000 = c__4410__auto___47998;
var G__48001 = cljs.core.count.call(null,c__4410__auto___47998);
var G__48002 = (0);
seq__47983_47987 = G__47999;
chunk__47984_47988 = G__48000;
count__47985_47989 = G__48001;
i__47986_47990 = G__48002;
continue;
}
} else
{var node_48003 = cljs.core.first.call(null,seq__47983_47997__$1);goog.dom.setTextContent(node_48003,value);
{
var G__48004 = cljs.core.next.call(null,seq__47983_47997__$1);
var G__48005 = null;
var G__48006 = (0);
var G__48007 = (0);
seq__47983_47987 = G__48004;
chunk__47984_47988 = G__48005;
count__47985_47989 = G__48006;
i__47986_47990 = G__48007;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__48012_48016 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__48013_48017 = null;var count__48014_48018 = (0);var i__48015_48019 = (0);while(true){
if((i__48015_48019 < count__48014_48018))
{var node_48020 = cljs.core._nth.call(null,chunk__48013_48017,i__48015_48019);goog.dom.forms.setValue(node_48020,value);
{
var G__48021 = seq__48012_48016;
var G__48022 = chunk__48013_48017;
var G__48023 = count__48014_48018;
var G__48024 = (i__48015_48019 + (1));
seq__48012_48016 = G__48021;
chunk__48013_48017 = G__48022;
count__48014_48018 = G__48023;
i__48015_48019 = G__48024;
continue;
}
} else
{var temp__4126__auto___48025 = cljs.core.seq.call(null,seq__48012_48016);if(temp__4126__auto___48025)
{var seq__48012_48026__$1 = temp__4126__auto___48025;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48012_48026__$1))
{var c__4410__auto___48027 = cljs.core.chunk_first.call(null,seq__48012_48026__$1);{
var G__48028 = cljs.core.chunk_rest.call(null,seq__48012_48026__$1);
var G__48029 = c__4410__auto___48027;
var G__48030 = cljs.core.count.call(null,c__4410__auto___48027);
var G__48031 = (0);
seq__48012_48016 = G__48028;
chunk__48013_48017 = G__48029;
count__48014_48018 = G__48030;
i__48015_48019 = G__48031;
continue;
}
} else
{var node_48032 = cljs.core.first.call(null,seq__48012_48026__$1);goog.dom.forms.setValue(node_48032,value);
{
var G__48033 = cljs.core.next.call(null,seq__48012_48026__$1);
var G__48034 = null;
var G__48035 = (0);
var G__48036 = (0);
seq__48012_48016 = G__48033;
chunk__48013_48017 = G__48034;
count__48014_48018 = G__48035;
i__48015_48019 = G__48036;
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
{var value_48047 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__48043_48048 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__48044_48049 = null;var count__48045_48050 = (0);var i__48046_48051 = (0);while(true){
if((i__48046_48051 < count__48045_48050))
{var node_48052 = cljs.core._nth.call(null,chunk__48044_48049,i__48046_48051);node_48052.innerHTML = value_48047;
{
var G__48053 = seq__48043_48048;
var G__48054 = chunk__48044_48049;
var G__48055 = count__48045_48050;
var G__48056 = (i__48046_48051 + (1));
seq__48043_48048 = G__48053;
chunk__48044_48049 = G__48054;
count__48045_48050 = G__48055;
i__48046_48051 = G__48056;
continue;
}
} else
{var temp__4126__auto___48057 = cljs.core.seq.call(null,seq__48043_48048);if(temp__4126__auto___48057)
{var seq__48043_48058__$1 = temp__4126__auto___48057;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48043_48058__$1))
{var c__4410__auto___48059 = cljs.core.chunk_first.call(null,seq__48043_48058__$1);{
var G__48060 = cljs.core.chunk_rest.call(null,seq__48043_48058__$1);
var G__48061 = c__4410__auto___48059;
var G__48062 = cljs.core.count.call(null,c__4410__auto___48059);
var G__48063 = (0);
seq__48043_48048 = G__48060;
chunk__48044_48049 = G__48061;
count__48045_48050 = G__48062;
i__48046_48051 = G__48063;
continue;
}
} else
{var node_48064 = cljs.core.first.call(null,seq__48043_48058__$1);node_48064.innerHTML = value_48047;
{
var G__48065 = cljs.core.next.call(null,seq__48043_48058__$1);
var G__48066 = null;
var G__48067 = (0);
var G__48068 = (0);
seq__48043_48048 = G__48065;
chunk__48044_48049 = G__48066;
count__48045_48050 = G__48067;
i__48046_48051 = G__48068;
continue;
}
}
} else
{}
}
break;
}
}catch (e48042){if((e48042 instanceof Error))
{var e_48069 = e48042;domina.replace_children_BANG_.call(null,content,value_48047);
} else
{throw e48042;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__48076_48080 = cljs.core.seq.call(null,children);var chunk__48077_48081 = null;var count__48078_48082 = (0);var i__48079_48083 = (0);while(true){
if((i__48079_48083 < count__48078_48082))
{var child_48084 = cljs.core._nth.call(null,chunk__48077_48081,i__48079_48083);frag.appendChild(child_48084);
{
var G__48085 = seq__48076_48080;
var G__48086 = chunk__48077_48081;
var G__48087 = count__48078_48082;
var G__48088 = (i__48079_48083 + (1));
seq__48076_48080 = G__48085;
chunk__48077_48081 = G__48086;
count__48078_48082 = G__48087;
i__48079_48083 = G__48088;
continue;
}
} else
{var temp__4126__auto___48089 = cljs.core.seq.call(null,seq__48076_48080);if(temp__4126__auto___48089)
{var seq__48076_48090__$1 = temp__4126__auto___48089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__48076_48090__$1))
{var c__4410__auto___48091 = cljs.core.chunk_first.call(null,seq__48076_48090__$1);{
var G__48092 = cljs.core.chunk_rest.call(null,seq__48076_48090__$1);
var G__48093 = c__4410__auto___48091;
var G__48094 = cljs.core.count.call(null,c__4410__auto___48091);
var G__48095 = (0);
seq__48076_48080 = G__48092;
chunk__48077_48081 = G__48093;
count__48078_48082 = G__48094;
i__48079_48083 = G__48095;
continue;
}
} else
{var child_48096 = cljs.core.first.call(null,seq__48076_48090__$1);frag.appendChild(child_48096);
{
var G__48097 = cljs.core.next.call(null,seq__48076_48090__$1);
var G__48098 = null;
var G__48099 = (0);
var G__48100 = (0);
seq__48076_48080 = G__48097;
chunk__48077_48081 = G__48098;
count__48078_48082 = G__48099;
i__48079_48083 = G__48100;
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
return (function (p1__48070_SHARP_,p2__48071_SHARP_){return f.call(null,p1__48070_SHARP_,p2__48071_SHARP_);
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
{if((function (){var G__48102 = list_thing;if(G__48102)
{var bit__4304__auto__ = (G__48102.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__48102.cljs$core$ISeqable$))
{return true;
} else
{if((!G__48102.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__48102);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__48102);
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
{if((function (){var G__48103 = content;if(G__48103)
{var bit__4304__auto__ = (G__48103.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__48103.cljs$core$ISeqable$))
{return true;
} else
{if((!G__48103.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__48103);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__48103);
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
{if((function (){var G__48104 = content;if(G__48104)
{var bit__4304__auto__ = (G__48104.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__48104.cljs$core$ISeqable$))
{return true;
} else
{if((!G__48104.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__48104);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__48104);
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
