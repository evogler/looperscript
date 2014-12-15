// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.logging');
goog.require('cljs.core');
goog.require('domina');
goog.require('domina');
/**
* @param {...*} var_args
*/
cljs.looperscript.logging.log = (function() { 
var log__delegate = function (args){var s = cljs.core.apply.call(null,cljs.core.str,cljs.core.conj.call(null,cljs.core.vec.call(null,args),"\n"));domina.append_BANG_.call(null,domina.by_id.call(null,"console"),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+"<p />"));
return console.log(s);
};
var log = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__42958){
var args = cljs.core.seq(arglist__42958);
return log__delegate(args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* @param {...*} var_args
*/
cljs.looperscript.logging.log__GT_ = (function() { 
var log__GT___delegate = function (args){cljs.core.apply.call(null,cljs.looperscript.logging.log,args);
return cljs.core.first.call(null,args);
};
var log__GT_ = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__GT___delegate.call(this,args);};
log__GT_.cljs$lang$maxFixedArity = 0;
log__GT_.cljs$lang$applyTo = (function (arglist__42959){
var args = cljs.core.seq(arglist__42959);
return log__GT___delegate(args);
});
log__GT_.cljs$core$IFn$_invoke$arity$variadic = log__GT___delegate;
return log__GT_;
})()
;
