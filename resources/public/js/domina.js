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
var opt_wrapper_29596 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_29597 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_29598 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_29598,opt_wrapper_29596,table_section_wrapper_29597,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_29596,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_29597,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_29597,cell_wrapper_29598,table_section_wrapper_29597,table_section_wrapper_29597]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__27924__auto__ = div.firstChild;
if(cljs.core.truth_(and__27924__auto__)){
return div.firstChild.childNodes;
} else {
return and__27924__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__29599 = cljs.core.seq.call(null,tbody);
var chunk__29600 = null;
var count__29601 = (0);
var i__29602 = (0);
while(true){
if((i__29602 < count__29601)){
var child = cljs.core._nth.call(null,chunk__29600,i__29602);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__29603 = seq__29599;
var G__29604 = chunk__29600;
var G__29605 = count__29601;
var G__29606 = (i__29602 + (1));
seq__29599 = G__29603;
chunk__29600 = G__29604;
count__29601 = G__29605;
i__29602 = G__29606;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29599);
if(temp__4657__auto__){
var seq__29599__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29599__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__29599__$1);
var G__29607 = cljs.core.chunk_rest.call(null,seq__29599__$1);
var G__29608 = c__28775__auto__;
var G__29609 = cljs.core.count.call(null,c__28775__auto__);
var G__29610 = (0);
seq__29599 = G__29607;
chunk__29600 = G__29608;
count__29601 = G__29609;
i__29602 = G__29610;
continue;
} else {
var child = cljs.core.first.call(null,seq__29599__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__29611 = cljs.core.next.call(null,seq__29599__$1);
var G__29612 = null;
var G__29613 = (0);
var G__29614 = (0);
seq__29599 = G__29611;
chunk__29600 = G__29612;
count__29601 = G__29613;
i__29602 = G__29614;
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
var vec__29615 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__29615,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__29615,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__29615,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__29618 = wrapper.lastChild;
var G__29619 = (level - (1));
wrapper = G__29618;
level = G__29619;
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

if(cljs.core.truth_((function (){var and__27924__auto__ = !(domina.support.leading_whitespace_QMARK_);
if(and__27924__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__27924__auto__;
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
var x__28619__auto__ = (((content == null))?null:content);
var m__28620__auto__ = (domina.nodes[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,content);
} else {
var m__28620__auto____$1 = (domina.nodes["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,content);
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
var x__28619__auto__ = (((nodeseq == null))?null:nodeseq);
var m__28620__auto__ = (domina.single_node[goog.typeOf(x__28619__auto__)]);
if(!((m__28620__auto__ == null))){
return m__28620__auto__.call(null,nodeseq);
} else {
var m__28620__auto____$1 = (domina.single_node["_"]);
if(!((m__28620__auto____$1 == null))){
return m__28620__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__29112__auto__ = [];
var len__29105__auto___29621 = arguments.length;
var i__29106__auto___29622 = (0);
while(true){
if((i__29106__auto___29622 < len__29105__auto___29621)){
args__29112__auto__.push((arguments[i__29106__auto___29622]));

var G__29623 = (i__29106__auto___29622 + (1));
i__29106__auto___29622 = G__29623;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if((domina._STAR_debug_STAR_) && (!(cljs.core._EQ_.call(null,window.console,undefined)))){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq29620){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29620));
});

domina.log = (function domina$log(var_args){
var args__29112__auto__ = [];
var len__29105__auto___29625 = arguments.length;
var i__29106__auto___29626 = (0);
while(true){
if((i__29106__auto___29626 < len__29105__auto___29625)){
args__29112__auto__.push((arguments[i__29106__auto___29626]));

var G__29627 = (i__29106__auto___29626 + (1));
i__29106__auto___29626 = G__29627;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq29624){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29624));
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
var args__29112__auto__ = [];
var len__29105__auto___29629 = arguments.length;
var i__29106__auto___29630 = (0);
while(true){
if((i__29106__auto___29630 < len__29105__auto___29629)){
args__29112__auto__.push((arguments[i__29106__auto___29630]));

var G__29631 = (i__29106__auto___29630 + (1));
i__29106__auto___29630 = G__29631;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq29628){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29628));
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
return cljs.core.map.call(null,(function (p1__29632_SHARP_){
return p1__29632_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__29633_SHARP_,p2__29634_SHARP_){
return goog.dom.insertChildAt(p1__29633_SHARP_,p2__29634_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__29636_SHARP_,p2__29635_SHARP_){
return goog.dom.insertSiblingBefore(p2__29635_SHARP_,p1__29636_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__29638_SHARP_,p2__29637_SHARP_){
return goog.dom.insertSiblingAfter(p2__29637_SHARP_,p1__29638_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__29640_SHARP_,p2__29639_SHARP_){
return goog.dom.replaceNode(p2__29639_SHARP_,p1__29640_SHARP_);
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
var args__29112__auto__ = [];
var len__29105__auto___29648 = arguments.length;
var i__29106__auto___29649 = (0);
while(true){
if((i__29106__auto___29649 < len__29105__auto___29648)){
args__29112__auto__.push((arguments[i__29106__auto___29649]));

var G__29650 = (i__29106__auto___29649 + (1));
i__29106__auto___29649 = G__29650;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__29644_29651 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29645_29652 = null;
var count__29646_29653 = (0);
var i__29647_29654 = (0);
while(true){
if((i__29647_29654 < count__29646_29653)){
var n_29655 = cljs.core._nth.call(null,chunk__29645_29652,i__29647_29654);
goog.style.setStyle(n_29655,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__29656 = seq__29644_29651;
var G__29657 = chunk__29645_29652;
var G__29658 = count__29646_29653;
var G__29659 = (i__29647_29654 + (1));
seq__29644_29651 = G__29656;
chunk__29645_29652 = G__29657;
count__29646_29653 = G__29658;
i__29647_29654 = G__29659;
continue;
} else {
var temp__4657__auto___29660 = cljs.core.seq.call(null,seq__29644_29651);
if(temp__4657__auto___29660){
var seq__29644_29661__$1 = temp__4657__auto___29660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29644_29661__$1)){
var c__28775__auto___29662 = cljs.core.chunk_first.call(null,seq__29644_29661__$1);
var G__29663 = cljs.core.chunk_rest.call(null,seq__29644_29661__$1);
var G__29664 = c__28775__auto___29662;
var G__29665 = cljs.core.count.call(null,c__28775__auto___29662);
var G__29666 = (0);
seq__29644_29651 = G__29663;
chunk__29645_29652 = G__29664;
count__29646_29653 = G__29665;
i__29647_29654 = G__29666;
continue;
} else {
var n_29667 = cljs.core.first.call(null,seq__29644_29661__$1);
goog.style.setStyle(n_29667,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__29668 = cljs.core.next.call(null,seq__29644_29661__$1);
var G__29669 = null;
var G__29670 = (0);
var G__29671 = (0);
seq__29644_29651 = G__29668;
chunk__29645_29652 = G__29669;
count__29646_29653 = G__29670;
i__29647_29654 = G__29671;
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

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq29641){
var G__29642 = cljs.core.first.call(null,seq29641);
var seq29641__$1 = cljs.core.next.call(null,seq29641);
var G__29643 = cljs.core.first.call(null,seq29641__$1);
var seq29641__$2 = cljs.core.next.call(null,seq29641__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29642,G__29643,seq29641__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__29112__auto__ = [];
var len__29105__auto___29679 = arguments.length;
var i__29106__auto___29680 = (0);
while(true){
if((i__29106__auto___29680 < len__29105__auto___29679)){
args__29112__auto__.push((arguments[i__29106__auto___29680]));

var G__29681 = (i__29106__auto___29680 + (1));
i__29106__auto___29680 = G__29681;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__29675_29682 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29676_29683 = null;
var count__29677_29684 = (0);
var i__29678_29685 = (0);
while(true){
if((i__29678_29685 < count__29677_29684)){
var n_29686 = cljs.core._nth.call(null,chunk__29676_29683,i__29678_29685);
n_29686.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__29687 = seq__29675_29682;
var G__29688 = chunk__29676_29683;
var G__29689 = count__29677_29684;
var G__29690 = (i__29678_29685 + (1));
seq__29675_29682 = G__29687;
chunk__29676_29683 = G__29688;
count__29677_29684 = G__29689;
i__29678_29685 = G__29690;
continue;
} else {
var temp__4657__auto___29691 = cljs.core.seq.call(null,seq__29675_29682);
if(temp__4657__auto___29691){
var seq__29675_29692__$1 = temp__4657__auto___29691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29675_29692__$1)){
var c__28775__auto___29693 = cljs.core.chunk_first.call(null,seq__29675_29692__$1);
var G__29694 = cljs.core.chunk_rest.call(null,seq__29675_29692__$1);
var G__29695 = c__28775__auto___29693;
var G__29696 = cljs.core.count.call(null,c__28775__auto___29693);
var G__29697 = (0);
seq__29675_29682 = G__29694;
chunk__29676_29683 = G__29695;
count__29677_29684 = G__29696;
i__29678_29685 = G__29697;
continue;
} else {
var n_29698 = cljs.core.first.call(null,seq__29675_29692__$1);
n_29698.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__29699 = cljs.core.next.call(null,seq__29675_29692__$1);
var G__29700 = null;
var G__29701 = (0);
var G__29702 = (0);
seq__29675_29682 = G__29699;
chunk__29676_29683 = G__29700;
count__29677_29684 = G__29701;
i__29678_29685 = G__29702;
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

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq29672){
var G__29673 = cljs.core.first.call(null,seq29672);
var seq29672__$1 = cljs.core.next.call(null,seq29672);
var G__29674 = cljs.core.first.call(null,seq29672__$1);
var seq29672__$2 = cljs.core.next.call(null,seq29672__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29673,G__29674,seq29672__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__29703_29707 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29704_29708 = null;
var count__29705_29709 = (0);
var i__29706_29710 = (0);
while(true){
if((i__29706_29710 < count__29705_29709)){
var n_29711 = cljs.core._nth.call(null,chunk__29704_29708,i__29706_29710);
n_29711.removeAttribute(cljs.core.name.call(null,name));

var G__29712 = seq__29703_29707;
var G__29713 = chunk__29704_29708;
var G__29714 = count__29705_29709;
var G__29715 = (i__29706_29710 + (1));
seq__29703_29707 = G__29712;
chunk__29704_29708 = G__29713;
count__29705_29709 = G__29714;
i__29706_29710 = G__29715;
continue;
} else {
var temp__4657__auto___29716 = cljs.core.seq.call(null,seq__29703_29707);
if(temp__4657__auto___29716){
var seq__29703_29717__$1 = temp__4657__auto___29716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29703_29717__$1)){
var c__28775__auto___29718 = cljs.core.chunk_first.call(null,seq__29703_29717__$1);
var G__29719 = cljs.core.chunk_rest.call(null,seq__29703_29717__$1);
var G__29720 = c__28775__auto___29718;
var G__29721 = cljs.core.count.call(null,c__28775__auto___29718);
var G__29722 = (0);
seq__29703_29707 = G__29719;
chunk__29704_29708 = G__29720;
count__29705_29709 = G__29721;
i__29706_29710 = G__29722;
continue;
} else {
var n_29723 = cljs.core.first.call(null,seq__29703_29717__$1);
n_29723.removeAttribute(cljs.core.name.call(null,name));

var G__29724 = cljs.core.next.call(null,seq__29703_29717__$1);
var G__29725 = null;
var G__29726 = (0);
var G__29727 = (0);
seq__29703_29707 = G__29724;
chunk__29704_29708 = G__29725;
count__29705_29709 = G__29726;
i__29706_29710 = G__29727;
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
var vec__29728 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__29728,(0),null);
var v = cljs.core.nth.call(null,vec__29728,(1),null);
if(cljs.core.truth_((function (){var and__27924__auto__ = k;
if(cljs.core.truth_(and__27924__auto__)){
return v;
} else {
return and__27924__auto__;
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
return (function (p1__29731_SHARP_){
var attr = attrs.item(p1__29731_SHARP_);
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
var seq__29732_29742 = cljs.core.seq.call(null,styles);
var chunk__29733_29743 = null;
var count__29734_29744 = (0);
var i__29735_29745 = (0);
while(true){
if((i__29735_29745 < count__29734_29744)){
var vec__29736_29746 = cljs.core._nth.call(null,chunk__29733_29743,i__29735_29745);
var name_29747 = cljs.core.nth.call(null,vec__29736_29746,(0),null);
var value_29748 = cljs.core.nth.call(null,vec__29736_29746,(1),null);
domina.set_style_BANG_.call(null,content,name_29747,value_29748);

var G__29749 = seq__29732_29742;
var G__29750 = chunk__29733_29743;
var G__29751 = count__29734_29744;
var G__29752 = (i__29735_29745 + (1));
seq__29732_29742 = G__29749;
chunk__29733_29743 = G__29750;
count__29734_29744 = G__29751;
i__29735_29745 = G__29752;
continue;
} else {
var temp__4657__auto___29753 = cljs.core.seq.call(null,seq__29732_29742);
if(temp__4657__auto___29753){
var seq__29732_29754__$1 = temp__4657__auto___29753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29732_29754__$1)){
var c__28775__auto___29755 = cljs.core.chunk_first.call(null,seq__29732_29754__$1);
var G__29756 = cljs.core.chunk_rest.call(null,seq__29732_29754__$1);
var G__29757 = c__28775__auto___29755;
var G__29758 = cljs.core.count.call(null,c__28775__auto___29755);
var G__29759 = (0);
seq__29732_29742 = G__29756;
chunk__29733_29743 = G__29757;
count__29734_29744 = G__29758;
i__29735_29745 = G__29759;
continue;
} else {
var vec__29739_29760 = cljs.core.first.call(null,seq__29732_29754__$1);
var name_29761 = cljs.core.nth.call(null,vec__29739_29760,(0),null);
var value_29762 = cljs.core.nth.call(null,vec__29739_29760,(1),null);
domina.set_style_BANG_.call(null,content,name_29761,value_29762);

var G__29763 = cljs.core.next.call(null,seq__29732_29754__$1);
var G__29764 = null;
var G__29765 = (0);
var G__29766 = (0);
seq__29732_29742 = G__29763;
chunk__29733_29743 = G__29764;
count__29734_29744 = G__29765;
i__29735_29745 = G__29766;
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
var seq__29767_29777 = cljs.core.seq.call(null,attrs);
var chunk__29768_29778 = null;
var count__29769_29779 = (0);
var i__29770_29780 = (0);
while(true){
if((i__29770_29780 < count__29769_29779)){
var vec__29771_29781 = cljs.core._nth.call(null,chunk__29768_29778,i__29770_29780);
var name_29782 = cljs.core.nth.call(null,vec__29771_29781,(0),null);
var value_29783 = cljs.core.nth.call(null,vec__29771_29781,(1),null);
domina.set_attr_BANG_.call(null,content,name_29782,value_29783);

var G__29784 = seq__29767_29777;
var G__29785 = chunk__29768_29778;
var G__29786 = count__29769_29779;
var G__29787 = (i__29770_29780 + (1));
seq__29767_29777 = G__29784;
chunk__29768_29778 = G__29785;
count__29769_29779 = G__29786;
i__29770_29780 = G__29787;
continue;
} else {
var temp__4657__auto___29788 = cljs.core.seq.call(null,seq__29767_29777);
if(temp__4657__auto___29788){
var seq__29767_29789__$1 = temp__4657__auto___29788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29767_29789__$1)){
var c__28775__auto___29790 = cljs.core.chunk_first.call(null,seq__29767_29789__$1);
var G__29791 = cljs.core.chunk_rest.call(null,seq__29767_29789__$1);
var G__29792 = c__28775__auto___29790;
var G__29793 = cljs.core.count.call(null,c__28775__auto___29790);
var G__29794 = (0);
seq__29767_29777 = G__29791;
chunk__29768_29778 = G__29792;
count__29769_29779 = G__29793;
i__29770_29780 = G__29794;
continue;
} else {
var vec__29774_29795 = cljs.core.first.call(null,seq__29767_29789__$1);
var name_29796 = cljs.core.nth.call(null,vec__29774_29795,(0),null);
var value_29797 = cljs.core.nth.call(null,vec__29774_29795,(1),null);
domina.set_attr_BANG_.call(null,content,name_29796,value_29797);

var G__29798 = cljs.core.next.call(null,seq__29767_29789__$1);
var G__29799 = null;
var G__29800 = (0);
var G__29801 = (0);
seq__29767_29777 = G__29798;
chunk__29768_29778 = G__29799;
count__29769_29779 = G__29800;
i__29770_29780 = G__29801;
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
var seq__29802_29806 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29803_29807 = null;
var count__29804_29808 = (0);
var i__29805_29809 = (0);
while(true){
if((i__29805_29809 < count__29804_29808)){
var node_29810 = cljs.core._nth.call(null,chunk__29803_29807,i__29805_29809);
goog.dom.classes.add(node_29810,class$);

var G__29811 = seq__29802_29806;
var G__29812 = chunk__29803_29807;
var G__29813 = count__29804_29808;
var G__29814 = (i__29805_29809 + (1));
seq__29802_29806 = G__29811;
chunk__29803_29807 = G__29812;
count__29804_29808 = G__29813;
i__29805_29809 = G__29814;
continue;
} else {
var temp__4657__auto___29815 = cljs.core.seq.call(null,seq__29802_29806);
if(temp__4657__auto___29815){
var seq__29802_29816__$1 = temp__4657__auto___29815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29802_29816__$1)){
var c__28775__auto___29817 = cljs.core.chunk_first.call(null,seq__29802_29816__$1);
var G__29818 = cljs.core.chunk_rest.call(null,seq__29802_29816__$1);
var G__29819 = c__28775__auto___29817;
var G__29820 = cljs.core.count.call(null,c__28775__auto___29817);
var G__29821 = (0);
seq__29802_29806 = G__29818;
chunk__29803_29807 = G__29819;
count__29804_29808 = G__29820;
i__29805_29809 = G__29821;
continue;
} else {
var node_29822 = cljs.core.first.call(null,seq__29802_29816__$1);
goog.dom.classes.add(node_29822,class$);

var G__29823 = cljs.core.next.call(null,seq__29802_29816__$1);
var G__29824 = null;
var G__29825 = (0);
var G__29826 = (0);
seq__29802_29806 = G__29823;
chunk__29803_29807 = G__29824;
count__29804_29808 = G__29825;
i__29805_29809 = G__29826;
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
var seq__29827_29831 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29828_29832 = null;
var count__29829_29833 = (0);
var i__29830_29834 = (0);
while(true){
if((i__29830_29834 < count__29829_29833)){
var node_29835 = cljs.core._nth.call(null,chunk__29828_29832,i__29830_29834);
goog.dom.classes.remove(node_29835,class$);

var G__29836 = seq__29827_29831;
var G__29837 = chunk__29828_29832;
var G__29838 = count__29829_29833;
var G__29839 = (i__29830_29834 + (1));
seq__29827_29831 = G__29836;
chunk__29828_29832 = G__29837;
count__29829_29833 = G__29838;
i__29830_29834 = G__29839;
continue;
} else {
var temp__4657__auto___29840 = cljs.core.seq.call(null,seq__29827_29831);
if(temp__4657__auto___29840){
var seq__29827_29841__$1 = temp__4657__auto___29840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29827_29841__$1)){
var c__28775__auto___29842 = cljs.core.chunk_first.call(null,seq__29827_29841__$1);
var G__29843 = cljs.core.chunk_rest.call(null,seq__29827_29841__$1);
var G__29844 = c__28775__auto___29842;
var G__29845 = cljs.core.count.call(null,c__28775__auto___29842);
var G__29846 = (0);
seq__29827_29831 = G__29843;
chunk__29828_29832 = G__29844;
count__29829_29833 = G__29845;
i__29830_29834 = G__29846;
continue;
} else {
var node_29847 = cljs.core.first.call(null,seq__29827_29841__$1);
goog.dom.classes.remove(node_29847,class$);

var G__29848 = cljs.core.next.call(null,seq__29827_29841__$1);
var G__29849 = null;
var G__29850 = (0);
var G__29851 = (0);
seq__29827_29831 = G__29848;
chunk__29828_29832 = G__29849;
count__29829_29833 = G__29850;
i__29830_29834 = G__29851;
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
var seq__29852_29856 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29853_29857 = null;
var count__29854_29858 = (0);
var i__29855_29859 = (0);
while(true){
if((i__29855_29859 < count__29854_29858)){
var node_29860 = cljs.core._nth.call(null,chunk__29853_29857,i__29855_29859);
goog.dom.classes.toggle(node_29860,class$);

var G__29861 = seq__29852_29856;
var G__29862 = chunk__29853_29857;
var G__29863 = count__29854_29858;
var G__29864 = (i__29855_29859 + (1));
seq__29852_29856 = G__29861;
chunk__29853_29857 = G__29862;
count__29854_29858 = G__29863;
i__29855_29859 = G__29864;
continue;
} else {
var temp__4657__auto___29865 = cljs.core.seq.call(null,seq__29852_29856);
if(temp__4657__auto___29865){
var seq__29852_29866__$1 = temp__4657__auto___29865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29852_29866__$1)){
var c__28775__auto___29867 = cljs.core.chunk_first.call(null,seq__29852_29866__$1);
var G__29868 = cljs.core.chunk_rest.call(null,seq__29852_29866__$1);
var G__29869 = c__28775__auto___29867;
var G__29870 = cljs.core.count.call(null,c__28775__auto___29867);
var G__29871 = (0);
seq__29852_29856 = G__29868;
chunk__29853_29857 = G__29869;
count__29854_29858 = G__29870;
i__29855_29859 = G__29871;
continue;
} else {
var node_29872 = cljs.core.first.call(null,seq__29852_29866__$1);
goog.dom.classes.toggle(node_29872,class$);

var G__29873 = cljs.core.next.call(null,seq__29852_29866__$1);
var G__29874 = null;
var G__29875 = (0);
var G__29876 = (0);
seq__29852_29856 = G__29873;
chunk__29853_29857 = G__29874;
count__29854_29858 = G__29875;
i__29855_29859 = G__29876;
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
var classes_29881__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__29877_29882 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29878_29883 = null;
var count__29879_29884 = (0);
var i__29880_29885 = (0);
while(true){
if((i__29880_29885 < count__29879_29884)){
var node_29886 = cljs.core._nth.call(null,chunk__29878_29883,i__29880_29885);
goog.dom.classes.set(node_29886,classes_29881__$1);

var G__29887 = seq__29877_29882;
var G__29888 = chunk__29878_29883;
var G__29889 = count__29879_29884;
var G__29890 = (i__29880_29885 + (1));
seq__29877_29882 = G__29887;
chunk__29878_29883 = G__29888;
count__29879_29884 = G__29889;
i__29880_29885 = G__29890;
continue;
} else {
var temp__4657__auto___29891 = cljs.core.seq.call(null,seq__29877_29882);
if(temp__4657__auto___29891){
var seq__29877_29892__$1 = temp__4657__auto___29891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29877_29892__$1)){
var c__28775__auto___29893 = cljs.core.chunk_first.call(null,seq__29877_29892__$1);
var G__29894 = cljs.core.chunk_rest.call(null,seq__29877_29892__$1);
var G__29895 = c__28775__auto___29893;
var G__29896 = cljs.core.count.call(null,c__28775__auto___29893);
var G__29897 = (0);
seq__29877_29882 = G__29894;
chunk__29878_29883 = G__29895;
count__29879_29884 = G__29896;
i__29880_29885 = G__29897;
continue;
} else {
var node_29898 = cljs.core.first.call(null,seq__29877_29892__$1);
goog.dom.classes.set(node_29898,classes_29881__$1);

var G__29899 = cljs.core.next.call(null,seq__29877_29892__$1);
var G__29900 = null;
var G__29901 = (0);
var G__29902 = (0);
seq__29877_29882 = G__29899;
chunk__29878_29883 = G__29900;
count__29879_29884 = G__29901;
i__29880_29885 = G__29902;
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
var seq__29903_29907 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29904_29908 = null;
var count__29905_29909 = (0);
var i__29906_29910 = (0);
while(true){
if((i__29906_29910 < count__29905_29909)){
var node_29911 = cljs.core._nth.call(null,chunk__29904_29908,i__29906_29910);
goog.dom.setTextContent(node_29911,value);

var G__29912 = seq__29903_29907;
var G__29913 = chunk__29904_29908;
var G__29914 = count__29905_29909;
var G__29915 = (i__29906_29910 + (1));
seq__29903_29907 = G__29912;
chunk__29904_29908 = G__29913;
count__29905_29909 = G__29914;
i__29906_29910 = G__29915;
continue;
} else {
var temp__4657__auto___29916 = cljs.core.seq.call(null,seq__29903_29907);
if(temp__4657__auto___29916){
var seq__29903_29917__$1 = temp__4657__auto___29916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29903_29917__$1)){
var c__28775__auto___29918 = cljs.core.chunk_first.call(null,seq__29903_29917__$1);
var G__29919 = cljs.core.chunk_rest.call(null,seq__29903_29917__$1);
var G__29920 = c__28775__auto___29918;
var G__29921 = cljs.core.count.call(null,c__28775__auto___29918);
var G__29922 = (0);
seq__29903_29907 = G__29919;
chunk__29904_29908 = G__29920;
count__29905_29909 = G__29921;
i__29906_29910 = G__29922;
continue;
} else {
var node_29923 = cljs.core.first.call(null,seq__29903_29917__$1);
goog.dom.setTextContent(node_29923,value);

var G__29924 = cljs.core.next.call(null,seq__29903_29917__$1);
var G__29925 = null;
var G__29926 = (0);
var G__29927 = (0);
seq__29903_29907 = G__29924;
chunk__29904_29908 = G__29925;
count__29905_29909 = G__29926;
i__29906_29910 = G__29927;
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
var seq__29928_29932 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29929_29933 = null;
var count__29930_29934 = (0);
var i__29931_29935 = (0);
while(true){
if((i__29931_29935 < count__29930_29934)){
var node_29936 = cljs.core._nth.call(null,chunk__29929_29933,i__29931_29935);
goog.dom.forms.setValue(node_29936,value);

var G__29937 = seq__29928_29932;
var G__29938 = chunk__29929_29933;
var G__29939 = count__29930_29934;
var G__29940 = (i__29931_29935 + (1));
seq__29928_29932 = G__29937;
chunk__29929_29933 = G__29938;
count__29930_29934 = G__29939;
i__29931_29935 = G__29940;
continue;
} else {
var temp__4657__auto___29941 = cljs.core.seq.call(null,seq__29928_29932);
if(temp__4657__auto___29941){
var seq__29928_29942__$1 = temp__4657__auto___29941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29928_29942__$1)){
var c__28775__auto___29943 = cljs.core.chunk_first.call(null,seq__29928_29942__$1);
var G__29944 = cljs.core.chunk_rest.call(null,seq__29928_29942__$1);
var G__29945 = c__28775__auto___29943;
var G__29946 = cljs.core.count.call(null,c__28775__auto___29943);
var G__29947 = (0);
seq__29928_29932 = G__29944;
chunk__29929_29933 = G__29945;
count__29930_29934 = G__29946;
i__29931_29935 = G__29947;
continue;
} else {
var node_29948 = cljs.core.first.call(null,seq__29928_29942__$1);
goog.dom.forms.setValue(node_29948,value);

var G__29949 = cljs.core.next.call(null,seq__29928_29942__$1);
var G__29950 = null;
var G__29951 = (0);
var G__29952 = (0);
seq__29928_29932 = G__29949;
chunk__29929_29933 = G__29950;
count__29930_29934 = G__29951;
i__29931_29935 = G__29952;
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
var value_29958 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__29954_29959 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29955_29960 = null;
var count__29956_29961 = (0);
var i__29957_29962 = (0);
while(true){
if((i__29957_29962 < count__29956_29961)){
var node_29963 = cljs.core._nth.call(null,chunk__29955_29960,i__29957_29962);
node_29963.innerHTML = value_29958;

var G__29964 = seq__29954_29959;
var G__29965 = chunk__29955_29960;
var G__29966 = count__29956_29961;
var G__29967 = (i__29957_29962 + (1));
seq__29954_29959 = G__29964;
chunk__29955_29960 = G__29965;
count__29956_29961 = G__29966;
i__29957_29962 = G__29967;
continue;
} else {
var temp__4657__auto___29968 = cljs.core.seq.call(null,seq__29954_29959);
if(temp__4657__auto___29968){
var seq__29954_29969__$1 = temp__4657__auto___29968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29954_29969__$1)){
var c__28775__auto___29970 = cljs.core.chunk_first.call(null,seq__29954_29969__$1);
var G__29971 = cljs.core.chunk_rest.call(null,seq__29954_29969__$1);
var G__29972 = c__28775__auto___29970;
var G__29973 = cljs.core.count.call(null,c__28775__auto___29970);
var G__29974 = (0);
seq__29954_29959 = G__29971;
chunk__29955_29960 = G__29972;
count__29956_29961 = G__29973;
i__29957_29962 = G__29974;
continue;
} else {
var node_29975 = cljs.core.first.call(null,seq__29954_29969__$1);
node_29975.innerHTML = value_29958;

var G__29976 = cljs.core.next.call(null,seq__29954_29969__$1);
var G__29977 = null;
var G__29978 = (0);
var G__29979 = (0);
seq__29954_29959 = G__29976;
chunk__29955_29960 = G__29977;
count__29956_29961 = G__29978;
i__29957_29962 = G__29979;
continue;
}
} else {
}
}
break;
}
}catch (e29953){if((e29953 instanceof Error)){
var e_29980 = e29953;
domina.replace_children_BANG_.call(null,content,value_29958);
} else {
throw e29953;

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
var G__29982 = arguments.length;
switch (G__29982) {
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
if(cljs.core.truth_((function (){var and__27924__auto__ = bubble;
if(cljs.core.truth_(and__27924__auto__)){
return (value == null);
} else {
return and__27924__auto__;
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
var m = (function (){var or__27936__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
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
var seq__29986_29990 = cljs.core.seq.call(null,children);
var chunk__29987_29991 = null;
var count__29988_29992 = (0);
var i__29989_29993 = (0);
while(true){
if((i__29989_29993 < count__29988_29992)){
var child_29994 = cljs.core._nth.call(null,chunk__29987_29991,i__29989_29993);
frag.appendChild(child_29994);

var G__29995 = seq__29986_29990;
var G__29996 = chunk__29987_29991;
var G__29997 = count__29988_29992;
var G__29998 = (i__29989_29993 + (1));
seq__29986_29990 = G__29995;
chunk__29987_29991 = G__29996;
count__29988_29992 = G__29997;
i__29989_29993 = G__29998;
continue;
} else {
var temp__4657__auto___29999 = cljs.core.seq.call(null,seq__29986_29990);
if(temp__4657__auto___29999){
var seq__29986_30000__$1 = temp__4657__auto___29999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29986_30000__$1)){
var c__28775__auto___30001 = cljs.core.chunk_first.call(null,seq__29986_30000__$1);
var G__30002 = cljs.core.chunk_rest.call(null,seq__29986_30000__$1);
var G__30003 = c__28775__auto___30001;
var G__30004 = cljs.core.count.call(null,c__28775__auto___30001);
var G__30005 = (0);
seq__29986_29990 = G__30002;
chunk__29987_29991 = G__30003;
count__29988_29992 = G__30004;
i__29989_29993 = G__30005;
continue;
} else {
var child_30006 = cljs.core.first.call(null,seq__29986_30000__$1);
frag.appendChild(child_30006);

var G__30007 = cljs.core.next.call(null,seq__29986_30000__$1);
var G__30008 = null;
var G__30009 = (0);
var G__30010 = (0);
seq__29986_29990 = G__30007;
chunk__29987_29991 = G__30008;
count__29988_29992 = G__30009;
i__29989_29993 = G__30010;
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
return (function (p1__29984_SHARP_,p2__29985_SHARP_){
return f.call(null,p1__29984_SHARP_,p2__29985_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__30012 = arguments.length;
switch (G__30012) {
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
var G__30015 = arguments.length;
switch (G__30015) {
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
var and__27924__auto__ = obj;
if(cljs.core.truth_(and__27924__auto__)){
var and__27924__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__27924__auto____$1){
return obj.length;
} else {
return and__27924__auto____$1;
}
} else {
return and__27924__auto__;
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

//# sourceMappingURL=domina.js.map?rel=1510190744528
