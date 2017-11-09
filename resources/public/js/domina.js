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
var opt_wrapper_29597 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_29598 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_29599 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_29599,opt_wrapper_29597,table_section_wrapper_29598,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_29597,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_29598,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_29598,cell_wrapper_29599,table_section_wrapper_29598,table_section_wrapper_29598]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__27924__auto__ = div.firstChild;
if(cljs.core.truth_(and__27924__auto__)){
return div.firstChild.childNodes;
} else {
return and__27924__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__29600 = cljs.core.seq.call(null,tbody);
var chunk__29601 = null;
var count__29602 = (0);
var i__29603 = (0);
while(true){
if((i__29603 < count__29602)){
var child = cljs.core._nth.call(null,chunk__29601,i__29603);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__29604 = seq__29600;
var G__29605 = chunk__29601;
var G__29606 = count__29602;
var G__29607 = (i__29603 + (1));
seq__29600 = G__29604;
chunk__29601 = G__29605;
count__29602 = G__29606;
i__29603 = G__29607;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29600);
if(temp__4657__auto__){
var seq__29600__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29600__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__29600__$1);
var G__29608 = cljs.core.chunk_rest.call(null,seq__29600__$1);
var G__29609 = c__28775__auto__;
var G__29610 = cljs.core.count.call(null,c__28775__auto__);
var G__29611 = (0);
seq__29600 = G__29608;
chunk__29601 = G__29609;
count__29602 = G__29610;
i__29603 = G__29611;
continue;
} else {
var child = cljs.core.first.call(null,seq__29600__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__29612 = cljs.core.next.call(null,seq__29600__$1);
var G__29613 = null;
var G__29614 = (0);
var G__29615 = (0);
seq__29600 = G__29612;
chunk__29601 = G__29613;
count__29602 = G__29614;
i__29603 = G__29615;
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
var vec__29616 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__29616,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__29616,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__29616,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__29619 = wrapper.lastChild;
var G__29620 = (level - (1));
wrapper = G__29619;
level = G__29620;
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
var len__29105__auto___29622 = arguments.length;
var i__29106__auto___29623 = (0);
while(true){
if((i__29106__auto___29623 < len__29105__auto___29622)){
args__29112__auto__.push((arguments[i__29106__auto___29623]));

var G__29624 = (i__29106__auto___29623 + (1));
i__29106__auto___29623 = G__29624;
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

domina.log_debug.cljs$lang$applyTo = (function (seq29621){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29621));
});

domina.log = (function domina$log(var_args){
var args__29112__auto__ = [];
var len__29105__auto___29626 = arguments.length;
var i__29106__auto___29627 = (0);
while(true){
if((i__29106__auto___29627 < len__29105__auto___29626)){
args__29112__auto__.push((arguments[i__29106__auto___29627]));

var G__29628 = (i__29106__auto___29627 + (1));
i__29106__auto___29627 = G__29628;
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

domina.log.cljs$lang$applyTo = (function (seq29625){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29625));
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
var len__29105__auto___29630 = arguments.length;
var i__29106__auto___29631 = (0);
while(true){
if((i__29106__auto___29631 < len__29105__auto___29630)){
args__29112__auto__.push((arguments[i__29106__auto___29631]));

var G__29632 = (i__29106__auto___29631 + (1));
i__29106__auto___29631 = G__29632;
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

domina.common_ancestor.cljs$lang$applyTo = (function (seq29629){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29629));
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
return cljs.core.map.call(null,(function (p1__29633_SHARP_){
return p1__29633_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__29634_SHARP_,p2__29635_SHARP_){
return goog.dom.insertChildAt(p1__29634_SHARP_,p2__29635_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__29637_SHARP_,p2__29636_SHARP_){
return goog.dom.insertSiblingBefore(p2__29636_SHARP_,p1__29637_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__29639_SHARP_,p2__29638_SHARP_){
return goog.dom.insertSiblingAfter(p2__29638_SHARP_,p1__29639_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__29641_SHARP_,p2__29640_SHARP_){
return goog.dom.replaceNode(p2__29640_SHARP_,p1__29641_SHARP_);
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
var len__29105__auto___29649 = arguments.length;
var i__29106__auto___29650 = (0);
while(true){
if((i__29106__auto___29650 < len__29105__auto___29649)){
args__29112__auto__.push((arguments[i__29106__auto___29650]));

var G__29651 = (i__29106__auto___29650 + (1));
i__29106__auto___29650 = G__29651;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__29645_29652 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29646_29653 = null;
var count__29647_29654 = (0);
var i__29648_29655 = (0);
while(true){
if((i__29648_29655 < count__29647_29654)){
var n_29656 = cljs.core._nth.call(null,chunk__29646_29653,i__29648_29655);
goog.style.setStyle(n_29656,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__29657 = seq__29645_29652;
var G__29658 = chunk__29646_29653;
var G__29659 = count__29647_29654;
var G__29660 = (i__29648_29655 + (1));
seq__29645_29652 = G__29657;
chunk__29646_29653 = G__29658;
count__29647_29654 = G__29659;
i__29648_29655 = G__29660;
continue;
} else {
var temp__4657__auto___29661 = cljs.core.seq.call(null,seq__29645_29652);
if(temp__4657__auto___29661){
var seq__29645_29662__$1 = temp__4657__auto___29661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29645_29662__$1)){
var c__28775__auto___29663 = cljs.core.chunk_first.call(null,seq__29645_29662__$1);
var G__29664 = cljs.core.chunk_rest.call(null,seq__29645_29662__$1);
var G__29665 = c__28775__auto___29663;
var G__29666 = cljs.core.count.call(null,c__28775__auto___29663);
var G__29667 = (0);
seq__29645_29652 = G__29664;
chunk__29646_29653 = G__29665;
count__29647_29654 = G__29666;
i__29648_29655 = G__29667;
continue;
} else {
var n_29668 = cljs.core.first.call(null,seq__29645_29662__$1);
goog.style.setStyle(n_29668,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__29669 = cljs.core.next.call(null,seq__29645_29662__$1);
var G__29670 = null;
var G__29671 = (0);
var G__29672 = (0);
seq__29645_29652 = G__29669;
chunk__29646_29653 = G__29670;
count__29647_29654 = G__29671;
i__29648_29655 = G__29672;
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

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq29642){
var G__29643 = cljs.core.first.call(null,seq29642);
var seq29642__$1 = cljs.core.next.call(null,seq29642);
var G__29644 = cljs.core.first.call(null,seq29642__$1);
var seq29642__$2 = cljs.core.next.call(null,seq29642__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29643,G__29644,seq29642__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__29112__auto__ = [];
var len__29105__auto___29680 = arguments.length;
var i__29106__auto___29681 = (0);
while(true){
if((i__29106__auto___29681 < len__29105__auto___29680)){
args__29112__auto__.push((arguments[i__29106__auto___29681]));

var G__29682 = (i__29106__auto___29681 + (1));
i__29106__auto___29681 = G__29682;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__29676_29683 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29677_29684 = null;
var count__29678_29685 = (0);
var i__29679_29686 = (0);
while(true){
if((i__29679_29686 < count__29678_29685)){
var n_29687 = cljs.core._nth.call(null,chunk__29677_29684,i__29679_29686);
n_29687.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__29688 = seq__29676_29683;
var G__29689 = chunk__29677_29684;
var G__29690 = count__29678_29685;
var G__29691 = (i__29679_29686 + (1));
seq__29676_29683 = G__29688;
chunk__29677_29684 = G__29689;
count__29678_29685 = G__29690;
i__29679_29686 = G__29691;
continue;
} else {
var temp__4657__auto___29692 = cljs.core.seq.call(null,seq__29676_29683);
if(temp__4657__auto___29692){
var seq__29676_29693__$1 = temp__4657__auto___29692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29676_29693__$1)){
var c__28775__auto___29694 = cljs.core.chunk_first.call(null,seq__29676_29693__$1);
var G__29695 = cljs.core.chunk_rest.call(null,seq__29676_29693__$1);
var G__29696 = c__28775__auto___29694;
var G__29697 = cljs.core.count.call(null,c__28775__auto___29694);
var G__29698 = (0);
seq__29676_29683 = G__29695;
chunk__29677_29684 = G__29696;
count__29678_29685 = G__29697;
i__29679_29686 = G__29698;
continue;
} else {
var n_29699 = cljs.core.first.call(null,seq__29676_29693__$1);
n_29699.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__29700 = cljs.core.next.call(null,seq__29676_29693__$1);
var G__29701 = null;
var G__29702 = (0);
var G__29703 = (0);
seq__29676_29683 = G__29700;
chunk__29677_29684 = G__29701;
count__29678_29685 = G__29702;
i__29679_29686 = G__29703;
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

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq29673){
var G__29674 = cljs.core.first.call(null,seq29673);
var seq29673__$1 = cljs.core.next.call(null,seq29673);
var G__29675 = cljs.core.first.call(null,seq29673__$1);
var seq29673__$2 = cljs.core.next.call(null,seq29673__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29674,G__29675,seq29673__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__29704_29708 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29705_29709 = null;
var count__29706_29710 = (0);
var i__29707_29711 = (0);
while(true){
if((i__29707_29711 < count__29706_29710)){
var n_29712 = cljs.core._nth.call(null,chunk__29705_29709,i__29707_29711);
n_29712.removeAttribute(cljs.core.name.call(null,name));

var G__29713 = seq__29704_29708;
var G__29714 = chunk__29705_29709;
var G__29715 = count__29706_29710;
var G__29716 = (i__29707_29711 + (1));
seq__29704_29708 = G__29713;
chunk__29705_29709 = G__29714;
count__29706_29710 = G__29715;
i__29707_29711 = G__29716;
continue;
} else {
var temp__4657__auto___29717 = cljs.core.seq.call(null,seq__29704_29708);
if(temp__4657__auto___29717){
var seq__29704_29718__$1 = temp__4657__auto___29717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29704_29718__$1)){
var c__28775__auto___29719 = cljs.core.chunk_first.call(null,seq__29704_29718__$1);
var G__29720 = cljs.core.chunk_rest.call(null,seq__29704_29718__$1);
var G__29721 = c__28775__auto___29719;
var G__29722 = cljs.core.count.call(null,c__28775__auto___29719);
var G__29723 = (0);
seq__29704_29708 = G__29720;
chunk__29705_29709 = G__29721;
count__29706_29710 = G__29722;
i__29707_29711 = G__29723;
continue;
} else {
var n_29724 = cljs.core.first.call(null,seq__29704_29718__$1);
n_29724.removeAttribute(cljs.core.name.call(null,name));

var G__29725 = cljs.core.next.call(null,seq__29704_29718__$1);
var G__29726 = null;
var G__29727 = (0);
var G__29728 = (0);
seq__29704_29708 = G__29725;
chunk__29705_29709 = G__29726;
count__29706_29710 = G__29727;
i__29707_29711 = G__29728;
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
var vec__29729 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__29729,(0),null);
var v = cljs.core.nth.call(null,vec__29729,(1),null);
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
return (function (p1__29732_SHARP_){
var attr = attrs.item(p1__29732_SHARP_);
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
var seq__29733_29743 = cljs.core.seq.call(null,styles);
var chunk__29734_29744 = null;
var count__29735_29745 = (0);
var i__29736_29746 = (0);
while(true){
if((i__29736_29746 < count__29735_29745)){
var vec__29737_29747 = cljs.core._nth.call(null,chunk__29734_29744,i__29736_29746);
var name_29748 = cljs.core.nth.call(null,vec__29737_29747,(0),null);
var value_29749 = cljs.core.nth.call(null,vec__29737_29747,(1),null);
domina.set_style_BANG_.call(null,content,name_29748,value_29749);

var G__29750 = seq__29733_29743;
var G__29751 = chunk__29734_29744;
var G__29752 = count__29735_29745;
var G__29753 = (i__29736_29746 + (1));
seq__29733_29743 = G__29750;
chunk__29734_29744 = G__29751;
count__29735_29745 = G__29752;
i__29736_29746 = G__29753;
continue;
} else {
var temp__4657__auto___29754 = cljs.core.seq.call(null,seq__29733_29743);
if(temp__4657__auto___29754){
var seq__29733_29755__$1 = temp__4657__auto___29754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29733_29755__$1)){
var c__28775__auto___29756 = cljs.core.chunk_first.call(null,seq__29733_29755__$1);
var G__29757 = cljs.core.chunk_rest.call(null,seq__29733_29755__$1);
var G__29758 = c__28775__auto___29756;
var G__29759 = cljs.core.count.call(null,c__28775__auto___29756);
var G__29760 = (0);
seq__29733_29743 = G__29757;
chunk__29734_29744 = G__29758;
count__29735_29745 = G__29759;
i__29736_29746 = G__29760;
continue;
} else {
var vec__29740_29761 = cljs.core.first.call(null,seq__29733_29755__$1);
var name_29762 = cljs.core.nth.call(null,vec__29740_29761,(0),null);
var value_29763 = cljs.core.nth.call(null,vec__29740_29761,(1),null);
domina.set_style_BANG_.call(null,content,name_29762,value_29763);

var G__29764 = cljs.core.next.call(null,seq__29733_29755__$1);
var G__29765 = null;
var G__29766 = (0);
var G__29767 = (0);
seq__29733_29743 = G__29764;
chunk__29734_29744 = G__29765;
count__29735_29745 = G__29766;
i__29736_29746 = G__29767;
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
var seq__29768_29778 = cljs.core.seq.call(null,attrs);
var chunk__29769_29779 = null;
var count__29770_29780 = (0);
var i__29771_29781 = (0);
while(true){
if((i__29771_29781 < count__29770_29780)){
var vec__29772_29782 = cljs.core._nth.call(null,chunk__29769_29779,i__29771_29781);
var name_29783 = cljs.core.nth.call(null,vec__29772_29782,(0),null);
var value_29784 = cljs.core.nth.call(null,vec__29772_29782,(1),null);
domina.set_attr_BANG_.call(null,content,name_29783,value_29784);

var G__29785 = seq__29768_29778;
var G__29786 = chunk__29769_29779;
var G__29787 = count__29770_29780;
var G__29788 = (i__29771_29781 + (1));
seq__29768_29778 = G__29785;
chunk__29769_29779 = G__29786;
count__29770_29780 = G__29787;
i__29771_29781 = G__29788;
continue;
} else {
var temp__4657__auto___29789 = cljs.core.seq.call(null,seq__29768_29778);
if(temp__4657__auto___29789){
var seq__29768_29790__$1 = temp__4657__auto___29789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29768_29790__$1)){
var c__28775__auto___29791 = cljs.core.chunk_first.call(null,seq__29768_29790__$1);
var G__29792 = cljs.core.chunk_rest.call(null,seq__29768_29790__$1);
var G__29793 = c__28775__auto___29791;
var G__29794 = cljs.core.count.call(null,c__28775__auto___29791);
var G__29795 = (0);
seq__29768_29778 = G__29792;
chunk__29769_29779 = G__29793;
count__29770_29780 = G__29794;
i__29771_29781 = G__29795;
continue;
} else {
var vec__29775_29796 = cljs.core.first.call(null,seq__29768_29790__$1);
var name_29797 = cljs.core.nth.call(null,vec__29775_29796,(0),null);
var value_29798 = cljs.core.nth.call(null,vec__29775_29796,(1),null);
domina.set_attr_BANG_.call(null,content,name_29797,value_29798);

var G__29799 = cljs.core.next.call(null,seq__29768_29790__$1);
var G__29800 = null;
var G__29801 = (0);
var G__29802 = (0);
seq__29768_29778 = G__29799;
chunk__29769_29779 = G__29800;
count__29770_29780 = G__29801;
i__29771_29781 = G__29802;
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
var seq__29803_29807 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29804_29808 = null;
var count__29805_29809 = (0);
var i__29806_29810 = (0);
while(true){
if((i__29806_29810 < count__29805_29809)){
var node_29811 = cljs.core._nth.call(null,chunk__29804_29808,i__29806_29810);
goog.dom.classes.add(node_29811,class$);

var G__29812 = seq__29803_29807;
var G__29813 = chunk__29804_29808;
var G__29814 = count__29805_29809;
var G__29815 = (i__29806_29810 + (1));
seq__29803_29807 = G__29812;
chunk__29804_29808 = G__29813;
count__29805_29809 = G__29814;
i__29806_29810 = G__29815;
continue;
} else {
var temp__4657__auto___29816 = cljs.core.seq.call(null,seq__29803_29807);
if(temp__4657__auto___29816){
var seq__29803_29817__$1 = temp__4657__auto___29816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29803_29817__$1)){
var c__28775__auto___29818 = cljs.core.chunk_first.call(null,seq__29803_29817__$1);
var G__29819 = cljs.core.chunk_rest.call(null,seq__29803_29817__$1);
var G__29820 = c__28775__auto___29818;
var G__29821 = cljs.core.count.call(null,c__28775__auto___29818);
var G__29822 = (0);
seq__29803_29807 = G__29819;
chunk__29804_29808 = G__29820;
count__29805_29809 = G__29821;
i__29806_29810 = G__29822;
continue;
} else {
var node_29823 = cljs.core.first.call(null,seq__29803_29817__$1);
goog.dom.classes.add(node_29823,class$);

var G__29824 = cljs.core.next.call(null,seq__29803_29817__$1);
var G__29825 = null;
var G__29826 = (0);
var G__29827 = (0);
seq__29803_29807 = G__29824;
chunk__29804_29808 = G__29825;
count__29805_29809 = G__29826;
i__29806_29810 = G__29827;
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
var seq__29828_29832 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29829_29833 = null;
var count__29830_29834 = (0);
var i__29831_29835 = (0);
while(true){
if((i__29831_29835 < count__29830_29834)){
var node_29836 = cljs.core._nth.call(null,chunk__29829_29833,i__29831_29835);
goog.dom.classes.remove(node_29836,class$);

var G__29837 = seq__29828_29832;
var G__29838 = chunk__29829_29833;
var G__29839 = count__29830_29834;
var G__29840 = (i__29831_29835 + (1));
seq__29828_29832 = G__29837;
chunk__29829_29833 = G__29838;
count__29830_29834 = G__29839;
i__29831_29835 = G__29840;
continue;
} else {
var temp__4657__auto___29841 = cljs.core.seq.call(null,seq__29828_29832);
if(temp__4657__auto___29841){
var seq__29828_29842__$1 = temp__4657__auto___29841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29828_29842__$1)){
var c__28775__auto___29843 = cljs.core.chunk_first.call(null,seq__29828_29842__$1);
var G__29844 = cljs.core.chunk_rest.call(null,seq__29828_29842__$1);
var G__29845 = c__28775__auto___29843;
var G__29846 = cljs.core.count.call(null,c__28775__auto___29843);
var G__29847 = (0);
seq__29828_29832 = G__29844;
chunk__29829_29833 = G__29845;
count__29830_29834 = G__29846;
i__29831_29835 = G__29847;
continue;
} else {
var node_29848 = cljs.core.first.call(null,seq__29828_29842__$1);
goog.dom.classes.remove(node_29848,class$);

var G__29849 = cljs.core.next.call(null,seq__29828_29842__$1);
var G__29850 = null;
var G__29851 = (0);
var G__29852 = (0);
seq__29828_29832 = G__29849;
chunk__29829_29833 = G__29850;
count__29830_29834 = G__29851;
i__29831_29835 = G__29852;
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
var seq__29853_29857 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29854_29858 = null;
var count__29855_29859 = (0);
var i__29856_29860 = (0);
while(true){
if((i__29856_29860 < count__29855_29859)){
var node_29861 = cljs.core._nth.call(null,chunk__29854_29858,i__29856_29860);
goog.dom.classes.toggle(node_29861,class$);

var G__29862 = seq__29853_29857;
var G__29863 = chunk__29854_29858;
var G__29864 = count__29855_29859;
var G__29865 = (i__29856_29860 + (1));
seq__29853_29857 = G__29862;
chunk__29854_29858 = G__29863;
count__29855_29859 = G__29864;
i__29856_29860 = G__29865;
continue;
} else {
var temp__4657__auto___29866 = cljs.core.seq.call(null,seq__29853_29857);
if(temp__4657__auto___29866){
var seq__29853_29867__$1 = temp__4657__auto___29866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29853_29867__$1)){
var c__28775__auto___29868 = cljs.core.chunk_first.call(null,seq__29853_29867__$1);
var G__29869 = cljs.core.chunk_rest.call(null,seq__29853_29867__$1);
var G__29870 = c__28775__auto___29868;
var G__29871 = cljs.core.count.call(null,c__28775__auto___29868);
var G__29872 = (0);
seq__29853_29857 = G__29869;
chunk__29854_29858 = G__29870;
count__29855_29859 = G__29871;
i__29856_29860 = G__29872;
continue;
} else {
var node_29873 = cljs.core.first.call(null,seq__29853_29867__$1);
goog.dom.classes.toggle(node_29873,class$);

var G__29874 = cljs.core.next.call(null,seq__29853_29867__$1);
var G__29875 = null;
var G__29876 = (0);
var G__29877 = (0);
seq__29853_29857 = G__29874;
chunk__29854_29858 = G__29875;
count__29855_29859 = G__29876;
i__29856_29860 = G__29877;
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
var classes_29882__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__29878_29883 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29879_29884 = null;
var count__29880_29885 = (0);
var i__29881_29886 = (0);
while(true){
if((i__29881_29886 < count__29880_29885)){
var node_29887 = cljs.core._nth.call(null,chunk__29879_29884,i__29881_29886);
goog.dom.classes.set(node_29887,classes_29882__$1);

var G__29888 = seq__29878_29883;
var G__29889 = chunk__29879_29884;
var G__29890 = count__29880_29885;
var G__29891 = (i__29881_29886 + (1));
seq__29878_29883 = G__29888;
chunk__29879_29884 = G__29889;
count__29880_29885 = G__29890;
i__29881_29886 = G__29891;
continue;
} else {
var temp__4657__auto___29892 = cljs.core.seq.call(null,seq__29878_29883);
if(temp__4657__auto___29892){
var seq__29878_29893__$1 = temp__4657__auto___29892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29878_29893__$1)){
var c__28775__auto___29894 = cljs.core.chunk_first.call(null,seq__29878_29893__$1);
var G__29895 = cljs.core.chunk_rest.call(null,seq__29878_29893__$1);
var G__29896 = c__28775__auto___29894;
var G__29897 = cljs.core.count.call(null,c__28775__auto___29894);
var G__29898 = (0);
seq__29878_29883 = G__29895;
chunk__29879_29884 = G__29896;
count__29880_29885 = G__29897;
i__29881_29886 = G__29898;
continue;
} else {
var node_29899 = cljs.core.first.call(null,seq__29878_29893__$1);
goog.dom.classes.set(node_29899,classes_29882__$1);

var G__29900 = cljs.core.next.call(null,seq__29878_29893__$1);
var G__29901 = null;
var G__29902 = (0);
var G__29903 = (0);
seq__29878_29883 = G__29900;
chunk__29879_29884 = G__29901;
count__29880_29885 = G__29902;
i__29881_29886 = G__29903;
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
var seq__29904_29908 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29905_29909 = null;
var count__29906_29910 = (0);
var i__29907_29911 = (0);
while(true){
if((i__29907_29911 < count__29906_29910)){
var node_29912 = cljs.core._nth.call(null,chunk__29905_29909,i__29907_29911);
goog.dom.setTextContent(node_29912,value);

var G__29913 = seq__29904_29908;
var G__29914 = chunk__29905_29909;
var G__29915 = count__29906_29910;
var G__29916 = (i__29907_29911 + (1));
seq__29904_29908 = G__29913;
chunk__29905_29909 = G__29914;
count__29906_29910 = G__29915;
i__29907_29911 = G__29916;
continue;
} else {
var temp__4657__auto___29917 = cljs.core.seq.call(null,seq__29904_29908);
if(temp__4657__auto___29917){
var seq__29904_29918__$1 = temp__4657__auto___29917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29904_29918__$1)){
var c__28775__auto___29919 = cljs.core.chunk_first.call(null,seq__29904_29918__$1);
var G__29920 = cljs.core.chunk_rest.call(null,seq__29904_29918__$1);
var G__29921 = c__28775__auto___29919;
var G__29922 = cljs.core.count.call(null,c__28775__auto___29919);
var G__29923 = (0);
seq__29904_29908 = G__29920;
chunk__29905_29909 = G__29921;
count__29906_29910 = G__29922;
i__29907_29911 = G__29923;
continue;
} else {
var node_29924 = cljs.core.first.call(null,seq__29904_29918__$1);
goog.dom.setTextContent(node_29924,value);

var G__29925 = cljs.core.next.call(null,seq__29904_29918__$1);
var G__29926 = null;
var G__29927 = (0);
var G__29928 = (0);
seq__29904_29908 = G__29925;
chunk__29905_29909 = G__29926;
count__29906_29910 = G__29927;
i__29907_29911 = G__29928;
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
var seq__29929_29933 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29930_29934 = null;
var count__29931_29935 = (0);
var i__29932_29936 = (0);
while(true){
if((i__29932_29936 < count__29931_29935)){
var node_29937 = cljs.core._nth.call(null,chunk__29930_29934,i__29932_29936);
goog.dom.forms.setValue(node_29937,value);

var G__29938 = seq__29929_29933;
var G__29939 = chunk__29930_29934;
var G__29940 = count__29931_29935;
var G__29941 = (i__29932_29936 + (1));
seq__29929_29933 = G__29938;
chunk__29930_29934 = G__29939;
count__29931_29935 = G__29940;
i__29932_29936 = G__29941;
continue;
} else {
var temp__4657__auto___29942 = cljs.core.seq.call(null,seq__29929_29933);
if(temp__4657__auto___29942){
var seq__29929_29943__$1 = temp__4657__auto___29942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29929_29943__$1)){
var c__28775__auto___29944 = cljs.core.chunk_first.call(null,seq__29929_29943__$1);
var G__29945 = cljs.core.chunk_rest.call(null,seq__29929_29943__$1);
var G__29946 = c__28775__auto___29944;
var G__29947 = cljs.core.count.call(null,c__28775__auto___29944);
var G__29948 = (0);
seq__29929_29933 = G__29945;
chunk__29930_29934 = G__29946;
count__29931_29935 = G__29947;
i__29932_29936 = G__29948;
continue;
} else {
var node_29949 = cljs.core.first.call(null,seq__29929_29943__$1);
goog.dom.forms.setValue(node_29949,value);

var G__29950 = cljs.core.next.call(null,seq__29929_29943__$1);
var G__29951 = null;
var G__29952 = (0);
var G__29953 = (0);
seq__29929_29933 = G__29950;
chunk__29930_29934 = G__29951;
count__29931_29935 = G__29952;
i__29932_29936 = G__29953;
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
var value_29959 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__29955_29960 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__29956_29961 = null;
var count__29957_29962 = (0);
var i__29958_29963 = (0);
while(true){
if((i__29958_29963 < count__29957_29962)){
var node_29964 = cljs.core._nth.call(null,chunk__29956_29961,i__29958_29963);
node_29964.innerHTML = value_29959;

var G__29965 = seq__29955_29960;
var G__29966 = chunk__29956_29961;
var G__29967 = count__29957_29962;
var G__29968 = (i__29958_29963 + (1));
seq__29955_29960 = G__29965;
chunk__29956_29961 = G__29966;
count__29957_29962 = G__29967;
i__29958_29963 = G__29968;
continue;
} else {
var temp__4657__auto___29969 = cljs.core.seq.call(null,seq__29955_29960);
if(temp__4657__auto___29969){
var seq__29955_29970__$1 = temp__4657__auto___29969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29955_29970__$1)){
var c__28775__auto___29971 = cljs.core.chunk_first.call(null,seq__29955_29970__$1);
var G__29972 = cljs.core.chunk_rest.call(null,seq__29955_29970__$1);
var G__29973 = c__28775__auto___29971;
var G__29974 = cljs.core.count.call(null,c__28775__auto___29971);
var G__29975 = (0);
seq__29955_29960 = G__29972;
chunk__29956_29961 = G__29973;
count__29957_29962 = G__29974;
i__29958_29963 = G__29975;
continue;
} else {
var node_29976 = cljs.core.first.call(null,seq__29955_29970__$1);
node_29976.innerHTML = value_29959;

var G__29977 = cljs.core.next.call(null,seq__29955_29970__$1);
var G__29978 = null;
var G__29979 = (0);
var G__29980 = (0);
seq__29955_29960 = G__29977;
chunk__29956_29961 = G__29978;
count__29957_29962 = G__29979;
i__29958_29963 = G__29980;
continue;
}
} else {
}
}
break;
}
}catch (e29954){if((e29954 instanceof Error)){
var e_29981 = e29954;
domina.replace_children_BANG_.call(null,content,value_29959);
} else {
throw e29954;

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
var G__29983 = arguments.length;
switch (G__29983) {
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
var seq__29987_29991 = cljs.core.seq.call(null,children);
var chunk__29988_29992 = null;
var count__29989_29993 = (0);
var i__29990_29994 = (0);
while(true){
if((i__29990_29994 < count__29989_29993)){
var child_29995 = cljs.core._nth.call(null,chunk__29988_29992,i__29990_29994);
frag.appendChild(child_29995);

var G__29996 = seq__29987_29991;
var G__29997 = chunk__29988_29992;
var G__29998 = count__29989_29993;
var G__29999 = (i__29990_29994 + (1));
seq__29987_29991 = G__29996;
chunk__29988_29992 = G__29997;
count__29989_29993 = G__29998;
i__29990_29994 = G__29999;
continue;
} else {
var temp__4657__auto___30000 = cljs.core.seq.call(null,seq__29987_29991);
if(temp__4657__auto___30000){
var seq__29987_30001__$1 = temp__4657__auto___30000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29987_30001__$1)){
var c__28775__auto___30002 = cljs.core.chunk_first.call(null,seq__29987_30001__$1);
var G__30003 = cljs.core.chunk_rest.call(null,seq__29987_30001__$1);
var G__30004 = c__28775__auto___30002;
var G__30005 = cljs.core.count.call(null,c__28775__auto___30002);
var G__30006 = (0);
seq__29987_29991 = G__30003;
chunk__29988_29992 = G__30004;
count__29989_29993 = G__30005;
i__29990_29994 = G__30006;
continue;
} else {
var child_30007 = cljs.core.first.call(null,seq__29987_30001__$1);
frag.appendChild(child_30007);

var G__30008 = cljs.core.next.call(null,seq__29987_30001__$1);
var G__30009 = null;
var G__30010 = (0);
var G__30011 = (0);
seq__29987_29991 = G__30008;
chunk__29988_29992 = G__30009;
count__29989_29993 = G__30010;
i__29990_29994 = G__30011;
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
return (function (p1__29985_SHARP_,p2__29986_SHARP_){
return f.call(null,p1__29985_SHARP_,p2__29986_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__30013 = arguments.length;
switch (G__30013) {
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
var G__30016 = arguments.length;
switch (G__30016) {
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

//# sourceMappingURL=domina.js.map?rel=1509844997937
