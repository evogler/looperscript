// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
var ret__8627__auto___15953 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__8594__auto__ = [];
var len__8587__auto___15954 = arguments.length;
var i__8588__auto___15955 = (0);
while(true){
if((i__8588__auto___15955 < len__8587__auto___15954)){
args__8594__auto__.push((arguments[i__8588__auto___15955]));

var G__15956 = (i__8588__auto___15955 + (1));
i__8588__auto___15955 = G__15956;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__8280__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})());
var G__15957 = threaded;
var G__15958 = cljs.core.next.call(null,forms__$1);
x__$1 = G__15957;
forms__$1 = G__15958;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq15949){
var G__15950 = cljs.core.first.call(null,seq15949);
var seq15949__$1 = cljs.core.next.call(null,seq15949);
var G__15951 = cljs.core.first.call(null,seq15949__$1);
var seq15949__$2 = cljs.core.next.call(null,seq15949__$1);
var G__15952 = cljs.core.first.call(null,seq15949__$2);
var seq15949__$3 = cljs.core.next.call(null,seq15949__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__15950,G__15951,G__15952,seq15949__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__8627__auto___15963 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__8594__auto__ = [];
var len__8587__auto___15964 = arguments.length;
var i__8588__auto___15965 = (0);
while(true){
if((i__8588__auto___15965 < len__8587__auto___15964)){
args__8594__auto__.push((arguments[i__8588__auto___15965]));

var G__15966 = (i__8588__auto___15965 + (1));
i__8588__auto___15965 = G__15966;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__8280__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__8280__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})());
var G__15967 = threaded;
var G__15968 = cljs.core.next.call(null,forms__$1);
x__$1 = G__15967;
forms__$1 = G__15968;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq15959){
var G__15960 = cljs.core.first.call(null,seq15959);
var seq15959__$1 = cljs.core.next.call(null,seq15959);
var G__15961 = cljs.core.first.call(null,seq15959__$1);
var seq15959__$2 = cljs.core.next.call(null,seq15959__$1);
var G__15962 = cljs.core.first.call(null,seq15959__$2);
var seq15959__$3 = cljs.core.next.call(null,seq15959__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__15960,G__15961,G__15962,seq15959__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__8627__auto___15976 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var G__15975 = arguments.length;
switch (G__15975) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___15978 = arguments.length;
var i__8588__auto___15979 = (0);
while(true){
if((i__8588__auto___15979 < len__8587__auto___15978)){
args_arr__8606__auto__.push((arguments[i__8588__auto___15979]));

var G__15980 = (i__8588__auto___15979 + (1));
i__8588__auto___15979 = G__15980;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq15970){
var G__15971 = cljs.core.first.call(null,seq15970);
var seq15970__$1 = cljs.core.next.call(null,seq15970);
var G__15972 = cljs.core.first.call(null,seq15970__$1);
var seq15970__$2 = cljs.core.next.call(null,seq15970__$1);
var G__15973 = cljs.core.first.call(null,seq15970__$2);
var seq15970__$3 = cljs.core.next.call(null,seq15970__$2);
var G__15974 = cljs.core.first.call(null,seq15970__$3);
var seq15970__$4 = cljs.core.next.call(null,seq15970__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__15971,G__15972,G__15973,G__15974,seq15970__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__8627__auto___15984 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__8594__auto__ = [];
var len__8587__auto___15985 = arguments.length;
var i__8588__auto___15986 = (0);
while(true){
if((i__8588__auto___15986 < len__8587__auto___15985)){
args__8594__auto__.push((arguments[i__8588__auto___15986]));

var G__15987 = (i__8588__auto___15986 + (1));
i__8588__auto___15986 = G__15987;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq15981){
var G__15982 = cljs.core.first.call(null,seq15981);
var seq15981__$1 = cljs.core.next.call(null,seq15981);
var G__15983 = cljs.core.first.call(null,seq15981__$1);
var seq15981__$2 = cljs.core.next.call(null,seq15981__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__15982,G__15983,seq15981__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__8627__auto___15991 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__8594__auto__ = [];
var len__8587__auto___15992 = arguments.length;
var i__8588__auto___15993 = (0);
while(true){
if((i__8588__auto___15993 < len__8587__auto___15992)){
args__8594__auto__.push((arguments[i__8588__auto___15993]));

var G__15994 = (i__8588__auto___15993 + (1));
i__8588__auto___15993 = G__15994;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__8280__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__8280__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$2);
})(),x__8280__auto____$1);
})(),x__8280__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq15988){
var G__15989 = cljs.core.first.call(null,seq15988);
var seq15988__$1 = cljs.core.next.call(null,seq15988);
var G__15990 = cljs.core.first.call(null,seq15988__$1);
var seq15988__$2 = cljs.core.next.call(null,seq15988__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__15989,G__15990,seq15988__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__8627__auto___15999 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16000 = arguments.length;
var i__8588__auto___16001 = (0);
while(true){
if((i__8588__auto___16001 < len__8587__auto___16000)){
args__8594__auto__.push((arguments[i__8588__auto___16001]));

var G__16002 = (i__8588__auto___16001 + (1));
i__8588__auto___16001 = G__16002;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__15995_SHARP_){
return cljs.core._conj.call(null,(function (){var x__8280__auto__ = cljs.core.vary_meta.call(null,p1__15995_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq15996){
var G__15997 = cljs.core.first.call(null,seq15996);
var seq15996__$1 = cljs.core.next.call(null,seq15996);
var G__15998 = cljs.core.first.call(null,seq15996__$1);
var seq15996__$2 = cljs.core.next.call(null,seq15996__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__15997,G__15998,seq15996__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__8627__auto___16007 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16008 = arguments.length;
var i__8588__auto___16009 = (0);
while(true){
if((i__8588__auto___16009 < len__8587__auto___16008)){
args__8594__auto__.push((arguments[i__8588__auto___16009]));

var G__16010 = (i__8588__auto___16009 + (1));
i__8588__auto___16009 = G__16010;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__8280__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq16003){
var G__16004 = cljs.core.first.call(null,seq16003);
var seq16003__$1 = cljs.core.next.call(null,seq16003);
var G__16005 = cljs.core.first.call(null,seq16003__$1);
var seq16003__$2 = cljs.core.next.call(null,seq16003__$1);
var G__16006 = cljs.core.first.call(null,seq16003__$2);
var seq16003__$3 = cljs.core.next.call(null,seq16003__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__16004,G__16005,G__16006,seq16003__$3);
});

return null;
})()
;
cljs.core$macros.doto.cljs$lang$macro = true;

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__16011 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__16012 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__16011;
s = G__16012;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,((function (impls){
return (function (p__16013){
var vec__16014 = p__16013;
var t = cljs.core.nth.call(null,vec__16014,(0),null);
var fs = cljs.core.nth.call(null,vec__16014,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8280__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),fs)));
});})(impls))
,impls))));
});
var ret__8627__auto___16021 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16022 = arguments.length;
var i__8588__auto___16023 = (0);
while(true){
if((i__8588__auto___16023 < len__8587__auto___16022)){
args__8594__auto__.push((arguments[i__8588__auto___16023]));

var G__16024 = (i__8588__auto___16023 + (1));
i__8588__auto___16023 = G__16024;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq16017){
var G__16018 = cljs.core.first.call(null,seq16017);
var seq16017__$1 = cljs.core.next.call(null,seq16017);
var G__16019 = cljs.core.first.call(null,seq16017__$1);
var seq16017__$2 = cljs.core.next.call(null,seq16017__$1);
var G__16020 = cljs.core.first.call(null,seq16017__$2);
var seq16017__$3 = cljs.core.next.call(null,seq16017__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__16018,G__16019,G__16020,seq16017__$3);
});

return null;
})()
;
cljs.core$macros.extend_protocol.cljs$lang$macro = true;

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__16025 = cljs.core.next.call(null,params__$1);
var G__16026 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__16027 = lets;
params__$1 = G__16025;
new_params = G__16026;
lets = G__16027;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__16028 = cljs.core.next.call(null,params__$1);
var G__16029 = cljs.core.conj.call(null,new_params,gparam);
var G__16030 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__16028;
new_params = G__16029;
lets = G__16030;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}
break;
}
}
});
var ret__8627__auto___16037 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16038 = arguments.length;
var i__8588__auto___16039 = (0);
while(true){
if((i__8588__auto___16039 < len__8587__auto___16038)){
args__8594__auto__.push((arguments[i__8588__auto___16039]));

var G__16040 = (i__8588__auto___16039 + (1));
i__8588__auto___16039 = G__16040;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__8280__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs__$1))," should be a vector"].join(''):["Parameter declaration missing"].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__16034 = sig;
var seq__16035 = cljs.core.seq.call(null,vec__16034);
var first__16036 = cljs.core.first.call(null,seq__16035);
var seq__16035__$1 = cljs.core.next.call(null,seq__16035);
var params = first__16036;
var body = seq__16035__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__7418__auto__ = conds;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__8280__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.map.call(null,((function (vec__16034,seq__16035,first__16036,seq__16035__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__8280__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(vec__16034,seq__16035,first__16036,seq__16035__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__16034,seq__16035,first__16036,seq__16035__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__8280__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(vec__16034,seq__16035,first__16036,seq__16035__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq16031){
var G__16032 = cljs.core.first.call(null,seq16031);
var seq16031__$1 = cljs.core.next.call(null,seq16031);
var G__16033 = cljs.core.first.call(null,seq16031__$1);
var seq16031__$2 = cljs.core.next.call(null,seq16031__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__16032,G__16033,seq16031__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__8627__auto___16045 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16046 = arguments.length;
var i__8588__auto___16047 = (0);
while(true){
if((i__8588__auto___16047 < len__8587__auto___16046)){
args__8594__auto__.push((arguments[i__8588__auto___16047]));

var G__16048 = (i__8588__auto___16047 + (1));
i__8588__auto___16047 = G__16048;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq16041){
var G__16042 = cljs.core.first.call(null,seq16041);
var seq16041__$1 = cljs.core.next.call(null,seq16041);
var G__16043 = cljs.core.first.call(null,seq16041__$1);
var seq16041__$2 = cljs.core.next.call(null,seq16041__$1);
var G__16044 = cljs.core.first.call(null,seq16041__$2);
var seq16041__$3 = cljs.core.next.call(null,seq16041__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__16042,G__16043,G__16044,seq16041__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__8627__auto___16058 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__16057 = arguments.length;
switch (G__16057) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16060 = arguments.length;
var i__8588__auto___16061 = (0);
while(true){
if((i__8588__auto___16061 < len__8587__auto___16060)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16061]));

var G__16062 = (i__8588__auto___16061 + (1));
i__8588__auto___16061 = G__16062;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__8607__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__8280__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__16049__auto__","temp__16049__auto__",810172036,null)),(function (){var x__8280__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__16049__auto__","temp__16049__auto__",810172036,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__16049__auto__","temp__16049__auto__",810172036,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq16051){
var G__16052 = cljs.core.first.call(null,seq16051);
var seq16051__$1 = cljs.core.next.call(null,seq16051);
var G__16053 = cljs.core.first.call(null,seq16051__$1);
var seq16051__$2 = cljs.core.next.call(null,seq16051__$1);
var G__16054 = cljs.core.first.call(null,seq16051__$2);
var seq16051__$3 = cljs.core.next.call(null,seq16051__$2);
var G__16055 = cljs.core.first.call(null,seq16051__$3);
var seq16051__$4 = cljs.core.next.call(null,seq16051__$3);
var G__16056 = cljs.core.first.call(null,seq16051__$4);
var seq16051__$5 = cljs.core.next.call(null,seq16051__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__16052,G__16053,G__16054,G__16055,G__16056,seq16051__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__8627__auto___16065 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__16064 = arguments.length;
switch (G__16064) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8280__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8280__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__8627__auto___16072 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16073 = arguments.length;
var i__8588__auto___16074 = (0);
while(true){
if((i__8588__auto___16074 < len__8587__auto___16073)){
args__8594__auto__.push((arguments[i__8588__auto___16074]));

var G__16075 = (i__8588__auto___16074 + (1));
i__8588__auto___16074 = G__16075;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__16067_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__16067_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq16068){
var G__16069 = cljs.core.first.call(null,seq16068);
var seq16068__$1 = cljs.core.next.call(null,seq16068);
var G__16070 = cljs.core.first.call(null,seq16068__$1);
var seq16068__$2 = cljs.core.next.call(null,seq16068__$1);
var G__16071 = cljs.core.first.call(null,seq16068__$2);
var seq16068__$3 = cljs.core.next.call(null,seq16068__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__16069,G__16070,G__16071,seq16068__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__8627__auto___16080 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16081 = arguments.length;
var i__8588__auto___16082 = (0);
while(true){
if((i__8588__auto___16082 < len__8587__auto___16081)){
args__8594__auto__.push((arguments[i__8588__auto___16082]));

var G__16083 = (i__8588__auto___16082 + (1));
i__8588__auto___16082 = G__16083;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq16076){
var G__16077 = cljs.core.first.call(null,seq16076);
var seq16076__$1 = cljs.core.next.call(null,seq16076);
var G__16078 = cljs.core.first.call(null,seq16076__$1);
var seq16076__$2 = cljs.core.next.call(null,seq16076__$1);
var G__16079 = cljs.core.first.call(null,seq16076__$2);
var seq16076__$3 = cljs.core.next.call(null,seq16076__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__16077,G__16078,G__16079,seq16076__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__8627__auto___16088 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16089 = arguments.length;
var i__8588__auto___16090 = (0);
while(true){
if((i__8588__auto___16090 < len__8587__auto___16089)){
args__8594__auto__.push((arguments[i__8588__auto___16090]));

var G__16091 = (i__8588__auto___16090 + (1));
i__8588__auto___16090 = G__16091;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__8280__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq16084){
var G__16085 = cljs.core.first.call(null,seq16084);
var seq16084__$1 = cljs.core.next.call(null,seq16084);
var G__16086 = cljs.core.first.call(null,seq16084__$1);
var seq16084__$2 = cljs.core.next.call(null,seq16084__$1);
var G__16087 = cljs.core.first.call(null,seq16084__$2);
var seq16084__$3 = cljs.core.next.call(null,seq16084__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__16085,G__16086,G__16087,seq16084__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__8627__auto___16100 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16101 = arguments.length;
var i__8588__auto___16102 = (0);
while(true){
if((i__8588__auto___16102 < len__8587__auto___16101)){
args__8594__auto__.push((arguments[i__8588__auto___16102]));

var G__16103 = (i__8588__auto___16102 + (1));
i__8588__auto___16102 = G__16103;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__16097 = bindings;
var x = cljs.core.nth.call(null,vec__16097,(0),null);
var xs = cljs.core.nth.call(null,vec__16097,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__16092__auto__","xs__16092__auto__",1120831472,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8280__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__16092__auto__","xs__16092__auto__",1120831472,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq16093){
var G__16094 = cljs.core.first.call(null,seq16093);
var seq16093__$1 = cljs.core.next.call(null,seq16093);
var G__16095 = cljs.core.first.call(null,seq16093__$1);
var seq16093__$2 = cljs.core.next.call(null,seq16093__$1);
var G__16096 = cljs.core.first.call(null,seq16093__$2);
var seq16093__$3 = cljs.core.next.call(null,seq16093__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__16094,G__16095,G__16096,seq16093__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__8627__auto___16109 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16110 = arguments.length;
var i__8588__auto___16111 = (0);
while(true){
if((i__8588__auto___16111 < len__8587__auto___16110)){
args__8594__auto__.push((arguments[i__8588__auto___16111]));

var G__16112 = (i__8588__auto___16111 + (1));
i__8588__auto___16111 = G__16112;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__16104__auto__","temp__16104__auto__",1329709937,null)),(function (){var x__8280__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__16104__auto__","temp__16104__auto__",1329709937,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__16104__auto__","temp__16104__auto__",1329709937,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq16105){
var G__16106 = cljs.core.first.call(null,seq16105);
var seq16105__$1 = cljs.core.next.call(null,seq16105);
var G__16107 = cljs.core.first.call(null,seq16105__$1);
var seq16105__$2 = cljs.core.next.call(null,seq16105__$1);
var G__16108 = cljs.core.first.call(null,seq16105__$2);
var seq16105__$3 = cljs.core.next.call(null,seq16105__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__16106,G__16107,G__16108,seq16105__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__8627__auto___16117 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16118 = arguments.length;
var i__8588__auto___16119 = (0);
while(true){
if((i__8588__auto___16119 < len__8587__auto___16118)){
args__8594__auto__.push((arguments[i__8588__auto___16119]));

var G__16120 = (i__8588__auto___16119 + (1));
i__8588__auto___16119 = G__16120;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__8280__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),null),x__8280__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq16113){
var G__16114 = cljs.core.first.call(null,seq16113);
var seq16113__$1 = cljs.core.next.call(null,seq16113);
var G__16115 = cljs.core.first.call(null,seq16113__$1);
var seq16113__$2 = cljs.core.next.call(null,seq16113__$1);
var G__16116 = cljs.core.first.call(null,seq16113__$2);
var seq16113__$3 = cljs.core.next.call(null,seq16113__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__16114,G__16115,G__16116,seq16113__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__8627__auto___16125 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16126 = arguments.length;
var i__8588__auto___16127 = (0);
while(true){
if((i__8588__auto___16127 < len__8587__auto___16126)){
args__8594__auto__.push((arguments[i__8588__auto___16127]));

var G__16128 = (i__8588__auto___16127 + (1));
i__8588__auto___16127 = G__16128;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8280__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body,(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq16121){
var G__16122 = cljs.core.first.call(null,seq16121);
var seq16121__$1 = cljs.core.next.call(null,seq16121);
var G__16123 = cljs.core.first.call(null,seq16121__$1);
var seq16121__$2 = cljs.core.next.call(null,seq16121__$1);
var G__16124 = cljs.core.first.call(null,seq16121__$2);
var seq16121__$3 = cljs.core.next.call(null,seq16121__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__16122,G__16123,G__16124,seq16121__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__8627__auto___16137 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16138 = arguments.length;
var i__8588__auto___16139 = (0);
while(true){
if((i__8588__auto___16139 < len__8587__auto___16138)){
args__8594__auto__.push((arguments[i__8588__auto___16139]));

var G__16140 = (i__8588__auto___16139 + (1));
i__8588__auto___16139 = G__16140;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__16133){
var vec__16134 = p__16133;
var test = cljs.core.nth.call(null,vec__16134,(0),null);
var step = cljs.core.nth.call(null,vec__16134,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__8280__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq16129){
var G__16130 = cljs.core.first.call(null,seq16129);
var seq16129__$1 = cljs.core.next.call(null,seq16129);
var G__16131 = cljs.core.first.call(null,seq16129__$1);
var seq16129__$2 = cljs.core.next.call(null,seq16129__$1);
var G__16132 = cljs.core.first.call(null,seq16129__$2);
var seq16129__$3 = cljs.core.next.call(null,seq16129__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__16130,G__16131,G__16132,seq16129__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__8627__auto___16149 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16150 = arguments.length;
var i__8588__auto___16151 = (0);
while(true){
if((i__8588__auto___16151 < len__8587__auto___16150)){
args__8594__auto__.push((arguments[i__8588__auto___16151]));

var G__16152 = (i__8588__auto___16151 + (1));
i__8588__auto___16151 = G__16152;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__16145){
var vec__16146 = p__16145;
var test = cljs.core.nth.call(null,vec__16146,(0),null);
var step = cljs.core.nth.call(null,vec__16146,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__8280__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq16141){
var G__16142 = cljs.core.first.call(null,seq16141);
var seq16141__$1 = cljs.core.next.call(null,seq16141);
var G__16143 = cljs.core.first.call(null,seq16141__$1);
var seq16141__$2 = cljs.core.next.call(null,seq16141__$1);
var G__16144 = cljs.core.first.call(null,seq16141__$2);
var seq16141__$3 = cljs.core.next.call(null,seq16141__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__16142,G__16143,G__16144,seq16141__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__8627__auto___16158 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16159 = arguments.length;
var i__8588__auto___16160 = (0);
while(true){
if((i__8588__auto___16160 < len__8587__auto___16159)){
args__8594__auto__.push((arguments[i__8588__auto___16160]));

var G__16161 = (i__8588__auto___16160 + (1));
i__8588__auto___16160 = G__16161;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((4) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8595__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.butlast.call(null,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = ((cljs.core.empty_QMARK_.call(null,forms))?name:cljs.core.last.call(null,forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq16153){
var G__16154 = cljs.core.first.call(null,seq16153);
var seq16153__$1 = cljs.core.next.call(null,seq16153);
var G__16155 = cljs.core.first.call(null,seq16153__$1);
var seq16153__$2 = cljs.core.next.call(null,seq16153__$1);
var G__16156 = cljs.core.first.call(null,seq16153__$2);
var seq16153__$3 = cljs.core.next.call(null,seq16153__$2);
var G__16157 = cljs.core.first.call(null,seq16153__$3);
var seq16153__$4 = cljs.core.next.call(null,seq16153__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__16154,G__16155,G__16156,G__16157,seq16153__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__8627__auto___16166 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16167 = arguments.length;
var i__8588__auto___16168 = (0);
while(true){
if((i__8588__auto___16168 < len__8587__auto___16167)){
args__8594__auto__.push((arguments[i__8588__auto___16168]));

var G__16169 = (i__8588__auto___16168 + (1));
i__8588__auto___16168 = G__16169;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8280__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__8280__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq16162){
var G__16163 = cljs.core.first.call(null,seq16162);
var seq16162__$1 = cljs.core.next.call(null,seq16162);
var G__16164 = cljs.core.first.call(null,seq16162__$1);
var seq16162__$2 = cljs.core.next.call(null,seq16162__$1);
var G__16165 = cljs.core.first.call(null,seq16162__$2);
var seq16162__$3 = cljs.core.next.call(null,seq16162__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__16163,G__16164,G__16165,seq16162__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__8627__auto___16174 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16175 = arguments.length;
var i__8588__auto___16176 = (0);
while(true){
if((i__8588__auto___16176 < len__8587__auto___16175)){
args__8594__auto__.push((arguments[i__8588__auto___16176]));

var G__16177 = (i__8588__auto___16176 + (1));
i__8588__auto___16176 = G__16177;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8280__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__8280__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq16170){
var G__16171 = cljs.core.first.call(null,seq16170);
var seq16170__$1 = cljs.core.next.call(null,seq16170);
var G__16172 = cljs.core.first.call(null,seq16170__$1);
var seq16170__$2 = cljs.core.next.call(null,seq16170__$1);
var G__16173 = cljs.core.first.call(null,seq16170__$2);
var seq16170__$3 = cljs.core.next.call(null,seq16170__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__16171,G__16172,G__16173,seq16170__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__8627__auto___16187 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__16186 = arguments.length;
switch (G__16186) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16189 = arguments.length;
var i__8588__auto___16190 = (0);
while(true){
if((i__8588__auto___16190 < len__8587__auto___16189)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16190]));

var G__16191 = (i__8588__auto___16190 + (1));
i__8588__auto___16190 = G__16191;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__8607__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__8280__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__16178__auto__","temp__16178__auto__",615107550,null)),(function (){var x__8280__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__16178__auto__","temp__16178__auto__",615107550,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__16178__auto__","temp__16178__auto__",615107550,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq16180){
var G__16181 = cljs.core.first.call(null,seq16180);
var seq16180__$1 = cljs.core.next.call(null,seq16180);
var G__16182 = cljs.core.first.call(null,seq16180__$1);
var seq16180__$2 = cljs.core.next.call(null,seq16180__$1);
var G__16183 = cljs.core.first.call(null,seq16180__$2);
var seq16180__$3 = cljs.core.next.call(null,seq16180__$2);
var G__16184 = cljs.core.first.call(null,seq16180__$3);
var seq16180__$4 = cljs.core.next.call(null,seq16180__$3);
var G__16185 = cljs.core.first.call(null,seq16180__$4);
var seq16180__$5 = cljs.core.next.call(null,seq16180__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__16181,G__16182,G__16183,G__16184,G__16185,seq16180__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__8627__auto___16197 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16198 = arguments.length;
var i__8588__auto___16199 = (0);
while(true){
if((i__8588__auto___16199 < len__8587__auto___16198)){
args__8594__auto__.push((arguments[i__8588__auto___16199]));

var G__16200 = (i__8588__auto___16199 + (1));
i__8588__auto___16199 = G__16200;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__16192__auto__","temp__16192__auto__",-1598360716,null)),(function (){var x__8280__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__16192__auto__","temp__16192__auto__",-1598360716,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__16192__auto__","temp__16192__auto__",-1598360716,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq16193){
var G__16194 = cljs.core.first.call(null,seq16193);
var seq16193__$1 = cljs.core.next.call(null,seq16193);
var G__16195 = cljs.core.first.call(null,seq16193__$1);
var seq16193__$2 = cljs.core.next.call(null,seq16193__$1);
var G__16196 = cljs.core.first.call(null,seq16193__$2);
var seq16193__$3 = cljs.core.next.call(null,seq16193__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__16194,G__16195,G__16196,seq16193__$3);
});

return null;
})()
;
cljs.core$macros.when_some.cljs$lang$macro = true;

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__16201_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__16201_SHARP_)){
return cljs.core.first.call(null,p1__16201_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16201_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16201_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__16202_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__16202_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__16203 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__16204 = cljs.core.next.call(null,fdecls);
ret = G__16203;
fdecls = G__16204;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__8280__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
}
});
var ret__8627__auto___16205 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.defonce.cljs$lang$macro = true;

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__8280__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__16212 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__16213 = n;
var G__16214 = cljs.core.nnext.call(null,bs);
var G__16215 = true;
ret = G__16212;
n = G__16213;
bs = G__16214;
seen_rest_QMARK_ = G__16215;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__16216 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__8280__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__8280__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__8280__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__8280__auto____$1);
})(),x__8280__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__16217 = (n + (1));
var G__16218 = cljs.core.next.call(null,bs);
var G__16219 = seen_rest_QMARK_;
ret = G__16216;
n = G__16217;
bs = G__16218;
seen_rest_QMARK_ = G__16219;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__8280__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__8280__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__16206_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__7418__auto__ = mkns;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return cljs.core.namespace.call(null,p1__16206_SHARP_);
}
})(),cljs.core.name.call(null,p1__16206_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__16207_SHARP_){
return cljs.core._conj.call(null,(function (){var x__8280__auto__ = cljs.core.symbol.call(null,(function (){var or__7418__auto__ = mkns;
if(cljs.core.truth_(or__7418__auto__)){
return or__7418__auto__;
} else {
return cljs.core.namespace.call(null,p1__16207_SHARP_);
}
})(),cljs.core.name.call(null,p1__16207_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__16208_SHARP_,p2__16209_SHARP_){
return cljs.core.assoc.call(null,p1__16208_SHARP_,p2__16209_SHARP_,cljs.core.val.call(null,entry).call(null,p2__16209_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__8280__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$2);
})(),x__8280__auto____$1);
})(),x__8280__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__8280__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__16220 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__16221 = cljs.core.next.call(null,bes);
ret = G__16220;
bes = G__16221;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__16210_SHARP_){
return (cljs.core.first.call(null,p1__16210_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__8627__auto___16222 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__8280__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8280__auto__ = ["/** @define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"} */"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__8280__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__8627__auto___16227 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16228 = arguments.length;
var i__8588__auto___16229 = (0);
while(true){
if((i__8588__auto___16229 < len__8587__auto___16228)){
args__8594__auto__.push((arguments[i__8588__auto___16229]));

var G__16230 = (i__8588__auto___16229 + (1));
i__8588__auto___16229 = G__16230;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__8280__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq16223){
var G__16224 = cljs.core.first.call(null,seq16223);
var seq16223__$1 = cljs.core.next.call(null,seq16223);
var G__16225 = cljs.core.first.call(null,seq16223__$1);
var seq16223__$2 = cljs.core.next.call(null,seq16223__$1);
var G__16226 = cljs.core.first.call(null,seq16223__$2);
var seq16223__$3 = cljs.core.next.call(null,seq16223__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__16224,G__16225,G__16226,seq16223__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__8627__auto___16239 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16240 = arguments.length;
var i__8588__auto___16241 = (0);
while(true){
if((i__8588__auto___16241 < len__8587__auto___16240)){
args__8594__auto__.push((arguments[i__8588__auto___16241]));

var G__16242 = (i__8588__auto___16241 + (1));
i__8588__auto___16241 = G__16242;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__8280__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__16235){
var vec__16236 = p__16235;
var b = cljs.core.nth.call(null,vec__16236,(0),null);
var v = cljs.core.nth.call(null,vec__16236,(1),null);
var g = cljs.core.nth.call(null,vec__16236,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq16231){
var G__16232 = cljs.core.first.call(null,seq16231);
var seq16231__$1 = cljs.core.next.call(null,seq16231);
var G__16233 = cljs.core.first.call(null,seq16231__$1);
var seq16231__$2 = cljs.core.next.call(null,seq16231__$1);
var G__16234 = cljs.core.first.call(null,seq16231__$2);
var seq16231__$3 = cljs.core.next.call(null,seq16231__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__16232,G__16233,G__16234,seq16231__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__16243_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16243_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate.call(null,(function (p__16244){
var vec__16245 = p__16244;
var p = cljs.core.nth.call(null,vec__16245,(0),null);
var b = cljs.core.nth.call(null,vec__16245,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
var ret__8627__auto___16251 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16252 = arguments.length;
var i__8588__auto___16253 = (0);
while(true){
if((i__8588__auto___16253 < len__8587__auto___16252)){
args__8594__auto__.push((arguments[i__8588__auto___16253]));

var G__16254 = (i__8588__auto___16253 + (1));
i__8588__auto___16253 = G__16254;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var interpolate = (function (x){
if(typeof x === 'string'){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,interpolate,xs)));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq16248){
var G__16249 = cljs.core.first.call(null,seq16248);
var seq16248__$1 = cljs.core.next.call(null,seq16248);
var G__16250 = cljs.core.first.call(null,seq16248__$1);
var seq16248__$2 = cljs.core.next.call(null,seq16248__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__16249,G__16250,seq16248__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__7406__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__7406__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__7406__auto__;
}
});
var ret__8627__auto___16265 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__16263 = arguments.length;
switch (G__16263) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16267 = arguments.length;
var i__8588__auto___16268 = (0);
while(true){
if((i__8588__auto___16268 < len__8587__auto___16267)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16268]));

var G__16269 = (i__8588__auto___16268 + (1));
i__8588__auto___16268 = G__16269;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8607__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__16255_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__16255_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__16256_SHARP_){
var _STAR_cljs_warnings_STAR_16264 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__16256_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_16264;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8280__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__16257__auto__","and__16257__auto__",-1361980057,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__16257__auto__","and__16257__auto__",-1361980057,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__16257__auto__","and__16257__auto__",-1361980057,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq16259){
var G__16260 = cljs.core.first.call(null,seq16259);
var seq16259__$1 = cljs.core.next.call(null,seq16259);
var G__16261 = cljs.core.first.call(null,seq16259__$1);
var seq16259__$2 = cljs.core.next.call(null,seq16259__$1);
var G__16262 = cljs.core.first.call(null,seq16259__$2);
var seq16259__$3 = cljs.core.next.call(null,seq16259__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__16260,G__16261,G__16262,seq16259__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__8627__auto___16280 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__16278 = arguments.length;
switch (G__16278) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16282 = arguments.length;
var i__8588__auto___16283 = (0);
while(true){
if((i__8588__auto___16283 < len__8587__auto___16282)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16283]));

var G__16284 = (i__8588__auto___16283 + (1));
i__8588__auto___16283 = G__16284;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8607__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__16270_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__16270_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__16271_SHARP_){
var _STAR_cljs_warnings_STAR_16279 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__16271_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_16279;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8280__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__16272__auto__","or__16272__auto__",-79951216,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__16272__auto__","or__16272__auto__",-79951216,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__16272__auto__","or__16272__auto__",-79951216,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq16274){
var G__16275 = cljs.core.first.call(null,seq16274);
var seq16274__$1 = cljs.core.next.call(null,seq16274);
var G__16276 = cljs.core.first.call(null,seq16274__$1);
var seq16274__$2 = cljs.core.next.call(null,seq16274__$1);
var G__16277 = cljs.core.first.call(null,seq16274__$2);
var seq16274__$3 = cljs.core.next.call(null,seq16274__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__16275,G__16276,G__16277,seq16274__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__8627__auto___16285 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16286 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16287 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__8627__auto___16288 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__8627__auto___16289 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__8627__auto___16290 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__8627__auto___16291 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__8627__auto___16292 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__8627__auto___16293 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__8627__auto___16294 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__8627__auto___16295 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__8280__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__8280__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__8627__auto___16300 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__16297 = clojure.string.split.call(null,comment,/\n/);
var seq__16298 = cljs.core.seq.call(null,vec__16297);
var first__16299 = cljs.core.first.call(null,seq__16298);
var seq__16298__$1 = cljs.core.next.call(null,seq__16298);
var x = first__16299;
var ys = seq__16298__$1;
return cljs.core._conj.call(null,(function (){var x__8280__auto__ = ["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__16297,seq__16298,first__16299,seq__16298__$1,x,ys){
return (function (p1__16296_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__16296_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__16297,seq__16298,first__16299,seq__16298__$1,x,ys))
,ys)))," */\n"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__8627__auto___16301 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return cljs.core._conj.call(null,(function (){var x__8280__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$2);
})(),x__8280__auto____$1);
})(),x__8280__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__8627__auto___16302 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__8280__auto__ = ["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__8627__auto___16303 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16304 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16305 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16306 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16307 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16308 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16311 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__16309__auto__","c__16309__auto__",1333393155,null)),(function (){var x__8280__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16310__auto__","x__16310__auto__",481808063,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16310__auto__","x__16310__auto__",481808063,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__16309__auto__","c__16309__auto__",1333393155,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16312 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16313 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16314 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16324 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__16321 = arguments.length;
switch (G__16321) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16326 = arguments.length;
var i__8588__auto___16327 = (0);
while(true){
if((i__8588__auto___16327 < len__8587__auto___16326)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16327]));

var G__16328 = (i__8588__auto___16327 + (1));
i__8588__auto___16327 = G__16328;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__16322 = cljs.analyzer.checked_arrays.call(null);
var G__16322__$1 = (((G__16322 instanceof cljs.core.Keyword))?G__16322.fqn:null);
switch (G__16322__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__8280__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__8280__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__16323 = cljs.analyzer.checked_arrays.call(null);
var G__16323__$1 = (((G__16323 instanceof cljs.core.Keyword))?G__16323.fqn:null);
switch (G__16323__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__8280__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),idxs)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__8280__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),idxs)));

break;
default:
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8280__auto__ = ["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),idxs)));

}
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq16316){
var G__16317 = cljs.core.first.call(null,seq16316);
var seq16316__$1 = cljs.core.next.call(null,seq16316);
var G__16318 = cljs.core.first.call(null,seq16316__$1);
var seq16316__$2 = cljs.core.next.call(null,seq16316__$1);
var G__16319 = cljs.core.first.call(null,seq16316__$2);
var seq16316__$3 = cljs.core.next.call(null,seq16316__$2);
var G__16320 = cljs.core.first.call(null,seq16316__$3);
var seq16316__$4 = cljs.core.next.call(null,seq16316__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__16317,G__16318,G__16319,G__16320,seq16316__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__8627__auto___16341 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__16338 = arguments.length;
switch (G__16338) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16343 = arguments.length;
var i__8588__auto___16344 = (0);
while(true){
if((i__8588__auto___16344 < len__8587__auto___16343)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16344]));

var G__16345 = (i__8588__auto___16344 + (1));
i__8588__auto___16344 = G__16345;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__8607__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__16339 = cljs.analyzer.checked_arrays.call(null);
var G__16339__$1 = (((G__16339 instanceof cljs.core.Keyword))?G__16339.fqn:null);
switch (G__16339__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__8280__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__8280__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = idx;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$2);
})(),x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__16340 = cljs.analyzer.checked_arrays.call(null);
var G__16340__$1 = (((G__16340 instanceof cljs.core.Keyword))?G__16340.fqn:null);
switch (G__16340__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__8280__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),idxv)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__8280__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),idxv)));

break;
default:
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__8280__auto__ = ["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),idxv)));

}
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq16332){
var G__16333 = cljs.core.first.call(null,seq16332);
var seq16332__$1 = cljs.core.next.call(null,seq16332);
var G__16334 = cljs.core.first.call(null,seq16332__$1);
var seq16332__$2 = cljs.core.next.call(null,seq16332__$1);
var G__16335 = cljs.core.first.call(null,seq16332__$2);
var seq16332__$3 = cljs.core.next.call(null,seq16332__$2);
var G__16336 = cljs.core.first.call(null,seq16332__$3);
var seq16332__$4 = cljs.core.next.call(null,seq16332__$3);
var G__16337 = cljs.core.first.call(null,seq16332__$4);
var seq16332__$5 = cljs.core.next.call(null,seq16332__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__16333,G__16334,G__16335,G__16336,G__16337,seq16332__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__8627__auto___16348 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__8627__auto___16349 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = key;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$2);
})(),x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__8627__auto___16357 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__16356 = arguments.length;
switch (G__16356) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16359 = arguments.length;
var i__8588__auto___16360 = (0);
while(true){
if((i__8588__auto___16360 < len__8587__auto___16359)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16360]));

var G__16361 = (i__8588__auto___16360 + (1));
i__8588__auto___16360 = G__16361;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq16351){
var G__16352 = cljs.core.first.call(null,seq16351);
var seq16351__$1 = cljs.core.next.call(null,seq16351);
var G__16353 = cljs.core.first.call(null,seq16351__$1);
var seq16351__$2 = cljs.core.next.call(null,seq16351__$1);
var G__16354 = cljs.core.first.call(null,seq16351__$2);
var seq16351__$3 = cljs.core.next.call(null,seq16351__$2);
var G__16355 = cljs.core.first.call(null,seq16351__$3);
var seq16351__$4 = cljs.core.next.call(null,seq16351__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__16352,G__16353,G__16354,G__16355,seq16351__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__8627__auto___16362 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__8627__auto___16363 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__8627__auto___16364 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__8627__auto___16365 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__8627__auto___16366 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__8627__auto___16367 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__8627__auto___16368 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__8627__auto___16369 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__8627__auto___16370 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__8627__auto___16374 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16375 = arguments.length;
var i__8588__auto___16376 = (0);
while(true){
if((i__8588__auto___16376 < len__8587__auto___16375)){
args__8594__auto__.push((arguments[i__8588__auto___16376]));

var G__16377 = (i__8588__auto___16376 + (1));
i__8588__auto___16376 = G__16377;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq16371){
var G__16372 = cljs.core.first.call(null,seq16371);
var seq16371__$1 = cljs.core.next.call(null,seq16371);
var G__16373 = cljs.core.first.call(null,seq16371__$1);
var seq16371__$2 = cljs.core.next.call(null,seq16371__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__16372,G__16373,seq16371__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__8627__auto___16381 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16382 = arguments.length;
var i__8588__auto___16383 = (0);
while(true){
if((i__8588__auto___16383 < len__8587__auto___16382)){
args__8594__auto__.push((arguments[i__8588__auto___16383]));

var G__16384 = (i__8588__auto___16383 + (1));
i__8588__auto___16383 = G__16384;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq16378){
var G__16379 = cljs.core.first.call(null,seq16378);
var seq16378__$1 = cljs.core.next.call(null,seq16378);
var G__16380 = cljs.core.first.call(null,seq16378__$1);
var seq16378__$2 = cljs.core.next.call(null,seq16378__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__16379,G__16380,seq16378__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__8627__auto___16385 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__8627__auto___16386 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__8627__auto___16390 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16391 = arguments.length;
var i__8588__auto___16392 = (0);
while(true){
if((i__8588__auto___16392 < len__8587__auto___16391)){
args__8594__auto__.push((arguments[i__8588__auto___16392]));

var G__16393 = (i__8588__auto___16392 + (1));
i__8588__auto___16392 = G__16393;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq16387){
var G__16388 = cljs.core.first.call(null,seq16387);
var seq16387__$1 = cljs.core.next.call(null,seq16387);
var G__16389 = cljs.core.first.call(null,seq16387__$1);
var seq16387__$2 = cljs.core.next.call(null,seq16387__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__16388,G__16389,seq16387__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__8627__auto___16394 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__8627__auto___16395 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__8627__auto___16399 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16400 = arguments.length;
var i__8588__auto___16401 = (0);
while(true){
if((i__8588__auto___16401 < len__8587__auto___16400)){
args__8594__auto__.push((arguments[i__8588__auto___16401]));

var G__16402 = (i__8588__auto___16401 + (1));
i__8588__auto___16401 = G__16402;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq16396){
var G__16397 = cljs.core.first.call(null,seq16396);
var seq16396__$1 = cljs.core.next.call(null,seq16396);
var G__16398 = cljs.core.first.call(null,seq16396__$1);
var seq16396__$2 = cljs.core.next.call(null,seq16396__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__16397,G__16398,seq16396__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__8627__auto___16406 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16407 = arguments.length;
var i__8588__auto___16408 = (0);
while(true){
if((i__8588__auto___16408 < len__8587__auto___16407)){
args__8594__auto__.push((arguments[i__8588__auto___16408]));

var G__16409 = (i__8588__auto___16408 + (1));
i__8588__auto___16408 = G__16409;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq16403){
var G__16404 = cljs.core.first.call(null,seq16403);
var seq16403__$1 = cljs.core.next.call(null,seq16403);
var G__16405 = cljs.core.first.call(null,seq16403__$1);
var seq16403__$2 = cljs.core.next.call(null,seq16403__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__16404,G__16405,seq16403__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__8627__auto___16410 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__8627__auto___16411 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__8627__auto___16412 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__8627__auto___16416 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16417 = arguments.length;
var i__8588__auto___16418 = (0);
while(true){
if((i__8588__auto___16418 < len__8587__auto___16417)){
args__8594__auto__.push((arguments[i__8588__auto___16418]));

var G__16419 = (i__8588__auto___16418 + (1));
i__8588__auto___16418 = G__16419;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq16413){
var G__16414 = cljs.core.first.call(null,seq16413);
var seq16413__$1 = cljs.core.next.call(null,seq16413);
var G__16415 = cljs.core.first.call(null,seq16413__$1);
var seq16413__$2 = cljs.core.next.call(null,seq16413__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__16414,G__16415,seq16413__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__8627__auto___16423 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16424 = arguments.length;
var i__8588__auto___16425 = (0);
while(true){
if((i__8588__auto___16425 < len__8587__auto___16424)){
args__8594__auto__.push((arguments[i__8588__auto___16425]));

var G__16426 = (i__8588__auto___16425 + (1));
i__8588__auto___16425 = G__16426;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq16420){
var G__16421 = cljs.core.first.call(null,seq16420);
var seq16420__$1 = cljs.core.next.call(null,seq16420);
var G__16422 = cljs.core.first.call(null,seq16420__$1);
var seq16420__$2 = cljs.core.next.call(null,seq16420__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__16421,G__16422,seq16420__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__8627__auto___16434 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__16433 = arguments.length;
switch (G__16433) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16436 = arguments.length;
var i__8588__auto___16437 = (0);
while(true){
if((i__8588__auto___16437 < len__8587__auto___16436)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16437]));

var G__16438 = (i__8588__auto___16437 + (1));
i__8588__auto___16437 = G__16438;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq16428){
var G__16429 = cljs.core.first.call(null,seq16428);
var seq16428__$1 = cljs.core.next.call(null,seq16428);
var G__16430 = cljs.core.first.call(null,seq16428__$1);
var seq16428__$2 = cljs.core.next.call(null,seq16428__$1);
var G__16431 = cljs.core.first.call(null,seq16428__$2);
var seq16428__$3 = cljs.core.next.call(null,seq16428__$2);
var G__16432 = cljs.core.first.call(null,seq16428__$3);
var seq16428__$4 = cljs.core.next.call(null,seq16428__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__16429,G__16430,G__16431,G__16432,seq16428__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__8627__auto___16446 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__16445 = arguments.length;
switch (G__16445) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16448 = arguments.length;
var i__8588__auto___16449 = (0);
while(true){
if((i__8588__auto___16449 < len__8587__auto___16448)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16449]));

var G__16450 = (i__8588__auto___16449 + (1));
i__8588__auto___16449 = G__16450;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq16440){
var G__16441 = cljs.core.first.call(null,seq16440);
var seq16440__$1 = cljs.core.next.call(null,seq16440);
var G__16442 = cljs.core.first.call(null,seq16440__$1);
var seq16440__$2 = cljs.core.next.call(null,seq16440__$1);
var G__16443 = cljs.core.first.call(null,seq16440__$2);
var seq16440__$3 = cljs.core.next.call(null,seq16440__$2);
var G__16444 = cljs.core.first.call(null,seq16440__$3);
var seq16440__$4 = cljs.core.next.call(null,seq16440__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__16441,G__16442,G__16443,G__16444,seq16440__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__8627__auto___16458 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__16457 = arguments.length;
switch (G__16457) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16460 = arguments.length;
var i__8588__auto___16461 = (0);
while(true){
if((i__8588__auto___16461 < len__8587__auto___16460)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16461]));

var G__16462 = (i__8588__auto___16461 + (1));
i__8588__auto___16461 = G__16462;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq16452){
var G__16453 = cljs.core.first.call(null,seq16452);
var seq16452__$1 = cljs.core.next.call(null,seq16452);
var G__16454 = cljs.core.first.call(null,seq16452__$1);
var seq16452__$2 = cljs.core.next.call(null,seq16452__$1);
var G__16455 = cljs.core.first.call(null,seq16452__$2);
var seq16452__$3 = cljs.core.next.call(null,seq16452__$2);
var G__16456 = cljs.core.first.call(null,seq16452__$3);
var seq16452__$4 = cljs.core.next.call(null,seq16452__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__16453,G__16454,G__16455,G__16456,seq16452__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__8627__auto___16470 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__16469 = arguments.length;
switch (G__16469) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16472 = arguments.length;
var i__8588__auto___16473 = (0);
while(true){
if((i__8588__auto___16473 < len__8587__auto___16472)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16473]));

var G__16474 = (i__8588__auto___16473 + (1));
i__8588__auto___16473 = G__16474;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq16464){
var G__16465 = cljs.core.first.call(null,seq16464);
var seq16464__$1 = cljs.core.next.call(null,seq16464);
var G__16466 = cljs.core.first.call(null,seq16464__$1);
var seq16464__$2 = cljs.core.next.call(null,seq16464__$1);
var G__16467 = cljs.core.first.call(null,seq16464__$2);
var seq16464__$3 = cljs.core.next.call(null,seq16464__$2);
var G__16468 = cljs.core.first.call(null,seq16464__$3);
var seq16464__$4 = cljs.core.next.call(null,seq16464__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__16465,G__16466,G__16467,G__16468,seq16464__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__8627__auto___16482 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__16481 = arguments.length;
switch (G__16481) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16484 = arguments.length;
var i__8588__auto___16485 = (0);
while(true){
if((i__8588__auto___16485 < len__8587__auto___16484)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16485]));

var G__16486 = (i__8588__auto___16485 + (1));
i__8588__auto___16485 = G__16486;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq16476){
var G__16477 = cljs.core.first.call(null,seq16476);
var seq16476__$1 = cljs.core.next.call(null,seq16476);
var G__16478 = cljs.core.first.call(null,seq16476__$1);
var seq16476__$2 = cljs.core.next.call(null,seq16476__$1);
var G__16479 = cljs.core.first.call(null,seq16476__$2);
var seq16476__$3 = cljs.core.next.call(null,seq16476__$2);
var G__16480 = cljs.core.first.call(null,seq16476__$3);
var seq16476__$4 = cljs.core.next.call(null,seq16476__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__16477,G__16478,G__16479,G__16480,seq16476__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__8627__auto___16494 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__16493 = arguments.length;
switch (G__16493) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16496 = arguments.length;
var i__8588__auto___16497 = (0);
while(true){
if((i__8588__auto___16497 < len__8587__auto___16496)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16497]));

var G__16498 = (i__8588__auto___16497 + (1));
i__8588__auto___16497 = G__16498;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq16488){
var G__16489 = cljs.core.first.call(null,seq16488);
var seq16488__$1 = cljs.core.next.call(null,seq16488);
var G__16490 = cljs.core.first.call(null,seq16488__$1);
var seq16488__$2 = cljs.core.next.call(null,seq16488__$1);
var G__16491 = cljs.core.first.call(null,seq16488__$2);
var seq16488__$3 = cljs.core.next.call(null,seq16488__$2);
var G__16492 = cljs.core.first.call(null,seq16488__$3);
var seq16488__$4 = cljs.core.next.call(null,seq16488__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__16489,G__16490,G__16491,G__16492,seq16488__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__8627__auto___16506 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__16505 = arguments.length;
switch (G__16505) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16508 = arguments.length;
var i__8588__auto___16509 = (0);
while(true){
if((i__8588__auto___16509 < len__8587__auto___16508)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16509]));

var G__16510 = (i__8588__auto___16509 + (1));
i__8588__auto___16509 = G__16510;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq16500){
var G__16501 = cljs.core.first.call(null,seq16500);
var seq16500__$1 = cljs.core.next.call(null,seq16500);
var G__16502 = cljs.core.first.call(null,seq16500__$1);
var seq16500__$2 = cljs.core.next.call(null,seq16500__$1);
var G__16503 = cljs.core.first.call(null,seq16500__$2);
var seq16500__$3 = cljs.core.next.call(null,seq16500__$2);
var G__16504 = cljs.core.first.call(null,seq16500__$3);
var seq16500__$4 = cljs.core.next.call(null,seq16500__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__16501,G__16502,G__16503,G__16504,seq16500__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__8627__auto___16518 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__16517 = arguments.length;
switch (G__16517) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16520 = arguments.length;
var i__8588__auto___16521 = (0);
while(true){
if((i__8588__auto___16521 < len__8587__auto___16520)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16521]));

var G__16522 = (i__8588__auto___16521 + (1));
i__8588__auto___16521 = G__16522;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq16512){
var G__16513 = cljs.core.first.call(null,seq16512);
var seq16512__$1 = cljs.core.next.call(null,seq16512);
var G__16514 = cljs.core.first.call(null,seq16512__$1);
var seq16512__$2 = cljs.core.next.call(null,seq16512__$1);
var G__16515 = cljs.core.first.call(null,seq16512__$2);
var seq16512__$3 = cljs.core.next.call(null,seq16512__$2);
var G__16516 = cljs.core.first.call(null,seq16512__$3);
var seq16512__$4 = cljs.core.next.call(null,seq16512__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__16513,G__16514,G__16515,G__16516,seq16512__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__8627__auto___16530 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__16529 = arguments.length;
switch (G__16529) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16532 = arguments.length;
var i__8588__auto___16533 = (0);
while(true){
if((i__8588__auto___16533 < len__8587__auto___16532)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16533]));

var G__16534 = (i__8588__auto___16533 + (1));
i__8588__auto___16533 = G__16534;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq16524){
var G__16525 = cljs.core.first.call(null,seq16524);
var seq16524__$1 = cljs.core.next.call(null,seq16524);
var G__16526 = cljs.core.first.call(null,seq16524__$1);
var seq16524__$2 = cljs.core.next.call(null,seq16524__$1);
var G__16527 = cljs.core.first.call(null,seq16524__$2);
var seq16524__$3 = cljs.core.next.call(null,seq16524__$2);
var G__16528 = cljs.core.first.call(null,seq16524__$3);
var seq16524__$4 = cljs.core.next.call(null,seq16524__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__16525,G__16526,G__16527,G__16528,seq16524__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__8627__auto___16535 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__8627__auto___16536 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__8627__auto___16537 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16538 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16539 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16549 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__16548 = arguments.length;
switch (G__16548) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16551 = arguments.length;
var i__8588__auto___16552 = (0);
while(true){
if((i__8588__auto___16552 < len__8587__auto___16551)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16552]));

var G__16553 = (i__8588__auto___16552 + (1));
i__8588__auto___16552 = G__16553;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16540__auto__","x__16540__auto__",1265232942,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__16541__auto__","y__16541__auto__",-1550303179,null)),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16540__auto__","x__16540__auto__",1265232942,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__16541__auto__","y__16541__auto__",-1550303179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16540__auto__","x__16540__auto__",1265232942,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__16541__auto__","y__16541__auto__",-1550303179,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq16543){
var G__16544 = cljs.core.first.call(null,seq16543);
var seq16543__$1 = cljs.core.next.call(null,seq16543);
var G__16545 = cljs.core.first.call(null,seq16543__$1);
var seq16543__$2 = cljs.core.next.call(null,seq16543__$1);
var G__16546 = cljs.core.first.call(null,seq16543__$2);
var seq16543__$3 = cljs.core.next.call(null,seq16543__$2);
var G__16547 = cljs.core.first.call(null,seq16543__$3);
var seq16543__$4 = cljs.core.next.call(null,seq16543__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__16544,G__16545,G__16546,G__16547,seq16543__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__8627__auto___16563 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__16562 = arguments.length;
switch (G__16562) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16565 = arguments.length;
var i__8588__auto___16566 = (0);
while(true){
if((i__8588__auto___16566 < len__8587__auto___16565)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16566]));

var G__16567 = (i__8588__auto___16566 + (1));
i__8588__auto___16566 = G__16567;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16554__auto__","x__16554__auto__",1781612663,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__16555__auto__","y__16555__auto__",1226315639,null)),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16554__auto__","x__16554__auto__",1781612663,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__16555__auto__","y__16555__auto__",1226315639,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16554__auto__","x__16554__auto__",1781612663,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__16555__auto__","y__16555__auto__",1226315639,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq16557){
var G__16558 = cljs.core.first.call(null,seq16557);
var seq16557__$1 = cljs.core.next.call(null,seq16557);
var G__16559 = cljs.core.first.call(null,seq16557__$1);
var seq16557__$2 = cljs.core.next.call(null,seq16557__$1);
var G__16560 = cljs.core.first.call(null,seq16557__$2);
var seq16557__$3 = cljs.core.next.call(null,seq16557__$2);
var G__16561 = cljs.core.first.call(null,seq16557__$3);
var seq16557__$4 = cljs.core.next.call(null,seq16557__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__16558,G__16559,G__16560,G__16561,seq16557__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__8627__auto___16568 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__8627__auto___16569 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__8627__auto___16577 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__16576 = arguments.length;
switch (G__16576) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16579 = arguments.length;
var i__8588__auto___16580 = (0);
while(true){
if((i__8588__auto___16580 < len__8587__auto___16579)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16580]));

var G__16581 = (i__8588__auto___16580 + (1));
i__8588__auto___16580 = G__16581;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq16571){
var G__16572 = cljs.core.first.call(null,seq16571);
var seq16571__$1 = cljs.core.next.call(null,seq16571);
var G__16573 = cljs.core.first.call(null,seq16571__$1);
var seq16571__$2 = cljs.core.next.call(null,seq16571__$1);
var G__16574 = cljs.core.first.call(null,seq16571__$2);
var seq16571__$3 = cljs.core.next.call(null,seq16571__$2);
var G__16575 = cljs.core.first.call(null,seq16571__$3);
var seq16571__$4 = cljs.core.next.call(null,seq16571__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__16572,G__16573,G__16574,G__16575,seq16571__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__8627__auto___16589 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__16588 = arguments.length;
switch (G__16588) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16591 = arguments.length;
var i__8588__auto___16592 = (0);
while(true){
if((i__8588__auto___16592 < len__8587__auto___16591)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16592]));

var G__16593 = (i__8588__auto___16592 + (1));
i__8588__auto___16592 = G__16593;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq16583){
var G__16584 = cljs.core.first.call(null,seq16583);
var seq16583__$1 = cljs.core.next.call(null,seq16583);
var G__16585 = cljs.core.first.call(null,seq16583__$1);
var seq16583__$2 = cljs.core.next.call(null,seq16583__$1);
var G__16586 = cljs.core.first.call(null,seq16583__$2);
var seq16583__$3 = cljs.core.next.call(null,seq16583__$2);
var G__16587 = cljs.core.first.call(null,seq16583__$3);
var seq16583__$4 = cljs.core.next.call(null,seq16583__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__16584,G__16585,G__16586,G__16587,seq16583__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__8627__auto___16601 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__16600 = arguments.length;
switch (G__16600) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16603 = arguments.length;
var i__8588__auto___16604 = (0);
while(true){
if((i__8588__auto___16604 < len__8587__auto___16603)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16604]));

var G__16605 = (i__8588__auto___16604 + (1));
i__8588__auto___16604 = G__16605;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq16595){
var G__16596 = cljs.core.first.call(null,seq16595);
var seq16595__$1 = cljs.core.next.call(null,seq16595);
var G__16597 = cljs.core.first.call(null,seq16595__$1);
var seq16595__$2 = cljs.core.next.call(null,seq16595__$1);
var G__16598 = cljs.core.first.call(null,seq16595__$2);
var seq16595__$3 = cljs.core.next.call(null,seq16595__$2);
var G__16599 = cljs.core.first.call(null,seq16595__$3);
var seq16595__$4 = cljs.core.next.call(null,seq16595__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__16596,G__16597,G__16598,G__16599,seq16595__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__8627__auto___16606 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__8627__auto___16614 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__16613 = arguments.length;
switch (G__16613) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16616 = arguments.length;
var i__8588__auto___16617 = (0);
while(true){
if((i__8588__auto___16617 < len__8587__auto___16616)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16617]));

var G__16618 = (i__8588__auto___16617 + (1));
i__8588__auto___16617 = G__16618;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq16608){
var G__16609 = cljs.core.first.call(null,seq16608);
var seq16608__$1 = cljs.core.next.call(null,seq16608);
var G__16610 = cljs.core.first.call(null,seq16608__$1);
var seq16608__$2 = cljs.core.next.call(null,seq16608__$1);
var G__16611 = cljs.core.first.call(null,seq16608__$2);
var seq16608__$3 = cljs.core.next.call(null,seq16608__$2);
var G__16612 = cljs.core.first.call(null,seq16608__$3);
var seq16608__$4 = cljs.core.next.call(null,seq16608__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__16609,G__16610,G__16611,G__16612,seq16608__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__8627__auto___16626 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__16625 = arguments.length;
switch (G__16625) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___16628 = arguments.length;
var i__8588__auto___16629 = (0);
while(true){
if((i__8588__auto___16629 < len__8587__auto___16628)){
args_arr__8606__auto__.push((arguments[i__8588__auto___16629]));

var G__16630 = (i__8588__auto___16629 + (1));
i__8588__auto___16629 = G__16630;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq16620){
var G__16621 = cljs.core.first.call(null,seq16620);
var seq16620__$1 = cljs.core.next.call(null,seq16620);
var G__16622 = cljs.core.first.call(null,seq16620__$1);
var seq16620__$2 = cljs.core.next.call(null,seq16620__$1);
var G__16623 = cljs.core.first.call(null,seq16620__$2);
var seq16620__$3 = cljs.core.next.call(null,seq16620__$2);
var G__16624 = cljs.core.first.call(null,seq16620__$3);
var seq16620__$4 = cljs.core.next.call(null,seq16620__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__16621,G__16622,G__16623,G__16624,seq16620__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__8627__auto___16631 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__8627__auto___16632 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__8627__auto___16633 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__8627__auto___16634 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__8627__auto___16635 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__8627__auto___16636 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__8627__auto___16637 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__8627__auto___16638 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__8627__auto___16639 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__8627__auto___16640 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__8280__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__8627__auto___16642 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__16641__auto__","h__16641__auto__",1311929821,null)),(function (){var x__8280__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__16641__auto__","h__16641__auto__",1311929821,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__16641__auto__","h__16641__auto__",1311929821,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__16641__auto__","h__16641__auto__",1311929821,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__16641__auto__","h__16641__auto__",1311929821,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__16641__auto__","h__16641__auto__",1311929821,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8280__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16643__auto__","x__16643__auto__",-584720771,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16643__auto__","x__16643__auto__",-584720771,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
var ret__8627__auto___16651 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16652 = arguments.length;
var i__8588__auto___16653 = (0);
while(true){
if((i__8588__auto___16653 < len__8587__auto___16652)){
args__8594__auto__.push((arguments[i__8588__auto___16653]));

var G__16654 = (i__8588__auto___16653 + (1));
i__8588__auto___16653 = G__16654;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((6) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__8595__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq16644){
var G__16645 = cljs.core.first.call(null,seq16644);
var seq16644__$1 = cljs.core.next.call(null,seq16644);
var G__16646 = cljs.core.first.call(null,seq16644__$1);
var seq16644__$2 = cljs.core.next.call(null,seq16644__$1);
var G__16647 = cljs.core.first.call(null,seq16644__$2);
var seq16644__$3 = cljs.core.next.call(null,seq16644__$2);
var G__16648 = cljs.core.first.call(null,seq16644__$3);
var seq16644__$4 = cljs.core.next.call(null,seq16644__$3);
var G__16649 = cljs.core.first.call(null,seq16644__$4);
var seq16644__$5 = cljs.core.next.call(null,seq16644__$4);
var G__16650 = cljs.core.first.call(null,seq16644__$5);
var seq16644__$6 = cljs.core.next.call(null,seq16644__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__16645,G__16646,G__16647,G__16648,G__16649,G__16650,seq16644__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = clojure.walk.postwalk.call(null,(function (p1__16655_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__16655_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__16655_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__16655_SHARP_));
} else {
return p1__16655_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
var ret__8627__auto___16660 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__16656,fkv){
var vec__16657 = p__16656;
var f1 = cljs.core.nth.call(null,vec__16657,(0),null);
var k = cljs.core.nth.call(null,vec__16657,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__8627__auto___16664 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16665 = arguments.length;
var i__8588__auto___16666 = (0);
while(true){
if((i__8588__auto___16666 < len__8587__auto___16665)){
args__8594__auto__.push((arguments[i__8588__auto___16666]));

var G__16667 = (i__8588__auto___16666 + (1));
i__8588__auto___16666 = G__16667;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__8280__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__8280__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__8280__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8280__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),locals,(function (){var x__8280__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8280__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),locals,(function (){var x__8280__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq16661){
var G__16662 = cljs.core.first.call(null,seq16661);
var seq16661__$1 = cljs.core.next.call(null,seq16661);
var G__16663 = cljs.core.first.call(null,seq16661__$1);
var seq16661__$2 = cljs.core.next.call(null,seq16661__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__16662,G__16663,seq16661__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__8627__auto___16672 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16673 = arguments.length;
var i__8588__auto___16674 = (0);
while(true){
if((i__8588__auto___16674 < len__8587__auto___16673)){
args__8594__auto__.push((arguments[i__8588__auto___16674]));

var G__16675 = (i__8588__auto___16674 + (1));
i__8588__auto___16674 = G__16675;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq16668){
var G__16669 = cljs.core.first.call(null,seq16668);
var seq16668__$1 = cljs.core.next.call(null,seq16668);
var G__16670 = cljs.core.first.call(null,seq16668__$1);
var seq16668__$2 = cljs.core.next.call(null,seq16668__$1);
var G__16671 = cljs.core.first.call(null,seq16668__$2);
var seq16668__$3 = cljs.core.next.call(null,seq16668__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16669,G__16670,G__16671,seq16668__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__8627__auto___16680 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16681 = arguments.length;
var i__8588__auto___16682 = (0);
while(true){
if((i__8588__auto___16682 < len__8587__auto___16681)){
args__8594__auto__.push((arguments[i__8588__auto___16682]));

var G__16683 = (i__8588__auto___16682 + (1));
i__8588__auto___16682 = G__16683;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__8280__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq16676){
var G__16677 = cljs.core.first.call(null,seq16676);
var seq16676__$1 = cljs.core.next.call(null,seq16676);
var G__16678 = cljs.core.first.call(null,seq16676__$1);
var seq16676__$2 = cljs.core.next.call(null,seq16676__$1);
var G__16679 = cljs.core.first.call(null,seq16676__$2);
var seq16676__$3 = cljs.core.next.call(null,seq16676__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__16677,G__16678,G__16679,seq16676__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__8627__auto___16684 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__8627__auto___16689 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16690 = arguments.length;
var i__8588__auto___16691 = (0);
while(true){
if((i__8588__auto___16691 < len__8587__auto___16690)){
args__8594__auto__.push((arguments[i__8588__auto___16691]));

var G__16692 = (i__8588__auto___16691 + (1));
i__8588__auto___16691 = G__16692;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq16685){
var G__16686 = cljs.core.first.call(null,seq16685);
var seq16685__$1 = cljs.core.next.call(null,seq16685);
var G__16687 = cljs.core.first.call(null,seq16685__$1);
var seq16685__$2 = cljs.core.next.call(null,seq16685__$1);
var G__16688 = cljs.core.first.call(null,seq16685__$2);
var seq16685__$3 = cljs.core.next.call(null,seq16685__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__16686,G__16687,G__16688,seq16685__$3);
});

return null;
})()
;
cljs.core$macros.this_as.cljs$lang$macro = true;

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__7406__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__7406__auto__)){
var and__7406__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__7406__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__7406__auto____$1;
}
} else {
return and__7406__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__16693 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__16694 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__16693;
s = G__16694;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__16695){
var vec__16696 = p__16695;
var p = cljs.core.nth.call(null,vec__16696,(0),null);
var sigs = cljs.core.nth.call(null,vec__16696,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__8280__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__16696,p,sigs){
return (function (p__16699){
var vec__16700 = p__16699;
var seq__16701 = cljs.core.seq.call(null,vec__16700);
var first__16702 = cljs.core.first.call(null,seq__16701);
var seq__16701__$1 = cljs.core.next.call(null,seq__16701);
var f = first__16702;
var meths = seq__16701__$1;
var form = vec__16700;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__8280__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(psym,pfn_prefix,vec__16696,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__8373__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8374__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8375__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8376__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8377__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__8373__auto__,prefer_table__8374__auto__,method_cache__8375__auto__,cached_hierarchy__8376__auto__,hierarchy__8377__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__8373__auto__,prefer_table__8374__auto__,method_cache__8375__auto__,cached_hierarchy__8376__auto__,hierarchy__8377__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8377__auto__,method_table__8373__auto__,prefer_table__8374__auto__,method_cache__8375__auto__,cached_hierarchy__8376__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8280__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8280__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__8280__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__16703){
var vec__16704 = p__16703;
var seq__16705 = cljs.core.seq.call(null,vec__16704);
var first__16706 = cljs.core.first.call(null,seq__16705);
var seq__16705__$1 = cljs.core.next.call(null,seq__16705);
var vec__16707 = first__16706;
var seq__16708 = cljs.core.seq.call(null,vec__16707);
var first__16709 = cljs.core.first.call(null,seq__16708);
var seq__16708__$1 = cljs.core.next.call(null,seq__16708);
var this$ = first__16709;
var args = seq__16708__$1;
var sig = vec__16707;
var body = seq__16705__$1;
var x__8280__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__16710){
var vec__16711 = p__16710;
var seq__16712 = cljs.core.seq.call(null,vec__16711);
var first__16713 = cljs.core.first.call(null,seq__16712);
var seq__16712__$1 = cljs.core.next.call(null,seq__16712);
var vec__16714 = first__16713;
var seq__16715 = cljs.core.seq.call(null,vec__16714);
var first__16716 = cljs.core.first.call(null,seq__16715);
var seq__16715__$1 = cljs.core.next.call(null,seq__16715);
var this$ = first__16716;
var args = seq__16715__$1;
var sig = vec__16714;
var body = seq__16712__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8280__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__16717){
var vec__16718 = p__16717;
var seq__16719 = cljs.core.seq.call(null,vec__16718);
var first__16720 = cljs.core.first.call(null,seq__16719);
var seq__16719__$1 = cljs.core.next.call(null,seq__16719);
var vec__16721 = first__16720;
var seq__16722 = cljs.core.seq.call(null,vec__16721);
var first__16723 = cljs.core.first.call(null,seq__16722);
var seq__16722__$1 = cljs.core.next.call(null,seq__16722);
var this$ = first__16723;
var args = seq__16722__$1;
var sig = vec__16721;
var body = seq__16719__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8280__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__16724){
var vec__16725 = p__16724;
var seq__16726 = cljs.core.seq.call(null,vec__16725);
var first__16727 = cljs.core.first.call(null,seq__16726);
var seq__16726__$1 = cljs.core.next.call(null,seq__16726);
var vec__16728 = first__16727;
var seq__16729 = cljs.core.seq.call(null,vec__16728);
var first__16730 = cljs.core.first.call(null,seq__16729);
var seq__16729__$1 = cljs.core.next.call(null,seq__16729);
var this$ = first__16730;
var args = seq__16729__$1;
var sig = vec__16728;
var body = seq__16726__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,this_SINGLEQUOTE_,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8280__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__16732){
var vec__16733 = p__16732;
var seq__16734 = cljs.core.seq.call(null,vec__16733);
var first__16735 = cljs.core.first.call(null,seq__16734);
var seq__16734__$1 = cljs.core.next.call(null,seq__16734);
var f = first__16735;
var meths = seq__16734__$1;
var form = vec__16733;
var vec__16736 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__16736,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__16736,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__16736,f__$1,meths__$1,vec__16733,seq__16734,first__16735,seq__16734__$1,f,meths,form){
return (function (p1__16731_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__16731_SHARP_);
});})(vec__16736,f__$1,meths__$1,vec__16733,seq__16734,first__16735,seq__16734__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__16740){
var vec__16741 = p__16740;
var seq__16742 = cljs.core.seq.call(null,vec__16741);
var first__16743 = cljs.core.first.call(null,seq__16742);
var seq__16742__$1 = cljs.core.next.call(null,seq__16742);
var f = first__16743;
var meths = seq__16742__$1;
var form = vec__16741;
return cljs.core.map.call(null,((function (vec__16741,seq__16742,first__16743,seq__16742__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(vec__16741,seq__16742,first__16743,seq__16742__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__16741,seq__16742,first__16743,seq__16742__$1,f,meths,form){
return (function (p1__16739_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__16739_SHARP_);
});})(vec__16741,seq__16742,first__16743,seq__16742__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__16745){
var vec__16746 = p__16745;
var seq__16747 = cljs.core.seq.call(null,vec__16746);
var first__16748 = cljs.core.first.call(null,seq__16747);
var seq__16747__$1 = cljs.core.next.call(null,seq__16747);
var f = first__16748;
var meths = seq__16747__$1;
var form = vec__16746;
var meths__$1 = cljs.core.map.call(null,((function (vec__16746,seq__16747,first__16748,seq__16747__$1,f,meths,form){
return (function (p1__16744_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__16744_SHARP_);
});})(vec__16746,seq__16747,first__16748,seq__16747__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__8280__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__8280__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__8280__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__8280__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__16749){
var vec__16750 = p__16749;
var seq__16751 = cljs.core.seq.call(null,vec__16750);
var first__16752 = cljs.core.first.call(null,seq__16751);
var seq__16751__$1 = cljs.core.next.call(null,seq__16751);
var f = first__16752;
var meths = seq__16751__$1;
var form = vec__16750;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__16750,seq__16751,first__16752,seq__16751__$1,f,meths,form){
return (function (p__16753){
var vec__16754 = p__16753;
var seq__16755 = cljs.core.seq.call(null,vec__16754);
var first__16756 = cljs.core.first.call(null,seq__16755);
var seq__16755__$1 = cljs.core.next.call(null,seq__16755);
var sig = first__16756;
var body = seq__16755__$1;
var meth = vec__16754;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(pf,vec__16750,seq__16751,first__16752,seq__16751__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__16757){
var vec__16758 = p__16757;
var p = cljs.core.nth.call(null,vec__16758,(0),null);
var sigs = cljs.core.nth.call(null,vec__16758,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__16758,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__16758,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__16761 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__16761,(0),null);
var sigs = cljs.core.nth.call(null,vec__16761,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_16764 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_16764))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"name","name",1843675177),fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__16765 = cljs.core.next.call(null,sigs__$1);
var G__16766 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__16765;
seen = G__16766;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_16770 = cljs.core.PersistentHashSet.EMPTY;
var methods_16771__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_16771__$1)){
var vec__16767_16772 = cljs.core.first.call(null,methods_16771__$1);
var fname_16773 = cljs.core.nth.call(null,vec__16767_16772,(0),null);
var method_16774 = vec__16767_16772;
if(cljs.core.contains_QMARK_.call(null,seen_16770,fname_16773)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_16773], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_16774);

var G__16775 = cljs.core.conj.call(null,seen_16770,fname_16773);
var G__16776 = cljs.core.next.call(null,methods_16771__$1);
seen_16770 = G__16775;
methods_16771__$1 = G__16776;
continue;
} else {
}
break;
}

var G__16777 = cljs.core.conj.call(null,protos,proto);
var G__16778 = impls__$2;
protos = G__16777;
impls__$1 = G__16778;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__8627__auto___16787 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16788 = arguments.length;
var i__8588__auto___16789 = (0);
while(true){
if((i__8588__auto___16789 < len__8587__auto___16788)){
args__8594__auto__.push((arguments[i__8588__auto___16789]));

var G__16790 = (i__8588__auto___16789 + (1));
i__8588__auto___16789 = G__16790;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__16784 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__16784,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__16784,(1),null);
if(cljs.core.truth_((function (){var and__7406__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__7406__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__7406__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__16784,type,assign_impls){
return (function (p1__16779_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__16779_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__16784,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq16780){
var G__16781 = cljs.core.first.call(null,seq16780);
var seq16780__$1 = cljs.core.next.call(null,seq16780);
var G__16782 = cljs.core.first.call(null,seq16780__$1);
var seq16780__$2 = cljs.core.next.call(null,seq16780__$1);
var G__16783 = cljs.core.first.call(null,seq16780__$2);
var seq16780__$3 = cljs.core.next.call(null,seq16780__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__16781,G__16782,G__16783,seq16780__$3);
});

return null;
})()
;
cljs.core$macros.extend_type.cljs$lang$macro = true;

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__16792){
var vec__16793 = p__16792;
var f = cljs.core.nth.call(null,vec__16793,(0),null);
var sigs = cljs.core.nth.call(null,vec__16793,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__16793,f,sigs){
return (function (p1__16791_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__16791_SHARP_),cljs.core.nnext.call(null,p1__16791_SHARP_));
});})(vec__16793,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__16797 = arguments.length;
switch (G__16797) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__16799 = ret__$1;
var G__16800 = specs__$2;
ret = G__16799;
specs__$1 = G__16800;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__16801_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__16801_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8280__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8280__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__8627__auto___16813 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16814 = arguments.length;
var i__8588__auto___16815 = (0);
while(true){
if((i__8588__auto___16815 < len__8587__auto___16814)){
args__8594__auto__.push((arguments[i__8588__auto___16815]));

var G__16816 = (i__8588__auto___16815 + (1));
i__8588__auto___16815 = G__16816;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((4) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8595__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__16810 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__16810,(0),null);
var pmasks = cljs.core.nth.call(null,vec__16810,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__8280__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8280__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__8280__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__8280__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__8280__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__8280__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16802__auto__","this__16802__auto__",-343323691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__16803__auto__","writer__16803__auto__",1848454768,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__16804__auto__","opt__16804__auto__",1067063241,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__16803__auto__","writer__16803__auto__",1848454768,null)),(function (){var x__8280__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq16805){
var G__16806 = cljs.core.first.call(null,seq16805);
var seq16805__$1 = cljs.core.next.call(null,seq16805);
var G__16807 = cljs.core.first.call(null,seq16805__$1);
var seq16805__$2 = cljs.core.next.call(null,seq16805__$1);
var G__16808 = cljs.core.first.call(null,seq16805__$2);
var seq16805__$3 = cljs.core.next.call(null,seq16805__$2);
var G__16809 = cljs.core.first.call(null,seq16805__$3);
var seq16805__$4 = cljs.core.next.call(null,seq16805__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__16806,G__16807,G__16808,G__16809,seq16805__$4);
});

return null;
})()
;
cljs.core$macros.deftype.cljs$lang$macro = true;

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__16817_SHARP_){
return cljs.core.with_meta.call(null,p1__16817_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rname)),"{"].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16818__auto__","this__16818__auto__",1076220555,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8280__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16819__auto__","this__16819__auto__",-1266621383,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16819__auto__","this__16819__auto__",-1266621383,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__16820__auto__","coll__16820__auto__",-1599145175,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__8280__auto__ = cljs.core.hash.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,rname))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__16820__auto__","coll__16820__auto__",-1599145175,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null)),(function (){var x__8280__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__8280__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__8280__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.map.call(null,((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8280__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__8280__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__8280__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__8280__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16821__auto__","this__16821__auto__",785846005,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16822__auto__","this__16822__auto__",1732238187,null)),(function (){var x__8280__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8280__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16823__auto__","this__16823__auto__",762867895,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16824__auto__","k__16824__auto__",1020229453,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16823__auto__","this__16823__auto__",762867895,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16824__auto__","k__16824__auto__",1020229453,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16825__auto__","this__16825__auto__",-559235676,null)),(function (){var x__8280__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__16826__auto__","else__16826__auto__",-1010916004,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__8280__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__8280__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__16826__auto__","else__16826__auto__",-1010916004,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16827__auto__","this__16827__auto__",514848525,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__8280__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16828__auto__","this__16828__auto__",730284274,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__16829__auto__","entry__16829__auto__",1885597849,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__16829__auto__","entry__16829__auto__",1885597849,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16828__auto__","this__16828__auto__",730284274,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__16829__auto__","entry__16829__auto__",1885597849,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__16829__auto__","entry__16829__auto__",1885597849,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16828__auto__","this__16828__auto__",730284274,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__16829__auto__","entry__16829__auto__",1885597849,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16830__auto__","this__16830__auto__",-1212728766,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16831__auto__","k__16831__auto__",701537614,null)),(function (){var x__8280__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16831__auto__","k__16831__auto__",701537614,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8280__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16831__auto__","k__16831__auto__",701537614,null)),(function (){var x__8280__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16832__auto__","this__16832__auto__",427170244,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16833__auto__","k__16833__auto__",-282405388,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__8280__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16833__auto__","k__16833__auto__",-282405388,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__8280__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16832__auto__","this__16832__auto__",427170244,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16833__auto__","k__16833__auto__",-282405388,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8280__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16833__auto__","k__16833__auto__",-282405388,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16835__auto__","this__16835__auto__",-1730580720,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__16834_SHARP_){
return cljs.core._conj.call(null,(function (){var x__8280__auto__ = cljs.core.keyword.call(null,p1__16834_SHARP_);
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = p1__16834_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__8280__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16837__auto__","this__16837__auto__",1221739772,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__16838__auto__","writer__16838__auto__",-2100120411,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__16839__auto__","opts__16839__auto__",-884553263,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__16840__auto__","pr-pair__16840__auto__",2080218227,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__16841__auto__","keyval__16841__auto__",661917745,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__16838__auto__","writer__16838__auto__",-2100120411,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__16839__auto__","opts__16839__auto__",-884553263,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__16841__auto__","keyval__16841__auto__",661917745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__16838__auto__","writer__16838__auto__",-2100120411,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__16840__auto__","pr-pair__16840__auto__",2080218227,null)),(function (){var x__8280__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__16839__auto__","opts__16839__auto__",-884553263,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__16836_SHARP_){
return cljs.core._conj.call(null,(function (){var x__8280__auto__ = cljs.core.keyword.call(null,p1__16836_SHARP_);
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = p1__16836_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())))], null));
var vec__16842 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__16842,(0),null);
var pmasks = cljs.core.nth.call(null,vec__16842,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__8280__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__8280__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8280__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8280__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__8280__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
var ret__8627__auto___16852 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16853 = arguments.length;
var i__8588__auto___16854 = (0);
while(true){
if((i__8588__auto___16854 < len__8587__auto___16853)){
args__8594__auto__.push((arguments[i__8588__auto___16854]));

var G__16855 = (i__8588__auto___16854 + (1));
i__8588__auto___16854 = G__16855;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((4) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8595__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__8280__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__8280__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__8280__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16845__auto__","this__16845__auto__",-631971971,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__8280__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__8280__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16845__auto__","this__16845__auto__",-631971971,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__16846__auto__","writer__16846__auto__",-1565510372,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__16846__auto__","writer__16846__auto__",-1565510372,null)),(function (){var x__8280__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq16847){
var G__16848 = cljs.core.first.call(null,seq16847);
var seq16847__$1 = cljs.core.next.call(null,seq16847);
var G__16849 = cljs.core.first.call(null,seq16847__$1);
var seq16847__$2 = cljs.core.next.call(null,seq16847__$1);
var G__16850 = cljs.core.first.call(null,seq16847__$2);
var seq16847__$3 = cljs.core.next.call(null,seq16847__$2);
var G__16851 = cljs.core.first.call(null,seq16847__$3);
var seq16847__$4 = cljs.core.next.call(null,seq16847__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__16848,G__16849,G__16850,G__16851,seq16847__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__8627__auto___16883 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16884 = arguments.length;
var i__8588__auto___16885 = (0);
while(true){
if((i__8588__auto___16885 < len__8587__auto___16884)){
args__8594__auto__.push((arguments[i__8588__auto___16885]));

var G__16886 = (i__8588__auto___16885 + (1));
i__8588__auto___16885 = G__16886;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__16862 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__16862,(0),null);
var methods$ = cljs.core.nth.call(null,vec__16862,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__16862,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__16862,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__16865 = cljs.core.seq.call(null,methods$);
var chunk__16866 = null;
var count__16867 = (0);
var i__16868 = (0);
while(true){
if((i__16868 < count__16867)){
var vec__16869 = cljs.core._nth.call(null,chunk__16866,i__16868);
var seq__16870 = cljs.core.seq.call(null,vec__16869);
var first__16871 = cljs.core.first.call(null,seq__16870);
var seq__16870__$1 = cljs.core.next.call(null,seq__16870);
var mname = first__16871;
var arities = seq__16870__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__16887 = seq__16865;
var G__16888 = chunk__16866;
var G__16889 = count__16867;
var G__16890 = (i__16868 + (1));
seq__16865 = G__16887;
chunk__16866 = G__16888;
count__16867 = G__16889;
i__16868 = G__16890;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16865);
if(temp__4657__auto__){
var seq__16865__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16865__$1)){
var c__8257__auto__ = cljs.core.chunk_first.call(null,seq__16865__$1);
var G__16891 = cljs.core.chunk_rest.call(null,seq__16865__$1);
var G__16892 = c__8257__auto__;
var G__16893 = cljs.core.count.call(null,c__8257__auto__);
var G__16894 = (0);
seq__16865 = G__16891;
chunk__16866 = G__16892;
count__16867 = G__16893;
i__16868 = G__16894;
continue;
} else {
var vec__16872 = cljs.core.first.call(null,seq__16865__$1);
var seq__16873 = cljs.core.seq.call(null,vec__16872);
var first__16874 = cljs.core.first.call(null,seq__16873);
var seq__16873__$1 = cljs.core.next.call(null,seq__16873);
var mname = first__16874;
var arities = seq__16873__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__16895 = cljs.core.next.call(null,seq__16865__$1);
var G__16896 = null;
var G__16897 = (0);
var G__16898 = (0);
seq__16865 = G__16895;
chunk__16866 = G__16896;
count__16867 = G__16897;
i__16868 = G__16898;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__16862,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__16862,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_.call(null,arg)) && (!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null)))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.call(null);

}
}
});})(p,vec__16862,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8280__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16856__auto__","x__16856__auto__",981264450,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8280__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8280__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__16857__auto__","m__16857__auto__",-97098414,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__8280__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16856__auto__","x__16856__auto__",981264450,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__16857__auto__","m__16857__auto__",-97098414,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__16857__auto__","m__16857__auto__",-97098414,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__16857__auto__","m__16857__auto__",-97098414,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__8280__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__16857__auto__","m__16857__auto__",-97098414,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__16857__auto__","m__16857__auto__",-97098414,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__8280__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(p,vec__16862,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__16862,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__16875){
var vec__16876 = p__16875;
var seq__16877 = cljs.core.seq.call(null,vec__16876);
var first__16878 = cljs.core.first.call(null,seq__16877);
var seq__16877__$1 = cljs.core.next.call(null,seq__16877);
var fname = first__16878;
var sigs = seq__16877__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__16862,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__16862,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__16879){
var vec__16880 = p__16879;
var seq__16881 = cljs.core.seq.call(null,vec__16880);
var first__16882 = cljs.core.first.call(null,seq__16881);
var seq__16881__$1 = cljs.core.next.call(null,seq__16881);
var fname = first__16882;
var sigs = seq__16881__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__8280__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__16880,seq__16881,first__16882,seq__16881__$1,fname,sigs,p,vec__16862,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__16880,seq__16881,first__16882,seq__16881__$1,fname,sigs,p,vec__16862,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__16862,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8280__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq16858){
var G__16859 = cljs.core.first.call(null,seq16858);
var seq16858__$1 = cljs.core.next.call(null,seq16858);
var G__16860 = cljs.core.first.call(null,seq16858__$1);
var seq16858__$2 = cljs.core.next.call(null,seq16858__$1);
var G__16861 = cljs.core.first.call(null,seq16858__$2);
var seq16858__$3 = cljs.core.next.call(null,seq16858__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__16859,G__16860,G__16861,seq16858__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__8627__auto___16902 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__16899 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__16899,(0),null);
var bit = cljs.core.nth.call(null,vec__16899,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8280__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8280__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16906 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__16903 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__16903,(0),null);
var bit = cljs.core.nth.call(null,vec__16903,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8280__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8280__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8280__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8280__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__8280__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8280__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__8280__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__8627__auto___16910 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16911 = arguments.length;
var i__8588__auto___16912 = (0);
while(true){
if((i__8588__auto___16912 < len__8587__auto___16911)){
args__8594__auto__.push((arguments[i__8588__auto___16912]));

var G__16913 = (i__8588__auto___16912 + (1));
i__8588__auto___16912 = G__16913;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq16907){
var G__16908 = cljs.core.first.call(null,seq16907);
var seq16907__$1 = cljs.core.next.call(null,seq16907);
var G__16909 = cljs.core.first.call(null,seq16907__$1);
var seq16907__$2 = cljs.core.next.call(null,seq16907__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__16908,G__16909,seq16907__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__8627__auto___16917 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16918 = arguments.length;
var i__8588__auto___16919 = (0);
while(true){
if((i__8588__auto___16919 < len__8587__auto___16918)){
args__8594__auto__.push((arguments[i__8588__auto___16919]));

var G__16920 = (i__8588__auto___16919 + (1));
i__8588__auto___16919 = G__16920;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq16914){
var G__16915 = cljs.core.first.call(null,seq16914);
var seq16914__$1 = cljs.core.next.call(null,seq16914);
var G__16916 = cljs.core.first.call(null,seq16914__$1);
var seq16914__$2 = cljs.core.next.call(null,seq16914__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__16915,G__16916,seq16914__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__8627__auto___16929 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16930 = arguments.length;
var i__8588__auto___16931 = (0);
while(true){
if((i__8588__auto___16931 < len__8587__auto___16930)){
args__8594__auto__.push((arguments[i__8588__auto___16931]));

var G__16932 = (i__8588__auto___16931 + (1));
i__8588__auto___16931 = G__16932;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__16925){
var vec__16926 = p__16925;
var k = cljs.core.nth.call(null,vec__16926,(0),null);
var v = cljs.core.nth.call(null,vec__16926,(1),null);
return cljs.core._conj.call(null,(function (){var x__8280__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq16921){
var G__16922 = cljs.core.first.call(null,seq16921);
var seq16921__$1 = cljs.core.next.call(null,seq16921);
var G__16923 = cljs.core.first.call(null,seq16921__$1);
var seq16921__$2 = cljs.core.next.call(null,seq16921__$1);
var G__16924 = cljs.core.first.call(null,seq16921__$2);
var seq16921__$3 = cljs.core.next.call(null,seq16921__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__16922,G__16923,G__16924,seq16921__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__8627__auto___16937 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16938 = arguments.length;
var i__8588__auto___16939 = (0);
while(true){
if((i__8588__auto___16939 < len__8587__auto___16938)){
args__8594__auto__.push((arguments[i__8588__auto___16939]));

var G__16940 = (i__8588__auto___16939 + (1));
i__8588__auto___16939 = G__16940;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__8280__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq16933){
var G__16934 = cljs.core.first.call(null,seq16933);
var seq16933__$1 = cljs.core.next.call(null,seq16933);
var G__16935 = cljs.core.first.call(null,seq16933__$1);
var seq16933__$2 = cljs.core.next.call(null,seq16933__$1);
var G__16936 = cljs.core.first.call(null,seq16933__$2);
var seq16933__$3 = cljs.core.next.call(null,seq16933__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__16934,G__16935,G__16936,seq16933__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__8627__auto___16953 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16954 = arguments.length;
var i__8588__auto___16955 = (0);
while(true){
if((i__8588__auto___16955 < len__8587__auto___16954)){
args__8594__auto__.push((arguments[i__8588__auto___16955]));

var G__16956 = (i__8588__auto___16955 + (1));
i__8588__auto___16955 = G__16956;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((4) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8595__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__16947 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__16950 = cljs.core.nth.call(null,vec__16947,(0),null);
var a = cljs.core.nth.call(null,vec__16950,(0),null);
var b = cljs.core.nth.call(null,vec__16950,(1),null);
var c = cljs.core.nth.call(null,vec__16950,(2),null);
var clause = vec__16950;
var more = cljs.core.nth.call(null,vec__16947,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__8280__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__16941__auto__","p__16941__auto__",-688969273,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__16941__auto__","p__16941__auto__",-688969273,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq16942){
var G__16943 = cljs.core.first.call(null,seq16942);
var seq16942__$1 = cljs.core.next.call(null,seq16942);
var G__16944 = cljs.core.first.call(null,seq16942__$1);
var seq16942__$2 = cljs.core.next.call(null,seq16942__$1);
var G__16945 = cljs.core.first.call(null,seq16942__$2);
var seq16942__$3 = cljs.core.next.call(null,seq16942__$2);
var G__16946 = cljs.core.first.call(null,seq16942__$3);
var seq16942__$4 = cljs.core.next.call(null,seq16942__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__16943,G__16944,G__16945,G__16946,seq16942__$4);
});

return null;
})()
;
cljs.core$macros.condp.cljs$lang$macro = true;

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__7406__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__7406__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__7406__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__8627__auto___16977 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__8594__auto__ = [];
var len__8587__auto___16978 = arguments.length;
var i__8588__auto___16979 = (0);
while(true){
if((i__8588__auto___16979 < len__8587__auto___16978)){
args__8594__auto__.push((arguments[i__8588__auto___16979]));

var G__16980 = (i__8588__auto___16979 + (1));
i__8588__auto___16979 = G__16980;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.call(null);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__8280__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (esym,default$,env){
return (function (m,p__16965){
var vec__16966 = p__16965;
var test = cljs.core.nth.call(null,vec__16966,(0),null);
var expr = cljs.core.nth.call(null,vec__16966,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__16966,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__8280__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__16966,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__8280__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (esym,default$,env,pairs,tests){
return (function (p1__16957_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__16957_SHARP_);
});})(esym,default$,env,pairs,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__16958_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__16958_SHARP_)){
return cljs.core.vec.call(null,p1__16958_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16958_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__8280__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__16959_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16959_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__16960_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__16960_SHARP_)){
return cljs.core.mapv.call(null,kw_str,p1__16960_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str.call(null,p1__16960_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__8280__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__8280__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__8280__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (esym,default$,env,pairs,tests){
return (function (p__16973){
var vec__16974 = p__16973;
var m = cljs.core.nth.call(null,vec__16974,(0),null);
var c = cljs.core.nth.call(null,vec__16974,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__8280__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(esym,default$,env,pairs,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__8280__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq16961){
var G__16962 = cljs.core.first.call(null,seq16961);
var seq16961__$1 = cljs.core.next.call(null,seq16961);
var G__16963 = cljs.core.first.call(null,seq16961__$1);
var seq16961__$2 = cljs.core.next.call(null,seq16961__$1);
var G__16964 = cljs.core.first.call(null,seq16961__$2);
var seq16961__$3 = cljs.core.next.call(null,seq16961__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__16962,G__16963,G__16964,seq16961__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__8627__auto___16981 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__8627__auto___16984 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__16983 = arguments.length;
switch (G__16983) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8280__auto__ = ["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__8280__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__8280__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

return null;
})()
;
cljs.core$macros.assert.cljs$lang$macro = true;

var ret__8627__auto___17022 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__16991){
var vec__16992 = p__16991;
var k = cljs.core.nth.call(null,vec__16992,(0),null);
var v = cljs.core.nth.call(null,vec__16992,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__17023__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__17023 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__17024__i = 0, G__17024__a = new Array(arguments.length -  0);
while (G__17024__i < G__17024__a.length) {G__17024__a[G__17024__i] = arguments[G__17024__i + 0]; ++G__17024__i;}
  msg = new cljs.core.IndexedSeq(G__17024__a,0,null);
} 
return G__17023__delegate.call(this,msg);};
G__17023.cljs$lang$maxFixedArity = 0;
G__17023.cljs$lang$applyTo = (function (arglist__17025){
var msg = cljs.core.seq(arglist__17025);
return G__17023__delegate(msg);
});
G__17023.cljs$core$IFn$_invoke$arity$variadic = G__17023__delegate;
return G__17023;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__16995){
var vec__16996 = p__16995;
var seq__16997 = cljs.core.seq.call(null,vec__16996);
var first__16998 = cljs.core.first.call(null,seq__16997);
var seq__16997__$1 = cljs.core.next.call(null,seq__16997);
var vec__16999 = first__16998;
var seq__17000 = cljs.core.seq.call(null,vec__16999);
var first__17001 = cljs.core.first.call(null,seq__17000);
var seq__17000__$1 = cljs.core.next.call(null,seq__17000);
var bind = first__17001;
var first__17001__$1 = cljs.core.first.call(null,seq__17000__$1);
var seq__17000__$2 = cljs.core.next.call(null,seq__17000__$1);
var expr = first__17001__$1;
var mod_pairs = seq__17000__$2;
var vec__17002 = seq__16997__$1;
var vec__17005 = cljs.core.nth.call(null,vec__17002,(0),null);
var _ = cljs.core.nth.call(null,vec__17005,(0),null);
var next_expr = cljs.core.nth.call(null,vec__17005,(1),null);
var next_groups = vec__17002;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__16996,seq__16997,first__16998,seq__16997__$1,vec__16999,seq__17000,first__17001,seq__17000__$1,bind,first__17001__$1,seq__17000__$2,expr,mod_pairs,vec__17002,vec__17005,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__17008){
var vec__17009 = p__17008;
var seq__17010 = cljs.core.seq.call(null,vec__17009);
var first__17011 = cljs.core.first.call(null,seq__17010);
var seq__17010__$1 = cljs.core.next.call(null,seq__17010);
var vec__17012 = first__17011;
var k = cljs.core.nth.call(null,vec__17012,(0),null);
var v = cljs.core.nth.call(null,vec__17012,(1),null);
var pair = vec__17012;
var etc = seq__17010__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8280__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__16986__auto__","iterys__16986__auto__",1973080767,null)),(function (){var x__8280__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__16987__auto__","fs__16987__auto__",-48012125,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__16986__auto__","iterys__16986__auto__",1973080767,null)),(function (){var x__8280__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__16987__auto__","fs__16987__auto__",-48012125,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__16987__auto__","fs__16987__auto__",-48012125,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__8280__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__16996,seq__16997,first__16998,seq__16997__$1,vec__16999,seq__17000,first__17001,seq__17000__$1,bind,first__17001__$1,seq__17000__$2,expr,mod_pairs,vec__17002,vec__17005,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__16996,seq__16997,first__16998,seq__16997__$1,vec__16999,seq__17000,first__17001,seq__17000__$1,bind,first__17001__$1,seq__17000__$2,expr,mod_pairs,vec__17002,vec__17005,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__17015){
var vec__17016 = p__17015;
var seq__17017 = cljs.core.seq.call(null,vec__17016);
var first__17018 = cljs.core.first.call(null,seq__17017);
var seq__17017__$1 = cljs.core.next.call(null,seq__17017);
var vec__17019 = first__17018;
var k = cljs.core.nth.call(null,vec__17019,(0),null);
var v = cljs.core.nth.call(null,vec__17019,(1),null);
var pair = vec__17019;
var etc = seq__17017__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8280__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__8280__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__8280__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__8280__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__16996,seq__16997,first__16998,seq__16997__$1,vec__16999,seq__17000,first__17001,seq__17000__$1,bind,first__17001__$1,seq__17000__$2,expr,mod_pairs,vec__17002,vec__17005,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__16988__auto__","c__16988__auto__",-1255629695,null)),(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/Eric/Workspace/looperscript/resources/public/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__16989__auto__","size__16989__auto__",233774007,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__16988__auto__","c__16988__auto__",-1255629695,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__16989__auto__","size__16989__auto__",233774007,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8280__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__16989__auto__","size__16989__auto__",233774007,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__16988__auto__","c__16988__auto__",-1255629695,null)),(function (){var x__8280__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__8280__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__8280__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__8280__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__16990__auto__","iter__16990__auto__",1841071516,null)),(function (){var x__8280__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__16990__auto__","iter__16990__auto__",1841071516,null)),(function (){var x__8280__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__8627__auto___17031 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17032 = arguments.length;
var i__8588__auto___17033 = (0);
while(true){
if((i__8588__auto___17033 < len__8587__auto___17032)){
args__8594__auto__.push((arguments[i__8588__auto___17033]));

var G__17034 = (i__8588__auto___17033 + (1));
i__8588__auto___17033 = G__17034;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__17035__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__17035 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__17036__i = 0, G__17036__a = new Array(arguments.length -  0);
while (G__17036__i < G__17036__a.length) {G__17036__a[G__17036__i] = arguments[G__17036__i + 0]; ++G__17036__i;}
  msg = new cljs.core.IndexedSeq(G__17036__a,0,null);
} 
return G__17035__delegate.call(this,msg);};
G__17035.cljs$lang$maxFixedArity = 0;
G__17035.cljs$lang$applyTo = (function (arglist__17037){
var msg = cljs.core.seq(arglist__17037);
return G__17035__delegate(msg);
});
G__17035.cljs$core$IFn$_invoke$arity$variadic = G__17035__delegate;
return G__17035;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__8280__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8280__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8280__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8280__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__8280__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8280__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8280__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__8280__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8280__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__8280__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8280__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__8280__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__17026__auto__","c__17026__auto__",574844808,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__8280__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__8280__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__17026__auto__","c__17026__auto__",574844808,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__17026__auto__","c__17026__auto__",574844808,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__8280__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq17027){
var G__17028 = cljs.core.first.call(null,seq17027);
var seq17027__$1 = cljs.core.next.call(null,seq17027);
var G__17029 = cljs.core.first.call(null,seq17027__$1);
var seq17027__$2 = cljs.core.next.call(null,seq17027__$1);
var G__17030 = cljs.core.first.call(null,seq17027__$2);
var seq17027__$3 = cljs.core.next.call(null,seq17027__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__17028,G__17029,G__17030,seq17027__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__8627__auto___17041 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17042 = arguments.length;
var i__8588__auto___17043 = (0);
while(true){
if((i__8588__auto___17043 < len__8587__auto___17042)){
args__8594__auto__.push((arguments[i__8588__auto___17043]));

var G__17044 = (i__8588__auto___17043 + (1));
i__8588__auto___17043 = G__17044;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq17038){
var G__17039 = cljs.core.first.call(null,seq17038);
var seq17038__$1 = cljs.core.next.call(null,seq17038);
var G__17040 = cljs.core.first.call(null,seq17038__$1);
var seq17038__$2 = cljs.core.next.call(null,seq17038__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__17039,G__17040,seq17038__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__8627__auto___17055 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__17054 = arguments.length;
switch (G__17054) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___17057 = arguments.length;
var i__8588__auto___17058 = (0);
while(true){
if((i__8588__auto___17058 < len__8587__auto___17057)){
args_arr__8606__auto__.push((arguments[i__8588__auto___17058]));

var G__17059 = (i__8588__auto___17058 + (1));
i__8588__auto___17058 = G__17059;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8607__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__8280__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__8280__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__17045__auto__","dims__17045__auto__",-1573058742,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__17046__auto__","dimarray__17046__auto__",-1349677236,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__8280__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__17047__auto__","i__17047__auto__",349088273,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__17046__auto__","dimarray__17046__auto__",-1349677236,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__17046__auto__","dimarray__17046__auto__",-1349677236,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__17047__auto__","i__17047__auto__",349088273,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__17045__auto__","dims__17045__auto__",-1573058742,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__17046__auto__","dimarray__17046__auto__",-1349677236,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq17049){
var G__17050 = cljs.core.first.call(null,seq17049);
var seq17049__$1 = cljs.core.next.call(null,seq17049);
var G__17051 = cljs.core.first.call(null,seq17049__$1);
var seq17049__$2 = cljs.core.next.call(null,seq17049__$1);
var G__17052 = cljs.core.first.call(null,seq17049__$2);
var seq17049__$3 = cljs.core.next.call(null,seq17049__$2);
var G__17053 = cljs.core.first.call(null,seq17049__$3);
var seq17049__$4 = cljs.core.next.call(null,seq17049__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__17050,G__17051,G__17052,G__17053,seq17049__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__8627__auto___17068 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__17066 = arguments.length;
switch (G__17066) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___17070 = arguments.length;
var i__8588__auto___17071 = (0);
while(true){
if((i__8588__auto___17071 < len__8587__auto___17070)){
args_arr__8606__auto__.push((arguments[i__8588__auto___17071]));

var G__17072 = (i__8588__auto___17071 + (1));
i__8588__auto___17071 = G__17072;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8607__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_cljs_warnings_STAR_17067 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,x);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_17067;
}})()))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__17060__auto__","x__17060__auto__",-2134030753,null)),(function (){var x__8280__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__17060__auto__","x__17060__auto__",-2134030753,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq17062){
var G__17063 = cljs.core.first.call(null,seq17062);
var seq17062__$1 = cljs.core.next.call(null,seq17062);
var G__17064 = cljs.core.first.call(null,seq17062__$1);
var seq17062__$2 = cljs.core.next.call(null,seq17062__$1);
var G__17065 = cljs.core.first.call(null,seq17062__$2);
var seq17062__$3 = cljs.core.next.call(null,seq17062__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__17063,G__17064,G__17065,seq17062__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__8627__auto___17078 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__17077 = arguments.length;
switch (G__17077) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___17080 = arguments.length;
var i__8588__auto___17081 = (0);
while(true){
if((i__8588__auto___17081 < len__8587__auto___17080)){
args_arr__8606__auto__.push((arguments[i__8588__auto___17081]));

var G__17082 = (i__8588__auto___17081 + (1));
i__8588__auto___17081 = G__17082;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8607__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8280__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq17074){
var G__17075 = cljs.core.first.call(null,seq17074);
var seq17074__$1 = cljs.core.next.call(null,seq17074);
var G__17076 = cljs.core.first.call(null,seq17074__$1);
var seq17074__$2 = cljs.core.next.call(null,seq17074__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__17075,G__17076,seq17074__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__8627__auto___17092 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__17089 = arguments.length;
switch (G__17089) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___17094 = arguments.length;
var i__8588__auto___17095 = (0);
while(true){
if((i__8588__auto___17095 < len__8587__auto___17094)){
args_arr__8606__auto__.push((arguments[i__8588__auto___17095]));

var G__17096 = (i__8588__auto___17095 + (1));
i__8588__auto___17095 = G__17096;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8607__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__17083_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__17083_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__17084_SHARP_){
var _STAR_cljs_warnings_STAR_17091 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__17084_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_17091;
}});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8280__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq17086){
var G__17087 = cljs.core.first.call(null,seq17086);
var seq17086__$1 = cljs.core.next.call(null,seq17086);
var G__17088 = cljs.core.first.call(null,seq17086__$1);
var seq17086__$2 = cljs.core.next.call(null,seq17086__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__17087,G__17088,seq17086__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__8627__auto___17102 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__17101 = arguments.length;
switch (G__17101) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___17104 = arguments.length;
var i__8588__auto___17105 = (0);
while(true){
if((i__8588__auto___17105 < len__8587__auto___17104)){
args_arr__8606__auto__.push((arguments[i__8588__auto___17105]));

var G__17106 = (i__8588__auto___17105 + (1));
i__8588__auto___17105 = G__17106;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8607__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq17098){
var G__17099 = cljs.core.first.call(null,seq17098);
var seq17098__$1 = cljs.core.next.call(null,seq17098);
var G__17100 = cljs.core.first.call(null,seq17098__$1);
var seq17098__$2 = cljs.core.next.call(null,seq17098__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__17099,G__17100,seq17098__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__8627__auto___17116 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__17113 = arguments.length;
switch (G__17113) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8606__auto__ = [];
var len__8587__auto___17118 = arguments.length;
var i__8588__auto___17119 = (0);
while(true){
if((i__8588__auto___17119 < len__8587__auto___17118)){
args_arr__8606__auto__.push((arguments[i__8588__auto___17119]));

var G__17120 = (i__8588__auto___17119 + (1));
i__8588__auto___17119 = G__17120;
continue;
} else {
}
break;
}

var argseq__8607__auto__ = (new cljs.core.IndexedSeq(args_arr__8606__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8607__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__17107_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__17107_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__17108_SHARP_){
var _STAR_cljs_warnings_STAR_17115 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__17108_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_17115;
}}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__8280__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq17110){
var G__17111 = cljs.core.first.call(null,seq17110);
var seq17110__$1 = cljs.core.next.call(null,seq17110);
var G__17112 = cljs.core.first.call(null,seq17110__$1);
var seq17110__$2 = cljs.core.next.call(null,seq17110__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__17111,G__17112,seq17110__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_set.cljs$lang$macro = true;

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"}"].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__8627__auto___17136 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17137 = arguments.length;
var i__8588__auto___17138 = (0);
while(true){
if((i__8588__auto___17138 < len__8587__auto___17137)){
args__8594__auto__.push((arguments[i__8588__auto___17138]));

var G__17139 = (i__8588__auto___17138 + (1));
i__8588__auto___17138 = G__17139;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__17124){
var vec__17125 = p__17124;
var k = cljs.core.nth.call(null,vec__17125,(0),null);
var _ = cljs.core.nth.call(null,vec__17125,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__8280__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__17128){
var vec__17129 = p__17128;
var k = cljs.core.nth.call(null,vec__17129,(0),null);
var v = cljs.core.nth.call(null,vec__17129,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__8280__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__17132){
var vec__17133 = p__17132;
var k = cljs.core.nth.call(null,vec__17133,(0),null);
var v = cljs.core.nth.call(null,vec__17133,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__8280__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__8280__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq17121){
var G__17122 = cljs.core.first.call(null,seq17121);
var seq17121__$1 = cljs.core.next.call(null,seq17121);
var G__17123 = cljs.core.first.call(null,seq17121__$1);
var seq17121__$2 = cljs.core.next.call(null,seq17121__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__17122,G__17123,seq17121__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__8627__auto___17140 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__8627__auto___17142 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__17141__auto__","a__17141__auto__",1480428324,null)),(function (){var x__8280__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__17141__auto__","a__17141__auto__",1480428324,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__17141__auto__","a__17141__auto__",1480428324,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__8280__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__8627__auto___17144 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__17143__auto__","a__17143__auto__",-1502158966,null)),(function (){var x__8280__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__8280__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__17143__auto__","a__17143__auto__",-1502158966,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8280__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__8627__auto___17150 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17151 = arguments.length;
var i__8588__auto___17152 = (0);
while(true){
if((i__8588__auto___17152 < len__8587__auto___17151)){
args__8594__auto__.push((arguments[i__8588__auto___17152]));

var G__17153 = (i__8588__auto___17152 + (1));
i__8588__auto___17152 = G__17153;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__17145__auto__","n__17145__auto__",277090882,null)),(function (){var x__8280__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8280__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__17145__auto__","n__17145__auto__",277090882,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body,(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__8280__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq17146){
var G__17147 = cljs.core.first.call(null,seq17146);
var seq17146__$1 = cljs.core.next.call(null,seq17146);
var G__17148 = cljs.core.first.call(null,seq17146__$1);
var seq17146__$2 = cljs.core.next.call(null,seq17146__$1);
var G__17149 = cljs.core.first.call(null,seq17146__$2);
var seq17146__$3 = cljs.core.next.call(null,seq17146__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__17147,G__17148,G__17149,seq17146__$3);
});

return null;
})()
;
cljs.core$macros.dotimes.cljs$lang$macro = true;

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17157 = arguments.length;
var i__8588__auto___17158 = (0);
while(true){
if((i__8588__auto___17158 < len__8587__auto___17157)){
args__8594__auto__.push((arguments[i__8588__auto___17158]));

var G__17159 = (i__8588__auto___17158 + (1));
i__8588__auto___17158 = G__17159;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((1) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8595__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__17154_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17154_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq17155){
var G__17156 = cljs.core.first.call(null,seq17155);
var seq17155__$1 = cljs.core.next.call(null,seq17155);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__17156,seq17155__$1);
});

var ret__8627__auto___17169 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17170 = arguments.length;
var i__8588__auto___17171 = (0);
while(true){
if((i__8588__auto___17171 < len__8587__auto___17170)){
args__8594__auto__.push((arguments[i__8588__auto___17171]));

var G__17172 = (i__8588__auto___17171 + (1));
i__8588__auto___17171 = G__17172;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__17160__auto__","method-table__17160__auto__",692127907,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8280__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__17161__auto__","prefer-table__17161__auto__",-1606228374,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8280__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__17162__auto__","method-cache__17162__auto__",-1095856210,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8280__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__17163__auto__","cached-hierarchy__17163__auto__",-654863368,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__8280__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__17164__auto__","hierarchy__17164__auto__",747222682,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__8280__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__8280__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__17164__auto__","hierarchy__17164__auto__",747222682,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__17160__auto__","method-table__17160__auto__",692127907,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__17161__auto__","prefer-table__17161__auto__",-1606228374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__17162__auto__","method-cache__17162__auto__",-1095856210,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__17163__auto__","cached-hierarchy__17163__auto__",-654863368,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq17165){
var G__17166 = cljs.core.first.call(null,seq17165);
var seq17165__$1 = cljs.core.next.call(null,seq17165);
var G__17167 = cljs.core.first.call(null,seq17165__$1);
var seq17165__$2 = cljs.core.next.call(null,seq17165__$1);
var G__17168 = cljs.core.first.call(null,seq17165__$2);
var seq17165__$3 = cljs.core.next.call(null,seq17165__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__17166,G__17167,G__17168,seq17165__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__8627__auto___17178 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17179 = arguments.length;
var i__8588__auto___17180 = (0);
while(true){
if((i__8588__auto___17180 < len__8587__auto___17179)){
args__8594__auto__.push((arguments[i__8588__auto___17180]));

var G__17181 = (i__8588__auto___17180 + (1));
i__8588__auto___17180 = G__17181;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((4) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8595__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq17173){
var G__17174 = cljs.core.first.call(null,seq17173);
var seq17173__$1 = cljs.core.next.call(null,seq17173);
var G__17175 = cljs.core.first.call(null,seq17173__$1);
var seq17173__$2 = cljs.core.next.call(null,seq17173__$1);
var G__17176 = cljs.core.first.call(null,seq17173__$2);
var seq17173__$3 = cljs.core.next.call(null,seq17173__$2);
var G__17177 = cljs.core.first.call(null,seq17173__$3);
var seq17173__$4 = cljs.core.next.call(null,seq17173__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__17174,G__17175,G__17176,G__17177,seq17173__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__8627__auto___17184 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__17182__auto__","start__17182__auto__",-184464240,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__17183__auto__","ret__17183__auto__",1697775212,null)),(function (){var x__8280__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__17182__auto__","start__17182__auto__",-184464240,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__17183__auto__","ret__17183__auto__",1697775212,null)))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__8627__auto___17199 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17200 = arguments.length;
var i__8588__auto___17201 = (0);
while(true){
if((i__8588__auto___17201 < len__8587__auto___17200)){
args__8594__auto__.push((arguments[i__8588__auto___17201]));

var G__17202 = (i__8588__auto___17201 + (1));
i__8588__auto___17201 = G__17202;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((5) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__8595__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__17196){
var map__17197 = p__17196;
var map__17197__$1 = ((((!((map__17197 == null)))?((((map__17197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17197):map__17197);
var print_fn = cljs.core.get.call(null,map__17197__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__17185__auto__","start__17185__auto__",-379762080,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__17186__auto__","ret__17186__auto__",255712891,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___17187__auto__","___17187__auto__",976170073,null)),(function (){var x__8280__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__17188__auto__","end__17188__auto__",-644035107,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__17189__auto__","elapsed__17189__auto__",-1314477950,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__17188__auto__","end__17188__auto__",-644035107,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__17185__auto__","start__17185__auto__",-379762080,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__8280__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__8280__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__8280__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__17189__auto__","elapsed__17189__auto__",-1314477950,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq17190){
var G__17191 = cljs.core.first.call(null,seq17190);
var seq17190__$1 = cljs.core.next.call(null,seq17190);
var G__17192 = cljs.core.first.call(null,seq17190__$1);
var seq17190__$2 = cljs.core.next.call(null,seq17190__$1);
var G__17193 = cljs.core.first.call(null,seq17190__$2);
var seq17190__$3 = cljs.core.next.call(null,seq17190__$2);
var G__17194 = cljs.core.first.call(null,seq17190__$3);
var seq17190__$4 = cljs.core.next.call(null,seq17190__$3);
var G__17195 = cljs.core.first.call(null,seq17190__$4);
var seq17190__$5 = cljs.core.next.call(null,seq17190__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__17191,G__17192,G__17193,G__17194,G__17195,seq17190__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__17204 = arguments.length;
switch (G__17204) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__8280__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__8627__auto___17206 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.gen_apply_to.cljs$lang$macro = true;

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.call(null,[".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var proto_inv = cljs.core.symbol.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto_name)].join(''));
var next_sym = cljs.core.symbol.call(null,["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.call(null,((function (new_arg_sym,proto_name,proto_prop,proto_inv,next_sym){
return (function (p1__17207_SHARP_){
return cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17207_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.call(null,(num_args + (1))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = new_arg_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),(function (){var x__8280__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__8280__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__8280__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = proto_prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = proto_inv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".call",".call",1496874263,null)),(function (){var x__8280__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = ((((19) <= num_args))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__17208__auto__","arr__17208__auto__",1236651564,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null)),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__17209__auto__","s__17209__auto__",-669176605,null)),(function (){var x__8280__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__17209__auto__","s__17209__auto__",-669176605,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__17208__auto__","arr__17208__auto__",1236651564,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__17209__auto__","s__17209__auto__",-669176605,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__17209__auto__","s__17209__auto__",-669176605,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__8280__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__17208__auto__","arr__17208__auto__",1236651564,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))):cljs.core$macros.gen_apply_to_simple_helper.call(null,f,(num_args + (1)),next_sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
var ret__8627__auto___17210 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper.call(null,f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__8627__auto___17216 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17217 = arguments.length;
var i__8588__auto___17218 = (0);
while(true){
if((i__8588__auto___17218 < len__8587__auto___17217)){
args__8594__auto__.push((arguments[i__8588__auto___17218]));

var G__17219 = (i__8588__auto___17218 + (1));
i__8588__auto___17218 = G__17219;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__17211__auto__","sb__17211__auto__",1048613062,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__17212__auto__","x__17212__auto__",-813670074,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__17211__auto__","sb__17211__auto__",1048613062,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__17212__auto__","x__17212__auto__",-813670074,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__17211__auto__","sb__17211__auto__",1048613062,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq17213){
var G__17214 = cljs.core.first.call(null,seq17213);
var seq17213__$1 = cljs.core.next.call(null,seq17213);
var G__17215 = cljs.core.first.call(null,seq17213__$1);
var seq17213__$2 = cljs.core.next.call(null,seq17213__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__17214,G__17215,seq17213__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__8627__auto___17224 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17225 = arguments.length;
var i__8588__auto___17226 = (0);
while(true){
if((i__8588__auto___17226 < len__8587__auto___17225)){
args__8594__auto__.push((arguments[i__8588__auto___17226]));

var G__17227 = (i__8588__auto___17226 + (1));
i__8588__auto___17226 = G__17227;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__17220_SHARP_){
return cljs.core._conj.call(null,(function (){var x__8280__auto__ = p1__17220_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq17221){
var G__17222 = cljs.core.first.call(null,seq17221);
var seq17221__$1 = cljs.core.next.call(null,seq17221);
var G__17223 = cljs.core.first.call(null,seq17221__$1);
var seq17221__$2 = cljs.core.next.call(null,seq17221__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__17222,G__17223,seq17221__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__8627__auto___17228 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__8280__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__8627__auto___17230 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__8280__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__17229__auto__","this__17229__auto__",1538129035,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__17229__auto__","this__17229__auto__",1538129035,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__8627__auto___17247 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__8280__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__17239){
var vec__17240 = p__17239;
var sym = cljs.core.nth.call(null,vec__17240,(0),null);
var _ = cljs.core.nth.call(null,vec__17240,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__8280__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__8280__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
});})(ns))
,cljs.core.filter.call(null,((function (ns){
return (function (p__17243){
var vec__17244 = p__17243;
var _ = cljs.core.nth.call(null,vec__17244,(0),null);
var info = cljs.core.nth.call(null,vec__17244,(1),null);
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__8627__auto___17256 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__8280__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__17252){
var vec__17253 = p__17252;
var ctor = cljs.core.nth.call(null,vec__17253,(0),null);
var qualified_ctor = cljs.core.nth.call(null,vec__17253,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__8280__auto__ = cljs.core.name.call(null,ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.symbol.call(null,qualified_ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__8627__auto___17265 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__8280__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__17261){
var vec__17262 = p__17261;
var sym = cljs.core.nth.call(null,vec__17262,(0),null);
var _ = cljs.core.nth.call(null,vec__17262,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__8280__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__8280__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__8627__auto___17266 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_sym) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
var sym = cljs.core.second.call(null,quoted_sym);
cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__8280__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__8627__auto___17272 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17273 = arguments.length;
var i__8588__auto___17274 = (0);
while(true){
if((i__8588__auto___17274 < len__8587__auto___17273)){
args__8594__auto__.push((arguments[i__8588__auto___17274]));

var G__17275 = (i__8588__auto___17274 + (1));
i__8588__auto___17274 = G__17275;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((4) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__8595__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__8280__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__8280__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq17267){
var G__17268 = cljs.core.first.call(null,seq17267);
var seq17267__$1 = cljs.core.next.call(null,seq17267);
var G__17269 = cljs.core.first.call(null,seq17267__$1);
var seq17267__$2 = cljs.core.next.call(null,seq17267__$1);
var G__17270 = cljs.core.first.call(null,seq17267__$2);
var seq17267__$3 = cljs.core.next.call(null,seq17267__$2);
var G__17271 = cljs.core.first.call(null,seq17267__$3);
var seq17267__$4 = cljs.core.next.call(null,seq17267__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17268,G__17269,G__17270,G__17271,seq17267__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__8627__auto___17280 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17281 = arguments.length;
var i__8588__auto___17282 = (0);
while(true){
if((i__8588__auto___17282 < len__8587__auto___17281)){
args__8594__auto__.push((arguments[i__8588__auto___17282]));

var G__17283 = (i__8588__auto___17282 + (1));
i__8588__auto___17282 = G__17283;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq17276){
var G__17277 = cljs.core.first.call(null,seq17276);
var seq17276__$1 = cljs.core.next.call(null,seq17276);
var G__17278 = cljs.core.first.call(null,seq17276__$1);
var seq17276__$2 = cljs.core.next.call(null,seq17276__$1);
var G__17279 = cljs.core.first.call(null,seq17276__$2);
var seq17276__$3 = cljs.core.next.call(null,seq17276__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__17277,G__17278,G__17279,seq17276__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__8627__auto___17287 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace.
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17288 = arguments.length;
var i__8588__auto___17289 = (0);
while(true){
if((i__8588__auto___17289 < len__8587__auto___17288)){
args__8594__auto__.push((arguments[i__8588__auto___17289]));

var G__17290 = (i__8588__auto___17289 + (1));
i__8588__auto___17289 = G__17290;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8280__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq17284){
var G__17285 = cljs.core.first.call(null,seq17284);
var seq17284__$1 = cljs.core.next.call(null,seq17284);
var G__17286 = cljs.core.first.call(null,seq17284__$1);
var seq17284__$2 = cljs.core.next.call(null,seq17284__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__17285,G__17286,seq17284__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__8627__auto___17294 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17295 = arguments.length;
var i__8588__auto___17296 = (0);
while(true){
if((i__8588__auto___17296 < len__8587__auto___17295)){
args__8594__auto__.push((arguments[i__8588__auto___17296]));

var G__17297 = (i__8588__auto___17296 + (1));
i__8588__auto___17296 = G__17297;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8280__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq17291){
var G__17292 = cljs.core.first.call(null,seq17291);
var seq17291__$1 = cljs.core.next.call(null,seq17291);
var G__17293 = cljs.core.first.call(null,seq17291__$1);
var seq17291__$2 = cljs.core.next.call(null,seq17291__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__17292,G__17293,seq17291__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__8627__auto___17301 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17302 = arguments.length;
var i__8588__auto___17303 = (0);
while(true){
if((i__8588__auto___17303 < len__8587__auto___17302)){
args__8594__auto__.push((arguments[i__8588__auto___17303]));

var G__17304 = (i__8588__auto___17303 + (1));
i__8588__auto___17303 = G__17304;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8280__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq17298){
var G__17299 = cljs.core.first.call(null,seq17298);
var seq17298__$1 = cljs.core.next.call(null,seq17298);
var G__17300 = cljs.core.first.call(null,seq17298__$1);
var seq17298__$2 = cljs.core.next.call(null,seq17298__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__17299,G__17300,seq17298__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__8627__auto___17308 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17309 = arguments.length;
var i__8588__auto___17310 = (0);
while(true){
if((i__8588__auto___17310 < len__8587__auto___17309)){
args__8594__auto__.push((arguments[i__8588__auto___17310]));

var G__17311 = (i__8588__auto___17310 + (1));
i__8588__auto___17310 = G__17311;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8280__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq17305){
var G__17306 = cljs.core.first.call(null,seq17305);
var seq17305__$1 = cljs.core.next.call(null,seq17305);
var G__17307 = cljs.core.first.call(null,seq17305__$1);
var seq17305__$2 = cljs.core.next.call(null,seq17305__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__17306,G__17307,seq17305__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__8627__auto___17315 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17316 = arguments.length;
var i__8588__auto___17317 = (0);
while(true){
if((i__8588__auto___17317 < len__8587__auto___17316)){
args__8594__auto__.push((arguments[i__8588__auto___17317]));

var G__17318 = (i__8588__auto___17317 + (1));
i__8588__auto___17317 = G__17318;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8280__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq17312){
var G__17313 = cljs.core.first.call(null,seq17312);
var seq17312__$1 = cljs.core.next.call(null,seq17312);
var G__17314 = cljs.core.first.call(null,seq17312__$1);
var seq17312__$2 = cljs.core.next.call(null,seq17312__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__17313,G__17314,seq17312__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__8627__auto___17322 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17323 = arguments.length;
var i__8588__auto___17324 = (0);
while(true){
if((i__8588__auto___17324 < len__8587__auto___17323)){
args__8594__auto__.push((arguments[i__8588__auto___17324]));

var G__17325 = (i__8588__auto___17324 + (1));
i__8588__auto___17324 = G__17325;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((2) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8595__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__8280__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq17319){
var G__17320 = cljs.core.first.call(null,seq17319);
var seq17319__$1 = cljs.core.next.call(null,seq17319);
var G__17321 = cljs.core.first.call(null,seq17319__$1);
var seq17319__$2 = cljs.core.next.call(null,seq17319__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__17320,G__17321,seq17319__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__8627__auto___17326 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__8280__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__8627__auto___17327 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8280__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__8627__auto___17328 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_.call(null,form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__17329 = form_SINGLEQUOTE_;
var G__17330 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__17329;
form_SINGLEQUOTE_ = G__17330;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8280__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}
break;
}
} else {
return form;
}
});
cljs.core$macros.macroexpand.cljs$lang$macro = true;

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__7406__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__7406__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__7406__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__17332 = arguments.length;
switch (G__17332) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__17333,solo){
var vec__17334 = p__17333;
var seq__17335 = cljs.core.seq.call(null,vec__17334);
var first__17336 = cljs.core.first.call(null,seq__17335);
var seq__17335__$1 = cljs.core.next.call(null,seq__17335);
var arglist = first__17336;
var body = seq__17335__$1;
var method = vec__17334;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__17334,seq__17335,first__17336,seq__17335__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__17334,seq__17335,first__17336,seq__17335__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__17334,seq__17335,first__17336,seq__17335__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__17334,seq__17335,first__17336,seq__17335__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__17334,seq__17335,first__17336,seq__17335__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/Eric/Workspace/looperscript/resources/public/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2997),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2997),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/Eric/Workspace/looperscript/resources/public/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2998),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2998),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
});})(sig,restarg,vec__17334,seq__17335,first__17336,seq__17335__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__17334,seq__17335,first__17336,seq__17335__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),params,(function (){var x__8280__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__8280__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}
});})(sig,restarg,vec__17334,seq__17335,first__17336,seq__17335__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())))):null),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__8627__auto___17340 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__17338__auto__","len__17338__auto__",-1540053684,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__17339__auto__","i__17339__auto__",-827459618,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__17339__auto__","i__17339__auto__",-827459618,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__17338__auto__","len__17338__auto__",-1540053684,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__8280__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__17339__auto__","i__17339__auto__",-827459618,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__17339__auto__","i__17339__auto__",-827459618,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__17343,emit_var_QMARK_){
var vec__17344 = p__17343;
var vec__17347 = cljs.core.nth.call(null,vec__17344,(0),null);
var seq__17348 = cljs.core.seq.call(null,vec__17347);
var first__17349 = cljs.core.first.call(null,seq__17348);
var seq__17348__$1 = cljs.core.next.call(null,seq__17348);
var arglist = first__17349;
var body = seq__17348__$1;
var method = vec__17347;
var fdecl = vec__17344;
var dest_args = ((function (vec__17344,vec__17347,seq__17348,first__17349,seq__17348__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__17344,vec__17347,seq__17348,first__17349,seq__17348__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});})(vec__17344,vec__17347,seq__17348,first__17349,seq__17348__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__17344,vec__17347,seq__17348,first__17349,seq__17348__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__8280__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__17341__auto__","args__17341__auto__",1527664199,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__17341__auto__","args__17341__auto__",1527664199,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__17342__auto__","argseq__17342__auto__",-325695963,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__8280__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__17341__auto__","args__17341__auto__",1527664199,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/Eric/Workspace/looperscript/resources/public/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3045),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3045),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__17341__auto__","args__17341__auto__",1527664199,null)),(function (){var x__8280__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__17342__auto__","argseq__17342__auto__",-325695963,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__8280__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__8280__auto__ = cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__17358){
var vec__17359 = p__17358;
var seq__17360 = cljs.core.seq.call(null,vec__17359);
var first__17361 = cljs.core.first.call(null,seq__17360);
var seq__17360__$1 = cljs.core.next.call(null,seq__17360);
var sig = first__17361;
var body = seq__17360__$1;
var method = vec__17359;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.symbol.call(null,["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__17350_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__17350_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
var param_counts = cljs.core.map.call(null,cljs.core.count,arglists);
if(cljs.core.not_EQ_.call(null,cljs.core.distinct.call(null,param_counts),param_counts)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts){
return (function (p1__17351_SHARP_){
return fixed_arity.call(null,rname,p1__17351_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,sigs),(function (){var x__8280__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__17352__auto__","args-arr__17352__auto__",2143008990,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__17352__auto__","args-arr__17352__auto__",2143008990,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__17353__auto__","argseq__17353__auto__",2048227008,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/Eric/Workspace/looperscript/resources/public/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3106),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3106),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,79),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__17352__auto__","args-arr__17352__auto__",2143008990,null)),(function (){var x__8280__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__17353__auto__","argseq__17353__auto__",2048227008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__8280__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__8280__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__8280__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__8280__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__8280__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto____$1);
})(),x__8280__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__17362__i = 0, G__17362__a = new Array(arguments.length -  3);
while (G__17362__i < G__17362__a.length) {G__17362__a[G__17362__i] = arguments[G__17362__i + 3]; ++G__17362__i;}
  fdecl = new cljs.core.IndexedSeq(G__17362__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__17363){
var _AMPERSAND_form = cljs.core.first(arglist__17363);
arglist__17363 = cljs.core.next(arglist__17363);
var _AMPERSAND_env = cljs.core.first(arglist__17363);
arglist__17363 = cljs.core.next(arglist__17363);
var name = cljs.core.first(arglist__17363);
var fdecl = cljs.core.rest(arglist__17363);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__8594__auto__ = [];
var len__8587__auto___17369 = arguments.length;
var i__8588__auto___17370 = (0);
while(true){
if((i__8588__auto___17370 < len__8587__auto___17369)){
args__8594__auto__.push((arguments[i__8588__auto___17370]));

var G__17371 = (i__8588__auto___17370 + (1));
i__8588__auto___17370 = G__17371;
continue;
} else {
}
break;
}

var argseq__8595__auto__ = ((((3) < args__8594__auto__.length))?(new cljs.core.IndexedSeq(args__8594__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8595__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__8280__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__17372 = cljs.core.cons.call(null,f,p);
var G__17373 = cljs.core.next.call(null,args__$1);
p = G__17372;
args__$1 = G__17373;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__17374 = cljs.core.cons.call(null,f,p);
var G__17375 = cljs.core.next.call(null,args__$1);
p = G__17374;
args__$1 = G__17375;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__17376 = cljs.core.next.call(null,fd);
fd = G__17376;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__17377 = cljs.core.next.call(null,fd);
fd = G__17377;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__8280__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__17378 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__17379 = cljs.core.next.call(null,ds);
acc = G__17378;
ds = G__17379;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__17380 = cljs.core.next.call(null,p);
var G__17381 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__17380;
d = G__17381;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__17364__auto__","ret__17364__auto__",-681496016,null)),(function (){var x__8280__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__8280__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__17364__auto__","ret__17364__auto__",-681496016,null)))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq17365){
var G__17366 = cljs.core.first.call(null,seq17365);
var seq17365__$1 = cljs.core.next.call(null,seq17365);
var G__17367 = cljs.core.first.call(null,seq17365__$1);
var seq17365__$2 = cljs.core.next.call(null,seq17365__$1);
var G__17368 = cljs.core.first.call(null,seq17365__$2);
var seq17365__$3 = cljs.core.next.call(null,seq17365__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__17366,G__17367,G__17368,seq17365__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__8627__auto___17386 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,quoted_sym)))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second.call(null,quoted_sym);
var env = _AMPERSAND_env;
var vec__17382 = (function (){try{var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.call(null,var$)], null);
}catch (e17385){var e = e17385;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.call(null,env,sym),null], null);
}})();
var var$ = cljs.core.nth.call(null,vec__17382,(0),null);
var meta = cljs.core.nth.call(null,vec__17382,(1),null);
var resolved = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__8280__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null)),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__8280__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__8280__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})(),(function (){var x__8280__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8280__auto__);
})())));
});
cljs.core$macros.resolve.cljs$lang$macro = true;


//# sourceMappingURL=core$macros.js.map
