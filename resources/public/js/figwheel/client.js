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
}catch (e38450){if((e38450 instanceof Error)){
var e = e38450;
return "Error: Unable to stringify";
} else {
throw e38450;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38453 = arguments.length;
switch (G__38453) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38451_SHARP_){
if(typeof p1__38451_SHARP_ === 'string'){
return p1__38451_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38451_SHARP_);
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
var len__29105__auto___38456 = arguments.length;
var i__29106__auto___38457 = (0);
while(true){
if((i__29106__auto___38457 < len__29105__auto___38456)){
args__29112__auto__.push((arguments[i__29106__auto___38457]));

var G__38458 = (i__29106__auto___38457 + (1));
i__29106__auto___38457 = G__38458;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38455){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38455));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29112__auto__ = [];
var len__29105__auto___38460 = arguments.length;
var i__29106__auto___38461 = (0);
while(true){
if((i__29106__auto___38461 < len__29105__auto___38460)){
args__29112__auto__.push((arguments[i__29106__auto___38461]));

var G__38462 = (i__29106__auto___38461 + (1));
i__29106__auto___38461 = G__38462;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38459){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38459));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38463){
var map__38464 = p__38463;
var map__38464__$1 = ((((!((map__38464 == null)))?((((map__38464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38464):map__38464);
var message = cljs.core.get.call(null,map__38464__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38464__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33612__auto___38543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___38543,ch){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___38543,ch){
return (function (state_38515){
var state_val_38516 = (state_38515[(1)]);
if((state_val_38516 === (7))){
var inst_38511 = (state_38515[(2)]);
var state_38515__$1 = state_38515;
var statearr_38517_38544 = state_38515__$1;
(statearr_38517_38544[(2)] = inst_38511);

(statearr_38517_38544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38516 === (1))){
var state_38515__$1 = state_38515;
var statearr_38518_38545 = state_38515__$1;
(statearr_38518_38545[(2)] = null);

(statearr_38518_38545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38516 === (4))){
var inst_38468 = (state_38515[(7)]);
var inst_38468__$1 = (state_38515[(2)]);
var state_38515__$1 = (function (){var statearr_38519 = state_38515;
(statearr_38519[(7)] = inst_38468__$1);

return statearr_38519;
})();
if(cljs.core.truth_(inst_38468__$1)){
var statearr_38520_38546 = state_38515__$1;
(statearr_38520_38546[(1)] = (5));

} else {
var statearr_38521_38547 = state_38515__$1;
(statearr_38521_38547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38516 === (15))){
var inst_38475 = (state_38515[(8)]);
var inst_38490 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38475);
var inst_38491 = cljs.core.first.call(null,inst_38490);
var inst_38492 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38491);
var inst_38493 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38492)].join('');
var inst_38494 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38493);
var state_38515__$1 = state_38515;
var statearr_38522_38548 = state_38515__$1;
(statearr_38522_38548[(2)] = inst_38494);

(statearr_38522_38548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38516 === (13))){
var inst_38499 = (state_38515[(2)]);
var state_38515__$1 = state_38515;
var statearr_38523_38549 = state_38515__$1;
(statearr_38523_38549[(2)] = inst_38499);

(statearr_38523_38549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38516 === (6))){
var state_38515__$1 = state_38515;
var statearr_38524_38550 = state_38515__$1;
(statearr_38524_38550[(2)] = null);

(statearr_38524_38550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38516 === (17))){
var inst_38497 = (state_38515[(2)]);
var state_38515__$1 = state_38515;
var statearr_38525_38551 = state_38515__$1;
(statearr_38525_38551[(2)] = inst_38497);

(statearr_38525_38551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38516 === (3))){
var inst_38513 = (state_38515[(2)]);
var state_38515__$1 = state_38515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38515__$1,inst_38513);
} else {
if((state_val_38516 === (12))){
var inst_38474 = (state_38515[(9)]);
var inst_38488 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38474,opts);
var state_38515__$1 = state_38515;
if(cljs.core.truth_(inst_38488)){
var statearr_38526_38552 = state_38515__$1;
(statearr_38526_38552[(1)] = (15));

} else {
var statearr_38527_38553 = state_38515__$1;
(statearr_38527_38553[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38516 === (2))){
var state_38515__$1 = state_38515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38515__$1,(4),ch);
} else {
if((state_val_38516 === (11))){
var inst_38475 = (state_38515[(8)]);
var inst_38480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38481 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38475);
var inst_38482 = cljs.core.async.timeout.call(null,(1000));
var inst_38483 = [inst_38481,inst_38482];
var inst_38484 = (new cljs.core.PersistentVector(null,2,(5),inst_38480,inst_38483,null));
var state_38515__$1 = state_38515;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38515__$1,(14),inst_38484);
} else {
if((state_val_38516 === (9))){
var inst_38475 = (state_38515[(8)]);
var inst_38501 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38502 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38475);
var inst_38503 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38502);
var inst_38504 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38503)].join('');
var inst_38505 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38504);
var state_38515__$1 = (function (){var statearr_38528 = state_38515;
(statearr_38528[(10)] = inst_38501);

return statearr_38528;
})();
var statearr_38529_38554 = state_38515__$1;
(statearr_38529_38554[(2)] = inst_38505);

(statearr_38529_38554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38516 === (5))){
var inst_38468 = (state_38515[(7)]);
var inst_38470 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38471 = (new cljs.core.PersistentArrayMap(null,2,inst_38470,null));
var inst_38472 = (new cljs.core.PersistentHashSet(null,inst_38471,null));
var inst_38473 = figwheel.client.focus_msgs.call(null,inst_38472,inst_38468);
var inst_38474 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38473);
var inst_38475 = cljs.core.first.call(null,inst_38473);
var inst_38476 = figwheel.client.autoload_QMARK_.call(null);
var state_38515__$1 = (function (){var statearr_38530 = state_38515;
(statearr_38530[(9)] = inst_38474);

(statearr_38530[(8)] = inst_38475);

return statearr_38530;
})();
if(cljs.core.truth_(inst_38476)){
var statearr_38531_38555 = state_38515__$1;
(statearr_38531_38555[(1)] = (8));

} else {
var statearr_38532_38556 = state_38515__$1;
(statearr_38532_38556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38516 === (14))){
var inst_38486 = (state_38515[(2)]);
var state_38515__$1 = state_38515;
var statearr_38533_38557 = state_38515__$1;
(statearr_38533_38557[(2)] = inst_38486);

(statearr_38533_38557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38516 === (16))){
var state_38515__$1 = state_38515;
var statearr_38534_38558 = state_38515__$1;
(statearr_38534_38558[(2)] = null);

(statearr_38534_38558[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38516 === (10))){
var inst_38507 = (state_38515[(2)]);
var state_38515__$1 = (function (){var statearr_38535 = state_38515;
(statearr_38535[(11)] = inst_38507);

return statearr_38535;
})();
var statearr_38536_38559 = state_38515__$1;
(statearr_38536_38559[(2)] = null);

(statearr_38536_38559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38516 === (8))){
var inst_38474 = (state_38515[(9)]);
var inst_38478 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38474,opts);
var state_38515__$1 = state_38515;
if(cljs.core.truth_(inst_38478)){
var statearr_38537_38560 = state_38515__$1;
(statearr_38537_38560[(1)] = (11));

} else {
var statearr_38538_38561 = state_38515__$1;
(statearr_38538_38561[(1)] = (12));

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
});})(c__33612__auto___38543,ch))
;
return ((function (switch__33524__auto__,c__33612__auto___38543,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33525__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33525__auto____0 = (function (){
var statearr_38539 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38539[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33525__auto__);

(statearr_38539[(1)] = (1));

return statearr_38539;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33525__auto____1 = (function (state_38515){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_38515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e38540){if((e38540 instanceof Object)){
var ex__33528__auto__ = e38540;
var statearr_38541_38562 = state_38515;
(statearr_38541_38562[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38563 = state_38515;
state_38515 = G__38563;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33525__auto__ = function(state_38515){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33525__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33525__auto____1.call(this,state_38515);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33525__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33525__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___38543,ch))
})();
var state__33614__auto__ = (function (){var statearr_38542 = f__33613__auto__.call(null);
(statearr_38542[(6)] = c__33612__auto___38543);

return statearr_38542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___38543,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38564_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38564_SHARP_));
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
var base_path_38566 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38566){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38565){if((e38565 instanceof Error)){
var e = e38565;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38566], null));
} else {
var e = e38565;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38566))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38567){
var map__38568 = p__38567;
var map__38568__$1 = ((((!((map__38568 == null)))?((((map__38568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38568):map__38568);
var opts = map__38568__$1;
var build_id = cljs.core.get.call(null,map__38568__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38568,map__38568__$1,opts,build_id){
return (function (p__38570){
var vec__38571 = p__38570;
var seq__38572 = cljs.core.seq.call(null,vec__38571);
var first__38573 = cljs.core.first.call(null,seq__38572);
var seq__38572__$1 = cljs.core.next.call(null,seq__38572);
var map__38574 = first__38573;
var map__38574__$1 = ((((!((map__38574 == null)))?((((map__38574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38574):map__38574);
var msg = map__38574__$1;
var msg_name = cljs.core.get.call(null,map__38574__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38572__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38571,seq__38572,first__38573,seq__38572__$1,map__38574,map__38574__$1,msg,msg_name,_,map__38568,map__38568__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38571,seq__38572,first__38573,seq__38572__$1,map__38574,map__38574__$1,msg,msg_name,_,map__38568,map__38568__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38568,map__38568__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38576){
var vec__38577 = p__38576;
var seq__38578 = cljs.core.seq.call(null,vec__38577);
var first__38579 = cljs.core.first.call(null,seq__38578);
var seq__38578__$1 = cljs.core.next.call(null,seq__38578);
var map__38580 = first__38579;
var map__38580__$1 = ((((!((map__38580 == null)))?((((map__38580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38580):map__38580);
var msg = map__38580__$1;
var msg_name = cljs.core.get.call(null,map__38580__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38578__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38582){
var map__38583 = p__38582;
var map__38583__$1 = ((((!((map__38583 == null)))?((((map__38583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38583):map__38583);
var on_compile_warning = cljs.core.get.call(null,map__38583__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38583__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38583,map__38583__$1,on_compile_warning,on_compile_fail){
return (function (p__38585){
var vec__38586 = p__38585;
var seq__38587 = cljs.core.seq.call(null,vec__38586);
var first__38588 = cljs.core.first.call(null,seq__38587);
var seq__38587__$1 = cljs.core.next.call(null,seq__38587);
var map__38589 = first__38588;
var map__38589__$1 = ((((!((map__38589 == null)))?((((map__38589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38589):map__38589);
var msg = map__38589__$1;
var msg_name = cljs.core.get.call(null,map__38589__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38587__$1;
var pred__38591 = cljs.core._EQ_;
var expr__38592 = msg_name;
if(cljs.core.truth_(pred__38591.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38592))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38591.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38592))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38583,map__38583__$1,on_compile_warning,on_compile_fail))
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
var c__33612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto__,msg_hist,msg_names,msg){
return (function (state_38681){
var state_val_38682 = (state_38681[(1)]);
if((state_val_38682 === (7))){
var inst_38601 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
if(cljs.core.truth_(inst_38601)){
var statearr_38683_38730 = state_38681__$1;
(statearr_38683_38730[(1)] = (8));

} else {
var statearr_38684_38731 = state_38681__$1;
(statearr_38684_38731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (20))){
var inst_38675 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
var statearr_38685_38732 = state_38681__$1;
(statearr_38685_38732[(2)] = inst_38675);

(statearr_38685_38732[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (27))){
var inst_38671 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
var statearr_38686_38733 = state_38681__$1;
(statearr_38686_38733[(2)] = inst_38671);

(statearr_38686_38733[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (1))){
var inst_38594 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38681__$1 = state_38681;
if(cljs.core.truth_(inst_38594)){
var statearr_38687_38734 = state_38681__$1;
(statearr_38687_38734[(1)] = (2));

} else {
var statearr_38688_38735 = state_38681__$1;
(statearr_38688_38735[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (24))){
var inst_38673 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
var statearr_38689_38736 = state_38681__$1;
(statearr_38689_38736[(2)] = inst_38673);

(statearr_38689_38736[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (4))){
var inst_38679 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38681__$1,inst_38679);
} else {
if((state_val_38682 === (15))){
var inst_38677 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
var statearr_38690_38737 = state_38681__$1;
(statearr_38690_38737[(2)] = inst_38677);

(statearr_38690_38737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (21))){
var inst_38630 = (state_38681[(2)]);
var inst_38631 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38632 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38631);
var state_38681__$1 = (function (){var statearr_38691 = state_38681;
(statearr_38691[(7)] = inst_38630);

return statearr_38691;
})();
var statearr_38692_38738 = state_38681__$1;
(statearr_38692_38738[(2)] = inst_38632);

(statearr_38692_38738[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (31))){
var inst_38660 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38681__$1 = state_38681;
if(cljs.core.truth_(inst_38660)){
var statearr_38693_38739 = state_38681__$1;
(statearr_38693_38739[(1)] = (34));

} else {
var statearr_38694_38740 = state_38681__$1;
(statearr_38694_38740[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (32))){
var inst_38669 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
var statearr_38695_38741 = state_38681__$1;
(statearr_38695_38741[(2)] = inst_38669);

(statearr_38695_38741[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (33))){
var inst_38656 = (state_38681[(2)]);
var inst_38657 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38658 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38657);
var state_38681__$1 = (function (){var statearr_38696 = state_38681;
(statearr_38696[(8)] = inst_38656);

return statearr_38696;
})();
var statearr_38697_38742 = state_38681__$1;
(statearr_38697_38742[(2)] = inst_38658);

(statearr_38697_38742[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (13))){
var inst_38615 = figwheel.client.heads_up.clear.call(null);
var state_38681__$1 = state_38681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38681__$1,(16),inst_38615);
} else {
if((state_val_38682 === (22))){
var inst_38636 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38637 = figwheel.client.heads_up.append_warning_message.call(null,inst_38636);
var state_38681__$1 = state_38681;
var statearr_38698_38743 = state_38681__$1;
(statearr_38698_38743[(2)] = inst_38637);

(statearr_38698_38743[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (36))){
var inst_38667 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
var statearr_38699_38744 = state_38681__$1;
(statearr_38699_38744[(2)] = inst_38667);

(statearr_38699_38744[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (29))){
var inst_38647 = (state_38681[(2)]);
var inst_38648 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38649 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38648);
var state_38681__$1 = (function (){var statearr_38700 = state_38681;
(statearr_38700[(9)] = inst_38647);

return statearr_38700;
})();
var statearr_38701_38745 = state_38681__$1;
(statearr_38701_38745[(2)] = inst_38649);

(statearr_38701_38745[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (6))){
var inst_38596 = (state_38681[(10)]);
var state_38681__$1 = state_38681;
var statearr_38702_38746 = state_38681__$1;
(statearr_38702_38746[(2)] = inst_38596);

(statearr_38702_38746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (28))){
var inst_38643 = (state_38681[(2)]);
var inst_38644 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38645 = figwheel.client.heads_up.display_warning.call(null,inst_38644);
var state_38681__$1 = (function (){var statearr_38703 = state_38681;
(statearr_38703[(11)] = inst_38643);

return statearr_38703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38681__$1,(29),inst_38645);
} else {
if((state_val_38682 === (25))){
var inst_38641 = figwheel.client.heads_up.clear.call(null);
var state_38681__$1 = state_38681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38681__$1,(28),inst_38641);
} else {
if((state_val_38682 === (34))){
var inst_38662 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38681__$1 = state_38681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38681__$1,(37),inst_38662);
} else {
if((state_val_38682 === (17))){
var inst_38621 = (state_38681[(2)]);
var inst_38622 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38623 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38622);
var state_38681__$1 = (function (){var statearr_38704 = state_38681;
(statearr_38704[(12)] = inst_38621);

return statearr_38704;
})();
var statearr_38705_38747 = state_38681__$1;
(statearr_38705_38747[(2)] = inst_38623);

(statearr_38705_38747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (3))){
var inst_38613 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38681__$1 = state_38681;
if(cljs.core.truth_(inst_38613)){
var statearr_38706_38748 = state_38681__$1;
(statearr_38706_38748[(1)] = (13));

} else {
var statearr_38707_38749 = state_38681__$1;
(statearr_38707_38749[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (12))){
var inst_38609 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
var statearr_38708_38750 = state_38681__$1;
(statearr_38708_38750[(2)] = inst_38609);

(statearr_38708_38750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (2))){
var inst_38596 = (state_38681[(10)]);
var inst_38596__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38681__$1 = (function (){var statearr_38709 = state_38681;
(statearr_38709[(10)] = inst_38596__$1);

return statearr_38709;
})();
if(cljs.core.truth_(inst_38596__$1)){
var statearr_38710_38751 = state_38681__$1;
(statearr_38710_38751[(1)] = (5));

} else {
var statearr_38711_38752 = state_38681__$1;
(statearr_38711_38752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (23))){
var inst_38639 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38681__$1 = state_38681;
if(cljs.core.truth_(inst_38639)){
var statearr_38712_38753 = state_38681__$1;
(statearr_38712_38753[(1)] = (25));

} else {
var statearr_38713_38754 = state_38681__$1;
(statearr_38713_38754[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (35))){
var state_38681__$1 = state_38681;
var statearr_38714_38755 = state_38681__$1;
(statearr_38714_38755[(2)] = null);

(statearr_38714_38755[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (19))){
var inst_38634 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38681__$1 = state_38681;
if(cljs.core.truth_(inst_38634)){
var statearr_38715_38756 = state_38681__$1;
(statearr_38715_38756[(1)] = (22));

} else {
var statearr_38716_38757 = state_38681__$1;
(statearr_38716_38757[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (11))){
var inst_38605 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
var statearr_38717_38758 = state_38681__$1;
(statearr_38717_38758[(2)] = inst_38605);

(statearr_38717_38758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (9))){
var inst_38607 = figwheel.client.heads_up.clear.call(null);
var state_38681__$1 = state_38681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38681__$1,(12),inst_38607);
} else {
if((state_val_38682 === (5))){
var inst_38598 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38681__$1 = state_38681;
var statearr_38718_38759 = state_38681__$1;
(statearr_38718_38759[(2)] = inst_38598);

(statearr_38718_38759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (14))){
var inst_38625 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38681__$1 = state_38681;
if(cljs.core.truth_(inst_38625)){
var statearr_38719_38760 = state_38681__$1;
(statearr_38719_38760[(1)] = (18));

} else {
var statearr_38720_38761 = state_38681__$1;
(statearr_38720_38761[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (26))){
var inst_38651 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38681__$1 = state_38681;
if(cljs.core.truth_(inst_38651)){
var statearr_38721_38762 = state_38681__$1;
(statearr_38721_38762[(1)] = (30));

} else {
var statearr_38722_38763 = state_38681__$1;
(statearr_38722_38763[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (16))){
var inst_38617 = (state_38681[(2)]);
var inst_38618 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38619 = figwheel.client.heads_up.display_exception.call(null,inst_38618);
var state_38681__$1 = (function (){var statearr_38723 = state_38681;
(statearr_38723[(13)] = inst_38617);

return statearr_38723;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38681__$1,(17),inst_38619);
} else {
if((state_val_38682 === (30))){
var inst_38653 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38654 = figwheel.client.heads_up.display_warning.call(null,inst_38653);
var state_38681__$1 = state_38681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38681__$1,(33),inst_38654);
} else {
if((state_val_38682 === (10))){
var inst_38611 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
var statearr_38724_38764 = state_38681__$1;
(statearr_38724_38764[(2)] = inst_38611);

(statearr_38724_38764[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (18))){
var inst_38627 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38628 = figwheel.client.heads_up.display_exception.call(null,inst_38627);
var state_38681__$1 = state_38681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38681__$1,(21),inst_38628);
} else {
if((state_val_38682 === (37))){
var inst_38664 = (state_38681[(2)]);
var state_38681__$1 = state_38681;
var statearr_38725_38765 = state_38681__$1;
(statearr_38725_38765[(2)] = inst_38664);

(statearr_38725_38765[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38682 === (8))){
var inst_38603 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38681__$1 = state_38681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38681__$1,(11),inst_38603);
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
});})(c__33612__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33524__auto__,c__33612__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33525__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33525__auto____0 = (function (){
var statearr_38726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38726[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33525__auto__);

(statearr_38726[(1)] = (1));

return statearr_38726;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33525__auto____1 = (function (state_38681){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_38681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e38727){if((e38727 instanceof Object)){
var ex__33528__auto__ = e38727;
var statearr_38728_38766 = state_38681;
(statearr_38728_38766[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38767 = state_38681;
state_38681 = G__38767;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33525__auto__ = function(state_38681){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33525__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33525__auto____1.call(this,state_38681);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33525__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33525__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto__,msg_hist,msg_names,msg))
})();
var state__33614__auto__ = (function (){var statearr_38729 = f__33613__auto__.call(null);
(statearr_38729[(6)] = c__33612__auto__);

return statearr_38729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto__,msg_hist,msg_names,msg))
);

return c__33612__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33612__auto___38796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto___38796,ch){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto___38796,ch){
return (function (state_38782){
var state_val_38783 = (state_38782[(1)]);
if((state_val_38783 === (1))){
var state_38782__$1 = state_38782;
var statearr_38784_38797 = state_38782__$1;
(statearr_38784_38797[(2)] = null);

(statearr_38784_38797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38783 === (2))){
var state_38782__$1 = state_38782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38782__$1,(4),ch);
} else {
if((state_val_38783 === (3))){
var inst_38780 = (state_38782[(2)]);
var state_38782__$1 = state_38782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38782__$1,inst_38780);
} else {
if((state_val_38783 === (4))){
var inst_38770 = (state_38782[(7)]);
var inst_38770__$1 = (state_38782[(2)]);
var state_38782__$1 = (function (){var statearr_38785 = state_38782;
(statearr_38785[(7)] = inst_38770__$1);

return statearr_38785;
})();
if(cljs.core.truth_(inst_38770__$1)){
var statearr_38786_38798 = state_38782__$1;
(statearr_38786_38798[(1)] = (5));

} else {
var statearr_38787_38799 = state_38782__$1;
(statearr_38787_38799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38783 === (5))){
var inst_38770 = (state_38782[(7)]);
var inst_38772 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38770);
var state_38782__$1 = state_38782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38782__$1,(8),inst_38772);
} else {
if((state_val_38783 === (6))){
var state_38782__$1 = state_38782;
var statearr_38788_38800 = state_38782__$1;
(statearr_38788_38800[(2)] = null);

(statearr_38788_38800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38783 === (7))){
var inst_38778 = (state_38782[(2)]);
var state_38782__$1 = state_38782;
var statearr_38789_38801 = state_38782__$1;
(statearr_38789_38801[(2)] = inst_38778);

(statearr_38789_38801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38783 === (8))){
var inst_38774 = (state_38782[(2)]);
var state_38782__$1 = (function (){var statearr_38790 = state_38782;
(statearr_38790[(8)] = inst_38774);

return statearr_38790;
})();
var statearr_38791_38802 = state_38782__$1;
(statearr_38791_38802[(2)] = null);

(statearr_38791_38802[(1)] = (2));


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
});})(c__33612__auto___38796,ch))
;
return ((function (switch__33524__auto__,c__33612__auto___38796,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33525__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33525__auto____0 = (function (){
var statearr_38792 = [null,null,null,null,null,null,null,null,null];
(statearr_38792[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33525__auto__);

(statearr_38792[(1)] = (1));

return statearr_38792;
});
var figwheel$client$heads_up_plugin_$_state_machine__33525__auto____1 = (function (state_38782){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_38782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e38793){if((e38793 instanceof Object)){
var ex__33528__auto__ = e38793;
var statearr_38794_38803 = state_38782;
(statearr_38794_38803[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38804 = state_38782;
state_38782 = G__38804;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33525__auto__ = function(state_38782){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33525__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33525__auto____1.call(this,state_38782);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33525__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33525__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto___38796,ch))
})();
var state__33614__auto__ = (function (){var statearr_38795 = f__33613__auto__.call(null);
(statearr_38795[(6)] = c__33612__auto___38796);

return statearr_38795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto___38796,ch))
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
var c__33612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto__){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto__){
return (function (state_38810){
var state_val_38811 = (state_38810[(1)]);
if((state_val_38811 === (1))){
var inst_38805 = cljs.core.async.timeout.call(null,(3000));
var state_38810__$1 = state_38810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38810__$1,(2),inst_38805);
} else {
if((state_val_38811 === (2))){
var inst_38807 = (state_38810[(2)]);
var inst_38808 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38810__$1 = (function (){var statearr_38812 = state_38810;
(statearr_38812[(7)] = inst_38807);

return statearr_38812;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38810__$1,inst_38808);
} else {
return null;
}
}
});})(c__33612__auto__))
;
return ((function (switch__33524__auto__,c__33612__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33525__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33525__auto____0 = (function (){
var statearr_38813 = [null,null,null,null,null,null,null,null];
(statearr_38813[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33525__auto__);

(statearr_38813[(1)] = (1));

return statearr_38813;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33525__auto____1 = (function (state_38810){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_38810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e38814){if((e38814 instanceof Object)){
var ex__33528__auto__ = e38814;
var statearr_38815_38817 = state_38810;
(statearr_38815_38817[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38818 = state_38810;
state_38810 = G__38818;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33525__auto__ = function(state_38810){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33525__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33525__auto____1.call(this,state_38810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33525__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33525__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto__))
})();
var state__33614__auto__ = (function (){var statearr_38816 = f__33613__auto__.call(null);
(statearr_38816[(6)] = c__33612__auto__);

return statearr_38816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto__))
);

return c__33612__auto__;
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
var c__33612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33612__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33613__auto__ = (function (){var switch__33524__auto__ = ((function (c__33612__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38825){
var state_val_38826 = (state_38825[(1)]);
if((state_val_38826 === (1))){
var inst_38819 = cljs.core.async.timeout.call(null,(2000));
var state_38825__$1 = state_38825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38825__$1,(2),inst_38819);
} else {
if((state_val_38826 === (2))){
var inst_38821 = (state_38825[(2)]);
var inst_38822 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38823 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38822);
var state_38825__$1 = (function (){var statearr_38827 = state_38825;
(statearr_38827[(7)] = inst_38821);

return statearr_38827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38825__$1,inst_38823);
} else {
return null;
}
}
});})(c__33612__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33524__auto__,c__33612__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33525__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33525__auto____0 = (function (){
var statearr_38828 = [null,null,null,null,null,null,null,null];
(statearr_38828[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33525__auto__);

(statearr_38828[(1)] = (1));

return statearr_38828;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33525__auto____1 = (function (state_38825){
while(true){
var ret_value__33526__auto__ = (function (){try{while(true){
var result__33527__auto__ = switch__33524__auto__.call(null,state_38825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33527__auto__;
}
break;
}
}catch (e38829){if((e38829 instanceof Object)){
var ex__33528__auto__ = e38829;
var statearr_38830_38832 = state_38825;
(statearr_38830_38832[(5)] = ex__33528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38833 = state_38825;
state_38825 = G__38833;
continue;
} else {
return ret_value__33526__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33525__auto__ = function(state_38825){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33525__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33525__auto____1.call(this,state_38825);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33525__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33525__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33525__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33525__auto__;
})()
;})(switch__33524__auto__,c__33612__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33614__auto__ = (function (){var statearr_38831 = f__33613__auto__.call(null);
(statearr_38831[(6)] = c__33612__auto__);

return statearr_38831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33614__auto__);
});})(c__33612__auto__,figwheel_version,temp__4657__auto__))
);

return c__33612__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38834){
var map__38835 = p__38834;
var map__38835__$1 = ((((!((map__38835 == null)))?((((map__38835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38835):map__38835);
var file = cljs.core.get.call(null,map__38835__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38835__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38835__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38837 = "";
var G__38837__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38837),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38837);
var G__38837__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38837__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38837__$1);
if(cljs.core.truth_((function (){var and__27924__auto__ = line;
if(cljs.core.truth_(and__27924__auto__)){
return column;
} else {
return and__27924__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38837__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38837__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38838){
var map__38839 = p__38838;
var map__38839__$1 = ((((!((map__38839 == null)))?((((map__38839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38839):map__38839);
var ed = map__38839__$1;
var formatted_exception = cljs.core.get.call(null,map__38839__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38839__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38839__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38841_38845 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38842_38846 = null;
var count__38843_38847 = (0);
var i__38844_38848 = (0);
while(true){
if((i__38844_38848 < count__38843_38847)){
var msg_38849 = cljs.core._nth.call(null,chunk__38842_38846,i__38844_38848);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38849);

var G__38850 = seq__38841_38845;
var G__38851 = chunk__38842_38846;
var G__38852 = count__38843_38847;
var G__38853 = (i__38844_38848 + (1));
seq__38841_38845 = G__38850;
chunk__38842_38846 = G__38851;
count__38843_38847 = G__38852;
i__38844_38848 = G__38853;
continue;
} else {
var temp__4657__auto___38854 = cljs.core.seq.call(null,seq__38841_38845);
if(temp__4657__auto___38854){
var seq__38841_38855__$1 = temp__4657__auto___38854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38841_38855__$1)){
var c__28775__auto___38856 = cljs.core.chunk_first.call(null,seq__38841_38855__$1);
var G__38857 = cljs.core.chunk_rest.call(null,seq__38841_38855__$1);
var G__38858 = c__28775__auto___38856;
var G__38859 = cljs.core.count.call(null,c__28775__auto___38856);
var G__38860 = (0);
seq__38841_38845 = G__38857;
chunk__38842_38846 = G__38858;
count__38843_38847 = G__38859;
i__38844_38848 = G__38860;
continue;
} else {
var msg_38861 = cljs.core.first.call(null,seq__38841_38855__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38861);

var G__38862 = cljs.core.next.call(null,seq__38841_38855__$1);
var G__38863 = null;
var G__38864 = (0);
var G__38865 = (0);
seq__38841_38845 = G__38862;
chunk__38842_38846 = G__38863;
count__38843_38847 = G__38864;
i__38844_38848 = G__38865;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38866){
var map__38867 = p__38866;
var map__38867__$1 = ((((!((map__38867 == null)))?((((map__38867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38867):map__38867);
var w = map__38867__$1;
var message = cljs.core.get.call(null,map__38867__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__38869 = cljs.core.seq.call(null,plugins);
var chunk__38870 = null;
var count__38871 = (0);
var i__38872 = (0);
while(true){
if((i__38872 < count__38871)){
var vec__38873 = cljs.core._nth.call(null,chunk__38870,i__38872);
var k = cljs.core.nth.call(null,vec__38873,(0),null);
var plugin = cljs.core.nth.call(null,vec__38873,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38879 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38869,chunk__38870,count__38871,i__38872,pl_38879,vec__38873,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38879.call(null,msg_hist);
});})(seq__38869,chunk__38870,count__38871,i__38872,pl_38879,vec__38873,k,plugin))
);
} else {
}

var G__38880 = seq__38869;
var G__38881 = chunk__38870;
var G__38882 = count__38871;
var G__38883 = (i__38872 + (1));
seq__38869 = G__38880;
chunk__38870 = G__38881;
count__38871 = G__38882;
i__38872 = G__38883;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38869);
if(temp__4657__auto__){
var seq__38869__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38869__$1)){
var c__28775__auto__ = cljs.core.chunk_first.call(null,seq__38869__$1);
var G__38884 = cljs.core.chunk_rest.call(null,seq__38869__$1);
var G__38885 = c__28775__auto__;
var G__38886 = cljs.core.count.call(null,c__28775__auto__);
var G__38887 = (0);
seq__38869 = G__38884;
chunk__38870 = G__38885;
count__38871 = G__38886;
i__38872 = G__38887;
continue;
} else {
var vec__38876 = cljs.core.first.call(null,seq__38869__$1);
var k = cljs.core.nth.call(null,vec__38876,(0),null);
var plugin = cljs.core.nth.call(null,vec__38876,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38888 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38869,chunk__38870,count__38871,i__38872,pl_38888,vec__38876,k,plugin,seq__38869__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38888.call(null,msg_hist);
});})(seq__38869,chunk__38870,count__38871,i__38872,pl_38888,vec__38876,k,plugin,seq__38869__$1,temp__4657__auto__))
);
} else {
}

var G__38889 = cljs.core.next.call(null,seq__38869__$1);
var G__38890 = null;
var G__38891 = (0);
var G__38892 = (0);
seq__38869 = G__38889;
chunk__38870 = G__38890;
count__38871 = G__38891;
i__38872 = G__38892;
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
var G__38894 = arguments.length;
switch (G__38894) {
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

var seq__38895_38900 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38896_38901 = null;
var count__38897_38902 = (0);
var i__38898_38903 = (0);
while(true){
if((i__38898_38903 < count__38897_38902)){
var msg_38904 = cljs.core._nth.call(null,chunk__38896_38901,i__38898_38903);
figwheel.client.socket.handle_incoming_message.call(null,msg_38904);

var G__38905 = seq__38895_38900;
var G__38906 = chunk__38896_38901;
var G__38907 = count__38897_38902;
var G__38908 = (i__38898_38903 + (1));
seq__38895_38900 = G__38905;
chunk__38896_38901 = G__38906;
count__38897_38902 = G__38907;
i__38898_38903 = G__38908;
continue;
} else {
var temp__4657__auto___38909 = cljs.core.seq.call(null,seq__38895_38900);
if(temp__4657__auto___38909){
var seq__38895_38910__$1 = temp__4657__auto___38909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38895_38910__$1)){
var c__28775__auto___38911 = cljs.core.chunk_first.call(null,seq__38895_38910__$1);
var G__38912 = cljs.core.chunk_rest.call(null,seq__38895_38910__$1);
var G__38913 = c__28775__auto___38911;
var G__38914 = cljs.core.count.call(null,c__28775__auto___38911);
var G__38915 = (0);
seq__38895_38900 = G__38912;
chunk__38896_38901 = G__38913;
count__38897_38902 = G__38914;
i__38898_38903 = G__38915;
continue;
} else {
var msg_38916 = cljs.core.first.call(null,seq__38895_38910__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38916);

var G__38917 = cljs.core.next.call(null,seq__38895_38910__$1);
var G__38918 = null;
var G__38919 = (0);
var G__38920 = (0);
seq__38895_38900 = G__38917;
chunk__38896_38901 = G__38918;
count__38897_38902 = G__38919;
i__38898_38903 = G__38920;
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
var len__29105__auto___38925 = arguments.length;
var i__29106__auto___38926 = (0);
while(true){
if((i__29106__auto___38926 < len__29105__auto___38925)){
args__29112__auto__.push((arguments[i__29106__auto___38926]));

var G__38927 = (i__29106__auto___38926 + (1));
i__29106__auto___38926 = G__38927;
continue;
} else {
}
break;
}

var argseq__29113__auto__ = ((((0) < args__29112__auto__.length))?(new cljs.core.IndexedSeq(args__29112__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29113__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38922){
var map__38923 = p__38922;
var map__38923__$1 = ((((!((map__38923 == null)))?((((map__38923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38923):map__38923);
var opts = map__38923__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38921){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38921));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38928){if((e38928 instanceof Error)){
var e = e38928;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38928;

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
return (function (p__38929){
var map__38930 = p__38929;
var map__38930__$1 = ((((!((map__38930 == null)))?((((map__38930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38930):map__38930);
var msg_name = cljs.core.get.call(null,map__38930__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1509845019822
