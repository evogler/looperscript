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
}catch (e35461){if((e35461 instanceof Error)){
var e = e35461;
return "Error: Unable to stringify";
} else {
throw e35461;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35464 = arguments.length;
switch (G__35464) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__35462_SHARP_){
if(typeof p1__35462_SHARP_ === 'string'){
return p1__35462_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__35462_SHARP_);
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
var args__29165__auto__ = [];
var len__29158__auto___35467 = arguments.length;
var i__29159__auto___35468 = (0);
while(true){
if((i__29159__auto___35468 < len__29158__auto___35467)){
args__29165__auto__.push((arguments[i__29159__auto___35468]));

var G__35469 = (i__29159__auto___35468 + (1));
i__29159__auto___35468 = G__35469;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35466){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35466));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35471 = arguments.length;
var i__29159__auto___35472 = (0);
while(true){
if((i__29159__auto___35472 < len__29158__auto___35471)){
args__29165__auto__.push((arguments[i__29159__auto___35472]));

var G__35473 = (i__29159__auto___35472 + (1));
i__29159__auto___35472 = G__35473;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35470){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35470));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35474){
var map__35475 = p__35474;
var map__35475__$1 = ((((!((map__35475 == null)))?((((map__35475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35475):map__35475);
var message = cljs.core.get.call(null,map__35475__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35475__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27989__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27977__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27977__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27977__auto__;
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
var c__30588__auto___35554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___35554,ch){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___35554,ch){
return (function (state_35526){
var state_val_35527 = (state_35526[(1)]);
if((state_val_35527 === (7))){
var inst_35522 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
var statearr_35528_35555 = state_35526__$1;
(statearr_35528_35555[(2)] = inst_35522);

(statearr_35528_35555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (1))){
var state_35526__$1 = state_35526;
var statearr_35529_35556 = state_35526__$1;
(statearr_35529_35556[(2)] = null);

(statearr_35529_35556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (4))){
var inst_35479 = (state_35526[(7)]);
var inst_35479__$1 = (state_35526[(2)]);
var state_35526__$1 = (function (){var statearr_35530 = state_35526;
(statearr_35530[(7)] = inst_35479__$1);

return statearr_35530;
})();
if(cljs.core.truth_(inst_35479__$1)){
var statearr_35531_35557 = state_35526__$1;
(statearr_35531_35557[(1)] = (5));

} else {
var statearr_35532_35558 = state_35526__$1;
(statearr_35532_35558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (15))){
var inst_35486 = (state_35526[(8)]);
var inst_35501 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35486);
var inst_35502 = cljs.core.first.call(null,inst_35501);
var inst_35503 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35502);
var inst_35504 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35503)].join('');
var inst_35505 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35504);
var state_35526__$1 = state_35526;
var statearr_35533_35559 = state_35526__$1;
(statearr_35533_35559[(2)] = inst_35505);

(statearr_35533_35559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (13))){
var inst_35510 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
var statearr_35534_35560 = state_35526__$1;
(statearr_35534_35560[(2)] = inst_35510);

(statearr_35534_35560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (6))){
var state_35526__$1 = state_35526;
var statearr_35535_35561 = state_35526__$1;
(statearr_35535_35561[(2)] = null);

(statearr_35535_35561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (17))){
var inst_35508 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
var statearr_35536_35562 = state_35526__$1;
(statearr_35536_35562[(2)] = inst_35508);

(statearr_35536_35562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (3))){
var inst_35524 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35526__$1,inst_35524);
} else {
if((state_val_35527 === (12))){
var inst_35485 = (state_35526[(9)]);
var inst_35499 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35485,opts);
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35499)){
var statearr_35537_35563 = state_35526__$1;
(statearr_35537_35563[(1)] = (15));

} else {
var statearr_35538_35564 = state_35526__$1;
(statearr_35538_35564[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (2))){
var state_35526__$1 = state_35526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35526__$1,(4),ch);
} else {
if((state_val_35527 === (11))){
var inst_35486 = (state_35526[(8)]);
var inst_35491 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35492 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35486);
var inst_35493 = cljs.core.async.timeout.call(null,(1000));
var inst_35494 = [inst_35492,inst_35493];
var inst_35495 = (new cljs.core.PersistentVector(null,2,(5),inst_35491,inst_35494,null));
var state_35526__$1 = state_35526;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35526__$1,(14),inst_35495);
} else {
if((state_val_35527 === (9))){
var inst_35486 = (state_35526[(8)]);
var inst_35512 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35513 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35486);
var inst_35514 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35513);
var inst_35515 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35514)].join('');
var inst_35516 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35515);
var state_35526__$1 = (function (){var statearr_35539 = state_35526;
(statearr_35539[(10)] = inst_35512);

return statearr_35539;
})();
var statearr_35540_35565 = state_35526__$1;
(statearr_35540_35565[(2)] = inst_35516);

(statearr_35540_35565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (5))){
var inst_35479 = (state_35526[(7)]);
var inst_35481 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35482 = (new cljs.core.PersistentArrayMap(null,2,inst_35481,null));
var inst_35483 = (new cljs.core.PersistentHashSet(null,inst_35482,null));
var inst_35484 = figwheel.client.focus_msgs.call(null,inst_35483,inst_35479);
var inst_35485 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35484);
var inst_35486 = cljs.core.first.call(null,inst_35484);
var inst_35487 = figwheel.client.autoload_QMARK_.call(null);
var state_35526__$1 = (function (){var statearr_35541 = state_35526;
(statearr_35541[(8)] = inst_35486);

(statearr_35541[(9)] = inst_35485);

return statearr_35541;
})();
if(cljs.core.truth_(inst_35487)){
var statearr_35542_35566 = state_35526__$1;
(statearr_35542_35566[(1)] = (8));

} else {
var statearr_35543_35567 = state_35526__$1;
(statearr_35543_35567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (14))){
var inst_35497 = (state_35526[(2)]);
var state_35526__$1 = state_35526;
var statearr_35544_35568 = state_35526__$1;
(statearr_35544_35568[(2)] = inst_35497);

(statearr_35544_35568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (16))){
var state_35526__$1 = state_35526;
var statearr_35545_35569 = state_35526__$1;
(statearr_35545_35569[(2)] = null);

(statearr_35545_35569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (10))){
var inst_35518 = (state_35526[(2)]);
var state_35526__$1 = (function (){var statearr_35546 = state_35526;
(statearr_35546[(11)] = inst_35518);

return statearr_35546;
})();
var statearr_35547_35570 = state_35526__$1;
(statearr_35547_35570[(2)] = null);

(statearr_35547_35570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35527 === (8))){
var inst_35485 = (state_35526[(9)]);
var inst_35489 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35485,opts);
var state_35526__$1 = state_35526;
if(cljs.core.truth_(inst_35489)){
var statearr_35548_35571 = state_35526__$1;
(statearr_35548_35571[(1)] = (11));

} else {
var statearr_35549_35572 = state_35526__$1;
(statearr_35549_35572[(1)] = (12));

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
});})(c__30588__auto___35554,ch))
;
return ((function (switch__30500__auto__,c__30588__auto___35554,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30501__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30501__auto____0 = (function (){
var statearr_35550 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35550[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30501__auto__);

(statearr_35550[(1)] = (1));

return statearr_35550;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30501__auto____1 = (function (state_35526){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_35526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e35551){if((e35551 instanceof Object)){
var ex__30504__auto__ = e35551;
var statearr_35552_35573 = state_35526;
(statearr_35552_35573[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35574 = state_35526;
state_35526 = G__35574;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30501__auto__ = function(state_35526){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30501__auto____1.call(this,state_35526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30501__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30501__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___35554,ch))
})();
var state__30590__auto__ = (function (){var statearr_35553 = f__30589__auto__.call(null);
(statearr_35553[(6)] = c__30588__auto___35554);

return statearr_35553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___35554,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35575_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35575_SHARP_));
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
var base_path_35577 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35577){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35576){if((e35576 instanceof Error)){
var e = e35576;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35577], null));
} else {
var e = e35576;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35577))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35578){
var map__35579 = p__35578;
var map__35579__$1 = ((((!((map__35579 == null)))?((((map__35579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35579):map__35579);
var opts = map__35579__$1;
var build_id = cljs.core.get.call(null,map__35579__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35579,map__35579__$1,opts,build_id){
return (function (p__35581){
var vec__35582 = p__35581;
var seq__35583 = cljs.core.seq.call(null,vec__35582);
var first__35584 = cljs.core.first.call(null,seq__35583);
var seq__35583__$1 = cljs.core.next.call(null,seq__35583);
var map__35585 = first__35584;
var map__35585__$1 = ((((!((map__35585 == null)))?((((map__35585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35585):map__35585);
var msg = map__35585__$1;
var msg_name = cljs.core.get.call(null,map__35585__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35583__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35582,seq__35583,first__35584,seq__35583__$1,map__35585,map__35585__$1,msg,msg_name,_,map__35579,map__35579__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35582,seq__35583,first__35584,seq__35583__$1,map__35585,map__35585__$1,msg,msg_name,_,map__35579,map__35579__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35579,map__35579__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35587){
var vec__35588 = p__35587;
var seq__35589 = cljs.core.seq.call(null,vec__35588);
var first__35590 = cljs.core.first.call(null,seq__35589);
var seq__35589__$1 = cljs.core.next.call(null,seq__35589);
var map__35591 = first__35590;
var map__35591__$1 = ((((!((map__35591 == null)))?((((map__35591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35591):map__35591);
var msg = map__35591__$1;
var msg_name = cljs.core.get.call(null,map__35591__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35589__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35593){
var map__35594 = p__35593;
var map__35594__$1 = ((((!((map__35594 == null)))?((((map__35594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35594):map__35594);
var on_compile_warning = cljs.core.get.call(null,map__35594__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35594__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35594,map__35594__$1,on_compile_warning,on_compile_fail){
return (function (p__35596){
var vec__35597 = p__35596;
var seq__35598 = cljs.core.seq.call(null,vec__35597);
var first__35599 = cljs.core.first.call(null,seq__35598);
var seq__35598__$1 = cljs.core.next.call(null,seq__35598);
var map__35600 = first__35599;
var map__35600__$1 = ((((!((map__35600 == null)))?((((map__35600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35600):map__35600);
var msg = map__35600__$1;
var msg_name = cljs.core.get.call(null,map__35600__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35598__$1;
var pred__35602 = cljs.core._EQ_;
var expr__35603 = msg_name;
if(cljs.core.truth_(pred__35602.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35603))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35602.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35603))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35594,map__35594__$1,on_compile_warning,on_compile_fail))
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
var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__,msg_hist,msg_names,msg){
return (function (state_35692){
var state_val_35693 = (state_35692[(1)]);
if((state_val_35693 === (7))){
var inst_35612 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
if(cljs.core.truth_(inst_35612)){
var statearr_35694_35741 = state_35692__$1;
(statearr_35694_35741[(1)] = (8));

} else {
var statearr_35695_35742 = state_35692__$1;
(statearr_35695_35742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (20))){
var inst_35686 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35696_35743 = state_35692__$1;
(statearr_35696_35743[(2)] = inst_35686);

(statearr_35696_35743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (27))){
var inst_35682 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35697_35744 = state_35692__$1;
(statearr_35697_35744[(2)] = inst_35682);

(statearr_35697_35744[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (1))){
var inst_35605 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35692__$1 = state_35692;
if(cljs.core.truth_(inst_35605)){
var statearr_35698_35745 = state_35692__$1;
(statearr_35698_35745[(1)] = (2));

} else {
var statearr_35699_35746 = state_35692__$1;
(statearr_35699_35746[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (24))){
var inst_35684 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35700_35747 = state_35692__$1;
(statearr_35700_35747[(2)] = inst_35684);

(statearr_35700_35747[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (4))){
var inst_35690 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35692__$1,inst_35690);
} else {
if((state_val_35693 === (15))){
var inst_35688 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35701_35748 = state_35692__$1;
(statearr_35701_35748[(2)] = inst_35688);

(statearr_35701_35748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (21))){
var inst_35641 = (state_35692[(2)]);
var inst_35642 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35643 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35642);
var state_35692__$1 = (function (){var statearr_35702 = state_35692;
(statearr_35702[(7)] = inst_35641);

return statearr_35702;
})();
var statearr_35703_35749 = state_35692__$1;
(statearr_35703_35749[(2)] = inst_35643);

(statearr_35703_35749[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (31))){
var inst_35671 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35692__$1 = state_35692;
if(cljs.core.truth_(inst_35671)){
var statearr_35704_35750 = state_35692__$1;
(statearr_35704_35750[(1)] = (34));

} else {
var statearr_35705_35751 = state_35692__$1;
(statearr_35705_35751[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (32))){
var inst_35680 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35706_35752 = state_35692__$1;
(statearr_35706_35752[(2)] = inst_35680);

(statearr_35706_35752[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (33))){
var inst_35667 = (state_35692[(2)]);
var inst_35668 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35669 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35668);
var state_35692__$1 = (function (){var statearr_35707 = state_35692;
(statearr_35707[(8)] = inst_35667);

return statearr_35707;
})();
var statearr_35708_35753 = state_35692__$1;
(statearr_35708_35753[(2)] = inst_35669);

(statearr_35708_35753[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (13))){
var inst_35626 = figwheel.client.heads_up.clear.call(null);
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35692__$1,(16),inst_35626);
} else {
if((state_val_35693 === (22))){
var inst_35647 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35648 = figwheel.client.heads_up.append_warning_message.call(null,inst_35647);
var state_35692__$1 = state_35692;
var statearr_35709_35754 = state_35692__$1;
(statearr_35709_35754[(2)] = inst_35648);

(statearr_35709_35754[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (36))){
var inst_35678 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35710_35755 = state_35692__$1;
(statearr_35710_35755[(2)] = inst_35678);

(statearr_35710_35755[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (29))){
var inst_35658 = (state_35692[(2)]);
var inst_35659 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35660 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35659);
var state_35692__$1 = (function (){var statearr_35711 = state_35692;
(statearr_35711[(9)] = inst_35658);

return statearr_35711;
})();
var statearr_35712_35756 = state_35692__$1;
(statearr_35712_35756[(2)] = inst_35660);

(statearr_35712_35756[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (6))){
var inst_35607 = (state_35692[(10)]);
var state_35692__$1 = state_35692;
var statearr_35713_35757 = state_35692__$1;
(statearr_35713_35757[(2)] = inst_35607);

(statearr_35713_35757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (28))){
var inst_35654 = (state_35692[(2)]);
var inst_35655 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35656 = figwheel.client.heads_up.display_warning.call(null,inst_35655);
var state_35692__$1 = (function (){var statearr_35714 = state_35692;
(statearr_35714[(11)] = inst_35654);

return statearr_35714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35692__$1,(29),inst_35656);
} else {
if((state_val_35693 === (25))){
var inst_35652 = figwheel.client.heads_up.clear.call(null);
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35692__$1,(28),inst_35652);
} else {
if((state_val_35693 === (34))){
var inst_35673 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35692__$1,(37),inst_35673);
} else {
if((state_val_35693 === (17))){
var inst_35632 = (state_35692[(2)]);
var inst_35633 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35634 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35633);
var state_35692__$1 = (function (){var statearr_35715 = state_35692;
(statearr_35715[(12)] = inst_35632);

return statearr_35715;
})();
var statearr_35716_35758 = state_35692__$1;
(statearr_35716_35758[(2)] = inst_35634);

(statearr_35716_35758[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (3))){
var inst_35624 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35692__$1 = state_35692;
if(cljs.core.truth_(inst_35624)){
var statearr_35717_35759 = state_35692__$1;
(statearr_35717_35759[(1)] = (13));

} else {
var statearr_35718_35760 = state_35692__$1;
(statearr_35718_35760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (12))){
var inst_35620 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35719_35761 = state_35692__$1;
(statearr_35719_35761[(2)] = inst_35620);

(statearr_35719_35761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (2))){
var inst_35607 = (state_35692[(10)]);
var inst_35607__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35692__$1 = (function (){var statearr_35720 = state_35692;
(statearr_35720[(10)] = inst_35607__$1);

return statearr_35720;
})();
if(cljs.core.truth_(inst_35607__$1)){
var statearr_35721_35762 = state_35692__$1;
(statearr_35721_35762[(1)] = (5));

} else {
var statearr_35722_35763 = state_35692__$1;
(statearr_35722_35763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (23))){
var inst_35650 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35692__$1 = state_35692;
if(cljs.core.truth_(inst_35650)){
var statearr_35723_35764 = state_35692__$1;
(statearr_35723_35764[(1)] = (25));

} else {
var statearr_35724_35765 = state_35692__$1;
(statearr_35724_35765[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (35))){
var state_35692__$1 = state_35692;
var statearr_35725_35766 = state_35692__$1;
(statearr_35725_35766[(2)] = null);

(statearr_35725_35766[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (19))){
var inst_35645 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35692__$1 = state_35692;
if(cljs.core.truth_(inst_35645)){
var statearr_35726_35767 = state_35692__$1;
(statearr_35726_35767[(1)] = (22));

} else {
var statearr_35727_35768 = state_35692__$1;
(statearr_35727_35768[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (11))){
var inst_35616 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35728_35769 = state_35692__$1;
(statearr_35728_35769[(2)] = inst_35616);

(statearr_35728_35769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (9))){
var inst_35618 = figwheel.client.heads_up.clear.call(null);
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35692__$1,(12),inst_35618);
} else {
if((state_val_35693 === (5))){
var inst_35609 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35692__$1 = state_35692;
var statearr_35729_35770 = state_35692__$1;
(statearr_35729_35770[(2)] = inst_35609);

(statearr_35729_35770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (14))){
var inst_35636 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35692__$1 = state_35692;
if(cljs.core.truth_(inst_35636)){
var statearr_35730_35771 = state_35692__$1;
(statearr_35730_35771[(1)] = (18));

} else {
var statearr_35731_35772 = state_35692__$1;
(statearr_35731_35772[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (26))){
var inst_35662 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35692__$1 = state_35692;
if(cljs.core.truth_(inst_35662)){
var statearr_35732_35773 = state_35692__$1;
(statearr_35732_35773[(1)] = (30));

} else {
var statearr_35733_35774 = state_35692__$1;
(statearr_35733_35774[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (16))){
var inst_35628 = (state_35692[(2)]);
var inst_35629 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35630 = figwheel.client.heads_up.display_exception.call(null,inst_35629);
var state_35692__$1 = (function (){var statearr_35734 = state_35692;
(statearr_35734[(13)] = inst_35628);

return statearr_35734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35692__$1,(17),inst_35630);
} else {
if((state_val_35693 === (30))){
var inst_35664 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35665 = figwheel.client.heads_up.display_warning.call(null,inst_35664);
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35692__$1,(33),inst_35665);
} else {
if((state_val_35693 === (10))){
var inst_35622 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35735_35775 = state_35692__$1;
(statearr_35735_35775[(2)] = inst_35622);

(statearr_35735_35775[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (18))){
var inst_35638 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35639 = figwheel.client.heads_up.display_exception.call(null,inst_35638);
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35692__$1,(21),inst_35639);
} else {
if((state_val_35693 === (37))){
var inst_35675 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35736_35776 = state_35692__$1;
(statearr_35736_35776[(2)] = inst_35675);

(statearr_35736_35776[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (8))){
var inst_35614 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35692__$1,(11),inst_35614);
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
});})(c__30588__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30500__auto__,c__30588__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto____0 = (function (){
var statearr_35737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35737[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto__);

(statearr_35737[(1)] = (1));

return statearr_35737;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto____1 = (function (state_35692){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_35692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e35738){if((e35738 instanceof Object)){
var ex__30504__auto__ = e35738;
var statearr_35739_35777 = state_35692;
(statearr_35739_35777[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35778 = state_35692;
state_35692 = G__35778;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto__ = function(state_35692){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto____1.call(this,state_35692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__,msg_hist,msg_names,msg))
})();
var state__30590__auto__ = (function (){var statearr_35740 = f__30589__auto__.call(null);
(statearr_35740[(6)] = c__30588__auto__);

return statearr_35740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__,msg_hist,msg_names,msg))
);

return c__30588__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30588__auto___35807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___35807,ch){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___35807,ch){
return (function (state_35793){
var state_val_35794 = (state_35793[(1)]);
if((state_val_35794 === (1))){
var state_35793__$1 = state_35793;
var statearr_35795_35808 = state_35793__$1;
(statearr_35795_35808[(2)] = null);

(statearr_35795_35808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (2))){
var state_35793__$1 = state_35793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35793__$1,(4),ch);
} else {
if((state_val_35794 === (3))){
var inst_35791 = (state_35793[(2)]);
var state_35793__$1 = state_35793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35793__$1,inst_35791);
} else {
if((state_val_35794 === (4))){
var inst_35781 = (state_35793[(7)]);
var inst_35781__$1 = (state_35793[(2)]);
var state_35793__$1 = (function (){var statearr_35796 = state_35793;
(statearr_35796[(7)] = inst_35781__$1);

return statearr_35796;
})();
if(cljs.core.truth_(inst_35781__$1)){
var statearr_35797_35809 = state_35793__$1;
(statearr_35797_35809[(1)] = (5));

} else {
var statearr_35798_35810 = state_35793__$1;
(statearr_35798_35810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (5))){
var inst_35781 = (state_35793[(7)]);
var inst_35783 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35781);
var state_35793__$1 = state_35793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35793__$1,(8),inst_35783);
} else {
if((state_val_35794 === (6))){
var state_35793__$1 = state_35793;
var statearr_35799_35811 = state_35793__$1;
(statearr_35799_35811[(2)] = null);

(statearr_35799_35811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (7))){
var inst_35789 = (state_35793[(2)]);
var state_35793__$1 = state_35793;
var statearr_35800_35812 = state_35793__$1;
(statearr_35800_35812[(2)] = inst_35789);

(statearr_35800_35812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35794 === (8))){
var inst_35785 = (state_35793[(2)]);
var state_35793__$1 = (function (){var statearr_35801 = state_35793;
(statearr_35801[(8)] = inst_35785);

return statearr_35801;
})();
var statearr_35802_35813 = state_35793__$1;
(statearr_35802_35813[(2)] = null);

(statearr_35802_35813[(1)] = (2));


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
});})(c__30588__auto___35807,ch))
;
return ((function (switch__30500__auto__,c__30588__auto___35807,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30501__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30501__auto____0 = (function (){
var statearr_35803 = [null,null,null,null,null,null,null,null,null];
(statearr_35803[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30501__auto__);

(statearr_35803[(1)] = (1));

return statearr_35803;
});
var figwheel$client$heads_up_plugin_$_state_machine__30501__auto____1 = (function (state_35793){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_35793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e35804){if((e35804 instanceof Object)){
var ex__30504__auto__ = e35804;
var statearr_35805_35814 = state_35793;
(statearr_35805_35814[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35815 = state_35793;
state_35793 = G__35815;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30501__auto__ = function(state_35793){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30501__auto____1.call(this,state_35793);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30501__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30501__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___35807,ch))
})();
var state__30590__auto__ = (function (){var statearr_35806 = f__30589__auto__.call(null);
(statearr_35806[(6)] = c__30588__auto___35807);

return statearr_35806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___35807,ch))
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
var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__){
return (function (state_35821){
var state_val_35822 = (state_35821[(1)]);
if((state_val_35822 === (1))){
var inst_35816 = cljs.core.async.timeout.call(null,(3000));
var state_35821__$1 = state_35821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35821__$1,(2),inst_35816);
} else {
if((state_val_35822 === (2))){
var inst_35818 = (state_35821[(2)]);
var inst_35819 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35821__$1 = (function (){var statearr_35823 = state_35821;
(statearr_35823[(7)] = inst_35818);

return statearr_35823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35821__$1,inst_35819);
} else {
return null;
}
}
});})(c__30588__auto__))
;
return ((function (switch__30500__auto__,c__30588__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30501__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30501__auto____0 = (function (){
var statearr_35824 = [null,null,null,null,null,null,null,null];
(statearr_35824[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30501__auto__);

(statearr_35824[(1)] = (1));

return statearr_35824;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30501__auto____1 = (function (state_35821){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_35821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e35825){if((e35825 instanceof Object)){
var ex__30504__auto__ = e35825;
var statearr_35826_35828 = state_35821;
(statearr_35826_35828[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35829 = state_35821;
state_35821 = G__35829;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30501__auto__ = function(state_35821){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30501__auto____1.call(this,state_35821);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30501__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30501__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__))
})();
var state__30590__auto__ = (function (){var statearr_35827 = f__30589__auto__.call(null);
(statearr_35827[(6)] = c__30588__auto__);

return statearr_35827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__))
);

return c__30588__auto__;
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
var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35836){
var state_val_35837 = (state_35836[(1)]);
if((state_val_35837 === (1))){
var inst_35830 = cljs.core.async.timeout.call(null,(2000));
var state_35836__$1 = state_35836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35836__$1,(2),inst_35830);
} else {
if((state_val_35837 === (2))){
var inst_35832 = (state_35836[(2)]);
var inst_35833 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_35834 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35833);
var state_35836__$1 = (function (){var statearr_35838 = state_35836;
(statearr_35838[(7)] = inst_35832);

return statearr_35838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35836__$1,inst_35834);
} else {
return null;
}
}
});})(c__30588__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30500__auto__,c__30588__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto____0 = (function (){
var statearr_35839 = [null,null,null,null,null,null,null,null];
(statearr_35839[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto__);

(statearr_35839[(1)] = (1));

return statearr_35839;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto____1 = (function (state_35836){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_35836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e35840){if((e35840 instanceof Object)){
var ex__30504__auto__ = e35840;
var statearr_35841_35843 = state_35836;
(statearr_35841_35843[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35844 = state_35836;
state_35836 = G__35844;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto__ = function(state_35836){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto____1.call(this,state_35836);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30590__auto__ = (function (){var statearr_35842 = f__30589__auto__.call(null);
(statearr_35842[(6)] = c__30588__auto__);

return statearr_35842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__,figwheel_version,temp__4657__auto__))
);

return c__30588__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35845){
var map__35846 = p__35845;
var map__35846__$1 = ((((!((map__35846 == null)))?((((map__35846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35846):map__35846);
var file = cljs.core.get.call(null,map__35846__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35846__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35846__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35848 = "";
var G__35848__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35848),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35848);
var G__35848__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35848__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35848__$1);
if(cljs.core.truth_((function (){var and__27977__auto__ = line;
if(cljs.core.truth_(and__27977__auto__)){
return column;
} else {
return and__27977__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35848__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35848__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35849){
var map__35850 = p__35849;
var map__35850__$1 = ((((!((map__35850 == null)))?((((map__35850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35850):map__35850);
var ed = map__35850__$1;
var formatted_exception = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35850__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35852_35856 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35853_35857 = null;
var count__35854_35858 = (0);
var i__35855_35859 = (0);
while(true){
if((i__35855_35859 < count__35854_35858)){
var msg_35860 = cljs.core._nth.call(null,chunk__35853_35857,i__35855_35859);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35860);

var G__35861 = seq__35852_35856;
var G__35862 = chunk__35853_35857;
var G__35863 = count__35854_35858;
var G__35864 = (i__35855_35859 + (1));
seq__35852_35856 = G__35861;
chunk__35853_35857 = G__35862;
count__35854_35858 = G__35863;
i__35855_35859 = G__35864;
continue;
} else {
var temp__4657__auto___35865 = cljs.core.seq.call(null,seq__35852_35856);
if(temp__4657__auto___35865){
var seq__35852_35866__$1 = temp__4657__auto___35865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35852_35866__$1)){
var c__28828__auto___35867 = cljs.core.chunk_first.call(null,seq__35852_35866__$1);
var G__35868 = cljs.core.chunk_rest.call(null,seq__35852_35866__$1);
var G__35869 = c__28828__auto___35867;
var G__35870 = cljs.core.count.call(null,c__28828__auto___35867);
var G__35871 = (0);
seq__35852_35856 = G__35868;
chunk__35853_35857 = G__35869;
count__35854_35858 = G__35870;
i__35855_35859 = G__35871;
continue;
} else {
var msg_35872 = cljs.core.first.call(null,seq__35852_35866__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35872);

var G__35873 = cljs.core.next.call(null,seq__35852_35866__$1);
var G__35874 = null;
var G__35875 = (0);
var G__35876 = (0);
seq__35852_35856 = G__35873;
chunk__35853_35857 = G__35874;
count__35854_35858 = G__35875;
i__35855_35859 = G__35876;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35877){
var map__35878 = p__35877;
var map__35878__$1 = ((((!((map__35878 == null)))?((((map__35878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35878):map__35878);
var w = map__35878__$1;
var message = cljs.core.get.call(null,map__35878__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__27977__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27977__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27977__auto__;
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
var seq__35880 = cljs.core.seq.call(null,plugins);
var chunk__35881 = null;
var count__35882 = (0);
var i__35883 = (0);
while(true){
if((i__35883 < count__35882)){
var vec__35884 = cljs.core._nth.call(null,chunk__35881,i__35883);
var k = cljs.core.nth.call(null,vec__35884,(0),null);
var plugin = cljs.core.nth.call(null,vec__35884,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35890 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35880,chunk__35881,count__35882,i__35883,pl_35890,vec__35884,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35890.call(null,msg_hist);
});})(seq__35880,chunk__35881,count__35882,i__35883,pl_35890,vec__35884,k,plugin))
);
} else {
}

var G__35891 = seq__35880;
var G__35892 = chunk__35881;
var G__35893 = count__35882;
var G__35894 = (i__35883 + (1));
seq__35880 = G__35891;
chunk__35881 = G__35892;
count__35882 = G__35893;
i__35883 = G__35894;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35880);
if(temp__4657__auto__){
var seq__35880__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35880__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__35880__$1);
var G__35895 = cljs.core.chunk_rest.call(null,seq__35880__$1);
var G__35896 = c__28828__auto__;
var G__35897 = cljs.core.count.call(null,c__28828__auto__);
var G__35898 = (0);
seq__35880 = G__35895;
chunk__35881 = G__35896;
count__35882 = G__35897;
i__35883 = G__35898;
continue;
} else {
var vec__35887 = cljs.core.first.call(null,seq__35880__$1);
var k = cljs.core.nth.call(null,vec__35887,(0),null);
var plugin = cljs.core.nth.call(null,vec__35887,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35899 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35880,chunk__35881,count__35882,i__35883,pl_35899,vec__35887,k,plugin,seq__35880__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35899.call(null,msg_hist);
});})(seq__35880,chunk__35881,count__35882,i__35883,pl_35899,vec__35887,k,plugin,seq__35880__$1,temp__4657__auto__))
);
} else {
}

var G__35900 = cljs.core.next.call(null,seq__35880__$1);
var G__35901 = null;
var G__35902 = (0);
var G__35903 = (0);
seq__35880 = G__35900;
chunk__35881 = G__35901;
count__35882 = G__35902;
i__35883 = G__35903;
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
var G__35905 = arguments.length;
switch (G__35905) {
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

var seq__35906_35911 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35907_35912 = null;
var count__35908_35913 = (0);
var i__35909_35914 = (0);
while(true){
if((i__35909_35914 < count__35908_35913)){
var msg_35915 = cljs.core._nth.call(null,chunk__35907_35912,i__35909_35914);
figwheel.client.socket.handle_incoming_message.call(null,msg_35915);

var G__35916 = seq__35906_35911;
var G__35917 = chunk__35907_35912;
var G__35918 = count__35908_35913;
var G__35919 = (i__35909_35914 + (1));
seq__35906_35911 = G__35916;
chunk__35907_35912 = G__35917;
count__35908_35913 = G__35918;
i__35909_35914 = G__35919;
continue;
} else {
var temp__4657__auto___35920 = cljs.core.seq.call(null,seq__35906_35911);
if(temp__4657__auto___35920){
var seq__35906_35921__$1 = temp__4657__auto___35920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35906_35921__$1)){
var c__28828__auto___35922 = cljs.core.chunk_first.call(null,seq__35906_35921__$1);
var G__35923 = cljs.core.chunk_rest.call(null,seq__35906_35921__$1);
var G__35924 = c__28828__auto___35922;
var G__35925 = cljs.core.count.call(null,c__28828__auto___35922);
var G__35926 = (0);
seq__35906_35911 = G__35923;
chunk__35907_35912 = G__35924;
count__35908_35913 = G__35925;
i__35909_35914 = G__35926;
continue;
} else {
var msg_35927 = cljs.core.first.call(null,seq__35906_35921__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35927);

var G__35928 = cljs.core.next.call(null,seq__35906_35921__$1);
var G__35929 = null;
var G__35930 = (0);
var G__35931 = (0);
seq__35906_35911 = G__35928;
chunk__35907_35912 = G__35929;
count__35908_35913 = G__35930;
i__35909_35914 = G__35931;
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
var args__29165__auto__ = [];
var len__29158__auto___35936 = arguments.length;
var i__29159__auto___35937 = (0);
while(true){
if((i__29159__auto___35937 < len__29158__auto___35936)){
args__29165__auto__.push((arguments[i__29159__auto___35937]));

var G__35938 = (i__29159__auto___35937 + (1));
i__29159__auto___35937 = G__35938;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35933){
var map__35934 = p__35933;
var map__35934__$1 = ((((!((map__35934 == null)))?((((map__35934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35934):map__35934);
var opts = map__35934__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35932){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35932));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35939){if((e35939 instanceof Error)){
var e = e35939;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35939;

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
return (function (p__35940){
var map__35941 = p__35940;
var map__35941__$1 = ((((!((map__35941 == null)))?((((map__35941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35941):map__35941);
var msg_name = cljs.core.get.call(null,map__35941__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1509593238876
