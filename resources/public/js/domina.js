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
var opt_wrapper_44281 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_44282 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_44283 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_44283,opt_wrapper_44281,table_section_wrapper_44282,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_44281,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_44282,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_44282,cell_wrapper_44283,table_section_wrapper_44282,table_section_wrapper_44282]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3628__auto__ = div.firstChild;if(cljs.core.truth_(and__3628__auto__))
{return div.firstChild.childNodes;
} else
{return and__3628__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__44288 = cljs.core.seq.call(null,tbody);var chunk__44289 = null;var count__44290 = (0);var i__44291 = (0);while(true){
if((i__44291 < count__44290))
{var child = cljs.core._nth.call(null,chunk__44289,i__44291);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__44292 = seq__44288;
var G__44293 = chunk__44289;
var G__44294 = count__44290;
var G__44295 = (i__44291 + (1));
seq__44288 = G__44292;
chunk__44289 = G__44293;
count__44290 = G__44294;
i__44291 = G__44295;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__44288);if(temp__4126__auto__)
{var seq__44288__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44288__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__44288__$1);{
var G__44296 = cljs.core.chunk_rest.call(null,seq__44288__$1);
var G__44297 = c__4410__auto__;
var G__44298 = cljs.core.count.call(null,c__4410__auto__);
var G__44299 = (0);
seq__44288 = G__44296;
chunk__44289 = G__44297;
count__44290 = G__44298;
i__44291 = G__44299;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__44288__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__44300 = cljs.core.next.call(null,seq__44288__$1);
var G__44301 = null;
var G__44302 = (0);
var G__44303 = (0);
seq__44288 = G__44300;
chunk__44289 = G__44301;
count__44290 = G__44302;
i__44291 = G__44303;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__44305 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__44305,(0),null);var start_wrap = cljs.core.nth.call(null,vec__44305,(1),null);var end_wrap = cljs.core.nth.call(null,vec__44305,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__44306 = wrapper.lastChild;
var G__44307 = (level - (1));
wrapper = G__44306;
level = G__44307;
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
domina.DomContent = (function (){var obj44309 = {};return obj44309;
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
log_debug.cljs$lang$applyTo = (function (arglist__44310){
var mesg = cljs.core.seq(arglist__44310);
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
log.cljs$lang$applyTo = (function (arglist__44311){
var mesg = cljs.core.seq(arglist__44311);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__44312){
var contents = cljs.core.seq(arglist__44312);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__44313_SHARP_){return p1__44313_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__44314_SHARP_,p2__44315_SHARP_){return goog.dom.insertChildAt(p1__44314_SHARP_,p2__44315_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__44317_SHARP_,p2__44316_SHARP_){return goog.dom.insertSiblingBefore(p2__44316_SHARP_,p1__44317_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__44319_SHARP_,p2__44318_SHARP_){return goog.dom.insertSiblingAfter(p2__44318_SHARP_,p1__44319_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__44321_SHARP_,p2__44320_SHARP_){return goog.dom.replaceNode(p2__44320_SHARP_,p1__44321_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__44326_44330 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44327_44331 = null;var count__44328_44332 = (0);var i__44329_44333 = (0);while(true){
if((i__44329_44333 < count__44328_44332))
{var n_44334 = cljs.core._nth.call(null,chunk__44327_44331,i__44329_44333);goog.style.setStyle(n_44334,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__44335 = seq__44326_44330;
var G__44336 = chunk__44327_44331;
var G__44337 = count__44328_44332;
var G__44338 = (i__44329_44333 + (1));
seq__44326_44330 = G__44335;
chunk__44327_44331 = G__44336;
count__44328_44332 = G__44337;
i__44329_44333 = G__44338;
continue;
}
} else
{var temp__4126__auto___44339 = cljs.core.seq.call(null,seq__44326_44330);if(temp__4126__auto___44339)
{var seq__44326_44340__$1 = temp__4126__auto___44339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44326_44340__$1))
{var c__4410__auto___44341 = cljs.core.chunk_first.call(null,seq__44326_44340__$1);{
var G__44342 = cljs.core.chunk_rest.call(null,seq__44326_44340__$1);
var G__44343 = c__4410__auto___44341;
var G__44344 = cljs.core.count.call(null,c__4410__auto___44341);
var G__44345 = (0);
seq__44326_44330 = G__44342;
chunk__44327_44331 = G__44343;
count__44328_44332 = G__44344;
i__44329_44333 = G__44345;
continue;
}
} else
{var n_44346 = cljs.core.first.call(null,seq__44326_44340__$1);goog.style.setStyle(n_44346,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__44347 = cljs.core.next.call(null,seq__44326_44340__$1);
var G__44348 = null;
var G__44349 = (0);
var G__44350 = (0);
seq__44326_44330 = G__44347;
chunk__44327_44331 = G__44348;
count__44328_44332 = G__44349;
i__44329_44333 = G__44350;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__44351){
var content = cljs.core.first(arglist__44351);
arglist__44351 = cljs.core.next(arglist__44351);
var name = cljs.core.first(arglist__44351);
var value = cljs.core.rest(arglist__44351);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__44356_44360 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44357_44361 = null;var count__44358_44362 = (0);var i__44359_44363 = (0);while(true){
if((i__44359_44363 < count__44358_44362))
{var n_44364 = cljs.core._nth.call(null,chunk__44357_44361,i__44359_44363);n_44364.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__44365 = seq__44356_44360;
var G__44366 = chunk__44357_44361;
var G__44367 = count__44358_44362;
var G__44368 = (i__44359_44363 + (1));
seq__44356_44360 = G__44365;
chunk__44357_44361 = G__44366;
count__44358_44362 = G__44367;
i__44359_44363 = G__44368;
continue;
}
} else
{var temp__4126__auto___44369 = cljs.core.seq.call(null,seq__44356_44360);if(temp__4126__auto___44369)
{var seq__44356_44370__$1 = temp__4126__auto___44369;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44356_44370__$1))
{var c__4410__auto___44371 = cljs.core.chunk_first.call(null,seq__44356_44370__$1);{
var G__44372 = cljs.core.chunk_rest.call(null,seq__44356_44370__$1);
var G__44373 = c__4410__auto___44371;
var G__44374 = cljs.core.count.call(null,c__4410__auto___44371);
var G__44375 = (0);
seq__44356_44360 = G__44372;
chunk__44357_44361 = G__44373;
count__44358_44362 = G__44374;
i__44359_44363 = G__44375;
continue;
}
} else
{var n_44376 = cljs.core.first.call(null,seq__44356_44370__$1);n_44376.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__44377 = cljs.core.next.call(null,seq__44356_44370__$1);
var G__44378 = null;
var G__44379 = (0);
var G__44380 = (0);
seq__44356_44360 = G__44377;
chunk__44357_44361 = G__44378;
count__44358_44362 = G__44379;
i__44359_44363 = G__44380;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__44381){
var content = cljs.core.first(arglist__44381);
arglist__44381 = cljs.core.next(arglist__44381);
var name = cljs.core.first(arglist__44381);
var value = cljs.core.rest(arglist__44381);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__44386_44390 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44387_44391 = null;var count__44388_44392 = (0);var i__44389_44393 = (0);while(true){
if((i__44389_44393 < count__44388_44392))
{var n_44394 = cljs.core._nth.call(null,chunk__44387_44391,i__44389_44393);n_44394.removeAttribute(cljs.core.name.call(null,name));
{
var G__44395 = seq__44386_44390;
var G__44396 = chunk__44387_44391;
var G__44397 = count__44388_44392;
var G__44398 = (i__44389_44393 + (1));
seq__44386_44390 = G__44395;
chunk__44387_44391 = G__44396;
count__44388_44392 = G__44397;
i__44389_44393 = G__44398;
continue;
}
} else
{var temp__4126__auto___44399 = cljs.core.seq.call(null,seq__44386_44390);if(temp__4126__auto___44399)
{var seq__44386_44400__$1 = temp__4126__auto___44399;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44386_44400__$1))
{var c__4410__auto___44401 = cljs.core.chunk_first.call(null,seq__44386_44400__$1);{
var G__44402 = cljs.core.chunk_rest.call(null,seq__44386_44400__$1);
var G__44403 = c__4410__auto___44401;
var G__44404 = cljs.core.count.call(null,c__4410__auto___44401);
var G__44405 = (0);
seq__44386_44390 = G__44402;
chunk__44387_44391 = G__44403;
count__44388_44392 = G__44404;
i__44389_44393 = G__44405;
continue;
}
} else
{var n_44406 = cljs.core.first.call(null,seq__44386_44400__$1);n_44406.removeAttribute(cljs.core.name.call(null,name));
{
var G__44407 = cljs.core.next.call(null,seq__44386_44400__$1);
var G__44408 = null;
var G__44409 = (0);
var G__44410 = (0);
seq__44386_44390 = G__44407;
chunk__44387_44391 = G__44408;
count__44388_44392 = G__44409;
i__44389_44393 = G__44410;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__44412 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__44412,(0),null);var v = cljs.core.nth.call(null,vec__44412,(1),null);if(cljs.core.truth_((function (){var and__3628__auto__ = k;if(cljs.core.truth_(and__3628__auto__))
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
return (function (p1__44413_SHARP_){var attr = attrs__$1.item(p1__44413_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__44420_44426 = cljs.core.seq.call(null,styles);var chunk__44421_44427 = null;var count__44422_44428 = (0);var i__44423_44429 = (0);while(true){
if((i__44423_44429 < count__44422_44428))
{var vec__44424_44430 = cljs.core._nth.call(null,chunk__44421_44427,i__44423_44429);var name_44431 = cljs.core.nth.call(null,vec__44424_44430,(0),null);var value_44432 = cljs.core.nth.call(null,vec__44424_44430,(1),null);domina.set_style_BANG_.call(null,content,name_44431,value_44432);
{
var G__44433 = seq__44420_44426;
var G__44434 = chunk__44421_44427;
var G__44435 = count__44422_44428;
var G__44436 = (i__44423_44429 + (1));
seq__44420_44426 = G__44433;
chunk__44421_44427 = G__44434;
count__44422_44428 = G__44435;
i__44423_44429 = G__44436;
continue;
}
} else
{var temp__4126__auto___44437 = cljs.core.seq.call(null,seq__44420_44426);if(temp__4126__auto___44437)
{var seq__44420_44438__$1 = temp__4126__auto___44437;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44420_44438__$1))
{var c__4410__auto___44439 = cljs.core.chunk_first.call(null,seq__44420_44438__$1);{
var G__44440 = cljs.core.chunk_rest.call(null,seq__44420_44438__$1);
var G__44441 = c__4410__auto___44439;
var G__44442 = cljs.core.count.call(null,c__4410__auto___44439);
var G__44443 = (0);
seq__44420_44426 = G__44440;
chunk__44421_44427 = G__44441;
count__44422_44428 = G__44442;
i__44423_44429 = G__44443;
continue;
}
} else
{var vec__44425_44444 = cljs.core.first.call(null,seq__44420_44438__$1);var name_44445 = cljs.core.nth.call(null,vec__44425_44444,(0),null);var value_44446 = cljs.core.nth.call(null,vec__44425_44444,(1),null);domina.set_style_BANG_.call(null,content,name_44445,value_44446);
{
var G__44447 = cljs.core.next.call(null,seq__44420_44438__$1);
var G__44448 = null;
var G__44449 = (0);
var G__44450 = (0);
seq__44420_44426 = G__44447;
chunk__44421_44427 = G__44448;
count__44422_44428 = G__44449;
i__44423_44429 = G__44450;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__44457_44463 = cljs.core.seq.call(null,attrs);var chunk__44458_44464 = null;var count__44459_44465 = (0);var i__44460_44466 = (0);while(true){
if((i__44460_44466 < count__44459_44465))
{var vec__44461_44467 = cljs.core._nth.call(null,chunk__44458_44464,i__44460_44466);var name_44468 = cljs.core.nth.call(null,vec__44461_44467,(0),null);var value_44469 = cljs.core.nth.call(null,vec__44461_44467,(1),null);domina.set_attr_BANG_.call(null,content,name_44468,value_44469);
{
var G__44470 = seq__44457_44463;
var G__44471 = chunk__44458_44464;
var G__44472 = count__44459_44465;
var G__44473 = (i__44460_44466 + (1));
seq__44457_44463 = G__44470;
chunk__44458_44464 = G__44471;
count__44459_44465 = G__44472;
i__44460_44466 = G__44473;
continue;
}
} else
{var temp__4126__auto___44474 = cljs.core.seq.call(null,seq__44457_44463);if(temp__4126__auto___44474)
{var seq__44457_44475__$1 = temp__4126__auto___44474;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44457_44475__$1))
{var c__4410__auto___44476 = cljs.core.chunk_first.call(null,seq__44457_44475__$1);{
var G__44477 = cljs.core.chunk_rest.call(null,seq__44457_44475__$1);
var G__44478 = c__4410__auto___44476;
var G__44479 = cljs.core.count.call(null,c__4410__auto___44476);
var G__44480 = (0);
seq__44457_44463 = G__44477;
chunk__44458_44464 = G__44478;
count__44459_44465 = G__44479;
i__44460_44466 = G__44480;
continue;
}
} else
{var vec__44462_44481 = cljs.core.first.call(null,seq__44457_44475__$1);var name_44482 = cljs.core.nth.call(null,vec__44462_44481,(0),null);var value_44483 = cljs.core.nth.call(null,vec__44462_44481,(1),null);domina.set_attr_BANG_.call(null,content,name_44482,value_44483);
{
var G__44484 = cljs.core.next.call(null,seq__44457_44475__$1);
var G__44485 = null;
var G__44486 = (0);
var G__44487 = (0);
seq__44457_44463 = G__44484;
chunk__44458_44464 = G__44485;
count__44459_44465 = G__44486;
i__44460_44466 = G__44487;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__44492_44496 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44493_44497 = null;var count__44494_44498 = (0);var i__44495_44499 = (0);while(true){
if((i__44495_44499 < count__44494_44498))
{var node_44500 = cljs.core._nth.call(null,chunk__44493_44497,i__44495_44499);goog.dom.classes.add(node_44500,class$);
{
var G__44501 = seq__44492_44496;
var G__44502 = chunk__44493_44497;
var G__44503 = count__44494_44498;
var G__44504 = (i__44495_44499 + (1));
seq__44492_44496 = G__44501;
chunk__44493_44497 = G__44502;
count__44494_44498 = G__44503;
i__44495_44499 = G__44504;
continue;
}
} else
{var temp__4126__auto___44505 = cljs.core.seq.call(null,seq__44492_44496);if(temp__4126__auto___44505)
{var seq__44492_44506__$1 = temp__4126__auto___44505;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44492_44506__$1))
{var c__4410__auto___44507 = cljs.core.chunk_first.call(null,seq__44492_44506__$1);{
var G__44508 = cljs.core.chunk_rest.call(null,seq__44492_44506__$1);
var G__44509 = c__4410__auto___44507;
var G__44510 = cljs.core.count.call(null,c__4410__auto___44507);
var G__44511 = (0);
seq__44492_44496 = G__44508;
chunk__44493_44497 = G__44509;
count__44494_44498 = G__44510;
i__44495_44499 = G__44511;
continue;
}
} else
{var node_44512 = cljs.core.first.call(null,seq__44492_44506__$1);goog.dom.classes.add(node_44512,class$);
{
var G__44513 = cljs.core.next.call(null,seq__44492_44506__$1);
var G__44514 = null;
var G__44515 = (0);
var G__44516 = (0);
seq__44492_44496 = G__44513;
chunk__44493_44497 = G__44514;
count__44494_44498 = G__44515;
i__44495_44499 = G__44516;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__44521_44525 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44522_44526 = null;var count__44523_44527 = (0);var i__44524_44528 = (0);while(true){
if((i__44524_44528 < count__44523_44527))
{var node_44529 = cljs.core._nth.call(null,chunk__44522_44526,i__44524_44528);goog.dom.classes.remove(node_44529,class$);
{
var G__44530 = seq__44521_44525;
var G__44531 = chunk__44522_44526;
var G__44532 = count__44523_44527;
var G__44533 = (i__44524_44528 + (1));
seq__44521_44525 = G__44530;
chunk__44522_44526 = G__44531;
count__44523_44527 = G__44532;
i__44524_44528 = G__44533;
continue;
}
} else
{var temp__4126__auto___44534 = cljs.core.seq.call(null,seq__44521_44525);if(temp__4126__auto___44534)
{var seq__44521_44535__$1 = temp__4126__auto___44534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44521_44535__$1))
{var c__4410__auto___44536 = cljs.core.chunk_first.call(null,seq__44521_44535__$1);{
var G__44537 = cljs.core.chunk_rest.call(null,seq__44521_44535__$1);
var G__44538 = c__4410__auto___44536;
var G__44539 = cljs.core.count.call(null,c__4410__auto___44536);
var G__44540 = (0);
seq__44521_44525 = G__44537;
chunk__44522_44526 = G__44538;
count__44523_44527 = G__44539;
i__44524_44528 = G__44540;
continue;
}
} else
{var node_44541 = cljs.core.first.call(null,seq__44521_44535__$1);goog.dom.classes.remove(node_44541,class$);
{
var G__44542 = cljs.core.next.call(null,seq__44521_44535__$1);
var G__44543 = null;
var G__44544 = (0);
var G__44545 = (0);
seq__44521_44525 = G__44542;
chunk__44522_44526 = G__44543;
count__44523_44527 = G__44544;
i__44524_44528 = G__44545;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__44550_44554 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44551_44555 = null;var count__44552_44556 = (0);var i__44553_44557 = (0);while(true){
if((i__44553_44557 < count__44552_44556))
{var node_44558 = cljs.core._nth.call(null,chunk__44551_44555,i__44553_44557);goog.dom.classes.toggle(node_44558,class$);
{
var G__44559 = seq__44550_44554;
var G__44560 = chunk__44551_44555;
var G__44561 = count__44552_44556;
var G__44562 = (i__44553_44557 + (1));
seq__44550_44554 = G__44559;
chunk__44551_44555 = G__44560;
count__44552_44556 = G__44561;
i__44553_44557 = G__44562;
continue;
}
} else
{var temp__4126__auto___44563 = cljs.core.seq.call(null,seq__44550_44554);if(temp__4126__auto___44563)
{var seq__44550_44564__$1 = temp__4126__auto___44563;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44550_44564__$1))
{var c__4410__auto___44565 = cljs.core.chunk_first.call(null,seq__44550_44564__$1);{
var G__44566 = cljs.core.chunk_rest.call(null,seq__44550_44564__$1);
var G__44567 = c__4410__auto___44565;
var G__44568 = cljs.core.count.call(null,c__4410__auto___44565);
var G__44569 = (0);
seq__44550_44554 = G__44566;
chunk__44551_44555 = G__44567;
count__44552_44556 = G__44568;
i__44553_44557 = G__44569;
continue;
}
} else
{var node_44570 = cljs.core.first.call(null,seq__44550_44564__$1);goog.dom.classes.toggle(node_44570,class$);
{
var G__44571 = cljs.core.next.call(null,seq__44550_44564__$1);
var G__44572 = null;
var G__44573 = (0);
var G__44574 = (0);
seq__44550_44554 = G__44571;
chunk__44551_44555 = G__44572;
count__44552_44556 = G__44573;
i__44553_44557 = G__44574;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_44583__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__44579_44584 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44580_44585 = null;var count__44581_44586 = (0);var i__44582_44587 = (0);while(true){
if((i__44582_44587 < count__44581_44586))
{var node_44588 = cljs.core._nth.call(null,chunk__44580_44585,i__44582_44587);goog.dom.classes.set(node_44588,classes_44583__$1);
{
var G__44589 = seq__44579_44584;
var G__44590 = chunk__44580_44585;
var G__44591 = count__44581_44586;
var G__44592 = (i__44582_44587 + (1));
seq__44579_44584 = G__44589;
chunk__44580_44585 = G__44590;
count__44581_44586 = G__44591;
i__44582_44587 = G__44592;
continue;
}
} else
{var temp__4126__auto___44593 = cljs.core.seq.call(null,seq__44579_44584);if(temp__4126__auto___44593)
{var seq__44579_44594__$1 = temp__4126__auto___44593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44579_44594__$1))
{var c__4410__auto___44595 = cljs.core.chunk_first.call(null,seq__44579_44594__$1);{
var G__44596 = cljs.core.chunk_rest.call(null,seq__44579_44594__$1);
var G__44597 = c__4410__auto___44595;
var G__44598 = cljs.core.count.call(null,c__4410__auto___44595);
var G__44599 = (0);
seq__44579_44584 = G__44596;
chunk__44580_44585 = G__44597;
count__44581_44586 = G__44598;
i__44582_44587 = G__44599;
continue;
}
} else
{var node_44600 = cljs.core.first.call(null,seq__44579_44594__$1);goog.dom.classes.set(node_44600,classes_44583__$1);
{
var G__44601 = cljs.core.next.call(null,seq__44579_44594__$1);
var G__44602 = null;
var G__44603 = (0);
var G__44604 = (0);
seq__44579_44584 = G__44601;
chunk__44580_44585 = G__44602;
count__44581_44586 = G__44603;
i__44582_44587 = G__44604;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__44609_44613 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44610_44614 = null;var count__44611_44615 = (0);var i__44612_44616 = (0);while(true){
if((i__44612_44616 < count__44611_44615))
{var node_44617 = cljs.core._nth.call(null,chunk__44610_44614,i__44612_44616);goog.dom.setTextContent(node_44617,value);
{
var G__44618 = seq__44609_44613;
var G__44619 = chunk__44610_44614;
var G__44620 = count__44611_44615;
var G__44621 = (i__44612_44616 + (1));
seq__44609_44613 = G__44618;
chunk__44610_44614 = G__44619;
count__44611_44615 = G__44620;
i__44612_44616 = G__44621;
continue;
}
} else
{var temp__4126__auto___44622 = cljs.core.seq.call(null,seq__44609_44613);if(temp__4126__auto___44622)
{var seq__44609_44623__$1 = temp__4126__auto___44622;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44609_44623__$1))
{var c__4410__auto___44624 = cljs.core.chunk_first.call(null,seq__44609_44623__$1);{
var G__44625 = cljs.core.chunk_rest.call(null,seq__44609_44623__$1);
var G__44626 = c__4410__auto___44624;
var G__44627 = cljs.core.count.call(null,c__4410__auto___44624);
var G__44628 = (0);
seq__44609_44613 = G__44625;
chunk__44610_44614 = G__44626;
count__44611_44615 = G__44627;
i__44612_44616 = G__44628;
continue;
}
} else
{var node_44629 = cljs.core.first.call(null,seq__44609_44623__$1);goog.dom.setTextContent(node_44629,value);
{
var G__44630 = cljs.core.next.call(null,seq__44609_44623__$1);
var G__44631 = null;
var G__44632 = (0);
var G__44633 = (0);
seq__44609_44613 = G__44630;
chunk__44610_44614 = G__44631;
count__44611_44615 = G__44632;
i__44612_44616 = G__44633;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__44638_44642 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44639_44643 = null;var count__44640_44644 = (0);var i__44641_44645 = (0);while(true){
if((i__44641_44645 < count__44640_44644))
{var node_44646 = cljs.core._nth.call(null,chunk__44639_44643,i__44641_44645);goog.dom.forms.setValue(node_44646,value);
{
var G__44647 = seq__44638_44642;
var G__44648 = chunk__44639_44643;
var G__44649 = count__44640_44644;
var G__44650 = (i__44641_44645 + (1));
seq__44638_44642 = G__44647;
chunk__44639_44643 = G__44648;
count__44640_44644 = G__44649;
i__44641_44645 = G__44650;
continue;
}
} else
{var temp__4126__auto___44651 = cljs.core.seq.call(null,seq__44638_44642);if(temp__4126__auto___44651)
{var seq__44638_44652__$1 = temp__4126__auto___44651;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44638_44652__$1))
{var c__4410__auto___44653 = cljs.core.chunk_first.call(null,seq__44638_44652__$1);{
var G__44654 = cljs.core.chunk_rest.call(null,seq__44638_44652__$1);
var G__44655 = c__4410__auto___44653;
var G__44656 = cljs.core.count.call(null,c__4410__auto___44653);
var G__44657 = (0);
seq__44638_44642 = G__44654;
chunk__44639_44643 = G__44655;
count__44640_44644 = G__44656;
i__44641_44645 = G__44657;
continue;
}
} else
{var node_44658 = cljs.core.first.call(null,seq__44638_44652__$1);goog.dom.forms.setValue(node_44658,value);
{
var G__44659 = cljs.core.next.call(null,seq__44638_44652__$1);
var G__44660 = null;
var G__44661 = (0);
var G__44662 = (0);
seq__44638_44642 = G__44659;
chunk__44639_44643 = G__44660;
count__44640_44644 = G__44661;
i__44641_44645 = G__44662;
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
{var value_44673 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__44669_44674 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44670_44675 = null;var count__44671_44676 = (0);var i__44672_44677 = (0);while(true){
if((i__44672_44677 < count__44671_44676))
{var node_44678 = cljs.core._nth.call(null,chunk__44670_44675,i__44672_44677);node_44678.innerHTML = value_44673;
{
var G__44679 = seq__44669_44674;
var G__44680 = chunk__44670_44675;
var G__44681 = count__44671_44676;
var G__44682 = (i__44672_44677 + (1));
seq__44669_44674 = G__44679;
chunk__44670_44675 = G__44680;
count__44671_44676 = G__44681;
i__44672_44677 = G__44682;
continue;
}
} else
{var temp__4126__auto___44683 = cljs.core.seq.call(null,seq__44669_44674);if(temp__4126__auto___44683)
{var seq__44669_44684__$1 = temp__4126__auto___44683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44669_44684__$1))
{var c__4410__auto___44685 = cljs.core.chunk_first.call(null,seq__44669_44684__$1);{
var G__44686 = cljs.core.chunk_rest.call(null,seq__44669_44684__$1);
var G__44687 = c__4410__auto___44685;
var G__44688 = cljs.core.count.call(null,c__4410__auto___44685);
var G__44689 = (0);
seq__44669_44674 = G__44686;
chunk__44670_44675 = G__44687;
count__44671_44676 = G__44688;
i__44672_44677 = G__44689;
continue;
}
} else
{var node_44690 = cljs.core.first.call(null,seq__44669_44684__$1);node_44690.innerHTML = value_44673;
{
var G__44691 = cljs.core.next.call(null,seq__44669_44684__$1);
var G__44692 = null;
var G__44693 = (0);
var G__44694 = (0);
seq__44669_44674 = G__44691;
chunk__44670_44675 = G__44692;
count__44671_44676 = G__44693;
i__44672_44677 = G__44694;
continue;
}
}
} else
{}
}
break;
}
}catch (e44668){if((e44668 instanceof Error))
{var e_44695 = e44668;domina.replace_children_BANG_.call(null,content,value_44673);
} else
{throw e44668;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__44702_44706 = cljs.core.seq.call(null,children);var chunk__44703_44707 = null;var count__44704_44708 = (0);var i__44705_44709 = (0);while(true){
if((i__44705_44709 < count__44704_44708))
{var child_44710 = cljs.core._nth.call(null,chunk__44703_44707,i__44705_44709);frag.appendChild(child_44710);
{
var G__44711 = seq__44702_44706;
var G__44712 = chunk__44703_44707;
var G__44713 = count__44704_44708;
var G__44714 = (i__44705_44709 + (1));
seq__44702_44706 = G__44711;
chunk__44703_44707 = G__44712;
count__44704_44708 = G__44713;
i__44705_44709 = G__44714;
continue;
}
} else
{var temp__4126__auto___44715 = cljs.core.seq.call(null,seq__44702_44706);if(temp__4126__auto___44715)
{var seq__44702_44716__$1 = temp__4126__auto___44715;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44702_44716__$1))
{var c__4410__auto___44717 = cljs.core.chunk_first.call(null,seq__44702_44716__$1);{
var G__44718 = cljs.core.chunk_rest.call(null,seq__44702_44716__$1);
var G__44719 = c__4410__auto___44717;
var G__44720 = cljs.core.count.call(null,c__4410__auto___44717);
var G__44721 = (0);
seq__44702_44706 = G__44718;
chunk__44703_44707 = G__44719;
count__44704_44708 = G__44720;
i__44705_44709 = G__44721;
continue;
}
} else
{var child_44722 = cljs.core.first.call(null,seq__44702_44716__$1);frag.appendChild(child_44722);
{
var G__44723 = cljs.core.next.call(null,seq__44702_44716__$1);
var G__44724 = null;
var G__44725 = (0);
var G__44726 = (0);
seq__44702_44706 = G__44723;
chunk__44703_44707 = G__44724;
count__44704_44708 = G__44725;
i__44705_44709 = G__44726;
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
return (function (p1__44696_SHARP_,p2__44697_SHARP_){return f.call(null,p1__44696_SHARP_,p2__44697_SHARP_);
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
{if((function (){var G__44728 = list_thing;if(G__44728)
{var bit__4304__auto__ = (G__44728.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__44728.cljs$core$ISeqable$))
{return true;
} else
{if((!G__44728.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__44728);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__44728);
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
{if((function (){var G__44729 = content;if(G__44729)
{var bit__4304__auto__ = (G__44729.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__44729.cljs$core$ISeqable$))
{return true;
} else
{if((!G__44729.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__44729);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__44729);
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
{if((function (){var G__44730 = content;if(G__44730)
{var bit__4304__auto__ = (G__44730.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__44730.cljs$core$ISeqable$))
{return true;
} else
{if((!G__44730.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__44730);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__44730);
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
