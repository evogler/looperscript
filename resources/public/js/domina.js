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
var opt_wrapper_33758 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_33759 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_33760 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_33760,opt_wrapper_33758,table_section_wrapper_33759,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_33758,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_33759,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_33759,cell_wrapper_33760,table_section_wrapper_33759,table_section_wrapper_33759]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3628__auto__ = div.firstChild;if(cljs.core.truth_(and__3628__auto__))
{return div.firstChild.childNodes;
} else
{return and__3628__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__33765 = cljs.core.seq.call(null,tbody);var chunk__33766 = null;var count__33767 = (0);var i__33768 = (0);while(true){
if((i__33768 < count__33767))
{var child = cljs.core._nth.call(null,chunk__33766,i__33768);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__33769 = seq__33765;
var G__33770 = chunk__33766;
var G__33771 = count__33767;
var G__33772 = (i__33768 + (1));
seq__33765 = G__33769;
chunk__33766 = G__33770;
count__33767 = G__33771;
i__33768 = G__33772;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33765);if(temp__4126__auto__)
{var seq__33765__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33765__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__33765__$1);{
var G__33773 = cljs.core.chunk_rest.call(null,seq__33765__$1);
var G__33774 = c__4410__auto__;
var G__33775 = cljs.core.count.call(null,c__4410__auto__);
var G__33776 = (0);
seq__33765 = G__33773;
chunk__33766 = G__33774;
count__33767 = G__33775;
i__33768 = G__33776;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__33765__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__33777 = cljs.core.next.call(null,seq__33765__$1);
var G__33778 = null;
var G__33779 = (0);
var G__33780 = (0);
seq__33765 = G__33777;
chunk__33766 = G__33778;
count__33767 = G__33779;
i__33768 = G__33780;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__33782 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__33782,(0),null);var start_wrap = cljs.core.nth.call(null,vec__33782,(1),null);var end_wrap = cljs.core.nth.call(null,vec__33782,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__33783 = wrapper.lastChild;
var G__33784 = (level - (1));
wrapper = G__33783;
level = G__33784;
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
domina.DomContent = (function (){var obj33786 = {};return obj33786;
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
log_debug.cljs$lang$applyTo = (function (arglist__33787){
var mesg = cljs.core.seq(arglist__33787);
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
log.cljs$lang$applyTo = (function (arglist__33788){
var mesg = cljs.core.seq(arglist__33788);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__33789){
var contents = cljs.core.seq(arglist__33789);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__33790_SHARP_){return p1__33790_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__33791_SHARP_,p2__33792_SHARP_){return goog.dom.insertChildAt(p1__33791_SHARP_,p2__33792_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__33794_SHARP_,p2__33793_SHARP_){return goog.dom.insertSiblingBefore(p2__33793_SHARP_,p1__33794_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__33796_SHARP_,p2__33795_SHARP_){return goog.dom.insertSiblingAfter(p2__33795_SHARP_,p1__33796_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__33798_SHARP_,p2__33797_SHARP_){return goog.dom.replaceNode(p2__33797_SHARP_,p1__33798_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__33803_33807 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33804_33808 = null;var count__33805_33809 = (0);var i__33806_33810 = (0);while(true){
if((i__33806_33810 < count__33805_33809))
{var n_33811 = cljs.core._nth.call(null,chunk__33804_33808,i__33806_33810);goog.style.setStyle(n_33811,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33812 = seq__33803_33807;
var G__33813 = chunk__33804_33808;
var G__33814 = count__33805_33809;
var G__33815 = (i__33806_33810 + (1));
seq__33803_33807 = G__33812;
chunk__33804_33808 = G__33813;
count__33805_33809 = G__33814;
i__33806_33810 = G__33815;
continue;
}
} else
{var temp__4126__auto___33816 = cljs.core.seq.call(null,seq__33803_33807);if(temp__4126__auto___33816)
{var seq__33803_33817__$1 = temp__4126__auto___33816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33803_33817__$1))
{var c__4410__auto___33818 = cljs.core.chunk_first.call(null,seq__33803_33817__$1);{
var G__33819 = cljs.core.chunk_rest.call(null,seq__33803_33817__$1);
var G__33820 = c__4410__auto___33818;
var G__33821 = cljs.core.count.call(null,c__4410__auto___33818);
var G__33822 = (0);
seq__33803_33807 = G__33819;
chunk__33804_33808 = G__33820;
count__33805_33809 = G__33821;
i__33806_33810 = G__33822;
continue;
}
} else
{var n_33823 = cljs.core.first.call(null,seq__33803_33817__$1);goog.style.setStyle(n_33823,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33824 = cljs.core.next.call(null,seq__33803_33817__$1);
var G__33825 = null;
var G__33826 = (0);
var G__33827 = (0);
seq__33803_33807 = G__33824;
chunk__33804_33808 = G__33825;
count__33805_33809 = G__33826;
i__33806_33810 = G__33827;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__33828){
var content = cljs.core.first(arglist__33828);
arglist__33828 = cljs.core.next(arglist__33828);
var name = cljs.core.first(arglist__33828);
var value = cljs.core.rest(arglist__33828);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__33833_33837 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33834_33838 = null;var count__33835_33839 = (0);var i__33836_33840 = (0);while(true){
if((i__33836_33840 < count__33835_33839))
{var n_33841 = cljs.core._nth.call(null,chunk__33834_33838,i__33836_33840);n_33841.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33842 = seq__33833_33837;
var G__33843 = chunk__33834_33838;
var G__33844 = count__33835_33839;
var G__33845 = (i__33836_33840 + (1));
seq__33833_33837 = G__33842;
chunk__33834_33838 = G__33843;
count__33835_33839 = G__33844;
i__33836_33840 = G__33845;
continue;
}
} else
{var temp__4126__auto___33846 = cljs.core.seq.call(null,seq__33833_33837);if(temp__4126__auto___33846)
{var seq__33833_33847__$1 = temp__4126__auto___33846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33833_33847__$1))
{var c__4410__auto___33848 = cljs.core.chunk_first.call(null,seq__33833_33847__$1);{
var G__33849 = cljs.core.chunk_rest.call(null,seq__33833_33847__$1);
var G__33850 = c__4410__auto___33848;
var G__33851 = cljs.core.count.call(null,c__4410__auto___33848);
var G__33852 = (0);
seq__33833_33837 = G__33849;
chunk__33834_33838 = G__33850;
count__33835_33839 = G__33851;
i__33836_33840 = G__33852;
continue;
}
} else
{var n_33853 = cljs.core.first.call(null,seq__33833_33847__$1);n_33853.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33854 = cljs.core.next.call(null,seq__33833_33847__$1);
var G__33855 = null;
var G__33856 = (0);
var G__33857 = (0);
seq__33833_33837 = G__33854;
chunk__33834_33838 = G__33855;
count__33835_33839 = G__33856;
i__33836_33840 = G__33857;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__33858){
var content = cljs.core.first(arglist__33858);
arglist__33858 = cljs.core.next(arglist__33858);
var name = cljs.core.first(arglist__33858);
var value = cljs.core.rest(arglist__33858);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__33863_33867 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33864_33868 = null;var count__33865_33869 = (0);var i__33866_33870 = (0);while(true){
if((i__33866_33870 < count__33865_33869))
{var n_33871 = cljs.core._nth.call(null,chunk__33864_33868,i__33866_33870);n_33871.removeAttribute(cljs.core.name.call(null,name));
{
var G__33872 = seq__33863_33867;
var G__33873 = chunk__33864_33868;
var G__33874 = count__33865_33869;
var G__33875 = (i__33866_33870 + (1));
seq__33863_33867 = G__33872;
chunk__33864_33868 = G__33873;
count__33865_33869 = G__33874;
i__33866_33870 = G__33875;
continue;
}
} else
{var temp__4126__auto___33876 = cljs.core.seq.call(null,seq__33863_33867);if(temp__4126__auto___33876)
{var seq__33863_33877__$1 = temp__4126__auto___33876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33863_33877__$1))
{var c__4410__auto___33878 = cljs.core.chunk_first.call(null,seq__33863_33877__$1);{
var G__33879 = cljs.core.chunk_rest.call(null,seq__33863_33877__$1);
var G__33880 = c__4410__auto___33878;
var G__33881 = cljs.core.count.call(null,c__4410__auto___33878);
var G__33882 = (0);
seq__33863_33867 = G__33879;
chunk__33864_33868 = G__33880;
count__33865_33869 = G__33881;
i__33866_33870 = G__33882;
continue;
}
} else
{var n_33883 = cljs.core.first.call(null,seq__33863_33877__$1);n_33883.removeAttribute(cljs.core.name.call(null,name));
{
var G__33884 = cljs.core.next.call(null,seq__33863_33877__$1);
var G__33885 = null;
var G__33886 = (0);
var G__33887 = (0);
seq__33863_33867 = G__33884;
chunk__33864_33868 = G__33885;
count__33865_33869 = G__33886;
i__33866_33870 = G__33887;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__33889 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__33889,(0),null);var v = cljs.core.nth.call(null,vec__33889,(1),null);if(cljs.core.truth_((function (){var and__3628__auto__ = k;if(cljs.core.truth_(and__3628__auto__))
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
return (function (p1__33890_SHARP_){var attr = attrs__$1.item(p1__33890_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__33897_33903 = cljs.core.seq.call(null,styles);var chunk__33898_33904 = null;var count__33899_33905 = (0);var i__33900_33906 = (0);while(true){
if((i__33900_33906 < count__33899_33905))
{var vec__33901_33907 = cljs.core._nth.call(null,chunk__33898_33904,i__33900_33906);var name_33908 = cljs.core.nth.call(null,vec__33901_33907,(0),null);var value_33909 = cljs.core.nth.call(null,vec__33901_33907,(1),null);domina.set_style_BANG_.call(null,content,name_33908,value_33909);
{
var G__33910 = seq__33897_33903;
var G__33911 = chunk__33898_33904;
var G__33912 = count__33899_33905;
var G__33913 = (i__33900_33906 + (1));
seq__33897_33903 = G__33910;
chunk__33898_33904 = G__33911;
count__33899_33905 = G__33912;
i__33900_33906 = G__33913;
continue;
}
} else
{var temp__4126__auto___33914 = cljs.core.seq.call(null,seq__33897_33903);if(temp__4126__auto___33914)
{var seq__33897_33915__$1 = temp__4126__auto___33914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33897_33915__$1))
{var c__4410__auto___33916 = cljs.core.chunk_first.call(null,seq__33897_33915__$1);{
var G__33917 = cljs.core.chunk_rest.call(null,seq__33897_33915__$1);
var G__33918 = c__4410__auto___33916;
var G__33919 = cljs.core.count.call(null,c__4410__auto___33916);
var G__33920 = (0);
seq__33897_33903 = G__33917;
chunk__33898_33904 = G__33918;
count__33899_33905 = G__33919;
i__33900_33906 = G__33920;
continue;
}
} else
{var vec__33902_33921 = cljs.core.first.call(null,seq__33897_33915__$1);var name_33922 = cljs.core.nth.call(null,vec__33902_33921,(0),null);var value_33923 = cljs.core.nth.call(null,vec__33902_33921,(1),null);domina.set_style_BANG_.call(null,content,name_33922,value_33923);
{
var G__33924 = cljs.core.next.call(null,seq__33897_33915__$1);
var G__33925 = null;
var G__33926 = (0);
var G__33927 = (0);
seq__33897_33903 = G__33924;
chunk__33898_33904 = G__33925;
count__33899_33905 = G__33926;
i__33900_33906 = G__33927;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__33934_33940 = cljs.core.seq.call(null,attrs);var chunk__33935_33941 = null;var count__33936_33942 = (0);var i__33937_33943 = (0);while(true){
if((i__33937_33943 < count__33936_33942))
{var vec__33938_33944 = cljs.core._nth.call(null,chunk__33935_33941,i__33937_33943);var name_33945 = cljs.core.nth.call(null,vec__33938_33944,(0),null);var value_33946 = cljs.core.nth.call(null,vec__33938_33944,(1),null);domina.set_attr_BANG_.call(null,content,name_33945,value_33946);
{
var G__33947 = seq__33934_33940;
var G__33948 = chunk__33935_33941;
var G__33949 = count__33936_33942;
var G__33950 = (i__33937_33943 + (1));
seq__33934_33940 = G__33947;
chunk__33935_33941 = G__33948;
count__33936_33942 = G__33949;
i__33937_33943 = G__33950;
continue;
}
} else
{var temp__4126__auto___33951 = cljs.core.seq.call(null,seq__33934_33940);if(temp__4126__auto___33951)
{var seq__33934_33952__$1 = temp__4126__auto___33951;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33934_33952__$1))
{var c__4410__auto___33953 = cljs.core.chunk_first.call(null,seq__33934_33952__$1);{
var G__33954 = cljs.core.chunk_rest.call(null,seq__33934_33952__$1);
var G__33955 = c__4410__auto___33953;
var G__33956 = cljs.core.count.call(null,c__4410__auto___33953);
var G__33957 = (0);
seq__33934_33940 = G__33954;
chunk__33935_33941 = G__33955;
count__33936_33942 = G__33956;
i__33937_33943 = G__33957;
continue;
}
} else
{var vec__33939_33958 = cljs.core.first.call(null,seq__33934_33952__$1);var name_33959 = cljs.core.nth.call(null,vec__33939_33958,(0),null);var value_33960 = cljs.core.nth.call(null,vec__33939_33958,(1),null);domina.set_attr_BANG_.call(null,content,name_33959,value_33960);
{
var G__33961 = cljs.core.next.call(null,seq__33934_33952__$1);
var G__33962 = null;
var G__33963 = (0);
var G__33964 = (0);
seq__33934_33940 = G__33961;
chunk__33935_33941 = G__33962;
count__33936_33942 = G__33963;
i__33937_33943 = G__33964;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__33969_33973 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33970_33974 = null;var count__33971_33975 = (0);var i__33972_33976 = (0);while(true){
if((i__33972_33976 < count__33971_33975))
{var node_33977 = cljs.core._nth.call(null,chunk__33970_33974,i__33972_33976);goog.dom.classes.add(node_33977,class$);
{
var G__33978 = seq__33969_33973;
var G__33979 = chunk__33970_33974;
var G__33980 = count__33971_33975;
var G__33981 = (i__33972_33976 + (1));
seq__33969_33973 = G__33978;
chunk__33970_33974 = G__33979;
count__33971_33975 = G__33980;
i__33972_33976 = G__33981;
continue;
}
} else
{var temp__4126__auto___33982 = cljs.core.seq.call(null,seq__33969_33973);if(temp__4126__auto___33982)
{var seq__33969_33983__$1 = temp__4126__auto___33982;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33969_33983__$1))
{var c__4410__auto___33984 = cljs.core.chunk_first.call(null,seq__33969_33983__$1);{
var G__33985 = cljs.core.chunk_rest.call(null,seq__33969_33983__$1);
var G__33986 = c__4410__auto___33984;
var G__33987 = cljs.core.count.call(null,c__4410__auto___33984);
var G__33988 = (0);
seq__33969_33973 = G__33985;
chunk__33970_33974 = G__33986;
count__33971_33975 = G__33987;
i__33972_33976 = G__33988;
continue;
}
} else
{var node_33989 = cljs.core.first.call(null,seq__33969_33983__$1);goog.dom.classes.add(node_33989,class$);
{
var G__33990 = cljs.core.next.call(null,seq__33969_33983__$1);
var G__33991 = null;
var G__33992 = (0);
var G__33993 = (0);
seq__33969_33973 = G__33990;
chunk__33970_33974 = G__33991;
count__33971_33975 = G__33992;
i__33972_33976 = G__33993;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__33998_34002 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33999_34003 = null;var count__34000_34004 = (0);var i__34001_34005 = (0);while(true){
if((i__34001_34005 < count__34000_34004))
{var node_34006 = cljs.core._nth.call(null,chunk__33999_34003,i__34001_34005);goog.dom.classes.remove(node_34006,class$);
{
var G__34007 = seq__33998_34002;
var G__34008 = chunk__33999_34003;
var G__34009 = count__34000_34004;
var G__34010 = (i__34001_34005 + (1));
seq__33998_34002 = G__34007;
chunk__33999_34003 = G__34008;
count__34000_34004 = G__34009;
i__34001_34005 = G__34010;
continue;
}
} else
{var temp__4126__auto___34011 = cljs.core.seq.call(null,seq__33998_34002);if(temp__4126__auto___34011)
{var seq__33998_34012__$1 = temp__4126__auto___34011;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33998_34012__$1))
{var c__4410__auto___34013 = cljs.core.chunk_first.call(null,seq__33998_34012__$1);{
var G__34014 = cljs.core.chunk_rest.call(null,seq__33998_34012__$1);
var G__34015 = c__4410__auto___34013;
var G__34016 = cljs.core.count.call(null,c__4410__auto___34013);
var G__34017 = (0);
seq__33998_34002 = G__34014;
chunk__33999_34003 = G__34015;
count__34000_34004 = G__34016;
i__34001_34005 = G__34017;
continue;
}
} else
{var node_34018 = cljs.core.first.call(null,seq__33998_34012__$1);goog.dom.classes.remove(node_34018,class$);
{
var G__34019 = cljs.core.next.call(null,seq__33998_34012__$1);
var G__34020 = null;
var G__34021 = (0);
var G__34022 = (0);
seq__33998_34002 = G__34019;
chunk__33999_34003 = G__34020;
count__34000_34004 = G__34021;
i__34001_34005 = G__34022;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__34027_34031 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34028_34032 = null;var count__34029_34033 = (0);var i__34030_34034 = (0);while(true){
if((i__34030_34034 < count__34029_34033))
{var node_34035 = cljs.core._nth.call(null,chunk__34028_34032,i__34030_34034);goog.dom.classes.toggle(node_34035,class$);
{
var G__34036 = seq__34027_34031;
var G__34037 = chunk__34028_34032;
var G__34038 = count__34029_34033;
var G__34039 = (i__34030_34034 + (1));
seq__34027_34031 = G__34036;
chunk__34028_34032 = G__34037;
count__34029_34033 = G__34038;
i__34030_34034 = G__34039;
continue;
}
} else
{var temp__4126__auto___34040 = cljs.core.seq.call(null,seq__34027_34031);if(temp__4126__auto___34040)
{var seq__34027_34041__$1 = temp__4126__auto___34040;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34027_34041__$1))
{var c__4410__auto___34042 = cljs.core.chunk_first.call(null,seq__34027_34041__$1);{
var G__34043 = cljs.core.chunk_rest.call(null,seq__34027_34041__$1);
var G__34044 = c__4410__auto___34042;
var G__34045 = cljs.core.count.call(null,c__4410__auto___34042);
var G__34046 = (0);
seq__34027_34031 = G__34043;
chunk__34028_34032 = G__34044;
count__34029_34033 = G__34045;
i__34030_34034 = G__34046;
continue;
}
} else
{var node_34047 = cljs.core.first.call(null,seq__34027_34041__$1);goog.dom.classes.toggle(node_34047,class$);
{
var G__34048 = cljs.core.next.call(null,seq__34027_34041__$1);
var G__34049 = null;
var G__34050 = (0);
var G__34051 = (0);
seq__34027_34031 = G__34048;
chunk__34028_34032 = G__34049;
count__34029_34033 = G__34050;
i__34030_34034 = G__34051;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_34060__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__34056_34061 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34057_34062 = null;var count__34058_34063 = (0);var i__34059_34064 = (0);while(true){
if((i__34059_34064 < count__34058_34063))
{var node_34065 = cljs.core._nth.call(null,chunk__34057_34062,i__34059_34064);goog.dom.classes.set(node_34065,classes_34060__$1);
{
var G__34066 = seq__34056_34061;
var G__34067 = chunk__34057_34062;
var G__34068 = count__34058_34063;
var G__34069 = (i__34059_34064 + (1));
seq__34056_34061 = G__34066;
chunk__34057_34062 = G__34067;
count__34058_34063 = G__34068;
i__34059_34064 = G__34069;
continue;
}
} else
{var temp__4126__auto___34070 = cljs.core.seq.call(null,seq__34056_34061);if(temp__4126__auto___34070)
{var seq__34056_34071__$1 = temp__4126__auto___34070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34056_34071__$1))
{var c__4410__auto___34072 = cljs.core.chunk_first.call(null,seq__34056_34071__$1);{
var G__34073 = cljs.core.chunk_rest.call(null,seq__34056_34071__$1);
var G__34074 = c__4410__auto___34072;
var G__34075 = cljs.core.count.call(null,c__4410__auto___34072);
var G__34076 = (0);
seq__34056_34061 = G__34073;
chunk__34057_34062 = G__34074;
count__34058_34063 = G__34075;
i__34059_34064 = G__34076;
continue;
}
} else
{var node_34077 = cljs.core.first.call(null,seq__34056_34071__$1);goog.dom.classes.set(node_34077,classes_34060__$1);
{
var G__34078 = cljs.core.next.call(null,seq__34056_34071__$1);
var G__34079 = null;
var G__34080 = (0);
var G__34081 = (0);
seq__34056_34061 = G__34078;
chunk__34057_34062 = G__34079;
count__34058_34063 = G__34080;
i__34059_34064 = G__34081;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__34086_34090 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34087_34091 = null;var count__34088_34092 = (0);var i__34089_34093 = (0);while(true){
if((i__34089_34093 < count__34088_34092))
{var node_34094 = cljs.core._nth.call(null,chunk__34087_34091,i__34089_34093);goog.dom.setTextContent(node_34094,value);
{
var G__34095 = seq__34086_34090;
var G__34096 = chunk__34087_34091;
var G__34097 = count__34088_34092;
var G__34098 = (i__34089_34093 + (1));
seq__34086_34090 = G__34095;
chunk__34087_34091 = G__34096;
count__34088_34092 = G__34097;
i__34089_34093 = G__34098;
continue;
}
} else
{var temp__4126__auto___34099 = cljs.core.seq.call(null,seq__34086_34090);if(temp__4126__auto___34099)
{var seq__34086_34100__$1 = temp__4126__auto___34099;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34086_34100__$1))
{var c__4410__auto___34101 = cljs.core.chunk_first.call(null,seq__34086_34100__$1);{
var G__34102 = cljs.core.chunk_rest.call(null,seq__34086_34100__$1);
var G__34103 = c__4410__auto___34101;
var G__34104 = cljs.core.count.call(null,c__4410__auto___34101);
var G__34105 = (0);
seq__34086_34090 = G__34102;
chunk__34087_34091 = G__34103;
count__34088_34092 = G__34104;
i__34089_34093 = G__34105;
continue;
}
} else
{var node_34106 = cljs.core.first.call(null,seq__34086_34100__$1);goog.dom.setTextContent(node_34106,value);
{
var G__34107 = cljs.core.next.call(null,seq__34086_34100__$1);
var G__34108 = null;
var G__34109 = (0);
var G__34110 = (0);
seq__34086_34090 = G__34107;
chunk__34087_34091 = G__34108;
count__34088_34092 = G__34109;
i__34089_34093 = G__34110;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__34115_34119 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34116_34120 = null;var count__34117_34121 = (0);var i__34118_34122 = (0);while(true){
if((i__34118_34122 < count__34117_34121))
{var node_34123 = cljs.core._nth.call(null,chunk__34116_34120,i__34118_34122);goog.dom.forms.setValue(node_34123,value);
{
var G__34124 = seq__34115_34119;
var G__34125 = chunk__34116_34120;
var G__34126 = count__34117_34121;
var G__34127 = (i__34118_34122 + (1));
seq__34115_34119 = G__34124;
chunk__34116_34120 = G__34125;
count__34117_34121 = G__34126;
i__34118_34122 = G__34127;
continue;
}
} else
{var temp__4126__auto___34128 = cljs.core.seq.call(null,seq__34115_34119);if(temp__4126__auto___34128)
{var seq__34115_34129__$1 = temp__4126__auto___34128;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34115_34129__$1))
{var c__4410__auto___34130 = cljs.core.chunk_first.call(null,seq__34115_34129__$1);{
var G__34131 = cljs.core.chunk_rest.call(null,seq__34115_34129__$1);
var G__34132 = c__4410__auto___34130;
var G__34133 = cljs.core.count.call(null,c__4410__auto___34130);
var G__34134 = (0);
seq__34115_34119 = G__34131;
chunk__34116_34120 = G__34132;
count__34117_34121 = G__34133;
i__34118_34122 = G__34134;
continue;
}
} else
{var node_34135 = cljs.core.first.call(null,seq__34115_34129__$1);goog.dom.forms.setValue(node_34135,value);
{
var G__34136 = cljs.core.next.call(null,seq__34115_34129__$1);
var G__34137 = null;
var G__34138 = (0);
var G__34139 = (0);
seq__34115_34119 = G__34136;
chunk__34116_34120 = G__34137;
count__34117_34121 = G__34138;
i__34118_34122 = G__34139;
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
{var value_34150 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__34146_34151 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34147_34152 = null;var count__34148_34153 = (0);var i__34149_34154 = (0);while(true){
if((i__34149_34154 < count__34148_34153))
{var node_34155 = cljs.core._nth.call(null,chunk__34147_34152,i__34149_34154);node_34155.innerHTML = value_34150;
{
var G__34156 = seq__34146_34151;
var G__34157 = chunk__34147_34152;
var G__34158 = count__34148_34153;
var G__34159 = (i__34149_34154 + (1));
seq__34146_34151 = G__34156;
chunk__34147_34152 = G__34157;
count__34148_34153 = G__34158;
i__34149_34154 = G__34159;
continue;
}
} else
{var temp__4126__auto___34160 = cljs.core.seq.call(null,seq__34146_34151);if(temp__4126__auto___34160)
{var seq__34146_34161__$1 = temp__4126__auto___34160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34146_34161__$1))
{var c__4410__auto___34162 = cljs.core.chunk_first.call(null,seq__34146_34161__$1);{
var G__34163 = cljs.core.chunk_rest.call(null,seq__34146_34161__$1);
var G__34164 = c__4410__auto___34162;
var G__34165 = cljs.core.count.call(null,c__4410__auto___34162);
var G__34166 = (0);
seq__34146_34151 = G__34163;
chunk__34147_34152 = G__34164;
count__34148_34153 = G__34165;
i__34149_34154 = G__34166;
continue;
}
} else
{var node_34167 = cljs.core.first.call(null,seq__34146_34161__$1);node_34167.innerHTML = value_34150;
{
var G__34168 = cljs.core.next.call(null,seq__34146_34161__$1);
var G__34169 = null;
var G__34170 = (0);
var G__34171 = (0);
seq__34146_34151 = G__34168;
chunk__34147_34152 = G__34169;
count__34148_34153 = G__34170;
i__34149_34154 = G__34171;
continue;
}
}
} else
{}
}
break;
}
}catch (e34145){if((e34145 instanceof Error))
{var e_34172 = e34145;domina.replace_children_BANG_.call(null,content,value_34150);
} else
{throw e34145;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__34179_34183 = cljs.core.seq.call(null,children);var chunk__34180_34184 = null;var count__34181_34185 = (0);var i__34182_34186 = (0);while(true){
if((i__34182_34186 < count__34181_34185))
{var child_34187 = cljs.core._nth.call(null,chunk__34180_34184,i__34182_34186);frag.appendChild(child_34187);
{
var G__34188 = seq__34179_34183;
var G__34189 = chunk__34180_34184;
var G__34190 = count__34181_34185;
var G__34191 = (i__34182_34186 + (1));
seq__34179_34183 = G__34188;
chunk__34180_34184 = G__34189;
count__34181_34185 = G__34190;
i__34182_34186 = G__34191;
continue;
}
} else
{var temp__4126__auto___34192 = cljs.core.seq.call(null,seq__34179_34183);if(temp__4126__auto___34192)
{var seq__34179_34193__$1 = temp__4126__auto___34192;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34179_34193__$1))
{var c__4410__auto___34194 = cljs.core.chunk_first.call(null,seq__34179_34193__$1);{
var G__34195 = cljs.core.chunk_rest.call(null,seq__34179_34193__$1);
var G__34196 = c__4410__auto___34194;
var G__34197 = cljs.core.count.call(null,c__4410__auto___34194);
var G__34198 = (0);
seq__34179_34183 = G__34195;
chunk__34180_34184 = G__34196;
count__34181_34185 = G__34197;
i__34182_34186 = G__34198;
continue;
}
} else
{var child_34199 = cljs.core.first.call(null,seq__34179_34193__$1);frag.appendChild(child_34199);
{
var G__34200 = cljs.core.next.call(null,seq__34179_34193__$1);
var G__34201 = null;
var G__34202 = (0);
var G__34203 = (0);
seq__34179_34183 = G__34200;
chunk__34180_34184 = G__34201;
count__34181_34185 = G__34202;
i__34182_34186 = G__34203;
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
return (function (p1__34173_SHARP_,p2__34174_SHARP_){return f.call(null,p1__34173_SHARP_,p2__34174_SHARP_);
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
{if((function (){var G__34205 = list_thing;if(G__34205)
{var bit__4304__auto__ = (G__34205.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__34205.cljs$core$ISeqable$))
{return true;
} else
{if((!G__34205.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34205);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34205);
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
{if((function (){var G__34206 = content;if(G__34206)
{var bit__4304__auto__ = (G__34206.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__34206.cljs$core$ISeqable$))
{return true;
} else
{if((!G__34206.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34206);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34206);
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
{if((function (){var G__34207 = content;if(G__34207)
{var bit__4304__auto__ = (G__34207.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4304__auto__) || (G__34207.cljs$core$ISeqable$))
{return true;
} else
{if((!G__34207.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34207);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34207);
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
