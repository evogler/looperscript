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
var opt_wrapper_9135 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_9136 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_9137 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_9137,opt_wrapper_9135,table_section_wrapper_9136,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_9135,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_9136,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_9136,cell_wrapper_9137,table_section_wrapper_9136,table_section_wrapper_9136]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__7406__auto__ = div.firstChild;
if(cljs.core.truth_(and__7406__auto__)){
return div.firstChild.childNodes;
} else {
return and__7406__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__9138 = cljs.core.seq.call(null,tbody);
var chunk__9139 = null;
var count__9140 = (0);
var i__9141 = (0);
while(true){
if((i__9141 < count__9140)){
var child = cljs.core._nth.call(null,chunk__9139,i__9141);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__9142 = seq__9138;
var G__9143 = chunk__9139;
var G__9144 = count__9140;
var G__9145 = (i__9141 + (1));
seq__9138 = G__9142;
chunk__9139 = G__9143;
count__9140 = G__9144;
i__9141 = G__9145;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9138);
if(temp__4657__auto__){
var seq__9138__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9138__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__9138__$1);
var G__9146 = cljs.core.chunk_rest.call(null,seq__9138__$1);
var G__9147 = c__8257__auto__;
var G__9148 = cljs.core.count.call(null,c__8257__auto__);
var G__9149 = (0);
seq__9138 = G__9146;
chunk__9139 = G__9147;
count__9140 = G__9148;
i__9141 = G__9149;
continue;
} else {
var child = cljs.core.first.call(null,seq__9138__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__9150 = cljs.core.next.call(null,seq__9138__$1);
var G__9151 = null;
var G__9152 = (0);
var G__9153 = (0);
seq__9138 = G__9150;
chunk__9139 = G__9151;
count__9140 = G__9152;
i__9141 = G__9153;
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
var vec__9154 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__9154,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__9154,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__9154,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__9157 = wrapper.lastChild;
var G__9158 = (level - (1));
wrapper = G__9157;
level = G__9158;
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

if(cljs.core.truth_((function (){var and__7406__auto__ = !(domina.support.leading_whitespace_QMARK_);
if(and__7406__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__7406__auto__;
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
var x__8101__auto__ = (((content == null))?null:content);
var m__8102__auto__ = (domina.nodes[goog.typeOf(x__8101__auto__)]);
if(!((m__8102__auto__ == null))){
return m__8102__auto__.call(null,content);
} else {
var m__8102__auto____$1 = (domina.nodes["_"]);
if(!((m__8102__auto____$1 == null))){
return m__8102__auto____$1.call(null,content);
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
var x__8101__auto__ = (((nodeseq == null))?null:nodeseq);
var m__8102__auto__ = (domina.single_node[goog.typeOf(x__8101__auto__)]);
if(!((m__8102__auto__ == null))){
return m__8102__auto__.call(null,nodeseq);
} else {
var m__8102__auto____$1 = (domina.single_node["_"]);
if(!((m__8102__auto____$1 == null))){
return m__8102__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__8594__auto__ = [];
var len__8587__auto___9160 = arguments.length;
var i__8588__auto___9161 = (0);
while(true){
if((i__8588__auto___9161 < len__8587__auto___9160)){
args__8594__auto__.push((arguments[i__8588__auto___9161]));

var G__9162 = (i__8588__auto___9161 + (1));
i__8588__auto___9161 = G__9162;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((0) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__8595__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if((domina._STAR_debug_STAR_) && (!(cljs.core._EQ_.call(null,window.console,undefined)))){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq9159){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9159));
});

domina.log = (function domina$log(var_args){
var args__8594__auto__ = [];
var len__8587__auto___9164 = arguments.length;
var i__8588__auto___9165 = (0);
while(true){
if((i__8588__auto___9165 < len__8587__auto___9164)){
args__8594__auto__.push((arguments[i__8588__auto___9165]));

var G__9166 = (i__8588__auto___9165 + (1));
i__8588__auto___9165 = G__9166;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((0) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__8595__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq9163){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9163));
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
var args__8594__auto__ = [];
var len__8587__auto___9168 = arguments.length;
var i__8588__auto___9169 = (0);
while(true){
if((i__8588__auto___9169 < len__8587__auto___9168)){
args__8594__auto__.push((arguments[i__8588__auto___9169]));

var G__9170 = (i__8588__auto___9169 + (1));
i__8588__auto___9169 = G__9170;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((0) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__8595__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq9167){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9167));
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
return cljs.core.map.call(null,(function (p1__9171_SHARP_){
return p1__9171_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__9172_SHARP_,p2__9173_SHARP_){
return goog.dom.insertChildAt(p1__9172_SHARP_,p2__9173_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__9175_SHARP_,p2__9174_SHARP_){
return goog.dom.insertSiblingBefore(p2__9174_SHARP_,p1__9175_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__9177_SHARP_,p2__9176_SHARP_){
return goog.dom.insertSiblingAfter(p2__9176_SHARP_,p1__9177_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__9179_SHARP_,p2__9178_SHARP_){
return goog.dom.replaceNode(p2__9178_SHARP_,p1__9179_SHARP_);
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
var args__8594__auto__ = [];
var len__8587__auto___9187 = arguments.length;
var i__8588__auto___9188 = (0);
while(true){
if((i__8588__auto___9188 < len__8587__auto___9187)){
args__8594__auto__.push((arguments[i__8588__auto___9188]));

var G__9189 = (i__8588__auto___9188 + (1));
i__8588__auto___9188 = G__9189;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__9183_9190 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9184_9191 = null;
var count__9185_9192 = (0);
var i__9186_9193 = (0);
while(true){
if((i__9186_9193 < count__9185_9192)){
var n_9194 = cljs.core._nth.call(null,chunk__9184_9191,i__9186_9193);
goog.style.setStyle(n_9194,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__9195 = seq__9183_9190;
var G__9196 = chunk__9184_9191;
var G__9197 = count__9185_9192;
var G__9198 = (i__9186_9193 + (1));
seq__9183_9190 = G__9195;
chunk__9184_9191 = G__9196;
count__9185_9192 = G__9197;
i__9186_9193 = G__9198;
continue;
} else {
var temp__4657__auto___9199 = cljs.core.seq.call(null,seq__9183_9190);
if(temp__4657__auto___9199){
var seq__9183_9200__$1 = temp__4657__auto___9199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9183_9200__$1)){
var c__8257__auto___9201 = cljs.core.chunk_first.call(null,seq__9183_9200__$1);
var G__9202 = cljs.core.chunk_rest.call(null,seq__9183_9200__$1);
var G__9203 = c__8257__auto___9201;
var G__9204 = cljs.core.count.call(null,c__8257__auto___9201);
var G__9205 = (0);
seq__9183_9190 = G__9202;
chunk__9184_9191 = G__9203;
count__9185_9192 = G__9204;
i__9186_9193 = G__9205;
continue;
} else {
var n_9206 = cljs.core.first.call(null,seq__9183_9200__$1);
goog.style.setStyle(n_9206,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__9207 = cljs.core.next.call(null,seq__9183_9200__$1);
var G__9208 = null;
var G__9209 = (0);
var G__9210 = (0);
seq__9183_9190 = G__9207;
chunk__9184_9191 = G__9208;
count__9185_9192 = G__9209;
i__9186_9193 = G__9210;
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

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq9180){
var G__9181 = cljs.core.first.call(null,seq9180);
var seq9180__$1 = cljs.core.next.call(null,seq9180);
var G__9182 = cljs.core.first.call(null,seq9180__$1);
var seq9180__$2 = cljs.core.next.call(null,seq9180__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9181,G__9182,seq9180__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__8594__auto__ = [];
var len__8587__auto___9218 = arguments.length;
var i__8588__auto___9219 = (0);
while(true){
if((i__8588__auto___9219 < len__8587__auto___9218)){
args__8594__auto__.push((arguments[i__8588__auto___9219]));

var G__9220 = (i__8588__auto___9219 + (1));
i__8588__auto___9219 = G__9220;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__9214_9221 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9215_9222 = null;
var count__9216_9223 = (0);
var i__9217_9224 = (0);
while(true){
if((i__9217_9224 < count__9216_9223)){
var n_9225 = cljs.core._nth.call(null,chunk__9215_9222,i__9217_9224);
n_9225.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__9226 = seq__9214_9221;
var G__9227 = chunk__9215_9222;
var G__9228 = count__9216_9223;
var G__9229 = (i__9217_9224 + (1));
seq__9214_9221 = G__9226;
chunk__9215_9222 = G__9227;
count__9216_9223 = G__9228;
i__9217_9224 = G__9229;
continue;
} else {
var temp__4657__auto___9230 = cljs.core.seq.call(null,seq__9214_9221);
if(temp__4657__auto___9230){
var seq__9214_9231__$1 = temp__4657__auto___9230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9214_9231__$1)){
var c__8257__auto___9232 = cljs.core.chunk_first.call(null,seq__9214_9231__$1);
var G__9233 = cljs.core.chunk_rest.call(null,seq__9214_9231__$1);
var G__9234 = c__8257__auto___9232;
var G__9235 = cljs.core.count.call(null,c__8257__auto___9232);
var G__9236 = (0);
seq__9214_9221 = G__9233;
chunk__9215_9222 = G__9234;
count__9216_9223 = G__9235;
i__9217_9224 = G__9236;
continue;
} else {
var n_9237 = cljs.core.first.call(null,seq__9214_9231__$1);
n_9237.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__9238 = cljs.core.next.call(null,seq__9214_9231__$1);
var G__9239 = null;
var G__9240 = (0);
var G__9241 = (0);
seq__9214_9221 = G__9238;
chunk__9215_9222 = G__9239;
count__9216_9223 = G__9240;
i__9217_9224 = G__9241;
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

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq9211){
var G__9212 = cljs.core.first.call(null,seq9211);
var seq9211__$1 = cljs.core.next.call(null,seq9211);
var G__9213 = cljs.core.first.call(null,seq9211__$1);
var seq9211__$2 = cljs.core.next.call(null,seq9211__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9212,G__9213,seq9211__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__9242_9246 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9243_9247 = null;
var count__9244_9248 = (0);
var i__9245_9249 = (0);
while(true){
if((i__9245_9249 < count__9244_9248)){
var n_9250 = cljs.core._nth.call(null,chunk__9243_9247,i__9245_9249);
n_9250.removeAttribute(cljs.core.name.call(null,name));

var G__9251 = seq__9242_9246;
var G__9252 = chunk__9243_9247;
var G__9253 = count__9244_9248;
var G__9254 = (i__9245_9249 + (1));
seq__9242_9246 = G__9251;
chunk__9243_9247 = G__9252;
count__9244_9248 = G__9253;
i__9245_9249 = G__9254;
continue;
} else {
var temp__4657__auto___9255 = cljs.core.seq.call(null,seq__9242_9246);
if(temp__4657__auto___9255){
var seq__9242_9256__$1 = temp__4657__auto___9255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9242_9256__$1)){
var c__8257__auto___9257 = cljs.core.chunk_first.call(null,seq__9242_9256__$1);
var G__9258 = cljs.core.chunk_rest.call(null,seq__9242_9256__$1);
var G__9259 = c__8257__auto___9257;
var G__9260 = cljs.core.count.call(null,c__8257__auto___9257);
var G__9261 = (0);
seq__9242_9246 = G__9258;
chunk__9243_9247 = G__9259;
count__9244_9248 = G__9260;
i__9245_9249 = G__9261;
continue;
} else {
var n_9262 = cljs.core.first.call(null,seq__9242_9256__$1);
n_9262.removeAttribute(cljs.core.name.call(null,name));

var G__9263 = cljs.core.next.call(null,seq__9242_9256__$1);
var G__9264 = null;
var G__9265 = (0);
var G__9266 = (0);
seq__9242_9246 = G__9263;
chunk__9243_9247 = G__9264;
count__9244_9248 = G__9265;
i__9245_9249 = G__9266;
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
var vec__9267 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__9267,(0),null);
var v = cljs.core.nth.call(null,vec__9267,(1),null);
if(cljs.core.truth_((function (){var and__7406__auto__ = k;
if(cljs.core.truth_(and__7406__auto__)){
return v;
} else {
return and__7406__auto__;
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
return (function (p1__9270_SHARP_){
var attr = attrs.item(p1__9270_SHARP_);
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
var seq__9271_9281 = cljs.core.seq.call(null,styles);
var chunk__9272_9282 = null;
var count__9273_9283 = (0);
var i__9274_9284 = (0);
while(true){
if((i__9274_9284 < count__9273_9283)){
var vec__9275_9285 = cljs.core._nth.call(null,chunk__9272_9282,i__9274_9284);
var name_9286 = cljs.core.nth.call(null,vec__9275_9285,(0),null);
var value_9287 = cljs.core.nth.call(null,vec__9275_9285,(1),null);
domina.set_style_BANG_.call(null,content,name_9286,value_9287);

var G__9288 = seq__9271_9281;
var G__9289 = chunk__9272_9282;
var G__9290 = count__9273_9283;
var G__9291 = (i__9274_9284 + (1));
seq__9271_9281 = G__9288;
chunk__9272_9282 = G__9289;
count__9273_9283 = G__9290;
i__9274_9284 = G__9291;
continue;
} else {
var temp__4657__auto___9292 = cljs.core.seq.call(null,seq__9271_9281);
if(temp__4657__auto___9292){
var seq__9271_9293__$1 = temp__4657__auto___9292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9271_9293__$1)){
var c__8257__auto___9294 = cljs.core.chunk_first.call(null,seq__9271_9293__$1);
var G__9295 = cljs.core.chunk_rest.call(null,seq__9271_9293__$1);
var G__9296 = c__8257__auto___9294;
var G__9297 = cljs.core.count.call(null,c__8257__auto___9294);
var G__9298 = (0);
seq__9271_9281 = G__9295;
chunk__9272_9282 = G__9296;
count__9273_9283 = G__9297;
i__9274_9284 = G__9298;
continue;
} else {
var vec__9278_9299 = cljs.core.first.call(null,seq__9271_9293__$1);
var name_9300 = cljs.core.nth.call(null,vec__9278_9299,(0),null);
var value_9301 = cljs.core.nth.call(null,vec__9278_9299,(1),null);
domina.set_style_BANG_.call(null,content,name_9300,value_9301);

var G__9302 = cljs.core.next.call(null,seq__9271_9293__$1);
var G__9303 = null;
var G__9304 = (0);
var G__9305 = (0);
seq__9271_9281 = G__9302;
chunk__9272_9282 = G__9303;
count__9273_9283 = G__9304;
i__9274_9284 = G__9305;
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
var seq__9306_9316 = cljs.core.seq.call(null,attrs);
var chunk__9307_9317 = null;
var count__9308_9318 = (0);
var i__9309_9319 = (0);
while(true){
if((i__9309_9319 < count__9308_9318)){
var vec__9310_9320 = cljs.core._nth.call(null,chunk__9307_9317,i__9309_9319);
var name_9321 = cljs.core.nth.call(null,vec__9310_9320,(0),null);
var value_9322 = cljs.core.nth.call(null,vec__9310_9320,(1),null);
domina.set_attr_BANG_.call(null,content,name_9321,value_9322);

var G__9323 = seq__9306_9316;
var G__9324 = chunk__9307_9317;
var G__9325 = count__9308_9318;
var G__9326 = (i__9309_9319 + (1));
seq__9306_9316 = G__9323;
chunk__9307_9317 = G__9324;
count__9308_9318 = G__9325;
i__9309_9319 = G__9326;
continue;
} else {
var temp__4657__auto___9327 = cljs.core.seq.call(null,seq__9306_9316);
if(temp__4657__auto___9327){
var seq__9306_9328__$1 = temp__4657__auto___9327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9306_9328__$1)){
var c__8257__auto___9329 = cljs.core.chunk_first.call(null,seq__9306_9328__$1);
var G__9330 = cljs.core.chunk_rest.call(null,seq__9306_9328__$1);
var G__9331 = c__8257__auto___9329;
var G__9332 = cljs.core.count.call(null,c__8257__auto___9329);
var G__9333 = (0);
seq__9306_9316 = G__9330;
chunk__9307_9317 = G__9331;
count__9308_9318 = G__9332;
i__9309_9319 = G__9333;
continue;
} else {
var vec__9313_9334 = cljs.core.first.call(null,seq__9306_9328__$1);
var name_9335 = cljs.core.nth.call(null,vec__9313_9334,(0),null);
var value_9336 = cljs.core.nth.call(null,vec__9313_9334,(1),null);
domina.set_attr_BANG_.call(null,content,name_9335,value_9336);

var G__9337 = cljs.core.next.call(null,seq__9306_9328__$1);
var G__9338 = null;
var G__9339 = (0);
var G__9340 = (0);
seq__9306_9316 = G__9337;
chunk__9307_9317 = G__9338;
count__9308_9318 = G__9339;
i__9309_9319 = G__9340;
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
var seq__9341_9345 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9342_9346 = null;
var count__9343_9347 = (0);
var i__9344_9348 = (0);
while(true){
if((i__9344_9348 < count__9343_9347)){
var node_9349 = cljs.core._nth.call(null,chunk__9342_9346,i__9344_9348);
goog.dom.classes.add(node_9349,class$);

var G__9350 = seq__9341_9345;
var G__9351 = chunk__9342_9346;
var G__9352 = count__9343_9347;
var G__9353 = (i__9344_9348 + (1));
seq__9341_9345 = G__9350;
chunk__9342_9346 = G__9351;
count__9343_9347 = G__9352;
i__9344_9348 = G__9353;
continue;
} else {
var temp__4657__auto___9354 = cljs.core.seq.call(null,seq__9341_9345);
if(temp__4657__auto___9354){
var seq__9341_9355__$1 = temp__4657__auto___9354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9341_9355__$1)){
var c__8257__auto___9356 = cljs.core.chunk_first.call(null,seq__9341_9355__$1);
var G__9357 = cljs.core.chunk_rest.call(null,seq__9341_9355__$1);
var G__9358 = c__8257__auto___9356;
var G__9359 = cljs.core.count.call(null,c__8257__auto___9356);
var G__9360 = (0);
seq__9341_9345 = G__9357;
chunk__9342_9346 = G__9358;
count__9343_9347 = G__9359;
i__9344_9348 = G__9360;
continue;
} else {
var node_9361 = cljs.core.first.call(null,seq__9341_9355__$1);
goog.dom.classes.add(node_9361,class$);

var G__9362 = cljs.core.next.call(null,seq__9341_9355__$1);
var G__9363 = null;
var G__9364 = (0);
var G__9365 = (0);
seq__9341_9345 = G__9362;
chunk__9342_9346 = G__9363;
count__9343_9347 = G__9364;
i__9344_9348 = G__9365;
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
var seq__9366_9370 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9367_9371 = null;
var count__9368_9372 = (0);
var i__9369_9373 = (0);
while(true){
if((i__9369_9373 < count__9368_9372)){
var node_9374 = cljs.core._nth.call(null,chunk__9367_9371,i__9369_9373);
goog.dom.classes.remove(node_9374,class$);

var G__9375 = seq__9366_9370;
var G__9376 = chunk__9367_9371;
var G__9377 = count__9368_9372;
var G__9378 = (i__9369_9373 + (1));
seq__9366_9370 = G__9375;
chunk__9367_9371 = G__9376;
count__9368_9372 = G__9377;
i__9369_9373 = G__9378;
continue;
} else {
var temp__4657__auto___9379 = cljs.core.seq.call(null,seq__9366_9370);
if(temp__4657__auto___9379){
var seq__9366_9380__$1 = temp__4657__auto___9379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9366_9380__$1)){
var c__8257__auto___9381 = cljs.core.chunk_first.call(null,seq__9366_9380__$1);
var G__9382 = cljs.core.chunk_rest.call(null,seq__9366_9380__$1);
var G__9383 = c__8257__auto___9381;
var G__9384 = cljs.core.count.call(null,c__8257__auto___9381);
var G__9385 = (0);
seq__9366_9370 = G__9382;
chunk__9367_9371 = G__9383;
count__9368_9372 = G__9384;
i__9369_9373 = G__9385;
continue;
} else {
var node_9386 = cljs.core.first.call(null,seq__9366_9380__$1);
goog.dom.classes.remove(node_9386,class$);

var G__9387 = cljs.core.next.call(null,seq__9366_9380__$1);
var G__9388 = null;
var G__9389 = (0);
var G__9390 = (0);
seq__9366_9370 = G__9387;
chunk__9367_9371 = G__9388;
count__9368_9372 = G__9389;
i__9369_9373 = G__9390;
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
var seq__9391_9395 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9392_9396 = null;
var count__9393_9397 = (0);
var i__9394_9398 = (0);
while(true){
if((i__9394_9398 < count__9393_9397)){
var node_9399 = cljs.core._nth.call(null,chunk__9392_9396,i__9394_9398);
goog.dom.classes.toggle(node_9399,class$);

var G__9400 = seq__9391_9395;
var G__9401 = chunk__9392_9396;
var G__9402 = count__9393_9397;
var G__9403 = (i__9394_9398 + (1));
seq__9391_9395 = G__9400;
chunk__9392_9396 = G__9401;
count__9393_9397 = G__9402;
i__9394_9398 = G__9403;
continue;
} else {
var temp__4657__auto___9404 = cljs.core.seq.call(null,seq__9391_9395);
if(temp__4657__auto___9404){
var seq__9391_9405__$1 = temp__4657__auto___9404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9391_9405__$1)){
var c__8257__auto___9406 = cljs.core.chunk_first.call(null,seq__9391_9405__$1);
var G__9407 = cljs.core.chunk_rest.call(null,seq__9391_9405__$1);
var G__9408 = c__8257__auto___9406;
var G__9409 = cljs.core.count.call(null,c__8257__auto___9406);
var G__9410 = (0);
seq__9391_9395 = G__9407;
chunk__9392_9396 = G__9408;
count__9393_9397 = G__9409;
i__9394_9398 = G__9410;
continue;
} else {
var node_9411 = cljs.core.first.call(null,seq__9391_9405__$1);
goog.dom.classes.toggle(node_9411,class$);

var G__9412 = cljs.core.next.call(null,seq__9391_9405__$1);
var G__9413 = null;
var G__9414 = (0);
var G__9415 = (0);
seq__9391_9395 = G__9412;
chunk__9392_9396 = G__9413;
count__9393_9397 = G__9414;
i__9394_9398 = G__9415;
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
var classes_9420__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__9416_9421 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9417_9422 = null;
var count__9418_9423 = (0);
var i__9419_9424 = (0);
while(true){
if((i__9419_9424 < count__9418_9423)){
var node_9425 = cljs.core._nth.call(null,chunk__9417_9422,i__9419_9424);
goog.dom.classes.set(node_9425,classes_9420__$1);

var G__9426 = seq__9416_9421;
var G__9427 = chunk__9417_9422;
var G__9428 = count__9418_9423;
var G__9429 = (i__9419_9424 + (1));
seq__9416_9421 = G__9426;
chunk__9417_9422 = G__9427;
count__9418_9423 = G__9428;
i__9419_9424 = G__9429;
continue;
} else {
var temp__4657__auto___9430 = cljs.core.seq.call(null,seq__9416_9421);
if(temp__4657__auto___9430){
var seq__9416_9431__$1 = temp__4657__auto___9430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9416_9431__$1)){
var c__8257__auto___9432 = cljs.core.chunk_first.call(null,seq__9416_9431__$1);
var G__9433 = cljs.core.chunk_rest.call(null,seq__9416_9431__$1);
var G__9434 = c__8257__auto___9432;
var G__9435 = cljs.core.count.call(null,c__8257__auto___9432);
var G__9436 = (0);
seq__9416_9421 = G__9433;
chunk__9417_9422 = G__9434;
count__9418_9423 = G__9435;
i__9419_9424 = G__9436;
continue;
} else {
var node_9437 = cljs.core.first.call(null,seq__9416_9431__$1);
goog.dom.classes.set(node_9437,classes_9420__$1);

var G__9438 = cljs.core.next.call(null,seq__9416_9431__$1);
var G__9439 = null;
var G__9440 = (0);
var G__9441 = (0);
seq__9416_9421 = G__9438;
chunk__9417_9422 = G__9439;
count__9418_9423 = G__9440;
i__9419_9424 = G__9441;
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
var seq__9442_9446 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9443_9447 = null;
var count__9444_9448 = (0);
var i__9445_9449 = (0);
while(true){
if((i__9445_9449 < count__9444_9448)){
var node_9450 = cljs.core._nth.call(null,chunk__9443_9447,i__9445_9449);
goog.dom.setTextContent(node_9450,value);

var G__9451 = seq__9442_9446;
var G__9452 = chunk__9443_9447;
var G__9453 = count__9444_9448;
var G__9454 = (i__9445_9449 + (1));
seq__9442_9446 = G__9451;
chunk__9443_9447 = G__9452;
count__9444_9448 = G__9453;
i__9445_9449 = G__9454;
continue;
} else {
var temp__4657__auto___9455 = cljs.core.seq.call(null,seq__9442_9446);
if(temp__4657__auto___9455){
var seq__9442_9456__$1 = temp__4657__auto___9455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9442_9456__$1)){
var c__8257__auto___9457 = cljs.core.chunk_first.call(null,seq__9442_9456__$1);
var G__9458 = cljs.core.chunk_rest.call(null,seq__9442_9456__$1);
var G__9459 = c__8257__auto___9457;
var G__9460 = cljs.core.count.call(null,c__8257__auto___9457);
var G__9461 = (0);
seq__9442_9446 = G__9458;
chunk__9443_9447 = G__9459;
count__9444_9448 = G__9460;
i__9445_9449 = G__9461;
continue;
} else {
var node_9462 = cljs.core.first.call(null,seq__9442_9456__$1);
goog.dom.setTextContent(node_9462,value);

var G__9463 = cljs.core.next.call(null,seq__9442_9456__$1);
var G__9464 = null;
var G__9465 = (0);
var G__9466 = (0);
seq__9442_9446 = G__9463;
chunk__9443_9447 = G__9464;
count__9444_9448 = G__9465;
i__9445_9449 = G__9466;
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
var seq__9467_9471 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9468_9472 = null;
var count__9469_9473 = (0);
var i__9470_9474 = (0);
while(true){
if((i__9470_9474 < count__9469_9473)){
var node_9475 = cljs.core._nth.call(null,chunk__9468_9472,i__9470_9474);
goog.dom.forms.setValue(node_9475,value);

var G__9476 = seq__9467_9471;
var G__9477 = chunk__9468_9472;
var G__9478 = count__9469_9473;
var G__9479 = (i__9470_9474 + (1));
seq__9467_9471 = G__9476;
chunk__9468_9472 = G__9477;
count__9469_9473 = G__9478;
i__9470_9474 = G__9479;
continue;
} else {
var temp__4657__auto___9480 = cljs.core.seq.call(null,seq__9467_9471);
if(temp__4657__auto___9480){
var seq__9467_9481__$1 = temp__4657__auto___9480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9467_9481__$1)){
var c__8257__auto___9482 = cljs.core.chunk_first.call(null,seq__9467_9481__$1);
var G__9483 = cljs.core.chunk_rest.call(null,seq__9467_9481__$1);
var G__9484 = c__8257__auto___9482;
var G__9485 = cljs.core.count.call(null,c__8257__auto___9482);
var G__9486 = (0);
seq__9467_9471 = G__9483;
chunk__9468_9472 = G__9484;
count__9469_9473 = G__9485;
i__9470_9474 = G__9486;
continue;
} else {
var node_9487 = cljs.core.first.call(null,seq__9467_9481__$1);
goog.dom.forms.setValue(node_9487,value);

var G__9488 = cljs.core.next.call(null,seq__9467_9481__$1);
var G__9489 = null;
var G__9490 = (0);
var G__9491 = (0);
seq__9467_9471 = G__9488;
chunk__9468_9472 = G__9489;
count__9469_9473 = G__9490;
i__9470_9474 = G__9491;
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
var value_9497 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__9493_9498 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__9494_9499 = null;
var count__9495_9500 = (0);
var i__9496_9501 = (0);
while(true){
if((i__9496_9501 < count__9495_9500)){
var node_9502 = cljs.core._nth.call(null,chunk__9494_9499,i__9496_9501);
node_9502.innerHTML = value_9497;

var G__9503 = seq__9493_9498;
var G__9504 = chunk__9494_9499;
var G__9505 = count__9495_9500;
var G__9506 = (i__9496_9501 + (1));
seq__9493_9498 = G__9503;
chunk__9494_9499 = G__9504;
count__9495_9500 = G__9505;
i__9496_9501 = G__9506;
continue;
} else {
var temp__4657__auto___9507 = cljs.core.seq.call(null,seq__9493_9498);
if(temp__4657__auto___9507){
var seq__9493_9508__$1 = temp__4657__auto___9507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9493_9508__$1)){
var c__8257__auto___9509 = cljs.core.chunk_first.call(null,seq__9493_9508__$1);
var G__9510 = cljs.core.chunk_rest.call(null,seq__9493_9508__$1);
var G__9511 = c__8257__auto___9509;
var G__9512 = cljs.core.count.call(null,c__8257__auto___9509);
var G__9513 = (0);
seq__9493_9498 = G__9510;
chunk__9494_9499 = G__9511;
count__9495_9500 = G__9512;
i__9496_9501 = G__9513;
continue;
} else {
var node_9514 = cljs.core.first.call(null,seq__9493_9508__$1);
node_9514.innerHTML = value_9497;

var G__9515 = cljs.core.next.call(null,seq__9493_9508__$1);
var G__9516 = null;
var G__9517 = (0);
var G__9518 = (0);
seq__9493_9498 = G__9515;
chunk__9494_9499 = G__9516;
count__9495_9500 = G__9517;
i__9496_9501 = G__9518;
continue;
}
} else {
}
}
break;
}
}catch (e9492){if((e9492 instanceof Error)){
var e_9519 = e9492;
domina.replace_children_BANG_.call(null,content,value_9497);
} else {
throw e9492;

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
var G__9521 = arguments.length;
switch (G__9521) {
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
if(cljs.core.truth_((function (){var and__7406__auto__ = bubble;
if(cljs.core.truth_(and__7406__auto__)){
return (value == null);
} else {
return and__7406__auto__;
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
var m = (function (){var or__7418__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
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
var seq__9525_9529 = cljs.core.seq.call(null,children);
var chunk__9526_9530 = null;
var count__9527_9531 = (0);
var i__9528_9532 = (0);
while(true){
if((i__9528_9532 < count__9527_9531)){
var child_9533 = cljs.core._nth.call(null,chunk__9526_9530,i__9528_9532);
frag.appendChild(child_9533);

var G__9534 = seq__9525_9529;
var G__9535 = chunk__9526_9530;
var G__9536 = count__9527_9531;
var G__9537 = (i__9528_9532 + (1));
seq__9525_9529 = G__9534;
chunk__9526_9530 = G__9535;
count__9527_9531 = G__9536;
i__9528_9532 = G__9537;
continue;
} else {
var temp__4657__auto___9538 = cljs.core.seq.call(null,seq__9525_9529);
if(temp__4657__auto___9538){
var seq__9525_9539__$1 = temp__4657__auto___9538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9525_9539__$1)){
var c__8257__auto___9540 = cljs.core.chunk_first.call(null,seq__9525_9539__$1);
var G__9541 = cljs.core.chunk_rest.call(null,seq__9525_9539__$1);
var G__9542 = c__8257__auto___9540;
var G__9543 = cljs.core.count.call(null,c__8257__auto___9540);
var G__9544 = (0);
seq__9525_9529 = G__9541;
chunk__9526_9530 = G__9542;
count__9527_9531 = G__9543;
i__9528_9532 = G__9544;
continue;
} else {
var child_9545 = cljs.core.first.call(null,seq__9525_9539__$1);
frag.appendChild(child_9545);

var G__9546 = cljs.core.next.call(null,seq__9525_9539__$1);
var G__9547 = null;
var G__9548 = (0);
var G__9549 = (0);
seq__9525_9529 = G__9546;
chunk__9526_9530 = G__9547;
count__9527_9531 = G__9548;
i__9528_9532 = G__9549;
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
return (function (p1__9523_SHARP_,p2__9524_SHARP_){
return f.call(null,p1__9523_SHARP_,p2__9524_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__9551 = arguments.length;
switch (G__9551) {
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
var G__9554 = arguments.length;
switch (G__9554) {
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
var and__7406__auto__ = obj;
if(cljs.core.truth_(and__7406__auto__)){
var and__7406__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__7406__auto____$1){
return obj.length;
} else {
return and__7406__auto____$1;
}
} else {
return and__7406__auto__;
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
