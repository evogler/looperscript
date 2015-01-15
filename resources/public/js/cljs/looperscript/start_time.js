// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.looperscript.start_time');
goog.require('cljs.core');
goog.require('cljs.looperscript.audio');
goog.require('cljs.looperscript.audio');
cljs.looperscript.start_time.current_start_time = cljs.core.atom.call(null,null);
cljs.looperscript.start_time.get_current_start_time = (function get_current_start_time(){return cljs.core.deref.call(null,cljs.looperscript.start_time.current_start_time);
});
cljs.looperscript.start_time.reset_clock_BANG_ = (function() {
var reset_clock_BANG_ = null;
var reset_clock_BANG___0 = (function (){return reset_clock_BANG_.call(null,null);
});
var reset_clock_BANG___1 = (function (time){return cljs.core.reset_BANG_.call(null,cljs.looperscript.start_time.current_start_time,time);
});
reset_clock_BANG_ = function(time){
switch(arguments.length){
case 0:
return reset_clock_BANG___0.call(this);
case 1:
return reset_clock_BANG___1.call(this,time);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reset_clock_BANG_.cljs$core$IFn$_invoke$arity$0 = reset_clock_BANG___0;
reset_clock_BANG_.cljs$core$IFn$_invoke$arity$1 = reset_clock_BANG___1;
return reset_clock_BANG_;
})()
;
cljs.looperscript.start_time.now = (function now(){return (cljs.looperscript.audio.ctx["currentTime"]);
});
