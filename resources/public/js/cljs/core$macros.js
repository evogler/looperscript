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
var ret__29145__auto___42172 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42173 = arguments.length;
var i__29106__auto___42174 = (0);
while(true){
if((i__29106__auto___42174 < len__29105__auto___42173)){
args__29112__auto__.push((arguments[i__29106__auto___42174]));

var G__42175 = (i__29106__auto___42174 + (1));
i__29106__auto___42174 = G__42175;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__28798__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})());
var G__42176 = threaded;
var G__42177 = cljs.core.next.call(null,forms__$1);
x__$1 = G__42176;
forms__$1 = G__42177;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq42168){
var G__42169 = cljs.core.first.call(null,seq42168);
var seq42168__$1 = cljs.core.next.call(null,seq42168);
var G__42170 = cljs.core.first.call(null,seq42168__$1);
var seq42168__$2 = cljs.core.next.call(null,seq42168__$1);
var G__42171 = cljs.core.first.call(null,seq42168__$2);
var seq42168__$3 = cljs.core.next.call(null,seq42168__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__42169,G__42170,G__42171,seq42168__$3);
});

return null;
})()
;
cljs.core$macros.__GT_.cljs$lang$macro = true;

var ret__29145__auto___42182 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42183 = arguments.length;
var i__29106__auto___42184 = (0);
while(true){
if((i__29106__auto___42184 < len__29105__auto___42183)){
args__29112__auto__.push((arguments[i__29106__auto___42184]));

var G__42185 = (i__29106__auto___42184 + (1));
i__29106__auto___42184 = G__42185;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__28798__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__28798__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})());
var G__42186 = threaded;
var G__42187 = cljs.core.next.call(null,forms__$1);
x__$1 = G__42186;
forms__$1 = G__42187;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq42178){
var G__42179 = cljs.core.first.call(null,seq42178);
var seq42178__$1 = cljs.core.next.call(null,seq42178);
var G__42180 = cljs.core.first.call(null,seq42178__$1);
var seq42178__$2 = cljs.core.next.call(null,seq42178__$1);
var G__42181 = cljs.core.first.call(null,seq42178__$2);
var seq42178__$3 = cljs.core.next.call(null,seq42178__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__42179,G__42180,G__42181,seq42178__$3);
});

return null;
})()
;
cljs.core$macros.__GT__GT_.cljs$lang$macro = true;

var ret__29145__auto___42195 = (function (){
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
var G__42194 = arguments.length;
switch (G__42194) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42197 = arguments.length;
var i__29106__auto___42198 = (0);
while(true){
if((i__29106__auto___42198 < len__29105__auto___42197)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42198]));

var G__42199 = (i__29106__auto___42198 + (1));
i__29106__auto___42198 = G__42199;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq42189){
var G__42190 = cljs.core.first.call(null,seq42189);
var seq42189__$1 = cljs.core.next.call(null,seq42189);
var G__42191 = cljs.core.first.call(null,seq42189__$1);
var seq42189__$2 = cljs.core.next.call(null,seq42189__$1);
var G__42192 = cljs.core.first.call(null,seq42189__$2);
var seq42189__$3 = cljs.core.next.call(null,seq42189__$2);
var G__42193 = cljs.core.first.call(null,seq42189__$3);
var seq42189__$4 = cljs.core.next.call(null,seq42189__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__42190,G__42191,G__42192,G__42193,seq42189__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;

var ret__29145__auto___42203 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42204 = arguments.length;
var i__29106__auto___42205 = (0);
while(true){
if((i__29106__auto___42205 < len__29105__auto___42204)){
args__29112__auto__.push((arguments[i__29106__auto___42205]));

var G__42206 = (i__29106__auto___42205 + (1));
i__29106__auto___42205 = G__42206;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq42200){
var G__42201 = cljs.core.first.call(null,seq42200);
var seq42200__$1 = cljs.core.next.call(null,seq42200);
var G__42202 = cljs.core.first.call(null,seq42200__$1);
var seq42200__$2 = cljs.core.next.call(null,seq42200__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__42201,G__42202,seq42200__$2);
});

return null;
})()
;
cljs.core$macros.comment.cljs$lang$macro = true;

var ret__29145__auto___42210 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42211 = arguments.length;
var i__29106__auto___42212 = (0);
while(true){
if((i__29106__auto___42212 < len__29105__auto___42211)){
args__29112__auto__.push((arguments[i__29106__auto___42212]));

var G__42213 = (i__29106__auto___42212 + (1));
i__29106__auto___42212 = G__42213;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__28798__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__28798__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$2);
})(),x__28798__auto____$1);
})(),x__28798__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq42207){
var G__42208 = cljs.core.first.call(null,seq42207);
var seq42207__$1 = cljs.core.next.call(null,seq42207);
var G__42209 = cljs.core.first.call(null,seq42207__$1);
var seq42207__$2 = cljs.core.next.call(null,seq42207__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__42208,G__42209,seq42207__$2);
});

return null;
})()
;
cljs.core$macros.cond.cljs$lang$macro = true;

var ret__29145__auto___42218 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42219 = arguments.length;
var i__29106__auto___42220 = (0);
while(true){
if((i__29106__auto___42220 < len__29105__auto___42219)){
args__29112__auto__.push((arguments[i__29106__auto___42220]));

var G__42221 = (i__29106__auto___42220 + (1));
i__29106__auto___42220 = G__42221;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__42214_SHARP_){
return cljs.core._conj.call(null,(function (){var x__28798__auto__ = cljs.core.vary_meta.call(null,p1__42214_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq42215){
var G__42216 = cljs.core.first.call(null,seq42215);
var seq42215__$1 = cljs.core.next.call(null,seq42215);
var G__42217 = cljs.core.first.call(null,seq42215__$1);
var seq42215__$2 = cljs.core.next.call(null,seq42215__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__42216,G__42217,seq42215__$2);
});

return null;
})()
;
cljs.core$macros.declare.cljs$lang$macro = true;

var ret__29145__auto___42226 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42227 = arguments.length;
var i__29106__auto___42228 = (0);
while(true){
if((i__29106__auto___42228 < len__29105__auto___42227)){
args__29112__auto__.push((arguments[i__29106__auto___42228]));

var G__42229 = (i__29106__auto___42228 + (1));
i__29106__auto___42228 = G__42229;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__28798__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq42222){
var G__42223 = cljs.core.first.call(null,seq42222);
var seq42222__$1 = cljs.core.next.call(null,seq42222);
var G__42224 = cljs.core.first.call(null,seq42222__$1);
var seq42222__$2 = cljs.core.next.call(null,seq42222__$1);
var G__42225 = cljs.core.first.call(null,seq42222__$2);
var seq42222__$3 = cljs.core.next.call(null,seq42222__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__42223,G__42224,G__42225,seq42222__$3);
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
var G__42230 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__42231 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__42230;
s = G__42231;
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
return (function (p__42232){
var vec__42233 = p__42232;
var t = cljs.core.nth.call(null,vec__42233,(0),null);
var fs = cljs.core.nth.call(null,vec__42233,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__28798__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),fs)));
});})(impls))
,impls))));
});
var ret__29145__auto___42240 = (function (){
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
var args__29112__auto__ = [];
var len__29105__auto___42241 = arguments.length;
var i__29106__auto___42242 = (0);
while(true){
if((i__29106__auto___42242 < len__29105__auto___42241)){
args__29112__auto__.push((arguments[i__29106__auto___42242]));

var G__42243 = (i__29106__auto___42242 + (1));
i__29106__auto___42242 = G__42243;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq42236){
var G__42237 = cljs.core.first.call(null,seq42236);
var seq42236__$1 = cljs.core.next.call(null,seq42236);
var G__42238 = cljs.core.first.call(null,seq42236__$1);
var seq42236__$2 = cljs.core.next.call(null,seq42236__$1);
var G__42239 = cljs.core.first.call(null,seq42236__$2);
var seq42236__$3 = cljs.core.next.call(null,seq42236__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__42237,G__42238,G__42239,seq42236__$3);
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
var G__42244 = cljs.core.next.call(null,params__$1);
var G__42245 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__42246 = lets;
params__$1 = G__42244;
new_params = G__42245;
lets = G__42246;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__42247 = cljs.core.next.call(null,params__$1);
var G__42248 = cljs.core.conj.call(null,new_params,gparam);
var G__42249 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__42247;
new_params = G__42248;
lets = G__42249;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}
break;
}
}
});
var ret__29145__auto___42256 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42257 = arguments.length;
var i__29106__auto___42258 = (0);
while(true){
if((i__29106__auto___42258 < len__29105__auto___42257)){
args__29112__auto__.push((arguments[i__29106__auto___42258]));

var G__42259 = (i__29106__auto___42258 + (1));
i__29106__auto___42258 = G__42259;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__28798__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs__$1))," should be a vector"].join(''):["Parameter declaration missing"].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__42253 = sig;
var seq__42254 = cljs.core.seq.call(null,vec__42253);
var first__42255 = cljs.core.first.call(null,seq__42254);
var seq__42254__$1 = cljs.core.next.call(null,seq__42254);
var params = first__42255;
var body = seq__42254__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__27936__auto__ = conds;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__28798__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.map.call(null,((function (vec__42253,seq__42254,first__42255,seq__42254__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__28798__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(vec__42253,seq__42254,first__42255,seq__42254__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__42253,seq__42254,first__42255,seq__42254__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__28798__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(vec__42253,seq__42254,first__42255,seq__42254__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq42250){
var G__42251 = cljs.core.first.call(null,seq42250);
var seq42250__$1 = cljs.core.next.call(null,seq42250);
var G__42252 = cljs.core.first.call(null,seq42250__$1);
var seq42250__$2 = cljs.core.next.call(null,seq42250__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__42251,G__42252,seq42250__$2);
});

return null;
})()
;
cljs.core$macros.fn.cljs$lang$macro = true;

var ret__29145__auto___42264 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42265 = arguments.length;
var i__29106__auto___42266 = (0);
while(true){
if((i__29106__auto___42266 < len__29105__auto___42265)){
args__29112__auto__.push((arguments[i__29106__auto___42266]));

var G__42267 = (i__29106__auto___42266 + (1));
i__29106__auto___42266 = G__42267;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq42260){
var G__42261 = cljs.core.first.call(null,seq42260);
var seq42260__$1 = cljs.core.next.call(null,seq42260);
var G__42262 = cljs.core.first.call(null,seq42260__$1);
var seq42260__$2 = cljs.core.next.call(null,seq42260__$1);
var G__42263 = cljs.core.first.call(null,seq42260__$2);
var seq42260__$3 = cljs.core.next.call(null,seq42260__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__42261,G__42262,G__42263,seq42260__$3);
});

return null;
})()
;
cljs.core$macros.defn_.cljs$lang$macro = true;

var ret__29145__auto___42277 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__42276 = arguments.length;
switch (G__42276) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42279 = arguments.length;
var i__29106__auto___42280 = (0);
while(true){
if((i__29106__auto___42280 < len__29105__auto___42279)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42280]));

var G__42281 = (i__29106__auto___42280 + (1));
i__29106__auto___42280 = G__42281;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__29125__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__28798__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42268__auto__","temp__42268__auto__",667879437,null)),(function (){var x__28798__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42268__auto__","temp__42268__auto__",667879437,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42268__auto__","temp__42268__auto__",667879437,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq42270){
var G__42271 = cljs.core.first.call(null,seq42270);
var seq42270__$1 = cljs.core.next.call(null,seq42270);
var G__42272 = cljs.core.first.call(null,seq42270__$1);
var seq42270__$2 = cljs.core.next.call(null,seq42270__$1);
var G__42273 = cljs.core.first.call(null,seq42270__$2);
var seq42270__$3 = cljs.core.next.call(null,seq42270__$2);
var G__42274 = cljs.core.first.call(null,seq42270__$3);
var seq42270__$4 = cljs.core.next.call(null,seq42270__$3);
var G__42275 = cljs.core.first.call(null,seq42270__$4);
var seq42270__$5 = cljs.core.next.call(null,seq42270__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__42271,G__42272,G__42273,G__42274,G__42275,seq42270__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_let.cljs$lang$macro = true;

var ret__29145__auto___42284 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__42283 = arguments.length;
switch (G__42283) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__28798__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__28798__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

return null;
})()
;
cljs.core$macros.if_not.cljs$lang$macro = true;

var ret__29145__auto___42291 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42292 = arguments.length;
var i__29106__auto___42293 = (0);
while(true){
if((i__29106__auto___42293 < len__29105__auto___42292)){
args__29112__auto__.push((arguments[i__29106__auto___42293]));

var G__42294 = (i__29106__auto___42293 + (1));
i__29106__auto___42293 = G__42294;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__42286_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__42286_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq42287){
var G__42288 = cljs.core.first.call(null,seq42287);
var seq42287__$1 = cljs.core.next.call(null,seq42287);
var G__42289 = cljs.core.first.call(null,seq42287__$1);
var seq42287__$2 = cljs.core.next.call(null,seq42287__$1);
var G__42290 = cljs.core.first.call(null,seq42287__$2);
var seq42287__$3 = cljs.core.next.call(null,seq42287__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__42288,G__42289,G__42290,seq42287__$3);
});

return null;
})()
;
cljs.core$macros.letfn.cljs$lang$macro = true;

var ret__29145__auto___42299 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42300 = arguments.length;
var i__29106__auto___42301 = (0);
while(true){
if((i__29106__auto___42301 < len__29105__auto___42300)){
args__29112__auto__.push((arguments[i__29106__auto___42301]));

var G__42302 = (i__29106__auto___42301 + (1));
i__29106__auto___42301 = G__42302;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq42295){
var G__42296 = cljs.core.first.call(null,seq42295);
var seq42295__$1 = cljs.core.next.call(null,seq42295);
var G__42297 = cljs.core.first.call(null,seq42295__$1);
var seq42295__$2 = cljs.core.next.call(null,seq42295__$1);
var G__42298 = cljs.core.first.call(null,seq42295__$2);
var seq42295__$3 = cljs.core.next.call(null,seq42295__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__42296,G__42297,G__42298,seq42295__$3);
});

return null;
})()
;
cljs.core$macros.memfn.cljs$lang$macro = true;

var ret__29145__auto___42307 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42308 = arguments.length;
var i__29106__auto___42309 = (0);
while(true){
if((i__29106__auto___42309 < len__29105__auto___42308)){
args__29112__auto__.push((arguments[i__29106__auto___42309]));

var G__42310 = (i__29106__auto___42309 + (1));
i__29106__auto___42309 = G__42310;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__28798__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq42303){
var G__42304 = cljs.core.first.call(null,seq42303);
var seq42303__$1 = cljs.core.next.call(null,seq42303);
var G__42305 = cljs.core.first.call(null,seq42303__$1);
var seq42303__$2 = cljs.core.next.call(null,seq42303__$1);
var G__42306 = cljs.core.first.call(null,seq42303__$2);
var seq42303__$3 = cljs.core.next.call(null,seq42303__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__42304,G__42305,G__42306,seq42303__$3);
});

return null;
})()
;
cljs.core$macros.when.cljs$lang$macro = true;

var ret__29145__auto___42319 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42320 = arguments.length;
var i__29106__auto___42321 = (0);
while(true){
if((i__29106__auto___42321 < len__29105__auto___42320)){
args__29112__auto__.push((arguments[i__29106__auto___42321]));

var G__42322 = (i__29106__auto___42321 + (1));
i__29106__auto___42321 = G__42322;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
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


var vec__42316 = bindings;
var x = cljs.core.nth.call(null,vec__42316,(0),null);
var xs = cljs.core.nth.call(null,vec__42316,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__42311__auto__","xs__42311__auto__",836299718,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28798__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__42311__auto__","xs__42311__auto__",836299718,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq42312){
var G__42313 = cljs.core.first.call(null,seq42312);
var seq42312__$1 = cljs.core.next.call(null,seq42312);
var G__42314 = cljs.core.first.call(null,seq42312__$1);
var seq42312__$2 = cljs.core.next.call(null,seq42312__$1);
var G__42315 = cljs.core.first.call(null,seq42312__$2);
var seq42312__$3 = cljs.core.next.call(null,seq42312__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__42313,G__42314,G__42315,seq42312__$3);
});

return null;
})()
;
cljs.core$macros.when_first.cljs$lang$macro = true;

var ret__29145__auto___42328 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42329 = arguments.length;
var i__29106__auto___42330 = (0);
while(true){
if((i__29106__auto___42330 < len__29105__auto___42329)){
args__29112__auto__.push((arguments[i__29106__auto___42330]));

var G__42331 = (i__29106__auto___42330 + (1));
i__29106__auto___42330 = G__42331;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42323__auto__","temp__42323__auto__",165621034,null)),(function (){var x__28798__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42323__auto__","temp__42323__auto__",165621034,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42323__auto__","temp__42323__auto__",165621034,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq42324){
var G__42325 = cljs.core.first.call(null,seq42324);
var seq42324__$1 = cljs.core.next.call(null,seq42324);
var G__42326 = cljs.core.first.call(null,seq42324__$1);
var seq42324__$2 = cljs.core.next.call(null,seq42324__$1);
var G__42327 = cljs.core.first.call(null,seq42324__$2);
var seq42324__$3 = cljs.core.next.call(null,seq42324__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__42325,G__42326,G__42327,seq42324__$3);
});

return null;
})()
;
cljs.core$macros.when_let.cljs$lang$macro = true;

var ret__29145__auto___42336 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42337 = arguments.length;
var i__29106__auto___42338 = (0);
while(true){
if((i__29106__auto___42338 < len__29105__auto___42337)){
args__29112__auto__.push((arguments[i__29106__auto___42338]));

var G__42339 = (i__29106__auto___42338 + (1));
i__29106__auto___42338 = G__42339;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__28798__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),null),x__28798__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq42332){
var G__42333 = cljs.core.first.call(null,seq42332);
var seq42332__$1 = cljs.core.next.call(null,seq42332);
var G__42334 = cljs.core.first.call(null,seq42332__$1);
var seq42332__$2 = cljs.core.next.call(null,seq42332__$1);
var G__42335 = cljs.core.first.call(null,seq42332__$2);
var seq42332__$3 = cljs.core.next.call(null,seq42332__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__42333,G__42334,G__42335,seq42332__$3);
});

return null;
})()
;
cljs.core$macros.when_not.cljs$lang$macro = true;

var ret__29145__auto___42344 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42345 = arguments.length;
var i__29106__auto___42346 = (0);
while(true){
if((i__29106__auto___42346 < len__29105__auto___42345)){
args__29112__auto__.push((arguments[i__29106__auto___42346]));

var G__42347 = (i__29106__auto___42346 + (1));
i__29106__auto___42346 = G__42347;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28798__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body,(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq42340){
var G__42341 = cljs.core.first.call(null,seq42340);
var seq42340__$1 = cljs.core.next.call(null,seq42340);
var G__42342 = cljs.core.first.call(null,seq42340__$1);
var seq42340__$2 = cljs.core.next.call(null,seq42340__$1);
var G__42343 = cljs.core.first.call(null,seq42340__$2);
var seq42340__$3 = cljs.core.next.call(null,seq42340__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__42341,G__42342,G__42343,seq42340__$3);
});

return null;
})()
;
cljs.core$macros.while$.cljs$lang$macro = true;

var ret__29145__auto___42356 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42357 = arguments.length;
var i__29106__auto___42358 = (0);
while(true){
if((i__29106__auto___42358 < len__29105__auto___42357)){
args__29112__auto__.push((arguments[i__29106__auto___42358]));

var G__42359 = (i__29106__auto___42358 + (1));
i__29106__auto___42358 = G__42359;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__42352){
var vec__42353 = p__42352;
var test = cljs.core.nth.call(null,vec__42353,(0),null);
var step = cljs.core.nth.call(null,vec__42353,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__28798__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq42348){
var G__42349 = cljs.core.first.call(null,seq42348);
var seq42348__$1 = cljs.core.next.call(null,seq42348);
var G__42350 = cljs.core.first.call(null,seq42348__$1);
var seq42348__$2 = cljs.core.next.call(null,seq42348__$1);
var G__42351 = cljs.core.first.call(null,seq42348__$2);
var seq42348__$3 = cljs.core.next.call(null,seq42348__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__42349,G__42350,G__42351,seq42348__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT_.cljs$lang$macro = true;

var ret__29145__auto___42368 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42369 = arguments.length;
var i__29106__auto___42370 = (0);
while(true){
if((i__29106__auto___42370 < len__29105__auto___42369)){
args__29112__auto__.push((arguments[i__29106__auto___42370]));

var G__42371 = (i__29106__auto___42370 + (1));
i__29106__auto___42370 = G__42371;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (p__42364){
var vec__42365 = p__42364;
var test = cljs.core.nth.call(null,vec__42365,(0),null);
var step = cljs.core.nth.call(null,vec__42365,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__28798__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(g))
,cljs.core.partition.call(null,(2),clauses));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq42360){
var G__42361 = cljs.core.first.call(null,seq42360);
var seq42360__$1 = cljs.core.next.call(null,seq42360);
var G__42362 = cljs.core.first.call(null,seq42360__$1);
var seq42360__$2 = cljs.core.next.call(null,seq42360__$1);
var G__42363 = cljs.core.first.call(null,seq42360__$2);
var seq42360__$3 = cljs.core.next.call(null,seq42360__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__42361,G__42362,G__42363,seq42360__$3);
});

return null;
})()
;
cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;

var ret__29145__auto___42377 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42378 = arguments.length;
var i__29106__auto___42379 = (0);
while(true){
if((i__29106__auto___42379 < len__29105__auto___42378)){
args__29112__auto__.push((arguments[i__29106__auto___42379]));

var G__42380 = (i__29106__auto___42379 + (1));
i__29106__auto___42379 = G__42380;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((4) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29113__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.butlast.call(null,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = ((cljs.core.empty_QMARK_.call(null,forms))?name:cljs.core.last.call(null,forms));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq42372){
var G__42373 = cljs.core.first.call(null,seq42372);
var seq42372__$1 = cljs.core.next.call(null,seq42372);
var G__42374 = cljs.core.first.call(null,seq42372__$1);
var seq42372__$2 = cljs.core.next.call(null,seq42372__$1);
var G__42375 = cljs.core.first.call(null,seq42372__$2);
var seq42372__$3 = cljs.core.next.call(null,seq42372__$2);
var G__42376 = cljs.core.first.call(null,seq42372__$3);
var seq42372__$4 = cljs.core.next.call(null,seq42372__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__42373,G__42374,G__42375,G__42376,seq42372__$4);
});

return null;
})()
;
cljs.core$macros.as__GT_.cljs$lang$macro = true;

var ret__29145__auto___42385 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42386 = arguments.length;
var i__29106__auto___42387 = (0);
while(true){
if((i__29106__auto___42387 < len__29105__auto___42386)){
args__29112__auto__.push((arguments[i__29106__auto___42387]));

var G__42388 = (i__29106__auto___42387 + (1));
i__29106__auto___42387 = G__42388;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28798__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__28798__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq42381){
var G__42382 = cljs.core.first.call(null,seq42381);
var seq42381__$1 = cljs.core.next.call(null,seq42381);
var G__42383 = cljs.core.first.call(null,seq42381__$1);
var seq42381__$2 = cljs.core.next.call(null,seq42381__$1);
var G__42384 = cljs.core.first.call(null,seq42381__$2);
var seq42381__$3 = cljs.core.next.call(null,seq42381__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__42382,G__42383,G__42384,seq42381__$3);
});

return null;
})()
;
cljs.core$macros.some__GT_.cljs$lang$macro = true;

var ret__29145__auto___42393 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42394 = arguments.length;
var i__29106__auto___42395 = (0);
while(true){
if((i__29106__auto___42395 < len__29105__auto___42394)){
args__29112__auto__.push((arguments[i__29106__auto___42395]));

var G__42396 = (i__29106__auto___42395 + (1));
i__29106__auto___42395 = G__42396;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var steps = cljs.core.map.call(null,((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28798__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__28798__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(g))
,forms);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.butlast.call(null,steps))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = ((cljs.core.empty_QMARK_.call(null,steps))?g:cljs.core.last.call(null,steps));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq42389){
var G__42390 = cljs.core.first.call(null,seq42389);
var seq42389__$1 = cljs.core.next.call(null,seq42389);
var G__42391 = cljs.core.first.call(null,seq42389__$1);
var seq42389__$2 = cljs.core.next.call(null,seq42389__$1);
var G__42392 = cljs.core.first.call(null,seq42389__$2);
var seq42389__$3 = cljs.core.next.call(null,seq42389__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__42390,G__42391,G__42392,seq42389__$3);
});

return null;
})()
;
cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;

var ret__29145__auto___42406 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__42405 = arguments.length;
switch (G__42405) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42408 = arguments.length;
var i__29106__auto___42409 = (0);
while(true){
if((i__29106__auto___42409 < len__29105__auto___42408)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42409]));

var G__42410 = (i__29106__auto___42409 + (1));
i__29106__auto___42409 = G__42410;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__29125__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__28798__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42397__auto__","temp__42397__auto__",1812292544,null)),(function (){var x__28798__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42397__auto__","temp__42397__auto__",1812292544,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42397__auto__","temp__42397__auto__",1812292544,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq42399){
var G__42400 = cljs.core.first.call(null,seq42399);
var seq42399__$1 = cljs.core.next.call(null,seq42399);
var G__42401 = cljs.core.first.call(null,seq42399__$1);
var seq42399__$2 = cljs.core.next.call(null,seq42399__$1);
var G__42402 = cljs.core.first.call(null,seq42399__$2);
var seq42399__$3 = cljs.core.next.call(null,seq42399__$2);
var G__42403 = cljs.core.first.call(null,seq42399__$3);
var seq42399__$4 = cljs.core.next.call(null,seq42399__$3);
var G__42404 = cljs.core.first.call(null,seq42399__$4);
var seq42399__$5 = cljs.core.next.call(null,seq42399__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__42400,G__42401,G__42402,G__42403,G__42404,seq42399__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.if_some.cljs$lang$macro = true;

var ret__29145__auto___42416 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42417 = arguments.length;
var i__29106__auto___42418 = (0);
while(true){
if((i__29106__auto___42418 < len__29105__auto___42417)){
args__29112__auto__.push((arguments[i__29106__auto___42418]));

var G__42419 = (i__29106__auto___42418 + (1));
i__29106__auto___42418 = G__42419;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42411__auto__","temp__42411__auto__",1874265660,null)),(function (){var x__28798__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42411__auto__","temp__42411__auto__",1874265660,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__42411__auto__","temp__42411__auto__",1874265660,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq42412){
var G__42413 = cljs.core.first.call(null,seq42412);
var seq42412__$1 = cljs.core.next.call(null,seq42412);
var G__42414 = cljs.core.first.call(null,seq42412__$1);
var seq42412__$2 = cljs.core.next.call(null,seq42412__$1);
var G__42415 = cljs.core.first.call(null,seq42412__$2);
var seq42412__$3 = cljs.core.next.call(null,seq42412__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__42413,G__42414,G__42415,seq42412__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__42420_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__42420_SHARP_)){
return cljs.core.first.call(null,p1__42420_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42420_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42420_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__42421_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__42421_SHARP_);
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
var G__42422 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__42423 = cljs.core.next.call(null,fdecls);
ret = G__42422;
fdecls = G__42423;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__28798__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
}
});
var ret__29145__auto___42424 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
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
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__28798__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
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
var G__42431 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__42432 = n;
var G__42433 = cljs.core.nnext.call(null,bs);
var G__42434 = true;
ret = G__42431;
n = G__42432;
bs = G__42433;
seen_rest_QMARK_ = G__42434;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__42435 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__28798__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__28798__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__28798__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__28798__auto____$1);
})(),x__28798__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__42436 = (n + (1));
var G__42437 = cljs.core.next.call(null,bs);
var G__42438 = seen_rest_QMARK_;
ret = G__42435;
n = G__42436;
bs = G__42437;
seen_rest_QMARK_ = G__42438;
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
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__28798__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__28798__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__42425_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__27936__auto__ = mkns;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.core.namespace.call(null,p1__42425_SHARP_);
}
})(),cljs.core.name.call(null,p1__42425_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__42426_SHARP_){
return cljs.core._conj.call(null,(function (){var x__28798__auto__ = cljs.core.symbol.call(null,(function (){var or__27936__auto__ = mkns;
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.core.namespace.call(null,p1__42426_SHARP_);
}
})(),cljs.core.name.call(null,p1__42426_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
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
return (function (p1__42427_SHARP_,p2__42428_SHARP_){
return cljs.core.assoc.call(null,p1__42427_SHARP_,p2__42428_SHARP_,cljs.core.val.call(null,entry).call(null,p2__42428_SHARP_));
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
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__28798__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$2);
})(),x__28798__auto____$1);
})(),x__28798__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__28798__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__42439 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__42440 = cljs.core.next.call(null,bes);
ret = G__42439;
bes = G__42440;
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
return (function (p1__42429_SHARP_){
return (cljs.core.first.call(null,p1__42429_SHARP_) instanceof cljs.core.Keyword);
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
var ret__29145__auto___42441 = /**
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__28798__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__28798__auto__ = ["/** @define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"} */"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__28798__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.goog_define.cljs$lang$macro = true;

var ret__29145__auto___42446 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42447 = arguments.length;
var i__29106__auto___42448 = (0);
while(true){
if((i__29106__auto___42448 < len__29105__auto___42447)){
args__29112__auto__.push((arguments[i__29106__auto___42448]));

var G__42449 = (i__29106__auto___42448 + (1));
i__29106__auto___42448 = G__42449;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
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


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__28798__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq42442){
var G__42443 = cljs.core.first.call(null,seq42442);
var seq42442__$1 = cljs.core.next.call(null,seq42442);
var G__42444 = cljs.core.first.call(null,seq42442__$1);
var seq42442__$2 = cljs.core.next.call(null,seq42442__$1);
var G__42445 = cljs.core.first.call(null,seq42442__$2);
var seq42442__$3 = cljs.core.next.call(null,seq42442__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__42443,G__42444,G__42445,seq42442__$3);
});

return null;
})()
;
cljs.core$macros.let$.cljs$lang$macro = true;

var ret__29145__auto___42458 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42459 = arguments.length;
var i__29106__auto___42460 = (0);
while(true){
if((i__29106__auto___42460 < len__29105__auto___42459)){
args__29112__auto__.push((arguments[i__29106__auto___42460]));

var G__42461 = (i__29106__auto___42460 + (1));
i__29106__auto___42460 = G__42461;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__28798__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
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
return (function (ret,p__42454){
var vec__42455 = p__42454;
var b = cljs.core.nth.call(null,vec__42455,(0),null);
var v = cljs.core.nth.call(null,vec__42455,(1),null);
var g = cljs.core.nth.call(null,vec__42455,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq42450){
var G__42451 = cljs.core.first.call(null,seq42450);
var seq42450__$1 = cljs.core.next.call(null,seq42450);
var G__42452 = cljs.core.first.call(null,seq42450__$1);
var seq42450__$2 = cljs.core.next.call(null,seq42450__$1);
var G__42453 = cljs.core.first.call(null,seq42450__$2);
var seq42450__$3 = cljs.core.next.call(null,seq42450__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__42451,G__42452,G__42453,seq42450__$3);
});

return null;
})()
;
cljs.core$macros.loop.cljs$lang$macro = true;

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__42462_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42462_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate.call(null,(function (p__42463){
var vec__42464 = p__42463;
var p = cljs.core.nth.call(null,vec__42464,(0),null);
var b = cljs.core.nth.call(null,vec__42464,(1),null);
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
var ret__29145__auto___42470 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42471 = arguments.length;
var i__29106__auto___42472 = (0);
while(true){
if((i__29106__auto___42472 < len__29105__auto___42471)){
args__29112__auto__.push((arguments[i__29106__auto___42472]));

var G__42473 = (i__29106__auto___42472 + (1));
i__29106__auto___42472 = G__42473;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
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

cljs.core$macros.str.cljs$lang$applyTo = (function (seq42467){
var G__42468 = cljs.core.first.call(null,seq42467);
var seq42467__$1 = cljs.core.next.call(null,seq42467);
var G__42469 = cljs.core.first.call(null,seq42467__$1);
var seq42467__$2 = cljs.core.next.call(null,seq42467__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__42468,G__42469,seq42467__$2);
});

return null;
})()
;
cljs.core$macros.str.cljs$lang$macro = true;

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__27924__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__27924__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__27924__auto__;
}
});
var ret__29145__auto___42484 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__42482 = arguments.length;
switch (G__42482) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42486 = arguments.length;
var i__29106__auto___42487 = (0);
while(true){
if((i__29106__auto___42487 < len__29105__auto___42486)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42487]));

var G__42488 = (i__29106__auto___42487 + (1));
i__29106__auto___42487 = G__42488;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29125__auto__);

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
return (function (p1__42474_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__42474_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__42475_SHARP_){
var _STAR_cljs_warnings_STAR_42483 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__42475_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_42483;
}});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__28798__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__42476__auto__","and__42476__auto__",-2018405672,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__42476__auto__","and__42476__auto__",-2018405672,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__42476__auto__","and__42476__auto__",-2018405672,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq42478){
var G__42479 = cljs.core.first.call(null,seq42478);
var seq42478__$1 = cljs.core.next.call(null,seq42478);
var G__42480 = cljs.core.first.call(null,seq42478__$1);
var seq42478__$2 = cljs.core.next.call(null,seq42478__$1);
var G__42481 = cljs.core.first.call(null,seq42478__$2);
var seq42478__$3 = cljs.core.next.call(null,seq42478__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__42479,G__42480,G__42481,seq42478__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.and.cljs$lang$macro = true;

var ret__29145__auto___42499 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__42497 = arguments.length;
switch (G__42497) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42501 = arguments.length;
var i__29106__auto___42502 = (0);
while(true){
if((i__29106__auto___42502 < len__29105__auto___42501)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42502]));

var G__42503 = (i__29106__auto___42502 + (1));
i__29106__auto___42502 = G__42503;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29125__auto__);

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
return (function (p1__42489_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__42489_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__42490_SHARP_){
var _STAR_cljs_warnings_STAR_42498 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__42490_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_42498;
}});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__28798__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__42491__auto__","or__42491__auto__",-1068065099,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__42491__auto__","or__42491__auto__",-1068065099,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__42491__auto__","or__42491__auto__",-1068065099,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq42493){
var G__42494 = cljs.core.first.call(null,seq42493);
var seq42493__$1 = cljs.core.next.call(null,seq42493);
var G__42495 = cljs.core.first.call(null,seq42493__$1);
var seq42493__$2 = cljs.core.next.call(null,seq42493__$1);
var G__42496 = cljs.core.first.call(null,seq42493__$2);
var seq42493__$3 = cljs.core.next.call(null,seq42493__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__42494,G__42495,G__42496,seq42493__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.or.cljs$lang$macro = true;

var ret__29145__auto___42504 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});
cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42505 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.some_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42506 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not.cljs$lang$macro = true;

var ret__29145__auto___42507 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;

var ret__29145__auto___42508 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;

var ret__29145__auto___42509 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
cljs.core$macros.coercive_boolean.cljs$lang$macro = true;

var ret__29145__auto___42510 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.truth_.cljs$lang$macro = true;

var ret__29145__auto___42511 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_arguments.cljs$lang$macro = true;

var ret__29145__auto___42512 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_delete.cljs$lang$macro = true;

var ret__29145__auto___42513 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_in.cljs$lang$macro = true;

var ret__29145__auto___42514 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__28798__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__28798__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});
cljs.core$macros.js_debugger.cljs$lang$macro = true;

var ret__29145__auto___42519 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__42516 = clojure.string.split.call(null,comment,/\n/);
var seq__42517 = cljs.core.seq.call(null,vec__42516);
var first__42518 = cljs.core.first.call(null,seq__42517);
var seq__42517__$1 = cljs.core.next.call(null,seq__42517);
var x = first__42518;
var ys = seq__42517__$1;
return cljs.core._conj.call(null,(function (){var x__28798__auto__ = ["\n/**\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__42516,seq__42517,first__42518,seq__42517__$1,x,ys){
return (function (p1__42515_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__42515_SHARP_,/^   /,"")),"\n"].join('');
});})(vec__42516,seq__42517,first__42518,seq__42517__$1,x,ys))
,ys)))," */\n"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_comment.cljs$lang$macro = true;

var ret__29145__auto___42520 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return cljs.core._conj.call(null,(function (){var x__28798__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$2);
})(),x__28798__auto____$1);
})(),x__28798__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsafe_cast.cljs$lang$macro = true;

var ret__29145__auto___42521 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__28798__auto__ = ["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_inline_comment.cljs$lang$macro = true;

var ret__29145__auto___42522 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.true_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42523 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.false_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42524 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.string_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42525 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42526 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42527 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42530 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__42528__auto__","c__42528__auto__",-30092902,null)),(function (){var x__28798__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42529__auto__","x__42529__auto__",406676757,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42529__auto__","x__42529__auto__",406676757,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__42528__auto__","c__42528__auto__",-30092902,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())))));
});
cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42531 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.number_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42532 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
});
cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42533 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
});
cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42543 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__42540 = arguments.length;
switch (G__42540) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42545 = arguments.length;
var i__29106__auto___42546 = (0);
while(true){
if((i__29106__auto___42546 < len__29105__auto___42545)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42546]));

var G__42547 = (i__29106__auto___42546 + (1));
i__29106__auto___42546 = G__42547;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__42541 = cljs.analyzer.checked_arrays.call(null);
var G__42541__$1 = (((G__42541 instanceof cljs.core.Keyword))?G__42541.fqn:null);
switch (G__42541__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__28798__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__28798__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__42542 = cljs.analyzer.checked_arrays.call(null);
var G__42542__$1 = (((G__42542 instanceof cljs.core.Keyword))?G__42542.fqn:null);
switch (G__42542__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null)),(function (){var x__28798__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),idxs)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null)),(function (){var x__28798__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),idxs)));

break;
default:
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__28798__auto__ = ["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),idxs)));

}
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq42535){
var G__42536 = cljs.core.first.call(null,seq42535);
var seq42535__$1 = cljs.core.next.call(null,seq42535);
var G__42537 = cljs.core.first.call(null,seq42535__$1);
var seq42535__$2 = cljs.core.next.call(null,seq42535__$1);
var G__42538 = cljs.core.first.call(null,seq42535__$2);
var seq42535__$3 = cljs.core.next.call(null,seq42535__$2);
var G__42539 = cljs.core.first.call(null,seq42535__$3);
var seq42535__$4 = cljs.core.next.call(null,seq42535__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__42536,G__42537,G__42538,G__42539,seq42535__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.aget.cljs$lang$macro = true;

var ret__29145__auto___42560 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__42557 = arguments.length;
switch (G__42557) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42562 = arguments.length;
var i__29106__auto___42563 = (0);
while(true){
if((i__29106__auto___42563 < len__29105__auto___42562)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42563]));

var G__42564 = (i__29106__auto___42563 + (1));
i__29106__auto___42563 = G__42564;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__29125__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__42558 = cljs.analyzer.checked_arrays.call(null);
var G__42558__$1 = (((G__42558 instanceof cljs.core.Keyword))?G__42558.fqn:null);
switch (G__42558__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__28798__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__28798__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));

break;
default:
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = array;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = idx;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$2);
})(),x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__42559 = cljs.analyzer.checked_arrays.call(null);
var G__42559__$1 = (((G__42559 instanceof cljs.core.Keyword))?G__42559.fqn:null);
switch (G__42559__$1) {
case "warn":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null)),(function (){var x__28798__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),idxv)));

break;
case "error":
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null)),(function (){var x__28798__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),idxv)));

break;
default:
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__28798__auto__ = ["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = array;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),idxv)));

}
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq42551){
var G__42552 = cljs.core.first.call(null,seq42551);
var seq42551__$1 = cljs.core.next.call(null,seq42551);
var G__42553 = cljs.core.first.call(null,seq42551__$1);
var seq42551__$2 = cljs.core.next.call(null,seq42551__$1);
var G__42554 = cljs.core.first.call(null,seq42551__$2);
var seq42551__$3 = cljs.core.next.call(null,seq42551__$2);
var G__42555 = cljs.core.first.call(null,seq42551__$3);
var seq42551__$4 = cljs.core.next.call(null,seq42551__$3);
var G__42556 = cljs.core.first.call(null,seq42551__$4);
var seq42551__$5 = cljs.core.next.call(null,seq42551__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__42552,G__42553,G__42554,G__42555,G__42556,seq42551__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.core$macros.aset.cljs$lang$macro = true;

var ret__29145__auto___42567 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_get.cljs$lang$macro = true;

var ret__29145__auto___42568 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = key;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$2 = val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$2);
})(),x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unchecked_set.cljs$lang$macro = true;

var ret__29145__auto___42576 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__42575 = arguments.length;
switch (G__42575) {
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
var args_arr__29124__auto__ = [];
var len__29105__auto___42578 = arguments.length;
var i__29106__auto___42579 = (0);
while(true){
if((i__29106__auto___42579 < len__29105__auto___42578)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42579]));

var G__42580 = (i__29106__auto___42579 + (1));
i__29106__auto___42579 = G__42580;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq42570){
var G__42571 = cljs.core.first.call(null,seq42570);
var seq42570__$1 = cljs.core.next.call(null,seq42570);
var G__42572 = cljs.core.first.call(null,seq42570__$1);
var seq42570__$2 = cljs.core.next.call(null,seq42570__$1);
var G__42573 = cljs.core.first.call(null,seq42570__$2);
var seq42570__$3 = cljs.core.next.call(null,seq42570__$2);
var G__42574 = cljs.core.first.call(null,seq42570__$3);
var seq42570__$4 = cljs.core.next.call(null,seq42570__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__42571,G__42572,G__42573,G__42574,seq42570__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._PLUS_.cljs$lang$macro = true;

var ret__29145__auto___42581 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.byte$.cljs$lang$macro = true;

var ret__29145__auto___42582 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.short$.cljs$lang$macro = true;

var ret__29145__auto___42583 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.float$.cljs$lang$macro = true;

var ret__29145__auto___42584 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.double$.cljs$lang$macro = true;

var ret__29145__auto___42585 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_byte.cljs$lang$macro = true;

var ret__29145__auto___42586 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_char.cljs$lang$macro = true;

var ret__29145__auto___42587 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_short.cljs$lang$macro = true;

var ret__29145__auto___42588 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_float.cljs$lang$macro = true;

var ret__29145__auto___42589 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
cljs.core$macros.unchecked_double.cljs$lang$macro = true;

var ret__29145__auto___42593 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42594 = arguments.length;
var i__29106__auto___42595 = (0);
while(true){
if((i__29106__auto___42595 < len__29105__auto___42594)){
args__29112__auto__.push((arguments[i__29106__auto___42595]));

var G__42596 = (i__29106__auto___42595 + (1));
i__29106__auto___42595 = G__42596;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq42590){
var G__42591 = cljs.core.first.call(null,seq42590);
var seq42590__$1 = cljs.core.next.call(null,seq42590);
var G__42592 = cljs.core.first.call(null,seq42590__$1);
var seq42590__$2 = cljs.core.next.call(null,seq42590__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__42591,G__42592,seq42590__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add.cljs$lang$macro = true;

var ret__29145__auto___42600 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42601 = arguments.length;
var i__29106__auto___42602 = (0);
while(true){
if((i__29106__auto___42602 < len__29105__auto___42601)){
args__29112__auto__.push((arguments[i__29106__auto___42602]));

var G__42603 = (i__29106__auto___42602 + (1));
i__29106__auto___42602 = G__42603;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq42597){
var G__42598 = cljs.core.first.call(null,seq42597);
var seq42597__$1 = cljs.core.next.call(null,seq42597);
var G__42599 = cljs.core.first.call(null,seq42597__$1);
var seq42597__$2 = cljs.core.next.call(null,seq42597__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__42598,G__42599,seq42597__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;

var ret__29145__auto___42604 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.unchecked_dec.cljs$lang$macro = true;

var ret__29145__auto___42605 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;

var ret__29145__auto___42609 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42610 = arguments.length;
var i__29106__auto___42611 = (0);
while(true){
if((i__29106__auto___42611 < len__29105__auto___42610)){
args__29112__auto__.push((arguments[i__29106__auto___42611]));

var G__42612 = (i__29106__auto___42611 + (1));
i__29106__auto___42611 = G__42612;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq42606){
var G__42607 = cljs.core.first.call(null,seq42606);
var seq42606__$1 = cljs.core.next.call(null,seq42606);
var G__42608 = cljs.core.first.call(null,seq42606__$1);
var seq42606__$2 = cljs.core.next.call(null,seq42606__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__42607,G__42608,seq42606__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;

var ret__29145__auto___42613 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.unchecked_inc.cljs$lang$macro = true;

var ret__29145__auto___42614 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;

var ret__29145__auto___42618 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42619 = arguments.length;
var i__29106__auto___42620 = (0);
while(true){
if((i__29106__auto___42620 < len__29105__auto___42619)){
args__29112__auto__.push((arguments[i__29106__auto___42620]));

var G__42621 = (i__29106__auto___42620 + (1));
i__29106__auto___42620 = G__42621;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq42615){
var G__42616 = cljs.core.first.call(null,seq42615);
var seq42615__$1 = cljs.core.next.call(null,seq42615);
var G__42617 = cljs.core.first.call(null,seq42615__$1);
var seq42615__$2 = cljs.core.next.call(null,seq42615__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__42616,G__42617,seq42615__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;

var ret__29145__auto___42625 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42626 = arguments.length;
var i__29106__auto___42627 = (0);
while(true){
if((i__29106__auto___42627 < len__29105__auto___42626)){
args__29112__auto__.push((arguments[i__29106__auto___42627]));

var G__42628 = (i__29106__auto___42627 + (1));
i__29106__auto___42627 = G__42628;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq42622){
var G__42623 = cljs.core.first.call(null,seq42622);
var seq42622__$1 = cljs.core.next.call(null,seq42622);
var G__42624 = cljs.core.first.call(null,seq42622__$1);
var seq42622__$2 = cljs.core.next.call(null,seq42622__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__42623,G__42624,seq42622__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;

var ret__29145__auto___42629 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.unchecked_negate.cljs$lang$macro = true;

var ret__29145__auto___42630 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;

var ret__29145__auto___42631 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;

var ret__29145__auto___42635 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42636 = arguments.length;
var i__29106__auto___42637 = (0);
while(true){
if((i__29106__auto___42637 < len__29105__auto___42636)){
args__29112__auto__.push((arguments[i__29106__auto___42637]));

var G__42638 = (i__29106__auto___42637 + (1));
i__29106__auto___42637 = G__42638;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq42632){
var G__42633 = cljs.core.first.call(null,seq42632);
var seq42632__$1 = cljs.core.next.call(null,seq42632);
var G__42634 = cljs.core.first.call(null,seq42632__$1);
var seq42632__$2 = cljs.core.next.call(null,seq42632__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__42633,G__42634,seq42632__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;

var ret__29145__auto___42642 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42643 = arguments.length;
var i__29106__auto___42644 = (0);
while(true){
if((i__29106__auto___42644 < len__29105__auto___42643)){
args__29112__auto__.push((arguments[i__29106__auto___42644]));

var G__42645 = (i__29106__auto___42644 + (1));
i__29106__auto___42644 = G__42645;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq42639){
var G__42640 = cljs.core.first.call(null,seq42639);
var seq42639__$1 = cljs.core.next.call(null,seq42639);
var G__42641 = cljs.core.first.call(null,seq42639__$1);
var seq42639__$2 = cljs.core.next.call(null,seq42639__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__42640,G__42641,seq42639__$2);
});

return null;
})()
;
cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;

var ret__29145__auto___42653 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__42652 = arguments.length;
switch (G__42652) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42655 = arguments.length;
var i__29106__auto___42656 = (0);
while(true){
if((i__29106__auto___42656 < len__29105__auto___42655)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42656]));

var G__42657 = (i__29106__auto___42656 + (1));
i__29106__auto___42656 = G__42657;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq42647){
var G__42648 = cljs.core.first.call(null,seq42647);
var seq42647__$1 = cljs.core.next.call(null,seq42647);
var G__42649 = cljs.core.first.call(null,seq42647__$1);
var seq42647__$2 = cljs.core.next.call(null,seq42647__$1);
var G__42650 = cljs.core.first.call(null,seq42647__$2);
var seq42647__$3 = cljs.core.next.call(null,seq42647__$2);
var G__42651 = cljs.core.first.call(null,seq42647__$3);
var seq42647__$4 = cljs.core.next.call(null,seq42647__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__42648,G__42649,G__42650,G__42651,seq42647__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._.cljs$lang$macro = true;

var ret__29145__auto___42665 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__42664 = arguments.length;
switch (G__42664) {
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
var args_arr__29124__auto__ = [];
var len__29105__auto___42667 = arguments.length;
var i__29106__auto___42668 = (0);
while(true){
if((i__29106__auto___42668 < len__29105__auto___42667)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42668]));

var G__42669 = (i__29106__auto___42668 + (1));
i__29106__auto___42668 = G__42669;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq42659){
var G__42660 = cljs.core.first.call(null,seq42659);
var seq42659__$1 = cljs.core.next.call(null,seq42659);
var G__42661 = cljs.core.first.call(null,seq42659__$1);
var seq42659__$2 = cljs.core.next.call(null,seq42659__$1);
var G__42662 = cljs.core.first.call(null,seq42659__$2);
var seq42659__$3 = cljs.core.next.call(null,seq42659__$2);
var G__42663 = cljs.core.first.call(null,seq42659__$3);
var seq42659__$4 = cljs.core.next.call(null,seq42659__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__42660,G__42661,G__42662,G__42663,seq42659__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._STAR_.cljs$lang$macro = true;

var ret__29145__auto___42677 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__42676 = arguments.length;
switch (G__42676) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42679 = arguments.length;
var i__29106__auto___42680 = (0);
while(true){
if((i__29106__auto___42680 < len__29105__auto___42679)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42680]));

var G__42681 = (i__29106__auto___42680 + (1));
i__29106__auto___42680 = G__42681;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq42671){
var G__42672 = cljs.core.first.call(null,seq42671);
var seq42671__$1 = cljs.core.next.call(null,seq42671);
var G__42673 = cljs.core.first.call(null,seq42671__$1);
var seq42671__$2 = cljs.core.next.call(null,seq42671__$1);
var G__42674 = cljs.core.first.call(null,seq42671__$2);
var seq42671__$3 = cljs.core.next.call(null,seq42671__$2);
var G__42675 = cljs.core.first.call(null,seq42671__$3);
var seq42671__$4 = cljs.core.next.call(null,seq42671__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__42672,G__42673,G__42674,G__42675,seq42671__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._SLASH_.cljs$lang$macro = true;

var ret__29145__auto___42689 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__42688 = arguments.length;
switch (G__42688) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42691 = arguments.length;
var i__29106__auto___42692 = (0);
while(true){
if((i__29106__auto___42692 < len__29105__auto___42691)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42692]));

var G__42693 = (i__29106__auto___42692 + (1));
i__29106__auto___42692 = G__42693;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq42683){
var G__42684 = cljs.core.first.call(null,seq42683);
var seq42683__$1 = cljs.core.next.call(null,seq42683);
var G__42685 = cljs.core.first.call(null,seq42683__$1);
var seq42683__$2 = cljs.core.next.call(null,seq42683__$1);
var G__42686 = cljs.core.first.call(null,seq42683__$2);
var seq42683__$3 = cljs.core.next.call(null,seq42683__$2);
var G__42687 = cljs.core.first.call(null,seq42683__$3);
var seq42683__$4 = cljs.core.next.call(null,seq42683__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__42684,G__42685,G__42686,G__42687,seq42683__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.divide.cljs$lang$macro = true;

var ret__29145__auto___42701 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__42700 = arguments.length;
switch (G__42700) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42703 = arguments.length;
var i__29106__auto___42704 = (0);
while(true){
if((i__29106__auto___42704 < len__29105__auto___42703)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42704]));

var G__42705 = (i__29106__auto___42704 + (1));
i__29106__auto___42704 = G__42705;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq42695){
var G__42696 = cljs.core.first.call(null,seq42695);
var seq42695__$1 = cljs.core.next.call(null,seq42695);
var G__42697 = cljs.core.first.call(null,seq42695__$1);
var seq42695__$2 = cljs.core.next.call(null,seq42695__$1);
var G__42698 = cljs.core.first.call(null,seq42695__$2);
var seq42695__$3 = cljs.core.next.call(null,seq42695__$2);
var G__42699 = cljs.core.first.call(null,seq42695__$3);
var seq42695__$4 = cljs.core.next.call(null,seq42695__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__42696,G__42697,G__42698,G__42699,seq42695__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT_.cljs$lang$macro = true;

var ret__29145__auto___42713 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__42712 = arguments.length;
switch (G__42712) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42715 = arguments.length;
var i__29106__auto___42716 = (0);
while(true){
if((i__29106__auto___42716 < len__29105__auto___42715)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42716]));

var G__42717 = (i__29106__auto___42716 + (1));
i__29106__auto___42716 = G__42717;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq42707){
var G__42708 = cljs.core.first.call(null,seq42707);
var seq42707__$1 = cljs.core.next.call(null,seq42707);
var G__42709 = cljs.core.first.call(null,seq42707__$1);
var seq42707__$2 = cljs.core.next.call(null,seq42707__$1);
var G__42710 = cljs.core.first.call(null,seq42707__$2);
var seq42707__$3 = cljs.core.next.call(null,seq42707__$2);
var G__42711 = cljs.core.first.call(null,seq42707__$3);
var seq42707__$4 = cljs.core.next.call(null,seq42707__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__42708,G__42709,G__42710,G__42711,seq42707__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._LT__EQ_.cljs$lang$macro = true;

var ret__29145__auto___42725 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__42724 = arguments.length;
switch (G__42724) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42727 = arguments.length;
var i__29106__auto___42728 = (0);
while(true){
if((i__29106__auto___42728 < len__29105__auto___42727)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42728]));

var G__42729 = (i__29106__auto___42728 + (1));
i__29106__auto___42728 = G__42729;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq42719){
var G__42720 = cljs.core.first.call(null,seq42719);
var seq42719__$1 = cljs.core.next.call(null,seq42719);
var G__42721 = cljs.core.first.call(null,seq42719__$1);
var seq42719__$2 = cljs.core.next.call(null,seq42719__$1);
var G__42722 = cljs.core.first.call(null,seq42719__$2);
var seq42719__$3 = cljs.core.next.call(null,seq42719__$2);
var G__42723 = cljs.core.first.call(null,seq42719__$3);
var seq42719__$4 = cljs.core.next.call(null,seq42719__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__42720,G__42721,G__42722,G__42723,seq42719__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT_.cljs$lang$macro = true;

var ret__29145__auto___42737 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__42736 = arguments.length;
switch (G__42736) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42739 = arguments.length;
var i__29106__auto___42740 = (0);
while(true){
if((i__29106__auto___42740 < len__29105__auto___42739)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42740]));

var G__42741 = (i__29106__auto___42740 + (1));
i__29106__auto___42740 = G__42741;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq42731){
var G__42732 = cljs.core.first.call(null,seq42731);
var seq42731__$1 = cljs.core.next.call(null,seq42731);
var G__42733 = cljs.core.first.call(null,seq42731__$1);
var seq42731__$2 = cljs.core.next.call(null,seq42731__$1);
var G__42734 = cljs.core.first.call(null,seq42731__$2);
var seq42731__$3 = cljs.core.next.call(null,seq42731__$2);
var G__42735 = cljs.core.first.call(null,seq42731__$3);
var seq42731__$4 = cljs.core.next.call(null,seq42731__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__42732,G__42733,G__42734,G__42735,seq42731__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._GT__EQ_.cljs$lang$macro = true;

var ret__29145__auto___42749 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__42748 = arguments.length;
switch (G__42748) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42751 = arguments.length;
var i__29106__auto___42752 = (0);
while(true){
if((i__29106__auto___42752 < len__29105__auto___42751)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42752]));

var G__42753 = (i__29106__auto___42752 + (1));
i__29106__auto___42752 = G__42753;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq42743){
var G__42744 = cljs.core.first.call(null,seq42743);
var seq42743__$1 = cljs.core.next.call(null,seq42743);
var G__42745 = cljs.core.first.call(null,seq42743__$1);
var seq42743__$2 = cljs.core.next.call(null,seq42743__$1);
var G__42746 = cljs.core.first.call(null,seq42743__$2);
var seq42743__$3 = cljs.core.next.call(null,seq42743__$2);
var G__42747 = cljs.core.first.call(null,seq42743__$3);
var seq42743__$4 = cljs.core.next.call(null,seq42743__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__42744,G__42745,G__42746,G__42747,seq42743__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;

var ret__29145__auto___42754 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.dec.cljs$lang$macro = true;

var ret__29145__auto___42755 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});
cljs.core$macros.inc.cljs$lang$macro = true;

var ret__29145__auto___42756 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42757 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42758 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___42768 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__42767 = arguments.length;
switch (G__42767) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42770 = arguments.length;
var i__29106__auto___42771 = (0);
while(true){
if((i__29106__auto___42771 < len__29105__auto___42770)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42771]));

var G__42772 = (i__29106__auto___42771 + (1));
i__29106__auto___42771 = G__42772;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42759__auto__","x__42759__auto__",-821364367,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__42760__auto__","y__42760__auto__",-2083543006,null)),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42759__auto__","x__42759__auto__",-821364367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__42760__auto__","y__42760__auto__",-2083543006,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42759__auto__","x__42759__auto__",-821364367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__42760__auto__","y__42760__auto__",-2083543006,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq42762){
var G__42763 = cljs.core.first.call(null,seq42762);
var seq42762__$1 = cljs.core.next.call(null,seq42762);
var G__42764 = cljs.core.first.call(null,seq42762__$1);
var seq42762__$2 = cljs.core.next.call(null,seq42762__$1);
var G__42765 = cljs.core.first.call(null,seq42762__$2);
var seq42762__$3 = cljs.core.next.call(null,seq42762__$2);
var G__42766 = cljs.core.first.call(null,seq42762__$3);
var seq42762__$4 = cljs.core.next.call(null,seq42762__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__42763,G__42764,G__42765,G__42766,seq42762__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.max.cljs$lang$macro = true;

var ret__29145__auto___42782 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__42781 = arguments.length;
switch (G__42781) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42784 = arguments.length;
var i__29106__auto___42785 = (0);
while(true){
if((i__29106__auto___42785 < len__29105__auto___42784)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42785]));

var G__42786 = (i__29106__auto___42785 + (1));
i__29106__auto___42785 = G__42786;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42773__auto__","x__42773__auto__",1271390924,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__42774__auto__","y__42774__auto__",-146103906,null)),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42773__auto__","x__42773__auto__",1271390924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__42774__auto__","y__42774__auto__",-146103906,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42773__auto__","x__42773__auto__",1271390924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__42774__auto__","y__42774__auto__",-146103906,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq42776){
var G__42777 = cljs.core.first.call(null,seq42776);
var seq42776__$1 = cljs.core.next.call(null,seq42776);
var G__42778 = cljs.core.first.call(null,seq42776__$1);
var seq42776__$2 = cljs.core.next.call(null,seq42776__$1);
var G__42779 = cljs.core.first.call(null,seq42776__$2);
var seq42776__$3 = cljs.core.next.call(null,seq42776__$2);
var G__42780 = cljs.core.first.call(null,seq42776__$3);
var seq42776__$4 = cljs.core.next.call(null,seq42776__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__42777,G__42778,G__42779,G__42780,seq42776__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.min.cljs$lang$macro = true;

var ret__29145__auto___42787 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_mod.cljs$lang$macro = true;

var ret__29145__auto___42788 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_not.cljs$lang$macro = true;

var ret__29145__auto___42796 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__42795 = arguments.length;
switch (G__42795) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42798 = arguments.length;
var i__29106__auto___42799 = (0);
while(true){
if((i__29106__auto___42799 < len__29105__auto___42798)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42799]));

var G__42800 = (i__29106__auto___42799 + (1));
i__29106__auto___42799 = G__42800;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq42790){
var G__42791 = cljs.core.first.call(null,seq42790);
var seq42790__$1 = cljs.core.next.call(null,seq42790);
var G__42792 = cljs.core.first.call(null,seq42790__$1);
var seq42790__$2 = cljs.core.next.call(null,seq42790__$1);
var G__42793 = cljs.core.first.call(null,seq42790__$2);
var seq42790__$3 = cljs.core.next.call(null,seq42790__$2);
var G__42794 = cljs.core.first.call(null,seq42790__$3);
var seq42790__$4 = cljs.core.next.call(null,seq42790__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__42791,G__42792,G__42793,G__42794,seq42790__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and.cljs$lang$macro = true;

var ret__29145__auto___42808 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__42807 = arguments.length;
switch (G__42807) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42810 = arguments.length;
var i__29106__auto___42811 = (0);
while(true){
if((i__29106__auto___42811 < len__29105__auto___42810)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42811]));

var G__42812 = (i__29106__auto___42811 + (1));
i__29106__auto___42811 = G__42812;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq42802){
var G__42803 = cljs.core.first.call(null,seq42802);
var seq42802__$1 = cljs.core.next.call(null,seq42802);
var G__42804 = cljs.core.first.call(null,seq42802__$1);
var seq42802__$2 = cljs.core.next.call(null,seq42802__$1);
var G__42805 = cljs.core.first.call(null,seq42802__$2);
var seq42802__$3 = cljs.core.next.call(null,seq42802__$2);
var G__42806 = cljs.core.first.call(null,seq42802__$3);
var seq42802__$4 = cljs.core.next.call(null,seq42802__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__42803,G__42804,G__42805,G__42806,seq42802__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;

var ret__29145__auto___42820 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__42819 = arguments.length;
switch (G__42819) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42822 = arguments.length;
var i__29106__auto___42823 = (0);
while(true){
if((i__29106__auto___42823 < len__29105__auto___42822)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42823]));

var G__42824 = (i__29106__auto___42823 + (1));
i__29106__auto___42823 = G__42824;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq42814){
var G__42815 = cljs.core.first.call(null,seq42814);
var seq42814__$1 = cljs.core.next.call(null,seq42814);
var G__42816 = cljs.core.first.call(null,seq42814__$1);
var seq42814__$2 = cljs.core.next.call(null,seq42814__$1);
var G__42817 = cljs.core.first.call(null,seq42814__$2);
var seq42814__$3 = cljs.core.next.call(null,seq42814__$2);
var G__42818 = cljs.core.first.call(null,seq42814__$3);
var seq42814__$4 = cljs.core.next.call(null,seq42814__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__42815,G__42816,G__42817,G__42818,seq42814__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_or.cljs$lang$macro = true;

var ret__29145__auto___42825 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});
cljs.core$macros.int$.cljs$lang$macro = true;

var ret__29145__auto___42833 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__42832 = arguments.length;
switch (G__42832) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42835 = arguments.length;
var i__29106__auto___42836 = (0);
while(true){
if((i__29106__auto___42836 < len__29105__auto___42835)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42836]));

var G__42837 = (i__29106__auto___42836 + (1));
i__29106__auto___42836 = G__42837;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq42827){
var G__42828 = cljs.core.first.call(null,seq42827);
var seq42827__$1 = cljs.core.next.call(null,seq42827);
var G__42829 = cljs.core.first.call(null,seq42827__$1);
var seq42827__$2 = cljs.core.next.call(null,seq42827__$1);
var G__42830 = cljs.core.first.call(null,seq42827__$2);
var seq42827__$3 = cljs.core.next.call(null,seq42827__$2);
var G__42831 = cljs.core.first.call(null,seq42827__$3);
var seq42827__$4 = cljs.core.next.call(null,seq42827__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__42828,G__42829,G__42830,G__42831,seq42827__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_xor.cljs$lang$macro = true;

var ret__29145__auto___42845 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__42844 = arguments.length;
switch (G__42844) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___42847 = arguments.length;
var i__29106__auto___42848 = (0);
while(true){
if((i__29106__auto___42848 < len__29105__auto___42847)){
args_arr__29124__auto__.push((arguments[i__29106__auto___42848]));

var G__42849 = (i__29106__auto___42848 + (1));
i__29106__auto___42848 = G__42849;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq42839){
var G__42840 = cljs.core.first.call(null,seq42839);
var seq42839__$1 = cljs.core.next.call(null,seq42839);
var G__42841 = cljs.core.first.call(null,seq42839__$1);
var seq42839__$2 = cljs.core.next.call(null,seq42839__$1);
var G__42842 = cljs.core.first.call(null,seq42839__$2);
var seq42839__$3 = cljs.core.next.call(null,seq42839__$2);
var G__42843 = cljs.core.first.call(null,seq42839__$3);
var seq42839__$4 = cljs.core.next.call(null,seq42839__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__42840,G__42841,G__42842,G__42843,seq42839__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.bit_and_not.cljs$lang$macro = true;

var ret__29145__auto___42850 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_clear.cljs$lang$macro = true;

var ret__29145__auto___42851 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_flip.cljs$lang$macro = true;

var ret__29145__auto___42852 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});
cljs.core$macros.bit_test.cljs$lang$macro = true;

var ret__29145__auto___42853 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_left.cljs$lang$macro = true;

var ret__29145__auto___42854 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right.cljs$lang$macro = true;

var ret__29145__auto___42855 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;

var ret__29145__auto___42856 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;

var ret__29145__auto___42857 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bit_set.cljs$lang$macro = true;

var ret__29145__auto___42858 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.mask.cljs$lang$macro = true;

var ret__29145__auto___42859 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__28798__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.bitpos.cljs$lang$macro = true;

var ret__29145__auto___42861 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__42860__auto__","h__42860__auto__",1015255112,null)),(function (){var x__28798__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__42860__auto__","h__42860__auto__",1015255112,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__42860__auto__","h__42860__auto__",1015255112,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__42860__auto__","h__42860__auto__",1015255112,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__42860__auto__","h__42860__auto__",1015255112,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__42860__auto__","h__42860__auto__",1015255112,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.caching_hash.cljs$lang$macro = true;

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__28798__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42862__auto__","x__42862__auto__",-406147804,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__42862__auto__","x__42862__auto__",-406147804,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
var ret__29145__auto___42870 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42871 = arguments.length;
var i__29106__auto___42872 = (0);
while(true){
if((i__29106__auto___42872 < len__29105__auto___42871)){
args__29112__auto__.push((arguments[i__29106__auto___42872]));

var G__42873 = (i__29106__auto___42872 + (1));
i__29106__auto___42872 = G__42873;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((6) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__29113__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq42863){
var G__42864 = cljs.core.first.call(null,seq42863);
var seq42863__$1 = cljs.core.next.call(null,seq42863);
var G__42865 = cljs.core.first.call(null,seq42863__$1);
var seq42863__$2 = cljs.core.next.call(null,seq42863__$1);
var G__42866 = cljs.core.first.call(null,seq42863__$2);
var seq42863__$3 = cljs.core.next.call(null,seq42863__$2);
var G__42867 = cljs.core.first.call(null,seq42863__$3);
var seq42863__$4 = cljs.core.next.call(null,seq42863__$3);
var G__42868 = cljs.core.first.call(null,seq42863__$4);
var seq42863__$5 = cljs.core.next.call(null,seq42863__$4);
var G__42869 = cljs.core.first.call(null,seq42863__$5);
var seq42863__$6 = cljs.core.next.call(null,seq42863__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__42864,G__42865,G__42866,G__42867,G__42868,G__42869,seq42863__$6);
});

return null;
})()
;
cljs.core$macros.defcurried.cljs$lang$macro = true;

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = clojure.walk.postwalk.call(null,(function (p1__42874_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__42874_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__42874_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__42874_SHARP_));
} else {
return p1__42874_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
var ret__29145__auto___42879 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__42875,fkv){
var vec__42876 = p__42875;
var f1 = cljs.core.nth.call(null,vec__42876,(0),null);
var k = cljs.core.nth.call(null,vec__42876,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});
cljs.core$macros.rfn.cljs$lang$macro = true;

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__29145__auto___42883 = (function (){
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
var args__29112__auto__ = [];
var len__29105__auto___42884 = arguments.length;
var i__29106__auto___42885 = (0);
while(true){
if((i__29106__auto___42885 < len__29105__auto___42884)){
args__29112__auto__.push((arguments[i__29106__auto___42885]));

var G__42886 = (i__29106__auto___42885 + (1));
i__29106__auto___42885 = G__42886;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,["t_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__28798__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__28798__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__28798__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28798__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),locals,(function (){var x__28798__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28798__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),locals,(function (){var x__28798__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq42880){
var G__42881 = cljs.core.first.call(null,seq42880);
var seq42880__$1 = cljs.core.next.call(null,seq42880);
var G__42882 = cljs.core.first.call(null,seq42880__$1);
var seq42880__$2 = cljs.core.next.call(null,seq42880__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__42881,G__42882,seq42880__$2);
});

return null;
})()
;
cljs.core$macros.reify.cljs$lang$macro = true;

var ret__29145__auto___42891 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42892 = arguments.length;
var i__29106__auto___42893 = (0);
while(true){
if((i__29106__auto___42893 < len__29105__auto___42892)){
args__29112__auto__.push((arguments[i__29106__auto___42893]));

var G__42894 = (i__29106__auto___42893 + (1));
i__29106__auto___42893 = G__42894;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq42887){
var G__42888 = cljs.core.first.call(null,seq42887);
var seq42887__$1 = cljs.core.next.call(null,seq42887);
var G__42889 = cljs.core.first.call(null,seq42887__$1);
var seq42887__$2 = cljs.core.next.call(null,seq42887__$1);
var G__42890 = cljs.core.first.call(null,seq42887__$2);
var seq42887__$3 = cljs.core.next.call(null,seq42887__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42888,G__42889,G__42890,seq42887__$3);
});

return null;
})()
;
cljs.core$macros.specify_BANG_.cljs$lang$macro = true;

var ret__29145__auto___42899 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42900 = arguments.length;
var i__29106__auto___42901 = (0);
while(true){
if((i__29106__auto___42901 < len__29105__auto___42900)){
args__29112__auto__.push((arguments[i__29106__auto___42901]));

var G__42902 = (i__29106__auto___42901 + (1));
i__29106__auto___42901 = G__42902;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__28798__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq42895){
var G__42896 = cljs.core.first.call(null,seq42895);
var seq42895__$1 = cljs.core.next.call(null,seq42895);
var G__42897 = cljs.core.first.call(null,seq42895__$1);
var seq42895__$2 = cljs.core.next.call(null,seq42895__$1);
var G__42898 = cljs.core.first.call(null,seq42895__$2);
var seq42895__$3 = cljs.core.next.call(null,seq42895__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__42896,G__42897,G__42898,seq42895__$3);
});

return null;
})()
;
cljs.core$macros.specify.cljs$lang$macro = true;

var ret__29145__auto___42903 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_this.cljs$lang$macro = true;

var ret__29145__auto___42908 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__29112__auto__ = [];
var len__29105__auto___42909 = arguments.length;
var i__29106__auto___42910 = (0);
while(true){
if((i__29106__auto___42910 < len__29105__auto___42909)){
args__29112__auto__.push((arguments[i__29106__auto___42910]));

var G__42911 = (i__29106__auto___42910 + (1));
i__29106__auto___42910 = G__42911;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq42904){
var G__42905 = cljs.core.first.call(null,seq42904);
var seq42904__$1 = cljs.core.next.call(null,seq42904);
var G__42906 = cljs.core.first.call(null,seq42904__$1);
var seq42904__$2 = cljs.core.next.call(null,seq42904__$1);
var G__42907 = cljs.core.first.call(null,seq42904__$2);
var seq42904__$3 = cljs.core.next.call(null,seq42904__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__42905,G__42906,G__42907,seq42904__$3);
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

if(cljs.core.truth_((function (){var and__27924__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__27924__auto__)){
var and__27924__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__27924__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__27924__auto____$1;
}
} else {
return and__27924__auto__;
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
var G__42912 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__42913 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__42912;
s = G__42913;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__42914){
var vec__42915 = p__42914;
var p = cljs.core.nth.call(null,vec__42915,(0),null);
var sigs = cljs.core.nth.call(null,vec__42915,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__28798__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__42915,p,sigs){
return (function (p__42918){
var vec__42919 = p__42918;
var seq__42920 = cljs.core.seq.call(null,vec__42919);
var first__42921 = cljs.core.first.call(null,seq__42920);
var seq__42920__$1 = cljs.core.next.call(null,seq__42920);
var f = first__42921;
var meths = seq__42920__$1;
var form = vec__42919;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__28798__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(psym,pfn_prefix,vec__42915,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__28891__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28892__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28893__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28894__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28895__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__28891__auto__,prefer_table__28892__auto__,method_cache__28893__auto__,cached_hierarchy__28894__auto__,hierarchy__28895__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__28891__auto__,prefer_table__28892__auto__,method_cache__28893__auto__,cached_hierarchy__28894__auto__,hierarchy__28895__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28895__auto__,method_table__28891__auto__,prefer_table__28892__auto__,method_cache__28893__auto__,cached_hierarchy__28894__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__28798__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__28798__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__28798__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__42922){
var vec__42923 = p__42922;
var seq__42924 = cljs.core.seq.call(null,vec__42923);
var first__42925 = cljs.core.first.call(null,seq__42924);
var seq__42924__$1 = cljs.core.next.call(null,seq__42924);
var vec__42926 = first__42925;
var seq__42927 = cljs.core.seq.call(null,vec__42926);
var first__42928 = cljs.core.first.call(null,seq__42927);
var seq__42927__$1 = cljs.core.next.call(null,seq__42927);
var this$ = first__42928;
var args = seq__42927__$1;
var sig = vec__42926;
var body = seq__42924__$1;
var x__28798__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__42929){
var vec__42930 = p__42929;
var seq__42931 = cljs.core.seq.call(null,vec__42930);
var first__42932 = cljs.core.first.call(null,seq__42931);
var seq__42931__$1 = cljs.core.next.call(null,seq__42931);
var vec__42933 = first__42932;
var seq__42934 = cljs.core.seq.call(null,vec__42933);
var first__42935 = cljs.core.first.call(null,seq__42934);
var seq__42934__$1 = cljs.core.next.call(null,seq__42934);
var this$ = first__42935;
var args = seq__42934__$1;
var sig = vec__42933;
var body = seq__42931__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__28798__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__42936){
var vec__42937 = p__42936;
var seq__42938 = cljs.core.seq.call(null,vec__42937);
var first__42939 = cljs.core.first.call(null,seq__42938);
var seq__42938__$1 = cljs.core.next.call(null,seq__42938);
var vec__42940 = first__42939;
var seq__42941 = cljs.core.seq.call(null,vec__42940);
var first__42942 = cljs.core.first.call(null,seq__42941);
var seq__42941__$1 = cljs.core.next.call(null,seq__42941);
var this$ = first__42942;
var args = seq__42941__$1;
var sig = vec__42940;
var body = seq__42938__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__28798__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__42943){
var vec__42944 = p__42943;
var seq__42945 = cljs.core.seq.call(null,vec__42944);
var first__42946 = cljs.core.first.call(null,seq__42945);
var seq__42945__$1 = cljs.core.next.call(null,seq__42945);
var vec__42947 = first__42946;
var seq__42948 = cljs.core.seq.call(null,vec__42947);
var first__42949 = cljs.core.first.call(null,seq__42948);
var seq__42948__$1 = cljs.core.next.call(null,seq__42948);
var this$ = first__42949;
var args = seq__42948__$1;
var sig = vec__42947;
var body = seq__42945__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,this_SINGLEQUOTE_,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__28798__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__42951){
var vec__42952 = p__42951;
var seq__42953 = cljs.core.seq.call(null,vec__42952);
var first__42954 = cljs.core.first.call(null,seq__42953);
var seq__42953__$1 = cljs.core.next.call(null,seq__42953);
var f = first__42954;
var meths = seq__42953__$1;
var form = vec__42952;
var vec__42955 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__42955,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__42955,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__42955,f__$1,meths__$1,vec__42952,seq__42953,first__42954,seq__42953__$1,f,meths,form){
return (function (p1__42950_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__42950_SHARP_);
});})(vec__42955,f__$1,meths__$1,vec__42952,seq__42953,first__42954,seq__42953__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__42959){
var vec__42960 = p__42959;
var seq__42961 = cljs.core.seq.call(null,vec__42960);
var first__42962 = cljs.core.first.call(null,seq__42961);
var seq__42961__$1 = cljs.core.next.call(null,seq__42961);
var f = first__42962;
var meths = seq__42961__$1;
var form = vec__42960;
return cljs.core.map.call(null,((function (vec__42960,seq__42961,first__42962,seq__42961__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(vec__42960,seq__42961,first__42962,seq__42961__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__42960,seq__42961,first__42962,seq__42961__$1,f,meths,form){
return (function (p1__42958_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__42958_SHARP_);
});})(vec__42960,seq__42961,first__42962,seq__42961__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__42964){
var vec__42965 = p__42964;
var seq__42966 = cljs.core.seq.call(null,vec__42965);
var first__42967 = cljs.core.first.call(null,seq__42966);
var seq__42966__$1 = cljs.core.next.call(null,seq__42966);
var f = first__42967;
var meths = seq__42966__$1;
var form = vec__42965;
var meths__$1 = cljs.core.map.call(null,((function (vec__42965,seq__42966,first__42967,seq__42966__$1,f,meths,form){
return (function (p1__42963_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__42963_SHARP_);
});})(vec__42965,seq__42966,first__42967,seq__42966__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__28798__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__28798__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__28798__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__28798__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__42968){
var vec__42969 = p__42968;
var seq__42970 = cljs.core.seq.call(null,vec__42969);
var first__42971 = cljs.core.first.call(null,seq__42970);
var seq__42970__$1 = cljs.core.next.call(null,seq__42970);
var f = first__42971;
var meths = seq__42970__$1;
var form = vec__42969;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__42969,seq__42970,first__42971,seq__42970__$1,f,meths,form){
return (function (p__42972){
var vec__42973 = p__42972;
var seq__42974 = cljs.core.seq.call(null,vec__42973);
var first__42975 = cljs.core.first.call(null,seq__42974);
var seq__42974__$1 = cljs.core.next.call(null,seq__42974);
var sig = first__42975;
var body = seq__42974__$1;
var meth = vec__42973;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(pf,vec__42969,seq__42970,first__42971,seq__42970__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__42976){
var vec__42977 = p__42976;
var p = cljs.core.nth.call(null,vec__42977,(0),null);
var sigs = cljs.core.nth.call(null,vec__42977,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__42977,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__42977,p,sigs))
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
var vec__42980 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__42980,(0),null);
var sigs = cljs.core.nth.call(null,vec__42980,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_42983 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_42983))){
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

var G__42984 = cljs.core.next.call(null,sigs__$1);
var G__42985 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__42984;
seen = G__42985;
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

var seen_42989 = cljs.core.PersistentHashSet.EMPTY;
var methods_42990__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_42990__$1)){
var vec__42986_42991 = cljs.core.first.call(null,methods_42990__$1);
var fname_42992 = cljs.core.nth.call(null,vec__42986_42991,(0),null);
var method_42993 = vec__42986_42991;
if(cljs.core.contains_QMARK_.call(null,seen_42989,fname_42992)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_42992], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_42993);

var G__42994 = cljs.core.conj.call(null,seen_42989,fname_42992);
var G__42995 = cljs.core.next.call(null,methods_42990__$1);
seen_42989 = G__42994;
methods_42990__$1 = G__42995;
continue;
} else {
}
break;
}

var G__42996 = cljs.core.conj.call(null,protos,proto);
var G__42997 = impls__$2;
protos = G__42996;
impls__$1 = G__42997;
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
var ret__29145__auto___43006 = (function (){
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
var args__29112__auto__ = [];
var len__29105__auto___43007 = arguments.length;
var i__29106__auto___43008 = (0);
while(true){
if((i__29106__auto___43008 < len__29105__auto___43007)){
args__29112__auto__.push((arguments[i__29106__auto___43008]));

var G__43009 = (i__29106__auto___43008 + (1));
i__29106__auto___43008 = G__43009;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__43003 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__43003,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__43003,(1),null);
if(cljs.core.truth_((function (){var and__27924__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__27924__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__27924__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__43003,type,assign_impls){
return (function (p1__42998_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__42998_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__43003,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq42999){
var G__43000 = cljs.core.first.call(null,seq42999);
var seq42999__$1 = cljs.core.next.call(null,seq42999);
var G__43001 = cljs.core.first.call(null,seq42999__$1);
var seq42999__$2 = cljs.core.next.call(null,seq42999__$1);
var G__43002 = cljs.core.first.call(null,seq42999__$2);
var seq42999__$3 = cljs.core.next.call(null,seq42999__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__43000,G__43001,G__43002,seq42999__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__43011){
var vec__43012 = p__43011;
var f = cljs.core.nth.call(null,vec__43012,(0),null);
var sigs = cljs.core.nth.call(null,vec__43012,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__43012,f,sigs){
return (function (p1__43010_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__43010_SHARP_),cljs.core.nnext.call(null,p1__43010_SHARP_));
});})(vec__43012,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__43016 = arguments.length;
switch (G__43016) {
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
var G__43018 = ret__$1;
var G__43019 = specs__$2;
ret = G__43018;
specs__$1 = G__43019;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__43020_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__43020_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__28798__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28798__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__29145__auto___43032 = (function (){
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
var args__29112__auto__ = [];
var len__29105__auto___43033 = arguments.length;
var i__29106__auto___43034 = (0);
while(true){
if((i__29106__auto___43034 < len__29105__auto___43033)){
args__29112__auto__.push((arguments[i__29106__auto___43034]));

var G__43035 = (i__29106__auto___43034 + (1));
i__29106__auto___43034 = G__43035;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((4) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29113__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__43029 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__43029,(0),null);
var pmasks = cljs.core.nth.call(null,vec__43029,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__28798__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__28798__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__28798__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__28798__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__28798__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__28798__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43021__auto__","this__43021__auto__",16348629,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43022__auto__","writer__43022__auto__",388411039,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__43023__auto__","opt__43023__auto__",-2025262908,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43022__auto__","writer__43022__auto__",388411039,null)),(function (){var x__28798__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq43024){
var G__43025 = cljs.core.first.call(null,seq43024);
var seq43024__$1 = cljs.core.next.call(null,seq43024);
var G__43026 = cljs.core.first.call(null,seq43024__$1);
var seq43024__$2 = cljs.core.next.call(null,seq43024__$1);
var G__43027 = cljs.core.first.call(null,seq43024__$2);
var seq43024__$3 = cljs.core.next.call(null,seq43024__$2);
var G__43028 = cljs.core.first.call(null,seq43024__$3);
var seq43024__$4 = cljs.core.next.call(null,seq43024__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__43025,G__43026,G__43027,G__43028,seq43024__$4);
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
return (function (p1__43036_SHARP_){
return cljs.core.with_meta.call(null,p1__43036_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,rname)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rname)),"{"].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43037__auto__","this__43037__auto__",-575395493,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28798__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43038__auto__","this__43038__auto__",-501289920,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43038__auto__","this__43038__auto__",-501289920,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__43039__auto__","coll__43039__auto__",2042048459,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__28798__auto__ = cljs.core.hash.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,rname))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"coll__43039__auto__","coll__43039__auto__",2042048459,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.call(null,new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","some?","cljs.core$macros/some?",-253244523,null)),(function (){var x__28798__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__28798__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),(function (){var x__28798__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.map.call(null,((function (this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (field){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__28798__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__28798__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core$macros.to_property.call(null,field);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(this$,other,gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__28798__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null)),(function (){var x__28798__auto__ = other;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43040__auto__","this__43040__auto__",-403434490,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43041__auto__","this__43041__auto__",-1591579239,null)),(function (){var x__28798__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28798__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43042__auto__","this__43042__auto__",178540715,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43043__auto__","k__43043__auto__",547771494,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43042__auto__","this__43042__auto__",178540715,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43043__auto__","k__43043__auto__",547771494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43044__auto__","this__43044__auto__",-452834994,null)),(function (){var x__28798__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__43045__auto__","else__43045__auto__",1426731723,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__28798__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__28798__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__43045__auto__","else__43045__auto__",1426731723,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43046__auto__","this__43046__auto__",363830407,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__28798__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43047__auto__","this__43047__auto__",-199967180,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__43048__auto__","entry__43048__auto__",1293658892,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__43048__auto__","entry__43048__auto__",1293658892,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43047__auto__","this__43047__auto__",-199967180,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__43048__auto__","entry__43048__auto__",1293658892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__43048__auto__","entry__43048__auto__",1293658892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43047__auto__","this__43047__auto__",-199967180,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__43048__auto__","entry__43048__auto__",1293658892,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43049__auto__","this__43049__auto__",1013196561,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43050__auto__","k__43050__auto__",1234896587,null)),(function (){var x__28798__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43050__auto__","k__43050__auto__",1234896587,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28798__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43050__auto__","k__43050__auto__",1234896587,null)),(function (){var x__28798__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43051__auto__","this__43051__auto__",-1044146457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43052__auto__","k__43052__auto__",199384921,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__28798__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43052__auto__","k__43052__auto__",199384921,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__28798__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43051__auto__","this__43051__auto__",-1044146457,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43052__auto__","k__43052__auto__",199384921,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28798__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43052__auto__","k__43052__auto__",199384921,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43054__auto__","this__43054__auto__",-1249512278,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__43053_SHARP_){
return cljs.core._conj.call(null,(function (){var x__28798__auto__ = cljs.core.keyword.call(null,p1__43053_SHARP_);
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = p1__43053_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__28798__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43056__auto__","this__43056__auto__",1426031745,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43057__auto__","writer__43057__auto__",1592874293,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__43058__auto__","opts__43058__auto__",793989159,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__43059__auto__","pr-pair__43059__auto__",607392347,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__43060__auto__","keyval__43060__auto__",320300086,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43057__auto__","writer__43057__auto__",1592874293,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__43058__auto__","opts__43058__auto__",793989159,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__43060__auto__","keyval__43060__auto__",320300086,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43057__auto__","writer__43057__auto__",1592874293,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__43059__auto__","pr-pair__43059__auto__",607392347,null)),(function (){var x__28798__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__43058__auto__","opts__43058__auto__",793989159,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__43055_SHARP_){
return cljs.core._conj.call(null,(function (){var x__28798__auto__ = cljs.core.keyword.call(null,p1__43055_SHARP_);
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = p1__43055_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())))], null));
var vec__43061 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__43061,(0),null);
var pmasks = cljs.core.nth.call(null,vec__43061,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__28798__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__28798__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__28798__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28798__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__28798__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
var ret__29145__auto___43071 = (function (){
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
var args__29112__auto__ = [];
var len__29105__auto___43072 = arguments.length;
var i__29106__auto___43073 = (0);
while(true){
if((i__29106__auto___43073 < len__29105__auto___43072)){
args__29112__auto__.push((arguments[i__29106__auto___43073]));

var G__43074 = (i__29106__auto___43073 + (1));
i__29106__auto___43073 = G__43074;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((4) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29113__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__28798__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__28798__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__28798__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43064__auto__","this__43064__auto__",1908198896,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__28798__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__28798__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43064__auto__","this__43064__auto__",1908198896,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43065__auto__","writer__43065__auto__",-1145884161,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43065__auto__","writer__43065__auto__",-1145884161,null)),(function (){var x__28798__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq43066){
var G__43067 = cljs.core.first.call(null,seq43066);
var seq43066__$1 = cljs.core.next.call(null,seq43066);
var G__43068 = cljs.core.first.call(null,seq43066__$1);
var seq43066__$2 = cljs.core.next.call(null,seq43066__$1);
var G__43069 = cljs.core.first.call(null,seq43066__$2);
var seq43066__$3 = cljs.core.next.call(null,seq43066__$2);
var G__43070 = cljs.core.first.call(null,seq43066__$3);
var seq43066__$4 = cljs.core.next.call(null,seq43066__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__43067,G__43068,G__43069,G__43070,seq43066__$4);
});

return null;
})()
;
cljs.core$macros.defrecord.cljs$lang$macro = true;

var ret__29145__auto___43102 = (function (){
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
var args__29112__auto__ = [];
var len__29105__auto___43103 = arguments.length;
var i__29106__auto___43104 = (0);
while(true){
if((i__29106__auto___43104 < len__29105__auto___43103)){
args__29112__auto__.push((arguments[i__29106__auto___43104]));

var G__43105 = (i__29106__auto___43104 + (1));
i__29106__auto___43104 = G__43105;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__43081 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__43081,(0),null);
var methods$ = cljs.core.nth.call(null,vec__43081,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__43081,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__43081,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__43084 = cljs.core.seq.call(null,methods$);
var chunk__43085 = null;
var count__43086 = (0);
var i__43087 = (0);
while(true){
if((i__43087 < count__43086)){
var vec__43088 = cljs.core._nth.call(null,chunk__43085,i__43087);
var seq__43089 = cljs.core.seq.call(null,vec__43088);
var first__43090 = cljs.core.first.call(null,seq__43089);
var seq__43089__$1 = cljs.core.next.call(null,seq__43089);
var mname = first__43090;
var arities = seq__43089__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__43106 = seq__43084;
var G__43107 = chunk__43085;
var G__43108 = count__43086;
var G__43109 = (i__43087 + (1));
seq__43084 = G__43106;
chunk__43085 = G__43107;
count__43086 = G__43108;
i__43087 = G__43109;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43084);
if(temp__4657__auto__){
var seq__43084__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43084__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__43084__$1);
var G__43110 = cljs.core.chunk_rest.call(null,seq__43084__$1);
var G__43111 = c__28775__auto__;
var G__43112 = cljs.core.count.call(null,c__28775__auto__);
var G__43113 = (0);
seq__43084 = G__43110;
chunk__43085 = G__43111;
count__43086 = G__43112;
i__43087 = G__43113;
continue;
} else {
var vec__43091 = cljs.core.first.call(null,seq__43084__$1);
var seq__43092 = cljs.core.seq.call(null,vec__43091);
var first__43093 = cljs.core.first.call(null,seq__43092);
var seq__43092__$1 = cljs.core.next.call(null,seq__43092);
var mname = first__43093;
var arities = seq__43092__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}

var G__43114 = cljs.core.next.call(null,seq__43084__$1);
var G__43115 = null;
var G__43116 = (0);
var G__43117 = (0);
seq__43084 = G__43114;
chunk__43085 = G__43115;
count__43086 = G__43116;
i__43087 = G__43117;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__43081,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__43081,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
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
});})(p,vec__43081,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28798__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43075__auto__","x__43075__auto__",-1232174669,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28798__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28798__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__43076__auto__","m__43076__auto__",-2112030281,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__28798__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43075__auto__","x__43075__auto__",-1232174669,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__43076__auto__","m__43076__auto__",-2112030281,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__43076__auto__","m__43076__auto__",-2112030281,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__43076__auto__","m__43076__auto__",-2112030281,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__28798__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__43076__auto__","m__43076__auto__",-2112030281,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__43076__auto__","m__43076__auto__",-2112030281,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__28798__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(p,vec__43081,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__43081,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__43094){
var vec__43095 = p__43094;
var seq__43096 = cljs.core.seq.call(null,vec__43095);
var first__43097 = cljs.core.first.call(null,seq__43096);
var seq__43096__$1 = cljs.core.next.call(null,seq__43096);
var fname = first__43097;
var sigs = seq__43096__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__43081,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__43081,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__43098){
var vec__43099 = p__43098;
var seq__43100 = cljs.core.seq.call(null,vec__43099);
var first__43101 = cljs.core.first.call(null,seq__43100);
var seq__43100__$1 = cljs.core.next.call(null,seq__43100);
var fname = first__43101;
var sigs = seq__43100__$1;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__28798__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__43099,seq__43100,first__43101,seq__43100__$1,fname,sigs,p,vec__43081,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__43099,seq__43100,first__43101,seq__43100__$1,fname,sigs,p,vec__43081,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__43081,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__28798__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq43077){
var G__43078 = cljs.core.first.call(null,seq43077);
var seq43077__$1 = cljs.core.next.call(null,seq43077);
var G__43079 = cljs.core.first.call(null,seq43077__$1);
var seq43077__$2 = cljs.core.next.call(null,seq43077__$1);
var G__43080 = cljs.core.first.call(null,seq43077__$2);
var seq43077__$3 = cljs.core.next.call(null,seq43077__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__43078,G__43079,G__43080,seq43077__$3);
});

return null;
})()
;
cljs.core$macros.defprotocol.cljs$lang$macro = true;

var ret__29145__auto___43121 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__43118 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__43118,(0),null);
var bit = cljs.core.nth.call(null,vec__43118,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__28798__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__28798__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});
cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___43125 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__43122 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__43122,(0),null);
var bit = cljs.core.nth.call(null,vec__43122,(1),null);
var msym = cljs.core.symbol.call(null,["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28798__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__28798__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__28798__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__28798__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__28798__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__28798__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__28798__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}
});
cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;

var ret__29145__auto___43129 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43130 = arguments.length;
var i__29106__auto___43131 = (0);
while(true){
if((i__29106__auto___43131 < len__29105__auto___43130)){
args__29112__auto__.push((arguments[i__29106__auto___43131]));

var G__43132 = (i__29106__auto___43131 + (1));
i__29106__auto___43131 = G__43132;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq43126){
var G__43127 = cljs.core.first.call(null,seq43126);
var seq43126__$1 = cljs.core.next.call(null,seq43126);
var G__43128 = cljs.core.first.call(null,seq43126__$1);
var seq43126__$2 = cljs.core.next.call(null,seq43126__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__43127,G__43128,seq43126__$2);
});

return null;
})()
;
cljs.core$macros.lazy_seq.cljs$lang$macro = true;

var ret__29145__auto___43136 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43137 = arguments.length;
var i__29106__auto___43138 = (0);
while(true){
if((i__29106__auto___43138 < len__29105__auto___43137)){
args__29112__auto__.push((arguments[i__29106__auto___43138]));

var G__43139 = (i__29106__auto___43138 + (1));
i__29106__auto___43138 = G__43139;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq43133){
var G__43134 = cljs.core.first.call(null,seq43133);
var seq43133__$1 = cljs.core.next.call(null,seq43133);
var G__43135 = cljs.core.first.call(null,seq43133__$1);
var seq43133__$2 = cljs.core.next.call(null,seq43133__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__43134,G__43135,seq43133__$2);
});

return null;
})()
;
cljs.core$macros.delay.cljs$lang$macro = true;

var ret__29145__auto___43148 = (function (){
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
var args__29112__auto__ = [];
var len__29105__auto___43149 = arguments.length;
var i__29106__auto___43150 = (0);
while(true){
if((i__29106__auto___43150 < len__29105__auto___43149)){
args__29112__auto__.push((arguments[i__29106__auto___43150]));

var G__43151 = (i__29106__auto___43150 + (1));
i__29106__auto___43150 = G__43151;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__43144){
var vec__43145 = p__43144;
var k = cljs.core.nth.call(null,vec__43145,(0),null);
var v = cljs.core.nth.call(null,vec__43145,(1),null);
return cljs.core._conj.call(null,(function (){var x__28798__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq43140){
var G__43141 = cljs.core.first.call(null,seq43140);
var seq43140__$1 = cljs.core.next.call(null,seq43140);
var G__43142 = cljs.core.first.call(null,seq43140__$1);
var seq43140__$2 = cljs.core.next.call(null,seq43140__$1);
var G__43143 = cljs.core.first.call(null,seq43140__$2);
var seq43140__$3 = cljs.core.next.call(null,seq43140__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__43141,G__43142,G__43143,seq43140__$3);
});

return null;
})()
;
cljs.core$macros.with_redefs.cljs$lang$macro = true;

var ret__29145__auto___43156 = (function (){
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
var args__29112__auto__ = [];
var len__29105__auto___43157 = arguments.length;
var i__29106__auto___43158 = (0);
while(true){
if((i__29106__auto___43158 < len__29105__auto___43157)){
args__29112__auto__.push((arguments[i__29106__auto___43158]));

var G__43159 = (i__29106__auto___43158 + (1));
i__29106__auto___43158 = G__43159;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__28798__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq43152){
var G__43153 = cljs.core.first.call(null,seq43152);
var seq43152__$1 = cljs.core.next.call(null,seq43152);
var G__43154 = cljs.core.first.call(null,seq43152__$1);
var seq43152__$2 = cljs.core.next.call(null,seq43152__$1);
var G__43155 = cljs.core.first.call(null,seq43152__$2);
var seq43152__$3 = cljs.core.next.call(null,seq43152__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__43153,G__43154,G__43155,seq43152__$3);
});

return null;
})()
;
cljs.core$macros.binding.cljs$lang$macro = true;

var ret__29145__auto___43172 = (function (){
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
var args__29112__auto__ = [];
var len__29105__auto___43173 = arguments.length;
var i__29106__auto___43174 = (0);
while(true){
if((i__29106__auto___43174 < len__29105__auto___43173)){
args__29112__auto__.push((arguments[i__29106__auto___43174]));

var G__43175 = (i__29106__auto___43174 + (1));
i__29106__auto___43174 = G__43175;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((4) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29113__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__43166 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__43169 = cljs.core.nth.call(null,vec__43166,(0),null);
var a = cljs.core.nth.call(null,vec__43169,(0),null);
var b = cljs.core.nth.call(null,vec__43169,(1),null);
var c = cljs.core.nth.call(null,vec__43169,(2),null);
var clause = vec__43169;
var more = cljs.core.nth.call(null,vec__43166,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__28798__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__43160__auto__","p__43160__auto__",-2019139072,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__43160__auto__","p__43160__auto__",-2019139072,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq43161){
var G__43162 = cljs.core.first.call(null,seq43161);
var seq43161__$1 = cljs.core.next.call(null,seq43161);
var G__43163 = cljs.core.first.call(null,seq43161__$1);
var seq43161__$2 = cljs.core.next.call(null,seq43161__$1);
var G__43164 = cljs.core.first.call(null,seq43161__$2);
var seq43161__$3 = cljs.core.next.call(null,seq43161__$2);
var G__43165 = cljs.core.first.call(null,seq43161__$3);
var seq43161__$4 = cljs.core.next.call(null,seq43161__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__43162,G__43163,G__43164,G__43165,seq43161__$4);
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
var m = (function (){var and__27924__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__27924__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__27924__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__29145__auto___43196 = (function (){
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
var args__29112__auto__ = [];
var len__29105__auto___43197 = arguments.length;
var i__29106__auto___43198 = (0);
while(true){
if((i__29106__auto___43198 < len__29105__auto___43197)){
args__29112__auto__.push((arguments[i__29106__auto___43198]));

var G__43199 = (i__29106__auto___43198 + (1));
i__29106__auto___43198 = G__43199;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.call(null);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__28798__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (esym,default$,env){
return (function (m,p__43184){
var vec__43185 = p__43184;
var test = cljs.core.nth.call(null,vec__43185,(0),null);
var expr = cljs.core.nth.call(null,vec__43185,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__43185,test,expr,esym,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__28798__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__43185,test,expr,esym,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__28798__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(esym,default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (esym,default$,env,pairs,tests){
return (function (p1__43176_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__43176_SHARP_);
});})(esym,default$,env,pairs,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__43177_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__43177_SHARP_)){
return cljs.core.vec.call(null,p1__43177_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43177_SHARP_], null);
}
});})(no_default,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__28798__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var kw_str = ((function (no_default,esym,default$,env,pairs,tests){
return (function (p1__43178_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43178_SHARP_)].join('').substring((1));
});})(no_default,esym,default$,env,pairs,tests))
;
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,kw_str,esym,default$,env,pairs,tests){
return (function (p1__43179_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__43179_SHARP_)){
return cljs.core.mapv.call(null,kw_str,p1__43179_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str.call(null,p1__43179_SHARP_)], null);
}
});})(no_default,kw_str,esym,default$,env,pairs,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__28798__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__28798__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__28798__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (esym,default$,env,pairs,tests){
return (function (p__43192){
var vec__43193 = p__43192;
var m = cljs.core.nth.call(null,vec__43193,(0),null);
var c = cljs.core.nth.call(null,vec__43193,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__28798__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(esym,default$,env,pairs,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__28798__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq43180){
var G__43181 = cljs.core.first.call(null,seq43180);
var seq43180__$1 = cljs.core.next.call(null,seq43180);
var G__43182 = cljs.core.first.call(null,seq43180__$1);
var seq43180__$2 = cljs.core.next.call(null,seq43180__$1);
var G__43183 = cljs.core.first.call(null,seq43180__$2);
var seq43180__$3 = cljs.core.next.call(null,seq43180__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__43181,G__43182,G__43183,seq43180__$3);
});

return null;
})()
;
cljs.core$macros.case$.cljs$lang$macro = true;

var ret__29145__auto___43200 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return x;
} else {
return null;
}
});
cljs.core$macros.when_assert.cljs$lang$macro = true;

var ret__29145__auto___43203 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__43202 = arguments.length;
switch (G__43202) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__28798__auto__ = ["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__28798__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__28798__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
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

var ret__29145__auto___43241 = /**
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
return cljs.core.reduce.call(null,(function (groups,p__43210){
var vec__43211 = p__43210;
var k = cljs.core.nth.call(null,vec__43211,(0),null);
var v = cljs.core.nth.call(null,vec__43211,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__43242__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__43242 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__43243__i = 0, G__43243__a = new Array(arguments.length -  0);
while (G__43243__i < G__43243__a.length) {G__43243__a[G__43243__i] = arguments[G__43243__i + 0]; ++G__43243__i;}
  msg = new cljs.core.IndexedSeq(G__43243__a,0,null);
} 
return G__43242__delegate.call(this,msg);};
G__43242.cljs$lang$maxFixedArity = 0;
G__43242.cljs$lang$applyTo = (function (arglist__43244){
var msg = cljs.core.seq(arglist__43244);
return G__43242__delegate(msg);
});
G__43242.cljs$core$IFn$_invoke$arity$variadic = G__43242__delegate;
return G__43242;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__43214){
var vec__43215 = p__43214;
var seq__43216 = cljs.core.seq.call(null,vec__43215);
var first__43217 = cljs.core.first.call(null,seq__43216);
var seq__43216__$1 = cljs.core.next.call(null,seq__43216);
var vec__43218 = first__43217;
var seq__43219 = cljs.core.seq.call(null,vec__43218);
var first__43220 = cljs.core.first.call(null,seq__43219);
var seq__43219__$1 = cljs.core.next.call(null,seq__43219);
var bind = first__43220;
var first__43220__$1 = cljs.core.first.call(null,seq__43219__$1);
var seq__43219__$2 = cljs.core.next.call(null,seq__43219__$1);
var expr = first__43220__$1;
var mod_pairs = seq__43219__$2;
var vec__43221 = seq__43216__$1;
var vec__43224 = cljs.core.nth.call(null,vec__43221,(0),null);
var _ = cljs.core.nth.call(null,vec__43224,(0),null);
var next_expr = cljs.core.nth.call(null,vec__43224,(1),null);
var next_groups = vec__43221;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__43215,seq__43216,first__43217,seq__43216__$1,vec__43218,seq__43219,first__43220,seq__43219__$1,bind,first__43220__$1,seq__43219__$2,expr,mod_pairs,vec__43221,vec__43224,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__43227){
var vec__43228 = p__43227;
var seq__43229 = cljs.core.seq.call(null,vec__43228);
var first__43230 = cljs.core.first.call(null,seq__43229);
var seq__43229__$1 = cljs.core.next.call(null,seq__43229);
var vec__43231 = first__43230;
var k = cljs.core.nth.call(null,vec__43231,(0),null);
var v = cljs.core.nth.call(null,vec__43231,(1),null);
var pair = vec__43231;
var etc = seq__43229__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28798__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__43205__auto__","iterys__43205__auto__",-2038601055,null)),(function (){var x__28798__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__43206__auto__","fs__43206__auto__",1954173350,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__43205__auto__","iterys__43205__auto__",-2038601055,null)),(function (){var x__28798__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__43206__auto__","fs__43206__auto__",1954173350,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__43206__auto__","fs__43206__auto__",1954173350,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__28798__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__43215,seq__43216,first__43217,seq__43216__$1,vec__43218,seq__43219,first__43220,seq__43219__$1,bind,first__43220__$1,seq__43219__$2,expr,mod_pairs,vec__43221,vec__43224,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__43215,seq__43216,first__43217,seq__43216__$1,vec__43218,seq__43219,first__43220,seq__43219__$1,bind,first__43220__$1,seq__43219__$2,expr,mod_pairs,vec__43221,vec__43224,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__43234){
var vec__43235 = p__43234;
var seq__43236 = cljs.core.seq.call(null,vec__43235);
var first__43237 = cljs.core.first.call(null,seq__43236);
var seq__43236__$1 = cljs.core.next.call(null,seq__43236);
var vec__43238 = first__43237;
var k = cljs.core.nth.call(null,vec__43238,(0),null);
var v = cljs.core.nth.call(null,vec__43238,(1),null);
var pair = vec__43238;
var etc = seq__43236__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28798__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__28798__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__28798__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__28798__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__43215,seq__43216,first__43217,seq__43216__$1,vec__43218,seq__43219,first__43220,seq__43219__$1,bind,first__43220__$1,seq__43219__$2,expr,mod_pairs,vec__43221,vec__43224,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__43207__auto__","c__43207__auto__",-1128577790,null)),(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/Eric/Workspace/looperscript/resources/public/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2383),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__43208__auto__","size__43208__auto__",945338242,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__43207__auto__","c__43207__auto__",-1128577790,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__43208__auto__","size__43208__auto__",945338242,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28798__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__43208__auto__","size__43208__auto__",945338242,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__43207__auto__","c__43207__auto__",-1128577790,null)),(function (){var x__28798__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__28798__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__28798__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__28798__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__43209__auto__","iter__43209__auto__",1777704344,null)),(function (){var x__28798__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__43209__auto__","iter__43209__auto__",1777704344,null)),(function (){var x__28798__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.for$.cljs$lang$macro = true;

var ret__29145__auto___43250 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43251 = arguments.length;
var i__29106__auto___43252 = (0);
while(true){
if((i__29106__auto___43252 < len__29105__auto___43251)){
args__29112__auto__.push((arguments[i__29106__auto___43252]));

var G__43253 = (i__29106__auto___43252 + (1));
i__29106__auto___43252 = G__43253;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
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
var G__43254__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__43254 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__43255__i = 0, G__43255__a = new Array(arguments.length -  0);
while (G__43255__i < G__43255__a.length) {G__43255__a[G__43255__i] = arguments[G__43255__i + 0]; ++G__43255__i;}
  msg = new cljs.core.IndexedSeq(G__43255__a,0,null);
} 
return G__43254__delegate.call(this,msg);};
G__43254.cljs$lang$maxFixedArity = 0;
G__43254.cljs$lang$applyTo = (function (arglist__43256){
var msg = cljs.core.seq(arglist__43256);
return G__43254__delegate(msg);
});
G__43254.cljs$core$IFn$_invoke$arity$variadic = G__43254__delegate;
return G__43254;
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
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__28798__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28798__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28798__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28798__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__28798__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28798__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28798__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__28798__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28798__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__28798__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28798__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__28798__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__43245__auto__","c__43245__auto__",-855540973,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__28798__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__28798__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__43245__auto__","c__43245__auto__",-855540973,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__43245__auto__","c__43245__auto__",-855540973,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__28798__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq43246){
var G__43247 = cljs.core.first.call(null,seq43246);
var seq43246__$1 = cljs.core.next.call(null,seq43246);
var G__43248 = cljs.core.first.call(null,seq43246__$1);
var seq43246__$2 = cljs.core.next.call(null,seq43246__$1);
var G__43249 = cljs.core.first.call(null,seq43246__$2);
var seq43246__$3 = cljs.core.next.call(null,seq43246__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__43247,G__43248,G__43249,seq43246__$3);
});

return null;
})()
;
cljs.core$macros.doseq.cljs$lang$macro = true;

var ret__29145__auto___43260 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43261 = arguments.length;
var i__29106__auto___43262 = (0);
while(true){
if((i__29106__auto___43262 < len__29105__auto___43261)){
args__29112__auto__.push((arguments[i__29106__auto___43262]));

var G__43263 = (i__29106__auto___43262 + (1));
i__29106__auto___43262 = G__43263;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq43257){
var G__43258 = cljs.core.first.call(null,seq43257);
var seq43257__$1 = cljs.core.next.call(null,seq43257);
var G__43259 = cljs.core.first.call(null,seq43257__$1);
var seq43257__$2 = cljs.core.next.call(null,seq43257__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__43258,G__43259,seq43257__$2);
});

return null;
})()
;
cljs.core$macros.array.cljs$lang$macro = true;

var ret__29145__auto___43274 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__43273 = arguments.length;
switch (G__43273) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___43276 = arguments.length;
var i__29106__auto___43277 = (0);
while(true){
if((i__29106__auto___43277 < len__29105__auto___43276)){
args_arr__29124__auto__.push((arguments[i__29106__auto___43277]));

var G__43278 = (i__29106__auto___43277 + (1));
i__29106__auto___43277 = G__43278;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29125__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__28798__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__28798__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__43264__auto__","dims__43264__auto__",485845176,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__43265__auto__","dimarray__43265__auto__",-1143561956,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__28798__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__43266__auto__","i__43266__auto__",1958618025,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__43265__auto__","dimarray__43265__auto__",-1143561956,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__43265__auto__","dimarray__43265__auto__",-1143561956,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__43266__auto__","i__43266__auto__",1958618025,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__43264__auto__","dims__43264__auto__",485845176,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__43265__auto__","dimarray__43265__auto__",-1143561956,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq43268){
var G__43269 = cljs.core.first.call(null,seq43268);
var seq43268__$1 = cljs.core.next.call(null,seq43268);
var G__43270 = cljs.core.first.call(null,seq43268__$1);
var seq43268__$2 = cljs.core.next.call(null,seq43268__$1);
var G__43271 = cljs.core.first.call(null,seq43268__$2);
var seq43268__$3 = cljs.core.next.call(null,seq43268__$2);
var G__43272 = cljs.core.first.call(null,seq43268__$3);
var seq43268__$4 = cljs.core.next.call(null,seq43268__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__43269,G__43270,G__43271,G__43272,seq43268__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.core$macros.make_array.cljs$lang$macro = true;

var ret__29145__auto___43287 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__43285 = arguments.length;
switch (G__43285) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___43289 = arguments.length;
var i__29106__auto___43290 = (0);
while(true){
if((i__29106__auto___43290 < len__29105__auto___43289)){
args_arr__29124__auto__.push((arguments[i__29106__auto___43290]));

var G__43291 = (i__29106__auto___43290 + (1));
i__29106__auto___43290 = G__43291;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29125__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1((function (){var _STAR_cljs_warnings_STAR_43286 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,x);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_43286;
}})()))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43279__auto__","x__43279__auto__",51667183,null)),(function (){var x__28798__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43279__auto__","x__43279__auto__",51667183,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq43281){
var G__43282 = cljs.core.first.call(null,seq43281);
var seq43281__$1 = cljs.core.next.call(null,seq43281);
var G__43283 = cljs.core.first.call(null,seq43281__$1);
var seq43281__$2 = cljs.core.next.call(null,seq43281__$1);
var G__43284 = cljs.core.first.call(null,seq43281__$2);
var seq43281__$3 = cljs.core.next.call(null,seq43281__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__43282,G__43283,G__43284,seq43281__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

return null;
})()
;
cljs.core$macros.list.cljs$lang$macro = true;

var ret__29145__auto___43297 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__43296 = arguments.length;
switch (G__43296) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___43299 = arguments.length;
var i__29106__auto___43300 = (0);
while(true){
if((i__29106__auto___43300 < len__29105__auto___43299)){
args_arr__29124__auto__.push((arguments[i__29106__auto___43300]));

var G__43301 = (i__29106__auto___43300 + (1));
i__29106__auto___43300 = G__43301;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29125__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28798__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq43293){
var G__43294 = cljs.core.first.call(null,seq43293);
var seq43293__$1 = cljs.core.next.call(null,seq43293);
var G__43295 = cljs.core.first.call(null,seq43293__$1);
var seq43293__$2 = cljs.core.next.call(null,seq43293__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__43294,G__43295,seq43293__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.vector.cljs$lang$macro = true;

var ret__29145__auto___43311 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__43308 = arguments.length;
switch (G__43308) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___43313 = arguments.length;
var i__29106__auto___43314 = (0);
while(true){
if((i__29106__auto___43314 < len__29105__auto___43313)){
args_arr__29124__auto__.push((arguments[i__29106__auto___43314]));

var G__43315 = (i__29106__auto___43314 + (1));
i__29106__auto___43314 = G__43315;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29125__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__43302_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__43302_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__43303_SHARP_){
var _STAR_cljs_warnings_STAR_43310 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__43303_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_43310;
}});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28798__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq43305){
var G__43306 = cljs.core.first.call(null,seq43305);
var seq43305__$1 = cljs.core.next.call(null,seq43305);
var G__43307 = cljs.core.first.call(null,seq43305__$1);
var seq43305__$2 = cljs.core.next.call(null,seq43305__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__43306,G__43307,seq43305__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.array_map.cljs$lang$macro = true;

var ret__29145__auto___43321 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__43320 = arguments.length;
switch (G__43320) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___43323 = arguments.length;
var i__29106__auto___43324 = (0);
while(true){
if((i__29106__auto___43324 < len__29105__auto___43323)){
args_arr__29124__auto__.push((arguments[i__29106__auto___43324]));

var G__43325 = (i__29106__auto___43324 + (1));
i__29106__auto___43324 = G__43325;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29125__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq43317){
var G__43318 = cljs.core.first.call(null,seq43317);
var seq43317__$1 = cljs.core.next.call(null,seq43317);
var G__43319 = cljs.core.first.call(null,seq43317__$1);
var seq43317__$2 = cljs.core.next.call(null,seq43317__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__43318,G__43319,seq43317__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

return null;
})()
;
cljs.core$macros.hash_map.cljs$lang$macro = true;

var ret__29145__auto___43335 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__43332 = arguments.length;
switch (G__43332) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29124__auto__ = [];
var len__29105__auto___43337 = arguments.length;
var i__29106__auto___43338 = (0);
while(true){
if((i__29106__auto___43338 < len__29105__auto___43337)){
args_arr__29124__auto__.push((arguments[i__29106__auto___43338]));

var G__43339 = (i__29106__auto___43338 + (1));
i__29106__auto___43338 = G__43339;
continue;
} else {
}
break;
}

var argseq__29125__auto__ = (new cljs.core.IndexedSeq(args_arr__29124__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29125__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__43326_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__43326_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__43327_SHARP_){
var _STAR_cljs_warnings_STAR_43334 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);

try{return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__43327_SHARP_);
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_43334;
}}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__28798__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq43329){
var G__43330 = cljs.core.first.call(null,seq43329);
var seq43329__$1 = cljs.core.next.call(null,seq43329);
var G__43331 = cljs.core.first.call(null,seq43329__$1);
var seq43329__$2 = cljs.core.next.call(null,seq43329__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__43330,G__43331,seq43329__$2);
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
var ret__29145__auto___43355 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43356 = arguments.length;
var i__29106__auto___43357 = (0);
while(true){
if((i__29106__auto___43357 < len__29105__auto___43356)){
args__29112__auto__.push((arguments[i__29106__auto___43357]));

var G__43358 = (i__29106__auto___43357 + (1));
i__29106__auto___43357 = G__43358;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__43343){
var vec__43344 = p__43343;
var k = cljs.core.nth.call(null,vec__43344,(0),null);
var _ = cljs.core.nth.call(null,vec__43344,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__28798__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__43347){
var vec__43348 = p__43347;
var k = cljs.core.nth.call(null,vec__43348,(0),null);
var v = cljs.core.nth.call(null,vec__43348,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__28798__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__43351){
var vec__43352 = p__43351;
var k = cljs.core.nth.call(null,vec__43352,(0),null);
var v = cljs.core.nth.call(null,vec__43352,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__28798__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__28798__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq43340){
var G__43341 = cljs.core.first.call(null,seq43340);
var seq43340__$1 = cljs.core.next.call(null,seq43340);
var G__43342 = cljs.core.first.call(null,seq43340__$1);
var seq43340__$2 = cljs.core.next.call(null,seq43340__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__43341,G__43342,seq43340__$2);
});

return null;
})()
;
cljs.core$macros.js_obj.cljs$lang$macro = true;

var ret__29145__auto___43359 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
cljs.core$macros.alength.cljs$lang$macro = true;

var ret__29145__auto___43361 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__43360__auto__","a__43360__auto__",486071568,null)),(function (){var x__28798__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__43360__auto__","a__43360__auto__",486071568,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__43360__auto__","a__43360__auto__",486071568,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__28798__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.amap.cljs$lang$macro = true;

var ret__29145__auto___43363 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__43362__auto__","a__43362__auto__",-491053001,null)),(function (){var x__28798__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__28798__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__43362__auto__","a__43362__auto__",-491053001,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__28798__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.areduce.cljs$lang$macro = true;

var ret__29145__auto___43369 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43370 = arguments.length;
var i__29106__auto___43371 = (0);
while(true){
if((i__29106__auto___43371 < len__29105__auto___43370)){
args__29112__auto__.push((arguments[i__29106__auto___43371]));

var G__43372 = (i__29106__auto___43371 + (1));
i__29106__auto___43371 = G__43372;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__43364__auto__","n__43364__auto__",975667313,null)),(function (){var x__28798__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28798__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__43364__auto__","n__43364__auto__",975667313,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body,(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__28798__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq43365){
var G__43366 = cljs.core.first.call(null,seq43365);
var seq43365__$1 = cljs.core.next.call(null,seq43365);
var G__43367 = cljs.core.first.call(null,seq43365__$1);
var seq43365__$2 = cljs.core.next.call(null,seq43365__$1);
var G__43368 = cljs.core.first.call(null,seq43365__$2);
var seq43365__$3 = cljs.core.next.call(null,seq43365__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__43366,G__43367,G__43368,seq43365__$3);
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
var args__29112__auto__ = [];
var len__29105__auto___43376 = arguments.length;
var i__29106__auto___43377 = (0);
while(true){
if((i__29106__auto___43377 < len__29105__auto___43376)){
args__29112__auto__.push((arguments[i__29106__auto___43377]));

var G__43378 = (i__29106__auto___43377 + (1));
i__29106__auto___43377 = G__43378;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((1) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29113__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__43373_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43373_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq43374){
var G__43375 = cljs.core.first.call(null,seq43374);
var seq43374__$1 = cljs.core.next.call(null,seq43374);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__43375,seq43374__$1);
});

var ret__29145__auto___43388 = (function (){
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
var args__29112__auto__ = [];
var len__29105__auto___43389 = arguments.length;
var i__29106__auto___43390 = (0);
while(true){
if((i__29106__auto___43390 < len__29105__auto___43389)){
args__29112__auto__.push((arguments[i__29106__auto___43390]));

var G__43391 = (i__29106__auto___43390 + (1));
i__29106__auto___43390 = G__43391;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__43379__auto__","method-table__43379__auto__",-6128145,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__28798__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__43380__auto__","prefer-table__43380__auto__",1523931866,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__28798__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__43381__auto__","method-cache__43381__auto__",14562703,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__28798__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__43382__auto__","cached-hierarchy__43382__auto__",-667993999,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__28798__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__43383__auto__","hierarchy__43383__auto__",775009842,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__28798__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__28798__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__43383__auto__","hierarchy__43383__auto__",775009842,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__43379__auto__","method-table__43379__auto__",-6128145,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__43380__auto__","prefer-table__43380__auto__",1523931866,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__43381__auto__","method-cache__43381__auto__",14562703,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__43382__auto__","cached-hierarchy__43382__auto__",-667993999,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq43384){
var G__43385 = cljs.core.first.call(null,seq43384);
var seq43384__$1 = cljs.core.next.call(null,seq43384);
var G__43386 = cljs.core.first.call(null,seq43384__$1);
var seq43384__$2 = cljs.core.next.call(null,seq43384__$1);
var G__43387 = cljs.core.first.call(null,seq43384__$2);
var seq43384__$3 = cljs.core.next.call(null,seq43384__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__43385,G__43386,G__43387,seq43384__$3);
});

return null;
})()
;
cljs.core$macros.defmulti.cljs$lang$macro = true;

var ret__29145__auto___43397 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43398 = arguments.length;
var i__29106__auto___43399 = (0);
while(true){
if((i__29106__auto___43399 < len__29105__auto___43398)){
args__29112__auto__.push((arguments[i__29106__auto___43399]));

var G__43400 = (i__29106__auto___43399 + (1));
i__29106__auto___43399 = G__43400;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((4) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29113__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq43392){
var G__43393 = cljs.core.first.call(null,seq43392);
var seq43392__$1 = cljs.core.next.call(null,seq43392);
var G__43394 = cljs.core.first.call(null,seq43392__$1);
var seq43392__$2 = cljs.core.next.call(null,seq43392__$1);
var G__43395 = cljs.core.first.call(null,seq43392__$2);
var seq43392__$3 = cljs.core.next.call(null,seq43392__$2);
var G__43396 = cljs.core.first.call(null,seq43392__$3);
var seq43392__$4 = cljs.core.next.call(null,seq43392__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__43393,G__43394,G__43395,G__43396,seq43392__$4);
});

return null;
})()
;
cljs.core$macros.defmethod.cljs$lang$macro = true;

var ret__29145__auto___43403 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__43401__auto__","start__43401__auto__",1256874612,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__43402__auto__","ret__43402__auto__",1462063643,null)),(function (){var x__28798__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__43401__auto__","start__43401__auto__",1256874612,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__43402__auto__","ret__43402__auto__",1462063643,null)))));
});
cljs.core$macros.time.cljs$lang$macro = true;

var ret__29145__auto___43418 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43419 = arguments.length;
var i__29106__auto___43420 = (0);
while(true){
if((i__29106__auto___43420 < len__29105__auto___43419)){
args__29112__auto__.push((arguments[i__29106__auto___43420]));

var G__43421 = (i__29106__auto___43420 + (1));
i__29106__auto___43420 = G__43421;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((5) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__29113__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__43415){
var map__43416 = p__43415;
var map__43416__$1 = ((((!((map__43416 == null)))?((((map__43416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43416):map__43416);
var print_fn = cljs.core.get.call(null,map__43416__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__43404__auto__","start__43404__auto__",1593531735,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__43405__auto__","ret__43405__auto__",1374908594,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___43406__auto__","___43406__auto__",-950433677,null)),(function (){var x__28798__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__43407__auto__","end__43407__auto__",714281313,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__43408__auto__","elapsed__43408__auto__",1761185119,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__43407__auto__","end__43407__auto__",714281313,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__43404__auto__","start__43404__auto__",1593531735,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__28798__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__28798__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__28798__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__43408__auto__","elapsed__43408__auto__",1761185119,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq43409){
var G__43410 = cljs.core.first.call(null,seq43409);
var seq43409__$1 = cljs.core.next.call(null,seq43409);
var G__43411 = cljs.core.first.call(null,seq43409__$1);
var seq43409__$2 = cljs.core.next.call(null,seq43409__$1);
var G__43412 = cljs.core.first.call(null,seq43409__$2);
var seq43409__$3 = cljs.core.next.call(null,seq43409__$2);
var G__43413 = cljs.core.first.call(null,seq43409__$3);
var seq43409__$4 = cljs.core.next.call(null,seq43409__$3);
var G__43414 = cljs.core.first.call(null,seq43409__$4);
var seq43409__$5 = cljs.core.next.call(null,seq43409__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__43410,G__43411,G__43412,G__43413,G__43414,seq43409__$5);
});

return null;
})()
;
cljs.core$macros.simple_benchmark.cljs$lang$macro = true;

cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__43423 = arguments.length;
switch (G__43423) {
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__28798__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

var ret__29145__auto___43425 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
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
return (function (p1__43426_SHARP_){
return cljs.core.symbol.call(null,["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43426_SHARP_)].join(''));
});})(new_arg_sym,proto_name,proto_prop,proto_inv,next_sym))
,cljs.core.range.call(null,(num_args + (1))));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = new_arg_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),(function (){var x__28798__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__28798__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__28798__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = proto_prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = proto_inv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".call",".call",1496874263,null)),(function (){var x__28798__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = ((((19) <= num_args))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__43427__auto__","arr__43427__auto__",-1083021879,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null)),all_args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__43428__auto__","s__43428__auto__",-1678256615,null)),(function (){var x__28798__auto__ = next_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__43428__auto__","s__43428__auto__",-1678256615,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__43427__auto__","arr__43427__auto__",-1083021879,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__43428__auto__","s__43428__auto__",-1678256615,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s__43428__auto__","s__43428__auto__",-1678256615,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__28798__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"arr__43427__auto__","arr__43427__auto__",-1083021879,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))):cljs.core$macros.gen_apply_to_simple_helper.call(null,f,(num_args + (1)),next_sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
var ret__29145__auto___43429 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper.call(null,f,num_args,args);
});
cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true;

var ret__29145__auto___43435 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43436 = arguments.length;
var i__29106__auto___43437 = (0);
while(true){
if((i__29106__auto___43437 < len__29105__auto___43436)){
args__29112__auto__.push((arguments[i__29106__auto___43437]));

var G__43438 = (i__29106__auto___43437 + (1));
i__29106__auto___43437 = G__43438;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__43430__auto__","sb__43430__auto__",542412154,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43431__auto__","x__43431__auto__",1766594123,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__43430__auto__","sb__43430__auto__",542412154,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43431__auto__","x__43431__auto__",1766594123,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__43430__auto__","sb__43430__auto__",542412154,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq43432){
var G__43433 = cljs.core.first.call(null,seq43432);
var seq43432__$1 = cljs.core.next.call(null,seq43432);
var G__43434 = cljs.core.first.call(null,seq43432__$1);
var seq43432__$2 = cljs.core.next.call(null,seq43432__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__43433,G__43434,seq43432__$2);
});

return null;
})()
;
cljs.core$macros.with_out_str.cljs$lang$macro = true;

var ret__29145__auto___43443 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43444 = arguments.length;
var i__29106__auto___43445 = (0);
while(true){
if((i__29106__auto___43445 < len__29105__auto___43444)){
args__29112__auto__.push((arguments[i__29106__auto___43445]));

var G__43446 = (i__29106__auto___43445 + (1));
i__29106__auto___43445 = G__43446;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__43439_SHARP_){
return cljs.core._conj.call(null,(function (){var x__28798__auto__ = p1__43439_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq43440){
var G__43441 = cljs.core.first.call(null,seq43440);
var seq43440__$1 = cljs.core.next.call(null,seq43440);
var G__43442 = cljs.core.first.call(null,seq43440__$1);
var seq43440__$2 = cljs.core.next.call(null,seq43440__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__43441,G__43442,seq43440__$2);
});

return null;
})()
;
cljs.core$macros.lazy_cat.cljs$lang$macro = true;

var ret__29145__auto___43447 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__28798__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});
cljs.core$macros.js_str.cljs$lang$macro = true;

var ret__29145__auto___43449 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__28798__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43448__auto__","this__43448__auto__",850324099,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43448__auto__","this__43448__auto__",850324099,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.es6_iterable.cljs$lang$macro = true;

var ret__29145__auto___43466 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__28798__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__43458){
var vec__43459 = p__43458;
var sym = cljs.core.nth.call(null,vec__43459,(0),null);
var _ = cljs.core.nth.call(null,vec__43459,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__28798__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__28798__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
});})(ns))
,cljs.core.filter.call(null,((function (ns){
return (function (p__43462){
var vec__43463 = p__43462;
var _ = cljs.core.nth.call(null,vec__43463,(0),null);
var info = cljs.core.nth.call(null,vec__43463,(1),null);
return cljs.core.not.call(null,new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.ns_publics.cljs$lang$macro = true;

var ret__29145__auto___43475 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__28798__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__43471){
var vec__43472 = p__43471;
var ctor = cljs.core.nth.call(null,vec__43472,(0),null);
var qualified_ctor = cljs.core.nth.call(null,vec__43472,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__28798__auto__ = cljs.core.name.call(null,ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.symbol.call(null,qualified_ctor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.ns_imports.cljs$lang$macro = true;

var ret__29145__auto___43484 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if((cljs.core.seq_QMARK_.call(null,quoted_ns)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second.call(null,quoted_ns) instanceof cljs.core.Symbol))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second.call(null,quoted_ns);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__28798__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (ns){
return (function (p__43480){
var vec__43481 = p__43480;
var sym = cljs.core.nth.call(null,vec__43481,(0),null);
var _ = cljs.core.nth.call(null,vec__43481,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__28798__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__28798__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
});})(ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.ns_interns.cljs$lang$macro = true;

var ret__29145__auto___43485 = /**
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__28798__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.ns_unmap.cljs$lang$macro = true;

var ret__29145__auto___43491 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43492 = arguments.length;
var i__29106__auto___43493 = (0);
while(true){
if((i__29106__auto___43493 < len__29105__auto___43492)){
args__29112__auto__.push((arguments[i__29106__auto___43493]));

var G__43494 = (i__29106__auto___43493 + (1));
i__29106__auto___43493 = G__43494;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((4) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29113__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__28798__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__28798__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq43486){
var G__43487 = cljs.core.first.call(null,seq43486);
var seq43486__$1 = cljs.core.next.call(null,seq43486);
var G__43488 = cljs.core.first.call(null,seq43486__$1);
var seq43486__$2 = cljs.core.next.call(null,seq43486__$1);
var G__43489 = cljs.core.first.call(null,seq43486__$2);
var seq43486__$3 = cljs.core.next.call(null,seq43486__$2);
var G__43490 = cljs.core.first.call(null,seq43486__$3);
var seq43486__$4 = cljs.core.next.call(null,seq43486__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43487,G__43488,G__43489,G__43490,seq43486__$4);
});

return null;
})()
;
cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;

var ret__29145__auto___43499 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43500 = arguments.length;
var i__29106__auto___43501 = (0);
while(true){
if((i__29106__auto___43501 < len__29105__auto___43500)){
args__29112__auto__.push((arguments[i__29106__auto___43501]));

var G__43502 = (i__29106__auto___43501 + (1));
i__29106__auto___43501 = G__43502;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq43495){
var G__43496 = cljs.core.first.call(null,seq43495);
var seq43495__$1 = cljs.core.next.call(null,seq43495);
var G__43497 = cljs.core.first.call(null,seq43495__$1);
var seq43495__$2 = cljs.core.next.call(null,seq43495__$1);
var G__43498 = cljs.core.first.call(null,seq43495__$2);
var seq43495__$3 = cljs.core.next.call(null,seq43495__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__43496,G__43497,G__43498,seq43495__$3);
});

return null;
})()
;
cljs.core$macros.locking.cljs$lang$macro = true;

var ret__29145__auto___43506 = (function (){
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
var args__29112__auto__ = [];
var len__29105__auto___43507 = arguments.length;
var i__29106__auto___43508 = (0);
while(true){
if((i__29106__auto___43508 < len__29105__auto___43507)){
args__29112__auto__.push((arguments[i__29106__auto___43508]));

var G__43509 = (i__29106__auto___43508 + (1));
i__29106__auto___43508 = G__43509;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__28798__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq43503){
var G__43504 = cljs.core.first.call(null,seq43503);
var seq43503__$1 = cljs.core.next.call(null,seq43503);
var G__43505 = cljs.core.first.call(null,seq43503__$1);
var seq43503__$2 = cljs.core.next.call(null,seq43503__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__43504,G__43505,seq43503__$2);
});

return null;
})()
;
cljs.core$macros.require.cljs$lang$macro = true;

var ret__29145__auto___43513 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43514 = arguments.length;
var i__29106__auto___43515 = (0);
while(true){
if((i__29106__auto___43515 < len__29105__auto___43514)){
args__29112__auto__.push((arguments[i__29106__auto___43515]));

var G__43516 = (i__29106__auto___43515 + (1));
i__29106__auto___43515 = G__43516;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__28798__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq43510){
var G__43511 = cljs.core.first.call(null,seq43510);
var seq43510__$1 = cljs.core.next.call(null,seq43510);
var G__43512 = cljs.core.first.call(null,seq43510__$1);
var seq43510__$2 = cljs.core.next.call(null,seq43510__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__43511,G__43512,seq43510__$2);
});

return null;
})()
;
cljs.core$macros.require_macros.cljs$lang$macro = true;

var ret__29145__auto___43520 = (function (){
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
var args__29112__auto__ = [];
var len__29105__auto___43521 = arguments.length;
var i__29106__auto___43522 = (0);
while(true){
if((i__29106__auto___43522 < len__29105__auto___43521)){
args__29112__auto__.push((arguments[i__29106__auto___43522]));

var G__43523 = (i__29106__auto___43522 + (1));
i__29106__auto___43522 = G__43523;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__28798__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq43517){
var G__43518 = cljs.core.first.call(null,seq43517);
var seq43517__$1 = cljs.core.next.call(null,seq43517);
var G__43519 = cljs.core.first.call(null,seq43517__$1);
var seq43517__$2 = cljs.core.next.call(null,seq43517__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__43518,G__43519,seq43517__$2);
});

return null;
})()
;
cljs.core$macros.use.cljs$lang$macro = true;

var ret__29145__auto___43527 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43528 = arguments.length;
var i__29106__auto___43529 = (0);
while(true){
if((i__29106__auto___43529 < len__29105__auto___43528)){
args__29112__auto__.push((arguments[i__29106__auto___43529]));

var G__43530 = (i__29106__auto___43529 + (1));
i__29106__auto___43529 = G__43530;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__28798__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq43524){
var G__43525 = cljs.core.first.call(null,seq43524);
var seq43524__$1 = cljs.core.next.call(null,seq43524);
var G__43526 = cljs.core.first.call(null,seq43524__$1);
var seq43524__$2 = cljs.core.next.call(null,seq43524__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__43525,G__43526,seq43524__$2);
});

return null;
})()
;
cljs.core$macros.use_macros.cljs$lang$macro = true;

var ret__29145__auto___43534 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__29112__auto__ = [];
var len__29105__auto___43535 = arguments.length;
var i__29106__auto___43536 = (0);
while(true){
if((i__29106__auto___43536 < len__29105__auto___43535)){
args__29112__auto__.push((arguments[i__29106__auto___43536]));

var G__43537 = (i__29106__auto___43536 + (1));
i__29106__auto___43536 = G__43537;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__28798__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq43531){
var G__43532 = cljs.core.first.call(null,seq43531);
var seq43531__$1 = cljs.core.next.call(null,seq43531);
var G__43533 = cljs.core.first.call(null,seq43531__$1);
var seq43531__$2 = cljs.core.next.call(null,seq43531__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__43532,G__43533,seq43531__$2);
});

return null;
})()
;
cljs.core$macros.import$.cljs$lang$macro = true;

var ret__29145__auto___43541 = (function (){
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
var args__29112__auto__ = [];
var len__29105__auto___43542 = arguments.length;
var i__29106__auto___43543 = (0);
while(true){
if((i__29106__auto___43543 < len__29105__auto___43542)){
args__29112__auto__.push((arguments[i__29106__auto___43543]));

var G__43544 = (i__29106__auto___43543 + (1));
i__29106__auto___43543 = G__43544;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((2) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29113__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__28798__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq43538){
var G__43539 = cljs.core.first.call(null,seq43538);
var seq43538__$1 = cljs.core.next.call(null,seq43538);
var G__43540 = cljs.core.first.call(null,seq43538__$1);
var seq43538__$2 = cljs.core.next.call(null,seq43538__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__43539,G__43540,seq43538__$2);
});

return null;
})()
;
cljs.core$macros.refer_clojure.cljs$lang$macro = true;

var ret__29145__auto___43545 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__28798__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;

var ret__29145__auto___43546 = /**
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__28798__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
return form;
}
});
cljs.core$macros.macroexpand_1.cljs$lang$macro = true;

var ret__29145__auto___43547 = /**
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
var G__43548 = form_SINGLEQUOTE_;
var G__43549 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__43548;
form_SINGLEQUOTE_ = G__43549;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__28798__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
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
var and__27924__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__27924__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__27924__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__43551 = arguments.length;
switch (G__43551) {
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

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__43552,solo){
var vec__43553 = p__43552;
var seq__43554 = cljs.core.seq.call(null,vec__43553);
var first__43555 = cljs.core.first.call(null,seq__43554);
var seq__43554__$1 = cljs.core.next.call(null,seq__43554);
var arglist = first__43555;
var body = seq__43554__$1;
var method = vec__43553;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__43553,seq__43554,first__43555,seq__43554__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__43553,seq__43554,first__43555,seq__43554__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__43553,seq__43554,first__43555,seq__43554__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__43553,seq__43554,first__43555,seq__43554__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__43553,seq__43554,first__43555,seq__43554__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/Eric/Workspace/looperscript/resources/public/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2997),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2997),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/Eric/Workspace/looperscript/resources/public/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2998),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2998),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
});})(sig,restarg,vec__43553,seq__43554,first__43555,seq__43554__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__43553,seq__43554,first__43555,seq__43554__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),params,(function (){var x__28798__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__28798__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}
});})(sig,restarg,vec__43553,seq__43554,first__43555,seq__43554__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())))):null),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

var ret__29145__auto___43559 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__43557__auto__","len__43557__auto__",1306887650,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__43558__auto__","i__43558__auto__",-1225604844,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__43558__auto__","i__43558__auto__",-1225604844,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__43557__auto__","len__43557__auto__",1306887650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__28798__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__43558__auto__","i__43558__auto__",-1225604844,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__43558__auto__","i__43558__auto__",-1225604844,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.copy_arguments.cljs$lang$macro = true;

cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__43562,emit_var_QMARK_){
var vec__43563 = p__43562;
var vec__43566 = cljs.core.nth.call(null,vec__43563,(0),null);
var seq__43567 = cljs.core.seq.call(null,vec__43566);
var first__43568 = cljs.core.first.call(null,seq__43567);
var seq__43567__$1 = cljs.core.next.call(null,seq__43567);
var arglist = first__43568;
var body = seq__43567__$1;
var method = vec__43566;
var fdecl = vec__43563;
var dest_args = ((function (vec__43563,vec__43566,seq__43567,first__43568,seq__43567__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__43563,vec__43566,seq__43567,first__43568,seq__43567__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});})(vec__43563,vec__43566,seq__43567,first__43568,seq__43567__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__43563,vec__43566,seq__43567,first__43568,seq__43567__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__28798__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__43560__auto__","args__43560__auto__",-1400993332,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__43560__auto__","args__43560__auto__",-1400993332,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__43561__auto__","argseq__43561__auto__",2090181674,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__28798__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__43560__auto__","args__43560__auto__",-1400993332,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/Eric/Workspace/looperscript/resources/public/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3045),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3045),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__43560__auto__","args__43560__auto__",-1400993332,null)),(function (){var x__28798__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__43561__auto__","argseq__43561__auto__",2090181674,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__28798__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-get","cljs.core$macros/unchecked-get",-1185166893,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28798__auto__ = cljs.core.symbol.call(null,["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__43577){
var vec__43578 = p__43577;
var seq__43579 = cljs.core.seq.call(null,vec__43578);
var first__43580 = cljs.core.first.call(null,seq__43579);
var seq__43579__$1 = cljs.core.next.call(null,seq__43579);
var sig = first__43580;
var body = seq__43579__$1;
var method = vec__43578;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.symbol.call(null,["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__43569_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__43569_SHARP_);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts){
return (function (p1__43570_SHARP_){
return fixed_arity.call(null,rname,p1__43570_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym,param_counts))
,sigs),(function (){var x__28798__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__43571__auto__","args-arr__43571__auto__",-1944712716,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__43571__auto__","args-arr__43571__auto__",-1944712716,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__43572__auto__","argseq__43572__auto__",-604380143,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/Eric/Workspace/looperscript/resources/public/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3106),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,59),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,3106),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,79),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args-arr__43571__auto__","args-arr__43571__auto__",-1944712716,null)),(function (){var x__28798__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__43572__auto__","argseq__43572__auto__",-604380143,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__28798__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
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
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__28798__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__28798__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__28798__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__28798__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto____$1);
})(),x__28798__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__43581__i = 0, G__43581__a = new Array(arguments.length -  3);
while (G__43581__i < G__43581__a.length) {G__43581__a[G__43581__i] = arguments[G__43581__i + 3]; ++G__43581__i;}
  fdecl = new cljs.core.IndexedSeq(G__43581__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__43582){
var _AMPERSAND_form = cljs.core.first(arglist__43582);
arglist__43582 = cljs.core.next(arglist__43582);
var _AMPERSAND_env = cljs.core.first(arglist__43582);
arglist__43582 = cljs.core.next(arglist__43582);
var name = cljs.core.first(arglist__43582);
var fdecl = cljs.core.rest(arglist__43582);
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
var args__29112__auto__ = [];
var len__29105__auto___43588 = arguments.length;
var i__29106__auto___43589 = (0);
while(true){
if((i__29106__auto___43589 < len__29105__auto___43588)){
args__29112__auto__.push((arguments[i__29106__auto___43589]));

var G__43590 = (i__29106__auto___43589 + (1));
i__29106__auto___43589 = G__43590;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((3) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29113__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__28798__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__43591 = cljs.core.cons.call(null,f,p);
var G__43592 = cljs.core.next.call(null,args__$1);
p = G__43591;
args__$1 = G__43592;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__43593 = cljs.core.cons.call(null,f,p);
var G__43594 = cljs.core.next.call(null,args__$1);
p = G__43593;
args__$1 = G__43594;
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
var G__43595 = cljs.core.next.call(null,fd);
fd = G__43595;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__43596 = cljs.core.next.call(null,fd);
fd = G__43596;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__28798__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
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
var G__43597 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__43598 = cljs.core.next.call(null,ds);
acc = G__43597;
ds = G__43598;
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
var G__43599 = cljs.core.next.call(null,p);
var G__43600 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__43599;
d = G__43600;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__43583__auto__","ret__43583__auto__",1240442808,null)),(function (){var x__28798__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__28798__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__43583__auto__","ret__43583__auto__",1240442808,null)))));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq43584){
var G__43585 = cljs.core.first.call(null,seq43584);
var seq43584__$1 = cljs.core.next.call(null,seq43584);
var G__43586 = cljs.core.first.call(null,seq43584__$1);
var seq43584__$2 = cljs.core.next.call(null,seq43584__$1);
var G__43587 = cljs.core.first.call(null,seq43584__$2);
var seq43584__$3 = cljs.core.next.call(null,seq43584__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__43585,G__43586,G__43587,seq43584__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
var ret__29145__auto___43605 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if((cljs.core.seq_QMARK_.call(null,quoted_sym)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,quoted_sym)))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second.call(null,quoted_sym);
var env = _AMPERSAND_env;
var vec__43601 = (function (){try{var var$ = cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.call(null,var$)], null);
}catch (e43604){var e = e43604;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.call(null,env,sym),null], null);
}})();
var var$ = cljs.core.nth.call(null,vec__43601,(0),null);
var meta = cljs.core.nth.call(null,vec__43601,(1),null);
var resolved = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__28798__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null)),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__28798__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__28798__auto__ = resolved;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})(),(function (){var x__28798__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28798__auto__);
})())));
});
cljs.core$macros.resolve.cljs$lang$macro = true;


//# sourceMappingURL=core$macros.js.map?rel=1510190995271
