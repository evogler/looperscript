// Compiled by ClojureScript 1.9.908 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('domina.support');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_29650 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_29651 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_29652 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_29652,opt_wrapper_29650,table_section_wrapper_29651,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_29650,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_29651,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_29651,cell_wrapper_29652,table_section_wrapper_29651,table_section_wrapper_29651]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__27977__auto__ = div.firstChild;
if(cljs.core.truth_(and__27977__auto__)){
return div.firstChild.childNodes;
} else {
return and__27977__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__29653 = cljs.core.seq.call(null,tbody);
var chunk__29654 = null;
var count__29655 = (0);
var i__29656 = (0);
while(true){
if((i__29656 < count__29655)){
var child = cljs.core._nth.call(null,chunk__29654,i__29656);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__29657 = seq__29653;
var G__29658 = chunk__29654;
var G__29659 = count__29655;
var G__29660 = (i__29656 + (1));
seq__29653 = G__29657;
chunk__29654 = G__29658;
count__29655 = G__29659;
i__29656 = G__29660;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29653);
if(temp__4657__auto__){
var seq__29653__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29653__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__29653__$1);
var G__29661 = cljs.core.chunk_rest.call(null,seq__29653__$1);
var G__29662 = c__28828__auto__;
var G__29663 = cljs.core.count.call(null,c__28828__auto__);
var G__29664 = (0);
seq__29653 = G__29661;
chunk__29654 = G__29662;
count__29655 = G__29663;
i__29656 = G__29664;
continue;
} else {
var child = cljs.core.first.call(null,seq__29653__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__29665 = cljs.core.next.call(null,seq__29653__$1);
var G__29666 = null;
var G__29667 = (0);
var G__29668 = (0);
seq__29653 = G__29665;
chunk__29654 = G__29666;
count__29655 = G__29667;
i__29656 = G__29668;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__29669 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__29669,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__29669,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__29669,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__29672 = wrapper.lastChild;
var G__29673 = (level - (1));
wrapper = G__29672;
level = G__29673;
continue;
} else {
return wrapper;
}
break;
}
})();
if(domina.support.extraneous_tbody_QMARK_){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__27977__auto__ = !(domina.support.leading_whitespace_QMARK_);
if(and__27977__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__27977__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((!((content == null))) && (!((content.domina$DomContent$nodes$arity$1 == null)))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__28672__auto__ = (((content == null))?null:content);
var m__28673__auto__ = (domina.nodes[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,content);
} else {
var m__28673__auto____$1 = (domina.nodes["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__28672__auto__ = (((nodeseq == null))?null:nodeseq);
var m__28673__auto__ = (domina.single_node[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,nodeseq);
} else {
var m__28673__auto____$1 = (domina.single_node["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__29165__auto__ = [];
var len__29158__auto___29675 = arguments.length;
var i__29159__auto___29676 = (0);
while(true){
if((i__29159__auto___29676 < len__29158__auto___29675)){
args__29165__auto__.push((arguments[i__29159__auto___29676]));

var G__29677 = (i__29159__auto___29676 + (1));
i__29159__auto___29676 = G__29677;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if((domina._STAR_debug_STAR_) && (!(cljs.core._EQ_.call(null,window.console,undefined)))){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq29674){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29674));
});

domina.log = (function domina$log(var_args){
var args__29165__auto__ = [];
var len__29158__auto___29679 = arguments.length;
var i__29159__auto___29680 = (0);
while(true){
if((i__29159__auto___29680 < len__29158__auto___29679)){
args__29165__auto__.push((arguments[i__29159__auto___29680]));

var G__29681 = (i__29159__auto___29680 + (1));
i__29159__auto___29680 = G__29681;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq29678){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29678));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__29165__auto__ = [];
var len__29158__auto___29683 = arguments.length;
var i__29159__auto___29684 = (0);
while(true){
if((i__29159__auto___29684 < len__29158__auto___29683)){
args__29165__auto__.push((arguments[i__29159__auto___29684]));

var G__29685 = (i__29159__auto___29684 + (1));
i__29159__auto___29684 = G__29685;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq29682){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29682));
});

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__29686_SHARP_){
return p1__29686_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__29687_SHARP_,p2__29688_SHARP_){
return goog.dom.insertChildAt(p1__29687_SHARP_,p2__29688_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__29690_SHARP_,p2__29689_SHARP_){
return goog.dom.insertSiblingBefore(p2__29689_SHARP_,p1__29690_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__29692_SHARP_,p2__29691_SHARP_){
return goog.dom.insertSiblingAfter(p2__29691_SHARP_,p1__29692_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__29694_SHARP_,p2__29693_SHARP_){
return goog.dom.replaceNode(p2__29693_SHARP_,p1__29694_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___29702 = arguments.length;
var i__29159__auto___29703 = (0);
while(true){
if((i__29159__auto___29703 < len__29158__auto___29702)){
args__29165__auto__.push((arguments[i__29159__auto___29703]));

var G__29704 = (i__29159__auto___29703 + (1));
i__29159__auto___29703 = G__29704;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((2) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29166__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__29698_29705 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29699_29706 = null;
var count__29700_29707 = (0);
var i__29701_29708 = (0);
while(true){
if((i__29701_29708 < count__29700_29707)){
var n_29709 = cljs.core._nth.call(null,chunk__29699_29706,i__29701_29708);
goog.style.setStyle(n_29709,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__29710 = seq__29698_29705;
var G__29711 = chunk__29699_29706;
var G__29712 = count__29700_29707;
var G__29713 = (i__29701_29708 + (1));
seq__29698_29705 = G__29710;
chunk__29699_29706 = G__29711;
count__29700_29707 = G__29712;
i__29701_29708 = G__29713;
continue;
} else {
var temp__4657__auto___29714 = cljs.core.seq.call(null,seq__29698_29705);
if(temp__4657__auto___29714){
var seq__29698_29715__$1 = temp__4657__auto___29714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29698_29715__$1)){
var c__28828__auto___29716 = cljs.core.chunk_first.call(null,seq__29698_29715__$1);
var G__29717 = cljs.core.chunk_rest.call(null,seq__29698_29715__$1);
var G__29718 = c__28828__auto___29716;
var G__29719 = cljs.core.count.call(null,c__28828__auto___29716);
var G__29720 = (0);
seq__29698_29705 = G__29717;
chunk__29699_29706 = G__29718;
count__29700_29707 = G__29719;
i__29701_29708 = G__29720;
continue;
} else {
var n_29721 = cljs.core.first.call(null,seq__29698_29715__$1);
goog.style.setStyle(n_29721,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__29722 = cljs.core.next.call(null,seq__29698_29715__$1);
var G__29723 = null;
var G__29724 = (0);
var G__29725 = (0);
seq__29698_29705 = G__29722;
chunk__29699_29706 = G__29723;
count__29700_29707 = G__29724;
i__29701_29708 = G__29725;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq29695){
var G__29696 = cljs.core.first.call(null,seq29695);
var seq29695__$1 = cljs.core.next.call(null,seq29695);
var G__29697 = cljs.core.first.call(null,seq29695__$1);
var seq29695__$2 = cljs.core.next.call(null,seq29695__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29696,G__29697,seq29695__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___29733 = arguments.length;
var i__29159__auto___29734 = (0);
while(true){
if((i__29159__auto___29734 < len__29158__auto___29733)){
args__29165__auto__.push((arguments[i__29159__auto___29734]));

var G__29735 = (i__29159__auto___29734 + (1));
i__29159__auto___29734 = G__29735;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((2) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29166__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__29729_29736 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29730_29737 = null;
var count__29731_29738 = (0);
var i__29732_29739 = (0);
while(true){
if((i__29732_29739 < count__29731_29738)){
var n_29740 = cljs.core._nth.call(null,chunk__29730_29737,i__29732_29739);
n_29740.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__29741 = seq__29729_29736;
var G__29742 = chunk__29730_29737;
var G__29743 = count__29731_29738;
var G__29744 = (i__29732_29739 + (1));
seq__29729_29736 = G__29741;
chunk__29730_29737 = G__29742;
count__29731_29738 = G__29743;
i__29732_29739 = G__29744;
continue;
} else {
var temp__4657__auto___29745 = cljs.core.seq.call(null,seq__29729_29736);
if(temp__4657__auto___29745){
var seq__29729_29746__$1 = temp__4657__auto___29745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29729_29746__$1)){
var c__28828__auto___29747 = cljs.core.chunk_first.call(null,seq__29729_29746__$1);
var G__29748 = cljs.core.chunk_rest.call(null,seq__29729_29746__$1);
var G__29749 = c__28828__auto___29747;
var G__29750 = cljs.core.count.call(null,c__28828__auto___29747);
var G__29751 = (0);
seq__29729_29736 = G__29748;
chunk__29730_29737 = G__29749;
count__29731_29738 = G__29750;
i__29732_29739 = G__29751;
continue;
} else {
var n_29752 = cljs.core.first.call(null,seq__29729_29746__$1);
n_29752.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__29753 = cljs.core.next.call(null,seq__29729_29746__$1);
var G__29754 = null;
var G__29755 = (0);
var G__29756 = (0);
seq__29729_29736 = G__29753;
chunk__29730_29737 = G__29754;
count__29731_29738 = G__29755;
i__29732_29739 = G__29756;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq29726){
var G__29727 = cljs.core.first.call(null,seq29726);
var seq29726__$1 = cljs.core.next.call(null,seq29726);
var G__29728 = cljs.core.first.call(null,seq29726__$1);
var seq29726__$2 = cljs.core.next.call(null,seq29726__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29727,G__29728,seq29726__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__29757_29761 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29758_29762 = null;
var count__29759_29763 = (0);
var i__29760_29764 = (0);
while(true){
if((i__29760_29764 < count__29759_29763)){
var n_29765 = cljs.core._nth.call(null,chunk__29758_29762,i__29760_29764);
n_29765.removeAttribute(cljs.core.name.call(null,name));

var G__29766 = seq__29757_29761;
var G__29767 = chunk__29758_29762;
var G__29768 = count__29759_29763;
var G__29769 = (i__29760_29764 + (1));
seq__29757_29761 = G__29766;
chunk__29758_29762 = G__29767;
count__29759_29763 = G__29768;
i__29760_29764 = G__29769;
continue;
} else {
var temp__4657__auto___29770 = cljs.core.seq.call(null,seq__29757_29761);
if(temp__4657__auto___29770){
var seq__29757_29771__$1 = temp__4657__auto___29770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29757_29771__$1)){
var c__28828__auto___29772 = cljs.core.chunk_first.call(null,seq__29757_29771__$1);
var G__29773 = cljs.core.chunk_rest.call(null,seq__29757_29771__$1);
var G__29774 = c__28828__auto___29772;
var G__29775 = cljs.core.count.call(null,c__28828__auto___29772);
var G__29776 = (0);
seq__29757_29761 = G__29773;
chunk__29758_29762 = G__29774;
count__29759_29763 = G__29775;
i__29760_29764 = G__29776;
continue;
} else {
var n_29777 = cljs.core.first.call(null,seq__29757_29771__$1);
n_29777.removeAttribute(cljs.core.name.call(null,name));

var G__29778 = cljs.core.next.call(null,seq__29757_29771__$1);
var G__29779 = null;
var G__29780 = (0);
var G__29781 = (0);
seq__29757_29761 = G__29778;
chunk__29758_29762 = G__29779;
count__29759_29763 = G__29780;
i__29760_29764 = G__29781;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__29782 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__29782,(0),null);
var v = cljs.core.nth.call(null,vec__29782,(1),null);
if(cljs.core.truth_((function (){var and__27977__auto__ = k;
if(cljs.core.truth_(and__27977__auto__)){
return v;
} else {
return and__27977__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs){
return (function (p1__29785_SHARP_){
var attr = attrs.item(p1__29785_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue]);
} else {
return null;
}
});})(node,attrs))
,cljs.core.range.call(null,attrs.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__29786_29796 = cljs.core.seq.call(null,styles);
var chunk__29787_29797 = null;
var count__29788_29798 = (0);
var i__29789_29799 = (0);
while(true){
if((i__29789_29799 < count__29788_29798)){
var vec__29790_29800 = cljs.core._nth.call(null,chunk__29787_29797,i__29789_29799);
var name_29801 = cljs.core.nth.call(null,vec__29790_29800,(0),null);
var value_29802 = cljs.core.nth.call(null,vec__29790_29800,(1),null);
domina.set_style_BANG_.call(null,content,name_29801,value_29802);

var G__29803 = seq__29786_29796;
var G__29804 = chunk__29787_29797;
var G__29805 = count__29788_29798;
var G__29806 = (i__29789_29799 + (1));
seq__29786_29796 = G__29803;
chunk__29787_29797 = G__29804;
count__29788_29798 = G__29805;
i__29789_29799 = G__29806;
continue;
} else {
var temp__4657__auto___29807 = cljs.core.seq.call(null,seq__29786_29796);
if(temp__4657__auto___29807){
var seq__29786_29808__$1 = temp__4657__auto___29807;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29786_29808__$1)){
var c__28828__auto___29809 = cljs.core.chunk_first.call(null,seq__29786_29808__$1);
var G__29810 = cljs.core.chunk_rest.call(null,seq__29786_29808__$1);
var G__29811 = c__28828__auto___29809;
var G__29812 = cljs.core.count.call(null,c__28828__auto___29809);
var G__29813 = (0);
seq__29786_29796 = G__29810;
chunk__29787_29797 = G__29811;
count__29788_29798 = G__29812;
i__29789_29799 = G__29813;
continue;
} else {
var vec__29793_29814 = cljs.core.first.call(null,seq__29786_29808__$1);
var name_29815 = cljs.core.nth.call(null,vec__29793_29814,(0),null);
var value_29816 = cljs.core.nth.call(null,vec__29793_29814,(1),null);
domina.set_style_BANG_.call(null,content,name_29815,value_29816);

var G__29817 = cljs.core.next.call(null,seq__29786_29808__$1);
var G__29818 = null;
var G__29819 = (0);
var G__29820 = (0);
seq__29786_29796 = G__29817;
chunk__29787_29797 = G__29818;
count__29788_29798 = G__29819;
i__29789_29799 = G__29820;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__29821_29831 = cljs.core.seq.call(null,attrs);
var chunk__29822_29832 = null;
var count__29823_29833 = (0);
var i__29824_29834 = (0);
while(true){
if((i__29824_29834 < count__29823_29833)){
var vec__29825_29835 = cljs.core._nth.call(null,chunk__29822_29832,i__29824_29834);
var name_29836 = cljs.core.nth.call(null,vec__29825_29835,(0),null);
var value_29837 = cljs.core.nth.call(null,vec__29825_29835,(1),null);
domina.set_attr_BANG_.call(null,content,name_29836,value_29837);

var G__29838 = seq__29821_29831;
var G__29839 = chunk__29822_29832;
var G__29840 = count__29823_29833;
var G__29841 = (i__29824_29834 + (1));
seq__29821_29831 = G__29838;
chunk__29822_29832 = G__29839;
count__29823_29833 = G__29840;
i__29824_29834 = G__29841;
continue;
} else {
var temp__4657__auto___29842 = cljs.core.seq.call(null,seq__29821_29831);
if(temp__4657__auto___29842){
var seq__29821_29843__$1 = temp__4657__auto___29842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29821_29843__$1)){
var c__28828__auto___29844 = cljs.core.chunk_first.call(null,seq__29821_29843__$1);
var G__29845 = cljs.core.chunk_rest.call(null,seq__29821_29843__$1);
var G__29846 = c__28828__auto___29844;
var G__29847 = cljs.core.count.call(null,c__28828__auto___29844);
var G__29848 = (0);
seq__29821_29831 = G__29845;
chunk__29822_29832 = G__29846;
count__29823_29833 = G__29847;
i__29824_29834 = G__29848;
continue;
} else {
var vec__29828_29849 = cljs.core.first.call(null,seq__29821_29843__$1);
var name_29850 = cljs.core.nth.call(null,vec__29828_29849,(0),null);
var value_29851 = cljs.core.nth.call(null,vec__29828_29849,(1),null);
domina.set_attr_BANG_.call(null,content,name_29850,value_29851);

var G__29852 = cljs.core.next.call(null,seq__29821_29843__$1);
var G__29853 = null;
var G__29854 = (0);
var G__29855 = (0);
seq__29821_29831 = G__29852;
chunk__29822_29832 = G__29853;
count__29823_29833 = G__29854;
i__29824_29834 = G__29855;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__29856_29860 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29857_29861 = null;
var count__29858_29862 = (0);
var i__29859_29863 = (0);
while(true){
if((i__29859_29863 < count__29858_29862)){
var node_29864 = cljs.core._nth.call(null,chunk__29857_29861,i__29859_29863);
goog.dom.classes.add(node_29864,class$);

var G__29865 = seq__29856_29860;
var G__29866 = chunk__29857_29861;
var G__29867 = count__29858_29862;
var G__29868 = (i__29859_29863 + (1));
seq__29856_29860 = G__29865;
chunk__29857_29861 = G__29866;
count__29858_29862 = G__29867;
i__29859_29863 = G__29868;
continue;
} else {
var temp__4657__auto___29869 = cljs.core.seq.call(null,seq__29856_29860);
if(temp__4657__auto___29869){
var seq__29856_29870__$1 = temp__4657__auto___29869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29856_29870__$1)){
var c__28828__auto___29871 = cljs.core.chunk_first.call(null,seq__29856_29870__$1);
var G__29872 = cljs.core.chunk_rest.call(null,seq__29856_29870__$1);
var G__29873 = c__28828__auto___29871;
var G__29874 = cljs.core.count.call(null,c__28828__auto___29871);
var G__29875 = (0);
seq__29856_29860 = G__29872;
chunk__29857_29861 = G__29873;
count__29858_29862 = G__29874;
i__29859_29863 = G__29875;
continue;
} else {
var node_29876 = cljs.core.first.call(null,seq__29856_29870__$1);
goog.dom.classes.add(node_29876,class$);

var G__29877 = cljs.core.next.call(null,seq__29856_29870__$1);
var G__29878 = null;
var G__29879 = (0);
var G__29880 = (0);
seq__29856_29860 = G__29877;
chunk__29857_29861 = G__29878;
count__29858_29862 = G__29879;
i__29859_29863 = G__29880;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__29881_29885 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29882_29886 = null;
var count__29883_29887 = (0);
var i__29884_29888 = (0);
while(true){
if((i__29884_29888 < count__29883_29887)){
var node_29889 = cljs.core._nth.call(null,chunk__29882_29886,i__29884_29888);
goog.dom.classes.remove(node_29889,class$);

var G__29890 = seq__29881_29885;
var G__29891 = chunk__29882_29886;
var G__29892 = count__29883_29887;
var G__29893 = (i__29884_29888 + (1));
seq__29881_29885 = G__29890;
chunk__29882_29886 = G__29891;
count__29883_29887 = G__29892;
i__29884_29888 = G__29893;
continue;
} else {
var temp__4657__auto___29894 = cljs.core.seq.call(null,seq__29881_29885);
if(temp__4657__auto___29894){
var seq__29881_29895__$1 = temp__4657__auto___29894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29881_29895__$1)){
var c__28828__auto___29896 = cljs.core.chunk_first.call(null,seq__29881_29895__$1);
var G__29897 = cljs.core.chunk_rest.call(null,seq__29881_29895__$1);
var G__29898 = c__28828__auto___29896;
var G__29899 = cljs.core.count.call(null,c__28828__auto___29896);
var G__29900 = (0);
seq__29881_29885 = G__29897;
chunk__29882_29886 = G__29898;
count__29883_29887 = G__29899;
i__29884_29888 = G__29900;
continue;
} else {
var node_29901 = cljs.core.first.call(null,seq__29881_29895__$1);
goog.dom.classes.remove(node_29901,class$);

var G__29902 = cljs.core.next.call(null,seq__29881_29895__$1);
var G__29903 = null;
var G__29904 = (0);
var G__29905 = (0);
seq__29881_29885 = G__29902;
chunk__29882_29886 = G__29903;
count__29883_29887 = G__29904;
i__29884_29888 = G__29905;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__29906_29910 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29907_29911 = null;
var count__29908_29912 = (0);
var i__29909_29913 = (0);
while(true){
if((i__29909_29913 < count__29908_29912)){
var node_29914 = cljs.core._nth.call(null,chunk__29907_29911,i__29909_29913);
goog.dom.classes.toggle(node_29914,class$);

var G__29915 = seq__29906_29910;
var G__29916 = chunk__29907_29911;
var G__29917 = count__29908_29912;
var G__29918 = (i__29909_29913 + (1));
seq__29906_29910 = G__29915;
chunk__29907_29911 = G__29916;
count__29908_29912 = G__29917;
i__29909_29913 = G__29918;
continue;
} else {
var temp__4657__auto___29919 = cljs.core.seq.call(null,seq__29906_29910);
if(temp__4657__auto___29919){
var seq__29906_29920__$1 = temp__4657__auto___29919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29906_29920__$1)){
var c__28828__auto___29921 = cljs.core.chunk_first.call(null,seq__29906_29920__$1);
var G__29922 = cljs.core.chunk_rest.call(null,seq__29906_29920__$1);
var G__29923 = c__28828__auto___29921;
var G__29924 = cljs.core.count.call(null,c__28828__auto___29921);
var G__29925 = (0);
seq__29906_29910 = G__29922;
chunk__29907_29911 = G__29923;
count__29908_29912 = G__29924;
i__29909_29913 = G__29925;
continue;
} else {
var node_29926 = cljs.core.first.call(null,seq__29906_29920__$1);
goog.dom.classes.toggle(node_29926,class$);

var G__29927 = cljs.core.next.call(null,seq__29906_29920__$1);
var G__29928 = null;
var G__29929 = (0);
var G__29930 = (0);
seq__29906_29910 = G__29927;
chunk__29907_29911 = G__29928;
count__29908_29912 = G__29929;
i__29909_29913 = G__29930;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_29935__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__29931_29936 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29932_29937 = null;
var count__29933_29938 = (0);
var i__29934_29939 = (0);
while(true){
if((i__29934_29939 < count__29933_29938)){
var node_29940 = cljs.core._nth.call(null,chunk__29932_29937,i__29934_29939);
goog.dom.classes.set(node_29940,classes_29935__$1);

var G__29941 = seq__29931_29936;
var G__29942 = chunk__29932_29937;
var G__29943 = count__29933_29938;
var G__29944 = (i__29934_29939 + (1));
seq__29931_29936 = G__29941;
chunk__29932_29937 = G__29942;
count__29933_29938 = G__29943;
i__29934_29939 = G__29944;
continue;
} else {
var temp__4657__auto___29945 = cljs.core.seq.call(null,seq__29931_29936);
if(temp__4657__auto___29945){
var seq__29931_29946__$1 = temp__4657__auto___29945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29931_29946__$1)){
var c__28828__auto___29947 = cljs.core.chunk_first.call(null,seq__29931_29946__$1);
var G__29948 = cljs.core.chunk_rest.call(null,seq__29931_29946__$1);
var G__29949 = c__28828__auto___29947;
var G__29950 = cljs.core.count.call(null,c__28828__auto___29947);
var G__29951 = (0);
seq__29931_29936 = G__29948;
chunk__29932_29937 = G__29949;
count__29933_29938 = G__29950;
i__29934_29939 = G__29951;
continue;
} else {
var node_29952 = cljs.core.first.call(null,seq__29931_29946__$1);
goog.dom.classes.set(node_29952,classes_29935__$1);

var G__29953 = cljs.core.next.call(null,seq__29931_29946__$1);
var G__29954 = null;
var G__29955 = (0);
var G__29956 = (0);
seq__29931_29936 = G__29953;
chunk__29932_29937 = G__29954;
count__29933_29938 = G__29955;
i__29934_29939 = G__29956;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__29957_29961 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29958_29962 = null;
var count__29959_29963 = (0);
var i__29960_29964 = (0);
while(true){
if((i__29960_29964 < count__29959_29963)){
var node_29965 = cljs.core._nth.call(null,chunk__29958_29962,i__29960_29964);
goog.dom.setTextContent(node_29965,value);

var G__29966 = seq__29957_29961;
var G__29967 = chunk__29958_29962;
var G__29968 = count__29959_29963;
var G__29969 = (i__29960_29964 + (1));
seq__29957_29961 = G__29966;
chunk__29958_29962 = G__29967;
count__29959_29963 = G__29968;
i__29960_29964 = G__29969;
continue;
} else {
var temp__4657__auto___29970 = cljs.core.seq.call(null,seq__29957_29961);
if(temp__4657__auto___29970){
var seq__29957_29971__$1 = temp__4657__auto___29970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29957_29971__$1)){
var c__28828__auto___29972 = cljs.core.chunk_first.call(null,seq__29957_29971__$1);
var G__29973 = cljs.core.chunk_rest.call(null,seq__29957_29971__$1);
var G__29974 = c__28828__auto___29972;
var G__29975 = cljs.core.count.call(null,c__28828__auto___29972);
var G__29976 = (0);
seq__29957_29961 = G__29973;
chunk__29958_29962 = G__29974;
count__29959_29963 = G__29975;
i__29960_29964 = G__29976;
continue;
} else {
var node_29977 = cljs.core.first.call(null,seq__29957_29971__$1);
goog.dom.setTextContent(node_29977,value);

var G__29978 = cljs.core.next.call(null,seq__29957_29971__$1);
var G__29979 = null;
var G__29980 = (0);
var G__29981 = (0);
seq__29957_29961 = G__29978;
chunk__29958_29962 = G__29979;
count__29959_29963 = G__29980;
i__29960_29964 = G__29981;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__29982_29986 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29983_29987 = null;
var count__29984_29988 = (0);
var i__29985_29989 = (0);
while(true){
if((i__29985_29989 < count__29984_29988)){
var node_29990 = cljs.core._nth.call(null,chunk__29983_29987,i__29985_29989);
goog.dom.forms.setValue(node_29990,value);

var G__29991 = seq__29982_29986;
var G__29992 = chunk__29983_29987;
var G__29993 = count__29984_29988;
var G__29994 = (i__29985_29989 + (1));
seq__29982_29986 = G__29991;
chunk__29983_29987 = G__29992;
count__29984_29988 = G__29993;
i__29985_29989 = G__29994;
continue;
} else {
var temp__4657__auto___29995 = cljs.core.seq.call(null,seq__29982_29986);
if(temp__4657__auto___29995){
var seq__29982_29996__$1 = temp__4657__auto___29995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29982_29996__$1)){
var c__28828__auto___29997 = cljs.core.chunk_first.call(null,seq__29982_29996__$1);
var G__29998 = cljs.core.chunk_rest.call(null,seq__29982_29996__$1);
var G__29999 = c__28828__auto___29997;
var G__30000 = cljs.core.count.call(null,c__28828__auto___29997);
var G__30001 = (0);
seq__29982_29986 = G__29998;
chunk__29983_29987 = G__29999;
count__29984_29988 = G__30000;
i__29985_29989 = G__30001;
continue;
} else {
var node_30002 = cljs.core.first.call(null,seq__29982_29996__$1);
goog.dom.forms.setValue(node_30002,value);

var G__30003 = cljs.core.next.call(null,seq__29982_29996__$1);
var G__30004 = null;
var G__30005 = (0);
var G__30006 = (0);
seq__29982_29986 = G__30003;
chunk__29983_29987 = G__30004;
count__29984_29988 = G__30005;
i__29985_29989 = G__30006;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if((allows_inner_html_QMARK_) && ((domina.support.leading_whitespace_QMARK_) || (cljs.core.not.call(null,leading_whitespace_QMARK_))) && (!(special_tag_QMARK_))){
var value_30012 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__30008_30013 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__30009_30014 = null;
var count__30010_30015 = (0);
var i__30011_30016 = (0);
while(true){
if((i__30011_30016 < count__30010_30015)){
var node_30017 = cljs.core._nth.call(null,chunk__30009_30014,i__30011_30016);
node_30017.innerHTML = value_30012;

var G__30018 = seq__30008_30013;
var G__30019 = chunk__30009_30014;
var G__30020 = count__30010_30015;
var G__30021 = (i__30011_30016 + (1));
seq__30008_30013 = G__30018;
chunk__30009_30014 = G__30019;
count__30010_30015 = G__30020;
i__30011_30016 = G__30021;
continue;
} else {
var temp__4657__auto___30022 = cljs.core.seq.call(null,seq__30008_30013);
if(temp__4657__auto___30022){
var seq__30008_30023__$1 = temp__4657__auto___30022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30008_30023__$1)){
var c__28828__auto___30024 = cljs.core.chunk_first.call(null,seq__30008_30023__$1);
var G__30025 = cljs.core.chunk_rest.call(null,seq__30008_30023__$1);
var G__30026 = c__28828__auto___30024;
var G__30027 = cljs.core.count.call(null,c__28828__auto___30024);
var G__30028 = (0);
seq__30008_30013 = G__30025;
chunk__30009_30014 = G__30026;
count__30010_30015 = G__30027;
i__30011_30016 = G__30028;
continue;
} else {
var node_30029 = cljs.core.first.call(null,seq__30008_30023__$1);
node_30029.innerHTML = value_30012;

var G__30030 = cljs.core.next.call(null,seq__30008_30023__$1);
var G__30031 = null;
var G__30032 = (0);
var G__30033 = (0);
seq__30008_30013 = G__30030;
chunk__30009_30014 = G__30031;
count__30010_30015 = G__30032;
i__30011_30016 = G__30033;
continue;
}
} else {
}
}
break;
}
}catch (e30007){if((e30007 instanceof Error)){
var e_30034 = e30007;
domina.replace_children_BANG_.call(null,content,value_30012);
} else {
throw e30007;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var G__30036 = arguments.length;
switch (G__30036) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__27977__auto__ = bubble;
if(cljs.core.truth_(and__27977__auto__)){
return (value == null);
} else {
return and__27977__auto__;
}
})())){
var temp__4657__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.get_data.cljs$lang$maxFixedArity = 3;

/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__27989__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__30040_30044 = cljs.core.seq.call(null,children);
var chunk__30041_30045 = null;
var count__30042_30046 = (0);
var i__30043_30047 = (0);
while(true){
if((i__30043_30047 < count__30042_30046)){
var child_30048 = cljs.core._nth.call(null,chunk__30041_30045,i__30043_30047);
frag.appendChild(child_30048);

var G__30049 = seq__30040_30044;
var G__30050 = chunk__30041_30045;
var G__30051 = count__30042_30046;
var G__30052 = (i__30043_30047 + (1));
seq__30040_30044 = G__30049;
chunk__30041_30045 = G__30050;
count__30042_30046 = G__30051;
i__30043_30047 = G__30052;
continue;
} else {
var temp__4657__auto___30053 = cljs.core.seq.call(null,seq__30040_30044);
if(temp__4657__auto___30053){
var seq__30040_30054__$1 = temp__4657__auto___30053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30040_30054__$1)){
var c__28828__auto___30055 = cljs.core.chunk_first.call(null,seq__30040_30054__$1);
var G__30056 = cljs.core.chunk_rest.call(null,seq__30040_30054__$1);
var G__30057 = c__28828__auto___30055;
var G__30058 = cljs.core.count.call(null,c__28828__auto___30055);
var G__30059 = (0);
seq__30040_30044 = G__30056;
chunk__30041_30045 = G__30057;
count__30042_30046 = G__30058;
i__30043_30047 = G__30059;
continue;
} else {
var child_30060 = cljs.core.first.call(null,seq__30040_30054__$1);
frag.appendChild(child_30060);

var G__30061 = cljs.core.next.call(null,seq__30040_30054__$1);
var G__30062 = null;
var G__30063 = (0);
var G__30064 = (0);
seq__30040_30044 = G__30061;
chunk__30041_30045 = G__30062;
count__30042_30046 = G__30063;
i__30043_30047 = G__30064;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__30038_SHARP_,p2__30039_SHARP_){
return f.call(null,p1__30038_SHARP_,p2__30039_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__30066 = arguments.length;
switch (G__30066) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;

domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var G__30069 = arguments.length;
switch (G__30069) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;

/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__27977__auto__ = obj;
if(cljs.core.truth_(and__27977__auto__)){
var and__27977__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__27977__auto____$1){
return obj.length;
} else {
return and__27977__auto____$1;
}
} else {
return and__27977__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === list_thing.cljs$core$ISeqable$)))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
goog.object.set(domina.DomContent,"string",true);

goog.object.set(domina.nodes,"string",(function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

goog.object.set(domina.single_node,"string",(function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

goog.object.set(domina.DomContent,"_",true);

goog.object.set(domina.nodes,"_",(function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

goog.object.set(domina.single_node,"_",(function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=domina.js.map
