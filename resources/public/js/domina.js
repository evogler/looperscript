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
var opt_wrapper_31320 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_31321 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_31322 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_31322,opt_wrapper_31320,table_section_wrapper_31321,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_31320,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_31321,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_31321,cell_wrapper_31322,table_section_wrapper_31321,table_section_wrapper_31321]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3628__auto__ = div.firstChild;if(cljs.core.truth_(and__3628__auto__))
{return div.firstChild.childNodes;
} else
{return and__3628__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__31327 = cljs.core.seq.call(null,tbody);var chunk__31328 = null;var count__31329 = (0);var i__31330 = (0);while(true){
if((i__31330 < count__31329))
{var child = cljs.core._nth.call(null,chunk__31328,i__31330);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__31331 = seq__31327;
var G__31332 = chunk__31328;
var G__31333 = count__31329;
var G__31334 = (i__31330 + (1));
seq__31327 = G__31331;
chunk__31328 = G__31332;
count__31329 = G__31333;
i__31330 = G__31334;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31327);if(temp__4126__auto__)
{var seq__31327__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31327__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__31327__$1);{
var G__31335 = cljs.core.chunk_rest.call(null,seq__31327__$1);
var G__31336 = c__4410__auto__;
var G__31337 = cljs.core.count.call(null,c__4410__auto__);
var G__31338 = (0);
seq__31327 = G__31335;
chunk__31328 = G__31336;
count__31329 = G__31337;
i__31330 = G__31338;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__31327__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__31339 = cljs.core.next.call(null,seq__31327__$1);
var G__31340 = null;
var G__31341 = (0);
var G__31342 = (0);
seq__31327 = G__31339;
chunk__31328 = G__31340;
count__31329 = G__31341;
i__31330 = G__31342;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__31344 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__31344,(0),null);var start_wrap = cljs.core.nth.call(null,vec__31344,(1),null);var end_wrap = cljs.core.nth.call(null,vec__31344,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__31345 = wrapper.lastChild;
var G__31346 = (level - (1));
wrapper = G__31345;
level = G__31346;
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
domina.DomContent = (function (){var obj31348 = {};return obj31348;
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
log_debug.cljs$lang$applyTo = (function (arglist__31349){
var mesg = cljs.core.seq(arglist__31349);
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
log.cljs$lang$applyTo = (function (arglist__31350){
var mesg = cljs.core.seq(arglist__31350);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__31351){
var contents = cljs.core.seq(arglist__31351);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__31352_SHARP_){return p1__31352_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__31353_SHARP_,p2__31354_SHARP_){return goog.dom.insertChildAt(p1__31353_SHARP_,p2__31354_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__31356_SHARP_,p2__31355_SHARP_){return goog.dom.insertSiblingBefore(p2__31355_SHARP_,p1__31356_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__31358_SHARP_,p2__31357_SHARP_){return goog.dom.insertSiblingAfter(p2__31357_SHARP_,p1__31358_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__31360_SHARP_,p2__31359_SHARP_){return goog.dom.replaceNode(p2__31359_SHARP_,p1__31360_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__31365_31369 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31366_31370 = null;var count__31367_31371 = (0);var i__31368_31372 = (0);while(true){
if((i__31368_31372 < count__31367_31371))
{var n_31373 = cljs.core._nth.call(null,chunk__31366_31370,i__31368_31372);goog.style.setStyle(n_31373,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31374 = seq__31365_31369;
var G__31375 = chunk__31366_31370;
var G__31376 = count__31367_31371;
var G__31377 = (i__31368_31372 + (1));
seq__31365_31369 = G__31374;
chunk__31366_31370 = G__31375;
count__31367_31371 = G__31376;
i__31368_31372 = G__31377;
continue;
}
} else
{var temp__4126__auto___31378 = cljs.core.seq.call(null,seq__31365_31369);if(temp__4126__auto___31378)
{var seq__31365_31379__$1 = temp__4126__auto___31378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31365_31379__$1))
{var c__4410__auto___31380 = cljs.core.chunk_first.call(null,seq__31365_31379__$1);{
var G__31381 = cljs.core.chunk_rest.call(null,seq__31365_31379__$1);
var G__31382 = c__4410__auto___31380;
var G__31383 = cljs.core.count.call(null,c__4410__auto___31380);
var G__31384 = (0);
seq__31365_31369 = G__31381;
chunk__31366_31370 = G__31382;
count__31367_31371 = G__31383;
i__31368_31372 = G__31384;
continue;
}
} else
{var n_31385 = cljs.core.first.call(null,seq__31365_31379__$1);goog.style.setStyle(n_31385,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31386 = cljs.core.next.call(null,seq__31365_31379__$1);
var G__31387 = null;
var G__31388 = (0);
var G__31389 = (0);
seq__31365_31369 = G__31386;
chunk__31366_31370 = G__31387;
count__31367_31371 = G__31388;
i__31368_31372 = G__31389;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__31390){
var content = cljs.core.first(arglist__31390);
arglist__31390 = cljs.core.next(arglist__31390);
var name = cljs.core.first(arglist__31390);
var value = cljs.core.rest(arglist__31390);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__31395_31399 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31396_31400 = null;var count__31397_31401 = (0);var i__31398_31402 = (0);while(true){
if((i__31398_31402 < count__31397_31401))
{var n_31403 = cljs.core._nth.call(null,chunk__31396_31400,i__31398_31402);n_31403.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31404 = seq__31395_31399;
var G__31405 = chunk__31396_31400;
var G__31406 = count__31397_31401;
var G__31407 = (i__31398_31402 + (1));
seq__31395_31399 = G__31404;
chunk__31396_31400 = G__31405;
count__31397_31401 = G__31406;
i__31398_31402 = G__31407;
continue;
}
} else
{var temp__4126__auto___31408 = cljs.core.seq.call(null,seq__31395_31399);if(temp__4126__auto___31408)
{var seq__31395_31409__$1 = temp__4126__auto___31408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31395_31409__$1))
{var c__4410__auto___31410 = cljs.core.chunk_first.call(null,seq__31395_31409__$1);{
var G__31411 = cljs.core.chunk_rest.call(null,seq__31395_31409__$1);
var G__31412 = c__4410__auto___31410;
var G__31413 = cljs.core.count.call(null,c__4410__auto___31410);
var G__31414 = (0);
seq__31395_31399 = G__31411;
chunk__31396_31400 = G__31412;
count__31397_31401 = G__31413;
i__31398_31402 = G__31414;
continue;
}
} else
{var n_31415 = cljs.core.first.call(null,seq__31395_31409__$1);n_31415.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31416 = cljs.core.next.call(null,seq__31395_31409__$1);
var G__31417 = null;
var G__31418 = (0);
var G__31419 = (0);
seq__31395_31399 = G__31416;
chunk__31396_31400 = G__31417;
count__31397_31401 = G__31418;
i__31398_31402 = G__31419;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__31420){
var content = cljs.core.first(arglist__31420);
arglist__31420 = cljs.core.next(arglist__31420);
var name = cljs.core.first(arglist__31420);
var value = cljs.core.rest(arglist__31420);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__31425_31429 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31426_31430 = null;var count__31427_31431 = (0);var i__31428_31432 = (0);while(true){
if((i__31428_31432 < count__31427_31431))
{var n_31433 = cljs.core._nth.call(null,chunk__31426_31430,i__31428_31432);n_31433.removeAttribute(cljs.core.name.call(null,name));
{
var G__31434 = seq__31425_31429;
var G__31435 = chunk__31426_31430;
var G__31436 = count__31427_31431;
var G__31437 = (i__31428_31432 + (1));
seq__31425_31429 = G__31434;
chunk__31426_31430 = G__31435;
count__31427_31431 = G__31436;
i__31428_31432 = G__31437;
continue;
}
} else
{var temp__4126__auto___31438 = cljs.core.seq.call(null,seq__31425_31429);if(temp__4126__auto___31438)
{var seq__31425_31439__$1 = temp__4126__auto___31438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31425_31439__$1))
{var c__4410__auto___31440 = cljs.core.chunk_first.call(null,seq__31425_31439__$1);{
var G__31441 = cljs.core.chunk_rest.call(null,seq__31425_31439__$1);
var G__31442 = c__4410__auto___31440;
var G__31443 = cljs.core.count.call(null,c__4410__auto___31440);
var G__31444 = (0);
seq__31425_31429 = G__31441;
chunk__31426_31430 = G__31442;
count__31427_31431 = G__31443;
i__31428_31432 = G__31444;
continue;
}
} else
{var n_31445 = cljs.core.first.call(null,seq__31425_31439__$1);n_31445.removeAttribute(cljs.core.name.call(null,name));
{
var G__31446 = cljs.core.next.call(null,seq__31425_31439__$1);
var G__31447 = null;
var G__31448 = (0);
var G__31449 = (0);
seq__31425_31429 = G__31446;
chunk__31426_31430 = G__31447;
count__31427_31431 = G__31448;
i__31428_31432 = G__31449;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__31451 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__31451,(0),null);var v = cljs.core.nth.call(null,vec__31451,(1),null);if(cljs.core.truth_((function (){var and__3628__auto__ = k;if(cljs.core.truth_(and__3628__auto__))
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
return (function (p1__31452_SHARP_){var attr = attrs__$1.item(p1__31452_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__31459_31465 = cljs.core.seq.call(null,styles);var chunk__31460_31466 = null;var count__31461_31467 = (0);var i__31462_31468 = (0);while(true){
if((i__31462_31468 < count__31461_31467))
{var vec__31463_31469 = cljs.core._nth.call(null,chunk__31460_31466,i__31462_31468);var name_31470 = cljs.core.nth.call(null,vec__31463_31469,(0),null);var value_31471 = cljs.core.nth.call(null,vec__31463_31469,(1),null);domina.set_style_BANG_.call(null,content,name_31470,value_31471);
{
var G__31472 = seq__31459_31465;
var G__31473 = chunk__31460_31466;
var G__31474 = count__31461_31467;
var G__31475 = (i__31462_31468 + (1));
seq__31459_31465 = G__31472;
chunk__31460_31466 = G__31473;
count__31461_31467 = G__31474;
i__31462_31468 = G__31475;
continue;
}
} else
{var temp__4126__auto___31476 = cljs.core.seq.call(null,seq__31459_31465);if(temp__4126__auto___31476)
{var seq__31459_31477__$1 = temp__4126__auto___31476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31459_31477__$1))
{var c__4410__auto___31478 = cljs.core.chunk_first.call(null,seq__31459_31477__$1);{
var G__31479 = cljs.core.chunk_rest.call(null,seq__31459_31477__$1);
var G__31480 = c__4410__auto___31478;
var G__31481 = cljs.core.count.call(null,c__4410__auto___31478);
var G__31482 = (0);
seq__31459_31465 = G__31479;
chunk__31460_31466 = G__31480;
count__31461_31467 = G__31481;
i__31462_31468 = G__31482;
continue;
}
} else
{var vec__31464_31483 = cljs.core.first.call(null,seq__31459_31477__$1);var name_31484 = cljs.core.nth.call(null,vec__31464_31483,(0),null);var value_31485 = cljs.core.nth.call(null,vec__31464_31483,(1),null);domina.set_style_BANG_.call(null,content,name_31484,value_31485);
{
var G__31486 = cljs.core.next.call(null,seq__31459_31477__$1);
var G__31487 = null;
var G__31488 = (0);
var G__31489 = (0);
seq__31459_31465 = G__31486;
chunk__31460_31466 = G__31487;
count__31461_31467 = G__31488;
i__31462_31468 = G__31489;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__31496_31502 = cljs.core.seq.call(null,attrs);var chunk__31497_31503 = null;var count__31498_31504 = (0);var i__31499_31505 = (0);while(true){
if((i__31499_31505 < count__31498_31504))
{var vec__31500_31506 = cljs.core._nth.call(null,chunk__31497_31503,i__31499_31505);var name_31507 = cljs.core.nth.call(null,vec__31500_31506,(0),null);var value_31508 = cljs.core.nth.call(null,vec__31500_31506,(1),null);domina.set_attr_BANG_.call(null,content,name_31507,value_31508);
{
var G__31509 = seq__31496_31502;
var G__31510 = chunk__31497_31503;
var G__31511 = count__31498_31504;
var G__31512 = (i__31499_31505 + (1));
seq__31496_31502 = G__31509;
chunk__31497_31503 = G__31510;
count__31498_31504 = G__31511;
i__31499_31505 = G__31512;
continue;
}
} else
{var temp__4126__auto___31513 = cljs.core.seq.call(null,seq__31496_31502);if(temp__4126__auto___31513)
{var seq__31496_31514__$1 = temp__4126__auto___31513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31496_31514__$1))
{var c__4410__auto___31515 = cljs.core.chunk_first.call(null,seq__31496_31514__$1);{
var G__31516 = cljs.core.chunk_rest.call(null,seq__31496_31514__$1);
var G__31517 = c__4410__auto___31515;
var G__31518 = cljs.core.count.call(null,c__4410__auto___31515);
var G__31519 = (0);
seq__31496_31502 = G__31516;
chunk__31497_31503 = G__31517;
count__31498_31504 = G__31518;
i__31499_31505 = G__31519;
continue;
}
} else
{var vec__31501_31520 = cljs.core.first.call(null,seq__31496_31514__$1);var name_31521 = cljs.core.nth.call(null,vec__31501_31520,(0),null);var value_31522 = cljs.core.nth.call(null,vec__31501_31520,(1),null);domina.set_attr_BANG_.call(null,content,name_31521,value_31522);
{
var G__31523 = cljs.core.next.call(null,seq__31496_31514__$1);
var G__31524 = null;
var G__31525 = (0);
var G__31526 = (0);
seq__31496_31502 = G__31523;
chunk__31497_31503 = G__31524;
count__31498_31504 = G__31525;
i__31499_31505 = G__31526;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__31531_31535 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31532_31536 = null;var count__31533_31537 = (0);var i__31534_31538 = (0);while(true){
if((i__31534_31538 < count__31533_31537))
{var node_31539 = cljs.core._nth.call(null,chunk__31532_31536,i__31534_31538);goog.dom.classes.add(node_31539,class$);
{
var G__31540 = seq__31531_31535;
var G__31541 = chunk__31532_31536;
var G__31542 = count__31533_31537;
var G__31543 = (i__31534_31538 + (1));
seq__31531_31535 = G__31540;
chunk__31532_31536 = G__31541;
count__31533_31537 = G__31542;
i__31534_31538 = G__31543;
continue;
}
} else
{var temp__4126__auto___31544 = cljs.core.seq.call(null,seq__31531_31535);if(temp__4126__auto___31544)
{var seq__31531_31545__$1 = temp__4126__auto___31544;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31531_31545__$1))
{var c__4410__auto___31546 = cljs.core.chunk_first.call(null,seq__31531_31545__$1);{
var G__31547 = cljs.core.chunk_rest.call(null,seq__31531_31545__$1);
var G__31548 = c__4410__auto___31546;
var G__31549 = cljs.core.count.call(null,c__4410__auto___31546);
var G__31550 = (0);
seq__31531_31535 = G__31547;
chunk__31532_31536 = G__31548;
count__31533_31537 = G__31549;
i__31534_31538 = G__31550;
continue;
}
} else
{var node_31551 = cljs.core.first.call(null,seq__31531_31545__$1);goog.dom.classes.add(node_31551,class$);
{
var G__31552 = cljs.core.next.call(null,seq__31531_31545__$1);
var G__31553 = null;
var G__31554 = (0);
var G__31555 = (0);
seq__31531_31535 = G__31552;
chunk__31532_31536 = G__31553;
count__31533_31537 = G__31554;
i__31534_31538 = G__31555;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__31560_31564 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31561_31565 = null;var count__31562_31566 = (0);var i__31563_31567 = (0);while(true){
if((i__31563_31567 < count__31562_31566))
{var node_31568 = cljs.core._nth.call(null,chunk__31561_31565,i__31563_31567);goog.dom.classes.remove(node_31568,class$);
{
var G__31569 = seq__31560_31564;
var G__31570 = chunk__31561_31565;
var G__31571 = count__31562_31566;
var G__31572 = (i__31563_31567 + (1));
seq__31560_31564 = G__31569;
chunk__31561_31565 = G__31570;
count__31562_31566 = G__31571;
i__31563_31567 = G__31572;
continue;
}
} else
{var temp__4126__auto___31573 = cljs.core.seq.call(null,seq__31560_31564);if(temp__4126__auto___31573)
{var seq__31560_31574__$1 = temp__4126__auto___31573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31560_31574__$1))
{var c__4410__auto___31575 = cljs.core.chunk_first.call(null,seq__31560_31574__$1);{
var G__31576 = cljs.core.chunk_rest.call(null,seq__31560_31574__$1);
var G__31577 = c__4410__auto___31575;
var G__31578 = cljs.core.count.call(null,c__4410__auto___31575);
var G__31579 = (0);
seq__31560_31564 = G__31576;
chunk__31561_31565 = G__31577;
count__31562_31566 = G__31578;
i__31563_31567 = G__31579;
continue;
}
} else
{var node_31580 = cljs.core.first.call(null,seq__31560_31574__$1);goog.dom.classes.remove(node_31580,class$);
{
var G__31581 = cljs.core.next.call(null,seq__31560_31574__$1);
var G__31582 = null;
var G__31583 = (0);
var G__31584 = (0);
seq__31560_31564 = G__31581;
chunk__31561_31565 = G__31582;
count__31562_31566 = G__31583;
i__31563_31567 = G__31584;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__31589_31593 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31590_31594 = null;var count__31591_31595 = (0);var i__31592_31596 = (0);while(true){
if((i__31592_31596 < count__31591_31595))
{var node_31597 = cljs.core._nth.call(null,chunk__31590_31594,i__31592_31596);goog.dom.classes.toggle(node_31597,class$);
{
var G__31598 = seq__31589_31593;
var G__31599 = chunk__31590_31594;
var G__31600 = count__31591_31595;
var G__31601 = (i__31592_31596 + (1));
seq__31589_31593 = G__31598;
chunk__31590_31594 = G__31599;
count__31591_31595 = G__31600;
i__31592_31596 = G__31601;
continue;
}
} else
{var temp__4126__auto___31602 = cljs.core.seq.call(null,seq__31589_31593);if(temp__4126__auto___31602)
{var seq__31589_31603__$1 = temp__4126__auto___31602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31589_31603__$1))
{var c__4410__auto___31604 = cljs.core.chunk_first.call(null,seq__31589_31603__$1);{
var G__31605 = cljs.core.chunk_rest.call(null,seq__31589_31603__$1);
var G__31606 = c__4410__auto___31604;
var G__31607 = cljs.core.count.call(null,c__4410__auto___31604);
var G__31608 = (0);
seq__31589_31593 = G__31605;
chunk__31590_31594 = G__31606;
count__31591_31595 = G__31607;
i__31592_31596 = G__31608;
continue;
}
} else
{var node_31609 = cljs.core.first.call(null,seq__31589_31603__$1);goog.dom.classes.toggle(node_31609,class$);
{
var G__31610 = cljs.core.next.call(null,seq__31589_31603__$1);
var G__31611 = null;
var G__31612 = (0);
var G__31613 = (0);
seq__31589_31593 = G__31610;
chunk__31590_31594 = G__31611;
count__31591_31595 = G__31612;
i__31592_31596 = G__31613;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_31622__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__31618_31623 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31619_31624 = null;var count__31620_31625 = (0);var i__31621_31626 = (0);while(true){
if((i__31621_31626 < count__31620_31625))
{var node_31627 = cljs.core._nth.call(null,chunk__31619_31624,i__31621_31626);goog.dom.classes.set(node_31627,classes_31622__$1);
{
var G__31628 = seq__31618_31623;
var G__31629 = chunk__31619_31624;
var G__31630 = count__31620_31625;
var G__31631 = (i__31621_31626 + (1));
seq__31618_31623 = G__31628;
chunk__31619_31624 = G__31629;
count__31620_31625 = G__31630;
i__31621_31626 = G__31631;
continue;
}
} else
{var temp__4126__auto___31632 = cljs.core.seq.call(null,seq__31618_31623);if(temp__4126__auto___31632)
{var seq__31618_31633__$1 = temp__4126__auto___31632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31618_31633__$1))
{var c__4410__auto___31634 = cljs.core.chunk_first.call(null,seq__31618_31633__$1);{
var G__31635 = cljs.core.chunk_rest.call(null,seq__31618_31633__$1);
var G__31636 = c__4410__auto___31634;
var G__31637 = cljs.core.count.call(null,c__4410__auto___31634);
var G__31638 = (0);
seq__31618_31623 = G__31635;
chunk__31619_31624 = G__31636;
count__31620_31625 = G__31637;
i__31621_31626 = G__31638;
continue;
}
} else
{var node_31639 = cljs.core.first.call(null,seq__31618_31633__$1);goog.dom.classes.set(node_31639,classes_31622__$1);
{
var G__31640 = cljs.core.next.call(null,seq__31618_31633__$1);
var G__31641 = null;
var G__31642 = (0);
var G__31643 = (0);
seq__31618_31623 = G__31640;
chunk__31619_31624 = G__31641;
count__31620_31625 = G__31642;
i__31621_31626 = G__31643;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__31648_31652 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31649_31653 = null;var count__31650_31654 = (0);var i__31651_31655 = (0);while(true){
if((i__31651_31655 < count__31650_31654))
{var node_31656 = cljs.core._nth.call(null,chunk__31649_31653,i__31651_31655);goog.dom.setTextContent(node_31656,value);
{
var G__31657 = seq__31648_31652;
var G__31658 = chunk__31649_31653;
var G__31659 = count__31650_31654;
var G__31660 = (i__31651_31655 + (1));
seq__31648_31652 = G__31657;
chunk__31649_31653 = G__31658;
count__31650_31654 = G__31659;
i__31651_31655 = G__31660;
continue;
}
} else
{var temp__4126__auto___31661 = cljs.core.seq.call(null,seq__31648_31652);if(temp__4126__auto___31661)
{var seq__31648_31662__$1 = temp__4126__auto___31661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31648_31662__$1))
{var c__4410__auto___31663 = cljs.core.chunk_first.call(null,seq__31648_31662__$1);{
var G__31664 = cljs.core.chunk_rest.call(null,seq__31648_31662__$1);
var G__31665 = c__4410__auto___31663;
var G__31666 = cljs.core.count.call(null,c__4410__auto___31663);
var G__31667 = (0);
seq__31648_31652 = G__31664;
chunk__31649_31653 = G__31665;
count__31650_31654 = G__31666;
i__31651_31655 = G__31667;
continue;
}
} else
{var node_31668 = cljs.core.first.call(null,seq__31648_31662__$1);goog.dom.setTextContent(node_31668,value);
{
var G__31669 = cljs.core.next.call(null,seq__31648_31662__$1);
var G__31670 = null;
var G__31671 = (0);
var G__31672 = (0);
seq__31648_31652 = G__31669;
chunk__31649_31653 = G__31670;
count__31650_31654 = G__31671;
i__31651_31655 = G__31672;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__31677_31681 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31678_31682 = null;var count__31679_31683 = (0);var i__31680_31684 = (0);while(true){
if((i__31680_31684 < count__31679_31683))
{var node_31685 = cljs.core._nth.call(null,chunk__31678_31682,i__31680_31684);goog.dom.forms.setValue(node_31685,value);
{
var G__31686 = seq__31677_31681;
var G__31687 = chunk__31678_31682;
var G__31688 = count__31679_31683;
var G__31689 = (i__31680_31684 + (1));
seq__31677_31681 = G__31686;
chunk__31678_31682 = G__31687;
count__31679_31683 = G__31688;
i__31680_31684 = G__31689;
continue;
}
} else
{var temp__4126__auto___31690 = cljs.core.seq.call(null,seq__31677_31681);if(temp__4126__auto___31690)
{var seq__31677_31691__$1 = temp__4126__auto___31690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31677_31691__$1))
{var c__4410__auto___31692 = cljs.core.chunk_first.call(null,seq__31677_31691__$1);{
var G__31693 = cljs.core.chunk_rest.call(null,seq__31677_31691__$1);
var G__31694 = c__4410__auto___31692;
var G__31695 = cljs.core.count.call(null,c__4410__auto___31692);
var G__31696 = (0);
seq__31677_31681 = G__31693;
chunk__31678_31682 = G__31694;
count__31679_31683 = G__31695;
i__31680_31684 = G__31696;
continue;
}
} else
{var node_31697 = cljs.core.first.call(null,seq__31677_31691__$1);goog.dom.forms.setValue(node_31697,value);
{
var G__31698 = cljs.core.next.call(null,seq__31677_31691__$1);
var G__31699 = null;
var G__31700 = (0);
var G__31701 = (0);
seq__31677_31681 = G__31698;
chunk__31678_31682 = G__31699;
count__31679_31683 = G__31700;
i__31680_31684 = G__31701;
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
{var value_31712 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__31708_31713 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31709_31714 = null;var count__31710_31715 = (0);var i__31711_31716 = (0);while(true){
if((i__31711_31716 < count__31710_31715))
{var node_31717 = cljs.core._nth.call(null,chunk__31709_31714,i__31711_31716);node_31717.innerHTML = value_31712;
{
var G__31718 = seq__31708_31713;
var G__31719 = chunk__31709_31714;
var G__31720 = count__31710_31715;
var G__31721 = (i__31711_31716 + (1));
seq__31708_31713 = G__31718;
chunk__31709_31714 = G__31719;
count__31710_31715 = G__31720;
i__31711_31716 = G__31721;
continue;
}
} else
{var temp__4126__auto___31722 = cljs.core.seq.call(null,seq__31708_31713);if(temp__4126__auto___31722)
{var seq__31708_31723__$1 = temp__4126__auto___31722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31708_31723__$1))
{var c__4410__auto___31724 = cljs.core.chunk_first.call(null,seq__31708_31723__$1);{
var G__31725 = cljs.core.chunk_rest.call(null,seq__31708_31723__$1);
var G__31726 = c__4410__auto___31724;
var G__31727 = cljs.core.count.call(null,c__4410__auto___31724);
var G__31728 = (0);
seq__31708_31713 = G__31725;
chunk__31709_31714 = G__31726;
count__31710_31715 = G__31727;
i__31711_31716 = G__31728;
continue;
}
} else
{var node_31729 = cljs.core.first.call(null,seq__31708_31723__$1);node_31729.innerHTML = value_31712;
{
var G__31730 = cljs.core.next.call(null,seq__31708_31723__$1);
var G__31731 = null;
var G__31732 = (0);
var G__31733 = (0);
seq__31708_31713 = G__31730;
chunk__31709_31714 = G__31731;
count__31710_31715 = G__31732;
i__31711_31716 = G__31733;
continue;
}
}
} else
{}
}
break;
}
}catch (e31707){if((e31707 instanceof Error))
{var e_31734 = e31707;domina.replace_children_BANG_.call(null,content,value_31712);
} else
{throw e31707;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__31741_31745 = cljs.core.seq.call(null,children);var chunk__31742_31746 = null;var count__31743_31747 = (0);var i__31744_31748 = (0);while(true){
if((i__31744_31748 < count__31743_31747))
{var child_31749 = cljs.core._nth.call(null,chunk__31742_31746,i__31744_31748);frag.appendChild(child_31749);
{
var G__31750 = seq__31741_31745;
var G__31751 = chunk__31742_31746;
var G__31752 = count__31743_31747;
var G__31753 = (i__31744_31748 + (1));
seq__31741_31745 = G__31750;
chunk__31742_31746 = G__31751;
count__31743_31747 = G__31752;
i__31744_31748 = G__31753;
continue;
}
} else
{var temp__4126__auto___31754 = cljs.core.seq.call(null,seq__31741_31745);if(temp__4126__auto___31754)
{var seq__31741_31755__$1 = temp__4126__auto___31754;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31741_31755__$1))
{var c__4410__auto___31756 = cljs.core.chunk_first.call(null,seq__31741_31755__$1);{
var G__31757 = cljs.core.chunk_rest.call(null,seq__31741_31755__$1);
var G__31758 = c__4410__auto___31756;
var G__31759 = cljs.core.count.call(null,c__4410__auto___31756);
var G__31760 = (0);
seq__31741_31745 = G__31757;
chunk__31742_31746 = G__31758;
count__31743_31747 = G__31759;
i__31744_31748 = G__31760;
continue;
}
} else
{var child_31761 = cljs.core.first.call(null,seq__31741_31755__$1);frag.appendChild(child_31761);
{
var G__31762 = cljs.core.next.call(null,seq__31741_31755__$1);
var G__31763 = null;
var G__31764 = (0);
var G__31765 = (0);
seq__31741_31745 = G__31762;
chunk__31742_31746 = G__31763;
count__31743_31747 = G__31764;
i__31744_31748 = G__31765;
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
return (function (p1__31735_SHARP_,p2__31736_SHARP_){return f.call(null,p1__31735_SHARP_,p2__31736_SHARP_);
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
{if((function (){var G__31767 = list_thing;if(G__31767)
{var bit__4304__auto__ = (G__31767.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__31767.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31767.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31767);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31767);
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
{if((function (){var G__31768 = content;if(G__31768)
{var bit__4304__auto__ = (G__31768.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__31768.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31768.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31768);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31768);
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
{if((function (){var G__31769 = content;if(G__31769)
{var bit__4304__auto__ = (G__31769.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__31769.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31769.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31769);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31769);
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
