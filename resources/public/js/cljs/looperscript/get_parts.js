// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.looperscript.get_parts');
goog.require('cljs.core');
goog.require('cljs.looperscript.interpret');
goog.require('cljs.looperscript.logging');
goog.require('instaparse.core');
cljs.looperscript.get_parts.get_looper_text = (function cljs$looperscript$get_parts$get_looper_text(){
return cljs.looperscript.interpret.remove_comments.call(null,editor.getValue());
});
cljs.looperscript.get_parts.get_parts = (function cljs$looperscript$get_parts$get_parts(){
var text = cljs.looperscript.get_parts.get_looper_text.call(null);
var parse_tree = cljs.looperscript.interpret.looper_parse.call(null,text);
if(cljs.core.truth_(instaparse.core.failure_QMARK_.call(null,parse_tree))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subvec.call(null,cljs.core.vec.call(null,parse_tree),(2),(5)))].join('')));
} else {
var transformed_tree = cljs.looperscript.interpret.looper_transform.call(null,parse_tree);
var new_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(transformed_tree);
var parts = new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(transformed_tree);
var parts__$1 = cljs.core.assoc.call(null,parts,new cljs.core.Keyword(null,"params","params",710516235),new_params);
return parts__$1;
}
});

//# sourceMappingURL=get_parts.js.map?rel=1513048680545
