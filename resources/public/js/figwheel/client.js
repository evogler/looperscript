// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38449){if((e38449 instanceof Error)){
var e = e38449;
return "Error: Unable to stringify";
} else {
throw e38449;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38452 = arguments.length;
switch (G__38452) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38450_SHARP_){
if(typeof p1__38450_SHARP_ === 'string'){
return p1__38450_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38450_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29112__auto__ = [];
var len__29105__auto___38455 = arguments.length;
var i__29106__auto___38456 = (0);
while(true){
if((i__29106__auto___38456 < len__29105__auto___38455)){
args__29112__auto__.push((arguments[i__29106__auto___38456]));

var G__38457 = (i__29106__auto___38456 + (1));
i__29106__auto___38456 = G__38457;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38454){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38454));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29112__auto__ = [];
var len__29105__auto___38459 = arguments.length;
var i__29106__auto___38460 = (0);
while(true){
if((i__29106__auto___38460 < len__29105__auto___38459)){
args__29112__auto__.push((arguments[i__29106__auto___38460]));

var G__38461 = (i__29106__auto___38460 + (1));
i__29106__auto___38460 = G__38461;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38458){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38458));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38462){
var map__38463 = p__38462;
var map__38463__$1 = ((((!((map__38463 == null)))?((((map__38463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38463):map__38463);
var message = cljs.core.get.call(null,map__38463__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38463__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27936__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27936__auto__)){
return or__27936__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27924__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27924__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27924__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33611__auto___38542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___38542,ch){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___38542,ch){
return (function (state_38514){
var state_val_38515 = (state_38514[(1)]);
if((state_val_38515 === (7))){
var inst_38510 = (state_38514[(2)]);
var state_38514__$1 = state_38514;
var statearr_38516_38543 = state_38514__$1;
(statearr_38516_38543[(2)] = inst_38510);

(statearr_38516_38543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38515 === (1))){
var state_38514__$1 = state_38514;
var statearr_38517_38544 = state_38514__$1;
(statearr_38517_38544[(2)] = null);

(statearr_38517_38544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38515 === (4))){
var inst_38467 = (state_38514[(7)]);
var inst_38467__$1 = (state_38514[(2)]);
var state_38514__$1 = (function (){var statearr_38518 = state_38514;
(statearr_38518[(7)] = inst_38467__$1);

return statearr_38518;
})();
if(cljs.core.truth_(inst_38467__$1)){
var statearr_38519_38545 = state_38514__$1;
(statearr_38519_38545[(1)] = (5));

} else {
var statearr_38520_38546 = state_38514__$1;
(statearr_38520_38546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38515 === (15))){
var inst_38474 = (state_38514[(8)]);
var inst_38489 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38474);
var inst_38490 = cljs.core.first.call(null,inst_38489);
var inst_38491 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38490);
var inst_38492 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38491)].join('');
var inst_38493 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38492);
var state_38514__$1 = state_38514;
var statearr_38521_38547 = state_38514__$1;
(statearr_38521_38547[(2)] = inst_38493);

(statearr_38521_38547[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38515 === (13))){
var inst_38498 = (state_38514[(2)]);
var state_38514__$1 = state_38514;
var statearr_38522_38548 = state_38514__$1;
(statearr_38522_38548[(2)] = inst_38498);

(statearr_38522_38548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38515 === (6))){
var state_38514__$1 = state_38514;
var statearr_38523_38549 = state_38514__$1;
(statearr_38523_38549[(2)] = null);

(statearr_38523_38549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38515 === (17))){
var inst_38496 = (state_38514[(2)]);
var state_38514__$1 = state_38514;
var statearr_38524_38550 = state_38514__$1;
(statearr_38524_38550[(2)] = inst_38496);

(statearr_38524_38550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38515 === (3))){
var inst_38512 = (state_38514[(2)]);
var state_38514__$1 = state_38514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38514__$1,inst_38512);
} else {
if((state_val_38515 === (12))){
var inst_38473 = (state_38514[(9)]);
var inst_38487 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38473,opts);
var state_38514__$1 = state_38514;
if(cljs.core.truth_(inst_38487)){
var statearr_38525_38551 = state_38514__$1;
(statearr_38525_38551[(1)] = (15));

} else {
var statearr_38526_38552 = state_38514__$1;
(statearr_38526_38552[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38515 === (2))){
var state_38514__$1 = state_38514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38514__$1,(4),ch);
} else {
if((state_val_38515 === (11))){
var inst_38474 = (state_38514[(8)]);
var inst_38479 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38480 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38474);
var inst_38481 = cljs.core.async.timeout.call(null,(1000));
var inst_38482 = [inst_38480,inst_38481];
var inst_38483 = (new cljs.core.PersistentVector(null,2,(5),inst_38479,inst_38482,null));
var state_38514__$1 = state_38514;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38514__$1,(14),inst_38483);
} else {
if((state_val_38515 === (9))){
var inst_38474 = (state_38514[(8)]);
var inst_38500 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38501 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38474);
var inst_38502 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38501);
var inst_38503 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38502)].join('');
var inst_38504 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38503);
var state_38514__$1 = (function (){var statearr_38527 = state_38514;
(statearr_38527[(10)] = inst_38500);

return statearr_38527;
})();
var statearr_38528_38553 = state_38514__$1;
(statearr_38528_38553[(2)] = inst_38504);

(statearr_38528_38553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38515 === (5))){
var inst_38467 = (state_38514[(7)]);
var inst_38469 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38470 = (new cljs.core.PersistentArrayMap(null,2,inst_38469,null));
var inst_38471 = (new cljs.core.PersistentHashSet(null,inst_38470,null));
var inst_38472 = figwheel.client.focus_msgs.call(null,inst_38471,inst_38467);
var inst_38473 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38472);
var inst_38474 = cljs.core.first.call(null,inst_38472);
var inst_38475 = figwheel.client.autoload_QMARK_.call(null);
var state_38514__$1 = (function (){var statearr_38529 = state_38514;
(statearr_38529[(8)] = inst_38474);

(statearr_38529[(9)] = inst_38473);

return statearr_38529;
})();
if(cljs.core.truth_(inst_38475)){
var statearr_38530_38554 = state_38514__$1;
(statearr_38530_38554[(1)] = (8));

} else {
var statearr_38531_38555 = state_38514__$1;
(statearr_38531_38555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38515 === (14))){
var inst_38485 = (state_38514[(2)]);
var state_38514__$1 = state_38514;
var statearr_38532_38556 = state_38514__$1;
(statearr_38532_38556[(2)] = inst_38485);

(statearr_38532_38556[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38515 === (16))){
var state_38514__$1 = state_38514;
var statearr_38533_38557 = state_38514__$1;
(statearr_38533_38557[(2)] = null);

(statearr_38533_38557[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38515 === (10))){
var inst_38506 = (state_38514[(2)]);
var state_38514__$1 = (function (){var statearr_38534 = state_38514;
(statearr_38534[(11)] = inst_38506);

return statearr_38534;
})();
var statearr_38535_38558 = state_38514__$1;
(statearr_38535_38558[(2)] = null);

(statearr_38535_38558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38515 === (8))){
var inst_38473 = (state_38514[(9)]);
var inst_38477 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38473,opts);
var state_38514__$1 = state_38514;
if(cljs.core.truth_(inst_38477)){
var statearr_38536_38559 = state_38514__$1;
(statearr_38536_38559[(1)] = (11));

} else {
var statearr_38537_38560 = state_38514__$1;
(statearr_38537_38560[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33611__auto___38542,ch))
;
return ((function (switch__33523__auto__,c__33611__auto___38542,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33524__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33524__auto____0 = (function (){
var statearr_38538 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38538[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33524__auto__);

(statearr_38538[(1)] = (1));

return statearr_38538;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33524__auto____1 = (function (state_38514){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_38514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e38539){if((e38539 instanceof Object)){
var ex__33527__auto__ = e38539;
var statearr_38540_38561 = state_38514;
(statearr_38540_38561[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38562 = state_38514;
state_38514 = G__38562;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33524__auto__ = function(state_38514){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33524__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33524__auto____1.call(this,state_38514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33524__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33524__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___38542,ch))
})();
var state__33613__auto__ = (function (){var statearr_38541 = f__33612__auto__.call(null);
(statearr_38541[(6)] = c__33611__auto___38542);

return statearr_38541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___38542,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38563_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38563_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38565 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38565){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38564){if((e38564 instanceof Error)){
var e = e38564;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38565], null));
} else {
var e = e38564;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38565))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38566){
var map__38567 = p__38566;
var map__38567__$1 = ((((!((map__38567 == null)))?((((map__38567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38567):map__38567);
var opts = map__38567__$1;
var build_id = cljs.core.get.call(null,map__38567__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38567,map__38567__$1,opts,build_id){
return (function (p__38569){
var vec__38570 = p__38569;
var seq__38571 = cljs.core.seq.call(null,vec__38570);
var first__38572 = cljs.core.first.call(null,seq__38571);
var seq__38571__$1 = cljs.core.next.call(null,seq__38571);
var map__38573 = first__38572;
var map__38573__$1 = ((((!((map__38573 == null)))?((((map__38573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38573):map__38573);
var msg = map__38573__$1;
var msg_name = cljs.core.get.call(null,map__38573__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38571__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38570,seq__38571,first__38572,seq__38571__$1,map__38573,map__38573__$1,msg,msg_name,_,map__38567,map__38567__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38570,seq__38571,first__38572,seq__38571__$1,map__38573,map__38573__$1,msg,msg_name,_,map__38567,map__38567__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38567,map__38567__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38575){
var vec__38576 = p__38575;
var seq__38577 = cljs.core.seq.call(null,vec__38576);
var first__38578 = cljs.core.first.call(null,seq__38577);
var seq__38577__$1 = cljs.core.next.call(null,seq__38577);
var map__38579 = first__38578;
var map__38579__$1 = ((((!((map__38579 == null)))?((((map__38579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38579):map__38579);
var msg = map__38579__$1;
var msg_name = cljs.core.get.call(null,map__38579__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38577__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38581){
var map__38582 = p__38581;
var map__38582__$1 = ((((!((map__38582 == null)))?((((map__38582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38582):map__38582);
var on_compile_warning = cljs.core.get.call(null,map__38582__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38582__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38582,map__38582__$1,on_compile_warning,on_compile_fail){
return (function (p__38584){
var vec__38585 = p__38584;
var seq__38586 = cljs.core.seq.call(null,vec__38585);
var first__38587 = cljs.core.first.call(null,seq__38586);
var seq__38586__$1 = cljs.core.next.call(null,seq__38586);
var map__38588 = first__38587;
var map__38588__$1 = ((((!((map__38588 == null)))?((((map__38588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38588):map__38588);
var msg = map__38588__$1;
var msg_name = cljs.core.get.call(null,map__38588__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38586__$1;
var pred__38590 = cljs.core._EQ_;
var expr__38591 = msg_name;
if(cljs.core.truth_(pred__38590.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38591))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38590.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38591))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38582,map__38582__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto__,msg_hist,msg_names,msg){
return (function (state_38680){
var state_val_38681 = (state_38680[(1)]);
if((state_val_38681 === (7))){
var inst_38600 = (state_38680[(2)]);
var state_38680__$1 = state_38680;
if(cljs.core.truth_(inst_38600)){
var statearr_38682_38729 = state_38680__$1;
(statearr_38682_38729[(1)] = (8));

} else {
var statearr_38683_38730 = state_38680__$1;
(statearr_38683_38730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (20))){
var inst_38674 = (state_38680[(2)]);
var state_38680__$1 = state_38680;
var statearr_38684_38731 = state_38680__$1;
(statearr_38684_38731[(2)] = inst_38674);

(statearr_38684_38731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (27))){
var inst_38670 = (state_38680[(2)]);
var state_38680__$1 = state_38680;
var statearr_38685_38732 = state_38680__$1;
(statearr_38685_38732[(2)] = inst_38670);

(statearr_38685_38732[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (1))){
var inst_38593 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38680__$1 = state_38680;
if(cljs.core.truth_(inst_38593)){
var statearr_38686_38733 = state_38680__$1;
(statearr_38686_38733[(1)] = (2));

} else {
var statearr_38687_38734 = state_38680__$1;
(statearr_38687_38734[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (24))){
var inst_38672 = (state_38680[(2)]);
var state_38680__$1 = state_38680;
var statearr_38688_38735 = state_38680__$1;
(statearr_38688_38735[(2)] = inst_38672);

(statearr_38688_38735[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (4))){
var inst_38678 = (state_38680[(2)]);
var state_38680__$1 = state_38680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38680__$1,inst_38678);
} else {
if((state_val_38681 === (15))){
var inst_38676 = (state_38680[(2)]);
var state_38680__$1 = state_38680;
var statearr_38689_38736 = state_38680__$1;
(statearr_38689_38736[(2)] = inst_38676);

(statearr_38689_38736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (21))){
var inst_38629 = (state_38680[(2)]);
var inst_38630 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38631 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38630);
var state_38680__$1 = (function (){var statearr_38690 = state_38680;
(statearr_38690[(7)] = inst_38629);

return statearr_38690;
})();
var statearr_38691_38737 = state_38680__$1;
(statearr_38691_38737[(2)] = inst_38631);

(statearr_38691_38737[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (31))){
var inst_38659 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38680__$1 = state_38680;
if(cljs.core.truth_(inst_38659)){
var statearr_38692_38738 = state_38680__$1;
(statearr_38692_38738[(1)] = (34));

} else {
var statearr_38693_38739 = state_38680__$1;
(statearr_38693_38739[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (32))){
var inst_38668 = (state_38680[(2)]);
var state_38680__$1 = state_38680;
var statearr_38694_38740 = state_38680__$1;
(statearr_38694_38740[(2)] = inst_38668);

(statearr_38694_38740[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (33))){
var inst_38655 = (state_38680[(2)]);
var inst_38656 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38657 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38656);
var state_38680__$1 = (function (){var statearr_38695 = state_38680;
(statearr_38695[(8)] = inst_38655);

return statearr_38695;
})();
var statearr_38696_38741 = state_38680__$1;
(statearr_38696_38741[(2)] = inst_38657);

(statearr_38696_38741[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (13))){
var inst_38614 = figwheel.client.heads_up.clear.call(null);
var state_38680__$1 = state_38680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38680__$1,(16),inst_38614);
} else {
if((state_val_38681 === (22))){
var inst_38635 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38636 = figwheel.client.heads_up.append_warning_message.call(null,inst_38635);
var state_38680__$1 = state_38680;
var statearr_38697_38742 = state_38680__$1;
(statearr_38697_38742[(2)] = inst_38636);

(statearr_38697_38742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (36))){
var inst_38666 = (state_38680[(2)]);
var state_38680__$1 = state_38680;
var statearr_38698_38743 = state_38680__$1;
(statearr_38698_38743[(2)] = inst_38666);

(statearr_38698_38743[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (29))){
var inst_38646 = (state_38680[(2)]);
var inst_38647 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38648 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38647);
var state_38680__$1 = (function (){var statearr_38699 = state_38680;
(statearr_38699[(9)] = inst_38646);

return statearr_38699;
})();
var statearr_38700_38744 = state_38680__$1;
(statearr_38700_38744[(2)] = inst_38648);

(statearr_38700_38744[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (6))){
var inst_38595 = (state_38680[(10)]);
var state_38680__$1 = state_38680;
var statearr_38701_38745 = state_38680__$1;
(statearr_38701_38745[(2)] = inst_38595);

(statearr_38701_38745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (28))){
var inst_38642 = (state_38680[(2)]);
var inst_38643 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38644 = figwheel.client.heads_up.display_warning.call(null,inst_38643);
var state_38680__$1 = (function (){var statearr_38702 = state_38680;
(statearr_38702[(11)] = inst_38642);

return statearr_38702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38680__$1,(29),inst_38644);
} else {
if((state_val_38681 === (25))){
var inst_38640 = figwheel.client.heads_up.clear.call(null);
var state_38680__$1 = state_38680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38680__$1,(28),inst_38640);
} else {
if((state_val_38681 === (34))){
var inst_38661 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38680__$1 = state_38680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38680__$1,(37),inst_38661);
} else {
if((state_val_38681 === (17))){
var inst_38620 = (state_38680[(2)]);
var inst_38621 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38622 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38621);
var state_38680__$1 = (function (){var statearr_38703 = state_38680;
(statearr_38703[(12)] = inst_38620);

return statearr_38703;
})();
var statearr_38704_38746 = state_38680__$1;
(statearr_38704_38746[(2)] = inst_38622);

(statearr_38704_38746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (3))){
var inst_38612 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38680__$1 = state_38680;
if(cljs.core.truth_(inst_38612)){
var statearr_38705_38747 = state_38680__$1;
(statearr_38705_38747[(1)] = (13));

} else {
var statearr_38706_38748 = state_38680__$1;
(statearr_38706_38748[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (12))){
var inst_38608 = (state_38680[(2)]);
var state_38680__$1 = state_38680;
var statearr_38707_38749 = state_38680__$1;
(statearr_38707_38749[(2)] = inst_38608);

(statearr_38707_38749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (2))){
var inst_38595 = (state_38680[(10)]);
var inst_38595__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38680__$1 = (function (){var statearr_38708 = state_38680;
(statearr_38708[(10)] = inst_38595__$1);

return statearr_38708;
})();
if(cljs.core.truth_(inst_38595__$1)){
var statearr_38709_38750 = state_38680__$1;
(statearr_38709_38750[(1)] = (5));

} else {
var statearr_38710_38751 = state_38680__$1;
(statearr_38710_38751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (23))){
var inst_38638 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38680__$1 = state_38680;
if(cljs.core.truth_(inst_38638)){
var statearr_38711_38752 = state_38680__$1;
(statearr_38711_38752[(1)] = (25));

} else {
var statearr_38712_38753 = state_38680__$1;
(statearr_38712_38753[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (35))){
var state_38680__$1 = state_38680;
var statearr_38713_38754 = state_38680__$1;
(statearr_38713_38754[(2)] = null);

(statearr_38713_38754[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (19))){
var inst_38633 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38680__$1 = state_38680;
if(cljs.core.truth_(inst_38633)){
var statearr_38714_38755 = state_38680__$1;
(statearr_38714_38755[(1)] = (22));

} else {
var statearr_38715_38756 = state_38680__$1;
(statearr_38715_38756[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (11))){
var inst_38604 = (state_38680[(2)]);
var state_38680__$1 = state_38680;
var statearr_38716_38757 = state_38680__$1;
(statearr_38716_38757[(2)] = inst_38604);

(statearr_38716_38757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (9))){
var inst_38606 = figwheel.client.heads_up.clear.call(null);
var state_38680__$1 = state_38680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38680__$1,(12),inst_38606);
} else {
if((state_val_38681 === (5))){
var inst_38597 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38680__$1 = state_38680;
var statearr_38717_38758 = state_38680__$1;
(statearr_38717_38758[(2)] = inst_38597);

(statearr_38717_38758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (14))){
var inst_38624 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38680__$1 = state_38680;
if(cljs.core.truth_(inst_38624)){
var statearr_38718_38759 = state_38680__$1;
(statearr_38718_38759[(1)] = (18));

} else {
var statearr_38719_38760 = state_38680__$1;
(statearr_38719_38760[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (26))){
var inst_38650 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38680__$1 = state_38680;
if(cljs.core.truth_(inst_38650)){
var statearr_38720_38761 = state_38680__$1;
(statearr_38720_38761[(1)] = (30));

} else {
var statearr_38721_38762 = state_38680__$1;
(statearr_38721_38762[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (16))){
var inst_38616 = (state_38680[(2)]);
var inst_38617 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38618 = figwheel.client.heads_up.display_exception.call(null,inst_38617);
var state_38680__$1 = (function (){var statearr_38722 = state_38680;
(statearr_38722[(13)] = inst_38616);

return statearr_38722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38680__$1,(17),inst_38618);
} else {
if((state_val_38681 === (30))){
var inst_38652 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38653 = figwheel.client.heads_up.display_warning.call(null,inst_38652);
var state_38680__$1 = state_38680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38680__$1,(33),inst_38653);
} else {
if((state_val_38681 === (10))){
var inst_38610 = (state_38680[(2)]);
var state_38680__$1 = state_38680;
var statearr_38723_38763 = state_38680__$1;
(statearr_38723_38763[(2)] = inst_38610);

(statearr_38723_38763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (18))){
var inst_38626 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38627 = figwheel.client.heads_up.display_exception.call(null,inst_38626);
var state_38680__$1 = state_38680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38680__$1,(21),inst_38627);
} else {
if((state_val_38681 === (37))){
var inst_38663 = (state_38680[(2)]);
var state_38680__$1 = state_38680;
var statearr_38724_38764 = state_38680__$1;
(statearr_38724_38764[(2)] = inst_38663);

(statearr_38724_38764[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38681 === (8))){
var inst_38602 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38680__$1 = state_38680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38680__$1,(11),inst_38602);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33611__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33523__auto__,c__33611__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33524__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33524__auto____0 = (function (){
var statearr_38725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38725[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33524__auto__);

(statearr_38725[(1)] = (1));

return statearr_38725;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33524__auto____1 = (function (state_38680){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_38680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e38726){if((e38726 instanceof Object)){
var ex__33527__auto__ = e38726;
var statearr_38727_38765 = state_38680;
(statearr_38727_38765[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38766 = state_38680;
state_38680 = G__38766;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33524__auto__ = function(state_38680){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33524__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33524__auto____1.call(this,state_38680);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33524__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33524__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto__,msg_hist,msg_names,msg))
})();
var state__33613__auto__ = (function (){var statearr_38728 = f__33612__auto__.call(null);
(statearr_38728[(6)] = c__33611__auto__);

return statearr_38728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto__,msg_hist,msg_names,msg))
);

return c__33611__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33611__auto___38795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto___38795,ch){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto___38795,ch){
return (function (state_38781){
var state_val_38782 = (state_38781[(1)]);
if((state_val_38782 === (1))){
var state_38781__$1 = state_38781;
var statearr_38783_38796 = state_38781__$1;
(statearr_38783_38796[(2)] = null);

(statearr_38783_38796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38782 === (2))){
var state_38781__$1 = state_38781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38781__$1,(4),ch);
} else {
if((state_val_38782 === (3))){
var inst_38779 = (state_38781[(2)]);
var state_38781__$1 = state_38781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38781__$1,inst_38779);
} else {
if((state_val_38782 === (4))){
var inst_38769 = (state_38781[(7)]);
var inst_38769__$1 = (state_38781[(2)]);
var state_38781__$1 = (function (){var statearr_38784 = state_38781;
(statearr_38784[(7)] = inst_38769__$1);

return statearr_38784;
})();
if(cljs.core.truth_(inst_38769__$1)){
var statearr_38785_38797 = state_38781__$1;
(statearr_38785_38797[(1)] = (5));

} else {
var statearr_38786_38798 = state_38781__$1;
(statearr_38786_38798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38782 === (5))){
var inst_38769 = (state_38781[(7)]);
var inst_38771 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38769);
var state_38781__$1 = state_38781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38781__$1,(8),inst_38771);
} else {
if((state_val_38782 === (6))){
var state_38781__$1 = state_38781;
var statearr_38787_38799 = state_38781__$1;
(statearr_38787_38799[(2)] = null);

(statearr_38787_38799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38782 === (7))){
var inst_38777 = (state_38781[(2)]);
var state_38781__$1 = state_38781;
var statearr_38788_38800 = state_38781__$1;
(statearr_38788_38800[(2)] = inst_38777);

(statearr_38788_38800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38782 === (8))){
var inst_38773 = (state_38781[(2)]);
var state_38781__$1 = (function (){var statearr_38789 = state_38781;
(statearr_38789[(8)] = inst_38773);

return statearr_38789;
})();
var statearr_38790_38801 = state_38781__$1;
(statearr_38790_38801[(2)] = null);

(statearr_38790_38801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__33611__auto___38795,ch))
;
return ((function (switch__33523__auto__,c__33611__auto___38795,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33524__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33524__auto____0 = (function (){
var statearr_38791 = [null,null,null,null,null,null,null,null,null];
(statearr_38791[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33524__auto__);

(statearr_38791[(1)] = (1));

return statearr_38791;
});
var figwheel$client$heads_up_plugin_$_state_machine__33524__auto____1 = (function (state_38781){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_38781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e38792){if((e38792 instanceof Object)){
var ex__33527__auto__ = e38792;
var statearr_38793_38802 = state_38781;
(statearr_38793_38802[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38803 = state_38781;
state_38781 = G__38803;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33524__auto__ = function(state_38781){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33524__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33524__auto____1.call(this,state_38781);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33524__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33524__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto___38795,ch))
})();
var state__33613__auto__ = (function (){var statearr_38794 = f__33612__auto__.call(null);
(statearr_38794[(6)] = c__33611__auto___38795);

return statearr_38794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto___38795,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto__){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto__){
return (function (state_38809){
var state_val_38810 = (state_38809[(1)]);
if((state_val_38810 === (1))){
var inst_38804 = cljs.core.async.timeout.call(null,(3000));
var state_38809__$1 = state_38809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38809__$1,(2),inst_38804);
} else {
if((state_val_38810 === (2))){
var inst_38806 = (state_38809[(2)]);
var inst_38807 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38809__$1 = (function (){var statearr_38811 = state_38809;
(statearr_38811[(7)] = inst_38806);

return statearr_38811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38809__$1,inst_38807);
} else {
return null;
}
}
});})(c__33611__auto__))
;
return ((function (switch__33523__auto__,c__33611__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33524__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33524__auto____0 = (function (){
var statearr_38812 = [null,null,null,null,null,null,null,null];
(statearr_38812[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33524__auto__);

(statearr_38812[(1)] = (1));

return statearr_38812;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33524__auto____1 = (function (state_38809){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_38809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e38813){if((e38813 instanceof Object)){
var ex__33527__auto__ = e38813;
var statearr_38814_38816 = state_38809;
(statearr_38814_38816[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38817 = state_38809;
state_38809 = G__38817;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33524__auto__ = function(state_38809){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33524__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33524__auto____1.call(this,state_38809);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33524__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33524__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto__))
})();
var state__33613__auto__ = (function (){var statearr_38815 = f__33612__auto__.call(null);
(statearr_38815[(6)] = c__33611__auto__);

return statearr_38815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto__))
);

return c__33611__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33611__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33611__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33612__auto__ = (function (){var switch__33523__auto__ = ((function (c__33611__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38824){
var state_val_38825 = (state_38824[(1)]);
if((state_val_38825 === (1))){
var inst_38818 = cljs.core.async.timeout.call(null,(2000));
var state_38824__$1 = state_38824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38824__$1,(2),inst_38818);
} else {
if((state_val_38825 === (2))){
var inst_38820 = (state_38824[(2)]);
var inst_38821 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38822 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38821);
var state_38824__$1 = (function (){var statearr_38826 = state_38824;
(statearr_38826[(7)] = inst_38820);

return statearr_38826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38824__$1,inst_38822);
} else {
return null;
}
}
});})(c__33611__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33523__auto__,c__33611__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33524__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33524__auto____0 = (function (){
var statearr_38827 = [null,null,null,null,null,null,null,null];
(statearr_38827[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33524__auto__);

(statearr_38827[(1)] = (1));

return statearr_38827;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33524__auto____1 = (function (state_38824){
while(true){
var ret_value__33525__auto__ = (function (){try{while(true){
var result__33526__auto__ = switch__33523__auto__.call(null,state_38824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33526__auto__;
}
break;
}
}catch (e38828){if((e38828 instanceof Object)){
var ex__33527__auto__ = e38828;
var statearr_38829_38831 = state_38824;
(statearr_38829_38831[(5)] = ex__33527__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38832 = state_38824;
state_38824 = G__38832;
continue;
} else {
return ret_value__33525__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33524__auto__ = function(state_38824){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33524__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33524__auto____1.call(this,state_38824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33524__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33524__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33524__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33524__auto__;
})()
;})(switch__33523__auto__,c__33611__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33613__auto__ = (function (){var statearr_38830 = f__33612__auto__.call(null);
(statearr_38830[(6)] = c__33611__auto__);

return statearr_38830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33613__auto__);
});})(c__33611__auto__,figwheel_version,temp__4657__auto__))
);

return c__33611__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38833){
var map__38834 = p__38833;
var map__38834__$1 = ((((!((map__38834 == null)))?((((map__38834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38834):map__38834);
var file = cljs.core.get.call(null,map__38834__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38834__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38834__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38836 = "";
var G__38836__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38836),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38836);
var G__38836__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38836__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38836__$1);
if(cljs.core.truth_((function (){var and__27924__auto__ = line;
if(cljs.core.truth_(and__27924__auto__)){
return column;
} else {
return and__27924__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38836__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38836__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38837){
var map__38838 = p__38837;
var map__38838__$1 = ((((!((map__38838 == null)))?((((map__38838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38838):map__38838);
var ed = map__38838__$1;
var formatted_exception = cljs.core.get.call(null,map__38838__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38838__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38838__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38840_38844 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38841_38845 = null;
var count__38842_38846 = (0);
var i__38843_38847 = (0);
while(true){
if((i__38843_38847 < count__38842_38846)){
var msg_38848 = cljs.core._nth.call(null,chunk__38841_38845,i__38843_38847);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38848);

var G__38849 = seq__38840_38844;
var G__38850 = chunk__38841_38845;
var G__38851 = count__38842_38846;
var G__38852 = (i__38843_38847 + (1));
seq__38840_38844 = G__38849;
chunk__38841_38845 = G__38850;
count__38842_38846 = G__38851;
i__38843_38847 = G__38852;
continue;
} else {
var temp__4657__auto___38853 = cljs.core.seq.call(null,seq__38840_38844);
if(temp__4657__auto___38853){
var seq__38840_38854__$1 = temp__4657__auto___38853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38840_38854__$1)){
var c__28775__auto___38855 = cljs.core.chunk_first.call(null,seq__38840_38854__$1);
var G__38856 = cljs.core.chunk_rest.call(null,seq__38840_38854__$1);
var G__38857 = c__28775__auto___38855;
var G__38858 = cljs.core.count.call(null,c__28775__auto___38855);
var G__38859 = (0);
seq__38840_38844 = G__38856;
chunk__38841_38845 = G__38857;
count__38842_38846 = G__38858;
i__38843_38847 = G__38859;
continue;
} else {
var msg_38860 = cljs.core.first.call(null,seq__38840_38854__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38860);

var G__38861 = cljs.core.next.call(null,seq__38840_38854__$1);
var G__38862 = null;
var G__38863 = (0);
var G__38864 = (0);
seq__38840_38844 = G__38861;
chunk__38841_38845 = G__38862;
count__38842_38846 = G__38863;
i__38843_38847 = G__38864;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38865){
var map__38866 = p__38865;
var map__38866__$1 = ((((!((map__38866 == null)))?((((map__38866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38866):map__38866);
var w = map__38866__$1;
var message = cljs.core.get.call(null,map__38866__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27924__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27924__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27924__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38868 = cljs.core.seq.call(null,plugins);
var chunk__38869 = null;
var count__38870 = (0);
var i__38871 = (0);
while(true){
if((i__38871 < count__38870)){
var vec__38872 = cljs.core._nth.call(null,chunk__38869,i__38871);
var k = cljs.core.nth.call(null,vec__38872,(0),null);
var plugin = cljs.core.nth.call(null,vec__38872,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38878 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38868,chunk__38869,count__38870,i__38871,pl_38878,vec__38872,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38878.call(null,msg_hist);
});})(seq__38868,chunk__38869,count__38870,i__38871,pl_38878,vec__38872,k,plugin))
);
} else {
}

var G__38879 = seq__38868;
var G__38880 = chunk__38869;
var G__38881 = count__38870;
var G__38882 = (i__38871 + (1));
seq__38868 = G__38879;
chunk__38869 = G__38880;
count__38870 = G__38881;
i__38871 = G__38882;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38868);
if(temp__4657__auto__){
var seq__38868__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38868__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__38868__$1);
var G__38883 = cljs.core.chunk_rest.call(null,seq__38868__$1);
var G__38884 = c__28775__auto__;
var G__38885 = cljs.core.count.call(null,c__28775__auto__);
var G__38886 = (0);
seq__38868 = G__38883;
chunk__38869 = G__38884;
count__38870 = G__38885;
i__38871 = G__38886;
continue;
} else {
var vec__38875 = cljs.core.first.call(null,seq__38868__$1);
var k = cljs.core.nth.call(null,vec__38875,(0),null);
var plugin = cljs.core.nth.call(null,vec__38875,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38887 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38868,chunk__38869,count__38870,i__38871,pl_38887,vec__38875,k,plugin,seq__38868__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38887.call(null,msg_hist);
});})(seq__38868,chunk__38869,count__38870,i__38871,pl_38887,vec__38875,k,plugin,seq__38868__$1,temp__4657__auto__))
);
} else {
}

var G__38888 = cljs.core.next.call(null,seq__38868__$1);
var G__38889 = null;
var G__38890 = (0);
var G__38891 = (0);
seq__38868 = G__38888;
chunk__38869 = G__38889;
count__38870 = G__38890;
i__38871 = G__38891;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38893 = arguments.length;
switch (G__38893) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38894_38899 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38895_38900 = null;
var count__38896_38901 = (0);
var i__38897_38902 = (0);
while(true){
if((i__38897_38902 < count__38896_38901)){
var msg_38903 = cljs.core._nth.call(null,chunk__38895_38900,i__38897_38902);
figwheel.client.socket.handle_incoming_message.call(null,msg_38903);

var G__38904 = seq__38894_38899;
var G__38905 = chunk__38895_38900;
var G__38906 = count__38896_38901;
var G__38907 = (i__38897_38902 + (1));
seq__38894_38899 = G__38904;
chunk__38895_38900 = G__38905;
count__38896_38901 = G__38906;
i__38897_38902 = G__38907;
continue;
} else {
var temp__4657__auto___38908 = cljs.core.seq.call(null,seq__38894_38899);
if(temp__4657__auto___38908){
var seq__38894_38909__$1 = temp__4657__auto___38908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38894_38909__$1)){
var c__28775__auto___38910 = cljs.core.chunk_first.call(null,seq__38894_38909__$1);
var G__38911 = cljs.core.chunk_rest.call(null,seq__38894_38909__$1);
var G__38912 = c__28775__auto___38910;
var G__38913 = cljs.core.count.call(null,c__28775__auto___38910);
var G__38914 = (0);
seq__38894_38899 = G__38911;
chunk__38895_38900 = G__38912;
count__38896_38901 = G__38913;
i__38897_38902 = G__38914;
continue;
} else {
var msg_38915 = cljs.core.first.call(null,seq__38894_38909__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38915);

var G__38916 = cljs.core.next.call(null,seq__38894_38909__$1);
var G__38917 = null;
var G__38918 = (0);
var G__38919 = (0);
seq__38894_38899 = G__38916;
chunk__38895_38900 = G__38917;
count__38896_38901 = G__38918;
i__38897_38902 = G__38919;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29112__auto__ = [];
var len__29105__auto___38924 = arguments.length;
var i__29106__auto___38925 = (0);
while(true){
if((i__29106__auto___38925 < len__29105__auto___38924)){
args__29112__auto__.push((arguments[i__29106__auto___38925]));

var G__38926 = (i__29106__auto___38925 + (1));
i__29106__auto___38925 = G__38926;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38921){
var map__38922 = p__38921;
var map__38922__$1 = ((((!((map__38922 == null)))?((((map__38922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38922):map__38922);
var opts = map__38922__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38920){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38920));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38927){if((e38927 instanceof Error)){
var e = e38927;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38927;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38928){
var map__38929 = p__38928;
var map__38929__$1 = ((((!((map__38929 == null)))?((((map__38929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38929):map__38929);
var msg_name = cljs.core.get.call(null,map__38929__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510190762937
